// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/special-offers/v1/available': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение информации об объявлениях
     * @description Позволяет проверить доступность услуги по каждому из переданных объявлений
     */
    post: operations['openApiAvailable']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/special-offers/v1/multiConfirm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправка и оплата рассылки
     * @description Подтверждение отправки рассылки и ее оплата (из кошелька Авито)
     */
    post: operations['openApiMultiConfirm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/special-offers/v1/multiCreate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание рассылки
     * @description Создание рассылки по нескольким объявлениям, c фиксацией аудитории для рассылки
     */
    post: operations['openApiMultiCreate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/special-offers/v1/stats': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение статистики
     * @description Статистика по отправленным рассылкам за период
     */
    post: operations['openApiStats']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/special-offers/v1/tariffInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение информации о тарифе
     * @description Узнать сколько осталось рассылок в тарифе (если активного тарифа нет, придет пустой ответ)
     */
    post: operations['openApiTariffInfo']
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
    openApiAvailableRequestBody: {
      /** @description список id объявлений */
      itemIds: number[]
    }
    openApiAvailableResponseBody: {
      /** @description Список объявлений и признаков доступности для них услуги */
      items?: {
        /** @description доступна ли услуга */
        isAvailable: boolean
        itemId: number
        /** @description заполняется, если isAvailable = false */
        reason?: string | null
      }[]
    }
    openApiBadRequestError: {
      error: {
        /**
         * @default 400
         * @example 400
         */
        code: number
        /** @example Bad request */
        message: string
      }
    }
    openApiForbiddenError: {
      error: {
        /**
         * @default 403
         * @example 403
         */
        code: number
        /** @example Access denied */
        message: string
      }
    }
    openApiInternalError: {
      error: {
        /**
         * @default 500
         * @example 500
         */
        code: number
        /** @example Internal error */
        message: string
      }
    }
    openApiMultiConfirmRequestBody: {
      dispatches?: {
        /** @description Финальный размер скидки (в случае предложения скидки от стоимости) */
        discountValue?: number | null
        /** @description ID рассылки */
        dispatchId: number
        /** @description Slug выбранного варианта предложения для рассылки */
        offerSlug: string
        /** @description Число получателей рассылки */
        recipientsCount: number
      }[]
      /** @description Дата окончания предложения */
      expiresAt?: number | null
    }
    openApiMultiConfirmResponseBody: {
      ok?: boolean
    }
    openApiMultiCreateRequestBody: {
      /** @description Список id выбранных для рассылки объявлений */
      itemIds: number[]
    }
    openApiMultiCreateResponseBody: {
      /** @description Общие данные для всех объявлений */
      common: {
        /** @description Список всех предложений по объявлениям */
        offers: {
          /** @description Возможные значения для срока истечения предложения. Формат Unix Timestamp */
          expiresAt: {
            /** @description Максимальная дата истечения предложения */
            max: number
            /** @description Минимальная дата истечения предложения */
            min: number
          }
          /** @description Стоимость рассылки за одно сообщение. Приходит в VAS сценарии (рассылки не из тарифа) */
          messagePrice?: number | null
          /** @description Текст предложения. Если discount type, то в {{discount}} вставляется скидка */
          offerText?: string
          /** @description Идентификатор предложения */
          slug: string
          /**
           * @description Тип предложения: discount или text. Будут добавляться новые типы предложений без версионирования метода, нужно предусмотреть фильтрацию offers с неизвестным типом
           * @enum {string}
           */
          type: 'discount' | 'text'
        }[]
        /** @description Информация о текущем тарифе пользователя (если существует) */
        tariff?: {
          /** @description Срок действия. Формат: ISO 8601 */
          dueDate: string
          /** @description Осталось рассылок */
          sendsLeft: number
          /** @description Всего рассылок в тарифе */
          totalSends: number
        } | null
      }
      /** @description Список созданных рассылок */
      dispatches: {
        /** @description Число пользователей, которым можно отправить скидку в данный момент */
        availableAudienceCount: number
        /** @description Настройки скидки. Если предложение скидки доступно для объявления */
        discount?: {
          /** @description Максимальная сумма скидки на данное объявление. Присутствует в discount type */
          maxDiscount?: number
          /** @description Минимальная сумма скидки на данное объявление. Присутствует в discount type */
          minDiscount?: number
        }
        /** @description Ошибка создания. Если status - notCreated */
        error?: {
          /** @description Текст ошибки по объявлению */
          message?: string
        }
        /** @description Id созданной рассылки */
        id: number
        item: {
          /** @description Id объявления */
          id: number
        }
        /** @description Стоимость рассылки за одно сообщение. Приходит в VAS сценарии (рассылки не из тарифа) */
        messagePrice: number | null
        /** @description Доступные предложения (их slug) из общего списка */
        offers: string[]
        /**
         * @description Статус создания рассылки
         * @enum {string}
         */
        status: 'notCreated' | 'created'
      }[]
    }
    openApiStatsRequestBody: {
      /** @description Время выборки От. RFC3339 */
      dateTimeFrom: string
      /** @description Время выборки До. RFC3339 */
      dateTimeTo: string
    }
    openApiStatsResponseBody: {
      stats?: ({
        /** @description Число принятых покупателями предложений */
        accepted: number
        /** @description Число отправленных предложений */
        count: number
        /** @description Размер скидки (может отсутствовать) */
        discount?: number
        /** @description Дата окончания срока действия предложения */
        expiresAt: string
        itemId: number
        /** @description Тип предложения */
        offerSlug: string
        /** @description Общая стоимость рассылки. Приходит 0 при рассылках из тарифа или бесплатных рассылках */
        price: number
        /** @description Дата отправки рассылки */
        sentAt: string
      } | null)[]
    }
    openApiTariffInfoResponseBody: {
      /** @description Информация о текущем тарифе */
      tariffInfo?: {
        /** @description Сколько осталось рассылок в тарифе */
        sendsLeft: number
        /** @description Сколько всего рассылок в тарифе (было изначально) */
        totalSends: number
      } | null
    }
    openApiUnauthorizedError: {
      error: {
        /**
         * @default 401
         * @example 401
         */
        code: number
        /** @example Unauthorized access */
        message: string
      }
    }
  }
  responses: never
  parameters: {
    /** @description Токен для авторизации */
    openApiAuthHeader: string
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
  openApiAvailable: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "itemIds": [
         *         392567890,
         *         492569890
         *       ]
         *     }
         */
        'application/json': components['schemas']['openApiAvailableRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "isAvailable": true,
           *           "itemId": 392567890
           *         },
           *         {
           *           "isAvailable": false,
           *           "itemId": 492569890,
           *           "reason": "Для данного объявления услуга недоступна"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['openApiAvailableResponseBody']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiBadRequestError']
        }
      }
      /** @description Авторизованный user не найден */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiUnauthorizedError']
        }
      }
      /** @description Нет доступа к объявлению/-ям */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiForbiddenError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiInternalError']
        }
      }
    }
  }
  openApiMultiConfirm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "dispatches": [
         *         {
         *           "discountValue": 50000,
         *           "dispatchId": 76579,
         *           "offerSlug": "price_discount",
         *           "recipientsCount": 5
         *         },
         *         {
         *           "dispatchId": 76581,
         *           "offerSlug": "auto_tires",
         *           "recipientsCount": 5
         *         }
         *       ],
         *       "expiresAt": 1675976400
         *     }
         */
        'application/json': components['schemas']['openApiMultiConfirmRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "ok": true
           *     }
           */
          'application/json': components['schemas']['openApiMultiConfirmResponseBody']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiBadRequestError']
        }
      }
      /** @description Авторизованный user не найден */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiUnauthorizedError']
        }
      }
      /** @description Невозможно подтвердить оплату рассылки */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "error": {
           *         "code": 403,
           *         "message": "Недостаточно средств. Пополните кошелек"
           *       }
           *     }
           */
          'application/json': components['schemas']['openApiForbiddenError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiInternalError']
        }
      }
    }
  }
  openApiMultiCreate: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "itemIds": [
         *         123890775,
         *         233890766
         *       ]
         *     }
         */
        'application/json': components['schemas']['openApiMultiCreateRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "common": {
           *         "offers": [
           *           {
           *             "expiresAt": {
           *               "max": 1678568399,
           *               "min": 1675976400
           *             },
           *             "offerText": "скидку {{discount}}",
           *             "slug": "price_discount",
           *             "type": "discount"
           *           },
           *           {
           *             "expiresAt": {
           *               "max": 1678568399,
           *               "min": 1675976400
           *             },
           *             "offerText": "шины в подарок к покупке автомобиля",
           *             "slug": "auto_tires",
           *             "type": "text"
           *           }
           *         ]
           *       },
           *       "dispatches": [
           *         {
           *           "availableAudienceCount": 5,
           *           "discount": {
           *             "maxDiscount": 4500,
           *             "minDiscount": 400
           *           },
           *           "error": {},
           *           "id": 76579,
           *           "item": {
           *             "id": 123890775
           *           },
           *           "messagePrice": 10,
           *           "offers": [
           *             "price_discount"
           *           ],
           *           "status": "created"
           *         },
           *         {
           *           "availableAudienceCount": 0,
           *           "discount": {
           *             "maxDiscount": 5750,
           *             "minDiscount": 500
           *           },
           *           "error": {},
           *           "id": 0,
           *           "item": {
           *             "id": 14389997
           *           },
           *           "messagePrice": 15,
           *           "offers": [
           *             "price_discount",
           *             "auto_tires"
           *           ],
           *           "status": "notCreated"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['openApiMultiCreateResponseBody']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiBadRequestError']
        }
      }
      /** @description Авторизованный user не найден */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiUnauthorizedError']
        }
      }
      /** @description Нельзя отправить рассылку по объявлению/-ям */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiForbiddenError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiInternalError']
        }
      }
    }
  }
  openApiStats: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "dateTimeFrom": "2022-02-24T05:00:00Z",
         *       "dateTimeTo": "2022-03-01T12:00:00Z"
         *     }
         */
        'application/json': components['schemas']['openApiStatsRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "stats": [
           *         {
           *           "accepted": 10,
           *           "count": 78,
           *           "expiresAt": "2022-03-01T23:59:59Z",
           *           "itemId": 392567890,
           *           "offerSlug": "subsidized_mortgage",
           *           "price": 15000,
           *           "sentAt": "2022-02-27T15:04:05Z"
           *         },
           *         {
           *           "accepted": 2,
           *           "count": 7,
           *           "discount": 3000,
           *           "expiresAt": "2022-03-05T23:59:59Z",
           *           "itemId": 492567450,
           *           "offerSlug": "price_discount",
           *           "price": 9000,
           *           "sentAt": "2022-02-28T11:18:00Z"
           *         },
           *         {
           *           "accepted": 21,
           *           "count": 200,
           *           "discount": 170000,
           *           "expiresAt": "2022-03-11T23:59:59Z",
           *           "itemId": 6992567450,
           *           "offerSlug": "price_discount",
           *           "price": 0,
           *           "sentAt": "2022-03-01T01:58:26Z"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['openApiStatsResponseBody']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiBadRequestError']
        }
      }
      /** @description Авторизованный user не найден */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiUnauthorizedError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiInternalError']
        }
      }
    }
  }
  openApiTariffInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
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
          /**
           * @example {
           *       "tariffInfo": {
           *         "sendsLeft": 392,
           *         "totalSends": 1000
           *       }
           *     }
           */
          'application/json': components['schemas']['openApiTariffInfoResponseBody']
        }
      }
      /** @description Авторизованный user не найден */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiUnauthorizedError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['openApiInternalError']
        }
      }
    }
  }
}
