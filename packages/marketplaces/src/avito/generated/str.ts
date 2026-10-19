// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/core/v1/accounts/{user_id}/items/{item_id}/bookings': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Заполнение календаря занятости объекта недвижимости
     * @description Заполнение календаря занятости объекта недвижимости (для краткосрочной аренды)
     */
    post: operations['putBookingsInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realty/v1/accounts/{user_id}/items/{item_id}/bookings': {
    parameters: {
      query: {
        /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
        skip_error?: components['parameters']['skipError']
        /** @description Фильтр, ограничивающий выборку по нижней границе дат, не в прошлом */
        date_start: string
        /** @description Фильтр, ограничивающий выборку по верхней границе дат, не в прошлом */
        date_end: string
        /** @description Флаг, позволяющий получить неоплаченные брони (возвращаются в статусе pending) */
        with_unpaid?: boolean
      }
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    /**
     * Получение списка броней по объявлению
     * @description Возвращает информацию о бронированиях объекта за весь период.
     */
    get: operations['getRealtyBookings']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realty/v1/accounts/{user_id}/items/{item_id}/prices': {
    parameters: {
      query?: {
        /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
        skip_error?: components['parameters']['skipError']
      }
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Актуализация параметров для выбранных периодов
     * @description Обновляет параметры (цена за ночь, доплата за гостя, минимальная продолжительность брони) для каждого из переданных диапазонов дат, изменения применяются к каждой дате диапазона. В случае, если на занимаемые даты есть брони в неподтвержденных статусах, то брони переводятся в статус overbook.
     */
    post: operations['postRealtyPrices']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realty/v1/items/intervals': {
    parameters: {
      query?: {
        /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
        skip_error?: components['parameters']['skipError']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Заполнение доступности объекта недвижимости с квотами и без
     * @description Заполнение календаря доступности объекта недвижимости с квотами и без (для краткосрочной аренды)
     */
    post: operations['putIntervals']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/realty/v1/items/{item_id}/base': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установка базовых параметров
     * @description Обновляет базовые параметры: цена за ночь, минимальное количество ночей, доплата за гостя,  количество гостей больше которых активируется опция доплаты за гостя, период бесплатной отмены, параметры мгновенного бронирования (активность, максимальное/минимальное количество дней до заселения), скидки на бронирование.
     */
    post: operations['postBaseParams']
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
    /** @description Оплаченная на Авито бронь */
    AvitoBooking: {
      /**
       * Format: int64
       * @description Идентификатор бронирования на Авито
       * @example 11111
       */
      avito_booking_id?: number | null
      /**
       * Format: date
       * @description Дата заезда гостей
       * @example 2026-03-20
       */
      check_in: string
      /**
       * Format: date
       * @description Дата выезда гостей
       * @example 2026-03-27
       */
      check_out: string
    }
    /** @description Базовые параметры */
    BaseParams: {
      /** @description Скидки при бронировании от threshold ночей */
      discount?: {
        /**
         * Format: int64
         * @description Процент скидки от суммы бронирования
         */
        percent?: number
        /**
         * Format: int64
         * @description Порог ночей, после которых применяется скидка
         * @enum {integer}
         */
        threshold?: 3 | 7 | 30
      }[]
      /**
       * Format: int64
       * @description Доплата за гостя (рубли)
       */
      extra_guest_fee?: number | null
      /**
       * Format: int64
       * @description Порог гостей, при котором цена - night_price
       * @enum {integer|null}
       */
      extra_guest_threshold?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null
      /** @description Настройки доплат */
      fees?: {
        /** @description Доплата за уборку после выезда */
        cleaning?: {
          /**
           * Format: int64
           * @description Сумма доплаты в рублях. Можно указать 0, если уборка включена в стоимость
           */
          amount?: number
        } | null
        /** @description Доплата за проживание с питомцем */
        pets?: {
          /** @description Разрешено ли размещение с питомцем */
          allowed?: boolean
          /**
           * Format: int64
           * @description Стоимость проживания с питомцем в рублях
           */
          amount?: number
          /**
           * @description Тип применения доплаты за питомца (за ночь, за бронь)
           * @enum {string}
           */
          application?: 'by_booking' | 'by_night'
        } | null
      } | null
      /** @description Параметры мгновенного бронирования */
      instant?: {
        /** @description Включено ли мгновенное бронирование */
        active?: boolean
        /**
         * Format: int64
         * @description Максимальное количество дней до заселения для работы МБ (если нет, то без ограничений)
         * @enum {integer|null}
         */
        max_days?: 30 | 60 | 90 | 120 | 150 | null
        /**
         * Format: int64
         * @description Минимальное количество дней до заселения для работы МБ (если нет, то без ограничений)
         * @enum {integer|null}
         */
        min_days?: 1 | 2 | 3 | 4 | 5 | null
      } | null
      /**
       * Format: int32
       * @description Минимальная продолжительность (ночи)
       * @enum {integer|null}
       */
      minimal_duration?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | null
      /**
       * Format: int64
       * @description Цена проживания за ночь (рубли)
       */
      night_price?: number | null
      /** @description Параметры возврата */
      refund?: {
        /**
         * Format: int64
         * @description Количество дней до заезда, когда за отмену налагается штраф
         * @enum {integer}
         */
        days?: 0 | 1 | 3 | 5 | 7 | 14
      } | null
    }
    /** @description Период, конфликтующий с оплаченными бронями на Авито */
    ConflictedInterval: {
      /** @description Список оплаченных броней на Авито, конфликтующих с периодом */
      bookings: components['schemas']['AvitoBooking'][]
      /** @description Период аренды из запроса */
      interval: {
        /**
         * Format: date
         * @description Дата окончания периода аренды
         * @example 2026-04-01
         */
        date_end: string
        /**
         * Format: date
         * @description Дата начала периода аренды
         * @example 2026-03-23
         */
        date_start: string
      }
    }
    DatesOverlapBookingError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 409
         */
        code: number
        /** @description Список периодов, конфликтующих с оплаченными бронями на Авито */
        conflicts: components['schemas']['ConflictedInterval'][]
        /**
         * @description Сообщение об ошибке
         * @example error
         */
        message: string
      }
    }
    Error: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example error
         */
        message: string
      }
    }
    /** @description Параметры аренды для определённого периода */
    ParamPriceItemRealty: {
      /**
       * Format: date
       * @description Дата начала периода, не в прошлом
       * @example 2026-05-01
       */
      date_from?: string
      /**
       * Format: date
       * @description Дата конца периода (включительно), не в прошлом
       * @example 2026-05-09
       */
      date_to?: string
      /**
       * Format: int64
       * @description Доплата за гостя (рубли)
       * @example 700
       */
      extra_guest_fee?: number
      /**
       * Format: int32
       * @description Минимальная продолжительность (ночи), до 30 дней
       * @example 2
       */
      minimal_duration?: number
      /**
       * Format: int64
       * @description Цена проживания за ночь (рубли)
       * @example 1990
       */
      night_price?: number
    }
    /** @description Диапазоны дат и соответствующие им ценовые параметры */
    ParamPricesRealty: {
      prices?: components['schemas']['ParamPriceItemRealty'][]
    }
    /** @description Информация о занятости объекта на определённые периоды */
    PostCalendarData: {
      /** @description Список броней для выбранного объекта недвижимости (объявления) */
      bookings?: {
        /**
         * @description Дополнительная информация
         * @example Дополнительная информация
         */
        comment?: string | null
        /**
         * Format: date
         * @description Дата окончания периода аренды, не в прошлом
         * @example 2026-04-01
         */
        date_end?: string
        /**
         * Format: date
         * @description Дата начала периода аренды, не в прошлом
         * @example 2026-03-23
         */
        date_start?: string
        /**
         * @description Даты закрыты вручную или по данными другого OTA (manual, booking)
         * @enum {string|null}
         */
        type?: 'manual' | 'booking' | null
      }[]
      /**
       * @description Название PMS системы
       * @example pms
       */
      source?: string | null
    }
    /** @description Информация о доступности объекта на заданные интервалы */
    PostCalendarDataV2: {
      /** @description Список интервалов для выбранного объявления */
      intervals?: {
        /**
         * Format: date
         * @description Дата окончания периода
         * @example 2024-04-01
         */
        date_end?: string
        /**
         * Format: date
         * @description Дата начала периода
         * @example 2024-03-23
         */
        date_start?: string
        /**
         * @description Квота на заданные даты (> 0)
         * @example 5
         */
        open?: number
      }[]
      /**
       * @description ID объявления
       * @example 270000555
       */
      item_id?: number
      /**
       * @description Название PMS системы
       * @example pms
       */
      source?: string | null
    }
    /** @description Информация о бронировании */
    RealtyBooking: {
      /**
       * @description Идентификатор бронирования на Авито
       * @example 11111
       */
      avito_booking_id?: number
      /**
       * @description Стоимость проживания на весь срок бронирования
       * @example 8000
       */
      base_price?: number
      /**
       * Format: date
       * @description Дата заезда гостей
       * @example 2026-08-01
       */
      check_in?: string
      /**
       * Format: date
       * @description Дата выезда гостей
       * @example 2026-08-04
       */
      check_out?: string
      /** @description Контактная информация гостя */
      contact?: {
        /**
         * @description Контактный email
         * @example guest_email@domain.com
         */
        email: string
        /**
         * @description Имя гостя
         * @example Иван
         */
        name: string
        /**
         * @description Номер телефона в 10-ти значном формате (только цифры)
         * @example 9997770000
         */
        phone?: string
      }
      /**
       * @description Количество гостей
       * @example 1
       */
      guest_count?: number
      /**
       * @description Количество ночей
       * @example 3
       */
      nights?: number
      /** @description Сумма внесённой предоплаты */
      safe_deposit?: {
        /**
         * @description Сумма, которую получит владелец объекта
         * @example 4500
         */
        owner_amount?: number
        /**
         * @description Комиссия Авито
         * @example 500
         */
        tax?: number
        /**
         * @description Фактическая сумма предоплаты
         * @example 5000
         */
        total_amount?: number
      }
      /**
       * @description Статус брони
       * @enum {string}
       */
      status?: 'active' | 'canceled' | 'pending'
      /**
       * @description Итоговая стоимость всего бронирования для гостя (рубли) — с учётом скидки Авито и оплаты промокодом. Если скидок не было, совпадает с `base_price`
       * @example 7200
       */
      total_for_buyer?: number
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
        fields?: {
          [key: string]: unknown
        } | null
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
    /**
     * @description Токен для авторизации
     * @example Bearer ACCESS_TOKEN
     */
    authHeader: string
    /** @description Идентификатор объявления на сайте */
    pathItemId: number
    /** @description Номер пользователя в Личном кабинете Авито */
    pathUserId: number
    /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
    skipError: boolean
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
  putBookingsInfo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    /**
     * @description Последний день брони доступен для пользователя (открытый конец),
     *     так, бронь в один день занимается промежутком в два дня.
     *     Промежутки не должны пересекаться (допустимо совпадение конца одной брони и начала второй в силу открытости).
     *     Очередной запрос перезаписывает результат выполнения предыдущего. Для удаления интервала из календаря необходимо отправить интервалы из предыдущего запроса без удаляемого.
     *     При пересечении любого интервала с оплаченной бронью на Авито, будет возвращена ошибка.  Закрыты будут только интервалы без пересечений.
     */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "bookings": [
         *         {
         *           "comment": "Комментарий",
         *           "date_end": "2026-03-24",
         *           "date_start": "2026-03-23"
         *         },
         *         {
         *           "date_end": "2026-03-25",
         *           "date_start": "2026-03-24",
         *           "type": "manual"
         *         },
         *         {
         *           "date_end": "2026-03-26",
         *           "date_start": "2026-03-25",
         *           "type": "booking"
         *         }
         *       ],
         *       "source": "pms"
         *     }
         */
        'application/json': components['schemas']['PostCalendarData']
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
            /**
             * @description Результат обработки запроса
             * @enum {string}
             */
            result?: 'success'
          }
        }
      }
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Пользователь не владеет айтемом */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Айтем не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description На заданные даты есть оплаченные брони */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DatesOverlapBookingError']
        }
      }
      /** @description Неверные данные */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  getRealtyBookings: {
    parameters: {
      query: {
        /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
        skip_error?: components['parameters']['skipError']
        /** @description Фильтр, ограничивающий выборку по нижней границе дат, не в прошлом */
        date_start: string
        /** @description Фильтр, ограничивающий выборку по верхней границе дат, не в прошлом */
        date_end: string
        /** @description Флаг, позволяющий получить неоплаченные брони (возвращаются в статусе pending) */
        with_unpaid?: boolean
      }
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
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
            /** @description Список броней */
            bookings: components['schemas']['RealtyBooking'][]
          }
        }
      }
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Пользователь не владеет айтемом */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Айтем не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Неверные данные */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  postRealtyPrices: {
    parameters: {
      query?: {
        /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
        skip_error?: components['parameters']['skipError']
      }
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "prices": [
         *         {
         *           "date_from": "2026-06-02",
         *           "date_to": "2026-06-14",
         *           "extra_guest_fee": 500,
         *           "minimal_duration": 1,
         *           "night_price": 1500
         *         },
         *         {
         *           "date_from": "2026-06-15",
         *           "date_to": "2026-06-15",
         *           "extra_guest_fee": 1000,
         *           "minimal_duration": 7,
         *           "night_price": 5000
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['ParamPricesRealty']
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
            /**
             * @description Результат обработки запроса
             * @enum {string}
             */
            result?: 'success'
          }
        }
      }
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Пользователь не владеет айтемом */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Айтем не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Неверные данные */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  putIntervals: {
    parameters: {
      query?: {
        /** @description Флаг, с которым вместо ошибок(если ошибка произошла с айтемом) возвращается 200 статус, без ошибки */
        skip_error?: components['parameters']['skipError']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Последний день интервала недоступен для пользователя (открытый конец), так, открытость одного дня  указывается промежутком в два дня. Интервалы на год вперед, которые не приходят в запросе, считаются закрытыми. Возможен пустой список во входном запросе: в этом случае считается, что продажи закрыты на год вперед. Промежутки не должны пересекаться (допустимо совпадение конца одного и начала другого). Работает как для объявлений с квотами, так и для обычных объявлений. */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "intervals": [
         *         {
         *           "date_end": "2024-03-24",
         *           "date_start": "2024-03-23",
         *           "open": 10
         *         },
         *         {
         *           "date_end": "2024-03-25",
         *           "date_start": "2024-03-24",
         *           "open": 2
         *         }
         *       ],
         *       "item_id": 270000555,
         *       "source": "pms"
         *     }
         */
        'application/json': components['schemas']['PostCalendarDataV2']
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
            /**
             * @description Результат обработки запроса
             * @enum {string}
             */
            result?: 'success'
          }
        }
      }
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Пользователь не владеет айтемом */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Айтем не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Неверные данные */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  postBaseParams: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "discount": [
         *         {
         *           "percent": 10,
         *           "threshold": 3
         *         },
         *         {
         *           "percent": 15,
         *           "threshold": 7
         *         }
         *       ],
         *       "extra_guest_fee": 500,
         *       "extra_guest_threshold": 4,
         *       "instant": {
         *         "active": true,
         *         "max_days": 30,
         *         "min_days": 3
         *       },
         *       "minimal_duration": 1,
         *       "night_price": 3000,
         *       "refund": {
         *         "days": 7
         *       }
         *     }
         */
        'application/json': components['schemas']['BaseParams']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Пользователь не владеет айтемом */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Айтем не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Неверные данные */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Внутренняя ошибка */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
}
