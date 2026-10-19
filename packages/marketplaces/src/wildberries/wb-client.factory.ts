import type { Client } from 'openapi-fetch'

import {
  createApiClient,
  credentialKey,
  DEFAULT_RETRY,
  type OperationInfo,
  RateLimiter,
  type RetryOptions,
  silentLogger,
} from '../shared'

import {
  analyticsOperations,
  type analyticsPaths,
  communicationsOperations,
  type communicationsPaths,
  dbsOperations,
  type dbsPaths,
  financesOperations,
  type financesPaths,
  generalOperations,
  type generalPaths,
  inStorePickupOperations,
  type inStorePickupPaths,
  itemsOperations,
  type itemsPaths,
  ordersDbwOperations,
  type ordersDbwPaths,
  ordersFbsOperations,
  type ordersFbsPaths,
  ordersFbwOperations,
  type ordersFbwPaths,
  promotionOperations,
  type promotionPaths,
  ratesOperations,
  type ratesPaths,
  reportsOperations,
  type reportsPaths,
} from './generated'
import { decodeWbToken } from './wb-token'
import { WB_DEFAULT_LIMIT, WB_MARKETPLACE } from './wb.constants'
import type { WbClientFactoryOptions, WbCredentials, WbOperationMeta } from './wb.types'

/** Клиент WB: по разделу документации на каждый ключ. Вызов — путь из спеки раздела. */
export interface WbClient {
  /** Общее: ping, информация о продавце, новости, пользователи */
  general: Client<generalPaths>
  /** Работа с товарами: карточки, медиа, цены и скидки, склады и остатки продавца */
  items: Client<itemsPaths>
  /** Заказы FBS */
  ordersFbs: Client<ordersFbsPaths>
  /** Заказы DBW */
  ordersDbw: Client<ordersDbwPaths>
  /** Заказы DBS */
  ordersDbs: Client<dbsPaths>
  /** Самовывоз */
  inStorePickup: Client<inStorePickupPaths>
  /** Поставки FBW, коэффициенты приёмки */
  ordersFbw: Client<ordersFbwPaths>
  /** Продвижение: кампании, ставки, статистика */
  promotion: Client<promotionPaths>
  /** Отзывы, вопросы, чат с покупателями, возвраты */
  communications: Client<communicationsPaths>
  /** Тарифы: комиссии, логистика, хранение, приёмка */
  tariffs: Client<ratesPaths>
  /** Аналитика: воронка, поисковые запросы, отчёты */
  analytics: Client<analyticsPaths>
  /** Отчёты: статистика продаж и заказов, остатки, удержания, платная приёмка */
  reports: Client<reportsPaths>
  /** Финансы: баланс, финансовые отчёты, документы */
  finances: Client<financesPaths>
}

const SECTIONS: Record<keyof WbClient, Record<string, WbOperationMeta>> = {
  general: generalOperations,
  items: itemsOperations,
  ordersFbs: ordersFbsOperations,
  ordersDbw: ordersDbwOperations,
  ordersDbs: dbsOperations,
  inStorePickup: inStorePickupOperations,
  ordersFbw: ordersFbwOperations,
  promotion: promotionOperations,
  communications: communicationsOperations,
  tariffs: ratesOperations,
  analytics: analyticsOperations,
  reports: reportsOperations,
  finances: financesOperations,
}

/**
 * Фабрика клиентов WB. Одна на приложение (держит лимитер), клиент — на кабинет продавца.
 * Токен приходит от проекта: хранение и шифрование — не забота пакета.
 */
export class WbClientFactory {
  private readonly limiter: RateLimiter
  private readonly retry: RetryOptions

  constructor(private readonly options: WbClientFactoryOptions = {}) {
    this.limiter = options.limiter ?? new RateLimiter()
    this.retry = { ...DEFAULT_RETRY, ...options.retry }
  }

  public create(credentials: WbCredentials): WbClient {
    const token = credentials.token.trim()
    const sandbox = credentials.sandbox ?? this.isTestToken(token)
    const tokenKey = credentialKey(token)

    const entries = (Object.keys(SECTIONS) as (keyof WbClient)[]).map(section => {
      const operations = SECTIONS[section]
      const anyOp = Object.values(operations)[0]
      const client = createApiClient({
        marketplace: WB_MARKETPLACE,
        section,
        baseUrl: (sandbox ? anyOp.sandboxHost : undefined) ?? anyOp.host,
        operation: (method, schemaPath) => this.operation(operations, method, schemaPath, tokenKey, sandbox),
        authorize: headers => headers.set('Authorization', token),
        limiter: this.limiter,
        logger: this.options.logger ?? silentLogger,
        retry: this.retry,
        fetch: this.options.fetch,
      })
      return [section, client] as const
    })

    return Object.fromEntries(entries) as unknown as WbClient
  }

  /** Метаданные метода: категория токена, хост, лимит — например, чтобы проверить права до вызова */
  public static describe(section: keyof WbClient, method: string, path: string): WbOperationMeta | undefined {
    return SECTIONS[section][`${method.toUpperCase()} ${path}`]
  }

  private operation(
    operations: Record<string, WbOperationMeta>,
    method: string,
    schemaPath: string,
    tokenKey: string,
    sandbox: boolean,
  ): OperationInfo {
    const meta = operations[`${method} ${schemaPath}`]
    const limit = meta?.limit ?? this.options.defaultLimit ?? WB_DEFAULT_LIMIT
    return {
      host: sandbox ? (meta?.sandboxHost ?? meta?.host) : meta?.host,
      // WB считает лимит на профиль продавца и категорию; методы-исключения со своим лимитом попадают в свою корзину
      limitKey: `wb|${tokenKey}|${sandbox ? 'sandbox' : 'prod'}|${meta?.category ?? 'unknown'}|${limit.intervalMs}|${limit.burst}`,
      limit,
      idempotent: method === 'GET' || meta?.readonly === true,
    }
  }

  private isTestToken(token: string): boolean {
    try {
      return decodeWbToken(token).sandbox
    } catch {
      // Не JWT — пусть WB сам ответит 401, решать за площадку не будем
      return false
    }
  }
}
