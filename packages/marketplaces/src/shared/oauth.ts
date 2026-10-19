import { credentialKey } from './credential-key'
import { MarketplaceApiError } from './errors'

export interface ClientCredentialsOptions {
  marketplace: string
  tokenUrl: string
  clientId: string
  clientSecret: string
  /** Avito ждёт form-urlencoded, Ozon Performance — JSON */
  format: 'form' | 'json'
  scope?: string
  fetch?: (input: Request) => Promise<Response>
}

interface CachedToken {
  value: string
  expiresAt: number
}

/** Запас до истечения: токен обновляем заранее, чтобы запрос не ушёл с протухшим */
const EXPIRY_MARGIN_MS = 60_000

/**
 * OAuth 2 client_credentials с кэшем. Один провайдер на пару tokenUrl+clientId,
 * параллельные запросы ждут один и тот же выпуск токена, а не выпускают по своему.
 */
export class ClientCredentialsTokenProvider {
  private cached?: CachedToken
  private pending?: Promise<string>

  constructor(private readonly options: ClientCredentialsOptions) {}

  public async getToken(): Promise<string> {
    if (this.cached && this.cached.expiresAt > Date.now()) return this.cached.value
    this.pending ??= this.issue().finally(() => (this.pending = undefined))
    return this.pending
  }

  /** Площадка ответила 401 — токен отозван раньше срока, следующий запрос выпустит новый */
  public invalidate(): void {
    this.cached = undefined
  }

  private async issue(): Promise<string> {
    const { tokenUrl, clientId, clientSecret, format, scope } = this.options
    const fields: Record<string, string> = {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      ...(scope ? { scope } : {}),
    }
    const request = new Request(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': format === 'json' ? 'application/json' : 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: format === 'json' ? JSON.stringify(fields) : new URLSearchParams(fields).toString(),
    })
    const response = await (this.options.fetch ?? fetch)(request)
    const body = (await response.json().catch(() => undefined)) as
      { access_token?: string; expires_in?: number } | undefined
    if (!response.ok || !body?.access_token) {
      // Avito на неверные ключи отвечает 200 с полем error — для проекта это та же ошибка авторизации
      const status = response.ok ? 401 : response.status
      throw new MarketplaceApiError(this.options.marketplace, 'auth', 'POST', new URL(tokenUrl).pathname, status, body)
    }
    const ttlMs = (body.expires_in ?? 1800) * 1000
    this.cached = { value: body.access_token, expiresAt: Date.now() + Math.max(ttlMs - EXPIRY_MARGIN_MS, ttlMs / 2) }
    return body.access_token
  }
}

/** Провайдеры живут между вызовами фабрики: иначе каждый create() выпускал бы новый токен */
export class TokenProviderPool {
  private readonly providers = new Map<string, ClientCredentialsTokenProvider>()

  public get(options: ClientCredentialsOptions): ClientCredentialsTokenProvider {
    // Секрет в ключе: после смены секрета нужен новый провайдер, а не кэш со старым
    const key = `${options.tokenUrl}|${options.clientId}|${credentialKey(options.clientSecret)}|${options.scope ?? ''}`
    let provider = this.providers.get(key)
    if (!provider) {
      provider = new ClientCredentialsTokenProvider(options)
      this.providers.set(key, provider)
    }
    return provider
  }
}
