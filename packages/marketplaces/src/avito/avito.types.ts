import type { MarketplaceLogger, RateLimit, RateLimiter, RetryOptions } from '../shared'

/**
 * Как клиент получает токен Avito:
 * - client_credentials — ключи своего аккаунта (client_id/secret из настроек API Avito);
 * - готовый токен или функция, которая его отдаёт, — когда проект сам ведёт OAuth authorization_code
 *   (доступ к чужим аккаунтам) и обновляет токены по refresh_token.
 */
export type AvitoCredentials =
  | { clientId: string; clientSecret: string; scope?: string }
  | { accessToken: string }
  | {
      getAccessToken: () => Promise<string>
      /** Площадка ответила 401 — проекту пора обновить токен; после вызова запрос повторится один раз */
      onUnauthorized?: () => void | Promise<void>
    }

export interface AvitoClientFactoryOptions {
  logger?: MarketplaceLogger
  retry?: Partial<RetryOptions>
  /** Лимит на аккаунт по умолчанию */
  defaultLimit?: RateLimit
  /** Лимиты отдельных разделов: ключ — раздел клиента (messenger, item …) */
  sectionLimits?: Partial<Record<string, RateLimit>>
  limiter?: RateLimiter
  fetch?: (input: Request) => Promise<Response>
}
