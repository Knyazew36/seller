import createClient, { type Client } from 'openapi-fetch'

import { MarketplaceApiError } from './errors'
import { RateLimiter, sleep } from './rate-limiter'
import type { MarketplaceLogger, RateLimit, RetryOptions } from './types'

/** Что клиенту нужно знать об операции, чтобы правильно её отправить */
export interface OperationInfo {
  /** Хост операции, если он отличается от baseUrl клиента (WB: одна спека — несколько хостов) */
  host?: string
  /** Ключ корзины лимита: запросы с одинаковым ключом делят один лимит */
  limitKey: string
  limit: RateLimit
  /** Можно ли повторить при 5xx и сетевой ошибке. При 429 повторяем всегда: запрос не выполнялся. */
  idempotent: boolean
}

export interface ApiClientOptions {
  marketplace: string
  section: string
  baseUrl: string
  operation: (method: string, schemaPath: string) => OperationInfo
  /** Ставит заголовки авторизации. Вызывается на каждую попытку — OAuth-токен может обновиться между ними. */
  authorize: (headers: Headers) => void | Promise<void>
  /** 401 от площадки: сбросить кэш токена. Если задан — запрос повторится один раз с новым токеном. */
  onUnauthorized?: () => void | Promise<void>
  limiter: RateLimiter
  logger: MarketplaceLogger
  retry: RetryOptions
  fetch?: (input: Request) => Promise<Response>
}

interface ResponseContext {
  marketplace: string
  section: string
  method: string
  path: string
}

// Контекст ответа нужен unwrap(), чтобы ошибка называла площадку, раздел и метод
const responseContext = new WeakMap<Response, ResponseContext>()

/**
 * Типизированный клиент раздела API поверх openapi-fetch: подмена хоста, лимиты, ретраи, логирование.
 * Вызовы — по пути из спеки: `client.GET('/api/v1/supplier/sales', { params: { query } })`.
 */
export function createApiClient<Paths extends {}>(options: ApiClientOptions): Client<Paths> {
  const pending = new WeakMap<Request, { info: OperationInfo; schemaPath: string }>()

  const client = createClient<Paths>({
    baseUrl: options.baseUrl,
    fetch: request => send(options, request, pending.get(request)),
  })

  client.use({
    async onRequest({ request, schemaPath }) {
      const info = options.operation(request.method, schemaPath)
      const prepared = info.host ? await rehost(request, info.host) : request
      pending.set(prepared, { info, schemaPath })
      return prepared
    },
  })

  return client
}

/** Достаёт `data` или бросает MarketplaceApiError — для кода, которому не нужен ручной разбор `error` */
export function unwrap<R extends { data?: unknown; error?: unknown; response: Response }>(
  result: R,
): Exclude<R['data'], undefined> {
  if (result.response.ok) return result.data as Exclude<R['data'], undefined>
  const ctx = responseContext.get(result.response) ?? {
    marketplace: 'unknown',
    section: 'unknown',
    method: '',
    path: result.response.url ? new URL(result.response.url).pathname : '',
  }
  throw new MarketplaceApiError(
    ctx.marketplace,
    ctx.section,
    ctx.method,
    ctx.path,
    result.response.status,
    result.error,
    retryAfterMs(result.response),
  )
}

// ── Отправка ───────────────────────────────────────────────────────────────

async function send(
  options: ApiClientOptions,
  original: Request,
  meta: { info: OperationInfo; schemaPath: string } | undefined,
): Promise<Response> {
  const { marketplace, section, limiter, logger, retry } = options
  const method = original.method
  const path = meta?.schemaPath ?? new URL(original.url).pathname
  const info = meta?.info ?? options.operation(method, path)
  const tag = `[${section}] ${method} ${path}`
  let reauthorized = false

  for (let attempt = 0; ; attempt++) {
    await limiter.acquire(info.limitKey, info.limit)
    const request = original.clone()
    await options.authorize(request.headers)
    const startedAt = Date.now()

    let response: Response
    try {
      response = await (options.fetch ?? fetch)(request)
    } catch (error) {
      const err = error as Error
      if (info.idempotent && attempt < retry.attempts) {
        const wait = backoff(retry, attempt)
        logger.warn(
          `${tag}: сетевая ошибка «${err.message}», повтор через ${wait} мс (${attempt + 1}/${retry.attempts})`,
        )
        await sleep(wait)
        continue
      }
      logger.error(`${tag}: сетевая ошибка «${err.message}»`, err.stack)
      throw error
    }

    const ms = Date.now() - startedAt
    responseContext.set(response, { marketplace, section, method, path })

    if (response.status === 401 && options.onUnauthorized && !reauthorized) {
      reauthorized = true
      logger.warn(`${tag}: 401, обновляем токен и повторяем`)
      await options.onUnauthorized()
      // Повтор с новым токеном не считается попыткой
      attempt--
      continue
    }

    if (response.status === 429) {
      const wait = retryAfterMs(response) ?? backoff(retry, attempt)
      limiter.block(info.limitKey, info.limit, wait)
      if (attempt < retry.attempts) {
        logger.warn(`${tag}: 429, повтор через ${wait} мс (${attempt + 1}/${retry.attempts})`)
        continue
      }
      logger.warn(`${tag}: 429, попытки исчерпаны`)
      return response
    }

    if (response.status >= 500 && info.idempotent && attempt < retry.attempts) {
      const wait = backoff(retry, attempt)
      logger.warn(`${tag}: ${response.status}, повтор через ${wait} мс (${attempt + 1}/${retry.attempts})`)
      await sleep(wait)
      continue
    }

    if (response.status >= 500) logger.error(`${tag}: ${response.status} за ${ms} мс`)
    else if (response.status >= 400) logger.warn(`${tag}: ${response.status} за ${ms} мс`)
    else logger.debug(`${tag}: ${response.status} за ${ms} мс`)
    return response
  }
}

/** Переносит запрос на другой хост, сохраняя путь, query, заголовки и тело */
async function rehost(request: Request, host: string): Promise<Request> {
  const from = new URL(request.url)
  const to = new URL(host)
  if (from.origin === to.origin) return request
  const prefix = to.pathname.replace(/\/+$/, '')
  const url = `${to.origin}${prefix}${from.pathname}${from.search}`
  const hasBody = request.method !== 'GET' && request.method !== 'HEAD'
  return new Request(url, {
    method: request.method,
    headers: request.headers,
    body: hasBody ? await request.arrayBuffer() : undefined,
    signal: request.signal,
    redirect: request.redirect,
  })
}

/** Сколько ждать по заголовкам ответа: WB — X-Ratelimit-Retry, остальные — Retry-After */
function retryAfterMs(response: Response): number | undefined {
  const wb = Number(response.headers.get('x-ratelimit-retry'))
  if (Number.isFinite(wb) && wb > 0) return wb * 1000
  const header = response.headers.get('retry-after')
  if (!header) return undefined
  const seconds = Number(header)
  if (Number.isFinite(seconds)) return seconds * 1000
  const date = Date.parse(header)
  return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now())
}

function backoff(retry: RetryOptions, attempt: number): number {
  const exp = retry.baseDelayMs * 2 ** attempt
  // Разброс, чтобы параллельные воркеры не повторяли запросы одновременно
  return Math.min(retry.maxDelayMs, Math.round(exp * (0.75 + Math.random() * 0.5)))
}
