// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/cpxpromo/1/getBids/{itemId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение детализированной информации о действующих и доступных ценах за целевые действия и бюджетах
     * @description Метод позволяет получить детализированную информацию о действующих и доступных ценах целевого действия (в копейках), бюджетах (в копейках) и преимуществах перед конкурентами.
     *     Максимальное количество запросов в минуту - 20
     */
    get: operations['getBids']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpxpromo/1/getPromotionsByItemIds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение текущих цен за целевое действие и бюджетов по нескольким объявлениям
     * @description Метод позволяет получить текущие цены целевого действия (в копейках) и бюджеты (в копейках) по нескольким объявлениям.
     *     Максимальное количество передаваемых объявлений - 200.
     *     Максимальное количество запросов в минуту - 400.
     */
    post: operations['getPromotionsByItemIds']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpxpromo/1/remove': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Остановка продвижения
     * @description Метод позволяет остановить продвижение и переключиться на цены из прайс-листа.
     *     Максимальное количество запросов в минуту - 300
     */
    post: operations['removePromotion']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpxpromo/1/setAuto': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Применение автоматической настройки
     * @description Метод позволяет установить бюджет (в копейках) и срок, за который потратится этот бюджет ("1d" — сутки; "7d" — неделя; "30d" — месяц). Бюджет указывать необязательно.
     *
     *     Автоматическое продвижение пока что нельзя запустить в категории «Транспорт»
     *
     *     Максимальное количество запросов в минуту - 10.
     */
    post: operations['saveAutoBid']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/cpxpromo/1/setManual': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Применение ручной настройки
     * @description Метод позволяет установить цену за целевое действие и лимит трат (обе суммы нужно указать в копейках).
     *
     *     Цена целевого действия должна быть больше минимальной цены (посмотреть минимальную цену можно в ручке получения получения детализированной информации о действующих и доступных ценах за целевые действия и бюджетах). Лимит трат указывать необязательно.
     *
     *     Максимальное количество запросов в минуту - 20.
     */
    post: operations['saveManualBid']
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
    AutoBid: {
      /**
       * @description Тип события (1 - звонок | 5 - пакет кликов | 7 - мессенджер, передача контакта в чате)
       * @example 5
       */
      actionTypeID: number
      /**
       * @description Текущий бюджет в копейках
       * @example 1400
       */
      budgetPenny: number
      /**
       * @description Тип бюджета ("1d" - дневной | "7d" - недельный | "30d" - месячный)
       * @example 1d
       */
      budgetType: string
      /**
       * @description Идентификатор объявления
       * @example 123456789
       */
      itemID: number
    }
    ManualBid: {
      /**
       * @description Тип события (1 - звонок | 5 - пакет кликов | 7 - мессенджер, передача контакта в чате)
       * @example 5
       */
      actionTypeID: number
      /**
       * @description Текущая цена за целевое действие в копейках
       * @example 1400
       */
      bidPenny: number
      /**
       * @description Идентификатор объявления
       * @example 123456789
       */
      itemID: number
      /**
       * @description Дневной лимит в копейках
       * @example 192400
       */
      limitPenny?: number | null
    }
    RemovePromotion: {
      /**
       * @description Идентификатор объявления
       * @example 123456789
       */
      itemID: number
    }
    auto: {
      /** @description Текущий бюджет (в копейках) */
      budgetPenny?: number | null
      /** @description Тип бюджета ("1d" - дневной | "7d" - недельный | "30d" - месячный) */
      budgetType?: string | null
      dailyBudget: components['schemas']['budget']
      /** @description Максимальный бюджет (в копейках) */
      maxBudgetPenny: number
      /** @description Минимальный бюджет (в копейках) */
      minBudgetPenny: number
      monthlyBudget: components['schemas']['budget']
      weeklyBudget: components['schemas']['budget']
    } | null
    autoPromotion: {
      /** @description Текущий бюджет в копейках */
      budgetPenny: number
      /** @description Тип бюджета ("1d" - дневной | "7d" - недельный | "30d" - месячный) */
      budgetType: string
    } | null
    bid: {
      /** @description Количество процентных пунктов. (На сколько выше в сравнении с конкурентами) */
      compare: number
      /** @description Максимальное кол-во ЦД за цену ЦД */
      maxForecast: number
      /** @description Минимальное кол-во ЦД за цену ЦД */
      minForecast: number
      /** @description Цена за целевое действие (в копейках) */
      valuePenny: number
    }
    budget: {
      budgets: components['schemas']['budgetValue'][]
      /** @description Максимальный лимит (в копейках) */
      maxLimitPenny: number
      /** @description Минимальный лимит (в копейках) */
      minLimitPenny: number
      /** @description Рекомендованный лимит (в копейках) */
      recBudgetPenny: number
    }
    budgetValue: {
      /** @description Количество процентных пунктов. (На сколько выше в сравнении с конкурентами) */
      compare: number
      /** @description Максимальное кол-во ЦД за цену ЦД */
      maxForecast: number
      /** @description Минимальное кол-во ЦД за цену ЦД */
      minForecast: number
      /** @description Бюджет (в копейках) */
      valuePenny: number
    }
    error: {
      /**
       * @description Текст ошибки
       * @example Что-то пошло не так
       */
      message: string
    }
    getBidsOut: {
      /** @description Тип события (1 - звонок | 5 - пакет кликов | 7 - мессенджер, передача контакта в чате) */
      actionTypeID: number
      auto?: components['schemas']['auto']
      manual?: components['schemas']['manual']
      /** @description Выбранный тип продвижения ("manual" - ручное продвижение | "auto" - автоматическое продвижение) */
      selectedType: string
    }
    getPromotionsByItemIdsIn: {
      itemIDs: number[]
    }
    getPromotionsByItemIdsOut: {
      items: {
        /** @description Тип события (1 - звонок | 5 - пакет кликов | 7 - мессенджер, передача контакта в чате) */
        actionTypeID: number
        autoPromotion?: components['schemas']['autoPromotion']
        /** @description Идентификатор объявления */
        itemID: number
        manualPromotion?: components['schemas']['manualPromotion']
      }[]
    }
    manual: {
      /** @description Текущая цена за целевое действие (в копейках) */
      bidPenny?: number | null
      bids: components['schemas']['bid'][]
      /** @description Дневной лимит (в копейках) */
      limitPenny?: number | null
      /** @description Максимальная цена за целевое действие (в копейках) */
      maxBidPenny: number
      /** @description Максимальный дневной лимит (в копейках) */
      maxLimitPenny: number
      /** @description Минимальная цена за целевое действие (в копейках) */
      minBidPenny: number
      /** @description Минимальный дневной лимит (в копейках) */
      minLimitPenny: number
      /** @description Рекомендуемая цена за целевое действие (в копейках) */
      recBidPenny: number
    } | null
    manualPromotion: {
      /** @description Текущая цена за целевое действие в копейках */
      bidPenny: number
      /** @description Дневной лимит в копейках */
      limitPenny?: number | null
    } | null
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
        'application/json': components['schemas']['error']
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
  getBids: {
    parameters: {
      query?: never
      header?: never
      path: {
        itemId: number
      }
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
          'application/json': components['schemas']['getBidsOut']
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
  getPromotionsByItemIds: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['getPromotionsByItemIdsIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['getPromotionsByItemIdsOut']
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
  removePromotion: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemovePromotion']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * @description Текст сообщения
             * @example Ваше объявление теперь тарифицируется по базовой цене целевого действия
             */
            message: string
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
  saveAutoBid: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AutoBid']
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
  saveManualBid: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ManualBid']
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
