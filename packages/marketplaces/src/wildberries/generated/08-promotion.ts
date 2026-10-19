// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/adv/v1/promotion/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Списки кампаний
     * @description Метод возвращает списки всех [рекламных кампаний](/openapi/promotion#tag/campaigns/operation/getV2Adverts) продавца с их ID. Кампании сгруппированы по типу и статусу, у каждой указана дата последнего изменения.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1PromotionCount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v2/adverts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Информация о кампаниях
     * @description Метод возвращает информацию о рекламных кампаниях с единой или ручной ставкой по их статусам, типам оплаты и ID.
     *
     *      <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV2Adverts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v1/bids/min': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Минимальные ставки для карточек товаров
     * @description Метод возвращает минимальные ставки для карточек товаров в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) — по типу оплаты и местам размещения.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 20 запросов | 3 сек | 5 запросов |
     *     | Сервисный | 1 мин | 20 запросов | 3 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1BidsMin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v2/seacat/save-ad': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создать кампанию
     * @description Метод создаёт кампанию:
     *       - с ручной ставкой для продвижения товаров в поиске и/или рекомендациях
     *       - с единой ставкой для продвижения товаров одновременно в поиске и рекомендациях
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2SeacatSaveAd']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/supplier/subjects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Предметы для кампаний
     * @description Метод возвращает список [предметов](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectAll), которые можно добавить в рекламную [кампанию](/openapi/promotion#tag/campaigns/operation/getV2Adverts).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 12 сек | 1 запрос | 12 сек | 5 запросов |
     *     | Сервисный | 12 сек | 1 запрос | 12 сек | 5 запросов |
     *     | Базовый с секретом | 12 сек | 1 запрос | 12 сек | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1SupplierSubjects']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v2/supplier/nms': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Карточки товаров для кампаний
     * @description Метод возвращает список [карточек товаров](/openapi/item-management#tag/listings/operation/postV2GetCardsList), которые можно добавить в рекламную [кампанию](/openapi/promotion#tag/campaigns/operation/getV2Adverts). Для получения карточек необходимы ID [предметов](/openapi/promotion#tag/creatingCampaigns/operation/getV1SupplierSubjects), также доступных для добавления в кампанию.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2SupplierNms']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/delete': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Удаление кампании
     * @description Метод удаляет [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусе `4` — готова к запуску.<br><br>
     *
     *     После удаления кампания некоторое время будет находиться в статусе `-1` — кампания в процессе удаления. Полное удаление кампании занимает от 3 до 10 минут.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV0Delete']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/rename': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Переименование кампании
     * @description Метод меняет название [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts). Это можно сделать в любой момент существования кампании.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0Rename']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/start': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Запуск кампании
     * @description Метод запускает [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусах `4` — готово к запуску — или `11` — пауза.
     *     Чтобы запустить кампанию, проверьте ее бюджет. Если бюджета недостаточно, [пополните его](/openapi/promotion#tag/finances/operation/postV1BudgetDeposit).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV0Start']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/pause': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Пауза кампании
     * @description Метод ставит [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусе `9` — активна — на паузу.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV0Pause']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/stop': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Завершение кампании
     * @description Метод завершает [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусах:
     *       - `9` — активна
     *       - `11` — пауза
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV0Stop']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/auction/placements': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Изменение мест размещения в кампаниях с ручной ставкой
     * @description Метод меняет места размещения в кампаниях с ручной ставкой и моделью оплаты за показы — `cpm`.
     *     <br><br>
     *     Для кампаний в статусах `4`, `9` и `11`.
     *
     *      <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 1 запрос | 1 сек | 1 запрос |
     *     | Сервисный | 1 сек | 1 запрос | 1 сек | 1 запрос |
     *     | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 1 запрос |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    put: operations['putV0AuctionPlacements']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v1/bids': {
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
     * Изменение ставок в кампаниях
     * @description Метод меняет ставки карточек товаров по артикулам WB в кампаниях:
     *       - с единой ставкой
     *       - с ручной ставкой
     *       - с моделью оплаты `cpc` — за клики
     *
     *     Для кампаний в статусах `4`, `9` и `11`.
     *     <br><br>
     *     В запросе укажите место размещения в параметре `placement`:
     *       - `combined` — в поиске и рекомендациях для кампаний с единой ставкой
     *       - `search `или `recommendations` — в поиске или рекомендациях для кампаний с ручной ставкой
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    patch: operations['patchV1Bids']
    trace?: never
  }
  '/adv/v1/balance': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Баланс
     * @description Метод возвращает информацию о:
     *       - счёте кабинета Продвижения WB. Его пополняет продавец.
     *       - балансе — максимальной сумме для оплаты кампании по взаиморасчету: удержании средств из будущих продаж. Баланс пополнить нельзя, он рассчитывается автоматически на основе отчётов по продвижению.
     *       - бонусных начислениях WB.
     *
     *     Чтобы получить информацию о бюджетах кампаний, используйте метод [Бюджеты кампаний](/openapi/promotion#tag/finances/operation/postV2Budget).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Balance']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v2/budget': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Остатки бюджетов кампаний
     * @description Метод возвращает информацию об остатках бюджетов [кампаний](/openapi/promotion#tag/campaigns/operation/getV2Adverts).
     *     Для кампаний в [статусах](/openapi/promotion#tag/campaigns/operation/getV1PromotionCount):
     *       - `4` — готова к запуску
     *       - `9` — активна
     *       - `11` — на паузе
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 20 запросов | 3 сек | 4 запроса |
     *     | Сервисный | 1 мин | 20 запросов | 3 сек | 4 запроса |
     *     | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 4 запроса |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2Budget']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/budget': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Бюджет кампании
     * @deprecated
     * @description Метод будет отключен [16 ноября](/release-notes?id=582).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 4 запроса | 250 мс | 4 запроса |
     *     | Сервисный | 1 сек | 4 запроса | 250 мс | 4 запроса |
     *     | Базовый с секретом | 1 сек | 4 запроса | 250 мс | 4 запроса |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Budget']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/budget/deposit': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Пополнение бюджета кампании
     * @description Метод пополняет [бюджет](/openapi/promotion#tag/finances/operation/postV2Budget) кампании. <br>
     *     Чтобы запустить кампанию после пополнения бюджета, используйте метод [Запуск кампании](/openapi/promotion#tag/campaignManagement/operation/getV0Start).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1BudgetDeposit']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/upd': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение истории затрат
     * @description Метод формирует список фактических затрат на рекламные кампании за заданный период.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1Upd']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/payments': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение истории пополнений счёта
     * @description Метод возвращает историю пополнений счёта **WB Продвижение** за заданный период.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1Payments']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/auction/nms': {
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
     * Изменение списка карточек товаров в кампаниях
     * @description Метод добавляет и удаляет карточки товаров в кампаниях.
     *     <br><br>
     *     Для кампаний в статусах `4`, `9` и `11`.
     *     <br><br>
     *     Для добавляемых товаров устанавливается текущая минимальная ставка.
     *
     *      <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 1 запрос | 1 сек | 1 запрос |
     *     | Сервисный | 1 сек | 1 запрос | 1 сек | 1 запрос |
     *     | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 1 запрос |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    patch: operations['patchV0AuctionNms']
    trace?: never
  }
  '/api/advert/v0/bids/recommendations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Рекомендуемые ставки для карточек товаров и поисковых кластеров
     * @description Метод возвращает рекомендуемые ставки для карточек товаров и поисковых кластеров кампании.
     *     Можно использовать для кампаний с типами оплаты `cpm` — за показы и `cpc` — за клики.
     *
     *      <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Базовый | 1 ч | 20 запросов | 3 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV0BidsRecommendations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/normquery/stats': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика поисковых кластеров
     * @description Метод формирует статистику по поисковым кластерам за указанный период.<br>
     *     Можно использовать для кампаний с моделями оплаты `cpm` — за показы и `cpc` — за клики.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 10 запросов | 6 сек | 20 запросов |
     *     | Сервисный | 1 мин | 10 запросов | 6 сек | 20 запросов |
     *     | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 20 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0NormqueryStats']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/normquery/get-bids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список ставок поисковых кластеров
     * @description Метод возвращает список поисковых кластеров со ставками по:
     *       - ID кампаний
     *       - артикулам WB
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0NormqueryGetBids']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v1/config': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Конфигурационные значения продвижения
     * @description Метод возвращает валюту, код валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) и допустимые шаги ставок для метода [POST /api/advert/v1/normquery/bids](/openapi/promotion#tag/searchClusters/operation/postV1NormqueryBids)
     *
     *
     *     <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     </div>
     */
    get: operations['getV1Config']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v1/normquery/bids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить ставки для поисковых кластеров в валюте профиля продавца
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод устанавливает ставки на поисковые кластеры в валюте [профиля продавца](https://cmp.wildberries.ru/campaigns/finances).
     *     Можно использовать только для кампаний c ручной ставкой и моделью оплаты `cpm` — за показы.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 2 запроса | 500 мс | 4 запроса |
     *     | Сервисный | 1 сек | 2 запроса | 500 мс | 4 запроса |
     *     </div>
     */
    post: operations['postV1NormqueryBids']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/normquery/bids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить ставки для поисковых кластеров
     * @description Метод устанавливает ставки в рублях на поисковые кластеры.<br>
     *     Можно использовать только для кампаний с:
     *       - ручной ставкой
     *       - моделью оплаты `cpm` — за показы
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 2 запроса | 500 мс | 4 запроса |
     *     | Сервисный | 1 сек | 2 запроса | 500 мс | 4 запроса |
     *     | Базовый с секретом | 1 сек | 2 запроса | 500 мс | 4 запроса |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0NormqueryBids']
    /**
     * Удалить ставки поисковых кластеров
     * @description Метод удаляет ставки с поисковых кластеров.<br>
     *     Можно использовать только для кампаний с:
     *       - ручной ставкой
     *       - моделью оплаты `cpm` — за показы
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    delete: operations['deleteV0NormqueryBids']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/normquery/get-minus': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список минус-фраз кампаний
     * @description Метод возвращает список минус-фраз по:
     *       - ID кампаний
     *       - артикулам WB
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0NormqueryGetMinus']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/normquery/set-minus': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установка и удаление минус-фраз
     * @description Метод устанавливает и удаляет минус-фразы в кампаниях c единой и ручной ставкой.
     *
     *     <div class="description_important">
     *       Отправка пустого массива удаляет все минус-фразы
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0NormquerySetMinus']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Количество медиакампаний
     * @description Метод возвращает количество [медиакампаний](/openapi/promotion#tag/media/operation/getV1Advert) продавца с группировкой по статусам.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1Count']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/adverts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список медиакампаний
     * @description Метод возвращает список всех [медиакампаний](/openapi/promotion#tag/media/operation/getV1Advert) продавца по их типам и статусам.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1Adverts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/advert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Информация о медиакампании
     * @description Метод возвращает информацию о кампании [WB Медиа](https://cmp.wildberries.ru/cmpf/list). Вместо карточек товаров в медиакампаниях продвигаются рекламные баннеры продавца на сайте и в приложении WB.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Advert']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v3/fullstats': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика кампаний
     * @description Метод формирует статистику для кампаний независимо от типа.
     *     <br><br>
     *     Максимальный период в запросе — 31 день.
     *     <br><br>
     *     Для кампаний в статусах `7`, `9` и `11`.
     *     <br><br>
     *     В песочнице статистика кампаний доступна за последние 30 дней. Генерируется только для компаний в статусе `9`, тип `8`, 9 раз в сутки
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 1 запрос |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 1 запрос |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 1 запрос |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV3Fullstats']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/stats': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика медиакампаний
     * @description Метод формирует статистику кампаний сервиса [WB Медиа](https://cmp.wildberries.ru/cmpf/statistics). Статистику можно группировать по датам и/или интервалам.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1Stats']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/calendar/promotions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список акций
     * @description Метод возвращает список [акций](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails) в WB с датами и временем проведения.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Календарь акций</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1CalendarPromotions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/calendar/promotions/details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Детальная информация об акциях
     * @description Метод возвращает подробную информацию об [акции](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails) по ID.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Календарь акций</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1CalendarPromotionsDetails']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/calendar/promotions/nomenclatures': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список товаров для участия в акции
     * @description Метод формирует список товаров, подходящих для участия в [акции](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails). Эти товары можно добавить в акцию с помощью [отдельного метода](/openapi/promotion#tag/promoCalendar/operation/postV1CalendarPromotionsUpload).
     *
     *     <div class="description_important">
     *       Данный метод неприменим для автоакций.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Календарь акций</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *
     *     </div>
     */
    get: operations['getV1CalendarPromotionsNomenclatures']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/calendar/promotions/upload': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Добавить товар в акцию
     * @description Метод создаёт задание на загрузку товара в [акцию](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails).<br>
     *     Состояние загрузки можно проверить с помощью [отдельных методов](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryTasks).
     *
     *     <div class="description_important">
     *       Данный метод неприменим для автоакций.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Календарь акций</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1CalendarPromotionsUpload']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v0/normquery/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Списки активных и неактивных поисковых кластеров
     * @description Метод возвращает списки активных и неактивных поисковых кластеров, по которым было не меньше 100 показов.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV0NormqueryList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/adv/v1/normquery/stats': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Статистика по поисковым кластерам с детализацией по дням
     * @description Метод формирует статистику по поисковым кластерам за указанный период с детализацией по дням.
     *     Можно использовать для кампаний с моделями оплаты `cpm` — за показы и `cpc` — за клики.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 10 запросов | 6 сек | 20 запросов |
     *     | Сервисный | 1 мин | 10 запросов | 6 сек | 20 запросов |
     *     | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 20 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1NormqueryStats']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/advert/v0/daily-limits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить настройки дневных лимитов кампаний
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает текущие настройки [дневных лимитов кампаний CPC](https://cmp.wildberries.ru/campaigns/help/knowledge-base/options#%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%BE%D0%B9%D0%BB%D0%B8%D0%BC%D0%B8%D1%82%D0%B2%D0%BA%D0%B0%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%D1%85%D1%81%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%BE%D0%B9%D0%B7%D0%B0%D0%BA%D0%BB%D0%B8%D0%BA%D0%B8%D0%A1%D0%A0%D0%A1) — максимальных сумм, которые кампании могут потратить на продвижение в течение суток.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     </div>
     */
    get: operations['getV0DailyLimits']
    /**
     * Настройка дневных лимитов кампаний
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод включает, выключает и обновляет дневной лимит кампаний.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
     *     </div>
     */
    put: operations['putV0DailyLimits']
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
    V0GetDailyLimitsResponse: {
      adverts: components['schemas']['V0DailyLimitAdvert'][]
    }
    V0DailyLimitAdvert: {
      /**
       * Format: int64
       * @description ID кампании
       * @example 12346
       */
      advertId: number
      /**
       * @description - `true` — дневной лимит включен
       *     - `false` — дневной лимит отключен
       * @example true
       */
      enabled: boolean
      /**
       * Format: int64
       * @description Размер дневного лимита в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       * @example 100000
       */
      dailyLimit: number
      /**
       * Format: int64
       * @description Потрачено сегодня в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       * @example 35000
       */
      spentToday: number
      /**
       * Format: ISO 4217
       * @description Код валюты
       * @example RUB
       */
      currency: string
      /**
       * @description Перенос остатка дневного лимита на следующий день.
       *     Если за 24 часа лимит потратится не полностью, добавим остаток суммы к лимиту следующего дня. Расходы на продвижение не увеличатся.
       *       - `true` — перенос остатка включен
       *       - `false` — перенос остатка отключен
       * @example true
       */
      carryOverEnabled: boolean
      /**
       * @description Хватает ли текущего размера лимита на установку ставок кампании:
       *       - `true` — да
       *       - `false` — нет, рекомендуем повысить лимит, иначе бюджет кампании может расходоваться неравномерно
       * @example true
       */
      valid: boolean
      /**
       * Format: int64
       * @description Рекомендуемый минимальный размер дневного лимита при текущих ставках кампании. Указывается в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       * @example 3001
       */
      requiredLimit: number
    }
    V0PutDailyLimitsRequest: {
      /**
       * @description ID кампаний
       * @example [
       *       987654321,
       *       123456789
       *     ]
       */
      advertIds: number[]
      /**
       * @description Включить лимит:
       *       - `true` — да
       *       - `false` — нет
       * @example true
       */
      enabled: boolean
      /**
       * Format: int64
       * @description Сумма дневного лимита. Параметр обязателен при `"enabled": true`.
       *     Минимально допустимая сумма указана в поле `minDailyLimit` метода [GET /api/advert/v1/config](./promotion#tag/campaignManagement/operation/getV1Config)
       * @example 1000
       */
      dailyLimit?: number
      /**
       * @description Переносить неиспользованный остаток лимита на следующий день:
       *       - `true` — да
       *       - `false` — нет
       *
       *     Параметр обязателен при `"enabled": true`
       * @example true
       */
      carryOverEnabled?: boolean
    }
    V0PutDailyLimitsAdvertResult: {
      /**
       * Format: int64
       * @description ID кампании
       * @example 1234
       */
      advertId: number
      /**
       * @description Установленный размер дневного лимита ниже рекомендуемого минимума относительно текущих ставок `requiredLimit`:
       *       - `true` — да
       *       - `false` — нет
       * @example false
       */
      belowMinLimit: boolean
      /**
       * Format: int64
       * @description Рекомендуемый минимальный размер дневного лимита при текущих ставках кампании. Указывается в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances).
       *     С меньшим лимитом бюджет может расходоваться неравномерно и в кампании возникнут ошибки
       * @example 3001
       */
      requiredLimit: number
    }
    V0PutDailyLimitsResponse: {
      adverts: components['schemas']['V0PutDailyLimitsAdvertResult'][]
    }
    V2BudgetResponse: {
      /** @description Данные по кампаниям */
      adverts: components['schemas']['V1BudgetAdvert'][] | null
    }
    V1BudgetAdvert: {
      /**
       * @description ID кампании
       * @example 1234567
       */
      advertId: number
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       * @example RUB
       */
      currency: string
      /**
       * @description Бюджет кампании в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       * @example 3000
       */
      total: number
    }
    V2BudgetRequest: {
      /**
       * @description Список ID кампаний
       * @example [
       *       1234567,
       *       63453471
       *     ]
       */
      advertIds: number[]
    }
    V1SetNormQueryBidsRequestItem: {
      /** @description ID кампании */
      advertId: number
      /** @description Артикул WB */
      nmId: number
      /** @description Поисковый кластер */
      normQuery: string
      /**
       * @description Ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances).
       *     Допустимый шаг ставки указан в ответе метода [GET /api/advert/v1/config](./promotion#tag/campaignManagement/operation/getV1Config)
       */
      bidMinorUnits: number
    }
    V1SetNormQueryBidsRequest: {
      bids: components['schemas']['V1SetNormQueryBidsRequestItem'][]
    }
    V1SetNormQueryBidsSuccessResponseItem: {
      /** @description ID кампании */
      advertId: number
      /** @description Артикул WB */
      nmId: number
      /** @description Поисковый кластер — это группа похожих поисковых запросов, по которым покупатели находят товары */
      normQuery: string
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      currency: string
    }
    NormQueryBidFailResponseItem: {
      /** @description ID кампании */
      advertId: number
      /** @description Артикул WB */
      nmId: number
      /** @description Поисковый кластер — это группа похожих поисковых запросов, по которым покупатели находят товары */
      normQuery: string
      /** @description Описание причины ошибки */
      reason: string
    }
    V1SetNormQueryBidsResponse: {
      success: components['schemas']['V1SetNormQueryBidsSuccessResponseItem'][]
      failed: components['schemas']['NormQueryBidFailResponseItem'][]
    }
    V2GetConfigResponse: {
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      currency: string
      /** @description Код валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      currencyCode: number
      /**
       * Format: int64
       * @description Шаг ставки в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) для CPM-кампаний
       */
      cpmStep: number
      /**
       * Format: int64
       * @description Шаг ставки в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) для кампаний CPC
       */
      cpcStep: number
      /**
       * Format: int64
       * @description Минимальная сумма пополнения бюджета кампании в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances).
       *      Например, минимальная сумма пополнения бюджета при `"minTopUp": 10000` и `"currency": "UZS"` — 100 узбекских сум
       */
      minTopUp: number
      /**
       * Format: int64
       * @description Минимально допустимый размер дневного лимита, вне зависимости от ставок кампании. Указывается в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      minDailyLimit: number
    }
    V0BidsRecommendationsCpmResponse1: {
      /**
       * Format: int64
       * @description ID кампании
       */
      advertId?: number
      base?: components['schemas']['V0BidRecommendationBase']
      /**
       * Format: int64
       * @description Артикул WB
       */
      nmId?: number
      /** @description Рекомендуемые ставки для поисковых кластеров */
      normQueries?: components['schemas']['V0BidRecommendationNormQuery'][]
      /**
       * @description Тип оплаты:
       *       - `cpm` — за показы
       * @enum {string}
       */
      paymentType?: 'cpm'
    }
    V0BidsRecommendationsCpcResponse2: {
      /**
       * Format: int64
       * @description ID кампании
       */
      advertId?: number
      /** @description Рекомендуемые ставки для карточек товаров */
      levels?: components['schemas']['V0BidRecommendationCPCLevels'][]
      /**
       * Format: int64
       * @description Артикул WB
       */
      nmId?: number
      /**
       * @description Тип оплаты:
       *       - `cpc` — за клики
       * @enum {string}
       */
      paymentType?: 'cpc'
    }
    V0BidRecommendationCPCLevels: {
      /** @description Ставка для попадания в позиции 1-2 */
      range1To2: components['schemas']['V0BidRecommendationBaseBid']
      /** @description Ставка для попадания в позиции 3-10 */
      range3To10: components['schemas']['V0BidRecommendationBaseBid']
      /** @description Ставка для попадания в позиции 11-34 */
      range11To34: components['schemas']['V0BidRecommendationBaseBid']
    }
    V0BidRecommendationBaseBid: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances). */
      bidKopecks?: number
    }
    /** @description Рекомендуемые ставки для карточек товаров */
    V0BidRecommendationBase: {
      competitiveBid?: components['schemas']['V0BidRecommendationBaseBidCompetitiveBid']
      leadersBid?: components['schemas']['V0BidRecommendationBaseBidLeadersBid']
      top2?: components['schemas']['V0BidRecommendationBaseBidTop2']
    }
    /** @description Топ-ставка */
    V0BidRecommendationBaseBidTop2: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances). Если `0`, для данного предмета топ-ставка не используется */
      bidKopecks?: number
    }
    /**
     * @description Конкурентная ставка — расчётная средняя ставка других продавцов, продающих аналогичные товары по похожей цене.
     *     У половины продавцов из расчёта ставка выше конкурентной, а другой половины — ниже
     */
    V0BidRecommendationBaseBidCompetitiveBid: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bidKopecks?: number
    }
    /** @description Лидерская ставка — средняя ставка с которой товары занимают лидирующие позиции в вашей категории товаров */
    V0BidRecommendationBaseBidLeadersBid: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bidKopecks?: number
    }
    V0BidRecommendationNormQuery: {
      /** @description Поисковый кластер */
      normQuery?: string
      reachMax?: components['schemas']['V0BidRecommendationReachMax']
      reachMedium?: components['schemas']['V0BidRecommendationReachMedium']
      reachMin?: components['schemas']['V0BidRecommendationReachMin']
    }
    /** @description Максимальный охват: 76-100% */
    V0BidRecommendationReachMax: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances). */
      bidKopecks?: number
      /** @description Минимальная ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances). */
      bidKopecksMin?: number
    }
    /** @description Средний охват: 61-75% */
    V0BidRecommendationReachMedium: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bidKopecks?: number
      /** @description Минимальная ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bidKopecksMin?: number
    }
    /** @description Минимальный охват: 50-60% */
    V0BidRecommendationReachMin: {
      /** @description Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bidKopecks?: number
      /** @description Минимальная ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bidKopecksMin?: number
    }
    V0GetNormQueryListRequest: {
      items: components['schemas']['V0GetNormQueryListRequestItem'][]
    }
    V0GetNormQueryListRequestItem: {
      /**
       * Format: int64
       * @description ID кампании
       */
      advertId: number
      /**
       * Format: int64
       * @description Артикул WB
       */
      nmId: number
    }
    V0GetNormQueryListResponse: {
      items: components['schemas']['V0GetNormQueryListResponseItem'][] | null
    }
    V0GetNormQueryListResponseItem: {
      /**
       * Format: int64
       * @description ID кампании
       */
      advertId?: number
      /**
       * Format: int64
       * @description Артикул WB
       */
      nmId?: number
      normQueries?: components['schemas']['V0GetNormQueryListResponseItemNormQueries']
    }
    /** @description Поисковые кластеры */
    V0GetNormQueryListResponseItemNormQueries: {
      /** @description Активные поисковые кластеры */
      active?: string[] | null
      /** @description Неактивные поисковые кластеры */
      excluded?: string[] | null
      /** @description Архивные поисковые кластеры */
      archived?: string[] | null
    }
    V1GetNormQueryStatsRequest: {
      /**
       * Format: date
       * @description Дата начала периода
       * @example 2025-01-01
       */
      from: string
      /**
       * Format: date
       * @description Дата окончания периода периода
       * @example 2025-01-31
       */
      to: string
      items: {
        /**
         * Format: int64
         * @description ID кампании
         */
        advertId: number
        /**
         * Format: int64
         * @description Артикул WB
         */
        nmId: number
      }[]
    }
    V1GetNormQueryStatsResponse: {
      items: components['schemas']['V1GetNormQueryStatsResponseItem'][]
    }
    V1GetNormQueryStatsResponseItem: {
      /**
       * Format: int64
       * @description ID кампании
       */
      advertId: number
      /**
       * Format: int64
       * @description Артикул WB
       */
      nmId: number
      /** @description Статистика с детализацией по дням */
      dailyStats?: components['schemas']['V1GetNormQueryStatsResponseItemDailyStat'][]
    }
    V1GetNormQueryStatsResponseItemDailyStat: {
      /**
       * Format: date
       * @description Дата
       */
      date: string
      stat?: components['schemas']['V1GetNormQueryStatsResponseItemStat']
    }
    V1GetNormQueryStatsResponseItemStat: {
      /** @description Поисковый кластер */
      normQuery?: string
      /**
       * @description Количество просмотров.
       *
       *     Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      views?: number | null
      /** @description Количество кликов */
      clicks?: number
      /** @description Количество добавлений товаров в корзину */
      atbs?: number
      /** @description Количество заказов */
      orders?: number
      /**
       * Format: float
       * @description CTR (click-through rate) — отношение числа кликов к количеству показов в процентах.
       *
       *     Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      ctr?: number | null
      /**
       * Format: float
       * @description Средняя стоимость клика в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      cpc?: number
      /**
       * Format: float
       * @description Средняя стоимость за тысячу показов в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances).
       *
       *     Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      cpm?: number | null
      /**
       * Format: float
       * @description Средняя позиция товара на страницах поисковой выдачи
       */
      avgPos?: number
      /** @description Количество заказанных товаров, шт. */
      shks?: number
      /**
       * Format: double
       * @description Затраты на продвижение товаров в конкретном поисковом кластере кампании
       */
      spend?: number
    }
    '400Response': {
      error?: string
    }
    /**
     * @description Места размещения:
     *       - `search` — поиск
     *       - `recommendation` — рекомендации
     *       - `combined` — поиск и рекомендации
     * @enum {string}
     */
    PlacementType: 'combined' | 'search' | 'recommendation'
    V0GetNormQueryStatsRequest: {
      /**
       * Format: date
       * @description Дата начала периода
       * @example 2025-10-07
       */
      from: string
      /**
       * Format: date
       * @description Дата окончания периода
       * @example 2025-10-08
       */
      to: string
      items: {
        /** @description ID кампании */
        advert_id: number
        /** @description Артикул WB */
        nm_id: number
      }[]
    }
    V0GetNormQueryStatsItem: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
      stats?: components['schemas']['V0GetNormQueryStatsItemStat'][]
    }
    V0GetNormQueryStatsItemStat: {
      /** @description Поисковый кластер */
      norm_query?: string
      /**
       * @description Количество просмотров.
       *
       *     Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      views?: number | null
      /** @description Количество кликов */
      clicks?: number
      /** @description Количество добавлений товаров в корзину */
      atbs?: number
      /** @description Количество заказов */
      orders?: number
      /**
       * Format: double
       * @description Кликабельность — отношение числа кликов к количеству показов, %.
       *
       *     Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      ctr?: number | null
      /**
       * Format: double
       * @description Стоимость одного клика в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      cpc?: number
      /**
       * Format: double
       * @description Средняя стоимость за тысячу показов в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances).
       *
       *     Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
       */
      cpm?: number | null
      /**
       * Format: double
       * @description Средняя позиция товара на страницах поисковой выдачи
       */
      avg_pos?: number
      /** @description Количество заказанных товаров, шт. */
      shks?: number
      /**
       * Format: double
       * @description Затраты на продвижение товаров в конкретном поисковом кластере кампании
       */
      spend?: number
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      currency?: string
    }
    /** @description Статистика по поисковым кластерам */
    V0GetNormQueryStatsResponse: {
      stats: components['schemas']['V0GetNormQueryStatsItem'][]
    }
    V0SetNormQueryBidsRequestItem: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
      /** @description Поисковый кластер */
      norm_query: string
      /** @description Ставка за тысячу показов в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      bid: number
    }
    V0DeleteNormQueryBidsRequestItem: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
      /** @description Поисковый кластер */
      norm_query: string
    }
    V0SetNormQueryBidsRequest: {
      bids: components['schemas']['V0SetNormQueryBidsRequestItem'][]
    }
    V0DeleteNormQueryBidsRequest: {
      bids: components['schemas']['V0DeleteNormQueryBidsRequestItem'][]
    }
    V0SetMinusNormQueryRequest: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
      norm_queries: string[]
    }
    V0GetNormQueryBidsRequestItem: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
    }
    V0GetNormQueryBidsRequest: {
      items: components['schemas']['V0GetNormQueryBidsRequestItem'][]
    }
    V0GetNormQueryBidsItem: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
      /** @description Поисковый кластер */
      norm_query: string
      /** @description Текущая ставка в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) за тысячу показов */
      bid: number
      /** @description Текущая ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) за тысячу показов */
      bid_kopecks: number
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      currency: string
    }
    V0GetNormQueryBidsResponse: {
      bids: components['schemas']['V0GetNormQueryBidsItem'][]
    }
    V0GetNormQueryMinusRequestItem: {
      /** @description ID кампании */
      advert_id: number
      /** @description Артикул WB */
      nm_id: number
    }
    V0GetNormQueryMinusRequest: {
      items: components['schemas']['V0GetNormQueryMinusRequestItem'][]
    }
    V0GetNormQueryMinusResponseItem: {
      /** @description ID кампании */
      advert_id?: number
      /** @description Артикул WB */
      nm_id?: number
      /** @description Список минус-фраз */
      norm_queries?: string[]
    }
    V0GetNormQueryMinusResponse: {
      items?: components['schemas']['V0GetNormQueryMinusResponseItem'][]
    }
    StandardizedBatchError: {
      /**
       * @description Детали ошибки
       * @example some nms are not belong to advert
       */
      detail: string
      /**
       * @description ID внутреннего сервиса WB
       * @example camp-api-public-cache
       */
      origin: string
      /**
       * @description Уникальный ID запроса
       * @example 123e4567-e89b-12d3-a456-426614174000
       */
      request_id: string
      /**
       * @description HTTP статус-код
       * @example 400
       */
      status: number
      /**
       * @description Заголовок ошибки
       * @example Invalid Params
       */
      title: string
    }
    ResponseWithReturn: {
      /** @description Размер обновлённого бюджета */
      total?: number
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      currency?: string
    }
    ResponseAdvError1: {
      error?: string
    }
    PromoItemsList: {
      /**
       * @description Артикул WB
       * @example 162579635
       */
      id?: number
      /**
       * @description Участвует в акции:
       *       - `true` — да
       *       - `false` — нет
       * @example true
       */
      inAction?: boolean
      /**
       * Format: float
       * @description Текущая розничная цена
       * @example 1500
       */
      price?: number
      /**
       * @description Валюта в формате ISO 4217
       * @example RUB
       */
      currencyCode?: string
      /**
       * Format: float
       * @description Плановая цена (цена во время акции)
       * @example 1000
       */
      planPrice?: number
      /**
       * @description Текущая скидка
       * @example 15
       */
      discount?: number
      /**
       * @description Рекомендуемая скидка для участия в акции
       * @example 34
       */
      planDiscount?: number
    }
    GetAdverts: {
      /** @description Кампании */
      adverts: {
        /**
         * @description Тип ставки:
         *       - `unified` — единая ставка
         *       - `manual` — ручная ставка
         */
        bid_type: string
        /**
         * Format: ISO 4217
         * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
         */
        currency?: string
        /**
         * Format: int64
         * @description ID кампании
         */
        id: number
        /** @description Настройки товаров */
        nm_settings: components['schemas']['AdvertNMsSettings'][] | null
        settings: components['schemas']['AdvertSettings']
        /** @description Ограничения кампании */
        restrictions: {
          /**
           * @description Можно ли изменять список товаров кампании:
           *       - `true` — да
           *       - `false` — нет
           */
          can_change_nms?: boolean
        }
        /**
         * @description Статус кампании:
         *     - `-1` — удалена, процесс удаления будет завершён в течение 10 минут
         *     - `4` — готова к запуску
         *     - `7` — завершена
         *     - `8` — отменена
         *     - `9` — активна
         *     - `11` — на паузе
         * @enum {integer}
         */
        status: -1 | 4 | 7 | 8 | 9 | 11
        timestamps: components['schemas']['Timestamps']
      }[]
    }
    AdvertNMsSettings: {
      bids_kopecks: components['schemas']['AdvertBidsKopecks']
      subject: components['schemas']['AdvertSubcategory']
      /**
       * Format: int64
       * @description Артикул WB
       */
      nm_id: number
    }
    /** @description Предмет */
    AdvertSubcategory: {
      /**
       * Format: int64
       * @description ID предмета
       */
      id: number
      /** @description Название предмета */
      name: string
    }
    /** @description Ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
    AdvertBidsKopecks: {
      /**
       * Format: int64
       * @description Ставка в поиске
       */
      search: number
      /**
       * Format: int64
       * @description Ставка в рекомендациях
       */
      recommendations: number
    }
    /** @description Настройки кампании */
    AdvertSettings: {
      /**
       * @description Тип оплаты:
       *     - `cpm` — за показы
       *     - `cpc` — за клик
       */
      payment_type: string
      /** @description Название кампании */
      name: string
      /** @description Места размещения */
      placements: {
        /**
         * @description Размещение в поиске:
         *       - `false` — отключено
         *       - `true` — включено
         */
        search: boolean
        /**
         * @description Размещение в рекомендациях:
         *       - `false` — отключено
         *       - `true` — включено
         */
        recommendations: boolean
      }
    }
    /** @description Временные отметки */
    Timestamps: {
      /**
       * Format: date-time
       * @description Время создания кампании
       */
      created: string
      /**
       * Format: date-time
       * @description Время последнего изменения кампании
       */
      updated: string
      /**
       * Format: date-time
       * @description Время последнего запуска кампании
       */
      started: string | null
      /**
       * Format: date-time
       * @description Время удаления кампании. Если кампания не удалена, время указывается в будущем
       */
      deleted: string
    }
    response400: {
      /** @description Детали ошибки */
      detail: string
      /**
       * @description ID внутреннего сервиса WB
       * @example camp-api-public-cache
       */
      origin: string
      /**
       * @description Уникальный ID запроса
       * @example 6023d2950af564838f9b44a279d2140c
       */
      request_id: string
      /**
       * @description HTTP статус-код
       * @example 400
       */
      status: number
      /**
       * @description Заголовок ошибки
       * @example invalid payload
       */
      title: string
    }
    StatInterval: {
      /** @description Период */
      interval: {
        /**
         * Format: date
         * @description Начало периода
         */
        begin?: string
        /**
         * Format: date
         * @description Конец периода
         */
        end?: string
      }
      /** @description Блок статистики */
      stats?: components['schemas']['StatsBlok1'][]
    }
    StatDate: {
      /** @description Даты, за которые нужно получить информацию */
      dates: string[]
      /** @description Блок статистики */
      stats?: components['schemas']['StatsBlok2'][]
    }
    StatCampaignNotFound: {
      /**
       * Format: int64
       * @description ID кампании
       * @example 111
       */
      advert_id?: number
      /**
       * @description Описание ошибки
       * @example кампания не найдена
       */
      error?: string
    }
    Stat: {
      /** @description Блок статистики */
      stats?: components['schemas']['StatsBlok1'][]
    }
    StatsBlok1: {
      /** @description ID баннера */
      item_id?: number
      /** @description Бренд */
      item_name?: string
      /** @description Название категории */
      category_name?: string
      /**
       * @description Тип медиакампании:
       *       - `1` — размещение по дням
       *       - `2` — размещение по просмотрам
       */
      advert_type?: number
      /** @description Место на странице */
      place?: number
      /** @description Количество просмотров */
      views?: number
      /** @description Количество кликов */
      clicks?: number
      /** @description CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании */
      cr?: number
      /** @description CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
      ctr?: number
      /**
       * Format: date-time
       * @description Время начала размещения
       */
      date_from?: string
      /**
       * Format: date-time
       * @description Время завершения размещения
       */
      date_to?: string
      /** @description Родительская категория предмета */
      subject_name?: string
      /** @description Количество добавлений товаров в корзину */
      atbs?: number
      /** @description Количество заказов */
      orders?: number
      /** @description Стоимость размещения */
      price?: number
      /** @description (cost per click) — цена клика по продвигаемому товару */
      cpc?: number
      /** @description Статус медиакампании */
      status?: number
      daily_stats?: components['schemas']['DailyStats1']
      /** @description Стоимость размещения баннера */
      expenses?: number
      /** @description Отношение количества добавлений в корзину к количеству кликов */
      cr1?: number
      /** @description Отношение количества заказов к количеству добавлений в корзину */
      cr2?: number
    }
    DailyStats1: {
      /**
       * Format: date-time
       * @description Дата
       */
      date?: string
      /** @description Статистика по платформам */
      app_type_stats?: {
        /**
         * @description Тип платформы:
         *     - `1` — сайт
         *     - `32` — Android
         *     - `64` — IOS
         */
        app_type?: number
        stats?: components['schemas']['Stats1']
      }[]
    }[]
    Stats1: {
      /** @description Количество просмотров */
      views?: number
      /** @description Количество кликов */
      clicks?: number
      /** @description Количество добавлений товаров в корзину */
      atbs?: number
      /** @description CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
      ctr?: number
    }[]
    StatsBlok2: {
      /** @description ID баннера */
      item_id?: number
      /** @description Бренд */
      item_name?: string
      /** @description Название категории */
      category_name?: string
      /**
       * @description Тип медиакампании:
       *       - `1` — размещение по дням
       *       - `2` — размещение по просмотрам
       */
      advert_type?: number
      /** @description Место на странице */
      place?: number
      /** @description Количество просмотров */
      views?: number
      /** @description Количество кликов */
      clicks?: number
      /** @description CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании */
      cr?: number
      /** @description CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
      ctr?: number
      /**
       * Format: date-time
       * @description Время начала размещения
       */
      date_from?: string
      /**
       * Format: date-time
       * @description Время завершения размещения
       */
      date_to?: string
      /** @description Родительская категория предмета */
      subject_name?: string
      /** @description Количество добавлений товаров в корзину */
      atbs?: number
      /** @description Количество заказов */
      orders?: number
      /** @description Стоимость размещения */
      price?: number
      /** @description (cost per click) — цена клика по продвигаемому товару */
      cpc?: number
      /** @description Статус медиакампании */
      status?: number
      daily_stats?: components['schemas']['DailyStats2']
      /** @description Стоимость размещения баннера */
      expenses?: number
      /** @description Отношение количества добавлений в корзину к количеству кликов */
      cr1?: number
      /** @description Отношение количества заказов к количеству добавлений в корзину */
      cr2?: number
    }
    DailyStats2: {
      /**
       * Format: date-time
       * @description Дата
       */
      date?: string
      /** @description Статистика по платформам */
      app_type_stats?: {
        /**
         * @description Тип платформы:
         *     - `1` — сайт
         *     - `32` — Android
         *     - `64` — IOS
         */
        app_type?: number
        stats?: components['schemas']['Stats2']
      }[]
    }[]
    Stats2: {
      /** @description Количество просмотров */
      views?: number
      /** @description Количество кликов */
      clicks?: number
      /** @description Количество добавлений товаров в корзину */
      atbs?: number
      /** @description Количество заказов */
      orders?: number
      /** @description CR(conversion rate) — отношение количества заказов к общему количеству посещений медиакампании */
      cr?: number
      /** @description CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
      ctr?: number
    }[]
    RequestWithDate: {
      /** @description ID кампании */
      id: number
      /** @description Даты, за которые нужно получить информацию */
      dates: string[]
    }
    RequestWithCampaignID: {
      /** @description ID кампании */
      id: number
    }
    RequestWithInterval: {
      /** @description ID кампании */
      id: number
      /** @description Временной диапазон, за который необходимо выдать данные */
      interval: {
        /**
         * Format: date
         * @description Начало запрашиваемого периода
         */
        begin?: string
        /**
         * Format: date
         * @description Конец запрашиваемого периода
         */
        end?: string
      }
    }
    /** @description Статистика по кампаниям за период, указанный в запросе. По всем артикулам WB и платформам */
    ResponseFullStats: components['schemas']['FullStatsItem'][]
    /** @description Статистика по одной кампании за период, указанный в запросе. По всем артикулам WB и платформам */
    FullStatsItem: {
      /** @description ID кампании */
      advertId: number
      /** @description Количество добавлений товаров в корзину */
      atbs: number
      boosterStats?: components['schemas']['BoosterStatsV3'] & unknown
      /** @description Отмены, шт. */
      canceled: number
      /** @description Количество кликов */
      clicks: number
      /**
       * Format: double
       * @description Средняя стоимость клика в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      cpc: number
      /**
       * Format: double
       * @description CR (conversion rate) — отношение количества заказов к общему количеству кликов
       */
      cr: number
      /**
       * Format: double
       * @description CTR (click-through rate) — отношение числа кликов к количеству показов в процентах
       */
      ctr: number
      days: components['schemas']['DaysV3'] & unknown
      /** @description Количество заказов */
      orders: number
      /** @description Количество заказанных товаров, шт. */
      shks: number
      /**
       * Format: double
       * @description Затраты в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      sum: number
      /**
       * Format: double
       * @description Сумма заказов в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      sum_price: number
      /** @description Количество просмотров */
      views: number
      /**
       * Format: ISO 4217
       * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      currency: string
    }
    /** @description Статистка по дням */
    DaysV3: {
      /** @description Блок информации о платформе */
      apps: {
        /**
         * @description Тип платформы:
         *       - `1` — сайт
         *       - `32` — Android
         *       - `64` — IOS
         * @enum {integer}
         */
        appType: 1 | 32 | 64
        /** @description Количество добавлений товаров в корзину */
        atbs: number
        /** @description Отмены, шт. */
        canceled: number
        /** @description Количество кликов */
        clicks: number
        /** @description Средняя стоимость клика в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
        cpc: number
        /** @description CR (conversion rate) — отношение количества заказов к общему количеству кликов */
        cr: number
        /** @description CTR (click-through rate) — отношение числа кликов к количеству показов в процентах */
        ctr: number
        /** @description Блок статистики по артикулам WB */
        nms: {
          /** @description Количество добавлений товаров в корзину */
          atbs: number
          /** @description Отмены, шт. */
          canceled: number
          /** @description Количество кликов */
          clicks: number
          /** @description Средняя стоимость клика в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
          cpc: number
          /** @description CR (conversion rate) — отношение количества заказов к общему количеству кликов */
          cr: number
          /** @description CTR (click-through rate) — отношение числа кликов к количеству показов в процентах */
          ctr: number
          /** @description Название товара */
          name: string
          /** @description Артикул WB */
          nmId: number
          /** @description Количество заказов */
          orders: number
          /** @description Количество заказанных товаров, шт. */
          shks: number
          /** @description Затраты в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
          sum: number
          /** @description Заказов на сумму в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
          sum_price: number
          /** @description Количество просмотров */
          views: number
        }[]
        /** @description Количество заказов */
        orders: number
        /** @description Количество заказанных товаров, шт. */
        shks: number
        /** @description Затраты в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
        sum: number
        /** @description Заказов на сумму в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
        sum_price: number
        /** @description Количество просмотров */
        views: number
      }[]
      /** @description Количество добавлений товаров в корзину */
      atbs: number
      /** @description Отмены, шт. */
      canceled: number
      /**
       * Format: date-time
       * @description Дата, за которую представлены данные
       */
      date: string
      /** @description Количество кликов */
      clicks: number
      /** @description Средняя стоимость клика в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      cpc: number
      /** @description CR (conversion rate) — отношение количества заказов к общему количеству посещений кампании */
      cr: number
      /** @description CTR (click-through rate) — отношение числа кликов к количеству показов в процентах */
      ctr: number
      /** @description Количество заказов */
      orders: number
      /** @description Количество заказанных товаров, шт. */
      shks: number
      /** @description Затраты в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      sum: number
      /** @description Заказов на сумму в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
      sum_price: number
      /** @description Количество просмотров */
      views: number
    }[]
    /** @description Статистика по средней позиции товара (для кампаний с единой ставкой) */
    BoosterStatsV3: {
      /** @description Средняя позиция товара */
      avg_position: number
      /**
       * Format: date
       * @description Дата, за которую предоставлены данные
       */
      date: string
      /** @description Артикул WB */
      nm: number
    }[]
    /** @description Ошибка */
    FullStatsError: {
      errors?: {
        /** @description Детали ошибки */
        detail?: string
        /** @description Параметр с ошибкой */
        field?: string
      }[]
      /** @description Детали ошибки */
      detail?: string
      /** @description ID внутреннего сервиса WB */
      origin: string
      /** @description ID запроса */
      request_id: string
      /** @description HTTP статус-код */
      status: number
      /** @description Заголовок ошибки */
      title: string
      /** @description Тип ошибки */
      type?: string
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
    /** @description Ошибка обработки параметров запроса */
    ErrParameterValuesIncorrect: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Текст ошибки */
          errorText?: string
        }
      }
    }
    /** @description Неправильный запрос */
    ErrorWrongParameters: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /**
           * @description Текст ошибки
           * @example Invalid query params
           */
          errorText?: string
        }
      }
    }
    /** @description Успешно */
    ResponsePromoItemsLists: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /** @description Список товаров */
            nomenclatures?: components['schemas']['PromoItemsList'][]
          }
        }
      }
    }
    /** @description Успешно */
    UploadSuccessResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /**
             * @description Загрузка с такими данными уже существует
             * @example false
             */
            alreadyExists?: boolean
            /**
             * @description ID загрузки
             * @example 11
             */
            uploadID?: number
          }
        }
      }
    }
    /** @description Ошибка обработки параметров запроса */
    UnprocessableEntity: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /**
           * @description Текст ошибки
           * @example Unprocessable entity
           */
          errorText?: string
        }
      }
    }
    /** @description Успешно */
    PromosGetByIDSuccessResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /** @description Список акций */
            promotions?: {
              /**
               * @description ID акции
               * @example 123
               */
              id?: number
              /**
               * @description Название акции
               * @example ХИТЫ ГОДА
               */
              name?: string
              /**
               * @description Описание акции
               * @example В акции принимают участие самые популярные товары 2023 года. Карточки товаров будут выделены плашкой «ХИТ ГОДА», чтобы покупатели замечали эти товары среди других. Также они будут размещены под баннерами на главной странице и примут участие в PUSH-уведомлениях. С ценами для вступления в акцию вы можете ознакомиться ниже.
               */
              description?: string
              /**
               * @description Преимущества акции
               * @example [
               *       "Плашка",
               *       "Баннер",
               *       "Топ выдачи товаров"
               *     ]
               */
              advantages?: string[]
              /**
               * @description Начало акции
               * @example 2023-06-05T21:00:00Z
               */
              startDateTime?: string
              /**
               * @description Конец акции
               * @example 2023-06-05T21:00:00Z
               */
              endDateTime?: string
              /**
               * @description Количество товаров с остатками, участвующих в акции
               * @example 45
               */
              inPromoActionLeftovers?: number
              /**
               * @description Общее количество товаров, участвующих в акции
               * @example 123
               */
              inPromoActionTotal?: number
              /**
               * @description Количество товаров с остатками, не участвующих в акции
               * @example 3
               */
              notInPromoActionLeftovers?: number
              /**
               * @description Общее количество товаров, не участвующих в акции
               * @example 10
               */
              notInPromoActionTotal?: number
              /**
               * @description Уже участвующие в акции товары, %. Рассчитывается по товарам в акции и с остатком
               * @example 10
               */
              participationPercentage?: number
              /**
               * @description Тип акции:
               *       - `regular` — акция
               *       - `auto` — автоакция
               * @example auto
               * @enum {string}
               */
              type?: 'regular' | 'auto'
              /**
               * Format: uint
               * @description Количество товаров, исключенных из автоакции до её старта. Только при `"type": "auto"`.
               *     <br>В момент старта акции эти товары автоматически будут без скидки
               * @example 10
               */
              exceptionProductsCount?: number
              /**
               * @description Ранжирование (если подключено)
               * @example [
               *       {
               *         "condition": "productsInPromotion",
               *         "participationRate": 10,
               *         "boost": 7
               *       },
               *       {
               *         "condition": "calculateProducts",
               *         "participationRate": 20,
               *         "boost": 17
               *       },
               *       {
               *         "condition": "allProducts",
               *         "participationRate": 35,
               *         "boost": 30
               *       }
               *     ]
               */
              ranging?: {
                /**
                 * @description Тип [ранжирования](https://seller.wildberries.ru/help-center/article/A-385):
                 *       - `productsInPromotion` — продвижение получат товары продавца, участвующие в акции
                 *       - `calculateProducts` — продвижение получат любые товара продавца, предложенные к участию в акции
                 *       - `allProducts` — продвижение получат все товары продавца
                 */
                condition?: string
                /**
                 * Format: uint
                 * @description Количество товаров продавца для перехода на следующий уровень ранжирования, %
                 */
                participationRate?: number
                /**
                 * Format: uint
                 * @description Текущий уровень поднятия в поиске, %
                 */
                boost?: number
              }[]
            }[]
          }
        }
      }
    }
    /** @description Успешно */
    PromoSuccessResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /** @description Список акций */
            promotions?: {
              /**
               * @description ID акции
               * @example 123
               */
              id?: number
              /**
               * @description Название акции
               * @example скидки
               */
              name?: string
              /**
               * Format: date-time
               * @description Начало акции
               * @example 2023-06-05T21:00:00Z
               */
              startDateTime?: string
              /**
               * Format: date-time
               * @description Конец акции
               * @example 2023-06-05T21:00:00Z
               */
              endDateTime?: string
              /**
               * @description Тип акции:
               *       - `regular` — акция
               *       - `auto` — автоакция
               * @enum {string}
               */
              type?: 'regular' | 'auto'
            }[]
          }
        }
      }
    }
    /** @description Неправильный запрос */
    ErrorFailedParseData: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /**
           * @description Текст ошибки
           * @example Failed to parse data
           */
          errorText?: string
        }
      }
    }
  }
  parameters: {
    /**
     * @description Участвует в акции:
     *       - `true` — да
     *       - `false` — нет
     */
    inAction: boolean
    /** @description ID акции */
    promotionID: number
    /** @description Количество запрашиваемых товаров */
    limitNomenclature: number
    /** @description ID акций, по которым нужно вернуть информацию */
    promotionIDs: number[]
    /** @description После какого элемента выдавать данные */
    offset: number
    /** @description Начало периода, формат `YYYY-MM-DDTHH:MM:SSZ` */
    startDateTime: string
    /** @description Конец периода, формат `YYYY-MM-DDTHH:MM:SSZ` */
    endDateTime: string
    /**
     * @description Показать акции:
     *       - `false` — доступные для участия
     *       - `true` — все акции
     */
    allPromo: boolean
    /** @description Количество запрашиваемых акций */
    limitPromo: number
  }
  requestBodies: {
    PromoSupplierTaskRequest: {
      content: {
        'application/json': {
          /** @description Данные запроса */
          data?: {
            /**
             * @description ID акции
             * @example 1
             */
            promotionID?: number
            /**
             * @description Установить скидку:
             *       - `true` — сейчас
             *       - `false` — в момент старта акции
             * @example true
             */
            uploadNow?: boolean
            /**
             * @description Артикулы WB, которые можно добавить в акцию
             * @example [
             *       75632091,
             *       31322455,
             *       642080796
             *     ]
             */
            nomenclatures?: number[]
          }
        }
      }
    }
  }
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV1PromotionCount: {
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
           *       "adverts": [
           *         {
           *           "type": 9,
           *           "status": 8,
           *           "count": 3,
           *           "advert_list": [
           *             {
           *               "advertId": 6485174,
           *               "changeTime": "2023-05-10T12:12:52.676254+03:00"
           *             },
           *             {
           *               "advertId": 6500443,
           *               "changeTime": "2023-05-10T17:08:46.370656+03:00"
           *             },
           *             {
           *               "advertId": 7936341,
           *               "changeTime": "2023-07-12T15:51:08.367478+03:00"
           *             }
           *           ]
           *         }
           *       ],
           *       "all": 3
           *     }
           */
          'application/json': {
            /** @description Данные по кампаниям */
            adverts?:
              | {
                  /**
                   * @description Тип кампании:
                   *       - `8` — кампания с единой ставкой (**устаревший тип**)
                   *       - `9` — кампания с единой или ручной ставкой. Тип ставки вы можете получить с помощью метода [Информация о кампаниях](./promotion#tag/campaigns/operation/getV2Adverts), поле `bid_type`
                   */
                  type?: number
                  /** @description Статус кампании */
                  status?: number
                  /** @description Количество кампаний */
                  count?: number
                  /** @description Список кампаний */
                  advert_list?: {
                    /** @description ID кампании */
                    advertId?: number
                    /**
                     * Format: date-time
                     * @description Дата и время последнего изменения кампании
                     */
                    changeTime?: string
                  }[]
                }[]
              | null
            /** @description Общее количество кампаний всех статусов и типов */
            all?: number
          }
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV2Adverts: {
    parameters: {
      query?: {
        /** @description ID кампаний, максимум 50 */
        ids?: string
        /**
         * @description Статусы кампаний:
         *     - `-1` — удалена, процесс удаления будет завершён в течение 10 минут
         *     - `4` — готова к запуску
         *     - `7` — завершена
         *     - `8` — отменена
         *     - `9` — активна
         *     - `11` — на паузе
         */
        statuses?: string
        /**
         * @description Тип оплаты:
         *     - `cpm` — за показы
         *     - `cpc` — за клик
         */
        payment_type?: 'cpm' | 'cpc'
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
           *       "adverts": [
           *         {
           *           "bid_type": "manual",
           *           "currency": "RUB",
           *           "id": 567456457,
           *           "nm_settings": [
           *             {
           *               "bids_kopecks": {
           *                 "recommendations": 0,
           *                 "search": 0
           *               },
           *               "nm_id": 123456789,
           *               "subject": {
           *                 "id": 52,
           *                 "name": "кошельки"
           *               }
           *             },
           *             {
           *               "bids_kopecks": {
           *                 "recommendations": 11200,
           *                 "search": 11200
           *               },
           *               "nm_id": 987654321,
           *               "subject": {
           *                 "id": 54,
           *                 "name": "ювелирные кольца"
           *               }
           *             }
           *           ],
           *           "restrictions": {
           *             "can_change_nms": true
           *           },
           *           "settings": {
           *             "name": "Кампания от 01.02.2024",
           *             "payment_type": "cpm",
           *             "placements": {
           *               "recommendations": false,
           *               "search": true
           *             }
           *           },
           *           "status": 7,
           *           "timestamps": {
           *             "created": "2024-02-01T09:57:38.500606+03:00",
           *             "deleted": "2024-02-05T14:29:32.633968+03:00",
           *             "started": "2024-02-05T12:38:10.212086+03:00",
           *             "updated": "2024-02-05T14:29:32.633968+03:00"
           *           }
           *         },
           *         {
           *           "bid_type": "manual",
           *           "currency": "RUB",
           *           "id": 28150154,
           *           "nm_settings": [
           *             {
           *               "bids_kopecks": {
           *                 "recommendations": 0,
           *                 "search": 1100
           *               },
           *               "nm_id": 5764746785,
           *               "subject": {
           *                 "id": 69,
           *                 "name": "платья"
           *               }
           *             }
           *           ],
           *           "restrictions": {
           *             "can_change_nms": false
           *           },
           *           "settings": {
           *             "name": "Кампания от 28.08.2025 ",
           *             "payment_type": "cpc",
           *             "placements": {
           *               "recommendations": false,
           *               "search": true
           *             }
           *           },
           *           "status": 11,
           *           "timestamps": {
           *             "created": "2025-08-28T09:50:57.611559+03:00",
           *             "deleted": "2100-01-01T00:00:00+03:00",
           *             "started": null,
           *             "updated": "2025-09-10T10:14:58.475499+03:00"
           *           }
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['GetAdverts']
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1BidsMin: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "advert_id": 98765432,
         *       "nm_ids": [
         *         12345678,
         *         87654321
         *       ],
         *       "payment_type": "cpm",
         *       "placement_types": [
         *         "combined",
         *         "search",
         *         "recommendation"
         *       ]
         *     }
         */
        'application/json': {
          /**
           * Format: int64
           * @description ID кампании
           */
          advert_id: number
          /** @description Список артикулов WB */
          nm_ids: number[]
          /**
           * @description Тип оплаты:
           *           - `cpm` — за показы
           *           - `cpc` — за клик
           * @enum {string}
           */
          payment_type: 'cpm' | 'cpc'
          /**
           * @description Места размещения:
           *       - `search` — поиск
           *       - `recommendation` — рекомендации
           *       - `combined` — поиск и рекомендации
           */
          placement_types: ('combined' | 'search' | 'recommendation')[]
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
           *       "bids": [
           *         {
           *           "bids": [
           *             {
           *               "currency": "RUB",
           *               "type": "combined",
           *               "value": 155
           *             },
           *             {
           *               "currency": "RUB",
           *               "type": "search",
           *               "value": 250
           *             },
           *             {
           *               "currency": "RUB",
           *               "type": "recommendation",
           *               "value": 250
           *             }
           *           ],
           *           "nm_id": 12345678
           *         },
           *         {
           *           "bids": [
           *             {
           *               "currency": "RUB",
           *               "type": "combined",
           *               "value": 155
           *             },
           *             {
           *               "currency": "RUB",
           *               "type": "search",
           *               "value": 250
           *             },
           *             {
           *               "currency": "RUB",
           *               "type": "recommendation",
           *               "value": 250
           *             }
           *           ],
           *           "nm_id": 87654321
           *         }
           *       ]
           *     }
           */
          'application/json': {
            /** @description Список карточек товаров со ставками */
            bids: {
              /** @description Список ставок по местам размещения */
              bids: {
                /**
                 * Format: ISO 4217
                 * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
                 */
                currency: string
                type: components['schemas']['PlacementType']
                /** @description Минимальная ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
                value: number
              }[]
              /**
               * Format: int64
               * @description Артикул WB
               */
              nm_id: number
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
          'application/json': components['schemas']['StandardizedBatchError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV2SeacatSaveAd: {
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
         *       "name": "Телефоны",
         *       "nms": [
         *         146168367,
         *         200425104
         *       ],
         *       "bid_type": "manual",
         *       "placement_types": [
         *         "search",
         *         "recommendations"
         *       ]
         *     }
         */
        'application/json': {
          /** @description Название кампании */
          name: string
          /** @description Карточки товаров для кампании. Доступные карточки товаров можно получить с помощью метода [Карточки товаров для кампаний](./promotion#tag/creatingCampaigns/operation/postV2SupplierNms). Максимум 50 товаров (`nm`) */
          nms?: number[]
          /**
           * @description Тип ставки:
           *       - `manual` — ручная
           *       - `unified` — единая
           * @default manual
           * @enum {string}
           */
          bid_type?: 'manual' | 'unified'
          /**
           * @description Тип оплаты:
           *     - `cpm` — за показы
           *     - `cpc` — за клик. При создании с этим типом оплаты в кампании автоматически устанавливается минимальная ставка
           * @default cpm
           * @enum {string}
           */
          payment_type?: 'cpm' | 'cpc'
          /**
           * @description Места размещения:
           *       - `search` — в поиске
           *       - `recommendations` — в рекомендациях
           *
           *     Укажите только для кампании с ручной ставкой
           * @default [
           *       "search"
           *     ]
           */
          placement_types?: ('search' | 'recommendations')[]
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
          'application/json': number
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /** @example Нет доступных категорий для рк. Создайте новую кампанию для попадания в текущие категории */
          'application/json': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SupplierSubjects: {
    parameters: {
      query?: {
        /**
         * @description Тип оплаты:
         *     - `cpm` — за показы
         *     - `cpc` — за клик
         */
        payment_type?: string
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
            | {
                /** @description ID предмета */
                id?: number
                /** @description Предмет */
                name?: string
                /** @description Количество Артикулов WB (`nmId`) с таким предметом. */
                count?: number
              }[]
            | null
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
  postV2SupplierNms: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description ID предметов, для которых нужно получить карточки товаров */
    requestBody?: {
      content: {
        /**
         * @example [
         *       123,
         *       456,
         *       765,
         *       321
         *     ]
         */
        'application/json': number[]
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            | {
                /**
                 * @description Название товара
                 * @example Плед
                 */
                title?: string
                /**
                 * @description Артикул WB
                 * @example 146168367
                 */
                nm?: number
                /**
                 * @description ID предмета
                 * @example 765
                 */
                subjectId?: number
              }[]
            | null
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /** @example Ошибка обработки тела запроса */
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV0Delete: {
    parameters: {
      query: {
        /** @description ID кампании */
        id: number
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
        content?: never
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseAdvError1']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV0Rename: {
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
         *       "advertId": 2233344,
         *       "name": "newname"
         *     }
         */
        'application/json': {
          /** @description ID кампании, в которой меняется название */
          advertId: number
          /** @description Новое название (максимум 100 символов) */
          name: string
        }
      }
    }
    responses: {
      /** @description Успешно */
      200: {
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
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Ошибка обработки параметров запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      429: components['responses']['429']
    }
  }
  getV0Start: {
    parameters: {
      query: {
        /** @description ID кампании */
        id: number
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
        content?: never
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['400Response']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Статус не изменен */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      429: components['responses']['429']
    }
  }
  getV0Pause: {
    parameters: {
      query: {
        /** @description ID кампании */
        id: number
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
        content?: never
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['400Response']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Статус не изменен */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      429: components['responses']['429']
    }
  }
  getV0Stop: {
    parameters: {
      query: {
        /** @description ID кампании */
        id: number
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
        content?: never
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['400Response']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      /** @description Статус не изменен */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      429: components['responses']['429']
    }
  }
  putV0AuctionPlacements: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "placements": [
         *         {
         *           "advert_id": 12345,
         *           "placements": {
         *             "search": true,
         *             "recommendations": true
         *           }
         *         }
         *       ]
         *     }
         */
        'application/json': {
          /** @description Места размещения в кампаниях */
          placements: {
            /**
             * Format: int64
             * @description ID кампании
             */
            advert_id: number
            /** @description Места размещения */
            placements: {
              /**
               * @description Размещение в поиске:
               *       - `false` — отключено
               *       - `true` — включено
               */
              search: boolean
              /**
               * @description Размещение в рекомендациях:
               *       - `false` — отключено
               *       - `true` — включено
               */
              recommendations: boolean
            }
          }[]
        }
      }
    }
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
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  patchV1Bids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "bids": [
         *         {
         *           "advert_id": 12345,
         *           "nm_bids": [
         *             {
         *               "nm_id": 13335157,
         *               "bid_kopecks": 250,
         *               "placement": "recommendations"
         *             }
         *           ]
         *         }
         *       ]
         *     }
         */
        'application/json': {
          /** @description Ставки в кампаниях */
          bids: {
            /**
             * Format: int64
             * @description ID кампании
             */
            advert_id: number
            /** @description Ставки */
            nm_bids: {
              /**
               * Format: int64
               * @description Артикул WB
               */
              nm_id: number
              /**
               * Format: int64
               * @description Ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
               */
              bid_kopecks: number
              /**
               * @description Место размещения:
               *       - `search` — в поиске (для кампаний с ручной ставкой)
               *       - `recommendations`— в рекомендациях (для кампаний с ручной ставкой)
               *       - `combined` — в поиске и рекомендациях (для кампаний с единой ставкой)
               * @enum {string}
               */
              placement: 'search' | 'recommendations' | 'combined'
            }[]
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
          /**
           * @example {
           *       "bids": [
           *         {
           *           "advert_id": 12345,
           *           "nm_bids": [
           *             {
           *               "nm_id": 13335157,
           *               "bid_kopecks": 250,
           *               "placement": "recommendations"
           *             }
           *           ]
           *         }
           *       ],
           *       "currency": "RUB"
           *     }
           */
          'application/json': {
            /** @description Результат отработки запроса */
            bids: {
              /**
               * Format: int64
               * @description ID кампании
               */
              advert_id: number
              /** @description Ставки */
              nm_bids: {
                /**
                 * Format: int64
                 * @description Артикул WB
                 */
                nm_id: number
                /**
                 * Format: int64
                 * @description Ставка в разменных единицах — 0,01 от базовой валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
                 */
                bid_kopecks: number
                /**
                 * @description Место размещения:
                 *       - `search` — в поиске
                 *       - `recommendations`— в рекомендациях
                 */
                placement: string
              }[]
            }[]
            /**
             * Format: ISO 4217
             * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
             */
            currency: string
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
           *       "detail": "wrong bid value: 3; min: 150",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "9a929a81ea9dc1601fcc4be81f32c1cb",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Balance: {
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
           *       "balance": 11083,
           *       "net": 0,
           *       "currency": "RUB",
           *       "bonus": 15187,
           *       "cashbacks": [
           *         {
           *           "sum": 10672,
           *           "percent": 50,
           *           "expiration_date": "2026-04-17T10:46:02.176174Z"
           *         }
           *       ]
           *     }
           */
          'application/json': {
            /** @description Счёт в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
            balance?: number
            /** @description Баланс в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
            net?: number
            /**
             * Format: ISO 4217
             * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
             */
            currency?: string
            /** @description Бонусы в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
            bonus?: number
            /** @description Промо-бонусы */
            cashbacks?: {
              /** @description Промо-бонусы в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
              sum?: number
              /** @description Процент от суммы пополнения бюджета кампании, который можно оплатить промо-бонусами за один раз */
              percent?: number
              /**
               * Format: ISO 8601
               * @description Дата окончания действия промо-бонусов
               */
              expiration_date?: string
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
          'application/json': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV2Budget: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V2BudgetRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V2BudgetResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Budget: {
    parameters: {
      query: {
        /** @description ID кампании */
        id: number
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
           *       "cash": 0,
           *       "netting": 0,
           *       "total": 500,
           *       "currency": "RUB"
           *     }
           */
          'application/json': {
            /** @description Поле не используется. Значение всегда 0. */
            cash?: number
            /** @description Поле не используется. Значение всегда 0. */
            netting?: number
            /** @description Бюджет кампании в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
            total?: number
            /**
             * Format: ISO 4217
             * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
             */
            currency?: string
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1BudgetDeposit: {
    parameters: {
      query: {
        /** @description ID кампании */
        id: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Общая сумма пополнения бюджета в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
           * @example 5000
           */
          sum?: number
          /**
           * @description Сумма пополнения бюджета промо-бонусами.
           *     <br>
           *     Пополнить можно только определённый процент от общей суммы, указанный в поле `percent` ответа метода получения [баланса](./promotion#tag/finances/operation/getV1Balance).
           *     <br>
           *     Оставшаяся часть общей суммы спишется с указанного источника пополнения.
           *     Пополнить можно только определённый процент от общей суммы, указанный в поле `percent` ответа метода получения [баланса](./promotion#tag/finances/operation/getV1Balance).
           *     <br>
           *     Оставшаяся часть общей суммы спишется с указанного источника пополнения.
           *     <br>
           *     Списать промо-бонусы можно только для источников пополнения:
           *       - `0` — счёт
           *       - `1` — баланс
           * @example 1000
           */
          cashback_sum?: number
          /**
           * @description Процент от суммы пополнения, который можно пополнить промо-бонусами. Нужно указать значение поля percent из ответа метода получения [баланса](./promotion#tag/finances/operation/getV1Balance)
           *     <br>
           *     Если вы указали `cashback_sum`, параметр `cashback_percent` становится обязательным
           * @example 50
           */
          cashback_percent?: number
          /**
           * @description Тип источника пополнения:
           *     - `0` — Счёт
           *     - `1` — Баланс
           *     - `3` — Бонусы
           * @example 1
           */
          type?: number
          /** @description Флаг возврата ответа (`true` — в ответе вернется обновлённый размер бюджета кампании, `false` или не указать параметр вообще — не вернётся.) */
          return?: boolean
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
          'application/json': components['schemas']['ResponseWithReturn']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: string
          }
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Upd: {
    parameters: {
      query: {
        /** @description Начало интервала */
        from: string
        /**
         * @description Конец интервала. <br>
         *     (Минимальный интервал 1 день, максимальный 31)
         */
        to: string
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
           *         "updNum": 0,
           *         "updTime": "2023-07-31T12:12:54.060536+03:00",
           *         "updSum": 24,
           *         "advertId": 3355881,
           *         "campName": "лук лучок",
           *         "advertType": 6,
           *         "paymentType": "Баланс",
           *         "advertStatus": 9
           *       },
           *       {
           *         "updNum": 0,
           *         "updTime": null,
           *         "updSum": 107,
           *         "advertId": 3366882,
           *         "campName": "золотая луковица",
           *         "advertType": 8,
           *         "paymentType": "Счет",
           *         "advertStatus": 11
           *       }
           *     ]
           */
          'application/json': {
            /** @description Номер выставленного документа */
            updNum?: number
            /**
             * Format: time-date
             * @description Время списания
             */
            updTime?: string | null
            /** @description Выставленная сумма в базовых единицах валюты [профиля продавца](https://cmp.wildberries.ru/campaigns/finances) */
            updSum?: number
            /** @description ID кампании */
            advertId?: number
            /** @description Название кампании */
            campName?: string
            /** @description Тип кампании */
            advertType?: number
            /**
             * @description Источник списания:
             *      - `Баланс`
             *      - `Бонусы`
             *      - `Счёт`
             *      - `Кэшбэк`
             */
            paymentType?: string
            /**
             * @description Статус кампании:
             *     - `-1` — удалена, процесс удаления будет завершён в течение 10 минут
             *     - `4` — готова к запуску
             *     - `7` — завершена
             *     - `8` — отменена
             *     - `9` — активна
             *     - `11` — на паузе
             */
            advertStatus?: number
          }[]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Payments: {
    parameters: {
      query?: {
        /** @description Начало интервала */
        from?: string
        /**
         * @description Конец интервала. <br>
         *     (Минимальный интервал 1 день, максимальный 31)
         */
        to?: string
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
           *         "id": 1036666,
           *         "date": "2022-02-04T09:06:47.985843Z",
           *         "sum": 600,
           *         "type": 0,
           *         "statusId": 1,
           *         "currency": "RUB",
           *         "cardStatus": ""
           *       },
           *       {
           *         "id": 55261296,
           *         "date": "2023-04-13T10:07:42",
           *         "sum": 1500,
           *         "type": 3,
           *         "statusId": 1,
           *         "currency": "RUB",
           *         "cardStatus": "succeeded"
           *       }
           *     ]
           */
          'application/json': {
            /** @description ID платежа */
            id?: number
            /**
             * Format: time-date
             * @description Дата платежа
             */
            date?: string
            /** @description Сумма платежа */
            sum?: number
            /**
             * @description Тип источника списания:
             *     - `0` — Счёт
             *     - `1` — Баланс
             *     - `3` — Картой
             */
            type?: number
            /**
             * @description Статус:
             *     - `0` — ошибка
             *     - `1` — обработано
             */
            statusId?: number
            /**
             * @description Статус операции при оплате картой:
             *     - `success` — успех
             *     - `fail` — неуспех
             *     - `pending` — в ожидании ответа
             *     - `unknown` — неизвестно
             */
            cardStatus?: string
            /**
             * Format: ISO 4217
             * @description Валюта [профиля продавца](https://cmp.wildberries.ru/campaigns/finances)
             */
            currency?: string
          }[]
        }
      }
      /** @description История пополнений счета не найдена */
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
          'application/json': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  patchV0AuctionNms: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "nms": [
         *         {
         *           "advert_id": 12345,
         *           "nms": {
         *             "add": [
         *               11111111,
         *               44444444
         *             ],
         *             "delete": [
         *               55555555
         *             ]
         *           }
         *         }
         *       ]
         *     }
         */
        'application/json': {
          /** @description Карточки товаров в кампаниях */
          nms: {
            /**
             * Format: int64
             * @description ID кампании
             */
            advert_id: number
            /** @description Карточки товаров. Максимум 50 товаров для одной кампании */
            nms: {
              /** @description Карточки товаров, которые необходимо добавить */
              add?: unknown
              /** @description Карточки товаров, которые необходимо удалить */
              delete?: number[]
            }
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
          /**
           * @example {
           *       "nms": [
           *         {
           *           "advert_id": 12345,
           *           "nms": {
           *             "added": [
           *               11111111,
           *               44444444
           *             ],
           *             "deleted": [
           *               55555555
           *             ]
           *           }
           *         }
           *       ]
           *     }
           */
          'application/json': {
            /** @description Результат отработки запроса */
            nms: {
              /**
               * Format: int64
               * @description ID кампании
               */
              advert_id: number
              /** @description Карточки товаров */
              nms: {
                /** @description Добавленные карточки товаров */
                added: number[]
                /** @description Удалённые карточки товаров */
                deleted: number[]
              }
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
           *       "detail": "nomenclature 13335157 cannot be both added and deleted for advert 27247695",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "6023d2950af564838f9b44a279d2140c",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV0BidsRecommendations: {
    parameters: {
      query: {
        /**
         * @description Артикул WB
         * @example 123456789
         */
        nmId: number
        /**
         * @description ID кампании
         * @example 987654321
         */
        advertId: number
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
            | components['schemas']['V0BidsRecommendationsCpmResponse1']
            | components['schemas']['V0BidsRecommendationsCpcResponse2']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV0NormqueryStats: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "from": "2025-10-07",
         *       "to": "2025-10-08",
         *       "items": [
         *         {
         *           "advert_id": 1825035,
         *           "nm_id": 983512347
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0GetNormQueryStatsRequest']
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
           *       "stats": [
           *         {
           *           "advert_id": 1825035,
           *           "nm_id": 983512347,
           *           "stats": [
           *             {
           *               "atbs": 68,
           *               "avg_pos": 3.6,
           *               "clicks": 2090,
           *               "cpc": 471,
           *               "cpm": 813,
           *               "ctr": 107.23,
           *               "norm_query": "Фраза 1",
           *               "orders": 19,
           *               "views": 1949,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 68,
           *               "avg_pos": 3.6,
           *               "clicks": 2090,
           *               "cpc": 471,
           *               "cpm": 813,
           *               "ctr": 107.23,
           *               "norm_query": "Фраза 2",
           *               "orders": 19,
           *               "views": 1949,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 68,
           *               "avg_pos": 3.6,
           *               "clicks": 2090,
           *               "cpc": 471,
           *               "cpm": 813,
           *               "ctr": 107.23,
           *               "norm_query": "Фраза 3",
           *               "orders": 19,
           *               "views": 1949,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 36,
           *               "avg_pos": 3.9,
           *               "clicks": 1847,
           *               "cpc": 278,
           *               "cpm": 445,
           *               "ctr": 96.4,
           *               "norm_query": "Фраза 4",
           *               "orders": 28,
           *               "views": 1916,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 36,
           *               "avg_pos": 3.9,
           *               "clicks": 1847,
           *               "cpc": 278,
           *               "cpm": 445,
           *               "ctr": 96.4,
           *               "norm_query": "Фраза 5",
           *               "orders": 28,
           *               "views": 1916,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 79,
           *               "avg_pos": 2.2,
           *               "clicks": 2468,
           *               "cpc": 106,
           *               "cpm": 819,
           *               "ctr": 145.01,
           *               "norm_query": "Фраза 6",
           *               "orders": 14,
           *               "views": 1702,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 79,
           *               "avg_pos": 2.2,
           *               "clicks": 2468,
           *               "cpc": 106,
           *               "cpm": 819,
           *               "ctr": 145.01,
           *               "norm_query": "Фраза 7",
           *               "orders": 14,
           *               "views": 1702,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 67,
           *               "avg_pos": 9.9,
           *               "clicks": 1166,
           *               "cpc": 250,
           *               "cpm": 837,
           *               "ctr": 70.33,
           *               "norm_query": "Фраза 8",
           *               "orders": 26,
           *               "views": 1658,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 67,
           *               "avg_pos": 9.9,
           *               "clicks": 1166,
           *               "cpc": 250,
           *               "cpm": 837,
           *               "ctr": 70.33,
           *               "norm_query": "Фраза 9",
           *               "orders": 26,
           *               "views": 1658,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 46,
           *               "avg_pos": 2,
           *               "clicks": 2927,
           *               "cpc": 122,
           *               "cpm": 468,
           *               "ctr": 186.43,
           *               "norm_query": "Фраза 10",
           *               "orders": 23,
           *               "views": 1570,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 46,
           *               "avg_pos": 2,
           *               "clicks": 2927,
           *               "cpc": 122,
           *               "cpm": 468,
           *               "ctr": 186.43,
           *               "norm_query": "Фраза 11",
           *               "orders": 23,
           *               "views": 1570,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 79,
           *               "avg_pos": 7.1,
           *               "clicks": 2447,
           *               "cpc": 67,
           *               "cpm": 426,
           *               "ctr": 163.9,
           *               "norm_query": "Фраза 12",
           *               "orders": 13,
           *               "views": 1493,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 79,
           *               "avg_pos": 7.1,
           *               "clicks": 2447,
           *               "cpc": 67,
           *               "cpm": 426,
           *               "ctr": 163.9,
           *               "norm_query": "Фраза 13",
           *               "orders": 13,
           *               "views": 1493,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 61,
           *               "avg_pos": 6,
           *               "clicks": 1391,
           *               "cpc": 370,
           *               "cpm": 980,
           *               "ctr": 99.29,
           *               "norm_query": "Фраза 14",
           *               "orders": 27,
           *               "views": 1401,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 61,
           *               "avg_pos": 6,
           *               "clicks": 1391,
           *               "cpc": 370,
           *               "cpm": 980,
           *               "ctr": 99.29,
           *               "norm_query": "Фраза 15",
           *               "orders": 27,
           *               "views": 1401,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 26,
           *               "avg_pos": 6.9,
           *               "clicks": 1029,
           *               "cpc": 88,
           *               "cpm": 459,
           *               "ctr": 77.43,
           *               "norm_query": "Фраза 16",
           *               "orders": 3,
           *               "views": 1329
           *             },
           *             {
           *               "atbs": 26,
           *               "avg_pos": 6.9,
           *               "clicks": 1029,
           *               "cpc": 88,
           *               "cpm": 459,
           *               "ctr": 77.43,
           *               "norm_query": "Фраза 17",
           *               "orders": 3,
           *               "views": 1329,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 67,
           *               "avg_pos": 3.8,
           *               "clicks": 1371,
           *               "cpc": 448,
           *               "cpm": 534,
           *               "ctr": 104.18,
           *               "norm_query": "Фраза 18",
           *               "orders": 3,
           *               "views": 1316,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 67,
           *               "avg_pos": 3.8,
           *               "clicks": 1371,
           *               "cpc": 448,
           *               "cpm": 534,
           *               "ctr": 104.18,
           *               "norm_query": "Фраза 19",
           *               "orders": 3,
           *               "views": 1316,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 18,
           *               "avg_pos": 10,
           *               "clicks": 2944,
           *               "cpc": 472,
           *               "cpm": 839,
           *               "ctr": 256,
           *               "norm_query": "Фраза 20",
           *               "orders": 4,
           *               "views": 1150,
           *               "currency": "RUB"
           *             },
           *             {
           *               "atbs": 18,
           *               "avg_pos": 10,
           *               "clicks": 2944,
           *               "cpc": 472,
           *               "cpm": 839,
           *               "ctr": 256,
           *               "norm_query": "Фраза 21",
           *               "orders": 4,
           *               "views": 1150,
           *               "currency": "RUB"
           *             }
           *           ]
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['V0GetNormQueryStatsResponse']
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StandardizedBatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV0NormqueryGetBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "items": [
         *         {
         *           "advert_id": 1825035,
         *           "nm_id": 983512347
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0GetNormQueryBidsRequest']
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
           *       "bids": [
           *         {
           *           "advert_id": 1825035,
           *           "bid": 700,
           *           "bid_kopecks": 70000,
           *           "currency": "RUB",
           *           "nm_id": 983512347,
           *           "norm_query": "Фраза 1"
           *         },
           *         {
           *           "advert_id": 1825035,
           *           "bid": 9000,
           *           "bid_kopecks": 25000,
           *           "currency": "RUB",
           *           "nm_id": 983512347,
           *           "norm_query": "Фраза 2"
           *         },
           *         {
           *           "advert_id": 1825035,
           *           "bid": 9999,
           *           "bid_kopecks": 25000,
           *           "currency": "RUB",
           *           "nm_id": 983512347,
           *           "norm_query": "Фраза 3"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['V0GetNormQueryBidsResponse']
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StandardizedBatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Config: {
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
           *       "cpcStep": 500,
           *       "cpmStep": 100000,
           *       "currency": "UZS",
           *       "currencyCode": 860,
           *       "minDailyLimit": 100000,
           *       "minTopUp": 10000
           *     }
           */
          'application/json': components['schemas']['V2GetConfigResponse']
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
  postV1NormqueryBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1SetNormQueryBidsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1SetNormQueryBidsResponse']
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
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
  postV0NormqueryBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "bids": [
         *         {
         *           "advert_id": 1825035,
         *           "nm_id": 983512347,
         *           "norm_query": "Фраза 1",
         *           "bid": 1000
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0SetNormQueryBidsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StandardizedBatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  deleteV0NormqueryBids: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "bids": [
         *         {
         *           "advert_id": 1825035,
         *           "nm_id": 983512347,
         *           "norm_query": "Фраза 1"
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0DeleteNormQueryBidsRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StandardizedBatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV0NormqueryGetMinus: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "items": [
         *         {
         *           "advert_id": 1825035,
         *           "nm_id": 983512347
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0GetNormQueryMinusRequest']
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
           *       "items": [
           *         {
           *           "advert_id": 1825035,
           *           "nm_id": 983512347,
           *           "norm_queries": [
           *             "Фраза 1"
           *           ]
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['V0GetNormQueryMinusResponse']
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StandardizedBatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV0NormquerySetMinus: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "advert_id": 1825035,
         *       "nm_id": 983512347,
         *       "norm_queries": [
         *         "Фраза 1"
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0SetMinusNormQueryRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
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
           *       "detail": "invalid payment_type value",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "7e5cb1f106cc6e85b5b29eb2e8815da2",
           *       "status": 400,
           *       "title": "invalid payload"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StandardizedBatchError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Count: {
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
           *       "all": 6,
           *       "adverts": {
           *         "type": 2,
           *         "status": 7,
           *         "count": 2
           *       }
           *     }
           */
          'application/json': {
            /** @description Общее количество медиакампаний всех статусов и типов */
            all?: number
            adverts?: {
              /**
               * @description Тип медиакампании:
               *     - `1` — размещение по дням
               *     - `2` — размещение по просмотрам
               */
              type?: number
              /**
               * @description Статус медиакампании:
               *       - `1` — черновик
               *       - `2` — модерация
               *       - `3` — отклонена (с возможностью вернуть на модерацию)
               *       - `4` — готова к запуску
               *       - `5` — запланирована
               *       - `6` — на показах
               *       - `7` — завершена
               *       - `8` — отменена
               *       - `9` — приостановлена продавцом
               *       - `10` — пауза по дневному лимиту
               *       - `11` — пауза
               */
              status?: number
              /** @description Количество медиакампаний */
              count?: number
            } | null
          }
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Adverts: {
    parameters: {
      query?: {
        /**
         * @description Статус медиакампании:
         *       - `1` — черновик
         *       - `2` — модерация
         *       - `3` — отклонена (с возможностью вернуть на модерацию)
         *       - `4` — готова к запуску
         *       - `5` — запланирована
         *       - `6` — на показах
         *       - `7` — завершена
         *       - `8` — отменена
         *       - `9` — приостановлена продавцом
         *       - `10` — пауза по дневному лимиту
         *       - `11` — пауза
         */
        status?: string
        /**
         * @description Тип медиакампании:
         *     - `1` — размещение по дням
         *     - `2` — размещение по просмотрам
         */
        type?: number
        /** @description Количество кампаний в ответе */
        limit?: number
        /** @description Смещение относительно первой медиакампании */
        offset?: number
        /**
         * @description Порядок вывода ответа:
         *     - `create` — по времени создания медиакампании
         *     - `id` — по ID медиакампании
         */
        order?: string
        /**
         * @description Порядок сортировки:
         *     - `desc` — от большего к меньшему
         *     - `asc` — от меньшего к большему
         */
        direction?: string
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
           *         "advertId": 123456,
           *         "name": "тост",
           *         "brand": "brand",
           *         "type": 2,
           *         "status": 8,
           *         "createTime": "2023-03-25T20:35:57.116943+03:00"
           *       },
           *       {
           *         "advertId": 54321,
           *         "name": "тест",
           *         "brand": "brandname",
           *         "type": 1,
           *         "status": 7,
           *         "createTime": "2023-07-24T16:48:20.935599+03:00",
           *         "endTime": "2023-07-25T20:35:50.104978Z"
           *       }
           *     ]
           */
          'application/json': {
            /** @description ID медиакампании */
            advertId?: number
            /** @description Название медиакампании */
            name?: string
            /** @description Название бренда */
            brand?: string
            /**
             * @description Тип медиакампании:
             *     - `1` — размещение по дням
             *     - `2` — размещение по просмотрам
             */
            type?: number
            /**
             * @description Статус медиакампании:
             *       - `1` — черновик
             *       - `2` — модерация
             *       - `3` — отклонена (с возможностью вернуть на модерацию)
             *       - `4` — готова к запуску
             *       - `5` — запланирована
             *       - `6` — на показах
             *       - `7` — завершена
             *       - `8` — отменена
             *       - `9` — приостановлена продавцом
             *       - `10` — пауза по дневному лимиту
             *       - `11` — пауза
             */
            status?: number
            /**
             * Format: date-time
             * @description Время создания медиакампании
             */
            createTime?: string
            /**
             * Format: date-time
             * @description Время завершения медиакампании
             */
            endTime?: string
          }[]
        }
      }
      /** @description Медиакампании не найдены */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1Advert: {
    parameters: {
      query: {
        /** @description ID медиакампании */
        id: number
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
            /** @description ID медиакампании */
            advertId?: number
            /** @description Название медиакампании */
            name?: string
            /** @description Название бренда */
            brand?: string
            /**
             * @description Тип медиакампании:
             *     - `1` — размещение по дням
             *     - `2` — размещение по просмотрам
             */
            type?: number
            /**
             * @description Статус медиакампании:
             *       - `1` — черновик
             *       - `2` — модерация
             *       - `3` — отклонена (с возможностью вернуть на модерацию)
             *       - `4` — готова к запуску
             *       - `5` — запланирована
             *       - `6` — на показах
             *       - `7` — завершена
             *       - `8` — отменена
             *       - `9` — приостановлена продавцом
             *       - `10` — пауза по дневному лимиту
             *       - `11` — пауза
             */
            status?: number
            /**
             * Format: date-time
             * @description Время создания медиакампании
             */
            createTime?: string
            extended?: {
              /** @description Комментарий модератора */
              reason?: string | null
              /** @description Затраты */
              expenses?: number
              /**
               * Format: date-time
               * @description Дата и время начала показа медиакампании
               */
              from?: string
              /**
               * Format: date-time
               * @description Дата и время окончания показа медиакампании
               */
              to?: string
              /**
               * Format: date-time
               * @description Дата и время изменения кампании
               */
              updated_at?: string
              /** @description Стоимость размещения по дням для типа `1` */
              price?: number
              /** @description Остаток бюджета для типа `2` */
              budget?: number
              /**
               * @description Источник списания:
               *       - `1` — баланс
               *       - `2` — счёт
               */
              operation?: number
              /** @description ID контракта, для продавцов на контракте */
              contract_id?: number
            }
            /**
             * @description Информация о баннере.
             *     <br>
             *     Наличие в ответе тех или иных полей зависит от конфигурации медиакампании.
             */
            items?: {
              /** @description ID баннера */
              id?: number
              /** @description Бренд */
              name?: string
              /** @description Статус (такой же как у медиакампании) */
              status?: number
              /** @description Позиция на странице размещения */
              place?: number
              /** @description Бюджет */
              budget?: number
              /** @description Дневной лимит (для баннеров по показам) */
              daily_limit?: number
              /** @description Название категории размещения */
              category_name?: string
              /** @description Ставка */
              cpm?: number
              /** @description URL страницы, на которую попадает пользователь при клике по баннеру */
              url?: string
              /**
               * @description Тип продвижения:
               *     - `1` — баннер
               *     - `2` — всплывающее меню
               *     - `3` — почтовая рассылка
               *     - `4` — социальные сети
               *     - `5` — push-уведомления в мобильном приложении
               */
              advert_type?: number
              /**
               * Format: date-time
               * @description Дата создания баннера
               */
              created_at?: string
              /**
               * Format: date-time
               * @description Дата и время обновления баннера
               */
              updated_at?: string
              /**
               * Format: date-time
               * @description Дата начала работы баннера
               */
              date_from?: string
              /**
               * Format: date-time
               * @description Дата завершения работы баннера
               */
              date_to?: string
              /** @description Подборка артикулов WB */
              nms?: number[]
              /** @description Текст под плашкой баннера */
              bottomText1?: string
              /** @description 2-я строка с текстом под плашкой баннера */
              bottomText2?: string
              /** @description Текст push-уведомления или рассылки */
              message?: string
              /**
               * @description Дополнительные настройки.
               *
               *     Формат почтовой рассылки:
               *     - `1` — общий
               *     - `2` — частичный
               *     - `3` — уникальный
               *
               *
               *     Социальная сеть:
               *     - `1` — VK
               *     - `2` — OK (Одноклассники)
               */
              additionalSettings?: number
              /** @description Кол-во получателей push-уведомлений */
              receiversCount?: number
              /** @description ID родительской категории товара */
              subject_id?: number
              /** @description Название родительской категории товара */
              subject_name?: string
              /** @description Название акции */
              action_name?: string
              /** @description Часы показа */
              show_hours?: {
                /** @description Начало показа */
                From?: number
                /** @description Конец показа */
                To?: number
              }[]
              /** @description Уникальный ID медиакампании для работы с ОРД */
              Erid?: string
            }[]
          }
        }
      }
      /** @description Медиакампания не найдена */
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
          'text/plain': string
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV3Fullstats: {
    parameters: {
      query: {
        /** @description ID кампаний, максимум 50 значений */
        ids: string
        /**
         * @description Дата начала интервала
         * @example 2025-09-07
         */
        beginDate: string
        /**
         * @description Дата окончания интервала
         * @example 2025-09-08
         */
        endDate: string
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
           *         "advertId": 22161678,
           *         "atbs": 9,
           *         "boosterStats": [
           *           {
           *             "avg_position": 24,
           *             "date": "2025-09-07",
           *             "nm": 221725278
           *           },
           *           {
           *             "avg_position": 35,
           *             "date": "2025-09-08",
           *             "nm": 221725278
           *           }
           *         ],
           *         "canceled": 0,
           *         "clicks": 139,
           *         "cpc": 4.76,
           *         "cr": 0,
           *         "ctr": 10.12,
           *         "days": [
           *           {
           *             "apps": [
           *               {
           *                 "appType": 1,
           *                 "atbs": 0,
           *                 "canceled": 0,
           *                 "clicks": 1,
           *                 "cpc": 10.19,
           *                 "cr": 0,
           *                 "ctr": 4.76,
           *                 "nms": [
           *                   {
           *                     "atbs": 0,
           *                     "canceled": 0,
           *                     "clicks": 1,
           *                     "cpc": 10.19,
           *                     "cr": 0,
           *                     "ctr": 4.76,
           *                     "name": "постер 2",
           *                     "nmId": 221725278,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 10.19,
           *                     "sum_price": 0,
           *                     "views": 21
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 10.19,
           *                 "sum_price": 0,
           *                 "views": 21
           *               },
           *               {
           *                 "appType": 32,
           *                 "atbs": 1,
           *                 "canceled": 0,
           *                 "clicks": 54,
           *                 "cpc": 4.26,
           *                 "cr": 0,
           *                 "ctr": 11.37,
           *                 "nms": [
           *                   {
           *                     "atbs": 1,
           *                     "canceled": 0,
           *                     "clicks": 54,
           *                     "cpc": 4.26,
           *                     "cr": 0,
           *                     "ctr": 11.37,
           *                     "name": "постер 2",
           *                     "nmId": 221725278,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 230.08,
           *                     "sum_price": 0,
           *                     "views": 475
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 230.08,
           *                 "sum_price": 0,
           *                 "views": 475
           *               },
           *               {
           *                 "appType": 64,
           *                 "atbs": 1,
           *                 "canceled": 0,
           *                 "clicks": 20,
           *                 "cpc": 6.91,
           *                 "cr": 0,
           *                 "ctr": 6.94,
           *                 "nms": [
           *                   {
           *                     "atbs": 1,
           *                     "canceled": 0,
           *                     "clicks": 20,
           *                     "cpc": 6.91,
           *                     "cr": 0,
           *                     "ctr": 6.94,
           *                     "name": "постер 2",
           *                     "nmId": 221725278,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 138.23,
           *                     "sum_price": 0,
           *                     "views": 288
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 138.23,
           *                 "sum_price": 0,
           *                 "views": 288
           *               }
           *             ],
           *             "atbs": 2,
           *             "canceled": 0,
           *             "clicks": 75,
           *             "cpc": 5.05,
           *             "cr": 0,
           *             "ctr": 9.57,
           *             "date": "2025-09-07T00:00:00Z",
           *             "orders": 0,
           *             "shks": 0,
           *             "sum": 378.49,
           *             "sum_price": 0,
           *             "views": 784
           *           },
           *           {
           *             "apps": [
           *               {
           *                 "appType": 32,
           *                 "atbs": 5,
           *                 "canceled": 0,
           *                 "clicks": 45,
           *                 "cpc": 3.58,
           *                 "cr": 0,
           *                 "ctr": 13.43,
           *                 "nms": [
           *                   {
           *                     "atbs": 5,
           *                     "canceled": 0,
           *                     "clicks": 45,
           *                     "cpc": 3.58,
           *                     "cr": 0,
           *                     "ctr": 13.43,
           *                     "name": "постер 2",
           *                     "nmId": 221725278,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 161.02,
           *                     "sum_price": 0,
           *                     "views": 335
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 161.02,
           *                 "sum_price": 0,
           *                 "views": 335
           *               },
           *               {
           *                 "appType": 64,
           *                 "atbs": 2,
           *                 "canceled": 0,
           *                 "clicks": 19,
           *                 "cpc": 6.05,
           *                 "cr": 0,
           *                 "ctr": 8.02,
           *                 "nms": [
           *                   {
           *                     "atbs": 2,
           *                     "canceled": 0,
           *                     "clicks": 19,
           *                     "cpc": 6.05,
           *                     "cr": 0,
           *                     "ctr": 8.02,
           *                     "name": "постер 2",
           *                     "nmId": 221725278,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 114.95,
           *                     "sum_price": 0,
           *                     "views": 237
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 114.95,
           *                 "sum_price": 0,
           *                 "views": 237
           *               },
           *               {
           *                 "appType": 1,
           *                 "atbs": 0,
           *                 "canceled": 0,
           *                 "clicks": 0,
           *                 "cpc": 0,
           *                 "cr": 0,
           *                 "ctr": 0,
           *                 "nms": [
           *                   {
           *                     "atbs": 0,
           *                     "canceled": 0,
           *                     "clicks": 0,
           *                     "cpc": 0,
           *                     "cr": 0,
           *                     "ctr": 0,
           *                     "name": "постер 2",
           *                     "nmId": 221725278,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 6.79,
           *                     "sum_price": 0,
           *                     "views": 17
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 6.79,
           *                 "sum_price": 0,
           *                 "views": 17
           *               }
           *             ],
           *             "atbs": 7,
           *             "canceled": 0,
           *             "clicks": 64,
           *             "cpc": 4.42,
           *             "cr": 0,
           *             "ctr": 10.87,
           *             "date": "2025-09-08T00:00:00Z",
           *             "orders": 0,
           *             "shks": 0,
           *             "sum": 282.76,
           *             "sum_price": 0,
           *             "views": 589
           *           }
           *         ],
           *         "orders": 0,
           *         "shks": 0,
           *         "sum": 661.25,
           *         "sum_price": 0,
           *         "views": 1373,
           *         "currency": "RUB"
           *       },
           *       {
           *         "advertId": 28449281,
           *         "atbs": 1,
           *         "canceled": 0,
           *         "clicks": 9,
           *         "cpc": 35.94,
           *         "cr": 11.11,
           *         "ctr": 1.76,
           *         "days": [
           *           {
           *             "apps": [
           *               {
           *                 "appType": 32,
           *                 "atbs": 1,
           *                 "canceled": 0,
           *                 "clicks": 7,
           *                 "cpc": 26.31,
           *                 "cr": 14.29,
           *                 "ctr": 2.41,
           *                 "nms": [
           *                   {
           *                     "atbs": 1,
           *                     "canceled": 0,
           *                     "clicks": 5,
           *                     "cpc": 33.02,
           *                     "cr": 20,
           *                     "ctr": 1.92,
           *                     "name": "Футболка желтая",
           *                     "nmId": 398309059,
           *                     "orders": 1,
           *                     "shks": 1,
           *                     "sum": 165.1,
           *                     "sum_price": 500,
           *                     "views": 260
           *                   },
           *                   {
           *                     "atbs": 0,
           *                     "canceled": 0,
           *                     "clicks": 2,
           *                     "cpc": 9.53,
           *                     "cr": 0,
           *                     "ctr": 6.67,
           *                     "name": "Футболка салатовая",
           *                     "nmId": 301957154,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 19.05,
           *                     "sum_price": 0,
           *                     "views": 30
           *                   }
           *                 ],
           *                 "orders": 1,
           *                 "shks": 1,
           *                 "sum": 184.15,
           *                 "sum_price": 500,
           *                 "views": 290
           *               },
           *               {
           *                 "appType": 64,
           *                 "atbs": 0,
           *                 "canceled": 0,
           *                 "clicks": 2,
           *                 "cpc": 62.87,
           *                 "cr": 0,
           *                 "ctr": 1.01,
           *                 "nms": [
           *                   {
           *                     "atbs": 0,
           *                     "canceled": 0,
           *                     "clicks": 1,
           *                     "cpc": 12.7,
           *                     "cr": 0,
           *                     "ctr": 5,
           *                     "name": "Футболка салатовая",
           *                     "nmId": 301957154,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 12.7,
           *                     "sum_price": 0,
           *                     "views": 20
           *                   },
           *                   {
           *                     "atbs": 0,
           *                     "canceled": 0,
           *                     "clicks": 1,
           *                     "cpc": 113.03,
           *                     "cr": 0,
           *                     "ctr": 0.56,
           *                     "name": "Футболка желтая",
           *                     "nmId": 398309059,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 113.03,
           *                     "sum_price": 0,
           *                     "views": 178
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 125.73,
           *                 "sum_price": 0,
           *                 "views": 198
           *               },
           *               {
           *                 "appType": 1,
           *                 "atbs": 0,
           *                 "canceled": 0,
           *                 "clicks": 0,
           *                 "cpc": 0,
           *                 "cr": 0,
           *                 "ctr": 0,
           *                 "nms": [
           *                   {
           *                     "atbs": 0,
           *                     "canceled": 0,
           *                     "clicks": 0,
           *                     "cpc": 0,
           *                     "cr": 0,
           *                     "ctr": 0,
           *                     "name": "Футболка желтая",
           *                     "nmId": 398309059,
           *                     "orders": 0,
           *                     "shks": 0,
           *                     "sum": 13.59,
           *                     "sum_price": 0,
           *                     "views": 22
           *                   }
           *                 ],
           *                 "orders": 0,
           *                 "shks": 0,
           *                 "sum": 13.59,
           *                 "sum_price": 0,
           *                 "views": 22
           *               }
           *             ],
           *             "atbs": 1,
           *             "canceled": 0,
           *             "clicks": 9,
           *             "cpc": 35.94,
           *             "cr": 11.11,
           *             "ctr": 1.76,
           *             "date": "2025-09-08T00:00:00Z",
           *             "orders": 1,
           *             "shks": 1,
           *             "sum": 323.47,
           *             "sum_price": 500,
           *             "views": 510
           *           }
           *         ],
           *         "orders": 1,
           *         "shks": 1,
           *         "sum": 323.47,
           *         "sum_price": 500,
           *         "views": 510,
           *         "currency": "RUB"
           *       }
           *     ]
           */
          'application/json': components['schemas']['ResponseFullStats']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FullStatsError']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1Stats: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': (
          | components['schemas']['RequestWithDate']
          | components['schemas']['RequestWithInterval']
          | components['schemas']['RequestWithCampaignID']
        )[]
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': (
            | components['schemas']['StatInterval']
            | components['schemas']['StatDate']
            | components['schemas']['Stat']
            | components['schemas']['StatCampaignNotFound']
          )[]
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseAdvError1']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1CalendarPromotions: {
    parameters: {
      query: {
        /** @description Начало периода, формат `YYYY-MM-DDTHH:MM:SSZ` */
        startDateTime: components['parameters']['startDateTime']
        /** @description Конец периода, формат `YYYY-MM-DDTHH:MM:SSZ` */
        endDateTime: components['parameters']['endDateTime']
        /**
         * @description Показать акции:
         *       - `false` — доступные для участия
         *       - `true` — все акции
         */
        allPromo: components['parameters']['allPromo']
        /** @description Количество запрашиваемых акций */
        limit?: components['parameters']['limitPromo']
        /** @description После какого элемента выдавать данные */
        offset?: components['parameters']['offset']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['PromoSuccessResponse']
      400: components['responses']['ErrorFailedParseData']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1CalendarPromotionsDetails: {
    parameters: {
      query: {
        /** @description ID акций, по которым нужно вернуть информацию */
        promotionIDs: components['parameters']['promotionIDs']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['PromosGetByIDSuccessResponse']
      400: components['responses']['ErrorFailedParseData']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1CalendarPromotionsNomenclatures: {
    parameters: {
      query: {
        /** @description ID акции */
        promotionID: components['parameters']['promotionID']
        /**
         * @description Участвует в акции:
         *       - `true` — да
         *       - `false` — нет
         */
        inAction: components['parameters']['inAction']
        /** @description Количество запрашиваемых товаров */
        limit?: components['parameters']['limitNomenclature']
        /** @description После какого элемента выдавать данные */
        offset?: components['parameters']['offset']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponsePromoItemsLists']
      400: components['responses']['ErrorWrongParameters']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      422: components['responses']['ErrParameterValuesIncorrect']
      429: components['responses']['429']
    }
  }
  postV1CalendarPromotionsUpload: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['PromoSupplierTaskRequest']
    responses: {
      200: components['responses']['UploadSuccessResponse']
      400: components['responses']['ErrorWrongParameters']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      422: components['responses']['UnprocessableEntity']
      429: components['responses']['429']
    }
  }
  postV0NormqueryList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "items": [
         *         {
         *           "advertId": 123456789,
         *           "nmId": 987654321
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V0GetNormQueryListRequest']
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
           *       "items": [
           *         {
           *           "advertId": 123456789,
           *           "nmId": 987654321,
           *           "normQueries": {
           *             "active": null,
           *             "excluded": [
           *               "бест трикотаж",
           *               "горы футболка для мужчин",
           *               "одежда для моря",
           *               "одежда на море",
           *               "футболка дельфин",
           *               "футболка мужская с принтом светлая",
           *               "футболка поло",
           *               "футболка поло мужская",
           *               "футболка с воротником мужские"
           *             ],
           *             "archived": [
           *               "поло мужское",
           *               "поло мужское летнее"
           *             ]
           *           }
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['V0GetNormQueryListResponse']
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
           *       "detail": "incorrect request body, please check API documentation",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "33e7d9f3fc221648cdf096bf8e62e482",
           *       "status": 400,
           *       "title": "invalid request body"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1NormqueryStats: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "from": "2026-01-01",
         *       "to": "2026-01-30",
         *       "items": [
         *         {
         *           "advertId": 123456789,
         *           "nmId": 987654321
         *         }
         *       ]
         *     }
         */
        'application/json': components['schemas']['V1GetNormQueryStatsRequest']
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
           *       "items": [
           *         {
           *           "advertId": 123456789,
           *           "dailyStats": [
           *             {
           *               "date": "2026-01-27",
           *               "stat": {
           *                 "atbs": 39,
           *                 "avgPos": 3.3,
           *                 "clicks": 75,
           *                 "cpc": 1.44,
           *                 "cpm": 562.5,
           *                 "ctr": 39.06,
           *                 "normQuery": "Поисковый кластер 0",
           *                 "orders": 9,
           *                 "shks": 5,
           *                 "spend": 108,
           *                 "views": 192
           *               }
           *             },
           *             {
           *               "date": "2026-01-27",
           *               "stat": {
           *                 "atbs": 71,
           *                 "avgPos": 7.9,
           *                 "clicks": 56,
           *                 "cpc": 4.38,
           *                 "cpm": 1290.95,
           *                 "ctr": 29.47,
           *                 "normQuery": "румяна для лица vivienne sabo",
           *                 "orders": 2,
           *                 "shks": 44,
           *                 "spend": 245.28,
           *                 "views": 190
           *               }
           *             },
           *             {
           *               "date": "2026-01-27",
           *               "stat": {
           *                 "atbs": 39,
           *                 "avgPos": 3.3,
           *                 "clicks": 75,
           *                 "cpc": 1.44,
           *                 "cpm": 562.5,
           *                 "ctr": 39.06,
           *                 "normQuery": "Поисковый кластер 2",
           *                 "orders": 9,
           *                 "shks": 345345,
           *                 "spend": 108,
           *                 "views": 192
           *               }
           *             }
           *           ],
           *           "nmId": 987654321
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['V1GetNormQueryStatsResponse']
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
           *       "detail": "incorrect request body, please check API documentation",
           *       "origin": "camp-api-public-cache",
           *       "request_id": "33e7d9f3fc221648cdf096bf8e62e482",
           *       "status": 400,
           *       "title": "invalid request body"
           *     }
           */
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV0DailyLimits: {
    parameters: {
      query: {
        /** @description ID кампаний, максимум 100. Укажите значения через запятую */
        advertIds: string
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
          'application/json': components['schemas']['V0GetDailyLimitsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  putV0DailyLimits: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "advertIds": [
         *         1234,
         *         5603
         *       ],
         *       "enabled": true,
         *       "dailyLimit": 1000,
         *       "carryOverEnabled": true
         *     }
         */
        'application/json': components['schemas']['V0PutDailyLimitsRequest']
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
           *       "adverts": [
           *         {
           *           "advertId": 1234,
           *           "belowMinLimit": false,
           *           "requiredLimit": 0
           *         },
           *         {
           *           "advertId": 5603,
           *           "belowMinLimit": true,
           *           "requiredLimit": 3001
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['V0PutDailyLimitsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['response400']
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
}
