import type { MarketplaceLogger, RateLimit, RateLimiter, RetryOptions } from '../shared'

/** Метаданные операции из спеки WB (генерируются в generated/operations.ts) */
export interface WbOperationMeta {
  /** Хост прода */
  host: string
  /** Хост песочницы, если у метода она есть */
  sandboxHost?: string
  /** Категория токена (x-category спеки): content, marketplace, statistics … */
  category?: string
  /** Метод только читает данные — можно вызывать токеном «только на чтение» и безопасно повторять */
  readonly: boolean
  limit?: RateLimit
}

export interface WbCredentials {
  /** Токен из кабинета WB («Настройки» → «Доступ к API») */
  token: string
  /** Слать запросы в песочницу. По умолчанию — по полю `t` токена (тестовый токен). */
  sandbox?: boolean
}

export interface WbClientFactoryOptions {
  logger?: MarketplaceLogger
  retry?: Partial<RetryOptions>
  /** Лимит для методов, у которых в спеке не нашлось таблицы лимитов */
  defaultLimit?: RateLimit
  /** Общий лимитер, если несколько фабрик должны делить лимиты одного токена */
  limiter?: RateLimiter
  fetch?: (input: Request) => Promise<Response>
}
