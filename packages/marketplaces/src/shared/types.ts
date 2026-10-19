/** Логгер, который передаёт проект. Подходит Nest `Logger` и любой объект с этими методами. */
export interface MarketplaceLogger {
  debug(message: string): void
  log(message: string): void
  warn(message: string): void
  error(message: string, stack?: string): void
}

/** Лимит запросов в форме площадок: пауза между запросами и сколько можно отправить подряд без пауз */
export interface RateLimit {
  intervalMs: number
  burst: number
}

export interface RetryOptions {
  /** Сколько раз повторить запрос после первой попытки */
  attempts: number
  /** Базовая пауза для экспоненциального ожидания, если площадка не сказала, сколько ждать */
  baseDelayMs: number
  /** Верхняя граница одной паузы */
  maxDelayMs: number
}

export const DEFAULT_RETRY: RetryOptions = { attempts: 3, baseDelayMs: 1000, maxDelayMs: 60_000 }

/** Логгер по умолчанию — ничего не пишет: пакет не навязывает вывод */
export const silentLogger: MarketplaceLogger = {
  debug: () => {},
  log: () => {},
  warn: () => {},
  error: () => {},
}
