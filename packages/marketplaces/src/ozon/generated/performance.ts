// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/client/campaign': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Список кампаний */
    get: operations['ListCampaigns']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}/objects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список продвигаемых объектов в кампании
     * @description Метод для получения списка продвигаемых объектов в кампаниях «Оплата за клик», «Баннеры» и «Видеобаннеры».
     *
     *     Чтобы получить товары в кампании «Оплата за заказ», используйте [POST /campaign/search_promo/v2/products](#operation/ExternalCampaign_ListSearchPromoProductsV2).
     */
    get: operations['ListCampaignObjects']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/limits/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Лимиты ставок для инструментов продвижения
     * @description Вы можете получить лимиты ставок по инструментам:
     *     - Оплата за заказ:
     *       - Минимальная и максимальная ставка для инструмента.
     *       - Минимальные ставки за заказ для некоторых категорий товаров.
     *     - Спецразмещение и Оплата за клик:
     *       - Минимальная и максимальная ставка за клик.
     *       - Минимальные ставки за клик для некоторых категорий товаров.
     */
    get: operations['GetLimitsList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/min/sku': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Минимальная ставка для товаров по SKU
     * @description Используйте метод, чтобы узнать минимальную ставку для одного или нескольких товаров по SKU.
     */
    post: operations['ExternalCampaign_BidBySKU']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/products_with_bonuses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список товаров с бонусами
     * @description Возвращает список SKU товаров, на которые начислены бонусы.
     *
     *     За клик на товар в первую очередь тратятся начисленные на него бонусы. Если бонусы кончились, тратится общий бюджет кампании.
     */
    get: operations['ExternalCampaign_ListProductsWithBonuses2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика по кампании
     * @description В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
     *     четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
     *
     *     Performance API асинхронный. Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор
     *     отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
     *     Формат отчёта — CSV.
     *
     *     Архивы с примерами отчётов для разных типов кампаний:
     *     - [Баннеры и нативные баннеры](https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/performance/api/report-examples/banner_example_1766144809.zip)
     *     - [Видеобаннеры](https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/performance/api/report-examples/videobanner_1705412072.zip)
     *     - [Оплата за клик](https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/performance/api/report-examples/stencils16-02_1770993970.zip)
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/json`.
     */
    post: operations['SubmitRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/video': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика по показам видеобаннера
     * @description В запросе укажите временной промежуток с помощью полей `dateFrom` и `dateTo`.
     *
     *     Performance API асинхронный. Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор
     *     отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
     *     Формат отчёта — CSV.
     *
     *     Отчёт содержит:
     *     - название;
     *     - идентификатор кампании;
     *     - период отчёта;
     *     - идентификатор баннера;
     *     - показы;
     *     - клики;
     *     - охват;
     *     - CTR;
     *     - доля видимых показов;
     *     - досмотры по квартилям: 25%, 50%, 75% и 100%;
     *     - доля досмотров: 25%, 50%, 75% и 100%;
     *     - просмотры со звуком;
     *     - заказы;
     *     - расход.
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/video/json`.
     */
    post: operations['VideoCampaignsSubmitRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/attribution': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отчёт по заказам
     * @description Метод для получения отчёта по заказам на баннеры.
     *
     *     В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
     *        четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
     *
     *     Performance API асинхронный. Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор
     *     отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
     *     Формат отчёта — CSV.
     *
     *     Отчёт содержит:
     *     - название,
     *     - идентификатор кампании,
     *     - период отчёта,
     *     - SKU,
     *     - названия товаров,
     *     - количество заказов,
     *     - выручка в рублях,
     *     - количество заказов модели,
     *     - выручка с заказов модели,
     *     - тип атрибуции.
     *
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/attribution/json`.
     */
    post: operations['AttributionSubmitRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/{UUID}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Cтатус отчёта */
    get: operations['StatisticsCheck']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список отчётов, сгенерированных через интерфейс
     * @description Метод для получения списка отчётов, которые сгенерированы через интерфейс рекламного кабинета.
     */
    get: operations['ListReports']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/externallist': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список отчётов, сгенерированных через API
     * @description Метод для получения списка отчётов, которые сгенерированы через API сервисными аккаунтами.
     */
    get: operations['ListReportsExternal']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/report': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёты
     * @description При успешном запросе ссылка на скачивание отчёта в формате CSV или ZIP появится в поле `link` при использовании метода [«Статус отчета»](#operation/StatisticsCheck).
     *
     *     Формат отчёта в заголовке ответа указан в поле `content-type`. Формат зависит от того, сколько кампаний в поле `campaigns` исходного запроса:
     *     - CSV — если в списке одна кампания.
     *     - ZIP-архив — если в списке несколько кампаний. Каждый файл соответствует одной кампании из списка. Имя файла вида `<идентификатор кампании>.csv`.
     */
    get: operations['DownloadStatistics']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/campaign/media': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по медийным кампаниям
     * @description В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
     *     четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
     *
     *     Формат отчёта — CSV.
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/campaign/media/json`.
     *
     *     Отчёт содержит:
     *     - идентификатор кампании,
     *     - название кампании,
     *     - формат кампании,
     *     - статус кампании,
     *     - дневной бюджет в рублях,
     *     - бюджет в рублях,
     *     - расход в рублях,
     *     - показы,
     *     - клики,
     *     - средняя цена 1000 показов в рублях,
     *     - отношение числа кликов к числу показов (CTR),
     *     - средняя цена клика в рублях,
     *     - заказы в штуках,
     *     - заказы после просмотра в штуках,
     *     - сумма заказов после просмотра,
     *     - доля рекламных расходов (ДРР),
     *     - сумма заказов,
     *     - тип оплаты,
     *     - тип бюджета.
     */
    get: operations['MediaCampaignList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/campaign/product': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по кампании Оплата за клик
     * @description <aside class="notice">
     *     Не расходует лимиты Performance API.
     *     </aside>
     *
     *     В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
     *     четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
     *
     *     Формат отчёта — CSV.
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/campaign/product/json`.
     *
     *     Отчёт содержит:
     *     - идентификатор кампании,
     *     - название кампании,
     *     - тип объекта,
     *     - статус кампании,
     *     - недельный бюджет в рублях,
     *     - бюджет в рублях,
     *     - расход в рублях,
     *     - показы,
     *     - клики,
     *     - количество добавлений товара в корзину,
     *     - отношение числа кликов к числу показов (CTR),
     *     - средняя цена клика в рублях,
     *     - заказы в штуках,
     *     - заказы в рублях,
     *     - доля рекламных расходов (ДРР),
     *     - тип продвижения,
     *     - места размещения для спецразмещения.
     */
    get: operations['ProductCampaignList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/expense': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по расходу кампаний
     * @description Если в запросе не указаны значения полей `dateFrom` и `dateTo`, то в ответе будет статистика за последние 7 дней.
     *
     *     Формат отчёта — CSV.
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/expense/json`.
     *
     *     Отчёт содержит:
     *     - идентификатор кампании,
     *     - дата,
     *     - название,
     *     - расход,
     *     - расход с абонентского счёта,
     *     - расход бонусов.
     */
    get: operations['GetCampaignExpense']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/daily': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Дневная статистика по кампаниям
     * @description Если в запросе не указаны значения полей `dateFrom` и `dateTo`, то в ответе будет статистика за последние 7 дней.
     *
     *     Формат отчёта — CSV.
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/daily/json`.
     *
     *     Отчёт содержит:
     *     - идентификатор кампании,
     *     - название кампании,
     *     - дата,
     *     - показы,
     *     - клики,
     *     - расход в рублях,
     *     - заказы в штуках,
     *     - заказы в рублях.
     */
    get: operations['GetCampaignDailyStats']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistic/orders/generate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить отчёт по заказам в оплате за заказ — выбранные товары
     * @description В параметрах запроса `from` и `to` укажите промежуток времени.
     *
     *     Performance API асинхронный.
     *     Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistic/orders/generate/json`.
     *
     *     Отчёт содержит:
     *     - период отчёта;
     *     - дату;
     *     - ID заказа;
     *     - номер заказа;
     *     - SKU;
     *     - SKU продвигаемого товара;
     *     - артикул;
     *     - наименование;
     *     - источник заказа;
     *     - количество;
     *     - стоимость, ₽;
     *     - ставку, %;
     *     - ставку, ₽;
     *     - расход, ₽.
     */
    post: operations['SearchPromoOrdersReportSubmitRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistic/products/generate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить отчёт по товарам в оплате за заказ — выбранные товары
     * @description В параметрах запроса `from` и `to` укажите промежуток времени.
     *
     *     Performance API асинхронный.
     *     Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistic/products/generate/json`.
     *
     *     Отчёт содержит:
     *     - период отчёта;
     *     - SKU;
     *     - артикул;
     *     - наименование;
     *     - категорию;
     *     - продвижение;
     *     - цену товара, ₽;
     *     - ставку, %;
     *     - ставку, ₽;
     *     - количество заказов;
     *     - сумму заказов, ₽;
     *     - расход, ₽;
     *     - продажи («Оплата за клик»), ₽;
     *     - расход («Оплата за клик»), ₽;
     *     - заказы («Оплата за клик»), шт;
     *     - в корзину;
     *     - ДРР, %;
     *     - последнее изменение.
     */
    post: operations['SearchPromoProductsReportSubmitRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/all_sku_promo/orders/generate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт по заказам в оплате за заказ — все товары
     * @description В параметрах запроса `timeBounds.from` и `timeBounds.to` укажите промежуток времени.
     *
     *     Performance API асинхронный.
     *     Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistics/all_sku_promo/orders/generate/json`.
     *
     *     Отчёт содержит:
     *     - период отчёта;
     *     - дату;
     *     - идентификатор заказа;
     *     - номер заказа;
     *     - SKU;
     *     - SKU продвигаемого товара;
     *     - артикул;
     *     - название товара;
     *     - количество;
     *     - стоимость, ₽;
     *     - стоимость продажи, ₽;
     *     - ставку, %;
     *     - ставку, ₽;
     *     - расход, ₽.
     */
    get: operations['GenerateAllSkuPromoOrdersReport']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/all_sku_promo/products/generate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отчёт по товарам в оплате за заказ — все товары
     * @description В параметрах запроса `timeBounds.from` и `timeBounds.to` укажите промежуток времени.
     *
     *     Performance API асинхронный.
     *     Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
     *
     *     Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistics/all_sku_promo/products/generate/json`.
     *
     *     Отчёт содержит:
     *     - дату;
     *     - статус продвижения: включено или выключено;
     *     - расход, ₽;
     *     - продажи из поиска, ₽;
     *     - продажи из рекомендаций, ₽;
     *     - количество заказов из поиска;
     *     - количество заказов из рекомендаций.
     */
    get: operations['GenerateAllSkuPromoProductsReport']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/phrases': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отчёт по поисковым запросам
     * @description Метод находится на стадии тестирования.<br><br>
     *     Отчёт можно сформировать только для кампаний с оплатой за клик с признаком `placement = PLACEMENT_TOP_PROMOTION`.<br><br>
     *     Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/phrases/json`.
     */
    post: operations['ExternalStatistics_StatisticsPhrasesSubmitRequest2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/statistics/products/sku': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить статистику по товарам в оплате за клик
     * @description <aside class="notice">
     *     Не расходует лимиты Performance API.
     *     </aside>
     */
    post: operations['SearchPromoProductsSKUStatistics2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/cpc/v2/product': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создать кампанию с оплатой за клики
     * @description Метод для создания товарной рекламной кампании с оплатой за клики.
     *
     *     При успешном выполнении запроса в поле `campaignId` ответа будет идентификатор созданной кампании.
     */
    post: operations['CreateProductCampaignCPCV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/external/api/dynamic_budget': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Рассчитать минимальный бюджет кампании
     * @deprecated
     * @description <aside class="warning">
     *     1 сентября 2025 года метод будет отключён. Теперь минимальный бюджет рассчитывается по формуле: <b>2&nbsp;000 рублей × 1 SKU</b>.
     *     </aside>
     */
    post: operations['CalculateDynamicBudget']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}/activate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Активировать кампанию */
    post: operations['ActivateCampaign']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}/deactivate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Выключить кампанию */
    post: operations['DeactivateCampaign']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /**
     * Параметры кампании
     * @description Метод для изменения параметров кампании.
     */
    patch: operations['PatchProductCampaign']
    trace?: never
  }
  '/api/client/campaign/{campaignId}/products': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Обновить ставки товаров
     * @description Этот метод перезаписывает список стоп-слов и фразы со ставками. Исходные стоп-слова и фразы со ставками удаляются.
     *
     *     Чтобы обновить ставки в кампании с размещением в карточке товара, передайте значения параметров `sku` и `bid`.
     *
     *     Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика».
     */
    put: operations['UpdateProducts']
    /**
     * Добавить товары в кампанию
     * @description В кампанию можно добавить не более 500 товаров.
     *
     *     **Рекомендации по заполнению параметров для разных кампаний**
     *
     *     - Для добавления в кампанию товаров передайте значения параметров `sku` и `bid`. Если параметр `bid` не указан,
     *       автоматически задаётся конкурентная ставка.
     *
     *     - Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика».
     *
     *     - Для кампании с включённой стратегией можно добавлять товары только из категории `autopilot.categoryId`.
     */
    post: operations['AddProducts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}/v2/products': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Список товаров кампании */
    get: operations['GetProductsV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}/products/delete': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Удалить товары из кампании */
    post: operations['DeleteProducts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/{campaignId}/products/bids/competitive': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Конкурентные ставки для товара
     * @description Если товар не добавлен в кампанию, в параметре `bid` будет значение `0`.
     *     В одном запросе вы можете передать до 200 товаров.
     */
    get: operations['GetProductsCompetitiveBids']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/search_promo/v2/products': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Список товаров в продвижении в оплате за заказ */
    post: operations['ExternalCampaign_ListSearchPromoProductsV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/search_promo/bids/recommendation': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Рекомендованные ставки для товаров
     * @deprecated
     * @description За один запрос вы можете передать до 200 SKU.
     */
    post: operations['ExternalCampaign_GetProductsRecommendedBids']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/search_promo/v2/bids/set': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить ставку на товар
     * @deprecated
     * @description Если товар ещё не добавлен в продвижение, система добавит его автоматически.
     *
     *     В одном запросе можно передать максимум 1000 товаров.
     */
    post: operations['ExternalCampaign_SetSearchPromoBidsV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/search_promo/get_cpo_min_bids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить фиксированные ставки для товаров
     * @description За один запрос вы можете передать до 200 SKU.
     */
    post: operations['ExternalCampaign_GetCPOMinBids']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/search_promo/product/enable': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Включить продвижение товара в оплате за заказ
     * @description В одном запросе можно передать максимум 1000 товаров.
     */
    post: operations['ExternalCampaign_BatchEnableProducts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/search_promo/product/disable': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отключить продвижение товара в оплате за заказ
     * @description В одном запросе можно передать максимум 1000 товаров.
     */
    post: operations['ExternalCampaign_BatchDisableProducts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/search_promo/v2/bids/delete': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Удалить товар из продвижения в оплате за заказ
     * @description В одном запросе можно передать максимум 1000 товаров.
     */
    post: operations['ExternalCampaign_DeleteSearchPromoBidsV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/all_sku_promo/activate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Включить продвижение в оплате за заказ — все товары */
    get: operations['ActivateAllSkuPromoCampaign']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/all_sku_promo/deactivate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Выключить продвижение в оплате за заказ — все товары */
    get: operations['DeactivateAllSkuPromoCampaign']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/all_sku_promo/set_bid': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Установить ставку для продвижения в Оплате за заказ — все товары
     * @description null
     */
    get: operations['SetAllSkuPromoCampaignBid2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/search_promo/carrots/enable': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Включить продвижение товаров в акции «Морковск»
     * @description Добавляет товары в акцию «Морковск».<br>
     *     [Подробнее об акции](https://seller-edu.ozon.ru/how-to-sell-effectively/advertising-of-goods/morkovsk)
     */
    post: operations['ExternalCampaign_BatchEnableCarrots4']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/campaign/search_promo/carrots/disable': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отключить продвижение товаров в акции «Морковск»
     * @description Удаляет товары из акции «Морковск».<br>
     *     [Подробнее об акции](https://seller-edu.ozon.ru/how-to-sell-effectively/advertising-of-goods/morkovsk)
     */
    post: operations['ExternalCampaign_BatchDisableCarrots4']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/vendors/statistics': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отчёт с аналитикой внешнего трафика
     * @description Метод для запуска формирования отчёта с аналитикой внешнего трафика.
     *
     *     Разница между `dateFrom` и `dateTo` должна быть не больше трёх месяцев. Если разница больше,
     *     отчёт сформируется за 3 месяца с даты, указанной в `dateFrom`.
     */
    post: operations['VendorStatisticsSubmitRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/vendors/statistics/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Список запрошенных отчётов с аналитикой внешнего трафика */
    get: operations['VendorStatisticsListReports']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/vendors/statistics/{UUID}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Информация об отчёте по UUID */
    get: operations['VendorStatisticsCheck']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/client/organisation/vendor_tag': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Метка организации для внешних рекламных кампаний
     * @description Метод возвращает [префикс для метки UTM_CAMPAIGN](https://docs.ozon.ru/performance/analytics/#как-создать-ссылку-с-utm-метками) по идентификатору организации.
     *
     *     [Подробнее о ссылках для внешних рекламных кампаний](https://docs.ozon.ru/performance/analytics/)
     */
    get: operations['GetVendorTag']
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
    /**
     * @example {
     *       "error": "text"
     *     }
     */
    rpcStatus: {
      /** @description Описание ошибки. */
      error?: string
    }
    /**
     * string
     * @description Тип оплаты:
     *     - `CPC` — за клики,
     *     - `CPM` — за показы,
     *     - `CPO` — за заказы.
     * @default CAMPAIGN_TYPE_INVALID
     */
    camptypeCampaignTypeInList: string
    /**
     * string
     * @description Состояние кампании:
     *     - `CAMPAIGN_STATE_RUNNING` — активная кампания;
     *     - `CAMPAIGN_STATE_PLANNED` — кампания, сроки проведения которой ещё не наступили;
     *     - `CAMPAIGN_STATE_STOPPED` — кампания, приостановленная из-за нехватки бюджета;
     *     - `CAMPAIGN_STATE_INACTIVE` — кампания, остановленная владельцем;
     *     - `CAMPAIGN_STATE_ARCHIVED` — архивная кампания;
     *     - `CAMPAIGN_STATE_MODERATION_DRAFT` — отредактированная кампания до отправки на модерацию;
     *     - `CAMPAIGN_STATE_MODERATION_IN_PROGRESS` — кампания, отправленная на модерацию;
     *     - `CAMPAIGN_STATE_MODERATION_FAILED` — кампания, непрошедшая модерацию;
     *     - `CAMPAIGN_STATE_FINISHED` — кампания завершена, дата окончания в прошлом, такую кампанию нельзя изменить, можно
     *     только клонировать или создать новую.
     * @default CAMPAIGN_STATE_UNKNOWN
     */
    extcampaignCampaignState: string
    /**
     * @description Статус кампании:
     *     - `AUTOSTOP_STATUS_NONE` — продавец создал кампанию вручную.
     *     - `AUTOSTOP_STATUS_ENABLED` — кампания создана автоматически и остановится, когда кончатся баллы.
     *     - `AUTOSTOP_STATUS_DISABLED` — кампания создана автоматически, но она не остановится, когда кончатся баллы.
     *     - `AUTOSTOP_STATUS_STOPPED` — баллы закончились, кампания остановлена автоматически.
     * @default AUTOSTOP_STATUS_NONE
     * @enum {string}
     */
    advcamptypeAutostopStatus:
      'AUTOSTOP_STATUS_NONE' | 'AUTOSTOP_STATUS_ENABLED' | 'AUTOSTOP_STATUS_DISABLED' | 'AUTOSTOP_STATUS_STOPPED'
    /**
     * @description Место размещения продвигаемых товаров:
     *     - `PLACEMENT_INVALID` — не определено.
     *     - `PLACEMENT_PDP` — карточка товара. Доступно только для кампаний с ручным управлением.
     *     - `PLACEMENT_SEARCH_AND_CATEGORY` — поиск и рекомендации.
     *     - `PLACEMENT_TOP_PROMOTION` — поиск.
     *     - `PLACEMENT_OVERTOP` — поиск и главная (Спецразмещение).
     *     - `PLACEMENT_TAKEOVER` — одновременный показ товаров на первых 4 плитках.
     *     - `PLACEMENT_TILE_MAIN` — главная, нативный баннер.
     * @default PLACEMENT_INVALID
     * @enum {string}
     */
    extcampaignProductCampaignInListPlacement:
      | 'PLACEMENT_INVALID'
      | 'PLACEMENT_PDP'
      | 'PLACEMENT_SEARCH_AND_CATEGORY'
      | 'PLACEMENT_TOP_PROMOTION'
      | 'PLACEMENT_OVERTOP'
      | 'PLACEMENT_TAKEOVER'
      | 'PLACEMENT_TILE_MAIN'
    /** @description Информация о кампании. Возвращается, если в параметре `productAutopilotStrategy` включена стратегия. */
    extcampaignCampaignAutopilotProperties: {
      /**
       * Format: uint64
       * @description Идентификатор категории.
       */
      categoryId?: string
      /**
       * @description Разрешение на автоматическое добавление товаров категории, указанной в `categoryId`, в кампании со стратегией `MAX_VIEWS`:
       *
       *     - `PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN` — стратегия добавления товаров в кампанию не установлена;
       *     - `PRODUCT_CAMPAIGN_SKU_ADD_MODE_MANUAL` — добавлять товары в кампанию можно только вручную;
       *     - `PRODUCT_CAMPAIGN_SKU_ADD_MODE_AUTO` — можно добавлять товары категории `categoryId` в кампанию автоматически.
       *
       *     Если тип разрешения пустой или было передано `PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN`, добавлять товары в кампанию можно только вручную.
       *
       *     Для кампаний без стратегии `MAX_VIEWS` возвращается значение `PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN`.
       * @enum {string}
       */
      skuAddMode?:
        | 'PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN'
        | 'PRODUCT_CAMPAIGN_SKU_ADD_MODE_MANUAL'
        | 'PRODUCT_CAMPAIGN_SKU_ADD_MODE_AUTO'
    }
    extcampaignCampaignInList: {
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      id?: string
      paymentType?: components['schemas']['camptypeCampaignTypeInList']
      /** @description Название кампании. */
      title?: string
      state?: components['schemas']['extcampaignCampaignState']
      /**
       * @description Тип рекламируемой кампании:
       *       - `SKU` — Оплата за клик;
       *       - `BANNER` — Баннерная рекламная кампания;
       *       - `SEARCH_PROMO` — Оплата за заказ;
       *       - `VIDEO_BANNER` — Видеобаннер.
       */
      advObjectType?: string
      /** @description Дата старта рекламной кампании. */
      fromDate?: string
      /** @description Дата завершения рекламной кампании. */
      toDate?: string
      autostopStatus?: components['schemas']['advcamptypeAutostopStatus']
      /** @description `true`, если кампания создана автоматически. */
      isAutocreated?: boolean
      /**
       * Format: uint64
       * @description Бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      budget?: string
      /**
       * Format: uint64
       * @description Дневной бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      dailyBudget?: string
      /**
       * Format: uint64
       * @description Недельный бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      weeklyBudget?: string
      placement?: components['schemas']['extcampaignProductCampaignInListPlacement']
      /**
       * @description Стратегия, которая используется для кампании:
       *     - `MAX_VIEWS` — максимальное количество показов;
       *     - `MAX_CLICKS` — автостратегия для Поиска и рекомендаций;
       *     - `TOP_MAX_CLICKS` — автостратегия для Поиска;
       *     - `TAKEOVER` — спецразмещение для Поиска;
       *     - `TOP_PROMOTION` — вывод в топ;
       *     - `TARGET_BIDS` — средняя стоимость клика для Поиска и рекомендаций;
       *     - `TARGET_CIR` — целевой расход;
       *     - `NO_AUTO_STRATEGY` — автостратегия не используется.
       * @default NO_AUTO_STRATEGY
       * @enum {string}
       */
      productAutopilotStrategy:
        | 'MAX_VIEWS'
        | 'MAX_CLICKS'
        | 'TOP_MAX_CLICKS'
        | 'NO_AUTO_STRATEGY'
        | 'TAKEOVER'
        | 'TOP_PROMOTION'
        | 'TARGET_BIDS'
        | 'TARGET_CIR'
      autopilot?: components['schemas']['extcampaignCampaignAutopilotProperties']
      /**
       * Format: date-time
       * @description Дата создания кампании в формате RFC3339.
       */
      createdAt?: string
      /**
       * Format: date-time
       * @description Дата обновления кампании в формате RFC3339.
       */
      updatedAt?: string
      /**
       * @description Режим создания и управления товарной рекламной кампанией:
       *     - `PRODUCT_CAMPAIGN_MODE_AUTO` — автоматически;
       *     - `PRODUCT_CAMPAIGN_MODE_MANUAL` — вручную.
       * @default PRODUCT_CAMPAIGN_MODE_AUTO
       * @enum {string}
       */
      productCampaignMode: 'PRODUCT_CAMPAIGN_MODE_AUTO' | 'PRODUCT_CAMPAIGN_MODE_MANUAL'
    }
    extcampaignCampaignsList: {
      /** @description Список кампаний. */
      list?: components['schemas']['extcampaignCampaignInList'][]
    }
    extcampaignCampaignObject: {
      /**
       * Format: uint64
       * @description Идентификатор рекламируемого объекта:
       *     - SKU — для рекламы товаров в спонсорских полках и в каталоге;
       *     - числовой идентификатор — для баннерных кампаний.
       */
      id?: string
    }
    extcampaignCampaignObjectsList: {
      /** @description Список идентификаторов рекламируемых объектов. */
      list?: components['schemas']['extcampaignCampaignObject'][]
    }
    extcampaignCategoriesLimits: {
      /**
       * Format: double
       * @description Ставка в рублях.
       */
      bid?: number
      /** @description Категория товара. */
      category?: string
    }
    extcampaignLimitsData: {
      /** @description Минимальная ставка для категории второго уровня. Если категории нет в списке, применяется минимальная ставка для инструмента. */
      categories?: components['schemas']['extcampaignCategoriesLimits'][]
      /**
       * Format: double
       * @description Максимальная ставка в рублях.
       */
      maxBid?: number
      /**
       * Format: double
       * @description Минимальная ставка в рублях.
       */
      minBid?: number
      /**
       * @description Тип инструмента:
       *     - `SKU` — Оплата за клик,
       *     - `SEARCH_PROMO` — Оплата за заказ.
       * @enum {string}
       */
      objectType?: 'SKU' | 'SEARCH_PROMO'
      /**
       * @description Способ оплаты:
       *     - `CPO` — оплата за заказ,
       *     - `CPC` — оплата за клик,
       *     - `CPM` — оплата за 1000 показов.
       * @enum {string}
       */
      paymentMethod?: 'CPO' | 'CPC' | 'CPM'
      /**
       * @description Тип кампании:
       *     - `CAMPAIGN_PLACEMENT_SEARCH_AND_CATEGORY` — Поиск и рекомендации;
       *     - `CAMPAIGN_PLACEMENT_TOP_PROMOTION` — Поиск;
       *     - `CAMPAIGN_PLACEMENT_OVERTOP` — Спецразмещение.
       * @enum {string}
       */
      placement?:
        'CAMPAIGN_PLACEMENT_SEARCH_AND_CATEGORY' | 'CAMPAIGN_PLACEMENT_TOP_PROMOTION' | 'CAMPAIGN_PLACEMENT_OVERTOP'
    }
    extcampaignListLimitsResponse: {
      /** @description Минимальные и максимальные ставки для инструментов продвижения. */
      limits?: components['schemas']['extcampaignLimitsData'][]
    }
    /**
     * @description Страна витрины:
     *     - `MARKETPLACE_ID_RU` — Россия;
     *     - `MARKETPLACE_ID_KZ` — Казахстан;
     *     - `MARKETPLACE_ID_BY` — Белоруссия.
     * @enum {string}
     */
    camptypeMarketplaceID: 'MARKETPLACE_ID_RU' | 'MARKETPLACE_ID_KZ' | 'MARKETPLACE_ID_BY'
    /**
     * string
     * @description Тип минимальной ставки:
     *     - `CPO` — по кампании «Оплата за заказ»;
     *     - `CPC` — по поиску и рекомендациям;
     *     - `CPC_TOP` — по поиску.
     * @enum {string}
     */
    camptypeCampaignTypeRate: 'CPO' | 'CPC' | 'CPC_TOP'
    extcampaignBidBySKURequest: {
      marketplaceId?: components['schemas']['camptypeMarketplaceID']
      paymentType?: components['schemas']['camptypeCampaignTypeRate']
      /** @description Идентификатор товара: Ozon ID или SKU. */
      sku?: string[]
    }
    BidBySKUResponseBidSKU: {
      /**
       * Format: double
       * @description Размер ставки.
       */
      bid?: number
      /**
       * Format: uint64
       * @description Идентификатор товара: Ozon ID или SKU.
       */
      sku?: string
    }
    extcampaignBidBySKUResponse: {
      /** @description Информация о минимальных ставках. */
      minBids?: components['schemas']['BidBySKUResponseBidSKU'][]
    }
    extcampaignListProductsWithBonusesResponse: {
      /** @description Список SKU товаров. */
      skus?: string[]
    }
    /**
     * @description Тип группировки по времени:
     *     - `DATE` — группировка по дате (по дням);
     *     - `START_OF_WEEK` — группировка по неделям;
     *     - `START_OF_MONTH` — группировка по месяцам.
     * @default NO_GROUP_BY
     * @enum {string}
     */
    extstatGroupBy: 'NO_GROUP_BY' | 'DATE' | 'START_OF_WEEK' | 'START_OF_MONTH'
    /** @description Структура исходного запроса. */
    extstatStatisticsRequest: {
      /**
       * @description Список идентификаторов кампаний, для которых необходимо подготовить отчёт.
       *
       *     Формат отчёта:
       *     - CSV — если в списке одна кампания.
       *     - ZIP архив — если в списке несколько кампаний. Каждый файл соответствует одной кампании из списка. Имя файла вида `<идентификатор кампании>.csv`.
       */
      campaigns: string[]
      /**
       * Format: date-time
       * @description Начальная дата периода отчёта в формате RFC 3339.
       *
       *     Максимальный период, за который можно получить отчёт — 62 дня.
       */
      from?: string
      /**
       * Format: date-time
       * @description Конечная дата периода отчёта в формате RFC 3339.
       *
       *     Максимальный период, за который можно получить отчёт — 62 дня.
       */
      to?: string
      /** @description Начальная дата периода отчёта в формате ГГГГ-ММ-ДД. Например: `2019-02-10`. */
      dateFrom?: string
      /** @description Конечная дата периода отчёта в формате ГГГГ-ММ-ДД. Например: `2019-02-10`. */
      dateTo?: string
      groupBy?: components['schemas']['extstatGroupBy']
    }
    extstatStatisticsRequestID: {
      /**
       * @description Уникальный идентификатор отправленного запроса.
       *
       *     По нему можно [проверить статус формирования отчёта](#operation/VendorStatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
       */
      UUID?: string
      /** @description Если запрашивается отчёт с аналитикой внешнего трафика  — `true`. */
      vendor?: boolean
    }
    /** @description Структура исходного запроса. */
    extstatStatisticsVideobannerRequest: {
      /**
       * @description Список идентификаторов кампаний, для которых необходимо подготовить отчёт.
       *
       *     Формат отчёта:
       *     - CSV — если в списке одна кампания.
       *     - ZIP архив — если в списке несколько кампаний. Каждый файл соответствует одной кампании из списка. Имя файла вида `<идентификатор кампании>.csv`.
       */
      campaigns: string[]
      /** @description Начальная дата периода отчёта в формате ГГГГ-ММ-ДД. Например: `2019-02-10`. */
      dateFrom?: string
      /** @description Конечная дата периода отчёта в формате ГГГГ-ММ-ДД. Например: `2019-02-10`. */
      dateTo?: string
      groupBy?: components['schemas']['extstatGroupBy']
    }
    /**
     * @description Текущее состояние запроса:
     *     - `NOT_STARTED` — запрос ожидает выполнения;
     *     - `IN_PROGRESS` — запрос выполняется в данный момент;
     *     - `ERROR` — выполнение запроса завершилось ошибкой;
     *     - `OK` — запрос успешно выполнен.
     * @default NOT_STARTED
     * @enum {string}
     */
    extstatStatisticsRequestState: 'NOT_STARTED' | 'IN_PROGRESS' | 'ERROR' | 'OK'
    /** @description Информация о запросе. */
    extstatStatisticsResponse: {
      /** @description Уникальный идентификатор запроса, для которого производилась проверка. */
      UUID?: string
      state?: components['schemas']['extstatStatisticsRequestState']
      /**
       * Format: date-time
       * @description Дата и время получения запроса сервером, часовой пояс UTC.
       */
      createdAt?: string
      /**
       * Format: date-time
       * @description Дата и время последнего обновления состояния запроса, часовой пояс UTC.
       */
      updatedAt?: string
      request?: components['schemas']['extstatStatisticsRequest']
      /**
       * @description Краткое описание возникшей ошибки.
       *
       *     Поле присутствует, если выполнение запроса завершилось ошибкой.
       */
      error?: string
      /**
       * @description Относительная ссылка на отчёт в формате CSV.
       *
       *     Поле присутствует, если запрос выполнен успешно.
       */
      link?: string
      /**
       * @description Тип запрашиваемого отчёта:
       *     - `STATS` — отчёт по кампании;
       *     - `SEARCH_PHRASES` — отчёт по поисковым фразам и по категории товаров;
       *     - `ATTRIBUTION` — отчёт по заказам для оплаты за заказ;
       *     - `VIDEO` — отчёт по показам видеобаннера.
       * @default STATS
       * @enum {string}
       */
      kind: 'STATS' | 'SEARCH_PHRASES' | 'ATTRIBUTION' | 'VIDEO'
    }
    StatisticsReportsListItemCampaign: {
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      id?: string
      /** @description Название кампании. */
      title?: string
    }
    extstatStatisticsReportsListItem: {
      /** @description Список кампаний. */
      campaigns?: components['schemas']['StatisticsReportsListItemCampaign'][]
      meta?: components['schemas']['extstatStatisticsResponse']
      /** @description Название отчёта. */
      name?: string
    }
    extstatStatisticsReportsList: {
      /** @description Список отчётов. */
      items?: components['schemas']['extstatStatisticsReportsListItem'][]
      /**
       * Format: uint64
       * @description Количество отчётов.
       */
      total?: string
    }
    extstatStatisticsReport: {
      /** @description Формат отчёта. */
      contentType?: string
    }
    extstatisticsGenerateAllSkuPromoOrdersReportResponse: {
      /**
       * @description Уникальный идентификатор отправленного запроса.
       *
       *     По нему можно [проверить статус формирования отчёта](#operation/VendorStatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
       */
      UUID?: string
    }
    extstatisticsGenerateAllSkuPromoProductsReportResponse: {
      /**
       * @description Уникальный идентификатор отправленного запроса.
       *
       *     По нему можно [проверить статус формирования отчёта](#operation/VendorStatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
       */
      UUID?: string
    }
    /**
     * @description Тип группировки по времени:
     *     - `DATE` — группировка по дате (по дням);
     *     - `START_OF_WEEK` — группировка по неделям;
     *     - `START_OF_MONTH` — группировка по месяцам.
     * @default NO_GROUP_BY
     * @enum {string}
     */
    extstatisticsGroupBy: 'NO_GROUP_BY' | 'DATE' | 'START_OF_WEEK' | 'START_OF_MONTH'
    extstatisticsStatisticsRequest: {
      /** @description Список кампаний. */
      campaigns?: string[]
      /** @description Начальная дата периода отчёта в формате ГГГГ-ММ-ДД. Например: `2019-02-10`. Дата не может быть раньше 1 февраля 2025 года. */
      dateFrom?: string
      /** @description Конечная дата периода отчёта в формате ГГГГ-ММ-ДД. Например: `2019-02-10`. */
      dateTo?: string
      /**
       * Format: date-time
       * @description Начальная дата периода отчёта в формате RFC 3339. Дата не может быть раньше 1 февраля 2025 года.
       */
      from?: string
      /**
       * Format: date-time
       * @description Конечная дата периода отчёта в формате RFC 3339.
       */
      to?: string
      groupBy?: components['schemas']['extstatisticsGroupBy']
    }
    extstatisticsStatisticsRequestID: {
      /**
       * @description Уникальный идентификатор отправленного запроса.
       *
       *     По нему можно [проверить статус формирования отчёта](#operation/VendorStatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
       */
      UUID?: string
      /** @description Если запрашивается отчёт с аналитикой внешнего трафика  — `true`. */
      vendor?: boolean
    }
    extstatisticsSearchPromoProductsSKUStatisticsRequest: {
      /** @description Список идентификаторов кампаний. */
      campaignIds?: string[]
      /** @description Дата начала периода статистики, не раньше предыдущего дня. */
      dateFrom?: string
      /** @description Дата окончания периода статистики. */
      dateTo?: string
    }
    SearchPromoProductsSKUStatisticsResponseRow: {
      /** @description Средняя стоимость клика в рублях. */
      avgCpc?: string
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      campaignId?: string
      /**
       * Format: uint64
       * @description Количество кликов.
       */
      clicks?: string
      /**
       * Format: double
       * @description Отношение числа кликов к числу показов — CTR.
       */
      ctr?: number
      /** @description Дата, за которую посчитана статистика. */
      date?: string
      /**
       * Format: date-time
       * @description Дата добавления кампании.
       */
      dateAdded?: string
      /**
       * Format: double
       * @description Доля рекламных расходов — ДРР.
       */
      drr?: number
      /** @description Расход в рублях. */
      expense?: string
      /**
       * Format: uint64
       * @description Количество заказов модели.
       */
      modelOrders?: string
      /** @description Стоимость заказов модели в рублях. */
      modelSales?: string
      /**
       * Format: uint64
       * @description Количество заказов.
       */
      orders?: string
      /** @description Цена товара в рублях. */
      price?: string
      /** @description Стоимость заказов в рублях. */
      sales?: string
      /**
       * Format: uint64
       * @description Идентификатор товара в системе Ozon — SKU.
       */
      sku?: string
      /**
       * Format: uint64
       * @description Количество добавлений товара в корзину.
       */
      toCart?: string
      /**
       * Format: uint64
       * @description Количество показов.
       */
      views?: string
    }
    extstatisticsSearchPromoProductsSKUStatisticsResponse: {
      /** @description Статистика по товарам. */
      rows?: components['schemas']['SearchPromoProductsSKUStatisticsResponseRow'][]
    }
    /**
     * string
     * @description Место размещения продвигаемых товаров:
     *     - `PLACEMENT_TOP_PROMOTION` — поиск;
     *     - `PLACEMENT_INVALID` — не определено;
     *     - `PLACEMENT_SEARCH_AND_CATEGORY` — поиск и рекомендации.
     * @default PLACEMENT_INVALID
     * @enum {string}
     */
    CreateProductCampaignRequestV2ProductCampaignPlacementV2:
      'PLACEMENT_TOP_PROMOTION' | 'PLACEMENT_INVALID' | 'PLACEMENT_SEARCH_AND_CATEGORY'
    /**
     * string
     * @description Стратегия, которая будет использоваться для кампании:
     *     - `MAX_CLICKS` — автостратегия для Поиска и рекомендаций;
     *     - `TOP_MAX_CLICKS` — автостратегия для Поиска;
     *     - `TARGET_BIDS` — средняя стоимость клика для Поиска и рекомендаций;
     *     - `TOP_PROMOTION` — вывод в топ;
     *     - `TARGET_CIR` — целевой расход.
     * @enum {string}
     */
    camptypeProductAutopilotStrategyCPC:
      'MAX_CLICKS' | 'TOP_MAX_CLICKS' | 'TARGET_BIDS' | 'TOP_PROMOTION' | 'TARGET_CIR'
    extcampaignCreateProductCampaignRequestV2CPC: {
      /** @description Название рекламной кампании. */
      title?: string
      /**
       * @description Дата начала рекламной кампании по московскому времени.
       *
       *     Если параметр не заполнен, датой старта считается начало текущего дня.
       *     Открутка начинается сразу после активации кампании, если не нужна модерация.
       */
      fromDate?: string
      /**
       * @description Дата окончания рекламной кампании по московскому времени.
       *     Параметр не учитывается для кампаний с оплатой за клики, созданных в автоматическом режиме.
       */
      toDate?: string
      /**
       * Format: uint64
       * @deprecated
       * @description Ограничение дневного бюджета рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до
       *     копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       *
       *     Если параметр не заполнен, дневной бюджет не ограничен. После создания рекламной кампании изменить бюджет с дневного на недельный и наоборот не получится.
       */
      dailyBudget?: string
      /**
       * Format: uint64
       * @description Ограничение недельного бюджета рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до
       *     копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       *
       *     Если параметр не заполнен, недельный бюджет не ограничен. После создания рекламной кампании изменить бюджет с недельного на дневной и наоборот не получится.
       */
      weeklyBudget?: string
      placement: components['schemas']['CreateProductCampaignRequestV2ProductCampaignPlacementV2']
      productAutopilotStrategy?: components['schemas']['camptypeProductAutopilotStrategyCPC']
    }
    extcampaignCampaignID: {
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      campaignId?: string
    }
    /**
     * string
     * @description Стратегия, которая будет использоваться для кампании:
     *     - `MAX_CLICKS` — автостратегия для Поиска и рекомендаций;
     *     - `TOP_MAX_CLICKS` — автостратегия для Поиска;
     *     - `TARGET_BIDS` — средняя стоимость клика для Поиска;
     *     - `NO_AUTO_STRATEGY` — не использовать автостратегию.
     * @default NO_AUTO_STRATEGY
     * @enum {string}
     */
    camptypeDBproductAutopilotStrategy: 'MAX_CLICKS' | 'TOP_MAX_CLICKS' | 'TARGET_BIDS' | 'NO_AUTO_STRATEGY'
    /**
     * string
     * @description Место размещения рекламы:
     *       - `CAMPAIGN_PLACEMENT_INVALID` — не определено;
     *       - `CAMPAIGN_PLACEMENT_PDP` — карточка товара;
     *       - `CAMPAIGN_PLACEMENT_SEARCH_AND_CATEGORY` — поиск и рекомендации;
     *       - `CAMPAIGN_PLACEMENT_TOP_PROMOTION` — поиск;
     *       - ~~`CAMPAIGN_PLACEMENT_TAKEOVER`~~ — одновременный показ товаров на первых 4 плитках. Значение устарело.
     * @default CAMPAIGN_PLACEMENT_INVALID
     * @enum {string}
     */
    advcamptypePlacement:
      | 'CAMPAIGN_PLACEMENT_INVALID'
      | 'CAMPAIGN_PLACEMENT_PDP'
      | 'CAMPAIGN_PLACEMENT_SEARCH_AND_CATEGORY'
      | 'CAMPAIGN_PLACEMENT_TOP_PROMOTION'
      | 'CAMPAIGN_PLACEMENT_TAKEOVER'
    /**
     * object
     * @description Параметры для расчёта при создании кампании.
     */
    CalculateDynamicBudgetRequestCreateCampaignScenario: {
      autopilotStrategy?: components['schemas']['camptypeDBproductAutopilotStrategy']
      placement?: components['schemas']['advcamptypePlacement']
      /**
       * Format: uint64
       * @description Количество товаров.
       */
      skusCount?: string
    }
    /**
     * object
     * @description Информация об автостратегии.
     */
    camptypeMaybeProductAutopilotStrategy: {
      strategy?: components['schemas']['camptypeDBproductAutopilotStrategy']
    }
    /**
     * object
     * @description Параметры для расчёта при обновлении кампании.
     */
    CalculateDynamicBudgetRequestUpdateCampaignScenario: {
      /** @description Товары, которые добавили в кампанию. */
      addingSkus?: string[]
      autopilotStrategy?: components['schemas']['camptypeMaybeProductAutopilotStrategy']
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      campaignId?: string
    }
    extcampaignCalculateDynamicBudgetRequest: {
      createCampaign?: components['schemas']['CalculateDynamicBudgetRequestCreateCampaignScenario']
      updateCampaign?: components['schemas']['CalculateDynamicBudgetRequestUpdateCampaignScenario']
    }
    /**
     * string
     * @description Тип минимального бюджета:
     *     - `DYNAMIC_BUDGET_REQUIRED` — обязательный;
     *     - `DYNAMIC_BUDGET_RECOMMENDED` — рекомендованный.
     * @default DYNAMIC_BUDGET_REQUIRED
     * @enum {string}
     */
    camptypeDynamicBudgetType: 'DYNAMIC_BUDGET_REQUIRED' | 'DYNAMIC_BUDGET_RECOMMENDED'
    extcampaignCalculateDynamicBudgetResponse: {
      /**
       * Format: uint64
       * @description Бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      campaignBudget?: string
      /**
       * Format: uint64
       * @description Минимальный бюджет.
       */
      dynamicBudget?: string
      dynamicBudgetType?: components['schemas']['camptypeDynamicBudgetType']
      /**
       * Format: uint64
       * @description Сумма в рублях, на которую увеличивается минимальный бюджет за каждый добавленный в кампанию товар.
       */
      skuPrice?: string
    }
    Empty: Record<string, never>
    /**
     * string
     * @description Тип оплаты:
     *     - `CPC` — за клики.
     * @default CAMPAIGN_TYPE_INVALID
     */
    camptypeCampaignType: string
    /**
     * @description Место размещения продвигаемых товаров:
     *     - `PLACEMENT_INVALID` — не определено.
     *     - `PLACEMENT_PDP` — карточка товара. Доступно только для кампаний с ручным управлением.
     *     - `PLACEMENT_SEARCH_AND_CATEGORY` — поиск и рекомендации.
     *     - `PLACEMENT_TOP_PROMOTION` — поиск.
     * @default PLACEMENT_INVALID
     * @enum {string}
     */
    extcampaignProductCampaignPlacement:
      | 'PLACEMENT_INVALID'
      | 'PLACEMENT_PDP'
      | 'PLACEMENT_SEARCH_AND_CATEGORY'
      | 'PLACEMENT_TOP_PROMOTION'
      | 'PLACEMENT_OVERTOP'
    extcampaignCampaign: {
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      id?: string
      autostopStatus?: components['schemas']['advcamptypeAutostopStatus']
      /** @description `true`, если кампания создана автоматически. */
      isAutocreated?: boolean
      paymentType?: components['schemas']['camptypeCampaignType']
      /** @description Название кампании. */
      title?: string
      state?: components['schemas']['extcampaignCampaignState']
      /** @description Дата старта рекламной кампании. */
      fromDate?: string
      /** @description Дата завершения рекламной кампании. */
      toDate?: string
      /**
       * Format: uint64
       * @description Бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      budget?: string
      /**
       * Format: uint64
       * @deprecated
       * @description Дневной бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      dailyBudget?: string
      /**
       * Format: uint64
       * @description Недельный бюджет рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       */
      weeklyBudget?: string
      placement?: components['schemas']['extcampaignProductCampaignPlacement']
      /**
       * @description Стратегия, которая используется для кампании:
       *     - `MAX_CLICKS` — автостратегия для Поиска и рекомендаций;
       *     - `TOP_MAX_CLICKS` — автостратегия для Поиска;
       *     - `TARGET_BIDS` — средняя стоимость клика для Поиска и рекомендаций;
       *     - `TOP_PROMOTION` — вывод в топ;
       *     - `TARGET_CIR` — целевой расход.
       * @enum {string}
       */
      productAutopilotStrategy?: 'MAX_CLICKS' | 'TOP_MAX_CLICKS' | 'TARGET_BIDS' | 'TOP_PROMOTION' | 'TARGET_CIR'
      autopilot?: components['schemas']['extcampaignCampaignAutopilotProperties']
      /**
       * Format: date-time
       * @description Дата создания кампании в формате RFC3339.
       */
      createdAt?: string
      /**
       * Format: date-time
       * @description Дата обновления кампании в формате RFC3339.
       */
      updatedAt?: string
      /**
       * @description Режим создания и управления товарной рекламной кампанией:
       *     - `PRODUCT_CAMPAIGN_MODE_AUTO` — автоматически;
       *     - `PRODUCT_CAMPAIGN_MODE_MANUAL` — вручную.
       * @default PRODUCT_CAMPAIGN_MODE_AUTO
       * @enum {string}
       */
      productCampaignMode: 'PRODUCT_CAMPAIGN_MODE_AUTO' | 'PRODUCT_CAMPAIGN_MODE_MANUAL'
    }
    /** @description Информация о кампании. Обязательный параметр, если в параметре `productAutopilotStrategy` включена автостратегия. */
    extcampaignPatchProductCampaignAutopilotProperties: {
      /**
       * Format: uint64
       * @description Идентификатор категории.
       */
      categoryId?: string
      /**
       * @description Разрешение на автоматическое добавление товаров из категории, которая указана в `categoryId`, в кампании с автостратегией `MAX_VIEWS`:
       *
       *     - `PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN` — стратегия добавления товаров в кампанию не установлена;
       *     - `PRODUCT_CAMPAIGN_SKU_ADD_MODE_MANUAL` — добавлять товары в кампанию можно только вручную;
       *     - `PRODUCT_CAMPAIGN_SKU_ADD_MODE_AUTO` — можно добавлять товары категории `categoryId` в кампанию автоматически.
       *
       *     Если тип разрешения пустой или было передано `PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN`, добавлять товары в кампанию можно только вручную.
       *
       *     Для кампаний без автостратегии `MAX_VIEWS` возвращается значение `PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN`.
       * @enum {string}
       */
      skuAddMode?:
        | 'PRODUCT_CAMPAIGN_SKU_ADD_MODE_UNKNOWN'
        | 'PRODUCT_CAMPAIGN_SKU_ADD_MODE_MANUAL'
        | 'PRODUCT_CAMPAIGN_SKU_ADD_MODE_AUTO'
    }
    extcampaignPatchProductCampaignRequest: {
      autopilot?: components['schemas']['extcampaignPatchProductCampaignAutopilotProperties']
      /**
       * @description Дата начала рекламной кампании по московскому времени.
       *
       *     Не может быть раньше текущей даты.
       */
      fromDate?: string
      /**
       * @description Дата окончания рекламной кампании по московскому времени.
       *
       *     Не может быть раньше даты начала.
       */
      toDate?: string
      /**
       * Format: uint64
       * @description Ограничение общего бюджета рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       *
       *     Учитывается только для автоматических кампаний брендов и агентств.
       *     В других организациях установить новое ограничение общего бюджета не получится. Если у кампании уже установлен бюджет, можно:
       *     - Убрать ограничения: передайте `0` в этом параметре.
       *     - Не менять бюджет кампании. Когда он будет исчерпан, уберите ограничения бюджета или создайте новую кампанию с неограниченным бюджетом.
       */
      budget?: string
      /**
       * Format: uint64
       * @deprecated
       * @description Ограничение дневного бюджета рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       *
       *     Если параметр не заполнен, дневной бюджет не ограничен. После создания рекламной кампании изменить бюджет с дневного на недельный и наоборот не получится.
       */
      dailyBudget?: string
      /**
       * Format: uint64
       * @description Ограничение недельного бюджета рекламной кампании. Единица измерения — одна миллионная доля рубля, округляется до
       *     копеек. Например, значение `1 000 000` в параметре равно 1 рублю.
       *
       *     Если параметр не заполнен, недельный бюджет не ограничен. После создания рекламной кампании изменить бюджет с недельного на дневной и наоборот не получится.
       */
      weeklyBudget?: string
    }
    extcampaignUpdateProductsRequestProduct: {
      /**
       * Format: uint64
       * @description SKU рекламируемого товара.
       */
      sku: string
      /**
       * Format: uint64
       * @description <aside class="notice"> Только для стратегии «Средняя стоимость клика». </aside>
       *
       *     Ставка за один клик — CPC.
       */
      bid?: string
      /**
       * Format: double
       * @description <aside class="notice"> Только для стратегии «Целевой расход».</aside>
       *
       *     Целевая доля рекламных расходов в процентах.
       * @default 15
       */
      targetCir: number
      /**
       * Format: uint64
       * @description <aside class="notice">Только для стратегии «Вывод в топ».</aside>
       *
       *      Диапазон позиций в поиске:
       *       - `Топ-4`,
       *       - `Топ-12`,
       *       - `Топ-20`,
       *       - `Топ-30`.
       * @default Топ-20
       */
      topPosition: string
    }
    extcampaignUpdateProductsRequest: {
      /** @description Ставки за клики. */
      bids?: components['schemas']['extcampaignUpdateProductsRequestProduct'][]
    }
    extcampaignAddProductsRequestProduct: {
      /**
       * Format: uint64
       * @description SKU рекламируемого товара.
       *
       *     Обязательное поле.
       */
      sku?: string
      /**
       * Format: uint64
       * @description <aside class="notice"> Только для стратегии «Средняя стоимость клика». </aside>
       *
       *     Ставка за один клик — CPC.
       */
      bid?: string
      /**
       * Format: double
       * @description <aside class="notice"> Только для стратегии «Целевой расход».</aside>
       *
       *     Целевая доля рекламных расходов в процентах.
       * @default 15
       */
      targetCir: number
      /**
       * Format: uint64
       * @description <aside class="notice"> Только для стратегии «Вывод в топ». </aside>
       *
       *      Диапазон позиций в поиске:
       *       - `Топ-4`,
       *       - `Топ-12`,
       *       - `Топ-20`,
       *       - `Топ-30`.
       * @default Топ-20
       */
      topPosition: string
    }
    extcampaignAddProductsRequest: {
      /** @description Ставки за клики. */
      bids?: components['schemas']['extcampaignAddProductsRequestProduct'][]
    }
    extcampaignGetProductsResponseV2Product: {
      /**
       * Format: uint64
       * @description Идентификатор товара: Ozon ID или SKU.
       */
      sku?: string
      /**
       * Format: uint64
       * @description <aside class="notice"> Только для стратегии «Средняя стоимость клика». </aside>
       *
       *     Ставка за один клик — CPC.
       */
      bid?: string
      /**
       * Format: double
       * @description <aside class="notice"> Только для стратегии «Целевой расход».</aside>
       *
       *     Целевая доля рекламных расходов в процентах.
       * @default 15
       */
      targetCir: number
      /** @description Название товара. */
      title?: string
      /**
       * Format: uint64
       * @description <aside class="notice">Только для стратегии «Вывод в топ».</aside>
       *
       *      Диапазон позиций в поиске:
       *       - `Топ-4`,
       *       - `Топ-12`,
       *       - `Топ-20`,
       *       - `Топ-30`.
       * @default Топ-20
       */
      topPosition: string
    }
    extcampaignGetProductsResponseV2: {
      /** @description Список товаров кампании. */
      products?: components['schemas']['extcampaignGetProductsResponseV2Product'][]
    }
    extcampaignDeleteProductsRequest: {
      /** @description SKU продвигаемого товара. */
      sku?: string[]
    }
    /** object */
    GetProductsCompetitiveBidsResponseBids: {
      /**
       * Format: uint64
       * @description Ставка.
       */
      bid?: string
      /** @description SKU товара. */
      sku?: string
    }
    extcampaignGetProductsCompetitiveBidsResponse: {
      /** @description Список ставок. */
      bids?: components['schemas']['GetProductsCompetitiveBidsResponseBids'][]
      /** @description Идентификатор кампании. */
      campaignId?: string
    }
    extcampaignListSearchPromoProductsRequestV2: {
      /**
       * Format: int64
       * @description Номер страницы. Пагинация начинается с единицы.
       */
      page?: number
      /**
       * Format: int64
       * @description Размер страницы.
       */
      pageSize?: number
    }
    /**
     * @description Статус участия товара в акции Морковск»:
     *     - `CARROTS_STATUS_INVALID` —  статус отсутствует;
     *     - `CARROTS_STATUS_UNAVAILABLE` — статус недоступен;
     *     - `CARROTS_STATUS_DISABLED` — товар не участвует в акции;
     *     - `CARROTS_STATUS_ENABLED` —  товар участвует в акции.
     * @default CARROTS_STATUS_INVALID
     * @enum {string}
     */
    mainpagev1CarrotsStatus:
      'CARROTS_STATUS_INVALID' | 'CARROTS_STATUS_UNAVAILABLE' | 'CARROTS_STATUS_DISABLED' | 'CARROTS_STATUS_ENABLED'
    /**
     * object
     * @description Максимальная ставка.
     */
    extcampaignListSearchPromoProductsResponseV2Hint: {
      /**
       * Format: uint64
       * @description Идентификатор кампании.
       */
      campaignId?: string
      /** @description Название организации. */
      organisationTitle?: string
    }
    /**
     * object
     * @description Информация о предыдущем значении ставки.
     */
    extcampaignListSearchPromoProductsResponseV2PreviousBid: {
      /**
       * Format: double
       * @description Предыдущее значение `products.bid`.
       */
      bid?: number
      /** @description Предыдущее значение `products.bidPrice`. */
      bidPrice?: string
      /**
       * Format: date-time
       * @description Дата и время последнего изменения ставки.
       */
      updatedAt?: string
    }
    /**
     * object
     * @description Информация о просмотрах.
     */
    extcampaignListSearchPromoProductsResponseV2Views: {
      /**
       * Format: uint64
       * @description Количество просмотров товара за предыдущую неделю.
       */
      previousWeek?: string
      /**
       * Format: uint64
       * @description Количество просмотров товара за последние 7 дней.
       */
      thisWeek?: string
    }
    /** object */
    extcampaignListSearchPromoProductsResponseV2Product: {
      /**
       * Format: double
       * @description Ставка за 1 заказ (CPO). Единица измерения — процент от цены товара.
       */
      bid?: number
      /** @description Ставка за 1 заказ (CPO) в рублях. */
      bidPrice?: string
      /**
       * Format: double
       * @description Ставка за 1 заказ (CPO) в рублях без участия в акции «Морковск».
       */
      bidWithoutAdditive?: number
      /**
       * Format: double
       * @description Процент, на который участие в акции «Морковск» повышает ставку.
       */
      carrotsAdditive?: number
      carrotsStatus?: components['schemas']['mainpagev1CarrotsStatus']
      hint?: components['schemas']['extcampaignListSearchPromoProductsResponseV2Hint']
      /** @description Адрес ссылки на изображение. */
      imageUrl?: string
      /** @description `true`, если товар не заблокирован в продвижении в оплате за заказ. */
      isSearchPromoAvailable?: boolean
      previousBid?: components['schemas']['extcampaignListSearchPromoProductsResponseV2PreviousBid']
      /** @description Предыдущее значение `visibilityIndex`. */
      previousVisibilityIndex?: string
      /** @description Цена товара. */
      price?: string
      /** @description `true`, если включено продвижение товара в оплате за заказ. */
      searchPromoStatus?: boolean
      /**
       * Format: uint64
       * @description SKU продвигаемого товара.
       */
      sku?: string
      /** @description Артикул продавца. */
      sourceSku?: string
      /** @description Название товара. */
      title?: string
      views?: components['schemas']['extcampaignListSearchPromoProductsResponseV2Views']
      /** @description Индекс видимости. */
      visibilityIndex?: string
    }
    extcampaignListSearchPromoProductsResponseV2: {
      /** @description Список товаров. */
      products?: components['schemas']['extcampaignListSearchPromoProductsResponseV2Product'][]
      /**
       * Format: uint64
       * @description Количество товаров.
       */
      total?: string
    }
    extcampaignGetProductsRecommendedBidsRequest: {
      /** @description Список идентификаторов товаров. */
      skus?: string[]
    }
    extcampaignGetProductsRecommendedBidsResponse: {
      /** @description Список рекомендованных ставок. */
      recommendedBids?: {
        [key: string]: string
      }
    }
    extcampaignSetSearchPromoBidsRequestV2Bid: {
      /**
       * Format: double
       * @description Ставка за 1 заказ (CPO), единица измерения — процент от цены товара.
       */
      bid?: number
      /**
       * Format: uint64
       * @description Идентификатор товара.
       */
      sku?: string
    }
    extcampaignSetSearchPromoBidsRequestV2: {
      /** @description Значения ставок. */
      bids?: components['schemas']['extcampaignSetSearchPromoBidsRequestV2Bid'][]
    }
    extcampaignSetSearchPromoBidsResponseV2ResponseCellextcampaignSetSearchPromoBidsResponseV2ResponseCell: {
      /**
       * number
       * Format: double
       * @description Значения ставок.
       */
      bid?: number
      /** @description Ошибка, из-за которой нельзя обновить ставку. */
      error?: string
      /**
       * string
       * Format: uint64
       * @description SKU продвигаемого товара.
       */
      sku?: string
      /** @description `true`, если ставка обновилась. */
      update?: boolean
    }
    extcampaignSetSearchPromoBidsResponseV2extcampaignSetSearchPromoBidsResponseV2: {
      /**
       * object
       * @description Ответ метода.
       */
      response?: components['schemas']['extcampaignSetSearchPromoBidsResponseV2ResponseCellextcampaignSetSearchPromoBidsResponseV2ResponseCell'][]
    }
    extcampaignGetCPOMinBidsResponseItem: {
      /**
       * Format: double
       * @description Значение ставки.
       */
      bid?: number
      /**
       * Format: uint64
       * @description SKU продвигаемого товара.
       */
      sku?: string
    }
    extcampaignGetCPOMinBidsResponse: {
      /** @description Информация о ставках. */
      bids?: components['schemas']['extcampaignGetCPOMinBidsResponseItem'][]
    }
    extcampaignBatchEnableProductsRequest: {
      /** @description Список идентификаторов товаров. */
      skus?: string[]
    }
    extcampaignBatchEnableProductsResponseResponseCellextcampaignBatchEnableProductsResponseResponseCell: {
      /**
       * number
       * Format: double
       * @description Значения ставок.
       */
      bid?: number
      /** @description Ошибка, из-за которой нельзя включить продвижение товара. */
      error?: string
      /**
       * string
       * Format: uint64
       * @description SKU продвигаемого товара.
       */
      sku?: string
      /** @description `true`, если продвижение товара включилось. */
      update?: boolean
    }
    extcampaignBatchEnableProductsResponseextcampaignBatchEnableProductsResponse: {
      /**
       * object
       * @description Ответ метода.
       */
      response?: components['schemas']['extcampaignBatchEnableProductsResponseResponseCellextcampaignBatchEnableProductsResponseResponseCell'][]
    }
    extcampaignBatchDisableProductsRequest: {
      /** @description Список идентификаторов товаров. */
      skus?: string[]
    }
    extcampaignDeleteSearchPromoBidsRequestV2: {
      /** @description Список идентификаторов товаров. */
      sku?: string[]
    }
    extcampaignActivateAllSkuPromoCampaignResponse: {
      /**
       * Format: uint64
       * @description Выбранная ставка для продвижения.
       */
      selectedBid?: string
    }
    extcampaignBatchEnableCarrotsRequest: {
      /** @description Список идентификаторов товаров. */
      skus: string[]
    }
    /**
     * object
     * @description Ошибка при включении или отключении продвижения:
     *     - `CARROT_ERROR_NONE` — нет ошибки;
     *     - `CARROT_ERROR_INVALID_PRICE` — цена товара ниже минимального значения;
     *     - `CARROT_ERROR_INVALID_PRODUCT` — товар не прошёл модерацию;
     *     - `CARROT_ERROR_OTHER` — прочие ошибки.
     * @default CARROT_ERROR_NONE
     * @enum {string}
     */
    carrotsCarrotError:
      'CARROT_ERROR_NONE' | 'CARROT_ERROR_INVALID_PRICE' | 'CARROT_ERROR_INVALID_PRODUCT' | 'CARROT_ERROR_OTHER'
    /**
     * object
     * @description Информация об операции.
     */
    extcampaignBatchEnableCarrotsResponseInfo: {
      error?: components['schemas']['carrotsCarrotError']
      /** @description `true`, если продвижение включено. */
      isEnabled?: boolean
    }
    extcampaignBatchEnableCarrotsResponse: {
      /** @description Информация о включении продвижения по SKU товара. */
      skuToInfo?: {
        [key: string]: components['schemas']['extcampaignBatchEnableCarrotsResponseInfo']
      }
    }
    extcampaignBatchDisableCarrotsRequest: {
      /** @description Список идентификаторов товаров. */
      skus: string[]
    }
    /**
     * object
     * @description Информация об операции.
     */
    extcampaignBatchDisableCarrotsResponseInfo: {
      error?: components['schemas']['carrotsCarrotError']
      /** @description `true`, если продвижение отключено. */
      isDisabled?: boolean
    }
    extcampaignBatchDisableCarrotsResponse: {
      /** @description Информация об отключении продвижения по SKU товара. */
      skuToInfo?: {
        [key: string]: components['schemas']['extcampaignBatchDisableCarrotsResponseInfo']
      }
    }
    /** @description Метод, с помощью которого запросили формирование отчёта. */
    extstatVendorStatisticsRequest: {
      /**
       * @description Начало отчётного периода.
       *
       *     Дата должна быть не ранее 1 января 2022 года.
       */
      dateFrom?: string
      /**
       * @description Конец отчётного периода.
       *
       *     Дата должна быть позднее `dateFrom` не больше чем на 3 месяца. Если дата позднее трёх месяцев,
       *     отчёт сформируется за 3 месяца с даты, указанной в `dateFrom`.
       */
      dateTo?: string
      /**
       * @description Тип отчёта:
       *     - `TRAFFIC_SOURCES` — отчёт по источникам трафика.
       *     - `ORDERS` — отчёт по заказам.
       * @enum {string}
       */
      type?: 'TRAFFIC_SOURCES' | 'ORDERS'
    }
    /** @description Информация об отчёте. */
    extstatVendorStatisticsResponse: {
      /** @description Уникальный идентификатор отправленного запроса, с помощью которого в дальнейшем можно проверить статус выполнения запроса и скачать отчёт. */
      UUID?: string
      /**
       * Format: date-time
       * @description Дата формирования отчёта.
       */
      createdAt?: string
      /** @description Описание ошибки. */
      error?: string
      /** @description Ссылка на отчёт. */
      link?: string
      request?: components['schemas']['extstatVendorStatisticsRequest']
      /**
       * @description Статус формирования отчёта:
       *     - `NOT_STARTED` — ещё не началось.
       *     - `IN_PROGRESS` — в процессе.
       *     - `CANCEL` — отменено.
       *     - `OK` — отчёт сформирован.
       *     - `ERROR` — произошла ошибка.
       *     - `TIMEOUT` — время ожидания истекло.
       * @default NOT_STARTED
       * @enum {unknown}
       */
      state: 'NOT_STARTED' | 'IN_PROGRESS' | 'OK' | 'ERROR' | 'TIMEOUT' | 'CANCEL'
      /**
       * Format: date-time
       * @description Время изменения статуса.
       */
      updatedAt?: string
    }
    VendorStatisticsReportsListItem: {
      meta?: components['schemas']['extstatVendorStatisticsResponse']
      /** @description Название отчёта. */
      name?: string
    }
    extstatVendorStatisticsReportsList: {
      /** @description Информация об отчётах. */
      items?: unknown
      /**
       * Format: uint64
       * @description Количество отчётов.
       */
      total?: string
    }
    extorganisationGetVendorTagResponse: {
      /** @description Префикс организации для UTM-метки. */
      tag?: string
    }
  }
  responses: never
  parameters: never
  requestBodies: {
    extcampaignBidBySKURequest: {
      content: {
        'application/json': components['schemas']['extcampaignBidBySKURequest']
      }
    }
    extstatStatisticsRequest: {
      content: {
        'application/json': components['schemas']['extstatStatisticsRequest']
      }
    }
    extstatStatisticsVideobannerRequest: {
      content: {
        'application/json': components['schemas']['extstatStatisticsVideobannerRequest']
      }
    }
    extstatisticsSearchPromoOrdersReportRequest: {
      content: {
        'application/json': {
          /**
           * Format: date-time
           * @description Начальная дата периода отчёта в формате RFC 3339.
           */
          from?: string
          /**
           * Format: date-time
           * @description Конечная дата периода отчёта в формате RFC 3339.
           */
          to?: string
        }
      }
    }
    extstatisticsStatisticsRequest: {
      content: {
        'application/json': components['schemas']['extstatisticsStatisticsRequest']
      }
    }
    extcampaignCreateProductCampaignRequestV2CPC: {
      content: {
        'application/json': components['schemas']['extcampaignCreateProductCampaignRequestV2CPC']
      }
    }
    extcampaignCampaignID: {
      content: {
        'application/json': components['schemas']['Empty']
      }
    }
    extcampaignUpdateProductsRequest: {
      content: {
        'application/json': components['schemas']['extcampaignUpdateProductsRequest']
      }
    }
    extcampaignAddProductsRequest: {
      content: {
        'application/json': components['schemas']['extcampaignAddProductsRequest']
      }
    }
    extcampaignBatchEnableCarrotsRequest: {
      content: {
        'application/json': components['schemas']['extcampaignBatchEnableCarrotsRequest']
      }
    }
    extcampaignBatchDisableCarrotsRequest: {
      content: {
        'application/json': components['schemas']['extcampaignBatchDisableCarrotsRequest']
      }
    }
    extstatVendorStatisticsRequest: {
      content: {
        'application/json': components['schemas']['extstatVendorStatisticsRequest']
      }
    }
  }
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  ListCampaigns: {
    parameters: {
      query?: {
        /**
         * @description Список идентификаторов кампаний, для которых необходимо вывести информацию.
         *
         *     Если передать значение, то в ответе будет информация по кампаниям, которые указаны
         *     в поле `campaigns`. Если поле пустое, информация будет отдана по всем кампаниям.
         */
        campaignIds?: string[]
        /**
         * @description Тип рекламируемой кампании:
         *     - `SKU` — Оплата за клик;
         *     - `BANNER` — Баннерная рекламная кампания;
         *     - `SEARCH_PROMO` — Оплата за заказ;
         *     - `VIDEO_BANNER` — Видеобаннер.
         *
         *     [Подробнее о типах рекламных кампаний](https://seller-edu.ozon.ru/docs/advertising/reklamnye-kampanii.html)
         */
        advObjectType?: string
        /**
         * @description Состояние кампании.
         *
         *     Возможные значения:
         *     - `CAMPAIGN_STATE_RUNNING` — активная кампания;
         *     - `CAMPAIGN_STATE_PLANNED` — кампания, сроки проведения которой ещё не наступили;
         *     - `CAMPAIGN_STATE_STOPPED` — кампания, приостановленная из-за нехватки бюджета;
         *     - `CAMPAIGN_STATE_INACTIVE` — кампания, остановленная владельцем;
         *     - `CAMPAIGN_STATE_ARCHIVED` — архивная кампания;
         *     - `CAMPAIGN_STATE_MODERATION_DRAFT` — отредактированная кампания до отправки на модерацию;
         *     - `CAMPAIGN_STATE_MODERATION_IN_PROGRESS` — кампания, отправленная на модерацию;
         *     - `CAMPAIGN_STATE_MODERATION_FAILED` — кампания, непрошедшая модерацию;
         *     - `CAMPAIGN_STATE_FINISHED` — кампания завершена, дата окончания в прошлом, такую кампанию нельзя изменить, можно
         *     только клонировать или создать новую.
         */
        state?:
          | 'CAMPAIGN_STATE_UNKNOWN'
          | 'CAMPAIGN_STATE_RUNNING'
          | 'CAMPAIGN_STATE_PLANNED'
          | 'CAMPAIGN_STATE_STOPPED'
          | 'CAMPAIGN_STATE_INACTIVE'
          | 'CAMPAIGN_STATE_ARCHIVED'
          | 'CAMPAIGN_STATE_MODERATION_DRAFT'
          | 'CAMPAIGN_STATE_MODERATION_IN_PROGRESS'
          | 'CAMPAIGN_STATE_MODERATION_FAILED'
          | 'CAMPAIGN_STATE_FINISHED'
        /** @description Номер страницы. Пагинация начинается с единицы. */
        page?: number
        /** @description Размер страницы. */
        pageSize?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список всех кампаний */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCampaignsList']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ListCampaignObjects: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор кампании. */
        campaignId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список рекламируемых объектов в кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCampaignObjectsList']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GetLimitsList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Лимиты ставок */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignListLimitsResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_BidBySKU: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extcampaignBidBySKURequest']
    responses: {
      /** @description Размер минимальной ставки */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignBidBySKUResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_ListProductsWithBonuses2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список товаров с бонусами */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignListProductsWithBonusesResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  SubmitRequest: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extstatStatisticsRequest']
    responses: {
      /** @description Статистика по кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
           *       "vendor": true
           *     }
           */
          'application/json': components['schemas']['extstatStatisticsRequestID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  VideoCampaignsSubmitRequest: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extstatStatisticsVideobannerRequest']
    responses: {
      /** @description Статистика по показам видеобаннера */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
           *       "vendor": true
           *     }
           */
          'application/json': components['schemas']['extstatStatisticsRequestID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  AttributionSubmitRequest: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extstatStatisticsRequest']
    responses: {
      /** @description Отчёт по заказам */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1"
           *     }
           */
          'application/json': components['schemas']['extstatStatisticsRequestID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  StatisticsCheck: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Уникальный идентификатор запроса. */
        UUID: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Cтатус отчёта */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
           *       "state": "OK",
           *       "createdAt": "2020-03-23T19:30:58.264653Z",
           *       "updatedAt": "2020-03-23T19:30:58.689007Z",
           *       "request": {
           *         "attributionDays": "",
           *         "campaignId": 1,
           *         "campaigns": [
           *           12558
           *         ],
           *         "dateFrom": "2020-03-01",
           *         "dateTo": "2020-03-20",
           *         "from": "2020-03-01T00:00:00Z",
           *         "groupBy": "DATE",
           *         "objects": [],
           *         "to": "2020-03-20T00:00:00Z"
           *       },
           *       "link": "string",
           *       "kind": "STATS"
           *     }
           */
          'application/json': components['schemas']['extstatStatisticsResponse']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ListReports: {
    parameters: {
      query?: {
        page?: number
        pageSize?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список отчётов */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsReportsList']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ListReportsExternal: {
    parameters: {
      query?: {
        page?: number
        pageSize?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список отчётов */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsReportsList']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  DownloadStatistics: {
    parameters: {
      query?: {
        UUID?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Отчёт */
      200: {
        headers: {
          'content-type'?: string
          'x-o3-trace-id'?: string
          [name: string]: unknown
        }
        content: {
          /**
           * @example ; Кампания по продвижению товаров № 13883040, период 03.01.2025-03.01.2025
           *     sku; Название товара; Цена товара, Р; Показы; Клики; CTR (%); В корзину; Ср. цена клика, г;Ср. цена 1000 показов, Р; Расход, Р, с НДС; Заказы; Выручка, Р; Заказы модели; Выручка с заказов модели, Р;ДРР, %: Дата добавления
           *     Bcero;;;0;0;0,00; 0; 0,00;0,00; 0,00; 0; 0,00;0;0,00;0,00
           */
          'text/csv': string
        }
      }
      /** @description Некорректный UUID */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "error": "report not found"
           *     }
           */
          'application/json': components['schemas']['rpcStatus']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  MediaCampaignList: {
    parameters: {
      query?: {
        campaignIds?: string[]
        from?: string
        to?: string
        dateFrom?: string
        dateTo?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Статистика по медийным кампаниям */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsReport']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ProductCampaignList: {
    parameters: {
      query?: {
        campaignIds?: string[]
        from?: string
        to?: string
        dateFrom?: string
        dateTo?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Статистика по продуктовым кампаниям */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsReport']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GetCampaignExpense: {
    parameters: {
      query?: {
        campaignIds?: string[]
        dateFrom?: string
        dateTo?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Статистика по расходу кампаний */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsReport']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GetCampaignDailyStats: {
    parameters: {
      query?: {
        campaignIds?: string[]
        dateFrom?: string
        dateTo?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Дневная статистика по кампаниям */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsReport']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  SearchPromoOrdersReportSubmitRequest: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: components['requestBodies']['extstatisticsSearchPromoOrdersReportRequest']
    responses: {
      /** @description Статистика по кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsRequestID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  SearchPromoProductsReportSubmitRequest: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: components['requestBodies']['extstatisticsSearchPromoOrdersReportRequest']
    responses: {
      /** @description Статистика по кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsRequestID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GenerateAllSkuPromoOrdersReport: {
    parameters: {
      query?: {
        /** @description Начальная дата периода отчёта в формате RFC 3339. */
        'timeBounds.from'?: string
        /** @description Конечная дата периода отчёта в формате RFC 3339. */
        'timeBounds.to'?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Статистика по кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatisticsGenerateAllSkuPromoOrdersReportResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GenerateAllSkuPromoProductsReport: {
    parameters: {
      query?: {
        /** @description Начальная дата периода отчёта в формате RFC 3339. */
        'timeBounds.from'?: string
        /** @description Конечная дата периода отчёта в формате RFC 3339. */
        'timeBounds.to'?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Статистика по кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatisticsGenerateAllSkuPromoProductsReportResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalStatistics_StatisticsPhrasesSubmitRequest2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extstatisticsStatisticsRequest']
    responses: {
      /** @description Отчёт по поисковым запросам */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatisticsStatisticsRequestID']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  SearchPromoProductsSKUStatistics2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extstatisticsSearchPromoProductsSKUStatisticsRequest']
      }
    }
    responses: {
      /** @description Статистика по товарам */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatisticsSearchPromoProductsSKUStatisticsResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  CreateProductCampaignCPCV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extcampaignCreateProductCampaignRequestV2CPC']
    responses: {
      /** @description Кампания создана */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCampaignID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  CalculateDynamicBudget: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignCalculateDynamicBudgetRequest']
      }
    }
    responses: {
      /** @description Результат запроса */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCalculateDynamicBudgetResponse']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ActivateCampaign: {
    parameters: {
      query?: never
      header?: never
      path: {
        campaignId: string
      }
      cookie?: never
    }
    requestBody: components['requestBodies']['extcampaignCampaignID']
    responses: {
      /** @description Кампания активирована */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCampaign']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  DeactivateCampaign: {
    parameters: {
      query?: never
      header?: never
      path: {
        campaignId: string
      }
      cookie?: never
    }
    requestBody: components['requestBodies']['extcampaignCampaignID']
    responses: {
      /** @description Кампания деактивирована */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCampaign']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  PatchProductCampaign: {
    parameters: {
      query?: never
      header?: never
      path: {
        campaignId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignPatchProductCampaignRequest']
      }
    }
    responses: {
      /** @description Параметры кампании обновлены */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignCampaignID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  UpdateProducts: {
    parameters: {
      query?: never
      header?: never
      path: {
        campaignId: string
      }
      cookie?: never
    }
    requestBody: components['requestBodies']['extcampaignUpdateProductsRequest']
    responses: {
      /** @description Ставки обновлены */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  AddProducts: {
    parameters: {
      query?: never
      header?: never
      path: {
        campaignId: string
      }
      cookie?: never
    }
    requestBody: components['requestBodies']['extcampaignAddProductsRequest']
    responses: {
      /** @description Товары добавлены в кампанию */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GetProductsV2: {
    parameters: {
      query?: {
        /** @description Номер страницы. */
        page?: number
        /** @description Размер страницы. */
        pageSize?: number
      }
      header?: never
      path: {
        /** @description Идентификатор кампании. */
        campaignId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Список товаров кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignGetProductsResponseV2']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  DeleteProducts: {
    parameters: {
      query?: never
      header?: never
      path: {
        campaignId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignDeleteProductsRequest']
      }
    }
    responses: {
      /** @description Товар удалён из кампании */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GetProductsCompetitiveBids: {
    parameters: {
      query?: {
        /** @description Список SKU товаров. */
        skus?: string[]
      }
      header?: never
      path: {
        /** @description Идентификатор кампании. */
        campaignId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Конкурентные ставки */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignGetProductsCompetitiveBidsResponse']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_ListSearchPromoProductsV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignListSearchPromoProductsRequestV2']
      }
    }
    responses: {
      /** @description Список товаров */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignListSearchPromoProductsResponseV2']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_GetProductsRecommendedBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignGetProductsRecommendedBidsRequest']
      }
    }
    responses: {
      /** @description Рекомендованные ставки */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "recommendedBids": {
           *         "sku1": "string",
           *         "sku2": "string"
           *       }
           *     }
           */
          'application/json': components['schemas']['extcampaignGetProductsRecommendedBidsResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_SetSearchPromoBidsV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignSetSearchPromoBidsRequestV2']
      }
    }
    responses: {
      /** @description Ставка установлена */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignSetSearchPromoBidsResponseV2extcampaignSetSearchPromoBidsResponseV2']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_GetCPOMinBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignGetProductsRecommendedBidsRequest']
      }
    }
    responses: {
      /** @description Фиксированные ставки получены */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "bids": [
           *         {
           *           "bid": 0,
           *           "sku": "string"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['extcampaignGetCPOMinBidsResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_BatchEnableProducts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignBatchEnableProductsRequest']
      }
    }
    responses: {
      /** @description Продвижение товара включено */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignBatchEnableProductsResponseextcampaignBatchEnableProductsResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_BatchDisableProducts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignBatchDisableProductsRequest']
      }
    }
    responses: {
      /** @description Продвижение товара отключено */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_DeleteSearchPromoBidsV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['extcampaignDeleteSearchPromoBidsRequestV2']
      }
    }
    responses: {
      /** @description Товар удалён */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ActivateAllSkuPromoCampaign: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Продвижение включено */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extcampaignActivateAllSkuPromoCampaignResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  DeactivateAllSkuPromoCampaign: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Продвижение выключено */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  SetAllSkuPromoCampaignBid2: {
    parameters: {
      query?: {
        bid?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ставка установлена */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_BatchEnableCarrots4: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: components['requestBodies']['extcampaignBatchEnableCarrotsRequest']
    responses: {
      /** @description Продвижение включено */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "skuToInfo": {
           *         "property1": {
           *           "error": "CARROT_ERROR_NONE",
           *           "isDisabled": false
           *         },
           *         "property2": {
           *           "error": "CARROT_ERROR_NONE",
           *           "isDisabled": true
           *         }
           *       }
           *     }
           */
          'application/json': components['schemas']['extcampaignBatchEnableCarrotsResponse']
        }
      }
      /** @description Ошибка */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  ExternalCampaign_BatchDisableCarrots4: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: components['requestBodies']['extcampaignBatchDisableCarrotsRequest']
    responses: {
      /** @description Продвижение отключено */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "skuToInfo": {
           *         "property1": {
           *           "error": "CARROT_ERROR_NONE",
           *           "isDisabled": true
           *         },
           *         "property2": {
           *           "error": "CARROT_ERROR_NONE",
           *           "isDisabled": false
           *         }
           *       }
           *     }
           */
          'application/json': components['schemas']['extcampaignBatchDisableCarrotsResponse']
        }
      }
      /** @description An unexpected error response. */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  VendorStatisticsSubmitRequest: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['extstatVendorStatisticsRequest']
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatStatisticsRequestID']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  VendorStatisticsListReports: {
    parameters: {
      query?: {
        page?: number
        pageSize?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Отчёты */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatVendorStatisticsReportsList']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  VendorStatisticsCheck: {
    parameters: {
      query: {
        vendor: boolean
      }
      header?: never
      path: {
        UUID: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Информация об отчёте */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['extstatVendorStatisticsResponse']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
  GetVendorTag: {
    parameters: {
      query: {
        orgId: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Метка организации */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "tag": "vendor_org_42"
           *     }
           */
          'application/json': components['schemas']['extorganisationGetVendorTagResponse']
        }
      }
      /** @description Ошибка запроса */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['rpcStatus']
        }
      }
    }
  }
}
