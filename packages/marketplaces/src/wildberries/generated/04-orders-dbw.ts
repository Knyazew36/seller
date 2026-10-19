// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v3/dbw/orders/new': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список новых сборочных заданий
     * @description Метод возвращает список всех новых [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders), которые есть у продавца на момент запроса.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    get: operations['getV3DbwOrdersNew']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о завершенных сборочных заданиях
     * @description Метод возвращает информацию о завершенных [сборочных заданиях](/openapi/orders-dbw#tag/dbwAssemblyOrders).
     *     <br><br>
     *     Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    get: operations['getV3DbwOrders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/delivery-date': {
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
     * @description Метод возвращает информацию о выбранных покупателем дате и времени доставки сборочных заданий.
     *     <br>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersDeliveryDate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbw/orders/client': {
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
     * @description Метод возвращает информацию о покупателях по ID сборочных заданий.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersClient']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/status': {
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
     * @description Метод возвращает статусы сборочных заданий по их ID.
     *     <br><br>
     *     `supplierStatus` — статус сборочного задания.
     *     Триггер его изменения — действие самого продавца.
     *
     *     Возможные значения `supplierStatus`:
     *     | Статус   | Описание            | Как перевести сборочное задание в данный статус |
     *     | -------  | ---------           | --------------------------------------|
     *     | `new`      | **Новое сборочное задание** | |
     *     | `confirm`  | **На сборке**      |  [Перевести сборочное задание на сборку](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/patchV3DbwOrdersOrderIdConfirm)
     *     | `complete` | **В доставке**  | [Перевести сборочное задание в доставку](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatusDeliver) |
     *     | `receive`  | **Получено покупателем**|  Переводится курьером
     *     | `reject`   | **Отказ покупателя при получении**| Переводится курьером
     *     | `cancel`   | **Отменено продавцом**   |  [Отменить сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/patchV3DbwOrdersOrderIdCancel)
     *     | `cancel_missed_call` | **Отмена по причине недозвона**<br> | Статус меняется автоматически |
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
     *     <br>
     *     Отмена доступна покупателю в первый час с момента заказа, если заказ не переведен на сборку
     *     - `defect` — отмена заказа по причине брака
     *     - `canceled_by_missed_call` — отмена заказа по причине недозвона
     *     - `postponed_delivery` — курьерская доставка отложена
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersStatus']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/{orderId}/confirm': {
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
     * Перевести на сборку
     * @description Метод переводит [сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders) в [статус](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` — на сборке.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    patch: operations['patchV3DbwOrdersOrderIdConfirm']
    trace?: never
  }
  '/api/v3/dbw/orders/stickers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить стикеры сборочных заданий
     * @description Метод возвращает список стикеров для [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrdersNew) в [статусах](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus):
     *       - `confirm` — на сборке
     *       - `complete` — в доставке
     *
     *     За один запрос можно получить максимум 100 стикеров.<br>
     *
     *     Доступные форматы стикеров:
     *       - SVG
     *       - ZPLV (вертикальный)
     *       - ZPLH (горизонтальный)
     *       - PNG
     *
     *     Доступны размеры:
     *       - 580x400 px при `width=58&height=40` в запросе
     *       - 400x300 px при `width=40&height=30` в запросе
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersStickers']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbw/orders/status/deliver': {
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
     * @description Метод переводит [сборочные задания](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrders) из [статуса](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` в статус `complete` — в доставке.
     *
     *     <div class="description_important">
     *     Проверяйте ответ метода. Сборочные задания, переведённые в доставку, вернутся с признаком `"isError":false`. Для остальных сборочных заданий смотрите причину ошибки в массиве `errors`
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersStatusDeliver']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/courier': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Информация о курьере
     * @description Метод возвращает контактные данные и номер автомобиля курьера по ID сборочного задания. <br> Для сборочных заданий в статусах `confirm`, `complete`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersCourier']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/{orderId}/cancel': {
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
     * Отменить сборочное задание
     * @description Метод отменяет [сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders) и переводит в [статус](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `cancel` — отменено продавцом.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>управление сборочными заданиями</li>
     *     </ul>
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *     | Сервисный | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *     | Базовый с секретом | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *     | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    patch: operations['patchV3DbwOrdersOrderIdCancel']
    trace?: never
  }
  '/api/marketplace/v3/dbw/orders/meta/details': {
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
     * @description Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrders) и статусы их проверки.
     *     <br><br>
     *     Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.<br>
     *     Возможные идентификаторы маркировки:
     *       - `imei` — [IMEI](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
     *       - `uin` — [УИН](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaUin)
     *       - `gtin` — [GTIN](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaGtin)
     *       - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaSgtin)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersMetaDetails']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbw/orders/meta/delete': {
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
     * @description Метод удаляет значение указанных [идентификаторов маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) для переданного ключа.
     *     <br><br>
     *     В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
     *       - `imei` — [IMEI](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
     *       - `uin` — [УИН](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaUin)
     *       - `gtin` — [GTIN](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
     *       - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaSgtin)
     *
     *     Можно передать только один ключ.
     *
     *       <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersMetaDelete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/dbw/orders/meta/sgtin': {
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
     * @description Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).<br>
     *     Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `sgtin`.
     *     <br><br>
     *     Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для следующих методов DBW:
     *     <ul>
     *         <li>получение и обновление списка контактов</li>
     *         <li>получение и удаление идентификаторов маркировки</li>
     *         <li>методы сборочных заданий</li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    post: operations['postV3DbwOrdersMetaSgtin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/{orderId}/meta/uin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить УИН за сборочным заданием
     * @description Метод обновляет УИН, уникальный идентификационный номер, в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails). У одного сборочного задания может быть только один УИН. <br>
     *     Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `uin`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBW</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    put: operations['putV3DbwOrdersOrderIdMetaUin']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/{orderId}/meta/imei': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить IMEI за сборочным заданием
     * @description Метод обновляет IMEI в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails). <br>
     *     У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.<br>
     *     Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `imei`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBW</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    put: operations['putV3DbwOrdersOrderIdMetaImei']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/orders/{orderId}/meta/gtin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить GTIN за сборочным заданием
     * @description Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails). У одного сборочного задания может быть только один GTIN. <br>
     *     Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `gtin`.
     *     <br><br>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки DBW</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *     </div>
     */
    put: operations['putV3DbwOrdersOrderIdMetaGtin']
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
      /** @description Уникальный ID запроса, содержащего ошибки. */
      requestId?: string
      results: components['schemas']['api.StatusSetResponse'][]
    }
    'api.StatusSetResponse': {
      /** @description Детали ошибки */
      errors?: components['schemas']['api.BatchErrorResponse'][]
      /**
       * @description Есть ли ошибки
       * @example true
       */
      isError: boolean
      /**
       * @description ID сборочного задания с успешно обновлёнными данными
       * @example 123456
       */
      orderId: number
    }
    'api.BatchErrorResponse': {
      /**
       * @description Код ошибки:
       *       - `404`
       *       - `409`
       * @example 404
       */
      code: number
      /**
       * @description - `NotFound` — сборочное задание не найдено
       *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       *     - `ImeiIsNotFilled` — не заполнен IMEI
       *     - `MetaValidationFail` — ошибки валидации идентификаторов маркировки
       * @example NotFound
       */
      detail: string
      /** @description Детали ошибки валидации идентификаторов маркировки */
      metaDetails?: {
        /**
         * @description Идентификатор маркировки
         * @example sgtin
         */
        key: string
        /**
         * @description Значение идентификатора маркировки
         * @example 1234567890
         */
        value?: string | null
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
        decision: string
      }[]
    }
    'api.MetaDeleteResponses': {
      /** @description Уникальный ID запроса. Отображается для ответов с ошибками */
      requestId?: string
      results: {
        /** @description Детали ошибки */
        errors?: {
          /**
           * @description Код ошибки:
           *       - `404`
           *       - `409`
           */
          code: number
          /**
           * @description - `NotFound` — сборочное задание не найдено
           *     - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
           *     - `ImeiIsNotFilled` — не заполнен IMEI
           */
          detail: string
        }[]
        /** @description Есть ли ошибки */
        isError: boolean
        /** @description ID сборочного задания с успешно обновлёнными данными */
        orderId: number
      }[]
    }
    'api.OrdersRequestV2': {
      /**
       * @description Список ID сборочных заданий
       * @example [
       *       1234678898
       *     ]
       */
      ordersIds: number[]
    }
    'api.OrdersMetaDleteRequestV2': {
      /**
       * @description Название идентификатора маркировки для удаления. Передаётся только одно значение
       * @example sgtin
       * @enum {string}
       */
      key: 'imei' | 'uin' | 'gtin' | 'sgtin'
      /**
       * @description Список ID сборочных заданий
       * @example [
       *       123456789
       *     ]
       */
      ordersIds: number[]
    }
    ClientInfo: {
      /**
       * @description Подменный номер для связи с покупателем. <br>
       *     Пустое значение `""` указывает, что номер ещё не назначен
       * @example 79871234567
       */
      replacementPhone?: string
      /**
       * @description Номер телефона для связи с покупателем:
       *       - если в поле `phoneCode` не указан добавочный код, вы можете позвонить покупателю по указанному номеру. Дополнительные номера телефонов для связи без кодов указаны в поле `additionalPhones`
       *       - если в поле `phoneCode` указан добавочный код, используйте его, чтобы связаться с покупателем по указанному номеру и добавочному коду
       * @example +79871234567
       */
      phone?: string
      /**
       * @description Имя покупателя
       * @example Иван
       */
      firstName?: string
      /**
       * @description Полное имя покупателя, используется для оформления документов
       * @example Иванов Иван Иванович
       */
      fullName?: string
      /**
       * @description Дополнительные номера телефонов для связи с покупателем. <br>
       *     Используйте, чтобы позвонить покупателю, если недоступен основной номер из `phone`. <br>
       *     Пустое значение означает, что номер не указан
       */
      additionalPhones?: string[]
      /**
       * @description Дополнительные добавочные коды. <br>
       *     Используйте, если не получилось дозвониться по добавочному коду из `phoneCode`.<br>
       *     Пустое значение указывает, коды ещё не назначены
       * @example [
       *       12345
       *     ]
       */
      additionalPhoneCodes?: number[]
      /**
       * @description ID сборочного задания
       * @example 1345678910
       */
      orderId?: number
      /**
       * @description Добавочный код. <br>
       *     Используйте, чтобы связаться с покупателем по номеру из `phone`.<br>
       *     Если код не указан, вы можете связаться с покупателем без кода
       * @example 0
       */
      phoneCode?: number
    }
    ClientInfoResp: {
      /** @description Информация о покупателях */
      orders?: components['schemas']['ClientInfo'][]
    }
    OrderCourierInfo: {
      /** @description Информация о курьере */
      courierInfo?: components['schemas']['CourierInfo']
      /**
       * @description ID сборочного задания
       * @example 2876979713
       */
      orderID?: number
    }
    OrderCourierInfoResp: {
      orders?: components['schemas']['OrderCourierInfo'][]
    }
    CourierContactsResponse: {
      /**
       * @description Номер автомобиля
       * @example х111хх11
       */
      carNumber?: string
      /**
       * @description ФИО курьера
       * @example Иванов Иван Иванович
       */
      fullName?: string
      /**
       * @description Номер телефона
       * @example 71230971931
       */
      phone?: string
      /**
       * Format: date-time
       * @description Дата и время, с которого прибудет курьер
       * @example 2025-09-06T08:00:00Z
       */
      pTimeFrom?: string | null
      /**
       * Format: date-time
       * @description Дата и время, до которого прибудет курьер
       * @example 2025-09-06T11:00:00Z
       */
      pTimeTo?: string | null
    }
    CourierInfo: {
      /** @description Контактные данные курьера */
      contacts?: components['schemas']['CourierContactsResponse'] | null
      /**
       * @description Должен ли быть назначен курьер к текущему моменту:
       *       - `false` — нет
       *       - `true` — да
       *
       *       Если `"mustBeAssigned":true`, а `"contacts":null`, необходимо запросить контакты в [поддержке](https://seller.wildberries.ru/service-desk-v2)
       */
      mustBeAssigned?: boolean
      /**
       * Format: date-time
       * @description Дата и время обновления информации о курьере. <br> Если `null`, информация не обновлялась
       * @example 2025-09-06T11:33:10+03:00
       */
      updatedAt?: string | null
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
           * @description Идентификатор маркировки
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
    'api.BatchError': {
      /**
       * @description Детали ошибки
       * @example null
       */
      detail?: string | null
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
    OrderNewDBW: {
      /** @description Адрес покупателя для доставки */
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
       * @description Цена в валюте продажи с учетом скидки продавца, без учета скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
       * @example 504658
       */
      salePrice?: number | null
      /**
       * @description Список идентификаторов маркировки, доступных для сборочного задания. [Указывать IMEI](./orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei) обязательно для [предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectAll) `Смартфоны`, `"subjectId":515`
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
      /**
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUid`
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
      rid?: string
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
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
       * @example 1014
       */
      convertedPrice?: number
      /**
       * Format: ISO 4217
       * @description Код валюты продажи
       * @example 933
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
    }
    Order: {
      /** @description Адрес покупателя для доставки */
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
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUid`
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
      rid?: string
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
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
       * @example 1014
       */
      convertedPrice?: number
      /**
       * Format: ISO 4217
       * @description Код валюты продажи
       * @example 933
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
         * @description Актуальная дата доставки
         * @example 2025-02-20
         */
        dDate?: string
        /**
         * @description ID сборочного задания
         * @example 1234567890
         */
        id?: number
      }[]
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
    /** @description ID сборочного задания */
    Order: number
    /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноименного поля в ответе */
    Next: number
    /** @description Параметр пагинации. Устанавливает предельное количество возвращаемых данных */
    Limit: number
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV3DbwOrdersNew: {
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
            orders?: components['schemas']['OrderNewDBW'][]
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
  getV3DbwOrders: {
    parameters: {
      query: {
        /** @description Параметр пагинации. Устанавливает предельное количество возвращаемых данных */
        limit: components['parameters']['Limit']
        /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноименного поля в ответе */
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
            orders?: components['schemas']['Order'][]
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
  postV3DbwOrdersDeliveryDate: {
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
  postV3DbwOrdersClient: {
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
          'application/json': components['schemas']['ClientInfoResp']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error'] & components['schemas']['api.BatchError']
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
  postV3DbwOrdersStatus: {
    parameters: {
      query?: never
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
            orders?: {
              /**
               * Format: int64
               * @description ID сборочного задания
               * @example 5632423
               */
              id?: number
              /**
               * @description Статус сборочного задания, установленный продавцом
               * @example new
               */
              supplierStatus?: string
              /** @description Статус сборочного задания в системе Wildberries */
              wbStatus?: string
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  patchV3DbwOrdersOrderIdConfirm: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID сборочного задания */
        orderId: components['parameters']['Order']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Подтверждено */
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
      /** @description Ошибка обновления статуса */
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
  postV3DbwOrdersStickers: {
    parameters: {
      query: {
        /** @description Тип стикера */
        type: 'svg' | 'zplv' | 'zplh' | 'png'
        /** @description Ширина стикера */
        width: 58 | 40
        /** @description Высота стикера */
        height: 40 | 30
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Список ID сборочных заданий */
          orders?: number[]
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
            stickers?: {
              /**
               * Format: int64
               * @description ID сборочного задания
               * @example 5346346
               */
              orderId?: number
              /**
               * @description Первая часть ID стикера для печати подписи
               * @example 231648
               */
              partA?: string
              /**
               * @description Вторая часть ID стикера для печати подписи
               * @example 97523
               */
              partB?: string
              /**
               * @description Закодированное значение стикера
               * @example !uKEtQZVx
               */
              barcode?: string
              /**
               * @description Полное представление стикера в заданном формате (кодировка base64)
               * @example PD94bWwgdmVyc2lvbj0iMS4wIj8+CjwhLS0gR2VuZXJhdGVkIGJ5IFNWR28gLS0+Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzE4IiB5PSIyMCIgd2lkdGg9IjYiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzI2IiB5PSIyMCIgd2lkdGg9IjIiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzMwIiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMjAiIHk9IjIwMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI5MCIgc3R5bGU9ImZpbGw6YmxhY2siIC8+Cjx0ZXh0IHg9IjMwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOndoaXRlO2ZvbnQtc2l6ZTozMHB0O3RleHQtYW5jaG9yOnN0YXJ0IiA+MjMxNjQ4PC90ZXh0Pgo8dGV4dCB4PSIzNTAiIHk9IjI3MCIgc3R5bGU9ImZpbGw6d2hpdGU7Zm9udC1zaXplOjUwcHQ7dGV4dC1hbmNob3I6ZW5kIiA+OTc1MzwvdGV4dD4KPC9zdmc+Cg==
               */
              file?: string
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
          'application/json': components['schemas']['Error']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3DbwOrdersStatusDeliver: {
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
          /**
           * @example {
           *       "requestId": "03615778-eb9e-4f55-b4Of-fd3ac0fad2сc",
           *       "results": [
           *         {
           *           "orderId": 42131238,
           *           "isError": true,
           *           "errors": [
           *             {
           *               "code": 409,
           *               "detail": "MetaValidationFail",
           *               "metaDetails": [
           *                 {
           *                   "key": "sgtin",
           *                   "value": "1234567890123",
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
      429: components['responses']['429']
    }
  }
  postV3DbwOrdersCourier: {
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
          'application/json': components['schemas']['OrderCourierInfoResp']
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
  patchV3DbwOrdersOrderIdCancel: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID сборочного задания */
        orderId: components['parameters']['Order']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Отменено */
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
      /** @description Ошибка обновления статуса */
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
  postV3DbwOrdersMetaDetails: {
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
          /**
           * @example {
           *       "detail": null,
           *       "origin": "dbs-public-api",
           *       "requestId": "f1787bd2d1fdс35d6f537316514у4a05",
           *       "title": "IncorrectRequest"
           *     }
           */
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
          /**
           * @example {
           *       "detail": null,
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
  postV3DbwOrdersMetaDelete: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['api.OrdersMetaDleteRequestV2']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['api.MetaDeleteResponses'] & unknown
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
  postV3DbwOrdersMetaSgtin: {
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
          /**
           * @example {
           *       "requestId": "03615778-eb9e-4f55-b4Of-fd3ac0fad2сc",
           *       "results": [
           *         {
           *           "orderId": 42131238,
           *           "isError": true,
           *           "errors": [
           *             {
           *               "code": 409,
           *               "detail": "FailedToUpdateMeta"
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
      429: components['responses']['429']
    }
  }
  putV3DbwOrdersOrderIdMetaUin: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID сборочного задания */
        orderId: components['parameters']['Order']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description УИН
           * @example 1234567890123456
           */
          uin: string
        }
      }
    }
    responses: {
      /** @description Обновлено */
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
      /** @description Ошибка добавления идентификаторов маркировки */
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
  putV3DbwOrdersOrderIdMetaImei: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID сборочного задания */
        orderId: components['parameters']['Order']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description IMEI
           * @example 123456789012345
           */
          imei: string
        }
      }
    }
    responses: {
      /** @description Обновлено */
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
      /** @description Ошибка добавления идентификаторов маркировки */
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
  putV3DbwOrdersOrderIdMetaGtin: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID сборочного задания */
        orderId: components['parameters']['Order']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description GTIN
           * @example 1234567890123
           */
          gtin: string
        }
      }
    }
    responses: {
      /** @description Обновлено */
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
      /** @description Ошибка добавления идентификаторов маркировки */
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
