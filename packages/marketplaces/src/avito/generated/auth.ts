// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение access token
     * @description Получения временного ключа для авторизации
     */
    post: operations['getAccessToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/token\u200E': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение access token
     * @description Получения временного ключа для авторизации запроса от лица пользователя
     */
    post: operations['getAccessTokenAuthorizationCode']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/token\u200E\u200E': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Обновление access token
     * @description Обновление временного ключа для авторизации запроса от лица пользователя
     */
    post: operations['refreshAccessTokenAuthorizationCode']
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
    GetTokenOAuthRequest: {
      client_id: string
      client_secret: string
      code: string
      /** @default authorization_code */
      grant_type: string
    }
    GetTokenRequest: {
      client_id: string
      client_secret: string
      /** @default client_credentials */
      grant_type: string
    }
    RefreshRequest: {
      client_id: string
      client_secret: string
      /**
       * @description Тип OAuth flow. Строка refresh_token
       * @default refresh_token
       */
      grant_type: string
      refresh_token: string
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
  getAccessToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': components['schemas']['GetTokenRequest']
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
           *       "access_token": "kChqt9ewQNAcwgbHp4yFd5",
           *       "expires_in": 86400,
           *       "token_type": "Bearer"
           *     }
           */
          'application/json': {
            /** @description Ключ для временной авторизации в системе */
            access_token?: string
            /**
             * Format: int32
             * @description Время жизни ключа в секундах
             */
            expires_in?: number
            /** @description Тип ключа авторизации */
            token_type?: string
          }
        }
      }
    }
  }
  getAccessTokenAuthorizationCode: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': components['schemas']['GetTokenOAuthRequest']
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
           *       "access_token": "kChqt9ewQNAcwgbHp4yFd5",
           *       "expires_in": 86400,
           *       "refresh_token": "QNAcwgbHQNAcwgbHkChqt9ewQNAcwgbHp4yFd5",
           *       "scope": "messenger:read,messenger:write",
           *       "token_type": "Bearer"
           *     }
           */
          'application/json': {
            /** @description Ключ для временной авторизации в системе */
            access_token?: string
            /**
             * Format: int32
             * @description Время жизни ключа в секундах
             */
            expires_in?: number
            /** @description Ключ для обновления токена доступа */
            refresh_token?: string
            /** @description Полученный скоуп */
            scope?: string
            /** @description Тип ключа авторизации */
            token_type?: string
          }
        }
      }
    }
  }
  refreshAccessTokenAuthorizationCode: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': components['schemas']['RefreshRequest']
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
           *       "access_token": "5dFy4pHbgwcANQwe9tqhCk",
           *       "expires_in": 86400,
           *       "refresh_token": "5dFy4pHbgwcANQwe9tqhCkHbgwcANQHbgwcANQ",
           *       "scope": "messenger:read,messenger:write",
           *       "token_type": "Bearer"
           *     }
           */
          'application/json': {
            /** @description Новый ключ для временной авторизации в системе */
            access_token?: string
            /**
             * Format: int32
             * @description Время жизни ключа в секундах
             */
            expires_in?: number
            /** @description Новый ключ для обновления токена доступа */
            refresh_token?: string
            /** @description Полученный скоуп */
            scope?: string
            /** @description Тип ключа авторизации */
            token_type?: string
          }
        }
      }
    }
  }
}
