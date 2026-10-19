// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/ping': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Проверка подключения
     * @description Метод проверяет:
     *       1. Успешно ли запрос доходит до WB API
     *       2. Валидность токена авторизации и URL запроса
     *       3. Совпадают ли категория токена и сервис
     *
     *     <div class="description_important">
     *       Метод не предназначен для проверки доступности сервисов WB
     *     </div>
     *
     *     У каждого сервиса есть свой вариант метода в зависимости от домена.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 30 сек | 3 запроса | 10 сек | 99 запросов |
     *     </div>
     *
     *     Лимит действует отдельно для каждого варианта метода в зависимости от домена
     */
    get: operations['getPing']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/communications/v2/news': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение новостей портала продавцов
     * @description Метод позволяет получать новости портала продавцов. <br> Для получения успешного ответа необходимо указать
     *     один из параметров `from` или `fromID`. <br> За один запрос можно получить не более 100 новостей.
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
    get: operations['getV2News']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/seller-info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о продавце
     * @description <div class="description_auth">
     *       Информацию о продавце можно получить с токеном любой <a href="/openapi/api-information#tag/authorization/Kategorii-tokenov">категории</a>
     *     </div>
     *
     *     Метод позволяет получать наименование продавца и ID его профиля.
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
     *     | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1SellerInfo']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/common/v1/rating': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить рейтинг продавца
     * @description <div class="description_auth">
     *       Для доступа к методу используйте <a href="/openapi/api-information#tag/authorization/Kak-sozdat-personalnyj-bazovyj-ili-testovyj-token">токен</a> для категории <strong>Вопросы и отзывы</strong>
     *     </div>
     *
     *
     *     <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает пользовательский рейтинг продавца и количество отзывов.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Rating']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/common/v1/subscriptions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию о подписке Джем
     * @description <div class="description_auth">
     *       Информацию о подписке Джем можно получить с токеном любой <a href="/openapi/api-information#tag/authorization/Kategorii-tokenov">категории</a>
     *     </div>
     *
     *
     *     <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает информацию о подписке [Джем](https://seller.wildberries.ru/monetization/jam):
     *       - Если продавец никогда не подключал подписку Джем, возвращается пустой ответ `200`.
     *       - Если продавец активировал и никогда не отменял подписку, возвращается:
     *         - дата активации подписки `since`
     *         - дата окончания текущего оплаченного периода `till`
     *       - Если подписка закончилась или была отменена, но продавец подключил её повторно, возвращается:
     *         - дата первой активации подписки `since`
     *         - дата окончания текущего оплаченного периода `till`
     *       - Если подписка неактивна, возвращается:
     *         - дата первой активации подписки `since`
     *         - дата окончания последнего оплаченного периода `till`
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     </div>
     */
    get: operations['getV1Subscriptions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/common/v1/tariff-constructor/options': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить информацию об опциях Конструктора тарифов
     * @description <div class="description_auth">
     *       Информацию об опциях Конструктора тарифов можно получить с токеном любой <a href="/openapi/api-information#tag/authorization/Kategorii-tokenov">категории</a>
     *     </div>
     *
     *
     *     <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает информацию обо всех опциях и пакетах опций, которые продавец подключил в [Конструкторе тарифов](https://seller.wildberries.ru/tariff-constructor).<br><br>
     *
     *     Опции, входящие в подключённые пакеты, возвращаются в массиве `packages`. Опции, подключённые вне пакетов, возвращаются в массиве `options`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 1 запрос | 1 мин | 10 запросов |
     *     </div>
     */
    get: operations['getV1TariffConstructorOptions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/invite': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создать приглашение для нового пользователя
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену
     *     </div>
     *
     *     Метод создаёт приглашение для нового пользователя с настройкой доступов к разделам профиля продавца.<br>
     *     Как выдаются права доступа:
     *     - Если `access` пустой (`[]`) или не указан — по умолчанию выдаются все доступы, кроме доступов к витрине (`showcase`) и **Джем** (`changeJam`)
     *     - Если в `access` указана часть разделов профиля, то кроме тех доступов, что указаны в запросе, также выдаются все доступы по умолчанию
     *     - Если в `access` перечислены все возможные разделы, доступы будут выданы согласно запросу, без доступов по умолчанию
     *     - Если в `access` дважды указан один и тот же раздел (`code`):
     *       - при разных значениях `disabled` (`true` и `false`) доступ не будет выдан
     *       - при одинаковых значениях `"disabled": true` доступ не будет выдан
     *       - при одинаковых значениях `"disabled": false` доступ будет выдан
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     </div>
     */
    post: operations['postV1Invite']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/users': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список активных или приглашённых пользователей продавца
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену
     *     </div>
     *
     *     Метод возвращает список активных или приглашённых пользователей профиля продавца.<br><br>
     *     Чтобы выбрать список, укажите значение параметра `isInviteOnly`:
     *       - `isInviteOnly=true` — список приглашённых пользователей, которые ещё не активировали доступ
     *       - `isInviteOnly=false` или не указан — список активных пользователей
     *
     *     По каждому пользователю можно получить:
     *       - роль пользователя
     *       - разделы, к которым есть доступы
     *       - статус приглашения
     *
     *     Список приглашённых пользователей в ответе всегда отсортирован по дате создания: от новых до старых.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     </div>
     */
    get: operations['getV1Users']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/users/access': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Изменить права доступа пользователей
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену
     *     </div>
     *
     *     Метод меняет права доступа одному или нескольким пользователям.<br>
     *     <br>
     *     Обновляются только права доступа, переданные в параметрах запроса. Остальные поля остаются без изменений.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 5 запросов |
     *     </div>
     */
    put: operations['putV1UsersAccess']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/user': {
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
     * Удалить пользователя
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену
     *     </div>
     *
     *     Метод удаляет пользователя из [списка сотрудников продавца](/openapi/api-information#tag/sellerUserManagement/operation/getV1Users). Этому пользователю будет закрыт доступ в профиль продавца.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 сек | 1 запрос | 1 сек | 10 запросов |
     *     </div>
     */
    delete: operations['deleteV1User']
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
     * @description Настройки доступа к разделам профиля продавца
     * @example [
     *       {
     *         "code": "balance",
     *         "disabled": false
     *       },
     *       {
     *         "code": "pointsForReviews",
     *         "disabled": false
     *       },
     *       {
     *         "code": "brands",
     *         "disabled": true
     *       },
     *       {
     *         "code": "finance",
     *         "disabled": true
     *       },
     *       {
     *         "code": "supply",
     *         "disabled": true
     *       }
     *     ]
     */
    Access: {
      /**
       * @description Код раздела профиля продавца, к которому пользователь получит доступ:
       *     * `balance` — Просмотр баланса и вывод средств
       *     * `brands` — Управление брендами
       *     * `changeJam` — Доступ к подключению подписки **Джем**: **А/Б тесты**, отметки на фото, автозапуски видео, сравнение карточек
       *     * `discountPrice` — Изменение цен на товары, управление скидками и акциями
       *     * `finance` — Финансовая аналитика. Статистика по балансу, финансовые отчёты, история платежей
       *     * `showcase` — Управление витриной магазина
       *     * `suppliersDocuments` — Просмотр и скачивание документов по работе с площадкой
       *     * `supply` — Создание и управление поставками FBW
       *     * `questions` — Просмотр и ответы на вопросы покупателей
       *     * `pinFeedbacks` — Возможность закреплять и откреплять отзывы
       *     * `pointsForReviews` — Баллы за отзывы
       *     * `feedbacks` — Просмотр и ответы на отзывы покупателей
       *     * `oldAnalyticsReports` — Отчёты
       *     * `marketplace` — Свой склад
       *     * `brandsFlow` — Мои бренды
       *     * `copyrightComplaints` — Обращения правообладателей
       *     * `pretrialClaims` — Досудебные претензии
       *     * `sellersChat` — Чат с покупателями
       *     * `brandzone` — Бренд-зона. Публикация изменений
       *     * `brandzoneSubscribe` — Управление подпиской бренд-зоны
       * @enum {string}
       */
      code:
        | 'balance'
        | 'brands'
        | 'changeJam'
        | 'discountPrice'
        | 'finance'
        | 'showcase'
        | 'suppliersDocuments'
        | 'supply'
        | 'questions'
        | 'pinFeedbacks'
        | 'pointsForReviews'
        | 'feedbacks'
        | 'oldAnalyticsReports'
        | 'marketplace'
        | 'brandsFlow'
        | 'copyrightComplaints'
        | 'pretrialClaims'
        | 'sellersChat'
        | 'brandzone'
        | 'brandzoneSubscribe'
      /**
       * @description * `true` — доступ к разделу запрещён
       *     * `false` — доступ к разделу разрешён
       */
      disabled: boolean
    }[]
    getUsersResponse: {
      /** @description Общее количество активных или приглашённых пользователей */
      total: number
      /** @description Количество активных или приглашённых пользователей на текущей странице */
      countInResponse: number
      /** @description Информация о пользователях */
      users: {
        /** @description ID пользователя */
        id: number
        /**
         * @description Роль пользователя:
         *       * `user` — пользователь, который активировал доступ
         *       * ` ` (пустая строка) — пользователь, который не активировал доступ
         * @enum {string}
         */
        role: 'user' | ''
        /** @description Должность пользователя */
        position: string
        /** @description Номер телефона пользователя */
        phone: string
        /** @description Email пользователя */
        email: string
        /** @description Является ли пользователь владельцем профиля продавца */
        isOwner: boolean
        /** @description Имя пользователя */
        firstName: string
        /** @description Фамилия пользователя */
        secondName: string
        /** @description Отчество пользователя */
        patronymic: string
        /** @description Может ли пользователь одобрять возвраты товаров */
        goodsReturn: boolean
        /** @description Приглашён ли пользователь */
        isInvitee: boolean
        /** @description Информация о приглашении, если пользователь приглашён */
        inviteeInfo: {
          /** @description Номер телефона приглашённого пользователя */
          phoneNumber?: string
          /** @description Должность приглашённого пользователя */
          position?: string
          /**
           * Format: UUID
           * @description ID приглашения
           */
          inviteUuid?: string
          /**
           * Format: date-time
           * @description Дата и время окончания срока действия приглашения
           */
          expiredAt?: string
          /**
           * @description - `true` — приглашение активно
           *     - `false` — приглашение неактивно
           */
          isActive?: boolean
        } | null
        access: components['schemas']['Access']
      }[]
    }
    /**
     * @example {
     *       "access": [
     *         {
     *           "code": "balance",
     *           "disabled": false
     *         },
     *         {
     *           "code": "pointsForReviews",
     *           "disabled": false
     *         },
     *         {
     *           "code": "brands",
     *           "disabled": true
     *         },
     *         {
     *           "code": "finance",
     *           "disabled": true
     *         },
     *         {
     *           "code": "supply",
     *           "disabled": true
     *         }
     *       ],
     *       "invite": {
     *         "phoneNumber": "79999999999",
     *         "position": "Менеджер"
     *       }
     *     }
     */
    createInviteRequest: {
      access?: components['schemas']['Access']
      invite: {
        /**
         * @description Номер телефона пользователя для приглашения.
         *     <details><summary><strong>Поддерживаются номера телефонов из стран:</strong></summary>• Азербайджан<br>• Армения<br>• Барбадос<br>• Беларусь<br>• Бразилия<br>• Гонконг<br>• Грузия<br>• Италия<br>• Казахстан<br>• Китай<br>• Кыргызстан<br>• Макао<br>• ОАЭ<br>• Россия<br>• Сербия<br>• Таджикистан<br>• Турция<br>• Узбекистан<br>• Чехия<br>• Швеция</details>
         */
        phoneNumber: string
        /** @description Должность пользователя */
        position?: string
      }
    }
    /**
     * @description Данные приглашения
     * @example {
     *       "inviteID": "741b8aa6-08ac-4782-8a9d-d931bcbbf608",
     *       "expiredAt": "2025-10-06T10:56:04.335060746Z",
     *       "isSuccess": true,
     *       "inviteUrl": "https://seller.wildberries.ru/supplier-settings/supplier-card?inviteId=e5a813c7-65e0-4599-a550-a6b3d85661ed"
     *     }
     */
    createInviteResponse: {
      /**
       * Format: uuid
       * @description ID приглашения
       */
      inviteID: string
      /**
       * Format: date-time
       * @description Дата и время окончания срока действия приглашения
       */
      expiredAt: string
      /**
       * @description - `true` — приглашение создано успешно
       *     - `false` — повторите запрос
       */
      isSuccess: boolean
      /** @description URL приглашения, по которому должен перейти пользователь */
      inviteUrl: string
    }
    /**
     * @example {
     *       "usersAccesses": [
     *         {
     *           "userId": 42334965,
     *           "access": [
     *             {
     *               "code": "balance",
     *               "disabled": false
     *             },
     *             {
     *               "code": "finance",
     *               "disabled": true
     *             },
     *             {
     *               "code": "feedbacks",
     *               "disabled": false
     *             }
     *           ]
     *         },
     *         {
     *           "userId": 52334965,
     *           "access": [
     *             {
     *               "code": "balance",
     *               "disabled": true
     *             },
     *             {
     *               "code": "changeJam",
     *               "disabled": false
     *             },
     *             {
     *               "code": "showcase",
     *               "disabled": false
     *             }
     *           ]
     *         }
     *       ]
     *     }
     */
    updateUserAccessRequest: {
      /** @description Настройки доступа для пользователя */
      usersAccesses: components['schemas']['UserAccess'][]
    }
    UserAccess: {
      /** @description ID пользователя */
      userId?: number
      access?: components['schemas']['Access']
    }
    /**
     * @example {
     *       "title": "Bad Request",
     *       "status": 400,
     *       "detail": "bad request cause: user is not in current supplier",
     *       "requestId": "c479c04d0b576a9ba0b20fdf235004c2",
     *       "origin": "public-acl"
     *     }
     */
    errorResponse: {
      /** @description Заголовок ошибки */
      title: string
      /** @description Детали ошибки */
      detail: string
      /** @description ID запроса */
      requestId: string
      /** @description Название внутреннего сервиса */
      origin: string
      /** @description HTTP статус-код */
      status: number
    }
    SupplierRatingModel: {
      /**
       * @description Количество отзывов
       * @example 12355
       */
      feedbackCount?: number
      /**
       * Format: float
       * @description Рейтинг продавца
       * @example 4.55
       */
      valuation?: number
    }
    /** @description Информация о подписке Джем */
    SubscriptionsJamInfo: {
      /**
       * @description Статус подписки:
       *       - `active` — активна
       *       - `inactive` — истекла или отменена
       * @example active
       * @enum {string}
       */
      state: 'active' | 'inactive'
      /**
       * @description Источник подключения подписки:
       *       - `constructor` — покупка через раздел **Конструктор тарифов**
       *       - `jam` — покупка через раздел **Подписка «Джем»**
       * @example jam
       * @enum {string}
       */
      activationSource: 'constructor' | 'jam'
      /**
       * @description Уровень подписки:
       *       - `standard`
       *       - `advanced`
       *       - `premium`
       * @example premium
       * @enum {string}
       */
      level: 'standard' | 'advanced' | 'premium'
      /**
       * Format: date-time
       * @description Дата и время первой активации подписки. Не меняется при продлении или повторной активации
       * @example 2026-03-16T08:38:08.056406Z
       */
      since: string
      /**
       * Format: date-time
       * @description Дата и время окончания подписки
       * @example 2026-04-25T14:44:28.393587Z
       */
      till: string
    }
    PlanBuilderOptionsInfo: {
      /**
       * Format: int
       * @description Количество активных опций, не включённых в пакеты
       * @example 5
       */
      activeOptionCount: number
      /**
       * Format: int
       * @description Количество активных пакетов опций
       * @example 2
       */
      activePackageCount: number
      /**
       * Format: float
       * @description Итоговая комиссия за подключённые опции и пакеты, % от оборота
       * @example 4.6
       */
      totalCommissionRate: number
      /** @description Подключённые пакеты опций */
      packages: components['schemas']['PlanBuilderPackage'][]
      /** @description Подключённые опции */
      options: components['schemas']['PlanBuilderOption'][]
    }
    PlanBuilderPackage: {
      /**
       * Format: uuid
       * @description ID пакета
       * @example 79861ed4-ccfd-4998-96a9-c90f8bf98bb9
       */
      id?: string
      /**
       * @description Код пакета
       * @example superSeller
       */
      slug?: string
      /**
       * @description Название пакета на языке из параметра `locale`
       * @example Суперпродавец
       */
      name?: string
      /**
       * @description Статус пакета:
       *       - `active` — активен
       *       - `pendingActivation` — подключён, начнёт работать с 00:00 следующего дня
       *       - `pendingDeactivation` — отключён, перестанет работать с 00:00 следующего дня
       * @example active
       * @enum {string}
       */
      status?: 'active' | 'pendingActivation' | 'pendingDeactivation'
      /**
       * Format: date-time
       * @description Дата активации пакета
       * @example 2006-01-02T15:04:05.999+03:00
       */
      activatedAt?: string
      /**
       * Format: date-time
       * @description Дата окончания минимального срока действия пакета. До этого дня пакет опций нельзя отключить
       * @example 2006-01-02T15:04:05.999+03:00
       */
      expiresAt?: string
      /**
       * Format: float
       * @description Комиссия за пакет, % от оборота
       * @example 2.5
       */
      commissionRate?: number
      /**
       * Format: int
       * @description Минимальный срок действия пакета в днях
       * @example 90
       */
      periodDuration?: number
      /** @description Опции, которые входят в пакет */
      options?: components['schemas']['PlanBuilderOptionShort'][]
    }
    PlanBuilderOption: {
      /**
       * @description ID опции
       * @example 4f134ae7-f768-481e-bac1-bf75d2fdc6f7
       */
      id?: string
      /**
       * @description Код опции
       * @example pinReview
       */
      slug?: string
      /**
       * @description Название опции на языке из параметра `locale`
       * @example Закрепление отзывов и видео из Wibes
       */
      name?: string
      /**
       * @description Статус опции:
       *       - `active` — активна
       *       - `pendingActivation` — подключена, начнёт работать с 00:00 следующего дня
       *       - `pendingDeactivation` — отключена, перестанет работать с 00:00 следующего дня
       * @example active
       * @enum {string}
       */
      status?: 'active' | 'pendingActivation' | 'pendingDeactivation'
      /**
       * Format: date-time
       * @description Дата активации опции
       * @example 2006-01-02T15:04:05.999+03:00
       */
      activatedAt?: string
      /**
       * Format: date-time
       * @description Дата окончания минимального срока действия опции. До этого дня опцию нельзя отключить
       * @example 2006-01-02T15:04:05.999+03:00
       */
      expiresAt?: string
      /**
       * Format: float
       * @description Стоимость подключения опции, % от оборота. Возвращается, если в ответе нет объекта `promotion`
       * @example 2.1
       */
      commissionRate?: number
      /**
       * Format: int
       * @description Минимальный срок действия опции в днях
       * @example 90
       */
      periodDuration?: number
      promotion?: components['schemas']['PlanBuilderPromotion'] & unknown
    }
    PlanBuilderOptionShort: {
      /**
       * @description ID опции
       * @example 4f134ae7-f768-481e-bac1-bf75d2fdc6f7
       */
      id?: string
      /**
       * @description Код опции
       * @example pinReview
       */
      slug?: string
      /**
       * @description Название опции на языке из параметра `locale`
       * @example Закрепление отзывов и видео
       */
      name?: string
    }
    PlanBuilderPromotion: {
      /**
       * Format: float
       * @description Стоимость подключения опции по акции, % от оборота
       * @example 0.3
       */
      commissionRate?: number
      /**
       * Format: date-time
       * @description Дата окончания действия цены по акции
       * @example 2006-01-02T15:04:05.999+03:00
       */
      expiresAt?: string
    }
    PlanBuilderErrors: {
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
      /** @description Ошибки запроса с указанием параметров и деталей ошибок */
      errors?: unknown[]
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
  }
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getPing: {
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
           *       "TS": "2024-08-16T11:19:05+03:00",
           *       "Status": "OK"
           *     }
           */
          'application/json': {
            /** @description Timestamp запроса */
            TS?: string
            /**
             * @description Статус
             * @enum {string}
             */
            Status?: 'OK'
          }
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV2News: {
    parameters: {
      query?: {
        /** @description Дата, от которой необходимо выдать новости */
        from?: string
        /**
         * @description ID новости, начиная с которой — включая её — нужно получить список новостей
         * @example 7369
         */
        fromID?: number
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
           *       "data": [
           *         {
           *           "content": "Теперь в кампаниях ВБ.Медиа вы можете размещать баннеры для пользователей, которые взаимодействовали\nс товарами из определённой категории: покупали, искали, добавляли в корзину и избранное. Также можно\nвыбрать период, за который хотите учитывать эти действия.Например, вы продаёте обувь. Рекламу можно\nпоказать людям, которые добавляли в корзину или избранное товары из этой категории за последние 14\nдней. Возможно, пользователи, которые попадают под этот критерий, уже совершили покупку. Поэтому вы\nможете уточнить настройки показа: добавить параметр «Не покупал товар из категории „Обувь“ в последние\n14 дней». Так вероятность того, что ваш баннер приведёт к покупке, будет выше.Чтобы запустить рекламу,\nсоздайте в кабинете ВБ.Медиа кампанию «По показам» и на шаге 4 включите «Поведенческие параметры».\nЭти параметры можно комбинировать с таргетированием по предполагаемым интересам, полу, возрасту и\nрегиону.Подробнее о том, как настроить таргетинг, — в инструкции «По показам».Запустить рекламу на\nWildberries\n",
           *           "date": "2025-02-05T14:10:35+03:00",
           *           "header": "Новые настройки кампаний в ВБ.Медиа: таргетируйте рекламу в зависимости от того, как аудитория\nиспользует сервисы Wildberries\n",
           *           "id": 7369,
           *           "types": [
           *             {
           *               "id": 4,
           *               "name": "Маркетинг"
           *             }
           *           ]
           *         },
           *         {
           *           "content": "Добавили получение отчётов по текстам поисковых запросов в формате CSV. В описания методов «Создать\nотчёт» и «Получить отчёт» добавили описания и примеры моделей: • запросов — SearchReportTextReq, •\nуспешных ответов (статус-код 200) — SearchReportTextRes.В ответ метода «Поисковые запросы по товару»\nдобавили 8 полей и структуры price и medianPosition. Узнать больше можно в Журнале изменений.Эти методы\nдоступны только с подпиской «Джем»\n",
           *           "date": "2025-02-06T18:14:58+03:00",
           *           "header": "Изменения в API «Аналитики и данных»",
           *           "id": 7373,
           *           "types": [
           *             {
           *               "id": 8,
           *               "name": "API"
           *             },
           *             {
           *               "id": 41,
           *               "name": "Аналитика продавца"
           *             }
           *           ]
           *         }
           *       ]
           *     }
           */
          'application/json': {
            /** @description Новости */
            data?: {
              /**
               * Format: plaintext
               * @description Текст новости
               */
              content?: string
              /**
               * Format: date-time
               * @description Дата и время публикации новости
               */
              date?: string
              /** @description Заголовок новости */
              header?: string
              /** @description ID новости */
              id?: number
              /** @description Теги новости */
              types?: {
                /** @description ID тега */
                id?: number
                /** @description Название тега */
                name?: string
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
        content?: never
      }
      401: components['responses']['401']
      429: components['responses']['429']
    }
  }
  getV1SellerInfo: {
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
           *       "name": "ИП Кружинин В. Р.",
           *       "sid": "e8923014-e233-47q8-898e-3cc86d67ea61",
           *       "tin": "1234567890",
           *       "tradeMark": "Flax Store",
           *       "country": "ru"
           *     }
           */
          'application/json': {
            /** @description Наименование продавца */
            name?: string
            /**
             * Format: UUID
             * @description Уникальный ID продавца на Wildberries, [находящийся в публичном поле токена](./api-information#tag/authorization/Kak-ustroen-token)
             */
            sid?: string
            /** @description ИНН */
            tin?: string
            /** @description Торговое наименование продавца */
            tradeMark?: string
            /** @description Страна регистрации профиля продавца */
            country?: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      429: components['responses']['429']
    }
  }
  getV1Rating: {
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
          'application/json': components['schemas']['SupplierRatingModel']
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
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Subscriptions: {
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
          'application/json': components['schemas']['SubscriptionsJamInfo']
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
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1TariffConstructorOptions: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа:
         *       - `ru` — русский
         *       - `en` — английский
         */
        locale?: 'ru' | 'en'
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
          'application/json': components['schemas']['PlanBuilderOptionsInfo']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['PlanBuilderErrors']
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
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['PlanBuilderErrors']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1Invite: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['createInviteRequest']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['createInviteResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['errorResponse']
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
  getV1Users: {
    parameters: {
      query?: {
        /** @description Количество активных или приглашённых пользователей в ответе */
        limit?: number
        /** @description Сколько элементов пропустить. Например, для значения 10 ответ начнется с 11 элемента */
        offset?: number
        /**
         * @description - `true` — список приглашённых пользователей, которые ещё не активировали доступ
         *     - `false` или не указан — список активных пользователей профиля продавца
         */
        isInviteOnly?: boolean
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
          'application/json': components['schemas']['getUsersResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['errorResponse']
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
  putV1UsersAccess: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['updateUserAccessRequest']
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
          'application/json': components['schemas']['errorResponse']
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
  deleteV1User: {
    parameters: {
      query: {
        /** @description ID пользователя, которому будет закрыт доступ */
        deletedUserID: number
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
          'application/json': components['schemas']['errorResponse']
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
