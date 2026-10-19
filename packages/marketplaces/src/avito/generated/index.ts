// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export type { paths as accountsHierarchyPaths, components as accountsHierarchyComponents } from './accounts-hierarchy'
export type { paths as adsPaths, components as adsComponents } from './ads'
export type { paths as auctionPaths, components as auctionComponents } from './auction'
export type { paths as authPaths, components as authComponents } from './auth'
export type { paths as autoloadPaths, components as autoloadComponents } from './autoload'
export type { paths as autostrategyPaths, components as autostrategyComponents } from './autostrategy'
export type { paths as autotekaPaths, components as autotekaComponents } from './autoteka'
export type { paths as avitoPromoPaths, components as avitoPromoComponents } from './avito-promo'
export type { paths as calltrackingPaths, components as calltrackingComponents } from './calltracking'
export type { paths as cpaPaths, components as cpaComponents } from './cpa'
export type { paths as cpxpromoPaths, components as cpxpromoComponents } from './cpxpromo'
export type { paths as deliverySandboxPaths, components as deliverySandboxComponents } from './delivery-sandbox'
export type { paths as digitalGoodsPaths, components as digitalGoodsComponents } from './digital-goods'
export type { paths as itemPaths, components as itemComponents } from './item'
export type { paths as jobPaths, components as jobComponents } from './job'
export type { paths as messengerPaths, components as messengerComponents } from './messenger'
export type { paths as orderManagementPaths, components as orderManagementComponents } from './order-management'
export type { paths as promotionPaths, components as promotionComponents } from './promotion'
export type { paths as ratingsPaths, components as ratingsComponents } from './ratings'
export type { paths as realtyReportsPaths, components as realtyReportsComponents } from './realty-reports'
export type { paths as sbcGatewayPaths, components as sbcGatewayComponents } from './sbc-gateway'
export type { paths as stockManagementPaths, components as stockManagementComponents } from './stock-management'
export type { paths as strPaths, components as strComponents } from './str'
export type { paths as tariffCompositionPaths, components as tariffCompositionComponents } from './tariff-composition'
export type { paths as tariffPaths, components as tariffComponents } from './tariff'
export type { paths as trxpromoPaths, components as trxpromoComponents } from './trxpromo'
export type { paths as userPaths, components as userComponents } from './user'

/** Разделы API Avito: хост и схемы авторизации из спеки */
export const AVITO_SECTIONS = {
  accountsHierarchy: {
    title: 'Иерархия Аккаунтов',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  ads: {
    title: 'Авито Реклама',
    host: 'https://api.avito.ru',
    securitySchemes: [],
  },
  auction: {
    title: 'CPA-аукцион',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  auth: {
    title: 'Авторизация',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  autoload: {
    title: 'Автозагрузка',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  autostrategy: {
    title: 'Автостратегия',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  autoteka: {
    title: 'Автотека',
    host: 'https://pro.autoteka.ru',
    securitySchemes: ['ClientCredentials'],
  },
  avitoPromo: {
    title: 'Авито Promo',
    host: 'https://api.avito.ru',
    securitySchemes: ['ClientCredentials'],
  },
  calltracking: {
    title: 'CallTracking[КТ]',
    host: 'https://api.avito.ru',
    securitySchemes: ['ClientCredentials'],
  },
  cpa: {
    title: 'CPA Авито',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  cpxpromo: {
    title: 'Настройка цены целевого действия',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  deliverySandbox: {
    title: 'Доставка',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  digitalGoods: {
    title: 'Цифровые товары',
    host: 'https://api.avito.ru',
    securitySchemes: ['ClientCredentials'],
  },
  item: {
    title: 'Объявления',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  job: {
    title: 'Авито.Работа',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  messenger: {
    title: 'Мессенджер',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  orderManagement: {
    title: 'Управление заказами',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  promotion: {
    title: 'Продвижение',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  ratings: {
    title: 'Рейтинги и отзывы',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  realtyReports: {
    title: 'Аналитика по недвижимости',
    host: 'https://api.avito.ru',
    securitySchemes: ['ClientCredentials'],
  },
  sbcGateway: {
    title: 'Рассылка скидок и спецпредложений в мессенджере (beta-version)',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  stockManagement: {
    title: 'Управление остатками',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  str: {
    title: 'Краткосрочная аренда',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  tariffComposition: {
    title: 'Тариф',
    host: 'https://api.avito.ru',
    securitySchemes: ['ClientCredentials'],
  },
  tariff: {
    title: 'Тарифы',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  trxpromo: {
    title: 'TrxPromo',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
  user: {
    title: 'Информация о пользователе',
    host: 'https://api.avito.ru',
    securitySchemes: ['AuthorizationCode', 'ClientCredentials'],
  },
} as const
