import type { Client } from 'openapi-fetch'

import {
  createApiClient,
  credentialKey,
  DEFAULT_RETRY,
  RateLimiter,
  type RetryOptions,
  silentLogger,
  TokenProviderPool,
  unwrap,
} from '../shared'

import type { performancePaths, sellerPaths } from './generated'
import {
  OZON_MARKETPLACE,
  OZON_PERFORMANCE_DEFAULT_LIMIT,
  OZON_PERFORMANCE_TOKEN_URL,
  OZON_PERFORMANCE_URL,
  OZON_SELLER_DEFAULT_LIMIT,
  OZON_SELLER_METHOD_LIMITS,
  OZON_SELLER_URL,
  ozonIsReadMethod,
} from './ozon.constants'
import type { OzonClientFactoryOptions, OzonPerformanceCredentials, OzonSellerCredentials } from './ozon.types'

export type OzonSellerClient = Client<sellerPaths>
export type OzonPerformanceClient = Client<performancePaths>

export interface OzonKeyInfo {
  expiresAt?: Date
  roles: { name: string; methods: string[] }[]
}

/**
 * Фабрика клиентов Ozon: Seller API (весь кабинет продавца) и Performance API (реклама).
 * Одна на приложение, клиент — на кабинет. Ключи приходят от проекта.
 */
export class OzonClientFactory {
  private readonly limiter: RateLimiter
  private readonly retry: RetryOptions
  private readonly tokens = new TokenProviderPool()

  constructor(private readonly options: OzonClientFactoryOptions = {}) {
    this.limiter = options.limiter ?? new RateLimiter()
    this.retry = { ...DEFAULT_RETRY, ...options.retry }
  }

  public createSeller(credentials: OzonSellerCredentials): OzonSellerClient {
    const clientId = credentials.clientId.trim()
    const apiKey = credentials.apiKey.trim()
    const isIdempotent = this.options.isIdempotent ?? ozonIsReadMethod
    const methodLimits = { ...OZON_SELLER_METHOD_LIMITS, ...this.options.sellerMethodLimits }
    const defaultLimit = this.options.sellerLimit ?? OZON_SELLER_DEFAULT_LIMIT
    // Лимит у Ozon — на кабинет (Client-Id), а не на ключ: у одного кабинета может быть несколько ключей
    const key = `ozon-seller|${clientId}`

    return createApiClient<sellerPaths>({
      marketplace: OZON_MARKETPLACE,
      section: 'seller',
      baseUrl: OZON_SELLER_URL,
      operation: (method, path) => {
        const own = methodLimits[path]
        return {
          limitKey: own ? `${key}|${path}` : key,
          limit: own ?? defaultLimit,
          idempotent: isIdempotent(method, path),
        }
      },
      authorize: headers => {
        headers.set('Client-Id', clientId)
        headers.set('Api-Key', apiKey)
      },
      limiter: this.limiter,
      logger: this.options.logger ?? silentLogger,
      retry: this.retry,
      fetch: this.options.fetch,
    })
  }

  public createPerformance(credentials: OzonPerformanceCredentials): OzonPerformanceClient {
    const provider = this.tokens.get({
      marketplace: OZON_MARKETPLACE,
      tokenUrl: OZON_PERFORMANCE_TOKEN_URL,
      clientId: credentials.clientId.trim(),
      clientSecret: credentials.clientSecret.trim(),
      format: 'json',
      fetch: this.options.fetch,
    })
    const isIdempotent = this.options.isIdempotent ?? ozonIsReadMethod
    const key = `ozon-performance|${credentials.clientId.trim()}`

    return createApiClient<performancePaths>({
      marketplace: OZON_MARKETPLACE,
      section: 'performance',
      baseUrl: OZON_PERFORMANCE_URL,
      operation: (method, path) => ({
        limitKey: key,
        limit: this.options.performanceLimit ?? OZON_PERFORMANCE_DEFAULT_LIMIT,
        idempotent: isIdempotent(method, path),
      }),
      authorize: async headers => headers.set('Authorization', `Bearer ${await provider.getToken()}`),
      onUnauthorized: () => provider.invalidate(),
      limiter: this.limiter,
      logger: this.options.logger ?? silentLogger,
      retry: this.retry,
      fetch: this.options.fetch,
    })
  }

  /**
   * Проверка ключа Seller API: действует ли он, когда истекает и какие роли выданы.
   * Неверный ключ → MarketplaceApiError с isAuthError.
   */
  public async checkSellerKey(credentials: OzonSellerCredentials): Promise<OzonKeyInfo> {
    const data = unwrap(await this.createSeller(credentials).POST('/v1/roles'))
    return {
      expiresAt: data.expires_at ? new Date(data.expires_at) : undefined,
      roles: (data.roles ?? []).map(r => ({ name: r.name ?? '', methods: r.methods ?? [] })),
    }
  }

  /** Отпечаток ключа — чтобы проект мог понять, что ключ сменился, не храня его в открытом виде рядом с кэшами */
  public static fingerprint(credentials: OzonSellerCredentials): string {
    return credentialKey(`${credentials.clientId}:${credentials.apiKey}`)
  }
}
