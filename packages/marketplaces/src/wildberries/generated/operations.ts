// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
import type { WbOperationMeta } from '../wb.types'

/** Общее */
export const generalOperations: Record<string, WbOperationMeta> = {
  'GET /ping': {
    host: 'https://common-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 99,
    },
  },
  'GET /api/communications/v2/news': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'GET /api/v1/seller-info': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'GET /api/common/v1/rating': {
    host: 'https://feedbacks-api.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/common/v1/subscriptions': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'GET /api/common/v1/tariff-constructor/options': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'POST /api/v1/invite': {
    host: 'https://user-management-api.wildberries.ru',
    category: 'usermanagement',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'GET /api/v1/users': {
    host: 'https://user-management-api.wildberries.ru',
    category: 'usermanagement',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'PUT /api/v1/users/access': {
    host: 'https://user-management-api.wildberries.ru',
    category: 'usermanagement',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'DELETE /api/v1/user': {
    host: 'https://user-management-api.wildberries.ru',
    category: 'usermanagement',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
}

/** Работа с товарами */
export const itemsOperations: Record<string, WbOperationMeta> = {
  'GET /content/v2/object/parent/all': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/object/all': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/object/charcs/{subjectId}': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/directory/colors': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/directory/kinds': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/directory/countries': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/directory/seasons': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/directory/vat': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/directory/tnved': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/content/v2/directory/tnved/all': {
    host: 'https://content-api.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/content/v2/directory/okpd': {
    host: 'https://content-api.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/content/v2/directory/okpd/all': {
    host: 'https://content-api.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/content/v1/brands': {
    host: 'https://content-api.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'GET /content/v2/tags': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/tag': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'PATCH /content/v2/tag/{id}': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'DELETE /content/v2/tag/{id}': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/tag/nomenclature/link': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/get/cards/list': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/cards/error/list': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 6000,
      burst: 5,
    },
  },
  'POST /content/v2/cards/update': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 6000,
      burst: 5,
    },
  },
  'POST /content/v2/cards/moveNm': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/cards/delete/trash': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/cards/recover': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 20000,
      burst: 5,
    },
  },
  'POST /content/v2/get/cards/trash': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /content/v2/cards/limits': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/barcodes': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v2/cards/upload': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 6000,
      burst: 5,
    },
  },
  'POST /content/v2/cards/upload/add': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 6000,
      burst: 5,
    },
  },
  'POST /content/v3/media/file': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /content/v3/media/save': {
    host: 'https://content-api.wildberries.ru',
    sandboxHost: 'https://content-api-sandbox.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/content/v1/recommendations/list': {
    host: 'https://content-api.wildberries.ru',
    category: 'content',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/content/v1/recommendations/set': {
    host: 'https://content-api.wildberries.ru',
    category: 'content',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/v2/upload/task': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/v2/upload/task/size': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/v2/upload/task/club-discount': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/discounts-prices/v1/upload/task/b2b/wholesale': {
    host: 'https://discounts-prices-api.wildberries.ru',
    category: 'discountsandprices',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/history/tasks': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/history/goods/task': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/buffer/tasks': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/buffer/goods/task': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/list/goods/filter': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/v2/list/goods/filter': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/list/goods/size/nm': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v2/quarantine/goods': {
    host: 'https://discounts-prices-api.wildberries.ru',
    sandboxHost: 'https://discounts-prices-api-sandbox.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/v3/stocks/{warehouseId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PUT /api/v3/stocks/{warehouseId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'DELETE /api/v3/stocks/{warehouseId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 6000,
      burst: 2,
    },
  },
  'GET /api/v3/offices': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/warehouses': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/warehouses': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PUT /api/v3/warehouses/{warehouseId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'DELETE /api/v3/warehouses/{warehouseId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/dbw/warehouses/{warehouseId}/contacts': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PUT /api/v3/dbw/warehouses/{warehouseId}/contacts': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
}

/** Заказы FBS */
export const ordersFbsOperations: Record<string, WbOperationMeta> = {
  'GET /api/v3/passes/offices': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/passes': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/passes': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
  },
  'PUT /api/v3/passes/{passId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'DELETE /api/v3/passes/{passId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/orders/new': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/orders': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/orders/status': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/supplies/orders/reshipment': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/v3/orders/{orderId}/cancel': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 20,
    },
  },
  'POST /api/v3/orders/stickers': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/orders/stickers/cross-border': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/orders/status/history': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/orders/client': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/fbs/orders/archive': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/orders/meta': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'DELETE /api/v3/orders/{orderId}/meta': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PUT /api/v3/orders/{orderId}/meta/sgtin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/v3/orders/{orderId}/meta/uin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/v3/orders/{orderId}/meta/imei': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/v3/orders/{orderId}/meta/gtin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/v3/orders/{orderId}/meta/expiration': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'GET /api/v3/supplies': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/supplies': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/marketplace/v3/supplies/{supplyId}/orders': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/marketplace/v3/fbs/supplies/{supplyId}/orders/transfer': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
  },
  'GET /api/v3/supplies/{supplyId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'DELETE /api/v3/supplies/{supplyId}': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/supplies/{supplyId}/order-ids': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/fbs/shipping-points': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/marketplace/v3/fbs/supplies/shipping-method': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/v3/supplies/{supplyId}/deliver': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/supplies/{supplyId}/barcode': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/supplies/{supplyId}/trbx': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/supplies/{supplyId}/trbx': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'DELETE /api/v3/supplies/{supplyId}/trbx': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/supplies/{supplyId}/trbx/stickers': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/fbs/dictionaries/countries/oksm': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PUT /api/marketplace/v3/fbs/supplies/{supplyId}/spot': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/fbs/supplies/spot/list': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/fbs/supplies/{supplyId}/stickers/spot': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/fbs/settings/autoreturns': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/marketplace/v3/fbs/settings/autoreturns': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/fbs/settings/autoreturns/items': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/marketplace/v3/fbs/settings/autoreturns/items': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
}

/** Заказы DBW */
export const ordersDbwOperations: Record<string, WbOperationMeta> = {
  'GET /api/v3/dbw/orders/new': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/dbw/orders': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/dbw/orders/delivery-date': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbw/orders/client': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/dbw/orders/status': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/v3/dbw/orders/{orderId}/confirm': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/dbw/orders/stickers': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbw/orders/status/deliver': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/dbw/orders/courier': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PATCH /api/v3/dbw/orders/{orderId}/cancel': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbw/orders/meta/details': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbw/orders/meta/delete': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbw/orders/meta/sgtin': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'PUT /api/v3/dbw/orders/{orderId}/meta/uin': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/v3/dbw/orders/{orderId}/meta/imei': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
  'PUT /api/v3/dbw/orders/{orderId}/meta/gtin': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 60,
      burst: 20,
    },
  },
}

/** DBS */
export const dbsOperations: Record<string, WbOperationMeta> = {
  'GET /api/v3/dbs/orders/new': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/dbs/orders': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/final-price': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 400,
      burst: 20,
    },
  },
  'POST /api/v3/dbs/groups/info': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/dbs/orders/client': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/b2b/info': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/dbs/orders/delivery-date': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/status/info': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/status/cancel': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/status/confirm': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/stickers': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/status/deliver': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/status/receive': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/status/reject': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/details': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/delete': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 400,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/sgtin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 120,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/uin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 120,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/imei': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 120,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/gtin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 120,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/dbs/orders/meta/customs-declaration': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 120,
      burst: 20,
    },
  },
}

/** Самовывоз */
export const inStorePickupOperations: Record<string, WbOperationMeta> = {
  'GET /api/v3/click-collect/orders/new': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'GET /api/v3/click-collect/orders': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/final-price': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 400,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/status/confirm': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/status/prepare': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/v3/click-collect/orders/client': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 20,
    },
  },
  'POST /api/v3/click-collect/orders/client/identity': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/status/receive': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/status/reject': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/status/info': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/status/cancel': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/details': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: true,
    limit: {
      intervalMs: 400,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/delete': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 400,
      burst: 20,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/sgtin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 3000,
      burst: 500,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/uin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 3000,
      burst: 500,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/imei': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 3000,
      burst: 500,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/gtin': {
    host: 'https://marketplace-api.wildberries.ru',
    sandboxHost: 'https://marketplace-api-sandbox.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 3000,
      burst: 500,
    },
  },
  'POST /api/marketplace/v3/click-collect/orders/meta/customs-declaration': {
    host: 'https://marketplace-api.wildberries.ru',
    category: 'marketplace',
    readonly: false,
    limit: {
      intervalMs: 3000,
      burst: 500,
    },
  },
}

/** Поставки FBW */
export const ordersFbwOperations: Record<string, WbOperationMeta> = {
  'POST /api/v1/acceptance/options': {
    host: 'https://supplies-api.wildberries.ru',
    sandboxHost: 'https://supplies-api-sandbox.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 6,
    },
  },
  'GET /api/v1/warehouses': {
    host: 'https://supplies-api.wildberries.ru',
    sandboxHost: 'https://supplies-api-sandbox.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 6,
    },
  },
  'GET /api/v1/transit-tariffs': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 10,
    },
  },
  'POST /api/v1/supplies': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'GET /api/v1/supplies/{ID}': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'GET /api/v1/supplies/{ID}/goods': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'GET /api/v1/supplies/{ID}/package': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'GET /api/supplies/v1/drafts': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'POST /api/supplies/v1/drafts': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: false,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'DELETE /api/supplies/v1/drafts/{draftId}': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: false,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'GET /api/supplies/v1/drafts/{draftId}/items': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'POST /api/supplies/v1/drafts/{draftId}/items': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: false,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'DELETE /api/supplies/v1/drafts/{draftId}/items': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: false,
    limit: {
      intervalMs: 2000,
      burst: 10,
    },
  },
  'GET /api/supplies/v1/discrepancies/{supplyId}': {
    host: 'https://supplies-api.wildberries.ru',
    category: 'supplies',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
}

/** Маркетинг и продвижение */
export const promotionOperations: Record<string, WbOperationMeta> = {
  'GET /adv/v1/promotion/count': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'GET /api/advert/v2/adverts': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'POST /api/advert/v1/bids/min': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 3000,
      burst: 5,
    },
  },
  'POST /adv/v2/seacat/save-ad': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 12000,
      burst: 5,
    },
  },
  'GET /adv/v1/supplier/subjects': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 12000,
      burst: 5,
    },
  },
  'POST /adv/v2/supplier/nms': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 12000,
      burst: 5,
    },
  },
  'GET /adv/v0/delete': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'POST /adv/v0/rename': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'GET /adv/v0/start': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'GET /adv/v0/pause': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'GET /adv/v0/stop': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'PUT /adv/v0/auction/placements': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 1,
    },
  },
  'PATCH /api/advert/v1/bids': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 5,
    },
  },
  'GET /adv/v1/balance': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'POST /api/advert/v2/budget': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 3000,
      burst: 4,
    },
  },
  'GET /adv/v1/budget': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 250,
      burst: 4,
    },
  },
  'POST /adv/v1/budget/deposit': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'GET /adv/v1/upd': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'GET /adv/v1/payments': {
    host: 'https://advert-api.wildberries.ru',
    sandboxHost: 'https://advert-api-sandbox.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'PATCH /adv/v0/auction/nms': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 1,
    },
  },
  'GET /api/advert/v0/bids/recommendations': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 12000,
      burst: 5,
    },
  },
  'POST /adv/v0/normquery/stats': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 6000,
      burst: 20,
    },
  },
  'POST /adv/v0/normquery/get-bids': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 10,
    },
  },
  'GET /api/advert/v1/config': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'POST /api/advert/v1/normquery/bids': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 500,
      burst: 4,
    },
  },
  'POST /adv/v0/normquery/bids': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 500,
      burst: 4,
    },
  },
  'DELETE /adv/v0/normquery/bids': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 10,
    },
  },
  'POST /adv/v0/normquery/get-minus': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 10,
    },
  },
  'POST /adv/v0/normquery/set-minus': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 200,
      burst: 10,
    },
  },
  'GET /adv/v1/count': {
    host: 'https://advert-media-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 100,
      burst: 10,
    },
  },
  'GET /adv/v1/adverts': {
    host: 'https://advert-media-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 100,
      burst: 10,
    },
  },
  'GET /adv/v1/advert': {
    host: 'https://advert-media-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 100,
      burst: 10,
    },
  },
  'GET /adv/v3/fullstats': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 1,
    },
  },
  'POST /adv/v1/stats': {
    host: 'https://advert-media-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 100,
      burst: 10,
    },
  },
  'GET /api/v1/calendar/promotions': {
    host: 'https://dp-calendar-api.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v1/calendar/promotions/details': {
    host: 'https://dp-calendar-api.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'GET /api/v1/calendar/promotions/nomenclatures': {
    host: 'https://dp-calendar-api.wildberries.ru',
    category: 'discountsandprices',
    readonly: true,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /api/v1/calendar/promotions/upload': {
    host: 'https://dp-calendar-api.wildberries.ru',
    category: 'discountsandprices',
    readonly: false,
    limit: {
      intervalMs: 600,
      burst: 5,
    },
  },
  'POST /adv/v0/normquery/list': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 200,
      burst: 10,
    },
  },
  'POST /adv/v1/normquery/stats': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 6000,
      burst: 20,
    },
  },
  'GET /api/advert/v0/daily-limits': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: true,
    limit: {
      intervalMs: 12000,
      burst: 5,
    },
  },
  'PUT /api/advert/v0/daily-limits': {
    host: 'https://advert-api.wildberries.ru',
    category: 'advert',
    readonly: false,
    limit: {
      intervalMs: 12000,
      burst: 5,
    },
  },
}

/** Общение с покупателями */
export const communicationsOperations: Record<string, WbOperationMeta> = {
  'GET /api/v1/new-feedbacks-questions': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/questions/count-unanswered': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/questions/count': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/questions': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'PATCH /api/v1/questions': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: false,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/question': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/feedbacks/count-unanswered': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/feedbacks/count': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/feedbacks': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'POST /api/v1/feedbacks/answer': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: false,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'PATCH /api/v1/feedbacks/answer': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: false,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'POST /api/v1/feedbacks/order/return': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: false,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/feedback': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/feedbacks/archive': {
    host: 'https://feedbacks-api.wildberries.ru',
    sandboxHost: 'https://feedbacks-api-sandbox.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/feedbacks/v1/pins': {
    host: 'https://feedbacks-api.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'POST /api/feedbacks/v1/pins': {
    host: 'https://feedbacks-api.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: false,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'DELETE /api/feedbacks/v1/pins': {
    host: 'https://feedbacks-api.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: false,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/feedbacks/v1/pins/count': {
    host: 'https://feedbacks-api.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/feedbacks/v1/pins/limits': {
    host: 'https://feedbacks-api.wildberries.ru',
    category: 'questionsandfeedback',
    readonly: true,
    limit: {
      intervalMs: 333,
      burst: 6,
    },
  },
  'GET /api/v1/seller/chats': {
    host: 'https://buyer-chat-api.wildberries.ru',
    category: 'buyerchat',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'GET /api/v1/seller/events': {
    host: 'https://buyer-chat-api.wildberries.ru',
    category: 'buyerchat',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'POST /api/v1/seller/message': {
    host: 'https://buyer-chat-api.wildberries.ru',
    category: 'buyerchat',
    readonly: false,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'GET /api/v1/seller/download/{id}': {
    host: 'https://buyer-chat-api.wildberries.ru',
    category: 'buyerchat',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 10,
    },
  },
  'GET /api/v1/claims': {
    host: 'https://returns-api.wildberries.ru',
    category: 'returns',
    readonly: true,
    limit: {
      intervalMs: 3000,
      burst: 10,
    },
  },
  'PATCH /api/v1/claim': {
    host: 'https://returns-api.wildberries.ru',
    category: 'returns',
    readonly: false,
    limit: {
      intervalMs: 3000,
      burst: 10,
    },
  },
}

/** Тарифы */
export const ratesOperations: Record<string, WbOperationMeta> = {
  'GET /api/v1/tariffs/commission': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 2,
    },
  },
  'GET /api/tariffs/v1/acceptance/coefficients': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 6,
    },
  },
  'GET /api/v1/tariffs/box': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'GET /api/v1/tariffs/pallet': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
  'GET /api/v1/tariffs/return': {
    host: 'https://common-api.wildberries.ru',
    category: 'commonapi',
    readonly: true,
    limit: {
      intervalMs: 1000,
      burst: 5,
    },
  },
}

/** Аналитика и данные */
export const analyticsOperations: Record<string, WbOperationMeta> = {
  'POST /api/analytics/v3/sales-funnel/products': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/analytics/v3/sales-funnel/products/history': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/analytics/v3/sales-funnel/grouped/history': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'GET /api/v2/nm-report/downloads': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/nm-report/downloads': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/nm-report/downloads/retry': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'GET /api/v2/nm-report/downloads/file/{downloadId}': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/search-report/report': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/search-report/table/groups': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/search-report/table/details': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/search-report/product/search-texts': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/search-report/product/orders': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/analytics/v1/stocks-report/wb-warehouses': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 1,
    },
  },
  'POST /api/analytics/v1/stocks-report/seller-warehouses': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 1,
    },
  },
  'POST /api/v2/stocks-report/products/groups': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/stocks-report/products/products': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/stocks-report/products/sizes': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/v2/stocks-report/offices': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/analytics/v2/item-rating': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 20000,
      burst: 3,
    },
  },
  'POST /api/analytics/v1/order-feed': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
}

/** Отчёты */
export const reportsOperations: Record<string, WbOperationMeta> = {
  'GET /api/v1/supplier/orders': {
    host: 'https://statistics-api.wildberries.ru',
    sandboxHost: 'https://statistics-api-sandbox.wildberries.ru',
    category: 'statistics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'GET /api/v1/supplier/sales': {
    host: 'https://statistics-api.wildberries.ru',
    sandboxHost: 'https://statistics-api-sandbox.wildberries.ru',
    category: 'statistics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/v1/analytics/excise-report': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 1800000,
      burst: 10,
    },
  },
  'GET /api/v1/warehouse_remains': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 5,
    },
  },
  'GET /api/v1/warehouse_remains/tasks/{task_id}/status': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 5000,
      burst: 5,
    },
  },
  'GET /api/v1/warehouse_remains/tasks/{task_id}/download': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/analytics/v1/measurement-penalties': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/analytics/v1/warehouse-measurements': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/analytics/v1/deductions': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/v1/analytics/antifraud-details': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 600000,
      burst: 10,
    },
  },
  'GET /api/v1/analytics/goods-labeling': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'GET /api/v1/acceptance_report': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/v1/acceptance_report/tasks/{task_id}/status': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 5000,
      burst: 1,
    },
  },
  'GET /api/v1/acceptance_report/tasks/{task_id}/download': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/v1/paid_storage': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 5,
    },
  },
  'GET /api/v1/paid_storage/tasks/{task_id}/status': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 5000,
      burst: 5,
    },
  },
  'GET /api/v1/paid_storage/tasks/{task_id}/download': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/v1/analytics/region-sale': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 5,
    },
  },
  'GET /api/v1/analytics/brand-share/brands': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 10,
    },
  },
  'GET /api/v1/analytics/brand-share/parent-subjects': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 5000,
      burst: 20,
    },
  },
  'GET /api/v1/analytics/brand-share': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 5000,
      burst: 20,
    },
  },
  'GET /api/v1/analytics/banned-products/blocked': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 6,
    },
  },
  'GET /api/v1/analytics/goods-return': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
  },
  'GET /api/analytics/v1/item-returns': {
    host: 'https://seller-analytics-api.wildberries.ru',
    category: 'contentanalytics',
    readonly: true,
  },
}

/** Документы и бухгалтерия */
export const financesOperations: Record<string, WbOperationMeta> = {
  'GET /api/v1/account/balance': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/finance/v1/sales-reports/list': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/finance/v1/sales-reports/detailed/{reportId}': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/finance/v1/sales-reports/detailed': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/finance/v1/acquiring/list': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/finance/v1/acquiring/detailed/{reportId}': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'POST /api/finance/v1/acquiring/detailed': {
    host: 'https://finance-api.wildberries.ru',
    category: 'finance',
    readonly: true,
    limit: {
      intervalMs: 60000,
      burst: 1,
    },
  },
  'GET /api/v1/documents/categories': {
    host: 'https://documents-api.wildberries.ru',
    category: 'documents',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 5,
    },
  },
  'GET /api/v1/documents/list': {
    host: 'https://documents-api.wildberries.ru',
    category: 'documents',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 5,
    },
  },
  'GET /api/v1/documents/download': {
    host: 'https://documents-api.wildberries.ru',
    category: 'documents',
    readonly: true,
    limit: {
      intervalMs: 10000,
      burst: 5,
    },
  },
  'POST /api/v1/documents/download/all': {
    host: 'https://documents-api.wildberries.ru',
    category: 'documents',
    readonly: true,
    limit: {
      intervalMs: 300000,
      burst: 5,
    },
  },
}
