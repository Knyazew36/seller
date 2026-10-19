// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/stock-management/1/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение остатков
     * @description Максимальное количество элементов в одном запросе - 10
     *
     *     Максимальное количество запросов в минуту - 100
     *
     *     Возвращает в ответ массив объектов со следующей структурой:
     *     - `itemId` - идентификатор объявления
     *     - `isUnlimited` - признак неограниченности остатков
     *     - `isMultiple` - флаг с подачи или редактирования "Несколько штук в наличии"
     *     - `quantity` - доступное количество товара (количество с подачи или редактирования минус бронь)
     *     - `isOutOfStock` - признак того, что у объявления закончилось доступное кол-во товара
     */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody: {
        content: {
          'application/json': {
            item_ids: number[]
            /** @description Пропустить поход в кеш, отдать данные из базы */
            strong_consistency?: boolean
          }
        }
      }
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['stocksInfoResult']
          }
        }
        400: components['responses']['badRequest']
        401: components['responses']['unauthorized']
        429: components['responses']['tooManyRequests']
        500: components['responses']['internalError']
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/stock-management/1/stocks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Редактирование остатков
     * @description Максимальное количество элементов в одном запросе - 200
     *
     *     Максимальное количество запросов в минуту - 100
     *
     *     Возвращает в ответ массив объектов со следующей структурой:
     *     - `errors` – массив, который содержит информацию о ошибках, возникших при обновлении остатков.
     *     - `item_id` – идентификатор объявления, для которого мы обновляем остатки.
     *     - `external_id` – идентификатор объявления во внешней системе, для которого мы обновляем остатки.
     *     - `success` – флаг, успешно ли прошло обновление остатка для объявления.
     */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody: {
        content: {
          'application/json': {
            stocks: {
              /**
               * @description Идентификатор объявления во внешней системе
               * @example AB123456
               */
              external_id?: string
              /**
               * Format: int64
               * @description Идентификатор объявления на сайте
               * @example 123321
               */
              item_id: number
              /**
               * Format: int64
               * @description Количество товара
               * @example 500
               */
              quantity: number
            }[]
          }
        }
      }
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['stockEditResult']
          }
        }
        400: components['responses']['badRequest']
        401: components['responses']['unauthorized']
        429: components['responses']['tooManyRequests']
        500: components['responses']['internalError']
      }
    }
    post?: never
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
    errorMessage: {
      /**
       * @description Текст ошибки
       * @example Что-то пошло не так
       */
      message: string
    }
    stockEditResult: {
      stocks?: {
        /**
         * @description Ошибки при обновлении остатка
         * @example []
         */
        errors?: string[]
        /**
         * @description Идентификатор объявления во внешней системе
         * @example AB123456
         */
        external_id?: string | null
        /**
         * Format: int64
         * @description Идентификатор объявления на сайте
         * @example 123321
         */
        item_id: number
        /**
         * @description Успешно ли прошло обновление остатков
         * @example true
         */
        success: boolean
      }[]
    }
    stocksInfoResult: {
      stocks?: {
        /**
         * @description Флаг с подачи или редактирования "Несколько штук в наличии"
         * @example true
         */
        is_multiple: boolean
        /**
         * @description Признак того, что у объявления закончилось доступное кол-во товара
         * @example false
         */
        is_out_of_stock: boolean
        /**
         * @description Признак неограниченности стоков
         * @example true
         */
        is_unlimited: boolean
        /**
         * Format: int64
         * @description Идентификатор объявления на сайте
         * @example 123321
         */
        item_id: number
        /**
         * Format: int64
         * @description Доступное количество товара (количество с подачи или редактирования минус бронь)
         * @example 100
         */
        quantity: number
      }[]
    }
    unauthError: {
      /**
       * @description Сообщение о том, что пользователь не авторизован. Если текст ошибки "Unsupported flow for endpoint", значит в авторизационном заголовке "X-Oauth-Flow" не передан "authorization_code"
       * @example Unsupported flow for endpoint
       */
      message: string
    }
  }
  responses: {
    /** @description Bad request */
    badRequest: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorMessage']
      }
    }
    /** @description Forbidden */
    forbidden: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorMessage']
      }
    }
    /** @description Internal Error */
    internalError: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorMessage']
      }
    }
    /** @description Not found */
    notFound: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorMessage']
      }
    }
    /** @description Timeout */
    timeout: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorMessage']
      }
    }
    /** @description Too Many Requests */
    tooManyRequests: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorMessage']
      }
    }
    /** @description Unauthorized */
    unauthorized: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['unauthError']
      }
    }
  }
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>
