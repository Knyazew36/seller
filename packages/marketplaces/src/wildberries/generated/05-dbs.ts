// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v3/dbs/orders/new': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список новых сборочных заданий
     * @description Метод возвращает список всех новых [сборочных заданий](/openapi/dbs#tag/dbsAssemblyOrders), которые есть у продавца на момент запроса.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
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
    get: operations['getV3DbsOrdersNew']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbs/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о завершенных сборочных заданиях
     * @description Метод возвращает информацию о завершенных [сборочных заданиях](/openapi/dbs#tag/dbsAssemblyOrders) после продажи или отмены заказа.
     *     <br><br>
     *     Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
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
    get: operations['getV3DbsOrders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/final-price': {
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
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 150 запросов | 400 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersFinalPrice']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbs/groups/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить информацию о платной доставке
     * @description Метод возвращает информацию о платной доставке сборочных заданий, которые поступили на один склад (`warehouseId`) в рамках одной транзакции покупателя (`orderUid`).
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
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
    post: operations['postV3DbsGroupsInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbs/orders/client': {
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
     * @description Метод возвращает информацию о покупателе по ID сборочных заданий.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
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
    post: operations['postV3DbsOrdersClient']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/b2b/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Информация о покупателе B2B
     * @description Метод возвращает данные B2B-покупателей по ID сборочных заданий:
     *       - ИНН
     *       - КПП
     *       - Наименование организации
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersB2bInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbs/orders/delivery-date': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить дату и время доставки
     * @description Метод возвращает информацию о выбранных покупателем дате и времени доставки заказов.
     *     <br>
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
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
    post: operations['postV3DbsOrdersDeliveryDate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/status/info': {
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
     * @description Метод возвращает статусы [сборочных заданий](/openapi/dbs#tag/dbsAssemblyOrders) по их ID.
     *     <br><br>
     *     `supplierStatus` — статус сборочного задания. Триггер его изменения — действие самого продавца.
     *
     *     Возможные значения `supplierStatus`:
     *     | Статус   | Описание            | Как перевести сборочное задание в данный статус |
     *     | -------  | ---------           | --------------------------------------|
     *     | `new`      | **Новое сборочное задание** | |
     *     | `confirm`  | **На сборке**      |  [Перевести сборочное задание на сборку](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusConfirm)
     *     | `deliver`  | **В доставке**    | [Перевести сборочное задание в доставку](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusDeliver)
     *     | `receive`  | **Получено покупателем**       | [Сообщить, что заказ принят покупателем](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusReceive) <br>
     *     | `reject`   | **Отказ покупателя при получении**           |  [Сообщить, что покупатель отказался от заказа](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusReject)
     *     | `cancel`   | **Отменено продавцом**   |  [Отменить сборочное задание](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusCancel)
     *     | `cancel_missed_call` | **Отмена по причине недозвона** | Статус меняется автоматически |
     *
     *     <br><br>
     *     `wbStatus` — статус системы Wildberries.
     *
     *     Возможные значения `wbStatus`:
     *     - `waiting` — сборочное задание в работе
     *     - `sold` — заказ получен покупателем
     *     - `canceled` — отмена сборочного задания
     *     - `canceled_by_client` — покупатель отменил заказ при получении
     *     - `declined_by_client` — покупатель отменил заказ в первый чаc
     *     <br> Отмена доступна покупателю в первый час с момента заказа, если заказ не переведен на сборку
     *     - `defect` — отмена заказа по причине брака
     *     - `ready_for_pickup` — заказ прибыл на ПВЗ
     *     - `canceled_by_missed_call` — отмена по причине недозвона
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
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
    post: operations['postV3DbsOrdersStatusInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/status/cancel': {
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
     * @description Метод переводит [сборочные задания](/openapi/dbs#tag/dbsAssemblyOrders) из [статусов](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `new` и `confirm` в статус `cancel` — отменено продавцом.
     *     Отменить сборочные задания в статусе `deliver` невозможно.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца:
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
    post: operations['postV3DbsOrdersStatusCancel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/status/confirm': {
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
     * @description Метод переводит [сборочные задания](/openapi/dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `new` в статус `confirm` — на сборке.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца:
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
    post: operations['postV3DbsOrdersStatusConfirm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/stickers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить стикеры для сборочных заданий с доставкой в ПВЗ
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод возвращает стикеры для сборочных заданий с доставкой в ПВЗ в [статусах](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo):
     *       - `confirm` — на сборке
     *       - `deliver` — в доставке
     *
     *     Получить стикеры можно только в размере 580x400 px в формате PDF.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersStickers']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/status/deliver': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Перевести сборочные задания в доставку
     * @description Метод переводит [сборочные задания](/openapi/dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` в статус `deliver` — в доставке.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца:
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
    post: operations['postV3DbsOrdersStatusDeliver']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/status/receive': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Сообщить о получении заказов
     * @description Метод переводит [сборочные задания](/openapi/dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `deliver` в статус `receive` — получено покупателем.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца:
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
    post: operations['postV3DbsOrdersStatusReceive']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/status/reject': {
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
     * @description Метод переводит [сборочные задания](/openapi/dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `deliver` в статус `reject` — отказ покупателя при получении.
     *
     *     <div class="description_limit">
     *     <a href='/docs/openapi/api-information#tag/introduction/Limity-zaprosov'>Лимит запросов</a> на один профиль продавца:
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
    post: operations['postV3DbsOrdersStatusReject']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/details': {
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
     * @description Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/dbs#tag/dbsAssemblyOrders) и статусы их проверки. <br><br>
     *     Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.<br>
     *     Возможные идентификаторы маркировки:
     *       - `imei` — [IMEI](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
     *       - `uin` — [УИН](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
     *       - `gtin` — [GTIN](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
     *       - `sgtin` — [код маркировки Честного знака](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
     *       - `customsDeclaration` — [номер ДТ](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration)
     *       - `originCountryCode` — [числовой код страны происхождения товара](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersMetaDetails']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/delete': {
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
     * @description Метод удаляет значение указанных [идентификаторов маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
     *     <br><br>
     *     В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
     *       - `imei` — [IMEI](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
     *       - `uin` — [УИН](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
     *       - `gtin` — [GTIN](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
     *       - `sgtin` — [код маркировки Честного знака](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
     *       - `customsDeclaration` — [номер ДТ](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration). При удалении номера ДТ также удаляется код страны происхождения товара — `originCountryCode`
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки DBS</strong>:
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
    post: operations['postV3DbsOrdersMetaDelete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/sgtin': {
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
     * @description Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).<br>
     *     Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `sgtin`.
     *     <br><br>
     *     Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBS</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *     | Сервисный | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *     | Базовый с секретом | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *     | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersMetaSgtin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/uin': {
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
     * @description Метод обновляет УИН, уникальные идентификационные номера, в [идентификаторах маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
     *     У одного сборочного задания может быть только один УИН.<br>
     *     Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `uin`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersMetaUin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/imei': {
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
     * @description Метод обновляет IMEI в [идентификаторах маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).<br>
     *     У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.<br>
     *     Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `imei`.<br>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersMetaImei']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/gtin': {
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
     * @description Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails). У одного сборочного задания может быть только один GTIN. <br>
     *     Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `gtin`.<br>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersMetaGtin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbs/orders/meta/customs-declaration': {
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
     * @description Метод обновляет номера ДТ — деклараций на товары — и коды стран происхождения товаров в [идентификаторах маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails). У одного сборочного задания может быть только один номер ДТ. <br>
     *     Закрепить номер ДТ можно, только если выполняются все условия:
     *       - сборочное задание имеет признак B2B-продажи — `"isB2b":true` в ответе метода [получения новых сборочных заданий](/openapi/dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew)
     *       - сборочное задание находится в [статусах](/openapi/dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` или `deliver`
     *       - поле `customsDeclaration` есть в [идентификаторах маркировки сборочных заданий](/openapi/dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 500 запросов | 120 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3DbsOrdersMetaCustomsDeclaration']
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
       *       - [Получить список новых сборочных заданий](/docs/openapi/dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew)
       *       - [Получить информацию о завершенных сборочных заданиях](/docs/openapi/dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrders)
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
    /**
     * @example {
     *       "groups": [
     *         "7a2c8810-1db2-4011-9682-5c7fa33afd83",
     *         "5a8f4523-4cf2-5691-9682-5a7fd33afd73"
     *       ]
     *     }
     */
    'api.OrderGroupsRequest': {
      /** @description Список значений `groupId`. Можно получить из [новых](./dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew) и [завершенных](./dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrders) сборочных заданий */
      groups?: string[]
    }
    Error: {
      /** @description Код ошибки */
      code?: string
      /** @description Описание ошибки */
      message?: string
      /** @description Дополнительные данные ошибки */
      data?: Record<string, never> | null
    }
    /**
     * @example {
     *       "orders": [
     *         987654321,
     *         123456789
     *       ]
     *     }
     */
    OrdersRequestAPI: {
      /** @description Список ID сборочных заданий */
      orders?: number[]
    }
    'api.OrderGroup':
      | {
          /**
           * Format: UUID
           * @description ID группы сборочных заданий
           * @example 0596a30a-d11c-4210-a231-ee1c39d61fe4
           */
          groupID?: string
          /**
           * @description Стоимость платной доставки в валюте продажи, умноженная на 100
           * @example 1108
           */
          deliveryCost?: number
          /**
           * @description Стоимость платной доставки в валюте страны продавца, умноженная на 100. Предоставляется в информационных целях.
           * @example 29803
           */
          convertedDeliveryCost?: number
          /**
           * Format: ISO 4217
           * @description Код валюты продажи
           * @example 933
           */
          currencyCode?: number
          /**
           * @description Код валюты страны продавца
           * @example 643
           */
          convertedCurrencyCode?: number
        }[]
      | null
    /**
     * @example {
     *       "orders": [
     *         1234567890
     *       ]
     *     }
     */
    DeliveryDatesRequest: {
      /** @description Список ID сборочных заданий */
      orders?: number[]
    }
    /**
     * Format: int64
     * @description Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных
     * @example 13833711
     */
    Next: number
    OrderNewDBS: {
      /**
       * @description Цена в валюте продажи с учетом скидки продавца, без учета скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
       * @example 504658
       */
      salePrice?: number | null
      /**
       * @description Список идентификаторов маркировки, доступных для сборочного задания. [Указывать IMEI](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei) обязательно для [предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectAll) `Смартфоны`, `"subjectId":515`
       * @example [
       *       "uin"
       *     ]
       */
      requiredMeta?: string[] | null
      /**
       * @description Комментарий покупателя
       * @example Упакуйте в пленку, пожалуйста
       */
      comment?: string
      /** @description Опции заказа */
      options?: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         */
        isB2b?: boolean
      }
      /** @description Адрес покупателя для доставки. При доставке заказов в ПВЗ указан адрес ПВЗ */
      address?: {
        /**
         * @description Адрес доставки
         * @example Челябинская область, г. Челябинск, 51-я улица Арабкира, д. 10А, кв. 42
         */
        fullAddress?: string
        /**
         * Format: float64
         * @description Долгота
         * @example 44.519068
         */
        longitude?: number
        /**
         * Format: float64
         * @description Широта
         * @example 40.20192
         */
        latitude?: number
      }
      /**
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUID`
       * @example 165918930_629fbc924b984618a44354475ca58675
       */
      orderUid?: string
      /**
       * Format: UUID
       * @description ID группы сборочных заданий. <br> Объединяет сборочные задания, поступившие на один склад (`warehouseId`) в рамках одной транзакции покупателя (`orderUid`)
       * @example 7a2c8810-1db2-4011-9682-5c7fa33afd83
       */
      groupId?: string
      /**
       * @description Артикул продавца
       * @example one-ring-7548
       */
      article?: string
      /**
       * @description Код цвета (только для колеруемых товаров)
       * @example RAL 3017
       */
      colorCode?: string
      /**
       * @description Уникальный ID заказа. <br>
       *     Примечание: `rid` — это `srid` в ответах методов:
       *       - [Заявки покупателей на возврат](./customer-communication#tag/buyersReturns/operation/getV1Claims)
       *       - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
       *       - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
       *       - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
       *       - [Отчёт о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
       *       - [Детализации к отчётам реализации по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
       *       - [Детализации к отчётам реализации за период](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
       *       - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
       *       - [Детализации к отчётам об издержках на приём платежей за период](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
       * @example f884001e44e511edb8780242ac120002
       */
      rid?: unknown
      /**
       * Format: date-time
       * @description Дата создания сборочного задания
       * @example 2022-05-04T07:56:29Z
       */
      createdAt?: string
      /**
       * @description Тип доставки:
       *       - `dbs` — доставка силами продавца
       *       - `dbsPickupPoint` — доставка силами продавца в ПВЗ
       *       - `edbs` — экспресс-доставка силами продавца
       * @enum {string}
       */
      deliveryType?: 'dbs' | 'edbs' | 'dbsPickupPoint'
      /** @description Массив баркодов товара */
      skus?: string[]
      /**
       * Format: int64
       * @description ID сборочного задания
       * @example 13833711
       */
      id?: number
      /**
       * @description ID склада продавца, на который поступило сборочное задание
       * @example 658434
       */
      warehouseId?: number
      /**
       * @description Артикул WB
       * @example 123456789
       */
      nmId?: number
      /**
       * Format: uint64
       * @description ID размера товара в системе WB
       * @example 987654321
       */
      chrtId?: number
      /**
       * @description Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       * @example 1014
       */
      price?: number
      /**
       * @description Сумма к оплате покупателем в валюте продажи с учётом всех скидок, умноженная на 100.
       *     <br>
       *     Код валюты продажи указан в поле `currencyCode`.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *     Используйте значение поля `finalPrice`, только если в ответе метода получения [цен продавца и сумм к оплате](./dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `originalFinalPrice` из ответа того же метода
       * @example 1014
       */
      finalPrice?: number
      /**
       * @description Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *     Используйте значение поля `convertedFinalPrice`, только если в ответе метода получения [цен продавца и сумм к оплате](./dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `convertedOriginalFinalPrice` из ответа того же метода
       * @example 1014
       */
      convertedFinalPrice?: number
      /**
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
       * @example 1014
       */
      convertedPrice?: number
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
       * @example false
       */
      isZeroOrder?: boolean
      /**
       * @description ID стикера. Отображается только для заказов в ПВЗ
       * @example 123456
       */
      wbStickerId?: number
    }
    OrderDBS: {
      /** @description Адрес покупателя для доставки. При доставке заказов в ПВЗ указан адрес ПВЗ */
      address?: {
        /**
         * @description Адрес доставки
         * @example Челябинская область, г. Челябинск, 51-я улица Арабкира, д. 10А, кв. 42
         */
        fullAddress?: string
        /**
         * Format: float64
         * @description Долгота
         * @example 44.519068
         */
        longitude?: number
        /**
         * Format: float64
         * @description Широта
         * @example 40.20192
         */
        latitude?: number
      } | null
      /**
       * @description Тип доставки:
       *       - `dbs` — доставка силами продавца
       *       - `dbsPickupPoint` — доставка силами продавца в ПВЗ
       *       - `edbs` — экспресс-доставка силами продавца
       */
      deliveryType?: string
      /** @description Опции заказа */
      options?: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         */
        isB2b?: boolean
      }
      /**
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUID`
       * @example 165918930_629fbc924b984618a44354475ca58675
       */
      orderUid?: string
      /**
       * Format: UUID
       * @description ID группы сборочных заданий. <br> Объединяет сборочные задания, поступившие на один склад (`warehouseId`) в рамках одной транзакции покупателя (`orderUid`)
       * @example 7a2c8810-1db2-4011-9682-5c7fa33afd83
       */
      groupId?: string
      /**
       * @description Артикул продавца
       * @example one-ring-7548
       */
      article?: string
      /**
       * @description Код цвета (только для колеруемых товаров)
       * @example RAL 3017
       */
      colorCode?: string
      /**
       * @description Уникальный ID заказа. <br>
       *     Примечание: `rid` — это `srid` в ответах методов:
       *       - [Заявки покупателей на возврат](./customer-communication#tag/buyersReturns/operation/getV1Claims)
       *       - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
       *       - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
       *       - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
       *       - [Отчёт о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
       *       - [Детализации к отчётам реализации по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
       *       - [Детализации к отчётам реализации за период](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
       *       - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
       *       - [Детализации к отчётам об издержках на приём платежей за период](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
       * @example f884001e44e511edb8780242ac120002
       */
      rid?: unknown
      /**
       * Format: date-time
       * @description Дата создания сборочного задания
       * @example 2022-05-04T07:56:29Z
       */
      createdAt?: string
      /** @description Массив баркодов товара */
      skus?: string[]
      /**
       * Format: int64
       * @description ID сборочного задания
       * @example 13833711
       */
      id?: number
      /**
       * @description ID склада продавца, на который поступило сборочное задание
       * @example 658434
       */
      warehouseId?: number
      /**
       * @description Артикул WB
       * @example 12345678
       */
      nmId?: number
      /**
       * Format: uint64
       * @description ID размера товара в системе WB
       * @example 987654321
       */
      chrtId?: number
      /**
       * @description Цена приёмки заказов в ПВЗ, в копейках. Отображается только для заказов в ПВЗ
       * @example 50
       */
      scanPrice?: number | null
      /**
       * @description Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       * @example 1014
       */
      price?: number
      /**
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
       * @example 1014
       */
      convertedPrice?: number
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
       * @description Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *     Используйте значение поля `convertedFinalPrice`, только если в ответе метода получения [цен продавца и сумм к оплате](./dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `convertedOriginalFinalPrice` из ответа того же метода
       * @example 1014
       */
      convertedFinalPrice?: number
      /**
       * @description Сумма к оплате покупателем в валюте продажи с учётом всех скидок, умноженная на 100.
       *     <br>
       *     Код валюты продажи указан в поле `currencyCode`.
       *     <br>
       *     Предоставляется в информационных целях.
       *     <br><br>
       *     Используйте значение поля `finalPrice`, только если в ответе метода получения [цен продавца и сумм к оплате](./dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersFinalPrice) вернулось `"data": null`. Во всех остальных случаях используйте значение поля `originalFinalPrice` из ответа того же метода
       * @example 1014
       */
      finalPrice?: number
      /**
       * @description Тип товара:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `2` — сверхгабаритный товар (СГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @enum {integer}
       */
      cargoType?: 1 | 2 | 3
      /**
       * @description Комментарий покупателя
       * @example Упакуйте в пленку, пожалуйста
       */
      comment?: string
      /**
       * @description Признак заказа товара с нулевым остатком:
       *       - `false` — заказ сделан на товар с ненулевым остатком
       *       - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
       * @example false
       */
      isZeroOrder?: boolean
      /**
       * @description ID стикера. Отображается только для заказов в ПВЗ
       * @example 123456
       */
      wbStickerId?: number
    }
    DbsOnlyClientInfo: {
      /**
       * @description Подменный номер для связи с покупателем. <br>
       *     Пустое значение `""` указывает, что номер еще не назначен <br>
       * @example 79871234567
       */
      replacementPhone?: string
      /**
       * @description Резервный подменный номер телефона для связи с покупателем. <br>
       *     Используйте, если недоступен основной номер из `replacementPhone`.
       *     Чтобы позвонить покупателю, наберите этот номер и добавочный код из `phoneCode`. <br>
       *     Пустое значение `""` указывает, что номер ещё не назначен
       * @example +79871234567
       */
      phone?: string
      /** @description Имя покупателя */
      firstName?: string
      /**
       * @description Полное имя, используется для оформления документов. Например, документы на автомобиль
       * @example Иван Иван Иванович
       */
      fullName?: string
      /**
       * @description Дополнительные номера телефонов для связи с покупателем. <br>
       *     Используйте, чтобы позвонить покупателю, если недоступен основной номер из `phone`. <br>
       *     Пустое значение означает, что номер не указан
       */
      additionalPhones?: string[]
      /**
       * @description Дополнительные подменные номера телефонов для связи с покупателем.<br>
       *     Пустое значение означает, что номер не указан
       */
      replacementAdditionalPhones?: string[]
      /**
       * @description ID сборочного задания
       * @example 134567
       */
      orderID?: number
      /**
       * @description Добавочный код. <br>
       *     Пустое значение `""` указывает, что код ещё не назначен
       * @example 1234567
       */
      phoneCode?: number
      /**
       * @description Дополнительные добавочные коды. <br>
       *     Используйте, если не получилось дозвониться по добавочному коду из `phoneCode`.<br>
       *     Пустое значение `""` указывает, что код ещё не назначен
       * @example [
       *       "12345",
       *       "65498"
       *     ]
       */
      additionalPhoneCodes?: string[]
    }
    DbsOnlyClientInfoResp: {
      /** @description Информация о покупателе */
      orders?: components['schemas']['DbsOnlyClientInfo'][] | null
    }
    DeliveryDatesInfoResp: {
      orders?: {
        /**
         * @description Актуальное время доставки "с"
         * @example 11:11
         */
        dTimeFrom?: string | null
        /**
         * @description Актуальное время доставки "по"
         * @example 22:22
         */
        dTimeTo?: string | null
        /**
         * @description Прежнее время доставки "с". Доступно первые сутки после изменения
         * @example 12:30
         */
        dTimeFromOld?: string | null
        /**
         * @description Прежнее время доставки "по". Доступно первые сутки после изменения
         * @example 22:30
         */
        dTimeToOld?: string | null
        /**
         * @description Прежняя дата доставки. Доступна первые сутки после изменения
         * @example 2025-01-28
         */
        dDateOld?: string | null
        /**
         * @description Актуальная дата доставки, указанная покупателем
         * @example 2026-01-26
         */
        dDate?: string
        /**
         * @description Не используется
         * @example
         */
        dDateFrom?: string | null
        /**
         * @description Не используется
         * @example
         */
        dDateTo?: string | null
        /**
         * @description ID сборочного задания
         * @example 1234567890
         */
        id?: number
      }[]
    }
    'api.OrdersMetaDeleteRequest': {
      /**
       * @description Название идентификатора маркировки для удаления. Передаётся только одно значение
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
      orderIds: number[]
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
       * @description Массив кодов маркировки Честного знака. Допускается от 16 до 135 символов для кода одной маркировки
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
    'api.OrdersRequestV2': {
      /**
       * @description Список ID сборочных заданий
       * @example [
       *       123456,
       *       234567
       *     ]
       */
      ordersIds: number[]
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4Of-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 4299281547,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 4279781545,
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
      requestId?: string
      results?: components['schemas']['api.StatusSetResponse'][]
    }
    'api.StatusSetResponse': {
      /** @description Детали ошибки */
      errors?: components['schemas']['api.BatchErrorResponse'][]
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError?: boolean
      /**
       * @description ID сборочного задания с успешно обновлёнными данными
       * @example 123456
       */
      orderId?: number
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4Of-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 4299281547,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 1234567890,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 409,
     *               "detail": "MetaValidationFail",
     *               "metaDetails": [
     *                 {
     *                   "key": "sgtin",
     *                   "value": "0102900304495480215KE",
     *                   "decision": "sgtinInvalidFormat"
     *                 }
     *               ]
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 4279781545,
     *           "isError": false
     *         }
     *       ]
     *     }
     */
    'api.StatusSetDeliverResponses': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId?: string
      results?: components['schemas']['api.StatusSetDeliverResponse'][]
    }
    'api.StatusSetDeliverResponse': {
      /** @description Детали ошибки */
      errors?: components['schemas']['api.BatchErrorDeliverResponse'][]
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError?: boolean
      /**
       * @description ID сборочного задания с успешно обновлёнными данными
       * @example 123456
       */
      orderId?: number
    }
    'api.OrdersMetaDetailsResponse': {
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId: string
      /** @description Идентификаторы маркировки сборочных заданий и статусы их валидации */
      orders?: {
        /**
         * @description ID сборочного задания
         * @example 123456
         */
        orderId?: number
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
          code?: number
          /**
           * @description Дополнительная информация об ошибке
           * @example NotFound
           */
          detail?: string
        }[]
        /** @description Идентификаторы маркировки и статусы их валидации */
        metaDetails?: {
          /**
           * @description Идентификатор маркировки:
           *       - `imei` — [IMEI](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
           *       - `uin` — [УИН](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
           *       - `gtin` — [GTIN](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
           *       - `sgtin` — [код маркировки](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
           *       - `customsDeclaration` — [номер ДТ](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration)
           *       - `originCountryCode` — [числовой код страны происхождения](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269) post)
           * @example sgtin
           */
          key?: string
          /**
           * @description Значение идентификатора маркировки
           * @example 123456789012345
           */
          value?: string | null
          /**
           * @description Статус проверки:
           *     - `imei`
           *       - `pending` — Маркировка на проверке
           *       - `optional` — Маркировка не обязательна
           *       - `filled` — Валидация пройдена
           *       - `deadlineExceeded` — Валидация пройдена
           *       - `imeiMaySell` — Товар допущен к продаже. Валидация пройдена
           *       - `imeiSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Валидация пройдена
           *       - `required` — Обязательная маркировка не заполнена. Валидация не пройдена
           *       - `imeiInvalidFormat` — Неверный формат маркировки. Валидация не пройдена
           *       - `imeiAlreadySold` — Товар с этим IMEI уже продан. Валидация не пройдена
           *     - `uin`
           *       - `optional` — Маркировка не обязательна
           *       - `filled` — Валидация пройдена
           *     - `sgtin`
           *       - `pending` — Маркировка на проверке
           *       - `optional` — Маркировка не обязательна
           *       - `filled` — Валидация пройдена
           *       - `deadlineExceeded` — Валидация пройдена
           *       - `sgtinIntroduced` — Товар допущен к продаже. Валидация пройдена
           *       - `sgtinSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Валидация пройдена
           *       - `required` — Обязательная маркировка не заполнена. Валидация не пройдена
           *       - `sgtinInvalidFormat` — Неверный формат маркировки. Валидация не пройдена
           *       - `sgtinNotFound` — Маркировка не найдена в [Честном Знаке](https://chestnyznak.ru). Валидация не пройдена
           *       - `sgtinEmitted` —  Маркировка эмитирована. Валидация не пройдена
           *       - `sgtinApplied` — Не пройдена процедура Ввод в оборот. Валидация не пройдена
           *       - `sgtinWrittenOff` — Списан. Валидация не пройдена
           *       - `sgtinRetired` — Выбыл. Валидация не пройдена
           *       - `sgtinWithdrawn` — Выбыл. Валидация не пройдена
           *       - `sgtinDisaggregation` — Расформирован. Валидация не пройдена
           *       - `sgtinDisaggregated` — Расформирован. Валидация не пройдена
           *       - `sgtinAppliedNotPaid` — Не оплачен. Валидация не пройдена
           *     - `gtin`
           *       - `optional` — Маркировка не обязательна
           *       - `filled` — Валидация пройдена
           *     - `customsDeclaration`
           *       - `optional` — Маркировка не обязательна
           *       - `filled` — Валидация пройдена
           * @example sgtinIntroduced
           */
          decision?: string
        }[]
      }[]
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
      errors?: components['schemas']['api.BatchErrorResponse'][]
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId?: number
      /**
       * @description Статус сборочного задания, установленный продавцом
       * @example deliver
       */
      supplierStatus?: string
      /**
       * @description Статус сборочного задания в системе Wildberries
       * @example waiting
       */
      wbStatus?: string
    }
    'api.OrdersCodeRequest': {
      orders: components['schemas']['api.OrderCodeRequest'][]
    }
    'api.OrderCodeRequest': {
      /**
       * @description Код подтверждения. <br> Отображается у покупателя на сайте и в приложении Wildberries
       * @example 741852
       */
      code?: string
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId?: number
    }
    'api.BatchError': {
      /**
       * @description Детали ошибки
       * @example {}
       */
      detail?: Record<string, never>
      /**
       * @description ID внутреннего сервиса WB
       * @example dbs-public-api
       */
      origin?: string
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId?: string
      /**
       * @description Заголовок ошибки
       * @example IncorrectRequest
       */
      title?: string
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
    'api.BatchErrorDeliverResponse': {
      /**
       * @description Код ошибки:
       *       - `404`
       *       - `409`
       * @example 404
       */
      code?: number
      /**
       * @description - `NotFound` — сборочное задание не найдено
       *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       *     - `ImeiIsNotFilled` — не заполнен IMEI
       *     - `MetaValidationFail` — ошибки валидации идентификатора маркировки
       * @example MetaValidationFail
       */
      detail?: string
      /** @description Детали ошибки валидации идентификаторов маркировки */
      metaDetails?: {
        /**
         * @description Идентификатор маркировки
         * @example sgtin
         */
        key?: string
        /**
         * @description Значение идентификатора маркировки
         * @example 1234567890
         */
        value?: string
        /**
         * @description Статус проверки:
         *     - `sgtin`
         *       - `sgtinInvalidFormat` — Неверный формат маркировки
         *       - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru)
         *       - `sgtinEmitted` —  Маркировка эмитирована
         *       - `sgtinApplied` — Не пройдена процедура Ввод в оборот
         *       - `sgtinWrittenOff` — Списан
         *       - `sgtinRetired` — Выбыл
         *       - `sgtinWithdrawn` — Выбыл
         *       - `sgtinDisaggregation` — Расформирован
         *       - `sgtinDisaggregated` — Расформирован
         *       - `sgtinAppliedNotPaid` — Не оплачен
         *       - `pending` — Маркировка на проверке
         * @example sgtinEmitted
         */
        decision?: string
      }[]
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
    'api.Error': {
      /**
       * @description Детали ошибки
       * @example {}
       */
      detail?: Record<string, never>
      /**
       * @description ID внутреннего сервиса WB
       * @example dbs-public-api
       */
      origin?: string
      /**
       * @description Уникальный ID запроса
       * @example f1787bd2d1fdс35d6f537316514у4a05
       */
      requestId?: string
      /**
       * @description Заголовок ошибки
       * @example FailedToUpdateMeta
       */
      title?: string
    }
    /**
     * @example {
     *       "requestId": "03615778-eb9e-4f55-b4O4-fd3ac0fad2сc",
     *       "results": [
     *         {
     *           "orderId": 4299281547,
     *           "isError": true,
     *           "errors": [
     *             {
     *               "code": 404,
     *               "detail": "NotFound"
     *             }
     *           ]
     *         },
     *         {
     *           "orderId": 4279781545,
     *           "isError": false,
     *           "data": {
     *             "orgName": "ИП Иванов И.И.",
     *             "inn": "8888888888",
     *             "kpp": ""
     *           }
     *         }
     *       ]
     *     }
     */
    'api.B2bClientInfoResponses': {
      /** @description Уникальный ID запроса */
      requestId: string
      results?: components['schemas']['api.B2bClientInfoResponse'][]
    }
    'api.B2bClientInfoResponse': {
      data?: components['schemas']['api.B2bClientInfo']
      /** @description Детали ошибки */
      errors?: {
        /** @description Код ошибки */
        code?: number
        /** @description Описание ошибки */
        detail?: string
      }[]
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError: boolean
      /**
       * @description ID сборочного задания
       * @example 123456
       */
      orderId: number
    }
    /** @description Данные покупателя B2B */
    'api.B2bClientInfo': {
      /** @description Индивидуальный номер налогоплательщика (ИНН) */
      inn?: string
      /** @description Код причины постановки на учёт (КПП) */
      kpp?: string
      /** @description Наименование организации */
      orgName?: string
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
        'application/json': components['schemas']['api.BatchError']
      }
    }
    /** @description Не найдено */
    NotFound: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "code": "NotFound",
         *       "message": ""
         *     }
         */
        'application/json': components['schemas']['Error']
      }
    }
  }
  parameters: {
    /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноименного поля в ответе. */
    Next: number
    /** @description Параметр пагинации. Устанавливает предельное количество возвращаемых данных. */
    Limit: number
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV3DbsOrdersNew: {
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
            /** @description Список новых сборочных заданий */
            orders?: components['schemas']['OrderNewDBS'][]
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV3DbsOrders: {
    parameters: {
      query: {
        /** @description Параметр пагинации. Устанавливает предельное количество возвращаемых данных. */
        limit: components['parameters']['Limit']
        /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноименного поля в ответе. */
        next: components['parameters']['Next']
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
          'application/json': {
            next?: components['schemas']['Next']
            orders?: components['schemas']['OrderDBS'][]
          }
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
  postV3DbsOrdersFinalPrice: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['OrdersRequestAPI']
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
          /**
           * @example {
           *       "detail": {},
           *       "origin": "dbs-public-api",
           *       "requestId": "f1787bd2d1fdс35d6f537316514у4a05",
           *       "title": "AccessDenied"
           *     }
           */
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsGroupsInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrderGroupsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.OrderGroup']
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
  postV3DbsOrdersClient: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['OrdersRequestAPI']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DbsOnlyClientInfoResp']
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
      404: components['responses']['NotFound']
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersB2bInfo: {
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
          'application/json': components['schemas']['api.B2bClientInfoResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersDeliveryDate: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DeliveryDatesRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeliveryDatesInfoResp']
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
  postV3DbsOrdersStatusInfo: {
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
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersStatusCancel: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersStatusConfirm: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersStickers: {
    parameters: {
      query: {
        /** @description Формат стикера */
        type: 'pdf'
        /** @description Ширина стикера */
        width: 58
        /** @description Высота стикера */
        height: 40
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Список ID сборочных заданий */
          orders: number[]
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
          'application/json': {
            /** @description Стикеры */
            stickers?: {
              /**
               * Format: int64
               * @description ID сборочного задания
               * @example 5346346
               */
              orderId: number
              /**
               * @description Первая часть ID стикера
               * @example 231648
               */
              partA: string
              /**
               * @description Вторая часть ID стикера
               * @example 9753
               */
              partB: string
              /**
               * @description Закодированное значение стикера
               * @example !uKEtQZVx
               */
              barcode: string
              /**
               * @description Полное представление стикера, кодировка base64
               * @example JVBER...ZWYKMTM5MQolJUVPRg==
               */
              file: string
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
          /**
           * @example {
           *       "code": "AccessDenied",
           *       "message": ""
           *     }
           */
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersStatusDeliver: {
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
          'application/json': components['schemas']['api.StatusSetDeliverResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersStatusReceive: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersCodeRequest']
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
            /**
             * @description Уникальный ID запроса
             * @example f1787bd2d1fdс35d6f537316514у4a05
             */
            requestId?: string
            results?: {
              /** @description Детали ошибки */
              errors?: {
                /**
                 * @description Код ошибки
                 * @example 404
                 */
                code?: number
                /**
                 * @description - `NotFound` — сборочное задание не найдено
                 *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
                 *     - `SGTINIsNotFilled` — обязательный [код маркировки](./dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin) не указан
                 * @example NotFound
                 */
                detail?: string
              }[]
              /**
               * @description Есть ли ошибки
               * @example true
               */
              isError?: boolean
              /**
               * @description ID сборочного задания с успешно обновлёнными данными
               * @example 123456
               */
              orderId?: number
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
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersStatusReject: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['api.OrdersCodeRequest']
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
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersMetaDetails: {
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
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersMetaDelete: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка удаления идентификаторов маркировки */
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
  postV3DbsOrdersMetaSgtin: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbsOrdersMetaUin: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка обновления идентификаторов маркировки */
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
  postV3DbsOrdersMetaImei: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка обновления идентификаторов маркировки */
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
  postV3DbsOrdersMetaGtin: {
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
          'application/json': components['schemas']['api.StatusSetResponses']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.BatchError']
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
          'application/json': components['schemas']['api.BatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка обновления идентификаторов маркировки */
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
  postV3DbsOrdersMetaCustomsDeclaration: {
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
             * @description Числовой код страны происхождения товара из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269). Необходимо указывать только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
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
          'application/json': components['schemas']['api.StatusSetResponses']
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
      404: components['responses']['NotFound']
      /** @description Ошибка добавления маркировки */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      429: components['responses']['429']
    }
  }
}
