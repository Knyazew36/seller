// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/autoteka/v1/catalogs/resolve': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение актуальных параметров Автокаталога
     * @description Метод для получения возможных параметров для заполнения пользователем.
     *     Первый запрос можно сделать без параметров, получить данные и далее, передавая нужные id и valueId в повторном запросе, получить все параметры.
     */
    post: operations['catalogsResolve']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/get-leads/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение событий сервиса Сигнал
     * @description Метод получения событий сервиса Сигнал
     */
    post: operations['getLeads']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/monitoring/bucket/add': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Добавить идентификаторы (vin/frame) на мониторинг
     * @description Метод для добавления идентификаторов (vin/frame) на мониторинг.
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки.
     */
    post: operations['monitoringBucketAdd']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/monitoring/bucket/delete': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Полная очистка списка мониторинга
     * @description Метод для очистки списка мониторинга
     */
    post: operations['monitoringBucketDelete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/monitoring/bucket/remove': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Удаление идентификаторов из мониторинга (vin/frame)
     * @description Метод удаления идентификаторов из мониторинга (vin/frame)
     */
    post: operations['monitoringBucketRemove']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/monitoring/get-reg-actions/': {
    parameters: {
      query?: {
        /**
         * @description Позиция курсора
         * @example 111111
         */
        cursor?: string | null
        /**
         * @description Отбирать рег. действия не раньше указанной даты (включительно)
         * @example 2020-01-01
         */
        operationDateFrom?: string | null
        /**
         * @description Количество строк в результате
         * @example 10
         */
        limit?: number | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение событий мониторинга
     * @description Метод получение событий мониторинга
     */
    get: operations['monitoringGetRegActions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/packages/active_package': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Запрос остатка отчётов пользователя
     * @description Возвращает остаток отчётов в текущем пакете пользователя
     */
    get: operations['getActivePackage']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/previews': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Превью по VIN или номеру кузова
     * @description Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат
     */
    post: operations['postPreviewByVin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/previews/{previewId}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор превью */
        previewId: number
      }
      cookie?: never
    }
    /**
     * Получение превью по его ID
     * @description Возвращает текущий статус сбора информации превью, и краткую инфо по запрашиваемому `VIN`
     */
    get: operations['getPreview']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/reports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отчет по превью
     * @description Метод для запроса отчета по `previewId`, возвращает идентификатор отчета по которому сформированный отчет можно получить в [методе для получения отчета по его идентификатору](#operation/getReport). При запросе происходит списание доступных отчетов
     */
    post: operations['postReport']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/reports-by-vehicle-id': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отчет по идентификатору авто (vin/frame)
     * @description Метод для запроса отчета по идентификатору авто (vin/frame), возвращает идентификатор отчета по которому сформированный отчет можно получить в [методе для получения отчета по его идентификатору](#operation/getReport). При запросе происходит списание доступных отчетов
     */
    post: operations['postReportByVehicleId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/reports/list/': {
    parameters: {
      query?: {
        /** @description Идентификатор отчета для получения данных постранично. */
        lastReportId?: number | null
        /** @description Количество отчетов в результате */
        limit?: number | null
        /** @description Фильтр по VIN или номеру кузова */
        vin?: string | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение списка отчётов
     * @description Получение списка запрошенных ранее отчетов [запроса на создание отчета](#operation/postReport)
     */
    get: operations['getReportList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/reports/{report_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор отчета. */
        report_id: number
      }
      cookie?: never
    }
    /**
     * Получение отчета по его ID
     * @description Получение подробного отчета по его идентификатору, полученному из [запроса на создание отчета](#operation/postReport)
     */
    get: operations['getReport']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/request-preview-by-external-item': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Превью по ID объявления другой площадки
     * @description Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат
     */
    post: operations['postPreviewByExternalItem']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/request-preview-by-item-id': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Превью по ID объявления Авито
     * @description Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат
     */
    post: operations['postPreviewByItemId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/request-preview-by-regnumber': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Превью по государственному номеру
     * @description Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат
     */
    post: operations['postPreviewByRegNumber']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/scoring/by-vehicle-id': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Скоринг рисков по идентификатору авто (vin/frame)
     * @description Метод для запроса скоринга рисков по идентификатору авто (vin/frame). Возвращает идентификатор, по которому скоринг можно получить в [методе для получения скоринга рисков по его идентификатору](#operation/scoringGetById). При запросе происходит списание доступных проверок.
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    post: operations['scoringByVehicleId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/scoring/{scoring_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор скоринга. */
        scoring_id: number
      }
      cookie?: never
    }
    /**
     * Получение скоринга рисков по его ID
     * @description Получение скоринга рисков по его идентификатору, полученному из [запроса на создание скоринга](#operation/scoringByVehicleId).
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    get: operations['scoringGetById']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/specifications/by-plate-number': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Запрос характеристик по регистрационному номеру
     * @description Метод для запроса на получение спецификации по регистрационному номеру, возвращает идентификатор спецификации, по которому можно получить спецификацию в [методе для получения спецификации](#operation/specificationGetById).
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    post: operations['specificationByPlateNumber']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/specifications/by-vehicle-id': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Запрос характеристик по идентификатору авто (vin/frame)
     * @description Метод для запроса на получение спецификации по идентификатору авто (vin/frame), возвращает идентификатор спецификации, по которому можно получить спецификацию в [методе для получения спецификации](#operation/specificationGetById).
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    post: operations['specificationByVehicleId']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/specifications/specification/{specificationID}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор спецификации */
        specificationID: number
      }
      cookie?: never
    }
    /**
     * Получение характеристик по ID запроса
     * @description Метод для получения спецификации по ее идентификатору.
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    get: operations['specificationGetById']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/sync/create-by-regnumber': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Синхронное создание отчета по ГРЗ
     * @description Метод для создания отчета по государственному регистрационному номеру в синхронном режиме без превью. Возвращает отчет. Таймаут - 30 секунд. Списывает проверку. Если в течение 30 секунд отчет не был сформирован, повторный запрос в течение часа не спишет дополнительных проверок.
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки.
     */
    post: operations['postSyncCreateReportByRegNumber']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/sync/create-by-vin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Синхронное создание отчёта по VIN или номеру кузова
     * @description Метод для создания отчета по VIN или номеру кузова в синхронном режиме без превью. Возвращает отчет. Таймаут - 30 секунд. Списывает проверку. Если в течение 30 секунд отчет не был сформирован, повторный запрос в течение часа не спишет дополнительных проверок.
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки.
     */
    post: operations['postSyncCreateReportByVin']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/teasers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Тизер по идентификатору авто (vin/frame)
     * @description Метод для создания тизера по идентификатору авто (vin/frame), возвращает идентификатор отчета, по которому сформированный тизер можно получить в [методе для получения тизера по идентификатору отчета](#operation/getTeaser). При запросе происходит списание доступных отчетов.
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    post: operations['postTeaser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/teasers/{teaser_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор тизера. */
        teaser_id: number
      }
      cookie?: never
    }
    /**
     * Получение тизера по ID тизера
     * @description Получение тизера по его идентификатору, полученному из [запроса на создание тизера](#operation/postTeaser).
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    get: operations['getTeaser']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoteka/v1/valuation/by-specification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение оценки по параметрам
     * @description Метод для получения оценки по параметрам, полученным из методов [получения спецификации по ее идентификатору](#operation/specificationID) и [получения параметров автокаталога Авито](#operation/catalogsResolve)
     *
     *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки. Обратите внимание, что для её подключения надо завести отдельную учётную запись Автотеки.
     */
    post: operations['valuationBySpecification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение access token
     * @description Получение временного ключа для авторизации, пример `curl -L -X POST 'https://pro.autoteka.ru/token/' -H 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'grant_type=client_credentials' --data-urlencode 'client_id=XXX' --data-urlencode 'client_secret=YYY'`
     */
    post: operations['getAccessToken']
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
    /** @description Арбитражные дела */
    ArbitrationCases: {
      cases?: {
        /**
         * @description ID дела
         * @example c9babcc7-e797-429c-b6e4-xxyyzzd7334a
         */
        caseId: string
        /**
         * @description Номер дела
         * @example А53-30848/2015
         */
        caseNumber: string
        /**
         * @description Ссылка на дело на kad.arbitr.ru
         * @example https://kad.arbitr.ru/Card/c9babcc7-e797-429c-b6e4-xxyyzzd7334a
         */
        caseUrl: string
        /** @description Уточненные типы документа */
        contentTypes: string[]
        /**
         * @description Название суда
         * @example 15 арбитражный апелляционный суд
         */
        court: string
        /**
         * @description Название файла
         * @example А53-837163-2015__20181221.pdf
         */
        fileName: string
        /**
         * @description Ссылка для загрузки файла
         * @example https://kad.arbitr.ru/PdfDocument/c9babcc7-e797-429c-b6e4-6287b5d7334a/b6e2f927-00ea-4dee-8fca-xxyyzzd7334a/А53-30848-2015__20181221.pdf?download=true
         */
        fileUrl: string
        /**
         * Format: int64
         * @description Уровень инстанции
         * @example 2
         */
        instanceLevel: number
        /**
         * @description Номер инстанции
         * @example 15АП-20855/2018
         */
        instanceNumber: string
        /**
         * Format: int64
         * @description Дата регистрации документа в формате Unixtime
         * @example 1520889000
         */
        registrationDate: number
        /**
         * @description Тип документа
         * @example Постановление апелляционной инстанции
         */
        type: string
      }[]
    } | null
    /**
     * @deprecated
     * @description Для получения теперь тизера нужно использовать [отдельный сервис](#operation/postTeaser)
     */
    AutotekaTeaser: {
      /** @description Регулярное ТО */
      hasRegularService: boolean
      /** @description У авто один владелец */
      isOneOwner: boolean
      /** @description Реальный пробег */
      isRealMileage: boolean
      /** @description Без ДТП */
      withoutCrashes: boolean
    } | null
    AvitoAuctions: {
      /** @description Авито-аукционы */
      auctions?: {
        /**
         * @description Дата события
         * @example 2020-01-01T00:00:00Z00:00
         */
        date?: string
        /** @description Была ли совершена сделка */
        deal?: boolean
        images?: string[]
        /** @description Пробег автомобиля (км) */
        mileage?: number
        /**
         * @description Место события
         * @example Краснодарский край, Новороссийск
         */
        region?: string
      }[]
    } | null
    /** @description Объявления на авито */
    AvitoItemAutoteka: {
      /**
       * @description Дата подачи объявления
       * @example 05.12.2017
       */
      date: string
      /**
       * @description Описание от продавца
       * @example Продаю авто в отличном состоянии!<br>Все интересующие вопросы по тел.
       */
      description: string
      /** @description Фото из объявления */
      images: {
        /**
         * @description Оригинальное фото
         * @example https://10.img.avito.st/1280x960/4030786210.jpg
         */
        originalUrl: string
        /**
         * @description Фото 640x480
         * @example https://10.img.avito.st/640x480/4030786210.jpg
         */
        previewUrl: string
        /**
         * @description Фото 140x105
         * @example https://10.img.avito.st/140x105/4030786210.jpg
         */
        thumbnailUrl: string
      }[]
      /**
       * @description Отметка "битый"
       * @example true
       */
      isCrashed: boolean
      /**
       * Format: int64
       * @description Пробег из объявления
       * @example 100000
       */
      mileage: number
      /**
       * Format: int64
       * @description Цена
       * @example 440000
       */
      price: number
      /**
       * @description Заголовок объявления
       * @example Ford Focus, 2011
       */
      title: string
    }
    /** @description Оценка подержаного автомобиля от Авито */
    AvitoPriceValuation: {
      /**
       * @description Оценка на основе объявлений
       * @example 950000
       */
      avgMarketPrice?: number | null
      /**
       * @description Средний пробег аналогов
       * @example 50000
       */
      avgMileage?: number | null
      /**
       * @description Оценка с учетом состояния автомобилей на основе реальных сделок
       * @example 936000
       */
      avgPriceWithCondition: number
      /**
       * Format: float
       * @description Средний год выпуска аналогов
       * @example 2012.9999
       */
      avgYear?: number | null
      /**
       * @deprecated
       * @description Поле больше не заполняется. Ссылка на страницу Авито IMV вида https://www.avito.ru/au-imv-info/2963331288
       * @example https://www.avito.ru/au-imv-info/2963331288
       */
      imvUrl?: string | null
      /**
       * @description Количество машин, учтенных в оценке
       * @example 121
       */
      itemsCount?: number | null
      /** @description Диапазон "рыночной" оценки данного автомобиля по закрытым сделкам */
      marketNormalPriceRange?: {
        /**
         * @description Максимальная граница "рыночной" оценки данного автомобиля по закрытым сделкам
         * @example 5248900
         */
        max: number
        /**
         * @description Минимальная граница "рыночной" оценки данного автомобиля по закрытым сделкам
         * @example 3248900
         */
        min: number
      } | null
      /**
       * @description Максимальная цена похожих авто на основе объявлений
       * @example 1000000
       */
      maxPrice?: number | null
      /**
       * @description Минимальная цена похожих авто на основе объявлений
       * @example 800000
       */
      minPrice?: number | null
    } | null
    /** @description Титульное фото с авито */
    CarImageAutoteka: {
      /**
       * @description Оригинальное фото загруженное на avito.ru
       * @example https://69.img.avito.st/1280x960/3897113869.jpg
       */
      originalUrl: string
      /**
       * @description Изображение авто 640x480
       * @example https://69.img.avito.st/640x480/3897113869.jpg
       */
      previewUrl: string
    }
    /** @description Сведения об использовании ТС в каршеринге */
    CarsharingDataAutoteka: {
      /** @description Список записей об использовании ТС в каршеринге */
      events: components['schemas']['CarsharingDataEventAutoteka'][]
      /**
       * @deprecated
       * @description Поле не поддерживается. Решение о факте использования в каршеринге нужно принимать на основании данных в массиве Events
       */
      recaps: components['schemas']['RecapAutoteka'][]
    } | null
    /** @description Информация об использовании ТС в каршеринге */
    CarsharingDataEventAutoteka: {
      /**
       * @description Компания эксплуатант ТС
       * @example OOO Вектор
       */
      company: string
      /**
       * @description Автомобиль мог не использоваться в каршеринге. Такое возможно, если компания оказывает услуги лизинга помимо каршеринга.
       * @example false
       */
      inaccurateData: boolean
    }
    /** @description Параметр из каталога Авито */
    CatalogsFieldAutoteka: {
      /**
       * @description Тип значения параметра
       * @example integer
       */
      dataType: string
      /**
       * Format: int64
       * @description Идентификатор параметра
       * @example 110000
       */
      id: number
      /**
       * @description Название параметра
       * @example Марка
       */
      label: string
      values: {
        /**
         * @description Значение параметра
         * @example Accent
         */
        label: string
        /**
         * Format: int64
         * @description Идентификатор значения параметра
         * @example 403154
         */
        valueId: number
      }[]
    }
    CatalogsResolveResponseBodyAutoteka: {
      result?: components['schemas']['CatalogsResolveResponseDataAutoteka']
    }
    CatalogsResolveResponseDataAutoteka: {
      fields: components['schemas']['CatalogsFieldAutoteka'][]
    }
    /** @description История ДТП */
    CrashesHistoryAutoteka: {
      /** @description Дополнительная информация */
      additional: string[]
      /**
       * @description Тип оформления
       * @example Европротокол
       */
      clearanceType?: string | null
      /** @description Карта повреждения */
      damageMap: string[]
      /** @description Степень повреждения для деталей */
      damageTypes: {
        /**
         * @description Описание повреждения
         * @example Передний капот (багажник)
         */
        description?: string
        /**
         * @description Расположение повреждения
         * @enum {string}
         */
        slug?:
          | 'front-right'
          | 'right-front-door'
          | 'front-right-side'
          | 'left-front'
          | 'left-front-door'
          | 'left-front-side'
          | 'right-rear'
          | 'right-rear-door'
          | 'right-rear-side'
          | 'left-rear'
          | 'left-rear-door'
          | 'left-rear-side'
          | 'roof'
          | 'bottom'
          | 'front-hood'
          | 'rear-hood'
        /**
         * @description Степень повреждения
         * @enum {string}
         */
        type?: 'yellow' | 'red' | 'other'
      }[]
      /**
       * Format: int64
       * @description Дата в формате Unixtime
       * @example 1421039400
       */
      date: number
      /**
       * @description Регион ДТП
       * @example Нижегородская область
       */
      region: string
      /**
       * @description Тип ДТП
       * @example Столкновение
       */
      type: string
    }
    CreateEptsResponseDataAutoteka: {
      epts?: components['schemas']['EptsRequestIdResultAutoteka']
    }
    CreateReportResponseBodyAutoteka: {
      result?: components['schemas']['CreateReportResponseDataAutoteka']
    }
    CreateReportResponseDataAutoteka: {
      report?: components['schemas']['ReportWithoutDataAutoteka']
    }
    CreateScoringResponseBodyAutoteka: {
      result?: components['schemas']['CreateScoringResponseDataAutoteka']
    }
    CreateScoringResponseDataAutoteka: {
      scoring?: components['schemas']['ScoringIdResultAutoteka']
    }
    CreateSpecificationResponseBodyAutoteka: {
      result?: components['schemas']['CreateSpecificationResponseDataAutoteka']
    }
    CreateSpecificationResponseDataAutoteka: {
      specification?: components['schemas']['SpecificationIdResultAutoteka']
    }
    CreateTeaserResponseBodyAutoteka: {
      result?: components['schemas']['CreateTeaserResponseDataAutoteka']
    }
    CreateTeaserResponseDataAutoteka: {
      teaser?: components['schemas']['TeaserWithoutDataAutoteka']
    }
    /** @description Сведения о таможенном оформлении */
    Customs: {
      /**
       * @description Цвет
       * @example Красный
       */
      color: string | null
      /** @description Компания */
      company?: string | null
      /**
       * Format: int64
       * @description Дата растаможки
       * @example 1566507600
       */
      createdAt: number | null
      /**
       * @description Эко-стандарт
       * @example Евро-4
       */
      ecology: string | null
      /**
       * @description Страна вывоза
       * @example 65320071902728
       */
      fromCountry: string | null
      /**
       * Format: int64
       * @description Пробег
       * @example 10000
       */
      mileage: number | null
      /**
       * @description Получатель
       * @example Юридическое лицо
       */
      owner: string | null
      /**
       * @description Спецификация
       * @example Паспорт
       */
      specification: string | null
      /**
       * Format: float
       * @description Оценочная стоимость ТС
       * @example 1202.5
       */
      statPrice: number | null
      /**
       * @description Страна ввоза
       * @example 65320071902728
       */
      toCountry: string | null
    } | null
    /** @description Блок диагностических осмотров автомобиля */
    Diagnostics: {
      /** @description Список диагностических осмотров */
      events: components['schemas']['DiagnosticsEvent'][]
      /**
       * Format: int64
       * @description Дата актуализации данных
       * @example 1566507600
       */
      requestTime: number
    } | null
    /** @description События проведения диагностического осмотра (ДО) */
    DiagnosticsEvent: {
      /**
       * @description Город проведения ДО
       * @example Тверь
       */
      city: string
      /** @description Описание состояния автомобиля */
      condition: {
        /**
         * @description Описание состояния автомобиля
         * @example Грязный салон
         */
        issues: string[]
      }
      /**
       * Format: int64
       * @description Дата проведения ДО UnixTime
       * @example 1489104000
       */
      createdAt: number
      /** @description Массив событий с найденными на ДО повреждениями а/м */
      damages: components['schemas']['DiagnosticsEventDamage'][]
      /**
       * @description Название компании проводившей ДО
       * @example AutoPrice
       */
      dealerName: string
      /**
       * Format: int64
       * @description Пробег на момент ДО
       * @example 114500
       */
      mileage: number
      /** @description Массив фотографий с ДО */
      photos: components['schemas']['DiagnosticsEventPhoto'][]
      /**
       * @description Область проведения ДО
       * @example Тверская область
       */
      region: string
    }
    /** @description Описание повреждения, найденного на ДО */
    DiagnosticsEventDamage: {
      /**
       * @description Степень повреждения
       * @example Значительное
       */
      degree: string | null
      /**
       * @description З/ч с повреждением
       * @example Порог в зоне передней левой двери
       */
      part: string
      /**
       * @description Ссылка на фото с повреждением
       * @example http://s32.gcdn.co/?file=201703102F1799506
       */
      photoUrl: string | null
      /**
       * @description Описание повреждения
       * @example Накладка порога повреждена-отсутствует
       */
      type: string
    }
    /** @description Фотография с диагностического осмотра */
    DiagnosticsEventPhoto: {
      /**
       * @description Описание фотографии
       * @example Кузов справа
       */
      name: string
      /**
       * @description Ссылка на фото
       * @example http://s32.gcdn.co/?file=201703102F1799506
       */
      url: string
    }
    DocumentsResultAutoteka: {
      /** @description Информация о ПТС */
      pts?: {
        /**
         * @description Дата выдачи ПТС
         * @example 2024-07-31
         */
        date?: string | null
        /**
         * @description Номер ПТС
         * @example 1234567890
         */
        number?: string | null
        /**
         * @description Организация, выдавшая ПТС
         * @example Название организации
         */
        organization?: string | null
      } | null
      /** @description Информация об СТС */
      sts?: {
        /**
         * @description Дата выдачи СТС
         * @example 2024-07-31
         */
        date?: string | null
        /**
         * @description Серия и номер СТС
         * @example 1234567890
         */
        number?: string | null
      } | null
    } | null
    /** @description Сведения об электронном ПТС */
    Epts: {
      /**
       * @description Таможенное оформление
       * @example Отсутствуют
       */
      customsClearance: string
      /**
       * @description Таможенные ограничения
       * @example Отсутствуют
       */
      customsRestrictions: string
      /**
       * @description Последнее регистрационное действие
       * @example РФ - Постановка на регистрационный учет (02.06.2021)
       */
      lastAction: string
      /**
       * @description Номер ЭПТС
       * @example 123456789
       */
      number?: string | null
      /**
       * @description Прочие ограничения
       * @example ОТСУТСТВУЮТ
       */
      otherRestrictions: string
      /**
       * @description Утилизационный сбор
       * @example РФ уплачен
       */
      recyclingFee: string
      /**
       * @description Статус ЭПТС
       * @example действующий
       */
      status: string
      /**
       * @description Тип ЭПТС
       * @example Электронный паспорт транспортного средства
       */
      type: string
    } | null
    EptsAutoteka: {
      data?: components['schemas']['EptsDataAutoteka']
      /**
       * Format: uuid
       * @description Идентификатор запроса ЭПТС, по которому его можно получить
       */
      requestId: string
      /**
       * @description Признак успешности получения данных. В случае false нужно повторно перезапросить данные
       * @example true
       */
      success: boolean
    }
    /** @description Сведения об электронном ПТС */
    EptsDataAutoteka: {
      /**
       * @description Таможенное оформление
       * @example Отсутствуют
       */
      customsClearance?: string
      /**
       * @description Таможенные ограничения
       * @example Отсутствуют
       */
      customsRestrictions?: string
      /**
       * @description Последнее регистрационное действие
       * @example РФ - Постановка на регистрационный учет (02.06.2023)
       */
      lastAction?: string
      /**
       * @description Прочие ограничения
       * @example СВЕДЕНИЯ ОБ ОГРАНИЧЕНИЯХ ОТСУТСТВУЮТ
       */
      otherRestrictions?: string
      /**
       * @description Утилизационный сбор
       * @example РФ не уплачивается
       */
      recyclingFee?: string
      /**
       * @description Статус ЭПТС
       * @example действующий
       */
      status?: string
      /**
       * @description Тип ЭПТС
       * @example Электронный паспорт транспортного средства
       */
      type?: string
    } | null
    EptsRequestIdResultAutoteka: {
      /**
       * Format: uuid
       * @description Идентификатор запроса ЭПТС, по которому его можно получить
       */
      requestId: string
    }
    /** @description Комплектация авто */
    EquipmentAutoteka: {
      /** @description Тип кузова */
      body: {
        /** @enum {string} */
        description:
          | 'Микроавтобус'
          | 'Кабриолет'
          | 'Купе'
          | 'Кроссовер'
          | 'Универсал'
          | 'Минивэн'
          | 'Хэтчбек'
          | 'Внедорожник'
          | 'Пикап'
          | 'Седан'
          | 'Фургон'
          | 'Лимузин'
        /**
         * @description Заголовок
         * @example Кузов
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 7
         */
        value: number
      }
      bodyNumber: {
        /**
         * @description Номер кузова
         * @example Номер кузова
         */
        title: string
        /** @description Строковое значение */
        value: string
      } | null
      /** @description Бренд */
      brand: {
        /**
         * @description Заголовок
         * @example Бренд
         */
        title: string
        /**
         * @description Текстовое значение
         * @example BMW
         * @enum {string}
         */
        value:
          | 'AUDI'
          | 'BENTLEY'
          | 'BMW'
          | 'CADILLAC'
          | 'CHERY'
          | 'CHEVROLET'
          | 'CHRYSLER'
          | 'CITROEN'
          | 'DACIA'
          | 'DAEWOO'
          | 'DAF'
          | 'DATSUN'
          | 'DODGE'
          | 'FIAT'
          | 'FORD'
          | 'FREIGHTLINER'
          | 'GAZ'
          | 'GEELY'
          | 'GENESIS'
          | 'GREAT WALL'
          | 'HONDA'
          | 'HYUNDAI'
          | 'Honda'
          | 'INFINITI'
          | 'ISUZU'
          | 'IVECO'
          | 'JEEP'
          | 'Jaguar'
          | 'KAMAZ'
          | 'KIA'
          | 'LADA'
          | 'LEXUS'
          | 'LIFAN'
          | 'Land Rover'
          | 'MAN'
          | 'MAZ'
          | 'MAZDA'
          | 'MERCEDES'
          | 'MERCEDES-BENZ'
          | 'MINI'
          | 'MITSUBISHI'
          | 'NISSAN'
          | 'OPEL'
          | 'PEUGEOT'
          | 'PORSCHE'
          | 'RENAULT'
          | 'ROVER'
          | 'SEAZ'
          | 'SKODA'
          | 'SMART'
          | 'SSANGYONG'
          | 'SUBARU'
          | 'Suzuki'
          | 'TAGAZ'
          | 'TOYOTA'
          | 'UAZ'
          | 'VAZ'
          | 'VOLKSWAGEN'
          | 'VOLVO'
          | 'YAMAHA'
          | 'ZAZ'
      }
      chasisNumber: {
        /**
         * @description Номер шасси
         * @example Номер шасси
         */
        title: string
        /** @description Строковое значение */
        value: string
      } | null
      /** @description Цвет кузова */
      color: {
        /**
         * @description Текстовое значение
         * @example Синий
         */
        description: string
        /**
         * @description Заголовок
         * @example Цвет
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Синий
         * @enum {string}
         */
        value:
          | 'Бежево-Серый'
          | 'Бежевый'
          | 'Белый'
          | 'Белый Металлик'
          | 'Белый Перламутр'
          | 'Белый Черный'
          | 'Белый-Желтый-Серый'
          | 'Белый/Черный'
          | 'Бордовый'
          | 'Бронзовый'
          | 'Вишнево-Красный'
          | 'Жемчужно-Белый'
          | 'Зеленый'
          | 'Золотисто-Коричневый'
          | 'Золотисто-Охристый'
          | 'Коричневый'
          | 'Красный'
          | 'Мальва'
          | 'Многоцветный (Красный, Чёрный)'
          | 'Мурена (Тёмно-Синий)'
          | 'Оранжево-Красный'
          | 'Оранжево-Черный'
          | 'Оранжевый'
          | 'Оранжевый Перламутровый'
          | 'Оранжевый Черный'
          | 'Перлам-Серебристый'
          | 'Перламутрово-Серебристый'
          | 'Светло-Коричневый'
          | 'Светло-Серый'
          | 'Светло-Синий'
          | 'Серебристо-Белый'
          | 'Серебристый'
          | 'Серо Зеленый'
          | 'Серо-Зеленый'
          | 'Серо-Золотистый'
          | 'Серо-Коричневый'
          | 'Серо-Сине-Зеленый Металлик'
          | 'Серо-Синий'
          | 'Серый'
          | 'Сине-Черный'
          | 'Синий'
          | 'Синий Темный'
          | 'Скат'
          | 'Средний Серо-Зеленый'
          | 'Стальной'
          | 'Темно Серый'
          | 'Темно-Бордовый'
          | 'Темно-Вишневый'
          | 'Темно-Голубой'
          | 'Темно-Зеленый'
          | 'Темно-Серый'
          | 'Темно-Синий'
          | 'Черно-Серый'
          | 'Черный'
          | 'Черный Металлик'
      }
      /**
       * @deprecated
       * @description Привод
       */
      drive: {
        /**
         * @description Текстовое значение
         * @example Задний
         */
        description: string
        /**
         * @description Заголовок
         * @example Привод
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2
         */
        value: number
      }
      engineNumber: {
        /**
         * @description Номер двигателя
         * @example Номер двигателя
         */
        title: string
        /** @description Строковое значение */
        value: string
      } | null
      /** @description Тип двигателя */
      engineType: {
        /**
         * @description Заголовок
         * @example Тип двигателя
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Бензиновый
         * @enum {string}
         */
        value:
          | 'Бензин'
          | 'Дизель'
          | 'Электро'
          | 'Газ'
          | 'Гибрид'
          | 'Бензиновый на сжиженном газе'
          | 'Бензиновый на сжатом газе'
          | 'Дизельный на сжиженном газе'
          | 'Дизельный на сжатом газе'
          | 'Электро-бензиновый'
          | 'Электро-дизельный'
      }
      /** @description Название комплектации */
      equipment: {
        /**
         * @description Заголовок
         * @example Комплектация
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Luxure
         */
        value: string
      }
      /** @description Количество лошадиных сил */
      horsepower: {
        /**
         * @description Текстовое значение
         * @example 265 л.с.
         */
        description: string
        /**
         * @description Заголовок
         * @example Мощность
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 265
         */
        value: number
      }
      /** @description Разрешенная максимальная масса */
      maxWeight: {
        /**
         * @description Текстовое значение
         * @example 1645 кг
         */
        description: string
        /**
         * @description Заголовок
         * @example Разрешенная максимальная масса
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1645
         */
        value: number
      }
      /** @description Модель */
      model: {
        /**
         * @description Заголовок
         * @example Модель
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Serie 1
         */
        value: string
      }
      /** @description Модификация */
      modification: {
        /**
         * @description Заголовок
         * @example Модификация
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Sport
         */
        value: string
      }
      /** @description Масса без нагрузки */
      netWeight: {
        /**
         * @description Текстовое значение
         * @example 1245 кг
         */
        description: string
        /**
         * @description Заголовок
         * @example Масса без нагрузки
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1245
         */
        value: number
      }
      /**
       * @deprecated
       * @description Тип КПП
       */
      transmission: {
        /**
         * @description Текстовое значение
         * @example Механическая
         */
        description: string
        /**
         * @description Заголовок
         * @example Трансмиссия
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1
         */
        value: number
      }
      /**
       * @deprecated
       * @description Тип ТС
       */
      vehicle: {
        /**
         * @description Текстовое значение
         * @example Легковой
         */
        description: string
        /**
         * @description Заголовок
         * @example Тип ТС
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1
         */
        value: number
      }
      /** @description Категория ТС */
      vehicleCategory: {
        /**
         * @description Заголовок
         * @example Категория ТС
         */
        title: string
        /**
         * @description Текстовое значение
         * @example D
         * @enum {string}
         */
        value: 'A' | 'B' | 'C' | 'D' | 'E' | 'O' | 'M1' | 'M1G' | 'N1'
      }
      /** @description Тип ТС */
      vehicleType: {
        /**
         * @description Заголовок
         * @example Категория ТС
         */
        title: string
        /**
         * @description Текстовое значение
         * @enum {string}
         */
        value:
          | 'Автобусы прочие'
          | 'Грузовой бортовой'
          | 'Грузовой прочий'
          | 'Грузовой фургон'
          | 'Грузовые автомобили бортовые'
          | 'Грузовые автомобили фургоны'
          | 'Легковое купе'
          | 'Легковой прочий'
          | 'Легковой седан'
          | 'Легковой универсал'
          | 'Легковой хэтчбек (комби)'
          | 'Легковые автомобили кабриолет'
          | 'Легковые автомобили комби (хэтчбек)'
          | 'Легковые автомобили купе'
          | 'Легковые автомобили прочие'
          | 'Легковые автомобили седан'
          | 'Легковые автомобили универсал'
          | 'Мотоциклы'
      }
      /** @description Объем двигателя */
      volume: {
        /**
         * @description Текстовое значение
         * @example 3.0 л
         */
        description: string
        /**
         * @description Заголовок
         * @example Объем двигателя
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2996
         */
        value: number
      }
      /** @description Год выпуска */
      year: {
        /**
         * @description Заголовок
         * @example Год выпуска
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2008
         */
        value: number
      }
    }
    /**
     * @deprecated
     * @description Блок с предупреждениями об авто
     */
    EventsAutoteka: {
      /** @description Находится ли в данный момент в продаже на Авито */
      avitoOnSale: {
        /** @description Доп. информация по объявлению */
        additionalInfo: {
          /**
           * Format: int64
           * @description Дата последнего обновления
           */
          date: number
          /**
           * Format: int64
           * @description Цена
           */
          price: number
          /** @description Заголовк объявления */
          title: string
          /** @description Ссылка на объявление */
          url: string
        }
        /**
         * @description Текстовое описание
         * @example Авто в продаже
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example ok
         */
        type: string
        /**
         * @description true - находится, false - не находится
         * @example true
         */
        value: boolean
      }
      /** @description наличие кузовных ремонтов */
      bodyRepair: {
        /**
         * @description Текстовое описание
         * @example 1 кузовной ремонт
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example caution
         */
        type: string
        /**
         * @description есть или нет кузовные ремонты
         * @example true
         */
        value: boolean
      }
      /** @description Наличие ДТП */
      crashes: {
        /**
         * @description Текстовое описание
         * @example 3 ДТП
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example warning
         */
        type: string
        /**
         * @description Наличие ДТП
         * @example true
         */
        value: boolean
      }
      /** @description Наличие диллерских данных */
      dealerDataAvailable: {
        /**
         * @description Текстовое описание
         * @example Нет данных от дилера
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example ok
         */
        type: string
        /**
         * @description true - в отчете есть данные дилера, false - данных дилера нет
         * @example true
         */
        value: boolean
      }
      /** @description Дата первой продажи */
      firstSellDate: {
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example ok
         */
        type: string
        /**
         * @description дата первой продажи
         * @example 2020-01-01
         */
        value: string
      }
      /** @description Последний зафиксированный пробег */
      lastMileageRecord: {
        /**
         * @description Текстовое описание
         * @example Пробег 105 125 км
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example warning
         */
        type: string
        /**
         * Format: int64
         * @description значение пробега в километрах
         * @example 105125
         */
        value: number
      }
      /** @description Количество владельцев */
      owners: {
        /**
         * @description Количество владельце
         * @example 3 владельца
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example ok
         */
        type: string
        /**
         * Format: int64
         * @description Количество владельце
         * @example 3
         */
        value: number
      }
      /** @description Наличие залогов */
      pledge: {
        /**
         * @description Текстовое описание
         * @example Залоги не обнаружены
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example caution
         */
        type: string
        /**
         * @description true - залог есть, false - залогов нет
         * @example false
         */
        value: boolean
      }
      /** @description Владелец частное или юридическое лицо */
      publicPerson: {
        /**
         * @description Текстовое описание
         * @example Регистрация на юрлицо
         */
        description: string
        /**
         * @description статус события `caution`, `ok`, `warning`
         * @example ok
         */
        type: string
        /**
         * @description владелец true - юрлицо, false -  физлицо
         * @example true
         */
        value: boolean
      }
    }
    /** @description История владения */
    EventsOthersHistoryAutoteka: {
      /**
       * Format: int64
       * @description Дата событи в формате Unixtime
       * @example 1370030400
       */
      date: number
      /**
       * @description Подробное описание события
       * @example Расчет стоимости ремонта: 65 541 RUR <br/> НАДБАВКА ВРЕМЕНИ ОСНОВНЫЕ ОПЕРАЦИИ: <br/>ФАРЫ - ОТРЕГУЛИРОВАТЬ: <br/>БАМПЕР З - ЗАМ  (СНЯТ): <br/>КРЫЛО П ПР1 747 346: Замена<br/>
       */
      description: string
      /**
       * @description Тип события текстом
       * @example Расчет стоимости ремонта
       */
      event: string
      /**
       * Format: int64
       * @description Пробег зафиксированный во время события
       * @example 105125
       */
      mileage: number
      /**
       * Format: int64
       * @description Код регистрационного действия
       * @example 11
       */
      operationCodeId?: number | null
      /**
       * @description Источник данных
       * @example Audatex
       */
      source: string
      /**
       * Format: int64
       * @description sourceId
       * @example 105125
       */
      sourceId?: number | null
      /**
       * @description Тип события `accident`,`avitoPlacement`,`bodyRepair`,`changeInDocuments`,`customs`,`diagnostic`,`emergencyCommissionerCall`,`externalPlacement`,`inspection`,`recallRecord`,`registration`,`regulation`,`repair`,`repairCalculation`,`salvageCarAuction`,`sell`,`service`,`serviceRequest`,`to`,`tradeInValuations`,`upgrade`
       * @example repair
       */
      type: string
    }
    /** @description Нормализованная спецификация автомобиля. */
    ExtendedSpecifications: {
      /** @description Список параметров. Количество обозначенных параметров может быть различным в разных отчетах. */
      events: components['schemas']['ExtendedSpecificationsParam'][]
      /**
       * @description Дата запроса к источнику UnixTime
       * @example 1566507600
       */
      requestTime: number
    } | null
    /** @description Параметр автомобиля */
    ExtendedSpecificationsParam: {
      /** @description Идентификатор параметра из каталога Авито */
      id: number | null
      /**
       * @description ключ параметра
       * @enum {string}
       */
      key:
        | 'brand'
        | 'brandId'
        | 'model'
        | 'modelId'
        | 'body_type'
        | 'kolichestvo_dverey'
        | 'drive'
        | 'wheel'
        | 'generation'
        | 'engine_type'
        | 'transmission'
        | 'complectation'
        | 'modification'
        | 'engine'
        | 'capacity'
        | 'year'
      /**
       * @description расшифровка ключа на русском
       * @enum {string}
       */
      name:
        | 'Бренд'
        | 'Идентификатор бренда'
        | 'Модель'
        | 'Идентификатор модели'
        | 'Тип автомобиля'
        | 'Количество дверей'
        | 'Привод'
        | 'Руль'
        | 'Поколение'
        | 'Тип двигателя'
        | 'Коробка передач'
        | 'Комплектация'
        | 'Модификация'
        | 'Мощность двигателя'
        | 'Объем двигателя'
        | 'Год выпуска'
      /**
       * @description значение параметра
       * @example Voyager
       */
      value: string
      /** @description Идентификатор значения из каталога Авито */
      valueId: number | null
    }
    /** @description Объявления на другой площадке */
    ExternalPlacementAutoteka: {
      /** @description Город */
      city: string | null
      /**
       * @description Дата публикации
       * @example 05.12.2017
       */
      date: string
      /** @description Битое авто */
      isCrashed: boolean
      /**
       * Format: int64
       * @description Пробег
       */
      mileage: number | null
      /**
       * Format: int64
       * @description Цена
       */
      price: number | null
      /** @description Регион */
      region: string | null
      /** @description Ссылка на размещение */
      url: string
    }
    /** @description Информация о штрафе */
    FineEventAutoteka: {
      /**
       * @description Дата постановления
       * @example 1568669460
       */
      createdAt: number
      /**
       * @description Дата правонарушения
       * @example 1568669460
       */
      dateIncident: number | null
      /**
       * @description Статья КАОП
       * @example 12.9ч.6
       */
      koapCode: string
      /**
       * @description Текст статьи КОАП
       * @example Повторное совершение административного правонарушения, предусмотренного частью 3
       */
      koapText: string
      /**
       * @description Номер постановления (УИН)
       * @example 12345678901234567000
       */
      numPost: string | null
      /**
       * @description Неоплачен/Передан ФССП
       * @example Передан в ФССП 11 ноября 2019
       */
      status: string
      /**
       * @description Сумма штрафа без скидки
       * @example 2000
       */
      sum: number
    }
    /** @description Информация о штрафах */
    FinesAutoteka: {
      /** @description Список штрафов */
      events: components['schemas']['FineEventAutoteka'][]
      /**
       * @deprecated
       * @description Суммарная информация
       */
      recaps: components['schemas']['RecapAutoteka'][]
      /**
       * @description Дата запроса к источнику UnixTime
       * @example 1566507600
       */
      requestTime?: number | null
    } | null
    GetActivePackageResponseBodyAutoteka: {
      result?: components['schemas']['GetActivePackageResponseDataAutoteka']
    }
    GetActivePackageResponseDataAutoteka: {
      package?: components['schemas']['PackageAutoteka']
    }
    GetEptsResult: {
      epts?: components['schemas']['EptsAutoteka']
    }
    GetPreviewResponseBodyAutoteka: {
      result?: components['schemas']['GetPreviewResponseDataAutoteka']
    }
    GetPreviewResponseDataAutoteka: {
      preview?: components['schemas']['PreviewAutoteka']
    }
    GetReport: {
      result?: components['schemas']['GetReportResult']
    }
    GetReportAsync: {
      result?: components['schemas']['GetReportResultAsync']
    }
    GetReportResult: {
      report?: components['schemas']['Report_autoteka']
    }
    GetReportResultAsync: {
      report?: components['schemas']['Report_autoteka_async']
    }
    GetReportsListResponseDataAutoteka: {
      result: components['schemas']['ReportItem_autoteka'][]
    }
    GetScoring: {
      result?: components['schemas']['GetScoringResult']
    }
    GetScoringResult: {
      risksAssessment?: components['schemas']['ScoringAutoteka']
    }
    GetSpecificationResponseBodyAutoteka: {
      result?: components['schemas']['GetSpecificationResponseDataAutoteka']
    }
    GetSpecificationResponseDataAutoteka: {
      documents?: components['schemas']['DocumentsResultAutoteka']
      /**
       * @description Массив оценок новых авто с аналогичной спецификацией.
       *
       *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки.
       */
      newCarValuations?: components['schemas']['NewCarValuation'][] | null
      specification?: components['schemas']['SpecificationResultAutoteka']
      valuation?: components['schemas']['AvitoPriceValuation']
    }
    /** @description Блок основных данных об авто */
    HeadAutoteka: {
      /**
       * @description Марка
       * @enum {string}
       */
      brand:
        | 'AUDI'
        | 'BENTLEY'
        | 'BMW'
        | 'CADILLAC'
        | 'CHERY'
        | 'CHEVROLET'
        | 'CHRYSLER'
        | 'CITROEN'
        | 'DACIA'
        | 'DAEWOO'
        | 'DAF'
        | 'DATSUN'
        | 'DODGE'
        | 'FIAT'
        | 'FORD'
        | 'FREIGHTLINER'
        | 'GAZ'
        | 'GEELY'
        | 'GENESIS'
        | 'GREAT WALL'
        | 'HONDA'
        | 'HYUNDAI'
        | 'Honda'
        | 'INFINITI'
        | 'ISUZU'
        | 'IVECO'
        | 'JEEP'
        | 'Jaguar'
        | 'KAMAZ'
        | 'KIA'
        | 'LADA'
        | 'LEXUS'
        | 'LIFAN'
        | 'Land Rover'
        | 'MAN'
        | 'MAZ'
        | 'MAZDA'
        | 'MERCEDES'
        | 'MERCEDES-BENZ'
        | 'MINI'
        | 'MITSUBISHI'
        | 'NISSAN'
        | 'OPEL'
        | 'PEUGEOT'
        | 'PORSCHE'
        | 'RENAULT'
        | 'ROVER'
        | 'SEAZ'
        | 'SKODA'
        | 'SMART'
        | 'SSANGYONG'
        | 'SUBARU'
        | 'Suzuki'
        | 'TAGAZ'
        | 'TOYOTA'
        | 'UAZ'
        | 'VAZ'
        | 'VOLKSWAGEN'
        | 'VOLVO'
        | 'YAMAHA'
        | 'ZAZ'
      /**
       * Format: int64
       * @description Время генерации отчета в формате Unix time
       * @example 1520889000
       */
      createdAt: number
      /**
       * @description Модель
       * @example x5
       */
      model: string
      /**
       * @description Государственный номер авто
       * @example X777XX777
       */
      regNumber?: string | null
      /** @description История государственных номеров авто */
      regNumbersHistory?:
        | {
            /**
             * @description Государственный номер авто
             * @example X777XX777
             */
            number: string
          }[]
        | null
      /**
       * @description тип идентификатора авто
       * @enum {string}
       */
      vehicleIdentifierType?: 'vin' | 'frame' | 'unknown'
      /**
       * @description VIN
       * @example XUUNF487JA0007223
       */
      vin: string
      /**
       * Format: int64
       * @description Год выпуска
       * @example 2015
       */
      year: number
    }
    Insights: {
      /**
       * @description Флаг ввоза авто из-за рубежа
       * @example true
       */
      isImported: boolean | null
    } | null
    /** @description Сведения о страховых выплатах */
    InsurancePayments: components['schemas']['InsurancePaymentsItem'][]
    InsurancePaymentsItem: {
      /**
       * @description Компания
       * @example АЛЬФАСТРАХОВАНИЕ
       */
      companyName: string | null
      /**
       * @description Cудебная выплата
       * @example true
       */
      isCourtPayment?: boolean | null
      /**
       * @description Флаг, что владелец авто получил этот платеж (для виновника будет false)
       * @example true
       */
      isForVictim: boolean
      /** @description Месяц */
      month?: number | null
      /**
       * Format: float
       * @description Сумма выплаты
       * @example 20600
       */
      paymentAmount: number
      /**
       * @description Год выплаты
       * @example 2017
       */
      year: number
    }
    /** @description Информация о полисах ОСАГО */
    InsurancePoliciesAutoteka: {
      /** @description Список действующих полисов ОСАГО */
      events: components['schemas']['InsurancePolicyEventAutoteka'][]
      /**
       * @deprecated
       * @description Суммарная информация
       */
      recaps: components['schemas']['RecapAutoteka'][]
    } | null
    /** @description Полис ОСАГО */
    InsurancePolicyEventAutoteka: {
      /**
       * @description Страховая компания
       * @example ИНГОССТРАХ
       */
      companyName: string
      /**
       * Format: int64
       * @description Дата создания полиса в формате Unixtime
       * @example 1521089000
       */
      createDate: number
      /**
       * Format: int64
       * @description Дата окончания действия полиса в формате Unixtime
       * @example 1621089000
       */
      endDate: number
      /**
       * @description Признак наличия прицепа
       * @example true
       */
      hasTrailer?: boolean | null
      /**
       * @description Признак нахождения в транзите
       * @example true
       */
      isTransit?: boolean | null
      /**
       * Format: float
       * @description KBM (Показатель безаварийного вождения)
       * @example 0.75
       */
      kmb?: number | null
      /**
       * @description Ограничение лиц, допущенных к управлению ТС (true - полис с ограничениями, false - без ограничений)
       * @example true
       */
      policyIsRestrict?: boolean | null
      /**
       * @description Номер полиса
       * @example 1111111111
       */
      policyNumber?: string | null
      /**
       * @description Серия полиса
       * @example EEE
       */
      policySerial?: string | null
      /**
       * Format: int64
       * @description Кол-во лиц, допущенных к управлению
       * @example 2
       */
      restrictionCount?: number | null
      /**
       * Format: int64
       * @description Дата начала действия полиса в формате Unixtime
       * @example 1521089000
       */
      startDate: number
      /**
       * @description Статус страховки
       * @example Действует
       */
      status?: string | null
      /**
       * @description Цель использования
       * @example Личная
       */
      usageTarget?: string | null
    }
    Leasing: {
      /** @description Лизинг контракты */
      contracts?: {
        /** @description Дата заключения договора */
        contractDate?: number | null
        /** @description Дата окончания финансовой аренды (лизинга) */
        endDate?: number | null
        /** @description Название арендатора */
        lesseeName?: string | null
        /** @description Название арендодателя */
        lessorName?: string | null
        /** @description Дата начала финансовой аренды (лизинга) */
        startDate?: number | null
      }[]
    } | null
    /**
     * @deprecated
     * @description Оценка автомобиля от MaxPoster. Поле не поддерживается, актуальная структура AvitoPriceValuation
     */
    MaxPosterPriceValuation: {
      /** @description Аналитика стоимости на основе текущих размещений на рынке */
      analyticByActualSales?: {
        /**
         * @description Средняя цена по рынку с учетом пробега и региона продажи
         * @example 294500
         */
        avgPriceWithCorrection: number
        /**
         * @description Максимальная цена по рынку с учетом пробега и региона продажи
         * @example 2945
         */
        maxPriceWithCorrection: number
        /**
         * @description Минимальная цена по рынку с учетом пробега и региона продажи
         * @example 2945
         */
        minPriceWithCorrection: number
        /**
         * @description Позиция оцениваемого ТС по цене среди похожих на рынке
         * @example 2945
         */
        pricePosition: number
      } | null
      /** @description Аналитика стоимости на основе реальных сделок */
      analyticByCompletedSales: {
        /**
         * @deprecated
         * @description Среднее количество дней продажи
         * @example 30
         */
        avgDaysInSale: number
        /**
         * @deprecated
         * @description Средний пробег
         * @example 98326
         */
        avgMileage: number
        /**
         * @deprecated
         * @description Средняя цена
         * @example 1001000
         */
        avgPrice: number
        /**
         * @description ПЦП Maxposter (Прогнозная цена продажи с учетом состояния автомобиля)
         * @example 936000
         */
        avgPriceWithCorrection: number
        /**
         * Format: float
         * @deprecated
         * @description Средний год производства
         * @example 2012.9777777777779
         */
        avgYear: number
        /**
         * @deprecated
         * @description Максимальная цена
         * @example 1295000
         */
        maxPrice: number
        /**
         * @deprecated
         * @description Максимальная цена продажи с корректировкой
         * @example 1048000
         */
        maxPriceWithCorrection: number
        /**
         * @deprecated
         * @description Максимальная рекомендуемая закупочная цена
         */
        maxPurchasePrice: number | null
        /**
         * @deprecated
         * @description Минимальная цена
         * @example 730000
         */
        minPrice: number
        /**
         * @deprecated
         * @description Минимальная цена продажи с корректировкой
         * @example 834000
         */
        minPriceWithCorrection: number
        /**
         * @deprecated
         * @description Минимальная рекомендуемая закупочная цена
         */
        minPurchasePrice: number | null
        /**
         * @deprecated
         * @description Позиция оцениваемого ТС по цене
         * @example 1
         */
        pricePosition: number
        /**
         * @deprecated
         * @description Рекомендуемая закупочная цена
         */
        recommendedPurchasePrice: number | null
        /**
         * @description Число продаж, участвующих в оценке
         * @example 45
         */
        usefulSalesTotal: number
      }
      /** @description Ликвидность и другие показатели оборачиваемости автомобиля */
      liquidity: {
        accidentRating: components['schemas']['MaxPosterValuationLiquidityRating']
        /**
         * @description Количество авто на рынке
         * @example 20
         */
        actualMarketSales?: number | null
        /**
         * @description Среднее количество дней в продаже
         * @example 129155
         */
        averageDaysInSale: number
        /**
         * @description Средний пробег аналогичных ТС
         * @example 28
         */
        averageMarketMileage: number
        /**
         * @description Количество проданных на рынке
         * @example 100
         */
        completedMarketSales?: number | null
        mileageRating: components['schemas']['MaxPosterValuationLiquidityRating']
        popularityRating: components['schemas']['MaxPosterValuationLiquidityRating']
        /**
         * @description Количество уникальных предложений за 60 дней
         * @example 2945
         */
        totalMarketSales: number
        totalRating: components['schemas']['MaxPosterValuationLiquidityRating']
        turnoverRating: components['schemas']['MaxPosterValuationLiquidityRating']
      }
    } | null
    MaxPosterValuationLiquidityRating: {
      /**
       * @description Код уровня внимания
       * @example level-2
       */
      attentionCode: string
      /**
       * @description Рейтинг ликвидности
       * @example B
       */
      rating: string
      /**
       * @description Значение ликвидности (1-15)
       * @example 11
       */
      ratingValue: number
    } | null
    /** @description Оценка нового авто на основе рынка Авито */
    NewCarValuation: {
      /**
       * @description Средняя цена на основе объявлений
       * @example 2010000
       */
      avgPrice: number
      /**
       * @description Тип автомобиля
       * @example Универсал
       */
      bodyType: string
      /**
       * @description Бренд
       * @example ВАЗ (LADA)
       */
      brand: string
      /**
       * @description Комплектация
       * @example Enjoy'24
       */
      complectation: string
      /**
       * @description Привод
       * @example Передний
       */
      drive: string
      /**
       * @description Тип двигателя
       * @example Бензин
       */
      engineType: string
      /**
       * @description Максимальная цена на основе объявлений
       * @example 2050000
       */
      maxPrice: number
      /**
       * @description Средняя цена на основе объявлений
       * @example 2020000
       */
      medianPrice: number
      /**
       * @description Минимальная цена на основе объявлений
       * @example 2000000
       */
      minPrice: number
      /**
       * @description Модель
       * @example Largus Cross
       */
      model: string
      /**
       * @description Модификация
       * @example 1.6 MT (106 л.с.)
       */
      modification: string
      /**
       * @description Коробка передач
       * @example Механика
       */
      transmission: string
      /**
       * @description Год выпуска
       * @example 2025
       */
      year: number
    }
    /**
     * @deprecated
     * @description Дополнительная информация
     */
    OtherAutoteka: {
      /**
       * @deprecated
       * @description Статус `ok`, `warning`
       * @example ok
       */
      status: string
      /**
       * @deprecated
       * @description Текстовое описание
       * @example Оригинальный ПТС (Не обнаружены сведения о выдаче дубликата ПТС)
       */
      text: string
      /**
       * @deprecated
       * @description тип события `originalPTS`
       * @example originalPTS
       */
      type: string
    }
    /** @description Период владения */
    OwnersHistoryAutoteka: {
      /** @description Название организации, в случае юрлица */
      organisationName?: string | null
      /**
       * @deprecated
       * @description Владелец
       * @example Владелец 1
       */
      owner: string
      /**
       * @description Период владения
       * @example Октябрь 2011 - Июнь 2013
       */
      period: string
      /**
       * @description Регион владения
       * @example г. Москва
       */
      region: string
      /**
       * @description Тип владельца текстом
       * @example Юридическое лицо
       */
      title: string
      /**
       * Format: int64
       * @description Тип владельца `1` -  физлицо, `2` - юрлицо
       * @example 2
       */
      type: number
    }
    PackageAutoteka: {
      /**
       * @description Время начала действия текущего пакета
       * @example 2018-10-23 12:37:09.264301
       */
      createdTime: string
      /**
       * @description Время окончания действия текущего пакета
       * @example 2019-08-31 23:59:59
       */
      expireTime: string
      /**
       * Format: int64
       * @description Количество доступных отчётов в пакете
       * @example 5000
       */
      reportsCnt: number
      /**
       * Format: int64
       * @description Текущий остаток отчётов в пакете
       * @example 1754
       */
      reportsCntRemain: number
    }
    PreviewAutoteka: {
      data?: components['schemas']['PreviewDataAutoteka']
      /**
       * Format: int64
       * @description Id возвращаемый в методе /v1/request-preview/
       * @example 1
       */
      previewId: number
      /**
       * @description Государственный номер запрашиваемого авто
       * @example X777XX777
       */
      regNumber?: string
      /**
       * @description текущий статус готовности превью
       * @example processing
       * @enum {string}
       */
      status?: 'success' | 'processing' | 'notFound'
      /**
       * @description VIN номер запрашиваемого авто
       * @example XUUNF487JA0007223
       */
      vin?: string
    }
    PreviewDataAutoteka: {
      /**
       * @description Brand
       * @example BMW
       */
      brand?: string
      /**
       * @description Model
       * @example X5
       */
      model?: string
      /**
       * @description Если значение поля true, то у продавца есть автомобили, которые размещали на Авито в течение 3 месяцев. Есть шанс, что и эта машина куплена для перепродажи
       * @example false
       */
      sellByProSeller?: boolean
      /**
       * Format: int64
       * @description Year
       * @example 2015
       */
      year?: number
    } | null
    PreviewIdOnlyAutoteka: {
      /**
       * Format: int64
       * @description preview Id
       * @example 1
       */
      previewId: number
    }
    /**
     * @deprecated
     * @description Поле не поддерживается, актуальная структура AvitoPriceValuation
     */
    PriceStatAutoteka: {
      /**
       * @deprecated
       * @description Суммарная информация
       */
      recaps: components['schemas']['RecapAutoteka'][]
      report: components['schemas']['PriceStatReportAutoteka']
      /**
       * @description Полный или нет отчет
       * @example ok
       * @enum {string}
       */
      status: 'incomplete' | 'ok'
      /**
       * @description Источник данных
       * @example priceStat
       */
      type: string
    } | null
    /**
     * @deprecated
     * @description Подробная информация
     */
    PriceStatForNewCarsAutoteka: {
      /** @description Массив модификаций авто с ценами */
      items?: {
        name: string
        prices: {
          price: number
          pwt: string
          trim: string
        }[]
      }[]
      price?: {
        /**
         * Format: int64
         * @description Максимальная цена
         * @example 490000
         */
        highest?: number
        /**
         * Format: int64
         * @description Минимальная цена
         * @example 249000
         */
        lowest?: number
        /**
         * Format: int64
         * @description Медиана цены
         * @example 300000
         */
        median?: number
      }
    } | null
    /** @description Подробная информация */
    PriceStatReportAutoteka: {
      /**
       * Format: int64
       * @description Количество объявлений
       * @example 15
       */
      advertsCount?: number | null
      /**
       * Format: int64
       * @description Средний пробег
       * @example 100000
       */
      averageMileage?: number | null
      /**
       * Format: float
       * @description Среднее количество владельцев
       * @example 2.3
       */
      averageOwnersCount?: number | null
      price?: {
        /**
         * Format: int64
         * @description Средняя цена
         * @example 300000
         */
        average?: number
        /**
         * Format: int64
         * @description Максимальная цена
         * @example 490000
         */
        highest?: number
        /**
         * Format: int64
         * @description Минимальная цена
         * @example 249000
         */
        lowest?: number
      } | null
    }
    /** @description Данные о ПТС, СТС */
    PtsData: {
      /** @description Данные ПТС */
      pts?: {
        /**
         * Format: int64
         * @description Дата выдачи ПТС
         * @example 1566507600
         */
        createdAt?: number | null
        /**
         * @description Кем выдан ПТС
         * @example ТАМОЖНЯ: 11111111
         */
        organization?: string | null
        /** @description Номер ПТС */
        ptsNumber?: string
        /**
         * @description Дата запроса к источнику UnixTime
         * @example 1566507600
         */
        requestTime?: number
      }
      /** @description Данные СТС */
      sts?: {
        /**
         * Format: int64
         * @description Дата выдачи СТС
         * @example 1566507600
         */
        createdAt?: number | null
        /**
         * @description Дата запроса к источнику UnixTime
         * @example 1566507600
         */
        requestTime?: number
        /** @description Серия и номер СТС */
        stsNumber?: string
      }
    } | null
    RecallItem: {
      /**
       * @description Код отзывной
       * @example 19295382
       */
      complaintCode?: string | null
      completeInfo?: {
        /**
         * @description Город
         * @example Архангельск
         */
        city?: string | null
        /**
         * @description Дата прохождения отзывной кампании
         * @example 2018-12-18
         */
        completedAt?: string
        /**
         * @description Дилер, у которого была пройдена отзывная кампания
         * @example CENTR Arkhangelsk LLC
         */
        dealerName?: string | null
        /**
         * Format: int64
         * @description Пробег на момент прохождения отзывной кампании
         * @example 141746
         */
        mileage?: number | null
        /**
         * @description Регион
         * @example Архангельская область
         */
        region?: string | null
      } | null
      /**
       * @description Флаг прохождения отзывной кампании
       * @example true
       */
      completenessStatus?: boolean
      /**
       * @description Дата создания
       * @example 2019-03-11 00:00:00
       */
      createdAt: string
      /**
       * @description Ссылка
       * @example https://www.gost.ru//newsRST/redirect/news/1/5775
       */
      link: string | null
      /**
       * @description Организация
       * @example ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ФОЛЬКСВАГЕН ГРУП РУС"
       */
      organization: string
      /**
       * @description Причина
       * @example Причиной отзыва транспортных средств является возможный отказ дополнительного нагревательного элемента климатической установки из-за недостаточной фиксации разъемного соединения. Как следствие, это может привести к термическим повреждениям.
       */
      reason: string
      /**
       * @description Рекомендация
       * @example На транспортных средствах будет выполнена проверка разъёма нагревательного элемента.
       */
      recommendation: string | null
    }
    /** @description Отзывные кампании */
    Recalls: components['schemas']['RecallItem'][]
    RecapAutoteka: {
      description: string | null
      /** @example Обнаружено 5 неоплаченных штрафов */
      label: string
      /** @example caution */
      status: string
      /** @example fines */
      type: string
    }
    /** @description Представление отчета для партнерского API */
    ReportDataAutoteka: {
      accidents: {
        /** @description Подробная детализация ДТП */
        crashesHistory: components['schemas']['CrashesHistoryAutoteka'][]
        /**
         * Format: int64
         * @description Дата, на которую данные актуальны
         * @example 1520889000
         */
        requestTime: number | null
      }
      arbitrationCases: components['schemas']['ArbitrationCases']
      avitoAuctions: components['schemas']['AvitoAuctions']
      /** @description История публикации на Авито */
      avitoItems: components['schemas']['AvitoItemAutoteka'][]
      avitoPriceValuation?: components['schemas']['AvitoPriceValuation']
      carImage: components['schemas']['CarImageAutoteka']
      carsharingData?: components['schemas']['CarsharingDataAutoteka']
      /**
       * @deprecated
       * @description Подробная детализация ДТП, блок больше не поддерживается, рекомендуем смотреть блок accidents
       */
      crashesHistory: components['schemas']['CrashesHistoryAutoteka'][]
      customs: components['schemas']['Customs']
      diagnostics: components['schemas']['Diagnostics']
      epts?: components['schemas']['Epts']
      equipment: components['schemas']['EquipmentAutoteka']
      events: components['schemas']['EventsAutoteka']
      /** @description История владения, включающяя все события произошедшие с авто */
      eventsOthersHistory: components['schemas']['EventsOthersHistoryAutoteka'][]
      extendedSpecifications?: components['schemas']['ExtendedSpecifications']
      /** @description Размещения на других площадках */
      externalPlacements?: components['schemas']['ExternalPlacementAutoteka'][] | null
      fines?: components['schemas']['FinesAutoteka']
      head: components['schemas']['HeadAutoteka']
      insights?: components['schemas']['Insights']
      insurancePayments: components['schemas']['InsurancePayments']
      insurancePolicies?: components['schemas']['InsurancePoliciesAutoteka']
      leasing: components['schemas']['Leasing']
      maxPosterPriceValuation?: components['schemas']['MaxPosterPriceValuation']
      /**
       * @deprecated
       * @description Прочее
       */
      other: components['schemas']['OtherAutoteka'][]
      /**
       * @deprecated
       * @description История регистраций авто, блок не поддерживается, рекомендуем использовать registrationActions
       */
      ownersHistory: components['schemas']['OwnersHistoryAutoteka'][]
      paidFines?: components['schemas']['FinesAutoteka']
      priceStat?: components['schemas']['PriceStatAutoteka']
      priceStatForNewCars?: components['schemas']['PriceStatForNewCarsAutoteka']
      ptsData: components['schemas']['PtsData']
      /**
       * @description Тип ПТС
       * @example Бумажный оригинал
       */
      ptsType?: string | null
      recalls: components['schemas']['Recalls']
      /** @description История регистраций авто */
      registrationActions: {
        ownersHistory: components['schemas']['OwnersHistoryAutoteka'][]
        /**
         * Format: int64
         * @description Дата, на которую данные актуальны
         * @example 1520889000
         */
        requestTime: number | null
      }
      restrictions: components['schemas']['RestrictionsAutoteka']
      salvageCarAuctionRecords: components['schemas']['SalvageCarAuctionRecords']
      serviceInfo: components['schemas']['ServiceInfoAutoteka']
      taxiData?: components['schemas']['TaxiDataAutoteka']
      teaser?: components['schemas']['AutotekaTeaser']
      techInspectionHistory: components['schemas']['TechInspectionHistory']
      vehicleSpecifications?: components['schemas']['VehicleSpecifications']
    } | null
    ReportItem_autoteka: {
      /**
       * @description Дата и время генерации отчета
       * @example 2020-09-30 16:51:32.187629
       */
      createdAt: string
      /**
       * Format: int64
       * @description Идентификатор сгенерированного отчета, по которому его можно получить
       * @example 1
       */
      reportId: number
      /**
       * @description ВИН-номер
       * @example JSAJTDA4V00105...
       */
      vin: string
    }
    ReportWithoutDataAutoteka: {
      /**
       * Format: int64
       * @description Идентификатор сгенерированного отчета, по которому его можно получить
       * @example 1
       */
      reportId: number
      /**
       * @description Текущий статус генерации отчета
       * @example processing
       * @enum {string}
       */
      status: 'success' | 'processing'
    }
    Report_autoteka: {
      data?: components['schemas']['ReportDataAutoteka']
      /**
       * Format: uri
       * @description Ссылка на скачивание pdf версии отчета
       * @example https://autoteka.ru/report/pdf/uuid/2b88036a-c371-4d6b-a078-3966dab04957?vin=XTA000FY9H201S000
       */
      pdfLink?: string
      /**
       * Format: int64
       * @description Идентификатор сгенерированного отчета, по которому его можно получить
       * @example 1
       */
      reportId: number
      /**
       * @description Текущий статус генерации отчет
       * @example processing
       * @enum {string}
       */
      status: 'success' | 'processing' | 'notFound'
      /**
       * Format: uri
       * @description Ссылка на web версию отчета
       * @example https://autoteka.ru/report/web/uuid/2b88036a-c371-4d6b-a0ce-3966dab04966
       */
      webLink?: string
    }
    Report_autoteka_async: {
      data?: components['schemas']['ReportDataAutoteka']
      /**
       * Format: uri
       * @description Ссылка на скачивание pdf версии отчета
       * @example https://autoteka.ru/report/pdf/uuid/2b88036a-c371-4d6b-a078-3966dab04957?vin=XTA000FY9H201S000
       */
      pdfLink?: string
      /**
       * Format: int64
       * @description Идентификатор сгенерированного отчета, по которому его можно получить
       * @example 1
       */
      reportId: number
      /**
       * @description Текущий статус генерации отчет
       * @example processing
       * @enum {string}
       */
      status: 'success' | 'processing'
      /**
       * Format: uri
       * @description Ссылка на web версию отчета
       * @example https://autoteka.ru/report/web/uuid/2b88036a-c371-4d6b-a0ce-3966dab04966
       */
      webLink?: string
    }
    RequestByRegNumberAutoteka: {
      /** @description государственный номер запрашиваемого авто. */
      regNumber: string
    }
    RequestByVinAutoteka: {
      /** @description VIN или номер кузова запрашиваемого авто. */
      vin: string
    }
    RequestCatalogsResolve: {
      /** @description Выбранные значения параметров */
      fieldsValueIds: {
        /**
         * Format: int64
         * @description Идентификатор параметра из каталога Авито
         * @example 110000
         */
        id: number
        /**
         * Format: int64
         * @description Идентификатор значения из каталога Авито
         * @example 403153
         */
        valueId: number
      }[]
    }
    RequestGetLeads: {
      /** @description Последний успешно-прочитанный id, указывается для постраничной выдачи */
      lastId?: number | null
      /** @description Количество записей в ответе */
      limit?: number | null
      /** @description Идентификатор подписки */
      subscriptionId: number
    }
    RequestGetLeadsFeed: {
      cursor?: number | null
      /** @description Количество записей в ответе */
      limit: number
      platformId: number
    }
    RequestMonitoringAddVinBucket: {
      /** @description Набор VIN-номеров для дальнейшего заполнения реестра */
      data?: string[]
    }
    RequestMonitoringRemoveVinBucket: {
      /** @description Набор VIN-номеров для дальнейшего заполнения реестра */
      data?: string[]
    }
    RequestPreviewByItemIdAutoteka: {
      /** @description Идентификатор объявления на сайте. */
      itemId: number
    }
    RequestPreviewResponseBodyAutoteka: {
      result?: components['schemas']['RequestPreviewResponseDataAutoteka']
    }
    RequestPreviewResponseDataAutoteka: {
      preview?: components['schemas']['PreviewIdOnlyAutoteka']
    }
    RequestReportByPlateNumberAutoteka: {
      /** @description Регистрационный номер запрашиваемого авто. */
      plateNumber: string
    }
    RequestReportByPreviewIdAutoteka: {
      /** @description Идентификатор превью. */
      previewId: number
    }
    RequestReportByVehicleIdAutoteka: {
      /** @description Идентификатор запрашиваемого авто (vin/frame). */
      vehicleId: string
    }
    RequestTeaserByVehicleIdAutoteka: {
      /** @description Идентификатор запрашиваемого авто (vin/frame). */
      vehicleId: string
    }
    RequestValuationBySpecificationResolve: {
      location?: {
        /**
         * Format: float64
         * @example 55.755863189697266
         */
        lat: number
        /**
         * Format: float64
         * @example 37.617698669433594
         */
        long: number
      } | null
      /**
       * Format: int32
       * @description Пробег в км
       * @example 15000
       */
      mileage?: number | null
      specification: {
        /** @description Тип ТС */
        bodyType?: {
          /**
           * @description Значение параметра
           * @example Кроссовер
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        } | null
        /** @description Марка */
        brand: {
          /**
           * @description Значение параметра
           * @example BMW
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        }
        /** @description Цвет */
        color?: {
          /**
           * @description Значение параметра
           * @example Серебряный
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        } | null
        /** @description Комплектация */
        complectation?: {
          /**
           * @description Значение параметра
           * @example Престиж
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        } | null
        /** @description Количество дверей */
        doorsCount?: {
          /**
           * @description Значение параметра
           * @example 4
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        } | null
        /**
         * @description Поколение
         *
         *     Для оценки нового авто, параметр является необязательным, в таком случае возможно заполнение `{"label": "", "valueId": 0}`
         */
        generation: {
          /**
           * @description Значение параметра
           * @example 1 поколение
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        }
        /** @description Модель */
        model: {
          /**
           * @description Значение параметра
           * @example X3
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        }
        /**
         * @description Модификация
         *
         *     Для оценки нового авто, параметр является необязательным, в таком случае возможно заполнение `{"label": "", "valueId": 0}`
         */
        modification: {
          /**
           * @description Значение параметра
           * @example Люкс
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        }
        /**
         * @description Количество владельцев
         *
         *     Для оценки нового авто, параметр является необязательным, в таком случае возможно заполнение `{"label": "", "valueId": 0}`
         */
        ownersCount: {
          /**
           * @description Значение параметра
           * @example 4+
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        }
        /** @description Год выпуска */
        year: {
          /**
           * @description Значение параметра
           * @example 2013
           */
          label: string
          /**
           * Format: int64
           * @description Идентификатор значения параметра
           * @example 13815
           */
          valueId: number
        }
      }
      /**
       * @description Идентификатор авто (vin/frame).
       * @example XTA21110987654321
       */
      vehicleId?: string | null
    }
    ResponseGetLeads: {
      pagination?: {
        /** @example 1230414 */
        lastId?: number | null
      }
      result?: {
        /** @example 1230414 */
        id: number
        payload: {
          /** @example ВАЗ (LADA) */
          brand: string
          /** @example Не битый */
          condition: string
          /** @example a2430986 */
          controlCode: string
          description: string
          extraPayload: {
            /** @example Елец */
            cityName?: string | null
            /** @example false */
            hasPledge?: boolean | null
            /** @example false */
            isProSeller?: boolean | null
            /** @example 79309991023 */
            phoneNumber?: string | null
            /** @example Залог не найден */
            pledge?: string | null
            priceAnalytics?: {
              /** @example 29 */
              averageDaysInSale?: number | null
              /** @example 165000 */
              estimateSellPrice?: number
              /** @example B- */
              liquidityRating?: string
              /** @example 65000 */
              sellerPriceDiff?: number | null
            } | null
            /** @example Липецкая область */
            regionName?: string | null
            /** @example Частное лицо */
            seller?: string | null
            teaser?: {
              /** @example true */
              crashesBadge: boolean
              /** @example false */
              realMileageBadge: boolean
            } | null
          }
          /** @example 2021-01-10 16:07 */
          itemCreatedAt: string
          /** @example 2075191323 */
          itemId: number
          /** @example 2021-02-09 16:10 */
          itemUpdatedAt: string
          /** @example 125000 */
          mileage: number
          /** @example Kalina */
          model: string
          owners: string | null
          /** @example 230000 */
          price: number
          /** @example 637260 */
          regionId: number
          triggerPayload: {
            lastEvents?: {
              /** @example 2018-10-08 */
              eventDate?: string
              /** @example Сервисное обслуживание */
              eventTitle?: string
            }[]
          }
          /** @example https://avito.ru/elets/avtomobili/lada_kalina_2010_2075191323?utm_source=autoteka_leads&utm_medium=referral&utm_campaign=43|api */
          url: string
          /** @example XTA111830A0219549 */
          vin: string
          /** @example 2010 */
          year: number
        }
        /** @example 8132 */
        subscriptionId: number
      }[]
    }
    ResponseMonitoringAddVinBucket: {
      result?: {
        /** @description Набор невалидных идентификаторов авто, которые не были приняты */
        invalidVehicles?: {
          /** @description Описание ошибки */
          description?: string
          /** @description Идентификатор авто */
          vehicleID?: string
        }[]
        isOk: boolean
      }
    }
    ResponseMonitoringDeleteVinBucket: {
      result?: {
        isOk: boolean
      }
    }
    ResponseMonitoringGetRegAction: {
      /**
       * Format: int64
       * @description Дата актуальности в формате Unixtime
       */
      actualAt?: number | null
      /**
       * @description Марка авто
       * @example BMW
       */
      brand?: string
      /**
       * @description Модель авто
       * @example BMW
       */
      model?: string
      /**
       * Format: int64
       * @description Код регистрационного действий согласно справочнику
       * @example 11
       */
      operationCode: number
      /**
       * @deprecated
       * @description __DEPRECATED.__
       *     __Используйте поле operationDateFrom.__
       *     Дата регистрационного действия.
       * @example 2020-01-01
       */
      operationDate?: string
      /**
       * @description Дата начала рег. действия
       * @example 2020-01-01T00:00:00Z03:00
       */
      operationDateFrom?: string
      /**
       * @description Дата окончания рег. действия, null если длится по настоящее время
       * @example 2021-01-01T00:00:00Z03:00
       */
      operationDateTo?: string | null
      /**
       * Format: int64
       * @description Код владельца: 1 — юр. лицо, 2 — физ. лицо
       * @example 2
       * @enum {integer|null}
       */
      ownerCode?: 1 | 2 | 3 | 4 | null
      /**
       * @description VIN-номер авто
       * @example AA*************11
       */
      vin: string
      /**
       * Format: int64
       * @description Год выпуска авто
       * @example 2005
       */
      year?: number
    }
    ResponseMonitoringGetRegActions: {
      /** @description Массив рег. действий */
      data: components['schemas']['ResponseMonitoringGetRegAction'][]
      /** @description Объект, отвечающий за постраничное считывание информации */
      pagination: {
        /**
         * @description Наличие результата на следующей странице
         * @example true
         */
        hasNext?: boolean
        /**
         * @description Значение, которое нужно передать для получения информации со следующей страницы результата
         * @example 111111
         */
        nextCursor?: string
        /**
         * @description Ссылка для вычитывания следующей партии изменений
         * @example https://api.avito.ru/autoteka/v1/monitoring/get-reg-actions/?limit=10&cursor=111111
         */
        nextLink?: string
      }
    }
    ResponseMonitoringRemoveVinBucket: {
      result?: {
        /** @description Набор невалидных идентификаторов авто, которые не были приняты */
        invalidVehicles?: {
          /** @description Описание ошибки */
          description?: string
          /** @description Идентификатор авто */
          vehicleID?: string
        }[]
        isOk: boolean
      }
    }
    /** @description Ограничения */
    RestrictionsAutoteka: {
      /** @description Авто в залоге */
      pledge: {
        /** @description История залогов, подключается в отчёт по дополнительному согласованию */
        history: {
          pledges?: {
            /**
             * Format: int64
             * @description Дата закрытия залога
             * @example 1520889000
             */
            closedAt: number | null
            /**
             * Format: int64
             * @description Дата окончания действия договора
             * @example 1520889000
             */
            contractEnd: number | null
            /**
             * Format: int64
             * @description Дата начала действия договора
             * @example 1520889000
             */
            contractStart: number | null
            /** @description Номер документа */
            notificationId: string
            /** @description Залогодержатель */
            organizationName: string | null
          }[]
        } | null
        /** @description Подробная информация */
        pledgeAdditionalData: {
          /** @description Данные о найденных залогах */
          data: {
            /**
             * Format: int64
             * @deprecated
             * @description С какой даты в залоге в формате Unixtime (значение поле дублируется из корневого объекта)
             * @example 1521089000
             */
            dateFrom: number | null
            /**
             * Format: int64
             * @description До какого в залоге в формате Unixtime
             * @example 1521089000
             */
            dateTo: number
            /**
             * @deprecated
             * @description Наименование залогодержателя (значение поле дублируется из корневого объекта)
             */
            organizationName: string | null
          }[]
          /**
           * Format: int64
           * @description С какой даты в залоге в формате Unixtime
           * @example 1521089000
           */
          dateFrom?: number | null
          /**
           * @description наличие залога
           * @example true
           */
          hasPledge: boolean
          /** @description Наименование залогодержателя */
          organizationName?: string | null
          /**
           * @deprecated
           * @description источник `nbki`, `fciit`
           * @example nbki
           */
          source: string
          /**
           * Format: int64
           * @description Дата обновления в формате Unixtime
           * @example 1520889000
           */
          updatedAt: number
        }[]
        /**
         * Format: int64
         * @description Дата, на которую данные актуальны
         * @example 1520889000
         */
        requestTime: number | null
        /**
         * @description Статус блока
         * @example ok
         * @enum {string}
         */
        status: 'ok' | 'warning' | 'incomplete'
        /**
         * @description Текстовое описание
         * @example Не обнаружены сведения о нахождении в залоге
         */
        text: string
      }
      /** @description Ограничения на регистрационные действия */
      registration: {
        /** @description Подробная информация если есть ограничения */
        additionalInfo: {
          /**
           * Format: float
           * @description Сумма ограничения
           * @example 1234567.89
           */
          amount?: number | null
          data: string
          /**
           * @description Тип документа
           * @example Исполнительный лист
           */
          documentType?: string | null
          /**
           * @description Дата события
           * @example 2021-11-22
           */
          eventDate: string
          /**
           * @description Название организации
           * @example Судебный пристав
           */
          organisationName: string
          /**
           * @description Причины ограничения
           * @example Документ: 111111...
           */
          reasons?: string | null
          /**
           * @description Регион
           * @example Нижегородская область
           */
          region: string
          /**
           * @description Название ограничения
           * @example Запрет на регистрационные действия
           */
          restrictionName: string
          source: string
        }[]
        /**
         * Format: int64
         * @description Дата обновления в формате Unixtime
         * @example 1520889000
         */
        requestTime: number | null
        /**
         * @description Статус блока
         * @example ok
         * @enum {string}
         */
        status: 'ok' | 'warning' | 'incomplete'
        /**
         * @description Текстовое описание
         * @example Не обнаружены ограничения на регистрационные действия
         */
        text: string
      }
      /** @description Авто в угоне */
      stealing: {
        /** @description Подробная информация если авто в угоне */
        additionalInfo: {
          data: string
          source: string
        }[]
        /**
         * Format: int64
         * @description Дата обновления в формате Unixtime
         * @example 1520889000
         */
        requestTime: number | null
        /**
         * @description Статус блок
         * @example ok
         * @enum {string}
         */
        status: 'ok' | 'warning' | 'incomplete'
        /**
         * @description Текстовое описание
         * @example Не обнаружены сведения о нахождении в розыске
         */
        text: string
      }
    }
    /** @description Аварийные аукционы */
    SalvageCarAuctionRecords: {
      /** @example AUTOonline (Audatex) */
      auction: string
      /**
       * @description Дата события
       * @example 2005-12-22 10:05:19
       */
      date: string
      /**
       * @description Повреждения
       * @example Повреждения<br/>Общее: Багажник, Крыша, Капот
       */
      description?: string | null
      images?: string[]
      /**
       * @description Пробег в км
       * @example 15000
       */
      mileage?: number | null
      /** @example Краснодарский край, Новороссийск */
      region?: string | null
    }[]
    /** @description ДТП */
    ScoringAccidents: {
      /**
       * Format: int64
       * @description Дата актуальности данных
       * @example 1699882792
       */
      relevanceDate: number
      /**
       * @description Признак наличия ДТП
       * @example true
       */
      value: boolean
    } | null
    ScoringAutoteka: {
      /**
       * Format: int64
       * @description Дата формирования отчета
       * @example 1699882792
       */
      createdAt: number
      data?: components['schemas']['ScoringDataAutoteka']
      /**
       * @description Признак, что формирование всех блоков скоринга завершено
       * @example true
       */
      isCompleted: boolean
      /**
       * Format: int64
       * @description Идентификатор скоринга, по которому его можно получить
       * @example 1
       */
      scoringId: number
    }
    /** @description Представление скоринга для партнерского API */
    ScoringDataAutoteka: {
      accidents?: components['schemas']['ScoringAccidents']
      /** @description Каршеринг */
      carsharing?: {
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак, что использовалось в каршеринге
         * @example true
         */
        value: boolean
      } | null
      /** @description ЭПТС */
      epts?: {
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Статус ЭПТС
         * @example Действующий
         */
        status: string
      } | null
      /** @description Ввоз из-за рубежа */
      import?: {
        /**
         * @description Получатель
         * @example ООО Авто
         */
        company?: string | null
        /**
         * @description Страна вывоза
         * @example Япония
         */
        fromCountry?: string | null
        /**
         * Format: int64
         * @description Дата прохождения таможни
         * @example 1641053779
         */
        importDate?: number | null
        /**
         * @description Тип получателя
         * @example company
         * @enum {string|null}
         */
        ownerType?: 'unknown' | 'company' | 'person' | null
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак, что авто было ввезено не новым
         * @example true
         */
        value: boolean
      } | null
      /** @description Лизинг */
      leasing?: {
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак, что авто находится в лизинге
         * @example true
         */
        value: boolean
      } | null
      placements?: components['schemas']['ScoringPlacements']
      /** @description Залоги */
      pledges?: {
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак наличия залогов
         * @example true
         */
        value: boolean
      } | null
      /** @description Оценка автомобиля */
      priceEvaluation?: {
        /**
         * @description Средняя цена по рынку
         * @example 950000
         */
        avgMarketPrice?: number | null
        /**
         * @description Средний пробег аналогов
         * @example 50000
         */
        avgMileage?: number | null
        /**
         * @description Средняя цена с учетом состояния автомобиля
         * @example 936000
         */
        avgPriceWithCondition?: number | null
        /**
         * Format: float
         * @description Средний год выпуска аналогов
         * @example 2012.9999
         */
        avgYear?: number | null
        /**
         * @description Ссылка на страницу Авито IMV вида https://www.avito.ru/au-imv-info/2963331288
         * @example https://www.avito.ru/au-imv-info/2963331288
         */
        imvUrl?: string | null
        /**
         * @description Количество машин, учтенных в оценке
         * @example 121
         */
        itemsCount?: number | null
        /**
         * @description Максимальная граница цены похожих автомобилей по совершенным сделкам
         * @example 1000000
         */
        maxPrice?: number | null
        /**
         * @description Минимальная граница цены похожих автомобилей по совершенным сделкам
         * @example 800000
         */
        minPrice?: number | null
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
      } | null
      /** @description Регистрации авто */
      registrations?: {
        /**
         * @description Признак наличия действующей регистрации
         * @example true
         */
        isActual: boolean
        /**
         * @description Количество владельцев
         * @example 3
         */
        owners: number
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
      } | null
      /** @description Ограничения */
      restrictions?: {
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак наличия ограничений на регистрационные действия
         * @example true
         */
        value: boolean
      } | null
      seriousDamage?: components['schemas']['ScoringSeriousDamage']
      /** @description Угоны */
      stealing?: {
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак нахождения в угоне
         * @example true
         */
        value: boolean
      } | null
      /** @description Такси */
      taxi?: {
        /**
         * @description Признак наличия действующего разрешения
         * @example true
         */
        isActual: boolean
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
        /**
         * @description Признак, что использовалось в такси
         * @example true
         */
        value: boolean
      } | null
      techSpecification?: components['schemas']['ScoringTechSpecification']
    } | null
    ScoringIdResultAutoteka: {
      /**
       * Format: int64
       * @description Идентификатор скоринга, по которому его можно получить
       * @example 1
       */
      scoringId: number
    }
    /** @description Нормализованное значение */
    ScoringNormalizedValue: {
      value: string
      /** @description Идентификатор значения из каталога Авито */
      valueId: number | null
    } | null
    /** @description Размещения объявлений */
    ScoringPlacements: {
      /**
       * @description Есть активное размещение
       * @example true
       */
      isActive?: boolean | null
      /**
       * Format: int64
       * @description Дата последнего размещения
       * @example 1699882792
       */
      lastPlacementDate?: number | null
      /**
       * @description Признак "Битый" в последнем размещении
       * @example true
       */
      lastPlacementIsCrashed?: boolean | null
      /**
       * Format: int64
       * @description Цена в последнем размещении
       * @example 2500000
       */
      lastPlacementPrice?: number | null
      /**
       * Format: int64
       * @description Минимальная цена среди всех размещений
       * @example 2100000
       */
      minPrice?: number | null
      /**
       * Format: int64
       * @description Общее количество размещений
       * @example 3
       */
      number?: number | null
      /**
       * Format: int64
       * @description Количество размещений с меткой "Битый"
       * @example 3
       */
      placementsWithCrashesNumber?: number | null
      /**
       * Format: int64
       * @description Дата актуальности данных
       * @example 1699882792
       */
      relevanceDate: number
    } | null
    /** @description Серьезные повреждения */
    ScoringSeriousDamage: {
      /**
       * Format: int64
       * @description Дата актуальности данных
       * @example 1699882792
       */
      relevanceDate: number
      /** @description Аукционы аварийных автомобилей */
      salvageCarAuctions?: {
        /**
         * Format: int64
         * @description Количество аукционов
         * @example 2
         */
        auctionsCount: number
        /**
         * Format: int64
         * @description Дата последнего аукциона
         * @example 1678599575
         */
        lastAuctionDate: number
        /**
         * Format: int64
         * @description Дата актуальности данных
         * @example 1699882792
         */
        relevanceDate: number
      } | null
      /**
       * @description Признак наличия серьезных повреждений
       * @example true
       */
      value: boolean
    } | null
    ScoringTechSpecification: {
      bodyNumber?: {
        /** @description Строковое значение */
        gibddValue: string
      } | null
      /** @description Бренд */
      brand?: {
        /**
         * @description Текстовое значение
         * @example BMW
         */
        gibddValue?: string | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
      chasisNumber?: {
        /** @description Строковое значение */
        gibddValue: string
      } | null
      /** @description Цвет кузова */
      color?: {
        /**
         * @description Текстовое значение
         * @example Синий
         */
        gibddValue?: string
      } | null
      engineNumber?: {
        /** @description Строковое значение */
        gibddValue: string
      } | null
      /** @description Тип двигателя */
      engineType?: {
        /**
         * @description Текстовое значение
         * @example Бензиновый
         */
        gibddValue?: string | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
      /** @description Количество лошадиных сил */
      horsepower?: {
        /**
         * Format: int64
         * @description Числовое значение
         * @example 265
         */
        gibddValue?: number | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
      /** @description Разрешенная максимальная масса */
      maxWeight?: {
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1645
         */
        gibddValue?: number
      } | null
      /** @description Модель */
      model?: {
        /**
         * @description Текстовое значение
         * @example Serie 1
         */
        gibddValue?: string | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
      /** @description Масса без нагрузки */
      netWeight?: {
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1245
         */
        gibddValue?: number
      } | null
      /** @description Категория ТС */
      vehicleCategory?: {
        /**
         * @description Текстовое значение
         * @example D
         * @enum {string}
         */
        gibddValue?: 'A' | 'B' | 'C' | 'D' | 'E' | 'O' | 'M1' | 'M1G' | 'N1'
      } | null
      /** @description Тип ТС */
      vehicleType?: {
        /**
         * @description Текстовое значение
         * @enum {string|null}
         */
        gibddValue?:
          | 'Автобусы прочие'
          | 'Грузовой бортовой'
          | 'Грузовой прочий'
          | 'Грузовой фургон'
          | 'Грузовые автомобили бортовые'
          | 'Грузовые автомобили фургоны'
          | 'Легковое купе'
          | 'Легковой прочий'
          | 'Легковой седан'
          | 'Легковой универсал'
          | 'Легковой хэтчбек (комби)'
          | 'Легковые автомобили кабриолет'
          | 'Легковые автомобили комби (хэтчбек)'
          | 'Легковые автомобили купе'
          | 'Легковые автомобили прочие'
          | 'Легковые автомобили седан'
          | 'Легковые автомобили универсал'
          | 'Мотоциклы'
          | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
      /** @description Объем двигателя */
      volume?: {
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2996
         */
        gibddValue: number | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
      /** @description Год выпуска */
      year?: {
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2008
         */
        gibddValue: number | null
        normalizedValue?: components['schemas']['ScoringNormalizedValue']
      } | null
    } | null
    /** @description Сервисная информация об отчете */
    ServiceInfoAutoteka: {
      /** @description Информация о завершенности отчета */
      reportCompleteStatus: {
        /**
         * @description Полный или нет отчет: `incomplete`, `ok`
         * @example incomplete
         */
        status: string
        /**
         * @deprecated
         * @description Источники по которым не удалось получить данные
         */
        unavailableSources: {
          /**
           * @description Тип данных
           * @example ownersHistory
           */
          dataType: string
          /**
           * @description Источник
           * @example ownersHistory
           */
          source: string
        }[]
      }
    }
    SpecificationEquipmentAutoteka: {
      /** @description Номер кузова */
      bodyNumber: {
        /**
         * @description Номер кузова
         * @example Номер кузова
         */
        title: string
        /** @description Строковое значение */
        value: string
      } | null
      /** @description Тип ТС */
      bodyType: {
        /**
         * @description Заголовок
         * @example Категория ТС
         */
        title: string
        /**
         * @description Текстовое значение
         * @enum {string}
         */
        value:
          | 'Автобусы прочие'
          | 'Грузовой бортовой'
          | 'Грузовой прочий'
          | 'Грузовой фургон'
          | 'Грузовые автомобили бортовые'
          | 'Грузовые автомобили фургоны'
          | 'Легковое купе'
          | 'Легковой прочий'
          | 'Легковой седан'
          | 'Легковой универсал'
          | 'Легковой хэтчбек (комби)'
          | 'Легковые автомобили кабриолет'
          | 'Легковые автомобили комби (хэтчбек)'
          | 'Легковые автомобили купе'
          | 'Легковые автомобили прочие'
          | 'Легковые автомобили седан'
          | 'Легковые автомобили универсал'
          | 'Мотоциклы'
      } | null
      /** @description Бренд */
      brand: {
        /**
         * @description Заголовок
         * @example Бренд
         */
        title: string
        /**
         * @description Текстовое значение
         * @example BMW
         * @enum {string}
         */
        value:
          | 'AUDI'
          | 'BENTLEY'
          | 'BMW'
          | 'CADILLAC'
          | 'CHERY'
          | 'CHEVROLET'
          | 'CHRYSLER'
          | 'CITROEN'
          | 'DACIA'
          | 'DAEWOO'
          | 'DAF'
          | 'DATSUN'
          | 'DODGE'
          | 'FIAT'
          | 'FORD'
          | 'FREIGHTLINER'
          | 'GAZ'
          | 'GEELY'
          | 'GENESIS'
          | 'GREAT WALL'
          | 'HONDA'
          | 'HYUNDAI'
          | 'Honda'
          | 'INFINITI'
          | 'ISUZU'
          | 'IVECO'
          | 'JEEP'
          | 'Jaguar'
          | 'KAMAZ'
          | 'KIA'
          | 'LADA'
          | 'LEXUS'
          | 'LIFAN'
          | 'Land Rover'
          | 'MAN'
          | 'MAZ'
          | 'MAZDA'
          | 'MERCEDES'
          | 'MERCEDES-BENZ'
          | 'MINI'
          | 'MITSUBISHI'
          | 'NISSAN'
          | 'OPEL'
          | 'PEUGEOT'
          | 'PORSCHE'
          | 'RENAULT'
          | 'ROVER'
          | 'SEAZ'
          | 'SKODA'
          | 'SMART'
          | 'SSANGYONG'
          | 'SUBARU'
          | 'Suzuki'
          | 'TAGAZ'
          | 'TOYOTA'
          | 'UAZ'
          | 'VAZ'
          | 'VOLKSWAGEN'
          | 'VOLVO'
          | 'YAMAHA'
          | 'ZAZ'
      } | null
      /** @description Цвет кузова */
      color: {
        /**
         * @description Текстовое значение
         * @example Синий
         */
        description: string
        /**
         * @description Заголовок
         * @example Цвет
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Синий
         * @enum {string}
         */
        value:
          | 'Бежево-Серый'
          | 'Бежевый'
          | 'Белый'
          | 'Белый Металлик'
          | 'Белый Перламутр'
          | 'Белый Черный'
          | 'Белый-Желтый-Серый'
          | 'Белый/Черный'
          | 'Бордовый'
          | 'Бронзовый'
          | 'Вишнево-Красный'
          | 'Жемчужно-Белый'
          | 'Зеленый'
          | 'Золотисто-Коричневый'
          | 'Золотисто-Охристый'
          | 'Коричневый'
          | 'Красный'
          | 'Мальва'
          | 'Многоцветный (Красный, Чёрный)'
          | 'Мурена (Тёмно-Синий)'
          | 'Оранжево-Красный'
          | 'Оранжево-Черный'
          | 'Оранжевый'
          | 'Оранжевый Перламутровый'
          | 'Оранжевый Черный'
          | 'Перлам-Серебристый'
          | 'Перламутрово-Серебристый'
          | 'Светло-Коричневый'
          | 'Светло-Серый'
          | 'Светло-Синий'
          | 'Серебристо-Белый'
          | 'Серебристый'
          | 'Серо Зеленый'
          | 'Серо-Зеленый'
          | 'Серо-Золотистый'
          | 'Серо-Коричневый'
          | 'Серо-Сине-Зеленый Металлик'
          | 'Серо-Синий'
          | 'Серый'
          | 'Сине-Черный'
          | 'Синий'
          | 'Синий Темный'
          | 'Скат'
          | 'Средний Серо-Зеленый'
          | 'Стальной'
          | 'Темно Серый'
          | 'Темно-Бордовый'
          | 'Темно-Вишневый'
          | 'Темно-Голубой'
          | 'Темно-Зеленый'
          | 'Темно-Серый'
          | 'Темно-Синий'
          | 'Черно-Серый'
          | 'Черный'
          | 'Черный Металлик'
      } | null
      /** @description Номер двигателя */
      engineNumber: {
        /**
         * @description Номер двигателя
         * @example Номер двигателя
         */
        title: string
        /** @description Строковое значение */
        value: string
      } | null
      /** @description Тип двигателя */
      engineType: {
        /**
         * @description Заголовок
         * @example Тип двигателя
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Бензиновый
         * @enum {string}
         */
        value:
          | 'Бензин'
          | 'Дизель'
          | 'Электро'
          | 'Газ'
          | 'Гибрид'
          | 'Бензиновый на сжиженном газе'
          | 'Бензиновый на сжатом газе'
          | 'Дизельный на сжиженном газе'
          | 'Дизельный на сжатом газе'
          | 'Электро-бензиновый'
          | 'Электро-дизельный'
      } | null
      /** @description Количество лошадиных сил */
      horsepower: {
        /**
         * @description Текстовое значение
         * @example 265 л.с.
         */
        description: string
        /**
         * @description Заголовок
         * @example Мощность
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 265
         */
        value: number
      } | null
      /** @description Разрешенная максимальная масса */
      maxWeight: {
        /**
         * @description Текстовое значение
         * @example 1645 кг
         */
        description: string
        /**
         * @description Заголовок
         * @example Разрешенная максимальная масса
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1645
         */
        value: number
      } | null
      /** @description Модель */
      model: {
        /**
         * @description Заголовок
         * @example Модель
         */
        title: string
        /**
         * @description Текстовое значение
         * @example Serie 1
         */
        value: string
      } | null
      /** @description Масса без нагрузки */
      netWeight: {
        /**
         * @description Текстовое значение
         * @example 1245 кг
         */
        description: string
        /**
         * @description Заголовок
         * @example Масса без нагрузки
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 1245
         */
        value: number
      } | null
      /** @description Категория ТС */
      vehicleCategory: {
        /**
         * @description Заголовок
         * @example Категория ТС
         */
        title: string
        /**
         * @description Текстовое значение
         * @example D
         * @enum {string}
         */
        value: 'A' | 'B' | 'C' | 'D' | 'E' | 'O' | 'M1' | 'M1G' | 'N1'
      } | null
      /** @description Объем двигателя */
      volume: {
        /**
         * @description Текстовое значение
         * @example 2 996 см³
         */
        description: string
        /**
         * @description Заголовок
         * @example Объем двигателя
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2996
         */
        value: number
      } | null
      /** @description Год выпуска */
      year: {
        /**
         * @description Заголовок
         * @example Год выпуска
         */
        title: string
        /**
         * Format: int64
         * @description Числовое значение
         * @example 2008
         */
        value: number
      } | null
    } | null
    SpecificationIdResultAutoteka: {
      /**
       * Format: int64
       * @description Идентификатор спецификации, по которому ее можно получить
       * @example 1
       */
      specificationId: number
    }
    SpecificationNormalizedSpecificationAutoteka: {
      /** @description Кузов */
      bodyType: {
        /**
         * @description Значение
         * @example Внедорожник
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331231
         */
        valueId: number
      } | null
      /** @description Бренд */
      brand: {
        /**
         * @description Значение
         * @example Chery
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 329210
         */
        valueId: number
      } | null
      /** @description Емкость */
      capacity: {
        /**
         * Format: float64
         * @description Значение
         * @example 129
         */
        value: number
      } | null
      /** @description Комплектация */
      complectation: {
        /**
         * @description Значение
         * @example Comfort
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 369961
         */
        valueId: number
      } | null
      /** @description Количество дверей */
      doorsCount: {
        /**
         * Format: int64
         * @description Значение
         * @example 5
         */
        value: number
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331245
         */
        valueId: number
      } | null
      /** @description Привод */
      drive: {
        /**
         * @description Значение
         * @example Передний
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331251
         */
        valueId: number
      } | null
      /** @description Объем двигателя */
      engine: {
        /**
         * Format: float64
         * @description Значение
         * @example 2.4
         */
        value: number
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331775
         */
        valueId: number
      } | null
      /** @description Тип двигателя */
      engineType: {
        /**
         * @description Значение
         * @example Бензин
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331247
         */
        valueId: number
      } | null
      /** @description Поколение */
      generation: {
        /**
         * @description Значение
         * @example T11 (2005—2013)
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 332287
         */
        valueId: number
      } | null
      /** @description Модель */
      model: {
        /**
         * @description Значение
         * @example Tiggo (T11)
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 330887
         */
        valueId: number
      } | null
      /** @description Модификация */
      modification: {
        /**
         * @description Значение
         * @example 2.4 MT (129 л.с.)
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 408424
         */
        valueId: number
      } | null
      /** @description Тип КПП */
      transmission: {
        /**
         * @description Значение
         * @example Механика
         */
        value: string
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331254
         */
        valueId: number
      } | null
      /** @description Руль */
      wheel: {
        /**
         * @description Значение
         * @example Левый
         */
        value: string
      } | null
      /** @description Год выпуска */
      year: {
        /**
         * Format: int64
         * @description Значение
         * @example 2007
         */
        value: number
        /**
         * Format: int64
         * @description Идентификатор значения
         * @example 331123
         */
        valueId: number
      } | null
    } | null
    SpecificationResultAutoteka: {
      equipment: components['schemas']['SpecificationEquipmentAutoteka']
      normalizedSpecification: components['schemas']['SpecificationNormalizedSpecificationAutoteka']
      /**
       * @description Регистрационный номер
       * @example X777XX777
       */
      plateNumber: string | null
      /**
       * Format: int64
       * @description Идентификатор спецификации
       * @example 157987
       */
      specificationId: number
      /**
       * @description Статус `success`, `processing`, `notFound`
       * @example success
       */
      status: string
      /**
       * @description Идентификатор запрашиваемого авто (vin/frame)
       * @example XUUNF487JA0007223
       */
      vehicleId: string | null
    }
    /** @description Сведения об использовании в такси */
    TaxiDataAutoteka: {
      /** @description Список записей об использовании в такси */
      events: components['schemas']['TaxiDataEventAutoteka'][]
      /**
       * @deprecated
       * @description Суммарная информация
       */
      recaps: components['schemas']['RecapAutoteka'][]
      /**
       * @description Дата запроса к источнику UnixTime
       * @example 1566507600
       */
      requestTime?: number | null
    } | null
    /** @description Информация об использовании в такси */
    TaxiDataEventAutoteka: {
      /**
       * @description Дата начала действия разрешения в UnixTime, если 0 - дата неизвестна
       * @example 1566507600
       */
      dateFrom: number
      /**
       * @description Дата окончания действия разрешения в UnixTime
       * @example 1566507600
       */
      dateTo?: number | null
      /**
       * @description Признак действующего разрешения
       * @example true
       */
      isActual: boolean
      /**
       * @description Номер разрешения
       * @example 51021
       */
      permitNumber: string
      /**
       * @description Регион
       * @example Краснодарский край
       */
      regionName: string
    }
    /** @description Тизер */
    Teaser: {
      /** @description Доступная информация в отчете */
      availableInfo: {
        /**
         * @description Порядковый номер в тизере (общая нумерация с элементами insights)
         * @example 2
         */
        index: number
        /**
         * @description Название группы
         * @example Проверка на ДТП
         */
        title: string
        /** @description Название подпунктов для формирования строки */
        values: string[]
      }[]
      /** @description Информация о размещениях на Авито */
      avitoPlacements: {
        /**
         * @description Количество фото
         * @example 3
         */
        photosCount: number
        /**
         * @description Количество размещений
         * @example 2
         */
        placementsCount: number
      }
      /**
       * @description Бренд авто
       * @example Audi
       */
      brand: string | null
      /**
       * @description Цвет авто
       * @example Черный
       */
      color: string | null
      /** @description Перечень инсайтов */
      insights: {
        /** @description Порядковый номер в тизере (общая нумерация с элементами availableInfo) */
        index: number
        /**
         * @description Текстовое описание признака
         * @example 6 владельцев по ПТС
         */
        title: string
      }[]
      /** @description Информация о пробеге */
      mileage: {
        /** @description Реальный пробег */
        isRealMileage: boolean
      }
      /**
       * @description Модель авто
       * @example A4
       */
      model: string | null
      /** @description Информация о владельцах */
      owners: {
        /**
         * @description Количество владельцев
         * @example 2
         */
        count: number
      }
      /** @description Информация о сервисном обслуживании */
      service: {
        /**
         * @description Количество записей
         * @example 12
         */
        recordsCount: number
        /**
         * @description Дата первой записи пробега
         * @example 2015-08-06 03:00:00
         */
        recordsFirstDate: string
      }
      /**
       * @description Год выпуска авто
       * @example 2012
       */
      year: number | null
    } | null
    /** @description Тизер и статус готовности */
    TeaserResponse: {
      data: components['schemas']['Teaser']
      /**
       * @description Статус готовности
       * @enum {string}
       */
      status: 'success' | 'processing'
      /**
       * @description Идентификатор тизера
       * @example 1234567
       */
      teaserId: number
    }
    TeaserWithoutDataAutoteka: {
      /**
       * @description Текущий статус генерации тизера
       * @example processing
       * @enum {string}
       */
      status: 'success' | 'processing'
      /**
       * Format: int64
       * @description Идентификатор сгенерированного тизера, по которому его можно получить
       * @example 1
       */
      teaserId: number
    }
    /** @description Сведения о технических осмотрах */
    TechInspectionHistory: {
      /** @description Список записей о прохождении тех. осмотра */
      events: components['schemas']['TechInspectionHistoryEvent'][]
    } | null
    /** @description Информация о событии прохождения тех. осмотра */
    TechInspectionHistoryEvent: {
      /**
       * @description Номер диагностической карты
       * @example 65320071902728
       */
      cardNumber: string | null
      /**
       * Format: int64
       * @description Действителен до
       * @example 1566507600
       */
      endDate: number | null
      /**
       * Format: int64
       * @description Пробег
       * @example 75000
       */
      mileage: number | null
      /**
       * Format: int64
       * @description Дата техосмотра
       * @example 1566507600
       */
      startDate: number
    }
    ValuationBySpecificationResponseBodyAutoteka: {
      result?: components['schemas']['ValuationBySpecificationResultAutoteka']
    }
    ValuationBySpecificationResultAutoteka: {
      /**
       * @description Марка
       * @example BMW
       */
      brand: string
      /**
       * Format: int64
       * @description Пробег запрашиваемого авто
       * @example 30000
       */
      mileage?: number | null
      /**
       * @description Модель
       * @example X5
       */
      model: string
      /**
       * @description Массив оценок новых авто с аналогичной спецификацией.
       *
       *     Чтобы подключить эту возможность, обратитесь к менеджеру Автотеки.
       */
      newCarValuations?: components['schemas']['NewCarValuation'][] | null
      /**
       * @description Количество владельцев
       * @example 4+
       */
      ownersCount: string
      /**
       * @description Статус `success`, `notFound`
       * @example success
       */
      status: string
      valuation: components['schemas']['AvitoPriceValuation']
      /**
       * @description Идентификатор запрашиваемого авто (vin/frame)
       * @example XUU09876543215671
       */
      vehicleId: string | null
      /**
       * Format: int64
       * @description Год выпуска запрашиваемого авто
       * @example 2005
       */
      year: number
    }
    /**
     * @deprecated
     * @description Спецификация автомобиля, поле не поддерживается, актуальная информация в блоке Equpment
     */
    VehicleSpecifications: {
      /**
       * @deprecated
       * @description Список параметров спецификации
       */
      events: components['schemas']['VehicleSpecificationsParam'][]
      /**
       * @deprecated
       * @description Дата запроса к источнику UnixTime
       * @example 1566507600
       */
      requestTime: number
    } | null
    /**
     * @deprecated
     * @description Параметр спецификации автомобиля. Количество параметров со временем может пополняться. В примере указаны наиболее частые.
     */
    VehicleSpecificationsParam: {
      /**
       * @deprecated
       * @description ключ параметра
       * @enum {string}
       */
      key: 'mainModel' | 'model' | 'transmission' | 'doors' | 'manufactured'
      /**
       * @deprecated
       * @description расшифровка ключа на русском
       * @enum {string}
       */
      name:
        'Обозначение модели' | 'Код модели автомобиля' | 'Тип коробки передач' | 'Количество дверей' | 'Модельный год'
      /**
       * @deprecated
       * @description значение параметра
       * @enum {string}
       */
      value: 'LEXUS NX200T/300H' | 'AGZ15R-AWTLTW' | '6-ступенч. АКПП ZF 6HP28' | '4' | '2008'
    }
    forbiddenError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 403
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Forbidden
         */
        message: string
      }
    }
    internalError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 500
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Service is temporary unavailable
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
    tooManyRequestsError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 429
         */
        code: number
      }
    }
    validatingError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 400
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Validation error
         */
        message: string
      }
    }
  }
  responses: never
  parameters: {
    /**
     * @description Токен для авторизации
     * @example Bearer ACCESS_TOKEN
     */
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
  catalogsResolve: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['RequestCatalogsResolve']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CatalogsResolveResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getLeads: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['RequestGetLeads']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseGetLeads']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description У пользователя нет доступа к разделу */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  monitoringBucketAdd: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['RequestMonitoringAddVinBucket']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseMonitoringAddVinBucket']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description У пользователя нет доступа к разделу */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  monitoringBucketDelete: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseMonitoringDeleteVinBucket']
        }
      }
      /** @description У пользователя нет доступа к разделу */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  monitoringBucketRemove: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['RequestMonitoringRemoveVinBucket']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseMonitoringRemoveVinBucket']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description У пользователя нет доступа к разделу */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  monitoringGetRegActions: {
    parameters: {
      query?: {
        /**
         * @description Позиция курсора
         * @example 111111
         */
        cursor?: string | null
        /**
         * @description Отбирать рег. действия не раньше указанной даты (включительно)
         * @example 2020-01-01
         */
        operationDateFrom?: string | null
        /**
         * @description Количество строк в результате
         * @example 10
         */
        limit?: number | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseMonitoringGetRegActions']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description У пользователя нет доступа к разделу */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getActivePackage: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetActivePackageResponseBodyAutoteka']
        }
      }
      /** @description Активный пакет не найден */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postPreviewByVin: {
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
         *       "vin": "XTA210990Y2766111"
         *     }
         */
        'application/json': components['schemas']['RequestByVinAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RequestPreviewResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getPreview: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор превью */
        previewId: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetPreviewResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postReport: {
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
         *       "previewId": 123
         *     }
         */
        'application/json': components['schemas']['RequestReportByPreviewIdAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateReportResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Данные по превью не найдены */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postReportByVehicleId: {
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
         *       "vehicleId": "XTA210990Y2766111"
         *     }
         */
        'application/json': components['schemas']['RequestReportByVehicleIdAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateReportResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getReportList: {
    parameters: {
      query?: {
        /** @description Идентификатор отчета для получения данных постранично. */
        lastReportId?: number | null
        /** @description Количество отчетов в результате */
        limit?: number | null
        /** @description Фильтр по VIN или номеру кузова */
        vin?: string | null
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetReportsListResponseDataAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getReport: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор отчета. */
        report_id: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetReportAsync']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Отчет не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postPreviewByExternalItem: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          itemId?: string
          site?: string
        }
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RequestPreviewResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postPreviewByItemId: {
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
         *       "itemId": 1234567
         *     }
         */
        'application/json': components['schemas']['RequestPreviewByItemIdAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RequestPreviewResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Preview не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: {
              /**
               * Format: int32
               * @description Код ошибки
               * @example 400
               */
              codex: number
              /**
               * @description Сообщение об ошибке
               * @example Service is temporary unavailable
               */
              message: string
            }
          }
        }
      }
    }
  }
  postPreviewByRegNumber: {
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
         *       "regNumber": "X777XX777"
         *     }
         */
        'application/json': components['schemas']['RequestByRegNumberAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RequestPreviewResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  scoringByVehicleId: {
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
         *       "vehicleId": "XTA210990Y2766111"
         *     }
         */
        'application/json': components['schemas']['RequestReportByVehicleIdAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateScoringResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  scoringGetById: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор скоринга. */
        scoring_id: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetScoring']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Отчет не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  specificationByPlateNumber: {
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
         *       "plateNumber": "X793YX77"
         *     }
         */
        'application/json': components['schemas']['RequestReportByPlateNumberAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateSpecificationResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  specificationByVehicleId: {
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
         *       "vehicleId": "XTA210990Y2766111"
         *     }
         */
        'application/json': components['schemas']['RequestReportByVehicleIdAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateSpecificationResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  specificationGetById: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор спецификации */
        specificationID: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetSpecificationResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postSyncCreateReportByRegNumber: {
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
         *       "regNumber": "X777XX777"
         *     }
         */
        'application/json': components['schemas']['RequestByRegNumberAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetReport']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postSyncCreateReportByVin: {
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
         *       "vin": "XTA210990Y2766111"
         *     }
         */
        'application/json': components['schemas']['RequestByVinAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetReport']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  postTeaser: {
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
         *       "vehicleId": "XTA210990Y2766111"
         *     }
         */
        'application/json': components['schemas']['RequestTeaserByVehicleIdAutoteka']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateTeaserResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getTeaser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор тизера. */
        teaser_id: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TeaserResponse']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  valuationBySpecification: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['RequestValuationBySpecificationResolve']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ValuationBySpecificationResponseBodyAutoteka']
        }
      }
      /** @description Ошибка валидации входных параметров */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Операцию невозможно выполнить */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Информация не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequestsError']
        }
      }
      /** @description Информация об ошибке */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['internalError']
        }
      }
    }
  }
  getAccessToken: {
    parameters: {
      query: {
        /** @description Тип OAuth flow – строка client_credentials */
        grant_type: string
        client_id: string
        client_secret: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "access_token": "value",
           *       "expires_in": 3600,
           *       "token_type": "Bearer"
           *     }
           */
          'application/json': {
            /** @description Ключ для временной авторизации в системе */
            access_token?: string
            /**
             * Format: int32
             * @description Время жизни ключа в секундах
             */
            expires_in?: number
            /** @description Тип ключа авторизации */
            token_type?: string
          }
        }
      }
    }
  }
}
