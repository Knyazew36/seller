// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/order-management/1/markings': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Передача честного знака
     * @description Метод для передачи честного знака для товаров в заказе.
     *     Максимальное количество элементов в одном запросе - 50.
     *     Максимальное количество запросов в минуту - 100.
     */
    post: operations['markings']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/acceptReturnOrder': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Выбор отделения отделения Почты России для получения возврата
     * @description Данный метод применяется для подтверждения возврата товара и выбора отделения Почты России, куда будет доставлен возврат.
     *     Максимальное количество запросов в минуту - 100.
     */
    post: operations['acceptReturnOrder']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/applyTransition': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Изменение статуса заказа
     * @description Данный метод применяется для изменения статуса заказа, в частности для подтверждения или отмены заказа.
     *     Максимальное количество запросов в минуту - 100.
     */
    post: operations['applyTransition']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/checkConfirmationCode': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Метод для проверки кода подтверждения заказа.
     * @description Данный метод используется для подтверждения личности для получения заказа в ПВЗ. Пользователь называет код  из приложения сотруднику СД. Далее через API служба доставки проверяет его валидность.
     *     Максимальное количество запросов в минуту - 2000.
     */
    post: operations['checkConfirmationCode']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/cncSetDetails': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Метод для подготовки заказа с самовывозом
     * @description Данный метод применяется продавцом для подготовки заказа и передачи адреса, сроков бронирования и сообщения покупателю.
     *     Максимальное количество запросов в минуту - 60
     */
    post: operations['cncSetDetails']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/getCourierDeliveryRange': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Метод получения доступных временных промежутков приезда курьера
     * @description Данный метод применяется для получения всех промежутков времени, когда курьер может приехать забрать товар, чтобы отвезти его покупателю.
     *     Максимальное количество запросов в минуту - 100.
     */
    get: operations['getCourierDeliveryRange']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/setCourierDeliveryRange': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Метод выбора определённого доступного временного промежутка для приезда курьера
     * @description Данный метод применяется после метода получения всех промежутков времени, когда курьер может приехать и забрать товар.  Вызвав этот метод, продавец выбирает определённый временной промежуток приезда курьера.
     *     Также этот метод можно вызвать, чтобы изменить время приезда курьера, если он ещё не забрал посылку. Максимальное количество запросов в минуту - 200.
     */
    post: operations['setCourierDeliveryRange']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/order/setTrackingNumber': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Передача трек-номера
     * @description Метод для передачи трек-номера для доставки партнёрами продавца (DBS)
     *     Максимальное количество запросов в минуту - 100.
     */
    post: operations['setOrderTrackingNumber']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение информации о заказах
     * @description Получение информации о заказах по статусу.
     *     Максимальное количество запросов в минуту - 500.
     */
    get: operations['getOrders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/orders/labels': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создать задачу на генерацию этикеток (до 100).
     * @description Создаёт задачу на генерацию PDF-этикеток для заказов (до 100 штук).  Возвращает идентификатор задачи для последующей проверки статуса и скачивания результата.
     *     Максимальное количество запросов в минуту - 1000. Эта ручка доступна только для ПВЗ заказов.
     */
    post: operations['generateLabels']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/orders/labels/extended': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создать задачу на генерацию этикеток (до 1000).
     * @description Создаёт задачу на генерацию PDF-этикеток для заказов (до 1000 штук).  Возвращает идентификатор задачи для последующей проверки статуса и скачивания результата.
     *     Максимальное количество запросов в минуту - 1. Эта ручка доступна только для ПВЗ заказов.
     */
    post: operations['generateLabelsExtended']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/order-management/1/orders/labels/{taskID}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Скачать сгенерированный PDF-файл (этикетку).
     * @description Скачивание сгенерированного PDF-файла с этикетками по идентификатору задачи.  Файл доступен после успешного завершения генерации.
     *     Максимальное количество запросов в минуту - 1000.
     */
    get: operations['downloadLabel']
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
    action: {
      /**
       * @description Название действия
       * @enum {string}
       */
      name?:
        | 'setMarkings'
        | 'setCNCDetails'
        | 'setTrackNumber'
        | 'fixTrackNumber'
        | 'acceptReturnOrder'
        | 'confirm'
        | 'reject'
        | 'perform'
        | 'receive'
      /** @description Обязательность действия для продвижения заказа. */
      required?: boolean
    }
    /** @description Информация о покупателе. Доступна только для DBS и RDBS после оплаты заказа */
    buyerInfo: {
      /**
       * @description ФИО покупателя
       * @example Пушкин Александр Сергеевич
       */
      fullName?: string
      /**
       * @description Номер телефона покупателя
       * @example 79876543210
       */
      phoneNumber?: string
    } | null
    /** @description Информация об адресе покупателя для курьерской доставки RDBS */
    courierInfo: {
      /**
       * @description Адрес, на который покупатель оформил доставку
       * @example Москва, ул. Каретный ряд, 16, ст. 1, к. 2
       */
      address?: string | null
      /**
       * @description Комментарий покупателя
       * @example Подъезд во дворе дома, домофон не работает
       */
      comment?: string | null
    } | null
    /** @description Информация о доставке */
    delivery: {
      buyerInfo?: components['schemas']['buyerInfo']
      courierInfo?: components['schemas']['courierInfo']
      /**
       * @description Номер отправления. Отсутствует для RDBS.
       * @example 0000042642072
       */
      dispatchNumber?: string
      /**
       * @description Название службы доставки.
       * @example Boxberry
       */
      serviceName?: string
      /**
       * @description Способ доставки
       *       - `pvz` - ПВЗ;
       *       - `dbs` - Доставка партнёрами продавца (ПВЗ);
       *       - `rdbs` - Доставка курьером продавца;
       *       - `postamat` - Доставка через постамат;
       * @enum {string}
       */
      serviceType?: 'pvz' | 'dbs' | 'rdbs'
      terminalInfo?: components['schemas']['terminalInfo']
      /**
       * @description Номер для отслеживания посылки. Отсутствует для RDBS.
       * @example 0000012642072
       */
      trackingNumber?: string
    }
    discount: {
      /**
       * @description Идентификатор скидки
       * @example myfriendpromo
       */
      id?: string
      /**
       * @description Тип скидки
       * @enum {string}
       */
      type?: 'promocode'
      /**
       * @description Размер скидки
       * @example 10
       */
      value?: number
    }
    error: {
      /**
       * @description Код ошибки
       * @example 500
       */
      code: number
      /**
       * @description Текст ошибки
       * @example Error message
       */
      message: string
    }
    getDeliveryCourierConfirmationResponse: {
      /** @description Данные для отображения виджета подтверждения заказа продавцом */
      result: {
        /** @description Адрес продавца */
        address?: string
        /** @description Детали адреса продавца */
        addressDetails?: string
        /** @description Опции с датами */
        dateOptions: {
          /**
           * Format: date-time
           * @description Дата интервала
           */
          date?: string
          /** @description Опции с временными интервалами */
          timeIntervals?: {
            /**
             * Format: date-time
             * @description Дата конца
             */
            endDate?: string
            /**
             * Format: date-time
             * @description Дата начала
             */
            startDate?: string
            title?: string
            /** @description Тип интервала */
            type?: string
          }[]
        }[]
        /**
         * Format: date-time
         * @description Конечная дата приезда курьера
         */
        endDate?: string
        /** @description ФИО продавца */
        name?: string
        /** @description Телефон продавца */
        phone?: string
        /**
         * Format: date-time
         * @description Начальная дата приезда курьера
         */
        startDate?: string
      }
      status: string
    }
    item: {
      /**
       * @description ID товара в базе Avito
       * @example 2799377316
       */
      avitoId: string
      /**
       * @description Идентификатор чата
       * @example u2i-isUW4p7EZVu4R4Zk6ts2G
       */
      chatId?: string
      /**
       * @description Количество товара
       * @example 2
       */
      count: number
      /** @description Список примененных скидок */
      discounts?: components['schemas']['discount'][]
      /**
       * @description ID товара в базе продавца
       * @example 132768483
       */
      id?: string
      /**
       * @description Город, в котором размещено объявление
       * @example Новосибирск
       */
      location?: string
      prices: components['schemas']['itemPrices']
      /**
       * @description Название товара
       * @example Кеды Venice
       */
      title: string
    }
    itemPrices: {
      /**
       * @description Комиссия за товар
       * @example 10
       */
      commission?: number
      /**
       * @description Сумма примененных скидок на товар
       * @example 10
       */
      discountSum?: number
      /**
       * @description Цена товара
       * @example 500
       */
      price?: number
      /**
       * @description Цена товара за вычетом скидок
       * @example 480
       */
      total?: number
    }
    /** @description Данные маркировки */
    marking: {
      /**
       * @description ID товара в Авито
       * @example 2799377316
       */
      itemId?: string
      /** @description Набор маркировок, которые требуется сохранить */
      markings?: string[]
      /**
       * @description ID заказа в Авито
       * @example 50000000000000000
       */
      orderId?: string
    }
    order: {
      /**
       * @description Массив действий доступных по заказу. Действие с флагом required необходимо выполнить для движения заказа. В случае, когда действия от продавца не требуются, массив будет пустой.
       *
       *       * `confirm` - подтверждение заказа;
       *       * `perform` - подтверждение отправки заказа (RDBS);
       *       * `receive` - подтверждение доставки заказа (RDBS, CNC);
       *       * `reject` - отмена заказа;
       *       * `setMarkings` - передача кодов маркировки системы "Честный знак";
       *       * `setTrackNumber` - передача трек-номера посылки для доставки партнёрами продавца (DBS);
       *       * `fixTrackNumber` - исправление трек-номера посылки, в случае, если трек-номер не прошёл проверку (DBS);
       *       * `getCourierDeliveryRange` - получение доступных временных интервалов приезда курьера (Courier);
       *       * `setCourierDeliveryRange` - выбор места и времени приезда курьера (Courier);
       *       * `acceptReturnOrder` - подтверждение возврата и выбор отделения Почты, куда приедет возврат (Courier).
       *       * `setCNCDetails` - подготовка заказаза и уточнение деталей (CNC).
       * @example [
       *       {
       *         "name": "setTrackNumber",
       *         "required": true
       *       },
       *       {
       *         "name": "setMarkings",
       *         "required": false
       *       }
       *     ]
       */
      availableActions?: components['schemas']['action'][] | null
      /**
       * @description Дата и время создания заказа
       * @example 2016-11-01T20:44:39Z
       */
      createdAt: string
      delivery: components['schemas']['delivery']
      /**
       * @description Номер заказа в Авито
       * @example 50000000000000000
       */
      id: string
      /** @description Товары в заказе */
      items: components['schemas']['item'][]
      /**
       * @description Номер заказа в Авито в новой системе
       * @example 70000000000000000
       */
      marketplaceId?: string | null
      prices: components['schemas']['orderPrices']
      returnPolicy?: components['schemas']['returnPolicy']
      schedules: components['schemas']['schedules']
      /**
       * @description Текущий статус заказа
       * @example confirming
       */
      status: string
      /**
       * @description Дата и время обновления заказа
       * @example 2016-11-01T20:44:39Z
       */
      updatedAt: string
    }
    /** @description Запрос выбора ПВЗ для возврата товара */
    orderAcceptReturnOrderRequest: {
      /**
       * @description ID заказа в Авито
       * @example 50000000000000000
       */
      orderId?: string
      /** @description Данные человека, который будет забирать возвратную посылку */
      recipient?: {
        /**
         * @description ФИО получателя
         * @example Иванов Иван Иванович
         */
        name?: string
        /**
         * @description Номер телефона человека, который будет забирать возвратную посылку
         * @example +79999999999
         */
        phone?: string
      }
      /**
       * @description Номер отделения Почты России, куда придёт возвратная посылка.
       * @example 141138
       */
      terminalNumber?: string
    }
    /** @description Ответ выбора указанного ПВЗ для возврата */
    orderAcceptReturnOrderResponse: {
      /**
       * @description Флаг успеха указанного ПВЗ для возврата
       * @example false
       */
      success?: boolean
    }
    /** @description Запрос перевода заказа в другой статус */
    orderApplyTransitionRequest: {
      /**
       * @description ID заказа в Авито
       * @example 50000000000000000
       */
      orderId?: string
      /** @description Дополнительные параметры доставки */
      params?: {
        /** @description Параметры для подготовки заказа с самовывозом */
        cnc?: {
          /**
           * @description Код подтверждения, который покупатель показывает продавцу
           * @example 1755
           */
          confirmCode?: string
          /**
           * @description Номер заказа в Авито в новой системе
           * @example 70000000000000000
           */
          marketplaceId?: string
        } | null
      } | null
      /**
       * @description Название перехода.
       *       * `confirm` - подтверждение заказа;
       *       * `reject` - отмена заказа;
       *       * `perform` - подтверждение отправки заказа (RDBS);
       *       * `receive` - подтверждение доставки заказа (RDBS, CNC).
       * @example confirm
       * @enum {string}
       */
      transition?: 'confirm' | 'reject' | 'perform' | 'receive'
    }
    /** @description Ответ перевода заказа в другой статус */
    orderApplyTransitionResponse: {
      /**
       * @description Флаг успеха перевода в новый статус
       * @example false
       */
      success?: boolean
    }
    /** @description Запрос на подготовку заказа и уточнение деталей */
    orderCNCSetDetailsRequest: {
      /**
       * @description Адрес получения товара
       * @example Тверская улица, 3, Москва
       */
      address?: string
      /**
       * @description Сроки бронирования товара
       * @example 4
       */
      bookingPeriod: number
      /**
       * @description Комментарий, который получит покупатель
       * @example Могу передать товар с 13:00 до 18:00
       */
      details?: string
      /**
       * @description ID заказа в Авито
       * @example 5000000000000000
       */
      id: string
      /**
       * @description Номер заказа в Авито в новой системе
       * @example 70000000000000000
       */
      marketplaceId: string
    }
    /** @description Ответ ручки подготовки заказа с самовывозом */
    orderCNCSetDetailsResponse: {
      result?: {
        success?: boolean
      }
      status?: string
    }
    /** @description Запрос на проверку кода подтверждения */
    orderCheckConfirmationCodeRequest: {
      /** @description Код, который показал пользователь */
      confirmCode?: string
      /**
       * @description ID посылки в Авито
       * @example P00081306679
       */
      parcelID?: string
    }
    /** @description Ответ ручки проверки кода подтверждения */
    orderCheckConfirmationCodeResponse: {
      data?: {
        /** @enum {string} */
        status?: 'success' | 'fail' | 'expired' | 'attempts'
      }
    }
    orderPrices: {
      /**
       * @description Комиссия Авито
       * @example 20
       */
      commission?: number
      /**
       * @description Стоимость доставки для DBS и RDBS
       * @example 1000
       */
      delivery?: number
      /**
       * @description Сумма скидок
       * @example 20
       */
      discount?: number
      /**
       * @description Сумма заказа
       * @example 1000
       */
      price?: number
      /**
       * @description Сумма к получению за заказ (стоимости товаров за вычетом скидок и комиссии)
       * @example 960
       */
      total?: number
    }
    /** @description Запрос ручки передачи трек-номера */
    orderSetTrackingNumberRequest: {
      /**
       * @description ID заказа в Авито
       * @example 50000000000000000
       */
      orderId?: string
      /**
       * @description Трек-номер посылки
       * @example 01-01031002199
       */
      trackingNumber?: string
    }
    /**
     * @description Ответ ручки передачи трек-номера
     * @example {
     *       "error": {
     *         "code": "already_set",
     *         "message": "Трек-номер уже зарегистрирован для другого заказа"
     *       },
     *       "success": false
     *     }
     */
    orderSetTrackingNumberResponse: {
      error?: {
        /**
         * @description Код ошибки:
         *       * `incorrect_number` - Некорректный трек-номер
         *       * `already_set` - Трек-номер уже зарегистрирован для другого заказа
         */
        code: string
        /** @description Текст ошибки */
        message: string
      }
      /**
       * @description Флаг успеха обновления
       * @example false
       */
      success?: boolean
    }
    /** @description Ответ для ручки получения информации о заказе */
    ordersInfo: {
      /**
       * @description Есть ли еще заказы
       * @example true
       */
      hasMore: boolean
      /** @description Массив заказов */
      orders: components['schemas']['order'][]
    }
    /** @description Запрос на создание генерации этикеток для пользователя по его заказам */
    ordersLabelsRequest: {
      /** @description ID заказов в сервисе сделок (marketplace) */
      orderIDs: string[]
    }
    /** @description Ответ на запрос создания генерации этикеток для пользователя по его заказам */
    ordersLabelsResponse: {
      /** @description ID задачи (документа) */
      taskID: string
    }
    /** @description Информация по возврату */
    returnPolicy: {
      /**
       * @description - `in_transit` - возврат в пути; - `ready_to_pickup` - возврат доставлен, его можно получить; - `self_return` - возврат осуществляется продавцом самостоятельно (только для DBS).
       * @example in_transit
       * @enum {string}
       */
      returnStatus?: 'in_transit' | 'ready_to_pickup' | 'self_return'
      /**
       * @description Номер отправления
       * @example 0000012642072
       */
      trackingNumber?: string
    } | null
    /** @description Расписание запланированных событий и необходимых действий над заказом */
    schedules: {
      /**
       * @description Дата, до которой продавцу нужно подтвердить заказ
       * @example 2016-11-01T20:44:39Z
       */
      confirmTill?: string | null
      /**
       * @description Дата доставки товара покупателю переданная продавцом (RDBS)
       * @example 2016-11-01T20:44:39Z
       */
      deliveryDate?: string | null
      /**
       * @description Максимальная ожидаемая дата доставки товара покупателю
       * @example 2016-11-01T20:44:39Z
       */
      'deliveryDateMa\u0445'?: string | null
      /**
       * @description Минимальная ожидаемая дата доставки товара покупателю
       * @example 2016-11-01T20:44:39Z
       */
      deliveryDateMin?: string | null
      /**
       * @description Дата, до которой продавцу нужно передать трек-номер заказа (DBS)
       * @example 2016-11-01T20:44:39Z
       */
      setTrackingNumberTill?: string | null
      /**
       * @description Дата, до которой продавцу нужно отправить заказ
       * @example 2016-11-01T20:44:39Z
       */
      shipTill?: string | null
    }
    /** @description Параметры запроса для ручки установки параметров курьерской доставки */
    setCourierDeliveryRangeRequest: {
      /** @description Адрес продавца */
      address: string
      /** @description Детали адреса продавца */
      addressDetails?: string
      /**
       * Format: date-time
       * @description Конечная дата приезда курьера
       */
      endDate: string
      /**
       * @description Тип интервала
       * @enum {string}
       */
      intervalType: 'fixed' | 'asap'
      /** @description ФИО */
      name: string
      /** @description ID заказа */
      orderId: string
      /** @description Телефон */
      phone: string
      /**
       * Format: date-time
       * @description Начальная дата приезда курьера
       */
      startDate: string
    }
    /** @description Ответ для ручки установки параметров курьерской доставки */
    setCourierDeliveryRangeResponse: {
      /**
       * @description Флаг успеха выбора времени приезда курьера
       * @example false
       */
      success?: boolean
    }
    /** @description Запрос ручки обновления маркировок */
    setOrderMarkingRequest: {
      /** @description Массив маркировок, которые требуется передать */
      markings?: components['schemas']['marking'][]
    }
    /** @description Ответ ручки обновления маркировок */
    setOrderMarkingResponse: {
      /** @description Массив результатов обновления */
      results?: {
        /**
         * @description Сообщение ошибки, если она была
         * @example Order with such id doesn't exist
         */
        error?: string | null
        /**
         * @description ID товара в Авито
         * @example 2799377316
         */
        itemId?: string
        /**
         * @description ID заказа в Авито
         * @example 50000000000000000
         */
        orderId?: string
        /**
         * @description Флаг успеха обновления
         * @example false
         */
        success?: boolean
      }[]
    }
    /** @enum {string} */
    status:
      | 'on_confirmation'
      | 'ready_to_ship'
      | 'in_transit'
      | 'canceled'
      | 'delivered'
      | 'on_return'
      | 'in_dispute'
      | 'closed'
    /** @description Информация о ПВЗ выбранном покупателем для доставки DBS */
    terminalInfo: {
      /**
       * @description Адрес ПВЗ
       * @example Москва, Настасьинский 8 стр2 6
       */
      address?: string | null
      /**
       * @description Код ПВЗ
       * @example MSK14
       */
      code?: string | null
    } | null
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
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  markings: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['setOrderMarkingRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['setOrderMarkingResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  acceptReturnOrder: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['orderAcceptReturnOrderRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderAcceptReturnOrderResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  applyTransition: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['orderApplyTransitionRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderApplyTransitionResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  checkConfirmationCode: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['orderCheckConfirmationCodeRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderCheckConfirmationCodeResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  cncSetDetails: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['orderCNCSetDetailsRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderCNCSetDetailsResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  getCourierDeliveryRange: {
    parameters: {
      query: {
        /** @description ID заказа */
        orderId: string
        /** @description Адрес продавца */
        address?: string | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['getDeliveryCourierConfirmationResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  setCourierDeliveryRange: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['setCourierDeliveryRangeRequest']
      }
    }
    responses: {
      /** @description Успешный выбор времени приезда курьера */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['setCourierDeliveryRangeResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  setOrderTrackingNumber: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['orderSetTrackingNumberRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderSetTrackingNumberResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  getOrders: {
    parameters: {
      query?: {
        /** @description Идентификаторы заказов */
        ids?: string[]
        /**
         * @description Статус, по которому нужно получить заказы.
         *
         *     - on_confirmation - ожидает подтверждения
         *
         *     - ready_to_ship - ждет отправки
         *
         *     - in_transit - в пути
         *
         *     - canceled - отменный заказ
         *
         *     - delivered - доставлен покупателю
         *
         *     - on_return - на возврате
         *
         *     - in_dispute - по заказу открыт спор
         *
         *     - closed - заказ закрыт
         */
        statuses?: components['schemas']['status'][]
        /**
         * @description Метка времени, с момента которого созданы покупки
         * @example 1686735089
         */
        dateFrom?: number
        /**
         * @description Номер страницы для пагинации
         * @example 1
         */
        page?: number
        /**
         * @description Максимальное количество заказов на странице
         * @example 10
         */
        limit?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ordersInfo']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  generateLabels: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ordersLabelsRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ordersLabelsResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  generateLabelsExtended: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ordersLabelsRequest']
      }
    }
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ordersLabelsResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
  downloadLabel: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задачи на генерацию */
        taskID: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/pdf': string
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      429: components['responses']['tooManyRequests']
      500: components['responses']['internalError']
    }
  }
}
