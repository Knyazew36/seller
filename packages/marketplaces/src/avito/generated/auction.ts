// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/auction/1/bids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение информации о действующих и доступных ставках
     * @description Метод позволяет получать доступные ставки (ставка указана в копейках), а также показывает действующую ставку и время ее действия (если время действия не указано значит ставка действует бессрочно)по юзеру.
     *     Максимальное количество запросов в минуту - 200.
     */
    get: operations['getUserBids']
    put?: never
    /**
     * Сохранение новых ставок
     * @description Метод позволяет сохранить для объявлений ставку (ставка указана в копейках) и время ее действия. Доступные ставки можно получить с помощью метода getUserBids
     *     Максимальное число идентификаторов объявления в запросе = 200.
     *     Максимальное количество запросов в минуту - 200.
     */
    post: operations['saveItemBids']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    error: {
      /**
       * @description Текст ошибки
       * @example Что-то пошло не так
       */
      message: string
    }
    tooManyRequestsError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 429
         */
        code: number
      }
    }
  }
  responses: {
    /** @description Bad request */
    badRequest: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['error']
      }
    }
    /** @description Forbidden */
    forbidden: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['error']
      }
    }
    /** @description Internal Error */
    internalError: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['error']
      }
    }
    /** @description Not found */
    notFound: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['error']
      }
    }
    /** @description Timeout */
    timeout: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['error']
      }
    }
    /** @description Too Many Requests */
    tooManyRequests: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['tooManyRequestsError']
      }
    }
    /** @description Unauthorized */
    unauthorized: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['error']
      }
    }
  }
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
  }
  requestBodies: never
  headers: {
    /** @description Количество запросов в минуту */
    'X-RateLimit-Limit': number
    /** @description Доступное количество запросов в текущем временном окне */
    'X-RateLimit-Remaining': number
  }
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getUserBids: {
    parameters: {
      query?: {
        /** @description Идентификатор последнего объявления в предыдущей пачке (по умолчанию 0) */
        fromItemID?: number
        /** @description Кол-во объявлений в пачке (максимум 200) */
        batchSize?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            items?: {
              availablePrices: {
                /**
                 * @description Показатель "хорошести" цены
                 * @example 0
                 */
                goodness: number
                /**
                 * @description Цена в копейках
                 * @example 120000
                 */
                pricePenny: number
              }[]
              /**
               * @description Время истечения срока действия ставки (RFC3339)
               * @example 2023-06-29T12:34:34+03:00
               */
              expirationTime: string
              /**
               * @description Идентификатор объявления
               * @example 123456789
               */
              itemID: number
              /**
               * @description Текущая цена в копейках
               * @example 147000
               */
              pricePenny: number
            }[]
          }
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      500: components['responses']['internalError']
    }
  }
  saveItemBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          items: {
            /**
             * @description Время окончания действия ставки в формате RFC3339 (2022-06-29T12:34:34+03:00). Отсутствие поля либо null означает бесконечно действующую ставку
             * @example 2023-06-29T12:34:34+03:00
             */
            expirationTime?: string | null
            /**
             * @description Идентификатор объявления
             * @example 123456789
             */
            itemID: number
            /**
             * @description Цена в копейках
             * @example 147000
             */
            pricePenny: number
          }[]
        }
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      500: components['responses']['internalError']
    }
  }
}
