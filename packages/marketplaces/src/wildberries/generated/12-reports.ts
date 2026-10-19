// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v1/supplier/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Заказы
     * @description Метод возвращает информацию о заказах.<br>Данные обновляются раз в 30 минут.<br><br>
     *
     *     1 строка = 1 заказ = 1 сборочное задание = 1 единица товара.<br>Для определения заказа рекомендуем использовать поле `srid`.<br><br>
     *
     *     Информация о заказе хранится 90 дней с момента оформления.<br><br>
     *
     *     В ответах могут отсутствовать заказы, по которым не подтверждена оплата. Например, заказы с отложенными платежами или оплатой в рассрочку. При этом, если по таким заказам есть продажи, вы можете получить их с помощью [детализаций к отчётам реализации](/openapi/documents-and-accounting#tag/financialReports).<br>
     *     Чтобы получить все оформленные заказы, используйте [Ленту заказов](/openapi/analytics#tag/orderFeed).
     *
     *     <div class="description_important">
     *       Данные этого отчёта являются предварительными и служат для оперативного мониторинга
     *     </div>
     *
     *     Для одного ответа на запрос с `flag=0` или без `flag` в системе установлено условное ограничение 80000 строк. Поэтому, чтобы получить все заказы, может потребоваться более, чем один запрос. Во втором и далее запросе в параметре `dateFrom` используйте полное значение поля `lastChangeDate` из последней строки ответа на предыдущий запрос.<br> Если в ответе отдаётся пустой массив `[]`, все заказы уже выгружены.<br><br>
     *
     *     В песочнице для параметров `dateFrom` и `dateTo` можно задать диапазон только за последние 4 месяца от текущей даты.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Базовый | 3 ч | 1 запрос | 3 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1SupplierOrders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/supplier/sales': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Продажи
     * @description Метод возвращает информацию о продажах и возвратах.<br>Данные обновляются раз в 30 минут.<br><br>
     *
     *     1 строка = 1 заказ = 1 сборочное задание = 1 единица товара.<br>Для определения заказа рекомендуем использовать поле `srid`.<br><br>
     *
     *     Информация о заказе хранится 90 дней с момента оформления.
     *
     *     <div class="description_important">
     *       Данные этого отчёта являются предварительными и служат для оперативного мониторинга
     *     </div>
     *
     *       - В ответах могут отсутствовать заказы, по которым не подтверждена оплата, даже если эти заказы есть в детализациях к отчётам реализации. Например, заказы с отложенными платежами или оплатой в рассрочку
     *       - Значения полей `priceWithDisc` и `forPay` рассчитываются по упрощённой логике и могут отличаться от `retail_price_withdisc_rub` и `ppvz_for_pay` соответственно в детализациях к отчётам реализации
     *       - Поля `finishedPrice`, `priceWithDisc`, `forPay` могут временно иметь значение `0`: данные заполняются асинхронно, актуализируются в течение 24 часов
     *       - Для заказов, которые оплачены в валюте, отличной от валюты продавца, возможны округления цен из-за конвертации валют
     *
     *     Для точных финансовых расчётов, сверки и отчётности используйте [детализации к отчётам реализации](/openapi/documents-and-accounting#tag/financialReports).<br><br>
     *
     *     Для одного ответа на запрос с `flag=0` или без `flag` в системе установлено условное ограничение 80000 строк. Поэтому, чтобы получить все продажи и возвраты, может потребоваться более, чем один запрос. Во втором и далее запросе в параметре `dateFrom `используйте полное значение поля `lastChangeDate` из последней строки ответа на предыдущий запрос.<br> Если в ответе отдаётся пустой массив `[]`, все продажи и возвраты уже выгружены.<br><br>
     *
     *     В песочнице для параметров `dateFrom` и `dateTo` можно задать диапазон только за последние 4 месяца от текущей даты.
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
     *     | Базовый | 2 ч | 1 запрос | 2 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1SupplierSales']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/excise-report': {
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
     * @description Метод возвращает отчёт с [операциями по товарам с обязательной маркировкой](https://seller.wildberries.ru/analytics-reports/excise-report).<br><br>
     *
     *     Данный отчёт можно сохранить в [формате таблиц](/knowledge-base/articles/019d49a4-650c-7b04-9596-ba441936f9d3).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 ч | 10 запросов | 30 мин | 10 запросов |
     *     | Сервисный | 5 ч | 10 запросов | 30 мин | 10 запросов |
     *     | Базовый с секретом | 5 ч | 10 запросов | 30 мин | 10 запросов |
     *     | Базовый | 24 ч | 2 запроса | 12 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1AnalyticsExciseReport']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/warehouse_remains': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Создать отчёт
     * @description Метод создаёт [задание на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdStatus) отчёта об [остатках на складах WB](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdDownload).<br><br>
     *
     *     Параметры `groupBy` и `filter` (группировки и фильтры) можно задать в любой комбинации — аналогично [версии](https://seller.wildberries.ru/analytics-reports/warehouse-remains) в личном кабинете.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 5 запросов |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 5 запросов |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1WarehouseRemains']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/warehouse_remains/tasks/{task_id}/status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Проверить статус
     * @description Метод возвращает статус [задания на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemains) отчёта об [остатках на складах WB](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdDownload).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 сек | 1 запрос | 5 сек | 5 запросов |
     *     | Сервисный | 5 сек | 1 запрос | 5 сек | 5 запросов |
     *     | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1WarehouseRemainsTasksTaskIdStatus']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/warehouse_remains/tasks/{task_id}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает отчёт об [остатках на складах WB](https://seller.wildberries.ru/analytics-reports/warehouse-remains) по ID [задания на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemains).
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
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1WarehouseRemainsTasksTaskIdDownload']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/measurement-penalties': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Удержания за занижение габаритов упаковки
     * @description Метод возвращает отчёт об [удержаниях за занижение габаритов упаковки](https://seller.wildberries.ru/analytics-reports/dimensions-penalties)
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
     *     | Базовый | 6 ч | 1 запрос | 6 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1MeasurementPenalties']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/warehouse-measurements': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Замеры склада
     * @description Метод возвращает отчёт о [замерах склада](https://seller.wildberries.ru/analytics-reports/dimensions-penalties/warehouse-measurements)
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
     *     | Базовый | 6 ч | 1 запрос | 6 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1WarehouseMeasurements']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/deductions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Подмены и неверные вложения
     * @description Метод возвращает отчёт об удержаниях за [подмены и неверные вложения](https://seller.wildberries.ru/analytics-reports/dimensions-penalties/retentions)
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
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Deductions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/antifraud-details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Самовыкупы
     * @description Метод возвращает отчёт об удержаниях за самовыкупы. Отчёт формируется каждую неделю по средам, до 7:00 по московскому времени, и содержит данные за одну неделю.<br><br>
     *
     *     Удержание за самовыкуп — 30% от стоимости товаров.<br>Минимальная сумма всех удержаний — 100 000 ₽, если за неделю в ПВЗ привезли ваших товаров больше, чем на сумму 100 000 ₽.<br><br>
     *
     *     Данные доступны с августа 2023.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 мин | 1 запрос | 10 мин | 10 запросов |
     *     | Сервисный | 10 мин | 1 запрос | 10 мин | 10 запросов |
     *     | Базовый с секретом | 10 мин | 1 запрос | 10 мин | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsAntifraudDetails']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/goods-labeling': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Маркировка товара
     * @description Метод возвращает отчёт о штрафах за отсутствие обязательной маркировки товаров.<br>
     *
     *     В отчёте представлены фотографии товаров, на которых маркировка отсутствует либо не считывается.<br><br>
     *
     *     Можно получить данные максимум за 31 день. Данные доступны с марта 2024.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsGoodsLabeling']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/acceptance_report': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Создать отчёт
     * @description Метод создаёт [задание на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdStatus) отчёта об [операциях при приёмке](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdDownload).<br><br>
     *
     *     Можно получить отчёт максимум за 31 день.
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
    get: operations['getV1AcceptanceReport']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/acceptance_report/tasks/{task_id}/status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Проверить статус
     * @description Метод возвращает статус [задания на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReport) отчёта об [операциях при приёмке](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdDownload).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 сек | 1 запрос | 5 сек | 1 запрос |
     *     | Сервисный | 5 сек | 1 запрос | 5 сек | 1 запрос |
     *     | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 1 запрос |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1AcceptanceReportTasksTaskIdStatus']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/acceptance_report/tasks/{task_id}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает отчёт об [операциях при приёмке](https://seller.wildberries.ru/analytics-reports/acceptance-report) по ID [задания на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReport).
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
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1AcceptanceReportTasksTaskIdDownload']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/paid_storage': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Создать отчёт
     * @description Метод создаёт [задание на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdStatus) отчёта о [платном хранении](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdDownload).<br><br>
     *
     *     Можно получить отчёт максимум за 8 дней.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 5 запросов |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 5 запросов |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1PaidStorage']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/paid_storage/tasks/{task_id}/status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Проверить статус
     * @description Метод возвращает статус [задания на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorage) отчёта о [платном хранении](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdDownload).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 сек | 1 запрос | 5 сек | 5 запросов |
     *     | Сервисный | 5 сек | 1 запрос | 5 сек | 5 запросов |
     *     | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 2 запроса |
     *     </div>
     */
    get: operations['getV1PaidStorageTasksTaskIdStatus']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/paid_storage/tasks/{task_id}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает отчёт о [платном хранении](https://seller.wildberries.ru/analytics-reports/paid-storage/storage) по ID [задания на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorage).
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
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1PaidStorageTasksTaskIdDownload']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/region-sale': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @deprecated
     * @description Метод будет отключен [3 ноября](https://dev.wildberries.ru/release-notes?id=590).
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
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsRegionSale']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/brand-share/brands': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Бренды продавца
     * @description Метод возвращает список брендов продавца для отчёта о [доле бренда в продажах](https://seller.wildberries.ru/analytics-reports/brand-share). <br><br>
     *
     *     Можно получить только бренды, которые:
     *     - Продавались за последние 90 дней
     *     - Есть в наличии, вне зависимости от склада хранения
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsBrandShareBrands']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/brand-share/parent-subjects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Родительские категории бренда
     * @description Метод возвращает родительские категории бренда продавца для отчёта о [доле бренда в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).<br><br>
     *
     *     Можно получить отчёт максимум за 365 дней. Данные доступны с 1 ноября 2022.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 сек | 1 запрос | 5 сек | 20 запросов |
     *     | Сервисный | 5 сек | 1 запрос | 5 сек | 20 запросов |
     *     | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 20 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsBrandShareParentSubjects']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/brand-share': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает отчёт о [доле бренда продавца в продажах](https://seller.wildberries.ru/analytics-reports/brand-share). <br><br>
     *
     *     Можно получить отчёт максимум за 365 дней. Данные доступны с 1 ноября 2022.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 5 сек | 1 запрос | 5 сек | 20 запросов |
     *     | Сервисный | 5 сек | 1 запрос | 5 сек | 20 запросов |
     *     | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 20 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsBrandShare']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/banned-products/blocked': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает список [заблокированных карточек товаров продавца](https://seller.wildberries.ru/analytics-reports/banned-products) с причинами блокировки.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 1 запрос | 10 сек | 6 запросов |
     *     | Сервисный | 10 сек | 1 запрос | 10 сек | 6 запросов |
     *     | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 6 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1AnalyticsBannedProducsBlocked']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/analytics/goods-return': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @deprecated
     * @description Метод будет отключен [26 октября](/release-notes?id=577).
     */
    get: operations['getV1AnalyticsGoodsReturn']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/analytics/v1/item-returns': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт
     * @description Метод возвращает отчёт о [возвратах товаров продавцу](https://seller.wildberries.ru/return-transfer-reports).
     */
    get: operations['getV1GoodsReturn']
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
    GoodsReturn200Response: {
      /** @description Общее количество возвратов за запрашиваемый период */
      count: number
      /** @description Отчёт */
      report: {
        /**
         * @description Баркод
         * @example 1680063403480
         */
        sku: string
        /**
         * @description Бренд
         * @example dub
         */
        brand: string
        /**
         * @description Дата и время выдачи возврата продавцу
         * @example 2025-03-31T11:33:53
         */
        completedDt: string | null
        /**
         * @description Адрес ПВЗ для выдачи возврата продавцу
         * @example Жуковский Улица Маяковского 19
         */
        dstOfficeAddress: string
        /**
         * @description Код маркировки [Честного знака](https://честныйзнак.рф/)
         * @example 0102900000376311210G2CIS?ehge)S91002A92F9Qof4FDo/31Icm14kmtuVYQzLypxm3HWkC1vQ/+pVVjm1dNAth1laFMoAGn7yEMWlTjxIe7lQnJqZ7TRZhlHQ==
         */
        kiz: string | null
        /**
         * @description ID ПВЗ для выдачи возврата продавцу
         * @example 310105
         */
        dstOfficeId: number
        /**
         * @description Дата и время истечения срока хранения возврата
         * @example 2025-03-31T11:33:53
         */
        expiredDt: string | null
        /**
         * @description Артикул WB
         * @example 12862181
         */
        nmId: number
        /**
         * Format: date
         * @description Дата заказа на возврат
         * @example 2024-08-26
         */
        orderDt: string
        /**
         * @description ID сборочного задания
         * @example 2034240826
         */
        orderId: number
        /**
         * @description Дата и время готовности возврата к выдаче
         * @example 2025-01-31T08:33:50
         */
        readyToReturnDt: string | null
        /**
         * @description Причина возврата.<br> Поле возвращается только при `"returnType":"Возврат неопознанного товара"`
         * @example Цвет
         */
        returnReason?: string
        /**
         * @description Тип возврата
         * @example Возврат заблокированного товара
         */
        returnType: string
        /**
         * @description Штрихкод
         * @example 23411783472
         */
        shkId: number
        /**
         * @description ID заказа на возврат
         * @example mp.123130940efa4d67af77f901594c7d2c.r
         */
        srid: string
        /**
         * @description Статус возврата
         * @example В пути в пвз
         */
        returnStatus: string
        /**
         * @description Стикер заказа на возврат
         * @example 33811984302
         */
        stickerId: string
        /**
         * @description Предмет
         * @example Багажные бирки
         */
        subjectName: string
        /**
         * @description Размер
         * @example 0
         */
        techSize: string
      }[]
    }
    OrdersItem: {
      /** @description Дата и время заказа. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=1. Если часовой пояс не указан, то берётся Московское время (UTC+3). */
      date?: string
      /** @description Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=0 или не указан. Если часовой пояс не указан, то берётся Московское время (UTC+3). */
      lastChangeDate?: string
      /** @description Склад отгрузки */
      warehouseName?: string
      /**
       * @description Тип склада хранения товаров
       * @enum {string}
       */
      warehouseType?: 'Склад WB' | 'Склад продавца'
      /** @description Страна */
      countryName?: string
      /** @description Округ */
      oblastOkrugName?: string
      /** @description Регион */
      regionName?: string
      /** @description Артикул продавца */
      supplierArticle?: string
      /** @description Артикул WB */
      nmId?: number
      /** @description Баркод */
      barcode?: string
      /** @description Категория */
      category?: string
      /** @description Предмет */
      subject?: string
      /** @description Бренд */
      brand?: string
      /** @description Размер товара */
      techSize?: string
      /** @description Номер поставки */
      incomeID?: number
      /** @description Договор поставки */
      isSupply?: boolean
      /** @description Договор реализации */
      isRealization?: boolean
      /** @description Цена без скидок */
      totalPrice?: number
      /** @description Скидка продавца, % */
      discountPercent?: number
      /** @description Скидка WB, % */
      spp?: number
      /** @description Цена с учетом всех скидок, кроме суммы по WB Кошельку */
      finishedPrice?: number
      /** @description Цена со скидкой продавца, в том числе со скидкой WB Клуба */
      priceWithDisc?: number
      /**
       * @description Отмена заказа:
       *       - `true` — заказ отменен
       */
      isCancel?: boolean
      /** @description Дата и время отмены заказа. Если заказ не был отменен, то "0001-01-01T00:00:00".Если часовой пояс не указан, то берётся Московское время UTC+3. */
      cancelDate?: string
      /** @description ID стикера */
      sticker?: string
      /** @description ID корзины покупателя. Заказы одной транзакции будут иметь одинаковый `gNumber` */
      gNumber?: string
      /**
       * @description Уникальный ID заказа.<br>
       *     Примечание для использующих API Маркетплейс: `srid` равен `rid` в ответах методов сборочных заданий.
       */
      srid?: string
    }
    SalesItem: {
      /** @description Дата и время продажи. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=1. Если часовой пояс не указан, то берётся Московское время (UTC+3). */
      date?: string
      /** @description Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=0 или не указан. Если часовой пояс не указан, то берётся Московское время (UTC+3). */
      lastChangeDate?: string
      /** @description Склад отгрузки */
      warehouseName?: string
      /**
       * @description Тип склада хранения товаров
       * @enum {string}
       */
      warehouseType?: 'Склад WB' | 'Склад продавца'
      /** @description Страна */
      countryName?: string
      /** @description Округ */
      oblastOkrugName?: string
      /** @description Регион */
      regionName?: string
      /** @description Артикул продавца */
      supplierArticle?: string
      /** @description Артикул WB */
      nmId?: number
      /** @description Баркод */
      barcode?: string
      /** @description Категория */
      category?: string
      /** @description Предмет */
      subject?: string
      /** @description Бренд */
      brand?: string
      /** @description Размер товара */
      techSize?: string
      /** @description Номер поставки */
      incomeID?: number
      /** @description Договор поставки */
      isSupply?: boolean
      /** @description Договор реализации */
      isRealization?: boolean
      /** @description Цена без скидок */
      totalPrice?: number
      /** @description Скидка продавца, % */
      discountPercent?: number
      /** @description Скидка WB, % */
      spp?: number
      /** @description Скидка за оплату WB Кошельком, ₽ */
      paymentSaleAmount?: number
      /** @description К перечислению продавцу.<br>Синхронизация данных занимает до 24 часов, в течение этого времени в поле может отображаться значение `0` */
      forPay?: number
      /** @description Фактическая цена с учётом всех скидок (к взиманию с покупателя).<br>Синхронизация данных занимает до 24 часов, в течение этого времени в поле может отображаться значение `0` */
      finishedPrice?: number
      /** @description Цена со скидкой продавца, в том числе со скидкой WB Клуба, от которой рассчитывается сумма к перечислению продавцу `forPay`.<br>Синхронизация данных занимает до 24 часов, в течение этого времени в поле может отображаться значение `0` */
      priceWithDisc?: number
      /**
       * @description Уникальный ID продажи/возврата
       *     - `S**********` — продажа
       *     - `R**********` — возврат (на склад WB)
       */
      saleID?: string
      /** @description ID стикера */
      sticker?: string
      /** @description ID корзины покупателя. Заказы одной транзакции будут иметь одинаковый `gNumber` */
      gNumber?: string
      /**
       * @description Уникальный ID заказа.<br>
       *     Примечание для использующих API Маркетплейс: `srid` равен `rid` в ответах методов сборочных заданий.
       */
      srid?: string
    }
    responseErrorStatistics: {
      errors?: string[]
    }
    responseErrorStatistics2: {
      errors?: string
    }
    /**
     * @example {
     *       "countries": [
     *         "AM",
     *         "RU"
     *       ]
     *     }
     */
    ExciseReportRequest: {
      /** @description Код стран по стандарту ISO 3166-2. Чтобы получить данные по всем странам, оставьте параметр пустым */
      countries?: ('AM' | 'BY' | 'KG' | 'KZ' | 'RU' | 'UZ')[]
    }
    ExciseReportResponse: {
      response?: components['schemas']['models.ExciseReportResponse']
    }
    'models.ExciseReportResponse': {
      data?: components['schemas']['models.ExciseReportResponseData']
    }
    'models.ExciseReportResponseData': {
      /**
       * @description Страна покупателя
       * @example Россия
       */
      name?: string
      /**
       * @description Цена товара, с НДС
       * @example 100
       */
      price?: number
      /**
       * @description Валюта
       * @example руб
       */
      currency_name_short?: string
      /**
       * @description Код маркировки
       * @example 0102900254680370215_Re/=lSbNiGD
       */
      excise_short?: string
      /**
       * @description Баркод
       * @example 2038893425820
       */
      barcode?: string
      /**
       * @description Артикул WB
       * @example 169085355
       */
      nm_id?: number
      /**
       * @description Тип операции, если есть:
       *
       *       * `1` — вывод из оборота
       *       * `2` — возврат в оборот
       * @example 1
       */
      operation_type_id?: number
      /**
       * @description Номер фискального документа (чека полного расчёта), если есть
       * @example 12345678
       */
      fiscal_doc_number?: number
      /**
       * @description Дата фискализации (дата в чеке), если есть, `ГГГГ-ММ-ДД`
       * @example 2024-01-01
       */
      fiscal_dt?: string
      /** @description Номер фискального накопителя, если есть */
      fiscal_drive_number?: string
      /**
       * @description `Rid`
       * @example 606217433440
       */
      rid?: number
      /**
       * @description `Srid`
       * @example 7513432034713632943.1.0
       */
      srid?: string
    }[]
    MeasurementPenalties: {
      /** @description Данные ответа */
      data: {
        /** @description Удержания */
        reports: {
          /**
           * @description Артикул WB
           * @example 123456789
           */
          nmId: number
          /**
           * @description Предмет
           * @example Костюмы спортивные
           */
          subjectName: string
          /**
           * @description ID замера
           * @example 123456789
           */
          dimId: number
          /**
           * @description Разница в габаритах, %
           * @example 130.71
           */
          prcOver: number
          /**
           * @description Объём, л (фактические габариты по замеру на складе)
           * @example 6.47
           */
          volume: number
          /**
           * @description Ширина, см (фактические габариты по замеру на складе)
           * @example 7
           */
          width: number
          /**
           * @description Длина, см (фактические габариты по замеру на складе)
           * @example 28
           */
          length: number
          /**
           * @description Высота, см (фактические габариты по замеру на складе)
           * @example 33
           */
          height: number
          /**
           * @description Объём, л (габариты карточки товара)
           * @example 4.95
           */
          volumeSup: number
          /**
           * @description Ширина, см (габариты карточки товара)
           * @example 8
           */
          widthSup: number
          /**
           * @description Длина, см (габариты карточки товара)
           * @example 33
           */
          lengthSup: number
          /**
           * @description Высота, см (габариты карточки товара)
           * @example 33
           */
          heightSup: number
          /**
           * @description Фото замеров
           * @example [
           *       "https://static-basket-09.wbbasket.ru/vol184/obmer-tovarov/measurement_on_table/wbs35154094220_em907759_n1_b2eaa5ed-bf21-4c58-b419-b5b5ec6f29ee.webp",
           *       "https://static-basket-09.wbbasket.ru/vol184/obmer-tovarov/measurement_on_table/wbs35159094420_em907759_n2_040407b0-7752-4ae7-a4a4-7ec016e86511.webp",
           *       "https://static-basket-09.wbbasket.ru/vol184/obmer-tovarov/measurement_on_table/wbs35189094220_em904757_n3_9f502e24-3b3e-4efd-9hac-802813046ac3.webp"
           *     ]
           */
          photoUrls: string[]
          /**
           * Format: date-time
           * @description Дата штрафа
           * @example 2025-06-02T00:00:00Z
           */
          dtBonus?: string
          /**
           * @description Статус обмера:
           *       - `false` — отменён
           *       - `true` — подтверждён
           * @example true
           */
          isValid?: boolean
          /**
           * Format: date-time
           * @description Дата и время подтверждения или отмены обмера
           * @example 2025-05-29T13:35:57Z
           */
          isValidDt?: string
          /**
           * @description Сумма сторно
           * @example 0
           */
          reversalAmount?: number
          /**
           * @description Сумма штрафа
           * @example 449.83
           */
          penaltyAmount?: number
          /**
           * Format: date-time
           * @description Дата и время начала действия коэффициента
           * @example 2025-05-09T13:35:57Z
           */
          dateStart?: string
          /**
           * Format: date-time
           * @description Дата и время окончания действия коэффициента
           * @example 2025-05-29T13:35:57Z
           */
          dateEnd?: string
        }[]
        /**
         * @description Количество удержаний в отчёте. Без учёта `limit` и `offset`
         * @example 11
         */
        total: number
      }
    }
    WHM: {
      /** @description Данные ответа */
      data: {
        /** @description Замеры */
        reports: {
          /**
           * @description Артикул WB
           * @example 123456789
           */
          nmId?: number
          /**
           * @description Предмет
           * @example
           */
          subjectName?: string
          /**
           * @description ID замера
           * @example 123456789
           */
          dimId?: number
          /** @description Объём, л */
          volume?: number
          /**
           * @description Ширина, см
           * @example 66
           */
          width?: number
          /**
           * @description Длина, см
           * @example 54
           */
          length?: number
          /**
           * @description Высота, см
           * @example 11
           */
          height?: number
          /**
           * @description Фото замеров
           * @example [
           *       "https://static-basket-03.wb.ru/vol54/handheld-goods-measurements-photo/8906416_a9f839da-c3b7-4ed6-737c-a9e731250fb0.jpg",
           *       "https://static-basket-03.wb.ru/vol54/handheld-goods-measurements-photo/8906416_2aac23b7-c8f9-42db-74e9-b4a9c916017c.jpg",
           *       "https://static-basket-03.wb.ru/vol54/handheld-goods-measurements-photo/8906416_ff93b7c4-19d6-e0a2-4dba-7c2f09f06b3.jpg"
           *     ]
           */
          photoUrls?: string[]
          /**
           * Format: date-time
           * @description Дата и время
           * @example 2025-04-01T00:06:00Z
           */
          dt?: string
        }[]
        /**
         * @description Количество замеров в отчёте. Без учёта `limit` и `offset`
         * @example 11
         */
        total: number
      }
    }
    Response400Retentions: {
      /**
       * @description Заголовок ошибки
       * @example bad request
       */
      title?: string
      /**
       * @description HTTP статус-код
       * @example 400
       */
      status?: number
      /**
       * @description Детали ошибки
       * @example invalid parameter: dateTo
       */
      detail?: string
      /**
       * @description Уникальный ID запроса
       * @example 31db50b5-14c0-4f4e-965e-6e1f9607ee78
       */
      requestId?: string
      /**
       * @description ID внутреннего сервиса WB
       * @example dimension-penalty
       */
      origin?: string
    }
    Response403Retentions: {
      /**
       * @description Заголовок ошибки
       * @example access denied
       */
      title?: string
      /**
       * @description HTTP статус-код
       * @example 403
       */
      status?: number
      /**
       * @description Детали ошибки
       * @example abac: access denied
       */
      detail?: string
      /**
       * @description Уникальный ID запроса
       * @example 31db50b5-14c0-4f4e-965e-6e1f9607ee78
       */
      requestId?: string
      /**
       * @description ID внутреннего сервиса WB
       * @example dimension-penalty
       */
      origin?: string
    }
    /**
     * @example [
     *       {
     *         "date": "2023-10-01",
     *         "logWarehouseCoef": 0,
     *         "officeId": 507,
     *         "warehouse": "Коледино",
     *         "warehouseCoef": 1.7,
     *         "giId": 123456,
     *         "chrtId": 1234567,
     *         "size": "0",
     *         "barcode": "",
     *         "subject": "Маски одноразовые",
     *         "brand": "1000 Каталог",
     *         "vendorCode": "Артикул_продавца",
     *         "nmId": 1234567,
     *         "volume": 12,
     *         "calcType": "короба: без габаритов",
     *         "warehousePrice": 7.65,
     *         "barcodesCount": 1,
     *         "palletPlaceCode": 0,
     *         "palletCount": 0,
     *         "originalDate": "2023-10-01",
     *         "loyaltyDiscount": 10,
     *         "tariffFixDate": "2023-10-01",
     *         "tariffLowerDate": "2023-11-01"
     *       }
     *     ]
     */
    ResponsePaidStorage: {
      /** @description Дата, за которую был расчёт или перерасчёт */
      date?: string
      /** @description Коэффициент логистики и хранения. ]На данный момент](/release-notes?id=570) может быть только `0` */
      logWarehouseCoef?: number
      /** @description ID склада. ]На данный момент](/release-notes?id=570) может быть только `0` */
      officeId?: number
      /** @description Название склада. ]На данный момент](/release-notes?id=570) может быть только `Склад WB РФ` */
      warehouse?: string
      /** @description Коэффициент хранения */
      warehouseCoef?: number
      /** @description ID поставки */
      giId?: number
      /**
       * Format: uint64
       * @description ID размера для этого артикула WB
       */
      chrtId?: number
      /** @description Размер (`techSize` в карточке товара) */
      size?: string
      /** @description Баркод */
      barcode?: string
      /** @description Предмет */
      subject?: string
      /** @description Бренд */
      brand?: string
      /** @description Артикул продавца */
      vendorCode?: string
      /** @description Артикул WB */
      nmId?: number
      /** @description Объём товара */
      volume?: number
      /** @description Способ расчёта */
      calcType?: string
      /** @description Сумма хранения */
      warehousePrice?: number
      /** @description Количество единиц товара (штук), подлежащих тарифицированию за расчётные сутки */
      barcodesCount?: number
      /** @description Код паллетоместа. ]На данный момент](/release-notes?id=570) может быть только `0` */
      palletPlaceCode?: number
      /** @description Количество паллет */
      palletCount?: number
      /** @description Если был перерасчёт, это дата первоначального расчёта. Если перерасчёта не было, совпадает с `date` */
      originalDate?: string
      /** @description Скидка программы лояльности, ₽ */
      loyaltyDiscount?: number
      /** @description Дата фиксации тарифа */
      tariffFixDate?: string
      /** @description Дата понижения тарифа */
      tariffLowerDate?: string
    }[]
    GetTasksResponse: {
      data?: components['schemas']['GetTasksResponseData']
    }
    GetTasksResponseData: {
      /** @description ID задания */
      id?: string
      /**
       * @description Статус задания:
       *       * `new` — новое
       *       * `processing` —  обрабатывается
       *       * `done` — отчёт готов
       *       * `purged` — отчёт удалён
       *       * `canceled` — отклонено
       */
      status?: string
    }
    CreateTaskResponse: {
      data?: components['schemas']['CreateTaskResponseData']
    }
    CreateTaskResponseData: {
      /** @description ID задания на генерацию */
      taskId?: string
    }
    '4XXResponse': {
      /** @description Детали ошибки */
      detail?: string
      /** @description ID внутреннего сервиса WB */
      origin?: string
      /** @description Уникальный ID запроса */
      requestId?: string
      /** @description Заголовок ошибки */
      title?: string
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
    /** @description Успешно */
    SuccessRegionSaleResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          report?: {
            /**
             * @description Населённый пункт
             * @example деревня Суханово
             */
            cityName?: string
            /**
             * @description Страна
             * @example Россия
             */
            countryName?: string
            /**
             * @description Федеральный округ
             * @example Центральный федеральный округ
             */
            foName?: string
            /**
             * @description Артикул WB
             * @example 177974431
             */
            nmID?: number
            /**
             * @description Регион
             * @example Московская область
             */
            regionName?: string
            /**
             * @description Артикул продавца
             * @example 112233445566778899
             */
            sa?: string
            /**
             * Format: float
             * @description К перечислению за товар, ₽
             * @example 592.11
             */
            saleInvoiceCostPrice?: number
            /**
             * Format: float
             * @description Доля, %
             * @example 43.0547333297454
             */
            saleInvoiceCostPricePerc?: number
            /**
             * @description Выкупили, шт.
             * @example 4
             */
            saleItemInvoiceQty?: number
          }[]
        }
      }
    }
    /** @description Успешно */
    SuccessTaskResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          details?: {
            /**
             * @description Артикул WB
             * @example 123456789
             */
            nmID?: number
            /**
             * @description Сумма заказа
             * @example 3540
             */
            sum?: number
            /**
             * @description Валюта заказа
             * @example RUB
             */
            currency?: string
            /**
             * @description Начало отчётного периода
             * @example 2023-08-23
             */
            dateFrom?: string
            /**
             * @description Конец отчётного периода
             * @example 2023-08-29
             */
            dateTo?: string
          }[]
        }
      }
    }
    /** @description Успешно */
    SuccessSubstIncorAttachResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data: {
            /** @description Удержания */
            reports: {
              /**
               * Format: date-time
               * @description Дата и время удержания
               * @example 2025-06-02T00:00:00Z
               */
              dtBonus?: string
              /**
               * @description Артикул WB
               * @example 544454
               */
              nmId?: number
              /**
               * @description Старый штрихкод
               * @example 26624352356
               */
              oldShkId?: number
              /**
               * @description Старый цвет
               * @example темно-синий,голубой
               */
              oldColor?: string
              /**
               * @description Старый размер
               * @example A
               */
              oldSize?: string
              /**
               * @description Старый баркод
               * @example 54532562
               */
              oldSku?: string
              /**
               * @description Старый артикул продавца
               * @example 23535 Стемпинг 500
               */
              oldVendorCode?: string
              /**
               * @description Новый штрихкод
               * @example 123333223
               */
              newShkId?: number
              /**
               * @description Новый цвет
               * @example темно-синий,голубой
               */
              newColor?: string
              /**
               * @description Новый размер
               * @example A
               */
              newSize?: string
              /**
               * @description Новый баркод
               * @example 12323332223
               */
              newSku?: string
              /**
               * @description Новый артикул продавца
               * @example wh-service-podmena
               */
              newVendorCode?: string
              /**
               * @description Сумма удержания
               * @example 247.5
               */
              bonusSumm?: number
              /**
               * @description Причина удержания
               * @example Подмена FBW
               */
              bonusType?: string
              /**
               * @description Фото замеров
               * @example [
               *       "https://static-basket-03.wb.ru/vol49/change_characteristics/19189882946-2023-12-15T10:18:21.125Z-1.webp",
               *       "https://static-basket-03.wb.ru/vol49/change_characteristics/19189052946-2023-12-15T10:18:35.249Z-2.webp"
               *     ]
               */
              photoUrls?: string[]
            }[]
            /**
             * @description Количество удержаний в отчёте. Без учёта `limit` и `offset`
             * @example 11
             */
            total: number
          }
        }
      }
    }
    /** @description Успешно */
    SuccessGoodsLabelingResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "report": [
         *         {
         *           "amount": 1500,
         *           "date": "2024-03-26T01:00:00Z",
         *           "incomeId": 18484008,
         *           "nmID": 49434732,
         *           "photoUrls": [
         *             "https://static-basket-03.{{ .baseDomain }}/vol54/photo-fixation-violation-shk-excise/12345678900-1811460999-1.jpg",
         *             "https://static-basket-03.{{ .baseDomain }}/vol54/photo-fixation-violation-shk-excise/12345678900-1811461000-2.jpg",
         *             "https://static-basket-03.{{ .baseDomain }}/vol54/photo-fixation-violation-shk-excise/12345678900-1811461001-3.jpg"
         *           ],
         *           "shkID": 17346434621,
         *           "sku": "4630153500834"
         *         }
         *       ]
         *     }
         */
        'application/json': {
          report?: {
            /** @description Сумма штрафа, руб */
            amount?: number
            /**
             * Format: date-time
             * @description Дата
             */
            date?: string
            /** @description Номер поставки */
            incomeId?: number
            /** @description Артикул WB */
            nmID?: number
            /** @description URL фото товара */
            photoUrls?: string[]
            /** @description Штрихкод товара в WB */
            shkID?: number
            /** @description Баркод из карточки товара */
            sku?: string
          }[]
        }
      }
    }
    /** @description Успешно */
    SuccessBrandsResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /**
           * @description Список брендов
           * @example [
           *       "1000 | Каталог",
           *       "1000 Каталог",
           *       "AndBerries",
           *       "H&M",
           *       "Mirtex",
           *       "PlayToday",
           *       "Test1",
           *       "WOW",
           *       "[\"Colambetta\"]",
           *       "dubs",
           *       "test",
           *       "Бест Трикотаж",
           *       "Тест"
           *     ]
           */
          data?: string[]
        }
      }
    }
    /** @description Успешно */
    SuccessParentsResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "data": [
         *         {
         *           "parentId": 3,
         *           "parentName": "Аксессуары"
         *         },
         *         {
         *           "parentId": 7,
         *           "parentName": "Игрушки"
         *         },
         *         {
         *           "parentId": 1,
         *           "parentName": "Одежда"
         *         },
         *         {
         *           "parentId": 239,
         *           "parentName": "Спортивный товар"
         *         }
         *       ]
         *     }
         */
        'application/json': {
          /** @description Категории бренда */
          data?: {
            /** @description ID родительской категории */
            parentId?: number
            /** @description Название родительской категории */
            parentName?: string
          }[]
        }
      }
    }
    /** @description Успешно */
    SuccessBrandShareResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "report": [
         *         {
         *           "applyDate": "2023-10-31",
         *           "brandRating": 5,
         *           "pricePercent": 0.68,
         *           "qtyPercent": 1
         *         },
         *         {
         *           "applyDate": "2023-11-01",
         *           "brandRating": 5,
         *           "pricePercent": 0.65,
         *           "qtyPercent": 0.99
         *         },
         *         {
         *           "applyDate": "2023-11-02",
         *           "brandRating": 4,
         *           "pricePercent": 0.74,
         *           "qtyPercent": 1.23
         *         },
         *         {
         *           "applyDate": "2023-11-03",
         *           "brandRating": 2,
         *           "pricePercent": 0.76,
         *           "qtyPercent": 1.39
         *         }
         *       ]
         *     }
         */
        'application/json': {
          /** @description Отчёт */
          report?: {
            /**
             * Format: ГГГГ-ММ-ДД
             * @description Дата
             */
            applyDate?: string
            /** @description Рейтинг бренда в родительской категории */
            brandRating?: number
            /**
             * Format: float
             * @description Доля от продаж в родительской категории — цена, %
             */
            pricePercent?: number
            /**
             * Format: float
             * @description Доля от продаж в родительской категории — количество, %
             */
            qtyPercent?: number
          }[]
        }
      }
    }
  }
  parameters: {
    /**
     * @description Если параметр `flag=0` (или не указан в строке запроса), при вызове API возвращаются данные,
     *     у которых значение поля `lastChangeDate` (дата время обновления информации в сервисе) больше переданному
     *     значению параметра `dateFrom`.
     *     При этом количество возвращенных строк данных варьируется в интервале от 0 до примерно 80000.
     *     <br>
     *     Если параметр `flag=1`, то будет выгружена информация обо всех заказах или продажах с датой,
     *     равной переданному параметру `dateFrom` (в данном случае время в дате значения не имеет).
     *     При этом количество возвращенных строк данных будет равно количеству всех заказов или продаж,
     *     сделанных в указанную дату, переданную в параметре `dateFrom`.
     */
    flag: number
    /**
     * @description Дата, которая входит в отчётный период, `ГГГГ-ММ-ДД`.
     *     <br/>
     *     Чтобы получить данные за всё время с августа 2023,  не указывайте этот параметр
     * @example 2023-12-01
     */
    Date: string
    /**
     * @description Начало отчётного периода, `ГГГГ-ММ-ДД`
     * @example 2025-02-28
     */
    DateFrom: string
    /**
     * @description Конец отчётного периода, `ГГГГ-ММ-ДД`
     * @example 2025-03-21
     */
    DateTo: string
    /** @description Начало отчётного периода, `ГГГГ-ММ-ДД` */
    DateFromGoodsLabeling: string
    /** @description Конец отчётного периода, `ГГГГ-ММ-ДД` */
    DateToGoodsLabeling: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV1SupplierOrders: {
    parameters: {
      query: {
        /**
         * @description Дата и время последнего изменения по заказу. <br>
         *     Дата в формате RFC3339. Можно передать дату или дату со временем.
         *     Время можно указывать с точностью до [секунд](./api-information#tag/introduction/Limity-zaprosov) или миллисекунд. <br>
         *     Время передаётся в часовом поясе Москва (UTC+3).
         *     <br>Примеры:
         *       - `2019-06-20`
         *       - `2019-06-20T23:59:59`
         *       - `2019-06-20T00:00:00.12345`
         *       - `2017-03-25T00:00:00`
         */
        dateFrom: string
        /**
         * @description Если параметр `flag=0` (или не указан в строке запроса), при вызове API возвращаются данные,
         *     у которых значение поля `lastChangeDate` (дата время обновления информации в сервисе) больше переданному
         *     значению параметра `dateFrom`.
         *     При этом количество возвращенных строк данных варьируется в интервале от 0 до примерно 80000.
         *     <br>
         *     Если параметр `flag=1`, то будет выгружена информация обо всех заказах или продажах с датой,
         *     равной переданному параметру `dateFrom` (в данном случае время в дате значения не имеет).
         *     При этом количество возвращенных строк данных будет равно количеству всех заказов или продаж,
         *     сделанных в указанную дату, переданную в параметре `dateFrom`.
         */
        flag?: components['parameters']['flag']
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
           * @example [
           *       {
           *         "date": "2022-03-04T18:08:31",
           *         "lastChangeDate": "2022-03-06T10:11:07",
           *         "warehouseName": "Склад WB РФ",
           *         "warehouseType": "Склад продавца",
           *         "countryName": "Россия",
           *         "oblastOkrugName": "Центральный федеральный округ",
           *         "regionName": "Московская",
           *         "supplierArticle": "12345",
           *         "nmId": 1234567,
           *         "barcode": "123453559000",
           *         "category": "Бытовая техника",
           *         "subject": "Мультистайлеры",
           *         "brand": "Тест",
           *         "techSize": "0",
           *         "incomeID": 56735459,
           *         "isSupply": false,
           *         "isRealization": true,
           *         "totalPrice": 1887,
           *         "discountPercent": 18,
           *         "spp": 26,
           *         "finishedPrice": 1145,
           *         "priceWithDisc": 1547,
           *         "isCancel": true,
           *         "cancelDate": "2022-03-09T00:00:00",
           *         "sticker": "926912515",
           *         "gNumber": "34343462218572569531",
           *         "srid": "11.rf9ef11fce1684117b0nhj96222982382.3.0"
           *       }
           *     ]
           */
          'application/json': components['schemas']['OrdersItem'][]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            components['schemas']['responseErrorStatistics'] | components['schemas']['responseErrorStatistics2']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SupplierSales: {
    parameters: {
      query: {
        /**
         * @description Дата и время последнего изменения по продаже/возврату. <br>
         *     Дата в формате RFC3339. Можно передать дату или дату со временем.
         *     Время можно указывать с точностью до [секунд](./api-information#tag/introduction/Limity-zaprosov) или миллисекунд. <br>
         *     Время передаётся в часовом поясе Москва (UTC+3).
         *     <br>Примеры:
         *       - `2019-06-20`
         *       - `2019-06-20T23:59:59`
         *       - `2019-06-20T00:00:00.12345`
         *       - `2017-03-25T00:00:00`
         */
        dateFrom: string
        /**
         * @description Если параметр `flag=0` (или не указан в строке запроса), при вызове API возвращаются данные,
         *     у которых значение поля `lastChangeDate` (дата время обновления информации в сервисе) больше переданному
         *     значению параметра `dateFrom`.
         *     При этом количество возвращенных строк данных варьируется в интервале от 0 до примерно 80000.
         *     <br>
         *     Если параметр `flag=1`, то будет выгружена информация обо всех заказах или продажах с датой,
         *     равной переданному параметру `dateFrom` (в данном случае время в дате значения не имеет).
         *     При этом количество возвращенных строк данных будет равно количеству всех заказов или продаж,
         *     сделанных в указанную дату, переданную в параметре `dateFrom`.
         */
        flag?: components['parameters']['flag']
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
           * @example [
           *       {
           *         "date": "2022-03-04T18:08:31",
           *         "lastChangeDate": "2022-03-06T10:11:07",
           *         "warehouseName": "Склад WB РФ",
           *         "warehouseType": "Склад продавца",
           *         "countryName": "Россия",
           *         "oblastOkrugName": "Центральный федеральный округ",
           *         "regionName": "Московская",
           *         "supplierArticle": "12345",
           *         "nmId": 1234567,
           *         "barcode": "123453559000",
           *         "category": "Бытовая техника",
           *         "subject": "Мультистайлеры",
           *         "brand": "Тест",
           *         "techSize": "0",
           *         "incomeID": 56735459,
           *         "isSupply": false,
           *         "isRealization": true,
           *         "totalPrice": 1887,
           *         "discountPercent": 18,
           *         "spp": 20,
           *         "paymentSaleAmount": 93,
           *         "forPay": 1284.01,
           *         "finishedPrice": 1145,
           *         "priceWithDisc": 1547,
           *         "saleID": "S9993700024",
           *         "sticker": "926912515",
           *         "gNumber": "34343462218572569531",
           *         "srid": "11.rf9ef11fce1684117b0nhj96222982382.3.0"
           *       }
           *     ]
           */
          'application/json': components['schemas']['SalesItem'][]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            components['schemas']['responseErrorStatistics'] | components['schemas']['responseErrorStatistics2']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1AnalyticsExciseReport: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-02-28
         */
        dateFrom: components['parameters']['DateFrom']
        /**
         * @description Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-03-21
         */
        dateTo: components['parameters']['DateTo']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ExciseReportRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ExciseReportResponse']
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
           *       "detail": "request body has an error: doesn't match schema #/components/schemas/ExciseReportRequest: Error at \"/countries/0\": value is not one of the allowed values [\"AM\",\"BY\",\"KG\",\"KZ\",\"RU\",\"UZ\"]",
           *       "origin": "tariffs",
           *       "requestId": "8bbd7db59522d09926dd059892dbeff0",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1WarehouseRemains: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `warehouseName`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский. Значения `warehouseName` на английском
         */
        locale?: string
        /** @description Разбивка по брендам */
        groupByBrand?: boolean
        /** @description Разбивка по предметам */
        groupBySubject?: boolean
        /** @description Разбивка по артикулам продавца */
        groupBySa?: boolean
        /** @description Разбивка по артикулам WB. Если `groupByNm=true`, в ответе будет поле `volume` */
        groupByNm?: boolean
        /** @description Разбивка по баркодам */
        groupByBarcode?: boolean
        /** @description Разбивка по размерам */
        groupBySize?: boolean
        /**
         * @description Фильтр по фото:
         *       - `-1` — без фото
         *       - `0` — не применять фильтр
         *       - `1` — с фото
         */
        filterPics?: number
        /**
         * @description Фильтр по объёму:
         *       - `-1` — без габаритов
         *       - `0` — не применять фильтр
         *       - `3` — свыше трёх литров
         */
        filterVolume?: number
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
          'application/json': components['schemas']['CreateTaskResponse']
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
           *       "detail": "parameter \"groupByNm\" in query has an error: empty value is not allowed",
           *       "origin": "api-statistics",
           *       "requestId": "6a6c2fba81f08e58670a7dab835ff0d7",
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1WarehouseRemainsTasksTaskIdStatus: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задания на генерацию */
        task_id: string
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
          'application/json': components['schemas']['GetTasksResponse']
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
           *       "detail": "Invalid format for parameter task_id: error unmarshaling '2f071556-ae39-492f-fd8cf1eb0d25' text as *uuid.UUID: invalid UUID length: 31",
           *       "origin": "api-statistics",
           *       "requestId": "52dd27a91a1a643feae7201b206462df",
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['4XXResponse']
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
           *       "detail": "not found",
           *       "origin": "api-statistics",
           *       "requestId": "c777731fc180f215a49c9896c2f1200d",
           *       "title": "Not Found"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1WarehouseRemainsTasksTaskIdDownload: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задания на генерацию */
        task_id: string
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
           * @example [
           *       {
           *         "brand": "Wonderful",
           *         "subjectName": "Фотоальбомы",
           *         "vendorCode": "41058/прозрачный",
           *         "nmId": 183804172,
           *         "barcode": "2037031652319",
           *         "techSize": "0",
           *         "volume": 1.33,
           *         "warehouses": [
           *           {
           *             "warehouseName": "В пути до получателей",
           *             "quantity": 14
           *           },
           *           {
           *             "warehouseName": "В пути возвраты на склад WB",
           *             "quantity": 4
           *           },
           *           {
           *             "warehouseName": "Всего находится на складах",
           *             "quantity": 267
           *           },
           *           {
           *             "warehouseName": "Склад WB РФ",
           *             "quantity": 134
           *           },
           *           {
           *             "warehouseName": "Склад WB СГТ РФ",
           *             "quantity": 10
           *           },
           *           {
           *             "warehouseName": "Минск",
           *             "quantity": 123
           *           }
           *         ]
           *       }
           *     ]
           */
          'application/json': {
            /**
             * @description Бренд
             * @example Wonderful
             */
            brand?: string
            /**
             * @description Название предмета
             * @example Фотоальбомы
             */
            subjectName?: string
            /**
             * @description Артикул продавца
             * @example 41058/прозрачный
             */
            vendorCode?: string
            /**
             * @description Артикул WB
             * @example 183804172
             */
            nmId?: number
            /**
             * @description Баркод
             * @example 2037031652319
             */
            barcode?: string
            /**
             * @description Размер
             * @example 0
             */
            techSize?: string
            /**
             * @description Объём, л
             * @example 1.33
             */
            volume?: number
            /** @description Остатки на складах и товары в пути. Будут в ответе только при ненулевом `quantity` */
            warehouses?: {
              /**
               * @description Название склада
               * @example Невинномысск
               */
              warehouseName?: string
              /**
               * @description Количество, шт.
               * @example 134
               */
              quantity?: number
            }[]
          }[]
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
          /**
           * @example {
           *       "detail": "Invalid format for parameter task_id: error unmarshaling '7b8875---9f03-46f1-af21-b9b4b22fe821' text as *uuid.UUID: invalid UUID format",
           *       "origin": "api-statistics",
           *       "requestId": "44bac63ab29c46cb2d49392e6604c1a0",
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['4XXResponse']
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
          /**
           * @example {
           *       "detail": "not found",
           *       "origin": "api-statistics",
           *       "requestId": "c777731fc180f215a49c9896c2f1200d",
           *       "title": "Not Found"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1MeasurementPenalties: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода. По умолчанию используется дата, когда были впервые получены данные для отчёта
         * @example 2025-02-01T15:00:00Z
         */
        dateFrom?: string
        /**
         * @description Конец отчётного периода
         * @example 2025-10-11T18:00:00Z
         */
        dateTo: string
        /** @description Количество удержаний в ответе */
        limit: number
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента */
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
          'application/json': components['schemas']['MeasurementPenalties']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Response400Retentions']
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
          'application/json': components['schemas']['Response403Retentions']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1WarehouseMeasurements: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода. По умолчанию используется дата, когда были впервые получены данные для отчёта
         * @example 2025-02-01T15:00:00Z
         */
        dateFrom?: string
        /**
         * @description Конец отчётного периода
         * @example 2025-10-11T18:00:00Z
         */
        dateTo: string
        /** @description Количество замеров в ответе */
        limit: number
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента */
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
          'application/json': components['schemas']['WHM']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Response400Retentions']
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
          'application/json': components['schemas']['Response403Retentions']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Deductions: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода. По умолчанию используются дата и время, когда были впервые получены данные для отчёта
         * @example 2025-02-01T15:00:00Z
         */
        dateFrom?: string
        /**
         * @description Конец отчётного периода
         * @example 2025-10-11T18:00:00Z
         */
        dateTo: string
        /**
         * @description Сортировка:
         *     - `nmId` — по артикулу WB
         *     - `dtBonus` — по дате и времени удержания
         *     - `bonusSumm` — по сумме удержания
         */
        sort?: 'nmId' | 'dtBonus' | 'bonusSumm'
        /**
         * @description Порядок выдачи:
         *     - `desc` — по убыванию
         *     - `asc` — по возрастанию
         */
        order?: 'desc' | 'asc'
        /** @description Количество удержаний в ответе */
        limit: number
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента */
        offset?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessSubstIncorAttachResponse']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Response400Retentions']
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
          'application/json': components['schemas']['Response403Retentions']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1AnalyticsAntifraudDetails: {
    parameters: {
      query?: {
        /**
         * @description Дата, которая входит в отчётный период, `ГГГГ-ММ-ДД`.
         *     <br/>
         *     Чтобы получить данные за всё время с августа 2023,  не указывайте этот параметр
         * @example 2023-12-01
         */
        date?: components['parameters']['Date']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessTaskResponse']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AnalyticsGoodsLabeling: {
    parameters: {
      query: {
        /** @description Начало отчётного периода, `ГГГГ-ММ-ДД` */
        dateFrom: components['parameters']['DateFromGoodsLabeling']
        /** @description Конец отчётного периода, `ГГГГ-ММ-ДД` */
        dateTo: components['parameters']['DateToGoodsLabeling']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessGoodsLabelingResponse']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AcceptanceReport: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-02-28
         */
        dateFrom: components['parameters']['DateFrom']
        /**
         * @description Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-03-21
         */
        dateTo: components['parameters']['DateTo']
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
          'application/json': components['schemas']['CreateTaskResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AcceptanceReportTasksTaskIdStatus: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задания на генерацию */
        task_id: string
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
          'application/json': components['schemas']['GetTasksResponse']
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
           *       "detail": "Invalid format for parameter task_id: error unmarshaling '7b8875---9f03-46f1-af21-b9b4b22fe821' text as *uuid.UUID: invalid UUID format",
           *       "origin": "api-statistics",
           *       "requestId": "44bac63ab29c46cb2d49392e6604c1a0",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
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
           *       "detail": "not found",
           *       "origin": "api-statistics",
           *       "requestId": "c777731fc180f215a49c9896c2f1200d",
           *       "title": "Not Found"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1AcceptanceReportTasksTaskIdDownload: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задания на генерацию */
        task_id: string
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
          'application/json': {
            /**
             * @description Количество товаров, шт.
             * @example 40
             */
            count?: number
            /**
             * Format: date
             * @description Дата создания поставки
             * @example 2025-03-04
             */
            giCreateDate?: string
            /**
             * @description Номер поставки
             * @example 11834106
             */
            incomeId?: number
            /**
             * @description Артикул WB
             * @example 123456789
             */
            nmID?: number
            /**
             * Format: date
             * @description Дата приёмки
             * @example 2025-03-14
             */
            shkCreateDate?: string
            /**
             * @description Предмет
             * @example Добавки пищевые
             */
            subjectName?: string
            /**
             * @description Суммарная стоимость приёмки, ₽ с копейками
             * @example 873.04
             */
            total?: number
          }[]
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
          /**
           * @example {
           *       "detail": "Invalid format for parameter task_id: error unmarshaling '2f071556-ae39-492f-fd8cf1eb0d25' text as *uuid.UUID: invalid UUID length: 31",
           *       "origin": "api-statistics",
           *       "requestId": "52dd27a91a1a643feae7201b206462df",
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['4XXResponse']
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
          /**
           * @example {
           *       "detail": "not found",
           *       "origin": "api-statistics",
           *       "requestId": "c777731fc180f215a49c9896c2f1200d",
           *       "title": "Not Found"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1PaidStorage: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода в формате RFC3339. Можно передать дату или дату со временем. Примеры:
         *
         *       * `2019-06-20`
         *       * `2019-06-20T23:59:59`
         *       * `2019-06-20T00:00:00.12345`
         *       * `2017-03-25T00:00:00`
         */
        dateFrom: string
        /**
         * @description Конец отчётного периода в формате RFC3339. Можно передать дату или дату со временем. Примеры:
         *
         *       * `2019-06-20`
         *       * `2019-06-20T23:59:59`
         *       * `2019-06-20T00:00:00.12345`
         *       * `2017-03-25T00:00:00`
         */
        dateTo: string
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
          'application/json': components['schemas']['CreateTaskResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1PaidStorageTasksTaskIdStatus: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задания на генерацию */
        task_id: string
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
          'application/json': components['schemas']['GetTasksResponse']
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
           *       "detail": "Invalid format for parameter task_id: error unmarshaling '2f071556-ae39-492f-fd8cf1eb0d25' text as *uuid.UUID: invalid UUID length: 31",
           *       "origin": "api-statistics",
           *       "requestId": "52dd27a91a1a643feae7201b206462df",
           *       "title": "Bad Request"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
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
           *       "detail": "not found",
           *       "origin": "api-statistics",
           *       "requestId": "c777731fc180f215a49c9896c2f1200d",
           *       "title": "Not Found"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1PaidStorageTasksTaskIdDownload: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID задания на генерацию */
        task_id: string
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
           * @example [
           *       {
           *         "date": "2023-10-01",
           *         "logWarehouseCoef": 0,
           *         "officeId": 0,
           *         "warehouse": "Склад WB РФ",
           *         "warehouseCoef": 1.7,
           *         "giId": 123456,
           *         "chrtId": 1234567,
           *         "size": "0",
           *         "barcode": "",
           *         "subject": "Маски одноразовые",
           *         "brand": "1000 Каталог",
           *         "vendorCode": "567383",
           *         "nmId": 1234567,
           *         "volume": 12,
           *         "calcType": "короба: без габаритов",
           *         "warehousePrice": 7.65,
           *         "barcodesCount": 1,
           *         "palletPlaceCode": 0,
           *         "palletCount": 0,
           *         "originalDate": "2023-03-01",
           *         "loyaltyDiscount": 10,
           *         "tariffFixDate": "2023-10-01",
           *         "tariffLowerDate": "2023-11-01"
           *       }
           *     ]
           */
          'application/json': components['schemas']['ResponsePaidStorage']
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
          /**
           * @example {
           *       "detail": "Invalid format for parameter task_id: error unmarshaling '7b8875---9f03-46f1-af21-b9b4b22fe821' text as *uuid.UUID: invalid UUID format",
           *       "origin": "api-statistics",
           *       "requestId": "44bac63ab29c46cb2d49392e6604c1a0",
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['4XXResponse']
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
          /**
           * @example {
           *       "detail": "not found",
           *       "origin": "api-statistics",
           *       "requestId": "c777731fc180f215a49c9896c2f1200d",
           *       "title": "Not Found"
           *     }
           */
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1AnalyticsRegionSale: {
    parameters: {
      query: {
        /**
         * @description Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-02-28
         */
        dateFrom: components['parameters']['DateFrom']
        /**
         * @description Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-03-21
         */
        dateTo: components['parameters']['DateTo']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessRegionSaleResponse']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AnalyticsBrandShareBrands: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessBrandsResponse']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AnalyticsBrandShareParentSubjects: {
    parameters: {
      query: {
        /**
         * @description Язык поля ответа `parentName`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         */
        locale?: string
        /** @description Бренд */
        brand: string
        /**
         * @description Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-02-28
         */
        dateFrom: components['parameters']['DateFrom']
        /**
         * @description Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-03-21
         */
        dateTo: components['parameters']['DateTo']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessParentsResponse']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AnalyticsBrandShare: {
    parameters: {
      query: {
        /** @description ID родительской категории */
        parentId: number
        /** @description Бренд */
        brand: string
        /**
         * @description Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-02-28
         */
        dateFrom: components['parameters']['DateFrom']
        /**
         * @description Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example 2025-03-21
         */
        dateTo: components['parameters']['DateTo']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SuccessBrandShareResponse']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AnalyticsBannedProducsBlocked: {
    parameters: {
      query: {
        /**
         * @description Сортировка
         *     - `brand` — по бренду
         *     - `nmId` — по артикулу WB
         *     - `title` — по наименованию товара
         *     - `vendorCode` — по артикулу продавца
         *     - `reason` — по причине блокировки
         */
        sort: 'brand' | 'nmId' | 'title' | 'vendorCode' | 'reason'
        /**
         * @description Порядок выдачи
         *     - `desc` — от наибольшего числового значения к наименьшему, от последнего по алфавиту значения к первому
         *     - `asc` — от наименьшего числового значения к наибольшему, от первого по алфавиту значения к последнему
         */
        order: 'desc' | 'asc'
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
          'application/json': {
            /** @description Отчёт */
            report?: {
              /**
               * @description Бренд
               * @example Тест22
               */
              brand?: string
              /**
               * @description Артикул WB
               * @example 82722944
               */
              nmId?: number
              /**
               * @description Наименование товара
               * @example Гуминовые кислоты - биоактивный противовирусный комплекс на
               */
              title?: string
              /**
               * @description Артикул продавца
               * @example пкdeир76
               */
              vendorCode?: string
              /**
               * @description Причина блокировки
               * @example Контактные данные Продавца и ссылки на иные сайты/группы/сообщества на фотографиях Товара
               */
              reason?: string
            }[]
          }
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
           *       "title": "bad request",
           *       "status": 400,
           *       "detail": "missing sort",
           *       "requestId": "94b52fca-8403-49fb-85dd-95dfb73160ad",
           *       "origin": "banreportsvc-api"
           *     }
           */
          'application/json': {
            /** @description Заголовок ошибки */
            title?: string
            /** @description HTTP статус-код */
            status?: number
            /** @description Детали ошибки */
            detail?: string
            /** @description Уникальный ID запроса */
            requestId?: string
            /** @description ID внутреннего сервиса WB */
            origin?: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1AnalyticsGoodsReturn: {
    parameters: {
      query: {
        /** @description Дата начала отчётного периода */
        dateFrom: string
        /** @description Дата окончания отчётного периода */
        dateTo: string
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
          'application/json': {
            /** @description Отчёт */
            report?: {
              /**
               * @description Баркод
               * @example 1680063403480
               */
              barcode?: string
              /**
               * @description Бренд
               * @example dub
               */
              brand?: string
              /**
               * @description Дата и время выдачи возврата продавцу
               * @example 2025-03-31T11:33:53
               */
              completedDt?: string | null
              /**
               * @description Адрес ПВЗ выдачи возврата
               * @example Жуковский Улица Маяковского 19
               */
              dstOfficeAddress?: string
              /**
               * @description ID ПВЗ выдачи возврата
               * @example 310105
               */
              dstOfficeId?: number
              /**
               * @description Дата и время истечения срока хранения возврата
               * @example 2025-03-31T11:33:53
               */
              expiredDt?: string | null
              /**
               * @description Тип статуса возврата:
               *
               *       * `0` — архивный
               *       * `1` — активный
               * @example 0
               * @enum {integer}
               */
              isStatusActive?: 0 | 1
              /**
               * @description Артикул WB
               * @example 12862181
               */
              nmId?: number
              /**
               * Format: date
               * @description Дата заказа на возврат
               * @example 2024-08-26
               */
              orderDt?: string
              /**
               * @description Номер сборочного задания
               * @example 2034240826
               */
              orderId?: number
              /**
               * @description Дата и время готовности возврата к выдаче
               * @example 2025-01-31T08:33:50
               */
              readyToReturnDt?: string | null
              /**
               * @description Причина возврата
               * @example Цвет
               */
              reason?: string
              /**
               * @description Тип возврата
               * @example Возврат заблокированного товара
               */
              returnType?: string
              /**
               * @description Штрихкод
               * @example 23411783472
               */
              shkId?: number
              /**
               * @description Уникальный ID заказа на возврат
               * @example ad3817664d3046c5a8d55054d8be96d6
               */
              srid?: string
              /**
               * @description Статус возврата
               * @example В пути в пвз
               */
              status?: string
              /**
               * @description Стикер заказа на возврат
               * @example 33811984302
               */
              stickerId?: string
              /**
               * @description Предмет
               * @example Багажные бирки
               */
              subjectName?: string
              /**
               * @description Размер
               * @example 0
               */
              techSize?: string
            }[]
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1GoodsReturn: {
    parameters: {
      query: {
        /** @description Дата начала отчётного периода */
        dateFrom: string
        /** @description Дата окончания отчётного периода */
        dateTo: string
        /**
         * @description Статус возврата:
         *       - `archive` — архивный
         *       - `active` — активный
         */
        status?: 'active' | 'archive'
        /** @description Количество возвратов в ответе */
        limit?: number
        /** @description Сколько элементов пропустить. Например, для значения 10 ответ начнется с 11 элемента */
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
          'application/json': components['schemas']['GoodsReturn200Response']
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
          'application/problem+json': components['schemas']['4XXResponse']
        }
      }
      401: components['responses']['401']
      429: components['responses']['429']
    }
  }
}
