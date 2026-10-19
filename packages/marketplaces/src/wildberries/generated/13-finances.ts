// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v1/account/balance': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить баланс продавца
     * @description Метод возвращает данные виджета баланса на [главной странице](https://seller.wildberries.ru) портала продавцов.
     *     <br><br>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AccountBalance']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/finance/v1/sales-reports/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список отчётов реализации
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает список отчётов релизации по формату [таблицы отчётов](https://seller.wildberries.ru/suppliers-mutual-settlements).
     *     <br><br>
     *     Данные доступны с 29 января 2024 года.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1SalesReportsList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/finance/v1/sales-reports/detailed/{reportId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Детализации к отчётам реализации по ID отчётов
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает детализации к [отчётам реализации](https://seller.wildberries.ru/suppliers-mutual-settlements) по ID отчётов.
     *     <br><br>
     *     Данные доступны с 29 января 2024 года.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1SalesReportsDetailedReportId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/finance/v1/sales-reports/detailed': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Детализации к отчётам реализации за период
     * @description Метод возвращает детализации к [отчётам реализации](https://seller.wildberries.ru/suppliers-mutual-settlements) за указанный период.
     *     <br><br>
     *     Данные доступны с 29 января 2024 года.
     *
     *
     *     <div class="description_important">
     *       Вы можете выгрузить данные в <a href="/knowledge-base/articles/019d49a4-650c-7b04-9596-ba441936f9d3">Google Таблицы</a>
     *     </div>
     *
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     | Базовый | 24 ч | 2 запроса | 12 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1SalesReportsDetailed']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/finance/v1/acquiring/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список отчётов об издержках на приём платежей
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает список отчётов об издержках на приём платежей по формату [таблицы отчётов](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1AcquiringList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/finance/v1/acquiring/detailed/{reportId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Детализации к отчётам об издержках на приём платежей по ID отчётов
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает детализации к [отчётам об издержках на приём платежей](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports) по ID отчётов.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1AcquiringDetailedReportId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/finance/v1/acquiring/detailed': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Детализации к отчётам об издержках на приём платежей за период
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает детализации к [отчётам об издержках на приём платежей](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports) за указанный период.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1AcquiringDetailed']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/documents/categories': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Категории документов
     * @description Метод возвращает категории документов для получения [списка документов продавца](/openapi/documents-and-accounting#tag/documents/operation/getV1DocumentsList).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1DocumentsCategories']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/documents/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список документов
     * @description Метод возвращает список документов продавца. Вы можете получить [один](/openapi/documents-and-accounting#tag/documents/operation/getV1DocumentsDownload) или [несколько](/openapi/documents-and-accounting#tag/documents/operation/postV1DocumentsDownloadAll) документов из полученного списка.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1DocumentsList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/documents/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить документ
     * @description Метод загружает один документ из [списка документов продавца](/openapi/documents-and-accounting#tag/documents/operation/getV1DocumentsList).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
     *     | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1DocumentsDownload']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/documents/download/all': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить документы
     * @description Метод загружает несколько документов из [списка документов продавца](/openapi/documents-and-accounting#tag/documents/operation/getV1DocumentsList).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 мин | 1 запрос | 5 мин | 5 запросов |
     *     | Сервисный | 5 мин | 1 запрос | 5 мин | 5 запросов |
     *     | Базовый с секретом | 5 мин | 1 запрос | 5 мин | 5 запросов |
     *     | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1DocumentsDownloadAll']
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
    requestDownload: {
      params?: {
        /** @description Формат документа */
        extension?: string
        /** @description Уникальный ID документа */
        serviceName?: string
      }[]
    }
    GetCategories: {
      data?: {
        /** @description Категории документов */
        categories?: {
          /**
           * @description ID категории документа из параметра [запроса](./documents-and-accounting#tag/documents/operation/getV1DocumentsList) `category`
           * @example redeem-notification
           */
          name?: string
          /**
           * @description Название категории документа из поля [ответа](./documents-and-accounting#tag/documents/operation/getV1DocumentsList) `category`
           * @example Уведомление о выкупе
           */
          title?: string
        }[]
      }
    }
    GetList: {
      data?: {
        /** @description Категории документов */
        documents?: {
          /**
           * @description Уникальный ID документа
           * @example redeem-notification-44841941
           */
          serviceName?: string
          /**
           * @description Название документа
           * @example redeem-notification
           */
          name?: string
          /**
           * @description Название [категории документов](./documents-and-accounting#tag/documents/operation/getV1DocumentsCategories) из поля ответа `title`
           * @example Уведомление о выкупе
           */
          category?: string
          /** @description Форматы документа */
          extensions?: string[]
          /**
           * @description Дата и время создания документа
           * @example 2023-10-03T00:18:06.879Z
           */
          creationTime?: string
          /**
           * @description Выгружен ли документ в личном кабинете
           * @example false
           */
          viewed?: boolean
        }[]
      }
    }
    GetDoc: {
      data?: {
        /**
         * @description Название документа
         * @example Notice of redemption 44841941.zip
         */
        fileName?: string
        /**
         * @description Формат документа
         * @example zip
         */
        extension?: string
        /**
         * @description Документ в кодировке base64
         * @example UEsDBBQACAgIAAAAAAAAAAAAAAAAAAAAAABHAAAA0KPQstC10LTQvtC80LvQtdC90LjQtSDQviDQstGL0LrRg9C/0LUg4oSWNDQ4NDE5NDEg0L7RgiAyNS4wOS4yMDIzLnhsc3jsnQk0lP3f/0dEUiRkNwmVECI7o0WS7EklxprdkH2bKVkqISRkGSlkaxRlN2TPnmzJvu/Gzmz/Uz33fY/L8/Q8zrn/x/07565zcjrn9f1cn/V6f69v53zTVCWnYATtA+0DAX/Rg0AgM5ip5l2Yg5OwKeyu+Wl3O1vbcA3YV5FDVfPej2vXKptOK1V9LjycmPDG72uW4vcG9xdsOI1V2wj86sk6+4nHJeZ92NFgC/He3gmDlccFXSyumXYUGSKK4hLLsqu5aBTspu5lqlcGB/JNlQVn1Eumj6o8ZEWPRotEVGkH9/kf457totEKj2N2P4dSZWAIaC0ajy5J+VL5fen1YOhcGMxvvUw+XOKFOHL...LSL/tC77s0GzTi2iBuHorbMpcOaw0Hmsc/gpk7ty3/cdDYRmhkRUPAIC37P94CA8oiP/fIvpPK8n9l43YARWRgH/tI6E3ntD/nfOfPyj9jxxDwn+b8/8dZqBDQPjPNSAACJgBAAD21P9s/y8AAP//UEsHCFHrudyQEwAASxQAAFBLAQIUABQACAgIAAAAAACH4v2BaSgAAGNjAABHAAAAAAAAAAAAAAAAAAAAAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeFBLAQIUABQACAgIAAAAAADTmLxwRQcAAGAPAABLAAAAAAAAAAAAAAAAAN4oAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeC5zaWdQSwECFAAUAAgACAAAAAAAUeu53JATAABLFAAACAAAAAAAAAAAAAAAAACcMAAAbWNoZC56aXBQSwUGAAAAAAMAAwAkAQAAYkQAAAAA
         */
        document?: string
      }
    }
    GetDocs: {
      data?: {
        /**
         * @description Название документа
         * @example documents.zip
         */
        fileName?: string
        /**
         * @description Формат документа
         * @example zip
         */
        extension?: string
        /**
         * @description Документ в кодировке base64
         * @example UEsDBBQACAgIAAAAAAAAAAAAAAAAAAAAAABHAAAA0KPQstC10LTQvtC80LvQtdC90LjQtSDQviDQstGL0LrRg9C/0LUg4oSWNDQ4NDE5NDEg0L7RgiAyNS4wOS4yMDIzLnhsc3jsnQk0lP3f/0dEUiRkNwmVECI7o0WS7EklxprdkH2bKVkqISRkGSlkaxRlN2TPnmzJvu/Gzmz/Uz33fY/L8/Q8zrn/x/07565zcjrn9f1cn/V6f69v53zTVCWnYATtA+0DAX/Rg0AgM5ip5l2Yg5OwKeyu+Wl3O1vbcA3YV5FDVfPej2vXKptOK1V9LjycmPDG72uW4vcG9xdsOI1V2wj86sk6+4nHJeZ92NFgC/He3gmDlccFXSyumXYUGSKK4hLLsqu5aBTspu5lqlcGB/JNlQVn1Eumj6o8ZEWPRotEVGkH9/kf457totEKj2N2P4dSZWAIaC0ajy5J+VL5fen1YOhcGMxvvUw+XOKFOHL...LSL/tC77s0GzTi2iBuHorbMpcOaw0Hmsc/gpk7ty3/cdDYRmhkRUPAIC37P94CA8oiP/fIvpPK8n9l43YARWRgH/tI6E3ntD/nfOfPyj9jxxDwn+b8/8dZqBDQPjPNSAACJgBAAD21P9s/y8AAP//UEsHCFHrudyQEwAASxQAAFBLAQIUABQACAgIAAAAAACH4v2BaSgAAGNjAABHAAAAAAAAAAAAAAAAAAAAAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeFBLAQIUABQACAgIAAAAAADTmLxwRQcAAGAPAABLAAAAAAAAAAAAAAAAAN4oAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeC5zaWdQSwECFAAUAAgACAAAAAAAUeu53JATAABLFAAACAAAAAAAAAAAAAAAAACcMAAAbWNoZC56aXBQSwUGAAAAAAMAAwAkAQAAYkQAAAAA
         */
        document?: string
      }
    }
    /** @description Параметры запроса */
    SalesReportListReq: {
      /**
       * @description Начальная дата отчёта.<br>Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-17
       */
      dateFrom: string
      /**
       * @description Конечная дата отчёта.<br>Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Время передаётся в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-20
       */
      dateTo: string
      /**
       * @description Количество отчётов в ответе
       * @default 1000
       * @example 211
       */
      limit: number
      /**
       * @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
       * @default 0
       * @example 345
       */
      offset: number
      /**
       * @description Периодичность отчётов:
       *       - `weekly` — еженедельные
       *       - `daily` — ежедневные
       * @default weekly
       * @example daily
       * @enum {string}
       */
      period: 'daily' | 'weekly'
    }
    /** @description Список отчётов реализации */
    SalesReportListRes: {
      /**
       * Format: int64
       * @description ID отчёта
       * @example 307401554
       */
      reportId: number
      /**
       * @description Наименование продавца
       * @example ИП Кружинин В. Р.
       */
      sellerFinanceName: string
      /**
       * Format: date
       * @description Дата начала отчётного периода
       * @example 2026-03-16
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата конца отчётного периода
       * @example 2026-03-22
       */
      dateTo: string
      /**
       * Format: date
       * @description Дата формирования отчёта
       * @example 2026-03-23
       */
      createDate: string
      /**
       * @description Валюта отчёта
       * @example RUB
       */
      currency: string
      /**
       * @description Тип отчёта:
       *       - `1` — основной
       *       - `2` — по выкупам
       * @example 1
       * @enum {integer}
       */
      reportType: 1 | 2
      /**
       * @description Продажа
       * @example 258
       */
      retailAmountSum: string
      /**
       * @description К перечислению за товар
       * @example 183.79
       */
      forPaySum: string
      /**
       * @description Согласованная скидка, %
       * @example 0
       */
      avgSalePercent: number
      /**
       * @description Стоимость доставки
       * @example 2558.47
       */
      deliveryServiceSum: string
      /**
       * @description Стоимость хранения
       * @example 626.84
       */
      paidStorageSum: string
      /**
       * @description Стоимость операций при приёмке
       * @example 243.81
       */
      paidAcceptanceSum: string
      /**
       * @description Прочие удержания/выплаты
       * @example 150
       */
      deductionSum: string
      /**
       * @description Общая сумма штрафов
       * @example 1457.61
       */
      penaltySum: string
      /**
       * @description Корректировка Вознаграждения Wildberries (ВВ)
       * @example 9509.71
       */
      additionalPaymentSum: string
      /**
       * @description Сумма баллов, удержанных по программе лояльности
       * @example 2
       */
      cashbackAmountSum: string
      /**
       * @description Компенсация скидки по программе лояльности
       * @example 19
       */
      cashbackDiscountSum: string
      /**
       * @description Стоимость участия в программе лояльности
       * @example 0.2
       */
      cashbackCommissionChangeSum: string
      /**
       * @description Разовое изменение срока перечисления денежных средств
       * @example -1
       */
      paymentSchedule: string
      /**
       * @description Итого к оплате
       * @example 5172.94
       */
      bankPaymentSum: string
    }
    /** @description Параметры запроса */
    FinancialReportsDetailedReportIdReq: {
      /**
       * @description Количество строк в ответе
       * @default 100000
       * @example 21100
       */
      limit: number
      /**
       * @description ID строки ответа. Необходим для получения отчёта частями.<br>Начинайте загрузку отчёта с `"rrdid":0`. В последующих запросах передавайте значение `rrdId` из последней строки предыдущего ответа.<br>Повторяйте запрос, пока не получите ответ `204`
       * @default 0
       */
      rrdId: number
      /**
       * @description Список полей, которые вернутся в ответе. Если параметр не указан, возвращаются все поля
       * @example [
       *       "rrdId",
       *       "nmId",
       *       "currency",
       *       "retailAmount",
       *       "acquiringFee",
       *       "srid"
       *     ]
       */
      fields?: string[]
    }
    /** @description Параметры запроса */
    SalesReportsDetailedReq: {
      /**
       * @description Начальная дата отчёта.<br>Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-17
       */
      dateFrom: string
      /**
       * @description Конечная дата отчёта.<br>Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Время передаётся в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-20
       */
      dateTo: string
      /**
       * @description Количество строк в ответе
       * @default 100000
       * @example 21100
       */
      limit: number
      /**
       * @description ID строки ответа. Необходим для получения отчёта частями.<br>Начинайте загрузку отчёта с `"rrdid":0`. В последующих запросах передавайте значение `rrdId` из последней строки предыдущего ответа.<br>Повторяйте запрос, пока не получите ответ `204`
       * @default 0
       */
      rrdId: number
      /**
       * @description Периодичность отчётов:
       *       - `weekly` — еженедельные
       *       - `daily` — ежедневные
       * @default weekly
       * @example daily
       * @enum {string}
       */
      period: 'daily' | 'weekly'
      /**
       * @description Список полей, которые вернутся в ответе. Если параметр не указан, возвращаются все поля
       * @example [
       *       "rrdId",
       *       "nmId",
       *       "docTypeName",
       *       "retailAmount",
       *       "acquiringFee",
       *       "srid"
       *     ]
       */
      fields?: string[]
    }
    /** @description Детализации к отчётам реализации */
    SalesReportsDetailedRes: {
      /**
       * Format: int64
       * @description ID отчёта
       * @example 1234567
       */
      reportId: number
      /**
       * Format: date
       * @description Дата начала отчётного периода
       * @example 2026-03-16
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата конца отчётного периода
       * @example 2026-03-22
       */
      dateTo: string
      /**
       * Format: date
       * @description Дата формирования отчёта
       * @example 2026-03-23
       */
      createDate: string
      /**
       * @description Валюта отчёта
       * @example RUB
       */
      currency: string
      /**
       * @description Тип отчёта:
       *       - `1` — основной
       *       - `2` — по выкупам
       * @example 1
       * @enum {integer}
       */
      reportType: 1 | 2
      /**
       * @description ID строки
       * @example 1232610467
       */
      rrdId: number
      /**
       * @description ID поставки
       * @example 123456
       */
      giId: number
      /**
       * @description Фиксированный коэффициент склада по поставке
       * @example 1.8
       */
      dlvPrc: number
      /**
       * Format: date
       * @description Дата начала действия фиксации
       * @example 2026-03-18
       */
      fixTariffDateFrom: string
      /**
       * Format: date
       * @description Дата конца действия фиксации
       * @example 2026-03-19
       */
      fixTariffDateTo: string
      /**
       * @description Предмет
       * @example Мини-печи
       */
      subjectName: string
      /**
       * @description Артикул WB
       * @example 1234567
       */
      nmId: number
      /**
       * @description Бренд
       * @example BlahBlah
       */
      brandName: string
      /**
       * @description Артикул продавца
       * @example MAB123
       */
      vendorCode: string
      /**
       * @description Название товара
       * @example ДС тарелка
       */
      title: string
      /**
       * @description Размер
       * @example 0
       */
      techSize: string
      /**
       * @description Баркод
       * @example 1231312352310
       */
      sku: string
      /**
       * @description Тип документа
       * @example Продажа
       */
      docTypeName: string
      /**
       * @description Количество
       * @example 1
       */
      quantity: number
      /**
       * @description Цена розничная
       * @example 1249
       */
      retailPrice: string
      /**
       * @description Wildberries реализовал Товар (Пр)
       * @example 367
       */
      retailAmount: string
      /**
       * @description Согласованный продуктовый дисконт, %
       * @example 0
       */
      salePercent: number
      /**
       * @description Размер кВВ, %
       * @example 24
       */
      commissionPercent: number
      /**
       * @description Склад
       * @example Склад WB
       */
      officeName: string
      /**
       * @description Обоснование для оплаты
       * @example Продажа
       */
      sellerOperName: string
      /**
       * Format: date-time
       * @description Дата и время заказа
       * @example 2026-03-14T00:00:00Z
       */
      orderDt: string
      /**
       * Format: date-time
       * @description Дата и время продажи
       * @example 2026-03-21T00:00:00Z
       */
      saleDt: string
      /**
       * Format: date
       * @description Дата операции
       * @example 2025-10-20
       */
      rrDate: string
      /**
       * @description Штрихкод
       * @example 1239159661
       */
      shkId: number
      /**
       * @description Цена розничная с учётом согласованной скидки
       * @example 399.68
       */
      retailPriceWithDisc: string
      /**
       * @description Количество доставок
       * @example 0
       */
      deliveryAmount: number
      /**
       * @description Количество возврата
       * @example 0
       */
      returnAmount: number
      /**
       * @description Услуги по доставке товара покупателю
       * @example 0
       */
      deliveryService: string
      /**
       * @description Тип коробов
       * @example Монопаллета
       */
      giBoxTypeName: string
      /**
       * @description Итоговая согласованная скидка, %
       * @example 0
       */
      productDiscountForReport: number
      /**
       * @description Промокод, %
       * @example 0
       */
      sellerPromo: number
      /**
       * @description Платформенные скидки, %
       * @example 25.31
       */
      spp: number
      /**
       * @description Размер кВВ без НДС, % базовый
       * @example 24.15
       */
      kvwBase: number
      /**
       * @description Итоговый кВВ без НДС, %
       * @example 1.81
       */
      kvw: number
      /** @description Размер снижения кВВ из-за рейтинга, % */
      supRatingUp: number
      /** @description Размер снижения кВВ из-за акции, % */
      isKgvpV2: number
      /**
       * @description Вознаграждение с продаж до вычета услуг поверенного, без НДС
       * @example 23.74
       */
      ppvzSalesCommission: string
      /**
       * @description К перечислению продавцу за реализованный товар
       * @example 376.99
       */
      forPay: string
      /**
       * @description Возмещение за выдачу и возврат товаров на ПВЗ
       * @example 0
       */
      ppvzReward: string
      /**
       * @description Компенсация платёжных услуг/комиссия за интеграцию платёжных сервисов
       * @example 14.89
       */
      acquiringFee: string
      /**
       * @description Размер компенсации платёжных услуг/комиссии за интеграцию платёжных сервисов
       * @example 4.06
       */
      acquiringPercent: number
      /**
       * @description Тип платежа: компенсация платёжных услуг/комиссия за интеграцию платёжных сервисов
       * @example Комиссия за организацию платежа с НДС
       */
      paymentProcessing: string
      /**
       * @description Наименование банка-эквайера
       * @example Вайлдберриз Банк
       */
      acquiringBank: string
      /**
       * @description Вознаграждение Wildberries (ВВ), без НДС
       * @example 22.25
       */
      vw: string
      /**
       * @description НДС с вознаграждения Wildberries
       * @example 4.45
       */
      vwNds: string
      /**
       * @description Наименование офиса доставки
       * @example Москва Москва Очаковское шоссе 6к2
       */
      ppvzOfficeName: string
      /**
       * @description ID офиса доставки
       * @example 105383
       */
      ppvzOfficeId: number
      /**
       * @description Партнёр
       * @example ИП Жасмин
       */
      ppvzSupplierName: string
      /**
       * @description ИНН партнёра
       * @example 010101010101
       */
      ppvzSupplierInn: string
      /**
       * @description Номер таможенной декларации
       * @example
       */
      declarationNumber: string
      /**
       * @description Виды доставок, штрафов и корректировок ВВ
       * @example Штраф МП. Невыполненный заказ (отмена клиентом после недовоза)
       */
      bonusTypeName?: string
      /**
       * @description Стикер МП
       * @example 1964038895
       */
      stickerId: string
      /**
       * @description Страна продажи
       * @example Россия
       */
      country: string
      /**
       * @description Признак услуги платной доставки
       * @example true
       */
      srvDbs: boolean
      /**
       * @description Общая сумма штрафов
       * @example 231.35
       */
      penalty: string
      /**
       * @description Корректировка Вознаграждения Wildberries (ВВ)
       * @example 0
       */
      additionalPayment: string
      /**
       * @description Возмещение издержек по перемещению и операционной обработке товара
       * @example 1.349
       */
      rebillLogisticCost: string
      /**
       * @description Организатор перевозки
       * @example ИП Иванов Иван Иванович(123456789012)
       */
      rebillLogisticOrg?: string
      /**
       * @description Хранение
       * @example 12647.29
       */
      paidStorage: string
      /**
       * @description Удержания
       * @example 6354
       */
      deduction: string
      /**
       * @description Операции на приёмке
       * @example 865
       */
      paidAcceptance: string
      /**
       * @description ID сборочного задания
       * @example 2816993144
       */
      orderId: number
      /**
       * @description Код маркировки [Честного знака](https://честныйзнак.рф)
       * @example 0102900000376311210G2CIS?ehge)S91002A92F9Qof4FDo/31Icm14kmtuVYQzLypxm3HWkC1vQ/+pVVjm1dNAth1laFMoAGn7yEMWlTjxIe7lQnJqZ7TRZhlHQ==
       */
      kiz?: string
      /**
       * @description Признак B2B-продажи
       * @example false
       */
      isB2b: boolean
      /**
       * @description ID короба для обработки товара
       * @example WB-TRBX-1234567
       */
      trbxId: string
      /**
       * @description Скидка по программе софинансирования
       * @example 0
       */
      installmentCofinancingAmount: string
      /**
       * @description Скидка Wibes, %
       * @example 1
       */
      wibesDiscountPercent: number
      /**
       * @description Сумма баллов, удержанных по программе лояльности
       * @example 2
       */
      cashbackAmount: string
      /**
       * @description Компенсация скидки по программе лояльности
       * @example 19
       */
      cashbackDiscount: string
      /**
       * @description Стоимость участия в программе лояльности
       * @example 0.2
       */
      cashbackCommissionChange: string
      /**
       * @description Разовое изменение срока перечисления денежных средств
       * @example -1
       */
      paymentSchedule: string
      /**
       * @description Способ продажи и тип товара
       * @example FBS, (МГТ)
       */
      deliveryMethod: string
      /**
       * @description ID собственной акции продавца с дополнительной скидкой
       * @example 14350
       */
      sellerPromoId: number
      /**
       * @description Размер дополнительной скидки по собственной акции продавца, %
       * @example 3
       */
      sellerPromoDiscount: number
      /**
       * @description ID скидки лояльности от продавца
       * @example 0
       */
      loyaltyId: number
      /**
       * @description Размер скидки лояльности от продавца, %
       * @example 0
       */
      loyaltyDiscount: number
      /**
       * @description ID промокода
       * @example
       */
      uuidPromocode: string
      /**
       * @description Скидка за промокод, %
       * @example 0
       */
      salePricePromocodeDiscountPrc: number
      /**
       * @description ID подменного артикула
       * @example
       */
      articleSubstitution: string
      /**
       * @description Скидка по подменному артикулу, %
       * @example 0
       */
      salePriceAffiliatedDiscountPrc: number
      /**
       * @description Удержание Агентского НДС, %.<br>Только для продавцов из Кыргызстана
       * @example 0
       */
      agencyVat?: number
      /**
       * @description Оптовая скидка для бизнеса, %
       * @example 0
       */
      salePriceWholesaleDiscountPrc: number
      /**
       * @description ИНН B2B-покупателя
       * @example 010101010101
       */
      b2bCustomerTin: string
      /**
       * @description Оплата социальным сертификатом
       * @example false
       */
      paidWithSocialCertificate: boolean
      /**
       * @description Коэффициент доставки
       * @example 0
       */
      warehouseLogisticsCoeff: number
      /**
       * @description КПП B2B-покупателя
       * @example 7701123301
       */
      buyerTaxRegistrationReasonCode: string
      /**
       * @description Номер УПД или УКД
       * @example 12356856523
       */
      utdUcdNumber: string
      /**
       * Format: date
       * @description Дата УПД или УКД
       * @example 2006-01-02
       */
      utdUcdDate: string
      /**
       * @description ID корзины заказа — транзакции.<br>Заказы в одной корзине покупателя будут иметь одинаковый `orderUid`
       * @example id375f16c4bec295d9995393af803ff7b
       */
      orderUid: string
      /**
       * @description ID заказа.<br>В ответах методов сборочных заданий [FBS](./orders-fbs#tag/fbsAssemblyOrders), [DBW](./orders-dbw#tag/dbwAssemblyOrders), [DBS](./dbs#tag/dbsAssemblyOrders) и [Самовывоз](./in-store-pickup#tag/inStorePickupAssemblyOrders) `srid` равен `rid`
       * @example 0f1c3999172603062979867564654dac5b702849
       */
      srid: string
    }
    /** @description Параметры запроса */
    AcquiringReportListReq: {
      /**
       * @description Начальная дата отчёта.<br>Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-17
       */
      dateFrom: string
      /**
       * @description Конечная дата отчёта.<br>Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Время передаётся в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-20
       */
      dateTo: string
      /**
       * @description Количество отчётов в ответе
       * @default 1000
       * @example 211
       */
      limit: number
      /**
       * @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
       * @default 0
       * @example 345
       */
      offset: number
    }
    /** @description Список отчётов об издержках на приём платежей */
    AcquiringReportListRes: {
      /**
       * Format: int64
       * @description ID отчёта
       * @example 307401554
       */
      reportId: number
      /**
       * @description Наименование продавца
       * @example ИП Кружинин В. Р.
       */
      sellerFinanceName: string
      /**
       * Format: date
       * @description Дата начала отчётного периода
       * @example 2026-03-16
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата конца отчётного периода
       * @example 2026-03-22
       */
      dateTo: string
      /**
       * Format: date
       * @description Дата формирования отчёта
       * @example 2026-03-31
       */
      createDate: string
      /**
       * @description Валюта отчёта
       * @example RUB
       */
      currency: string
      /**
       * @description Сумма издержек по эквайрингу
       * @example 258
       */
      acquiringFeeSum: string
      /**
       * @description В том числе НДС
       * @example 83.79
       */
      acquiringFeeVatSum: string
    }
    /** @description Параметры запроса */
    AcquiringReportsDetailedReq: {
      /**
       * @description Начальная дата отчёта.<br>Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-17
       */
      dateFrom: string
      /**
       * @description Конечная дата отчёта.<br>Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.<br>Время передаётся в часовом поясе Москва `UTC+3`.<br>Примеры:
       *       - `2025-06-20`
       *       - `2025-06-20T23:59:59`
       *       - `2025-06-20T00:00:00.12345`
       *       - `2025-06-20T00:00:00`
       * @example 2026-03-20
       */
      dateTo: string
      /**
       * @description Количество строк в ответе
       * @default 100000
       * @example 21100
       */
      limit: number
      /**
       * @description ID строки ответа. Необходим для получения отчёта частями.<br>Начинайте загрузку отчёта с `"rrdid":0`. В последующих запросах передавайте значение `rrdId` из последней строки предыдущего ответа.<br>Повторяйте запрос, пока не получите ответ `204`
       * @default 0
       */
      rrdId: number
      /**
       * @description Список полей, которые вернутся в ответе. Если параметр не указан, возвращаются все поля
       * @example [
       *       "rrdId",
       *       "nmId",
       *       "documentType",
       *       "retailAmount",
       *       "acquiringFee",
       *       "srid"
       *     ]
       */
      fields?: string[]
    }
    /** @description Детализации к отчётам об издержках на приём платежей */
    AcquiringReportsDetailedRes: {
      /**
       * @description ID строки
       * @example 1232610467
       */
      rrdId: number
      /**
       * Format: int64
       * @description ID отчёта
       * @example 1234567
       */
      reportId: number
      /**
       * @description Дата операции
       * @example 2026-03-21
       */
      acqDate: string
      /**
       * @description Наименование банка-эквайера
       * @example Вайлдберриз Банк
       */
      acquiringBank: string
      /**
       * @description ИНН
       * @example 010101010101
       */
      tin: string
      /**
       * @description КПП
       * @example 7701123301
       */
      taxRegistrationReasonCode: string
      /**
       * @description Дата продажи
       * @example 2026-03-21
       */
      saleDate: string
      /**
       * @description ID заказа.<br>В ответах методов сборочных заданий [FBS](./orders-fbs#tag/fbsAssemblyOrders), [DBW](./orders-dbw#tag/dbwAssemblyOrders), [DBS](./dbs#tag/dbsAssemblyOrders) и [Самовывоз](./in-store-pickup#tag/inStorePickupAssemblyOrders) `srid` равен `rid`
       * @example D0.r3f80c3eec6f845c6840128b4c19986f9.0.0
       */
      srid: string
      /**
       * @description Тип документа
       * @example Продажа
       */
      documentType: string
      /**
       * @description Артикул WB
       * @example 1234567
       */
      nmId: number
      /**
       * @description Wildberries реализовал Товар (Пр)
       * @example 367
       */
      retailAmount: string
      /**
       * @description Размер комиссии за эквайринг, в том числе НДС
       * @example 14.89
       */
      acquiringFee: string
      /**
       * @description Сумма НДС
       * @example 4.06
       */
      acquiringFeeVat: string
      /**
       * @description Номер счёта-фактуры
       * @example С/Ф 123
       */
      invoiceNumber: string
      /**
       * @description Дата счёта-фактуры
       * @example 2026-03-20
       */
      invoiceDate: string
      /**
       * @description Штрихкод
       * @example 1239159661
       */
      shkId: number
      /**
       * @description Валюта отчёта
       * @example RUB
       */
      currency: string
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
    /** @description Неправильный запрос */
    response400SalesReports: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/problem+json': {
          /**
           * @description HTTP статус-код
           * @example 400
           */
          status: number
          /**
           * @description Заголовок ошибки
           * @example GetReportDetailByPeriodNBAndNNB decode error
           */
          title: string
          /**
           * @description Детали ошибки
           * @example GetReportDetailByPeriodNBAndNNB decode error: Key: 'FinancialDetailedByPeriodRequestV4.DateTo' Error:Field validation for 'DateTo' failed on the 'required' tag
           */
          detail: string
          /**
           * @description ID запроса
           * @example b065c204-c5f7-431b-b12c-d4c2cc6347ec
           */
          requestId: string
          /**
           * @description ID внутреннего сервиса WB
           * @example open-api-finreports
           */
          origin: string
        }
      }
    }
    /** @description Неправильный запрос */
    response400AcquiringReports: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/problem+json': {
          /**
           * @description HTTP статус-код
           * @example 400
           */
          status: number
          /**
           * @description Заголовок ошибки
           * @example GetAcquiringGeneralReport decode error
           */
          title: string
          /**
           * @description Детали ошибки
           * @example GetAcquiringGeneralReport decode error: Key: 'AcquiringGeneralReportRequestV2.DateTo' Error:Field validation for 'DateTo' failed on the 'required' tag
           */
          detail: string
          /**
           * @description ID запроса
           * @example 4950c661-9056-4baa-a0ed-c7e498c4a557
           */
          requestId: string
          /**
           * @description ID внутреннего сервиса WB
           * @example open-api-finreports
           */
          origin: string
        }
      }
    }
    /** @description Не найдено */
    response404SalesReports: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/problem+json': {
          /**
           * @description HTTP статус-код
           * @example 404
           */
          status: number
          /**
           * @description Заголовок ошибки
           * @example GetDetailsByReportID error
           */
          title: string
          /**
           * @description Детали ошибки
           * @example GetDetailsByReportID error: generate meta key: get report data: report id not found
           */
          detail: string
          /**
           * @description ID запроса
           * @example 4565feab-860b-493c-ad8d-6eda4d1902db
           */
          requestId: string
          /**
           * @description ID внутреннего сервиса WB
           * @example open-api-finreports
           */
          origin: string
        }
      }
    }
    /** @description Не найдено */
    response404AcquiringReports: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/problem+json': {
          /**
           * @description HTTP статус-код
           * @example 404
           */
          status: number
          /**
           * @description Заголовок ошибки
           * @example GetAcquiringReportByReportID usecase error
           */
          title: string
          /**
           * @description Детали ошибки
           * @example GetAcquiringReportByReportID usecase error: generate meta key: get report data: report id not found
           */
          detail: string
          /**
           * @description ID запроса
           * @example b8c4a3db-2860-4df6-99dc-10602ddbc003
           */
          requestId: string
          /**
           * @description ID внутреннего сервиса WB
           * @example open-api-finreports
           */
          origin: string
        }
      }
    }
    /** @description Неправильный запрос */
    Responses400List: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description HTTP статус-код */
          status?: number
          /** @description Детализация ошибки */
          detail?: string
          /** @description Уникальный ID запроса */
          requestId?: string
          /** @description ID внутреннего сервиса WB */
          origin?: string
        }
      }
    }
    /** @description Неправильный запрос */
    Responses400Download: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "title": "Bad Request",
         *       "status": 400,
         *       "detail": "serviceName and extension are required",
         *       "requestId": "7c500a19-f531-4639-b0a4-53d6d296c349",
         *       "origin": "docs-public-api"
         *     }
         */
        'application/json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description HTTP статус-код */
          status?: number
          /** @description Детализация ошибки */
          detail?: string
          /** @description Уникальный ID запроса */
          requestId?: string
          /** @description ID внутреннего сервиса WB */
          origin?: string
        }
      }
    }
    /** @description Неправильный запрос */
    Responses400DownloadAll: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Заголовок ошибки */
          title?: string
          /** @description HTTP статус-код */
          status?: number
          /** @description Детализация ошибки */
          detail?: string
          /** @description Уникальный ID запроса */
          requestId?: string
          /** @description ID внутреннего сервиса WB */
          origin?: string
        }
      }
    }
  }
  parameters: {
    /**
     * @description Язык поля `title`:
     *       - `ru` — русский
     *       - `en` — английский
     *       - `zh` — китайский
     */
    LocaleCat: string
    /**
     * @description Язык поля `category`:
     *       - `ru` — русский
     *       - `en` — английский
     *       - `zh` — китайский
     */
    LocaleList: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV1AccountBalance: {
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
          'application/json': {
            /**
             * @description Валюта
             * @example RUB
             */
            currency?: string
            /**
             * @description Текущий баланс продавца
             * @example 10196.21
             */
            current?: number
            /**
             * @description Сумма, доступная к выводу
             * @example 6395.8
             */
            for_withdraw?: number
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1SalesReportsList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SalesReportListReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SalesReportListRes'][]
        }
      }
      /** @description Нет данных */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['response400SalesReports']
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1SalesReportsDetailedReportId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID отчёта.<br>Для ежедневных отчётов вместо стандартной десериализации рекомендуем использовать нестандартные библиотеки с поддержкой [BigInt](https://www.npmjs.com/package/json-bigint) */
        reportId: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['FinancialReportsDetailedReportIdReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SalesReportsDetailedRes'][]
        }
      }
      /** @description Нет данных */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['response400SalesReports']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      404: components['responses']['response404SalesReports']
      429: components['responses']['429']
    }
  }
  postV1SalesReportsDetailed: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SalesReportsDetailedReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SalesReportsDetailedRes'][]
        }
      }
      /** @description Нет данных */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['response400SalesReports']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1AcquiringList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AcquiringReportListReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AcquiringReportListRes'][]
        }
      }
      /** @description Нет данных */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['response400AcquiringReports']
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1AcquiringDetailedReportId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID отчёта */
        reportId: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['FinancialReportsDetailedReportIdReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AcquiringReportsDetailedRes'][]
        }
      }
      /** @description Нет данных */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['response400AcquiringReports']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      404: components['responses']['response404AcquiringReports']
      429: components['responses']['429']
    }
  }
  postV1AcquiringDetailed: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AcquiringReportsDetailedReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AcquiringReportsDetailedRes'][]
        }
      }
      /** @description Нет данных */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['response400AcquiringReports']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1DocumentsCategories: {
    parameters: {
      query?: {
        /**
         * @description Язык поля `title`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         */
        locale?: components['parameters']['LocaleCat']
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
          'application/json': components['schemas']['GetCategories']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1DocumentsList: {
    parameters: {
      query?: {
        /**
         * @description Язык поля `category`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         */
        locale?: components['parameters']['LocaleList']
        /** @description Начало периода. Только вместе с `endTime` */
        beginTime?: string
        /** @description Конец периода. Только вместе с `beginTime` */
        endTime?: string
        /**
         * @description Сортировка:
         *       - `date` — по дате создания документа
         *       - `category` — по категории (только при `locale=ru`)
         *
         *     Только вместе с `order`
         */
        sort?: 'date' | 'category'
        /**
         * @description Сортировка:
         *       - `desc` — по убыванию
         *       - `asc` — по возрастанию
         *
         *     Только вместе с `sort`
         */
        order?: 'desc' | 'asc'
        /** @description ID [категории документов](./documents-and-accounting#tag/documents/operation/getV1DocumentsCategories) из поля `name` */
        category?: string
        /** @description Уникальный ID документа */
        serviceName?: string
        /** @description Максимальное количество строк ответа */
        limit?: number
        /** @description После какой строки выдавать данные */
        offset?: number
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
          'application/json': components['schemas']['GetList']
        }
      }
      400: components['responses']['Responses400List']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1DocumentsDownload: {
    parameters: {
      query: {
        /** @description Уникальный ID документа */
        serviceName: string
        /** @description Формат документа */
        extension: string
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
          'application/json': components['schemas']['GetDoc']
        }
      }
      400: components['responses']['Responses400Download']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1DocumentsDownloadAll: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        /**
         * @example {
         *       "params": [
         *         {
         *           "extension": "zip",
         *           "serviceName": "redeem-notification-44841941"
         *         },
         *         {
         *           "extension": "xlsx",
         *           "serviceName": "act-income-mp-392460936"
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['requestDownload']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetDocs']
        }
      }
      400: components['responses']['Responses400DownloadAll']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
}
