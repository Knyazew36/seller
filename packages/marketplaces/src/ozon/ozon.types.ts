import type { MarketplaceLogger, RateLimit, RateLimiter, RetryOptions } from '../shared'

/** Ключ Seller API: «Настройки» → «Seller API» в кабинете Ozon */
export interface OzonSellerCredentials {
  clientId: string
  apiKey: string
}

/** Ключ Performance API (реклама): создаётся в рекламном кабинете Ozon */
export interface OzonPerformanceCredentials {
  clientId: string
  clientSecret: string
}

export interface OzonClientFactoryOptions {
  logger?: MarketplaceLogger
  retry?: Partial<RetryOptions>
  /** Лимит Seller API на Client-Id по умолчанию */
  sellerLimit?: RateLimit
  /** Лимиты отдельных методов Seller API: ключ — путь из спеки */
  sellerMethodLimits?: Record<string, RateLimit>
  /** Лимит Performance API на Client-Id */
  performanceLimit?: RateLimit
  /**
   * Можно ли повторять метод при 5xx и сетевой ошибке. В Ozon почти все методы — POST,
   * поэтому по умолчанию повторяем только явные чтения (путь кончается на list, info, get …).
   */
  isIdempotent?: (method: string, path: string) => boolean
  limiter?: RateLimiter
  fetch?: (input: Request) => Promise<Response>
}
