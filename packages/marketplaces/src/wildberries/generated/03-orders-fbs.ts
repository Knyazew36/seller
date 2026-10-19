// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v3/passes/offices': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список складов, для которых требуется пропуск
     * @description Метод возвращает список складов для привязки к [пропуску продавца](/openapi/orders-fbs#tag/fbsPasses/operation/getV3Passes).
     *
     *     <div class="description_important">
     *       Данные, которые возвращает метод, могут меняться. Рекомендуем периодически синхронизировать список
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3PassesOffices']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/passes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список пропусков
     * @description Метод возвращает список всех [созданных](/openapi/orders-fbs#tag/fbsPasses/operation/postV3Passes) пропусков продавца.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3Passes']
    put?: never
    /**
     * Создать пропуск
     * @description Метод создаёт [пропуск продавца](/openapi/orders-fbs#tag/fbsPasses/operation/getV3Passes) с привязкой к складу WB.
     *
     *     Пропуск действует 48 часов со времени создания.
     *
     *     <div class="description_limit">
     *       Максимум 1 запрос в 10 <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">минут</a> на один профиль продавца.
     *
     *       Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *       <hr>
     *
     *       В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3Passes']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/passes/{passId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Обновить пропуск
     * @description Метод обновляет данные [пропуска продавца](/openapi/orders-fbs#tag/fbsPasses/operation/getV3Passes). В том числе, можно обновить данные привязанного склада WB.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    put: operations['putV3PassesPassId']
    post?: never
    /**
     * Удалить пропуск
     * @description Метод удаляет пропуск продавца [из списка](/openapi/orders-fbs#tag/fbsPasses/operation/getV3Passes).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    delete: operations['deleteV3PassesPassId']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/new': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список новых сборочных заданий
     * @description Метод возвращает список всех новых [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders), которые есть у продавца на момент запроса.
     *
     *     <div class="description_important">
     *     Наличие в сборочных заданиях идентификаторов маркировки, указанных в полях <code>requiredMeta</code> и <code>optionalMeta</code>, влияет только на возможность перевести поставку в доставку. Если ваш товар подлежит обязательной <a href ="https://seller.wildberries.ru/instructions/ru/ru/material/items-labeling-in-fbs">маркировке</a> средствами
     *     идентификации, необходимо указывать идентификаторы маркировки независимо от того, в каком поле они были получены (п. 4.6 <a href ="https://seller.wildberries.ru/confirm-offer-condition/product/view">Оферты</a>).
     *     <br>
     *     Рекомендуем добавлять в сборочные задания все идентификаторы маркировки, полученные в полях <code>requiredMeta</code> и <code>optionalMeta</code>
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3OrdersNew']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о сборочных заданиях
     * @description Метод возвращает информацию о сборочных заданиях, созданных не более 3 месяцев назад, без их актуального [статуса](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus).
     *
     *     Чтобы получить данные за период, укажите в запросе даты начала и окончания периода. Максимум 30 календарных дней одним запросом.
     *     В ответе метода будут сборочные задания, созданные в указанный период.<br><br>
     *     Чтобы получить сборочные задания, созданные более 3 месяцев назад, используйте метод получения [списка архивных заказов](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3FbsOrdersArchive).
     *
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3Orders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/status': {
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
     * @description Метод возвращает статусы [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) по их ID.
     *     <br><br>
     *     `supplierStatus` — статус сборочного задания. Триггер его изменения — действие самого продавца.
     *
     *     Возможные значения `supplierStatus`:
     *
     *     | Статус   | Описание            | Как перевести сборочное задание в данный статус |
     *     |-------|----------------------|--------------------------------------|
     *     | `new`      | **Новое сборочное задание** |  |
     *     | `confirm`  | **На сборке** |[Добавить сборочное задание к поставке](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3SuppliesSupplyIdOrders) <br> [Перевести сборочные задания из доставки на сборку](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3FbsSuppliesSupplyIdOrdersTransfer)|
     *     | `complete` | **В доставке** | [Передать поставку в доставку](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3SuppliesSupplyIdDeliver) |
     *     | `cancel`   | **Отменено продавцом**   | [Отменить сборочное задание](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/patchV3OrdersOrderIdCancel)|
     *     | `cancel_carrier`   | **Отменено перевозчиком** <br>Только для трансграничных поставок   | Переводится перевозчиком |
     *
     *     <br><br>
     *     `wbStatus` — статус системы Wildberries.
     *
     *     Возможные значения `wbStatus`:
     *     - `waiting` — сборочное задание в работе
     *     - `sorted` — сборочное задание отсортировано
     *     - `sold` — заказ получен покупателем
     *     - `canceled` — отмена сборочного задания
     *     - `canceled_by_client` — покупатель отменил заказ при получении
     *     - `declined_by_client` — покупатель отменил заказ. Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку
     *     - `defect` — отмена заказа по причине брака
     *     - `ready_for_pickup` — заказ прибыл на пункт выдачи заказов (ПВЗ)
     *     - `accepted_by_carrier` — продавец передал заказ в службу доставки в своей стране
     *     - `sent_to_carrier` — заказ отправлен на склад службы доставки в стране продавца
     *     - `canceled_by_carrier` — заказ отменён перевозчиком. Только для трансграничных поставок
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3OrdersStatus']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/supplies/orders/reshipment': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить все сборочные задания для повторной отгрузки
     * @description Метод возвращает все [сборочные задания](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders), требующие повторной отгрузки.
     *     <br><br>
     *     Повторная отгрузка требуется, если поставка была отсканирована в пункте приёмки, но при этом в ней всё ещё есть неотсканированные товары. Спустя определённое время необходимо доставить эти товары заново. Данные сборочные задания можно перевести в [другую активную поставку](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3SuppliesSupplyIdOrders).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3SuppliesOrdersReshipment']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/cancel': {
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
     * @description Метод отменяет [сборочное задание](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) и переводит в [статус](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `cancel` — отменено продавцом.
     *
     *     <div class="description_important">
     *     Сборочное задание можно отменить до его передачи Wildberries.
     *     Чтобы проверить, можно ли отменить сборочное задание, используйте метод <a href ="/docs/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus">POST /api/v3/orders/status</a>, поле <code>isCancellable</code>.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    patch: operations['patchV3OrdersOrderIdCancel']
    trace?: never
  }
  '/api/v3/orders/stickers': {
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
     * @description Метод возвращает список стикеров для [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders) в [статусах](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` — на сборке и `complete` — в доставке. <br><br>
     *     Если за сборочным заданием не закреплён обязательный [номер декларации на товары (ДТ)](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaCustomsDeclaration), получить стикеры для этого сборочного задания невозможно.<br><br>
     *     За один запрос можно получить максимум 100 стикеров. <br>
     *     Можно получить стикер в форматах:
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
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3OrdersStickers']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/stickers/cross-border': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить стикеры сборочных заданий трансграничных поставок
     * @description Метод возвращает список стикеров [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) трансграничных поставок в формате PDF.<br><br>
     *
     *     Для каждого сборочного задания в ответе указывается статус генерации стикера:
     *       - `awaitingTrackNumber` — стикер не готов. Ожидается трек-номер от перевозчика.
     *       - `ready` — стикер готов
     *
     *     <div class="description_important">
     *       Стикер может генерироваться с задержкой. Повторяйте запрос, пока не получите статус <code>ready</code>.
     *     </div>
     *
     *     Ограничения:
     *       - За один запрос можно получить максимум 100 стикеров.
     *       - Можно получить стикеры только для сборочных заданий, находящихся на сборке или в доставке — [статусы](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm`, `complete`.
     *
     *     В песочнице этот метод всегда возвращает ответ <code>200</code>.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3OrdersStickersCrossBorder']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/status/history': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * История статусов для сборочных заданий трансграничных поставок
     * @description Метод возвращает историю [статусов](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) для [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) трансграничных поставок.
     *
     *     В песочнице этот метод всегда возвращает ответ <code>200</code>.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3OrdersStatusHistory']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/client': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Заказы с информацией по клиенту
     * @description Метод позволяет получать информацию о покупателе по ID сборочного задания.
     *
     *     Только для трансграничных поставок из **Турции**.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3OrdersClient']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/orders/archive': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список архивных сборочных заданий
     * @description Метод возвращает сборочные задания, созданные более 3 месяцев назад.<br>
     *     Часть сборочных заданий попадает в архив позже, чем через 3 месяца после создания, так как поставка переходит в архив только после того, как все заказы в ней будут завершены.
     *     Например, так происходит, если продавец не доставил один из заказов в поставке и заказ был отменён автоматически через несколько дней.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    get: operations['getV3FbsOrdersArchive']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/orders/meta': {
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
     * @description Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) и статусы их проверки.
     *     <br><br>
     *     Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3OrdersNew), поля `requiredMeta` и `optionalMeta`. Если поля `requiredMeta` и `optionalMeta` не содержат какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.<br>
     *     Возможные идентификаторы маркировки:
     *       - `imei` — [IMEI](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaImei)
     *       - `uin` — [УИН](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaUin)
     *       - `gtin` — [GTIN](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaGtin)
     *       - `sgtin` — [код маркировки Честного знака](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaSgtin)
     *       - `expiration` — [срок годности товара](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaExpiration)
     *       - `customsDeclaration` — [номер ДТ](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaCustomsDeclaration)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки FBS</strong>:
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
    post: operations['postV3OrdersMeta']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/meta': {
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
     * Удалить идентификаторы маркировки сборочного задания
     * @description Метод удаляет значение [идентификаторов маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) для переданного ключа.
     *     <br><br>
     *     Возможные идентификаторы маркировки:
     *       - `imei` — [IMEI](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaImei)
     *       - `uin` — [УИН](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaUin)
     *       - `gtin` — [GTIN](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaGtin)
     *       - `sgtin` — [код маркировки Честного знака](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaSgtin)
     *       - `customsDeclaration` — [номер ДТ](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaCustomsDeclaration)
     *
     *     Можно передать только один ключ.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>получения и удаления идентификаторов маркировки FBS</strong>:
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
    delete: operations['deleteV3OrdersOrderIdMeta']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/meta/sgtin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить код маркировки Честного знака за сборочным заданием
     * @description Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в идентификаторах маркировки [сборочного задания](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders).
     *     <br>
     *     Закрепить код маркировки Честного знака можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) есть поле `sgtin`.
     *     <br><br>
     *     Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3OrdersOrderIdMetaSgtin']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/meta/uin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить УИН за сборочным заданием
     * @description Метод обновляет УИН, уникальный идентификационный номер, в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta).
     *     У одного сборочного задания может быть только один УИН.<br>
     *     Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) есть поле `uin`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3OrdersOrderIdMetaUin']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/meta/imei': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить IMEI за сборочным заданием
     * @description Метод обновляет IMEI в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta).<br>
     *     У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.<br>
     *     Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) есть поле `imei`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3OrdersOrderIdMetaImei']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/meta/gtin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить GTIN за сборочным заданием
     * @description Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta).
     *     У одного сборочного задания может быть только один GTIN.<br>
     *      Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) есть поле `gtin`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3OrdersOrderIdMetaGtin']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/orders/{orderId}/meta/expiration': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить за сборочным заданием срок годности товара
     * @description Метод закрепляет за [сборочным заданием](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) срок годности товара. Товар годен до указанной даты. <br>
     *     Закрепить срок годности можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) есть поле `expiration`.
     *     <br><br>
     *     Получить загруженные данные можно в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta).<br>
     *     Чтобы изменить срок годности, отправьте запрос с новой датой. Удалить срок годности сборочного задания невозможно.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3OrdersOrderIdMetaExpiration']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/orders/{orderId}/meta/customs-declaration': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Закрепить номер ДТ за сборочным заданием
     * @description Метод обновляет номер ДТ — декларации на товары — в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta). У одного сборочного задания может быть только один номер ДТ. <br>
     *     Закрепить номер ДТ можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/operation/postV3OrdersMeta) есть поле `customsDeclaration`.
     *
     *     <div class="description_important">
     *     Продавцам из Армении необходимо обязательно указывать номер декларации на товары (ДТ), произведённые вне ЕАЭС, если заказ из Армении доставляется в РФ.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>закрепления идентификаторов маркировки FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1000 запросов | 60 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3OrdersOrderIdMetaCustomsDeclaration']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/supplies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список поставок
     * @description Метод возвращает список [поставок](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3Supplies']
    put?: never
    /**
     * Создать новую поставку
     * @description Метод создаёт новую [поставку](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId).
     *
     *     Ограничения:
     *     - Только для [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) по модели FBS.
     *     - При добавлении в поставку все передаваемые сборочные задания в [статусе](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `new` будут автоматически переведены в статус `confirm` — на сборке.
     *     - Если вы переведёте сборочное задание в статус `cancel` — отмена продавцом, прикрепленное сборочное задание автоматически удалится из поставки.
     *     - Поставку можно собрать только из сборочных заданий (заказов) одного габаритного типа `cargoType`. Новая поставка не обладает габаритным признаком, она приобретает габаритный признак первого заказа, добавленного в поставку.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3Supplies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/supplies/{supplyId}/orders': {
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
     * Добавить сборочные задания к поставке
     * @description Метод добавляет до 100 [сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) к поставке и переводит их в [статус](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `confirm` — на сборке.
     *
     *     Может перемещать сборочные задания:
     *       - между активными поставками
     *       - из закрытой поставки в активную, если сборочные задания требуют [повторной отгрузки](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3SuppliesOrdersReshipment)
     *
     *     <div class="description_important">
     *       В пустую поставку можно добавить любые сборочные задания, поступившие на один и тот же склад.<br>
     *       Поставка приобретает признаки первого добавленного в неё сборочного задания из <a href="/docs/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId">полей</a>:
     *         <li><code>crossBorderType</code> — трансграничная или внутренняя поставка</li>
     *         <li><code>cargoType</code> — габаритный тип</li>
     *         <li><code>isB2b</code> — B2B-продажа</li>
     *       </ul>
     *       После этого в поставку можно добавить сборочные задания только с такими же признаками <code>crossBorderType</code>, <code>cargoType</code>, <code>isB2b</code>, как у поставки.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    patch: operations['patchV3SuppliesSupplyIdOrders']
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/{supplyId}/orders/transfer': {
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
     * Перевести сборочные задания из доставки на сборку
     * @description Метод переводит сборочные задания из статуса `complete` — в доставке в статус `confirm` — на сборке.
     *     <br>
     *     Используйте метод, чтобы переместить сборочное задание из закрытой поставки в открытую.
     *     <br>
     *     Сборочное задание можно перевести из доставки на сборку, если выполнены все условия:
     *       - сборочное задание находится в статусе `complete` — в доставке
     *       - поставка, в которую нужно перенести сборочное задание, [не передана в доставку](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3SuppliesSupplyIdDeliver)
     *       - сборочное задание ранее не переносили из доставки на сборку
     *       Чтобы проверить, можно ли перевести сборочное задание из доставки на сборку, используйте [статусы сборочных заданий](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus), поле `isTransferable`.
     */
    patch: operations['patchV3FbsSuppliesSupplyIdOrdersTransfer']
    trace?: never
  }
  '/api/v3/supplies/{supplyId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о поставке
     * @description Метод возвращает подробную информацию о поставке.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3SuppliesSupplyId']
    put?: never
    post?: never
    /**
     * Удалить поставку
     * @description Метод удаляет [поставку](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId), если она активна и за ней не закреплено ни одно [сборочное задание](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    delete: operations['deleteV3SuppliesSupplyId']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/supplies/{supplyId}/order-ids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить ID сборочных заданий поставки
     * @description Метод возвращает список ID сборочных заданий, закреплённых за поставкой.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3SuppliesSupplyIdOrderIds']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/shipping-points': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список пунктов отгрузки поставок
     * @description Метод возвращает доступные пункты отгрузки поставок с фильтрами:
     *       - по населённым пунктам России
     *       - по типам товаров, которые принимает пункт отгрузки
     *
     *     Используйте данные из этого метода, чтобы устанавливать [параметры отгрузки поставок](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3FbsSuppliesShippingMethod).<br><br>
     *
     *     Доступно только для продавцов из РФ.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    get: operations['getV3FbsShippingPoints']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/shipping-method': {
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
     * Установить параметры отгрузки поставок
     * @description Метод устанавливает способ доставки, дату и пункт отгрузки у поставок.<br><br>
     *
     *
     *
     *     Параметры отгрузки нужно указать до передачи поставки в доставку. Вы можете обновлять параметры отгрузки до сканирования поставки и её коробов в пункте отгрузки. Когда поставка будет отсканирована, метод начнёт возвращать ошибку `409`.<br><br>
     *
     *     В запросе можно указать максимум 100 поставок. Результат обработки возвращается для каждой поставки отдельно.<br><br>
     *
     *     Доступно только для продавцов из РФ.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    patch: operations['patchV3FbsSuppliesShippingMethod']
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/waybill': {
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
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/waybill/status': {
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
    patch?: never
    trace?: never
  }
  '/api/v3/supplies/{supplyId}/deliver': {
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
     * Передать поставку в доставку
     * @description Метод закрывает [поставку](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId) и переводит все [сборочные задания](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/getV3Orders) в ней в [статус](/openapi/orders-fbs#tag/fbsAssemblyOrders/operation/postV3OrdersStatus) `complete` — в доставке. После закрытия поставки добавить новые сборочные задания к ней нельзя.
     *     <br><br>
     *     Если поставка не была передана в доставку, то при приёмке первого товара поставка автоматически закроется.
     *     <br><br>
     *     Передать поставку в доставку можно, только если в ней:
     *       - есть хотя бы одно сборочное задание
     *       - для всех сборочных заданий указана обязательная маркировка
     *       - маркировка всех сборочных заданий прошла проверку
     *
     *     Если поставка содержит сборочные задания с обязательным УИН, убедитесь, что вы заранее создали и загрузили спецификацию с договором на доставку. [ГИИС ДМДК](https://minfin.gov.ru/ru/perfomance/jewels/dmdk) требуется около 30 минут для обработки изменений в статусах УИН.
     *
     *     Обязательно [указывайте параметры отгрузки](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3FbsSuppliesShippingMethod) для поставок от продавцов РФ на пункты отгрузки в РФ. Если способ доставки, дата или пункт отгрузки не указаны, возвращается ошибка `409`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    patch: operations['patchV3SuppliesSupplyIdDeliver']
    trace?: never
  }
  '/api/v3/supplies/{supplyId}/barcode': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить QR-код поставки
     * @description Метод возвращает QR-код [поставки](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId) в форматах:
     *       - SVG
     *       - ZPLV (вертикальный)
     *       - ZPLH (горизонтальный)
     *       - PNG
     *
     *     QR-код поставки можно получить, только если поставка [передана в доставку](/openapi/orders-fbs#tag/fbsSupplies/operation/patchV3SuppliesSupplyIdDeliver).
     *     <br><br>
     *     Размер — 580x400 px.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3SuppliesSupplyIdBarcode']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/supplies/{supplyId}/trbx': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список грузомест поставки
     * @description Возвращает список грузомест поставки.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    get: operations['getV3SuppliesSupplyIdTrbx']
    put?: never
    /**
     * Добавить грузоместа к поставке
     * @description Метод добавляет требуемое количество [грузомест](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyIdTrbx) в [поставку](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId).
     *     <br>
     *     <br>
     *     Грузоместа необходимо добавлять только в поставки, отгружаемые на ПВЗ.
     *     <br>
     *     Грузоместа можно добавить только в открытую поставку. В одном грузоместе может быть несколько заказов. Например, если в поставке 10 заказов, распределите их по коробам: система позволит создать не больше 5 грузомест. Для 20 заказов — не больше 10 грузомест, для 100 — не больше 50.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3SuppliesSupplyIdTrbx']
    /**
     * Удалить грузоместа из поставки
     * @description Метод удаляет грузоместа из поставки.
     *     <br><br>
     *     Можно удалить только пока поставка на сборке.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    delete: operations['deleteV3SuppliesSupplyIdTrbx']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/supplies/{supplyId}/trbx/stickers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить стикеры грузомест поставки
     * @description Метод возвращает QR-стикеры в форматах:
     *       - SVG
     *       - ZPLV (вертикальный)
     *       - ZPLH (горизонтальный)
     *       - PNG
     *     <br><br>
     *     Размер стикеров — 580x400 px.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
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
    post: operations['postV3SuppliesSupplyIdTrbxStickers']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/dictionaries/countries/oksm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список стран ОКСМ
     * @description Метод возвращает список стран ОКСМ — Общероссийского классификатора стран мира — с полными названиями и кодами.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    get: operations['getV3FbsDictionariesCountriesOksm']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/{supplyId}/spot': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Добавить данные СПОТ в поставку
     * @description Метод добавляет данные СПОТ в поставку.<br><br>
     *
     *     СПОТ можно добавить только в [поставку](/openapi/orders-fbs#tag/fbsSupplies/operation/getV3SuppliesSupplyId) с признаком `"spotAvailable":true`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    put: operations['putV3FbsSuppliesSupplyIdSpot']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/spot/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить данные СПОТ для списка поставок
     * @description Метод возвращает данные СПОТ для списка поставок.<br><br>
     *
     *     Вы можете получить данные СПОТ, только если выполняются все условия:
     *       - поставка находится на этапе доставки
     *       - продавец зарегистрирован в любой стране ЕАЭС кроме РФ
     *       - склад назначения находится в РФ
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3FbsSuppliesSpotList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/supplies/{supplyId}/stickers/spot': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить QR-код СПОТ
     * @description Метод возвращает сформированный QR-код СПОТ для поставки в формате PNG, кодировка base64.
     *
     *     Вы можете получить QR-код, когда в методе [получения данных СПОТ](/openapi/orders-fbs#tag/fbsSupplies/operation/postV3FbsSuppliesSpotList) будет признак `"status":"completed"`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    get: operations['getV3FbsSuppliesSupplyIdStickersSpot']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/marketplace/v3/fbs/settings/autoreturns': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить настройки автовозврата продавца
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод возвращает информацию о настройках автовозврата, установленных продавцом.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    get: operations['getV3FbsSettingsAutoreturns']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /**
     * Обновить настройки автовозврата продавца
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод устанавливает настройки автовозврата продавца для малогабаритных товаров — `"cargoType":1`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    patch: operations['patchV3FbsSettingsAutoreturns']
    trace?: never
  }
  '/api/marketplace/v3/fbs/settings/autoreturns/items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить настройки автовозврата товаров
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод возвращает настройки автовозврата товаров.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    post: operations['postV3FbsSettingsAutoreturnsItems']
    delete?: never
    options?: never
    head?: never
    /**
     * Обновить настройки автовозврата товаров
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод устанавливает настройки автовозврата малогабаритных товаров — `"cargoType":1`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    patch: operations['patchV3FbsSettingsAutoreturnsItems']
    trace?: never
  }
  '/api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить предметы, которые не хранятся на складах WB
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену,
     *             <strong>Базовому</strong> токену <strong>с секретом</strong>
     *     </div>
     *
     *     Метод возвращает список ID предметов, товары которых не могут храниться на складах WB и будут возвращены в ПВЗ автоматически.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>сборочных заданий, поставок, пропусков и настроек автовозврата FBS</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     </div>
     */
    get: operations['getV3FbsSettingsAutoreturnsSubcategoriesRestricted']
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
    'v3.TransferOrdersToAssemblyResponse': {
      transferredOrders?: components['schemas']['v3.TransferOrderToAssembly'][]
    }
    'v3.TransferOrderToAssembly': {
      /** @description Детали ошибки */
      error?: {
        /** @description Детали ошибки */
        detail?: string
        /** @description Внутренний код ошибки */
        code?: number
      }
      /** @description Успешна ли обработка запроса. Может быть только `true` */
      success?: boolean
      /** @description Новый ID стикера */
      newStickerId: number
      /** @description Старый ID стикера */
      oldStickerId: number
      /** @description ID сборочного задания */
      orderId: number
    }
    /** @description Список архивных сборочных заданий */
    'v3.ArchiveOrders': {
      /**
       * Format: int64
       * @description Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных
       */
      next: number | null
      /** @description Архивные сборочные задания */
      orders: components['schemas']['v3.ArchiveOrder'][]
    }
    /** @description Архивное сборочное задание */
    'v3.ArchiveOrder': {
      /**
       * @description Тип товара:
       *       - `mgt` — малогабаритный товар (МГТ)
       *       - `sgt` — сверхгабаритный товар (СГТ)
       *       - `kgtPlus` — крупногабаритный товар (КГТ+)
       * @example mgt
       */
      cargoType: string
      /**
       * @description Код цвета для колеруемых товаров
       * @example RAL 3017
       */
      colorCode: string | null
      /**
       * @description Дата создания заказа
       * @example 2022-05-04
       */
      createdAt: string
      /** @description Информация о трансграничной поставке */
      crossBorder: {
        /**
         * @description ID посылки
         * @example 1Z999AA10123456784
         */
        parcel?: string
      } | null
      /**
       * @description Тип сборочного задания:
       *       - `local` — внутренняя поставка
       *       - `crossBorder` — трансграничная поставка
       * @example crossBorder
       */
      crossBorderType: string
      /**
       * @description ID сборочного задания
       * @example 1234567890
       */
      id: number
      /**
       * @description Признак заказа товара с нулевым остатком:
       *       - `false` — заказ сделан на товар с ненулевым остатком
       *       - `true` — заказ сделан на товар с нулевым остатком
       * @example false
       */
      isZeroOrder: boolean
      metaDetails: components['schemas']['MetaDetails'] & unknown
      /** @description Опции заказа */
      options: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         * @example false
         */
        isB2B?: boolean
      }
      /**
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUid`
       * @example 165918930_629fbc924b984618a44354475ca58675
       */
      orderUid: string
      /** @description Информация о цене заказа */
      priceInfo: {
        /**
         * @description Код валюты страны продавца
         * @example 643
         */
        convertedCurrencyCode: number
        /**
         * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100
         * @example 1020
         */
        convertedPrice: number
        /**
         * @description Код валюты продажи
         * @example 643
         */
        currencyCode: number
        /**
         * @description Цена в валюте продажи с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100
         * @example 1020
         */
        price: number
      }
      /** @description Информация о товаре */
      product: {
        /**
         * @description Артикул продавца
         * @example wv1702fyjh
         */
        article: string
        /**
         * Format: uint64
         * @description ID размера товара в системе WB
         * @example 12345678
         */
        chrtId: number
        /**
         * @description Артикул WB
         * @example 370870300
         */
        nmId: number
        /**
         * @description Список баркодов
         * @example [
         *       "12345Ejf5",
         *       "12345Ejf6",
         *       "12345Ejf7"
         *     ]
         */
        skus: string[]
      }
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
      rid: string
      /**
       * @description Цена приёмки заказа в копейках
       * @example 5200
       */
      scanPrice: number | null
      /** @description Последние статусы сборочного задания */
      status: {
        /**
         * @description Статус сборочного задания, установленный продавцом
         * @example complete
         */
        supplierStatus: string
        /**
         * @description Статус сборочного задания в системе Wildberries
         * @example sent_to_carrier
         */
        wbStatus: string
      }
      /**
       * @description ID стикера
       * @example 33811984302
       */
      stickerId: number
      /**
       * @description ID поставки
       * @example WB-GI-1234588
       */
      supplyId: string | null
      /**
       * @description ID склада продавца, с которого был отгружен товар
       * @example 55684681
       */
      warehouseId: number
    }
    'v3.SupplyOrderIDsAPI': {
      /**
       * @description ID сборочных заданий
       * @example [
       *       132334,
       *       203984,
       *       403543,
       *       598349
       *     ]
       */
      orderIds?: number[] | null
    }
    /** @description Данные о складе, для которого требуется пропуск */
    PassOffice: {
      /**
       * @description Название
       * @example Коледино
       */
      name?: string
      /**
       * @description Адрес
       * @example г. Подольск, д. Коледино, ул. Троицкая
       */
      address?: string
      /**
       * Format: int64
       * @description ID
       * @example 1
       */
      id?: number
    }
    Error: {
      /** @description Код ошибки */
      code?: string
      /** @description Описание ошибки */
      message?: string
      /** @description Дополнительные данные ошибки */
      data?: Record<string, never> | null
    }
    ArhiveOrderError400: {
      /** @description Код ошибки */
      code?: string
      /** @description Детали ошибки */
      detail: string
      /** @description Информация об ошибке */
      errors?: {
        /** @description Параметр, где произошла ошибка */
        location?: string
        /** @description Текст ошибки */
        message?: string
        /** @description Значение параметра, где произошла ошибка */
        value?: unknown
      }[]
      /** @description ID внутреннего сервиса WB */
      origin?: string
      /** @description Уникальный ID запроса */
      requestId?: string
      /** @description HTTP статус-код ответа */
      status?: number
      /** @description Заголовок ошибки */
      title: string
    }
    ApiErrorV3: {
      /** @description Заголовок ошибки */
      title: string
      /** @description Детали ошибки */
      detail: string
    }
    '409SupplyDeliverError': {
      /** @description Код ошибки */
      code?: string
      /** @description Описание ошибки */
      message?: string
      /** @description Дополнительные данные ошибки */
      data?: {
        /** @description Сборочные задания, идентификаторы маркировки которых не прошли или ещё не завершили проверку */
        orders?: {
          /** @description ID сборочного задания */
          id?: number
          /** @description Информация об ошибках */
          metaDetails?: {
            /** @description Идентификатор маркировки */
            key?: string
            /** @description Значение идентификатора маркировки */
            value?: string
            /**
             * @description [Статус проверки](/knowledge-base/articles/019e9273-118b-7b69-a25a-ea1d756f05d9/rabota-s-markirovkoi-po-modeli-fbs):
             *     - `imei`
             *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
             *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
             *       - `imeiInvalidFormat` — Неверный формат маркировки
             *       - `imeiAlreadySold` — Товар с этим IMEI уже продан
             *     - `uin`
             *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
             *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
             *       - `uinInvalidFormat` — Неверный формат маркировки
             *       - `uinBadStatus` — Некорректный статус партии
             *       - `uinBadProcess` — Некорректная стадия обработки
             *       - `uinBadStatusAndBadProcess` — Некорректный статус партии. Некорректная стадия обработки
             *       - `uinNotFound` — Не найден в [ГИИС](https://minfin.gov.ru/ru/perfomance/jewels/dmdk).
             *         При получении этой ошибки убедитесь, что УИН:
             *           - указан в загруженной спецификации с договором на доставку. Если спецификация загружена более 30 минут назад, [удалите УИН](./orders-fbs#tag/fbsLabelIdentifiers/operation/deleteV3OrdersOrderIdMeta) из сборочного задания и [добавьте его](./orders-fbs#tag/fbsLabelIdentifiers/operation/putV3OrdersOrderIdMetaUin) заново
             *           - зарегистрирован в ГИИС ДМДК
             *           - указан корректно и считывается с бирки без ошибок
             *           - находится в обороте
             *     - `sgtin`
             *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
             *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
             *       - `sgtinInvalidFormat` — Неверный формат маркировки
             *       - `sgtinNoGS` — Маркировка не содержит GS-разделитель `\u001d`
             *       - `sgtinHasInvalidSymbols` — Маркировка содержит некорректные символы или пробелы
             *       - `sgtinHasNonLatinSymbols` — Маркировка содержит символы, не относящиеся к специальным или латинице
             *       - `sgtinInvalidPattern` — Структура маркировки некорректна
             *       - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru)
             *       - `sgtinEmitted` —  Маркировка эмитирована
             *       - `sgtinApplied` — Не пройдена процедура Ввод в оборот
             *       - `sgtinWrittenOff` — Списан
             *       - `sgtinRetired` — Выбыл
             *       - `sgtinWithdrawn` — Выбыл
             *       - `sgtinDisaggregation` — Расформирован
             *       - `sgtinDisaggregated` — Расформирован
             *       - `sgtinAppliedNotPaid` — Не оплачен
             *     - `gtin`
             *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
             *     - `expiration`
             *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
             *     - `customsDeclaration`
             *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием
             */
            decision?: string
          }[]
        }[]
      } | null
    }
    /**
     * Format: int64
     * @description Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных
     * @example 13833711
     */
    Next: number
    Order: {
      /** @description Точный адрес покупателя для доставки, если применимо. Из-за особенностей адреса некоторые поля могут быть пустыми */
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
       * Format: uint32
       * @description Цена приёмки в копейках. Отображается после фактической приёмки заказа
       * @example 1500
       */
      scanPrice?: number | null
      /**
       * @description Тип доставки:
       *     - `fbs` — доставка на склад Wildberries (FBS)
       * @enum {string}
       */
      deliveryType?: 'fbs'
      /**
       * @description ID поставки. Возвращается, если заказ закреплён за поставкой
       * @example WB-GI-92937123
       */
      supplyId?: string
      /**
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUid`
       * @example 165918930_629fbc924b984618a44354475ca58675
       */
      orderUid?: string
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
       *       - [Отчет о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
       *       - [Детализации к отчётам реализации по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
       *       - [Детализации к отчётам реализации за период](./documents-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
       *       - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
       *       - [Детализации к отчётам об издержках на приём платежей за период](./documents-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
       * @example f884001e44e511edb8780242ac120002
       */
      rid?: string
      /**
       * Format: date-time
       * @description Дата создания сборочного задания (RFC3339). Часовой пояс — UTC
       * @example 2022-05-04T07:56:29Z
       */
      createdAt?: string
      /** @description Список офисов, куда следует привезти товар */
      offices?: string[] | null
      /** @description Список баркодов */
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
       * Format: int64
       * @description ID склада WB, к которому привязан склад продавца
       * @example 123
       */
      officeId?: number
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
       * @description Цена в валюте продажи с учётом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи — в поле `currencyCode`. Предоставляется в информационных целях
       * @example 1014
       */
      price?: number
      /**
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
       * @example 28322
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
       * Format: int32
       * @description Тип сборочного задания:
       *       - `0` — внутренняя поставка
       *       - `1` — трансграничная поставка
       * @example 1
       * @enum {integer}
       */
      crossBorderType?: 0 | 1
      /**
       * @description Комментарий покупателя
       * @example Упакуйте в плёнку, пожалуйста
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
       * @description Трек-номер для трансграничной поставки
       * @example NRU56565656
       */
      trackNumber?: string
      /** @description Опции заказа */
      options?: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         */
        isB2B?: boolean
      }
    }
    Supply: {
      /**
       * @description ID поставки
       * @example WB-GI-1234567
       */
      id?: string
      /**
       * @description Признак B2B-продажи:
       *       - `true` — B2B-продажа
       *       - `false` — не B2B-продажа
       *       - `null` — признак отсутствует, сборочные задания не добавлены к поставке
       */
      isB2b?: boolean | null
      /**
       * @description Можно ли отгрузить заказ на ПВЗ:
       *       - `false` — нет
       *       - `true` — да
       * @example true
       */
      isPickupPointShipmentAllowed?: boolean
      /**
       * @description Флаг закрытия поставки:
       *       - `true` — закрыта
       *       - `false` — открыта
       */
      done?: boolean
      /**
       * Format: date-time
       * @description Дата создания поставки (RFC3339)
       * @example 2022-05-04T07:56:29Z
       */
      createdAt?: string
      /**
       * Format: date-time
       * @description Дата закрытия поставки (RFC3339)
       * @example 2022-05-04T07:56:29Z
       */
      closedAt?: string | null
      /**
       * Format: date-time
       * @description Дата сканирования поставки (RFC3339).<br>Если `"scanDt":null`, поставка не сканировалась
       * @example 2022-05-04T07:56:29Z
       */
      scanDt?: string | null
      /**
       * @description Наименование поставки
       * @example Тестовая поставка
       */
      name?: string
      /**
       * @description Тип товара:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `2` — сверхгабаритный товар (СГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @enum {integer}
       */
      cargoType?: 1 | 2 | 3
      /**
       * Format: int32
       * @description Тип поставки:
       *       - `0` — внутренняя поставка
       *       - `1` — трансграничная поставка
       *       - `null` — значение отсутствует
       * @example 1
       * @enum {integer|null}
       */
      crossBorderType?: 0 | 1 | null
      /**
       * Format: int64
       * @description ID склада хранения сборочных заданий в поставке. Если `null`, склад не указан
       * @example 123
       */
      destinationOfficeId?: number | null
      /**
       * Format: int64
       * @description ID рекомендуемого склада для приёмки поставки для Москвы и МО. <br>
       *     Рекомендуется ближайший к покупателям склад, который определяется автоматически при передаче поставки в доставку с учётом параметров всех сборочных заданий в поставке.<br>
       *     Если `0`, рекомендуемый склад не определён
       * @example 123569
       */
      recommendedWhId?: number
      /**
       * @description Планируемая дата отгрузки поставки, формат `YYYY-MM-DD`
       * @example 2026-08-31
       */
      shippingDt?: string | null
      /**
       * @description ID пункта отгрузки. Можно получить в методе получения [пунктов отгрузки поставок](./orders-fbs#tag/fbsSupplies/operation/getV3FbsShippingPoints)
       * @example 100
       */
      shippingPointId?: number | null
      /**
       * @description Способ доставки до пункта отгрузки:
       *       - `selfShipping` — доставка силами продавца
       *       - `transportCompany` — доставка через транспортную компанию
       * @example selfShipping
       * @enum {string|null}
       */
      shippingType?: 'selfShipping' | 'transportCompany' | null
      /**
       * @description ID ЭТрН — электронной транспортной накладной
       * @example 550e8400-e29b-41d4-a716-384579387429
       */
      waybillUuid?: string | null
      /**
       * @description Доступен ли СПОТ для этой поставки:
       *       - `true` — да. Используйте метод [получения данных СПОТ](./orders-fbs#tag/fbsSupplies/operation/postV3FbsSuppliesSpotList)
       *       - `false` — нет
       * @example true
       */
      spotAvailable: boolean
    }
    OrderNew: {
      /** @description Точный адрес покупателя для доставки, если применимо. Из-за особенностей адреса некоторые поля могут быть пустыми */
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
       * @description Планируемая дата доставки заказа покупателю.<br>
       *     Поле отображается для сборочных заданий со сверхгабаритными товарами `СГТ`, `cargoType: 2`
       * @example 17.05.2024
       */
      ddate?: string
      /**
       * @description Рекомендуемая дата доставки СГТ в сортировочный центр или на склад. <br>
       *     Поле отображается для сборочных заданий со сверхгабаритными товарами `СГТ`, `cargoType: 2`
       * @example 02.06.2025
       */
      sellerDate?: string | null
      /**
       * @description Цена продавца в валюте продажи с учётом скидки продавца, без учёта скидки WB Клуба, умноженная на 100. Предоставляется в информационных целях
       * @example 504600
       */
      salePrice?: number | null
      /**
       * @description Список идентификаторов маркировки, которые [необходимо добавить](/knowledge-base/articles/019e9273-118b-7b69-a25a-ea1d756f05d9/rabota-s-markirovkoi-po-modeli-fbs) в сборочное задание, чтобы поставку с этим сборочным заданием можно было перевести в доставку
       * @example [
       *       "uin"
       *     ]
       */
      requiredMeta?: string[] | null
      /**
       * @description Список идентификаторов маркировки, которые [можно добавить](/knowledge-base/articles/019e9273-118b-7b69-a25a-ea1d756f05d9/rabota-s-markirovkoi-po-modeli-fbs) в сборочное задание.<br>
       *     Поставку со сборочным заданием без этих идентификаторов маркировки можно перевести в доставку, но они могут потребоваться, например, при возврате товара покупателем
       * @example [
       *       "sgtin"
       *     ]
       */
      optionalMeta?: string[] | null
      /**
       * @description Тип доставки:
       *     - `fbs` — доставка на склад Wildberries (FBS)
       * @enum {string}
       */
      deliveryType?: 'fbs'
      /**
       * @description Комментарий покупателя
       * @example Упакуйте в плёнку, пожалуйста
       */
      comment?: string
      /**
       * Format: uint32
       * @description Цена приёмки в копейках. Отображается после фактической приёмки заказа. Для данного метода всегда будет возвращаться `null`. Предоставляется в информационных целях
       * @example null
       */
      scanPrice?: number | null
      /**
       * @description ID транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый `orderUid`
       * @example 165918930_629fbc924b984618a44354475ca58675
       */
      orderUid?: string
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
       * @description Дата создания сборочного задания (RFC3339)
       * @example 2022-05-04T07:56:29Z
       */
      createdAt?: string
      /** @description Список офисов, куда следует привезти товар */
      offices?: string[] | null
      /** @description Список баркодов */
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
       * Format: int64
       * @description ID склада WB, к которому привязан склад продавца
       * @example 123
       */
      officeId?: number
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
       * @description Цена в валюте продажи с учётом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Код валюты продажи — в поле `currencyCode`. Предоставляется в информационных целях
       * @example 1014
       */
      price?: number
      /**
       * @description Сумма к оплате покупателем в валюте продажи с учетом всех скидок, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       * @example 1014
       */
      finalPrice?: number
      /**
       * @description Цена в валюте страны продавца с учетом всех скидок, кроме скидки по WB Кошельку, умноженная на 100. Предоставляется в информационных целях
       * @example 28322
       */
      convertedPrice?: number
      /**
       * @description Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок, умноженная на 100. Предоставляется в информационных целях
       * @example 1014
       */
      convertedFinalPrice?: number
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
       * Format: int32
       * @description Тип сборочного задания:
       *       - `0` — внутренняя поставка
       *       - `1` — трансграничная поставка
       * @example 1
       * @enum {integer}
       */
      crossBorderType?: 0 | 1
      /**
       * @description Признак заказа товара с нулевым остатком:
       *       - `false` — заказ сделан на товар с ненулевым остатком
       *       - `true` — заказ сделан на товар с нулевым остатком. Такой заказ можно отменить без штрафа за отмену
       * @example false
       */
      isZeroOrder?: boolean
      /**
       * @description Можно ли отгрузить заказ на ПВЗ:
       *       - `false` — нет
       *       - `true` — да
       * @example true
       */
      isPickupPointShipmentAllowed?: boolean
      /** @description Опции заказа */
      options?: {
        /**
         * @description Признак B2B-продажи:
         *       - `false` — не B2B-продажа
         *       - `true` — B2B-продажа
         */
        isB2B?: boolean
      }
    }
    SupplyTrbx: {
      /**
       * @description ID грузоместа
       * @example WB-TRBX-1234567
       */
      id?: string
    }
    TrbxStickers: {
      /**
       * @description Закодированное значение стикера
       * @example $WBMP:1:123:1234567
       */
      barcode?: string
      /**
       * @description Полное представление стикера в заданном формате
       * @example ^XA\n^CI28\n^CF0\n^LS0
       */
      file?: string
    }
    /** @description Детали маркировки */
    MetaDetails: {
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
       * @description [Статусы проверки идентификаторов маркировки](/knowledge-base/articles/019e9273-118b-7b69-a25a-ea1d756f05d9/rabota-s-markirovkoi-po-modeli-fbs). <br><br>
       *     Статусы проверки `imei`, с которыми поставку можно перевести в доставку:
       *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна
       *       - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
       *       - `imeiMaySell` — Товар допущен к продаже. Проверка пройдена
       *       - `imeiSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Проверка пройдена
       *
       *     <br><br>
       *     Статусы проверки `imei`, с которыми поставку нельзя перевести в доставку:
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *       - `imeiInvalidFormat` — Указан неверный формат маркировки. Проверка не пройдена
       *       - `imeiAlreadySold` — Товар с этим IMEI уже продан. Проверка не пройдена
       *
       *     <br><br>
       *     Статусы проверки `uin`, с которыми поставку можно перевести в доставку:
       *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *       - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
       *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна
       *       - `uinMaySell` — Товар допущен к продаже. Проверка пройдена
       *
       *     <br><br>
       *     Статусы проверки `uin`, с которыми поставку нельзя перевести в доставку:
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *       - `uinBadStatus` — Некорректный статус партии. Проверка не пройдена
       *       - `uinBadProcess` — Некорректная стадия обработки. Проверка не пройдена
       *       - `uinBadStatusAndBadProcess` — Некорректный статус партии. Некорректная стадия обработки. Проверка не пройдена
       *       - `uinInvalidFormat` — Неверный формат маркировки. Проверка не пройдена
       *       - `uinNotFound` — Не найден в [ГИИС](https://minfin.gov.ru/ru/perfomance/jewels/dmdk). Проверка не пройдена.
       *         Статус может означать, что УИН:
       *           - не указан в загруженной спецификации с договором на доставку
       *           - не зарегистрирован в ГИИС ДМДК
       *           - указан некорректно и считывается с бирки с ошибками
       *           - не находится в обороте
       *
       *     <br><br>
       *     Статусы проверки `sgtin`, с которыми поставку можно перевести в доставку:
       *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *       - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
       *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна
       *       - `sgtinIntroduced` — Товар допущен к продаже. Проверка пройдена
       *       - `sgtinSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Проверка пройдена
       *
       *     <br><br>
       *     Статусы проверки `sgtin`, с которыми поставку нельзя перевести в доставку:
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *       - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *       - `sgtinInvalidFormat` — Неверный формат маркировки. Проверка не пройдена
       *       - `sgtinNoGS` — Маркировка не содержит GS-разделитель `\u001d`. Проверка не пройдена
       *       - `sgtinHasInvalidSymbols` — Маркировка содержит некорректные символы или пробелы. Проверка не пройдена
       *       - `sgtinHasNonLatinSymbols` — Маркировка содержит символы, не относящиеся к специальным или латинице. Проверка не пройдена
       *       - `sgtinInvalidPattern` — Структура маркировки некорректна. Проверка не пройдена
       *       - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru). Проверка не пройдена
       *       - `sgtinEmitted` —  Маркировка эмитирована. Проверка не пройдена
       *       - `sgtinApplied` — Не пройдена процедура Ввод в оборот. Проверка не пройдена
       *       - `sgtinWrittenOff` — Списан. Проверка не пройдена
       *       - `sgtinWithdrawn` — Выбыл. Проверка не пройдена
       *       - `sgtinRetired` — Выбыл. Проверка не пройдена
       *       - `sgtinDisaggregated` — Расформирован. Проверка не пройдена
       *       - `sgtinDisaggregation` — Расформирован. Проверка не пройдена
       *       - `sgtinAppliedNotPaid` — Не оплачен. Проверка не пройдена
       *
       *     <br><br>
       *     Статусы проверки `gtin`, с которыми поставку можно перевести в доставку:
       *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *
       *     <br><br>
       *     Статусы проверки `expiration`, с которыми поставку можно перевести в доставку:
       *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *
       *     <br><br>
       *     Статусы проверки `customsDeclaration`, с которыми поставку нельзя перевести в доставку:
       *       - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *
       *     <br><br>
       *     Статусы проверки `customsDeclaration`, с которыми поставку можно перевести в доставку:
       *       - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *       - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна
       * @example uinMaySell
       */
      decision?: string
    }[]
    /** @description ID сборочных заданий */
    'v3.GetMetaMultiRequest': {
      /**
       * @example [
       *       123456,
       *       234567,
       *       345678
       *     ]
       */
      orders: number[]
    }
    'v3.OrdersMetaAPI': {
      orders?: components['schemas']['v3.OrderMetaAPI'][]
    }
    'v3.OrderMetaAPI': {
      /** @description ID сборочного задания */
      id?: number
      metaDetails?: components['schemas']['MetaDetails'] & unknown
    }
    /** @description Данные о пропуске продавца */
    Pass: {
      /**
       * @description Имя водителя
       * @example Александр
       */
      firstName?: string
      /**
       * @description Дата окончания действия пропуска
       * @example 2022-07-31 17:53:13+00:00
       */
      dateEnd?: string
      /**
       * @description Фамилия водителя
       * @example Петров
       */
      lastName?: string
      /**
       * @description Марка машины
       * @example Lamborghini
       */
      carModel?: string
      /**
       * @description Номер машины
       * @example A456BC123
       */
      carNumber?: string
      /**
       * @description Название склада
       * @example Коледино
       */
      officeName?: string
      /**
       * @description Адрес склада
       * @example г. Подольск, д. Коледино, ул. Троицкая
       */
      officeAddress?: string
      /**
       * Format: int64
       * @description ID склада
       * @example 15
       */
      officeId?: number
      /**
       * Format: int64
       * @description ID пропуска
       * @example 1
       */
      id?: number
    }
    CrossborderTurkeyClientInfo: {
      /**
       * @description Имя клиента
       * @example Иван
       */
      firstName?: string
      /**
       * @description Фамилия, Имя, Отчество
       * @example Андреев Иван Васильевич
       */
      fullName?: string
      /**
       * @description Фамилия клиента
       * @example Андреев
       */
      lastName?: string
      /**
       * @description Отчество клиента
       * @example Васильевич
       */
      middleName?: string
      /**
       * @description Номер заказа
       * @example 134567
       */
      orderID?: number
      /**
       * @description Телефон для связи с клиентом
       * @example 79871234567
       */
      phone?: string
      /**
       * @description Не используется
       * @example 0
       */
      phoneCode?: string
    }
    CrossborderTurkeyClientInfoResp: {
      /** @description Информация по клиенту для трансграничных поставок из Турции */
      orders?: components['schemas']['CrossborderTurkeyClientInfo'][] | null
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
      /** @description Список заказов */
      orders?: number[]
    }
    'v3.APIError': {
      /** @description Код ошибки */
      code?: string
      /** @description Описание ошибки */
      message?: string
      /** @description Дополнительные данные ошибки */
      data?: Record<string, never>
    }
    UpdateSuppliesShippingMethodRequest: {
      data: components['schemas']['UpdateSupplyShippingMethod'][]
    }
    UpdateSuppliesShippingMethodResponse: {
      results: components['schemas']['UpdatedSuppliesShippingMethod'][]
    }
    UpdateSupplyShippingMethod: {
      /**
       * @description Планируемая дата отгрузки поставки, формат `YYYY-MM-DD`
       * @example 2026-08-31
       */
      shippingDt: string
      /**
       * @description ID пункта отгрузки. Можно получить с помощью [отдельного метода](./orders-fbs#tag/fbsSupplies/operation/getV3FbsShippingPoints)
       * @example 100
       */
      shippingPointId: number
      /**
       * @description Способ доставки до пункта отгрузки:
       *       - `selfShipping` — доставка силами продавца
       *       - `transportCompany` — доставка через транспортную компанию
       * @example selfShipping
       * @enum {string}
       */
      shippingType: 'selfShipping' | 'transportCompany'
      /**
       * @description ID поставки
       * @example WB-GI-100
       */
      supplyId: string
    }
    /** @description Результат обработки запроса для одной поставки */
    UpdatedSuppliesShippingMethod: {
      /**
       * @description Ошибка обработки запроса для поставки. Возможные варианты ошибок:
       *       - `400 IncorrectRequestBody`:
       *         - некорректный ID поставки
       *         - место отгрузки не найдено
       *         - склад назначения находится не в РФ
       *         - неизвестный `shippingType`
       *         - дата не соответствует формату `YYYY-MM-DD`
       *       - `400 FulfillmentRequired` — в месте отгрузки недоступна услуга **Фулфилмент в СЦ**
       *       - `404 NotFound` — поставка не найдена
       *       - `409 SupplyAlreadyScanned` — поставка или её короба уже отсканированы в пункте отгрузки
       *       - `409 InvalidShippingDt` — некорректная дата отгрузки поставки
       */
      error?: {
        /** @description Код ошибки */
        code: number
        /** @description Дополнительная информация об ошибке */
        detail: string
      }
      /** @description Успешна ли обработка запроса для данной поставки. Может быть только `true` */
      success?: boolean
      /** @description ID поставки */
      supplyId: string
    }
    /** @description Данные пункта отгрузки */
    ShippingPoint: {
      /**
       * Format: int64
       * @description ID пункта отгрузки
       * @example 100
       */
      id: number
      /**
       * @description Название
       * @example Москва Морской
       */
      name: string
      /**
       * @description Адрес
       * @example г Москва, Морской Проспект 54
       */
      address: string
      /**
       * @description Населённый пункт
       * @example Москва
       */
      city: string
      /**
       * @description Тип пункта отгрузки:
       *       - `sc` — сортировочный центр
       *       - `sw` — склад
       *       - `pp` — ПВЗ
       * @example pp
       * @enum {string}
       */
      officeType: 'sc' | 'sw' | 'pp'
      /**
       * @description Типы товаров, которые принимает пункт отгрузки:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `2` — сверхгабаритный товар (СГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @example [
       *       1,
       *       3
       *     ]
       */
      cargoTypes: (1 | 2 | 3)[]
      /**
       * @description Широта
       * @example 37.588898
       */
      latitude: number
      /**
       * @description Долгота
       * @example 55.386871
       */
      longitude: number
      /**
       * @description Услуга **Фулфилмент в СЦ** для поставки по модели FBS:
       *       - `true` — доступна
       *       - `false` — недоступна
       * @example true
       */
      fulfillment: boolean
    }
    ShippingPointsResponse: {
      /** @description Список пунктов отгрузки */
      shippingPoints: components['schemas']['ShippingPoint'][]
    }
    SupplySpotQRCode: {
      /**
       * Format: base64
       * @description QR-код поставки в кодировке base64
       * @example U3dhZ2dlciByb2Nrcw==
       */
      qrCode: string
    }
    CountriesOKSMList: {
      /** @description Список стран ОКСМ */
      countries: {
        /**
         * @description Код страны
         * @example 036
         */
        code: string
        /**
         * @description Название страны
         * @example Австралия
         */
        name: string
      }[]
    }
    SupplySpotDataResponse: {
      supplies: {
        /** @description ID поставки */
        id: string
        spot?: unknown & components['schemas']['SupplySpotData']
        error?: components['schemas']['ApiErrorV3'] & unknown
      }[]
    }
    SupplySpotData: {
      /**
       * @description Статус СПОТ:
       *       - `pending` — ожидается результат формирования ДОПП — документа о предстоящей поставке
       *       - `completed` — ДОПП успешно сформирован. Можно [получить QR-код](./orders-fbs#tag/fbsSupplies/operation/getV3FbsSuppliesSupplyIdStickersSpot)
       *       - `failed` — ошибка формирования ДОПП. Подробнее в поле `errorCode`
       * @enum {string}
       */
      status: 'pending' | 'completed' | 'failed'
      /** @description Наименование перевозчика */
      carrierName: string
      /** @description ИНН перевозчика */
      carrierTaxNumber: string
      /** @description Код страны перевозчика по [ОКСМ](./orders-fbs#tag/fbsSupplies/operation/getV3FbsDictionariesCountriesOksm) */
      carrierCountryCode: string
      /** @description Регистрационный номер транспортного средства */
      vehicleRegistrationNumber: string
      /** @description Регистрационный номер прицепа */
      trailerRegistrationNumber?: string
      /**
       * @description Код ошибки от сервиса формирования ДОПП — документа о предстоящей поставке. Возвращается при `"status": "failed"`. Чтобы исправить ошибку, проверьте данные СПОТ и [добавьте их в поставку](./orders-fbs#tag/fbsSupplies/operation/getV3FbsSuppliesSupplyIdSpot) ещё раз
       * @enum {string}
       */
      errorCode?: 'doppFailed'
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
        'application/json': {
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
        'application/json': {
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
         *       "message": "Не найдено"
         *     }
         */
        'application/json': components['schemas']['Error']
      }
    }
    /** @description Не авторизован */
    '401-2': {
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
    /** @description Слишком много запросов */
    '429-2': {
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
    /** @description ID поставки */
    Supply: string
    /** @description ID сборочного задания */
    Order: number
    /** @description ID пропуска */
    Pass: number
    /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе. */
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
  getV3PassesOffices: {
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
          'application/json': components['schemas']['PassOffice'][]
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
  getV3Passes: {
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
          'application/json': components['schemas']['Pass'][]
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
  postV3Passes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Общая длина ФИО ограничена от 6 до 100 символов. В номере машины могут быть только буквы и цифры */
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Имя водителя
           * @example Александр
           */
          firstName: string
          /**
           * @description Фамилия водителя
           * @example Петров
           */
          lastName: string
          /**
           * @description Марка машины
           * @example Lamborghini
           */
          carModel: string
          /**
           * @description Номер машины
           * @example A456BC123
           */
          carNumber: string
          /**
           * Format: int64
           * @description ID склада
           * @example 15
           */
          officeId: number
        }
      }
    }
    responses: {
      /** @description Создано */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * @description ID пропуска продавца
             * @example 2
             */
            id?: number
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
      404: components['responses']['NotFound']
      429: components['responses']['429']
    }
  }
  putV3PassesPassId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID пропуска */
        passId: components['parameters']['Pass']
      }
      cookie?: never
    }
    /** @description Общая длина ФИО ограничена от 6 до 100 символов. В номере машины могут быть только буквы и цифры. */
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Имя водителя
           * @example Александр
           */
          firstName: string
          /**
           * @description Фамилия водителя
           * @example Петров
           */
          lastName: string
          /**
           * @description Марка машины
           * @example Lamborghini
           */
          carModel: string
          /**
           * @description Номер машины
           * @example A456BC123
           */
          carNumber: string
          /**
           * Format: int64
           * @description ID склада
           * @example 15
           */
          officeId: number
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
      429: components['responses']['429']
    }
  }
  deleteV3PassesPassId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID пропуска */
        passId: components['parameters']['Pass']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Удалено */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
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
  getV3OrdersNew: {
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
            orders?: components['schemas']['OrderNew'][]
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
  getV3Orders: {
    parameters: {
      query: {
        /** @description Параметр пагинации. Устанавливает предельное количество возвращаемых данных. */
        limit: components['parameters']['Limit']
        /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе. */
        next: components['parameters']['Next']
        /** @description Дата начала периода в формате Unix timestamp. По умолчанию — дата за 30 дней до запроса. Часовой пояс — UTC */
        dateFrom?: number
        /** @description Дата конца периода в формате Unix timestamp. Часовой пояс — UTC */
        dateTo?: number
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
  postV3OrdersStatus: {
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
               * @description Доступна ли [отмена](./orders-fbs#tag/fbsAssemblyOrders/operation/patchV3OrdersOrderIdCancel) сборочного задания:
               *     - `false` — недоступна
               *     - `true` — доступна
               * @example false
               */
              isCancellable?: boolean
              /**
               * @description Можно ли [перевести сборочное задание](./orders-fbs#tag/fbsSupplies/operation/patchV3FbsSuppliesSupplyIdOrdersTransfer) из доставки на сборку:
               *     - `false` — нет
               *     - `true` — да
               *
               *     Сборочное задание можно перенести из доставки на сборку, если выполняются все условия:
               *       - сборочное задание находится в статусе `complete` — в доставке
               *       - поставка, в которую нужно перенести сборочное задание, не [передана в доставку](./orders-fbs#tag/fbsSupplies/operation/patchV3SuppliesSupplyIdDeliver)
               *       - сборочное задание ранее не переносили
               * @example false
               */
              isTransferable?: boolean
              /**
               * @description Статус сборочного задания, установленный продавцом
               * @example new
               * @enum {string}
               */
              supplierStatus?: 'new' | 'confirm' | 'complete' | 'cancel'
              /**
               * @description Статус сборочного задания в системе Wildberries
               * @enum {string}
               */
              wbStatus?:
                | 'waiting'
                | 'sorted'
                | 'sold'
                | 'canceled'
                | 'canceled_by_client'
                | 'declined_by_client'
                | 'defect'
                | 'ready_for_pickup'
                | 'postponed_delivery'
                | 'accepted_by_carrier'
                | 'sent_to_carrier'
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
  getV3SuppliesOrdersReshipment: {
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
          /**
           * @example {
           *       "orders": [
           *         {
           *           "supplyID": "WB-GI-1234567",
           *           "orderID": 5632423
           *         }
           *       ]
           *     }
           */
          'application/json': {
            /** @description Список сборочных заданий */
            orders?: {
              /** @description ID поставки */
              supplyID?: unknown
              /** @description ID сборочного задания */
              orderID?: unknown
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
  patchV3OrdersOrderIdCancel: {
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
  postV3OrdersStickers: {
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
               * @example 9753
               */
              partB?: string
              /**
               * @description Закодированное значение стикера
               * @example !uKEtQZVx
               */
              barcode?: string
              /**
               * @description Полное представление стикера в заданном формате
               * @example iVBORw0KGgoAAAANSUhEUgAAASIAAAEiAQAAAAB1xeIbAAABiElEQVR4nO2YUW6DMAyGbUDaI0g9wI4Sjg5H2Q3IeyZPthNKV03tNiVdtf9/cFvXAvRhkh+z0G2t3R1FRKgqAokikCgCiSKQeDQJzho8yXMsmfmh1/UvqoKoNrsLdgN6S8hzXP2TV8Xc47KMyTPnx+DvX/1zVg1Xmch1z9ih6gv2HLZTuqIPXjX7ftSlPRLJ+prXnONLF9hXZL96q/fE4W1Q+O8XvQ/29djL/lvWiTg/Bt89Voeqn/j7OQ4eTLJY7tz8oEoVSFC28aN9JqKwqbX3kP+VBewrsg/KedE3qmXUn3IMYF/d3zONm38TiqckFKeyEaDv6/W96Nus9b2tPrbw2LOAvq/Pfpfn/Fb4HoA1p9UcU3SHJTLHExk+p8VeK3JwN0Q2UNPmR9+3m2OyDzPjoOFFML9vOMcUin0iHahR2CaGz/mkmo6P5zHtQdD3TeeY5NY++/sKZ+xQdUliNZszqePRkFd+tfvHqhtC1S/nmOQh7eH+Y3WoygKJIpAoAokikChqT+IDIkbb8/8OLskAAAAASUVORK5CYII=
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
      /** @description Конфликт */
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
  postV3OrdersStickersCrossBorder: {
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
          /**
           * @example {
           *       "stickers": [
           *         {
           *           "orderId": 987654320,
           *           "status": "awaitingTrackNumber",
           *           "parcelId": "",
           *           "file": "",
           *           "partA": "",
           *           "partB": "",
           *           "barcode": ""
           *         },
           *         {
           *           "orderId": 123456789,
           *           "status": "ready",
           *           "parcelId": "WB0000000001",
           *           "file": "JVBERi0xLjQKJSBjcmVhdGVkIGJ5IFBpbGxvdyBQREYgZHJpdmVyCjQgMCBvYmo8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgNSAwIFIKPj5lbmRvYmoKNSAwIG9iajw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbIDIgMCBSIF0KPj5lbmRvYmoKMSAwIG9iajw8Ci9UeXBlIC9YT2JqZWN0Ci9TdWJ0eXBlIC9JbWFnZQovV2lkdGggMjkwCi9IZWlnaHQgMjkwCi9GaWx0ZXIgWyAvQ0NJVFRGYXhEZWNvZGUgXQovRGVjb2RlUGFybXMgWyA8PAovSyAtMQovQmxhY2tJczEgdHJ1ZQovQ29sdW1ucyAyOTAKL1Jvd3MgMjkwCj4+IF0KL0JpdHNQZXJDb21wb25lbnQgMQovQ29sb3JTcGFjZSAvRGV2aWNlR3JheQovTGVuZ3RoIDY2Ngo+PnN0cmVhbQomoLYaX////////////8g2b4gpHITff///////////8nBSkIB8nBS/////////////////////+QgHkNB/IQD////////////////////////////+P//////////////////////////IQ5CHIQ////////////////////////////////jkNB/H/////////////////////4yEOQh+P//////////////////EhoKR//////yDYchDkIchDyBg2E4aCcFL////////////////////////IgFIiAhODQTg0f/////////////////+ThCICEQGgnDQTg0E4NBODZ////////////////////////4k4NESEOJCCP/////////////////8gpHIQ5CCCEEENB8hDyBg2f//////////////////////////xEZKQhOEJwhOB5f//////////////yDZviDQIjkDBS///////////////ycFLEnCCThP//////////////////kIB5CHkQEEnCEQEJwbP///////////////////////////4ycGgnBoIgFL/////////////////////+QhxIQ4kIcg0H////////////////////////8cSEOJCHEhAP//////////////////jIQDIQ+Qh5OE////////////////////////4iIiI/////////////wAQAQJAAABAwABAAAAIgEAAAEBAwABAAAAIgEAAAIBAwABAAAAAQAAAAMBAwABAAAABAAAAAYBAwABAAAAAQAAABEBBAABAAAACAAAABYBAwABAAAAIgEAABcBBAABAAAAKAIAABwBAwABAAAAAQAAAAAAAAAKZW5kc3RyZWFtCmVuZG9iagoyIDAgb2JqPDwKL1Jlc291cmNlcyA8PAovUHJvY1NldCBbIC9QREYgL0ltYWdlQiBdCi9YT2JqZWN0IDw8Ci9pbWFnZSAxIDAgUgo+Pgo+PgovTWVkaWFCb3ggWyAwIDAgMjkwLjAgMjkwLjAgXQovQ29udGVudHMgMyAwIFIKL1R5cGUgL1BhZ2UKL1BhcmVudCA1IDAgUgo+PmVuZG9iagozIDAgb2JqPDwKL0xlbmd0aCA0Nwo+PnN0cmVhbQpxIDI5MC4wMDAwMDAgMCAwIDI5MC4wMDAwMDAgMCAwIGNtIC9pbWFnZSBEbyBRCgplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmo8PAovQ3JlYXRpb25EYXRlIChEOjIwMjUxMTA3MTMzNTE1WikKL01vZERhdGUgKEQ6MjAyNTExMDcxMzM1MTVaKQo+PmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM2IGYgCjAwMDAwMDAxNDQgMDAwMDAgbiAKMDAwMDAwMTA1MiAwMDAwMCBuIAowMDAwMDAxMjE0IDAwMDAwIG4gCjAwMDAwMDAwNDAgMDAwMDAgbiAKMDAwMDAwMDA4NyAwMDAwMCBuIAowMDAwMDAxMzA5IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1Jvb3QgNCAwIFIKL1NpemUgNwovSW5mbyA2IDAgUgo+PgpzdGFydHhyZWYKMTM5MQolJUVPRg==",
           *           "partA": "231648",
           *           "partB": "9753",
           *           "barcode": "!uKEtQZVx"
           *         }
           *       ]
           *     }
           */
          'application/json': {
            stickers?: {
              /**
               * @description ID сборочного задания
               * @example 3869227998
               */
              orderId?: number
              /**
               * @description Статус генерации стикера:
               *       - `awaitingTrackNumber` — стикер не готов. Ожидается трек-номер от перевозчика.
               *       - `ready` — стикер готов
               * @example ready
               * @enum {string}
               */
              status?: 'awaitingTrackNumber' | 'ready'
              /**
               * @description Трек-номер в стикере для отслеживания сборочного задания
               * @example WB0000000001
               */
              parcelId?: string
              /**
               * Format: byte
               * @description Стикер в формате PDF, кодировка base64
               * @example JVBERi0xLjQKJSBjcmVhdGVkIGJ5IFBpbGxvdyBQREYgZHJpdmVyCjQgMCBvYmo8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgNSAwIFIKPj5lbmRvYmoKNSAwIG9iajw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbIDIgMCBSIF0KPj5lbmRvYmoKMSAwIG9iajw8Ci9UeXBlIC9YT2JqZWN0Ci9TdWJ0eXBlIC9JbWFnZQovV2lkdGggMjkwCi9IZWlnaHQgMjkwCi9GaWx0ZXIgWyAvQ0NJVFRGYXhEZWNvZGUgXQovRGVjb2RlUGFybXMgWyA8PAovSyAtMQovQmxhY2tJczEgdHJ1ZQovQ29sdW1ucyAyOTAKL1Jvd3MgMjkwCj4+IF0KL0JpdHNQZXJDb21wb25lbnQgMQovQ29sb3JTcGFjZSAvRGV2aWNlR3JheQovTGVuZ3RoIDY2Ngo+PnN0cmVhbQomoLYaX////////////8g2b4gpHITff///////////8nBSkIB8nBS/////////////////////+QgHkNB/IQD////////////////////////////+P//////////////////////////IQ5CHIQ////////////////////////////////jkNB/H/////////////////////4yEOQh+P//////////////////EhoKR//////yDYchDkIchDyBg2E4aCcFL////////////////////////IgFIiAhODQTg0f/////////////////+ThCICEQGgnDQTg0E4NBODZ////////////////////////4k4NESEOJCCP/////////////////8gpHIQ5CCCEEENB8hDyBg2f//////////////////////////xEZKQhOEJwhOB5f//////////////yDZviDQIjkDBS///////////////ycFLEnCCThP//////////////////kIB5CHkQEEnCEQEJwbP///////////////////////////4ycGgnBoIgFL/////////////////////+QhxIQ4kIcg0H////////////////////////8cSEOJCHEhAP//////////////////jIQDIQ+Qh5OE////////////////////////4iIiI/////////////wAQAQJAAABAwABAAAAIgEAAAEBAwABAAAAIgEAAAIBAwABAAAAAQAAAAMBAwABAAAABAAAAAYBAwABAAAAAQAAABEBBAABAAAACAAAABYBAwABAAAAIgEAABcBBAABAAAAKAIAABwBAwABAAAAAQAAAAAAAAAKZW5kc3RyZWFtCmVuZG9iagoyIDAgb2JqPDwKL1Jlc291cmNlcyA8PAovUHJvY1NldCBbIC9QREYgL0ltYWdlQiBdCi9YT2JqZWN0IDw8Ci9pbWFnZSAxIDAgUgo+Pgo+PgovTWVkaWFCb3ggWyAwIDAgMjkwLjAgMjkwLjAgXQovQ29udGVudHMgMyAwIFIKL1R5cGUgL1BhZ2UKL1BhcmVudCA1IDAgUgo+PmVuZG9iagozIDAgb2JqPDwKL0xlbmd0aCA0Nwo+PnN0cmVhbQpxIDI5MC4wMDAwMDAgMCAwIDI5MC4wMDAwMDAgMCAwIGNtIC9pbWFnZSBEbyBRCgplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmo8PAovQ3JlYXRpb25EYXRlIChEOjIwMjUxMTA3MTMzNTE1WikKL01vZERhdGUgKEQ6MjAyNTExMDcxMzM1MTVaKQo+PmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM2IGYgCjAwMDAwMDAxNDQgMDAwMDAgbiAKMDAwMDAwMTA1MiAwMDAwMCBuIAowMDAwMDAxMjE0IDAwMDAwIG4gCjAwMDAwMDAwNDAgMDAwMDAgbiAKMDAwMDAwMDA4NyAwMDAwMCBuIAowMDAwMDAxMzA5IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1Jvb3QgNCAwIFIKL1NpemUgNwovSW5mbyA2IDAgUgo+PgpzdGFydHhyZWYKMTM5MQolJUVPRg==
               */
              file?: string
              /**
               * @description Первая часть ID стикера для печати подписи
               * @example 231648
               */
              partA?: string
              /**
               * @description Вторая часть ID стикера для печати подписи
               * @example 9753
               */
              partB?: string
              /**
               * @description Закодированное значение стикера
               * @example !uKEtQZVx
               */
              barcode?: string
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
  postV3OrdersStatusHistory: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /**
           * @description ID сборочных заданий
           * @example [
           *       123456789,
           *       987654321
           *     ]
           */
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
            /** @description Список сборочных заданий */
            orders?: {
              /**
               * Format: date-time
               * @description Планируемая дата доставки, [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)
               */
              deliveryDate?: string
              /** @description Статусы */
              statuses?: {
                /**
                 * @description Дата присвоения статуса
                 * @example null
                 */
                date?: string | null
                /**
                 * @description Статус-код сборочного задания/заказа:
                 *       - `dispatched_to_delivery_service` — Продавец передал заказ в службу доставки в своей стране
                 *       - `on_way_to_delivery_service` — Заказ едет на склад службы доставки в стране продавца
                 *       - `accepted_by_carrier` — Товар принят перевозчиком
                 *       - `assembling` — Отправлен на сборку
                 *       - `assembled` — Собран на складе
                 *       - `sorted` — Отсортирован
                 *       - `replaced_at_warehouse` — Замена на складе
                 *       - `prepared_for_shipment` — Подготовлен к отгрузке
                 *       - `in_search` — На поиске
                 *       - `arrived_at_dct` — Поступил в распределительный центр-транзит
                 *       - `arrived_at_sct` — Поступил в сортировочный центр-транзит
                 *       - `arrived_at_dc` — Поступил в распределительный центр
                 *       - `arrived_at_sc` — Поступил в сортировочный центр
                 *       - `prepared_for_shipment_at_sc` — Подготовлен к отгрузке в сортировочном центре
                 *       - `shipped_at_sc` — Отгружено сортировочным центром
                 *       - `shipped_at_dct` — Отгружен распределительным центром — транзит
                 *       - `shipped_at_dc` — Отгружен распределительным центром
                 *       - `delivered_at_sc` — Доставлен в сортировочный/распределительный центр (СЦ/РЦ)
                 *       - `on_way_to_sc` — В пути в сортировочный центр
                 *       - `on_way_to_dc` — В пути в распределительный центр
                 *       - `on_way_to_pp` — В пути на пункт выдачи
                 *       - `arrived_at_pp` — Прибыл на пункт выдачи
                 *       - `accepted_at_pp` — Приёмка в пункте выдачи
                 *       - `ready_for_pick_up` — Готов к выдаче
                 *       - `arrived_at_pp` — Поступил на пункт выдачи заказов (ПВЗ)
                 *       - `received_by_client` — Получен клиентом
                 *       - `delivered_at_parcel_locker` — Доставлен в постамат
                 *       - `canceled_by_client` — Покупатель отменил заказ при получении
                 *       - `cancel_after_expiration` — Отмена по сроку хранения
                 *       - `at_courier` — Передан курьеру
                 *       - `moved_to_return_box` — Перемещен в возвратную коробку
                 *       - `accepted_for_return` — Принят к возврату на ПВЗ
                 *       - `created` — Оформлен
                 *       - `canceled_by_seller` — Отменен продавцом
                 *       - `dispatched_by_seller` — Отгружено по данным продавца
                 *       - `delivered` — Заказ выдан
                 *       - `on_way` — В пути
                 *       - `arrived_at_wb_wh` — Поступил на склад WB
                 *       - `dispatched_from_wh` — Отправлен со склада
                 *       - `customs_clearance` — Таможенное оформление
                 *       - `customs_clearance_completed` — Выпущен таможней
                 *       - `departed_from_origin_country` — Отправлен из страны продавца
                 *       - `arrived_in_destination_country` — Прибытие в страну назначения
                 *       - `on_way_to_wb_sc` — Отправлен до сортировочного центра (СЦ) WB
                 *       - `accepted_at_wb_sc` — Принят СЦ WB
                 *       - `canceled` — Отмена
                 *       - `failed_to_reach_client` — Не дозвонились до клиента
                 * @example SORTED
                 */
                code?: string
              }[]
              /**
               * @description ID сборочного задания
               * @example 123456789
               */
              orderID?: number
            }[]
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
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
  postV3OrdersClient: {
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
          'application/json': components['schemas']['CrossborderTurkeyClientInfoResp']
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
  getV3FbsOrdersArchive: {
    parameters: {
      query: {
        /**
         * @description Год создания заказа
         * @example 2023
         */
        year: number
        /**
         * @description Месяц создания заказа
         * @example 2
         */
        month: number
        /**
         * @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе.
         * @example 0
         */
        next: number
        /**
         * @description Количество сборочных заданий в ответе
         * @example 150
         */
        limit: number
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
          'application/json': components['schemas']['v3.ArchiveOrders']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['ArhiveOrderError400']
        }
      }
      401: components['responses']['401-2']
      402: components['responses']['402']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json':
            components['schemas']['ArhiveOrderError400'] | components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429-2']
    }
  }
  postV3OrdersMeta: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['v3.GetMetaMultiRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['v3.OrdersMetaAPI']
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
           *       "code": "BadRequest",
           *       "message": "Неправильный запрос",
           *       "data": {}
           *     }
           */
          'application/json': components['schemas']['v3.APIError']
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
           *       "message": "Доступ запрещён",
           *       "data": {}
           *     }
           */
          'application/json': components['schemas']['v3.APIError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "code": "NotFound",
           *       "message": "Не найдено",
           *       "data": {}
           *     }
           */
          'application/json': components['schemas']['v3.APIError']
        }
      }
      429: components['responses']['429']
    }
  }
  deleteV3OrdersOrderIdMeta: {
    parameters: {
      query: {
        /** @description Название идентификаторов маркировки для удаления. Передаётся только одно значение. */
        key: 'imei' | 'uin' | 'gtin' | 'sgtin' | 'customsDeclaration'
      }
      header?: never
      path: {
        /** @description ID сборочного задания */
        orderId: components['parameters']['Order']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Удалено */
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
      /** @description Ошибка удаления идентификаторов маркировки */
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
  putV3OrdersOrderIdMetaSgtin: {
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
           * @description Массив кодов маркировки [Честного знака](https://честныйзнак.рф/). <br>
           *     Вы [можете передать](https://seller.wildberries.ru/instructions/ru/ru/material/kiz-common-errors#1a16df06-567b-4260-a36d-659a60e3a0fd) коды маркировки:
           *       - полностью — с GS-разделителями и кодом проверки подлинности (криптохвостом)
           *       - в коротком формате — с GS-разделителями без кода проверки подлинности (криптохвоста)
           *
           *       GS-разделители необходимо передавать в кодировке Unicode с экранированием — `\u001D`
           * @example [
           *       "0104630568317423215EirD_orEif7X\u001d91EE12\u001d92VygELprJ87wrc/qF/Vq/KEFUVpZm4vDPQt2kqUw308Y="
           *     ]
           */
          sgtins: string[]
        }
      }
    }
    responses: {
      /** @description Отправлено */
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
  putV3OrdersOrderIdMetaUin: {
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
      /** @description Ошибка обновления идентификаторов маркировки */
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
  putV3OrdersOrderIdMetaImei: {
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
      /** @description Ошибка обновления идентификаторов маркировки */
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
  putV3OrdersOrderIdMetaGtin: {
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
      /** @description Ошибка обновления идентификаторов маркировки */
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
  putV3OrdersOrderIdMetaExpiration: {
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
           * Format: date (dd.mm.yyyy)
           * @description Дата, до которой годен товар. Не менее 30 дней с текущей даты
           * @example 12.09.2030
           */
          expiration: string
        }
      }
    }
    responses: {
      /** @description Отправлено */
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
      /** @description Ошибка добавления срока годности */
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
  putV3OrdersOrderIdMetaCustomsDeclaration: {
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
           * @description Номер ДТ
           * @example 10704010/010624/0000302
           */
          customsDeclaration: string
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
      /** @description Ошибка обновления номера ДТ */
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
  getV3Supplies: {
    parameters: {
      query: {
        /** @description Параметр пагинации. Устанавливает предельное количество возвращаемых данных. */
        limit: components['parameters']['Limit']
        /** @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе. */
        next: components['parameters']['Next']
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
            /** @description Список поставок */
            supplies?: components['schemas']['Supply'][]
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
  postV3Supplies: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Наименование поставки
           * @example Тестовая поставка
           */
          name?: string
        }
      }
    }
    responses: {
      /** @description Создано */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * @description ID поставки
             * @example WB-GI-1234567
             */
            id?: string
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
  patchV3SuppliesSupplyIdOrders: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description ID сборочных заданий
           * @example [
           *       5632423,
           *       3453452,
           *       7654533,
           *       4529544
           *     ]
           */
          orders?: number[]
        }
      }
    }
    responses: {
      /** @description Сборочные задания закреплены за поставкой */
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
      /** @description Ошибка добавления сборочного задания к поставке */
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
  patchV3FbsSuppliesSupplyIdOrdersTransfer: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки, из которой будут перемещены заказы */
        supplyId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Список ID сборочных заданий, которые нужно перевести на сборку */
          orderIds: number[]
          /** @description ID поставки, в которую будут перемещены сборочные задания. Поставка не должна быть в доставке */
          newSupplyId: string
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
          'application/json': components['schemas']['v3.TransferOrdersToAssemblyResponse']
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
    }
  }
  getV3SuppliesSupplyId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
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
          'application/json': components['schemas']['Supply']
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
  deleteV3SuppliesSupplyId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Удалено */
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
      /** @description За поставкой закреплены сборочные задания */
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
  getV3SuppliesSupplyIdOrderIds: {
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
          'application/json': components['schemas']['v3.SupplyOrderIDsAPI']
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
  getV3FbsShippingPoints: {
    parameters: {
      query: {
        /**
         * @description Населённый пункт отгрузки поставки, кириллица
         * @example Москва
         */
        city: string
        /**
         * @description Тип товара, который принимает пункт отгрузки:
         *       - `1` — малогабаритный товар (МГТ)
         *       - `2` — сверхгабаритный товар (СГТ)
         *       - `3` — крупногабаритный товар (КГТ+)
         * @example 1
         */
        cargoType: 1 | 2 | 3
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
          'application/json': components['schemas']['ShippingPointsResponse']
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
      401: components['responses']['401-2']
      403: components['responses']['403']
      429: components['responses']['429-2']
    }
  }
  patchV3FbsSuppliesShippingMethod: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateSuppliesShippingMethodRequest'] & unknown
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UpdateSuppliesShippingMethodResponse']
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
      /** @description Конфликт */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['v3.APIError']
        }
      }
      429: components['responses']['429']
    }
  }
  patchV3SuppliesSupplyIdDeliver: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Передано в доставку */
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
      /** @description Ошибка закрытия поставки */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['409SupplyDeliverError']
        }
      }
      429: components['responses']['429']
    }
  }
  getV3SuppliesSupplyIdBarcode: {
    parameters: {
      query: {
        /** @description Тип стикера */
        type: 'svg' | 'zplv' | 'zplh' | 'png'
      }
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
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
             * @description Закодированное значение стикера (ID поставки)
             * @example WB-GI-12345678
             */
            barcode?: string
            /**
             * Format: byte
             * @description Полное представление стикера в заданном формате (кодировка base64)
             * @example U3dhZ2dlciByb2Nrcw==
             */
            file?: string
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
      404: components['responses']['NotFound']
      /** @description Ошибка запроса данных */
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
  getV3SuppliesSupplyIdTrbx: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
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
            trbxes?: components['schemas']['SupplyTrbx'][]
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
      404: components['responses']['NotFound']
      429: components['responses']['429']
    }
  }
  postV3SuppliesSupplyIdTrbx: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /**
           * @description Количество грузомест, которые необходимо добавить к поставке
           * @example 4
           */
          amount: number
        }
      }
    }
    responses: {
      /** @description Создано */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Список ID грузомест, которые были созданы */
            trbxIds?: string[]
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
      404: components['responses']['NotFound']
      429: components['responses']['429']
    }
  }
  deleteV3SuppliesSupplyIdTrbx: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Список ID грузомест, которые необходимо удалить */
          trbxIds: string[]
        }
      }
    }
    responses: {
      /** @description Удалено */
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
      429: components['responses']['429']
    }
  }
  postV3SuppliesSupplyIdTrbxStickers: {
    parameters: {
      query: {
        /**
         * @description Формат стикера
         * @example png
         */
        type: string
      }
      header?: never
      path: {
        /** @description ID поставки */
        supplyId: components['parameters']['Supply']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Список ID грузомест, по которым необходимо вернуть стикеры */
          trbxIds: string[]
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
            stickers?: components['schemas']['TrbxStickers'][]
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
      404: components['responses']['NotFound']
      429: components['responses']['429']
    }
  }
  getV3FbsDictionariesCountriesOksm: {
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
          'application/json': components['schemas']['CountriesOKSMList']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  putV3FbsSuppliesSupplyIdSpot: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description ID поставки
         * @example WB-GI-123456789
         */
        supplyId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Наименование перевозчика
           * @example ООО СПОТ
           */
          carrierName: string
          /**
           * @description ИНН перевозчика
           * @example 7588179007
           */
          carrierTaxNumber: string
          /**
           * @description Код страны перевозчика по [ОКСМ](./orders-fbs#tag/fbsSupplies/operation/getV3FbsDictionariesCountriesOksm)
           * @example 112
           */
          carrierCountryCode: string
          /**
           * @description Регистрационный номер транспортного средства
           * @example А123АА100
           */
          vehicleRegistrationNumber: string
          /**
           * @description Регистрационный номер прицепа
           * @example АА000100
           */
          trailerRegistrationNumber?: string
        }
      }
    }
    responses: {
      /** @description Добавлено */
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
          'application/problem+json': components['schemas']['ApiErrorV3']
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
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
      /** @description Ошибка добавления данных СПОТ */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3FbsSuppliesSpotList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Список ID поставок */
          supplyIds: string[]
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
          'application/json': components['schemas']['SupplySpotDataResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV3FbsSuppliesSupplyIdStickersSpot: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description ID поставки
         * @example WB-GI-123456789
         */
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
          'application/json': components['schemas']['SupplySpotQRCode']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['ApiErrorV3']
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
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
      429: components['responses']['429']
    }
  }
  getV3FbsSettingsAutoreturns: {
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
             * @description Тип автовозврата:
             *       - `allToWarehouse` — все товары отправляются на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
             *       - `allToPickupPoint` — все товары отправляются на пункт выдачи заказов
             *       - `manual` — используются ручные настройки
             * @example allToWarehouse
             * @enum {string}
             */
            type: 'allToWarehouse' | 'allToPickupPoint' | 'manual'
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
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Неприменимо для данного профиля */
      406: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ApiErrorV3']
        }
      }
      429: components['responses']['429']
    }
  }
  patchV3FbsSettingsAutoreturns: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /**
           * @description Тип автовозврата малогабаритных товаров:
           *       - `allToWarehouse` — отправлять все товары на склад WB, кроме товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
           *       - `allToPickupPoint` — отправлять все товары на пункт выдачи заказов
           *       - `manual` — использовать ручные настройки
           * @example allToWarehouse
           * @enum {string}
           */
          type: 'allToWarehouse' | 'allToPickupPoint' | 'manual'
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
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
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
  postV3FbsSettingsAutoreturnsItems: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /**
           * @description Список ID размеров товаров в системе WB
           * @example [
           *       111111,
           *       222222
           *     ]
           */
          chrtIds: number[]
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
            results: {
              /** @description - `true` — настройки автовозврата товара успешно получены */
              success?: boolean
              /**
               * Format: uint64
               * @description ID размера товара в системе WB
               */
              chrtId: number
              /**
               * @description Куда будет возвращён товар:
               *       - `auto` — место возврата определяется автоматически
               *       - `byWarehouse` — на склад WB
               *       - `byPickupPoint` — на пункт выдачи заказов
               *       - `byCourier` — продавцу курьером. Всегда для товаров тех [предметов](/openapi/orders-fbs#tag/autoreturnSettings/operation/getV3FbsSettingsAutoreturnsSubcategoriesRestricted), которые автоматически возвращаются в ПВЗ
               * @enum {string}
               */
              type?: 'auto' | 'byWarehouse' | 'byPickupPoint' | 'byCourier'
              /** @description - `true` — настройки автовозврата товара можно изменить */
              changeable?: boolean
              /** @description Детали ошибки */
              error?: {
                /** @description Код ошибки */
                code: number
                /** @description Дополнительная информация об ошибке */
                detail: string
              }[]
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
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
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
  patchV3FbsSettingsAutoreturnsItems: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /**
           * @description Список ID размеров товаров в системе WB
           * @example [
           *       111111,
           *       222222
           *     ]
           */
          chrtIds: number[]
          /**
           * @description Тип автовозврата малогабаритных товаров:
           *       - `byWarehouse` — все товары отправляются на склад WB
           *       - `byPickupPoint` — все товары отправляются на пункт выдачи заказов
           * @example byWarehouse
           * @enum {string}
           */
          type: 'byWarehouse' | 'byPickupPoint'
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
            results: {
              /**
               * Format: uint64
               * @description ID размера товара в системе WB
               */
              chrtId: number
              /** @description Детали ошибки */
              error?: unknown
              /** @description - `true` — настройки автовозврата товара обновлены */
              success?: boolean
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
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
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
  getV3FbsSettingsAutoreturnsSubcategoriesRestricted: {
    parameters: {
      query: {
        /**
         * @description Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе.
         * @example 0
         */
        next: number
        /**
         * @description Количество предметов в ответе
         * @example 1000
         */
        limit: number
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
            /**
             * Format: int64
             * @description Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных
             */
            next: number | null
            /** @description Список ID предметов, товары которых не хранятся на складах WB */
            data: {
              /** @description ID предмета */
              subjectId: number
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
          'application/problem+json': components['schemas']['ApiErrorV3']
        }
      }
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
}
