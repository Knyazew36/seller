import type { Client } from 'openapi-fetch'

import {
  type ClientCredentialsTokenProvider,
  createApiClient,
  credentialKey,
  DEFAULT_RETRY,
  RateLimiter,
  type RetryOptions,
  silentLogger,
  TokenProviderPool,
} from '../shared'

import { AUTOTEKA_TOKEN_URL, AVITO_DEFAULT_LIMIT, AVITO_MARKETPLACE, AVITO_TOKEN_URL } from './avito.constants'
import type { AvitoClientFactoryOptions, AvitoCredentials } from './avito.types'
import {
  type accountsHierarchyPaths,
  type adsPaths,
  type auctionPaths,
  type autoloadPaths,
  type autostrategyPaths,
  type autotekaPaths,
  AVITO_SECTIONS,
  type avitoPromoPaths,
  type calltrackingPaths,
  type cpaPaths,
  type cpxpromoPaths,
  type deliverySandboxPaths,
  type digitalGoodsPaths,
  type itemPaths,
  type jobPaths,
  type messengerPaths,
  type orderManagementPaths,
  type promotionPaths,
  type ratingsPaths,
  type realtyReportsPaths,
  type sbcGatewayPaths,
  type stockManagementPaths,
  type strPaths,
  type tariffCompositionPaths,
  type tariffPaths,
  type trxpromoPaths,
  type userPaths,
} from './generated'

/**
 * Клиент Avito: по разделу каталога API на ключ. Раздел «Авторизация» не выносим —
 * токены выпускает сам клиент. «Авито Реклама» и «Автотека» выдают отдельные ключи:
 * для них создают отдельный клиент со своими учётными данными.
 */
export interface AvitoClient {
  /** Информация о пользователе: профиль, баланс, операции */
  user: Client<userPaths>
  /** Объявления: список, статистика, применение услуг */
  item: Client<itemPaths>
  /** Автозагрузка: отчёты, профиль, загрузка фида */
  autoload: Client<autoloadPaths>
  /** Мессенджер: чаты, сообщения, вебхуки */
  messenger: Client<messengerPaths>
  /** Управление заказами */
  orderManagement: Client<orderManagementPaths>
  /** Доставка (раздел каталога delivery-sandbox) */
  delivery: Client<deliverySandboxPaths>
  /** Управление остатками */
  stockManagement: Client<stockManagementPaths>
  /** Рейтинги и отзывы */
  ratings: Client<ratingsPaths>
  /** Продвижение */
  promotion: Client<promotionPaths>
  /** Автостратегия */
  autostrategy: Client<autostrategyPaths>
  /** Настройка цены целевого действия */
  cpxpromo: Client<cpxpromoPaths>
  /** TrxPromo */
  trxpromo: Client<trxpromoPaths>
  /** CPA Авито */
  cpa: Client<cpaPaths>
  /** CPA-аукцион */
  auction: Client<auctionPaths>
  /** CallTracking */
  calltracking: Client<calltrackingPaths>
  /** Тарифы */
  tariff: Client<tariffPaths>
  /** Состав тарифа */
  tariffComposition: Client<tariffCompositionPaths>
  /** Иерархия аккаунтов */
  accountsHierarchy: Client<accountsHierarchyPaths>
  /** Рассылка скидок и спецпредложений в мессенджере (бета) */
  sbcGateway: Client<sbcGatewayPaths>
  /** Цифровые товары */
  digitalGoods: Client<digitalGoodsPaths>
  /** Авито.Работа */
  job: Client<jobPaths>
  /** Краткосрочная аренда */
  str: Client<strPaths>
  /** Аналитика по недвижимости */
  realtyReports: Client<realtyReportsPaths>
  /** Авито Promo (для агентств) */
  avitoPromo: Client<avitoPromoPaths>
  /** Авито Реклама — отдельные ключи рекламного кабинета */
  ads: Client<adsPaths>
  /** Автотека — свой хост и свои ключи */
  autoteka: Client<autotekaPaths>
}

/** Ключ клиента → раздел каталога (ключ AVITO_SECTIONS) */
const SECTION_SOURCE: Record<keyof AvitoClient, keyof typeof AVITO_SECTIONS> = {
  user: 'user',
  item: 'item',
  autoload: 'autoload',
  messenger: 'messenger',
  orderManagement: 'orderManagement',
  delivery: 'deliverySandbox',
  stockManagement: 'stockManagement',
  ratings: 'ratings',
  promotion: 'promotion',
  autostrategy: 'autostrategy',
  cpxpromo: 'cpxpromo',
  trxpromo: 'trxpromo',
  cpa: 'cpa',
  auction: 'auction',
  calltracking: 'calltracking',
  tariff: 'tariff',
  tariffComposition: 'tariffComposition',
  accountsHierarchy: 'accountsHierarchy',
  sbcGateway: 'sbcGateway',
  digitalGoods: 'digitalGoods',
  job: 'job',
  str: 'str',
  realtyReports: 'realtyReports',
  avitoPromo: 'avitoPromo',
  ads: 'ads',
  autoteka: 'autoteka',
}

interface TokenSource {
  key: string
  get: () => Promise<string>
  onUnauthorized?: () => void | Promise<void>
}

/** Фабрика клиентов Avito. Одна на приложение (лимитер, кэш токенов), клиент — на аккаунт. */
export class AvitoClientFactory {
  private readonly limiter: RateLimiter
  private readonly retry: RetryOptions
  private readonly tokens = new TokenProviderPool()
  private readonly objectKeys = new WeakMap<object, string>()
  private objectSeq = 0

  constructor(private readonly options: AvitoClientFactoryOptions = {}) {
    this.limiter = options.limiter ?? new RateLimiter()
    this.retry = { ...DEFAULT_RETRY, ...options.retry }
  }

  public create(credentials: AvitoCredentials): AvitoClient {
    const entries = (Object.keys(SECTION_SOURCE) as (keyof AvitoClient)[]).map(section => {
      const source = AVITO_SECTIONS[SECTION_SOURCE[section]]
      const token = this.tokenSource(
        credentials,
        source.host.includes('autoteka') ? AUTOTEKA_TOKEN_URL : AVITO_TOKEN_URL,
      )
      const limit = this.options.sectionLimits?.[section] ?? this.options.defaultLimit ?? AVITO_DEFAULT_LIMIT
      const client = createApiClient({
        marketplace: AVITO_MARKETPLACE,
        section,
        baseUrl: source.host,
        operation: method => ({
          limitKey: `avito|${token.key}|${this.options.sectionLimits?.[section] ? section : 'all'}`,
          limit,
          // PUT и DELETE идемпотентны по смыслу HTTP; POST в Avito бывает и чтением, и записью — не повторяем
          idempotent: method === 'GET' || method === 'PUT' || method === 'DELETE',
        }),
        authorize: async headers => headers.set('Authorization', `Bearer ${await token.get()}`),
        onUnauthorized: token.onUnauthorized,
        limiter: this.limiter,
        logger: this.options.logger ?? silentLogger,
        retry: this.retry,
        fetch: this.options.fetch,
      })
      return [section, client] as const
    })
    return Object.fromEntries(entries) as unknown as AvitoClient
  }

  /** Токен client_credentials без клиента — например, проверить ключи при подключении аккаунта */
  public async issueToken(credentials: { clientId: string; clientSecret: string; scope?: string }): Promise<string> {
    return this.provider(credentials, AVITO_TOKEN_URL).getToken()
  }

  private tokenSource(credentials: AvitoCredentials, tokenUrl: string): TokenSource {
    if ('clientId' in credentials) {
      const provider = this.provider(credentials, tokenUrl)
      return {
        key: credentials.clientId.trim(),
        get: () => provider.getToken(),
        onUnauthorized: () => provider.invalidate(),
      }
    }
    if ('accessToken' in credentials) {
      return { key: credentialKey(credentials.accessToken), get: async () => credentials.accessToken }
    }
    return {
      key: this.objectKey(credentials),
      get: credentials.getAccessToken,
      onUnauthorized: credentials.onUnauthorized,
    }
  }

  /** Один объект учётных данных = один аккаунт: по нему и делим лимит, раз токена заранее не знаем */
  private objectKey(credentials: object): string {
    let key = this.objectKeys.get(credentials)
    if (!key) {
      key = `fn${++this.objectSeq}`
      this.objectKeys.set(credentials, key)
    }
    return key
  }

  private provider(
    credentials: { clientId: string; clientSecret: string; scope?: string },
    tokenUrl: string,
  ): ClientCredentialsTokenProvider {
    return this.tokens.get({
      marketplace: AVITO_MARKETPLACE,
      tokenUrl,
      clientId: credentials.clientId.trim(),
      clientSecret: credentials.clientSecret.trim(),
      scope: credentials.scope,
      format: 'form',
      fetch: this.options.fetch,
    })
  }
}
