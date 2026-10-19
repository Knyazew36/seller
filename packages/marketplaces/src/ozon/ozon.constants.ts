import type { RateLimit } from '../shared'

export const OZON_MARKETPLACE = 'ozon'
export const OZON_LOG_EMOJI = '🔵'
export const OZON_LOG_CONTEXT = `${OZON_LOG_EMOJI} Ozon`

export const OZON_SELLER_URL = 'https://api-seller.ozon.ru'
export const OZON_PERFORMANCE_URL = 'https://api-performance.ozon.ru'
export const OZON_PERFORMANCE_TOKEN_URL = `${OZON_PERFORMANCE_URL}/api/client/token`

/** В спеке нет общего лимита — берём с запасом: 20 запросов в секунду на Client-Id [решение по умолчанию] */
export const OZON_SELLER_DEFAULT_LIMIT: RateLimit = { intervalMs: 50, burst: 20 }

/** Методы Seller API с отдельным лимитом из описания в спеке */
export const OZON_SELLER_METHOD_LIMITS: Record<string, RateLimit> = {
  '/v1/product/placement-zone/info': { intervalMs: 100, burst: 10 },
}

export const OZON_PERFORMANCE_DEFAULT_LIMIT: RateLimit = { intervalMs: 100, burst: 5 }

/** Последний сегмент пути, по которому метод считается чтением */
const READ_SEGMENT =
  /^(list|info|get|search|count|status|summary|tree|values|limit|limits|roles|data|stocks|prices|attributes|statistics)$/i

export function ozonIsReadMethod(method: string, path: string): boolean {
  if (method === 'GET') return true
  const last =
    path
      .split('/')
      .filter(s => s && !/^v\d+$/.test(s) && !s.startsWith('{'))
      .pop() ?? ''
  return READ_SEGMENT.test(last)
}
