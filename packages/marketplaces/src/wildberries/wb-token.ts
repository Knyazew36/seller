// Разбор токена WB без запроса к API: токен — JWT, в payload лежат тип, категории и срок.
// Подпись не проверяем — это делает WB; разбор нужен, чтобы заранее сказать продавцу, каких прав не хватает.

export type WbTokenType = 'basic' | 'test' | 'personal' | 'service'

/** Категории токена. Ключ совпадает с x-category методов в спеке. */
export type WbTokenCategory =
  | 'content'
  | 'contentanalytics'
  | 'discountsandprices'
  | 'marketplace'
  | 'statistics'
  | 'advert'
  | 'questionsandfeedback'
  | 'buyerchat'
  | 'supplies'
  | 'returns'
  | 'documents'
  | 'finance'
  | 'usermanagement'

/** Позиции битов поля `s` (документация WB, «Как устроен токен») */
export const WB_TOKEN_CATEGORY_BITS: Record<WbTokenCategory, number> = {
  content: 1,
  contentanalytics: 2,
  discountsandprices: 3,
  marketplace: 4,
  statistics: 5,
  advert: 6,
  questionsandfeedback: 7,
  buyerchat: 9,
  supplies: 10,
  returns: 11,
  documents: 12,
  finance: 13,
  usermanagement: 16,
}

/** Названия категорий как в кабинете WB — для текстов «не хватает категории …» */
export const WB_TOKEN_CATEGORY_TITLES: Record<WbTokenCategory, string> = {
  content: 'Контент',
  contentanalytics: 'Аналитика',
  discountsandprices: 'Цены и скидки',
  marketplace: 'Маркетплейс',
  statistics: 'Статистика',
  advert: 'Продвижение',
  questionsandfeedback: 'Вопросы и отзывы',
  buyerchat: 'Чат с покупателями',
  supplies: 'Поставки',
  returns: 'Возвраты покупателями',
  documents: 'Документы',
  finance: 'Финансы',
  usermanagement: 'Пользователи',
}

const READ_ONLY_BIT = 30

/** Категория методов «Общее» (ping, информация о продавце) доступна токену любой категории */
const ANY_CATEGORY = 'commonapi'

export interface WbTokenInfo {
  id?: string
  /** ID продавца на WB */
  sellerId?: string
  type: WbTokenType | 'unknown'
  /** ID сервиса для сервисного токена */
  serviceId?: string
  expiresAt?: Date
  expired: boolean
  readOnly: boolean
  /** Тестовый токен — работает только с песочницей */
  sandbox: boolean
  categories: WbTokenCategory[]
}

const TYPE_BY_ACC: Record<number, WbTokenType> = { 1: 'basic', 2: 'test', 3: 'personal', 4: 'service' }

/** Разбирает токен. Не JWT или битый payload → ошибка с понятным текстом. */
export function decodeWbToken(token: string): WbTokenInfo {
  const parts = token.trim().split('.')
  if (parts.length !== 3) throw new Error('Токен WB должен быть JWT из трёх частей, разделённых точкой')
  let payload: Record<string, unknown>
  try {
    payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'))
  } catch {
    throw new Error('Не удалось прочитать токен WB: повреждён payload')
  }

  const mask = Number(payload.s ?? 0)
  // Битовые операции JS 32-битные со знаком — считаем арифметикой, чтобы не зависеть от разрядности
  const hasBit = (bit: number) => Math.floor(mask / 2 ** bit) % 2 === 1
  const exp = typeof payload.exp === 'number' ? new Date(payload.exp * 1000) : undefined
  const forField = typeof payload.for === 'string' ? payload.for : undefined

  return {
    id: typeof payload.id === 'string' ? payload.id : undefined,
    sellerId: typeof payload.sid === 'string' ? payload.sid : undefined,
    type: TYPE_BY_ACC[Number(payload.acc)] ?? 'unknown',
    serviceId: forField?.startsWith('asid:') ? forField.slice(5) : undefined,
    expiresAt: exp,
    expired: exp ? exp.getTime() <= Date.now() : false,
    readOnly: hasBit(READ_ONLY_BIT),
    sandbox: payload.t === true,
    categories: (Object.keys(WB_TOKEN_CATEGORY_BITS) as WbTokenCategory[]).filter(c =>
      hasBit(WB_TOKEN_CATEGORY_BITS[c]),
    ),
  }
}

/** Каких категорий не хватает токену для набора нужных категорий */
export function missingWbCategories(info: WbTokenInfo, required: WbTokenCategory[]): WbTokenCategory[] {
  return required.filter(c => !info.categories.includes(c))
}

/** Можно ли вызвать метод с такой категорией и признаком «только чтение» этим токеном */
export function wbTokenAllows(info: WbTokenInfo, category: string | undefined, readonlyMethod: boolean): boolean {
  if (info.expired) return false
  if (info.readOnly && !readonlyMethod) return false
  if (!category || category === ANY_CATEGORY) return true
  return info.categories.includes(category as WbTokenCategory)
}
