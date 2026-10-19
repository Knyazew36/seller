// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/checkAhUserV1': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: string
        /**
         * @description выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: string
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение информации о статусе пользователя в ИА
     * @deprecated
     * @description Устаревший метод, используйте /checkAhUserV2 либо /getAhInfoV1. Ручка для получения информации по ИА для пользователя.
     */
    get: operations['checkAhUserV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/checkAhUserV2': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: string
        /**
         * @description выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: string
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение информации о статусе пользователя в ИА
     * @description Ручка для получения информации по ИА для пользователя. Если запрос делается от имени сотрудника, то необходимо указать заголовок X-Employee-Of.
     */
    get: operations['checkAhUserV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/getAhInfoV1': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: string
        /**
         * @description выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: string
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение полной информации о статусе пользователя в ИА
     * @description Ручка для получения информации по ИА для пользователя. Если запрос делается от имени сотрудника, то будет возвращён список компаний, которым он принадлежит.
     */
    get: operations['getAhInfoV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/getEmployeesV1': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение списка сотрудников иерархии
     * @description Для взаимодействия с иерархией аккаунтов необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    get: operations['getEmployeesV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/linkItemsV1': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Прикрепление сотрудника иерархии к объявлениям, перезакрепление объявлений между сотрудниками иерархии
     * @description Для взаимодействия с иерархией аккаунтов необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    post: operations['linkItemsV1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/listCompanyPhonesV1': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение списка телефонов компании
     * @description Для взаимодействия с иерархией аккаунтов необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    get: operations['listCompanyPhonesV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/listItemsByEmployeeIdV1': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение списка объявлений по сотруднику
     * @description Ручка для получения списка объявлений по сотруднику с фильтром по категории объявлений. Получение объявлений по компании недоступно.
     */
    post: operations['listItemsByEmployeeIdV1']
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
    CompanyPhonesResult: {
      result?: {
        /** @description Курсор следующей страницы. Если не вернулся, список закончился. */
        cursor?: string | null
        /** @description массив номеров телефонов */
        phones?: string[]
      }
    }
    /** @description Данные сотрудников иерархии для компании */
    GetEmployeesResult: {
      /**
       * @description Email сотрудника иерархии
       * @example aristarh@example.com
       */
      email?: string | null
      /**
       * @description Идентификатор сотрудника иерархии
       * @example 10800
       */
      employeeId: number
      /**
       * @description Признак того, что пользователь является руководителем
       * @example true
       */
      isChief?: boolean
      /**
       * @description Имя сотрудника иерархии в компании
       * @example Аристарх Евгеньевич
       */
      name?: string | null
      /** @description номера телефонов */
      phones?: string[]
    }[]
    LinkItems: {
      /**
       * @description Идентификатор сотрудника, к которому прилинкуются объявления
       * @example 10800
       */
      employeeId: number
      /**
       * @description Список идентификаторов объявлений для линковки (max 50)
       * @example [
       *       1023900,
       *       1090112,
       *       3610765
       *     ]
       */
      itemIds: number[]
    }
    ListItemsByEmployeeIdBody: {
      /** @description Идентификатор категории объявления */
      categoryId: number
      /** @description Идентификатор сотрудника, к которому прилинкованы объявления */
      employeeId: number
      /** @description Идентификатор объявления для пагинации по курсору */
      lastItemId?: number | null
    }
    /** @description Список объявлений по сотруднику компании */
    ListItemsByEmployeeIdResult: {
      /** @description Можно пагинировать дальше по списку */
      hasNext: boolean
      /** @description Список идентификаторов объявлений */
      items: number[]
    }
    OpenApiError: {
      error: {
        /**
         * @description Текст ошибки
         * @example Пользователь не авторизован
         */
        message: string
        /**
         * @description Кодовое название ошибки
         * @example user_unauthorized
         */
        slug: string
        /**
         * @description Тип ошибки
         * @example authorization_error
         */
        type?: string
      }
    }
  }
  responses: never
  parameters: {
    /**
     * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
     * @example authorization_code
     */
    'X-Oauth-Flow': string
    /**
     * @description Список зон доступа, полученных приложением
     * @example ah:access
     */
    'X-Oauth-Scopes': string
    /** @description Идентификатор компании, от имени которой работает сотрудник. */
    XEmployeeOf: number | null
    /**
     * @deprecated
     * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
     */
    XIsEmployee: boolean | null
    /** @description Токен для авторизации */
    authHeader: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  checkAhUserV1: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: string
        /**
         * @description выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: string
      }
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
          'application/json': {
            /** @description ИД компании, к которой принадлежит сотрудник */
            avitoCompanyId?: number | null
            /** @description Признак того, что пользователь является руководителем */
            isChief?: boolean
            /** @description Признак того, что пользователь является компанией */
            isCompany?: boolean
            /** @description Признак того, что пользователь является сотрудником */
            isEmployee?: boolean
          }
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /** Текст ошибки */
              message: string
              /** Кодовое название ошибки */
              slug: string
              /** Тип ошибки */
              type?: string
            }
          }
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /** Текст ошибки */
              message: string
              /** Кодовое название ошибки */
              slug: string
              /** Тип ошибки */
              type?: string
            }
          }
        }
      }
    }
  }
  checkAhUserV2: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: string
        /**
         * @description выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: string
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
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
          'application/json': {
            /** @description ИД компании, к которой принадлежит сотрудник */
            avitoCompanyId?: number | null
            /** @description Признак того, что пользователь является руководителем */
            isChief?: boolean
            /** @description Признак того, что пользователь является компанией */
            isCompany?: boolean
            /** @description Признак того, что пользователь является сотрудником */
            isEmployee?: boolean
          }
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
    }
  }
  getAhInfoV1: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: string
        /**
         * @description выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: string
      }
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
          'application/json': {
            company: {
              /** @description Является ли пользователь компанией */
              isCompany: boolean
            }
            employees: {
              /** @description Идентификатор компании */
              avitoCompanyId?: number | null
              /** @description Идентификатор сотрудника */
              employeeId?: number | null
              /** @description Является ли пользователь руководителем */
              isChief: boolean
            }[]
          }
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
    }
  }
  getEmployeesV1: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
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
          'application/json': components['schemas']['GetEmployeesResult']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Пользователь не авторизован
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example user_unauthorized
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example authorization_error
               */
              type?: string
            }
          }
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Error while processing request. Please, contact support
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example server
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example server
               */
              type?: string
            }
          }
        }
      }
    }
  }
  linkItemsV1: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['LinkItems']
      }
    }
    responses: {
      /** @description Успешный ответ */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Некорректные данные
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example validation
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example bad_data
               */
              type?: string
            }
          }
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Пользователь не авторизован
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example user_unauthorized
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example authorization_error
               */
              type?: string
            }
          }
        }
      }
      /** @description Перелинковка айтема недоступна */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Перелинковка айтемов не доступна
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example forbidden_link_items
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example link_items
               */
              type?: string
            }
          }
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Error while processing request. Please, contact support
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example server
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example server
               */
              type?: string
            }
          }
        }
      }
    }
  }
  listCompanyPhonesV1: {
    parameters: {
      query?: {
        /** @description Курсор для получения следующей страницы. Передается из предыдущего ответа. */
        cursor?: string | null
      }
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
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
          'application/json': components['schemas']['CompanyPhonesResult']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Пользователь не авторизован
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example user_unauthorized
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example authorization_error
               */
              type?: string
            }
          }
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error: {
              /**
               * @description Текст ошибки
               * @example Error while processing request. Please, contact support
               */
              message: string
              /**
               * @description Кодовое название ошибки
               * @example server
               */
              slug: string
              /**
               * @description Тип ошибки
               * @example server
               */
              type?: string
            }
          }
        }
      }
    }
  }
  listItemsByEmployeeIdV1: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Список зон доступа, полученных приложением
         * @example ah:access
         */
        'X-Oauth-Scopes'?: components['parameters']['X-Oauth-Scopes']
        /**
         * @description Выбранный флоу авторизации по протоколу OAuth 2.0 (client_credentials/authorization_code)
         * @example authorization_code
         */
        'X-Oauth-Flow'?: components['parameters']['X-Oauth-Flow']
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Пользователь работает от имени сотрудника компании.
         */
        'X-Is-Employee'?: components['parameters']['XIsEmployee']
        /** @description Идентификатор компании, от имени которой работает сотрудник. */
        'X-Employee-Of'?: components['parameters']['XEmployeeOf']
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ListItemsByEmployeeIdBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListItemsByEmployeeIdResult']
        }
      }
      /** @description Ошибка валидации */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Перелинковка айтема недоступна */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['OpenApiError']
        }
      }
    }
  }
}
