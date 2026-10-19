// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/cpa/v1/call/{call_id}': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path: {
        /** @description Идентификатор звонка */
        call_id: number
      }
      cookie?: never
    }
    /**
     * Запись звонка (deprecated)
     * @deprecated
     * @description __DEPRECATED__
     *     __Используйте endpoint [get_record_by_call_id](https://developers.avito.ru/api-catalog/calltracking/documentation#operation/get_record_by_call_id)__
     *     Получение записи звонка по идентификатору
     */
    get: operations['getCall']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v1/chatByActionId/{actionId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Чат
     * @description Получение модели чата по идентификатору Максимальное количество запросов в минуту - 3.
     */
    get: operations['chatByActionId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v1/chatsByTime': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Чаты по времени (deprecated)
     * @description Получение списка чатов по времени создания (deprecated). Максимальное количество запросов в минуту - 60.
     */
    post: operations['chatsByTime']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v1/createComplaint': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание жалобы для звонков
     * @description Создание жалобы на звонок по идентификатору. Максимальное количество запросов в минуту - 1.
     */
    post: operations['postCreateComplaint']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v1/createComplaintByActionId': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание жалобы для звонков/чатов
     * @description Создание жалобы на целевое действие по actionId. Максимальное количество запросов в минуту - 3.
     */
    post: operations['createComplaintByActionId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v1/phonesInfoFromChats': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Информация по номерам телефонов из целевых чатов
     * @description Получение информации по номерам телефонов из целевых чатов Максимальное количество запросов в минуту - 5.
     */
    post: operations['phonesInfoFromChats']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v2/balanceInfo': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Баланс (deprecated)
     * @deprecated
     * @description __Используйте endpoint [balanceInfoV3](https://developers.avito.ru/api-catalog/cpa/documentation#operation/balanceInfoV3)__<br> Получение информации о балансе пользователя (баланс, долг, аванс текущего месяца) в копейках. Максимальное количество запросов в минуту - 1.
     */
    post: operations['balanceInfoV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v2/callById': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Звонок
     * @deprecated
     * @description Получение модели звонка по идентификатору
     */
    post: operations['getCallByIdV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v2/callsByTime': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Звонки по времени
     * @description Получение списка звонков по времени создания. Максимальное количество запросов в минуту - 1.
     */
    post: operations['getCallsByTimeV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v2/chatsByTime': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Чаты по времени
     * @description Получение списка чатов по времени создания. Максимальное количество запросов в минуту - 40.
     */
    post: operations['chatsByTime_post_cpa_v2_chatsByTime']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpa/v3/balanceInfo': {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Баланс
     * @description Получение информации о текущем балансе пользователя в копейках. Максимальное количество запросов в минуту - 1.
     */
    post: operations['balanceInfoV3']
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
    Call: {
      /** @description Телефонный номер покупателя */
      buyerPhone?: string
      /** @description Время поступления звонка (строка в формате RFC3339) */
      createTime?: string
      /** @description Время разговора */
      duration?: number
      /**
       * Format: int64
       * @description Идентификатор звонка
       */
      id?: number
      /** @description Флаг, указывающий на то, доступен ли арбитраж по звонку */
      isArbitrageAvailable?: boolean
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId?: number
      /**
       * Format: int64
       * @description Цена звонка CPA в рублях
       */
      price?: number
      /** @description Ссылка на запись звонка */
      recordUrl?: string
      /** @description Реальный телефонный номер продавца */
      sellerPhone?: string
      /** @description Время начала разговора (строка в формате RFC3339) */
      startTime?: string
      /**
       * Format: int64
       * @description Статус звонка (0 - целевой, 1 - на модерации, 2 - помечен как целевой после модерации,
       *     3 - помечен как нецелевой после модерации)
       * @enum {integer}
       */
      statusId?: 0 | 1 | 2 | 3
      /** @description Виртуальный телефонный номер продавца */
      virtualPhone?: string
      /** @description Время ожидания */
      waitingDuration?: number
    }
    CallById: {
      /**
       * Format: int64
       * @description Идентификатор звонка
       */
      callId: number
    }
    CallV2: {
      /**
       * @description Телефонный номер покупателя
       * @example 89444988703
       */
      buyerPhone?: string
      /**
       * @description Время поступления звонка (строка в формате RFC3339)
       * @example 2024-01-12T14:52:10+03:00
       */
      createTime?: string
      /**
       * @description Время разговора в секундах
       * @example 119
       */
      duration?: number
      /**
       * @description Название группы
       * @example Автомобили · Новые
       */
      groupTitle?: string
      /**
       * Format: int64
       * @description Идентификатор звонка
       * @example 2024
       */
      id?: number
      /**
       * @description Флаг, указывающий на то, доступен ли арбитраж по звонку
       * @example true
       */
      isArbitrageAvailable?: boolean
      /**
       * Format: int64
       * @description Идентификатор объявления
       * @example 2164143441
       */
      itemId?: number
      /**
       * Format: int64
       * @description Цена звонка CPA в копейках
       * @example 171600
       */
      price?: number
      /**
       * @description Ссылка на запись звонка
       * @example https://prod.k.avito.ru/service-open-api-proxy/cpa/v1/call/3xx8
       */
      recordUrl?: string
      /**
       * @description Реальный телефонный номер продавца
       * @example 89444988705
       */
      sellerPhone?: string
      /**
       * @description Время начала разговора (строка в формате RFC3339)
       * @example 2024-01-12T14:52:00+03:00
       */
      startTime?: string
      /**
       * Format: int64
       * @description Статус звонка (0 - целевой, 1 - на модерации, 2 - помечен как целевой после модерации,
       *     3 - помечен как нецелевой после модерации)
       * @enum {integer}
       */
      statusId?: 0 | 1 | 2 | 3
      /**
       * @description Виртуальный телефонный номер продавца
       * @example 89444988704
       */
      virtualPhone?: string
      /**
       * @description Время ожидания в секундах
       * @example 0.0109999
       */
      waitingDuration?: number
    }
    CallsByTime: {
      /**
       * @description Время с которого нужно начинать поиск звонков по startTime (строка в формате RFC3339)
       * @example 2021-01-02T15:04:05Z
       */
      dateTimeFrom: string
      /**
       * Format: int64
       * @description Размер выборки
       */
      limit: number
      /**
       * Format: int64
       * @description Смещение выборки (по-умолчанию 0). Для улучшения производительности лучше использовать
       *     максимальный startTime звонка из предыдущей выборки
       */
      offset?: number
    }
    CpaError: {
      /**
       * Format: int64
       * @description Внутренний код ошибки
       *
       *     Возможные значения:
       *     - 1000 - пустой запрос
       *     - 1001 - ошибка валидации
       *     - 1002 - ошибка авторизации
       *     - 1003 - внутренняя ошибка
       *     - 1004 - не найдено
       */
      code?: number
      /**
       * @description Текст ошибки
       * @example ЦД недоступно для обжалования
       */
      message?: string
    }
    CpaErrorChat: {
      result?: {
        /**
         * @description Текст ошибки
         * @example invalid access token
         */
        message?: string
        /** @example false */
        status?: boolean
      }
    }
    CreateComplaint: {
      /**
       * Format: int64
       * @description Идентификатор звонка
       */
      callId: number
      /** @description Текст жалобы */
      message: string
    }
    CreateComplaintV4In: {
      /**
       * @description ID действия (action), по которому подаётся жалоба
       * @example 123456789
       */
      actionId: number
      /**
       * @description Сообщение, прикрепленное к жалобе
       * @example это не был обмен контактами в чате
       */
      message: string
    }
    CreateComplaintV4Out: {
      /** @description Успех/неуспех создания жалобы */
      success?: boolean
    }
    Error: {
      /** @description Internal error code */
      code: number
      /** @description Human readable error text */
      message: string
      payload?: components['schemas']['ErrorPayload']
    }
    ErrorPayload: {
      /** @description Баланс пользователя */
      balance?: number
    }
    InternalError: {
      result: {
        error: {
          /**
           * Код ошибки
           * @example 1003
           */
          code: number
          /**
           * Текст ошибки
           * @example не удалось получить результаты поиска чатов
           */
          message: string
        }
      }
    }
    OpenAPIChatsByTimeFilters: {
      dateFrom: string
      dateTo: string
    }
    OpenAPIChatsByTimeIn: {
      /**
       * @description Время с которого нужно начинать поиск чатов по date (строка в формате RFC3339)
       * @example 2021-01-02T15:04:05Z
       */
      dateTimeFrom: string
      /** @description Размер выборки (значение в поле должно быть не более 100) */
      limit: number
      /** @description Смещение выборки (по-умолчанию 0). Для улучшения производительности лучше использовать максимальный startTime чата из предыдущей выборки */
      offset: number
    }
    OpenAPIChatsByTimeMetaFilters: {
      active: components['schemas']['OpenAPIChatsByTimeFilters']
    }
    OpenAPIChatsByTimeOut: {
      /** @description Данные с чатами */
      chats: components['schemas']['OpenApiChatsComposition'][]
      filters: components['schemas']['OpenAPIChatsByTimeMetaFilters']
      /** @description Количество чатов */
      total: number
    }
    OpenAPIChatsByTimeV2In: {
      /**
       * @description Время с которого нужно начинать поиск чатов по date (строка в формате RFC3339)
       * @example 2021-01-02T15:04:05Z
       */
      dateTimeFrom: string
      /** @description Размер выборки (значение в поле должно быть не более 100) */
      limit: number
      /** @description Смещение выборки (по-умолчанию 0). Для улучшения производительности лучше использовать максимальный date чата из предыдущей выборки */
      offset: number
    }
    OpenAPIChatsByTimeV2Out: {
      /** @description Данные с чатами */
      chats: components['schemas']['OpenApiChatsComposition'][]
      filters: components['schemas']['OpenAPIChatsByTimeMetaFilters']
      /** @description Количество чатов */
      total: number
    }
    OpenAPIPhonesInfoFromChatsIn: {
      /** @description Время с которого начинается поиск */
      dateTimeFrom: string
      limit: number
      offset: number
    }
    OpenAPIPhonesInfoFromChatsOut: {
      /**
       * Format: string
       * @description Время отправки сообщения
       */
      date: string
      /** @description Прайсинговая группа объявления */
      group: string
      /** @description ID ЦД */
      id: number
      /** @description Номер телефона из сообщения */
      phone_number?: string | null
      /** @description Цена ЦД в копейках */
      pricePenny: number
      /** @description URL до картинки с превью */
      url: string
    }
    OpenApiChat: {
      /**
       * @description ID ЦД
       * @example 1806968517
       */
      actionId: number
      /**
       * @description ID канала чата
       * @example u2i-4HzWMRUoAAVnH5i2CC8meg
       */
      channelId: string
      /**
       * @description Тип контакта (email/phone/nick/other)
       * @example Телефон
       */
      contactType: string
      /**
       * Format: string
       * @description Время отправки сообщения
       * @example 2023-04-05T12:36:33+03:00
       */
      date: string
      /**
       * @description Прайсинговая группа объявления
       * @example Автомобили · Новые
       */
      group: string
      /**
       * @description Текст сообщения
       * @example Привет набери меня 89689999999
       */
      message: string
      /**
       * @description ID сообщения
       * @example 030dcaa076676cf3f76b4eb7771bec15
       */
      messageId: string
      /**
       * @description Цена ЦД в копейках
       * @example 346300
       */
      pricePenny: number
      /**
       * @description Статус ЦД
       * @example Целевой
       */
      status: string
      /**
       * @description Тип целевого чата (Контакты/Cделка/Переключения)
       * @example Контакты
       */
      targetChatType: string
    }
    OpenApiChatByActionIdIn: {
      actionId: number
      /** @description User ID */
      userId?: number
    }
    OpenApiChatByActionIdOut: {
      chat?: components['schemas']['OpenApiChatsComposition']
      error?: components['schemas']['Error']
    }
    OpenApiChatsBuyer: {
      /**
       * @description ID баера
       * @example 251670956
       */
      buyerId: number
      /**
       * @description Имя баера
       * @example Дмитрий
       */
      name: string
      /**
       * @description URL до картинки с превью
       * @example https://static.avito.ru/stub_avatars/%D0%90/***_256x256.png
       */
      url: string
    }
    OpenApiChatsComposition: {
      buyer: components['schemas']['OpenApiChatsBuyer']
      chat: components['schemas']['OpenApiChat']
      /** @description Доступность опротестования ЦД */
      isArbitrageAvailable: boolean
      item: components['schemas']['OpenApiChatsItem']
    }
    OpenApiChatsItem: {
      /**
       * @description ID объявления
       * @example 2899744878
       */
      itemId: number
      /**
       * @description Цена объявления в копейках
       * @example 34430000
       */
      pricePenny: number
      /**
       * @description Название объявления
       * @example Avatr 11, 2023
       */
      title: string
      /**
       * @description URL до картинки с превью
       * @example https://00.img.avito.st/image/1/1.MWVPp7a-11YxhBk2PIYceYXsFn4rxDD-NQQafjv8GB4wrBZ8.pnMhzb5SRXbfS8mdsWWNNrliVOs1IMusB-7AgMnoSuI
       */
      url: string
    }
    OpenApiError: {
      result: {
        error: {
          /**
           * Код ошибки
           * @example 1001
           */
          code: number
          /**
           * Текст ошибки
           * @example Ошибка валидации запроса
           */
          message: string
          payload?: {
            /** @example invalid character  looking for beginning of object key string */
            error?: string
          }
        }
      }
    }
    OpenApiErrorOld: {
      result?: {
        /** Код ошибки */
        code?: number
        /** Текст ошибки */
        message?: string
        payload?: {
          [key: string]: unknown
        }
      }
    } | null
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
    validatingError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 400
         */
        code: number
        /** @description Информация об ошибке валидации параметров в формате ключ-значение */
        fields?: Record<string, never> | null
        /**
         * @description Сообщение об ошибке
         * @example Validation error
         */
        message: string
      }
    }
  }
  responses: {
    /** @description Bad Request */
    400: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OpenApiError']
      }
    }
    /** @description Unauthorized */
    401: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['CpaError']
      }
    }
    /** @description Forbidden */
    403: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['CpaErrorChat']
      }
    }
    /** @description Not Found */
    404: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['CpaError']
      }
    }
    /** @description Too Many Requests */
    429: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Error']
      }
    }
    /** @description Internal Error */
    500: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['InternalError']
      }
    }
  }
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
  getCall: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path: {
        /** @description Идентификатор звонка */
        call_id: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          /** @description Заголовок содержит размер объекта */
          'Content-Length'?: string
          /** @description Заголовок будет содержать тип возвращаемого контента (audio/mpeg) */
          'Content-Type'?: string
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Звонок не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
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
  chatByActionId: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path: {
        /** @description Идентификатор целевого действия */
        actionId: number
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
            chat?: components['schemas']['OpenApiChatsComposition']
          }
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      404: components['responses']['404']
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
      500: components['responses']['500']
    }
  }
  chatsByTime: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    /** @description Время с которого нужного производить поиск чатов, размер выборки и смещение */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "dateTimeFrom": "2023-03-21T15:04:05Z",
         *       "limit": 100,
         *       "offset": 0
         *     }
         */
        'application/json': components['schemas']['OpenAPIChatsByTimeIn']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            chats?: components['schemas']['OpenApiChatsComposition'][]
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
      403: components['responses']['403']
      404: components['responses']['404']
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
      500: components['responses']['500']
    }
  }
  postCreateComplaint: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    /** @description Идентификатор звонка и текст жалобы */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "callId": 218491749,
         *       "message": "Клиент позвонил по ошибке"
         *     }
         */
        'application/json': components['schemas']['CreateComplaint']
      }
    }
    responses: {
      /** @description Успешный ответ или сообщение об ошибке */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: components['schemas']['CpaError']
            /** Флаг статуса запроса */
            success?: boolean
          }
        }
      }
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
    }
  }
  createComplaintByActionId: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CreateComplaintV4In']
      }
    }
    responses: {
      /** @description Успешный ответ или сообщение об ошибке */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: components['schemas']['CpaError']
            /** Флаг статуса запроса */
            success?: boolean
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
      403: components['responses']['403']
      404: components['responses']['404']
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
      500: components['responses']['500']
    }
  }
  phonesInfoFromChats: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    /** @description Время с которого нужного производить поиск чатов, размер выборки и смещение */
    requestBody?: {
      content: {
        'application/json': components['schemas']['OpenAPIPhonesInfoFromChatsIn']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            results: components['schemas']['OpenAPIPhonesInfoFromChatsOut'][]
            /**
             * @description Число найденных чатов
             * @example 128
             */
            total: number
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
      403: components['responses']['403']
      404: components['responses']['404']
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
      500: components['responses']['500']
    }
  }
  balanceInfoV2: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Успешный ответ или сообщение об ошибке */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * Аванс, выставленный на текущий период в копейках
             * @example 1
             */
            advance?: number
            /**
             * Текущий баланс пользователя в копейках
             * @example -5000
             */
            balance?: number
            /**
             * Долг пользователя за предыдущий период в копейках
             * @example 0
             */
            debt?: number
            error?: components['schemas']['CpaError']
          }
        }
      }
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
    }
  }
  getCallByIdV2: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    /** @description Идентификатор звонка */
    requestBody?: {
      content: {
        'application/json': components['schemas']['CallById']
      }
    }
    responses: {
      /** @description Успешный ответ или сообщение об ошибке */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            calls?: components['schemas']['CallV2']
            error?: components['schemas']['CpaError']
          }
        }
      }
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
    }
  }
  getCallsByTimeV2: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    /** @description Время с которого нужного производить поиск звонков, размер выборки и смещение */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "dateTimeFrom": "2021-01-02T15:04:05Z",
         *       "limit": 1000,
         *       "offset": 100
         *     }
         */
        'application/json': components['schemas']['CallsByTime']
      }
    }
    responses: {
      /** @description Успешный ответ или сообщение об ошибке */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** Полученные звонки */
            calls?: components['schemas']['CallV2'][]
            error?: components['schemas']['CpaError']
          }
        }
      }
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
    }
  }
  chatsByTime_post_cpa_v2_chatsByTime: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    /** @description Время с которого нужного производить поиск чатов, размер выборки и смещение */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "dateTimeFrom": "2023-03-21T15:04:05Z",
         *       "limit": 100,
         *       "offset": 0
         *     }
         */
        'application/json': components['schemas']['OpenAPIChatsByTimeV2In']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            chats?: components['schemas']['OpenApiChatsComposition'][]
          }
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
      403: components['responses']['403']
      404: components['responses']['404']
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
      500: components['responses']['500']
    }
  }
  balanceInfoV3: {
    parameters: {
      query?: never
      header: {
        /** @description Имя сервиса, отправляющего запрос */
        'X-Source': components['parameters']['sourceHeader']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': string
      }
    }
    responses: {
      /** @description Успешный ответ или сообщение об ошибке */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * Текущий баланс пользователя в копейках
             * @example -5000
             */
            balance?: number
          }
        }
      }
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
    }
  }
}
