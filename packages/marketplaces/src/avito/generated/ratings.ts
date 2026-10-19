// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/ratings/v1/answers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Отправка ответа на отзыв */
    post: operations['createReviewAnswerV1']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ratings/v1/answers/{answer_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор ответа на отзыв
         * @example 1234567
         */
        answer_id: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** Запрос на удаление ответа на отзыв */
    delete: operations['removeReviewAnswerV1']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ratings/v1/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Получение информации о рейтинге пользователя */
    get: operations['getRatingsInfoV1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ratings/v1/reviews': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Получение списка активных отзывов на пользователя с пагинацией */
    get: operations['getReviewsV1']
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
    CreateAnswerRequestBody: {
      /**
       * @description Текст ответа на отзыв
       * @example Спасибо за отзыв
       */
      message: string
      /**
       * @description ID отзыва
       * @example 1234567
       */
      reviewId: number
    }
    CreateAnswerResponse: {
      /**
       * @description Timestamp создания ответа
       * @example 1571654040
       */
      createdAt: number
      /**
       * @description ID ответа
       * @example 1234567
       */
      id: number
    }
    GetRatingInfoResponse: {
      /**
       * @description Включен ли рейтинг
       * @example true
       */
      isEnabled: boolean
      rating?: components['schemas']['Rating']
    }
    GetReviewsResponse: {
      /** @description Список отзывов */
      reviews: components['schemas']['Review'][]
      /**
       * @description Количество всех отзывов
       * @example 35
       */
      total: number
    }
    Rating: {
      /**
       * @description Общее количество активных отзывов
       * @example 21
       */
      reviewsCount: number
      /**
       * @description Количество активных отзывов, влияющих на формирование рейтинга
       * @example 12
       */
      reviewsWithScoreCount: number
      /**
       * Format: float
       * @description Оценка рейтинга
       * @example 4.3
       */
      score: number
    } | null
    /** @description Причина отклонения отзыва */
    RejectReason: {
      /**
       * @description ID причины отклонения
       * @example 100
       */
      id: number
      /**
       * @description Заголовок причины отклонения
       * @example Нецензурная лексика
       */
      title: string
    }
    RemoveAnswerResponse: {
      /**
       * @description Статус успешности запроса
       * @example true
       */
      success: boolean
    }
    /** @description Структура отзыва */
    Review: {
      answer?: components['schemas']['ReviewAnswer']
      /**
       * @description Можно ли оставить ответ на отзыв
       * @example true
       */
      canAnswer: boolean
      /**
       * @description Unix TimeStamp создания отзыва
       * @example 1571654040
       */
      createdAt: number
      /** @description Дополнительные опциональные параметры отзыва */
      extraParams?: {
        /**
         * @description VIN-номер автомобиля в объявлении
         * @example 4Y1SL65848Z411439
         */
        vin?: string
      }
      /**
       * @description ID отзыва
       * @example 92312343
       */
      id: number
      images?: components['schemas']['ReviewImage'][]
      item?: components['schemas']['ReviewItem']
      /**
       * @description Оценка
       * @example 5
       */
      score: number
      sender?: components['schemas']['ReviewSender']
      /**
       * @description Стадия сделки:
       *       * `done` - Сделка состоялась
       *       * `fell_through` - Сделка сорвалсь
       *       * `not_agree` - Не договорились
       *       * `not_communicate` - Не общались
       * @example fell_through
       * @enum {string}
       */
      stage: 'done' | 'fell_through' | 'not_agree' | 'not_communicate'
      /**
       * @description Текст отзыва
       * @example Отличный продавец! Рекомендую :)
       */
      text: string
      /**
       * @description Участвует ли отзыв в формирование оценки
       * @example true
       */
      usedInScore: boolean
    }
    /** @description Структура ответа на отзыв */
    ReviewAnswer: {
      /**
       * @description Unix TimeStamp создания ответа
       * @example 1571654040
       */
      createdAt: number
      /**
       * @description ID ответа
       * @example 1234567
       */
      id: number
      /** @description Список причин отклонения */
      reject_reasons?: components['schemas']['RejectReason'][]
      /**
       * @description Статус ответа:
       *       * `moderation` - на модерации
       *       * `published` - опубликован
       *       * `rejected` - отклонен
       * @example published
       * @enum {string}
       */
      status: 'moderation' | 'published' | 'rejected'
      /**
       * @description Текст ответа
       * @example Спасибо за отзыв!
       */
      text: string
    } | null
    /** @description Ошибка Bad Request */
    ReviewError: {
      /**
       * @description Код ошибки
       * @example validation
       */
      code: string
      /**
       * @description Текст ошибки
       * @example Field `offset` is not integer
       */
      message: string
    }
    /** @description Структура изображения, приложенного к отзыву */
    ReviewImage: {
      /**
       * @description Порядковый номер изображения
       * @example 1
       */
      number: number
      /** @description Список размеров изображения */
      sizes: components['schemas']['ReviewImageSize'][]
    }
    /** @description Структура изображения определенного разрешения */
    ReviewImageSize: {
      /**
       * @description Разрешение изображения в формате 100x100
       * @example 100x100
       */
      size: string
      /** @description Ссылка на изображение */
      url: string
    }
    /** @description Структура объявления */
    ReviewItem: {
      /**
       * @description ID объявления
       * @example 1234567
       */
      id?: number
      /**
       * @description Заголовок объявления
       * @example Автомобиль 2020-го года
       */
      title?: string
    } | null
    /** @description Структура отправителя отзыва */
    ReviewSender: {
      /**
       * @description Имя отправителя
       * @example Владимир
       */
      name: string
    } | null
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
    internalError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 500
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Service is temporary unavailable
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
  createReviewAnswerV1: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateAnswerRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateAnswerResponse']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: components['schemas']['ReviewError']
          }
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Нет доступа к созданию ответов на отзывы */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Отзыв не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  removeReviewAnswerV1: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор ответа на отзыв
         * @example 1234567
         */
        answer_id: number
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
          'application/json': components['schemas']['RemoveAnswerResponse']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: components['schemas']['ReviewError']
          }
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Нет доступа к удалению ответов на отзывы */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ответ не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getRatingsInfoV1: {
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
          'application/json': components['schemas']['GetRatingInfoResponse']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Нет доступа к рейтингу */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getReviewsV1: {
    parameters: {
      query: {
        /** @description Смещение */
        offset: number
        /** @description Лимит количества отзывов */
        limit: number
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
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetReviewsResponse']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: components['schemas']['ReviewError']
          }
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Нет доступа к списку отзывов */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
}
