// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/analytics/v3/sales-funnel/products': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика карточек товаров за период
     * @description Метод формирует отчёт о товарах, сравнивая ключевые показатели за текущий период с аналогичным прошлым.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.<br><br>
     *
     *     В течение часа после события появляется большая часть данных:
     *       - о заказах
     *       - о переходах в карточку товара
     *       - о добавлениях товаров в корзину
     *
     *     Малая часть этих данных может появляться в течение нескольких дней.<br><br>
     *
     *     Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.<br>
     *     Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/documents-and-accounting#tag/financialReports).<br><br>
     *
     *     Параметры `brandNames`,`subjectIds`, `tagIds`, `nmIds` могут быть пустыми `[]`, тогда в ответе возвращаются все карточки продавца.<br><br>
     *
     *     Если вы указали несколько параметров, в ответе будут карточки, в которых есть одновременно все эти параметры. Если карточки не подходят по параметрам запроса, вернётся пустой ответ `[]`.<br><br>
     *
     *     Можно получить отчёт максимум за последние 365 дней.<br><br>
     *
     *     В данных предыдущего периода:
     *       * Данные в `pastPeriod` указаны за такой же период, что и в `selectedPeriod`
     *       * Если дата начала  `pastPeriod` раньше, чем год назад от текущей даты, она будет приведена к виду: `pastPeriod.start = текущая дата — 365 дней`
     *
     *     Можно использовать пагинацию.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV3SalesFunnelProducts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v3/sales-funnel/products/history': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика карточек товаров по дням
     * @description Метод возвращает статистику карточек товаров по дням или неделям.<br>
     *     Можно получить данные максимум за последнюю неделю.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.<br><br>
     *
     *     В течение часа после события появляется большая часть данных:
     *       - о заказах
     *       - о переходах в карточку товара
     *       - о добавлениях товаров в корзину
     *
     *     Малая часть этих данных может появляться в течение нескольких дней.<br><br>
     *
     *     Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.<br>
     *     Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/documents-and-accounting#tag/financialReports).
     *
     *
     *     <div class="description_important">
     *       Чтобы получать отчёты за период до года, используйте методы <a href="/openapi/analytics#tag/sellerAnalyticsCsv">Аналитика продавца CSV</a> — тип <code>DETAIL_HISTORY_REPORT</code>. Отчёты этого типа доступны только с подпиской <a href='https://seller.wildberries.ru/monetization/jam'>Джем</a>
     *     </div>
     *
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV3SalesFunnelProductsHistory']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v3/sales-funnel/grouped/history': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика групп карточек товаров по дням
     * @description Метод возвращает статистику карточек товаров по дням или неделям.<br>
     *     Карточки товаров сгруппированы по предметам, брендам и ярлыкам.<br>
     *     Можно получить данные максимум за последнюю неделю.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.<br><br>
     *
     *     В течение часа после события появляется большая часть данных:
     *       - о заказах
     *       - о переходах в карточку товара
     *       - о добавлениях товаров в корзину
     *
     *     Малая часть этих данных может появляться в течение нескольких дней.<br><br>
     *
     *     Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.<br>
     *     Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/documents-and-accounting#tag/financialReports).<br><br>
     *
     *     Параметры `brandNames`, `subjectIds`, `tagIds` могут быть пустыми `[]`, тогда группировка происходит по всем карточкам продавца.<br><br>
     *
     *     Произведение количества предметов, брендов, ярлыков в запросе может быть не больше 16. Например, 4 бренда и 4 предмета или 2 предмета, 2 ярлыка и 4 бренда.
     *
     *
     *     <div class="description_important">
     *       Чтобы получать отчёты за период до года, используйте методы <a href="/openapi/analytics#tag/sellerAnalyticsCsv">Аналитика продавца CSV</a> — тип <code>GROUPED_HISTORY_REPORT</code>. Отчёты этого типа доступны только с подпиской <a href='https://seller.wildberries.ru/monetization/jam'>Джем</a>
     *     </div>
     *
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV3SalesFunnelGroupedHistory']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/nm-report/downloads': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список отчётов
     * @description Метод возвращает список отчётов с расширенной аналитикой продавца. Ответ содержит ID [созданных отчётов](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads) и статусы генерации.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV2NmReportDownloads']
    put?: never
    /**
     * Создать отчёт
     * @description Метод создаёт задание на генерацию отчёта с расширенной аналитикой продавца. <br><br>
     *
     *     Вы можете создать CSV-версии отчётов по [воронке продаж](/openapi/analytics#tag/salesFunnel) или [параметрам поиска](/openapi/analytics#tag/searchQueriesForYourItems) с группировкой по:
     *       * артикулам WB
     *       * предметам, брендам и ярлыкам
     *
     *     В отчётах по воронке продаж можно группировать данные по дням, неделям или месяцам.<br><br>
     *
     *     Также можете создать CSV-версии отчётов по [текстам поисковых запросов](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportProductSearchTexts) и [остаткам](/openapi/analytics#tag/stocksReport).<br><br>
     *
     *     Каждый новый отчёт должен иметь уникальный ID.
     *
     *     <div class="description_important">
     *       Не используйте одинаковые ID для разных отчётов — это может привести к ошибкам при генерации
     *     </div>
     *
     *     Набор параметров запроса в объекте `params` зависит от типа отчёта. Чтобы получить описание параметров, выберите тип отчёта в раскрывающемся списке в описании параметра `reportType`.<br><br>
     *
     *     Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.<br><br>
     *
     *     Если не удалось [получить отчёт](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloadsFileDownloadId), можно создать [повторное задание на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloadsRetry). Также можно [получить список и проверить статусы](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloads) отчётов.<br><br>
     *
     *     Данные отчётов обновляются 1 раз в 2 часа.
     *
     *     <div class="description_important">
     *       Отчёты по <a href="https://seller.wildberries.ru/content-analytics/history-remains">остаткам</a> — типы <code>STOCK_HISTORY_REPORT_CSV</code> и <code>STOCK_HISTORY_DAILY_CSV</code> — можно создать без подписки <a href="https://seller.wildberries.ru/monetization/jam">Джем</a>
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2NmReportDownloads']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/nm-report/downloads/retry': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Сгенерировать отчёт повторно
     * @description Метод создает повторное [задание на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads) отчёта с расширенной аналитикой продавца. Необходимо, если при генерации отчёта вы [получили статус](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloads) `FAILED`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2NmReportDownloadsRetry']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/nm-report/downloads/file/{downloadId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает отчёт с расширенной аналитикой продавца по ID [задания на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads).
     *     <br><br>
     *     Можно получить отчёт, который сгенерирован за последние 48 часов.<br>Отчёт будет загружен внутри архива ZIP в формате CSV.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV2NmReportDownloadsFileDownloadId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/search-report/report': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Основная страница
     * @description Метод формирует набор данных для основной страницы отчёта по поисковым запросам с:
     *      - общей информацией
     *      - позициями товаров
     *      - данными по видимости и переходам в карточку
     *      - данными для таблицы по группам
     *
     *     Для получения дополнительных данных в таблице используйте отдельный запрос для:
     *      - [пагинации по группам](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportTableGroups)
     *      - [получения по товарам в группе](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportTableDetails)
     *
     *     Дополнительный параметр выбора списка товаров в таблице:
     *      - `positionCluster` — средняя позиция в поиске
     *
     *     Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2SearchReportReport']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/search-report/table/groups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Пагинация по группам
     * @description Метод формирует дополнительные данные к [основному отчёту](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportReport) с пагинацией по группам. Пагинация возможна только при наличии фильтра по бренду, предмету или ярлыку.<br><br>
     *
     *     Дополнительный параметр выбора списка товаров в таблице:
     *      - `positionCluster` — средняя позиция в поиске
     *
     *     Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2SearchReportTableGroups']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/search-report/table/details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Пагинация по товарам в группе
     * @description Метод формирует дополнительные данные к [основному отчёту](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportReport) с пагинацией по товарам в группе. Пагинация возможна вне зависимости от наличия фильтров.<br><br>
     *
     *     Фильтры для пагинации по товарам в группе или без фильтров:
     *      - кортеж `subjectId`,`brandName`,`tagId` — фильтр для группы
     *      - `nmIds` — фильтр по карточке товара
     *
     *     Дополнительный параметр выбора списка товаров:
     *      - `positionCluster` — средняя позиция в поиске
     *
     *     Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2SearchReportTableDetails']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/search-report/product/search-texts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Поисковые запросы по товару
     * @description Метод формирует топ поисковых запросов по товару.
     *
     *     Параметры выбора поисковых запросов:
     *      - `limit` — количество запросов, максимум 30. Для тарифов [Джема](https://seller.wildberries.ru/monetization/tariffs) **Продвинутый** и **Премиальный** максимум — 100.
     *      - `topOrderBy` — способ выбора топа запросов
     *
     *     Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2SearchReportProductSearchTexts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/search-report/product/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Заказы и позиции по поисковым запросам товара
     * @description Метод формирует данные для таблицы:
     *       - о заказах по каждому поисковому запросу для конкретного товара
     *       - о позициях товара в результатах поиска по каждому запросу
     *
     *     Данные указаны в рамках периода для [запрошенного товара](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportProductSearchTexts) и сгруппированы по дням. Максимальный период — 7 дней.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_important">
     *       Можно получить отчёт максимум за последние 365 дней с момента выполнения запроса
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2SearchReportProductOrders']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/stocks-report/wb-warehouses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Остатки на складах WB
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод возвращает текущие остатки товаров на складах WB.
     *     <br><br>
     *     Данные обновляются 1 раз в 30 минут.
     *     <br><br>
     *     1 строка ответа — данные об 1 размере товара на 1 складе WB.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 3 запроса | 20 сек | 1 запрос |
     *     </div>
     */
    post: operations['postV1StocksReportWbWarehouses']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/stocks-report/seller-warehouses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Остатки на складах продавца
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает текущие остатки товаров на складах продавца.
     *     <br><br>
     *     Данные обновляются 1 раз в 30 минут.
     *     <br><br>
     *     1 строка ответа — данные об 1 размере товара на 1 складе продавца.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 3 запроса | 20 сек | 1 запрос |
     *     </div>
     */
    post: operations['postV1StocksReportSellerWarehouses']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/stocks-report/products/groups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Данные по группам
     * @description Метод формирует набор данных об остатках по группам товаров.
     *     <br><br>
     *     Группа товаров описывается кортежем `subjectID, brandName, tagID`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2StocksReportProductsGroups']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/stocks-report/products/products': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Данные по товарам
     * @description Метод формирует набор данных об остатках по товарам.
     *     <br><br>
     *     Можно получить данные как по отдельным товарам, так и в рамках всего отчёта — если в запросе отсутствуют фильтры: `nmIDs`, `subjectID`, `brandName`, `tagID`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2StocksReportProductsProducts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/stocks-report/products/sizes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Данные по размерам
     * @description Метод формирует набор данных об остатках по размерам товара.
     *     <br><br>
     *     Возможны случаи:
     *     1. Товар имеет размеры и `"includeOffice":true`, тогда в ответе будут данные об остатках по каждому из размеров с вложенной детализацией по складам.
     *     2. Товар имеет размеры и `"includeOffice":false`, тогда в ответе будут данные об остатках по каждому из размеров без вложенной детализации по складам.
     *     3. Товар не имеет размера и `"includeOffice":true`, тогда в ответе будет детализация по складам. Без данных об остатках по каждому из размеров.
     *     4. Товар не имеет размера и `"includeOffice":false`, тогда тело ответа будет пустым.<br></br>
     *     Товар не имеет размера, если у него единственный размер с `"techSize":"0"`. В ответах метода получения данных по [товарам](/openapi/analytics#tag/stocksReport/operation/postV2StocksReportProductsProducts) у таких товаров `"hasSizes":false`.<br></br>
     *     Данные по складам продавца приходят в агрегированном виде — по всем сразу, без детализации по конкретным складам — эти записи будут с `"regionName":"Свой склад"` и `"officeName":""`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2StocksReportProductsSizes']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/stocks-report/offices': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Данные по складам
     * @description Метод формирует набор данных об остатках по складам.
     *     <br><br>
     *     Данные по складам продавца приходят в агрегированном виде — по всем сразу, без детализации по конкретным складам — эти записи будут с `"regionName":"Свой склад"` и `"offices":[]`.<br><br>
     *
     *     Данные отчёта обновляются 1 раз в 2 часа.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2StocksReportOffices']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v2/item-rating': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить отчёт
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод формирует набор данных об оценках товаров.
     *     <br><br>
     *     Данные отчёта обновляются 1 раз в час.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 3 запроса | 20 сек | 3 запроса |
     *     </div>
     */
    post: operations['postV2ItemRating']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/order-feed': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить отчёт
     * @description Метод формирует набор данных о заказах и продажах.
     *     <br><br>
     *     Данные отчёта обновляются в режиме реального времени.
     *     <br><br>
     *     > 1 заказ = 1 сборочное задание = 1 единица товара
     *
     *     Параметры `brandNames`,`subjectIds`, `tagIds`, `nmIds` могут быть пустыми `[]`, тогда в ответе возвращаются все заказы продавца.<br>
     *     Если вы указали несколько параметров, в ответе будут заказы, в которых есть одновременно все эти параметры. Если заказы не подходят по параметрам запроса, вернётся пустой массив `[]`.
     *     <br><br>
     *     Можно получить отчёт максимум за последние 31 день.
     *     <br><br>
     *     Заказы отдаются по времени текущего статуса, от самого нового к самому раннему.
     *     <br><br>
     *     Можно использовать пагинацию.
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
     *     | Базовый | 3 ч | 1 запрос | 3 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1OrderFeed']
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
    /**
     * @description Параметры запроса для формирования главной страницы:
     *       - `currentPeriod` — текущий период
     *       - `pastPeriod` — предыдущий период для сравнения
     */
    MainRequest: {
      currentPeriod: components['schemas']['Period']
      pastPeriod?: components['schemas']['pastPeriod']
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       162579635,
       *       166699779
       *     ]
       */
      nmIds?: number[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       32,
       *       64
       *     ]
       */
      subjectIds?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "Adidas",
       *       "Nike"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       3,
       *       5,
       *       6
       *     ]
       */
      tagIds?: number[]
      positionCluster: components['schemas']['PositionCluster']
      orderBy: components['schemas']['OrderByMainAndDetails']
      /**
       * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
       * @default true
       * @example true
       */
      includeSubstitutedSKUs: boolean
      /**
       * @description Показать данные по поисковым запросам без учёта подменного артикула
       * @default true
       * @example false
       */
      includeSearchTexts: boolean
      /**
       * Format: uint32
       * @description Количество групп товаров в ответе
       * @example 130
       */
      limit: number
      /**
       * Format: uint32
       * @description После какого элемента выдавать данные
       * @example 50
       */
      offset: number
    }
    MainResponse: {
      commonInfo: components['schemas']['CommonInfo']
      positionInfo: components['schemas']['PositionInfo']
      visibilityInfo: components['schemas']['VisibilityInfo']
      /** @description Список элементов таблицы */
      groups?: components['schemas']['TableGroupItem'][]
      currency: components['schemas']['Currency']
    }
    /** @description Общая информация */
    CommonInfo: {
      /** @description Рейтинг продавца */
      supplierRating: {
        /**
         * Format: float64
         * @description Текущий рейтинг продавца
         * @example 5.3
         */
        current: number
        /**
         * Format: float64
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 5.4
         */
        dynamics?: number
      }
      /** @description Количество товаров в рекламе */
      advertisedProducts: {
        /**
         * @description Текущее количество товаров в рекламе
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /**
       * Format: uint64
       * @description Общее количество товаров
       * @example 150
       */
      totalProducts: number
    }
    /** @description Информация о позиции товара */
    PositionInfo: {
      /** @description Средняя позиция товара в результатах поиска */
      average: {
        /**
         * @description Текущая средняя позиция товара
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Медианная позиция товара в результатах поиска */
      median: {
        /**
         * @description Текущая медианная позиция товара
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Данные для чарта по средней и медианной позиции товара в результатах поиска */
      chartItems: components['schemas']['SearchReportPositionChartItem'][]
      clusters: components['schemas']['SearchReportPositionClusters']
    }
    SearchReportPositionChartItem: {
      /**
       * @description Дата
       * @example 2024-10-19
       */
      dt: string
      /**
       * Format: uint64
       * @description Средняя позиция товара в результатах поиска
       * @example 1
       */
      average: number
      /**
       * Format: uint64
       * @description Медианная позиция товара в результатах поиска
       * @example 1
       */
      median: number
    }
    /**
     * @description Количество товаров со средней позицией в поиске:
     *       - `firstHundred` — от 1 до 100
     *       - `secondHundred` — от 101 до 200
     *       - `below` — от 201 и ниже
     */
    SearchReportPositionClusters: {
      /** @description от 1 до 100 */
      firstHundred: {
        /**
         * @description Текущее количество товаров
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description от 101 до 200 */
      secondHundred: {
        /**
         * @description Текущее количество товаров
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description от 201 и ниже */
      below: {
        /**
         * @description Текущее количество товаров
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
    }
    /** @description Видимость карточек и переходы в карточки. По дням, неделям, месяцам */
    VisibilityInfo: {
      /** @description Видимость — процент вероятности, что пользователь увидит карточку товара. Зависит от средней позиции */
      visibility: {
        /**
         * @description Видимость в текущий период
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Количество переходов в карточку товара из поиска */
      openCard: {
        /**
         * @description Текущее количество переходов
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Данные для отрисовки графика в личном кабинете по видимости и переходам в карточки по дням */
      byDay?: {
        dt: components['schemas']['Date']
        /**
         * Format: uint64
         * @description Видимость карточки в результатах поиска, %
         * @example 100
         */
        visibility: number
        /**
         * Format: uint64
         * @description Количество переходов в карточку
         * @example 124
         */
        open: number
      }[]
      /** @description Данные для отрисовки графика в личном кабинете по видимости и переходам в карточки по неделям */
      byWeek?: {
        dt: components['schemas']['Date']
        /**
         * Format: uint64
         * @description Видимость карточки в результатах поиска, %
         * @example 100
         */
        visibility: number
        /**
         * Format: uint64
         * @description Количество переходов в карточку
         * @example 124
         */
        open: number
      }[]
      /** @description Данные для отрисовки графика в личном кабинете по видимости и переходам в карточки по месяцам */
      byMonth?: {
        dt: components['schemas']['Date']
        /**
         * Format: uint64
         * @description Видимость карточки в результатах поиска, %
         * @example 100
         */
        visibility: number
        /**
         * Format: uint64
         * @description Количество переходов в карточку
         * @example 124
         */
        open: number
      }[]
    }
    /**
     * @description К группе товаров относятся все карточки, подходящие хотя бы по одному из параметров:
     *       - `subjectName` — название предмета
     *       - `brandName` — бренд
     *       - `tagName` — название ярлыка
     */
    TableGroupItem: {
      /**
       * @description Название предмета
       * @example Phones
       */
      subjectName?: string
      /**
       * Format: uint64
       * @description ID предмета
       * @example 50
       */
      subjectId?: number
      /**
       * @description Бренд
       * @example Apple
       */
      brandName?: string
      /**
       * @description Название ярлыка
       * @example phones
       */
      tagName?: string
      /**
       * Format: int64
       * @description ID ярлыка
       * @example 65
       */
      tagId?: number
      /** @description Метрики товара в таблице */
      metrics: {
        /** @description Средняя позиция товара в результатах поиска */
        avgPosition: {
          /**
           * @description Текущая средняя позиция
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
        /** @description Количество переходов в карточку товара из поиска */
        openCard: {
          /**
           * @description Текущее количество переходов
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
        /** @description Сколько раз товар из поиска добавили в корзину */
        addToCart: {
          /**
           * @description Текущее количество
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
        /** @description Конверсия в корзину из поиска — доля добавлений товара в корзину по отношению ко всем переходам в карточку товара из поиска */
        openToCart: {
          /**
           * @description Текущая конверсия
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
        /** @description Сколько раз товары из поиска заказали */
        orders: {
          /**
           * @description Текущее количество
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
        /** @description Конверсия в заказ из поиска — доля заказов товара по отношению ко всем добавлениям товара из поиска в корзину */
        cartToOrder: {
          /**
           * @description Текущая конверсия
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
        /** @description Процент видимости товара в результатах поиска */
        visibility: {
          /**
           * @description Текущий процент видимости
           * @example 5
           */
          current: number
          /**
           * @description Динамика по сравнению с предыдущим периодом, %
           * @example 50
           */
          dynamics?: number
        }
      }
      /** @description Массив товаров группы */
      items: components['schemas']['TableItem'][]
    }
    TableItem: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 268913787
       */
      nmId: number
      /**
       * @description Название товара
       * @example iPhone 13 256 ГБ Серебристый
       */
      name?: string
      /**
       * @description Артикул продавца
       * @example wb3ha2668w
       */
      vendorCode: string
      /**
       * @description Название предмета
       * @example Смартфоны
       */
      subjectName?: string
      /**
       * @description Бренд
       * @example Apple
       */
      brandName?: string
      /**
       * @description URL главного фото карточки товара
       * @example https://basket-12.wbbasket.ru/vol1788/part178840/178840836/images/c246x328/1.webp
       */
      mainPhoto?: string
      /**
       * @description Находится ли товар в продвижении в Поисковой выдаче
       * @example false
       */
      isAdvertised: boolean
      /**
       * @description Искали ли товар по подменному артикулу.<br>
       *     Поле будет в ответе при наличии в запросе `includeSubstitutedSKUs` и/или `includeSearchTexts`
       * @example true
       */
      isSubstitutedSKU?: boolean
      /**
       * @description Есть ли рейтинг у карточки товара
       * @example true
       */
      isCardRated: boolean
      /**
       * Format: float64
       * @description Рейтинг карточки товара
       * @example 6
       */
      rating: number
      /**
       * Format: float64
       * @description Рейтинг по отзывам
       * @example 1
       */
      feedbackRating: number
      /** @description Цена */
      price: {
        /**
         * Format: uint64
         * @description Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
         * @example 150
         */
        minPrice: number
        /**
         * Format: uint64
         * @description Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
         * @example 300
         */
        maxPrice: number
      }
      /** @description Средняя позиция товара в результатах поиска */
      avgPosition: {
        /**
         * @description Текущая средняя позиция
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Количество переходов в карточку товара из поиска */
      openCard: {
        /**
         * @description Текущее количество переходов
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Сколько раз товар из поиска добавили в корзину */
      addToCart: {
        /**
         * @description Текущее количество
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Конверсия в корзину из поиска — доля добавлений товара в корзину по отношению ко всем переходам в карточку товара из поиска */
      openToCart: {
        /**
         * @description Текущая конверсия
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Сколько раз товары из поиска заказали */
      orders: {
        /**
         * @description Текущее количество
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Конверсия в заказ из поиска — доля заказов товара по отношению ко всем добавлениям товара из поиска в корзину */
      cartToOrder: {
        /**
         * @description Текущая конверсия
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Процент видимости товара в результатах поиска */
      visibility: {
        /**
         * @description Текущий процент видимости
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
    }
    /**
     * @description Параметры запроса для пагинации по группам:
     *       - `currentPeriod` — текущий период
     *       - `pastPeriod` — предыдущий период для сравнения
     */
    TableGroupRequest: {
      currentPeriod: components['schemas']['Period']
      pastPeriod?: components['schemas']['pastPeriod']
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       162579635,
       *       166699779
       *     ]
       */
      nmIds?: number[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       64,
       *       334
       *     ]
       */
      subjectIds?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "nikkle",
       *       "abikas"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       32,
       *       53
       *     ]
       */
      tagIds?: number[]
      orderBy: components['schemas']['OrderByGrTe']
      positionCluster: components['schemas']['PositionCluster']
      /**
       * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
       * @default true
       * @example true
       */
      includeSubstitutedSKUs: boolean
      /**
       * @description Показать данные по поисковым запросам без учёта подменного артикула
       * @default true
       * @example false
       */
      includeSearchTexts: boolean
      /**
       * Format: uint32
       * @description Количество групп товаров в ответе
       * @example 130
       */
      limit: number
      /**
       * Format: uint32
       * @description После какого элемента выдавать данные
       * @example 50
       */
      offset: number
    }
    TableGroupResponse: {
      /** @description Список групп товаров для таблицы */
      groups: components['schemas']['TableGroupItem'][]
      currency: components['schemas']['Currency']
    }
    /**
     * @description Параметры запроса для пагинации по товарам в группе:
     *       - `currentPeriod` — текущий период
     *       - `pastPeriod` — предыдущий период для сравнения
     */
    TableDetailsRequest: {
      currentPeriod: components['schemas']['Period']
      pastPeriod?: components['schemas']['pastPeriod']
      /**
       * Format: int32
       * @description ID предмета
       * @example 123
       */
      subjectId?: number
      /**
       * @description Название товара
       * @example Apple
       */
      brandName?: string
      /**
       * Format: int64
       * @description ID ярлыка
       * @example 45
       */
      tagId?: number
      /**
       * @description Список артикулов WB
       * @example [
       *       162579635,
       *       166699779
       *     ]
       */
      nmIds?: number[]
      orderBy: components['schemas']['OrderByMainAndDetails']
      /**
       * @description Товары с какой средней позицией в поиске показывать в отчёте:
       *       - `all` — все
       *       - `firstHundred` — от 1 до 100
       *       - `secondHundred` — от 101 до 200
       *       - `below` — от 201 и ниже
       * @enum {string}
       */
      positionCluster: 'all' | 'firstHundred' | 'secondHundred' | 'below'
      /**
       * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
       * @default true
       * @example true
       */
      includeSubstitutedSKUs: boolean
      /**
       * @description Показать данные по поисковым запросам без учёта подменного артикула
       * @default true
       * @example false
       */
      includeSearchTexts: boolean
      /**
       * Format: uint32
       * @description Количество товаров в ответе
       * @example 150
       */
      limit: number
      /**
       * Format: uint32
       * @description После какого элемента выдавать данные
       * @example 100
       */
      offset: number
    }
    TableDetailsResponse: {
      /** @description Список товаров в группе по фильтру */
      products: components['schemas']['TableItem'][]
      currency: components['schemas']['Currency']
    }
    /**
     * @description Параметры для запроса по рейтингу поисковых запросов:
     *       - `currentPeriod` — текущий период
     *       - `pastPeriod` — предыдущий период для сравнения
     */
    ItemSearchTextsRequest: {
      currentPeriod: components['schemas']['Period']
      pastPeriod?: components['schemas']['pastPeriod']
      /**
       * @description Список артикулов WB
       * @example [
       *       162579635,
       *       166699779
       *     ]
       */
      nmIds: number[]
      /**
       * @description Фильтрация по поисковым запросам, по которым больше всего:
       *       - `openCard` — перешли в карточку
       *       - `addToCart` — добавили в корзину
       *       - `openToCart` — конверсия в корзину
       *       - `orders` — заказали товаров
       *       - `cartToOrder` — конверсия в заказ
       * @example openToCart
       * @enum {string}
       */
      topOrderBy: 'openCard' | 'addToCart' | 'openToCart' | 'orders' | 'cartToOrder'
      /**
       * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
       * @default true
       * @example true
       */
      includeSubstitutedSKUs: boolean
      /**
       * @description Показать данные по поисковым запросам без учёта подменного артикула
       * @default true
       * @example false
       */
      includeSearchTexts: boolean
      orderBy: components['schemas']['OrderByGrTe']
      limit: components['schemas']['TextLimit']
    }
    ItemSearchTextsResponse: {
      /** @description Элементы таблицы */
      items: components['schemas']['TableSearchTextItem'][]
      currency: components['schemas']['Currency']
    }
    TableSearchTextItem: {
      /**
       * @description Текст поискового запроса
       * @example костюм
       */
      text: string
      /**
       * Format: uint64
       * @description Артикул WB
       * @example 211131895
       */
      nmId: number
      /**
       * @description Название предмета
       * @example Phones
       */
      subjectName: string
      /**
       * @description Бренд
       * @example Apple
       */
      brandName: string
      /**
       * @description Артикул продавца
       * @example wb3ha2668w
       */
      vendorCode: string
      /**
       * @description Название товара
       * @example iPhone 13 256 ГБ Серебристый
       */
      name: string
      /**
       * @description Есть ли рейтинг у карточки товара
       * @example true
       */
      isCardRated: boolean
      /**
       * Format: float64
       * @description Рейтинг карточки товара
       * @example 6
       */
      rating: number
      /**
       * Format: float64
       * @description Рейтинг по отзывам
       * @example 1
       */
      feedbackRating: number
      /** @description Цена */
      price: {
        /**
         * Format: uint64
         * @description Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
         * @example 150
         */
        minPrice: number
        /**
         * Format: uint64
         * @description Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
         * @example 300
         */
        maxPrice: number
      }
      /** @description Количество обращений с поисковым запросом */
      frequency: {
        /**
         * @description Текущее количество
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /**
       * Format: uint64
       * @description Количество обращений с поисковым запросом за неделю
       * @example 140
       */
      weekFrequency: number
      /** @description Медианная позиция. Учитываются только те позиции, из которых пользователи добавляли товар в корзину или переходили в его карточку. Серединное значение позиции в поисковой выдаче, которое исключает сильные отклонения данных от среднего значения */
      medianPosition: {
        /**
         * @description Текущая медианная позиция
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Средняя позиция товара в результатах поиска */
      avgPosition: {
        /**
         * @description Текущая средняя позиция
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
      /** @description Количество переходов в карточку товара из поиска */
      openCard: {
        /**
         * @description Текущее количество переходов
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
        /**
         * Format: uint64
         * @description Процент, на который показатель количества открытий карточки товара выше, чем у карточек других продавцов по поисковому запросу
         * @example 50
         */
        percentile: number
      }
      /** @description Сколько раз товар из поиска добавили в корзину */
      addToCart: {
        /**
         * @description Текущее количество
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
        /**
         * Format: uint64
         * @description Процент, на который показатель добавлений в корзину выше, чем у карточек других продавцов по поисковому запросу
         * @example 50
         */
        percentile: number
      }
      /** @description Конверсия в корзину из поиска — доля добавлений товара в корзину по отношению ко всем переходам в карточку товара из поиска */
      openToCart: {
        /**
         * @description Текущая конверсия
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
        /**
         * Format: uint64
         * @description Процент, на который показатель конверсии в корзину выше, чем у карточек других продавцов по поисковому запросу
         * @example 50
         */
        percentile: number
      }
      /** @description Сколько раз товары из поиска заказали */
      orders: {
        /**
         * @description Текущее количество
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
        /**
         * Format: uint64
         * @description Процент, на который показатель заказов выше, чем у карточек других продавцов по поисковому запросу
         * @example 50
         */
        percentile: number
      }
      /** @description Конверсия в заказ из поиска — доля заказов товара по отношению ко всем добавлениям товара из поиска в корзину */
      cartToOrder: {
        /**
         * @description Текущая конверсия
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
        /**
         * Format: uint64
         * @description Процент, на который показатель конверсии в заказ выше, чем у карточек других продавцов по поисковому запросу
         * @example 50
         */
        percentile: number
      }
      /** @description Процент видимости товара в результатах поиска */
      visibility: {
        /**
         * @description Текущий процент
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 50
         */
        dynamics?: number
      }
    }
    ItemOrdersRequest: {
      period: components['schemas']['PeriodOrdersRequest']
      /**
       * Format: uint64
       * @description Артикул WB
       * @example 211131895
       */
      nmId: number
      /**
       * @description Поисковые запросы. Для тарифов [Джема](https://seller.wildberries.ru/monetization/tariffs) **Продвинутый** и **Премиальный** максимум — 100
       * @example [
       *       "костюм",
       *       "пиджак"
       *     ]
       */
      searchTexts: string[]
    }
    ItemOrdersResponse: {
      /** @description Итог по товарам */
      total: components['schemas']['ItemOrdersMetrics'][]
      /** @description Элементы таблицы */
      items: components['schemas']['ItemOrdersTextItem'][]
    }
    ItemOrdersTextItem: {
      /** @description Текст поискового запроса */
      text: string
      /**
       * Format: uint64
       * @description Количество обращений с поисковым запросом
       */
      frequency: number
      /** @description Статистика по датам */
      dateItems: components['schemas']['ItemOrdersMetrics'][]
    }
    ItemOrdersMetrics: {
      /**
       * Format: date
       * @description Дата сбора статистики
       * @example 2024-02-10
       */
      dt: string
      /**
       * Format: uint64
       * @description Средняя позиция товара в результатах поиска
       * @example 10
       */
      avgPosition: number
      /**
       * Format: uint64
       * @description Сколько раз товары из поиска заказали
       * @example 20
       */
      orders: number
    }
    /**
     * @description Товары с какой средней позицией в поиске показывать в отчёте:
     *       - `all` — все
     *       - `firstHundred` — от 1 до 100
     *       - `secondHundred` — от 101 до 200
     *       - `below` — от 201 и ниже
     * @example all
     * @enum {string}
     */
    PositionCluster: 'all' | 'firstHundred' | 'secondHundred' | 'below'
    /** @description Параметры сортировки */
    OrderByGrTe: {
      /**
       * @description Поле для сортировки:
       *       - `avgPosition` — по средней позиции
       *       - `addToCart` — по добавлениям в корзину
       *       - `openCard` — по открытию карточки (переход на страницу товара)
       *       - `orders` — по количеству заказов
       *       - `cartToOrder` — по конверсии в заказ из поиска
       *       - `openToCart` — по конверсии в корзину из поиска
       *       - `visibility` — по видимости товара
       * @example avgPosition
       * @enum {string}
       */
      field: 'avgPosition' | 'openCard' | 'addToCart' | 'openToCart' | 'orders' | 'cartToOrder' | 'visibility'
      /**
       * @description Порядок сортировки:
       *       - `asc` — по возрастанию
       *       - `desc` — по убыванию
       * @example asc
       * @enum {string}
       */
      mode: 'asc' | 'desc'
    }
    /** @description Параметры сортировки */
    OrderByMainAndDetails: {
      /**
       * @description Поле для сортировки:
       *       - `avgPosition` — по средней позиции
       *       - `addToCart` — по добавлениям в корзину
       *       - `openCard` — по открытию карточки (переход на страницу товара)
       *       - `orders` — по количеству заказов
       *       - `cartToOrder` — по конверсии в заказ из поиска
       *       - `openToCart` — по конверсии в корзину из поиска
       *       - `visibility` — по видимости товара
       *       - `minPrice` — по минимальной цене
       *       - `maxPrice` — по максимальной цене
       * @example avgPosition
       * @enum {string}
       */
      field:
        | 'avgPosition'
        | 'openCard'
        | 'addToCart'
        | 'openToCart'
        | 'orders'
        | 'cartToOrder'
        | 'visibility'
        | 'minPrice'
        | 'maxPrice'
      /**
       * @description Порядок сортировки:
       *       - `asc` — по возрастанию
       *       - `desc` — по убыванию
       * @example asc
       * @enum {string}
       */
      mode: 'asc' | 'desc'
    }
    TextLimit: components['schemas']['StandardTariff'] | components['schemas']['AdvancedTariff']
    /**
     * Format: uint64
     * @description Количество поисковых запросов по товару для [стандартного](https://seller.wildberries.ru/monetization/tariffs) тарифа
     * @example 20
     */
    StandardTariff: number
    /**
     * Format: uint64
     * @description Количество поисковых запросов по товару для [продвинутого](https://seller.wildberries.ru/monetization/tariffs) тарифа
     * @example 50
     */
    AdvancedTariff: number
    /**
     * Format: date
     * @description Дата
     * @example 2024-02-10
     */
    Date: string
    /** @description Текущий период. Максимум 7 суток */
    PeriodOrdersRequest: {
      /**
       * Format: date
       * @description Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
       * @example 2024-02-10
       */
      start: string
      /**
       * Format: date
       * @description Дата окончания периода. Не ранее 365 суток от сегодня
       * @example 2024-02-10
       */
      end: string
    }
    /** @description Текущий период */
    Period: {
      /**
       * Format: date
       * @description Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
       * @example 2024-02-10
       */
      start: string
      /**
       * Format: date
       * @description Дата окончания периода. Не ранее 365 суток от сегодня
       * @example 2024-02-10
       */
      end: string
    }
    /** @description Прошлый период для сравнения. Количество дней — меньше или равно `currentPeriod` */
    pastPeriod: {
      /**
       * Format: date
       * @description Дата начала периода. Не позднее `end`. Не ранее 365 суток от сегодня
       * @example 2024-02-08
       */
      start: string
      /**
       * Format: date
       * @description Дата окончания периода. Не позднее даты перед датой начала `currentPeriod`. Не ранее 365 суток от сегодня
       * @example 2024-02-08
       */
      end: string
    }
    CommonResponseProperties: {
      /** @description Данные ответа */
      data?: Record<string, never>
    }
    ErrorObject400: {
      /**
       * @description Заголовок ошибки
       * @example Invalid request body
       */
      title: string
      /**
       * @description Детали ошибки
       * @example code=400, message=invalid: positionCluster (field required), limit (field required), offset (field required), internal=invalid: positionCluster (field required), limit (field required), offset (field required
       */
      detail: string
      /**
       * @description Уникальный ID запроса
       * @example fb25c9e9-cae8-52db-b68e-736c1466a3f5
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example analytic-open-api
       */
      origin: string
    }
    ErrorObject403: {
      /**
       * @description Заголовок ошибки
       * @example Authorization error
       */
      title: string
      /**
       * @description Детали ошибки
       * @example Authorization error
       */
      detail: string
      /**
       * @description Уникальный ID запроса
       * @example fb25c9e9-cae8-52db-b68e-736c1466a3f5
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example analytic-open-api
       */
      origin: string
    }
    SalesFunnelItemReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `DETAIL_HISTORY_REPORT` — Воронка продаж. По артикулам WB
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'DETAIL_HISTORY_REPORT'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: {
        /** @description Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах */
        nmIDs?: number[]
        /**
         * @description Список ID предметов для фильтрации
         * @example [
         *       64,
         *       334
         *     ]
         */
        subjectIds?: number[]
        /**
         * @description Список брендов для фильтрации
         * @example [
         *       "nike",
         *       "adidas"
         *     ]
         */
        brandNames?: string[]
        /**
         * @description Список ID ярлыков для фильтрации
         * @example [
         *       32,
         *       53
         *     ]
         */
        tagIds?: number[]
        /**
         * Format: date
         * @description Начало периода
         */
        startDate: string
        /**
         * Format: date
         * @description Конец периода
         */
        endDate: string
        /**
         * @description Временная зона по формату [IANA](https://nodatime.org/TimeZones)
         * @default Europe/Moscow
         * @example Europe/Moscow
         */
        timezone: string
        /**
         * @description Как сгруппировать данные (по умолчанию по дням):
         *
         *       * `day` — по дням
         *       * `week` — по неделям
         *       * `month` — по месяцам
         * @enum {string}
         */
        aggregationLevel?: 'day' | 'week' | 'month'
        /** @description Скрыть удалённые товары */
        skipDeletedNm?: boolean
      }
    }
    SalesFunnelGroupReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `GROUPED_HISTORY_REPORT` — Воронка продаж. По предметам, брендам и ярлыкам
       *      (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'GROUPED_HISTORY_REPORT'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: {
        /**
         * @description Список ID предметов для фильтрации
         * @example [
         *       64,
         *       334
         *     ]
         */
        subjectIds?: number[]
        /**
         * @description Список брендов для фильтрации
         * @example [
         *       "nike",
         *       "adidas"
         *     ]
         */
        brandNames?: string[]
        /**
         * @description Список ID ярлыков для фильтрации
         * @example [
         *       32,
         *       53
         *     ]
         */
        tagIds?: number[]
        /**
         * Format: date
         * @description Начало периода
         */
        startDate: string
        /**
         * Format: date
         * @description Конец периода
         */
        endDate: string
        /**
         * @description Временная зона по формату [IANA](https://nodatime.org/TimeZones)
         * @default Europe/Moscow
         * @example Europe/Moscow
         */
        timezone: string
        /**
         * @description Как сгруппировать данные (по умолчанию по дням):
         *
         *       * `day` — по дням
         *       * `week` — по неделям
         *       * `month` — по месяцам
         */
        aggregationLevel?: string
        /** @description Скрыть удалённые товары */
        skipDeletedNm?: boolean
      }
    }
    SearchReportGroupReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `SEARCH_QUERIES_PREMIUM_REPORT_GROUP` — Отчёт по параметрам поиска. По предметам, брендам и ярлыкам (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'SEARCH_QUERIES_PREMIUM_REPORT_GROUP'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: {
        currentPeriod: components['schemas']['Period']
        pastPeriod?: components['schemas']['pastPeriod']
        /** @description Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах */
        nmIds?: number[]
        /**
         * @description Список ID предметов для фильтрации. Оставьте пустым, чтобы получить отчёт по всем предметам
         * @example [
         *       64,
         *       334
         *     ]
         */
        subjectIds: number[]
        /**
         * @description Список брендов для фильтрации
         * @example [
         *       "nike",
         *       "adidas"
         *     ]
         */
        brandNames?: string[]
        /**
         * @description Список ID ярлыков для фильтрации
         * @example [
         *       32,
         *       53
         *     ]
         */
        tagIds?: number[]
        orderBy: components['schemas']['OrderByGrTe']
        positionCluster: components['schemas']['PositionCluster']
        /**
         * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
         * @default true
         * @example true
         */
        includeSubstitutedSKUs: boolean
        /**
         * @description Показать данные по поисковым запросам без учёта подменного артикула
         * @default true
         * @example false
         */
        includeSearchTexts: boolean
      }
    }
    SearchReportItemReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `SEARCH_QUERIES_PREMIUM_REPORT_PRODUCT` — Отчёт по параметрам поиска. По артикулам WB (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'SEARCH_QUERIES_PREMIUM_REPORT_PRODUCT'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: {
        currentPeriod: components['schemas']['Period']
        pastPeriod?: components['schemas']['pastPeriod']
        /**
         * Format: int32
         * @description ID предмета. Используйте значение `0`, чтобы получить отчёт по всем предметам
         * @example 132
         */
        subjectId?: number
        /**
         * @description Бренд
         * @example Abikas
         */
        brandName?: string
        /**
         * Format: int64
         * @description ID ярлыка. Чтобы получить отчёт по всем ярлыкам, укажите значение 0
         * @example 3
         */
        tagId?: number
        /** @description Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах */
        nmIds?: number[]
        positionCluster: components['schemas']['PositionCluster']
        orderBy: components['schemas']['OrderBy']
        /**
         * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
         * @default true
         * @example true
         */
        includeSubstitutedSKUs: boolean
        /**
         * @description Показать данные по поисковым запросам без учёта подменного артикула
         * @default true
         * @example false
         */
        includeSearchTexts: boolean
      }
    }
    SearchReportTextReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `SEARCH_QUERIES_PREMIUM_REPORT_TEXT` — Отчёт по текстам поисковых запросов (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'SEARCH_QUERIES_PREMIUM_REPORT_TEXT'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: {
        currentPeriod: components['schemas']['Period']
        pastPeriod?: components['schemas']['pastPeriod']
        /** @description Артикулы WB, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт по всем товарам */
        nmIds?: unknown[]
        /**
         * @description Список ID предметов для фильтрации
         * @example [
         *       64,
         *       334
         *     ]
         */
        subjectIds?: number[]
        /**
         * @description Список брендов для фильтрации
         * @example [
         *       "nike",
         *       "adidas"
         *     ]
         */
        brandNames?: string[]
        /**
         * @description Список ID ярлыков для фильтрации
         * @example [
         *       32,
         *       53
         *     ]
         */
        tagIds?: number[]
        /**
         * @description Фильтрация по поисковым запросам, по которым больше всего:
         *       - `openCard` — перешли в карточку
         *       - `addToCart` — добавили в корзину
         *       - `openToCart` — конверсия в корзину
         *       - `orders` — заказали товаров
         *       - `cartToOrder` — конверсия в заказ
         * @example openToCart
         * @enum {string}
         */
        topOrderBy: 'openCard' | 'addToCart' | 'openToCart' | 'orders' | 'cartToOrder'
        orderBy: components['schemas']['OrderByGrTe']
        /**
         * @description Показать данные по прямым запросам с [подменным артикулом](https://seller.wildberries.ru/help-center/article/A-524)
         * @default true
         * @example true
         */
        includeSubstitutedSKUs: boolean
        /**
         * @description Показать данные по поисковым запросам без учёта подменного артикула
         * @default true
         * @example false
         */
        includeSearchTexts: boolean
        limit: components['schemas']['TextLimit']
      }
    }
    InventoryMetricsReportReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `STOCK_HISTORY_REPORT_CSV` — Отчёт по статистике остатков (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'STOCK_HISTORY_REPORT_CSV'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: components['schemas']['CommonReportFilters']
    }
    InventoryHistoryReportReq: {
      /**
       * Format: uuid
       * @description ID отчёта в UUID-формате. Генерируется продавцом самостоятельно
       */
      id: string
      /**
       * @description Тип отчёта `STOCK_HISTORY_DAILY_CSV` — Отчёт по истории остатков (enum property replaced by openapi-typescript)
       * @enum {string}
       */
      reportType: 'STOCK_HISTORY_DAILY_CSV'
      /** @description Название отчёта. Если не указано, сформируется автоматически */
      userReportName?: string
      /** @description Параметры отчёта */
      params: {
        /**
         * @description Список артикулов WB для фильтрации
         * @example [
         *       111222333,
         *       444555666
         *     ]
         */
        nmIds?: number[]
        /**
         * @description Список ID предметов для фильтрации
         * @example [
         *       123,
         *       456
         *     ]
         */
        subjectIds?: number[]
        /**
         * @description Список брендов для фильтрации
         * @example [
         *       "Эрк",
         *       "Дент"
         *     ]
         */
        brandNames?: string[]
        /**
         * @description Список ID ярлыков для фильтрации
         * @example [
         *       3,
         *       4,
         *       5
         *     ]
         */
        tagIds?: number[]
        currentPeriod: components['schemas']['PeriodInv']
        stockType: components['schemas']['StockType']
        /**
         * @description Скрыть удалённые товары
         * @example true
         */
        skipDeletedNm: boolean
      }
    }
    NmReportRetryReportRequest: {
      /**
       * Format: uuid
       * @description ID отчёта
       * @example 06eea887-9d9f-491f-b16a-bb1766fcb8d2
       */
      downloadId?: string
    }
    NmReportCreateReportResponse: {
      /**
       * @description Уведомление, что началась генерация отчёта
       * @example Началось формирование файла/отчета
       */
      data: string
    }
    NmReportGetReportsResponse: {
      data: {
        /**
         * Format: uuid
         * @description ID отчёта
         * @example 06eae887-9d9f-491f-b16a-bb1766fcb8d2
         */
        id: string
        /**
         * @description Дата и время завершения генерации
         * @example 2024-06-26 20:05:32
         */
        createdAt: string
        /**
         * @description Статус отчёта:
         *
         *     * `WAITING` — в очереди на обработку
         *     * `PROCESSING` — генерируется
         *     * `SUCCESS —` готов
         *     * `RETRY` — ожидает повторной обработки
         *     * `FAILED` — не получилось сгенерировать, сгенерируйте повторно
         * @example SUCCESS
         */
        status: string
        /**
         * @description Название отчёта
         * @example Card report
         */
        name: string
        /**
         * @description Размер отчёта, Б
         * @example 123
         */
        size: number
        /**
         * Format: date
         * @description Начало периода
         * @example 2024-06-21
         */
        startDate: string
        /**
         * Format: date
         * @description Конец периода
         * @example 2024-06-23
         */
        endDate: string
      }[]
    }
    NmReportRetryReportResponse: {
      /**
       * @description Уведомление, что началась повторная генерация отчёта
       * @example Retry
       */
      data: string
    }
    /**
     * @description Слишком много запросов
     * @example {
     *       "title": "too many requests",
     *       "detail": "limited by c122a060-a7fb-4bb4-abb0-32fd4e18d489",
     *       "code": "07e4668e-ac2242c5c8c5-[UK-4dx7JUdskGZ]",
     *       "requestId": "9d3c02cc698f8b041c661a7c28bed293",
     *       "origin": "ag-analytics",
     *       "status": 429,
     *       "statusText": "Too Many Requests",
     *       "timestamp": "2024-09-30T06:52:38Z"
     *     }
     */
    response429Download: {
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
    /**
     * @example {
     *       "title": "Too many requests",
     *       "detail": "The daily response limit has been exceeded. The maximum number is 20.",
     *       "requestId": "51b7828b-e298-4dfa-b7cd-45ab179921d393",
     *       "origin": "analytics-open-api"
     *     }
     */
    response429DownloadDaily: {
      /** @description Заголовок ошибки */
      title: string
      /** @description Детали ошибки */
      detail: string
      /** @description Уникальный ID запроса */
      requestId: string
      /** @description ID внутреннего сервиса WB */
      origin: string
    }
    TableGroupRequestSt: components['schemas']['CommonReportFilters'] & {
      /**
       * Format: uint32
       * @description Количество групп в ответе
       * @default 100
       * @example 150
       */
      limit: number
      /**
       * Format: uint32
       * @description После какого элемента выдавать данные
       * @example 100
       */
      offset: number
    }
    /** @description Общие фильтры по отчёту */
    CommonReportFilters: {
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       111222333,
       *       444555666
       *     ]
       */
      nmIDs?: number[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       123,
       *       456
       *     ]
       */
      subjectIDs?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "Эрк",
       *       "Дент"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       3,
       *       4,
       *       5
       *     ]
       */
      tagIDs?: number[]
      currentPeriod: components['schemas']['PeriodInv']
      stockType: components['schemas']['StockType']
      /**
       * @description Скрыть удалённые товары
       * @example true
       */
      skipDeletedNm: boolean
      availabilityFilters: components['schemas']['availabilityFilters']
      orderBy: components['schemas']['TableOrderBy']
    }
    /** @description Период */
    PeriodInv: {
      /**
       * Format: date
       * @description Дата начала периода. Не позднее `end`. Не ранее 3 месяцев от текущей даты
       * @example 2024-02-10
       */
      start: string
      /**
       * Format: date
       * @description Дата окончания периода. Не ранее 3 месяцев от текущей даты
       * @example 2024-02-10
       */
      end: string
    }
    /**
     * @description Тип складов хранения товаров:
     *       - `""` — все
     *       - `wb` — склады WB
     *       - `mp` — склады продавца
     * @example mp
     * @enum {string}
     */
    StockType: '' | 'wb' | 'mp'
    /**
     * @description Доступность товара:
     *       - `deficient` — Дефицит
     *       - `actual` — Актуальный
     *       - `balanced` — Баланс
     *       - `nonActual` — Неактуальный
     *       - `nonLiquid` — Неликвид
     *       - `invalidData` — Не рассчитано
     * @example [
     *       "deficient",
     *       "balanced"
     *     ]
     */
    availabilityFilters: ('deficient' | 'actual' | 'balanced' | 'nonActual' | 'nonLiquid' | 'invalidData')[]
    /** @description Вид сортировки данных */
    TableOrderBy: {
      field: components['schemas']['TableGroupField']
      mode: components['schemas']['OrderByMode']
    }
    /**
     * @description Сортировка по полю:
     *       - `ordersCount` — Заказы, шт.
     *       - `ordersSum` — Заказы, сумма
     *       - `avgOrders` — Среднее количество заказов в день
     *       - `buyoutCount` — Выкупы, шт.
     *       - `buyoutSum` — Выкупы, сумма
     *       - `buyoutPercent` — Процент выкупа
     *       - `stockCount` — Остатки на текущий день, шт.
     *       - `stockSum` — Стоимость остатков на текущий день
     *       - `saleRate` — Оборачиваемость текущих остатков
     *       - `avgStockTurnover` — Оборачиваемость средних остатков
     *       - `toClientCount` — В пути к клиенту, шт.
     *       - `fromClientCount` — В пути от клиента, шт.
     *       - `minPrice` — Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
     *       - `maxPrice` — Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
     *       - `officeMissingTime` — Время отсутствия товара на складе
     *       - `lostOrdersCount` — Упущенные заказы, шт.
     *       - `lostOrdersSum` — Упущенные заказы, сумма
     *       - `lostBuyoutsCount` — Упущенные выкупы, шт.
     *       - `lostBuyoutsSum` — Упущенные выкупы, сумма
     * @example avgOrders
     * @enum {string}
     */
    TableGroupField:
      | 'ordersCount'
      | 'ordersSum'
      | 'avgOrders'
      | 'buyoutCount'
      | 'buyoutSum'
      | 'buyoutPercent'
      | 'stockCount'
      | 'stockSum'
      | 'saleRate'
      | 'avgStockTurnover'
      | 'toClientCount'
      | 'fromClientCount'
      | 'minPrice'
      | 'maxPrice'
      | 'officeMissingTime'
      | 'lostOrdersCount'
      | 'lostOrdersSum'
      | 'lostBuyoutsCount'
      | 'lostBuyoutsSum'
    /**
     * @description Порядок сортировки:
     *     - asc — по возрастанию
     *     - desc — по убыванию
     * @example asc
     * @enum {string}
     */
    OrderByMode: 'asc' | 'desc'
    TableGroupResponseSt: {
      groups: components['schemas']['TableGroups']
      currency: components['schemas']['Currency']
    }
    /** @description Множество данных по группам */
    TableGroups: components['schemas']['TableGroupItemSt'][]
    /** @description Данные по группе */
    TableGroupItemSt: {
      /**
       * Format: int32
       * @description ID предмета
       * @example 123456789
       */
      subjectID: number
      /**
       * @description Название предмета
       * @example Кружка
       */
      subjectName: string
      /**
       * @description Бренд
       * @example Крутая посуда
       */
      brandName: string
      /**
       * Format: int64
       * @description ID ярлыка
       * @example 12345
       */
      tagID: number
      /**
       * @description Название ярлыка
       * @example Человек-Паук
       */
      tagName: string
      /** @description Метрики группы */
      metrics: components['schemas']['TableCommonMetrics']
      /** @description Товары группы */
      items: components['schemas']['TableItemSt'][]
    }
    /** @description Метрики */
    TableCommonMetrics: {
      /**
       * Format: uint64
       * @description Заказы, шт.
       * @example 100
       */
      ordersCount: number
      /**
       * Format: uint64
       * @description Заказы, сумма
       * @example 100000
       */
      ordersSum: number
      /**
       * Format: float64
       * @description Среднее количество заказов в день
       * @example 200
       */
      avgOrders: number
      /** @description Среднее количество заказов по месяцам */
      avgOrdersByMonth: components['schemas']['FloatGraphByPeriodItem'][]
      /**
       * Format: uint64
       * @description Выкупы, шт.
       * @example 150
       */
      buyoutCount: number
      /**
       * Format: uint64
       * @description Выкупы, сумма
       * @example 150000
       */
      buyoutSum: number
      /**
       * Format: uint32
       * @description Процент выкупа
       * @example 5
       */
      buyoutPercent: number
      /**
       * Format: uint64
       * @description Остатки на текущий день, шт.
       * @example 50
       */
      stockCount: number
      /**
       * Format: uint64
       * @description Стоимость остатков на текущий день
       * @example 50000
       */
      stockSum: number
      /**
       * @description Оборачиваемость текущих остатков. Особые случаи:
       *       1. `"hours":-1` — бесконечная длительность
       *       2. `"hours":-2` — нулевая длительность
       *       3. `"hours":-3` — нерассчитанная длительность
       */
      saleRate: {
        /**
         * Format: int32
         * @description Количество дней
         * @example 5
         */
        days: number
        /**
         * Format: int32
         * @description Количество часов
         * @example 15
         */
        hours: number
      }
      /**
       * @description Оборачиваемость средних остатков. Особые случаи:
       *       1. `"hours":-1` — бесконечная длительность
       *       2. `"hours":-2` — нулевая длительность
       *       3. `"hours":-3` — нерассчитанная длительность
       */
      avgStockTurnover: {
        /**
         * Format: int32
         * @description Количество дней
         * @example 5
         */
        days: number
        /**
         * Format: int32
         * @description Количество часов
         * @example 15
         */
        hours: number
      }
      /**
       * Format: uint64
       * @description В пути к клиенту, шт.
       * @example 20
       */
      toClientCount: number
      /**
       * Format: uint64
       * @description В пути от клиента, шт.
       * @example 30
       */
      fromClientCount: number
      /**
       * @description Время отсутствия товара на складе. Особые случаи:
       *       1. `"hours":-1` — бесконечная длительность
       *       2. `"hours":-2` — нулевая длительность
       *       3. `"hours":-3` — нерассчитанная длительность
       *       4. `"hours":-4` — отсутствие в течение всего периода
       */
      officeMissingTime: {
        /**
         * Format: int32
         * @description Количество дней
         * @example 5
         */
        days: number
        /**
         * Format: int32
         * @description Количество часов
         * @example 15
         */
        hours: number
      }
      /**
       * Format: float64
       * @description Упущенные заказы, шт. Особые случаи:
       *       1. Значение меньше `0` и не равно `-2` — значение не рассчитано
       *       2. Значение `-2` — нулевое значение
       * @example 1550.52
       */
      lostOrdersCount: number
      /**
       * Format: float64
       * @description Упущенные заказы, сумма. Особые случаи:
       *       1. Значение меньше `0` и не равно `-2` — значение не рассчитано
       *       2. Значение `-2` — нулевое значение
       * @example 155000.25
       */
      lostOrdersSum: number
      /**
       * Format: float64
       * @description Упущенные выкупы, шт. Особые случаи:
       *       1. Значение меньше `0` и не равно `-2` — значение не рассчитано
       *       2. Значение `-2` — нулевое значение
       * @example 123.55
       */
      lostBuyoutsCount: number
      /**
       * Format: float64
       * @description Упущенные выкупы, сумма. Особые случаи:
       *       1. Значение меньше `0` и не равно `-2` — значение не рассчитано
       *       2. Значение `-2` — нулевое значение
       * @example 225555.15
       */
      lostBuyoutsSum: number
    }
    /** @description Среднее количество заказов за месяц */
    FloatGraphByPeriodItem: {
      /**
       * Format: date
       * @description Начало месяца
       * @example 2025-01-01
       */
      start: string
      /**
       * Format: date
       * @description Конец месяца
       * @example 2025-01-31
       */
      end: string
      /**
       * Format: float64
       * @description Среднее количество заказов
       * @example 25.55
       */
      value: number
    }
    /** @description Данные по товару */
    TableItemSt: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 123456789
       */
      nmID: number
      /**
       * @description Является ли товар удалённым
       * @example false
       */
      isDeleted: boolean
      /**
       * @description Название предмета
       * @example Принтеры
       */
      subjectName: string
      /**
       * @description Название товара
       * @example Печатник 3000
       */
      name: string
      /**
       * @description Артикул продавца
       * @example pechatnik3000
       */
      vendorCode: string
      /**
       * @description Бренд
       * @example Компик
       */
      brandName: string
      /**
       * @description Ссылка на главное фото
       * @example https://basket-12.wbbasket.ru/vol1788/part178840/178840836/images/c246x328/1.webp
       */
      mainPhoto: string
      /**
       * @description Является ли товар размерным. Неразмерный товар имеет единственный размер, с `"techSize":"0"`
       * @example true
       */
      hasSizes: boolean
      /** @description Метрики товара */
      metrics: components['schemas']['TableCommonMetrics'] & {
        /** @description Текущая цена */
        currentPrice: {
          /**
           * Format: uint64
           * @description Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
           * @example 50
           */
          minPrice: number
          /**
           * Format: uint64
           * @description Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
           * @example 100
           */
          maxPrice: number
        }
        /**
         * @description Доступность товара:
         *       - `deficient` — Дефицит
         *       - `actual` — Актуальный
         *       - `balanced` — Баланс
         *       - `nonActual` — Неактуальный
         *       - `nonLiquid` — Неликвид
         *       - `invalidData` — Не рассчитано
         * @example deficient
         * @enum {string}
         */
        availability: 'deficient' | 'actual' | 'balanced' | 'nonActual' | 'nonLiquid' | 'invalidData'
      }
    }
    /** @description Параметры запроса об остатках по товарам */
    TableItemRequest: components['schemas']['CommonItemFilters'] & {
      /**
       * Format: uint32
       * @description Количество товаров в ответе
       * @default 100
       * @example 150
       */
      limit: number
      /**
       * Format: uint32
       * @description После какого элемента выдавать данные
       * @example 100
       */
      offset: number
    }
    /** @description Общие фильтры по товару */
    CommonItemFilters: {
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       111222333,
       *       444555666
       *     ]
       */
      nmIDs?: number[]
      /**
       * Format: int32
       * @description ID предмета
       * @example 123456
       */
      subjectID?: number
      /**
       * @description Бренд
       * @example Спортик
       */
      brandName?: string
      /**
       * Format: int64
       * @description ID ярлыка
       * @example 25345
       */
      tagID?: number
      currentPeriod: components['schemas']['PeriodInv']
      stockType: components['schemas']['StockType']
      /**
       * @description Скрыть удалённые товары
       * @example true
       */
      skipDeletedNm: boolean
      orderBy: components['schemas']['TableOrderBy']
      availabilityFilters: components['schemas']['availabilityFilters']
    }
    TableItemResponse: {
      /** @description Множество данных по товарам */
      items: components['schemas']['TableItemSt'][]
      currency: components['schemas']['Currency']
    }
    TableSizeRequest: components['schemas']['CommonSizeFilters'] & unknown
    /** @description Общие фильтры по размеру */
    CommonSizeFilters: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 123456789
       */
      nmID: number
      currentPeriod: components['schemas']['PeriodInv']
      stockType: components['schemas']['StockType']
      orderBy: components['schemas']['TableOrderBy']
      /**
       * @description Включить детализацию по складам
       * @example true
       */
      includeOffice: boolean
    }
    TableSizeResponse: {
      /** @description Множество данных по складам */
      offices?: components['schemas']['TableOfficeItem'][]
      /** @description Множество данных по размерам товара */
      sizes?: {
        /**
         * @description Название размера
         * @example 50
         */
        name: string
        /**
         * Format: uint64
         * @description ID размера
         * @example 123321
         */
        chrtID: number
        /** @description Склады */
        offices?: components['schemas']['TableOfficeItem'][]
        /** @description Метрики размера */
        metrics: components['schemas']['TableCommonMetrics'] & {
          /** @description Текущая цена */
          currentPrice: {
            /**
             * Format: uint64
             * @description Минимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
             * @example 50
             */
            minPrice: number
            /**
             * Format: uint64
             * @description Максимальная цена продавца со скидкой продавца (без учёта скидки WB Клуба)
             * @example 100
             */
            maxPrice: number
          }
        }
      }[]
      currency: components['schemas']['Currency']
    }
    /** @description Данные по складу */
    TableOfficeItem: {
      /**
       * @description Регион отгрузки. ]На данный момент](/release-notes?id=570) для складов WB может быть только `Склад WB`
       * @example Склад WB
       */
      regionName: string
      /**
       * Format: int64
       * @description ID склада. ]На данный момент](/release-notes?id=570) для складов WB может быть только `-999999`
       * @example -999999
       */
      officeID: number
      /**
       * @description Название склада. ]На данный момент](/release-notes?id=570) для складов WB может быть только `""`
       * @example
       */
      officeName: string
      /** @description Метрики склада */
      metrics: components['schemas']['TableCommonMetrics']
    }
    TableShippingOfficeRequest: components['schemas']['CommonShippingOfficeFilters'] & unknown
    /** @description Общие фильтры по регионам отгрузки */
    CommonShippingOfficeFilters: {
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       111222333,
       *       444555666
       *     ]
       */
      nmIDs?: number[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       123,
       *       456
       *     ]
       */
      subjectIDs?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "Эшк",
       *       "ЗлатА",
       *       "ОТК",
       *       "арк"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       123,
       *       456,
       *       789
       *     ]
       */
      tagIDs?: number[]
      currentPeriod: components['schemas']['PeriodInv']
      stockType: components['schemas']['StockType']
      /**
       * @description Скрыть удалённые товары
       * @example false
       */
      skipDeletedNm: boolean
    }
    TableShippingOfficeResponse: {
      /** @description Множество данных по регионам отгрузки */
      regions?: components['schemas']['TableShippingOfficeItem'][]
      currency: components['schemas']['Currency']
    }
    /** @description Данные по региону отгрузки */
    TableShippingOfficeItem: {
      /**
       * @description Регион отгрузки. ]На данный момент](/release-notes?id=570) для складов WB может быть только `Склад WB`
       * @example Склад WB
       */
      regionName: string
      /** @description Метрики по региону */
      metrics: components['schemas']['TableShippingOfficeMetrics']
      /**
       * @description Данные по складам. ]На данный момент](/release-notes?id=570) может быть только `[]`
       * @example []
       */
      offices: {
        /**
         * Format: int64
         * @description ID склада
         * @example 123456
         */
        officeID: number
        /**
         * @description Название склада
         * @example Коледино
         */
        officeName: string
        /** @description Метрики по складу */
        metrics: components['schemas']['TableShippingOfficeMetrics']
      }[]
    }
    /** @description Общие метрики по регионам/складам отгрузки */
    TableShippingOfficeMetrics: {
      /**
       * Format: uint64
       * @description Остатки на текущий день, шт.
       * @example 20
       */
      stockCount: number
      /**
       * Format: uint64
       * @description Остатки на текущий день, сумма
       * @example 20000
       */
      stockSum: number
      /**
       * @description Оборачиваемость текущих остатков. Особые случаи:
       *       1. `"hours":-1` — бесконечная длительность
       *       2. `"hours":-2` — нулевая длительность
       *       3. `"hours":-3` — нерассчитанная длительность
       */
      saleRate: {
        /**
         * Format: int32
         * @description Количество дней
         * @example 5
         */
        days: number
        /**
         * Format: int32
         * @description Количество часов
         * @example 15
         */
        hours: number
      }
      /**
       * Format: uint64
       * @description В пути к клиенту, шт.
       * @example 30
       */
      toClientCount: number
      /**
       * Format: uint64
       * @description В пути от клиента, шт.
       * @example 40
       */
      fromClientCount: number
    }
    ItemsRequest: {
      selectedPeriod: Record<string, never> & components['schemas']['DatePeriod']
      pastPeriod?: Record<string, never> & components['schemas']['DatePeriod']
      /**
       * @description Артикулы WB, по которым нужно составить отчёт. Оставьте пустым, чтобы получить отчёт обо всех товарах
       * @example [
       *       1234567
       *     ]
       */
      nmIds?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "nike",
       *       "adidas"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       64,
       *       334
       *     ]
       */
      subjectIds?: number[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       32,
       *       53
       *     ]
       */
      tagIds?: number[]
      /**
       * @description Скрыть удалённые товары
       * @example false
       */
      skipDeletedNm?: boolean
      orderBy?: components['schemas']['OrderBy']
      /**
       * Format: uint32
       * @description Количество карточек товара в ответе
       * @default 50
       * @example 231
       */
      limit: number
      /**
       * Format: uint32
       * @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
       * @default 0
       * @example 10
       */
      offset: number
    }
    ItemHistoryRequest: {
      selectedPeriod: Record<string, never> & components['schemas']['DatePeriod']
      /** @description Артикулы WB, по которым нужно составить отчёт */
      nmIds: number[]
      /** @description Скрыть удалённые товары */
      skipDeletedNm?: boolean
      aggregationLevel?: components['schemas']['Level']
    }
    GroupedHistoryRequest: {
      selectedPeriod: Record<string, never> & components['schemas']['DatePeriod']
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "nike",
       *       "adidas"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       64,
       *       334
       *     ]
       */
      subjectIds?: number[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       32,
       *       53
       *     ]
       */
      tagIds?: number[]
      /**
       * @description Скрыть удалённые товары
       * @example false
       */
      skipDeletedNm?: boolean
      aggregationLevel?: components['schemas']['Level']
    }
    ItemsResponse: {
      /** @description Список карточек товаров */
      products: {
        product: Record<string, never> & components['schemas']['Item']
        statistic: Record<string, never> & components['schemas']['Statistics']
      }[]
      currency: components['schemas']['Currency']
    }
    ItemHistoryResponse: {
      product: Record<string, never> & components['schemas']['HistoryItem']
      /** @description Статистика за период */
      history: components['schemas']['History'][]
      currency: components['schemas']['Currency']
    }[]
    /** @description Статистика */
    GroupedHistoryResponse: {
      product: Record<string, never> & components['schemas']['HistoryItem']
      /** @description Статистика за период */
      history: components['schemas']['History'][]
      currency: components['schemas']['Currency']
    }[]
    Item: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 268913787
       */
      nmId: number
      /**
       * Format: int64
       * @description Название карточки товара
       * @example Кроссовки для бега
       */
      title: string
      /**
       * @description Артикул продавца
       * @example 12345456
       */
      vendorCode: string
      /**
       * @description Бренд
       * @example Demix
       */
      brandName: string
      /**
       * Format: uint64
       * @description ID предмета
       * @example 105
       */
      subjectId: number
      /**
       * @description Название предмета
       * @example Кроссовки
       */
      subjectName: string
      /** @description Ярлыки */
      tags: components['schemas']['Tag'][]
      /**
       * Format: float32
       * @description Оценка карточки
       * @example 4.5
       */
      productRating: number
      /**
       * Format: float32
       * @description Оценка пользователей
       * @example 4
       */
      feedbackRating: number
      /** @description Остатки */
      stocks: {
        /**
         * Format: uint32
         * @description Общее количество остатков на складах WB на текущий день, шт.
         * @example 0
         */
        wb: number
        /**
         * Format: uint32
         * @description Общее количество остатков на складах продавца на текущий день, шт.
         * @example 0
         */
        mp: number
        /**
         * Format: uint32
         * @description Сумма остатков на складах на текущий день, шт.
         * @example 0
         */
        balanceSum: number
      }
    }
    HistoryItem: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 268913787
       */
      nmId: number
      /**
       * Format: int64
       * @description Название карточки товара
       * @example Кроссовки для бега
       */
      title: string
      /**
       * @description Артикул продавца
       * @example 12345456
       */
      vendorCode: string
      /**
       * @description Бренд
       * @example Demix
       */
      brandName: string
      /**
       * Format: uint64
       * @description ID предмета
       * @example 105
       */
      subjectId: number
      /**
       * @description Название предмета
       * @example Кроссовки
       */
      subjectName: string
    }
    /** @description Ярлык */
    Tag: {
      /**
       * Format: uint64
       * @description ID ярлыка
       * @example 1
       */
      id: number
      /**
       * @description Название ярлыка
       * @example Обувь
       */
      name: string
    }
    Statistics: {
      selected: Record<string, never> & components['schemas']['Statistic']
      past?: Record<string, never> & components['schemas']['Statistic']
      comparison?: Record<string, never> & components['schemas']['Comparison']
    }
    Conversions: {
      /**
       * Format: int
       * @description Конверсия в корзину. Какой процент посетителей, открывших карточку товара, добавили товар в корзину, %
       * @example 19
       */
      addToCartPercent: number
      /**
       * Format: int
       * @description Конверсия в заказ. Какой процент посетителей, добавивших товар в корзину, сделали заказ, %
       * @example 65
       */
      cartToOrderPercent: number
      /**
       * Format: int
       * @description Процент выкупа. Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю, %
       */
      buyoutPercent: number
    }
    Statistic: {
      period: unknown & components['schemas']['DatePeriod']
      /**
       * Format: uint32
       * @description Количество переходов в карточку товара
       * @example 45
       */
      openCount: number
      /**
       * Format: int32
       * @description Положили в корзину, шт.
       * @example 34
       */
      cartCount: number
      /**
       * Format: uint32
       * @description Заказали товаров, шт.
       * @example 19
       */
      orderCount: number
      /**
       * Format: uint32
       * @description Заказали на сумму
       * @example 1262
       */
      orderSum: number
      /**
       * Format: uint32
       * @description Выкупили товаров, шт.
       * @example 19
       */
      buyoutCount: number
      /**
       * Format: uint32
       * @description Выкупили на сумму
       * @example 1262
       */
      buyoutSum: number
      /**
       * Format: uint32
       * @description Отменили и вернули товаров, шт.
       * @example 0
       */
      cancelCount: number
      /**
       * Format: uint32
       * @description Отменили и вернули на сумму
       * @example 0
       */
      cancelSum: number
      /**
       * Format: uint32
       * @description Средняя цена
       * @example 1262
       */
      avgPrice: number
      /**
       * Format: float64
       * @description Среднее количество заказов в день, шт.
       * @example 0.04
       */
      avgOrdersCountPerDay: number
      /**
       * Format: float64
       * @description Доля в выручке
       * @example 3
       */
      shareOrderPercent: number
      /**
       * @description Добавили в **Отложенные**
       * @example 455
       */
      addToWishlist: number
      timeToReady: Record<string, never> & components['schemas']['TimeToReady']
      /**
       * @description Локальные заказы в рамках одного региона. ]На данный момент](/release-notes?id=570) может быть только `100`
       * @example 100
       */
      localizationPercent: number
      wbClub: Record<string, never> & components['schemas']['WbClubMetrics']
      conversions: Record<string, never> & components['schemas']['Conversions']
    }
    Comparison: {
      /**
       * Format: int
       * @description Динамика переходов в карточку товара
       * @example 10
       */
      openCountDynamic: number
      /**
       * Format: int
       * @description Динамика добавлений в корзину
       * @example 30
       */
      cartCountDynamic: number
      /**
       * Format: int
       * @description Динамика количества заказов
       * @example -100
       */
      orderCountDynamic: number
      /**
       * Format: int
       * @description Динамика суммы заказов
       * @example -100
       */
      orderSumDynamic: number
      /**
       * Format: int
       * @description Динамика выкупов
       * @example -100
       */
      buyoutCountDynamic: number
      /**
       * Format: int
       * @description Динамика суммы выкупов
       * @example -100
       */
      buyoutSumDynamic: number
      /**
       * Format: int
       * @description Динамика отмен и возвратов товаров
       * @example 0
       */
      cancelCountDynamic: number
      /**
       * Format: int
       * @description Динамика сумм отмен и возвратов товаров
       * @example 0
       */
      cancelSumDynamic: number
      /**
       * Format: int
       * @description Динамика среднего количества заказов в день
       * @example 0
       */
      avgOrdersCountPerDayDynamic: number
      /**
       * Format: int
       * @description Динамика средней цены на товары. Учитываются скидки для акций
       * @example -100
       */
      avgPriceDynamic: number
      /**
       * Format: int
       * @description Динамика доли в выручке
       * @example -80
       */
      shareOrderPercentDynamic: number
      /**
       * Format: int
       * @description Динамика добавлений товара в избранное
       * @example 60
       */
      addToWishlistDynamic: number
      timeToReadyDynamic: Record<string, never> & components['schemas']['TimeToReady']
      /**
       * Format: int
       * @description Динамика локальных заказов в рамках одного региона. ]На данный момент](/release-notes?id=570) может быть только `0`
       * @example 0
       */
      localizationPercentDynamic: number
      wbClubDynamic: Record<string, never> & components['schemas']['WbClubMetricsDynamic']
      conversions: Record<string, never> & components['schemas']['Conversions']
    }
    WbClubMetrics: {
      /**
       * Format: uint32
       * @description Заказали товаров с WB Клубом, шт.
       * @example 19
       */
      orderCount: number
      /**
       * Format: uint32
       * @description Заказали с WB Клубом на сумму
       * @example 1262
       */
      orderSum: number
      /**
       * Format: uint32
       * @description Выкупили с WB Клубом на сумму
       * @example 1262
       */
      buyoutSum: number
      /**
       * Format: uint32
       * @description Выкупили товаров с WB Клубом, шт.
       * @example 19
       */
      buyoutCount: number
      /**
       * Format: uint32
       * @description Отменили и вернули с WB Клубом на сумму
       * @example 0
       */
      cancelSum: number
      /**
       * Format: uint32
       * @description Отменили и вернули товаров с WB Клубом, шт.
       * @example 0
       */
      cancelCount: number
      /**
       * Format: uint32
       * @description Средняя цена с WB Клубом
       * @example 1262
       */
      avgPrice: number
      /**
       * Format: uint32
       * @description Процент выкупа с WB Клубом
       * @example 43
       */
      buyoutPercent: number
      /**
       * Format: float64
       * @description Среднее количество заказов с WB Клубом в день, шт.
       * @example 0.04
       */
      avgOrderCountPerDay: number
    }
    WbClubMetricsDynamic: {
      /**
       * Format: int
       * @description Динамика количества заказов с WB Клубом
       * @example -100
       */
      orderCount: number
      /**
       * Format: int
       * @description Динамика суммы заказов с WB Клубом
       * @example -100
       */
      orderSum: number
      /**
       * Format: int
       * @description Динамика суммы выкупов с WB Клубом
       * @example -100
       */
      buyoutSum: number
      /**
       * Format: int
       * @description Динамика выкупов с WB Клубом
       * @example -100
       */
      buyoutCount: number
      /**
       * Format: int
       * @description Динамика сумм отмен и возвратов товаров с WB Клубом
       * @example 0
       */
      cancelSum: number
      /**
       * Format: int
       * @description Динамика отмен и возвратов товаров с WB Клубом
       * @example 0
       */
      cancelCount: number
      /**
       * Format: int
       * @description Динамика средней цены на товары с WB Клубом
       * @example -100
       */
      avgPrice: number
      /**
       * Format: int
       * @description Динамика процента выкупа с WB Клубом
       * @example 43
       */
      buyoutPercent: number
      /**
       * Format: int
       * @description Динамика среднего количества заказов с WB Клубом в день
       * @example 0.04
       */
      avgOrderCountPerDay: number
    }
    TimeToReady: {
      /**
       * @description Дни
       * @example 1
       */
      days: number
      /**
       * @description Часы
       * @example 8
       */
      hours: number
      /**
       * @description Минуты
       * @example 34
       */
      mins: number
    }
    History: {
      /**
       * Format: date
       * @description Дата сбора статистики
       * @example 2024-10-23
       */
      date: string
      /**
       * Format: uint32
       * @description Количество переходов в карточку товара
       * @example 45
       */
      openCount: number
      /**
       * Format: uint32
       * @description Положили в корзину, шт.
       * @example 34
       */
      cartCount: number
      /**
       * Format: uint32
       * @description Заказали товаров, шт.
       * @example 19
       */
      orderCount: number
      /**
       * Format: uint32
       * @description Заказали на сумму
       * @example 1262
       */
      orderSum: number
      /**
       * Format: uint32
       * @description Выкупили товаров, шт.
       * @example 19
       */
      buyoutCount: number
      /**
       * Format: uint32
       * @description Выкупили на сумму
       * @example 1262
       */
      buyoutSum: number
      /**
       * Format: uint32
       * @description Процент выкупа
       * @example 35
       */
      buyoutPercent: number
      /**
       * Format: uint32
       * @description Конверсия в корзину. Какой процент посетителей, открывших карточку товара, добавили товар в корзину, %
       * @example 43
       */
      addToCartConversion: number
      /**
       * Format: uint32
       * @description Конверсия в заказ. Какой процент посетителей, добавивших товар в корзину, сделали заказ
       */
      cartToOrderConversion: number
      /**
       * Format: uint32
       * @description Количество добавлений товара в **Отложенные**
       */
      addToWishlistCount: number
    }
    DatePeriod: {
      /**
       * Format: date
       * @description Начало периода
       * @example 2023-06-01
       */
      start: string
      /**
       * Format: date
       * @description Конец периода
       * @example 2024-03-01
       */
      end: string
    }
    /**
     * @description Тип агрегации. Если не указано, то по умолчанию используется агрегация по дням. <br> Доступные уровни агрегации `day`, `week`
     * @default day
     * @example day
     * @enum {string}
     */
    Level: 'day' | 'week'
    /** @description Параметры сортировки */
    OrderBy: {
      /**
       * @description Поле для сортировки:
       *       - `openCard` — Перешли в карточку
       *       - `addToCart` — Положили в корзину
       *       - `orderCount` — Заказали товаров, шт
       *       - `orderSum` — Заказали на сумму
       *       - `buyoutCount` — Выкупили товаров, шт
       *       - `buyoutSum` — Выкупили на сумму
       *       - `cancelCount` — Отменили и вернули товаров, шт
       *       - `cancelSum` — Отменили и вернули на сумму
       *       - `avgPrice` — Средняя цена
       *       - `stockMpQty` — Остатки на складах продавца, шт
       *       - `stockWbQty` — Остатки на складах WB, шт
       *       - `shareOrderPercent` — Доля в выручке
       *       - `addToWishlist` — Добавили в **Отложенные**
       *       - `timeToReady` — Среднее время доставки
       *       - `localizationPercent` — Локальные заказы в рамках одного региона
       *       - `wbClub.orderCount` — Заказали товаров с WB Клубом, шт
       *       - `wbClub.orderSum` — Заказали с WB Клубом на сумму
       *       - `wbClub.buyoutSum` — Выкупили товаров с WB Клубом, шт
       *       - `wbClub.buyoutCount` — Процент выкупа с WB Клубом
       *       - `wbClub.cancelSum` — Отменили и вернули товаров с WB Клубом на сумму
       *       - `wbClub.avgPrice` — Средняя цена с WB Клубом
       *       - `wbClub.buyoutPercent` — Процент выкупа с WB Клубом
       *       - `wbClub.avgOrderCountPerDay` — Среднее количество заказов в день с WB Клубом, шт
       *       - `wbClub.cancelCount` — Отменили и вернули товаров с WB Клубом, шт
       * @default openCard
       * @example openCard
       * @enum {string}
       */
      field:
        | 'openCard'
        | 'addToCart'
        | 'orderCount'
        | 'orderSum'
        | 'buyoutCount'
        | 'buyoutSum'
        | 'cancelCount'
        | 'cancelSum'
        | 'avgPrice'
        | 'stockMpQty'
        | 'stockWbQty'
        | 'shareOrderPercent'
        | 'addToWishlist'
        | 'timeToReady'
        | 'localizationPercent'
        | 'wbClub.orderCount'
        | 'wbClub.orderSum'
        | 'wbClub.buyoutSum'
        | 'wbClub.cancelSum'
        | 'wbClub.buyoutCount'
        | 'wbClub.avgPrice'
        | 'wbClub.buyoutPercent'
        | 'wbClub.avgOrderCountPerDay'
        | 'wbClub.cancelCount'
      /**
       * @description Порядок сортировки:
       *       - `asc` — по возрастанию
       *       - `desc` — по убыванию
       * @default desc
       * @enum {string}
       */
      mode: 'asc' | 'desc'
    }
    /** @description Параметры запроса текущих остатков на складах WB */
    InventoryRequest: {
      /**
       * @description Артикулы WB
       * @example [
       *       111222333,
       *       47254354
       *     ]
       */
      nmIds?: number[]
      /**
       * @description ID размеров. Используется только для указанных в массиве `nmIds` артикулов
       * @example [
       *       111222333,
       *       91663228
       *     ]
       */
      chrtIds?: number[]
      /**
       * Format: uint32
       * @description Количество строк в ответе
       * @default 250000
       * @example 250000
       */
      limit: number
      /**
       * Format: uint32
       * @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
       * @default 0
       * @example 500000
       */
      offset: number
    }
    /** @description Текущие остатки товаров на складах WB */
    InventoryWbResponse: {
      /** @description Остатки товаров на складах WB по размерам */
      items: {
        /**
         * Format: int64
         * @description Артикул WB
         * @example 47254354
         */
        nmId: number
        /**
         * Format: uint64
         * @description ID размера
         * @example 91663228
         */
        chrtId: number
        /**
         * Format: int64
         * @description ID склада. ]На данный момент](/release-notes?id=570) может быть только `-999999`
         * @example -999999
         */
        warehouseId: number
        /**
         * @description Название склада. ]На данный момент](/release-notes?id=570) может быть только `Склад WB`
         * @example Склад WB
         */
        warehouseName: string
        /**
         * @description Регион отгрузки. ]На данный момент](/release-notes?id=570) может быть только `Склад WB`
         * @example Склад WB
         */
        regionName: string
        /**
         * Format: uint64
         * @description Количество товара на складе, доступное клиентам для добавления в корзину
         * @example 43
         */
        quantity: number
        /**
         * Format: uint64
         * @description В пути к клиенту
         * @example 14
         */
        inWayToClient: number
        /**
         * Format: uint64
         * @description В пути от клиента
         * @example 11
         */
        inWayFromClient: number
      }[]
    }
    /** @description Текущие остатки товаров на складах продавца */
    InventorySellerResponse: {
      /** @description Остатки товаров на складах продавца по размерам */
      items: {
        /**
         * Format: int64
         * @description Артикул WB
         * @example 47254354
         */
        nmId: number
        /**
         * Format: uint64
         * @description ID размера
         * @example 91663228
         */
        chrtId: number
        /**
         * Format: int64
         * @description ID склада
         * @example 123456
         */
        warehouseId: number
        /**
         * @description Название склада
         * @example склад продавца Иркутск
         */
        warehouseName: string
        /**
         * @description Регион отгрузки
         * @example Дальневосточный и Сибирский
         */
        regionName: string
        /**
         * Format: uint64
         * @description Количество товара на складе, доступное клиентам для добавления в корзину
         * @example 43
         */
        quantity: number
      }[]
    }
    /** @description Параметры запроса */
    ItemRatingRequest: {
      currentPeriod: components['schemas']['PeriodItemRating']
      pastPeriod?: components['schemas']['PastPeriodItemRating']
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       162579635,
       *       166699779
       *     ]
       */
      nmIds?: number[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       232,
       *       1364
       *     ]
       */
      subjectIds?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "Abikas",
       *       "Tike"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       3,
       *       5,
       *       6
       *     ]
       */
      tagIds?: number[]
      /**
       * @description Не возвращать товары без продаж:
       *       - `true` — да, возвращаются только товары с продажами за период, указанный в объекте `currentPeriod`
       *       - `false` — нет, возвращаются все товары, если не указаны другие параметры
       * @default false
       * @example true
       */
      isNotIncludeNmsWithoutSales: boolean
      /**
       * @description Возвращаются ли в ответе только скрытые товары:
       *       - `true` — да, возвращаются только скрытые из каталога товары
       *       - `false` — нет, возвращаются все товары, если не указаны другие параметры
       * @default false
       * @example true
       */
      onlyShadowedNms: boolean
      orderBy: components['schemas']['OrderByItemRating']
      /**
       * Format: uint32
       * @description Количество товаров в ответе
       * @default 100
       * @example 130
       */
      limit: number
      /**
       * Format: uint32
       * @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
       * @example 50
       */
      offset: number
    }
    /** @description Текущий период */
    PeriodItemRating: {
      /**
       * Format: date
       * @description Дата начала периода. Не ранее 364 суток от вчерашнего дня и не позднее `end`
       * @example 2026-02-10
       */
      start: string
      /**
       * Format: date
       * @description Дата окончания периода. Не ранее 364 суток от вчерашнего дня
       * @example 2026-02-10
       */
      end: string
    }
    /** @description Прошлый период для сравнения. Количество дней — меньше или равно `currentPeriod` */
    PastPeriodItemRating: {
      /**
       * Format: date
       * @description Дата начала периода. Не ранее 364 суток от вчерашнего дня и не позднее `end`
       * @example 2026-02-08
       */
      start: string
      /**
       * Format: date
       * @description Дата окончания периода. Не ранее 364 суток от вчерашнего дня и не позднее даты перед началом `currentPeriod`.
       * @example 2026-02-08
       */
      end: string
    }
    /** @description Параметры сортировки */
    OrderByItemRating: {
      /**
       * @description Поле для сортировки:
       *       - `feedbackRating` — Рейтинг товара по отзывам
       *       - `feedbackCount` — Все отзывы за период
       *       - `fiveStar` — Отзывы 5 звёзд
       *       - `fourStar` — Отзывы 4 звезды
       *       - `threeStar` — Отзывы 3 звезды
       *       - `twoStar` — Отзывы 2 звезды
       *       - `oneStar` — Отзывы 1 звезда
       *       - `disqualified` — Отзывы, исключённые из рейтинга
       * @example feedbackCount
       * @enum {string}
       */
      field:
        | 'feedbackRating'
        | 'feedbackCount'
        | 'fiveStar'
        | 'fourStar'
        | 'threeStar'
        | 'twoStar'
        | 'oneStar'
        | 'disqualified'
      /**
       * @description Порядок сортировки:
       *       - `asc` — по возрастанию
       *       - `desc` — по убыванию
       * @example desc
       * @enum {string}
       */
      mode: 'asc' | 'desc'
    }
    /** @description Данные ответа */
    ItemRatingResponse: {
      sellerRating: components['schemas']['TableItemFloat']
      feedbackIncrease: components['schemas']['FeedbacksIncreaseItem']
      /** @description Данные по товарам */
      items: components['schemas']['DistributionTableItem'][]
    }
    /** @description Рейтинг продавца */
    TableItemFloat: {
      /**
       * Format: float64
       * @description Текущий рейтинг
       * @example 3.56
       */
      current: number
      /**
       * Format: float64
       * @description Динамика по сравнению с предыдущим периодом, %
       * @example 0.03
       */
      dynamics?: number
    }
    /** @description Прирост оценок */
    FeedbacksIncreaseItem: {
      /**
       * @description Прирост оценок за период
       * @example 26
       */
      current: number
      /**
       * @description Всего оценок
       * @example 116
       */
      total: number
      /**
       * @description Динамика по сравнению с предыдущим периодом, %
       * @example 23
       */
      dynamics: number
      /** @description Отзывы 5 звёзд */
      fiveStar: {
        /**
         * @description Прирост оценок за период
         * @example 19
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 17
         */
        dynamics?: number
        /**
         * @description Всего оценок
         * @example 51
         */
        total: number
      }
      /** @description Отзывы 4 звезды */
      fourStar: {
        /**
         * @description Прирост оценок за период
         * @example 2
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 1
         */
        dynamics?: number
        /**
         * @description Всего оценок
         * @example 13
         */
        total: number
      }
      /** @description Отзывы 3 звезды */
      threeStar: {
        /**
         * @description Прирост оценок за период
         * @example 1
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 1
         */
        dynamics?: number
        /**
         * @description Всего оценок
         * @example 11
         */
        total: number
      }
      /** @description Отзывы 2 звезды */
      twoStar: {
        /**
         * @description Прирост оценок за период
         * @example 5
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 5
         */
        dynamics?: number
        /**
         * @description Всего оценок
         * @example 34
         */
        total: number
      }
      /** @description Отзывы 1 звезда */
      oneStar: {
        /**
         * @description Прирост оценок за период
         * @example -1
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example -1
         */
        dynamics?: number
        /**
         * @description Всего оценок
         * @example 7
         */
        total: number
      }
    }
    DistributionTableItem: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 123456789
       */
      nmId: number
      /**
       * @description Название товара
       * @example iPh 17 512 ГБ Серебристый
       */
      title: string
      /**
       * @description Артикул продавца
       * @example wb3ha2668w
       */
      vendorCode: string
      /**
       * Format: uint64
       * @description ID предмета
       * @example 50
       */
      subjectId: number
      /**
       * @description Название предмета
       * @example Phones
       */
      subjectName: string
      /**
       * @description Бренд
       * @example Attlee
       */
      brandName: string
      /**
       * @description Название ярлыка
       * @example Phones
       */
      tagName: string
      /**
       * Format: int64
       * @description ID ярлыка
       * @example 65
       */
      tagId: number
      /**
       * @description Отзыв закреплён
       * @example true
       */
      pinnedFeedback: boolean
      /**
       * Format: float64
       * @description Рейтинг карточки товара
       * @example 10
       */
      rating: number
      /** @description Рейтинг товара по отзывам */
      feedbackRating: {
        /**
         * Format: float64
         * @description Текущий рейтинг
         * @example 3.87
         */
        current: number
        /**
         * Format: float64
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 0.31
         */
        dynamics?: number
        /**
         * Format: float64
         * @description Сколько процентов товаров этого предмета у других продавцов имеют рейтинг ниже, чем у этого товара
         * @example 1.7
         */
        percentile: number | null
      }
      /** @description Все отзывы за период */
      feedbackCount: {
        /**
         * @description Прирост оценок за период
         * @example 12
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 9
         */
        dynamics?: number
      }
      /** @description Отзывы 5 звёзд */
      fiveStar: {
        /**
         * @description Прирост оценок за период
         * @example 9
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 7
         */
        dynamics?: number
      }
      /** @description Отзывы 4 звезды */
      fourStar: {
        /**
         * @description Прирост оценок за период
         * @example 0
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example -1
         */
        dynamics?: number
      }
      /** @description Отзывы 3 звезды */
      threeStar: {
        /**
         * @description Прирост оценок за период
         * @example 1
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 1
         */
        dynamics?: number
      }
      /** @description Отзывы 2 звезды */
      twoStar: {
        /**
         * @description Прирост оценок за период
         * @example 2
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 2
         */
        dynamics?: number
      }
      /** @description Отзывы 1 звезда */
      oneStar: {
        /**
         * @description Прирост оценок за период
         * @example 0
         */
        current: number
        /**
         * @description Динамика по сравнению с предыдущим периодом, %
         * @example 0
         */
        dynamics?: number
      }
      /**
       * @description Отзывы, исключённые из рейтинга
       * @example 7
       */
      disqualified: number
      /**
       * @description Является ли товар скрытым из каталога:
       *       - `true` — товар скрыт из каталога
       *       - `false` — товар не скрыт из каталога
       * @example true
       */
      isShadowed: boolean
    }
    ErrorObject: {
      /**
       * @description Заголовок ошибки
       * @example SKU not found
       */
      title: string
      /**
       * @description Детали ошибки
       * @example SKU xxx doesn't exist
       */
      detail: string
      /**
       * @description Уникальный ID запроса
       * @example fb25c9e9-cae8-52db-b68e-736c1466a3f5
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example analytic-open-api
       */
      origin: string
    }
    /**
     * @description Валюта отчёта
     * @example RUB
     */
    Currency: string
    OrderFeedRequest: {
      /** @description Запрашиваемый период. По дате текущего статуса заказа */
      selectedPeriod: {
        /**
         * Format: date-time
         * @description Дата и время начала периода. Не ранее 31 суток от текущей даты и не позднее `end`
         * @example 2026-07-23T00:00:00.00000+03:00
         */
        start: string
        /**
         * Format: date-time
         * @description Дата и время конца периода. Не ранее 31 суток от текущей даты
         * @example 2026-07-31T00:00:00.00000+03:00
         */
        end?: string
      }
      /**
       * @description Список артикулов WB для фильтрации
       * @example [
       *       162579635,
       *       166699779
       *     ]
       */
      nmIds?: number[]
      /**
       * @description Список ID предметов для фильтрации
       * @example [
       *       232,
       *       1364
       *     ]
       */
      subjectIds?: number[]
      /**
       * @description Список брендов для фильтрации
       * @example [
       *       "Abikas",
       *       "Tike"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Список ID ярлыков для фильтрации
       * @example [
       *       3,
       *       5,
       *       6
       *     ]
       */
      tagIds?: number[]
      /** @description Пагинация */
      pagination?: {
        /**
         * Format: date-time
         * @description Метка снимка данных, в рамках которого выполняется пагинация.<br>Данные отчёта обновляются асинхронно. Чтобы не пропускать и не дублировать заказы, запросы одной выборки должны быть с одним и тем же `snapshotTime`.<br>В первом запросе выборки (`"offset":0`) параметр не указывается, в каждом последующем запросе (`offset`>`0`) указывайте значение поля `snapshotTime` из ответа на <strong>первый</strong> запрос.<br>При изменении значений периода и фильтров начинайте выборку заново с `"offset":0` и без `snapshotTime`
         * @example 2026-07-28T15:04:05Z
         */
        snapshotTime?: string
        /**
         * Format: int32
         * @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
         * @default 0
         * @example 211
         */
        offset: number
        /**
         * Format: int32
         * @description Количество заказов в ответе
         * @default 50
         * @example 4030
         */
        limit: number
      }
    }
    /** @description Данные ответа */
    OrderFeedResponse: {
      /**
       * Format: date-time
       * @description Метка снимка данных, в рамках которого выполняется пагинация
       * @example 2026-07-03T15:04:05Z
       */
      snapshotTime: string
      currency: components['schemas']['Currency']
      /** @description Заказы */
      orders: components['schemas']['Order'][]
    }
    /** @description Заказ */
    Order: {
      /**
       * Format: int64
       * @description Артикул WB
       * @example 47254354
       */
      nmId: number
      /**
       * Format: uint64
       * @description ID размера
       * @example 91663228
       */
      chrtId: number
      /**
       * @description ID заказа
       * @example 7513432034713632943.1.0
       */
      srid: string
      /**
       * Format: date-time
       * @description Дата и время оформления заказа
       * @example 2026-06-24T12:57:26+03:00
       */
      createdAt: string
      /**
       * Format: date-time
       * @description Дата и время текущего статуса. При `"status":"created"` возвращается значение поля `createdAt`
       * @example 2026-06-26T19:19:38+03:00
       */
      updatedAt: string
      /**
       * @description Статус заказа:
       *       - `created` — оформлен
       *       - `buyout` — продан
       *       - `cancel` — отменён
       *       - `return` — возвращён
       *       - `returnDefective` — возвращён по причине брака
       * @example cancel
       * @enum {string}
       */
      status: 'created' | 'buyout' | 'cancel' | 'return' | 'returnDefective'
      /**
       * @description Тип отмены (при `"status":"cancel"`):
       *       - `app` — отказ до получения
       *       - `receipt` — отказ при получении
       *       - `expire` — истёк срок получения
       *       - `other` — техническая отмена
       * @example app
       * @enum {string}
       */
      cancelType?: 'app' | 'receipt' | 'expire' | 'other'
      /**
       * @description Название склада. ]На данный момент](/release-notes?id=570) для складов WB может быть только `Склад WB`
       * @example Склад WB
       */
      warehouseName: string
      /**
       * @description Федеральный округ склада. Если склад не в России, возвращается страна. ]На данный момент](/release-notes?id=570) для складов WB может быть только `""`
       * @example
       */
      warehouseRegion: string
      /**
       * @description Тип склада:
       *       - `true` — склад продавца
       *       - `false` — склад WB
       * @example true
       */
      isMp: boolean
      /**
       * @description Населённый пункт доставки
       * @example Санкт-Петербург
       */
      destinationCity: string
      /**
       * @description Федеральный округ доставки. Если доставка не по России, возвращается страна
       * @example Северо-Западный
       */
      destinationDistrict: string
      /**
       * Format: float64
       * @description Цена продавца со скидкой продавца (без учёта скидки WB Клуба и оптовой скидки для B2B-продаж)
       * @example 4328
       */
      sellerPrice: number
      /**
       * @description Тип продажи:
       *       - `true` — B2B
       *       - `false` — B2C
       * @example false
       */
      isB2b: boolean
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
    BadRequestErrorResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ErrorObject']
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
  postV3SalesFunnelProducts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: Record<string, never> & components['schemas']['ItemsResponse']
          }
        }
      }
      400: components['responses']['BadRequestErrorResponse']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3SalesFunnelProductsHistory: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemHistoryRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ItemHistoryResponse']
        }
      }
      400: components['responses']['BadRequestErrorResponse']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3SalesFunnelGroupedHistory: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GroupedHistoryRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['GroupedHistoryResponse']
          }
        }
      }
      400: components['responses']['BadRequestErrorResponse']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2NmReportDownloads: {
    parameters: {
      query?: {
        /** @description ID отчёта */
        'filter[downloadIds]'?: string[]
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
          'application/json': components['schemas']['NmReportGetReportsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Заголовок ошибки */
            title: string
            /** @description Детали ошибки */
            detail: string
            /** @description Уникальный ID запроса */
            requestId: string
            /** @description ID внутреннего сервиса WB */
            origin: string
          }
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2NmReportDownloads: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json':
          | components['schemas']['SalesFunnelItemReq']
          | components['schemas']['SalesFunnelGroupReq']
          | components['schemas']['SearchReportGroupReq']
          | components['schemas']['SearchReportItemReq']
          | components['schemas']['SearchReportTextReq']
          | components['schemas']['InventoryMetricsReportReq']
          | components['schemas']['InventoryHistoryReportReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['NmReportCreateReportResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Заголовок ошибки */
            title: string
            /** @description Детали ошибки */
            detail: string
            /** @description Уникальный ID запроса */
            requestId: string
            /** @description ID внутреннего сервиса WB */
            origin: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            components['schemas']['response429Download'] | components['schemas']['response429DownloadDaily']
        }
      }
    }
  }
  postV2NmReportDownloadsRetry: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['NmReportRetryReportRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['NmReportRetryReportResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Заголовок ошибки */
            title: string
            /** @description Детали ошибки */
            detail: string
            /** @description Уникальный ID запроса */
            requestId: string
            /** @description ID внутреннего сервиса WB */
            origin: string
          }
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2NmReportDownloadsFileDownloadId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID отчёта */
        downloadId: string
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
          'application/zip': string
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Заголовок ошибки */
            title: string
            /** @description Детали ошибки */
            detail: string
            /** @description Уникальный ID запроса */
            requestId: string
            /** @description ID внутреннего сервиса WB */
            origin: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2SearchReportReport: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['MainRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonResponseProperties'] & {
            data: components['schemas']['MainResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2SearchReportTableGroups: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TableGroupRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonResponseProperties'] & {
            data: components['schemas']['TableGroupResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2SearchReportTableDetails: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TableDetailsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonResponseProperties'] & {
            data: components['schemas']['TableDetailsResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2SearchReportProductSearchTexts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemSearchTextsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonResponseProperties'] & {
            data: components['schemas']['ItemSearchTextsResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2SearchReportProductOrders: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemOrdersRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonResponseProperties'] & {
            data: components['schemas']['ItemOrdersResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1StocksReportWbWarehouses: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['InventoryRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['InventoryWbResponse']
          }
        }
      }
      /** @description Нет данных */
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
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1StocksReportSellerWarehouses: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['InventoryRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['InventorySellerResponse']
          }
        }
      }
      /** @description Нет данных */
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
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2StocksReportProductsGroups: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TableGroupRequestSt']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['TableGroupResponseSt']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2StocksReportProductsProducts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TableItemRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['TableItemResponse']
          } | null
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2StocksReportProductsSizes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TableSizeRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['TableSizeResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2StocksReportOffices: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TableShippingOfficeRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['TableShippingOfficeResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2ItemRating: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ItemRatingRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['ItemRatingResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1OrderFeed: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['OrderFeedRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: components['schemas']['OrderFeedResponse']
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorObject403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
}
