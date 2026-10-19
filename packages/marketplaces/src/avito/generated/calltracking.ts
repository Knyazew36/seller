// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/calltracking/v1/getCallById/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Звонок по идентификатору
     * @description Возвращает информацию о звонке по его id(callId)
     */
    post: operations['get_call_by_id']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calltracking/v1/getCalls/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Звонки по времени
     * @description Возвращает список звонков с фильтром по времени звонка
     */
    post: operations['get_calls']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calltracking/v1/getRecordByCallId/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение аудиозаписи звонка по идентификатору
     * @description Возвращает запись звонка по его id (callId).
     *
     *     Мы гарантируем, что записи звонка доступны для получения в течение 3х месяцев после завершения звонка.
     *
     *     Записи звонка становятся доступны в данном API с некоторой задержкой после окончания звонка. Обычно эта задержка составляет до 30 минут.
     */
    get: operations['get_record_by_call_id']
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
    /** @description модель звонка */
    Call: {
      /** @description Номер телефона покупателя */
      buyerPhone: string
      /** @description ID звонка */
      callId: number
      /**
       * Format: datetime
       * @description Время, когда звонок был совершен
       */
      callTime: string
      /** @description ID объявления, по которому совершался звонок. Проставляется только если звонок был на номера Динамического КТ. */
      itemId?: number | null
      /** @description Номер телефона продавца */
      sellerPhone: string
      /** @description Длительность разговора */
      talkDuration: number
      /** @description Защитный номер, через который шел звонок */
      virtualPhone: string
      /** @description Длительность ожидания */
      waitingDuration: number
    }
    Error: {
      /**
       * @description Внутренний код ошибки Возможные значения: 0 - нет ошибки 1000 - пустой запрос 1001 - ошибка валидации 1002 - ошибка авторизации 1003 - внутренняя ошибка 1004 - не найдено
       * @enum {integer}
       */
      code: 0 | 1000 | 1001 | 1002 | 1003 | 1004
      message: string
    }
    GetCallByIdResponse: {
      call: components['schemas']['Call']
      error: components['schemas']['Error']
    }
    GetCallRecordError: {
      /**
       * @description Внутренний код ошибки Возможные значения: 0 - нет ошибки 1000 - пустой запрос 1001 - ошибка валидации 1002 - ошибка авторизации 1003 - внутренняя ошибка 1004 - не найдено 1005 - запись звонка еще не готова на стороне оператора
       * @enum {integer}
       */
      code: 0 | 1000 | 1001 | 1002 | 1003 | 1004 | 1005
      message: string
    }
    GetCallsResponse: {
      calls: components['schemas']['Call'][]
      error: components['schemas']['Error']
    }
  }
  responses: {
    /** @description Успешный ответ */
    GetCallById: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['GetCallByIdResponse']
      }
    }
    /** @description Успешный ответ или сообщение об ошибке */
    GetCalls: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['GetCallsResponse']
      }
    }
  }
  parameters: never
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
  get_call_by_id: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Тело запроса с идентификатором звонка */
    requestBody: {
      content: {
        'application/json': {
          callId: number
        }
      }
    }
    responses: {
      200: components['responses']['GetCallById']
    }
  }
  get_calls: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Тело запроса с фильтрами по времени звонка */
    requestBody: {
      content: {
        'application/json': {
          /**
           * Format: RFC3339
           * @description Время с которого нужно начинать поиск звонков по callTime (строка в формате RFC3339)
           * @example 2021-01-02T00:00:00Z
           */
          dateTimeFrom: string
          /**
           * Format: RFC3339
           * @description Время до которого нужно искать заонки по callTime (строка в формате RFC3339). Если не указано, используется dateTimeFrom + 1 месяц. Максимально возможное значение - dateTimeFrom + 3 месяца.
           * @example 2021-03-02T23:59:59Z
           */
          dateTimeTo?: string | null
          /** @description Размер выборки */
          limit: number
          /** @description Смещение выборки */
          offset: number
        }
      }
    }
    responses: {
      200: components['responses']['GetCalls']
    }
  }
  get_record_by_call_id: {
    parameters: {
      query: {
        /** @description Идентификатор звонка */
        callId: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          /** @description Заголовок содержит размер объекта */
          'Content-Length'?: number
          /** @description Заголовок будет содержать тип возвращаемого контента (audio/mpeg) */
          'Content-Type'?: string
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCallRecordError']
        }
      }
      /** @description Need authorization */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCallRecordError']
        }
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCallRecordError']
        }
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCallRecordError']
        }
      }
      /** @description Too early */
      425: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCallRecordError']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCallRecordError']
        }
      }
    }
  }
}
