// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/trx-promo/1/apply': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Запуск продвижения
     * @description Запуск продвижения. Этот метод применяет настройки продвижения к вашим объявлениям.
     *
     *     Укажите плату за продвижение: от 1 до 15%.  Ещё выберите даты продвижения: все свободные или период.
     *
     *     Плата за продвижение прибавится к базовой комиссии — получится общая комиссия. А базовая комиссия будет [зависеть от мгновенного бронирования](https://www.avito.ru/realestate/kratkosrochnaya_arenda/test_commission/)
     *
     *     Например, если выбрали плату за продвижение 2%, то в поле commission  напишите «200».
     *
     *     В ответе вы получите детальную информацию по каждому объявлению. Если продвижение не запустится, вы увидите ошибки:
     *
     *     1001 — ошибка валидации параметров
     *
     *     1002 — вам недоступно продвижение за комиссию
     */
    post: operations['api_trx_promo_open_api_apply']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/trx-promo/1/cancel': {
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
     * @description Этот метод позволяет отменить действующее и запланированное продвижение для объявления.
     *
     *     В ответе вы получите детальную информацию по каждому объявлению. Если продвижение не отменится, в ответе вы получите ошибки:
     *
     *     1001 — ошибка валидации параметров
     *
     *     1002 — вам недоступно продвижение за комиссию
     */
    post: operations['api_trx_promo_open_api_cancel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/trx-promo/1/commissions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Проверка доступности продвижения и размера комиссий
     * @description Метод позволяет узнать, доступно ли продвижение за комиссию для объявлений, и посмотреть, какие комиссии будут.
     *
     *     В ответе вы получите детальную информацию по каждому объявлению. Коды ошибок:
     *
     *     1001 — ошибка валидации параметров
     */
    get: operations['api_trx_promo_open_api_commissions']
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
    /** requestBody */
    ApplyReq: {
      items: {
        /**
         * @description Комиссия за продвижение в сотых долях 1500 - 15%
         * @example 1500
         */
        commission: number
        /**
         * @description Дата начала продвижения
         * @example 2024-12-01
         */
        dateFrom: string
        /**
         * @description Дата окончания продвижения
         * @example 2024-12-31
         */
        dateTo?: string
        itemID: number
      }[]
    }
    /** okResponse */
    ApplyResponse: {
      success: {
        result: {
          error?: {
            /** @enum {integer} */
            code: 1001 | 1002
            message: string
          }
          itemID: number
          success: boolean
          validCommissionRange?: {
            /**
             * @description Шаг изменения комиссии в сотых долях 100 - 1%
             * @example 100
             */
            step: number
            /**
             * @description Максимальный размер комиссии в сотых долях 100 - 1%
             * @example 1500
             */
            valueMax: number
            /**
             * @description Минимальный размер комиссии в сотых долях 100 - 1%
             * @example 100
             */
            valueMin: number
          }
        }[]
      }
    }
    /** okResponse */
    CancelResponse: {
      success: {
        result: {
          error?: {
            /** @enum {integer} */
            code: 1001 | 1002
            message: string
          }
          itemID: number
          success: boolean
        }[]
      }
    }
    /** okResponse */
    CommissionResponse: {
      success: {
        result: {
          error?: {
            /** @enum {integer} */
            code: 1001
            message: string
          }
          itemID: number
          /** @description Флаг доступности промо */
          promoAvailable: boolean
          /** @description Доступные настройки продвижения */
          settings: {
            /**
             * @description Шаг изменения процента в сотых долях 100 - 1%
             * @example 100
             */
            step: number
            /**
             * @description Максимальный процент в сотых долях 100 - 1%
             * @example 1500
             */
            valueMax: number
            /**
             * @description Минимальный процент в сотых долях 100 - 1%
             * @example 100
             */
            valueMin: number
          }
        }[]
      }
    }
    /** BadRequestResponse */
    apiV3error400: {
      'bad-request': {
        message: string
      }
    }
    /** UnauthenticatedResponse */
    apiV3error401: {
      unauthenticated: {
        message: string
      }
    }
    /** ForbiddenResponse */
    apiV3error403: {
      forbidden: {
        message: string
      }
    }
    /** InternalErrorResponse */
    apiV3error500: {
      'internal-error': {
        message: string
      }
    }
  }
  responses: {
    /** @description BadRequest */
    errorV3BadRequest: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['apiV3error400']
      }
    }
    /** @description Forbidden */
    errorV3Forbidden: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['apiV3error403']
      }
    }
    /** @description InternalError */
    errorV3InternalError: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['apiV3error500']
      }
    }
    /** @description Unauthenticated */
    errorV3Unauthenticated: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['apiV3error401']
      }
    }
  }
  parameters: {
    /** @description Avito-ID пользователя */
    OAuthAuthenticatedUserId: string
    /** @description Выбранный флоу авторизации по протоколу OAuth 2.0 */
    OAuthFlow: string
    /** @description Список зон доступа */
    OAuthScopes: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  api_trx_promo_open_api_apply: {
    parameters: {
      query?: never
      header: {
        /** @description Список зон доступа */
        'x-oauth-scopes'?: components['parameters']['OAuthScopes']
        /** @description Выбранный флоу авторизации по протоколу OAuth 2.0 */
        'x-oauth-flow': components['parameters']['OAuthFlow']
        /** @description Avito-ID пользователя */
        'x-authenticated-userid': components['parameters']['OAuthAuthenticatedUserId']
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ApplyReq']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ApplyResponse']
        }
      }
      400: components['responses']['errorV3BadRequest']
      401: components['responses']['errorV3Unauthenticated']
      403: components['responses']['errorV3Forbidden']
      500: components['responses']['errorV3InternalError']
    }
  }
  api_trx_promo_open_api_cancel: {
    parameters: {
      query?: never
      header: {
        /** @description Список зон доступа */
        'x-oauth-scopes'?: components['parameters']['OAuthScopes']
        /** @description Выбранный флоу авторизации по протоколу OAuth 2.0 */
        'x-oauth-flow': components['parameters']['OAuthFlow']
        /** @description Avito-ID пользователя */
        'x-authenticated-userid': components['parameters']['OAuthAuthenticatedUserId']
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          itemIDs: number[]
        }
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CancelResponse']
        }
      }
      400: components['responses']['errorV3BadRequest']
      401: components['responses']['errorV3Unauthenticated']
      403: components['responses']['errorV3Forbidden']
      500: components['responses']['errorV3InternalError']
    }
  }
  api_trx_promo_open_api_commissions: {
    parameters: {
      query?: never
      header: {
        /** @description Список зон доступа */
        'x-oauth-scopes'?: components['parameters']['OAuthScopes']
        /** @description Выбранный флоу авторизации по протоколу OAuth 2.0 */
        'x-oauth-flow': components['parameters']['OAuthFlow']
        /** @description Avito-ID пользователя */
        'x-authenticated-userid': components['parameters']['OAuthAuthenticatedUserId']
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          itemIDs: number[]
        }
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommissionResponse']
        }
      }
      400: components['responses']['errorV3BadRequest']
      401: components['responses']['errorV3Unauthenticated']
      403: components['responses']['errorV3Forbidden']
      500: components['responses']['errorV3InternalError']
    }
  }
}
