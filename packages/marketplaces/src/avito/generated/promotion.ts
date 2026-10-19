// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/promotion/v1/items/services/bbip/forecasts/get': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * BBIP. Прогноз продвижения
     * @description Получение прогноза продвижения по объявлениям
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['get_bbip_forecasts_by_items_v1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v1/items/services/bbip/orders/create': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * BBIP. Подключение услуги продвижения
     * @description Создать заявку на подключение услуг продвижения.
     *
     *     Создание заявки для набора объявлений возможно только в случае если ни по одному из объявлений не возникло ошибок.
     *
     *     При успешном создании заявки система возвращает `orderId` (идентификатор заявки),
     *     на основе которого можно проверять как статус заявки, так и статус подключения услуг по объявлениям.
     *
     *     **Rate limit:** 10 RPM
     */
    put: operations['create_bbip_order_for_items_v1']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v1/items/services/bbip/suggests/get': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * BBIP. Варианты бюджета продвижения
     * @description Получение доступных вариантов бюджета для продвижения
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['get_bbip_suggests_by_items_v1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v1/items/services/dict': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Словарь типов услуг продвижения
     * @description Получение словаря типов услуг продвижения
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['get_dict_of_services_v1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v1/items/services/get': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список услуг продвижения
     * @deprecated
     * @description Получение списка активных услуг продвижения по объявлениям (устаревший метод)
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['get_services_by_items_v1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v1/items/services/orders/get': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список заявок
     * @description Получение списка заявок на подключение услуг.
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['list_orders_by_user_v1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v1/items/services/orders/status': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статус заявки
     * @description Получение статуса заявки на подключение услуг продвижения
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['get_order_status_v1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/promotion/v2/items/services/get': {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список услуг продвижения
     * @description Получение списка активных услуг продвижения по объявлениям.
     *     При частичном ответе проверяйте поле `degraded`.
     *
     *     **Rate limit:** 100 RPM
     */
    post: operations['get_services_by_items_v2']
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
    /** @description Прогноз продвижения по объявлению */
    BbipForecastByItemV1: {
      /**
       * Format: int64
       * @description Идентификатор объявления
       * @example 2
       */
      itemId: number
      /**
       * @description Ожидаемый максимальный прирост просмотров
       * @example 336
       */
      max: number
      /**
       * @description Ожидаемый минимальный прирост просмотров
       * @example 35
       */
      min: number
      /**
       * @description Общая ценность продвижения за весь период до применения скидок и акций (в копейках)
       * @example 26166
       */
      totalOldPrice: number
      /**
       * @description Общая стоимость продвижения за весь период (в копейках)
       * @example 26166
       */
      totalPrice: number
    }
    BbipForecastRequestByItemV1: {
      /**
       * @description Период в днях, для которого запрашивается прогноз
       * @example 7
       */
      duration: number
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId: number
      /**
       * @description Общая ценность продвижения за один день (в копейках)
       * @example 10000
       */
      oldPrice: number
      /**
       * @description Стоимость продвижения за один день (в копейках)
       * @example 10000
       */
      price: number
    }
    /** @description Заявка на подключение услуг продвижения BBIP по объявлению */
    BbipOrderByItemV1: {
      /**
       * @description Период действия продвижения в днях
       * @example 7
       */
      duration: number
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId: number
      /**
       * @description Общая ценность продвижения за один день (в копейках)
       * @example 10000
       */
      oldPrice: number
      /**
       * @description Стоимость продвижения за один день (в копейках)
       * @example 10000
       */
      price: number
    }
    /** @description Объединённый вариант бюджета продвижения по набору объявлений */
    BbipSuggestBudgetV1: {
      /** @description Рекомендуемый вариант бюджета */
      isRecommended?: boolean
      /**
       * Format: int64
       * @description Общая ценность продвижения за один день до применения скидок и акций (в копейках)
       * @example 10000
       */
      oldPrice: number
      /**
       * Format: int64
       * @description Стоимость продвижения за один день (в копейках)
       * @example 10000
       */
      price: number
    }
    /** @description Вариант бюджета продвижения по объявлению */
    BbipSuggestByItemV1: {
      budgets: components['schemas']['BbipSuggestBudgetV1'][]
      duration: components['schemas']['BbipSuggestDurationRangeV1']
      /**
       * Format: int64
       * @description Идентификатор объявления
       * @example 2
       */
      itemId: number
    }
    /** @description Вилка доступных периодов для продвижения в днях */
    BbipSuggestDurationRangeV1: {
      /**
       * @description Минимальное кол-во дней для продвижения
       * @example 1
       */
      from: number
      /**
       * @description Рекомендуемое кол-во дней для продвижения
       * @example 5
       */
      recommended?: number
      /**
       * @description Максимальное кол-во дней для продвижения
       * @example 7
       */
      to: number
    }
    CommonError: {
      /** @description Информация об ошибках в привязке к полям */
      details?:
        | {
            /** @description Информация об ошибке */
            message: string
            /** @description Путь к полю */
            path: string
            /**
             * @description Источник значения
             * @enum {string}
             */
            source: 'header' | 'url' | 'query' | 'body'
            /** @description Значение поля в строковом представление */
            value?: string | null
          }[]
        | null
      /**
       * @description Сообщение об ошибке
       * @example Validation error
       */
      message: string
    }
    /** @description Информация об ошибке выполнения операции по объявлению */
    ErrorByItemV1: {
      /**
       * Format: int64
       * @description Код ошибки
       * @example 1005
       */
      errorCode: number
      /**
       * @description Текст ошибки
       * @example Услуга недоступна для объявлений с типом Резюме
       */
      errorText: string
      /**
       * Format: int64
       * @description Идентификатор объявления
       * @example 2
       */
      itemId: number
    }
    GetBbipForecastByItemsV1Req: {
      /** @description Данные по объявлениям для запроса прогноза */
      items: components['schemas']['BbipForecastRequestByItemV1'][]
    }
    GetBbipForecastByItemsV1Resp: {
      /** @description Информация об ошибках по объявлениям */
      errors: components['schemas']['ErrorByItemV1'][]
      /** @description Прогноз по каждому объявлению */
      items: components['schemas']['BbipForecastByItemV1'][]
      /** @description Общая стоимость по всем объявлениям (в копейках) */
      totalPrice?: number
    }
    GetBbipSuggestsV1Req: {
      /** @description Идентификаторы объявлений */
      itemIds?: number[]
    }
    GetBbipSuggestsV1Resp: {
      /** @description Информация об ошибках получения варианта бюджета */
      errors: components['schemas']['ErrorByItemV1'][]
      /** @description Предлагаемые варианты бюджетов по каждому объявлению */
      items: components['schemas']['BbipSuggestByItemV1'][]
    }
    /** @description Список услуг */
    GetDictOfServicesV1Resp: components['schemas']['ServiceInfoV1'][]
    GetOrderStatusV1Req: {
      /**
       * Format: uuid
       * @description Идентификатор заявки на подключение услуг продвижения
       */
      orderId?: string
    }
    GetOrderStatusV1Resp: {
      /** @description Информация об ошибках получения данных по объявлениям */
      errors?: components['schemas']['ErrorByItemV1'][]
      /** @description Статус заявки на подключение услуги по объявлениям */
      items?: components['schemas']['OrderStatusByItemV1'][]
      /**
       * Format: uuid
       * @description Идентификатор заявки на подключение услуг продвижения
       */
      orderId?: string
      status?: components['schemas']['OrderStatus']
      /**
       * @description Общая стоимость заявки (в копейках)
       * @example 26166
       */
      totalPrice?: number
    }
    GetServicesByItemsV1Req: {
      /** @description Идентификаторы объявлений */
      itemIds?: number[]
    }
    GetServicesByItemsV1Resp: {
      /** @description Информация об ошибках получения варианта бюджета */
      errors?: components['schemas']['ErrorByItemV1'][]
      /** @description Информация об услугах продвижения по объявлениям */
      items?: components['schemas']['ServicesByItemV1'][]
    }
    GetServicesByItemsV2Resp: {
      /** @description true — данные об услугах получены в режиме деградации; ответ может быть неполным. false — данные получены без деградации. */
      degraded: boolean
      /** @description Информация об ошибках по объявлениям */
      errors?: components['schemas']['ErrorByItemV1'][]
      /** @description Информация об услугах продвижения по объявлениям */
      items?: components['schemas']['ServicesByItemV1'][]
    }
    ListOrdersByUserV1Req: {
      /** @description Данные для постраничного чтения */
      pagination?: {
        /**
         * Format: int32
         * @description Номер страницы
         * @default 1
         */
        page: number
        /**
         * Format: int32
         * @description Количество записей на странице
         * @default 20
         */
        perPage: number
      } | null
    }
    ListOrdersByUserV1Resp: {
      /** @description Список заявок на подключение услуг продвижения по объявлениям */
      orders: components['schemas']['OrderBrief'][]
      /** @description Данные для постраничного чтения */
      pagination: {
        /** @description Признак наличия следующей страницы */
        hasNextPage: boolean
      }
    }
    NotEnoughMoneyError: {
      /**
       * @description Сообщение об ошибке
       * @example Validation error
       */
      message: string
    }
    OrderBbipForItemsV1Req: {
      /** @description Заявки на подключение BBIP по отдельным объявлениям */
      items: components['schemas']['BbipOrderByItemV1'][]
    }
    OrderBbipForItemsV1Resp: {
      /** @description Информация об ошибках по объявлениям */
      errors: components['schemas']['ErrorByItemV1'][]
      /**
       * Format: uuid
       * @description Идентификатор созданной заявки на подключение услуг продвижения
       */
      orderId?: string | null
    }
    /** @description Информация о заявке на подключение услуг продвижения */
    OrderBrief: {
      /**
       * Format: date-time
       * @description Дата создания заявки
       * @example 2025-11-10T13:46:15.000Z
       */
      createdAt?: string
      /**
       * Format: uuid
       * @description Идентификатор заявки
       */
      id?: string
      status?: components['schemas']['OrderStatus']
    }
    /** @description Информация об услуге в заявке */
    OrderService: {
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId?: number
      /**
       * Format: int64
       * @description Цена услуги на момент создания задачи (в копейках)
       */
      price?: number
      /** @description Тип услуги */
      slug?: string
      statusId?: components['schemas']['OrderServiceStatus']
    }
    /**
     * @description Статус услуги в составе заявки, возможные значения:
     *     - `unknown` - Неизвестный статус услуги
     *     - `active` - Активна
     *     - `error` - Обработка завершилась ошибкой
     *     - `canceled` - Отменено пользователем
     *     - `processed` - Успешно завершено
     * @enum {string}
     */
    OrderServiceStatus: 'unknown' | 'active' | 'error' | 'canceled' | 'processed'
    /**
     * @description Статус заявки, возможные значения:
     *     - `unknown` - Неизвестный статус заявки
     *     - `initialized` - Заявка создана и инициализирована
     *     - `waiting` - Заявка ожидает выполнения
     *     - `in_process` - Заявка находится в обработке
     *     - `processed` - Обработка заявки завершена
     * @enum {string}
     */
    OrderStatus: 'unknown' | 'initialized' | 'waiting' | 'in_process' | 'processed'
    /** @description Информация об услуге продвижения внутри заявки на подключение */
    OrderStatusByItemV1: {
      /** @description Описание ошибки */
      errorReason?: string | null
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId?: number
      /**
       * Format: int64
       * @description Цена услуги на момент создания задачи (в копейках)
       */
      price?: number
      /** @description Тип услуги */
      slug?: string
      status?: components['schemas']['OrderStatus']
    }
    /** @description Информация об услуге продвижения */
    ServiceInfoV1: {
      /** @description Признак, что тип услуги устарел и более недоступен для подключения */
      isDeprecated?: boolean
      /** @description Наименование типа услуги */
      name: string
      /** @description Идентификатор типа услуги */
      slug: string
    }
    /** @description Информация об услуге продвижения */
    ServiceV1: {
      /**
       * Format: date-time
       * @description Дата и время завершения продвижения
       */
      endDate?: string
      /** @description Наименование услуги */
      name?: string
      /** @description Тип услуги */
      slug?: string
      /**
       * Format: date-time
       * @description Дата и время начала продвижения
       */
      startDate?: string
    }
    /** @description Информация об услуге продвижения */
    ServicesByItemV1: {
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId?: number
      /** @description Список услуг по объявлению */
      services?: components['schemas']['ServiceV1'][]
    }
  }
  responses: never
  parameters: {
    /**
     * @description Токен для авторизации
     * @example Bearer ACCESS_TOKEN
     */
    AuthHeader: string
    /** @description Идентификатор сотрудника в иерархии аккаунтов */
    XAhEmployeeId: number | null
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  get_bbip_forecasts_by_items_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetBbipForecastByItemsV1Req']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetBbipForecastByItemsV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявление не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  create_bbip_order_for_items_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['OrderBbipForItemsV1Req']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OrderBbipForItemsV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Недостаточно средств */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['NotEnoughMoneyError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявление не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  get_bbip_suggests_by_items_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetBbipSuggestsV1Req']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetBbipSuggestsV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявление не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  get_dict_of_services_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
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
          'application/json': components['schemas']['GetDictOfServicesV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  get_services_by_items_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetServicesByItemsV1Req']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetServicesByItemsV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявления не найдены */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  list_orders_by_user_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ListOrdersByUserV1Req']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListOrdersByUserV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявление не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  get_order_status_v1: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetOrderStatusV1Req']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetOrderStatusV1Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявление не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
  get_services_by_items_v2: {
    parameters: {
      query?: never
      header?: {
        /** @description Идентификатор сотрудника в иерархии аккаунтов */
        'X-Ah-Employee-Id'?: components['parameters']['XAhEmployeeId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetServicesByItemsV1Req']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetServicesByItemsV2Resp']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка авторизации */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка доступа */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Объявления не найдены */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Ошибка обработки запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
      /** @description Внутренняя ошибка сервиса */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonError']
        }
      }
    }
  }
}
