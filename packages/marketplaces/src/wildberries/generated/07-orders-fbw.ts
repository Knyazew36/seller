// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v1/acceptance/options': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Опции приёмки
     * @description Метод ]временно отключён](/release-notes?id=570)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
     *     | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
     *     | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов.
     *
     *     </div>
     */
    post: operations['postV1AcceptanceOptions']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/warehouses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список складов
     * @description Метод ]временно отключён](/release-notes?id=570)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
     *     | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
     *     | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
     *     | Базовый | 12 ч | 1 запрос | 12 ч | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов.
     *
     *     </div>
     */
    get: operations['getV1Warehouses']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/transit-tariffs': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Транзитные направления
     * @description Метод ]временно отключён](/release-notes?id=570)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 6 запросов | 10 сек | 10 запросов |
     *     | Сервисный | 1 мин | 6 запросов | 10 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 10 запросов |
     *     | Базовый | 12 ч | 1 запрос | 12 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1TransitTariffs']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/supplies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список поставок
     * @description Метод возвращает список поставок, по умолчанию — последние 1000 поставок.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1Supplies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/supplies/{ID}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Детали поставки
     * @description Метод возвращает детали поставки по ID.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1SuppliesId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/supplies/{ID}/goods': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Товары поставки
     * @description Метод возвращает информацию о товарах в поставке.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1SuppliesIdGoods']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/supplies/{ID}/package': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Упаковка поставки
     * @description Метод возвращает информацию об упаковке поставки.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1SuppliesIdPackage']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/supplies/v1/drafts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список черновиков
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает список черновиков поставок.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     </div>
     */
    get: operations['getV1Drafts']
    put?: never
    /**
     * Создать черновик
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод создаёт пустой черновик поставки.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     </div>
     */
    post: operations['postV1Drafts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/supplies/v1/drafts/{draftId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Удалить черновик
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод удаляет черновик поставки по его ID.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     </div>
     */
    delete: operations['deleteV1DraftsDraftId']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/supplies/v1/drafts/{draftId}/items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список товаров в черновике
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает список товаров черновика.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     </div>
     */
    get: operations['getV1DraftsDraftIdItems']
    put?: never
    /**
     * Добавить товары в черновик
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод добавляет товары в черновик поставки.
     *
     *     <div class="description_important">
     *
     *      Метод работает по принципу атомарности:
     *       - если все баркоды прошли валидацию успешно, то все товары добавятся в черновик. В ответе вернётся <code>{"results":[]}</code>
     *       - если хотя бы один баркод не прошел валидацию, ни один товар в черновик не добавится. В ответе вернётся список невалидных баркодов
     *
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     </div>
     */
    post: operations['postV1DraftsDraftIdItems']
    /**
     * Удалить товары из черновика
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод удаляет товары из черновика поставки по списку баркодов.
     *
     *       <div class="description_important">
     *       Баркоды не валидируются. Если в запросе вы передали некорректные баркоды, вы не получите ошибку. При этом корректные баркоды будут удалены из черновика.
     *       </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 10 запросов |
     *     </div>
     */
    delete: operations['deleteV1DraftsDraftIdItems']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/supplies/v1/discrepancies/{supplyId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Расхождения в поставке
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает информацию о выявленных расхождениях между заявленным и фактическим количеством товара в поставке.
     *     <br>
     *     Для поставок принятых не позднее года назад.
     *     <br><br>
     *     **Типы расхождений:**
     *     <br><br>
     *     Расхождение в большую сторону:<br><br>
     *     1. Избыток товара с заявленным баркодом:
     *       - `"discrepancyType": "surplus"`
     *       - `"discrepancyLabel": "surplus"`
     *     2. Избыток товара с несоответствующим заявленному баркодом:
     *       - `"discrepancyType": "surplus"`
     *       - `"discrepancyLabel": "re-sorting"`
     *
     *     Расхождение в меньшую сторону:<br><br>
     *     1. Не хватает товара:
     *       - `"discrepancyType": "shortage"`
     *       - `"discrepancyLabel": "shortage"`
     *     2. Некоторые баркоды не соответствуют заявленным:
     *       - `"discrepancyType": "shortage"`
     *       - `"discrepancyLabel": "re-sorting"`
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1SuppliesSupplyIdDiscrepanciesQuantity']
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
    'models.ItemDiscrepancyResponse': {
      /** @description ID упаковки */
      packageCode: string
      /** @description Видео фиксации расхождений в процессе приёмки */
      videoUrl: string
      /**
       * Format: date-time
       * @description Дата и время видеофиксации расхождений в процессе приемки
       */
      videoStartsAt: string
      /**
       * @description Доступность видео:
       *        - `false` — видео доступно
       *        - `true` — видео недоступно
       */
      videoUnavailable: boolean
      /** @description Товары поставки */
      items: components['schemas']['models.DiscrepancyResponseItem'][]
    }
    'models.DiscrepancyResponseItem': {
      /** @description Баркод, заявленный при формировании поставки */
      declaredSku: string
      /**
       * @description Тип расхождения в целом по коробу:
       *      - `surplus` — товара в коробе больше заявленного
       *      - `shortage` — товара в коробе меньше заявленного
       *      - `re-sorting` — баркод принятого товара не соответствует заявленному при формировании поставки
       * @enum {string}
       */
      discrepancyType: 'surplus' | 'shortage' | 're-sorting'
      /** @description Количество товара, заявленное при формировании поставки */
      declaredAmount: number
      /** @description Фактическое количество товара */
      actualAmount: number
      /** @description Разница между заявленным и фактическим количеством товара */
      discrepancyQuantity: number
      /** @description Фактический баркод */
      actualSku: string
      /** @description Результаты сканирования товаров */
      skuScans: components['schemas']['models.ItemScans'][] | null
    }
    'models.ItemScans': {
      /** @description ID сканирования */
      scanId: number
      /** @description Баркод, заявленный при формировании поставки */
      declaredSku: string
      /**
       * Format: date-time
       * @description Дата и время сканирования
       */
      scanTime: string
      /**
       * @description Тип расхождения товара:
       *      - `surplus` — товара больше, чем заявлено
       *      - `shortage` — товара меньше, чем заявлено
       *      - `re-sorting` — баркод принятого товара не соответствует заявленному при формировании поставки
       * @enum {string}
       */
      discrepancyLabel: 'surplus' | 'shortage' | 're-sorting'
      /** @description Фактический баркод */
      actualSku: string
    }
    'errors.DraftError': {
      /** @description HTTP статус-код */
      status: number
      /** @description Заголовок ошибки */
      title: string
      /** @description Детали ошибки */
      detail?: string
      /** @description Уникальный ID запроса */
      requestId: string
      /** @description ID внутреннего сервиса WB */
      origin: string
    }
    'models.DraftAdditemsRequest': {
      /** @description Список товаров */
      items: components['schemas']['models.Item'][]
    }
    'models.DraftAddItemsErrorResponse': {
      /** @description Список невалидных баркодов с ошибками */
      results: components['schemas']['models.DraftAddItemsResultItem'][]
    }
    'models.DraftDeleteItemsErrorResponse': {
      results: unknown[]
    }
    'models.DraftAddItemsResultItem': {
      /** @description Детали ошибки */
      error: components['schemas']['models.DraftAddItemsResultError']
      /** @description Баркод */
      sku: string
    }
    'models.DraftAddItemsResultError': {
      /**
       * @description Детали ошибки
       * @example Создайте карточку товара с этим баркодом
       */
      detail: string
      /**
       * @description Заголовок ошибки
       * @example Invalid sku
       */
      title: string
    }
    'models.DraftCreateResponse': {
      /**
       * @description ID черновика
       * @example cd20d135-f13f-47a0-903c-3bd268b92047
       */
      draftId: string
    }
    'models.DraftDeleteitemsRequest': {
      /** @description Список баркодов */
      skus: string[]
    }
    'models.DraftItemItem': {
      /** @description Баркод */
      sku: string
      /** @description Цвет товара */
      color: string
      /** @description Количество единиц товара */
      quantity: number
      /** @description Бренд */
      brandName: string
      /** @description Ссылка на изображение товара */
      imgSrc: string
      /** @description Артикул WB */
      nmId: number
      /** @description Предмет */
      subjectName: string
      /** @description Размер товара */
      techSize: string
      /** @description Название товара */
      title: string
      /** @description Артикул продавца */
      vendorCode: string
    }
    'models.DraftItem': {
      /** @description ID черновика */
      draftId: string
      /** @description Телефон пользователя, создавшего черновик */
      phone: string
      /**
       * Format: ISO 8601
       * @description Дата и время создания черновика
       */
      createdAt: string
      /**
       * Format: ISO 8601
       * @description Дата и время последнего обновления черновика
       */
      updatedAt: string
      /** @description Количество баркодов */
      skuQuantity: number
      /** @description Количество единиц товара */
      itemQuantity: number
    }
    'models.ListDraftItemsResponse': {
      /** @description Количество баркодов */
      skuQuantity: number
      /** @description Количество единиц товара */
      itemQuantity: number
      /** @description Список товаров */
      items: components['schemas']['models.DraftItemItem'][]
    }
    'models.ListDraftsResponse': {
      /** @description Общее количество черновиков */
      total: number
      /** @description Список черновиков */
      drafts: components['schemas']['models.DraftItem'][]
    }
    'models.Item': {
      /** @description Количество единиц товара */
      quantity: number
      /** @description Баркод из карточки товара */
      sku: string
    }
    'models.TransitTariff': {
      /** @description Транзитный склад */
      transitWarehouseName?: string
      /** @description Склад назначения */
      destinationWarehouseName?: string
      /**
       * Format: date-time
       * @description С какого числа доступно транзитное направление
       */
      activeFrom?: string
      /** @description Тариф за транзит коробов. Если `null`, транзит для коробов недоступен */
      boxTariff?: components['schemas']['models.VolumeTariff'][] | null
      /** @description Тариф за паллету, ₽ */
      palletTariff?: number
    }
    'models.VolumeTariff': {
      /** @description Объём поставки от, литры */
      from?: number
      /** @description Объём поставки до, литры */
      to?: number
      /** @description Тариф, ₽ за литр */
      value?: number
    }
    /**
     * @example {
     *       "packageCode": "WB_689",
     *       "quantity": 1,
     *       "barcodes": [
     *         {
     *           "barcode": "1234567891234",
     *           "quantity": 1
     *         }
     *       ]
     *     }
     */
    'models.Box': {
      /** @description Штрих-код упаковки */
      packageCode?: string
      /** @description Суммарное количество товара в упаковке, шт */
      quantity?: number
      /** @description Список упакованных товаров */
      barcodes?: components['schemas']['models.GoodInBox'][]
    }
    'models.GoodInBox': {
      /** @description Баркод */
      barcode?: string
      /** @description Количество, шт */
      quantity?: number
    }
    'models.SuppliesFiltersRequest': {
      /** @description Фильтр по датам */
      dates?: components['schemas']['models.DateFilterRequest'][]
      /**
       * @description Фильтр поставок по статусам. Возможные значения:
       *       - `1` — Не запланировано
       *       - `2` — Запланировано
       *       - `3` — Отгрузка разрешена
       *       - `4` — Идёт приёмка
       *       - `5` — Принято
       *       - `6` — Отгружено на воротах
       */
      statusIDs?: components['schemas']['models.HandySupplyStatus'][]
    }
    /**
     * @example {
     *       "barcode": "1234567891234",
     *       "vendorCode": "wb4sewt0vg",
     *       "nmID": 987456654,
     *       "needKiz": true,
     *       "tnved": "6204430000",
     *       "techSize": "C",
     *       "color": "красный",
     *       "supplierBoxAmount": 10,
     *       "quantity": 10,
     *       "readyForSaleQuantity": 0,
     *       "unloadingQuantity": 0,
     *       "acceptedQuantity": 0
     *     }
     */
    'models.GoodInSupply': {
      /** @description Баркод товара */
      barcode?: string
      /** @description Артикул продавца */
      vendorCode?: string
      /** @description Артикул WB */
      nmID?: number
      /**
       * @description Нужен ли [код маркировки Честного знака](https://честныйзнак.рф/) для этого товара:
       *       - `false` — не нужен
       *       - `true` — нужен
       */
      needKiz?: boolean
      /**
       * @description Код ТНВЭД.
       *     <br>
       *     Если `"needKiz":true`, а `"tnved":null`, нужно заполнить характеристику товара **ТН ВЭД** в [личном кабинете](https://seller.wildberries.ru/new-goods) или по [API](./item-management#tag/listings/operation/postV2CardsUpdate)
       */
      tnved?: string | null
      /** @description Размер товара, указанный продавцом */
      techSize?: string
      /** @description Цвет товара */
      color?: string | null
      /** @description Указано в упаковке, шт */
      supplierBoxAmount?: number | null
      /** @description Указано в поставке/заказе, шт */
      quantity?: number
      /** @description Поступило в продажу, шт */
      readyForSaleQuantity?: number | null
      /** @description Принято, шт */
      acceptedQuantity?: number | null
      /** @description Количество товара на раскладке, шт */
      unloadingQuantity?: number | null
    }
    'models.DateFilterRequest': {
      /**
       * Format: ISO 8601
       * @description Дата начала периода
       */
      from?: string
      /**
       * Format: ISO 8601
       * @description Дата окончания периода
       */
      till?: string
      /**
       * @description Тип дат:
       *       - `factDate` — дата фактической отгрузки поставки
       *       - `createDate` — дата создания поставки
       *       - `supplyDate` — плановая дата отгрузки поставки
       *       - `updatedDate` — дата изменения поставки
       * @enum {string}
       */
      type: 'factDate' | 'createDate' | 'supplyDate' | 'updatedDate'
    }
    /**
     * @example {
     *       "phone": "+7 903 *** 98 62",
     *       "statusID": 5,
     *       "boxTypeID": 2,
     *       "createDate": "2025-07-15T17:17:45+03:00",
     *       "supplyDate": "2025-07-15T00:00:00+03:00",
     *       "factDate": "2025-07-18T11:37:32+03:00",
     *       "updatedDate": "2025-07-18T12:59:53+03:00",
     *       "warehouseID": 507,
     *       "warehouseName": "Коледино",
     *       "actualWarehouseID": 507,
     *       "actualWarehouseName": "Коледино",
     *       "transitWarehouseID": null,
     *       "transitWarehouseName": "",
     *       "acceptanceCost": 5000,
     *       "paidAcceptanceCoefficient": 10,
     *       "rejectReason": null,
     *       "supplierAssignName": "Магазин",
     *       "storageCoef": "215",
     *       "deliveryCoef": "200",
     *       "quantity": 10,
     *       "readyForSaleQuantity": 0,
     *       "acceptedQuantity": 10,
     *       "unloadingQuantity": 10,
     *       "depersonalizedQuantity": 0,
     *       "discrepancies": 0,
     *       "isBoxOnPallet": true
     *     }
     */
    'models.SupplyDetails': {
      /** @description Телефон пользователя, создавшего поставку */
      phone?: string
      /**
       * @description ID статуса поставки:
       *       - `1` — Не запланировано
       *       - `2` — Запланировано
       *       - `3` — Отгрузка разрешена
       *       - `4` — Идёт приёмка
       *       - `5` — Принято
       *       - `6` — Отгружено на воротах
       * @enum {integer}
       */
      statusID?: 1 | 2 | 3 | 4 | 5 | 6
      /**
       * @description ID типа виртуальной поставки. Отображается только для поставок с `"boxTypeID":0`.
       *       - `0` — Перенос остатков
       *       - `1` — Обезличка
       *       - `4` — QR-поставка
       *       - `5` — Допринято
       *       - `6` — Скан-приёмка
       */
      virtualTypeID?: number
      /**
       * @description ID типа поставки:
       *       - `0` — Без коробов (виртуальная поставка)
       *       - `1` и `2` — Короба
       *       - `5` — Монопаллеты
       *       - `6` — Суперсейф
       */
      boxTypeID?: number
      /** @description Дата и время создания поставки */
      createDate?: string
      /** @description Плановая дата отгрузки поставки */
      supplyDate?: string | null
      /** @description Дата фактической отгрузки поставки */
      factDate?: string | null
      /** @description Дата изменения поставки */
      updatedDate?: string | null
      /** @description ID склада, на который планируется поставка */
      warehouseID?: number
      /** @description Название склада, на который планируется поставка */
      warehouseName?: string
      /** @description ID склада, на который поставка была привезена */
      actualWarehouseID?: number | null
      /** @description Название склада, на который поставка привезена */
      actualWarehouseName?: string
      /** @description ID транзитного склада */
      transitWarehouseID?: number | null
      /** @description Название транзитного склада */
      transitWarehouseName?: string
      /** @description Предварительная стоимость приёмки, ₽ */
      acceptanceCost?: number | null
      /** @description Коэффициент приёмки */
      paidAcceptanceCoefficient?: number | null
      /** @description Причина, по которой поставка не может быть принята */
      rejectReason?: string | null
      /** @description Краткое название продавца */
      supplierAssignName?: string | null
      /** @description Коэффициент хранения */
      storageCoef?: string | null
      /** @description Коэффициент логистики */
      deliveryCoef?: string | null
      /** @description Добавлено в поставку/заказ, шт */
      quantity?: number
      /** @description Поступило в продажу, шт */
      readyForSaleQuantity?: number
      /** @description Принято, шт */
      acceptedQuantity?: number
      /** @description Количество товара, находящегося на раскладке, шт */
      unloadingQuantity?: number
      /** @description Количество обезличенного товара, шт */
      depersonalizedQuantity?: number | null
      /**
       * @description Расхождения между заявленным и фактическим количеством товара в поставке.
       *     <br>
       *     Только при `"statusID":5`
       */
      discrepancies?: number
      /**
       * @description Тип поставки — **Поштучная палета**:
       *       - `true` — да
       *       - `false` — нет
       *
       *       Поле возвращается только при `"boxTypeID": 2`
       */
      isBoxOnPallet?: boolean
    }
    /** @enum {integer} */
    'models.HandySupplyStatus': 1 | 2 | 3 | 4 | 5 | 6
    'models.Supply': {
      /** @description Телефон пользователя, создавшего поставку */
      phone?: string
      /** @description ID поставки. Если `null`, это заказ, тогда используйте значение поля `preorderID` */
      supplyID?: number | null
      /** @description ID заказа (незапланированная поставка). Для всех виртуальных поставок будет `0` */
      preorderID?: number
      /** @description Дата и время создания поставки */
      createDate?: string
      /** @description Плановая дата отгрузки поставки */
      supplyDate?: string | null
      /** @description Дата фактической отгрузки поставки */
      factDate?: string | null
      /** @description Дата изменения поставки */
      updatedDate?: string | null
      /**
       * @description ID статуса поставки:
       *       - `1` — Не запланировано
       *       - `2` — Запланировано
       *       - `3` — Отгрузка разрешена
       *       - `4` — Идёт приёмка
       *       - `5` — Принято
       *       - `6` — Отгружено на воротах
       * @enum {integer}
       */
      statusID?: 1 | 2 | 3 | 4 | 5 | 6
      /**
       * @description ID типа поставки:
       *       - `0` — Без коробов (виртуальная поставка)
       *       - `1` и `2` — Короба
       *       - `5` — Монопаллеты
       *       - `6` — Суперсейф
       */
      boxTypeID?: unknown
      /**
       * @description Тип поставки — **Поштучная палета**:
       *       - `true` — да
       *       - `false` — нет
       *
       *       Поле возвращается только при `"boxTypeID": 2`
       */
      isBoxOnPallet?: boolean
    }
    /**
     * @example {
     *       "ID": 300461,
     *       "name": "Гомель 2",
     *       "address": "Гомель, Могилёвская улица 1/А",
     *       "workTime": "24/7",
     *       "isActive": false,
     *       "isTransitActive": true
     *     }
     */
    'models.WarehousesResultItems': {
      /** @description ID склада */
      ID?: number
      /** @description Название склада */
      name?: string
      /** @description Адрес склада */
      address?: string
      /** @description Режим работы склада */
      workTime?: string
      /**
       * @description Доступен ли в качестве склада назначения:
       *     - `true` — да
       *     - `false` — нет
       */
      isActive?: boolean
      /**
       * @description Доступен ли в качестве транзитного склада:
       *     - `true` — да
       *     - `false` — нет
       */
      isTransitActive?: boolean
    }
    'models.Good': {
      /** @description Суммарное количество товаров, планируемых для поставки. <br>  **Максимум 999999** */
      quantity?: number
      /** @description Баркод из карточки товара */
      barcode?: string
    }
    'models.ErrorModel': {
      /** @description HTTP статус-код */
      status?: number
      /** @description ID ошибки */
      title?: string
      /** @description Описание ошибки */
      detail?: string
      /** @description ID запроса */
      requestId?: string
      /** @description Сервис, вернувший ошибку */
      origin?: string
    }
    'models.OptionsResultModel': {
      result?: {
        /** @description Баркод из карточки товара */
        barcode?: string
        /** @description Данные ошибки. При наличии */
        error?: {
          /** @description ID ошибки */
          title?: string
          /** @description Описание ошибки */
          detail?: string
        }
        /**
         * @description Наличие ошибки:
         *       - `true` — ошибка есть
         *       - Поля нет — ошибка отсутствует
         */
        isError?: boolean
        /** @description Список складов. При наличии ошибки будет `null` */
        warehouses?:
          | {
              /** @description ID склада. По нему можно получить [информацию о складе](./orders-fbw#tag/informationForFormingSupplies/operation/getV1Warehouses) */
              warehouseID?: number
              /**
               * @description Тип упаковки **Короб**:
               *       - `true` — доступен
               *       - `false` — недоступен
               */
              canBox?: boolean
              /**
               * @description Тип упаковки **Монопаллета**:
               *       - `true` — доступен
               *       - `false` — недоступен
               */
              canMonopallet?: boolean
              /**
               * @description Тип упаковки **Суперсейф**:
               *       - `true` — доступен
               *       - `false` — недоступен
               */
              canSupersafe?: boolean
              /**
               * @description Тип поставки **Поштучная палета**:
               *       - `true` — доступен
               *       - `false` — недоступен
               */
              isBoxOnPallet?: boolean
            }[]
          | null
      }[]
      /** @description ID запроса при наличии ошибок */
      requestId?: string
    }
    'models.SupplyAcceptedMoreThanYearAgo': {
      /** @description HTTP-статус код */
      status: number
      /** @description Краткое описание ошибки */
      title: string
      /** @description Подробное описание ошибки */
      detail: string
      /** @description ID запроса */
      requestId: string
      /** @description Сервис, в котором произошла ошибка */
      origin: string
    }
    Response4XX: {
      /** @description Заголовок ошибки */
      title?: string
      /** @description Детали ошибки */
      detail?: string
      /** @description Внутренний код ошибки */
      code?: string
      /** @description ID запроса */
      requestId?: string
      /** @description ID внутреннего сервиса WB */
      origin?: string
      /** @description HTTP статус-код */
      status?: number
      /** @description Расшифровка HTTP статус-кода */
      statusText?: string
      /**
       * Format: date-time
       * @description Дата и время запроса
       */
      timestamp?: string
    }
  }
  responses: {
    /** @description Не авторизован */
    401: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "title": "unauthorized",
         *       "detail": "token problem; token is malformed: could not base64 decode signature: illegal base64 data at input byte 84",
         *       "code": "07e4668e--a53a3d31f8b0-[UK-oWaVDUqNrKG]; 03bce=277; 84bd353bf-75",
         *       "requestId": "7b80742415072fe8b6b7f7761f1d1211",
         *       "origin": "ag-marketplace",
         *       "status": 401,
         *       "statusText": "Unauthorized",
         *       "timestamp": "2024-09-30T06:52:38Z"
         *     }
         */
        'application/problem+json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description Детали ошибки */
          detail?: string
          /** @description Внутренний код ошибки */
          code?: string
          /** @description Уникальный ID запроса */
          requestId?: string
          /** @description ID внутреннего сервиса WB */
          origin?: string
          /** @description HTTP статус-код */
          status?: number
          /** @description Расшифровка HTTP статус-кода */
          statusText?: string
          /**
           * Format: date-time
           * @description Дата и время запроса
           */
          timestamp?: string
        }
      }
    }
    /** @description Требуется платёж */
    402: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "title": "payment required",
         *       "detail": "wb solution for business has insufficient funds on its balance. please top up the balance in the company's personal account https://dev.wildberries.ru/company"
         *     }
         */
        'application/problem+json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description Детали ошибки. Ошибка возвращается только сервисам из [Каталога решений для бизнеса](/business-solutions) */
          detail?: string
        }
      }
    }
    /** @description Доступ запрещён */
    403: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/problem+json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description Детали ошибки */
          detail?: string
          /** @description Внутренний код ошибки */
          code?: string
          /** @description ID запроса */
          requestId?: string
          /** @description ID внутреннего сервиса WB */
          origin?: string
          /** @description HTTP статус-код */
          status?: number
          /** @description Расшифровка HTTP статус-кода */
          statusText?: string
          /**
           * Format: date-time
           * @description Дата и время запроса
           */
          timestamp?: string
        }
      }
    }
    /** @description Слишком много запросов */
    429: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "title": "too many requests",
         *       "detail": "limited by c122a060-a7fb-4bb4-abb0-32fd4e18d489",
         *       "code": "07e4668e-ac2242c5c8c5-[UK-4dx7JUdskGZ]",
         *       "requestId": "9d3c02cc698f8b041c661a7c28bed293",
         *       "origin": "ag-marketplace",
         *       "status": 429,
         *       "statusText": "Too Many Requests",
         *       "timestamp": "2024-09-30T06:52:38Z"
         *     }
         */
        'application/problem+json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description Детали ошибки */
          detail?: string
          /** @description Внутренний код ошибки */
          code?: string
          /** @description Уникальный ID запроса */
          requestId?: string
          /** @description ID внутреннего сервиса WB */
          origin?: string
          /** @description HTTP статус-код */
          status?: number
          /** @description Расшифровка HTTP статус-кода */
          statusText?: string
          /**
           * Format: date-time
           * @description Дата и время запроса
           */
          timestamp?: string
        }
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
  postV1AcceptanceOptions: {
    parameters: {
      query?: {
        /**
         * @description ID склада. <br> Если параметр не указан, возвращаются данные по всем складам.<br> **Максимум одно значение**
         * @example 507
         */
        warehouseID?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['models.Good'][]
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.OptionsResultModel']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      429: components['responses']['429']
    }
  }
  getV1Warehouses: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.WarehousesResultItems'][]
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      429: components['responses']['429']
    }
  }
  getV1TransitTariffs: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.TransitTariff'][]
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1Supplies: {
    parameters: {
      query?: {
        /** @description Количество записей в ответе */
        limit?: number
        /** @description После какого элемента выдавать данные */
        offset?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "dates": [
         *         {
         *           "from": "2024-03-04",
         *           "till": "2025-03-24",
         *           "type": "factDate"
         *         }
         *       ],
         *       "statusIDs": [
         *         5,
         *         6
         *       ]
         *     }
         */
        'application/json': components['schemas']['models.SuppliesFiltersRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example [
           *       {
           *         "phone": "+7 916 *** 44 44",
           *         "supplyID": null,
           *         "preorderID": 34597755,
           *         "createDate": "2024-12-29T16:58:26+03:00",
           *         "supplyDate": null,
           *         "factDate": null,
           *         "updatedDate": null,
           *         "statusID": 1,
           *         "boxTypeID": 1
           *       },
           *       {
           *         "phone": "+7 916 *** 33 33",
           *         "supplyID": 26596368,
           *         "preorderID": 34601223,
           *         "createDate": "2024-12-29T16:57:59+03:00",
           *         "supplyDate": "2024-12-29T00:00:00+03:00",
           *         "factDate": null,
           *         "updatedDate": null,
           *         "statusID": 2,
           *         "boxTypeID": 5
           *       },
           *       {
           *         "phone": "+7 000 *** 36 76",
           *         "supplyID": 22677736,
           *         "preorderID": 27363170,
           *         "createDate": "2024-08-22T18:10:59+03:00",
           *         "supplyDate": "2024-08-22T00:00:00+03:00",
           *         "factDate": "2024-08-22T12:24:14+03:00",
           *         "updatedDate": "2024-08-22T18:33:45+03:00",
           *         "statusID": 6,
           *         "boxTypeID": 2,
           *         "isBoxOnPallet": false
           *       }
           *     ]
           */
          'application/json': components['schemas']['models.Supply'][]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SuppliesId: {
    parameters: {
      query?: {
        /**
         * @description Поиск по:
         *       - `true` — ID заказа, если в `ID` передаёте ID заказа
         *       - `false` — ID поставки, если в `ID` передаёте ID поставки
         */
        isPreorderID?: boolean
      }
      header?: never
      path: {
        /** @description ID поставки или заказа */
        ID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.SupplyDetails']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1SuppliesIdGoods: {
    parameters: {
      query?: {
        /** @description Количество записей в ответе */
        limit?: number
        /** @description После какого элемента выдавать данные */
        offset?: number
        /**
         * @description Поиск по:
         *       - `true` — ID заказа, если в `ID` передаёте ID заказа
         *       - `false` — ID поставки, если в `ID` передаёте ID поставки
         */
        isPreorderID?: boolean
      }
      header?: never
      path: {
        /** @description ID поставки или заказа */
        ID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.GoodInSupply'][]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain; charset=utf-8': components['schemas']['models.ErrorModel']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SuppliesIdPackage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        ID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.Box'][]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Drafts: {
    parameters: {
      query?: {
        /** @description Количество черновиков в ответе */
        limit?: number
        /** @description Сколько элементов пропустить. Например, для значения 10 ответ начнется с 11 элемента */
        offset?: number
        /**
         * @description Сортировка:
         *       - `createdDt` — по дате создания черновика
         *       - `updatedDt` — по дате обновления черновика
         */
        sort?: 'createDt' | 'updateDt'
        /**
         * @description Порядок выдачи:
         *       - `desc` — по убыванию
         *       - `asc` — по возрастанию
         */
        order?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "drafts": [
           *         {
           *           "draftId": "b5aed067-69d4-47b8-a5d0-591c615288f9",
           *           "phone": "+7 123 *** 23 23",
           *           "skuQuantity": 5,
           *           "itemQuantity": 1,
           *           "createdAt": "2025-06-17T08:11:57.767Z",
           *           "updatedAt": "2025-06-17T08:11:57.767Z"
           *         }
           *       ],
           *       "total": 1
           *     }
           */
          'application/json': components['schemas']['models.ListDraftsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1Drafts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.DraftCreateResponse']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  deleteV1DraftsDraftId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID черновика */
        draftId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "status": 400,
           *       "title": "bad request",
           *       "detail": "Неверный формат draftId",
           *       "requestId": "a6bdc2a4d2fde51c2036fa8af2483886",
           *       "origin": "supply-api"
           *     }
           */
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "status": 404,
           *       "title": "not found",
           *       "detail": "Черновик не найден",
           *       "requestId": "a6bdc2a4d2fde51c2036fa8af2483886",
           *       "origin": "supply-api"
           *     }
           */
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1DraftsDraftIdItems: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID черновика */
        draftId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "items": [
           *         {
           *           "sku": "2039395667350",
           *           "quantity": 1000,
           *           "nmId": 123456789,
           *           "brandName": "Brand",
           *           "subjectName": "Комбинезоны для животных",
           *           "imgSrc": "https://basket-13.wbbasket.ru/vol123/part3456/123456789/images/tm/1.webp",
           *           "title": "комбенизон для собак",
           *           "techSize": "48",
           *           "vendorCode": "1111",
           *           "color": "красный бархат"
           *         }
           *       ],
           *       "skuQuantity": 1,
           *       "itemQuantity": 1
           *     }
           */
          'application/json': components['schemas']['models.ListDraftItemsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "status": 404,
           *       "title": "not found",
           *       "detail": "Черновик не найден",
           *       "requestId": "a6bdc2a4d2fde51c2036fa8af2483886",
           *       "origin": "supply-api"
           *     }
           */
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1DraftsDraftIdItems: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID черновика */
        draftId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "items": [
         *         {
         *           "quantity": 1,
         *           "sku": "1234567"
         *         },
         *         {
         *           "quantity": 1,
         *           "sku": "2000000512907"
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['models.DraftAdditemsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.DraftAddItemsErrorResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "status": 404,
           *       "title": "not found",
           *       "detail": "Черновик не найден",
           *       "requestId": "a6bdc2a4d2fde51c2036fa8af2483886",
           *       "origin": "supply-api"
           *     }
           */
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      429: components['responses']['429']
    }
  }
  deleteV1DraftsDraftIdItems: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID черновика */
        draftId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "skus": [
         *         "123456789"
         *       ]
         *     }
         */
        'application/json': components['schemas']['models.DraftDeleteitemsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.DraftDeleteItemsErrorResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "status": 404,
           *       "title": "not found",
           *       "detail": "Черновик не найден",
           *       "requestId": "a6bdc2a4d2fde51c2036fa8af2483886",
           *       "origin": "supply-api"
           *     }
           */
          'application/json': components['schemas']['errors.DraftError']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1SuppliesSupplyIdDiscrepanciesQuantity: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ItemDiscrepancyResponse'][]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.SupplyAcceptedMoreThanYearAgo']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['models.ErrorModel']
        }
      }
      429: components['responses']['429']
    }
  }
}
