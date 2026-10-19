// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/realty/v1/marketPriceCorrespondence/{itemId}/{price}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение соответствия переданной цены рыночной цене
     * @description Получение соответствия переданной цены рыночной цене
     *
     *     **Данный метод доступен только пользователям с активной подпиской «Лидер» в категории «Недвижимость»**
     */
    get: operations['market_price_correspondence_v1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realty/v1/report/create/{itemId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение аналитического отчета по недвижимости
     * @description Получение аналитического отчета по недвижимости
     *
     *     **Данный метод доступен только пользователям с активной подпиской «Лидер» в категории «Недвижимость»**
     */
    post: operations['CreateReportForClassified']
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
    /** @description Ошибка */
    Error: {
      /** @description Код ошибки */
      code: number
      /** @description Признак того, что ошибка временная (можно попробовать повторить запрос через некоторое время) */
      isTemporary?: boolean | null
      /** @description Сообщение */
      message: string
    }
    ErrorMessage: {
      message: string
    }
  }
  responses: never
  parameters: never
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
  market_price_correspondence_v1: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентифиактор объявления */
        itemId: number
        /** @description Цена */
        price: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * @description Признак соответствия рыночной цене
             *     - below - цена ниже рыночной
             *     - normal - цена соответствует рыночной
             *     - above - цена выше рыночной
             * @enum {string}
             */
            correspondence?: 'below' | 'normal' | 'above'
            error?: components['schemas']['Error']
          }
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: components['schemas']['Error']
          }
        }
      }
      /** @description Неавторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: components['schemas']['Error']
          }
        }
      }
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: components['schemas']['Error']
          }
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: components['schemas']['Error']
          }
        }
      }
    }
  }
  CreateReportForClassified: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления */
        itemId: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** Format: enum */
            success: {
              errors?: {
                /** @description Объект не принадлежит агенту */
                accessDenied?: boolean
                /** @description Фича получения отчета по API недоступна */
                featureDisabled?: boolean
                /** @description Неверный идентификатор объявления */
                invalidItem?: boolean
                /** @description Сообщение об ошибке */
                message?: string
              }
              success?: {
                /** @description Ссылка на аналитический отчет */
                reportLink: string
              }
            }
          }
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            'bad-request': components['schemas']['ErrorMessage']
          }
        }
      }
      /** @description Неавторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            unauthenticated: components['schemas']['ErrorMessage']
          }
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            forbidden: components['schemas']['ErrorMessage']
          }
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            'internal-error': components['schemas']['ErrorMessage']
          }
        }
      }
    }
  }
}
