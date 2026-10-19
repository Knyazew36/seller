import type { RateLimit } from '../shared'

export const AVITO_MARKETPLACE = 'avito'
export const AVITO_LOG_EMOJI = '🟢'
export const AVITO_LOG_CONTEXT = `${AVITO_LOG_EMOJI} Avito`

export const AVITO_TOKEN_URL = 'https://api.avito.ru/token'
/** Автотека живёт на своём хосте и выдаёт свои токены */
export const AUTOTEKA_TOKEN_URL = 'https://pro.autoteka.ru/token'

/** В спеках общего лимита нет — 5 запросов в секунду на аккаунт [решение по умолчанию] */
export const AVITO_DEFAULT_LIMIT: RateLimit = { intervalMs: 200, burst: 5 }
