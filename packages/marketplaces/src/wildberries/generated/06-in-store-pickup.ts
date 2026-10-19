// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v3/click-collect/orders/new': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список новых сборочных заданий
     * @description Метод возвращает список всех новых [сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders), которые есть у продавца на момент запроса.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    get: operations['getV3ClickCollectOrdersNew']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/click-collect/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о завершённых сборочных заданиях
     * @description Метод возвращает информацию о завершённых сборочных заданиях после продажи или отмены заказа.
     *     <br><br>
     *     Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    get: operations['getV3ClickCollectOrders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/final-price': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить цены продавца и суммы к оплате
     * @description Метод возвращает:
     *       - цены продавца без учёта скидок
     *       - суммы к оплате покупателем с учетом всех скидок и кэшбека
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 150 запросов | 400 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersFinalPrice']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/status/confirm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Перевести сборочные задания на сборку
     * @description Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `new` — новый — в статус `confirm` — на сборке.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersStatusConfirm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/status/prepare': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Сообщить, что сборочные задания готовы к выдаче
     * @description Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` — на сборке — в статус `prepare` — готово к выдаче.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersStatusPrepare']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/click-collect/orders/client': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Информация о покупателе
     * @description Метод возвращает информацию о покупателе по ID сборочного задания.
     *     <br><br>
     *     Доступно только для сборочных заданий в статусах:
     *       - `confirm` — на сборке
     *       - `prepare` — готов к выдаче
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersClient']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/click-collect/orders/client/identity': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Проверить, что заказ принадлежит покупателю
     * @description Метод сообщает, принадлежит ли проверяемый заказ покупателю или нет по переданному коду.
     *     <br><br>
     *     Доступно, если хотя бы одно сборочное задание из заказа находится в статусе prepare - готов к выдаче.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 30 запросов | 2 сек | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersClientIdentity']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/status/receive': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Сообщить, что заказы приняты покупателями
     * @description Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `prepare` — готово к выдаче — в статус `receive` — получено покупателем.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersStatusReceive']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/status/reject': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Сообщить об отказе от заказов
     * @description Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `prepare` — готово к выдаче — в статус `reject` — отказ при получении.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersStatusReject']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/status/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить статусы сборочных заданий
     * @description Метод возвращает статусы [сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) по их ID.
     *     <br><br>
     *     `supplierStatus` — статус сборочного задания. Триггер его изменения - действие самого продавца.
     *
     *     Возможные значения `supplierStatus`:
     *     | Статус   | Описание            | Как перевести сборочное задание в данный статус |
     *     | -------  | ---------           | --------------------------------------|
     *     | `new`      | **Новое сборочное задание** |
     *     | `confirm`  | **На сборке**  | 	[Перевести сборочное задание на сборку](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusConfirm)
     *     | `prepare`  | **Готов к выдаче** | 	[Сообщить, что сборочное задание готово к выдаче](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusPrepare)
     *     | `receive`  | **Получено покупателем**   | [Сообщить, что заказ принят покупателем](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusReceive)
     *     | `reject`  | **Отказ покупателя при получении**    |  	[Сообщить, что покупатель отказался от заказа](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusReject)
     *     | `cancel`   | **Отменено продавцом**    |  	[Отменить сборочное задание](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusCancel)
     *     | `cancel_shelf_life` | **Отмена по истечении срока хранения**    |  	Переводится автоматически по возникновению события
     *
     *     <br><br>
     *     `wbStatus` — статус системы Wildberries.
     *
     *     Возможные значения `wbStatus`:
     *     - `waiting` - сборочное задание в работе
     *     - `sold` - заказ получен покупателем
     *     - `canceled` - отмена сборочного задания
     *     - `canceled_by_client` - покупатель отменил заказ при получении
     *     - `declined_by_client` - покупатель отменил заказ в первый чаc
     *     <br> Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку
     *     - `defect` - отмена заказа по причине брака
     *     - `ready_for_pickup` - заказ готов к выдаче
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersStatusInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/status/cancel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отменить сборочные задания
     * @description Переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статусов](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `new`, `confirm`, `prepare` в статус `cancel` — отменено продавцом.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersStatusCancel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить идентификаторы маркировки сборочных заданий
     * @description Метод возвращает идентификаторы маркировки [сборочных заданий ](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) и статусы их проверки.<br><br>
     *
     *     Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.<br>
     *     Возможные идентификаторы маркировки:
     *       - `imei` — [IMEI](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
     *       - `uin` — [УИН](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
     *       - `gtin` — [GTIN](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
     *       - `sgtin` — [код маркировки](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
     *       - `customsDeclaration` — [номер ДТ](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration)
     *       - `originCountryCode` — [числовой код страны происхождения товара](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 150 запросов | 400 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaDetails']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/delete': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Удалить идентификаторы маркировки сборочных заданий
     * @description Метод удаляет значения указанных [идентификаторов маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).
     *     <br><br>
     *     В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
     *       - `imei` — [IMEI](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
     *       - `uin` — [УИН](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
     *       - `gtin` — [GTIN](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
     *       - `sgtin` — [код маркировки](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
     *       - `customsDeclaration` — [номер ДТ](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration). При удалении номера ДТ также удаляется код страны происхождения товара — `originCountryCode`
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 150 запросов | 400 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaDelete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/sgtin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Закрепить коды маркировки Честного знака за сборочными заданиями
     * @description Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).<br>
     *     Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `sgtin`.
     *     <br><br>
     *     Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 20 запросов | 3 сек | 500 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaSgtin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/uin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Закрепить УИН за сборочными заданиями
     * @description Метод обновляет УИН, уникальные идентификационные номера, в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один УИН. <br>
     *     Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `uin`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 20 запросов | 3 сек | 500 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaUin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/imei': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Закрепить IMEI за сборочными заданиями
     * @description Метод обновляет IMEI в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). <br>
     *     У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.<br>
     *     Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `imei`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 20 запросов | 3 сек | 500 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaImei']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/gtin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Закрепить GTIN за сборочными заданиями
     * @description Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один GTIN. <br>
     *     Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `gtin`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 20 запросов | 3 сек | 500 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaGtin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/click-collect/orders/meta/customs-declaration': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Закрепить номера ДТ за сборочными заданиями
     * @description Метод обновляет номера ДТ — деклараций на товары — и коды стран происхождения товаров в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один номер ДТ. <br>
     *     Закрепить номер ДТ можно, только если выполняются все условия:
     *       - сборочное задание имеет признак B2B-продажи — `"isB2b":true` в ответе метода [получения новых сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew)
     *       - сборочное задание находится в [статусах](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` или `prepare`
     *       - поле `customsDeclaration` есть в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки Самовывоз</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 20 запросов | 3 сек | 500 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3ClickCollectOrdersMetaCustomsDeclaration']
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
    'api.OrdersFinalPriceResponse': {
      /** @description Уникальный ID запроса */
      requestId: string
      /** @description Данные ответа */
      results: components['schemas']['api.OrderFinalPriceResult'][]
    }
    'api.OrderFinalPriceResult': {
      /** @description ID сборочного задания */
      orderId: number
      /**
       * @description Данные сборочного задания.
       *     <br><br>
       *     Если `"data":{}`, данные формируются. Повторите запрос позднее. Максимальное время формирования данных около 1 минуты.
       *     <br><br>
       *     Если `data` отсутствует, данных по сборочному заданию не предусмотрено. Используйте данные из ответов методов:
       *       - [Получить список новых сборочных заданий](/docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew)
       *       - [Получить информацию о завершенных сборочных заданиях](/docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrders)
       */
      data?: {
        /** @description Цена продавца в валюте продажи без учёта скидок, умноженная на 100. Предоставляется в информационных целях */
        originalPrice?: number
        /** @description Цена продавца в валюте страны продавца без учёта скидок, умноженная на 100. Предоставляется в информационных целях */
        convertedOriginalPrice?: number
        /** @description Сумма к оплате покупателем в валюте продажи с учетом всех скидок и кэшбека, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях */
        originalFinalPrice?: number
        /** @description Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок и кэшбека, умноженная на 100. Предоставляется в информационных целях */
        convertedOriginalFinalPrice?: number
        /**
         * Format: ISO 4217
         * @description Код валюты продажи
         */
        currencyCode?: number
        /**
         * Format: ISO 4217
         * @description Код валюты страны продавца
         */
        convertedCurrencyCode?: number
      }
      /** @description Детали ошибки */
      errors?: components['schemas']['api.BatchErrorFinalPriceResponse'][]
      /** @description Есть ли ошибки */
      isError?: boolean
    }
    'api.CheckedIdentity': {
      /**
       * @description Принадлежит ли заказ покупателю:
       *       - `true` — принадлежит
       *       - `false` — значение не применяется. Если заказ не принадлежит покупателю, вы получите ответ со статус-кодом `409`
       */
      ok?: boolean
    }
    Error: {
      /** @description Код ошибки */
      code?: string
      /** @description Описание ошибки */
      message?: string
      /** @description Дополнительные данные, обогащающие ошибку */
      data?: Record<string, never> | null
    }
    /**
     * @example {
     *       "orderCode": "170046918-0011",
     *       "passcode": "4567"
     *     }
     */
    'api.CheckIdentityRequest': {
      /** @description Уникальный ID заказа покупателя */
      orderCode?: string
      /** @description Код подтверждения */
      passcode?: string
    }
    'api.Error': {
      code?: string
      data?: Record<string, never>
      message?: string
    }
    'api.NewOrder': {
      /** @description Планируемая дата доставки */
      ddate?: string
      /**
       * @description Цена продавца в валюте продажи с учётом скидки продавца, без учёта скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
       * @example 504600
       */
      salePrice?: number | null
      /** @description Список идентификаторов маркировки, доступных для сборочного задания */
      requiredMeta?: string[] | null
      /** @description Артикул продавца */
      article?: string
      /**
       * @description Уникальный ID заказа. <br>
       *     Примечание: `rid` — это `srid` в ответах методов:
       *       - [Заявки покупателей на возврат](./customer-communication#tag/buyersReturns/operation/getV1Claims)
       *       - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
       *       - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
       *       - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
       *       - [Отчет о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
       *       - [Детализации к отчётам реализации по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
       *       - [Детализации к отчётам реализации за период](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
       *       - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
       *       - [Детализации к отчётам об издержках на приём платежей за период](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
       */
      rid?: string
      /**
       * Format: date-time
       * @description Дата и время создания сборочного задания
       */
      createdAt?: string
      /**
       * @description Адрес магазина (склада продавца), на который поступило сборочное
       *     задание
       */
      warehouseAddress?: string
      /** @description Уникальный ID заказа покупателя */
      orderCode?: string
      /**
       * @description Режим оплаты:
       *       - `prepaid` — предоплатный
       *       - `postpaid` — постоплатный
       *       - `unknown` — неизвестный
       * @example prepaid
       */
      payMode?: string
      /** @description Массив баркодов товара */
      skus?: string[]
      /** @description ID сборочного задания */
      id?: number
      /**
       * @description ID склада продавца, на который поступило сборочное
       *     задание
       */
      warehouseId?: number
      /** @description Артикул WB */
      nmId?: number
      /**
       * Format: uint64
       * @description ID размера товара в системе WB
       */
      chrtId?: number
      /**
       * @description Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100.
       *     Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       */
      price?: number
      /**
       * @description Сумма к оплате покупателем в валюте продажи с учётом всех скидок, умноженная на 100.
       *     <br>
       *     Код валюты продажи указан в поле `currencyCode`.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *     Используйте значение поля `finalPrice`, только если в ответе метода [POST /api/marketplace/v3/click-collect/orders/final-price](./docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `originalFinalPrice` из ответа указанного метода
       * @example 5000
       */
      finalPrice?: number
      /**
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       * @example 5000
       */
      convertedPrice?: number
      /**
       * @description Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *      Используйте значение поля `convertedFinalPrice`, только если в ответе метода [POST /api/marketplace/v3/click-collect/orders/final-price](./docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `convertedOriginalFinalPrice` из ответа того же метода
       * @example 5000
       */
      convertedFinalPrice?: number
      /**
       * Format: ISO 4217
       * @description Код валюты продажи
       * @example 643
       */
      currencyCode?: number
      /**
       * Format: ISO 4217
       * @description Код валюты страны продавца
       * @example 643
       */
      convertedCurrencyCode?: number
      /**
       * @description Тип товара:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `2` — сверхгабаритный товар (СГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @enum {integer}
       */
      cargoType?: 1 | 2 | 3
      /**
       * @description Признак заказа товара с нулевым остатком:
       *       - `false` — заказ сделан на товар с ненулевым остатком
       *       - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
       */
      isZeroOrder?: boolean
      /**
       * @description Указал ли покупатель, что ему требуется услуга шиномонтажа:
       *       - `false` — нет, услуга шиномонтажа не требуется
       *       - `true` — да, услуга шиномонтажа требуется
       * @example false
       */
      tireService?: boolean
      /** @description Опции заказа */
      options?: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         */
        isB2b?: boolean
      }
    }
    'api.NewOrders': {
      /** @description Список сборочных заданий */
      orders?: components['schemas']['api.NewOrder'][]
    }
    'api.Order': {
      /**
       * @description Артикул продавца
       * @example wb6scpbwvp
       */
      article?: string
      /**
       * @description Тип товара:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `2` — сверхгабаритный товар (СГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @example 1
       * @enum {integer}
       */
      cargoType?: 1 | 2 | 3
      /**
       * Format: uint64
       * @description ID размера товара в системе WB
       * @example 12345676
       */
      chrtId?: number
      /**
       * Format: date-time
       * @description Дата и время создания сборочного задания
       * @example 2025-03-21T09:53:31Z
       */
      createdAt?: string
      /**
       * @description Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100.
       *     Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       * @example 5000
       */
      price?: number
      /**
       * @description Сумма к оплате покупателем в валюте продажи с учётом всех скидок, умноженная на 100.
       *     <br>
       *     Код валюты продажи указан в поле `currencyCode`.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *     Используйте значение поля `finalPrice`, только если в ответе метода [POST /api/marketplace/v3/click-collect/orders/final-price](./docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `originalFinalPrice` из ответа указанного метода
       * @example 5000
       */
      finalPrice?: number
      /**
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       * @example 5000
       */
      convertedPrice?: number
      /**
       * @description Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *      Используйте значение поля `convertedFinalPrice`, только если в ответе метода [POST /api/marketplace/v3/click-collect/orders/final-price](./docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `convertedOriginalFinalPrice` из ответа того же метода
       * @example 5000
       */
      convertedFinalPrice?: number
      /**
       * Format: ISO 4217
       * @description Код валюты продажи
       * @example 643
       */
      currencyCode?: number
      /**
       * Format: ISO 4217
       * @description Код валюты страны продавца
       * @example 643
       */
      convertedCurrencyCode?: number
      /**
       * @description ID сборочного задания
       * @example 123456789
       */
      id?: number
      /**
       * @description Признак заказа товара с нулевым остатком:
       *       - `false` — заказ сделан на товар с ненулевым остатком
       *       - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
       * @example false
       */
      isZeroOrder?: boolean
      /**
       * @description Артикул WB
       * @example 1234567898765
       */
      nmId?: number
      /**
       * @description Уникальный ID заказа покупателя
       * @example 21117866-0006
       */
      orderCode?: string
      /**
       * @description Режим оплаты:
       *       - `prepaid` — предоплатный
       *       - `postpaid` — постоплатный
       *       - `unknown` — неизвестный
       * @example prepaid
       */
      payMode?: string
      /**
       * @description Уникальный ID заказа. <br>
       *     Примечание: `rid` — это `srid` в ответах методов:
       *       - [Заявки покупателей на возврат](./customer-communication#tag/buyersReturns/operation/getV1Claims)
       *       - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
       *       - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
       *       - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
       *       - [Отчет о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
       *       - [Детализации к отчётам реализации по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
       *       - [Детализации к отчётам реализации за период](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
       *       - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
       *       - [Детализации к отчётам об издержках на приём платежей за период](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
       * @example 5044304527347733263.0.0
       */
      rid?: string
      /**
       * @description Массив баркодов товара
       * @example [
       *       "2043227963145"
       *     ]
       */
      skus?: string[]
      /**
       * @description Адрес магазина (склада продавца), на который поступило сборочное задание
       * @example Москва, район Якиманка, Софийская набережная, 4 с1
       */
      warehouseAddress?: string
      /**
       * @description ID склада продавца, на который поступило сборочное задание
       * @example 1162157
       */
      warehouseId?: number
      /**
       * @description Указал ли покупатель, что ему требуется услуга шиномонтажа:
       *       - `false` — нет, услуга шиномонтажа не требуется
       *       - `true` — да, услуга шиномонтажа требуется
       * @example false
       */
      tireService?: boolean
      /** @description Опции заказа */
      options?: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         * @example false
         */
        isB2b?: boolean
      }
    }
    'api.OrderClientInfo': {
      /**
       * @description Телефон для связи с покупателем. Чтобы связаться с покупателем наберите
       *     этот номер и введите добавочный код. Данный номер не является прямым
       *     номером покупателя
       * @example +7111111111
       */
      phone?: string
      /**
       * @description Имя покупателя
       * @example Ольга
       */
      firstName?: string
      /**
       * @description ID сборочного задания
       * @example 4564152
       */
      orderID?: number
      /**
       * @description Добавочный код
       * @example 3535
       */
      phoneCode?: number
    }
    'api.OrderClientInfoResp': {
      orders?: components['schemas']['api.OrderClientInfo'][]
    }
    'api.Orders': {
      /**
       * @description Параметр пагинации. Содержит значение, которое необходимо указать в
       *     запросе для получения следующего пакета данных
       * @example 12345566
       */
      next?: number
      /** @description Список сборочных заданий */
      orders?: components['schemas']['api.Order'][]
    }
    /**
     * @example {
     *       "orders": [
     *         1234567
     *       ]
     *     }
     */
    'api.OrdersRequest': {
      /** @description Список ID сборочных заданий */
      orders?: number[]
    }
    'api.OrdersSGTINsSetRequest': {
      orders: components['schemas']['api.SGTINs'][]
    }
    'api.SGTINs': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description Массив кодов маркировки. Допускается от 16 до 135 символов для кода одной маркировки
       * @example [
       *       "123456789012345678",
       *       "1234567890123456"
       *     ]
       */
      sgtins: string[]
    }
    'api.OrdersUINSetRequest': {
      orders: components['schemas']['api.UIN'][]
    }
    'api.UIN': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description УИН
       * @example 1234568909091232
       */
      uin: string
    }
    'api.OrdersIMEISetRequest': {
      orders: components['schemas']['api.IMEI'][]
    }
    'api.IMEI': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description IMEI
       * @example 654321741987258
       */
      imei: string
    }
    'api.OrdersGTINSetRequest': {
      orders: components['schemas']['api.GTIN'][]
    }
    'api.GTIN': {
      /**
       * @description GTIN
       * @example 1234567890123
       */
      gtin: string
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
    }
    'api.BatchError': {
      /**
       * @description Детали ошибки
       * @example {}
       */
      detail?: Record<string, never> | null
      /**
       * @description ID внутреннего сервиса WB
       * @example market-public-api
       */
      origin: string
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: string
      /**
       * @description Заголовок ошибки
       * @example IncorrectRequest
       */
      title: string
    }
    'api.BatchErrorResponse': {
      /**
       * @description Код ошибки:
       *       - `404`
       *       - `409`
       *       - `400`
       * @example 404
       */
      code?: number
      /**
       * @description - `NotFound` — сборочное задание не найдено
       *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       *     - `ImeiIsNotFilled` — не заполнен IMEI
       *     - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       *     - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       * @example NotFound
       */
      detail?: string
    }
    'api.BatchErrorFinalPriceResponse': {
      /**
       * @description Код ошибки:
       *       - `404` — `NotFound`
       *       - `400` — `StatusMismatch`
       *       - `422` — `PriceNotCalculated`
       * @example 404
       */
      code: number
      /**
       * @description - `NotFound` — сборочное задание не найдено (`404`)
       *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания (`400`)
       *     - `PriceNotCalculated` — операция невозможна для сборочных заданий, созданных ранее 23.07.2026 (`422`)
       * @example NotFound
       */
      detail: string
    }
    'api.BatchCustomsDeclarationErrorResponse': {
      /**
       * @description Код ошибки:
       *       - `404`
       *       - `409`
       *       - `400`
       * @example 404
       */
      code: number
      /**
       * @description - `NotFound` — сборочное задание не найдено
       *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       *     - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       *     - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       * @example NotFound
       */
      detail: string
    }
    'api.MetaErrorResponse': {
      /**
       * @description Код ошибки
       * @example 404
       */
      code: number
      /**
       * @description - `NotFound` — сборочное задание не найдено
       *     - `IncorrectRequestBody` — неправильный запрос
       *     - `IncorrectRequest` — передан некорректный параметр
       * @example NotFound
       */
      detail: string
    }
    'api.OrdersErrorResponse': {
      /**
       * @description Код ошибки
       * @example 404
       */
      code: number
      /**
       * @description - `NotFound` — сборочное задание не найдено
       * @example NotFound
       */
      detail: string
    }
    'api.OrdersRequestV2': {
      /**
       * @description Список ID сборочных заданий
       * @example [
       *       123456,
       *       234567,
       *       345678
       *     ]
       */
      ordersIds: number[]
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4O4-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 123456,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 234567,
     *           "isError": false
     *         }
     *       ]
     *     }
     */
    'api.StatusSetResponses': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: unknown
      results: components['schemas']['api.StatusSetResponse'][]
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4O4-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 123456,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 234567,
     *           "isError": false
     *         }
     *       ]
     *     }
     */
    'api.CustomsDeclarationSetResponse': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: unknown
      results: components['schemas']['api.StatusSetCustomsDeclarationResponse'][]
    }
    'api.StatusSetResponse': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError: boolean
      /** @description Детали ошибки */
      errors?: components['schemas']['api.BatchErrorResponse'][]
    }
    'api.StatusSetCustomsDeclarationResponse': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError: boolean
      /** @description Детали ошибки */
      errors?: components['schemas']['api.BatchCustomsDeclarationErrorResponse'][]
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4O4-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 234567,
     *           "isError": false
     *         },
     *         {
     *           "orderId": 123456,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 345678,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 409,
     *               "detail": "MetaValidationFail",
     *               "metaDetails": [
     *                 {
     *                   "key": "imei",
     *                   "value": "359876543210925",
     *                   "decision": "imeiAlreadySold"
     *                 }
     *               ]
     *             }
     *           ]
     *         }
     *       ]
     *     }
     */
    'api.MetaDetailsResponse': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: unknown
      results: unknown
    }
    /** @description Ошибки проверки идентификаторов маркировки */
    MetaDetailsErrors: {
      /**
       * @description Идентификатор маркировки
       * @example uin
       */
      key?: string
      /**
       * @description Значение идентификатора маркировки
       * @example null
       */
      value?: string | null
      /**
       * @description Ошибки проверки идентификаторов маркировки. <br>
       *     - `imei`
       *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
       *       - `imeiInvalidFormat` — Указан неверный формат маркировки
       *       - `imeiAlreadySold` — Товар с этим IMEI уже продан
       *     - `uin`
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
       *     - `sgtin`
       *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
       *       - `sgtinInvalidFormat` — Указан неверный формат маркировки
       *       - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru)
       *       - `sgtinEmitted` —  Маркировка эмитирована
       *       - `sgtinApplied` — Не пройдена процедура Ввод в оборот
       *       - `sgtinWrittenOff` — Списан
       *       - `sgtinRetired` — Выбыл
       *       - `sgtinWithdrawn` — Выбыл
       *       - `sgtinDisaggregated` — Расформирован
       *       - `sgtinDisaggregation` — Расформирован
       *       - `sgtinAppliedNotPaid` — Не оплачен
       *     - `gtin`
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
       *     - `expiration`
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
       *     - `customsDeclaration`
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
       * @example uinMaySell
       */
      decision?: string
    }[]
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4O4-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 123456,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 234567,
     *           "isError": false
     *         }
     *       ]
     *     }
     */
    'api.OrdersResponses': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: unknown
      results: components['schemas']['api.OrdersResponse'][]
    }
    'api.OrdersResponse': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError: boolean
      /** @description Детали ошибки */
      errors?: components['schemas']['api.OrdersErrorResponse'][]
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4O4-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 123456,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 234567,
     *           "isError": false
     *         }
     *       ]
     *     }
     */
    'api.MetaSetResponses': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: unknown
      results: components['schemas']['api.MetaSetResponse'][]
    }
    'api.MetaSetResponse': {
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError: boolean
      /** @description Детали ошибки */
      errors?: components['schemas']['api.MetaErrorResponse'][]
    }
    /**
     * @example {
     *       "orders": [
     *         {
     *           "supplierStatus": "confirm",
     *           "wbStatus": "waiting",
     *           "errors": [],
     *           "orderId": 123456
     *         },
     *         {
     *           "supplierStatus": "",
     *           "wbStatus": "",
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ],
     *           "orderId": 789012
     *         }
     *       ]
     *     }
     */
    'api.OrderStatusesV2': {
      /** @description Информация о статусах */
      orders?: components['schemas']['api.OrderStatusV2'][]
    }
    'api.OrderStatusV2': {
      /** @description Информация об ошибке */
      errors?: components['schemas']['api.OrdersErrorResponse'][]
      /** @description ID сборочного задания */
      orderId: number
      /** @description Статус сборочного задания, установленный продавцом */
      supplierStatus?: string
      /** @description Статус сборочного задания в системе Wildberries */
      wbStatus?: string
    }
    'api.OrdersMetaDetailsResponse': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: string
      /** @description Идентификаторы маркировки сборочных заданий и статусы их валидации */
      orders: {
        /**
         * @description ID сборочного задания
         * @example 123456
         */
        orderId: number
        /**
         * @description Есть ли ошибки
         * @example false
         */
        isError: boolean
        /**
         * @description Информация об ошибке
         * @example []
         */
        errors?: {
          /**
           * @description Код ошибки
           * @example 404
           */
          code: number
          /**
           * @description Дополнительная информация об ошибке
           * @example NotFound
           */
          detail: string
        }[]
        /** @description Идентификаторы маркировки и статусы их валидации */
        metaDetails: {
          /**
           * @description Идентификатор маркировки:
           *       - `imei` — [IMEI](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
           *       - `uin` — [УИН](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
           *       - `gtin` — [GTIN](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
           *       - `sgtin` — [код маркировки](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
           *       - `customsDeclaration` — [номер ДТ](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration)
           *       - `originCountryCode` — [числовой код страны происхождения товара](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
           * @example imei
           */
          key: string
          /**
           * @description Значение идентификатора маркировки
           * @example 359876543210025
           */
          value?: string | null
          /**
           * @description Статусы проверки идентификатора маркировки. <br>
           *     - `imei`
           *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
           *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
           *       - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
           *       - `imeiMaySell` — Товар допущен к продаже. Проверка пройдена
           *       - `imeiSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Проверка пройдена
           *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
           *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
           *       - `imeiInvalidFormat` — Указан неверный формат маркировки. Проверка не пройдена
           *       - `imeiAlreadySold` — Товар с этим IMEI уже продан. Проверка не пройдена
           *     - `uin`
           *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
           *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
           *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена                         <br>
           *     - `sgtin`
           *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
           *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
           *       - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
           *       - `sgtinIntroduced` — Товар допущен к продаже. Проверка пройдена
           *       - `sgtinSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Проверка пройдена
           *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
           *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
           *       - `sgtinInvalidFormat` — Указан неверный формат маркировки. Проверка не пройдена
           *       - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru). Проверка не пройдена
           *       - `sgtinEmitted` —  Маркировка эмитирована. Проверка не пройдена
           *       - `sgtinApplied` — Не пройдена процедура Ввод в оборот. Проверка не пройдена
           *       - `sgtinWrittenOff` — Списан. Проверка не пройдена
           *       - `sgtinRetired` — Выбыл. Проверка не пройдена
           *       - `sgtinWithdrawn` — Выбыл. Проверка не пройдена
           *       - `sgtinDisaggregated` — Расформирован. Проверка не пройдена
           *       - `sgtinDisaggregation` — Расформирован. Проверка не пройдена
           *       - `sgtinAppliedNotPaid` — Не оплачен. Проверка не пройдена
           *     - `gtin`
           *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
           *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
           *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
           *     - `customsDeclaration`
           *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
           *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
           *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
           * @example imeiInvalidFormat
           */
          decision: string
        }[]
      }[]
    }
    'api.OrdersMetaDeleteRequest': {
      /**
       * @description Тип идентификаторов маркировки для удаления. Передаётся только одно значение
       * @example imei
       * @enum {string}
       */
      key: 'imei' | 'uin' | 'gtin' | 'sgtin' | 'customsDeclaration'
      /**
       * @description Список ID сборочных заданий
       * @example [
       *       123456,
       *       234567
       *     ]
       */
      ordersIds: number[]
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
    IncorrectRequest: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "detail": {},
         *       "origin": "market-public-api",
         *       "requestId": "f1787bd2d1fdс35d6f537316514у4a05",
         *       "title": "IncorrectRequest"
         *     }
         */
        'application/json': components['schemas']['api.BatchError']
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
  getV3ClickCollectOrdersNew: {
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
          'application/json': components['schemas']['api.NewOrders']
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV3ClickCollectOrders: {
    parameters: {
      query: {
        /** @description Количество элементов в ответе */
        limit: number
        /** @description Параметр пагинации. Чтобы получить полный список данных, укажите `0` в первом запросе. Чтобы получить следующий пакет данных, используйте значение `next` из ответа */
        next: number
        /** @description Дата начала периода в формате Unix timestamp */
        dateFrom: number
        /** @description Дата конца периода в формате Unix timestamp */
        dateTo: number
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
          'application/json': components['schemas']['api.Orders']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersFinalPrice: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.OrdersFinalPriceResponse']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersStatusConfirm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersStatusPrepare: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.MetaDetailsResponse']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersClient: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.OrderClientInfoResp']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersClientIdentity: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.CheckIdentityRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.CheckedIdentity']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.Error']
        }
      }
      /** @description Введён неверный проверочный код */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.Error']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersStatusReceive: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersStatusReject: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersStatusInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.OrderStatusesV2']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersStatusCancel: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaDetails: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.OrdersMetaDetailsResponse']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaDelete: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersMetaDeleteRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.OrdersResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaSgtin: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersSGTINsSetRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.MetaSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaUin: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersUINSetRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.MetaSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaImei: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersIMEISetRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.MetaSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaGtin: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersGTINSetRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.MetaSetResponses']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3ClickCollectOrdersMetaCustomsDeclaration: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          orders: {
            /**
             * @description Номер ДТ
             * @example 10704010/010624/0000302
             */
            customsDeclaration: string
            /** @description ID сборочного задания */
            orderId: number
            /**
             * @description Числовой код страны происхождения товара из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269). Необходимо указывать только для сборочных заданий с признаком B2B-продажи "isB2b":true
             * @example 643
             */
            originCountryCode: string
          }[]
        }
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.CustomsDeclarationSetResponse']
        }
      }
      400: components['responses']['IncorrectRequest']
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
}
