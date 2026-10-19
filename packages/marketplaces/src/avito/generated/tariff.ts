// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/tariff/info/1': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Информация по тарифу
     * @description Получение информации по тарифу.
     *
     *     **Внимание:** информация доступна только для тарифов в категории "Транспорт". **Тариф должен быть не "СРА"**
     */
    get: operations['getTariffInfo']
    put?: never
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
    TariffContract: {
      /** @description Количество бонусов на продвижение по тарифу */
      bonus?: number
      /**
       * @description Дата и время окончания в формате Unix time. Для неактивных тарифов значение поля будет null
       * @example 1616589821
       */
      closeTime?: number
      /**
       * @description Признак активности
       * @example true
       */
      isActive?: boolean
      /**
       * @description Уровень тарифа
       * @example Тариф «Максимальный +»
       */
      level?: string
      /** @description Пакеты размещений, доступные в рамках тарифа */
      packages?: components['schemas']['TariffContractPackage'][]
      /** @description Стоимость тарифа */
      price?: {
        /** @description Цена тарифа без учёта скидки */
        originalPrice?: number
        /** @description Цена тарифа со скидкой */
        price?: number
      }
      /**
       * @description Дата и время начала в формате Unix time
       * @example 1613997821
       */
      startTime?: number
    }
    TariffContractPackage: {
      /** @description Доступные категории для размещений из пакета */
      categories?: {
        /**
         * @description Название категории
         * @example Автомобили
         */
        name?: string
        /**
         * @description Список выбранных подкатегорий.
         *     Если категория выбрана целиком, со всеми подкатегориями, здесь будет пустой массив.
         */
        subCategories?: string[]
      }[]
      /** @description Доступные локации для размещений из пакета */
      locations?: string[]
      /** @description Ценовая группа */
      priceConditions?: {
        /** @description Название ценовой группы */
        categoryName?: string
        /** @description Стоимость в ценовой группе без учёта скидки */
        originalPrice?: number
        /** @description Стоимость в ценой группе со скидкой */
        price?: number
        /** @description Порядок сортировки ценовых групп */
        sort?: number
        /** @description Количество размещений в ценовой группе */
        total?: number
      }[]
      /** @description Оставшееся число размещений в пакете */
      remain?: number
      /** @description Размер пакета */
      total?: number
    }
    /** @description Информация по текущему и запланированному контракту */
    TariffInfo: {
      current?: components['schemas']['TariffContract']
      scheduled?: components['schemas']['TariffContract']
    }
    authError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 401
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Unauthorized
         */
        message: string
      }
    }
    notFoundError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 404
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Not found
         */
        message: string
      }
    }
    serviceError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 500
         */
        code: number
        /**
         * @description Описание ошибки
         * @example Error while processing request. Please, contact support
         */
        message: string
      }
    }
  }
  responses: never
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
    /** @description Идентификатор объявления на сайте */
    pathItemId: number
    /** @description Номер пользователя в Личном кабинете Авито */
    pathUserId: number
    /** @description Имя сервиса, отправляющего запрос */
    sourceHeader: string
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
  getTariffInfo: {
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
           *       "current": {
           *         "bonus": 34432,
           *         "closeTime": 1616589821,
           *         "isActive": true,
           *         "level": "Тариф «Максимальный +»",
           *         "packages": [
           *           {
           *             "categories": [
           *               {
           *                 "name": "Автомобили",
           *                 "subCategories": [
           *                   "С пробегом"
           *                 ]
           *               }
           *             ],
           *             "locations": [
           *               "Санкт-Петербург и Ленинградская область"
           *             ],
           *             "priceConditions": [
           *               {
           *                 "categoryName": "От 500 000 до 1 000 000",
           *                 "originalPrice": 88001,
           *                 "price": 80200,
           *                 "sort": 1,
           *                 "total": 140
           *               }
           *             ],
           *             "remain": 105,
           *             "total": 140
           *           }
           *         ],
           *         "price": {
           *           "originalPrice": 128441,
           *           "price": 114777
           *         },
           *         "startTime": 1613997821
           *       },
           *       "scheduled": {
           *         "bonus": 36696,
           *         "closeTime": null,
           *         "isActive": false,
           *         "level": "Тариф «Максимальный +»",
           *         "packages": [
           *           {
           *             "categories": [
           *               {
           *                 "name": "Автомобили",
           *                 "subCategories": [
           *                   "С пробегом"
           *                 ]
           *               }
           *             ],
           *             "locations": [
           *               "Санкт-Петербург и Ленинградская область"
           *             ],
           *             "priceConditions": [
           *               {
           *                 "categoryName": "От 500 000 до 1 000 000",
           *                 "originalPrice": 81000,
           *                 "price": 75200,
           *                 "sort": 1,
           *                 "total": 151
           *               }
           *             ],
           *             "remain": 151,
           *             "total": 151
           *           }
           *         ],
           *         "price": {
           *           "originalPrice": 137980,
           *           "price": 122321
           *         },
           *         "startTime": 1616589821
           *       }
           *     }
           */
          'application/json': components['schemas']['TariffInfo']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Тариф не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
    }
  }
}
