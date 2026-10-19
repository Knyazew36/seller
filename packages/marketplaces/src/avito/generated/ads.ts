// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/ads/v1/account/{accountID}': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    /**
     * Получить аккаунт по ID
     * @description Возвращает реквизиты рекламного аккаунта по его ID: ИНН, КПП, ОГРН, юридический и фактический адреса, контактное лицо и менеджера.
     *     Токен имеет доступ только к тому аккаунту, в котором был выдан.
     */
    get: operations['V1GetAccountByID']
    put?: never
    /**
     * Создать аккаунт в песочнице
     * @description Создаёт тестовый аккаунт. Метод работает **только в песочнице** (`https://api.avito.ru/ads-sandbox/`); для боевых аккаунтов используйте веб-интерфейс кабинета.
     *     Ограничения песочницы: время жизни аккаунта — до 00:00 текущего дня; в сутки можно создать не более 1 тестового аккаунта.
     */
    post: operations['V1CreateAccount']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/add-user': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Добавить пользователя в аккаунт
     * @description Добавляет пользователя Авито в рекламный аккаунт с указанной ролью. Доступные роли: `admin` (полный доступ) и `viewer` (только просмотр).
     *     Пользователь идентифицируется по `userId` (ID профиля на Авито).
     */
    post: operations['V1AddUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/advertisers': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить список рекламодателей по фильтрам
     * @description Возвращает список рекламодателей аккаунта с пагинацией. Доступные фильтры: список `ids`, список `inns`, список ролей (`roles`).
     *     Параметры пагинации: `limit` — от 1 до 100 (по умолчанию 20), `page` — от 1.
     */
    post: operations['V1GetAdvertisersList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/balance': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    /**
     * Получить баланс аккаунта по ID
     * @description Возвращает текущий баланс рекламного аккаунта: денежные средства (`balance`) и бонусы (`bonusBalance`).
     *     Все суммы — в рублях, целые числа.
     */
    get: operations['V1GetAccountBalanceByID']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/bonus-transfer': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Перевод бонусов между аккаунтом родителем и дочерними на одном договоре
     * @description Переводит бонусы между родительским и дочерним аккаунтом-неплательщиком. Логика направления та же, что у `funds-transfer`: `accountID` в path — источник, `accountIdTo` в body — получатель; для перевода с дочернего на родителя нужен токен дочернего аккаунта.
     *     Сумма `amount` — целое число, не меньше 1 бонуса.
     */
    post: operations['V1TransferBonus']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/campaigns': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить список кампаний по фильтрам
     * @description Возвращает список рекламных кампаний аккаунта с пагинацией. Поддерживает фильтрацию по ID, моделям оплаты (`CPM`/`CPC`), типам кампании (`textImage`/`HTML`/`video`), статусам, менеджерам, рекламодателям, договорам, диапазону дат создания и диапазону периода размещения.
     *     Параметры пагинации: `limit` — от 1 до 100 (по умолчанию 20), `page` — от 1.
     */
    post: operations['V1GetCampaignsList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/campaigns/{campaignID}/creatives/stats': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID аккаунта */
        accountID: number
        /** @description ID кампании */
        campaignID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить статистику по креативам кампании
     * @description Возвращает статистику по конкретным креативам указанной кампании за заданный период. В `creativeIDs` нужно передать минимум один ID креатива.
     *     **Ограничение:** максимальный период между `dateFrom` и `dateTo` — 100 дней.
     */
    post: operations['V1GetCreativesStatistic']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/campaigns/{campaignID}/groups/stats': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID аккаунта */
        accountID: number
        /** @description ID кампании */
        campaignID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить статистику по группам кампании
     * @description Возвращает статистику по конкретным группам объявлений внутри указанной кампании за заданный период. В `groupIDs` нужно передать минимум один ID группы.
     *     **Ограничение:** максимальный период между `dateFrom` и `dateTo` — 100 дней.
     */
    post: operations['V1GetGroupsStatistic']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/campaigns/{campaignID}/stats': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID аккаунта */
        accountID: number
        /** @description ID кампании */
        campaignID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить статистику по кампании
     * @description Возвращает агрегированную статистику по кампании (показы, клики, CTR, расход, CPM/CPC, метрики видеопросмотров) за указанный период с дневной гранулярностью, а также сводку по группам и креативам кампании.
     *     **Ограничение:** максимальный период между `dateFrom` и `dateTo` — 100 дней.
     */
    post: operations['V1GetCampaignStatistic']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/children': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    /**
     * Получить список дочерних аккаунтов
     * @description Возвращает список дочерних аккаунтов, привязанных к текущему (родительскому) аккаунту, вместе с их договорами.
     *     У дочерних аккаунтов на одном договоре с родителем не передается информация о договоре.
     *     Если нужны также балансы дочерних аккаунтов, используйте `GET /ads/v1/account/{accountID}/children-with-balances`.
     */
    get: operations['V1GetChildAccountsList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/children-with-balances': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    /**
     * Получить список дочерних аккаунтов с балансами
     * @description Возвращает список дочерних аккаунтов вместе с их балансами (денежные средства, бонусы).
     *     Удобно для проверки результата переводов через `funds-transfer` / `bonus-transfer`.
     */
    get: operations['V1GetChildAccountsWithBalancesList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/contracts': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить список договоров по фильтрам
     * @description Возвращает список договоров аккаунта с пагинацией. Доступные фильтры: `ids` (ID договоров), `numbers` (номера договоров), `contractors` и `clients` (фильтры по сторонам договора).
     *     Параметры пагинации: `limit` — от 1 до 100 (по умолчанию 20), `page` — от 1.
     */
    post: operations['V1GetContractsList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/create-advertiser': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создать рекламодателя
     * @description Создаёт рекламодателя — юридическое лицо (или ИП), от лица которого будут размещаться рекламные кампании в этом аккаунте.
     *     Один аккаунт может иметь несколько рекламодателей. Если рекламодатель и аккаунт — одно и то же ЮЛ/ИП, договор между ними создавать не нужно; иначе после создания рекламодателя необходимо создать договор через `POST /ads/v1/account/{accountID}/create-contract`.
     */
    post: operations['V1CreateAdvertiser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/create-contract': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание изначального договора
     * @description Создаёт изначальный договор между аккаунтом и рекламодателем. Договор требуется только если рекламодатель и аккаунт — не одно и то же ЮЛ/ИП; для совпадающих контрагентов договор не создаётся.
     *     Для дополнительного соглашения укажите `parentId` (родительский договор) и не передавайте `intermediary`; для внешнего договора (`type = external`) передайте `cid` и не передавайте `parentId`.
     */
    post: operations['V1CreateContract']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/create-nonpayer-child-account': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание дочернего аккаунта на договоре родителя
     * @description Создаёт дочерний аккаунта под текущим (родительским) аккаунтом на том же договоре. В ответе возвращаются `accountID`, `clientKey` и `clientSecret` — пара ключей для генерации отдельного токена дочернего аккаунта.
     *     В песочнице токен для созданного дочернего аккаунта использовать **нельзя**; проверить факт создания можно через `GET /ads/v1/account/{accountID}/children`.
     */
    post: operations['V1CreateNonPayerAccount']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/creatives': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить список креативов по фильтрам
     * @description Возвращает список креативов аккаунта с пагинацией. Поддерживает фильтрацию по ID креативов, ID групп, ID кампаний, моделям оплаты, типам кампании, статусам, менеджерам, рекламодателям и периоду размещения.
     *     Параметры пагинации: `limit` — от 1 до 100 (по умолчанию 20), `page` — от 1.
     */
    post: operations['V1GetCreativesList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/delete-user/{userID}': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
        userID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Удалить пользователя из аккаунта
     * @description Удаляет пользователя из рекламного аккаунта. Доступ пользователя к аккаунту прекращается сразу после успешного выполнения запроса.
     *     `userID` в path — ID пользователя, которого нужно удалить.
     */
    delete: operations['V1DeleteUser']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/funds-transfer': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Перевод денег между аккаунтом родителем и дочерними на одном договоре
     * @description Переводит денежные средства между родительским и дочерним аккаунтом на одном договоре. `accountID` в path — аккаунт-источник (с него списываются деньги), `accountIdTo` в body — аккаунт-получатель.
     *     Перевод выполняется от имени аккаунта-источника, поэтому для перевода с дочернего на родительский нужен токен дочернего аккаунта. Сумма `amount` — целое число, не меньше 1 рубля.
     */
    post: operations['V1TransferFunds']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/group/{groupID}/change-budget': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
        groupID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Изменить бюджет группы
     * @description Устанавливает новый бюджет для указанной группы объявлений. Значение `budget` указывается в рублях с НДС, целое число.
     *     **Ограничение:** `budget` — целое число не меньше 1. Метод работает только для групп с ручным управлением ставкой.
     */
    post: operations['V1ChangeBudget']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/group/{groupID}/change-price': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
        groupID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Изменить цену группы
     * @description Устанавливает новую цену (CPC или CPM в зависимости от модели оплаты кампании) для указанной группы объявлений. Значение `price` указывается в рублях с НДС, целое число.
     *     **Ограничение:** `price` — целое число не меньше 1. Метод работает только для групп с ручным управлением ставкой.
     */
    post: operations['V1ChangePrice']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/groups': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получить список групп по фильтрам
     * @description Возвращает список групп объявлений аккаунта с пагинацией. Поддерживает фильтрацию по ID групп, ID кампаний, статусам, скоростям показов (`paces`), менеджерам, рекламодателям, моделям оплаты и периоду размещения.
     *     Параметры пагинации: `limit` — от 1 до 100 (по умолчанию 20), `page` — от 1.
     */
    post: operations['V1GetGroupsList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/set-user-role': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Изменить роль пользователя в аккаунте
     * @description Меняет роль уже добавленного в аккаунт пользователя. Доступные значения роли: `admin` (полный доступ) и `viewer` (только просмотр).
     *     Если пользователя нужно полностью убрать, используйте `DELETE /ads/v1/account/{accountID}/delete-user/{userID}`.
     */
    post: operations['V1SetUserRole']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/ads/v1/account/{accountID}/users': {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    /**
     * Получить список пользователей аккаунта
     * @description Возвращает список пользователей, имеющих доступ к рекламному аккаунту, с их ролями и флагом `hasLoggedIn` (заходил ли пользователь в аккаунт хотя бы раз).
     *     Метод без пагинации — возвращает всех пользователей сразу.
     */
    get: operations['V1GetUsersListByAccount']
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
    Account: {
      actualAddress: string
      /** @description Контактное лицо */
      contact: {
        name: string
        phone: string
      }
      inn: string
      kpp: string
      legalAddress: string
      longName: string
      /** @description MSD Менеджер */
      manager?: {
        email: string
        name: string
      } | null
      ogrn: string
      shortName: string
    }
    /** @description Активные часы в сутках */
    ActivityScheduleDay: number[]
    /** @description Расписание активности на день по часам (0-23) */
    ActivityScheduleHours: number[]
    Advertiser: {
      accountId: number
      actualAddress: string
      id: number
      inn: string
      kpp?: string
      legalAddress: string
      legalRole: components['schemas']['LegalRole']
      legalType: components['schemas']['LegalType']
      longName: string
      ogrn: string
      shortName: string
    }
    AdvertiserFilter: {
      /** @description Список ID рекламодателей */
      ids?: number[] | null
      /** @description Список ИНН рекламодателей */
      inns?: string[] | null
      /** @description Список ролей рекламодателей */
      roles?: components['schemas']['LegalRole'][] | null
    }
    /**
     * @description Тип аудитории таргетинга группы
     * @enum {string}
     */
    AudienceType: 'basic' | 'ready' | 'autotargeting'
    /**
     * @description Формат баннера
     * @enum {string}
     */
    BannerFormat: 'standard' | 'premium' | 'root' | 'seller_profile'
    /**
     * @description Частота расходования бюджета
     * @enum {string}
     */
    BudgetFrequency: 'entirePeriod'
    Campaign: {
      /** @description ID аккаунта */
      accountId?: number
      /** @description ID дополнительного соглашения к изначальному договору */
      additionalAgreementID?: number | null
      /** @description ID рекламодателя */
      advertiserId?: number
      /** @description Бюджет кампании в рублях с НДС */
      budget?: number
      /** @description Бюджет кампании в копейках с НДС */
      budgetKopeks?: number
      campaignType?: components['schemas']['CampaignType']
      /** @description ID контракта */
      contractId?: number
      /** @description Дата создания кампании */
      createdAt?: string
      /** @description Дата окончания кампании */
      endDate?: string | null
      /** @description ID кампании */
      id?: number
      /** @description ID менеджера, ответственного за кампанию (userID) */
      managerID?: number
      /** @description Название кампании */
      name?: string
      paymentModel?: components['schemas']['CampaignPaymentModel']
      /** @description ID доп соглашения к исполнительскому договору */
      performanceAdditionalAgreementID?: number | null
      /** @description Дата начала кампании */
      startDate?: string | null
      status?: components['schemas']['CampaignStatus']
      statusReasons: components['schemas']['StatusReasons']
      topStatusReason: components['schemas']['TopStatusReason']
      /** @description Дата обновления кампании */
      updatedAt?: string | null
      /** @description ID пользователя создавшего кампанию */
      userId?: number
    }
    /**
     * @description Название поля кампании
     * @enum {string}
     */
    CampaignFieldName:
      | 'name'
      | 'advertiserID'
      | 'contractID'
      | 'additionalAgreementID'
      | 'performanceAdditionalAgreementID'
      | 'managerID'
      | 'campaignType'
      | 'paymentModel'
    /**
     * @description Цель кампании
     * @enum {string}
     */
    CampaignGoalType: 'performance' | 'reach'
    /**
     * @description Тип посадочной страницы кампании
     * @enum {string}
     */
    CampaignLandingType: 'external'
    /**
     * @description Модель оплаты кампании
     * @enum {string}
     */
    CampaignPaymentModel: 'CPM' | 'CPC'
    /** @description Статистика кампании */
    CampaignStatistic: {
      campaignType: components['schemas']['CampaignType']
      /** @description Статистика в разбивке по дням */
      data: components['schemas']['StatsData'][]
      /** @description ID кампании */
      id: number
      /** @description Название кампании */
      name: string
      paymentModel: components['schemas']['CampaignPaymentModel']
      totalData: components['schemas']['StatsData']
    }
    /**
     * @description Статус кампании
     * @enum {string}
     */
    CampaignStatus:
      | 'draft'
      | 'in_moderation'
      | 'moderation_failed'
      | 'partial_moderation'
      | 'active'
      | 'will_launch_soon'
      | 'partially_active'
      | 'will_stop_soon'
      | 'pausing'
      | 'paused'
      | 'unpausing'
      | 'stopped'
      | 'finished'
      | 'archived'
    /**
     * @description Стратегия кампании
     * @enum {string}
     */
    CampaignStrategy: 'maxclicks' | 'maxviews'
    /**
     * @description Тип кампании
     * @enum {string}
     */
    CampaignType: 'textImage' | 'HTML' | 'video'
    CampaignsFilter: {
      /** @description Список ID дополнительных соглашений */
      additionalAgreementIDs?: number[] | null
      /** @description Список ID рекламодателей */
      advertisers?: number[] | null
      /** @description Список типов кампаний */
      campaignTypes?: components['schemas']['CampaignType'][] | null
      /** @description Список ID договоров */
      contractIDs?: number[] | null
      createdAt?: components['schemas']['DateRange']
      /** @description Список ID кампаний */
      ids?: number[] | null
      /** @description Список ID менеджеров */
      managers?: number[] | null
      /** @description Список моделей оплаты */
      paymentModels?: components['schemas']['CampaignPaymentModel'][] | null
      /** @description Список статусов кампаний */
      statuses?: components['schemas']['CampaignStatus'][] | null
      timeFrame?: components['schemas']['DateRange']
    }
    Contract: {
      accountID: number
      cid?: string | null
      client: components['schemas']['Advertiser']
      contractor: components['schemas']['Advertiser']
      date?: string | null
      description?: string | null
      id: number
      isAgentActingForPublisher?: boolean | null
      isCreativeReporter?: boolean | null
      number?: string | null
      object?: string | null
      parentId?: number | null
      subject?: string | null
      type: components['schemas']['ContractType']
    }
    /**
     * @description Описание действия договора
     * @enum {string}
     */
    ContractAction: 'distribution' | 'conclude' | 'commercial' | 'other'
    /** @enum {string} */
    ContractCounterpartyType: 'direct_with_advertiser' | 'advertiser_intermediary'
    ContractForChildAccount: {
      accountID?: number
      cid?: string | null
      client?: components['schemas']['Advertiser']
      contractor?: components['schemas']['Advertiser']
      date?: string | null
      description?: string | null
      id?: number
      isAgentActingForPublisher?: boolean | null
      isCreativeReporter?: boolean | null
      number?: string | null
      object?: string | null
      parentId?: number | null
      subject?: string | null
      type?: components['schemas']['ContractType']
    } | null
    /**
     * @description Предмет договора
     * @enum {string}
     */
    ContractSubject: 'org-distribution' | 'mediation' | 'distribution' | 'representation' | 'other'
    /**
     * @description Тип контракта
     * @enum {string}
     */
    ContractType: 'service' | 'intermediary' | 'external'
    ContractsFilter: {
      clients?: components['schemas']['AdvertiserFilter']
      contractors?: components['schemas']['AdvertiserFilter']
      /** @description Список ID договоров */
      ids?: number[] | null
      /** @description Список номеров договоров */
      numbers?: string[] | null
    }
    /**
     * @description Модель оплаты кампании для создания
     * @enum {string}
     */
    CreateCampaignPaymentModel: 'cpc' | 'cpm'
    /**
     * @description Тип кампании для создания
     * @enum {string}
     */
    CreateCampaignType: 'textimg' | 'html' | 'video'
    /** @description Кастомное расписание активности */
    CreateGroupActivitySchedule: {
      friday?: components['schemas']['ActivityScheduleDay']
      monday?: components['schemas']['ActivityScheduleDay']
      saturday?: components['schemas']['ActivityScheduleDay']
      sunday?: components['schemas']['ActivityScheduleDay']
      thursday?: components['schemas']['ActivityScheduleDay']
      tuesday?: components['schemas']['ActivityScheduleDay']
      wednesday?: components['schemas']['ActivityScheduleDay']
    }
    Creative: {
      /** @description ID аккаунта */
      accountID?: number
      /** @description ID рекламодателя */
      advertiserID?: number
      /** @description Текст на кнопке */
      buttonText?: string | null
      /** @description ID кампании */
      campaignID?: number
      campaignType?: components['schemas']['CampaignType']
      /** @description Описание объявления */
      description?: string | null
      /** @description ID группы */
      groupID?: number
      /** @description ID креатива */
      id?: number
      /** @description Заполненное поле динамической формы ККТУ */
      kktuFields?: components['schemas']['KKTUFieldValue'][]
      /** @description ID посадочной страницы */
      landingID?: number | null
      legalInfo?: components['schemas']['LegalInfo']
      /** @description Целевая ссылка */
      link?: string
      /** @description ID менеджера, ответственного за кампанию (userID) */
      managerID?: number
      /** @description Название креатива */
      name?: string
      /** @description Оригинальная ссылка для аналитики */
      originUrl?: string | null
      paymentModel?: components['schemas']['CampaignPaymentModel']
      /** @description Ссылка на предпросмотр креатива */
      previewUrl?: string | null
      status?: components['schemas']['CreativesStatus']
      statusReasons: components['schemas']['StatusReasons']
      /** @description Заголовок объявления */
      title?: string | null
      topStatusReason: components['schemas']['TopStatusReason']
      /** @description ID пользователя, создавшего креатив */
      userID?: number
    }
    /** @description Статистика креатива */
    CreativeStatistic: {
      /** @description Статистика в разбивке по дням */
      data: components['schemas']['StatsData'][]
      /** @description ID группы, к которой относится креатив */
      groupId: number
      /** @description ID креатива */
      id: number
      /** @description Название креатива */
      name: string
      totalData: components['schemas']['StatsData']
    }
    CreativesFilter: {
      /** @description Список ID рекламодателей */
      advertisers?: number[] | null
      /** @description Список ID кампаний */
      campaignIDs?: number[] | null
      /** @description Список типов кампаний */
      campaignTypes?: components['schemas']['CampaignType'][] | null
      /** @description Список ID групп */
      groupIDs?: number[] | null
      /** @description Список ID креативов */
      ids?: number[] | null
      /** @description Список ID менеджеров */
      managers?: number[] | null
      /** @description Список моделей оплаты */
      paymentModels?: components['schemas']['CampaignPaymentModel'][] | null
      /** @description Список статусов креативов */
      statuses?: components['schemas']['CreativesStatus'][] | null
      timeFrame?: components['schemas']['DateRange']
    }
    /**
     * @description Статус креатива
     * @enum {string}
     */
    CreativesStatus:
      | 'draft'
      | 'ready_for_moderation'
      | 'in_moderation'
      | 'moderation_failed'
      | 'erir_registration'
      | 'will_launch_soon'
      | 'active'
      | 'pausing'
      | 'paused'
      | 'unpausing'
      | 'stopped'
      | 'finished'
      | 'archived'
    /** @description Данные исполнителя по договору. Для доп соглашений не передаем. Для договоров обязательно передавать. */
    CreteIntermediaryIn: {
      /** @description Почтовый адрес */
      actualAddress?: string
      /** @description ИНН ЮЛ/ИП */
      inn?: string
      /** @description КПП ЮЛ, для ИП не передаем */
      kpp?: string | null
      /** @description Юридически адрес */
      legalAddress?: string
      legalType?: components['schemas']['LegalType']
      /** @description Полное имя ЮЛ/ИП */
      longName?: string
      /** @description ОГРНИП для ИП, ОРГН для ЮЛ */
      ogrn?: string
      /** @description Короткое имя ЮЛ/ИП */
      shortName?: string
    } | null
    /** @description Диапазон дат */
    DateRange: {
      /**
       * Format: date
       * @description Дата начала в формате YYYY-MM-DD
       */
      from?: string
      /**
       * Format: date
       * @description Дата окончания в формате YYYY-MM-DD
       */
      to?: string
    } | null
    DetailedError: {
      code: string
      errors?: components['schemas']['DetailedErrors']
      message: string
    }
    DetailedErrorItem: {
      /**
       * Format: int64
       * @description ID сущности
       */
      id: number
      /** @description Описание ошибки */
      message: string
    }
    /** @description Ошибки по ID сущности */
    DetailedErrors: components['schemas']['DetailedErrorItem'][]
    Disclaimer: {
      inputs: components['schemas']['DisclaimerInput'][]
      key: string
      title: string
    }
    DisclaimerInput: {
      description: string
      key: string
      valueType: string
    }
    EmptyResponse: Record<string, never>
    EnumObject: {
      children?: components['schemas']['EnumObject'][]
      name: string
      value: string
    }
    Error: {
      code: string
      message: string
    }
    /**
     * @description Частота показов в рамках периода
     * @enum {integer}
     */
    FrequencyCount: 0 | 1 | 2 | 3 | 5
    /**
     * @description Период частотного ограничения
     * @enum {string}
     */
    FrequencyPeriod: 'no_limit' | 'day' | 'week' | 'month'
    /** @description Правило частотного ограничения */
    FrequencyRule: {
      /** @description Количество показов за указанный период */
      count: number
      period: components['schemas']['FrequencyPeriod']
    }
    Group: {
      /** @description ID аккаунта */
      accountID?: number
      /** @description Доступные действия с группой */
      actions?: string[]
      /** @description Расписание активности по дням */
      activitySchedule?: {
        friday?: components['schemas']['ActivityScheduleHours']
        monday?: components['schemas']['ActivityScheduleHours']
        saturday?: components['schemas']['ActivityScheduleHours']
        sunday?: components['schemas']['ActivityScheduleHours']
        thursday?: components['schemas']['ActivityScheduleHours']
        tuesday?: components['schemas']['ActivityScheduleHours']
        wednesday?: components['schemas']['ActivityScheduleHours']
      }
      /** @description ID рекламодателя */
      advertiserID?: number
      audienceType?: components['schemas']['AudienceType']
      /** @description Бюджет группы в рублях с НДС */
      budget?: number
      budgetFrequency?: components['schemas']['BudgetFrequency']
      /** @description Бюджет группы в копейках с НДС */
      budgetKopeks?: number
      /** @description ID кампании */
      campaignID?: number
      campaignType?: components['schemas']['CampaignType']
      /**
       * Format: date-time
       * @description Дата создания группы
       */
      createdAt?: string
      format?: components['schemas']['GroupFormat']
      /** @description Частота показов в рамках периода */
      frequencyCount: number
      frequencyPeriod?: components['schemas']['FrequencyPeriod']
      /** @description Правила частотного ограничения */
      frequencyRules: components['schemas']['FrequencyRule'][]
      /** @description Есть ли в группе креатив */
      haveCreative?: boolean | null
      /** @description ID группы */
      id?: number
      /** @description ID менеджера, ответственного за кампанию (userID) */
      managerID?: number
      /** @description Название группы */
      name?: string
      pace?: components['schemas']['Paces']
      paymentModel?: components['schemas']['CampaignPaymentModel']
      /**
       * Format: date-time
       * @description Конец периода кампании
       */
      periodEndAt?: string | null
      /**
       * Format: date-time
       * @description Начало периода кампании
       */
      periodStartAt?: string | null
      /** @description Таймзона периода показов */
      periodTimezone?: string
      /** @description Цена в рублях с НДС */
      price?: number
      priceControl?: components['schemas']['GroupPriceControl']
      /** @description Цена в копейках с НДС */
      priceKopeks?: number
      scheduleType?: components['schemas']['ScheduleType']
      /** @description Запускать как можно скорее */
      startASAP: boolean
      status?: components['schemas']['GroupsStatus']
      statusReasons: components['schemas']['StatusReasons']
      /** @description ID возрастных сегментов */
      targetingAgeIDs?: number[]
      /** @description ID аудиторий */
      targetingAudienceIDs?: string[]
      /** @description ID семейного статуса */
      targetingFamilyStatusIDs?: number[]
      /** @description ID пола */
      targetingGenderIDs?: number[]
      /** @description ID доходных сегментов */
      targetingIncomeIDs?: number[]
      /** @description ID интересов */
      targetingInterestIDs?: string[]
      /** @description ID локаций */
      targetingLocationIDs?: number[]
      /** @description ID родительского статуса */
      targetingParentStatusIDs?: number[]
      topStatusReason: components['schemas']['TopStatusReason']
      /**
       * Format: date-time
       * @description Дата обновления группы
       */
      updatedAt?: string
      /** @description ID пользователя, создавшего группу */
      userID?: number
    }
    /**
     * @description Формат группы объявлений
     * @enum {string}
     */
    GroupFormat:
      'mediaRoot' | 'mediaSellerProfile' | 'mediaPremium' | 'media' | 'native' | 'htmlPremium' | 'html' | 'video'
    /**
     * @description Контроль цены группы
     * @enum {string}
     */
    GroupPriceControl: 'manual' | 'auto'
    GroupReferenceData: {
      bannerFormat: components['schemas']['EnumObject'][]
      budgetThresholds: components['schemas']['ThresholdItem'][]
      priceThresholds: components['schemas']['ThresholdItem'][]
      targetingAgeIDs: components['schemas']['IdNameObject'][]
      targetingAudienceIDs: components['schemas']['StringIdNameObject'][]
      targetingFamilyStatusIDs: components['schemas']['IdNameObject'][]
      targetingGenderIDs: components['schemas']['IdNameObject'][]
      targetingIncomeIDs: components['schemas']['IdNameObject'][]
      targetingInterestIDs: components['schemas']['EnumObject'][]
      targetingLocationIDs: components['schemas']['IdNameObject'][]
      targetingParentStatusIDs: components['schemas']['IdNameObject'][]
    }
    /** @description Статистика группы */
    GroupStatistic: {
      /** @description Статистика в разбивке по дням */
      data: components['schemas']['StatsData'][]
      /** @description ID группы */
      id: number
      /** @description Название группы */
      name: string
      totalData: components['schemas']['StatsData']
    }
    GroupsFilter: {
      /** @description Список ID рекламодателей */
      advertisers?: number[] | null
      /** @description Список ID кампаний */
      campaignIDs?: number[] | null
      /** @description Список ID групп */
      ids?: number[] | null
      /** @description Список ID менеджеров */
      managers?: number[] | null
      /** @description Скорости показов */
      paces?: components['schemas']['Paces'][] | null
      /** @description Список моделей оплаты */
      paymentModels?: components['schemas']['CampaignPaymentModel'][] | null
      /** @description Список статусов групп */
      statuses?: components['schemas']['GroupsStatus'][] | null
      timeFrame?: components['schemas']['DateRange']
    }
    /**
     * @description Статус группы объявлений
     * @enum {string}
     */
    GroupsStatus:
      | 'draft'
      | 'in_moderation'
      | 'moderation_failed'
      | 'will_launch_soon'
      | 'active'
      | 'will_stop_soon'
      | 'pausing'
      | 'paused'
      | 'unpausing'
      | 'stopped'
      | 'finished'
      | 'archived'
    IdNameObject: {
      children?: components['schemas']['IdNameObject'][]
      id: number
      name: string
    }
    KKTUFieldValue: {
      /** @description Внутренний ключ поля */
      key: string
      /** @description Значение поля, приведённое к строке */
      value: string
    }
    KktuItem: {
      category: string
      code: string
      level: number
      subCategory: string
      title: string
    }
    /**
     * @deprecated
     * @description Устаревшее представление юридических данных. Используйте kktuFields.
     */
    LegalInfo: {
      /** @description Возрастное ограничение */
      ageRestriction?: number | null
      /** @description Юридическое описание */
      description?: string | null
      /** @description ККТУ */
      kktu?: string
      /** @description Примечания */
      notes?: string | null
    }
    /**
     * @description Роль ЮЛ
     * @enum {string}
     */
    LegalRole: 'rd' | 'ra' | 'rr'
    /**
     * @description Тип ЮЛ
     * @enum {string}
     */
    LegalType: 'ul' | 'ip'
    ObjectSize: {
      height: number
      width: number
    }
    /**
     * @description Скорости показов
     * @enum {string}
     */
    Paces: 'asap' | 'even'
    /**
     * @description Таймзона периода показов
     * @enum {string}
     */
    PeriodTimezone:
      | 'Europe/Kaliningrad'
      | 'Europe/Moscow'
      | 'Europe/Samara'
      | 'Asia/Yekaterinburg'
      | 'Asia/Omsk'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Irkutsk'
      | 'Asia/Yakutsk'
      | 'Asia/Vladivostok'
      | 'Asia/Magadan'
      | 'Asia/Kamchatka'
    /**
     * @description Тип расписания показов
     * @enum {string}
     */
    ScheduleType: 'always' | 'weekdays9To20' | 'custom'
    ShortAccount: {
      id: number
      shortName: string
    }
    ShortAccountWithBalance: {
      account: components['schemas']['ShortAccount']
      balance: components['schemas']['V1GetAccountBalanceByIdOut']
    }
    ShortAccountWithContract: {
      account: components['schemas']['ShortAccount']
      contract?: components['schemas']['ContractForChildAccount']
    }
    /** @description Данные статистики за период */
    StatsData: {
      /** @description Количество кликов */
      clicks: number
      /**
       * Format: float
       * @description Средняя стоимость CPC
       */
      cpc: number
      /**
       * Format: float
       * @description Средняя стоимость CPM
       */
      cpm: number
      /**
       * Format: float
       * @description CTR (Click-Through Rate)
       */
      ctr: number
      /**
       * Format: float
       * @description Доля просмотров видео на 25%
       */
      q25?: number | null
      /**
       * Format: float
       * @description Доля просмотров видео на 50%
       */
      q50?: number | null
      /**
       * Format: float
       * @description Доля просмотров видео на 75%
       */
      q75?: number | null
      /** @description Потрачено денег в рублях */
      spend: number
      /** @description Потрачено бонусов в рублях */
      spendBonus: number
      /** @description Потрачено бонусов в копейках */
      spendBonusKopeks?: number
      /** @description Потрачено денег в копейках */
      spendKopeks?: number
      /**
       * Format: date-time
       * @description Временная метка (гранулярность по дням). Заполняется в data[] и отсутствует в totalData.
       */
      timestamp?: string | null
      /** @description Количество просмотров видео на 100% */
      videoViews100?: number | null
      /** @description Количество просмотров видео на 25% */
      videoViews25?: number | null
      /** @description Количество просмотров видео на 50% */
      videoViews50?: number | null
      /** @description Количество просмотров видео на 75% */
      videoViews75?: number | null
      /** @description Количество показов */
      views: number
      /**
       * Format: float
       * @description Доля просмотров видео на 100%
       */
      vtr?: number | null
    }
    /**
     * @description Все коды причин текущего статуса. При отсутствии причин возвращается []. Порядок не отражает приоритет; главная причина передаётся в topStatusReason. Возможны новые коды причин.
     * @example [
     *       "manual",
     *       "insufficient_funds"
     *     ]
     */
    StatusReasons: string[]
    StringIdNameObject: {
      id: string
      name: string
    }
    TemplateData: {
      fields: components['schemas']['TemplateField'][]
      isOptional: boolean
      logoRatio: components['schemas']['ObjectSize'][]
      mediaRatio: components['schemas']['ObjectSize']
      platforms: string[]
      templateID: number
    }
    TemplateField: {
      canOverride?: boolean | null
      defaultValue?: string | null
      fieldType: string
      isRequired?: boolean | null
      key: string
    }
    ThresholdItem: {
      groupFormat: components['schemas']['GroupFormat']
      /** @description Минимальное значение в рублях */
      value: number
      /** @description Минимальное значение в копейках */
      valueKopeks: number
    }
    /**
     * @description Главная причина текущего статуса, определённая API. Если главная причина не определена, возвращается пустая строка, даже если statusReasons не пуст. Возможны новые коды причин.
     * @example insufficient_funds
     */
    TopStatusReason: string
    User: {
      /** @description Флаг, показывающий, заходил ли пользователь в аккаунт */
      hasLoggedIn: boolean
      /** @description ID пользователя */
      id: number
      role: components['schemas']['UserRole']
    }
    /**
     * @description Роль пользователя в рекламном кабинете
     * @enum {string}
     */
    UserRole: 'admin' | 'viewer'
    /** @description Payload добавления пользователя в аккаунт */
    V1AddUserIn: {
      role: components['schemas']['UserRole']
      /** @description ID пользователя авито */
      userId: number
    }
    /** @description Payload для изменения бюджета группы */
    V1ChangeBudgetIn: {
      /** @description Новый бюджет группы в рублях с НДС */
      budget: number
    }
    /** @description Payload для изменения ставки группы */
    V1ChangePriceIn: {
      /** @description Новая ставка группы в рублях с НДС */
      price: number
    }
    /** @description Группа и список креативов для копирования */
    V1CopyCampaignGroup: {
      /** @description Список ID копируемых креативов. Если не передано или передано пустым списком, копируется только группа */
      creativeIDs?: number[]
      /** @description ID копируемой группы */
      groupID: number
    }
    /** @description Payload копирования кампании аккаунта */
    V1CopyCampaignIn: {
      /** @description ID копируемой кампании */
      campaignID: number
      /** @description Группы и креативы, которые нужно скопировать вместе с кампанией. Если не передано или передано пустым списком, копируется только кампания */
      groups?: components['schemas']['V1CopyCampaignGroup'][]
    }
    V1CopyCampaignOut: {
      /** @description ID новой кампании */
      campaignID: number
    }
    /** @description Payload копирования креатива аккаунта */
    V1CopyCreativeIn: {
      /** @description ID копируемого креатива */
      creativeID: number
    }
    V1CopyCreativeOut: {
      /** @description ID нового креатива */
      creativeID: number
    }
    /** @description Payload копирования группы аккаунта */
    V1CopyGroupIn: {
      /** @description Список ID креативов, которые нужно скопировать вместе с группой. Если не передано или передано пустым списком, копируется только группа */
      creativeIDs?: number[]
      /** @description ID копируемой группы */
      groupID: number
    }
    V1CopyGroupOut: {
      /** @description ID новой группы */
      newGroupID: number
    }
    /** @description Payload создания аккаунта */
    V1CreateAccountIn: {
      /** @description Фактический адрес. Если не передан, используется legalAddress. */
      actualAddress?: string | null
      /** @description Контактное лицо */
      contact: {
        /** @description ФИО контактного лица */
        name: string
        /** @description Контактный телефон */
        phone: string
      }
      /** @description ИНН организации или ИП */
      inn: string
      /** @description КПП организации */
      kpp?: string | null
      /** @description Юридический адрес или адрес регистрации */
      legalAddress: string
      legalType: components['schemas']['LegalType']
      /** @description Полное наименование организации или ИП */
      longName: string
      /** @description ОГРН или ОГРНИП */
      ogrn: string
      /** @description Краткое название аккаунта */
      shortName: string
    }
    V1CreateAccountOut: {
      accountID: number
      /** @description Предупреждения о частично невыполненных sandbox-операциях. Если массив пустой, аккаунт подготовлен полностью. */
      warnings: string[]
    }
    /** @description Payload создания рекламодателя */
    V1CreateAdvertiserIn: {
      /** @description Фактический адрес. Если не передан, используется legalAddress. Пример корректного адреса: 127015, г. Москва, ул. Лесная, д. 7 */
      actualAddress?: string | null
      /** @description ИНН организации */
      inn: string
      /** @description КПП организации */
      kpp?: string | null
      /** @description Юридический адрес или адрес регистрации. Пример корректного адреса: 127015, г. Москва, ул. Лесная, д. 7 */
      legalAddress: string
      legalRole: components['schemas']['LegalRole']
      legalType: components['schemas']['LegalType']
      /** @description Полное наименование организации или ИП */
      longName: string
      /** @description ОГРН или ОГРНИП */
      ogrn: string
      /** @description Краткое наименование организации или ИП */
      shortName: string
    }
    V1CreateAdvertiserOut: {
      id: number
    }
    /** @description Payload запроса на создание кампании */
    V1CreateCampaignIn: {
      /** @description ID дополнительного соглашения */
      additionalAgreementID?: number | null
      /** @description ID рекламодателя. Может быть null, если для аккаунта включен флаг sSelfAdvertisingEnabled=true (используется 1 кейс) */
      advertiserID?: number | null
      /** @description Цели кампании. Пока поддерживается только пустой массив */
      campaignGoals: string[]
      campaignStrategy: components['schemas']['CampaignStrategy']
      campaignType: components['schemas']['CreateCampaignType']
      /** @description ID договора. Может быть null, если advertiserID=null. Если advertiserID задан, поле обязательно и принимает контракт 2 или 3 кейса */
      contractID?: number | null
      goalType: components['schemas']['CampaignGoalType']
      /** @description Посадочная страница. Пока поле не сохраняется */
      landingPage?: string | null
      landingType: components['schemas']['CampaignLandingType']
      /** @description ID менеджера, ответственного за кампанию (userID) */
      managerID: number
      /** @description Название кампании */
      name: string
      paymentModel: components['schemas']['CreateCampaignPaymentModel']
    }
    V1CreateCampaignOut: {
      id: number
    }
    /**
     * @description Payload запроса на создание договора.
     *     Базово обязательны `description`, `advertiserId`, `type`.
     *     Для `type = service` дополнительно передаются `subject`, `isReportingRequired`, `date`, `number`; `cid` не передаётся.
     *     Для `type = intermediary` дополнительно передаются `subject`, `object`, `isReportingRequired`, `isFundsAllocationToPrincipal`, `date`, `number`; `cid` не передаётся.
     *     Для `type = external` передаётся `cid`; `parentId` не передаётся.
     *     Дополнительное соглашение создаётся через `parentId` к родительскому договору, без отдельного `type = additional`.
     *     Если `parentId` задан, `intermediary` не передаётся; если `parentId` не задан, `intermediary` обязателен.
     */
    V1CreateContractIn: {
      /** @description Id рекламодателя. Указываем только рекламодателей которые не являются аккаунтом. Если рекламодатель и аккаунт одно и тоже ЮЛ, договор создавать не надо */
      advertiserId: number
      /** @description CID внешнего договора, заполняется только для type = external. */
      cid?: string | null
      /**
       * Format: date
       * @description Дата в формате YYYY-MM-DD. Можно не передавать только для type = external.
       */
      date?: string | null
      description: components['schemas']['ContractCounterpartyType']
      intermediary?: components['schemas']['CreteIntermediaryIn']
      /** @description Денежные средства на размещение рекламы идут в сторону принципала */
      isFundsAllocationToPrincipal?: boolean
      /** @description На исполнителе лежит обязанность отчитываться по креативам */
      isReportingRequired?: boolean
      /** @description Номер договора. Можно не передавать только для type = external. */
      number?: string | null
      object?: components['schemas']['ContractAction']
      /** @description ID родительского договора для доп. соглашения */
      parentId?: number | null
      subject?: components['schemas']['ContractSubject']
      type: components['schemas']['ContractType']
    }
    V1CreateContractOut: {
      id: number
    }
    /** @description Payload запроса на создание группы */
    V1CreateGroupIn: {
      activitySchedule?: components['schemas']['CreateGroupActivitySchedule']
      bannerFormat: components['schemas']['BannerFormat']
      /** @description Бюджет группы в рублях с НДС */
      budget: number
      budgetFrequency: components['schemas']['BudgetFrequency']
      /** @description ID кампании */
      campaignID: number
      frequencyCount: components['schemas']['FrequencyCount']
      frequencyPeriod: components['schemas']['FrequencyPeriod']
      /** @description Правила частотного ограничения. Если передано, используется как основной формат; frequencyCount/frequencyPeriod сохраняются для обратной совместимости */
      frequencyRules?: components['schemas']['FrequencyRule'][] | null
      /** @description Название группы */
      name: string
      pace: components['schemas']['Paces']
      /**
       * Format: date-time
       * @description Окончание периода показов в формате RFC3339, например 2026-12-31T23:59:59+03:00
       */
      periodEndAt?: string | null
      /**
       * Format: date-time
       * @description Начало периода показов в формате RFC3339, например 2026-07-01T10:00:00+03:00
       */
      periodStartAt?: string | null
      periodTimezone: components['schemas']['PeriodTimezone']
      /** @description Ставка в рублях с НДС */
      price: number
      priceControl: components['schemas']['GroupPriceControl']
      scheduleType: components['schemas']['ScheduleType']
      /** @description Запускать как можно скорее */
      startASAP: boolean
      /** @description ID возрастных сегментов */
      targetingAgeIDs: number[]
      /** @description ID family status сегментов */
      targetingFamilyStatusIDs?: number[] | null
      /** @description ID пола */
      targetingGenderIDs: number[]
      /** @description ID доходных сегментов */
      targetingIncomeIDs: number[]
      /** @description ID интересов */
      targetingInterestIDs: string[]
      /** @description ID локаций */
      targetingLocationIDs: number[]
      /** @description ID parent status сегментов */
      targetingParentStatusIDs?: number[] | null
    }
    V1CreateGroupOut: {
      /** @description ID созданной группы */
      id: number
    }
    /** @description Payload создания аккаунта */
    V1CreateNonPayerAccountIn: {
      /** @description Флаг разрешающий рекламировать родительский аккаунт. Если вам надо рекламировать нового рекламодателя без возможности рекламировать родителя, выставлять - false */
      isSelfAdvertisingEnabled: boolean | null
      /** @description Краткое название дочернего аккаунта, меньше 64 символов */
      shortName: string
    }
    V1CreateNonPayerAccountOut: {
      accountID: number
      clientKey: string
      clientSecret: string
    }
    /** @description Payload удаления кампаний аккаунта */
    V1DeleteCampaignsIn: {
      /** @description Список ID кампаний */
      campaignIDs: number[]
    }
    /** @description Payload удаления креативов аккаунта */
    V1DeleteCreativesIn: {
      /** @description Список ID креативов */
      creativeIDs: number[]
    }
    /** @description Payload удаления групп аккаунта */
    V1DeleteGroupsIn: {
      /** @description Список ID групп */
      groupIDs: number[]
    }
    V1GetAccountBalanceByIdOut: {
      /** @description Баланс аккаунта  в рублях */
      balance: number
      /** @description Баланс аккаунта в копейках */
      balanceKopeks: number
      /** @description Баланс бонусов на аккаунте в рублях */
      bonusBalance: number
      /** @description Баланс бонусов на аккаунте в копейках */
      bonusBalanceKopeks: number
    }
    V1GetAccountByIdOut: {
      account?: components['schemas']['Account']
    }
    /** @description Payload запроса на получение списка рекламодателей */
    V1GetAdvertisersListIn: {
      filter: components['schemas']['AdvertiserFilter']
      /**
       * @description Количество записей на странице
       * @default 20
       */
      limit: number
      /**
       * @description Номер страницы
       * @default 1
       */
      page: number
    }
    V1GetAdvertisersListOut: {
      advertisers: components['schemas']['Advertiser'][]
      total: number
    }
    V1GetCampaignByIdWithFieldsOut: {
      campaign: components['schemas']['Campaign']
      editableFields: components['schemas']['CampaignFieldName'][]
      warnings: string[]
    }
    /** @description Request body для запроса статистики по кампании. Максимальный период между dateFrom и dateTo — 100 дней. */
    V1GetCampaignStatisticIn: {
      /**
       * Format: date
       * @description Дата начала периода в формате YYYY-MM-DD
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата окончания периода в формате YYYY-MM-DD
       */
      dateTo: string
    }
    /** @description Статистика по кампании */
    V1GetCampaignStatisticOut: {
      campaign: components['schemas']['CampaignStatistic']
      /** @description Статистика по креативам кампании */
      creatives: components['schemas']['CreativeStatistic'][]
      /** @description Статистика по группам кампании */
      groups: components['schemas']['GroupStatistic'][]
    }
    /** @description Payload запроса на получение списка кампаний */
    V1GetCampaignsListIn: {
      filter: components['schemas']['CampaignsFilter']
      /**
       * @description Количество записей на странице
       * @default 20
       */
      limit: number
      /**
       * @description Номер страницы
       * @default 1
       */
      page: number
    }
    V1GetCampaignsListOut: {
      campaigns: components['schemas']['Campaign'][]
      total: number
    }
    V1GetChildAccountsListOut: {
      children: components['schemas']['ShortAccountWithContract'][]
    }
    V1GetChildAccountsWithBalancesListOut: {
      children: components['schemas']['ShortAccountWithBalance'][]
    }
    /** @description Payload запроса на получение списка договоров */
    V1GetContractsListIn: {
      filter: components['schemas']['ContractsFilter']
      /**
       * @description Количество записей на странице
       * @default 20
       */
      limit: number
      /**
       * @description Номер страницы
       * @default 1
       */
      page: number
    }
    V1GetContractsListOut: {
      contracts: components['schemas']['Contract'][]
      total: number
    }
    /** @description Payload запроса на получение списка креативов */
    V1GetCreativesListIn: {
      filter: components['schemas']['CreativesFilter']
      /**
       * @description Количество записей на странице
       * @default 20
       */
      limit: number
      /**
       * @description Номер страницы
       * @default 1
       */
      page: number
    }
    V1GetCreativesListOut: {
      creatives: components['schemas']['Creative'][]
      total: number
    }
    /** @description Request body для запроса статистики по креативам кампании. Максимальный период между dateFrom и dateTo — 100 дней. */
    V1GetCreativesStatisticIn: {
      /** @description Список ID креативов для получения статистики */
      creativeIDs: number[]
      /**
       * Format: date
       * @description Дата начала периода в формате YYYY-MM-DD
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата окончания периода в формате YYYY-MM-DD
       */
      dateTo: string
    }
    /** @description Статистика по креативам кампании */
    V1GetCreativesStatisticOut: {
      /** @description Статистика по креативам кампании */
      creatives: components['schemas']['CreativeStatistic'][]
    }
    V1GetGroupReferenceDataOut: {
      referenceData: components['schemas']['GroupReferenceData']
    }
    /** @description Payload запроса на получение списка кампаний */
    V1GetGroupsListIn: {
      filter: components['schemas']['GroupsFilter']
      /**
       * @description Количество записей на странице
       * @default 20
       */
      limit: number
      /**
       * @description Номер страницы
       * @default 1
       */
      page: number
    }
    V1GetGroupsListOut: {
      groups: components['schemas']['Group'][]
      total: number
    }
    /** @description Request body для запроса статистики по группам кампании. Максимальный период между dateFrom и dateTo — 100 дней. */
    V1GetGroupsStatisticIn: {
      /**
       * Format: date
       * @description Дата начала периода в формате YYYY-MM-DD
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата окончания периода в формате YYYY-MM-DD
       */
      dateTo: string
      /** @description Список ID групп для получения статистики */
      groupIDs: number[]
    }
    /** @description Статистика по группам кампании */
    V1GetGroupsStatisticOut: {
      /** @description Статистика по группам кампании */
      groups: components['schemas']['GroupStatistic'][]
    }
    V1GetHtmlOut: {
      /** @description Причина ошибки (заполнено если status = ERROR) */
      errorReason?: string | null
      /** @description ID HTML */
      id: string
      /** @enum {string} */
      status: 'UPLOADING' | 'READY' | 'ERROR'
      /** @description URL HTML файла */
      url?: string | null
    }
    V1GetImageOut: {
      /** @description ID изображения */
      id: number
      /** @description URL изображения */
      url: string
    }
    V1GetLegalAttachmentsOut: {
      /** @description ID файла */
      id: string
      /** @description Публичный URL файла */
      publicUrl: string
    }
    V1GetUsersListByAccountOut: {
      total: number
      users: components['schemas']['User'][]
    }
    V1GetVideoOut: {
      /** @description Причина ошибки обработки видео */
      errorReason?: string | null
      /** @description ID видео */
      id: string
      /** @description Статус видео */
      status: string
      /** @description URL превью */
      thumbnailUrl?: string | null
      /** @description Видео-превью от хостинга */
      thumbnailVideoUrl?: string | null
      /** @description Название видео */
      title: string
      /** @description URL видео */
      videoUrl?: string | null
    }
    /** @description Payload запуска кампаний аккаунта */
    V1LaunchCampaignsIn: {
      /** @description Список ID кампаний */
      campaignIDs: number[]
    }
    /** @description Payload запуска группы аккаунта */
    V1LaunchGroupIn: {
      /** @description ID группы */
      groupID: number
    }
    /** @description Payload паузы кампаний */
    V1PauseCampaignsIn: {
      /** @description Список ID кампаний для паузы */
      campaignIDs: number[]
    }
    /** @description Payload паузы креативов аккаунта */
    V1PauseCreativesIn: {
      /** @description Список ID креативов */
      creativeIDs: number[]
    }
    /** @description Payload паузы групп аккаунта */
    V1PauseGroupsIn: {
      /** @description Список ID групп */
      groupIDs: number[]
    }
    V1ReferenceDataCreateCreativeOut: {
      classifier: components['schemas']['KktuItem'][]
      disclaimers: components['schemas']['Disclaimer'][]
      templates: components['schemas']['TemplateData'][]
    }
    /** @description Payload изменение роли пользователя в аккаунте */
    V1SetUserRoleIn: {
      role: components['schemas']['UserRole']
      /** @description ID пользователя авито */
      userId: number
    }
    /** @description Payload остановки кампаний */
    V1StopCampaignsIn: {
      /** @description Список ID кампаний для остановки */
      campaignIDs: number[]
    }
    /** @description Payload Перевода денег между аккаунтом родителем и дочками неплательщиками */
    V1TransferBonusIn: {
      /** @description accountId на который перевести */
      accountIdTo: number
      /** @description Сумма бонусов, не меньше 1 бонуса */
      amount: number
    }
    /** @description Payload Перевода денег между аккаунтом родителем и дочками неплательщиками */
    V1TransferFundsIn: {
      /** @description accountId на который перевести */
      accountIdTo: number
      /** @description Сумма перевода в рублях, не меньше 1 рубля */
      amount: number
    }
    /** @description Payload снятия кампаний с паузы */
    V1UnpauseCampaignsIn: {
      /** @description Список ID кампаний для снятия с паузы */
      campaignIDs: number[]
    }
    /** @description Payload снятия креативов аккаунта с паузы */
    V1UnpauseCreativesIn: {
      /** @description Список ID креативов */
      creativeIDs: number[]
    }
    /** @description Payload снятия групп аккаунта с паузы */
    V1UnpauseGroupsIn: {
      /** @description Список ID групп */
      groupIDs: number[]
    }
    V1UploadHtmlOut: {
      /** @description ID загруженного HTML */
      id: string
    }
    V1UploadImageOut: {
      /** @description ID загруженного изображения */
      id: number
      /** @description URL изображения */
      url: string
    }
    V1UploadLegalAttachmentsOut: {
      /** @description ID загруженного документа */
      id: string
      /** @description Имя файла */
      name: string
      /** @description Публичный URL файла */
      url: string
    }
    V1UploadVideoOut: {
      /** @description ID загруженного видео */
      id: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  V1GetAccountByID: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetAccountByIdOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1CreateAccount: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateAccountIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1CreateAccountOut']
        }
      }
      /** @description Аккаунт создан, но часть sandbox-данных не подготовилась */
      207: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1CreateAccountOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1AddUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1AddUserIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetAdvertisersList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetAdvertisersListIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetAdvertisersListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetAccountBalanceByID: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetAccountBalanceByIdOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1TransferBonus: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1TransferBonusIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetCampaignsList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetCampaignsListIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetCampaignsListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetCreativesStatistic: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID аккаунта */
        accountID: number
        /** @description ID кампании */
        campaignID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetCreativesStatisticIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetCreativesStatisticOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Кампания не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetGroupsStatistic: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID аккаунта */
        accountID: number
        /** @description ID кампании */
        campaignID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetGroupsStatisticIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetGroupsStatisticOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Кампания не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetCampaignStatistic: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID аккаунта */
        accountID: number
        /** @description ID кампании */
        campaignID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetCampaignStatisticIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetCampaignStatisticOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Кампания не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetChildAccountsList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetChildAccountsListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetChildAccountsWithBalancesList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetChildAccountsWithBalancesListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetContractsList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetContractsListIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetContractsListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1CreateAdvertiser: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateAdvertiserIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1CreateAdvertiserOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1CreateContract: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateContractIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1CreateContractOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1CreateNonPayerAccount: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1CreateNonPayerAccountIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1CreateNonPayerAccountOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetCreativesList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetCreativesListIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetCreativesListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1DeleteUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
        userID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1TransferFunds: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1TransferFundsIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1ChangeBudget: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
        groupID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1ChangeBudgetIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт или группа не найдены */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Конфликт версий группы */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1ChangePrice: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
        groupID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1ChangePriceIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт или группа не найдены */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Конфликт версий группы */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetGroupsList: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1GetGroupsListIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetGroupsListOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Аккаунт не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1SetUserRole: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['V1SetUserRoleIn']
      }
    }
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmptyResponse']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
  V1GetUsersListByAccount: {
    parameters: {
      query?: never
      header?: never
      path: {
        accountID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ok */
      200: {
        headers: {
          /** @description Остаток API-баллов после выполнения запроса */
          'Api-Point-Balance'?: number
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['V1GetUsersListByAccountOut']
        }
      }
      /** @description Некорректный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Не авторизован */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Ошибка сервера */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
      /** @description Сервис недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Error']
        }
      }
    }
  }
}
