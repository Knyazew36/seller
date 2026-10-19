import type { RateLimit } from '../shared'

export const WB_MARKETPLACE = 'wildberries'
export const WB_LOG_EMOJI = '🟣'
export const WB_LOG_CONTEXT = `${WB_LOG_EMOJI} Wildberries`

/** Для методов без таблицы лимита в спеке: самый строгий из частых лимитов WB — 1 запрос в секунду */
export const WB_DEFAULT_LIMIT: RateLimit = { intervalMs: 1000, burst: 1 }
