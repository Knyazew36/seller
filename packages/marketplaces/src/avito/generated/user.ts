// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/core/v1/accounts/operations_history/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение истории операций пользователя
     * @description Возвращает список операций пользователя (списания/пополнение кошелька - деньги и бонусы) за определенный временной период (задается пользователем)
     */
    post: operations['postOperationsHistory']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/accounts/self': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение информации об авторизованном пользователе
     * @description Возвращает идентификатор пользователя и его регистрационные данные
     */
    get: operations['getUserInfoSelf']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/accounts/{user_id}/balance/': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    /**
     * Получение баланса кошелька пользователя
     * @description Возвращает сумму реальных денежных средств в кошельке, а также сумму бонусных средств
     */
    get: operations['getUserBalance']
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
    Balance: {
      /**
       * Format: float
       * @description Сумма бонусных средств
       */
      bonus?: number
      /**
       * Format: float
       * @description Сумма реальных денежных средств
       */
      real?: number
    }
    RequestOperationsHistory: {
      /**
       * Format: date-time
       * @description Время выборки от. Не далее одного года в прошлое от текущего момента.
       */
      dateTimeFrom: string
      /**
       * Format: date-time
       * @description Время выборки до (диапазон между dateTimeFrom и dateTimeTo должен быть не более одной недели)
       */
      dateTimeTo: string
    }
    ResponseOperationsHistory: {
      result?: {
        operations?: components['schemas']['ResponseOperationsHistoryItem'][]
      }
    }
    ResponseOperationsHistoryItem: {
      /** @description Сумма бонусов */
      amountBonus?: number
      /** @description Сумма реальных денег */
      amountRub?: number
      /** @description Сумма операции всего */
      amountTotal?: number
      /** @description ID объявления */
      itemId?: number
      /** @description Название операции */
      operationName?: string
      /**
       * @description Тип операции
       * @enum {string}
       */
      operationType?:
        | 'списание в счёт кредита'
        | 'постоплата'
        | 'внесение CPA аванса'
        | 'возврат CPA аванса'
        | 'аванс'
        | 'возврат аванса'
        | 'списание средств с кошелька в доход (не за оказанные услуги)'
        | 'сжигание бонусов'
        | 'резервирование под автостратегию'
        | 'возврат зарезервированных средств под автостатегию на кошелек'
        | 'резервирование средств под услугу'
        | 'возврат зарзервированных средств на баланс кошелька'
        | 'признание выручки'
        | 'списание остатка'
        | 'сторно'
        | 'опротестовано'
        | 'чарджбэк'
      /** @description Дата/время оплаты операции */
      paidAt?: string
      /** @description Код типа услуги */
      serviceId?: number
      /** @description Название конкретного типа услуги */
      serviceName?: string
      /**
       * @description Тип услуги
       * @enum {string}
       */
      serviceType?: 'vas' | 'perf_vas' | 'lf' | 'cv' | 'tariff' | 'subscription' | 'cpa' | 'bundle'
      /** @description Дата/время совершения операции */
      updatedAt?: string
    }
    UserInfoSelf: {
      /**
       * @description Email пользователя
       * @example example@domain.com
       */
      email?: string
      /**
       * Format: int32
       * @description Идентификатор пользователя
       * @example 94235311
       */
      id?: number
      /**
       * @description Имя пользователя
       * @example Петр
       */
      name?: string
      /**
       * @description первый верифицированный телефон пользователя
       * @example 71112223344
       */
      phone?: string
      /** @description все верифицированные номера телефонов */
      phones?: string[]
      /**
       * @description Ссылка на профиль пользователя
       * @example https://avito.ru/user/7d04cdc3a12726eee72c6851c953ac54/profile
       */
      profile_url?: string
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
    forbiddenError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 403
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Forbidden
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
    serviceUnavailableError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 503
         */
        code: number
        /**
         * @description Описание ошибки
         * @example Service temporarily unavailable. Please, contact support
         */
        message: string
      }
    }
  }
  responses: never
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
    /** @description Идентификатор чата (клиента) */
    chatId: string
    itemIds: string
    /** @description Количество сообщений на странице (положительное число больше 0 и меньше 100) */
    limit: number
    /** @description Идентификатор сообщения */
    messageId: string
    offset: number
    /** @description Номер страницы */
    page: number
    /** @description Идентификатор объявления на сайте */
    pathItemId: number
    /** @description Номер пользователя в Личном кабинете Авито */
    pathUserId: number
    /** @description Идентификатор вакансии на сайте */
    pathVacancyId: number
    /** @description Количество ресурсов на страницу */
    perPage: number
    unreadOnly: boolean
    /** @description Идентификатор пользователя (клиента) */
    userId: number
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
  postOperationsHistory: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        /**
         * @example {
         *       "dateTimeFrom": "2020-04-01T00:00:00",
         *       "dateTimeTo": "2020-04-08T00:00:00"
         *     }
         */
        'application/json': components['schemas']['RequestOperationsHistory']
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
           *       "operations": [
           *         {
           *           "amountBonus": 0,
           *           "amountRub": 119,
           *           "amountTotal": 119,
           *           "itemId": 1853257996,
           *           "operationName": "Резервирование средств. Услуга «Сделать XL объявлением» для объявления №1853257996",
           *           "operationType": "резервирование средств под услугу",
           *           "serviceId": 16,
           *           "serviceName": "Сделать XL объявлением",
           *           "serviceType": "vas",
           *           "updatedAt": "2020-04-27T10:51:50.012436+03:00"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['ResponseOperationsHistory']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  getUserInfoSelf: {
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
          'application/json': components['schemas']['UserInfoSelf']
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
      /** @description Неверный Token/Oauth Scope */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
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
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  getUserBalance: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
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
          'application/json': components['schemas']['Balance']
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
      /** @description Неверный Token/Oauth Scope */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Неверный user_id в запросе */
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
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
}
