// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export type { paths as generalPaths, components as generalComponents } from './01-general'
export type { paths as itemsPaths, components as itemsComponents } from './02-items'
export type { paths as ordersFbsPaths, components as ordersFbsComponents } from './03-orders-fbs'
export type { paths as ordersDbwPaths, components as ordersDbwComponents } from './04-orders-dbw'
export type { paths as dbsPaths, components as dbsComponents } from './05-dbs'
export type { paths as inStorePickupPaths, components as inStorePickupComponents } from './06-in-store-pickup'
export type { paths as ordersFbwPaths, components as ordersFbwComponents } from './07-orders-fbw'
export type { paths as promotionPaths, components as promotionComponents } from './08-promotion'
export type { paths as communicationsPaths, components as communicationsComponents } from './09-communications'
export type { paths as ratesPaths, components as ratesComponents } from './10-rates'
export type { paths as analyticsPaths, components as analyticsComponents } from './11-analytics'
export type { paths as reportsPaths, components as reportsComponents } from './12-reports'
export type { paths as financesPaths, components as financesComponents } from './13-finances'
export * from './operations'

/** Разделы API WB: ключ клиента → файл спеки */
export const WB_SECTIONS = {
  general: 'Общее',
  items: 'Работа с товарами',
  ordersFbs: 'Заказы FBS',
  ordersDbw: 'Заказы DBW',
  dbs: 'DBS',
  inStorePickup: 'Самовывоз',
  ordersFbw: 'Поставки FBW',
  promotion: 'Маркетинг и продвижение',
  communications: 'Общение с покупателями',
  rates: 'Тарифы',
  analytics: 'Аналитика и данные',
  reports: 'Отчёты',
  finances: 'Документы и бухгалтерия',
} as const
