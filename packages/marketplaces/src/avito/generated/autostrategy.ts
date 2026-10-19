// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/autostrategy/v1/budget': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Расчет бюджета кампании */
    post: operations['getAutostrategyBudget']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autostrategy/v1/campaign/create': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Создание новой кампании */
    post: operations['createAutostrategyCampaign']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autostrategy/v1/campaign/edit': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Редактирование кампании
     * @description **Возможно редактирование лишь только кампаний, имеющих тип `AS`**
     */
    post: operations['editAutostrategyCampaign']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autostrategy/v1/campaign/info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Получение полной информации о кампании */
    post: operations['getAutostrategyCampaignInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autostrategy/v1/campaign/stop': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Остановка кампании */
    post: operations['stopAutostrategyCampaign']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autostrategy/v1/campaigns': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение списка кампаний
     * @description **Получение кампаний текущего пользователя с учетом фильтров**
     */
    post: operations['getAutostrategyCampaigns']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autostrategy/v1/stat': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Получение статистики по кампании */
    post: operations['getAutostrategyStat']
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
    /** @description Бюджет кампании */
    Budget: {
      /**
       * @description Максимальный бюджет кампании в рублях.<br/>**Возвращается только для типа кампании `AP`**
       * @example {
       *       "bonus": 1000,
       *       "callsFrom": 6,
       *       "callsTo": 10,
       *       "real": 100000,
       *       "total": 101000,
       *       "viewsFrom": 50,
       *       "viewsTo": 80
       *     }
       */
      maximal?: {
        /** @description Значение бюджета в рублях, которое можно списать за счет бонусов */
        bonus?: number | null
        /** @description Нижняя граница предсказания звонков (только для типа кампании Автопилот) */
        callsFrom?: number | null
        /** @description Верхняя граница предсказания звонков (только для типа кампании Автопилот) */
        callsTo?: number | null
        /** @description Бюджет в рублях */
        real?: number | null
        /** @description Суммарный бюджет в рублях */
        total?: number
        /** @description Нижняя граница предсказания просмотров (только для типа кампании Автопилот) */
        viewsFrom?: number | null
        /** @description Верхняя граница предсказания просмотров (только для типа кампании Автопилот) */
        viewsTo?: number | null
      } | null
      /**
       * @description Минимальный возможный бюджет кампании в рублях
       * @example {
       *       "bonus": 10,
       *       "callsFrom": 1,
       *       "callsTo": 3,
       *       "real": 1000,
       *       "total": 1010,
       *       "viewsFrom": 10,
       *       "viewsTo": 20
       *     }
       */
      minimal?: {
        /** @description Значение бюджета в рублях, которое можно списать за счет бонусов */
        bonus?: number | null
        /** @description Нижняя граница предсказания звонков (только для типа кампании Автопилот) */
        callsFrom?: number | null
        /** @description Верхняя граница предсказания звонков (только для типа кампании Автопилот) */
        callsTo?: number | null
        /** @description Бюджет в рублях */
        real?: number | null
        /** @description Суммарный бюджет в рублях */
        total?: number
        /** @description Нижняя граница предсказания просмотров (только для типа кампании Автопилот) */
        viewsFrom?: number | null
        /** @description Верхняя граница предсказания просмотров (только для типа кампании Автопилот) */
        viewsTo?: number | null
      }
      /** @description Ценовые диапазоны покрытия склада (**только для типа кампании `AP`**) и предсказания. */
      priceRanges?: {
        /**
         * @description Нижняя граница предсказания звонков
         * @example 4
         */
        callsFrom: number
        /**
         * @description Верхняя граница предсказания звонков
         * @example 7
         */
        callsTo: number
        /**
         * @description Процент покрытия склада<br/>**Возвращается только для типа кампании `AP`**
         * @example 95
         */
        percent?: number
        /**
         * @description Начало ценового диапазона
         * @example 10000
         */
        priceFrom: number
        /**
         * @description Конец ценового диапазона
         * @example 20000
         */
        priceTo: number
        /**
         * @description Нижняя граница предсказания просмотров
         * @example 50
         */
        viewsFrom: number
        /**
         * @description Верхняя граница предсказания просмотров
         * @example 80
         */
        viewsTo: number
      }[]
      /**
       * @description Рекомендуемый бюджет кампании в рублях
       * @example {
       *       "bonus": 100,
       *       "callsFrom": 4,
       *       "callsTo": 7,
       *       "real": 10000,
       *       "total": 10100,
       *       "viewsFrom": 30,
       *       "viewsTo": 50
       *     }
       */
      recommended?: {
        /** @description Значение бюджета в рублях, которое можно списать за счет бонусов */
        bonus?: number | null
        /** @description Нижняя граница предсказания звонков (только для типа кампании Автопилот) */
        callsFrom?: number | null
        /** @description Верхняя граница предсказания звонков (только для типа кампании Автопилот) */
        callsTo?: number | null
        /** @description Бюджет в рублях */
        real?: number | null
        /** @description Суммарный бюджет в рублях */
        total?: number
        /** @description Нижняя граница предсказания просмотров (только для типа кампании Автопилот) */
        viewsFrom?: number | null
        /** @description Верхняя граница предсказания просмотров (только для типа кампании Автопилот) */
        viewsTo?: number | null
      }
    } | null
    /** @description Кампания */
    Campaign: {
      /**
       * @description Оставшиеся средства от всего бюджета на продвижение кампании
       * @example 1000
       */
      balance?: number
      /**
       * @description Бюджет кампании в рублях
       * @example 10000
       */
      budget?: number
      /**
       * @description Идентификатор кампании
       * @example 3456432
       */
      campaignId?: number
      /**
       * @description Тип кампании. Возможные типы:<br/> `AS` - Автостратегия. Cтратегия расчитана на определенное количество автомобилей, которые находятся в продаже<br/> `AP` - Автопилот. Cтратегия расчитана на все автомобили, которые находятся в продаже<br/>
       * @example AS
       */
      campaignType?: string
      /**
       * Format: date-time
       * @description Время создания кампании
       * @example 2018-08-24T14:15:22Z
       */
      createTime?: string
      /**
       * @description Новое описание кампании
       * @example Toyota, Lexus, BMW, Audi 2019 и 2020 года выпуска
       */
      description?: string
      /**
       * Format: date-time
       * @description Время окончания кампании
       * @example 2020-08-24T14:15:22Z
       */
      finishTime?: string
      /**
       * @description Количество объявлений, которые продвигаются с помощью данной кампании
       * @example 10
       */
      itemsCount?: number
      /**
       * Format: date-time
       * @description Время начала кампании
       * @example 2019-08-24T14:15:22Z
       */
      startTime?: string
      /**
       * @description Статусы кампании для выборки. Возможные статусы:<br/> `0` - Черновик, дата старта сегодня или раньше, денег на балансе нет<br/> `1` - Активная кампания, участвует в аукционе<br/> `2` - Кампания приостановлена<br/> `3` - Кампания удалена<br/> `4` - Кампания остановлена<br/> `5` - Кампания запланирована, дата старта завтра или позже, на балансе есть деньги<br/>
       * @example 1
       */
      statusId?: number
      /**
       * @description Новое название кампании
       * @example Внедорожники Москвы и Санкт-Петербурга
       */
      title?: string
      /**
       * Format: date-time
       * @description Время последнего обновления кампании
       * @example 2020-01-01T14:15:22Z
       */
      updateTime?: string
      /**
       * @description Идентификатор пользователя-владельца кампании
       * @example 345632234325
       */
      userId?: number
      /**
       * @description Текущая версия кампании
       * @example 3
       */
      version?: number
    } | null
    /** @description Список кампаний */
    Campaigns: {
      /** @description Список кампаний, удовлетворяющих фильтрам, с учетом смещения и ограничения */
      campaigns?: components['schemas']['Campaign'][]
      /**
       * @description Общее количество кампаний, удовлетворяющих фильтрам
       * @example 10
       */
      totalCount?: number
    }
    ConflictError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки. Возможные ошибки:<br/> `2` - кампания не найдена<br/>
         * @example 2
         */
        code?: number
        /**
         * @description Сообщение об ошибке
         * @example campaign not found
         */
        message?: string
      }
    }
    CreateCampaignBadRequestError: {
      error?: {
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /** @description Ошибка валидации поля **budget** */
          budget?: string
          /** @description Ошибка валидации поля **budgetBonus** */
          budgetBonus?: string
          /** @description Ошибка валидации поля **budgetReal** */
          budgetReal?: string
          /** @description Ошибка валидации поля **campaignType** */
          campaignType?: string
          /** @description Ошибка валидации поля **description** */
          description?: string
          /** @description Ошибка валидации поля **finishTime** */
          finishTime?: string
          /** @description Ошибка валидации поля **items** */
          items?: string
          /** @description Ошибка валидации поля **startTime** */
          startTime?: string
          /** @description Ошибка валидации поля **title** */
          title?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    CreateCampaignConflictError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки. Возможные ошибки:<br/> `1` - общий бюджет меньше минимального<br/> `2` - реальный бюджет меньше минимального<br/> `3` - недостаточно бонусов на счете<br/> `5` - часть или все объявления уже продвигаются<br/> `6` - тариф не активен<br/> `7` - бюджет выше максимального<br/>
         * @example 6
         */
        code?: number
        /**
         * @description Сообщение об ошибке
         * @example create campaign failed
         */
        message?: string
      }
    }
    CreateCampaignRequestBody: {
      /**
       * @description Выделенный бюджет на кампанию в рублях.<br/>**Обязательно только для типа кампании `AS`**
       * @example 10000
       */
      budget?: number
      /**
       * @description Бонусная часть бюджета, в рублях, которая спишется засчет бонусов.<br/>**Может быть только для типа кампании `AP`**
       * @example 100
       */
      budgetBonus?: number
      /**
       * @description Часть бюджета на кампанию в рублях.<br/>**Обязательно только для типа кампании `AP`**
       * @example 10000
       */
      budgetReal?: number
      /**
       * @description Идентфикатор расчета бюджета из ответа ручки `/autostrategy/v1/budget`
       * @example 123
       */
      calcId?: number | null
      /**
       * @description Тип кампании. Возможные типы:<br/> `AS` - Автостратегия. Cтратегия расчитана на определенное количество автомобилей, которые находятся в продаже<br/> `AP` - Автопилот. Cтратегия расчитана на все автомобили, которые находятся в продаже<br/>
       * @example AS
       */
      campaignType: string
      /**
       * @description Описание кампании
       * @example Toyota, Lexus, BMW 2020 года выпуска
       */
      description?: string
      /**
       * Format: date-time
       * @description Время окончания кампании.<br/>**Обязательно только для типа кампании `AS`**
       * @example 2019-10-24T14:15:22Z
       */
      finishTime?: string
      /**
       * @description Список индентификаторов объявлений, которые будут продвигаться с помощью данной кампании.<br/>**Обязательно только для типа кампании `AS`**
       * @example [
       *       123123214,
       *       455454235,
       *       87746346
       *     ]
       */
      items?: number[]
      /**
       * Format: date-time
       * @description Время начала кампании.<br/>**Обязательно только для типа кампании `AS`**
       * @example 2019-08-24T14:15:22Z
       */
      startTime?: string
      /**
       * @description Название кампании
       * @example Внедорожники Москвы
       */
      title: string
    }
    EditCampaignBadRequestError: {
      error?: {
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /** @description Ошибка валидации поля **budget** */
          budget?: string
          /** @description Ошибка валидации поля **campaignId** */
          campaignId?: string
          /** @description Ошибка валидации поля **description** */
          description?: string
          /** @description Ошибка валидации поля **finishTime** */
          finishTime?: string
          /** @description Ошибка валидации поля **items** */
          items?: string
          /** @description Ошибка валидации поля **startTime** */
          startTime?: string
          /** @description Ошибка валидации поля **title** */
          title?: string
          /** @description Ошибка валидации поля **version** */
          version?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    EditCampaignConflictError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки. Возможные ошибки:<br/> `2` - кампания не найдена<br/>
         * @example 2
         */
        code?: number
        /**
         * @description Сообщение об ошибке
         * @example edit campaign failed
         */
        message?: string
      }
    }
    EditCampaignRequestBody: {
      /**
       * @description Новый бюджет кампании в рублях
       * @example 1000
       */
      budget?: number
      /**
       * @description Идентификатор расчета бюджета из ответа ручки `/autostrategy/v1/budget`
       * @example 123
       */
      calcId?: number | null
      /**
       * @description Идентификатор активной кампании
       * @example 3456432
       */
      campaignId: number
      /**
       * @description Новое описание кампании
       * @example Toyota, Lexus, BMW, Audi 2019 и 2020 года выпуска
       */
      description?: string
      /**
       * Format: date-time
       * @description Новое время окончания кампании
       * @example 2020-08-24T14:15:22Z
       */
      finishTime?: string
      /**
       * @description Новый список индентификаторов объявлений, которые будут продвигаться с помощью данной кампании
       * @example [
       *       123123214,
       *       455454235,
       *       87746346
       *     ]
       */
      items?: number[]
      /**
       * Format: date-time
       * @description Новое время начала кампании
       * @example 2019-08-24T14:15:22Z
       */
      startTime?: string
      /**
       * @description Новое название кампании
       * @example Внедорожники Москвы и Санкт-Петербурга
       */
      title?: string
      /**
       * @description Текущая версия кампании
       * @example 3
       */
      version: number
    }
    GetBudgetBadRequestError: {
      error?: {
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /** @description Ошибка валидации поля **campaignType** */
          campaignType?: string
          /** @description Ошибка валидации поля **finishTime** */
          finishTime?: string
          /** @description Ошибка валидации поля **items** */
          items?: string
          /** @description Ошибка валидации поля **startTime** */
          startTime?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    GetBudgetConflictError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки. Возможные ошибки:<br/> `1` - Слишком много объявлений для расчета бюджета<br/> `6` - Тариф не активен<br/>
         * @example 6
         */
        code?: number
        /**
         * @description Сообщение об ошибке
         * @example get budget failed
         */
        message?: string
      }
    }
    GetBudgetRequestBody: {
      /**
       * @description Тип кампании. Возможные типы:<br/> `AS` - Автостратегия. Cтратегия расчитана на определенное количество автомобилей, которые находятся в продаже<br/> `AP` - Автопилот. Cтратегия расчитана на все автомобили, которые находятся в продаже<br/>
       * @example AS
       */
      campaignType: string
      /**
       * Format: date-time
       * @description Время окончания кампании.<br/>**Обязательно только для типа кампании `AS`**
       * @example 2020-08-24T14:15:22Z
       */
      finishTime?: string
      /**
       * @description Список индентификаторов объявлений, которые будут продвигаться с помощью данной кампании. <br/>**Обязательно только для типа кампании `AS`**
       * @example [
       *       123123214,
       *       455454235,
       *       87746346
       *     ]
       */
      items?: number[]
      /**
       * Format: date-time
       * @description Время начала кампании.<br/>**Обязательно только для типа кампании `AS`**
       * @example 2019-08-24T14:15:22Z
       */
      startTime?: string
    }
    GetCampaignInfoBadRequestError: {
      error?: {
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /** @description Ошибка валидации поля **campaignId** */
          campaignId?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    /** @description Предсказание звонков и просмотров на завтра */
    GetCampaignInfoForecastResult: {
      /** @description Предсказание звонков */
      calls?: {
        /**
         * @description Нижняя граница предсказания
         * @example 10
         */
        from: number
        /**
         * @description Причина отсутствия прогноза, приходит при to = 0
         * @example no_calltracking
         * @enum {string|null}
         */
        lackReason?: 'not_enough_data' | 'no_calltracking' | null
        /**
         * @description Верхняя граница предсказания
         * @example 20
         */
        to: number
      }
      /** @description Предсказание просмотров */
      views?: {
        /**
         * @description Нижняя граница предсказания
         * @example 100
         */
        from: number
        /**
         * @description Причина отсутствия прогноза, приходит при to = 0.
         * @example not_enough_data
         * @enum {string|null}
         */
        lackReason?: 'not_enough_data' | null
        /**
         * @description Верхняя граница предсказания
         * @example 200
         */
        to: number
      }
    }
    GetCampaignInfoRequestBody: {
      /**
       * @description Идентификатор активной кампании
       * @example 3456432
       */
      campaignId: number
    }
    GetCampaignsBadRequestError: {
      error?: {
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /** @description Ошибка валидации поля **limit** */
          limit?: string
          /** @description Ошибка валидации поля **offset** */
          offset?: string
          /** @description Ошибка валидации поля **orderBy** */
          orderBy?: {
            /** @description Ошибка валидации поля **column** */
            column?: string
            /** @description Ошибка валидации поля **direction** */
            direction?: string
          }
          /** @description Ошибка валидации поля **statusId** */
          statusId?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    GetCampaignsRequestBody: {
      /** @description Фильтр */
      filter?: {
        /** @description Фильтрация кампаний по дате обновления */
        byUpdateTime?: {
          /**
           * Format: date-time
           * @description Начало периода включительно
           * @example 2021-04-14T00:00:00Z
           */
          from?: string
          /**
           * Format: date-time
           * @description Конец периода, не включая
           * @example 2021-05-14T00:00:00Z
           */
          to?: string
        } | null
      } | null
      /**
       * @description Ограничение на выборку
       * @example 100
       */
      limit: number
      /**
       * @description Смещение выборки, по умолчанию равно 0
       * @example 10
       */
      offset?: number
      /** @description Поля, по которым будет произведена сортировка, и тип сортировки */
      orderBy?: {
        /**
         * @description Поле, по которому будет произведена сортировка. Возможные поля:<br/> `campaignId` - идентификатор кампании<br/> `userId` - идентификатор владельца кампании<br/> `budget` - бюджет кампании<br/> `balance` - баланс кампании(остаток от общего бюджета)<br/> `title` - название<br/> `statusId` - статус кампании<br/> `startTime` - время старта<br/> `finishTime` - время финиша<br/> `createTime` - время создания<br/> `updateTime` - время обновления<br/> `itemsCount` - количество объявлений в кампании<br/> `isPaid` - оплачена ли кампания<br/>
         * @example startTime
         */
        column?: string
        /**
         * @description Тип сортировки
         * @example asc
         * @enum {string}
         */
        direction?: 'asc' | 'desc'
      }[]
      /**
       * @description Статусы кампании для выборки. Возможные статусы:<br/> `0` - Черновик, дата старта сегодня или раньше, денег на балансе нет<br/> `1` - Активная кампания<br/> `2` - Кампания приостановлена<br/> `3` - Кампания удалена<br/> `4` - Кампания остановлена<br/> `5` - Кампания запланирована, дата старта завтра или позже, на балансе есть деньги<br/> По умолчанию в выборку попадают кампании со статусами 0, 1, 2, 4, 5.<br/>
       * @example [
       *       1,
       *       2,
       *       3
       *     ]
       */
      statusId?: number[]
    }
    GetStatRequestBody: {
      /**
       * @description Идентификатор запущенной или уже прошедшей кампании
       * @example 3456432
       */
      campaignId: number
    }
    GetStatRequestError: {
      error?: {
        /**
         * @description Код ошибки
         * @example 400
         */
        code?: number
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /**
           * @description Ошибка валидации поля **campaignId**
           * @example campaignId should be greater than 0
           */
          campaignId?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    /** @description Статистика по дням с агрегацией по всем объявлениям в кампании */
    Stat: {
      /**
       * @description Факт по звонкам
       * @example 10
       */
      calls: number
      /** @description Предсказание звонков */
      callsForecast?: {
        /**
         * @description Нижняя граница предсказания
         * @example 8
         */
        from: number
        /**
         * @description Верхняя граница предсказания
         * @example 12
         */
        to: number
      } | null
      /**
       * Format: date
       * @description Дата в формате `YYYY-MM-DD`
       * @example 2021-01-25
       */
      date: string
      /**
       * @description Факт по просмотрам
       * @example 100
       */
      views: number
      viewsForecast?: {
        /**
         * @description Нижняя граница предсказания
         * @example 80
         */
        from: number
        /**
         * @description Верхняя граница предсказания
         * @example 120
         */
        to: number
      } | null
    }[]
    StopCampaignBadRequestError: {
      error?: {
        /** @description Описание ошибок валидации полей */
        fieldErrors?: {
          /** @description Ошибка валидации поля **campaignId** */
          campaignId?: string
          /** @description Ошибка валидации поля **version** */
          version?: string
        }
        /**
         * @description Сообщение об ошибке
         * @example bad request
         */
        message: string
      }
    }
    StopCampaignRequestBody: {
      /**
       * @description Идентификатор активной кампании
       * @example 3456432
       */
      campaignId: number
      /**
       * @description Текущая версия кампании
       * @example 3
       */
      version: number
    }
    authError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 401
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Unauthorized
         */
        message: string
      }
    }
    autostrategyAuthError: {
      error?: {
        /**
         * @description Сообщение об ошибке
         * @example unauthorized
         */
        message: string
      }
    }
    autostrategyServiceError: {
      error?: {
        /**
         * @description Описание ошибки
         * @example internal server error
         */
        message: string
      }
    }
    notFoundError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 404
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Not found
         */
        message: string
      }
    }
    serviceError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 500
         */
        code: number
        /**
         * @description Описание ошибки
         * @example Error while processing request. Please, contact support
         */
        message: string
      }
    }
  }
  responses: never
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
  }
  requestBodies: never
  headers: {
    /** @description Количество запросов в минуту */
    'X-RateLimit-Limit': number
    /** @description Доступное количество запросов в текущем временном окне */
    'X-RateLimit-Remaining': number
  }
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getAutostrategyBudget: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetBudgetRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            budget?: components['schemas']['Budget']
            /**
             * @description Id расчета бюджета
             * @example 123
             */
            calcId?: number | null
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetBudgetBadRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Ошибка бизнес-логики */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetBudgetConflictError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
  createAutostrategyCampaign: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['CreateCampaignRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            campaign?: components['schemas']['Campaign']
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateCampaignBadRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Ошибка бизнес-логики */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateCampaignConflictError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
  editAutostrategyCampaign: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['EditCampaignRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            campaign?: components['schemas']['Campaign']
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EditCampaignBadRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Ошибка бизнес-логики */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EditCampaignConflictError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
  getAutostrategyCampaignInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetCampaignInfoRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            campaign?: components['schemas']['Campaign']
            forecast?: components['schemas']['GetCampaignInfoForecastResult']
            /** @description Список индентификаторов объявлений, которые продвигаются/продвигались в данной кампании */
            items?: {
              /**
               * @description Продвигается ли объявление в кампании на данный момент
               * @example true
               */
              isActive?: boolean
              /**
               * @description ID объявления
               * @example 12345678
               */
              itemId?: number
            }[]
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCampaignInfoBadRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Ошибка бизнес-логики */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ConflictError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
  stopAutostrategyCampaign: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['StopCampaignRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            campaign?: components['schemas']['Campaign']
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StopCampaignBadRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
  getAutostrategyCampaigns: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetCampaignsRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Campaigns']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetCampaignsBadRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
  getAutostrategyStat: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetStatRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            stat?: components['schemas']['Stat']
            /** @description Статистика, просумированная за все дни */
            totals?: {
              /**
               * @description Факт по звонкам
               * @example 50
               */
              calls: number
              /**
               * @description Факт по просмотрам
               * @example 500
               */
              views: number
            }
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetStatRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyAuthError']
        }
      }
      /** @description Ошибка бизнес-логики */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ConflictError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['autostrategyServiceError']
        }
      }
    }
  }
}
