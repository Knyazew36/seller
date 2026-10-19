// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v1/tariffs/commission': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Комиссия по категориям товаров
     * @description Метод возвращает данные о [комиссии](https://seller.wildberries.ru/dynamic-product-categories/commission) WB по [родительским категориям товаров](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectParentAll) согласно модели продаж.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 2 запроса |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 2 запроса |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 2 запроса |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1TariffsCommission']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/tariffs/v1/acceptance/coefficients': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Тарифы на поставку
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
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AcceptanceCoefficients']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/tariffs/box': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Тарифы для коробов
     * @description Для остатков товаров, которые поставляются на склад в коробах, метод возвращает [тарифы](https://seller.wildberries.ru/dynamic-product-categories) на:
     *       - доставку со склада или пункта приёма до покупателя
     *       - доставку от покупателя до пункта приёма
     *       - хранение на складе WB
     *
     *     <div class="description_important">
     *       Тарифы для коробов совпадают с тарифами для <strong>Суперсейфа</strong>
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1TariffsBox']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/tariffs/pallet': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Тарифы для монопаллет
     * @description Для товаров, которые поставляются на склад WB на монопаллетах, метод возвращает [стоимость](https://seller.wildberries.ru/dynamic-product-categories):
     *       - доставки со склада до покупателя
     *       - доставки от покупателя до склада
     *       - хранения на складе WB
     *
     *     <div class="description_important">
     *       Тарифы для монопаллет совпадают с тарифами для <strong>Поштучных паллет</strong>
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1TariffsPallet']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/tariffs/return': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Тарифы на возврат
     * @description Метод возвращает [тарифы](https://seller.wildberries.ru/dynamic-product-categories/return-cost):
     *       - на перевозку товаров со склада WB или из пункта приёма до продавца
     *       - на обратную перевозку возвратов, которые не забрал продавец
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1TariffsReturn']
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
    'models.RatesBoxResponse': {
      data?: components['schemas']['models.WarehousesBoxRates']
    }
    'models.WarehousesBoxRates': {
      /**
       * @description Валюта тарифов
       * @example RUB
       */
      currency?: string
      /**
       * @description Дата начала следующего тарифа
       * @example 2024-02-01
       */
      dtNextBox?: string
      /**
       * @description Дата окончания последнего установленного тарифа
       * @example 2024-03-31
       */
      dtTillMax?: string
      /** @description Тарифы для коробов, сгруппированные по складам */
      warehouseList?: components['schemas']['models.WarehouseBoxRates'][] | null
    }
    'models.WarehouseBoxRates': {
      /**
       * @description Логистика, первый литр, ₽
       * @example 48
       */
      boxDeliveryBase?: string
      /**
       * @description Коэффициент **Логистика**, %. На него умножается стоимость логистики. Уже учтён в тарифах
       * @example 160
       */
      boxDeliveryCoefExpr?: string
      /**
       * @description Логистика, дополнительный литр, ₽
       * @example 11,2
       */
      boxDeliveryLiter?: string
      /**
       * @description Логистика FBS, первый литр, ₽
       * @example 40
       */
      boxDeliveryMarketplaceBase?: string
      /**
       * @description Коэффициент **FBS**, %. На него умножается стоимость логистики FBS. Уже учтён в тарифах
       * @example 125
       */
      boxDeliveryMarketplaceCoefExpr?: string
      /**
       * @description Логистика FBS, дополнительный литр, ₽
       * @example 11
       */
      boxDeliveryMarketplaceLiter?: string
      /**
       * @description Хранение в день, первый литр, ₽
       * @example 0,14
       */
      boxStorageBase?: string
      /**
       * @description Коэффициент **Хранение**, %. На него умножается стоимость хранения в день. Уже учтён в тарифах
       * @example 115
       */
      boxStorageCoefExpr?: string
      /**
       * @description Хранение в день, дополнительный литр, ₽
       * @example 0,07
       */
      boxStorageLiter?: string
      /**
       * @description Местонахождение склада
       * @example Россия
       */
      geoName?: string
      /**
       * @description Название склада
       * @example Свой склад СГТ РФ
       */
      warehouseName?: string
    }
    'models.RatesPalletResponse': {
      data?: components['schemas']['models.WarehousesPalletRates']
    }
    'models.WarehousesPalletRates': {
      /**
       * @description Валюта тарифов
       * @example RUB
       */
      currency?: string
      /**
       * @description Дата начала следующего тарифа
       * @example 2024-02-01
       */
      dtNextPallet?: string
      /**
       * @description Дата окончания последнего установленного тарифа
       * @example 2024-03-31
       */
      dtTillMax?: string
      /** @description Тарифы для монопаллет, сгруппированные по складам */
      warehouseList?: components['schemas']['models.WarehousePalletRates'][] | null
    }
    'models.WarehousePalletRates': {
      /**
       * @description Коэффициент доставки, %. На него умножается стоимость доставки. Во всех тарифах этот коэффициент уже учтён
       * @example 170
       */
      palletDeliveryExpr?: string
      /**
       * @description Доставка 1 литра, ₽
       * @example 51
       */
      palletDeliveryValueBase?: string
      /**
       * @description Доставка каждого дополнительного литра, ₽
       * @example 11,9
       */
      palletDeliveryValueLiter?: string
      /**
       * @description Коэффициент хранения, %. На него умножается стоимость хранения. Во всех тарифах этот коэффициент уже учтён
       * @example 155
       */
      palletStorageExpr?: string
      /**
       * @description Хранение 1 монопаллеты, ₽
       * @example 35.65
       */
      palletStorageValueExpr?: string
      /**
       * @description Название склада
       * @example СЦ Брест
       */
      warehouseName?: string
    }
    'models.ReturnRatesResponse': {
      data?: components['schemas']['models.WarehousesReturnRates']
    }
    'models.WarehousesReturnRates': {
      /**
       * @description Валюта тарифов
       * @example RUB
       */
      currency?: string
      /**
       * @description Дата начала следующего тарифа при грузовой доставке
       * @example 2024-02-01
       */
      dtNextDeliveryDumpKgt?: string
      /**
       * @description Дата начала следующего тарифа для неопознанных товаров
       * @example 2024-02-01
       */
      dtNextDeliveryDumpSrg?: string
      /**
       * @description Дата начала следующего тарифа при обычной доставке
       * @example 2024-02-01
       */
      dtNextDeliveryDumpSup?: string
      /**
       * @description Тарифы на возврат, сгруппированные по складам:
       *       - стоимость возврата брака и возврата по инициативе продавца при грузовой доставке.
       *       - стоимость возврата неопознанного складом товара.
       *       - стоимость возврата брака, возврата по инициативе продавца и автовозвратов Маркетплейс (в пункт выдачи и обратно).
       *
       *     Можно получить стоимость возврата в пункт выдачи (ПВЗ) и обратной логистики — если продавец не забрал товары из пункта выдачи за 7 дней.
       */
      warehouseList?: components['schemas']['models.WarehouseReturnRates'][] | null
    }
    'models.WarehouseReturnRates': {
      /**
       * @description **Стоимость возврата при грузовой доставке, доставка на ПВЗ (базовая цена за 1 л), ₽**
       *     Применяется для крупногабаритных товаров, когда:
       *       - продавец хочет вывезти товары со склада WB;
       *       - на складе обнаружили бракованные товары;
       *       - покупатель возвращает товар, но его нельзя вернуть в продажу.
       * @example 1 039
       */
      deliveryDumpKgtOfficeBase?: string
      /**
       * @description **Стоимость возврата при грузовой доставке, доставка на ПВЗ (доп. литр), ₽**<br>
       *     Стоимость за каждый дополнительный литр.
       * @example 9,1
       */
      deliveryDumpKgtOfficeLiter?: string
      /**
       * @description **Стоимость возврата при грузовой доставке, обратная логистика невостребованного возврата, ₽**<br>
       *     Грузовая доставка невостребованного возврата обратно на склад WB. За единицу товара.
       * @example 1 050
       */
      deliveryDumpKgtReturnExpr?: string
      /**
       * @description **Стоимость возврата неопознанного складом товара за каждую единицу, доставка на ПВЗ, ₽**<br>
       *     Применяется для товаров, которые не смогли принять на складе.
       * @example 170
       */
      deliveryDumpSrgOfficeExpr?: string
      /**
       * @description **Стоимость возврата неопознанного складом товара за каждую единицу, обратная логистика невостребованного возврата, ₽** <br>Доставка невостребованного возврата обратно на склад WB.
       * @example 170
       */
      deliveryDumpSrgReturnExpr?: string
      /**
       * @description **Стоимость возврата, доставка курьером (базовая цена за 1 л), ₽**
       *
       *     Применяется, когда:
       *       - продавец хочет вывезти товары со склада Wildberries
       *       - на складе обнаружили бракованные товары
       *       - покупатель возвращает товар, но его нельзя вернуть в продажу
       *       - подключён автовозврат товаров, продаваемых по схеме Маркетплейс
       * @example 229
       */
      deliveryDumpSupCourierBase?: string
      /**
       * @description **Стоимость возврата, доставка курьером (доп. л), ₽**
       *     <br>Стоимость за каждый дополнительный литр.
       * @example 9,1
       */
      deliveryDumpSupCourierLiter?: string
      /**
       * @description **Стоимость возврата, доставка на ПВЗ (базовая цена за 1 л), ₽**
       *
       *     Применяется, когда:
       *       - продавец хочет вывезти товары со склада Wildberries
       *       - на складе обнаружили бракованные товары
       *       - покупатель возвращает товар, но его нельзя вернуть в продажу
       *       - подключён автовозврат товаров, продаваемых по схеме Маркетплейс
       * @example 129
       */
      deliveryDumpSupOfficeBase?: string
      /**
       * @description **Стоимость возврата, доставка на ПВЗ (доп. литр), ₽** <br>Стоимость за каждый дополнительный литр
       * @example 9,1
       */
      deliveryDumpSupOfficeLiter?: string
      /**
       * @description **Стоимость возврата, обратная логистика невостребованного возврата, за единицу товара, ₽**<br>
       *     Доставка невостребованного возврата обратно на склад Wildberries.
       *
       *     Применяется, когда:
       *       - продавец хочет вывезти товары со склада Wildberries
       *       - на складе обнаружили бракованные товары
       *       - покупатель возвращает товар, но его нельзя вернуть в продажу
       *       - подключён автовозврат товаров, продаваемых по схеме Маркетплейс
       * @example 250
       */
      deliveryDumpSupReturnExpr?: string
      /**
       * @description Название склада
       * @example Склад WB РФ
       */
      warehouseName?: string
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
    'models.AcceptanceCoefficient': {
      /** @description Дата начала действия коэффициента */
      date?: string
      /**
       * @description Коэффициент приёмки:
       *       - `-1` — приёмка недоступна, вне зависимости от значения поля `allowUnload`
       *       - `0` — бесплатная приёмка
       *       - от `1` — множитель стоимости приёмки
       */
      coefficient?: number
      /** @description ID склада. По нему можно получить [информацию о складе](./orders-fbw#tag/informationForFormingSupplies/operation/getV1Warehouses) */
      warehouseID?: number
      /** @description Название склада */
      warehouseName?: string
      /**
       * @description Доступность приёмки для поставок данного типа, смотри значение поля `boxTypeID`:
       *
       *      - `true` — приёмка доступна
       *      - `false` — приёмка не доступна
       */
      allowUnload?: boolean
      /**
       * @description ID типа поставки:
       *       - `2` — Короба
       *       - `5` — Монопаллеты
       *       - `6` — Суперсейф
       *     <br>Для типа поставки **QR-поставка с коробами** поле не возвращается
       */
      boxTypeID?: number
      /** @description Коэффициент хранения */
      storageCoef?: string | null
      /** @description Коэффициент логистики */
      deliveryCoef?: string | null
      /** @description Стоимость логистики первого литра */
      deliveryBaseLiter?: string | null
      /** @description Стоимость логистики каждого следующего литра */
      deliveryAdditionalLiter?: string | null
      /**
       * @description Стоимость хранения:
       *       - для паллет — стоимость за одну паллету
       *       - для коробов — стоимость хранения за первый литр
       */
      storageBaseLiter?: string | null
      /**
       * @description Стоимость хранения каждого последующего литра:
       *       - для паллет — всегда будет `null`, т.к. стоимость хранения за единицу паллеты определяется в `StorageBaseLiter`
       *       - для коробов — стоимость хранения за каждый последующий литр
       */
      storageAdditionalLiter?: string | null
      /**
       * @description Тип склада:
       *
       *      - `true` — сортировочный центр (СЦ)
       *      - `false` — обычный
       */
      isSortingCenter?: boolean
    }
    RatesBoxResponse: {
      response?: components['schemas']['models.RatesBoxResponse']
    }
    RatesPalletResponse: {
      response?: components['schemas']['models.RatesPalletResponse']
    }
    ReturnRatesResponse: {
      response?: components['schemas']['models.ReturnRatesResponse']
    }
    Fee: {
      /** @description Список комиссий */
      report?: {
        /** @description Комиссия по модели **Бронирование**, % */
        kgvpBooking?: number
        /** @description Комиссия по модели **Маркетплейс** (`FBS`), % */
        kgvpMarketplace?: number
        /** @description Комиссия по модели **Самовывоз из магазина продавца** (`C&C`), % */
        kgvpPickup?: number
        /** @description Комиссия по моделям **Витрина** (`DBS`) и **Деливери WB** (`DBW`), % */
        kgvpSupplier?: number
        /** @description Комиссия по модели **Витрина экспресс** (`EDBS`), % */
        kgvpSupplierExpress?: number
        /** @description Комиссия по модели **Склад WB** (`FBW`), % */
        paidStorageKgvp?: number
        /** @description ID родительской категории */
        parentID?: number
        /** @description Название родительской категории */
        parentName?: string
        /** @description ID предмета */
        subjectID?: number
        /** @description Название предмета */
        subjectName?: string
      }[]
    }
    FeeChina: {
      /** @description Список комиссий */
      report?: {
        /** @description Комиссия для продавцов из Китая, % */
        kgvpChina?: number
        /** @description ID родительской категории */
        parentID?: number
        /** @description Название родительской категории */
        parentName?: string
        /** @description ID предмета */
        subjectID?: number
        /** @description Название предмета */
        subjectName?: string
      }[]
    }
    FeeTurkey: {
      /** @description Список комиссий */
      report?: {
        /** @description Комиссия для продавцов из Турции, % */
        kgvpTurkey?: number
        /** @description ID родительской категории */
        parentID?: number
        /** @description Название родительской категории */
        parentName?: string
        /** @description ID предмета */
        subjectID?: number
        /** @description Название предмета */
        subjectName?: string
      }[]
    }
    FeeUzbekistan: {
      /** @description Список комиссий */
      report?: {
        /** @description Комиссия по модели **Маркетплейс** (`FBS`), % */
        kgvpMarketplaceUz?: number
        /** @description Комиссия по модели **Склад WB** (`FBW`), % */
        kgvpPaidStorageUz?: number
        /** @description Комиссия по модели **Витрина** (`DBS`), % */
        kgvpSupplierUz?: number
        /** @description ID родительской категории */
        parentID?: number
        /** @description Название родительской категории */
        parentName?: string
        /** @description ID предмета */
        subjectID?: number
        /** @description Название предмета */
        subjectName?: string
      }[]
    }
    FeeUAE: {
      /** @description Список комиссий */
      report?: {
        /** @description Комиссия для продавцов из ОАЭ, % */
        kgvpUAE?: number
        /** @description ID родительской категории */
        parentID?: number
        /** @description Название родительской категории */
        parentName?: string
        /** @description ID предмета */
        subjectID?: number
        /** @description Название предмета */
        subjectName?: string
      }[]
    }
    BadRequest: {
      /** @description Детали ошибки */
      detail?: string
      /** @description ID внутреннего сервиса WB */
      origin?: string
      /** @description Уникальный ID запроса */
      requestId?: string
      /** @description Заголовок ошибки */
      title?: string
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
  parameters: {
    /**
     * @description Дата в формате ГГГГ-ММ-ДД
     * @example 2026-08-15
     */
    Date: string
    /**
     * @description Язык полей ответа `parentName` и `subjectName`:
     *       - `ru` — русский
     *       - `en` — английский
     *       - `zh` — китайский
     */
    Locale: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV1TariffsCommission: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `parentName` и `subjectName`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         */
        locale?: components['parameters']['Locale']
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
          'application/json':
            | components['schemas']['Fee']
            | components['schemas']['FeeChina']
            | components['schemas']['FeeTurkey']
            | components['schemas']['FeeUzbekistan']
            | components['schemas']['FeeUAE']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "detail": "parameter \"locale\" in query has an error: value is not one of the allowed values [\"ru\",\"en\",\"zh\"]",
           *       "origin": "api-statistics",
           *       "requestId": "102d2641a931c41bed60649d6c99d80a",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['BadRequest']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      429: components['responses']['429']
    }
  }
  getV1AcceptanceCoefficients: {
    parameters: {
      query?: {
        /**
         * @description ID складов.<br>По умолчанию возвращаются данные по всем складам
         * @example 507,117501
         */
        warehouseIDs?: string
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
          'application/json': components['schemas']['models.AcceptanceCoefficient'][]
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
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
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
  getV1TariffsBox: {
    parameters: {
      query: {
        /**
         * @description Дата в формате ГГГГ-ММ-ДД
         * @example 2026-08-15
         */
        date: components['parameters']['Date']
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
          'application/json': components['schemas']['RatesBoxResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "detail": "Invalid date param",
           *       "origin": "tariffs",
           *       "requestId": "70da980b108e6f52ce7630921bd05b1a",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['BadRequest']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      429: components['responses']['429']
    }
  }
  getV1TariffsPallet: {
    parameters: {
      query: {
        /**
         * @description Дата в формате ГГГГ-ММ-ДД
         * @example 2026-08-15
         */
        date: components['parameters']['Date']
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
          'application/json': components['schemas']['RatesPalletResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "detail": "parameter \"date\" in query has an error: value is required but missing",
           *       "origin": "tariffs",
           *       "requestId": "7bc5c30d95933058d0e0bddc79b9da547",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['BadRequest']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      429: components['responses']['429']
    }
  }
  getV1TariffsReturn: {
    parameters: {
      query: {
        /**
         * @description Дата в формате ГГГГ-ММ-ДД
         * @example 2026-08-15
         */
        date: components['parameters']['Date']
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
          'application/json': components['schemas']['ReturnRatesResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "detail": "parameter \"date\" in query has an error: empty value is not allowed",
           *       "origin": "tariffs",
           *       "requestId": "e8096bddcfe5e3ff75f1afd26755364c",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['BadRequest']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      429: components['responses']['429']
    }
  }
}
