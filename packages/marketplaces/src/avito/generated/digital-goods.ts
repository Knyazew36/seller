// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/digital-goods/v1/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список заказов
     * @description Возвращает список заказов цифровых товаров текущего авторизованного продавца.
     *
     *     Все фильтры необязательны и комбинируются по «И». Фильтры-списки (`statuses`, `item_ids`, `buyer_ids`) передаются через запятую. Результат постранично ограничен параметрами `limit` и `offset`, признак наличия следующей страницы — в `pagination.hasMore`.
     */
    get: operations['getDigitalGoodsOrders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/orders/{order_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Заказ по идентификатору
     * @description Возвращает один заказ цифрового товара текущего авторизованного продавца.
     *
     *     Если заказ принадлежит другому продавцу или не существует, возвращается `404`.
     */
    get: operations['getDigitalGoodsOrder']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/orders/{order_id}/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отмена заказа продавцом
     * @description Отменяет заказ до отправки товара — например, если товара не оказалось в наличии. Деньги возвращаются покупателю.
     *
     *     Метод доступен, пока товар не отправлен; после отправки возвращается `409`.
     */
    post: operations['postDigitalGoodsOrderCancel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/orders/{order_id}/escalate-to-arbitration': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Эскалация спора в арбитраж
     * @description Передаёт спор по заказу в арбитраж Авито, если договориться с покупателем напрямую не получилось. В `description` нужно описать ситуацию для поддержки.
     *
     *     Метод доступен для заказа в статусе спора; в остальных статусах возвращается `409`.
     */
    post: operations['postDigitalGoodsOrderEscalateToArbitration']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/orders/{order_id}/history': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * История статусов заказа
     * @description Возвращает историю переходов заказа между статусами в хронологическом порядке. Полезно, если уведомления webhook были пропущены и нужно восстановить, что происходило с заказом.
     */
    get: operations['getDigitalGoodsOrderHistory']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/orders/{order_id}/payout': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Ссылка на вывод средств по заказу
     * @description Возвращает ссылку, по которой продавец может вывести деньги за завершённый заказ.
     *
     *     Метод доступен, когда заказ завершён и средства разблокированы; иначе возвращается `409`.
     */
    post: operations['postDigitalGoodsOrderPayout']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/orders/{order_id}/send': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправка цифрового товара покупателю
     * @description Отправляет покупателю текстовую инструкцию или код в чат по заказу и переводит заказ в статус `sent`.
     *
     *     Метод доступен, пока заказ находится в статусе `in_progress`; в остальных статусах возвращается `409`.
     */
    post: operations['postDigitalGoodsOrderSend']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/digital-goods/v1/webhook': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Подписка на уведомления по заказам
     * @description Создаёт или обновляет webhook-настройки текущего авторизованного продавца.
     *
     *     На указанный `url` будут отправляться уведомления об изменении статусов заказов цифровых товаров. Каждое уведомление подписывается секретом `secret`, чтобы получатель мог проверить подлинность запроса.
     *
     *     Повторный вызов перезаписывает ранее сохранённую настройку — отдельного метода обновления нет.
     */
    post: operations['createOrUpdateWebhook']
    /**
     * Отписка от уведомлений по заказам
     * @description Удаляет webhook-настройки текущего авторизованного продавца. Удаление отсутствующей настройки не является ошибкой.
     */
    delete: operations['deleteWebhook']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /** ErrorResponse */
    errorResponse: {
      /**
       * @description Сообщение об ошибке
       * @example order not found
       */
      message: string
    }
    /** escalateToArbitrationRequestBody */
    escalateToArbitrationRequest: {
      /**
       * @description Описание ситуации для поддержки
       * @example Покупатель не выходит на связь и не описывает проблему
       */
      description: string
    }
    order: {
      /**
       * @description Идентификатор покупателя
       * @example 739e4fba1ac8b00fc8ff62df9bc34ae6
       */
      buyer_id?: string | null
      /**
       * @description Идентификатор чата по заказу
       * @example u2i-abc
       */
      chat_id?: string | null
      /**
       * @description Идентификатор чата продавца с арбитром. Заполняется только после того, как заказ попал в арбитраж и арбитр создал чат
       * @example 0199c1f4-5f3a-7a21-9a1e-5f0c0d7b2a11
       */
      chat_with_arbitrator?: string | null
      /**
       * @description Код заказа
       * @example 9RCJ0JGN
       */
      code: string
      /**
       * Format: date-time
       * @description Время завершения заказа
       */
      completed_at?: string | null
      /**
       * Format: date-time
       * @description Время создания заказа
       * @example 2026-07-03T09:10:00Z
       */
      created_at: string
      /**
       * Format: uuid
       * @description Идентификатор заказа
       * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
       */
      id: string
      item: components['schemas']['orderItem']
      price: components['schemas']['orderPrice']
      /**
       * @description Цифровой товар
       * @example Код активации: ABCD-EFGH-IJKL
       */
      product?: string | null
      seller_type: components['schemas']['sellerType']
      status: components['schemas']['statusInfo']
      /**
       * Format: date-time
       * @description Время последнего обновления заказа
       * @example 2026-07-03T09:15:00Z
       */
      updated_at: string
    }
    /** okOrderActionResponse */
    orderActionResponse: {
      /**
       * Format: uuid
       * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
       */
      order_id: string
      status: components['schemas']['statusInfo']
    }
    orderHistoryItem: {
      /**
       * Format: date-time
       * @description Время перехода между статусами
       * @example 2026-07-03T09:15:00Z
       */
      occurred_at: string
      /**
       * @description Предыдущий статус заказа (строковое значение)
       * @example in_progress
       */
      status_from: string
      /**
       * @description Новый статус заказа (строковое значение)
       * @example sent
       */
      status_to: string
    }
    /** okOrderHistoryResponse */
    orderHistoryResponse: {
      history: components['schemas']['orderHistoryItem'][]
      /**
       * Format: uuid
       * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
       */
      order_id: string
    }
    orderItem: {
      /**
       * Format: int64
       * @description Идентификатор объявления
       * @example 123456789
       */
      id: number
      /**
       * @description Название объявления
       * @example Подарочная карта
       */
      title?: string | null
    }
    orderPrice: {
      /**
       * Format: int64
       * @description Комиссия в копейках
       * @example 7500
       */
      commission?: number | null
      /**
       * Format: int64
       * @description Размер скидки в копейках
       * @example 0
       */
      discount?: number | null
      /**
       * Format: int64
       * @description Итоговая стоимость заказа в копейках
       * @example 150000
       */
      total: number
    }
    /**
     * @description Статус заказа.
     *
     *     `in_progress` — оплачен, ждёт отправки товара продавцом; `sent` — товар отправлен покупателю; `dispute` — покупатель открыл спор; `arbitration` — спор передан в арбитраж Авито; `canceled_by_buyer`, `canceled_by_seller`, `canceled_by_avito`, `canceled_by_arbitrator`, `canceled` — заказ отменён; `completed_by_buyer`, `completed_by_avito`, `completed_by_arbitrator`, `completed` — заказ завершён.
     * @example in_progress
     * @enum {string}
     */
    orderStatus:
      | 'in_progress'
      | 'sent'
      | 'dispute'
      | 'arbitration'
      | 'canceled_by_buyer'
      | 'canceled_by_seller'
      | 'canceled_by_avito'
      | 'canceled_by_arbitrator'
      | 'completed_by_arbitrator'
      | 'completed_by_buyer'
      | 'completed_by_avito'
      | 'canceled'
      | 'completed'
    /** okOrdersResponse */
    ordersResponse: {
      orders: components['schemas']['order'][]
      pagination: components['schemas']['pagination']
    }
    pagination: {
      /**
       * @description Признак наличия следующей страницы
       * @example false
       */
      hasMore?: boolean
      /**
       * Format: int32
       * @example 100
       */
      limit?: number
      /**
       * Format: int32
       * @example 0
       */
      offset?: number
    }
    /** okPayoutResponse */
    payoutResponse: {
      /**
       * Format: uri
       * @description Ссылка на вывод средств
       * @example https://www.avito.ru/payout
       */
      url: string
    }
    /**
     * @description Тип продавца — компания (`b2c`) или частное лицо (`c2c`)
     * @example c2c
     * @enum {string}
     */
    sellerType: 'b2c' | 'c2c' | 'unknown'
    /** sendProductRequestBody */
    sendProductRequest: {
      /**
       * @description Текстовая инструкция или код для покупателя
       * @example Код активации: CODE-123-456. Инструкция по использованию: откройте страницу активации и введите код.
       */
      product: string
    }
    statusInfo: {
      /**
       * @description Признак терминального статуса
       * @example false
       */
      terminal: boolean
      /**
       * @description Человекочитаемое название статуса
       * @example Ожидает отправки товара
       */
      title: string
      value: components['schemas']['orderStatus']
    }
    /** okResponse */
    successResponse: {
      /** @description Действие выполнено */
      success: Record<string, never>
    }
    /** requestBody */
    webhookRequest: {
      /**
       * @description Секрет продавца для подписи webhook-уведомлений
       * @example f9c2a7d4e8b1c6a3f0d9e2b5a8c1d4f7
       */
      secret: string
      /**
       * Format: uri
       * @description URL продавца, на который будут отправляться уведомления по заказам цифровых товаров
       * @example https://seller.example.com/digital-goods/v1/orders/events
       */
      url: string
    }
  }
  responses: {
    /** @description Некорректный запрос */
    badRequest: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorResponse']
      }
    }
    /** @description Действие недоступно в текущем статусе заказа */
    conflict: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorResponse']
      }
    }
    /** @description Доступ запрещен */
    forbidden: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorResponse']
      }
    }
    /** @description Ошибка сервера */
    internalServerError: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorResponse']
      }
    }
    /** @description Заказ не найден */
    notFound: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorResponse']
      }
    }
    /** @description Не авторизован */
    unauthorized: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['errorResponse']
      }
    }
  }
  parameters: {
    /**
     * @description Фильтр по идентификаторам покупателей
     * @example [
     *       "739e4fba1ac8b00fc8ff62df9bc34ae6",
     *       "fc8ff62df9bc34ae6739e4fba1ac8b00"
     *     ]
     */
    buyerIds: string[]
    /**
     * @description Вернуть заказы, созданные не раньше указанного времени
     * @example 2026-08-25T00:00:00Z
     */
    createdAtFrom: string
    /**
     * @description Вернуть заказы, созданные раньше указанного времени
     * @example 2026-08-30T00:00:00Z
     */
    createdAtTo: string
    /**
     * @description Фильтр по идентификаторам объявлений
     * @example [
     *       123456789,
     *       987654321
     *     ]
     */
    itemIds: number[]
    /**
     * @description Количество заказов для запроса
     * @example 100
     */
    limit: number
    /**
     * @description Сдвиг заказов для запроса
     * @example 0
     */
    offset: number
    /**
     * @description Идентификатор цифрового заказа
     * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
     */
    orderId: string
    /**
     * @description Фильтр по статусам заказа
     * @example [
     *       "in_progress",
     *       "sent"
     *     ]
     */
    statuses: components['schemas']['orderStatus'][]
    /**
     * @description Вернуть заказы, обновленные не раньше указанного времени
     * @example 2026-08-25T00:00:00Z
     */
    updatedAtFrom: string
    /**
     * @description Вернуть заказы, обновленные раньше указанного времени
     * @example 2026-08-30T00:00:00Z
     */
    updatedAtTo: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getDigitalGoodsOrders: {
    parameters: {
      query?: {
        /**
         * @description Фильтр по статусам заказа
         * @example [
         *       "in_progress",
         *       "sent"
         *     ]
         */
        statuses?: components['parameters']['statuses']
        /**
         * @description Вернуть заказы, созданные не раньше указанного времени
         * @example 2026-08-25T00:00:00Z
         */
        created_at_from?: components['parameters']['createdAtFrom']
        /**
         * @description Вернуть заказы, созданные раньше указанного времени
         * @example 2026-08-30T00:00:00Z
         */
        created_at_to?: components['parameters']['createdAtTo']
        /**
         * @description Вернуть заказы, обновленные не раньше указанного времени
         * @example 2026-08-25T00:00:00Z
         */
        updated_at_from?: components['parameters']['updatedAtFrom']
        /**
         * @description Вернуть заказы, обновленные раньше указанного времени
         * @example 2026-08-30T00:00:00Z
         */
        updated_at_to?: components['parameters']['updatedAtTo']
        /**
         * @description Фильтр по идентификаторам объявлений
         * @example [
         *       123456789,
         *       987654321
         *     ]
         */
        item_ids?: components['parameters']['itemIds']
        /**
         * @description Фильтр по идентификаторам покупателей
         * @example [
         *       "739e4fba1ac8b00fc8ff62df9bc34ae6",
         *       "fc8ff62df9bc34ae6739e4fba1ac8b00"
         *     ]
         */
        buyer_ids?: components['parameters']['buyerIds']
        /**
         * @description Количество заказов для запроса
         * @example 100
         */
        limit?: components['parameters']['limit']
        /**
         * @description Сдвиг заказов для запроса
         * @example 0
         */
        offset?: components['parameters']['offset']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список заказов получен */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ordersResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      500: components['responses']['internalServerError']
    }
  }
  getDigitalGoodsOrder: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор цифрового заказа
         * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
         */
        order_id: components['parameters']['orderId']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Заказ получен */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['order']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      500: components['responses']['internalServerError']
    }
  }
  postDigitalGoodsOrderCancel: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор цифрового заказа
         * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
         */
        order_id: components['parameters']['orderId']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Заказ отменен */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      409: components['responses']['conflict']
      500: components['responses']['internalServerError']
    }
  }
  postDigitalGoodsOrderEscalateToArbitration: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор цифрового заказа
         * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
         */
        order_id: components['parameters']['orderId']
      }
      cookie?: never
    }
    /** @description Комментарий к эскалации */
    requestBody: {
      content: {
        'application/json': components['schemas']['escalateToArbitrationRequest']
      }
    }
    responses: {
      /** @description Проблема передана в арбитраж */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      409: components['responses']['conflict']
      500: components['responses']['internalServerError']
    }
  }
  getDigitalGoodsOrderHistory: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор цифрового заказа
         * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
         */
        order_id: components['parameters']['orderId']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description История заказа получена */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderHistoryResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      500: components['responses']['internalServerError']
    }
  }
  postDigitalGoodsOrderPayout: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор цифрового заказа
         * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
         */
        order_id: components['parameters']['orderId']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ссылка на вывод средств получена */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['payoutResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      409: components['responses']['conflict']
      500: components['responses']['internalServerError']
    }
  }
  postDigitalGoodsOrderSend: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Идентификатор цифрового заказа
         * @example 019a5dc0-0677-7f77-b0a6-e99dd3b68fa1
         */
        order_id: components['parameters']['orderId']
      }
      cookie?: never
    }
    /** @description Текстовая инструкция для покупателя */
    requestBody: {
      content: {
        'application/json': components['schemas']['sendProductRequest']
      }
    }
    responses: {
      /** @description Цифровой товар отправлен */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['orderActionResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      404: components['responses']['notFound']
      409: components['responses']['conflict']
      500: components['responses']['internalServerError']
    }
  }
  createOrUpdateWebhook: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Настройки webhook */
    requestBody: {
      content: {
        'application/json': components['schemas']['webhookRequest']
      }
    }
    responses: {
      /** @description Webhook сохранен */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['successResponse']
        }
      }
      400: components['responses']['badRequest']
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      500: components['responses']['internalServerError']
    }
  }
  deleteWebhook: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Webhook удален */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['successResponse']
        }
      }
      401: components['responses']['unauthorized']
      403: components['responses']['forbidden']
      500: components['responses']['internalServerError']
    }
  }
}
