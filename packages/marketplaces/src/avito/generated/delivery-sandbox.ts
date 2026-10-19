// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/cancelAnnouncement': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отмена анонса в СД
     * @description Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Метод реализуется на стороне службы доставки. Метод предназначен для отмены анонса.
     */
    post: operations['CancelAnnouncement3PL']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/createAnnouncement': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание анонса в СД
     * @description Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Метод реализуется на стороне службы доставки. Метод создает анонс о планируемой отгрузке из службы доставки, указанной в поле "sender", в службу доставки, указанную в поле "receiver".
     */
    post: operations['CreateAnnouncement3PL']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/createParcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание посылки
     * @description Метод реализуется на стороне службы доставки.
     *
     *     Описание механики работы и дополнительные требования см. [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/sozdanie_posylki).
     */
    post: operations['createParcel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/announcements/create': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание анонса в Avito
     * @description Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Создает анонс о планируемой отгрузке в Avito. После успешного создания анонс направляется в службу доставки указанную в поле "receiver".
     */
    post: operations['CreateAnnouncement']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/announcements/track': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Трекинг анонсов
     * @description Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Метод для приема треков по анонсу от служб доставок.
     */
    post: operations['TrackAnnouncement']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/areas/custom-schedule': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установка графика работы на определённый день
     * @description Метод можно использовать для установки расписания отличного от регулярного, например для того, чтобы установить
     *     праздничные дни нерабочими или установить для них расписание отличное от регулярного.
     */
    post: operations['customAreaSchedule']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/cancelParcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отмена посылки
     * @description Метод должен быть имплементирован на стороне службы доставки.
     *
     *     Описание механики работы и дополнительные требования см. [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/otmena_posylki).
     */
    post: operations['cancelParcel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/order/checkConfirmationCode': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Проверка кода подтверждения
     * @description Метод для проверки службой доставки кода подтверждения, который пользователь показал на пункте выдачи заказа.<br />
     *
     *     ### Статус проверки кода
     *     | status      |       Значение                                |
     *     |-------------|-----------------------------------------------|
     *     |   success   | Код верный.                                   |
     *     |   fail      | Код неверный.                                 |
     *     |   expired   | Код подтверждения устарел.                    |
     *     |   attempts  | Превышено максимальное количество попыток.    |
     */
    post: operations['checkConfirmationCode']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/order/properties': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Добавление / изменение параметров доставки посылки
     * @description Метод используется для отправки в Avito параметров, относящихся к доставке посылки. <br />
     *     В случае повторной передачи параметров, данные будут перезаписаны. <br />
     *     Важно передавать актуальные данные. Например, если конечная стоимость доставки заказа изменилась, нужно отправить ее заново. <br />
     *
     *     ### Описание ошибок
     *     | http code |   error code         |       error message                               |
     *     |-----------|----------------------|---------------------------------------------------|
     *     |    200    |   ORDER_ID_INVALID   | Could not found order by id and provider name     |
     *     |    200    |   ORDER_ID_INVALID   | Incorrect order id                                |
     *     |    200    |   PROPERTIES_INVALID | Failed to get properties from request             |
     *     |    200    |   PROPERTIES_INVALID | Empty body                                        |
     *     |    200    |   PROPERTIES_INVALID | Dimensions array must have 3 element              |
     *     |    200    |   PROPERTIES_INVALID | Dimension must be greater than 0                  |
     *     |    200    |   PROPERTIES_INVALID | Weight must be greater than 0                     |
     *     |    200    |   PROPERTIES_INVALID | Delivery cost must be positive integer number     |
     *     |    200    |   PROPERTIES_INVALID | Forbidden terminal change in current order status |
     *     |    200    |   PROPERTIES_INVALID | Both terminals cannot be changed                  |
     */
    post: operations['setOrderProperties']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/order/realAddress': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Фактический адрес приёма / возврата посылки
     * @description ### Фактический ПВЗ приема
     *     Фактический ПВЗ приема посылки посылки нужен Avito для работы как с [агентскими](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/agentskie_vozvraty), так и с [клиентскими](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/klientskie_vozvraty) возвратами.
     *     Если получатель посылки откажется от её получения "на месте", то Avito понадобится показать ПВЗ возврата
     *     отправителю, а этим ПВЗ будет фактический ПВЗ приема. Если же посылку нужно будет вернуть отправителю через клиентский
     *     возврат, то для создания отдельной возвратной посылки Avito критически важно знать тот же фактический ПВЗ приема.<br/>
     *
     *     Присылайте адрес в момент приема посылки от отправителя или чуть позже, если нет возможности это делать сразу.<br/>
     *
     *     ### Фактический адрес возврата
     *     ПВЗ, из которого забрали возврат.<br/>
     *
     *     ### Про повторные запросы
     *     В случае повторной передачи новые данные будут записаны.<br/>
     *
     *     ### Описание ошибок
     *     | http code |   error code           |       error message                           |
     *     |-----------|------------------------|-----------------------------------------------|
     *     |    200    |   ORDER_ID_INVALID     | Could not found order by id and provider name |
     *     |    200    |   ORDER_ID_INVALID     | Incorrect order id                            |
     *     |    200    |   REAL_ADDRESS_INVALID | Failed to get real address from request       |
     *     |    200    |   REAL_ADDRESS_INVALID | Incorrect terminal type                       |
     *     |    200    |   REAL_ADDRESS_INVALID | Incorrect terminal number                     |
     */
    post: operations['setOrderRealAddress']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/order/tracking': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Трекинг
     * @description Метод для передачи информации по трекингу посылки от службы доставки в Avito.
     *
     *     Механика работы и прочие важные моменты описаны в [разделе](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/treking).
     *
     *     Обязательно ознакомьтесь и реализуйте [политику повторов запросов](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/politika_povtorov_v_trekinge).
     */
    post: operations['tracking']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/prohibitOrderAcceptance': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Запрет приёма посылки от отправителя
     * @description Метод должен быть имплементирован на стороне службы доставки.
     *
     *     Описание механики работы и дополнительные требования см. [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/zapret_priema_posylki).
     */
    post: operations['prohibitOrderAcceptance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/sorting-center': {
    parameters: {
      query: {
        /** @description Список кодов служб доставки, сортировочные центры которых необходимо вернуть */
        deliveryProviders: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список сортировочных центров
     * @description Возвращает сортировочные центы для переданных служб доставки
     *
     *     ### Справочник служб доставки
     *     |    код    |    Название  |
     *     |-----------|--------------|
     *     |   pochta  | Почта России |
     *     |   exmail  | ExMail       |
     *     |     bb    | Boxberyy     |
     *     |     pp    | PickPoint    |
     *     |    dpd    | DPD          |
     *
     *     ### Описание ошибок
     *     | http code |   error code                  |       error message                                      |
     *     |-----------|-------------------------------|----------------------------------------------------------|
     *     |    200    | INVALID_QUERY_PARAMETERS      | Failed to convert entities: {error description}          |
     *     |    200    | INVALID_QUERY_PARAMETERS      | Failed to get entities from request: {error description} |
     *     |    500    | FAILED_TO_GET_SORTING_CENTERS | Failed to get sorting centers                            |
     */
    get: operations['GetSortingCenter']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tariffs/sorting-center': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузить сортировочные центры
     * @description Создание задачи на загрузку своих сортировочных центров и первичная валидация данных.
     *     После загрузки сортировочных центров им необходимо проставить тэги отдельным запросом
     *
     *     Данные необходимо загружать по мере обновления данных о сортировочных центрах (как правило это 1-2 раза в сутки)
     *
     *     ### Описание ошибок
     *     | http code |   error code                  |       error message                        |
     *     |-----------|-------------------------------|--------------------------------------------|
     *     |    200    | INVALID_ENTITY                | Failed to get sorting centers from request |
     *     |    200    | INVALID_ENTITY                | Empty sorting centers list                 |
     *     |    200    | INVALID_ENTITY                | Failed to convert sorting centers          |
     *     |    500    | FAILED_TO_ADD_SORTING_CENTERS | Failed to add sorting centers              |
     *
     *     Итоговый результат операции необходимо проверять через:
     *     [метод получения результата выполнения задачи](#operation/GetTask)
     */
    post: operations['AddSortingCenter']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tariffs/{tariff_id}/areas': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id тарифа, к которому должны быть прикреплены добавляемые области */
        tariff_id: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузить области доставки
     * @description Метод позволяет загрузить области, в которых возможна услуга курьерской доставки/забора
     *     В качестве классификатора адресов используются индесы Почты России, то есть в 1 индекс включаются все адреса,
     *     которые к нему относятся.
     *
     *     ### Описание ошибок
     *     | http code |   error code      |       error message                                       |
     *     |-----------|-------------------|-----------------------------------------------------------|
     *     |    200    | URL_PATH_INVALID  | Tariff id must be int url path                            |
     *     |    200    | TERMINALS_INVALID | Failed to convert areas: {error description}          |
     *     |    200    | TERMINALS_INVALID | Failed to get terminals from request: {error description} |
     */
    post: operations['AddAreasSandbox']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tariffs/{tariff_id}/tagged-sorting-centers': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id своего тарифа, теги которого будут установлены для сортировочных центров */
        tariff_id: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установка тэгов своим и/или чужим сортировочным центрам
     * @description Создание задачи на установку тэгов из своего тарифа своим и/или чужим сортировочным центрам.
     *     В рамках одного тарифа одному сортировочному центру может соответствовать только один тэг.
     *     Перепривязка сортировочного центра к тэгу в рамках одного тарифа невозможна, в случае ошибочной привязки необходимо сообщить об этом своему менеджеру по логистике.
     *
     *     ### Описание ошибок
     *     | http code |   error code                          |           error message                                      |
     *     |-----------|---------------------------------------|--------------------------------------------------------------|
     *     |    200    | INVALID_ENTITY                        | Failed to get tags from request                              |
     *     |    200    | INVALID_ENTITY                        | Empty tags list                                              |
     *     |    200    | INVALID_ENTITY                        | Failed to get tariff from path                               |
     *     |    200    | INVALID_ENTITY                        | Zero tariff_if in path                                       |
     *     |    200    | INVALID_ENTITY                        | Failed to convert tags                                       |
     *     |    500    | FAILED_TO_ADD_TAGS_TO_SORTING_CENTERS | Failed to add tags to sorting centers                        |
     *
     *
     *     Итоговый результат операции необходимо проверять через:
     *     [метод получения результата выполнения задачи](#operation/GetTask)
     */
    post: operations['AddTagsToSortingCenter']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tariffs/{tariff_id}/terminals': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id тарифа, для которого синхронизируется список терминалов */
        tariff_id: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Синхронизировать терминалы тарифа
     * @description Метод заменяет текущий список терминалов указанного тарифа полным актуальным списком из запроса.
     *     Передавайте все терминалы тарифа одним запросом: частичная загрузка не поддерживается.
     *     Терминалы, отсутствующие в новом списке, отключаются только для указанного тарифа и остаются без изменений в других тарифах.
     *
     *     Данные необходимо загружать по мере обновления данных о ПВЗ (как правило это 1-2 раза в сутки)
     *
     *     В полном списке терминалов тарифа должен быть хотя бы один терминал с услугой `intake`
     *     и хотя бы один терминал с услугой `delivery`.
     *
     *     ### Система апрува терминалов
     *
     *     При загрузке терминалов система автоматически сравнивает новые данные с текущими в базе.
     *     Если процент критичных изменений превышает заданный порог — задача переходит в статус `pending_approval`
     *     и требует ручного одобрения.
     *
     *     **Критичные изменения** (хотя бы одно из):
     *     - Добавление нового терминала
     *     - Удаление терминала
     *     - Изменение сервисов (приём/выдача/возврат)
     *     - Изменение ограничений (вес/размеры/стоимость)
     *     - Изменение расписания
     *     - Изменение тега (направления)
     *     - Сдвиг координат более чем на 100 метров
     *
     *     Формула: `критичных / (существующих + добавленных) * 100% > порог`
     *
     *     При срабатывании апрува задача переходит в статус `pending_approval`, а в результате задачи
     *     возвращаются поля с информацией об изменениях (`diff_added`, `diff_deleted`, `diff_modified`, `diff_critical`, `diff_total`).
     *
     *     Пока задача находится в статусе `pending_approval`, изменения не применяются и продолжает действовать предыдущий список терминалов.
     *     Если задача получила статус `declined`, исправьте данные и повторно отправьте полный список терминалов.
     *
     *     > Система апрува не затрагивает ABD-терминалы.
     *
     *     ### Описание ошибок
     *     | http code |   error code      |       error message                                       |
     *     |-----------|-------------------|-----------------------------------------------------------|
     *     |    200    | URL_PATH_INVALID  | Tariff id must be int url path                            |
     *     |    200    | TERMINALS_INVALID | Failed to convert terminals: {error description}          |
     *     |    200    | TERMINALS_INVALID | Failed to get terminals from request: {error decsription} |
     */
    post: operations['AddTerminalsSandbox']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tariffs/{tariff_id}/terms': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id тарифа, к которому должны быть прикреплены добавляемые области */
        tariff_id: number
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Обновить сроки по тарифу
     * @description Создание задачи на обновление сроков в тарифе. Подробнее про сроки можно почитать в разделе загрузки тарифа https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#operation/AddTariffSandboxV2.
     *
     *     Важно ! Список новых сроков должен полностью соответствовать по deliveryProviderZoneId и name списку сроков, переданному при создании тарифа.
     *     Т.е. необходимо перечислить все те же deliveryProviderZoneId и name, но можете поменять сроки (maxTerm и/или minTerm).
     *     Если в какой-то зоне сроки не меняются, то необходимо все равно передать ее в исходном виде (без изменения в maxTerm и minTerm.
     *     При загрузке неполного списка обновление сроков упадет с ошибкой (об этом узнать можно будет через [метод получения результата выполнения задачи](#operation/GetTask))
     *
     *     ### Описание ошибок
     *     | http code |   error code                  |       error message                                                   |
     *     |-----------|-------------------------------|-----------------------------------------------------------------------|
     *     |    200    | INVALID_ENTITY                | Не удалось декодировать тело запрос, проверьте структуру              |
     *     |    200    | INVALID_ENTITY                | Передан пустой список                                                 |
     *     |    200    | INVALID_ENTITY                | Не указан или указан невалидный tariff_id, должно быть передано число |
     *     |    200    | INVALID_ENTITY                | Передан tariff_id равный 0                                            |
     *     |    500    | FAILED_TO_UPDATE_TERMS        | Ошибка обработки сроков                                               |
     *
     *     Итоговый результат операции необходимо проверять через:
     *     [метод получения результата выполнения задачи](#operation/GetTask)
     */
    post: operations['UpdateTerms']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tariffsV2': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузить новый тариф v2
     * @description Нефункциональные требования:
     *
     *     Максимальный размер тела запроса - 400MB<br/>
     *     Максимальное количество направлений - 1 миллион.<br/>
     *     Если тарифу требуется больше направлений, заранее согласуйте исключение с менеджером по логистике в Авито. Исключение применяется только после отдельного согласования и не изменяет публичный лимит для остальных служб доставки.
     *
     *     Метод позволяет службам доставки самостоятельно управлять:
     *       1. Доступностью направлений доставки
     *       2. Стоимостью доставки по каждому из направлений
     *       3. Сроками доставки по каждому из направлений
     *
     *     ## Используемые термины:
     *
     *     - **Пункт выдачи заказов (ПВЗ)(Terminal)** - место, в котором в зависимости от списка предоставляемых услуг пользователь может сдать/получить/вернуть посылку
     *
     *     - **Область доставки (Area)** - зона (список индексов Почты России), в которой осуществляется курьерская доставка/забор посылок
     *
     *     - **Хаб/Сортировочный центр (SortingCenter)** - место, где сортируются посылки для дальнейшей отправки в ПВЗ (используется для кросс-доставки)
     *
     *     - **Тэг направления(Tag)** - используется для объединения в группу ПВЗ/Областей доставки/Сортировочных центров
     *         является свойством объекта ПВЗ или области доставки.
     *
     *         Допускается распределять тэги по ПВЗ/Областям доставки/Сортировочным центрам любым образом, при этом наиболее распространенным критерием для тэгирования является географическая близость ПВЗ/Областей доставки/Сортировочных центров друг к другу или принадлежность к одному административному субъекту.
     *
     *     - **Тарифная зона доставки(TariffZone)** - список правил и параметров необходимых для расчета стоимости различных услуг, которые будут оказаны в процессе доставки заказа, в том числе с разделением на C2C и B2C.
     *         Сумма стоимостей по всем услугам перечисленным в тарифной зоне равна расчетной стоимости, которую Авито заплатит службе доставки за доставку заказа.
     *         Важно отметить, что допускается загрузка только уникальных тарифных зон - то есть, в одном тарифе не может существовать двух тарифных зон с одинаковыми значениями поля *items*
     *
     *     - **Зона сроков доставки(TermsZone)** - список правил и параметров необходимых для расчета сроков доставки.
     *         Как минимальный, так и максимальный срок передаются в рабочих днях.
     *         Важно отметить, что допускается загрузка только уникальных зон сроков доставки - то есть, в одном тарифе не может существовать двух зон сроков доставки с одинаковыми значениями поля *minTerm* и *maxTerm*
     *
     *     - **Направление доставки(Direction)** - объект определяющий возможность доставки из directionTagFrom (группа ПВЗ / список индексов_Почты_России в случае курьерской доставки), в directionTagTo (группу ПВЗ / список индексов_Почты_России в случае курьерской доставки).
     *         При этом направление так же определяет условия, на которых доставка будет осуществляться: тарифную зону и сроки доставки
     *
     *     - **Тарифный план(Tariff)** - список всех возможных направлений доставки, действующий на определенном интервале времени (например, до подписания договора об изменении тарифов)
     *
     *     ## Диаграмма связей между используемыми объектами:
     *
     *     <img src="https://www.avito.st/s/avito/components/api-description/delivery/images/tariff_diagram_v2.svg" />
     *
     *     ### Инсталляция (первое добавление службой доставки тарифов):
     *     >1. [Создать тариф](#operation/AddTariffSandboxV2)
     *     >Для каждого направления в тарифе нужно указать те типы доставки, которые по нему доступны.
     *     >2. Загрузить [ПВЗ](#operation/AddTerminalsSandbox)/[Области_доставки](#operation/AddAreasSandbox) и свои [сортировочные центры](#operation/AddSortingCenter), если требуется
     *     --
     *
     *     *Дополнительно для подключения к кросс доставке:*
     *     >3. [Скачать чужие сортировочные центры](#operation/GetSortingCenter)
     *     >4. Установить чужим сортировочным центрам тэги из своего тарифа, который был загружен на шаге 1
     *     >5. [Загрузить чужие сортировочные центры с тэгами из своего тарифа](#operation/AddTagsToSortingCenter)
     *
     *     #### Схема работы кросс доставочного тарифа
     *
     *     <img src="https://avito.st/static/ims/1a890394-cde9-49cf-b2e0-dd5b00dd9a97_new_xdelivery_common_2490x1380.png" />
     *
     *     ### Бесшовное обновление тарифа
     *
     *     При использовании данного подхода к обновлению тарифа отсутствует момент даунтайма - то есть отсутствия ПВЗ/Областей_доставки службы доставки на карте Авито.
     *       1. Необходимо загрузить новый тариф и сообщить номер залитого тарифа вашему менеджеру по логистике в Авито
     *         - Для загрузки тарифа используется [метод загрузки тарифа](#operation/AddTariffSandbox)
     *         - Для получения результата загрузки тарифа используется [метод получения результата выполнения задачи](#operation/GetTask). Необходимо убедиться в отсутствии ошибок загрузки тарифа
     *       2. Дождаться пока ваш менеджер подтвердит, что загруженные данные корректны
     *       3. Добавить к загруженному выше тарифу ПВЗ/Области доставки/Сортировочные центры
     *         - Для загрузки ПВЗ используется [метод загрузки ПВЗ](#operation/AddTerminalsSandbox). Важно учесть, что в URL необходимо указать id загруженного на предыдущем этапе тарифа
     *         - Для получения результата загрузки ПВЗ используется [метод получения результата выполнения задачи](#operation/GetTask). Необходимо убедиться в отсутствии ошибок загрузки ПВЗ
     *       4. Сообщить вашему менеджеру по логистике в Авито о том, что ПВЗ к тарифу успешно загружены
     *
     *     ### Дополнительная валидация
     *
     *     Если существует направление `тег 1` -> `тег 2` S-PUDO2S-PUDO, то **обязательно** должно существовать направление `тег 2` -> `тег 1` S-PUDO2S-PUDO для возможности возврата товара.
     *     В таком случае при обработке задачи на загрузку тарифа будет ошибка вида `X directions have no reverse direction. Each tag1->tag2 S-PUDO2S-PUDO must have tag2->tag1 S-PUDO2S-PUDO direction as reverse.` Ошибка будет получена в [методе получения информации о задаче](#operation/GetTask).
     *
     *     То же самое требование действует для направлений кросс-доставки, причём для каждого типа отдельно: на обратном потоке плечи проходятся в обратную сторону, поэтому направлению `тег 1` -> `тег 2` S-PUDO-BTW-F-HUB **обязательно** должно соответствовать направление `тег 2` -> `тег 1` S-PUDO-BTW-F-HUB, а направлению `тег 1` -> `тег 2` S-HUB-BTW-S-PUDO — направление `тег 2` -> `тег 1` S-HUB-BTW-S-PUDO. Направление другого типа обратным не считается.
     *     Ошибка будет того же вида, с указанием типа направления, например `X directions have no reverse direction. Each tag1->tag2 S-PUDO-BTW-F-HUB must have tag2->tag1 S-PUDO-BTW-F-HUB direction as reverse.`
     *
     *
     *     ### Описание ошибок
     *     | http code |   error code   |       error message                                      |
     *     |-----------|----------------|----------------------------------------------------------|
     *     |    200    | INVALID_ENTITY | Failed to convert entities: {error description}          |
     *     |    200    | INVALID_ENTITY | Failed to get entities from request: {error description} |
     */
    post: operations['AddTariffSandboxV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/tasks/{task_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        task_id: number
      }
      cookie?: never
    }
    /**
     * Получение информации по задаче
     * @description Получить информацию о задаче
     *
     *     Примерное время выполнения задачи от 5 до 20 минут
     *
     *     ### Опрос статуса
     *
     *     Обычно достаточно опрашивать статус задачи один раз в 30–60 секунд.
     *     `taskId` возвращается в ответе на запрос загрузки. Если запрос завершился по таймауту до получения ответа,
     *     восстановить `taskId` через API нельзя. Повторный запрос на загрузку может создать новую задачу.
     *     При повторной загрузке терминалов передавайте тот же полный актуальный список. Если повторно создавать задачу нежелательно,
     *     обратитесь к менеджеру интеграции, чтобы проверить результат первого запроса.
     *
     *     ### Возможные статусы задачи
     *      Задача может быть в одном из следующих статусов:
     *       * `processing` - задача ждёт очередь на выполнение или уже выполняется
     *       * `success` - задача успешно выполнена
     *       * `failed` - задача завершилась с ошибкой или не смогла завершиться по техническим причинам
     *       * `pending_approval` - загрузка терминалов приостановлена, процент критичных изменений превысил допустимый порог и требуется ручное одобрение
     *       * `declined` - загрузка терминалов отклонена
     *
     *     ### Описание ошибок
     *     | http code |   error code       |       error message          |
     *     |-----------|--------------------|------------------------------|
     *     |    200    | URL_PATH_INVALID   | Task id must be int url path |
     *     |    200    | INVALID_ENTITY     | Empty provider               |
     *     |    500    | FAILED_TO_GET_TASK | Failed to get task           |
     */
    get: operations['GetTask']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/cancelAnnouncement': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправка события об отмене тестового анонса
     * @description Метод доступен только в Песочнице.
     *
     *     Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Метод запускает процесс отмены тестового анонса.
     *     При успешном выполнении в ответе должен быть статус success. По предоставленному вами url (параметр options.urlToCancelAnnouncement)
     *     должно прийти сообщение об отмене анонса.
     *
     *     ### Вариант использования
     *     Метод призван облегчить тестирование интеграции вашего API по обмену анонсами с Avito.
     *     В метод необходимо передать ID тестового анонса, созданного ранее посредством [метода создания тестового анонса](#operation/v1createAnnouncement).
     *
     *     ### Описание ошибок
     *     | http code |   error code                |
     *     |-----------|-----------------------------|
     *     |    200    | VALIDATION_ERROR            |
     *     |    200    | ANNOUNCEMENT_NOT_FOUND      |
     *     |    500    | INTERNAL_ERROR              |
     */
    post: operations['v1cancelAnnouncement']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/cancelParcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отмена тестовой посылки
     * @description Метод доступен только в Песочнице.
     *
     *     Метод инициирует [запрет приёма посылки](#operation/prohibitOrderAcceptance) в службе доставки и, если он состоялся, то посылка отменяется.
     *     Отменить можно только те посылки, которые были созданы с помощью [метода создания тестовой посылки](#operation/v1createParcel).
     *
     *     По умолчанию запрос на запрет приема посылки будет отправлен в мок. Чтобы изменить это поведение и получить запрос у себя в системе,
     *     воспользуйтесь параметром `options.cancelationUrl`.
     */
    post: operations['v1CancelParcel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/changeParcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание заявки на изменение данных тестовой посылки
     * @description Метод доступен только в Песочнице.
     *
     *     Описание механики изменения посылок [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/izmenenie_svoystv_posylok).
     *
     *     Метод создаёт заявку на изменение данных посылки. Например, на изменение ФИО и телефона получателя.
     *
     *     По умолчанию запрос на создание заявки не будет отправлен в вашу систему. Чтобы это произошло, необходимо
     *     заполнить параметр options.changeParcelUrl.
     */
    post: operations['v1changeParcel']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/createAnnouncement': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание тестового анонса
     * @description Метод доступен только в Песочнице.
     *
     *     Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Метод запускает процесс создания тестового анонса.
     *     При успешном выполнении в ответе должен быть статус success, а предоставленный анонс должен прийти по указанному
     *     вами URL (параметр options.urlToSendAnnouncement).
     *
     *     При формировании тестового анонса необходимо указать ID тестовых посылок (параметр packages.parcelIDs).
     *     ID тестовых посылок можно узнать при помощи двух методов [создания тестовой посылки](#operation/v1createParcel)
     *     и [получения ее ID](#operation/v1getRegisteredParcelID). Обращаем внимание, что для тестирования приема входящих
     *     анонсов необходимо создать кросс-доставочную посылку (в параметре options.xDelivery.leg выставить флаг X_DELIVERY_LAST_LEG).
     *
     *     ### Вариант использования
     *     Метод призван облегчить тестирование интеграции вашего API по обмену анонсами с Avito.
     *     В метод необходимо передать ID посылки, а для этого её нужно создать. Таким образом, шаги будут выглядеть примерно так:
     *     <ol>
     *       <li>Вызываем метод создания тестовой посылки. Получаем orderID.</li>
     *       <li>С полученным orderID вызываем метод получения ID тестовой посылки.</li>
     *       <li>С полученным ID посылки делаем запрос на создание анонса.</li>
     *     </ol>
     *
     *     ### Описание ошибок
     *     | http code |   error code       |
     *     |-----------|--------------------|
     *     |    200    | VALIDATION_ERROR   |
     *     |    200    | OBJECT_EXISTS      |
     *     |    500    | INTERNAL_ERROR     |
     */
    post: operations['v1createAnnouncement']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/getAnnouncementEvent': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение последнего события тестового анонса
     * @description Метод доступен только в Песочнице.
     *
     *     Описание работы анонсов [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/anonsy).
     *
     *     Метод позволяет проверить последнее зарегистрированное событие по анонсу.
     *
     *     ### Вариант использования
     *     Метод призван облегчить тестирование интеграции вашего api по обмену анонсами с Avito.
     *     Метод можно использовать в связке с [методом отмены анонса](#operation/v1cancelAnnouncement) для проверки того, что
     *     последнее событие тестового анонса изменилось.
     *
     *     ### Описание ошибок
     *     | http code |   error code                |
     *     |-----------|-----------------------------|
     *     |    200    | VALIDATION_ERROR            |
     *     |    200    | ANNOUNCEMENT_NOT_FOUND      |
     *     |    500    | INTERNAL_ERROR              |
     */
    post: operations['v1getAnnouncementEvent']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/getChangeParcelInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение информации об изменении тестовой посылки
     * @description Метод доступен только в Песочнице.
     *
     *     Описание механики изменения посылок [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/izmenenie_svoystv_posylok).
     *
     *     Метод возвращает информацию о заявке на изменение данных тестовой посылки. Информацию можно получить только по тем заявкам
     *     которые были созданы с помощью [метода создания заявки на изменение данных](#operation/v1changeParcel).
     */
    post: operations['v1getChangeParcelInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/getParcelInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение информации о тестовой посылке
     * @description Метод доступен только в Песочнице.
     *
     *     Метод возвращает информацию о тестовой посылке. Информацию можно получить только по тем посылкам
     *     которые были созданы с помощью [метода создания тестовой посылки](#operation/v1createParcel).
     */
    post: operations['v1getParcelInfo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v1/getRegisteredParcelID': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение ID зарегистрированной тестовой посылки
     * @description Метод доступен только в Песочнице.
     *
     *     Метод возвращает идентификатор зарегистрированной тестовой посылки, созданной с помощью
     *     [метода создания тестовой посылки](#operation/v1createParcel).
     *
     *     Вариант использования метода см. в описании [метода создания тестовой посылки](#operation/v1createParcel)
     *
     *     ### Описание ошибок
     *     | http code |   error code       |       error message          |
     *     |-----------|--------------------|------------------------------|
     *     |    200    | NOT_FOUND          | parcel not found             |
     *     |    200    | NOT_REGISTERED     | parcel not registered yet    |
     *     |    200    | VALIDATION_ERROR   | wrong orderID format         |
     *     |    500    | INTERNAL_ERROR     | get parcel id failed         |
     */
    post: operations['v1getRegisteredParcelID']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery-sandbox/v2/createParcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание тестовой посылки
     * @description Метод доступен только в Песочнице.
     *
     *     Метод запускает процесс создания тестовой посылки.
     *
     *     Описание механики работы и дополнительные требования см. [здесь](#info/sozdanie_testovyh_posylok).
     *
     *     ### Описание ошибок
     *     | http code |   error code       |       error message          |
     *     |-----------|--------------------|------------------------------|
     *     |    200    | UNKNOWN_PROVIDER   | unknown provider             |
     *     |    200    | VALIDATION_ERROR   | invalid request              |
     *     |    200    | LIMIT_REACHED      | create parcels limit reached |
     *     |    500    | INTERNAL_ERROR     | create parcel error          |
     */
    post: operations['CreateSandboxParcelV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delivery/order/changeParcelResult': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправка результата исполнения заявки
     * @description Описание механики изменения посылок [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/izmenenie_svoystv_posylok).
     *
     *     Метод для передачи результата исполнения заявки, созданной с помощью метода [/changeParcels](#operation/ChangeParcels).
     *
     *     ### Описание ошибок
     *     | http code |   error code         |       причина ошибки                                                                                                                                                 |
     *     |-----------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     *     |    200    | ID_INVALID           | “id” заявки невалидный.                                                                                                                                              |
     *     |    200    | NOT_FOUND            | заявка с “id” не найдена.                                                                                                                                            |
     *     |    200    | STATUS_INVALID       | заявка не может быть переведена в статус указанный в запросе.                                                                                                        |
     *     |    200    | FAILED_REASON_MISSES | отсутствует причина, по которой заявка не может быть исполнена. Данный код ошибки будет возвращен при статусе заявки declined и отсутствующем или пустом поле reason.|
     *     |    200    | PARCEL_CLOSED        | посылка, связанная с заявкой, уже неактивная (была получена, утеряна или ушла на возвратное движение).                                              |
     *
     *     ### Порядок повторных попыток
     *
     *     - ID_INVALID, NOT_FOUND: повторные отправки запросов не помогут, имеет место ошибка валидации номера заявки.
     *     - STATUS_INVALID: может помочь повтор с другим, корректным, статусом.
     *     - FAILED_REASON_MISSES: повторная отправка возможна после заполнения поля reason для заявки в статусе declined или отправки запроса со статусом approved.
     *     - PARCEL_CLOSED: нет смысла отправлять запрос повторно, данный код означает, что изменение свойства для посылки более не актуально так как посылка вручена или изменилось направление движение посылки.
     *     - HTTP 500: означает недоступность API, необходим повтор.
     *
     *
     *     ### Возможные причины для отклонения заявки и коды приведены в таблице
     *
     *     | Тип заявки               |   reason code                   |       Описание                                                             |
     *     |--------------------------|---------------------------------|----------------------------------------------------------------------------|
     *     | prohibitParcelAcceptance | already_received                | Посылка уже была принята от продавца и запрет её приёма невозможен.        |
     *     | prohibitParcelAcceptance | parcel_not_found                | Посылка не найдена.                                                        |
     *     | prohibitParcelReceive    | already_received                | Посылка уже была вручена покупателю и запрет выдачи невозможен.            |
     *     | prohibitParcelReceive    | parcel_not_found                | Посылка не найдена.                                                        |
     *     | extendParcelStorage      | storage_period_already_exceeded | Продление срока хранения для посылки уже выполнялось.                      |
     *     | extendParcelStorage      | invalid_parcel_status           | Продление срока хранения невозможно в текущем состоянии (статусе посылки). |
     *     | extendParcelStorage      | parcel_not_found                | Посылка не найдена.                                                        |
     *     | любой                    | текст в свободной форме         | Причина отклонения, которая отличается от стандартизированных              |
     *
     *     Для описанных сценариев важно использовать стандартизированные причины для отклонения заявки. Это может влиять на политику ретраев и другие внутренние процессы внутри Avito.
     *     Список стандартных причин может расширяться в будущем в зависимости от статистики использования и возникающих корнер-кейсов.
     */
    post: operations['ChangeParcelResult']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sandbox/changeParcels': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Обновление свойств посылок
     * @description Описание механики изменения посылок [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/izmenenie_svoystv_posylok).
     *
     *     Метод реализуется на стороне службы доставки. Предназначен для обновления различных свойств посылок по инициативе Avito.
     */
    post: operations['ChangeParcels']
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
    AddAreasRequest: components['schemas']['Area'][]
    AddSortingCentersRequest: components['schemas']['SortingCenterPost'][]
    AddTariffReply: {
      data?: {
        /**
         * Format: int32
         * @description id задачи на добавление тарифа, по которому узнать статус загрузки тарифа
         */
        taskId?: number
      } | null
      error?: components['schemas']['DeliveryError']
    }
    AddTariffRequest: {
      /**
       * id тарифного плана на стороне службы доставки
       * @description Идентификатор тарифного плана на стороне службы доставки - должен быть уникален.
       * @example FAST_FROM_2020-02-10
       */
      deliveryProviderTariffId: string
      /** Список направлений доставки в тарифном плане */
      directions: components['schemas']['Direction'][]
      /**
       * Название тарифного плана
       * @description Человекопонятное название тарифного плана
       * @example Быстрый от 2020-02-10
       */
      name: string
      /** Список тарифных зон */
      tariffZones: components['schemas']['TariffZone'][]
    }
    AddTariffRequestV2: {
      /**
       * id тарифного плана на стороне службы доставки
       * @description Идентификатор тарифного плана на стороне службы доставки - должен быть уникален.
       * @example FAST_FROM_2020-02-10
       */
      deliveryProviderTariffId: string
      /** Список направлений доставки в тарифном плане */
      directions: components['schemas']['DirectionV2'][]
      /**
       * Название тарифного плана
       * @description Человекопонятное название тарифного плана
       * @example Быстрый от 2020-02-10
       */
      name: string
      /**
       * Тип тарифа
       * @description Тип разделения тарифа по габаритам товаров.
       *     - MGT - малогабаритные товары
       *     - KGT - крупногабаритные товары
       *     Если поле не указано, то тариф должен содержать оба типа разделения (для обратной совместимости со старыми тарифами).
       * @enum {string}
       */
      tariffType?: 'MGT' | 'KGT'
      /** Список тарифных зон */
      tariffZones: components['schemas']['TariffZone'][]
      /** Список зон сроков */
      termsZones: components['schemas']['TermsZone'][]
    }
    AddTaskReply: {
      data?: {
        /**
         * Format: int64
         * @description id задачи, по которому можно узнать результат выполнения операции используя
         *     [метод получения результата выполнения задачи](#operation/GetTask)
         */
        taskId?: number
      } | null
      error?: {
        /**
         * код ошибки
         * @description код ошибки
         * @example fail
         */
        code: string
        /**
         * описание ошибки
         * @description человекопонятное описание ошибки
         * @example something went wrong
         */
        message: string
      } | null
    }
    AddTerminalsReply: {
      data?: {
        /**
         * Format: int32
         * @description id задачи на добавление терминалов
         */
        taskId?: number
      } | null
      error?: components['schemas']['DeliveryError']
    }
    AddTerminalsRequest: components['schemas']['Terminal'][]
    Address: {
      /**
       * @description Человекочитаемое представление адреса
       * @example Челябинская обл, Магнитогорск, Герцена ул, д.6
       */
      addressRow?: string
      /**
       * @description Строение
       * @example 2
       */
      building?: string
      /**
       * @description Страна
       * @example Российская Федерация
       */
      country?: string
      /**
       * @description ФИАС идентификатор населенного пункта, в котором расположен ПВЗ. Не может быть пустым. Должен иметь формат UUID.
       * @example 0c5b2444-70a0-4932-980c-b4dc0d3f02b5
       */
      fias: string
      /**
       * @description Этаж
       * @example 1
       */
      floor?: number
      /**
       * @description Дом
       * @example 2
       */
      house?: string
      /**
       * @description Корпус
       * @example 4
       */
      housing?: string
      /**
       * @description Географическая широта, в градусах.
       * @example 52.3295026
       */
      lat: number
      /**
       * @description Географическая долгота, в градусах.
       * @example 55.697951
       */
      lng: number
      /**
       * @description Населенный пункт. Не может быть пустым.
       * @example Набережные Челны
       */
      locality: string
      /**
       * @description Тип населенного пункта
       * @example город
       */
      localityType?: string
      /**
       * @description Подъезд
       * @example 3
       */
      porch?: string
      /**
       * @description Субъект Российской Федерации.
       *     Возможные типы субъектов: республики, края, области, города федерального значения, автономные области и автономные округа
       * @example Республика Татарстан
       */
      region: string
      /**
       * @description Квартира (офис).
       * @example 4
       */
      room?: string
      /**
       * @description Улица
       * @example ленина
       */
      street?: string
      /**
       * @description Субрегион
       * @example Набережные Челны
       */
      subRegion?: string
      /**
       * @description Тип субрегиона - муниципальный район/городской округ
       * @example городской округ
       */
      subRegionType?: string
      zipCode: components['schemas']['Delivery-zipCode']
    }
    AnnouncementDeliveryParticipant: {
      delivery: {
        /** @description Информация о сортировочном центре, заполняется если тип доставки SORTING_CENTER */
        sortingCenter?: {
          /**
           * @description Точность указания сортировочного центра
           * @enum {string}
           */
          accuracy?: 'EXACT' | 'APPROXIMATE'
          /** @description Идентификатор сортировочного центра */
          id?: string
          /** @description Код службы доставки */
          provider: string
        } | null
        /**
         * @description Тип доставки
         * @enum {string}
         */
        type: 'SORTING_CENTER'
      }
      /** @description Адрес электронной почты */
      email?: string
      /** @description Наименование участника доставки (наименование СД) */
      name: string
      /** @description Контактные телефоны */
      phones: string[]
      /**
       * @description Тип отправителя/получателя
       * @enum {string}
       */
      type: '3PL'
    }
    AnnouncementPackage: {
      /**
       * @description Идентификатор грузоместа (ШК грузоместа)
       * @example 0001234
       */
      id: string
      /**
       * @description Список посылок
       * @example [
       *       "P000123",
       *       "P000345"
       *     ]
       */
      parcelIDs: string[]
      /**
       * @description Номер пломбы
       * @example 1234-5678
       */
      sealID?: string
    }
    AnnouncementsCancelRequest: {
      announcementID: components['schemas']['UUID']
      /**
       * @description Причина омены анонса
       * @enum {string}
       */
      reason?: 'CANCELED_BY_DELIVERY_PROVIDER' | 'CANCELED_BY_AVITO'
    }
    AnnouncementsCreateRequest: {
      announcementID: components['schemas']['UUID']
      /**
       * @description Тип анонса
       * @enum {string}
       */
      announcementType: 'DELIVERY' | 'PICKUP'
      /**
       * @description Уникальный ШК анонса. Должен быть напечатан на бумажных сопроводительных документах (акте приема передачи). Данный ШК необходимо использовать для установки соответствия принимаемой партии грузомест/посылок с анонсом переданным в электронном виде через инфообмен
       * @example 000987654321
       */
      barcode: string
      /** @description Дата и время создания анонса в формате RFC 3339 в UTC */
      date: components['schemas']['DateWithTz']
      /** @description Список грузомест */
      packages: components['schemas']['AnnouncementPackage'][]
      /**
       * @example {
       *       "delivery": {
       *         "sortingCenter": {
       *           "accuracy": "EXACT",
       *           "id": "19310",
       *           "provider": "exmail"
       *         },
       *         "type": "SORTING_CENTER"
       *       },
       *       "email": "mail@pochta.ru",
       *       "name": "Почта России",
       *       "phones": [
       *         "8-800-300-00-00"
       *       ],
       *       "type": "3PL"
       *     }
       */
      receiver: components['schemas']['AnnouncementDeliveryParticipant']
      /**
       * @example {
       *       "delivery": {
       *         "sortingCenter": {
       *           "accuracy": "EXACT",
       *           "id": "010",
       *           "provider": "exmail"
       *         },
       *         "type": "SORTING_CENTER"
       *       },
       *       "email": "mail@exmail.ru",
       *       "name": "ExMail",
       *       "phones": [
       *         "8-800-200-00-00"
       *       ],
       *       "type": "3PL"
       *     }
       */
      sender: components['schemas']['AnnouncementDeliveryParticipant']
    }
    AnnouncementsCreateRequest3PL: {
      announcementID: components['schemas']['UUID']
      /**
       * @description Тип анонса
       * @enum {string}
       */
      announcementType: 'DELIVERY' | 'PICKUP'
      /**
       * @description Уникальный ШК анонса. Должен быть напечатан на бумажных сопроводительных документах (акте приема передачи). Данный ШК необходимо использовать для установки соответствия принимаемой партии грузомест/посылок с анонсом переданным в электронном виде через инфообмен.
       * @example 000987654321
       */
      barcode: string
      /** @description Дата и время создания анонса в формате RFC 3339 в UTC */
      date: components['schemas']['DateWithTz']
      /** @description Список грузомест */
      packages: components['schemas']['AnnouncementsPackage3PL'][]
      /**
       * @example {
       *       "delivery": {
       *         "sortingCenter": {
       *           "accuracy": "EXACT",
       *           "id": "19310",
       *           "provider": "exmail"
       *         },
       *         "type": "SORTING_CENTER"
       *       },
       *       "email": "mail@pochta.ru",
       *       "name": "Почта России",
       *       "phones": [
       *         "8-800-300-00-00"
       *       ],
       *       "type": "3PL"
       *     }
       */
      receiver: components['schemas']['AnnouncementDeliveryParticipant']
      /**
       * @example {
       *       "delivery": {
       *         "sortingCenter": {
       *           "accuracy": "EXACT",
       *           "id": "010",
       *           "provider": "exmail"
       *         },
       *         "type": "SORTING_CENTER"
       *       },
       *       "email": "mail@exmail.ru",
       *       "name": "ExMail",
       *       "phones": [
       *         "8-800-200-00-00"
       *       ],
       *       "type": "3PL"
       *     }
       */
      sender: components['schemas']['AnnouncementDeliveryParticipant']
    }
    AnnouncementsPackage3PL: {
      /**
       * @description Идентификатор грузоместа (ШК грузоместа)
       * @example 000123456789
       */
      id: string
      /** @description Список посылок */
      parcels: components['schemas']['AnnouncementsParcel3PL'][]
      /**
       * @description Номер пломбы
       * @example 1234-5678
       */
      sealID?: string
    }
    AnnouncementsParcel3PL: {
      /**
       * @description ШК посылки в системе получателя анонса
       * @example 000012345
       */
      barcode: string
      /**
       * @description Идентификатор посылки Авито в системе получателя анонса
       * @example P000777
       */
      id: string
      /**
       * @description ШК посылки в системе инициатора анонса
       * @example 123450000
       */
      senderBarcode?: string
      /**
       * @description Идентификатор посылки Авито в системе инициатора анонса
       * @example P000776
       */
      senderID?: string
    }
    AnnouncementsSuccessResponse: {
      data?: {
        /**
         * @description Статус выполнения запроса.
         * @enum {string}
         */
        status?: 'success'
      } | null
      error?: {
        /**
         * @description Код ошибки
         * @example VALIDATION_ERROR
         */
        code?: string
        /**
         * @description Текстовое описание ошибки
         * @example Текст ошибки
         */
        message?: string
      } | null
    }
    AnnouncementsTrackAnnouncementRequest: {
      announcementID: components['schemas']['UUID']
      /** @description Дата события */
      date: components['schemas']['DateWithTz']
      /** @enum {string} */
      event: 'ACCEPTANCE_DONE' | 'CANCELLED' | 'DELIVERED' | 'RECEIVED'
    }
    Area: {
      deliverySchedule?: components['schemas']['cutoffAndSchedule'] & unknown
      directionTag: components['schemas']['Delivery-directionTag']
      intakeSchedule?: components['schemas']['cutoffAndSchedule'] & unknown
      providerAreaNumber: components['schemas']['DeliveryProviderAreaNumber']
      restrictions: components['schemas']['Restriction'] & unknown
      /** @description Доступные в области услуги. Забор (intake), доставка (delivery) */
      services: ('intake' | 'delivery')[]
      /**
       * @description UTC зона области досатвки
       * @example 1
       */
      utcTimezone: string
      /** @description список почтовых индексов входящих в данную зону доставки (область курьерской доставки/забора) */
      zipCodes: components['schemas']['Delivery-zipCode'][]
    }
    /** Кастомное расписание областей доставки */
    AreasCustomScheduleTaskResult: {
      uploaded: string
    }
    /** Области доставки */
    AreasTaskResult: {
      edited: string
      incoming: string
    }
    Breadcrumb: {
      name: string
    }
    CancelSandboxParcelError: {
      /** @enum {string} */
      code: 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'UNKNOWN_PROVIDER'
      message?: string
    } | null
    CancelSandboxParcelOptions: {
      cancelationUrl?: string
    }
    CancelSandboxParcelReply: {
      data?: {
        status?: string
      } | null
      error?: components['schemas']['CancelSandboxParcelError']
    }
    CancelSandxobParcelRequest: {
      options?: components['schemas']['CancelSandboxParcelOptions']
      parcelID: string
    }
    ChangeParcelError: {
      /** @enum {string} */
      code: 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'UNSUITABLE_PARCEL' | 'PARCEL_NOT_FOUND'
      message?: string
    } | null
    ChangeParcelReply: {
      data?: components['schemas']['ChangeParcelReplyData']
      error?: components['schemas']['ChangeParcelError']
    }
    ChangeParcelReplyData: {
      /** Идентификатор заявки на изменение данных */
      applicationID?: string
    } | null
    ChangeParcelRequest: {
      application?: components['schemas']['ChangeParcelRequestApplication']
      options?: components['schemas']['ChangeParcelRequestOptions']
      /** Идентификатор посылки. */
      parcelID: string
      /**
       * Тип заявки, которую необходимо зарегистрировать.
       * @enum {string}
       */
      type: 'changeReceiver' | 'prohibitParcelReceive' | 'extendParcelStorage' | 'prohibitParcelAcceptance'
    }
    /** Заявка на изменение данных */
    ChangeParcelRequestApplication: {
      /**
       * Инициатор заявки на изменение ФИО и номера телефона. Покупатель или продавец.
       * @enum {string}
       */
      kind?: 'buyer' | 'seller'
      /** Новые ФИО получателя посылки */
      name?: string
      /** Новые телефоны получателя посылки */
      phones?: string[]
    }
    ChangeParcelRequestOptions: {
      /** URL, куда должен быть направлен запрос на создание заявки */
      changeParcelUrl?: string
    }
    ChangeParcelResultReply: {
      data?: Record<string, never> | null
      error?: {
        /** @enum {string} */
        code: 'ID_INVALID' | 'NOT_FOUND' | 'STATUS_INVALID' | 'FAILED_REASON_MISSES' | 'PARCEL_CLOSED'
        message: string
      } | null
    }
    ChangeParcelResultRequest: {
      /** @description Идентификатор заявки на изменение посылки */
      id: string
      options?: {
        /** @description Дата и время до которого продлено хранение (RFC3339). В случае отсутствия в системе информации о времени до которого возможно продления можно использовать константу `23:59:59 в московском часовом поясе`. */
        storageExtendedTo?: components['schemas']['DateWithTz']
      } | null
      /** @description Причина отклонения заявки (заполняется в случае отклонения). */
      reason?: string
      /**
       * @description Статус обработки заявки
       * @enum {string}
       */
      status: 'approved' | 'declined'
    }
    /** @description Описание посылки, свойства которой необходимо изменить. */
    ChangeParcelsApplication: {
      /**
       * @description Идентификатор заявки Avito
       *
       *     Идентификатор заявки - уникальный идентификатор заявки на изменение данных о посылке в формате uuid, который должен быть передан в обратном запросе с результатом исполнения заявки.
       * @example 6aad1860-23e0-4e4d-97d7-eff526127b51
       */
      id: string
      /**
       * @description Идентификатор, использованный при регистрации посылки в службе доставки.
       * @example P000123
       */
      parcelID: string
      receiver?: components['schemas']['ChangeParcelsClient']
    }
    /** @description Содержит информацию для обновления данных о клиенте. */
    ChangeParcelsClient: {
      /**
       * @description ФИО нового получателя посылки.
       * @example Иванов Иван Иванович
       */
      name: string
      /**
       * @description Список номеров телефонов нового получателя.
       *     Если на стороне СД нет поддержки работы с несколькими номерами телефонов, то необходимо использовать первый из списка и считать его основным контактом.
       *
       *     Формат номеров телефона не регламентирован.
       * @example [
       *       "88005553535",
       *       "79999999999",
       *       "+79859991234"
       *     ]
       */
      phones: string[]
      terminal?: components['schemas']['ChangeParcelsTerminal']
    } | null
    /**
     * @description Тело ответа.
     *     Поле присутствует, если запрос был успешно обработан. Если случилась ошибка, то поле отсутствует.
     */
    ChangeParcelsData: {
      /**
       * @description По полю статус со значением ok понимаем, что заявка успешно принята в работу.
       * @example ok
       * @enum {string}
       */
      status: 'ok'
    }
    /**
     * @description Ошибка регистрации заявки на изменение посылок.
     *     Поле присутствует, если запрос не был успешно обработан. Если запрос был успешно обработан, то поле отсутствует.
     */
    ChangeParcelsError: {
      /**
       * @description Код ошибки. <br />
       *     <ol>
       *       <li><code>VALIDATION_ERROR</code> – ошибка валидации входящих параметров. Например:<ul>
       *         <li>Длина передаваемого поля превышает допустимые лимиты.</li>
       *         <li>В запросе отсутствует поле, обязательное для данного типа (<code>type</code>) заявки.
       *       В поле <code>error.message</code> должно содержаться пояснение, какое поле не прошло валидацию. </li>
       *       </ul></li>
       *       <li><code>UNSUPPORTED_PARAM_ERROR</code> – в запросе получен неподдерживаемый параметр. Например:<ul>
       *         <li>В запросе передан тип (<code>type</code>) заявки, который не реализован на стороне СД.</li>
       *         <li>Запрос содержит заполненные поля, которые не соответствую типу (<code>type</code>) заявки. Например для заявки с <code>type=extendParcelStorage</code> передано заполненное поле <code>receiver.phones</code>
       *     В поле <code>error.message</code> должно содержаться пояснение, какое поле не поддерживается.</li>
       *       </ul></li>
       *     <br />
       *     <br />
       *     <b>Важно!</b> Перечисленные выше ошибки можно использовать только для проверки корректности входящего контракта и запрещено использовать для проверки бизнес-логики сценария.<br />
       *     Все возникающие ошибки бизнес-логики, которые могут возникнуть в процессе исполнения заявки, должны передаваться в поле <code>reason</code> запроса <code>changeParcelResult</code> <br />
       *     Примеры ошибок бизнес-логики:<br />
       *     <ol>
       *       <li>На стороне СД не найдена посылка по переданному `parcelID`.</li>
       *       <li>Посылка, для которой необходимо выполнить заявку запрета приема в ПВЗ отправки (<code>prohibitParcelAcceptance</code>), уже принята в ПВЗ отправки.</li>
       *       <li>Посылка, для которой необходимо продлить срок хранения посылки (<code>extendParcelStorage</code>), уже истек срок хранения и она отправлена на возврат.</li>
       *       <li>Посылка, для которой необходимо запретить выдачу в ПВЗ вручения (<code>prohibitParcelReceive</code>) уже вручена получателю.</li>
       *     </ol>
       *
       *     Все перечисленные ошибки – "терминальные".
       *     При получении этих ошибок Avito не будет выполнять повторные запросы, т.к. повтор приведет к тому же результату.
       *     Список в дальнейшем может пополняться.
       * @example VALIDATION_ERROR
       * @enum {string}
       */
      code: 'VALIDATION_ERROR' | 'UNSUPPORTED_PARAM_ERROR'
      /**
       * @description Человекочитаемые детали произошедшей ошибки.
       *     Поле будет использоваться живыми людьми для диагностирования проблемы.
       * @example applications[0].parcelID field is required
       */
      message: string
    }
    ChangeParcelsRequest: {
      applications: components['schemas']['ChangeParcelsApplication'][]
      /**
       * @description Тип заявки.
       *
       *     Заявки могут быть следующих типов:
       *     - `changeReceiver` - обновить данные о получателе посылки.
       *     - `extendParcelStorage` - продлить срок хранения посылки.
       *     - `prohibitParcelReceive` - запретить выдачу посылки на ПВЗ вручения.
       *     - `prohibitParcelAcceptance` - запретить прием посылки на ПВЗ отправки (в разработке).
       *     - `changeReceiverTerminalOnConfirmed` - обновить ПВЗ вручения.
       * @example changeReceiver
       * @enum {string}
       */
      type:
        | 'changeReceiver'
        | 'extendParcelStorage'
        | 'prohibitParcelReceive'
        | 'prohibitParcelAcceptance'
        | 'changeReceiverTerminalOnConfirmed'
    }
    ChangeParcelsResponse: {
      data?: components['schemas']['ChangeParcelsData']
      error?: components['schemas']['ChangeParcelsError']
    }
    /** @description Данные нового пункта получателя посылки. */
    ChangeParcelsTerminal: {
      /**
       * @description Внешний идентификатор ПВЗ.
       * @example 123
       */
      id: string
    } | null
    CheckConfirmationCodeReply: {
      data?: {
        /** @enum {string} */
        status?: 'success' | 'fail' | 'expired' | 'attempts'
      }
    }
    CheckConfirmationCodeRequest: {
      confirmCode: string
      parcelID: string
    }
    /**
     * Стоимость
     * @description Стоимость в копейках
     * @example 15000
     */
    Cost: number
    /** @description Описание отправителя / получателя. */
    CreateParcelClient: {
      delivery: components['schemas']['CreateParcelClientDelivery']
      /**
       * Format: email
       * @description Электронная почта.
       * @example any_email@mail.com
       */
      email: string
      /**
       * @description ИНН участника доставки (отправителя/получателя). Опциональное.
       *
       *     Заполнятся только для отправителя/получателя с типом `LEGAL` для определенных сценариев доставки и партнеров.
       * @example 7727563778
       */
      inn?: string
      /**
       * @description Наименование клиента.
       * @example Иванов Иван Иванович
       */
      name: string
      /**
       * @description Список телефонов для связи.
       *
       *     Формат номеров телефона не регламентирован.
       * @example [
       *       "88005553535",
       *       "79999999999",
       *       "+79859991234"
       *     ]
       */
      phones: string[]
      /**
       * @description Тип отправителя.
       * @example PRIVATE
       * @enum {string}
       */
      type: 'PRIVATE' | 'LEGAL' | '3PL'
    }
    CreateParcelClientDelivery: {
      /**
       * @description Где осуществляется проверка целостности и комплектности вложений посылки.
       * @example [
       *       "DIRECT_FLOW",
       *       "RETURN_FLOW"
       *     ]
       */
      completenessAndIntegrity?: ('DIRECT_FLOW' | 'RETURN_FLOW')[]
      courier?: components['schemas']['CreateParcelClientDeliveryCourier']
      secondPartyLogist?: components['schemas']['CreateParcelClientDeliverySecondPartyLogist']
      sortingCenter?: components['schemas']['CreateParcelClientDeliverySortingCenter']
      terminal?: components['schemas']['CreateParcelClientDeliveryTerminal']
      /**
       * @description Тип доставки.
       *
       *     - `TERMINAL` – в пункт выдачи заказов.
       *     - `SORTING_CENTER` – в сортировочный центр (для кросс-доставки).
       *     - `COURIER` - доставка курьером.
       * @example TERMINAL
       * @enum {string}
       */
      type: 'TERMINAL' | 'SORTING_CENTER' | 'COURIER'
    }
    /** @description Актуально, если забор/доставка будет осуществляться курьером. */
    CreateParcelClientDeliveryCourier: {
      address: components['schemas']['CreateParcelClientDeliveryCourierAddress']
      dateTimeInterval: components['schemas']['CreateParcelClientDeliveryCourierDateTimeInterval']
      options?: components['schemas']['CreateParcelClientDeliveryCourierOptions']
      pickupContact?: components['schemas']['CreateParcelClientDeliveryCourierPickupContact']
      /**
       * @description Cлужба доставки, которая будет осуществлять курьерскую доставку.
       * @example pecom-t2d
       */
      provider: string
    }
    /** @description Адрес пользователя */
    CreateParcelClientDeliveryCourierAddress: {
      /**
       * @description Адрес, выбранный пользователем.
       * @example Москва, ул. Лесная, 20с2
       */
      addressRow: string
      coordinates: components['schemas']['CreateParcelClientDeliveryCourierCoordinates']
      details: components['schemas']['CreateParcelClientDeliveryCourierAddressDetails']
    }
    /** @description Детали адреса курьерской доставки. */
    CreateParcelClientDeliveryCourierAddressDetails: {
      /**
       * @description Номер квартиры.
       * @example 23
       */
      flat?: string
      /**
       * @description Номер этажа.
       * @example 4
       */
      floor?: string
      /**
       * @description Номер дома, корпуса, строения пользователя.
       * @example 20с2
       */
      house: string
      /**
       * @description Номер подъезда.
       * @example 2
       */
      porch?: string
    }
    /** @description Координаты пользователя */
    CreateParcelClientDeliveryCourierCoordinates: {
      /**
       * @description Географическая широта, в градусах.
       * @example 55.779003
       */
      latitude: number
      /**
       * @description Географическая долгота, в градусах.
       * @example 37.591746
       */
      longitude: number
    }
    /** @description Интервал для курьерской доставки. */
    CreateParcelClientDeliveryCourierDateTimeInterval: {
      /**
       * Format: date-time
       * @description Дата и время окончания интервала в RFC3339.
       * @example 2025-02-01T10:26:15+03:00
       */
      end: string
      /**
       * Format: date-time
       * @description Дата и время начала интервала в RFC3339.
       * @example 2025-02-01T10:26:15+03:00
       */
      start: string
    }
    /** @description Опции курьерской доставки. */
    CreateParcelClientDeliveryCourierOptions: {
      /**
       * @description Комментарий для курьера, оставленный пользователем.
       * @example Комментарий для курьера
       */
      comment?: string
      /**
       * @description Способ связи с пользователем для подтверждения курьерской доставки.
       *
       *     На текущий момент способ связи всегда `PHONE`.
       * @example PHONE
       * @enum {string}
       */
      deliveryConfirmationType: 'PHONE'
      /**
       * @description Тип курьерской доставки.
       *
       *     - `DELIVERY_TO_DOOR` – доставка до двери. Передается для получателя.
       *     - `DELIVERY_TO_PORCH` – доставка до подъезда. Передается для получателя.
       *     - `DELIVERY_FROM_DOOR` – забор от двери. Передается для отправителя в сценарии Дверь-Терминал.
       * @example DELIVERY_TO_DOOR
       * @enum {string}
       */
      deliveryType: 'DELIVERY_TO_DOOR' | 'DELIVERY_TO_PORCH' | 'DELIVERY_FROM_DOOR'
      /**
       * @description Наличие лифта в доме, способного поднять посылку.
       * @example true
       */
      elevatorAvailable: boolean
    }
    /**
     * @description Контактное лицо для забора посылки курьером. Заполняется для отправителя в сценарии Дверь-Терминал.
     *     Может отличаться от имени отправителя (например, если отправитель – юридическое лицо).
     */
    CreateParcelClientDeliveryCourierPickupContact: {
      /**
       * @description ФИО контактного лица для забора посылки.
       * @example Иванов Иван Иванович
       */
      name: string
      /**
       * @description Телефон контактного лица для забора посылки.
       * @example +79999999999
       */
      phone: string
    }
    /** @description Информация o магистральном перевозчике. Актуально для кросс-доставки. */
    CreateParcelClientDeliverySecondPartyLogist: {
      /** @description Код службы доставки. */
      provider: string
    }
    /** @description Актуально, если доставка будет осуществлять из / в сортировочный центр. */
    CreateParcelClientDeliverySortingCenter: {
      accuracy: components['schemas']['CreateParcelPropertyAccuracy']
      /**
       * @description Идентификатор сортировочного центра по версии службы доставки владельца.
       * @example 123
       */
      id: string
      /**
       * @description Идентификатор службы доставки владельца сортировочного центра.
       * @example exmail
       */
      provider: string
    }
    /** @description Актуально, если доставка будет осуществляться из / в пункт выдачи заказов. */
    CreateParcelClientDeliveryTerminal: {
      accuracy: components['schemas']['CreateParcelPropertyAccuracy']
      /**
       * @description Идентификатор ПВЗ по версии службы доставки владельца.
       * @example 123
       */
      id: string
      /**
       * @description Идентификатор службы доставки владельца ПВЗ.
       * @example exmail
       */
      provider: string
    }
    /** @description Адрес пользователя */
    CreateParcelCourierAddress: {
      /**
       * @description Адрес, выбранный пользователем.
       * @example Москва, ул. Лесная, 20с2
       */
      addressRow: string
      coordinates: components['schemas']['CreateParcelCourierCoordinates']
      details: components['schemas']['CreateParcelCourierAddressDetails']
    }
    /** @description Детали адреса курьерской доставки. */
    CreateParcelCourierAddressDetails: {
      /**
       * @description Номер квартиры.
       * @example 23
       */
      flat: string
      /**
       * @description Номер этажа.
       * @example 4
       */
      floor: string
      /**
       * @description Номер дома, корпуса, строения пользователя.
       * @example 20с2
       */
      house: string
      /**
       * @description Номер подъезда.
       * @example 2
       */
      porch: string
    }
    /** @description Координаты пользователя */
    CreateParcelCourierCoordinates: {
      /**
       * @description Географическая широта, в градусах.
       * @example 55.779003
       */
      latitude: number
      /**
       * @description Географическая долгота, в градусах.
       * @example 37.591746
       */
      longitude: number
    }
    /** @description Интервал для курьерской доставки. */
    CreateParcelCourierDateTimeInterval: {
      /**
       * Format: date-time
       * @description Дата и время окончания интервала в RFC3339.
       * @example 2025-02-01T10:26:15+03:00
       */
      end: string
      /**
       * Format: date-time
       * @description Дата и время начала интервала в RFC3339.
       * @example 2025-02-01T10:26:15+03:00
       */
      start: string
    }
    CreateParcelCourierOptions: {
      /**
       * @description Комментарий для курьера, оставленный пользователем.
       * @example Комментарий для курьера
       */
      comment?: string
      /**
       * @description Наличие лифта в доме, способного поднять посылку.
       * @example true
       */
      elevatorAvailable?: boolean
    }
    /**
     * @description Тело ответа.
     *
     *     Поле присутствует, если запрос был успешно обработан. Если случилась ошибка, то поле отсутствует.
     */
    CreateParcelData: {
      /**
       * @description Штрихкоды посылки.
       *
       *     Штрихкоды обязательны к возврату в случае кросс-доставки.
       * @example [
       *       "1000001389165",
       *       "1000001389166"
       *     ]
       */
      barcodes?: string[]
      /**
       * @description Идентификатор посылки по версии службы доставки.
       * @example 00000138916
       */
      dispatchNumber: string
      /**
       * @description Трек-номер посылки по версии службы доставки.
       * @example 00000138916
       */
      trackingNumber: string
    }
    /** Данные по курьерской доставке */
    CreateParcelDeliveryCourier: {
      address?: components['schemas']['CreateParcelCourierAddress']
      dateTimeInterval?: components['schemas']['CreateParcelCourierDateTimeInterval']
      options?: components['schemas']['CreateParcelCourierOptions']
    }
    /**
     * @description Ошибка создания посылки.
     *
     *     Поле присутствует, если запрос не был успешно обработан. Если запрос был успешно обработан, то поле отсутствует.
     */
    CreateParcelError: {
      /**
       * @description Код ошибки.
       *
       *     - `VALIDATION_ERROR` – ошибка валидации данных (например, длина передаваемого поля превышает допустимые лимиты, или какое-то поле отсутствует).
       *     В поле `error.message` должно содержаться пояснение, какое поле не прошло валидацию.
       *     - `UNSUPPORTED_PARAM_ERROR` – в запросе получен неподдерживаемый параметр. В поле `error.message` должно содержаться пояснение, какое поле не поддерживается.
       *     - `TERMINAL_UNAVAILABLE` – терминал, указанный в запросе, недоступен для создания посылки. В поле `error.message` должно содержаться пояснение причины недоступности терминала.
       *     - `SORTING_CENTER_UNAVAILABLE` – сортировочный центр, указанный в запросе, недоступен для создания посылки. В поле error.message должно содержаться пояснение причины недоступности сортировочного центра.
       *
       *     Все перечисленные ошибки – "терминальные".
       *     При получении этих ошибок Avito не будет выполнять повторные запросы, т.к. повтор приведет к тому же результату.
       *
       *     Список в дальнейшем может пополняться.
       * @example VALIDATION_ERROR
       * @enum {string}
       */
      code: 'VALIDATION_ERROR' | 'UNSUPPORTED_PARAM_ERROR' | 'TERMINAL_UNAVAILABLE' | 'SORTING_CENTER_UNAVAILABLE'
      /**
       * @description Текстовое описание ошибки
       * @example Текст ошибки
       */
      message: string
    }
    CreateParcelItem: {
      /** @description Дерево категорий как на сайте Avito. */
      breadcrumbs?: components['schemas']['CreateParcelItemBreadcrumb'][]
      /**
       * @description Объявленная стоимость в копейках.
       * @example 1000
       */
      cost: number
      /**
       * @description Описание.
       * @example В наличии 🔥 Подшипники для самокатов и роликов Abec 7
       *
       *     Сервис-магазин RollersLife на Савушкина 141(Тк Меркурий)
       *
       *     ▬▬▬▬▬▬▬▬▬
       *
       *     Описание товара:
       *
       *     ♦ Подшипники для роликовых коньков и самокатов. цена указана за 1 штуку. 608 2rs Abec: 7 Пыльник: Пластик- полиуретановый Тип подшипника: закрытый Размеры: d 8 / D 22 / B 7 Комплект подшипников для роликовых коньков 16 штук 1000 рублей
       *
       *     ♦ Запчасть можно купить в нашей мастерской, при необходимости есть услуга по ремонту.
       *
       *     ▬▬▬▬▬▬▬▬▬
       *
       *     ❗️ В наличии большой ассортимент самокатов и запчастей ❗️
       *
       *     💰 Оплата любым удобным способом 💳
       *
       *     ЗВОНИТЕ/ПИШИТЕ ПРЯМО СЕЙЧАС
       *
       *     ▬▬▬▬▬▬▬▬▬
       *
       *     🔧 Ремонтируем
       *
       *     ✅ Электро-самокаты, гироскутеры, самокаты детские и взрослые,
       *
       *     ✅ Роликовые коньки, скейтборды, беговелы, велосипеды,
       *
       *     ✅ Детские коляски, чемоданы, тележки,
       *
       *     ✅ Горные лыжи, сноуборды.
       *
       *     ⚙️ Электросамокаты Kugoo, Xiaomi, Ninebot, Jack Hot, Hoverbot.
       *
       *     ⚙️ Гироскутеры всех брендов Smart Balance, Hoverbot и другие.
       *
       *     ▬▬▬▬▬▬▬▬▬
       *
       *     👉 Осуществляем доставку курьером по Санкт-Петербургу
       */
      description?: string
      dimensions?: components['schemas']['CreateParcelItemDimensions']
      /**
       * @description Идентификатор товара Avito.
       * @example 2574253956
       */
      id: number
      imagesUrls?: components['schemas']['CreateParcelItemImagesUrls']
      /**
       * @description Количество единиц товара.
       * @example 1
       */
      quantity: number
      /**
       * @description Дополнительные признаки товара. Признаки товара могут определять дополнительные услуги, оказываемые
       *     при приеме или выдаче посылки. На текущий момент поддерживается только один признак - `TRY_ON`,
       *     который означает,что возможна примерка в ПВЗ.
       *
       *     На определенные значения в тегах можно завязывать логику.
       *
       *     Список может постоянно пополняться.
       * @enum {array}
       */
      tags?: 'TRY_ON'
      /**
       * @description Название.
       * @example Подшипники для самокатов и роликов Abec 7
       */
      title: string
      weight?: components['schemas']['CreateParcelItemWeight']
    }
    CreateParcelItemBreadcrumb: {
      /**
       * @description Название категории
       * @example Спорт и отдых
       */
      name: string
    }
    CreateParcelItemDimensions: {
      accuracy: components['schemas']['CreateParcelPropertyAccuracy']
      /**
       * @description Габариты в сантиметрах.
       *
       *     В порядке: длина, высота, ширина.
       * @example [
       *       20,
       *       20,
       *       20
       *     ]
       */
      values: number[]
    }
    CreateParcelItemImagesUrls: {
      /**
       * @description Список URL-ов фотографий.
       * @example [
       *       "//24.img.avito.st/image/1/1.pUbrSba6Ca_d4MuqrTPvNzbqD6tfagFtWuoNp1_iCw.kszrqWjK0pNKI4ayaT821U-Ln2lzT8lSuqNt7pqedno",
       *       "//19.img.avito.st/image/1/1.rlbjCLa6Ar_VocC6s3LkJz6rBLtXKwp9UqsGt1ejAA.C4io31wn3Rjlc7SJGgeIVyxzC9LnoQUkGwmyaQ67-qs",
       *       "//90.img.avito.st/image/1/1.Z0Dh2ba6y6nXcAmso6AtMTx6za1V-sNrUHrPoVVyyQ.T1yZ87ZDiUSrUQNTYJkDbXub3lHC9_XBFtc8D1jOt7c",
       *       "//76.img.avito.st/image/1/1.QTUceba67dwq0C_ZEngLRMHa69ioWuUerdrp1KjS7w.JABYB8SsN5W6u5Y6WR49R8kKzr5IsGxF5HTjQPnygYQ",
       *       "//85.img.avito.st/image/1/1.eITjzra61G3VZxZon88y9T5t0mlX7dyvUm3QZVdl1g.aQyF5iZccldCZ5p9qtb-DZZobnPzdCSanQJmdHXQvdc"
       *     ]
       */
      list: string[]
      /**
       * @description URL основной фотографии.
       * @example //24.img.avito.st/image/1/1.pUbrSba6Ca_d4MuqrTPvNzbqD6tfagFtWuoNp1_iCw.kszrqWjK0pNKI4ayaT821U-Ln2lzT8lSuqNt7pqedno
       */
      listing: string
    }
    CreateParcelItemWeight: {
      accuracy: components['schemas']['CreateParcelPropertyAccuracy']
      /** @description Вес в граммах. */
      value?: number
    }
    CreateParcelOptions: {
      /**
       * @description Опции возврата.
       *
       *     Опции определяют политику возвратов. Доступен ли возврат, или что делать в определенных случаях.
       */
      return?: {
        receiver?: components['schemas']['CreateParcelClient']
        refused?: components['schemas']['CreateParcelOptionsReturnPolicy']
        returned?: components['schemas']['CreateParcelOptionsReturnPolicy']
        unclaimed?: components['schemas']['CreateParcelOptionsReturnPolicy']
      }
      /**
       * @description Список специфичных особенностей посылки.
       *
       *     На определенные значения в тегах можно завязывать логику.
       *     Те теги, которые вас, как службу доставки, не интересуют, игнорируйте.
       *     Список может постоянно пополняться.
       * @enum {array}
       */
      tags?: 'C2C' | 'B2C' | 'X_DELIVERY' | 'X_DELIVERY_FIRST_LEG' | 'X_DELIVERY_LAST_LEG' | 'RETURN'
    }
    CreateParcelOptionsReturnPolicy: {
      /**
       * @description Какое действие выполнить в случае возврата посылки.
       * @example DESTROY
       * @enum {string}
       */
      action: 'DISABLED' | 'DESTROY' | 'RETURN_TO_DEPARTURE_POINT' | 'RETURN_TO_RECEIVER' | 'MOVE_TO_ON_DEMAND_STORAGE'
      /**
       * @description Через какое время выполнить действие `action`.
       *
       *     Отсутствие поля означает, что выполнить нужно сразу.
       */
      after?: {
        /**
         * @description Единица интервала.
         * @example DAY
         * @enum {string}
         */
        unit: 'DAY'
        /**
         * @description Через сколько `unit` выполнить действие `action`.
         * @example 14
         */
        value: number
      }
    }
    CreateParcelPackage: {
      dimensions: components['schemas']['CreateParcelItemDimensions']
      weight: components['schemas']['CreateParcelItemWeight']
    }
    CreateParcelPayment: {
      delivery: {
        /**
         * @description Стоимость в копейках без НДС.
         * @example 10000
         */
        costWithoutVat: number
        status: components['schemas']['CreateParcelPaymentStatus']
      }
      items: {
        /**
         * @description Стоимость в копейках.
         * @example 10000
         */
        cost: number
        status: components['schemas']['CreateParcelPaymentStatus']
      }
    }
    /**
     * @description Статус оплаты.
     * @example PAID
     * @enum {string}
     */
    CreateParcelPaymentStatus: 'PAID' | 'ON_DELIVERY'
    /**
     * @description Точность габаритов.
     *
     *     На текущий момент точность габаритов всегда `APPROXIMATE`.
     * @example APPROXIMATE
     * @enum {string}
     */
    CreateParcelPropertyAccuracy: 'EXACT' | 'APPROXIMATE'
    CreateParcelReply: {
      data?: {
        /** Идентификатор заказа */
        orderID?: string
      } | null
      error?: components['schemas']['CreateParcelError']
    }
    CreateParcelRequest: {
      /**
       * @description Штрихкоды посылки.
       * @example [
       *       "1000001389165",
       *       "80511176616217"
       *     ]
       */
      barcodes?: string[]
      /**
       * @description Идентификатор прямого заказа Avito.
       * @example 38108624273277775
       */
      directOrderID?: string
      /**
       * @description Список товаров, которые поедут в посылке.
       *
       *     Содержит полное описание каждого отдельно взятого товара.
       */
      items: components['schemas']['CreateParcelItem'][]
      options?: components['schemas']['CreateParcelOptions']
      /**
       * @description Идентификатор заказа Avito.
       * @example 38108624273277776
       */
      orderID: string
      package?: components['schemas']['CreateParcelPackage']
      /**
       * @description Идентификатор посылки Avito.
       * @example P00012345
       */
      parcelID: string
      payment: components['schemas']['CreateParcelPayment']
      receiver: components['schemas']['CreateParcelClient']
      sender: components['schemas']['CreateParcelClient']
    }
    CreateParcelResponse: {
      data?: components['schemas']['CreateParcelData']
      error?: components['schemas']['CreateParcelError']
    }
    /** Терминал */
    CreateParcelUserDeliveryTerminal: {
      /**
       * Номер терминала
       * @example T1000
       */
      id?: string
    }
    CreateSandboxParcelError: {
      /** @enum {string} */
      code: 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'UNKNOWN_PROVIDER'
      message?: string
    } | null
    CreateSandboxParcelItem: {
      breadcrumbs?: components['schemas']['CreateParcelItemBreadcrumb'][]
      cost?: number
      description?: string
      /** @description Габариты товара в сантиметрах. Порядок [ширина, высота, длина]. Например, [15, 25, 35]. */
      dimensions?: {
        values?: number[]
      }
      quantity: number
      /**
       * @description Дополнительные признаки товара. Признаки товара могут определять дополнительные услуги, оказываемые
       *     при приеме или выдаче посылки. На текущий момент поддерживается только один признак - `TRY_ON`,
       *     который означает,что возможна примерка в ПВЗ.
       *
       *     На определенные значения в тегах можно завязывать логику.
       *
       *     Список может постоянно пополняться.
       * @enum {array}
       */
      tags?: 'TRY_ON'
      title?: string
      weight?: {
        value?: number
      }
    }
    /** Опции создания посылки */
    CreateSandboxParcelOptions: {
      /** Флаг для создания посылки с несколькими товарами. */
      isMultiItems?: boolean | null
      /**
       * URL регистрации
       * @description На заданный URL будет отправлен запрос на регистрацию посылки
       */
      registrationUrl?: string
      /**
       * Опции кросс-доставки
       * @description Если объект задан, будет создана кросс-доставочная посылка
       */
      xDelivery?: {
        /**
         * Плечо кросс-доставки
         * @description Этим параметром можно регулировать каким плечом будет СД, создающая посылку
         * @enum {string}
         */
        leg?: 'X_DELIVERY_FIRST_LEG' | 'X_DELIVERY_LAST_LEG'
      } | null
    }
    /** Данные по доставке */
    CreateSandboxParcelReceiverDelivery: {
      courier?: components['schemas']['CreateParcelDeliveryCourier']
      terminal?: components['schemas']['CreateParcelUserDeliveryTerminal']
    }
    /** Данные по доставке */
    CreateSandboxParcelUserDelivery: {
      terminal?: components['schemas']['CreateParcelUserDeliveryTerminal']
    }
    CreateSandboxParcelV2: {
      items?: components['schemas']['CreateSandboxParcelItem'][]
      options?: components['schemas']['CreateSandboxV2Options']
      receiver?: {
        delivery?: components['schemas']['CreateSandboxParcelReceiverDelivery']
      }
      sender?: {
        delivery?: components['schemas']['CreateSandboxParcelUserDelivery']
        /** @description ИНН пользователя, будет работать при tag - B2C. */
        inn?: string
      }
      tags?: string[]
    }
    CreateSandboxV2Options: {
      /** @description На заданный URL будет отправлен запрос на регистрацию посылки */
      registrationUrl?: string
    }
    /** @example 2023-09-20T10:00:00.52Z */
    DateWithTz: string
    'Delivery-coordinates': {
      /**
       * @description Географическая широта, в градусах.
       * @example 52.3295026
       */
      lat: number
      /**
       * @description Географическая долгота, в градусах.
       * @example 55.697951
       */
      lng: number
    }
    /** @description дата и время доставки/забора (дата и время локальные, таймзона соотвествует таймзоне, в которой происходит событие) */
    'Delivery-date-interval': {
      /**
       * Format: yyyy-mm-dd hh:mm:ss
       * @description дата и время начала события
       * @example 2006-01-02 15:04:05
       */
      dateFrom: string
      /**
       * Format: yyyy-mm-dd hh:mm:ss
       * @description дата и время окончания события
       * @example 2006-01-02 19:04:05
       */
      dateTo: string
    }
    /**
     * Габариты
     * @description Габариты в сантиметрах. В порядке длина(length), высота(height), ширина(width). <br />
     *     В случае если для отправления не имеет значения можно ли его вращать - нужно отсортировать от большего к меньшему
     * @example [
     *       200,
     *       50,
     *       30
     *     ]
     */
    'Delivery-dimensions': number[]
    /**
     * Контрольная дата доставки для прямого потока rfc3339 в UTC
     * @description Контрольная дата доставки для прямого потока в UTC. <br />
     *     Используется для посылок в статусе `IN_TRANSIT`
     * @example 1985-04-12T23:20:50.52Z
     */
    'Delivery-directControlDate': string
    /**
     * Тэг направления
     * @description Тэг направления, к которому привязывается пункт_самовывоза / индекс (область доставки).
     *     <br />
     *     Используется для связки в направлениях тарифа. Поля:
     *       - `directionTagFrom`
     *       - `directionTagTo`
     * @example moscow-2020-12-12
     */
    'Delivery-directionTag': string
    /**
     * Дата и время в формате rfc3339 в UTC
     * @description Дата и время события в UTC
     * @example 1985-04-12T23:20:50.52Z
     */
    'Delivery-eventDateTime': string
    /**
     * ID Авито
     * @description Генерируется на стороне Avito и передается в службу доставки в методах создания посылки.
     *
     *     ВАЖНО: несмотря на то, что поле называется `orderId`, в нем содержится идентификатор посылки Avito
     *     в формате `"P00012345"`.
     * @example P00012345
     */
    'Delivery-orderId-string': string
    /** Параметры доставки */
    'Delivery-params': {
      delivery?: components['schemas']['Delivery-terms']
      dimensions?: components['schemas']['Delivery-dimensions']
      weight?: components['schemas']['Delivery-weight']
    }
    /** @description Список номеров телефонов */
    'Delivery-phones': string[]
    /**
     * Терминал получателя посылки
     * @description Терминал получателя посылки. <br />
     *     Используется для посылок в статусах `IN_TRANSIT` и `ON_DELIVERY` в случае смены терминала. <br />
     *     Рекомендуется не передавать данный параметр совместно с остальными.
     * @example 5000
     */
    'Delivery-receiverTerminalCode': string | null
    /**
     * Контрольная дата доставки для возвратного потока rfc3339 в UTC
     * @description Контрольная дата доставки для возвратного потока в UTC. <br />
     *     Используется для посылок в статусе `IN_TRANSIT_RETURN`
     * @example 1985-04-12T23:20:50.52Z
     */
    'Delivery-returnControlDate': string
    /**
     * Терминал отправителя, в который едет возврат.
     * @description Терминал отправителя, в который едет возврат. <br />
     *     Используется для посылок в статусах `IN_TRANSIT_RETURN` и `ON_DELIVERY_RETURN` в случае смены терминала. <br />
     *     Рекомендуется не передавать данный параметр совместно с остальными.
     * @example 5001
     */
    'Delivery-senderReceiveTerminalCode': string | null
    /** Условия доставки */
    'Delivery-terms': {
      cost?: components['schemas']['Cost']
      directControlDate?: components['schemas']['Delivery-directControlDate']
      receiverTerminalCode?: components['schemas']['Delivery-receiverTerminalCode']
      returnControlDate?: components['schemas']['Delivery-returnControlDate']
      senderReceiveTerminalCode?: components['schemas']['Delivery-senderReceiveTerminalCode']
      toughWrap?: components['schemas']['Delivery-toughWrap']
    }
    /**
     * Признак наличия жёсткой упаковки или обрешетки для посылки
     * @description При передачи признака важно учитывать, что он необязательный. <br />
     *     Это означает, что не смотря на тип boolean у признака может быть 3 значения (`null`, `true`, `false`) <br />
     *     т.е. для отправки признака отсутствия обрешетки недостаточно передать `null`, нужно явно передавать `false`.
     */
    'Delivery-toughWrap': boolean | null
    /**
     * Вес
     * @description Вес в граммах
     * @example 1000
     */
    'Delivery-weight': unknown
    /**
     * Почтовый индекс. Не может быть пустым. Должен содержать 6 цифр.
     * @example 324654
     */
    'Delivery-zipCode': string
    /**
     * @description Интервал времени внутри одного дня `hh:mm:ss/hh:mm:ss`
     * @example 09:00:00/12:00:00
     */
    DeliveryDayTimeInterval: string
    /**
     * @description Список интервалов времени внутри одного дня, в формате - `hh:mm:ss/hh:mm:ss`
     *     Время локальное для региона загружаемых данных.
     */
    DeliveryDayTimeIntervals: components['schemas']['DeliveryDayTimeInterval'][]
    DeliveryError: {
      /**
       * код ошибки
       * @description код ошибки
       * @example fail
       */
      code: string
      /**
       * описание ошибки
       * @description Человекопонятное описание ошибки
       * @example something went wrong
       */
      message: string
    } | null
    DeliveryError4XX: {
      /**
       * Описание ошибки
       * @description Человекопонятное описание ошибки
       * @example something went wrong
       */
      message: string
      /**
       * статус
       * @description false – в случае возникновения ошибки
       * @example false
       */
      status?: boolean
    } | null
    /** @description дата и вреся доставки/забора (дата и время локальные, таймзона соотвествует таймзоне, в которой происходит событие) */
    DeliveryIntervalInDate: {
      /**
       * Format: date
       * @description дата доставки/забора
       * @example 2006-01-04
       */
      date: string
      intervals: components['schemas']['DeliveryDayTimeIntervals']
    }
    /**
     * @description id области доставки на стороне службы доставки
     *     (передается при загрузке областей доставки и будет использоваться при создании заказа
     *     в качестве идентификатора адресного объекта забора/доставки отправления)
     * @example 7989jgftyf-jkghtd
     */
    DeliveryProviderAreaNumber: string
    DeliverySetOrderPropertiesReply: {
      data?: {
        /**
         * статус сохранения свойств заказа
         * @description <br /> `success` - свойства успешно сохранены <br /> `duplicate` - свойства заказа были переданы ранее и текущий запрос был проигнорирован <br />
         * @enum {unknown}
         */
        status?: 'success' | 'duplicate'
      } | null
      error?: components['schemas']['DeliveryError']
    }
    DeliverySetOrderPropertiesRequest: {
      orderId: components['schemas']['Delivery-orderId-string']
      properties: components['schemas']['Delivery-params']
    }
    DeliverySetOrderRealAddresseReply: {
      data?: {
        /**
         * статус сохранения адреса заказа
         * @description <br /> `success` - адрес успешно сохранен <br /> `duplicate` - адрес заказа был переданы ранее и текущий запрос был проигнорирован <br />
         * @enum {unknown}
         */
        status?: 'success' | 'duplicate'
      } | null
      error?: components['schemas']['DeliveryError']
    }
    DeliverySetRealAddressRequest: {
      address: {
        /**
         * Тип Адреса
         * @description Тип адреса который передаётся <br />
         *     - `SENDER_SEND` - фактический адрес приёма посылки от отправителя (продавца)
         *     - `SENDER_RECEIVE` - фактический адрес возврата посылки отправителю (продавцу)
         * @enum {string}
         */
        addressType: 'SENDER_SEND' | 'SENDER_RECEIVE'
        /**
         * Идентификатор ПВЗ в службе доставки
         * @description Идентификатор ПВЗ в службе доставки, должен быть равен идентификатору ПВЗ передаваемому при загрузке терминалов
         * @example 234mlkh
         */
        terminalNumber: string
      }
      orderId: components['schemas']['Delivery-orderId-string']
    }
    /**
     * Детализация ответа.
     * @description <br /> Детализация ответа.<br /> <br /> Возвращается только со статусом `forbidden`. По детализации можно понять, почему выполнение перехода запрещено.
     */
    DeliverySetStatusDetails: {
      /**
       * @description Текущий статус.
       * @example IN_TRANSIT
       */
      from: string
    } | null
    DeliverySetStatusReply: {
      data?: {
        details?: components['schemas']['DeliverySetStatusDetails']
        /**
         * статус сохранения статуса
         * @description <br /> `success` - статус успешно добавлен <br /> `forbidden` - переход из текущего статуса в передавемый запрещен <br />
         * @enum {unknown}
         */
        status?: 'success' | 'forbidden'
      } | null
      error?: components['schemas']['DeliveryError']
    }
    /**
     * Доставка B2C
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceDeliveryB2C': {
      /**
       * @description Механика расчета стоимости <br />
       *     `GAP_TO_COST` - Механизм расчета при которой в зависимости от параметров отправления подбирается минимально возможное значение параметра `chargeableParameter` и соответствующая ему стоимость доставки
       * @enum {string}
       */
      calculationMechanic: 'GAP_TO_COST'
      /**
       * @description Параметр, относительно которого расчитывается стоимость доставки отправления
       *     <br />
       *       `WEIGHT` - Расчет относительно веса отправления<br />
       *       `DIMENSIONS` - Расчет относительно габаритов отправления<br />
       *       `PAID_WEIGHT` - Расчет относительно платного веса (большего из реального и объемного весов)<br />
       * @example WEIGHT
       * @enum {string}
       */
      chargeableParameter: 'WEIGHT' | 'DIMENSIONS' | 'PAID_WEIGHT'
      /**
       * @description Услуга доставки B2C
       * @example DELIVERY_B2C
       * @enum {string}
       */
      serviceName: 'DELIVERY_B2C'
    }
    /** @description Описание модели тарификации какой-либо из услуг доставки */
    'DeliveryTariffZone-ServiceDeliveryB2CByDimension': Omit<
      components['schemas']['DeliveryTariffZone-ServiceDeliveryB2C'],
      'chargeableParameter'
    > &
      WithRequired<components['schemas']['ValuesByDimension'], 'values'> & {
        /**
         * @description discriminator enum property added by openapi-typescript
         * @enum {string}
         */
        chargeableParameter: 'DIMENSIONS'
      }
    /** @description Описание модели тарификации какой-либо из услуг доставки */
    'DeliveryTariffZone-ServiceDeliveryB2CByPaidWeight': Omit<
      components['schemas']['DeliveryTariffZone-ServiceDeliveryB2C'],
      'chargeableParameter'
    > &
      WithRequired<components['schemas']['ValuesByPaidWeight'], 'values'> & {
        /**
         * @description discriminator enum property added by openapi-typescript
         * @enum {string}
         */
        chargeableParameter: 'PAID_WEIGHT'
      }
    /** @description Описание модели тарификации какой-либо из услуг доставки */
    'DeliveryTariffZone-ServiceDeliveryB2CByWeight': Omit<
      components['schemas']['DeliveryTariffZone-ServiceDeliveryB2C'],
      'chargeableParameter'
    > &
      WithRequired<components['schemas']['ValuesByWeight'], 'values'> & {
        /**
         * @description discriminator enum property added by openapi-typescript
         * @enum {string}
         */
        chargeableParameter: 'WEIGHT'
      }
    /**
     * Доставка B2C с шаговой ценой
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceDeliveryB2CWithStepCost': {
      /**
       * @description Механика расчета стоимости, при которой указывается диапазон с начальной стоимостью, шагом и ценой за шаг.
       * @enum {string}
       */
      calculationMechanic: 'WEIGHT_INTERVALS'
      /**
       * @description При значении `WEIGHT` работает такая логика подсчета цены: cost + ((Вес товара - minWeight) / step с округлением вверх) * costPerStep
       * @enum {string}
       */
      chargeableParameter: 'WEIGHT'
      /**
       * @description Услуга доставки
       * @example DELIVERY_B2C
       * @enum {string}
       */
      serviceName: 'DELIVERY_B2C'
      /** @description Список диапазонов весов с начальной стоимостью, шагом и ценой за шаг. */
      values: {
        /**
         * Format: int32
         * @description Начальная стоимость доставки отправления в копейках, соответствующая диапазону весов от предыдущего значения maxWeight до текущего.
         * @example 20000
         */
        cost?: number
        /**
         * Format: int32
         * @description Цена одного шага в копейках.
         * @example 5000
         */
        costPerStep?: number
        /**
         * Format: int32
         * @description Верхняя граница веса отправления (включительно) в граммах, до которой услуга доставки отправления не превышающего данный вес будет тарифицироваться.
         * @example 2000
         */
        maxWeight?: number
        /**
         * Format: int32
         * @description Нижняя граница веса отправления в граммах, от которой отсчитывается количество шагов, цену которых необходимо добавить к начальной стоимости.
         * @example 1000
         */
        minWeight?: number
        /**
         * Format: int32
         * @description Шаг веса в граммах, за который прибавляется значение `costPerStep` к конечной сумме доставки.
         * @example 100
         */
        step?: number
      }[]
    }
    /**
     * Доставка B2C с шаговой ценой и минимальной ценой
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceDeliveryB2CWithStepMinCost': {
      /**
       * @description Механика расчета стоимости, при которой указывается диапазон с начальной стоимостью, шагом и ценой за шаг, а также минимальной ценой за доставку.
       * @enum {string}
       */
      calculationMechanic: 'WEIGHT_INTERVALS_WITH_MIN_COST'
      /**
       * @description При значении `WEIGHT` или `PAID_WEIGHT` работает такая логика подсчета цены: cost + ((Платный вес товара - minWeight) / step с округлением вверх) * costPerStep
       * @enum {string}
       */
      chargeableParameter: 'WEIGHT' | 'PAID_WEIGHT'
      /**
       * Format: int32
       * @description Минимальная цена за доставку в копейках. Применяется, если посчитанная цена за доставку на основе values оказалась ниже minCost
       */
      minCost: number
      /**
       * @description Услуга доставки
       * @example DELIVERY_B2C
       * @enum {string}
       */
      serviceName: 'DELIVERY_B2C'
      /** @description Список диапазонов весов с начальной стоимостью, шагом и ценой за шаг. */
      values: {
        /**
         * Format: int32
         * @description Начальная стоимость доставки отправления в копейках, соответствующая диапазону весов от предыдущего значения maxWeight до текущего.
         * @example 20000
         */
        cost?: number
        /**
         * Format: int32
         * @description Цена одного шага в копейках.
         * @example 5000
         */
        costPerStep?: number
        /**
         * Format: int32
         * @description Верхняя граница веса отправления (включительно) в граммах, до которой услуга доставки отправления не превышающего данный вес будет тарифицироваться.
         * @example 2000
         */
        maxWeight?: number
        /**
         * Format: int32
         * @description Нижняя граница веса отправления в граммах, от которой отсчитывается количество шагов, цену которых необходимо добавить к начальной стоимости.
         * @example 1000
         */
        minWeight?: number
        /**
         * Format: int32
         * @description Шаг веса в граммах, за который прибавляется значение `costPerStep` к конечной сумме доставки.
         * @example 100
         */
        step?: number
      }[]
    }
    /**
     * Доставка C2C
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceDeliveryC2C': {
      /**
       * @description Механика расчета стоимости <br />
       *     `GAP_TO_COST` - Механизм расчета при которой в зависимости от параметров отправления подбирается минимально возможное значение параметра `chargeableParameter` и соответствующая ему стоимость доставки
       * @enum {string}
       */
      calculationMechanic: 'GAP_TO_COST'
      /**
       * @description Параметр, относительно которого расчитывается стоимость доставки отправления
       *     <br />
       *       `WEIGHT` - Расчет относительно веса отправления<br />
       *       `DIMENSIONS` - Расчет относительно габаритов отправления<br />
       *       `PAID_WEIGHT` - Расчет относительно платного веса (большего из реального и объемного весов)<br />
       * @example WEIGHT
       * @enum {string}
       */
      chargeableParameter: 'WEIGHT' | 'DIMENSIONS' | 'PAID_WEIGHT'
      /**
       * @description Услуга доставки C2C
       * @example DELIVERY
       * @enum {string}
       */
      serviceName: 'DELIVERY'
    }
    /** @description Описание модели тарификации какой-либо из услуг доставки */
    'DeliveryTariffZone-ServiceDeliveryC2CByDimension': Omit<
      components['schemas']['DeliveryTariffZone-ServiceDeliveryC2C'],
      'chargeableParameter'
    > &
      WithRequired<components['schemas']['ValuesByDimension'], 'values'> & {
        /**
         * @description discriminator enum property added by openapi-typescript
         * @enum {string}
         */
        chargeableParameter: 'DIMENSIONS'
      }
    /** @description Описание модели тарификации какой-либо из услуг доставки */
    'DeliveryTariffZone-ServiceDeliveryC2CByPaidWeight': Omit<
      components['schemas']['DeliveryTariffZone-ServiceDeliveryC2C'],
      'chargeableParameter'
    > &
      WithRequired<components['schemas']['ValuesByPaidWeight'], 'values'> & {
        /**
         * @description discriminator enum property added by openapi-typescript
         * @enum {string}
         */
        chargeableParameter: 'PAID_WEIGHT'
      }
    /** @description Описание модели тарификации какой-либо из услуг доставки */
    'DeliveryTariffZone-ServiceDeliveryC2CByWeight': Omit<
      components['schemas']['DeliveryTariffZone-ServiceDeliveryC2C'],
      'chargeableParameter'
    > &
      WithRequired<components['schemas']['ValuesByWeight'], 'values'> & {
        /**
         * @description discriminator enum property added by openapi-typescript
         * @enum {string}
         */
        chargeableParameter: 'WEIGHT'
      }
    /**
     * Доставка C2C с шаговой ценой
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceDeliveryC2CWithStepCost': {
      /**
       * @description Механика расчета стоимости, при которой указывается диапазон с начальной стоимостью, шагом и ценой за шаг.
       * @enum {string}
       */
      calculationMechanic: 'WEIGHT_INTERVALS'
      /**
       * @description При значении `WEIGHT` работает такая логика подсчета цены: cost + ((Вес товара - minWeight) / step с округлением вверх) * costPerStep
       * @enum {string}
       */
      chargeableParameter: 'WEIGHT'
      /**
       * @description Услуга доставки
       * @example DELIVERY
       * @enum {string}
       */
      serviceName: 'DELIVERY'
      /** @description Список диапазонов весов с начальной стоимостью, шагом и ценой за шаг. */
      values: {
        /**
         * Format: int32
         * @description Начальная стоимость доставки отправления в копейках, соответствующая диапазону весов от предыдущего значения maxWeight до текущего.
         * @example 20000
         */
        cost?: number
        /**
         * Format: int32
         * @description Цена одного шага в копейках.
         * @example 5000
         */
        costPerStep?: number
        /**
         * Format: int32
         * @description Верхняя граница веса отправления (включительно) в граммах, до которой услуга доставки отправления не превышающего данный вес будет тарифицироваться.
         * @example 2000
         */
        maxWeight?: number
        /**
         * Format: int32
         * @description Нижняя граница веса отправления в граммах, от которой отсчитывается количество шагов, цену которых необходимо добавить к начальной стоимости.
         * @example 1000
         */
        minWeight?: number
        /**
         * Format: int32
         * @description Шаг веса в граммах, за который прибавляется значение `costPerStep` к конечной сумме доставки.
         * @example 100
         */
        step?: number
      }[]
    }
    /**
     * Доставка C2C с шаговой ценой и минимальной ценой
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceDeliveryC2CWithStepMinCost': {
      /**
       * @description Механика расчета стоимости, при которой указывается диапазон с начальной стоимостью, шагом и ценой за шаг, а также минимальной ценой за доставку.
       * @enum {string}
       */
      calculationMechanic: 'WEIGHT_INTERVALS_WITH_MIN_COST'
      /**
       * @description При значении `WEIGHT` или `PAID_WEIGHT` работает такая логика подсчета цены: cost + ((Платный вес товара - minWeight) / step с округлением вверх) * costPerStep
       * @enum {string}
       */
      chargeableParameter: 'WEIGHT' | 'PAID_WEIGHT'
      /**
       * Format: int32
       * @description Минимальная цена за доставку в копейках. Применяется, если посчитанная цена за доставку на основе values оказалась ниже minCost
       */
      minCost: number
      /**
       * @description Услуга доставки
       * @example DELIVERY
       * @enum {string}
       */
      serviceName: 'DELIVERY'
      /** @description Список диапазонов весов с начальной стоимостью, шагом и ценой за шаг. */
      values: {
        /**
         * Format: int32
         * @description Начальная стоимость доставки отправления в копейках, соответствующая диапазону весов от предыдущего значения maxWeight до текущего.
         * @example 20000
         */
        cost?: number
        /**
         * Format: int32
         * @description Цена одного шага в копейках.
         * @example 5000
         */
        costPerStep?: number
        /**
         * Format: int32
         * @description Верхняя граница веса отправления (включительно) в граммах, до которой услуга доставки отправления не превышающего данный вес будет тарифицироваться.
         * @example 2000
         */
        maxWeight?: number
        /**
         * Format: int32
         * @description Нижняя граница веса отправления в граммах, от которой отсчитывается количество шагов, цену которых необходимо добавить к начальной стоимости.
         * @example 1000
         */
        minWeight?: number
        /**
         * Format: int32
         * @description Шаг веса в граммах, за который прибавляется значение `costPerStep` к конечной сумме доставки.
         * @example 100
         */
        step?: number
      }[]
    }
    /**
     * Страховка B2C
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceInsuranceB2C': {
      /**
       * @description Механика расчета стоимости
       * @enum {string}
       */
      calculationMechanic: 'GAP_TO_PERCENT'
      /**
       * @example DECLARED_COST
       * @enum {string}
       */
      chargeableParameter: 'DECLARED_COST'
      /**
       * @example INSURANCE_B2C
       * @enum {string}
       */
      serviceName: 'INSURANCE_B2C'
      /** @description Список значений для рассчета страховки. */
      values: {
        /**
         * Format: int32
         * @description Верхняя граница объявленной стоимости отправления (в копейках), до которой (не включительно) услуга страховки отправления не превышающего данную стоимость будет тарифицироваться в соответствии со значением указанным в поле percent
         * @example 10000
         */
        maxDeclaredCost?: number
        /**
         * Format: float
         * @description Процент от объявленной стоимости, по которому рассчитывается стоимость страховки отправления в диапазоне от предыдущего maxDeclaredCost до текущего
         * @example 1
         */
        percent?: number
      }[]
    }
    /**
     * Страховка C2C
     * @description Описание модели тарификации какой-либо из услуг доставки
     */
    'DeliveryTariffZone-ServiceInsuranceC2C': {
      /**
       * @description Механика расчета стоимости
       * @enum {string}
       */
      calculationMechanic: 'GAP_TO_PERCENT'
      /**
       * @example DECLARED_COST
       * @enum {string}
       */
      chargeableParameter: 'DECLARED_COST'
      /**
       * @example INSURANCE
       * @enum {string}
       */
      serviceName: 'INSURANCE'
      /** @description Список значений для рассчета страховки. */
      values: {
        /**
         * Format: int32
         * @description Верхняя граница объявленной стоимости отправления (в копейках), до которой (не включительно) услуга страховки отправления не превышающего данную стоимость будет тарифицироваться в соответствии со значением указанным в поле percent
         * @example 10000
         */
        maxDeclaredCost?: number
        /**
         * Format: float
         * @description Процент от объявленной стоимости, по которому рассчитывается стоимость страховки отправления в диапазоне от предыдущего maxDeclaredCost до текущего
         * @example 1
         */
        percent?: number
      }[]
    }
    DeliveryTrackingRequest: {
      /**
       * Событие
       * @description Описание статусов см. [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/mehanika_raboty_trekinga).
       * @example RECEIVED_AT_TRANSIT_TERMINAL
       */
      avitoEventType: string
      /**
       * Статус
       * @description Описание статусов см. [здесь](https://developers.avito.ru/api-catalog/delivery-sandbox/documentation#info/mehanika_raboty_trekinga).
       * @example IN_TRANSIT
       * @enum {unknown}
       */
      avitoStatus:
        | 'CONFIRMED'
        | 'IN_TRANSIT'
        | 'ON_DELIVERY'
        | 'DELIVERED'
        | 'IN_TRANSIT_RETURN'
        | 'ON_DELIVERY_RETURN'
        | 'RETURNED'
        | 'LOST'
        | 'DESTROYED'
      /**
       * Комментарий
       * @description Комментарий к статусу.
       * @example Не понравился цвет
       */
      comment?: string
      date: components['schemas']['Delivery-eventDateTime']
      /**
       * Локация
       * @description Локация в которой произошло событие (населённый пункт в именительном падеже).
       * @example Казань
       */
      location: string
      /**
       * @description Дополнительные опции к статусу. На данный момент в опциях поддержана передача штрихкода посылки и возвратных номеров.
       *     Если номера `returnTrackingNumber` и `returnDispatchNumber` совпадают, то нужно присылать в них одинаковые значения.
       */
      options?: {
        /**
         * Штрихкод посылки
         * @description Штрихкод посылки.
         */
        barcode?: string
        /**
         * Возвратный штрихкод
         * @description Возвратный штрихкод посылки. Будет использоваться в кросс-доставке на возвратном потоке.
         */
        returnBarcode?: string
        /**
         * Возвратный номер получения посылки
         * @description Номер, по которому отправитель может получить возвратную посылку.
         */
        returnDispatchNumber?: string
        /**
         * Возвратный трек-номер
         * @description Номер, по которому отправитель может отследить возвратную посылку.
         */
        returnTrackingNumber?: string
      }
      orderId: components['schemas']['Delivery-orderId-string']
      /**
       * Код события по версии службы доставки
       * @description Код события по версии службы доставки.
       * @example 3246м4
       */
      providerEventCode: string
    }
    Direction: {
      /**
       * id направления доставки
       * @description Идентификатор направления доставки на стороне службы доставки
       * @example 12-34
       */
      deliveryProviderDirectionId: string
      /**
       * @description Идентификатор [тарифной зоны](#tag/AvitoDeliveryTariffZone); ссылается на один из объектов в поле tariffZones
       * @example 42
       */
      deliveryProviderTariffZoneId: string
      /**
       * Тэг направления "откуда"
       * @description Тэг направления адресных объектов (ПВЗ) из которых доступна доставка на условиях приведенных в данном направление
       * @example moscow
       */
      directionTagFrom: string
      /**
       * Список тэгов направлений "куда"
       * @description Тэг направления адресных объектов (ПВЗ) в которые доступна доставка на условиях приведенных в данном направление
       * @example kazan
       */
      directionTagTo: string
      /**
       * Format: int32
       * @description Максимальный срок доставки в рабочих днях
       */
      maxTerm: number
      /**
       * Format: int32
       * @description Минимальный срок доставки в рабочих днях
       * @example 1
       */
      minTerm: number
      /**
       * Название направления доставки
       * @description Человекопонятное название направления (будет использоваться в интерфейсной части)
       * @example Направление 12-34
       */
      name: string
      /**
       * @description Тип объектов, которые связывает данное направление
       * @example pickup2pickup
       */
      type: string
    }
    DirectionV2: {
      /**
       * id направления доставки
       * @description Идентификатор или человекопонятное название направления доставки на стороне службы доставки
       * @example 12-34
       */
      providerDirectionId: string
      /**
       * Тэг направления "откуда"
       * @description Тэг направления адресных объектов (ПВЗ) из которых доступна доставка на условиях приведенных в данном направление
       * @example moscow
       */
      tagFrom: string
      /**
       * Список тэгов направлений "куда"
       * @description Тэг направления адресных объектов (ПВЗ) в которые доступна доставка на условиях приведенных в данном направление
       * @example kazan
       */
      tagTo: string
      /** Список возможных типов доставки и их условий */
      zones: components['schemas']['Zone'][]
    }
    GetChangeParcelInfoError: {
      /** @enum {string} */
      code: 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'APPLICATION_NOT_FOUND'
      message?: string
    } | null
    GetChangeParcelInfoReply: {
      data?: components['schemas']['GetChangeParcelInfoReplyData']
      error?: components['schemas']['GetChangeParcelInfoError']
    }
    GetChangeParcelInfoReplyData: {
      receiver?: {
        /** Новые ФИО получателя */
        name?: string
        /** Новые телефоны получателя */
        phones?: string[]
      }
      /** Текущий статус заявки */
      status?: string
    } | null
    GetChangeParcelInfoRequest: {
      /** Идентификатор заявки на изменение данных посылки */
      applicationID: string
    }
    GetInfoByOrderIdErrorReply: {
      /** @description Код ошибки */
      code: number
      /** @description Сообщение об ошибке */
      message: string
      /**
       * @description Название ошибки
       * @enum {string}
       */
      name?: 'not_authorized' | 'bad_parameter' | 'bad_request'
    }
    GetRegisteredParcelIDError: {
      /** @enum {string} */
      code: 'NOT_FOUND' | 'NOT_REGISTERED' | 'VALIDATION_ERROR' | 'INTERNAL_ERROR'
      message?: string
    } | null
    GetRegisteredParcelIDReply: {
      data?: {
        parcelID?: string
      } | null
      error?: components['schemas']['GetRegisteredParcelIDError']
    }
    GetRegisteredParcelIDRequest: {
      orderID: string
    }
    /** Реальные весогабаритные параметры посылки */
    GetSandboxParcelInfoDimensions: {
      realHeight?: number | null
      realLength?: number | null
      realWeight?: number | null
      realWidth?: number | null
    } | null
    GetSandboxParcelInfoError: {
      /** @enum {string} */
      code: 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'UNKNOWN_PROVIDER' | 'NOT_FOUND'
      message?: string
    } | null
    GetSandboxParcelInfoParcelHistory: {
      /** Format: date-time */
      date?: string
      event?: string
      location?: string | null
      status?: string
    }
    GetSandboxParcelInfoReply: {
      data?: components['schemas']['GetSandboxParcelInfoReplyData']
      error?: components['schemas']['GetSandboxParcelInfoError']
    }
    GetSandboxParcelInfoReplyData: {
      dimensions?: components['schemas']['GetSandboxParcelInfoDimensions']
      /** История статусов посылки */
      history?: components['schemas']['GetSandboxParcelInfoParcelHistory'][]
      /** Информация о получателе */
      receiver?: {
        terminals?: components['schemas']['GetSandboxParcelInfoTerminals']
      }
      /** Информация об отправителе */
      sender?: {
        terminals?: components['schemas']['GetSandboxParcelInfoTerminals']
      }
      /** Текущий статус посылки */
      status?: string
    } | null
    GetSandboxParcelInfoRequest: {
      parcelID: string
    }
    GetSandboxParcelInfoTerminals: {
      /** Расчетный терминал */
      approximate?: string
      /** Реальный терминал */
      real?: string | null
    }
    GetTariffTaskReply: {
      data?: {
        /** ошибки возникшие при добавлении тарифа */
        errors?: components['schemas']['DeliveryError'][] | null
        result?: components['schemas']['TariffTaskResult']
        /**
         * статус выполнения задачи
         * @description `processing` - задача в процессе обработки
         *     `success` - задача успешно выполнена
         *     `failed` - выполнение задачи завершилось ошибкой
         * @enum {unknown}
         */
        state?: 'processing' | 'success' | 'failed'
        /**
         * Format: int32
         * @description id задачи на добавление тарифа
         */
        taskId?: number
      } | null
      error?: components['schemas']['DeliveryError']
    }
    GetTaskData: {
      errors?: components['schemas']['DeliveryError'][] | null
      result?:
        | (
            | components['schemas']['AreasTaskResult']
            | components['schemas']['AreasCustomScheduleTaskResult']
            | components['schemas']['TerminalsTaskResult']
            | components['schemas']['TariffTaskResult']
            | components['schemas']['SortingCentersTaskResult']
            | components['schemas']['SortingCentersTagsTaskResult']
          )
        | null
      /**
       * @description Статус задачи
       * @enum {string}
       */
      state: 'processing' | 'success' | 'failed' | 'pending_approval' | 'declined'
      /** Format: int32 */
      taskId: number
    }
    GetTaskReply: {
      data?: components['schemas']['GetTaskData']
      error?: components['schemas']['DeliveryError']
    }
    GetTerminalsTaskReply: {
      data?: {
        /** ошибки по терминалам которые неудалось загрузить */
        errors?: components['schemas']['DeliveryError'][] | null
        result?: components['schemas']['TerminalsTaskResult']
        /**
         * @description Статус задачи
         * @enum {string}
         */
        state?: 'processing' | 'success' | 'failed' | 'pending_approval' | 'declined'
        /** Format: int32 */
        taskId?: number
      } | null
      error?: components['schemas']['DeliveryError']
    }
    GetTokenRequest: {
      client_id: string
      client_secret: string
      /** @default client_credentials */
      grant_type: string
    }
    /**
     * @description Фотографии товара.
     *     <br />
     *     Максимальное резрешение одной картинки 640х480 px
     *     <br />
     *     Максимальное размер одной картинки 0.14 MB (бОльшая часть изображений имеет размер ~50 KB)
     */
    ImageUrls: {
      /** @description Список URL фотографий айтема */
      list: string[]
      /** @description URL основной фотографии айтема */
      listing: string
    }
    Restriction: {
      /**
       * Format: int32
       * @description Используется при подсчете ограничения по объемному весу в пункте выдачи по формуле: Д * Ш * В / dimensionalFactor = объемный вес.
       *     Если задан maxDimensionalWeight, то dimensionalFactor должен быть обязательно передан.
       * @example 1000
       */
      dimensionalFactor?: number
      /**
       * Format: int32
       * @description Максимальное ограничения по объявленной стоимости товара, который можно получить/отправить в пункте выдачи. Значение указывается в копейках.
       *     Если объявленная стоимость товара будет больше этого значения, Авито посчитает невозможным отправку/получение товара через этот пункт
       *     и не даст покупателю выбрать его как точку доставки/сдачи посылки.
       * @example 1000
       */
      maxDeclaredCost: number
      /**
       * Format: int32
       * @description Максимальное ограничения по объемному весу товара, который можно получить/отправить в пункте выдачи.
       *     Если объемный вес товара будет больше этого значения, Авито посчитает невозможным отправку/получение товара через этот пункт
       *     и не даст покупателю выбрать его как точку доставки/сдачи посылки.
       * @example 1000
       */
      maxDimensionalWeight?: number
      /**
       * @description Максимальные ограничения по габаритам товара, который можно получить/отправить в пункте выдачи. Значение указывается в сантиметрах.
       *     Если габариты товара будет больше этого значения, Авито посчитает невозможным отправку/получение товара через этот пункт
       *     и не даст покупателю выбрать его как точку доставки/сдачи посылки.
       * @example [
       *       200,
       *       50,
       *       30
       *     ]
       */
      maxDimensions: number[]
      /**
       * Format: int32
       * @description Максимальный вес товара, который можно получить или отправить в пункте выдачи. Значение указывается в граммах.
       *     Если вес товара будет больше этого значения, Авито посчитает невозможным отправку/получение товара через этот пункт
       *     и не даст покупателю выбрать его как точку доставки/сдачи посылки.
       * @example 1000
       */
      maxWeight: number
    }
    SandboxCancelAnnouncementError: {
      /** @enum {string} */
      code: 'INTERNAL_ERROR' | 'VALIDATION_ERROR' | 'ANNOUNCEMENT_NOT_FOUND'
      message: string
    } | null
    /** @description Опции отмены анонса. */
    SandboxCancelAnnouncementOptions: {
      /** @description URL, куда отправлять отмену анонса. */
      urlToCancelAnnouncement: string
    }
    SandboxCancelAnnouncementReply: {
      data?: {
        /**
         * @description Статус выполнения операции.
         * @enum {string}
         */
        status?: 'success'
      } | null
      error?: components['schemas']['SandboxCancelAnnouncementError']
    }
    SandboxCancelAnnouncementRequest: {
      /**
       * Format: uuid
       * @description Уникальный идентификатор анонса UUID V4.
       */
      announcementID: string
      /**
       * Format: date-time
       * @description Дата события
       * @example 2023-09-20T10:00:00.52Z
       */
      date: string
      options: components['schemas']['SandboxCancelAnnouncementOptions']
    }
    SandboxCreateAnnouncementDeliveryPoint: {
      /**
       * @description Точность определения точки.
       * @enum {string|null}
       */
      accuracy?: 'EXACT' | 'APPROXIMATE' | null
      /** @description Идентификатор точки (ПВЗ/сортировочного центра). */
      id?: string | null
      /** @description Код службы доставки. */
      provider: string
    } | null
    SandboxCreateAnnouncementError: {
      /** @enum {string} */
      code: 'VALIDATION_ERROR' | 'INTERNAL_ERROR' | 'OBJECT_EXISTS'
      message: string
    } | null
    /** @description Опции анонса. */
    SandboxCreateAnnouncementOptions: {
      /** @description URL, куда отправлять сформированный анонс. */
      urlToSendAnnouncement: string
    }
    SandboxCreateAnnouncementPackage: {
      /** @description Штрихкод идентификатор грузоместа. */
      id: string
      /** @description Список идентификаторов посылок Авито. */
      parcelIDs: string[]
      /** @description Номер пломбы грузоместа. */
      sealID?: string | null
    }
    SandboxCreateAnnouncementParticipant: {
      delivery: {
        sortingCenter?: components['schemas']['SandboxCreateAnnouncementDeliveryPoint']
        terminal?: components['schemas']['SandboxCreateAnnouncementDeliveryPoint']
        /**
         * @description Тип пункта отправки/приема.
         * @enum {string}
         */
        type: 'TERMINAL' | 'SORTING_CENTER'
      }
      /** @description Электронная почта участника. */
      email: string
      /** @description Наименование участника доставки (отправителя/получателя). */
      name: string
      /** @description Контактные телефоны. */
      phones: string[]
      /**
       * @description Тип участника доставки (отправителя/получателя).
       * @enum {string}
       */
      type: '3PL' | 'ABD'
    }
    SandboxCreateAnnouncementReply: {
      data?: {
        /**
         * @description Статус выполнения операции.
         * @enum {string}
         */
        status?: 'success' | 'failed'
      } | null
      error?: components['schemas']['SandboxCreateAnnouncementError']
    }
    SandboxCreateAnnouncementRequest: {
      /** @description Уникальный идентификатор анонса UUID V4. */
      announcementID: string
      /**
       * @description Тип анонса.
       * @enum {string}
       */
      announcementType: 'DELIVERY' | 'PICKUP'
      /** @description Штрихкод анонса. */
      barcode: string
      /**
       * Format: date-time
       * @description Дата и время создания анонса (UTC).
       */
      date: string
      options: components['schemas']['SandboxCreateAnnouncementOptions']
      /** @description Список грузомест. */
      packages: components['schemas']['SandboxCreateAnnouncementPackage'][]
      receiver: components['schemas']['SandboxCreateAnnouncementParticipant']
      sender: components['schemas']['SandboxCreateAnnouncementParticipant']
    }
    SandboxGetAnnouncementEventError: {
      /** @enum {string} */
      code: 'INTERNAL_ERROR' | 'VALIDATION_ERROR' | 'ANNOUNCEMENT_NOT_FOUND'
      message: string
    } | null
    SandboxGetAnnouncementEventReply: {
      data?: {
        /** @description Последнее событие анонса. */
        announcementEvent?: string
      } | null
      error?: components['schemas']['SandboxGetAnnouncementEventError']
    }
    SandboxGetAnnouncementEventRequest: {
      /** @description Уникальный идентификатор анонса UUID V4. */
      announcementID: string
    }
    /**
     * @description Значения интервала времени в течение дня должны быть в диапазоне от `00:00:00` до `23:59:59`.
     *     Интервал работы после полуночи необходимо переносить в следующий день недели.
     *
     *     Правильно:
     *       - `"fri": ["09:00:00/12:00:00", "13:00:00/18:00:00"]` – расписание в пятницу с 9 до 18 с перерывом с 12 до 13
     *       - `"sun": []` – выходной в воскресенье
     *
     *     Неправильно:
     *       - `"mon": ["09:00/18:00"]` – не хватает значения секунд
     *       - `"tue": ["09:00:00/01:00:00"]` – интервал заходит на следующий день
     *       - `"wen": ["09:00:00/00:00:00"]` – максимальное значение границы должно быть `23:59:59`
     */
    Schedule: {
      fri: components['schemas']['DeliveryDayTimeIntervals']
      mon: components['schemas']['DeliveryDayTimeIntervals']
      sat: components['schemas']['DeliveryDayTimeIntervals']
      sun: components['schemas']['DeliveryDayTimeIntervals']
      thu: components['schemas']['DeliveryDayTimeIntervals']
      tue: components['schemas']['DeliveryDayTimeIntervals']
      wed: components['schemas']['DeliveryDayTimeIntervals']
    }
    ServerErrorReply: {
      /**
       * @description Код ошибки
       * @example 500
       */
      code: number
      /**
       * @description Сообщение об ошибке
       * @example Error while processing request. Please, contact support
       */
      message: string
    }
    SetStatusErrorReply: {
      /** @description Код ошибки */
      code: number
      /** @description Сообщение об ошибке */
      message: string
      /**
       * @description Название ошибки
       * @enum {string}
       */
      name?: 'not_authorized' | 'bad_parameter' | 'bad_request'
    }
    SetStatusReply: {
      /** @description Результат выполнения операции */
      success: boolean
    }
    SetStatusRequest: {
      /**
       * @description Штрихкод отправления
       * @example 1334648564
       */
      barcode: string
      /**
       * @description Текущий статус отправления в сортировочном центре. Возможные статусы:<br/>
       *        `DELIVERY_RECEIVE` - Отправление прибыло в сортировочный центр<br/>
       *        `DELIVERY_SEND`    - Отправление помечено для отправки в службу доставки<br/>
       *        `RETURN_RECEIVE`   - Отправление прибыло в сортировочный центр (обратное движение)<br/>
       *        `RETURN_SEND`      - Отправление помечено для отправки продавцу (обратное движение)<br/>
       * @example DELIVERY_RECEIVE
       */
      status: string
      /**
       * @description Временая метка перехода в статус
       * @example 12413524
       */
      timestamp: number
    }
    SortingCenterGet: {
      data?: components['schemas']['SortingCenterGetData'][] | null
      error?: {
        /**
         * код ошибки
         * @description код ошибки
         * @example fail
         */
        code: string
        /**
         * описание ошибки
         * @description человекопонятное описание ошибки
         * @example something went wrong
         */
        message: string
      }
    }
    SortingCenterGetData: {
      address: components['schemas']['Address']
      deliveryProviderId: components['schemas']['SortingCenterID']
      /**
       * @description Описание как пройти/проехать
       * @example Выход из последнего вагона, сначала прямо потом налево
       */
      itinerary: string
      /**
       * Название ХАБа
       * @description Человекопонятное название ХАБа (будет использоваться в интефейсной части)
       * @example 1234-dffg
       */
      name: string
      phones: components['schemas']['Delivery-phones']
      /** @description Список ссылок на фотографии */
      photos: string[]
      restriction: components['schemas']['Restriction']
      schedule: components['schemas']['Schedule']
    }
    SortingCenterID: {
      /**
       * id ХАБа в службе доставки
       * @description Уникальный идентификатор ХАБа на стороне службы доставки
       * @example 1234-dffg
       */
      deliveryProviderId?: string
      /**
       * код службы доставки в платформе Авито
       * @description ### Справочник служб доставки
       *     |    код    |    Название  |
       *     |-----------|--------------|
       *     |   pochta  | Почта России |
       *     |   exmail  | ExMail       |
       *     |     bb    | Boxberyy     |
       *     |     pp    | PickPoint    |
       *     |    dpd    | DPD          |
       * @example 7989jgftyf-jkghtd
       */
      provider?: string
    }
    SortingCenterPost: {
      address: components['schemas']['Address']
      /**
       * id ХАБа в службе доставки
       * @description Уникальный идентификатор ХАБа на стороне службы доставки
       * @example 1234-dffg
       */
      deliveryProviderId: string
      /**
       * @description Описание как пройти/проехать
       * @example Выход из последнего вагона, сначала прямо потом налево
       */
      itinerary: string
      /**
       * Название ХАБа
       * @description Человекопонятное название ХАБа (будет использоваться в интефейсной части)
       * @example 1234-dffg
       */
      name: string
      phones: components['schemas']['Delivery-phones']
      /**
       * @description Список ссылок на фотографии.
       *     <br />
       *     В случае если фотографий нет, следует передать пустой массив.
       */
      photos: string[]
      restriction: components['schemas']['Restriction']
      schedule: components['schemas']['Schedule']
    }
    /** Привязка тегов к сортировочным центрам */
    SortingCentersTagsTaskResult: {
      /** @description Количество успешно привязанных тегов к сортировочным центрам */
      count: string
    }
    /** Загрузка сортировочных центров */
    SortingCentersTaskResult: {
      /** @description Количество успешно загруженных сортировочных центров */
      count: string
    }
    TaggedSortingCenter: {
      deliveryProviderId: components['schemas']['SortingCenterID']
      directionTag: components['schemas']['Delivery-directionTag']
    }
    TaggedSortingCenterRequest: components['schemas']['TaggedSortingCenter'][]
    /** Загрузка тарифа */
    TariffTaskResult: {
      /** @description id добавленного тарифа */
      tariffId: string
    }
    TariffZone: {
      /**
       * @description Id тарифной зоны на стороне службы доставки
       * @example t42
       */
      deliveryProviderZoneId?: string
      /**
       * @description Модели расчета цены для каждой из услуг.
       *     <br>
       *     Стоимость доставки складывается из суммы стоимостей описанных здесь услуг. <br />
       *     Модели расчета разделены на B2C и С2С. Это значит, что для расчета стоимости доставки C2C посылки будут использоваться C2C модели расчета.  <br />
       *     Если в тарифной зоне нет подходящих моделей, то терминалы относящиеся к такой тарифной зоне не будут участвовать в расчете и показе.  <br />
       *     **Необходимо указывать модели расчета для С2С и для B2C, даже если цены совпадают.** <br />
       *     Но для сохранения обратной совместимости, пока СД не начала поддерживать разделение на B2C и С2С, для B2C и C2C будут использоваться С2С модели расчета.
       * @example [
       *       {
       *         "calculationMechanic": "GAP_TO_COST",
       *         "chargeableParameter": "WEIGHT",
       *         "serviceName": "DELIVERY",
       *         "values": [
       *           {
       *             "cost": 50000,
       *             "maxWeight": 3000
       *           },
       *           {
       *             "cost": 60000,
       *             "maxWeight": 7000
       *           },
       *           {
       *             "cost": 70000,
       *             "maxWeight": 10000
       *           },
       *           {
       *             "cost": 90000,
       *             "maxWeight": 20000
       *           }
       *         ]
       *       },
       *       {
       *         "calculationMechanic": "GAP_TO_PERCENT",
       *         "chargeableParameter": "DECLARED_COST",
       *         "serviceName": "INSURANCE",
       *         "values": [
       *           {
       *             "maxDeclaredCost": 10000,
       *             "percent": 1
       *           },
       *           {
       *             "maxDeclaredCost": 1000000,
       *             "percent": 1.5
       *           }
       *         ]
       *       },
       *       {
       *         "calculationMechanic": "GAP_TO_COST",
       *         "chargeableParameter": "PAID_WEIGHT",
       *         "serviceName": "DELIVERY_B2C",
       *         "values": [
       *           {
       *             "cost": 45000,
       *             "dimensionalFactor": 5000,
       *             "maxWeight": 3000
       *           },
       *           {
       *             "cost": 55000,
       *             "dimensionalFactor": 5000,
       *             "maxWeight": 7000
       *           },
       *           {
       *             "cost": 65000,
       *             "dimensionalFactor": 5000,
       *             "maxWeight": 10000
       *           },
       *           {
       *             "cost": 85000,
       *             "dimensionalFactor": 5000,
       *             "maxWeight": 20000
       *           }
       *         ]
       *       },
       *       {
       *         "calculationMechanic": "GAP_TO_PERCENT",
       *         "chargeableParameter": "DECLARED_COST",
       *         "serviceName": "INSURANCE_B2C",
       *         "values": [
       *           {
       *             "maxDeclaredCost": 10000,
       *             "percent": 1.5
       *           },
       *           {
       *             "maxDeclaredCost": 1000000,
       *             "percent": 2
       *           }
       *         ]
       *       }
       *     ]
       */
      items: (
        | components['schemas']['DeliveryTariffZone-ServiceDeliveryC2C']
        | components['schemas']['DeliveryTariffZone-ServiceDeliveryB2C']
        | components['schemas']['DeliveryTariffZone-ServiceDeliveryC2CWithStepCost']
        | components['schemas']['DeliveryTariffZone-ServiceDeliveryB2CWithStepCost']
        | components['schemas']['DeliveryTariffZone-ServiceInsuranceC2C']
        | components['schemas']['DeliveryTariffZone-ServiceInsuranceB2C']
        | components['schemas']['DeliveryTariffZone-ServiceDeliveryC2CWithStepMinCost']
        | components['schemas']['DeliveryTariffZone-ServiceDeliveryB2CWithStepMinCost']
      )[]
      /**
       * @description Человекопонятное название тарифной зоны (будет использоваться в интерфейсной части)
       * @example Тарифная зона t42
       */
      name: string
    }
    Terminal: {
      address: components['schemas']['Address']
      /**
       * id ПВЗ в службе доставки
       * @description Уникальный идентификатор ПВЗ на стороне службы доставки (не допускается использование символа двоеточия «:» в идентификаторе)
       * @example 1234-dffg
       */
      deliveryProviderId: string
      directionTag: components['schemas']['Delivery-directionTag']
      /**
       * кастомное наименование пункта
       * @description Отображаемое пользователям кастомное наименование пункта самовывоза. Требуется, чтобы отличать разные точки по бренду и виду.
       *     <br />
       *     Требования:
       *
       *     1. <p style="padding-bottom: 10px;">Количество слов min: 1, max: 2.</p>
       *     2. <p style="padding-bottom: 10px;">Длина 1 слова min: 3 символа, max: 15 символов.</p>
       *     3. <p style="padding-bottom: 10px;">Если 2 слова, то суммарно не более 20 символов, включая пробел.</p>
       *
       *     Предупреждение: Терминалы не зальются, если displayName не будет удовлетворять вышеперечисленным условиям
       * @example Зелёный постамат
       */
      displayName?: string
      /**
       * @description Описание как пройти
       * @example Выход из последнего вагона, сначала прямо потом налево
       */
      itinerary: string
      /**
       * название пункта самовывоза
       * @description Человекопонятное название пункта самовывоза (будет использоваться в интефейсной части)
       * @example 1234-dffg
       */
      name: string
      /**
       * @description Доступные в точке выдачи опции. Примерка (fitting), проверка электроники (electronics-checking),
       *     оплата при получении картой (cod-by-card), оплата при получении наличными (cod-by-cash).
       *     Массовая сдача заказов (multi-drop-off) в процессе разработки.
       */
      options?: ('fitting' | 'electronics-checking' | 'cod-by-card' | 'cod-by-cash' | 'multi-drop-off')[]
      organization?: components['schemas']['TerminalOrganization']
      phones: components['schemas']['Delivery-phones']
      /**
       * @description Список ссылок на фотографии.
       *     <br />
       *     В случае если фотографий нет, следует передать пустой массив.
       */
      photos: string[]
      restriction: components['schemas']['Restriction']
      schedule: components['schemas']['Schedule']
      /**
       * @description Доступные в ПВЗ услуги. Забор (intake), выдача (delivery).
       *     Отображение пункта выдачи на карте отправителя/получателя посылки зависит от наличия соответствующей услуги у пункта выдачи.
       *     - если указана услуга `delivery` - ПВЗ будет показан на карте покупателя, при условии соответствия посылки ограничениям ПВЗ (Restriction)
       *     - если указана услуга `intake` - ПВЗ будет показан на карте продавца, при условии соответствия посылки ограничениям ПВЗ (Restriction)
       *     Пустой массив допустим и отключает для терминала обе услуги для новых посылок.
       *     Чтобы отключить только одну услугу, исключите из списка `intake` или `delivery` соответственно.
       */
      services: ('intake' | 'delivery')[]
      /**
       * Тип терминала
       * @description Тип терминала (Если не указан, то по умолчанию указан тип PVZ)
       * @example PVZ
       * @enum {unknown}
       */
      type?: 'PVZ' | 'POSTAMAT'
      /**
       * признак группировки ПВЗ
       * @description Дополнительный признак, по которому служба доставки может объединять терминалы в группы.
       *     Например, принадлежность к одному филиалу, подразделению или другой логической группе терминалов.
       *     Поле необязательное. Если признак группировки неизвестен, поле можно не передавать или передать `null`.
       * @example Москва
       */
      unit?: string | null
    }
    /** @description Реквизиты организации или индивидуального предпринимателя, которым принадлежит ПВЗ */
    TerminalOrganization: {
      /**
       * @description ИНН организации или индивидуального предпринимателя
       * @example 7707083893
       */
      inn?: string
      /**
       * @description Наименование организации или индивидуального предпринимателя
       * @example ООО Ромашка
       */
      name?: string
      /**
       * @description Тип владельца ПВЗ
       * @example legal-entity
       * @enum {string}
       */
      orgType?: 'legal-entity' | 'individual-entrepreneur'
    }
    /**
     * Загрузка терминалов
     * @description Результат загрузки терминалов.
     *
     *     При статусе `success` заполняются поля `upserted`, `deleted`, `total`.
     *
     *     При статусе `pending_approval` заполняются поля `diff_added`, `diff_deleted`, `diff_modified`, `diff_critical`, `diff_total`
     *     с информацией об изменениях, которые требуют одобрения.
     */
    TerminalsTaskResult: {
      /**
       * @deprecated
       * @description Количество терминалов, которые были успешно загружены
       */
      count?: string
      /** @description Количество ранее активных терминалов, которые отсутствовали в новом полном списке и были отключены */
      deleted?: string
      /** @description Количество добавленных терминалов (заполняется при статусе pending_approval) */
      diff_added?: string | null
      /** @description Количество критичных изменений (заполняется при статусе pending_approval) */
      diff_critical?: string | null
      /** @description Количество ранее активных терминалов, отсутствующих в новом полном списке (заполняется при статусе pending_approval) */
      diff_deleted?: string | null
      /** @description Количество изменённых терминалов (заполняется при статусе pending_approval) */
      diff_modified?: string | null
      /** @description Общее количество терминалов (заполняется при статусе pending_approval) */
      diff_total?: string | null
      /** @description Количество терминалов активных на тарифе */
      total?: string
      /** @description Количество добавленных или обновленных терминалов */
      upserted?: string
    }
    TermsZone: {
      /**
       * @description Id зоны сроков на стороне службы доставки
       * @example z42
       */
      deliveryProviderZoneId?: string
      /**
       * Format: int32
       * @description Максимальный срок доставки в рабочих днях
       * @example 2
       */
      maxTerm?: number
      /**
       * Format: int32
       * @description Минимальный срок доставки в рабочих днях
       * @example 1
       */
      minTerm?: number
      /**
       * @description Человекопонятное название зоны (будет использоваться в интерфейсной части)
       * @example зона z42
       */
      name?: string
    }
    /**
     * @description Уникальный UUID-идентификатор
     * @example 55fefb84-fa30-47ee-bf29-9c860823ea79
     */
    UUID: string
    UpdateTermsReply: {
      data?: {
        /** Format: int32 */
        taskId: number
      }
      error?: components['schemas']['DeliveryError']
    }
    /** @description Список зон сроков */
    UpdateTermsRequest: components['schemas']['TermsZone'][]
    ValuesByDimension: {
      /** @description Список диапазонов ВГХ и соответствующих им стоимостей */
      values?: {
        /**
         * Format: int32
         * @description Стоимость доставки отправления (в копейках) соответствующая диапазону габаритов от предыдущего значения maxDimensions до текущего
         * @example 2000
         */
        cost?: number
        /**
         * @description Отсортированный список 3-х измерений, в которые должно поместиться отправление, что бы стоимость его доставки была протарифицирована в соответствии со значением указанным поле cost. Размеры передаются в сантиметрах.
         * @example [
         *       200,
         *       50,
         *       30
         *     ]
         */
        maxDimensions?: number[]
      }[]
    }
    ValuesByPaidWeight: {
      /** @description Список диапазонов весов и коэффициентов для объемного веса и соответствующих им стоимостей */
      values?: {
        /**
         * Format: int32
         * @description Стоимость доставки отправления (в копейках) соответствующая диапазону весов от предыдущего значения maxWeight до текущего
         * @example 2000
         */
        cost?: number
        /**
         * Format: int32
         * @description Коэффициент для расчета платного веса (см^3/кг). Платный вес = max(реальный вес, объемный вес). Объемный вес = (Ш×В×Д) / dimensionalFactor
         * @example 5000
         */
        dimensionalFactor?: number
        /**
         * Format: int32
         * @description Верхняя граница веса отправления(в граммах), до которой (включительно!) услуга доставки отправления не превышающего данный вес будет тарифицироваться в соответствии со значением указанным в поле cost
         * @example 2000
         */
        maxWeight?: number
      }[]
    }
    ValuesByWeight: {
      /** @description Список диапазонов весов и соответствующих им стоимостей */
      values?: {
        /**
         * Format: int32
         * @description Стоимость доставки отправления (в копейках) соответствующая диапазону весов от предыдущего значения maxWeight до текущего
         * @example 2000
         */
        cost?: number
        /**
         * Format: int32
         * @description Верхняя граница веса отправления(в граммах), до которой (включительно!) услуга доставки отправления не превышающего данный вес будет тарифицироваться в соответствии со значением указанным в поле cost
         * @example 2000
         */
        maxWeight?: number
      }[]
    }
    Zone: {
      /**
       * @description Идентификатор [тарифной зоны](#tag/AvitoDeliveryTariffZone); ссылается на один из объектов в поле tariffZones
       * @example t42
       */
      tariffZoneId?: string
      /**
       * @description Идентификатор [зоны сроков](#tag/AvitoDeliveryTariffZone); ссылается на один из объектов в поле termsZones
       * @example z42
       */
      termsZoneId?: string
      /**
       * @description Буквенные обозначения типа являются DEPRECATED, используйте числовые обозначения.<br /><br />
       *     Тип доставки, которую описывают данные условия
       *     <br />
       *       `0` - `S-PUDO2S-PUDO`: Доставка из собственных ПВЗ в собственные ПВЗ. Обратите внимание, что если существует направление `тег 1` -> `тег 2` S-PUDO2S-PUDO, то **обязательно** должно существовать направление `тег 2` -> `тег 1` S-PUDO2S-PUDO для возможности возврата товара<br /><br />
       *       `3` - `S-AREA2S-AREA`: Доставка из собственной области доставки в собственную область доставки<br /><br />
       *       `4` - `S-PUDO2S-AREA`: Доставка из собственных ПВЗ в собственные области доставки<br /><br />
       *       `5` - `S-PUDO-BTW-F-HUB`: Доставка из своего ПВЗ в чужой ХАБ на прямом потоке или из чужого ХАБа в свой ПВЗ на обратном потоке<br />
       *                       (тут важно обратить внимание, что только одна зона может быть установлена для одного tagFrom,
       *                       что эквивалентно тому, что один свой ПВЗ может быть связан только с одним ХАБом чужой службы доставки).
       *                       Обратите внимание, что если существует направление `тег 1` -> `тег 2` S-PUDO-BTW-F-HUB, то **обязательно** должно существовать направление `тег 2` -> `тег 1` S-PUDO-BTW-F-HUB для возможности возврата товара<br /><br />
       *       `6` - `S-HUB-BTW-S-PUDO`: Доставка из своего ХАБа в свой ПВЗ на прямом потоке или из своего ПВЗ в свой ХАБ на обратном потоке.
       *                       Обратите внимание, что если существует направление `тег 1` -> `тег 2` S-HUB-BTW-S-PUDO, то **обязательно** должно существовать направление `тег 2` -> `тег 1` S-HUB-BTW-S-PUDO для возможности возврата товара<br /><br />
       * @example 0
       * @enum {string}
       */
      type?:
        | '0'
        | '3'
        | '4'
        | '5'
        | '6'
        | 'S-PUDO2S-PUDO'
        | 'S-AREA2S-AREA'
        | 'S-PUDO2S-AREA'
        | 'S-PUDO-BTW-F-HUB'
        | 'S-HUB-BTW-S-PUDO'
    }
    cancelParcelReply: {
      data?: {
        /**
         * @description статус отмены посылки
         * @enum {string}
         */
        status?: 'OK'
      } | null
      error?: components['schemas']['DeliveryError']
    }
    cancelParcelRequest: {
      /**
       * @description Кто отменяет посылку
       * @enum {string}
       */
      actor: 'receiver'
      parcelID: components['schemas']['Delivery-orderId-string']
    }
    /**
     * @description Список уникальных кастомных расписаний.
     *     Обратите внимание, повторная заливка расписания перезаписывает старое для одного и того же сочетания область, дата, услуга.
     */
    customAreaScheduleRequest: components['schemas']['customAreaScheduleRequestObject'][]
    customAreaScheduleRequestObject: {
      /**
       * @description Список доступных интервалов доставки/забора посылки в определенную дату
       *     В случае если доступные интервалы доставки отсутствуют требуется передать пустой список
       */
      customSchedule: components['schemas']['DeliveryIntervalInDate'][]
      /** @description Список областей, к которым применимо данное расписание. */
      providerAreaNumber: components['schemas']['DeliveryProviderAreaNumber'][]
      /** @description Услуги расписание на которые требуется скорректировать. Забор (intake), доставка (delivery) */
      services: ('intake' | 'delivery')[]
      /** @description Будет игнорироваться список providerAreaNumber и будут использоваться все области актуального тарифа. */
      useAllAreas?: boolean | null
    }
    cutoffAndSchedule: {
      cutoff: {
        /**
         * Format: hh:mm:ss
         * @description время катофа (время локальное - будет использована временая зона area)
         * @example 15:04:05
         */
        cutoffTime: string
        /**
         * @description количество дней, которые надо пропустить исходя из расписания, если сроки рассчитываются после времени указанного в cutoffTime.
         *     1 - пропускаем один день.
         * @example 1
         */
        daysAfterCutoff: number
        /**
         * @description количество дней, которые надо пропустить исходя из расписания, если сроки рассчитываются до времени указанного в cutoffTime.
         *     0 - не пропускаются дни.
         * @example 0
         */
        daysBeforeCutoff: number
      }
      regularSchedule: components['schemas']['Schedule']
    }
    prohibitOrderAcceptanceReply: {
      data?: {
        /**
         * @description статус запрета приёма заказа
         * @enum {string}
         */
        status?: 'OK'
      } | null
      error?: components['schemas']['DeliveryError']
    }
    prohibitOrderAcceptanceRequest: {
      orderId: components['schemas']['Delivery-orderId-string']
    }
    updateReceiverInfoReply: {
      data?: {
        /**
         * статус выполнения запроса на обновление информации по доставке
         * @description <br /> `success` - информация по доставке успешно обновлена <br /> `forbidden` - информацию по доставке для текущего заказа обновить невозможно <br />
         * @enum {unknown}
         */
        status?: 'success' | 'forbidden'
      } | null
      error?: components['schemas']['DeliveryError']
    }
    updateReturnInfoReply: {
      data?: {
        /**
         * статус выполнения запроса на обновление информации по доставке
         * @description <br /> `success` - информация по возврату успешно обновлена <br /> `forbidden` - информацию по возврату для текущего заказа обновить невозможно <br />
         * @enum {unknown}
         */
        status?: 'success' | 'forbidden'
      } | null
      error?: components['schemas']['DeliveryError']
    }
  }
  responses: {
    /** @description Ошибка авторизации. Например, нет прав для выполнения операции. */
    DeliveryForbidden: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          error?: components['schemas']['DeliveryError4XX']
        }
      }
    }
    /** @description internal server error */
    DeliveryInternalServerError: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          error?: components['schemas']['DeliveryError']
        }
      }
    }
    /** @description Ошибка аутентификации. Например, некорректный токен. */
    DeliveryUnauthorized: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          error?: components['schemas']['DeliveryError4XX']
        }
      }
    }
  }
  parameters: {
    /**
     * @description Токен для авторизации
     * @example Bearer ACCESS_TOKEN
     */
    authHeader: string
    /** @description Идентификатор чата (клиента) */
    chatId: string
    itemIds: string
    /** @description Количество сообщений на странице (положительное число больше 0 и меньше 100) */
    limit: number
    /** @description Идентификатор сообщения */
    messageId: string
    offset: number
    /** @description Номер страницы */
    page: string
    /** @description Идентификатор объявления на сайте */
    pathItemId: number
    /** @description Номер пользователя в Личном кабинете Авито */
    pathUserId: number
    /** @description Идентификатор вакансии на сайте */
    pathVacancyId: number
    /** @description Количество ресурсов на страницу */
    perPage: string
    /**
     * @description Имя сервиса, отправляющего запрос
     * @example someName
     */
    sourceHeader: string
    unreadOnly: boolean
    /** @description Идентификатор пользователя (клиента) */
    userId: number
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
  CancelAnnouncement3PL: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AnnouncementsCancelRequest']
      }
    }
    responses: {
      /** @description Response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AnnouncementsSuccessResponse']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  CreateAnnouncement3PL: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AnnouncementsCreateRequest3PL']
      }
    }
    responses: {
      /** @description Response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AnnouncementsSuccessResponse']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  createParcel: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateParcelRequest']
      }
    }
    responses: {
      /** @description Посылка создана / случилась ошибка. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateParcelResponse']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  CreateAnnouncement: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AnnouncementsCreateRequest']
      }
    }
    responses: {
      /** @description Response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AnnouncementsSuccessResponse']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  TrackAnnouncement: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AnnouncementsTrackAnnouncementRequest']
      }
    }
    responses: {
      /** @description Response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AnnouncementsSuccessResponse']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  customAreaSchedule: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['customAreaScheduleRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddTaskReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  cancelParcel: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['cancelParcelRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['cancelParcelReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  checkConfirmationCode: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CheckConfirmationCodeRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CheckConfirmationCodeReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  setOrderProperties: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DeliverySetOrderPropertiesRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeliverySetOrderPropertiesReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  setOrderRealAddress: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DeliverySetRealAddressRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeliverySetOrderPropertiesReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  tracking: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DeliveryTrackingRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeliverySetStatusReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  prohibitOrderAcceptance: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['prohibitOrderAcceptanceRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['prohibitOrderAcceptanceReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  GetSortingCenter: {
    parameters: {
      query: {
        /** @description Список кодов служб доставки, сортировочные центры которых необходимо вернуть */
        deliveryProviders: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SortingCenterGet']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  AddSortingCenter: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AddSortingCentersRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddTaskReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  AddAreasSandbox: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id тарифа, к которому должны быть прикреплены добавляемые области */
        tariff_id: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AddAreasRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddTariffReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  AddTagsToSortingCenter: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id своего тарифа, теги которого будут установлены для сортировочных центров */
        tariff_id: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TaggedSortingCenterRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddTaskReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  AddTerminalsSandbox: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id тарифа, для которого синхронизируется список терминалов */
        tariff_id: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AddTerminalsRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddTerminalsReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  UpdateTerms: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description id тарифа, к которому должны быть прикреплены добавляемые области */
        tariff_id: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateTermsRequest']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UpdateTermsReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  AddTariffSandboxV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AddTariffRequestV2']
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddTaskReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  GetTask: {
    parameters: {
      query?: never
      header?: never
      path: {
        task_id: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetTaskReply']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
  v1cancelAnnouncement: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SandboxCancelAnnouncementRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SandboxCancelAnnouncementReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SandboxCancelAnnouncementReply']
        }
      }
    }
  }
  v1CancelParcel: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CancelSandxobParcelRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CancelSandboxParcelReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CancelSandboxParcelError']
        }
      }
    }
  }
  v1changeParcel: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ChangeParcelRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChangeParcelReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChangeParcelError']
        }
      }
    }
  }
  v1createAnnouncement: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SandboxCreateAnnouncementRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SandboxCreateAnnouncementReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SandboxCreateAnnouncementReply']
        }
      }
    }
  }
  v1getAnnouncementEvent: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SandboxGetAnnouncementEventRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SandboxGetAnnouncementEventReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SandboxGetAnnouncementEventReply']
        }
      }
    }
  }
  v1getChangeParcelInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetChangeParcelInfoRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetChangeParcelInfoReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetChangeParcelInfoError']
        }
      }
    }
  }
  v1getParcelInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetSandboxParcelInfoRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetSandboxParcelInfoReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetSandboxParcelInfoError']
        }
      }
    }
  }
  v1getRegisteredParcelID: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetRegisteredParcelIDRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetRegisteredParcelIDReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetRegisteredParcelIDError']
        }
      }
    }
  }
  CreateSandboxParcelV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CreateSandboxParcelV2']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateParcelReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreateSandboxParcelError']
        }
      }
    }
  }
  ChangeParcelResult: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Результат обработки заявки */
    requestBody: {
      content: {
        'application/json': components['schemas']['ChangeParcelResultRequest']
      }
    }
    responses: {
      /** @description Successful */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChangeParcelResultReply']
        }
      }
      /** @description Error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['DeliveryError']
        }
      }
    }
  }
  ChangeParcels: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Создание заявок для обновления свойств посылок. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ChangeParcelsRequest']
      }
    }
    responses: {
      /** @description Все заявки внутри транзакции зарегистрированы / случилась ошибка. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ChangeParcelsResponse']
        }
      }
      401: components['responses']['DeliveryUnauthorized']
      403: components['responses']['DeliveryForbidden']
      500: components['responses']['DeliveryInternalServerError']
    }
  }
}
type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P]
}
