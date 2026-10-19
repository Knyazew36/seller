// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/1/partner/tariff/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Информация о текущем тарифе пользователя
     * @description Возвращает информацию о текущем тарифе пользователя, включая остатки размещений
     *     по пакетам тарифа (LF).
     *
     *     **Данный метод доступен только пользователям с платным тарифом (Профи или Лидер) в недвижимости**
     */
    get: operations['GetTariffInfo']
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
    BadRequestError: {
      'bad-request': components['schemas']['ErrorMessage']
    }
    ErrorMessage: {
      message: string
    }
    ForbiddenError: {
      forbidden: components['schemas']['ErrorMessage']
    }
    GetTariffInfoOut: {
      success: components['schemas']['GetTariffInfoOut_success']
    }
    GetTariffInfoOut_location: {
      id: number
      parentId?: number | null
    }
    GetTariffInfoOut_package: {
      /** @description Размер пакета с учётом плана пользователя */
      commitSize: number
      /** @description Идентификатор пакета */
      id: number
      /** @description Размер (лимит) пакета */
      limit: number
      /** @description Локации пакета */
      locations: components['schemas']['GetTariffInfoOut_location'][]
      /** @description Микрокатегории пакета */
      microCategoryIds: number[]
      /** @description Остаток размещений в пакете */
      size: number
    }
    GetTariffInfoOut_success: {
      /** @description Уровень тарифа */
      levelId?: number | null
      /** @description Пакеты размещений (LF) тарифа */
      packages?: components['schemas']['GetTariffInfoOut_package'][]
      /**
       * @description Статус тарифа
       * @enum {string}
       */
      status: 'active' | 'inactive' | 'no_tariff'
      /** @description Вертикаль тарифа */
      verticalId?: number | null
    }
    InternalError: {
      'internal-error': components['schemas']['ErrorMessage']
    }
    UnauthenticatedError: {
      unauthenticated: components['schemas']['ErrorMessage']
    }
  }
  responses: {
    /** @description Bad Request */
    400: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['BadRequestError']
      }
    }
    /** @description Unauthenticated */
    401: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['UnauthenticatedError']
      }
    }
    /** @description Forbidden */
    403: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ForbiddenError']
      }
    }
    /** @description Internal error */
    500: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['InternalError']
      }
    }
  }
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  GetTariffInfo: {
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
          'application/json': components['schemas']['GetTariffInfoOut']
        }
      }
      400: components['responses']['400']
      401: components['responses']['401']
      403: components['responses']['403']
      500: components['responses']['500']
    }
  }
}
