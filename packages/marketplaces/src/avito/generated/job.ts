// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/job/v1/applications/apply_actions': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник может менять статусы откликов для вакансий которые он разместил в рамках компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник может менять статусы откликов для вакансий которые он разместил в рамках компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Батчевая смена статуса откликов
     * @description Переводит сразу несколько откликов в новый статус одним запросом. В запросе нужно передать целевой статус, а также список идентификаторов откликов, к которым он должен быть применён
     *     Максимальный размер батча — не более 100 идентификаторов откликов в одном запросе
     */
    post: operations['applicationsApplyActions']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/applications/get_by_ids': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник может получить информацию по откликам для вакансий которые он разместил в рамках компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник может получить информацию по откликам для вакансий которые он разместил в рамках компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение списка откликов
     * @description Получение списка откликов по uuid, полученным по  [подписке на уведомления](https://developers.avito.ru/api-catalog/job/documentation#operation/applicationsWebhookPut) (webhook) и через метод  [получение идентификаторов откликов](https://developers.avito.ru/api-catalog/job/documentation#operation/applicationsGetIds) Максимальный лимит = 100
     */
    post: operations['applicationsGetByIds']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/applications/get_ids': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник может получить список его откликов для вакансий которые он разместил в рамках компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник может получить список его откликов для вакансий которые он разместил в рамках компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение идентификаторов откликов
     * @description Возвращает лимитированное количество идентификаторов откликов отсортированных по дате создания  начиная с самых свежих, для последующего получения по ним расширенной информации через метод [получение списка откликов](https://developers.avito.ru/api-catalog/job/documentation#operation/applicationsGetByIds).
     *     Максимальный лимит = 100
     */
    get: operations['applicationsGetIds']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/applications/get_states': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Получение списка возможных статусов откликов.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Получение списка возможных статусов откликов. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение списка возможных статусов откликов
     * @description Возвращает список доступных статусов откликов и их описания
     */
    get: operations['applicationsGetStates']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/applications/set_is_viewed': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Предоставляет возможность менять статус отклика от имени сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Предоставляет возможность менять статус отклика от имени сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Изменение статуса отклика
     * @description Возвращает информацию по откликам и статусу просмотренности отклика, при изменении статуса также статус изменится в Авито Pro.  Максимальный лимит = 100
     */
    post: operations['applicationsSetIsViewed']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/applications/webhook': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение информации о подписках (webhook)
     * @description Получение информации по существующим подпискам на создание и обновление откликов. Будет возвращен самый старый активный вебхук. Если авторизация происходит от имени приложения, будет возвращен вебхук приложения
     */
    get: operations['applicationsWebhookGet']
    /**
     * Включение уведомлений по откликам (webhook)
     * @description Подписка на уведомления о создании и обновлении откликов на вакансии. Если авторизация происходит от имени приложения, вебхук будет привязан к приложению. Исключение:
     *       - изменение сотрудника относящегося к объявлению (employee_id)
     *
     *     Формат уведомления, которое мы отправляем на ваш url:
     *       Метод POST.
     *       Заголовки: Content-Type - application/json; charset=UTF-8, X-Secret - значение secret, указанное при подписке.
     *       Тело запроса содержит только идентификатор отклика: {"applyId": "623850d1d3819d935dd02702"}
     *       Подробные данные по отклику получите методом [Получение списка откликов](#operation/applicationsGetByIds), передав этот идентификатор в параметре ids.
     *       При проверке доступности url перед сохранением подписки на него уходит такой же POST-запрос с заголовком X-Secret, но с пустым телом.
     *
     *     Важно:
     *       Проверьте доступность url, при его недоступности из контура Авито webhook не будет создан/перезаписан.
     *       Доставка уведомления считается успешной при коде ответа 2**. Таймаут одного запроса - 3 секунды.
     *       При ошибке или отсутствии ответа уведомление переотправляется с увеличивающимися интервалами - через 1, 2, 3, 4, 5, 10, 30 минут, далее раз в час; общее время попыток около 31 часа.
     *       Если в течение 10 дней не будет ни одного успешного вызова, подписка деактивируется, о чем мы сообщим письмом; для возобновления зарегистрируйте webhook заново.
     *       Список адресов с которых идут запросы по url IP 185.89.12.0/22, 146.158.48.0/21, 185.79.237.224/28 и 87.245.204.32/28.
     */
    put: operations['applicationsWebhookPut']
    post?: never
    /**
     * Отключение уведомлений по откликам (webhook)
     * @description Отписка от уведомлений о создании и обновлении откликов на вакансии. Если авторизация происходит от имени приложения, отписка от вебхука будет для приложения
     */
    delete: operations['applicationsWebhookDelete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/applications/webhooks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение списка подписок (webhook)
     * @description Получение списка активных подписок на создание и обновление откликов в хронологическом порядке от самого старого к самому новому. Если авторизация происходит от имени приложения, будут возвращены вебхуки приложения
     */
    get: operations['applicationsWebhooksGet']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/resumes/': {
    parameters: {
      query?: {
        /** @description Количество записей на странице (положительное число от 1 до 100) */
        per_page?: number
        /** @description Номер страницы (положительное число больше 0, произведение page на per_page не должно превышать 5000) */
        page?: number
        /** @description Курсор поиска (если не указан, будет начат новый поиск и его курсор будет возвращен в ответе) */
        cursor?: number
        /** @description Поля ответа (можно указать несколько значений через запятую) */
        fields?:
          | 'title'
          | 'location'
          | 'specialization'
          | 'education_level'
          | 'total_experience'
          | 'gender'
          | 'age'
          | 'salary'
          | 'address_details'
          | 'is_purchased'
          | 'created_at'
          | 'updated_at'
          | 'nationality'
          | 'driver_licence'
          | 'driver_licence_category'
          | 'driving_experience'
          | 'own_transport'
          | 'medical_book'
        /** @description Поисковая фраза */
        query?: string
        /**
         * @description Идентификатор региона поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущностей Region и City из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        location?: number
        /**
         * @description Идентификатор метро поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущности Subway из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        metro?: number
        /**
         * @description Идентификатор района поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущности District из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        district?: number
        /** @description Радиус поиска */
        radius?: {
          /**
           * Format: int32
           * @description Максимальное расстояние от центра в метрах, значение от 0 до 100_000
           */
          maxDistance: number
          /**
           * Format: int32
           * @description Минимальное расстояние от центра в метрах, значение от 0 до 10_000
           */
          minDistance: number
          /** @description Географические координаты (для указания точки на карте), в градусах — десятичные дроби */
          point: {
            /**
             * Format: float
             * @description Широта, значение от -90.0 до 90.0
             * @example 55.822883
             */
            lat: number
            /**
             * Format: float
             * @description Долгота, значение от -180.0 до 180.0
             * @example 37.606281
             */
            lon: number
          }
        }
        /**
         * @description Идентификатор сферы деятельности (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - 10166 - IT, интернет, телеком
         *     - 10167 - Медицина, фармацевтика
         *     - 10168 - Продажи
         *     - 10169 - Страхование
         *     - 10170 - Транспорт, логистика
         *     - 10171 - Образование, наука
         *     - 10172 - Строительство
         *     - 10173 - Туризм, рестораны
         *     - 10174 - Фитнес, салоны красоты
         *     - 10175 - Без опыта, студенты
         *     - 10180 - Автомобильный бизнес
         *     - 10181 - Бухгалтерия, финансы
         *     - 10182 - Высший менеджмент
         *     - 10183 - Госслужба, НКО
         *     - 10184 - ЖКХ, эксплуатация
         *     - 10185 - Искусство, развлечения
         *     - 10186 - Консультирование
         *     - 10187 - Маркетинг, реклама, PR
         *     - 10188 - Охрана, безопасность
         *     - 10189 - Управление персоналом
         *     - 10190 - Юриспруденция
         *     - 10191 - Административная работа
         *     - 10192 - Банки, инвестиции
         *     - 10193 - Производство, сырьё, с/х
         *     - 16844 - Домашний персонал
         *     - 2804251 - Курьерская доставка
         *     - 2804250 - Такси
         */
        specialization?: number
        /**
         * @description График работы (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - partial-day - Неполный рабочий день
         *     - full-day - Полный рабочий день
         *     - fly-in-fly-out - Вахтовый метод
         *     - flexible - Гибкий график
         *     - shift - Сменный график
         *     - remote - Удаленная работа
         */
        schedule?: 'partial-day' | 'full-day' | 'fly-in-fly-out' | 'flexible' | 'shift' | 'remote'
        /**
         * @description Готовность к командировкам (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - ready - Готов
         *     - never - Не готов
         *     - sometimes - Иногда
         */
        business_trip_readiness?: 'ready' | 'never' | 'sometimes'
        /**
         * @description Готовность к переезду (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - possible - Возможен
         *     - never - Невозможен
         */
        relocation_readiness?: 'possible' | 'never'
        /**
         * @description Пол (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - female - Женщина
         *     - male - Мужчина
         */
        gender?: 'female' | 'male'
        /** @description Минимальный возраст (включительно, положительное число от 14 до 99) */
        age_min?: number
        /** @description Максимальный возраст (включительно, положительное число от 18 до 99) */
        age_max?: number
        /**
         * @description Уровень образования (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - higher - Высшее
         *     - unfinished-higher - Неоконченное высшее
         *     - secondary - Среднее
         *     - special-secondary - Среднее специальное
         */
        education_level?: 'higher' | 'unfinished-higher' | 'secondary' | 'special-secondary'
        /** @description Минимальный стаж работы (включительно, положительное число от 0 до 50) */
        experience_min?: number
        /** @description Максимальный стаж работы (включительно, положительное число от 0 до 50) */
        experience_max?: number
        /** @description Минимальный размер заработной платы (включительно, положительное число) */
        salary_min?: number
        /** @description Максимальный размер заработной платы (включительно, положительное число) */
        salary_max?: number
        /** @description Дата последнего обновления (от updated_at до текущей даты) */
        updated_at?: string
        /** @description Дата последнего обновления (от updated_at) */
        updated_from?: string
        /** @description Дата последнего обновления (до updated_at) */
        updated_to?: string
        /**
         * @description Идентификатор гражданства(можно указать несколько значений через запятую)</br>
         *     см. идентификаторы гражданства в [справочнике](https://www.avito.st/s/openapi/catalog_nationality.xml)</br>
         *     Распространенные значения:
         *     - 15973 - Россия
         *     - 15974 - Украина
         *     - 15975 - Белоруссия
         *     - 15979 - Азербайджан
         *     - 15985 - Армения
         *     - 16020 - Грузия
         *     - 15976 - Казахстан
         *     - 16046 - Киргизия
         *     - 16082 - Молдавия
         *     - 16129 - Таджикистан
         *     - 16140 - Узбекистан
         */
        nationality?: number
        /**
         * @description Водительское удостоверение
         *     <br>
         *     Возможные значения:
         *     - yes - Удостоверение есть
         *     - no - Удостоверения нет
         */
        driver_licence?: 'yes' | 'no'
        /**
         * @description Категория водительского удостоверения (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *       - a
         *       - b
         *       - be
         *       - c
         *       - ce
         *       - d
         *       - de
         *       - m
         *       - tm
         *       - tb
         */
        driver_licence_category?: 'a' | 'b' | 'be' | 'c' | 'ce' | 'd' | 'de' | 'm' | 'tm' | 'tb'
        /**
         * @description Стаж вождения (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *       - less-than-three-years - Стаж вождения меньше трех лет
         *       - more-than-three-years - Стаж вождения больше трех лет
         */
        driving_experience?: 'less-than-three-years' | 'more-than-three-years'
        /**
         * @description Свой транспорт (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *       - no - Нет
         *       - car - Легковое авто
         *       - cargo-car - Грузовое авто
         *       - bike - Мотоцикл
         *       - scooter - Мопед
         */
        own_transport?: 'no' | 'car' | 'cargo-car' | 'bike' | 'scooter'
        /**
         * @description Медкнижка
         *     <br>
         *     Возможные значения:
         *       - yes - Медкнижка есть
         *       - no - Медкнижки нет
         */
        medical_book?: 'yes' | 'no'
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    /** Поиск резюме */
    get: operations['resumesGet']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/resumes/{resume_id}/contacts/': {
    parameters: {
      query?: {
        /** @description Идентификатор сотрудника компании в рамках иерархии аккаунтов. Используется для возможности списать контакт с лимита на покупку резюме для указанного сотрудника. */
        employee_id?: number | null
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может получить информацию о резюме приобретенных компанией.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может получить информацию о резюме приобретенных компанией. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор резюме */
        resume_id: number
      }
      cookie?: never
    }
    /**
     * Доступ к контактным данным соискателя
     * @description Для получения контактов пользователя необходимо приобрести пакет просмотров в [личном кабинете](https://www.avito.ru/paid-services/contact-packages/cvs). Если резюме было получено из отклика, контакты предоставляются без списания из пакета просмотров.
     */
    get: operations['resumeGetContacts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/vacancies': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Вакансия будет публиковаться от имени сотрудника компании, к которой он привязан.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Вакансия будет публиковаться от имени сотрудника компании, к которой он привязан. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Публикация вакансии
     * @description Для публикации вакансии необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    post: operations['vacancyCreate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/vacancies/archived/{vacancy_id}': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может остановить публикацию только для своих вакансий.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может остановить публикацию только для своих вакансий. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии на сайте */
        vacancy_id: components['parameters']['pathVacancyId']
      }
      cookie?: never
    }
    get?: never
    /**
     * Остановка публикации вакансии
     * @description Снимает с публикации объявление в категории Вакансии.
     */
    put: operations['vacancyArchive']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/vacancies/{vacancy_id}': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может редактировать только свои вакансии.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может редактировать только свои вакансии. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии на сайте */
        vacancy_id: components['parameters']['pathVacancyId']
      }
      cookie?: never
    }
    get?: never
    /**
     * Редактирование вакансии
     * @description Редактирует объявление в категории Вакансии. Необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    put: operations['vacancyUpdate']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v1/vacancies/{vacancy_id}/prolongate': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может реактивировать только свою вакансию.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может реактивировать только свою вакансию. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии на сайте */
        vacancy_id: components['parameters']['pathVacancyId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Реактивация вакансии
     * @description Реактивирует объявление в категории Вакансии. Необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    post: operations['vacancyProlongate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/resumes/{resume_id}': {
    parameters: {
      query?: {
        /** @description Поля основного тела ответа (можно указать несколько значений через запятую). По умолчанию отображаются все поля. */
        fields?:
          | 'address_details'
          | 'description'
          | 'is_active'
          | 'is_purchased'
          | 'salary'
          | 'start_time'
          | 'title'
          | 'update_time'
          | 'url'
        /** @description Дополнительные поля, которые входят в params (можно указать несколько значений через запятую). По умолчанию отображаются все поля. */
        params?:
          | 'ability_to_business_trip'
          | 'address'
          | 'age'
          | 'business_area'
          | 'driver_licence'
          | 'driver_licence_category'
          | 'education'
          | 'education_list'
          | 'experience'
          | 'experience_list'
          | 'language_list'
          | 'moving'
          | 'nationality'
          | 'pol'
          | 'razreshenie_na_rabotu_v_rossii'
          | 'schedule'
        /** @description Признак того, нужно ли отдавать картинки, по умолчанию false */
        photos?: boolean
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника, получает доступ к резюме от имени компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника, получает доступ к резюме от имени компании. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор резюме */
        resume_id: number
      }
      cookie?: never
    }
    /**
     * Просмотр данных резюме
     * @description По умолчанию fields и params выводятся все. Если указана только часть полей - остальные поля будут отсутствовать в ответе.
     */
    get: operations['resumeGetItem']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Поиск вакансий
     * @description Поиск по опубликованным на Авито вакансиям. Метод не ограничивает выдачу вакансиями авторизованного пользователя: чтобы получить вакансии конкретного работодателя, передайте его хеш в параметре `employer_ids`. Для получения собственных объявлений используйте [получение информации по объявлениям](../item/documentation#operation/getItemsInfo) с параметром `category=111`, а для объявлений сотрудника - [получение списка объявлений по сотруднику](../accounts-hierarchy/documentation#operation/listItemsByEmployeeIdV1).
     */
    get: operations['searchVacancy']
    put?: never
    /**
     * Публикация вакансии v2
     * @description Для публикации вакансии необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     *     Для проверки статуса публикации используйте полученный идентификатор в [методе получения статуса](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyGetStatuses).
     */
    post: operations['vacancyCreateV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancies/batch': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании получает информацию по вакансиям, которую он опубликовал для компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании получает информацию по вакансиям, которую он опубликовал для компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Просмотр данных вакансий
     * @description По умолчанию fields и params выводятся все. Если указана только часть полей - остальные поля будут отсутствовать в ответе.
     *     Для просмотра данных необходимо быть владельцем вакансии.
     */
    post: operations['vacanciesGetByIds']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancies/statuses': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании получает информацию о статусе публикации вакансии, которую он опубликовал для компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании получает информацию о статусе публикации вакансии, которую он опубликовал для компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение статуса публикации вакансий V2
     * @description Получение списка статусов процесса публикации и модерации вакансий.
     *     В запросе используйте идентификатор, полученный [методе
     *     публикации вакансии v2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyCreateV2)
     */
    post: operations['vacancyGetStatuses']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancies/update/{vacancy_uuid}': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может редактировать только свои вакансии.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может редактировать только свои вакансии. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /**
         * @description UUID Идентификатор вакансии для V2 ручек
         *     (возвращается ручкой [Публикация вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyCreateV2) )
         */
        vacancy_uuid: components['parameters']['pathVacancyUUID']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Редактирование вакансии v2
     * @description Редактирует объявление в категории Вакансии. Необходимо приобрести тариф в [личном кабинете](https://www.avito.ru/paid-services/listing-fees).
     */
    post: operations['vacancyUpdateV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancies/{vacancy_id}': {
    parameters: {
      query?: {
        /** @description Поля основного тела ответа (можно указать несколько значений через запятую). По умолчанию отображаются все поля. */
        fields?: 'description' | 'is_active' | 'salary' | 'start_time' | 'title' | 'update_time' | 'url'
        /**
         * @description Дополнительные поля, которые входят в params (можно указать несколько
         *     значений через запятую). Если значение не задано - возвращаются все поля.
         *
         *     Устаревшие значения:
         *     * change (используйте shifts)
         *     * is_remote (используйте work_format)
         *
         *     Удалённые значения (более недоступны):
         *     * manufacturing_type
         *     * industry_type
         *     * piecework_flag
         *     * programs
         *     * warehouse_functionality
         *     * where_to_work
         */
        params?:
          | 'address'
          | 'administrator_organization_type'
          | 'age_preferences'
          | 'applies_filter'
          | 'bonuses'
          | 'business_area'
          | 'change'
          | 'citizenship'
          | 'construction_work_type'
          | 'coordinates'
          | 'cuisine'
          | 'delivery_method'
          | 'driving_experience'
          | 'driving_license_category'
          | 'eatery_type'
          | 'education_level'
          | 'employment'
          | 'experience'
          | 'facility_type'
          | 'food_production_shop_type'
          | 'grade'
          | 'industry_type'
          | 'is_company_car'
          | 'is_remote'
          | 'is_side_job'
          | 'job_responsibilities'
          | 'jobs_number'
          | 'manufacturing_type'
          | 'medical_book'
          | 'medical_specialization'
          | 'paid_period'
          | 'payout_frequency'
          | 'piecework_flag'
          | 'profession'
          | 'programs'
          | 'registration_method'
          | 'retail_equipment_type'
          | 'retail_shop_type'
          | 'salary'
          | 'salary_base_bonus'
          | 'salary_base_range'
          | 'schedule'
          | 'shifts'
          | 'taxes'
          | 'tools_availability'
          | 'vacancy_code'
          | 'vehicle_type'
          | 'warehouse_functionality'
          | 'where_to_work'
          | 'work_days_per_week'
          | 'work_format'
          | 'work_hours_per_day'
          | 'worker_class'
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании получает информацию по вакансии, которую он опубликовал для компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании получает информацию по вакансии, которую он опубликовал для компании. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии */
        vacancy_id: number
      }
      cookie?: never
    }
    /**
     * Просмотр данных вакансии
     * @description По умолчанию fields и params выводятся все. Если указана только часть полей - остальные поля будут отсутствовать в ответе.
     *     Для просмотра данных необходимо быть владельцем вакансии.
     */
    get: operations['vacancyGetItem']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancies/{vacancy_uuid}/auto_renewal': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника, позволяет включать автопродление вакансий принадлежащих сотруднику опубликованных от имени компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника, позволяет включать автопродление вакансий принадлежащих сотруднику опубликованных от имени компании. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /**
         * @description UUID Идентификатор вакансии для V2 ручек
         *     (возвращается ручкой [Публикация вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyCreateV2) )
         */
        vacancy_uuid: components['parameters']['pathVacancyUUID']
      }
      cookie?: never
    }
    get?: never
    /**
     * Автопродление вакансии v2
     * @description Включает или выключает автопродление вакансии. Если вакансия в архиве, то при включении автопродления вакансия будет автоматически поднята из архива.
     */
    put: operations['vacancyAutoRenewal']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancy/dict': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение списка доступных словарей
     * @description Возвращает все доступные словари (Заменяет существующие списки)
     */
    get: operations['getDicts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/job/v2/vacancy/dict/{dictionary_id}': {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор словаря */
        dictionary_id: components['parameters']['pathDictionaryId']
      }
      cookie?: never
    }
    /**
     * Получение доступных значений списка по ID словаря
     * @description Возвращает доступные значения по имени справочника. Значения с признаком deprecated не могут использоваться при создании и обновлении вакансий.
     */
    get: operations['getDictByID']
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
    ActivationForbiddenError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?:
          | 'chosen_vacancy_belongs_to_another_user'
          | 'unavailable_for_blocked'
          | 'unavailable_for_removed'
          | 'too_early'
          | 'unavailable_to_activate'
          | 'vacancy_does_not_belong_to_employee'
          | 'employee_is_not_active'
      }
    }
    /** @description Блок с деталями указанного в резюме адреса */
    AddressDetails: {
      /**
       * @description Полный адрес
       * @example Москва, Лесная улица, 7
       */
      address?: string | null
      coordinates?: components['schemas']['Coordinates']
      /**
       * @description Название района
       * @example Тверской
       */
      district?: string | null
      /**
       * @description Название локации (региона или города)
       * @example Москва
       */
      location?: string | null
      /**
       * @description Название станции метро
       * @example Белорусская
       */
      metro?: string | null
    }
    /**
     * @description Тип организации в которой предстоит работать кандидату. Используется для профессии Администратор
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `administrator_organization_type` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     *     <br>
     *     Статичный [справочник](https://www.avito.st/s/openapi/catalog-admininstrator-organization-type.xml) объявлен устаревшим и более не будет использоваться.
     *     <br>
     */
    AdministratorOrganizationType: number | null
    /**
     * @description Возраст кандидата.
     *
     *     Если выберите значения, в данных кандидата будет отметка, что кандидат соответствует этому критерию
     *     или нет.
     *
     *     Кандидаты не увидят этого в вакансии.
     *
     *     При редактировании вакансии ([Редактирование вакансии](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyUpdate)
     *     и [Редактирование вакансии v2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyUpdateV2))
     *     параметр заполняется значением `from: 18`, если он не передан в запросе и не указан в вакансии.
     *     Если возраст в вакансии уже указан, значение сохраняется.
     */
    AgeCriteria: {
      /** @example 18 */
      from?: number | null
      /** @example 65 */
      to?: number | null
    } | null
    /** @description Разрешены ли звонки по вакансии. */
    AllowCalls: boolean | null
    ApplicationsApplyActionsRequestBody: {
      /**
       * @description Новый статус отклика, который нужно применить
       * @example new
       */
      action: string
      /** @description Список идентификаторов откликов, к которым нужно применить статус */
      ids: string[]
    }
    ApplicationsGetStatesResult: {
      /** @description Список возможных статусов откликов */
      states?: {
        /**
         * @description Человеко‑читаемое описание статуса
         * @example Новый отклик
         */
        description?: string
        /**
         * @description Технический идентификатор статуса
         * @example new
         */
        slug?: string
      }[]
    }
    /**
     * @description Объект с настройкой обработки откликов на вакансию.
     *
     *     Даёт возможность настроить отклики только с резюме.
     */
    ApplyProcessing: {
      /**
       * @deprecated
       * @description *DEPRECATED* Заполнение поля не влияет на вакансию.
       *     Массив со списком дополнительных вопросов, которые задаст ассистент Авито.
       *
       *       - `experience` - вопрос про опыт работы.
       *     В качестве критерия будет использоваться значение поля `experience`.  В результатах опроса ассистент отметит, достаточно у кандидата опыта или нет.
       *
       *       - `citizenship` - вопрос про гражданство.
       *     В качестве критерия будет использоваться значение поля `citizenship`, если оно заполнено.
       *
       *       - `age` - вопрос про возраст.
       *     В качестве критерия будет использоваться значение поля `age`, если оно заполнено.
       */
      additional_questions?: ('experience' | 'citizenship' | 'age')[] | null
      /**
       * @description Принимает два значения:
       *
       *       - `with_assistant` - на вакансию смогут откликнуться кандидаты с резюме и без.
       *       - `only_with_resume` - на вакансию смогут откликаться только кандидаты с резюме. Если у кандидата нет резюме,
       *     Авито поможет создать его и откликнуться на вакансию
       * @enum {string}
       */
      apply_type?: 'only_with_resume' | 'with_assistant'
    } | null
    BadRequest: {
      error?: {
        /**
         * @description Причина возникновения ошибки (может не присутствовать)
         * @enum {string}
         */
        reason?:
          | 'is_empty'
          | 'wrong_value'
          | 'chosen_area_is_not_a_leaf_or_not_exist'
          | 'chosen_phone_belongs_to_another_user'
          | 'no_phone_for_auto_substitution'
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'bad_json_data'
        /**
         * @description Ключ поля
         * @enum {string}
         */
        value?: 'billing_type'
      }
    }
    BadRequestOnVacancy: {
      errors?: string[]
    }
    BadRequestShort: {
      error?: {
        /**
         * @description Причина возникновения ошибки (может не присутствовать)
         * @enum {string}
         */
        reason?: 'is_empty' | 'wrong_value'
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'bad_json_data'
        /** @description Ключ поля */
        value?: string
      }
    }
    /**
     * @description Бонусы, которые компания предоставляет кандидатам
     * @example [
     *       "pitanie",
     *       "prozivanie"
     *     ]
     */
    Bonuses:
      | (
          | 'prozivanie'
          | 'pitanie'
          | 'medicinskaia_straxovka'
          | 'uniform'
          | 'oplata_benzina'
          | 'transport_do_raboty'
          | 'skidki_v_kompanii'
          | 'parkovka'
          | 'zony_otdyxa'
          | 'podarki_detiam_na_prazdniki'
          | 'oplata_mobilnoi_sviazi'
          | 'obuchenie'
          | 'kompensaciya_proezda_s_raboti'
          | 'kasko'
          | 'smartphone'
          | 'uslugi_shinomontaza'
        )[]
      | null
    /**
     * @description Идентификатор сферы деятельности
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `business_area` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     *     <br>
     *     Статичный [справочник](https://www.avito.st/s/openapi/catalog-business-area.xml) объявлен устаревшим и более не будет использоваться.
     *     <br>
     */
    BusinessArea: number
    /** Гражданство */
    Citizenship: {
      /**
       * Идентификатор гражданства
       * Format: int64
       * @example 15973
       */
      readonly id?: number
      /**
       * Имя региона
       * @example Россия
       */
      readonly title?: string
    }
    /**
     * @description Гражданство кандидата.
     *
     *     Если выберите значение, в данных кандидата будет отметка, что кандидат соответствует этому критерию
     *     или нет.
     *
     *     Кандидаты не увидят этого в вакансии.
     * @example [
     *       "rus"
     *     ]
     */
    CitizenshipCriteria: ('rus' | 'blr' | 'kaz' | 'kgz' | 'tjk' | 'arm' | 'uzb' | 'ukr')[] | null
    ConflictError: {
      error?: {
        /**
         * Текст ошибки
         * @example Обнаружен конфликт версий вакансии. Выполните запрос повторно.
         */
        message?: string
        /** Доп.данные об ошибке (если имеются) */
        payload?: {
          [key: string]: unknown
        } | null
        /**
         * Кодовое название ошибки
         * @example conflict
         */
        slug?: string
      }
    }
    /**
     * @description С какими видами строительных или ремонтных работ предстоит столкнуться кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "paintingWorks" - Малярные работы;
     *       - "wallCovering" - Облицовка стен;
     *       - "tileWork" - Работы с плиткой;
     *       - "mountingAndInstallation" - Монтаж и установка;
     *       - "finishingWork" - Отделочные работы;
     *       - "roofing" - Кровельные работы;
     *       - "installationAndConfigurationOfEquipment" - Монтаж и настройка оборудования;
     *       - "weldingWork" - Сварочные работы;
     *       - "constructionOfFacades" - Строительство фасадов;
     *       - "formingMaterials" - Формовка материалов;
     *       - "concreteAndStoneWorks" - Бетонные и каменные работы;
     *       - "repairWork" - Ремонтные работы;
     *       - "other" - Другие.
     * @example [
     *       "paintingWorks"
     *     ]
     */
    ConstructionWorkType:
      | (
          | 'paintingWorks'
          | 'wallCovering'
          | 'tileWork'
          | 'mountingAndInstallation'
          | 'finishingWork'
          | 'roofing'
          | 'installationAndConfigurationOfEquipment'
          | 'weldingWork'
          | 'constructionOfFacades'
          | 'formingMaterials'
          | 'concreteAndStoneWorks'
          | 'repairWork'
          | 'other'
        )[]
      | null
    /** @description Контактная информация */
    Contacts: {
      /**
       * @description Email контактного лица по данному объявлению.
       *     Учитывается только при публикации вакансии от имени Сотрудника.
       *     Если не заполнено то при публикации от Сотрудника будет использована почта из Профиля Сотрудника.
       *
       *     При публикации от Компании или Пользователя будет использоваться почта из Профиля, переданное значение будет проигнорировано.
       */
      email?: string | null
      /**
       * @description Имя менеджера, контактного лица по данному объявлению.
       *     Учитывается только при публикации вакансии от имени Сотрудника.
       *     Если не заполнено то при публикации от Сотрудника будет использовано "Имя сотрудника, которое видят пользователи при просмотре объявления".
       *
       *     При публикации от Компании или Пользователя не заполняется, переданное значение будет проигнорировано.
       */
      name?: string | null
      phone?: components['schemas']['Phone']
    }
    /** @description Географические координаты (для указания точки на карте), в градусах — десятичные дроби */
    Coordinates: {
      /**
       * Format: float
       * @description Широта
       * @example 55.755814
       */
      latitude: number
      /**
       * Format: float
       * @description Долгота
       * @example 37.617635
       */
      longitude: number
    } | null
    CreationForbiddenError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?: 'unavailable_to_create' | 'employee_does_not_belong_to_company' | 'employee_is_not_active'
      }
    }
    /**
     * @description Блюда какой кухни предстоит готовить кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "russian" - Русская;
     *       - "european" - Европейская;
     *       - "caucasian" - Кавказская;
     *       - "italian" - Итальянская;
     *       - "japanese" - Японская;
     *       - "turkish" - Турецкая;
     *       - "other" - Другая.
     * @example [
     *       "russian"
     *     ]
     */
    Cuisine: ('russian' | 'european' | 'caucasian' | 'italian' | 'japanese' | 'turkish' | 'other')[] | null
    /**
     * Водительское удостоверение
     * @enum {string}
     */
    DriverLicence: 'yes' | 'no'
    /** Категория водительских прав */
    DriverLicenceCategory: ('a' | 'b' | 'be' | 'c' | 'ce' | 'd' | 'de' | 'm' | 'tm' | 'tb')[]
    /**
     * Опыт вождения
     * @enum {string}
     */
    DrivingExperience: 'less-than-three-years' | 'more-than-three-years'
    /** @description Категория прав */
    DrivingLicenseCategory:
      | (
          | 'A'
          | 'AI'
          | 'AII'
          | 'AIII'
          | 'AIV'
          | 'B'
          | 'B1'
          | 'BE'
          | 'C'
          | 'C1'
          | 'C1E'
          | 'CE'
          | 'D'
          | 'D1'
          | 'D1E'
          | 'DE'
          | 'E'
          | 'F'
          | 'Tm'
          | 'Tb'
          | 'M'
        )[]
      | null
    /**
     * @description Формат заведения общепита в котором предстоит работать кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "cafe" - Кафе;
     *       - "bar" - Бар;
     *       - "fastFood" - Фастфуд;
     *       - "restaurant" - Ресторан;
     *       - "canteen" - Столовая;
     *       - "bakery" - Пекарня;
     *       - "other" - Другой.
     * @example [
     *       "cafe"
     *     ]
     */
    EateryType: ('cafe' | 'bar' | 'fastFood' | 'restaurant' | 'canteen' | 'bakery' | 'other')[] | null
    EditingForbiddenError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?:
          | 'chosen_vacancy_belongs_to_another_user'
          | 'unavailable_for_blocked'
          | 'unavailable_for_removed'
          | 'unavailable_to_change_location'
          | 'unavailable_to_edit'
          | 'vacancy_does_not_belong_to_employee'
          | 'employee_is_not_active'
      }
    }
    /**
     * Уровень образования
     * @example unfinished-higher
     * @enum {string|null}
     */
    EducationLevel: 'higher' | 'unfinished-higher' | 'secondary' | 'special-secondary' | null
    /**
     * @description Данные о кандидате
     * @example {
     *       "age": {
     *         "matching_status": "matched",
     *         "value": 38
     *       },
     *       "citizenship": {
     *         "matching_status": "matched",
     *         "value": "rus"
     *       },
     *       "experience": {
     *         "matching_status": "matched",
     *         "value": "3"
     *       },
     *       "full_name": {
     *         "matching_status": "no_criteria",
     *         "value": "Иванов Иван Иванович"
     *       },
     *       "gender": {
     *         "matching_status": "no_criteria",
     *         "value": "male"
     *       },
     *       "phone": {
     *         "matching_status": "no_criteria",
     *         "value": "+79211234455"
     *       },
     *       "status": "completed_matched"
     *     }
     */
    EnrichedProperties: {
      /** @description Возраст. Пусто, если соискатель не оставил эти данные. */
      age?: {
        matching_status?: components['schemas']['EnrichedPropertyMatchingStatus']
        /** @description Целое число, полное количество лет кандидата. Пусто, если соискатель не оставил эти данные. */
        value?: number | null
      } | null
      /** @description Гражданство. Пусто, если соискатель не оставил эти данные. */
      citizenship?: {
        matching_status?: components['schemas']['EnrichedPropertyMatchingStatus']
        /** @description Код страны в стандартной кодировке ISO 3166-1 alpha-3. Пусто, если соискатель не оставил эти данные. */
        value?: string | null
      } | null
      /** @description Опыт по профессии. Пусто, если соискатель не оставил эти данные. */
      experience?: {
        matching_status?: components['schemas']['EnrichedPropertyMatchingStatus']
        /**
         * @description Возможные значения:<br/>
         *      - `"0"` - нет опыта<br/>
         *      - `"lt_1"` - меньше года<br/>
         *      - `"1"`..`"50"` - значения от 1 до 50, опыт в количестве лет<br/>
         *      - `"no_experience"` - нет опыта<br/>
         *      - `"has_experience"` - есть опыта<br/>
         *     Пусто, если соискатель не оставил эти данные.
         */
        value?: string | null
      } | null
      /** @description ФИО. Пусто, если соискатель не оставил эти данные. */
      full_name?: {
        matching_status?: components['schemas']['EnrichedPropertyMatchingStatus']
        /** @description Строка со свободным вводом кандидата. Пусто, если соискатель не оставил эти данные. */
        value?: string | null
      } | null
      /** @description Пол. Пусто, если соискатель не оставил эти данные. */
      gender?: {
        matching_status?: components['schemas']['EnrichedPropertyMatchingStatus']
        /**
         * @description Возможные значения:<br/>
         *      - `"male"` - мужской<br/>
         *      - `"female"` - женский<br/>
         *     Пусто, если соискатель не оставил эти данные.
         */
        value?: string | null
      } | null
      /** @description Номер телефона. Пусто, если соискатель не оставил эти данные. */
      phone?: {
        matching_status?: components['schemas']['EnrichedPropertyMatchingStatus']
        /** @description Номер телефона в формате +79211234455. Пусто, если соискатель не оставил эти данные. */
        value?: string | null
      } | null
      /**
       * @description Текущий статус сбора информации о кандидате. Возможные значения:<br/>
       *      - `"in_progress"` - собираются данные о кандидате<br/>
       *      - `"not_completed"` - данные о кандидате не собраны<br/>
       *      - `"completed_no_criteria"` - нет оценки под критерии вакансии<br/>
       *      - `"completed_matched"` - кандидат подошел под критерии вакансии<br/>
       *      - `"completed_mismatched"` - кандидат не подошел под критерии вакансии
       * @enum {string}
       */
      status?: 'in_progress' | 'not_completed' | 'completed_no_criteria' | 'completed_matched' | 'completed_mismatched'
    }
    /**
     * @description Статус проверки соответствия кандидата критериям вакансии. Возможные значения:<br/>
     *      - `"no_criteria"` - не выставлены критерии<br/>
     *      - `"matched"` - подошел под критерии<br/>
     *      - `"mismatched"` - не подошел под критерии
     * @enum {string}
     */
    EnrichedPropertyMatchingStatus: 'no_criteria' | 'matched' | 'mismatched'
    /**
     * @description Тип склада или производственной линии на которой предстоит работать кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "production" - Производство;
     *       - "logisticsCenter" - Логистический центр;
     *       - "warehouse" - Склад;
     *       - "other" - Другое.
     * @example [
     *       "production"
     *     ]
     */
    FacilityType: ('production' | 'logisticsCenter' | 'warehouse' | 'other')[] | null
    /**
     * @description В каком цеху по приготовлению пищи предстоит работать кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "cold" - Холодный;
     *       - "hot" - Горячий;
     *       - "confectionery" - Кондитерский;
     *       - "preparation" - Заготовочный;
     *       - "other" - Другой.
     * @example [
     *       "cold"
     *     ]
     */
    FoodProductionShopType: ('cold' | 'hot' | 'confectionery' | 'preparation' | 'other')[] | null
    /**
     * Пол
     * @example female
     * @enum {string|null}
     */
    Gender: 'female' | 'male' | null
    GetApplicationsByIdsResult: {
      /** @description Список откликов */
      applies?: {
        /** @description Данные соискателя */
        applicant?: {
          data?: {
            /**
             * @description Дата рождения
             * @example 1988-01-21
             */
            birthday?: string | null
            /**
             * @description Гражданство
             * @example Россия
             */
            citizenship?: string | null
            education?: components['schemas']['EducationLevel']
            /** @description Детали ФИО */
            full_name?: {
              /**
               * @description Имя
               * @example Иван
               */
              first_name?: string
              /**
               * @description Фамилия
               * @example Иванов
               */
              last_name?: string
              /**
               * @description Отчество, если указано
               * @example Иванович
               */
              patronymic?: string | null
            } | null
            /** @description Пол соискателя */
            gender?: string | null
            /**
             * @description ФИО
             * @example Иванов Иван Иванович
             */
            name?: string | null
          }
          /** @example 1110dc2f-be18-47ef-a524-cd1234321d42 */
          id?: string
          /** @example 2143065041 */
          resume_id?: string | null
        }
        /** @description Контакты соискателя */
        contacts?: {
          /** @description Чат с соискателем */
          chat?: {
            /**
             * @description Идентификатор чата
             * @example u2i-2142059193-600277161
             */
            value?: string
          } | null
          phones?: {
            /**
             * @description Статус получения контакта от соискателя
             * @example received
             */
            status?: string | null
            /**
             * @description Телефон соискателя
             * @example +79211234455
             */
            value?: string
          }[]
        }
        /**
         * Format: date-time (RFC3339)
         * @description Дата создания отклика
         * @example 2026-07-10T12:00:00+03:00
         */
        created_at?: string
        /**
         * Format: int64
         * @description Идентификатор сотрудника разместившего вакансию
         * @example 727226498
         */
        employee_id?: number | null
        enriched_properties?: components['schemas']['EnrichedProperties']
        /**
         * @description Идентификатор отклика
         * @example 11102026de0ad1be10e2236f
         */
        id?: string
        /**
         * @description Отклик просмотрен
         * @example false
         */
        is_viewed?: boolean
        /**
         * Format: int64
         * @description Идентификатор отклика старого формата
         * @example 123456789
         */
        negotiation_id?: number | null
        /** @description Статус и результат превалидации кандидата */
        prevalidation?: {
          /** @example success */
          status?: string
          /** @description Выжимка превалидации. Массив ответов на вопросы */
          summary?: components['schemas']['PrevalidationAnswer'][] | null
        } | null
        /** @description Цена целевого действия (копейки) */
        price?: {
          /**
           * @description Цена целевого действия в бонусах (копейки)
           * @example 0
           */
          bonus: number
          /**
           * @description Цена целевого действия в реальных деньгах (копейки)
           * @example 65000
           */
          real: number
          /**
           * @description Общая цена целевого действия (копейки)
           * @example 65000
           */
          total: number
        } | null
        /**
         * @description Источник отклика
         *
         *     Возможные значения:
         *      - "sbc_cold_flow" - Отклик по приглашению из рассылки по холодной базе кандидатов
         * @example sbc_cold_flow
         * @enum {string}
         */
        source?: 'sbc_cold_flow'
        /**
         * @description Статус отклика
         * @example new
         */
        state?: string
        /**
         * @description Тип отклика
         *
         *     Возможные значения:
         *      - "by_phone" - отклик через просмотр телефона
         *      - "by_chat" - отклик через чат
         * @example by_chat
         * @enum {string}
         */
        type?: 'by_phone' | 'by_chat'
        /**
         * Format: date-time (RFC3339)
         * @description Дата обновления отклика
         * @example 2026-07-10T12:05:00+03:00
         */
        updated_at?: string
        /**
         * Format: int64
         * @description Идентификатор вакансии на сайте Авито
         * @example 52287485844
         */
        vacancy_id?: number
      }[]
    }
    GetApplicationsIdsResult: {
      /** @description Список идентификаторов */
      applies?: {
        /**
         * Format: date-time (RFC3339)
         * @description Дата создания отклика
         * @example 2026-07-17T12:57:12.38374+03:00
         */
        created_at?: string
        /**
         * @description Идентификатор отклика
         * @example 11102026de0ad1be10e2236f
         */
        id?: string
        /**
         * @description Статус отклика
         * @example new
         */
        state?: string
        /**
         * Format: date-time (RFC3339)
         * @description Дата обновления отклика
         * @example 2026-07-17T10:31:10Z
         */
        updated_at?: string
      }[]
    }
    /**
     * @description Предпочтительный грейд кандидата
     * @example [
     *       "lead"
     *     ]
     * @enum {string|null}
     */
    Grade: 'junior' | 'middle' | 'senior' | 'lead' | null
    /**
     * @deprecated
     * @description Поле deprecated - теперь всегда description с html-тэгами.
     *     Флаг, указывающий на наличие html-тэгов в описании вакансии, для их специальной обработки. По умолчанию `false`
     *     Поддерживаемые тэги - `p`, `ul`, `ol`, `li`, `br`, `strong`, `em`
     */
    HtmlTags: boolean
    ItemNotFoundError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?: 'chosen_vacancy_is_not_found'
      }
    }
    /**
     * Регион или населённый пункт. Поле deprecated — теперь детали адреса доступны в блоке "address_details"
     * @deprecated
     */
    Location: {
      /**
       * Идентификатор региона или населённого пункта
       * Format: int64
       * @example 637640
       */
      readonly id?: number
      /**
       * Имя региона или адрес
       * @example Москва
       */
      readonly title?: string
    }
    /** @description Адрес объекта */
    LocationAddress: {
      /**
       * @description Район области
       * @example городской округ Новосибирск
       */
      area?: string
      /**
       * @description Номер дома
       * @example 117
       */
      house?: string
      /**
       * @description Населённый пункт
       * @example Новосибирск
       */
      locality: string
      /**
       * @description Область
       * @example Новосибирская область
       */
      province?: string
      /**
       * @description Округ
       * @example Сибирский федеральный округ
       */
      region?: string
      /**
       * @description Улица
       * @example Вертковская улица
       */
      street?: string
    }
    /**
     * Медкнижка
     * @enum {string}
     */
    MedicalBook: 'yes' | 'no'
    /**
     * @description Требуется ли медкнижка и кем она оформляется при приеме на работу
     *     <br>
     *     Возможные значения:
     *       - "registerByCandidate" - Должен оформить кандидат;
     *       - "helpRegister" - Поможем оформить;
     *       - "notNeeded" - Не нужна;
     * @example [
     *       "registerByCandidate"
     *     ]
     * @enum {string|null}
     */
    MedicalBookVacancy: 'registerByCandidate' | 'helpRegister' | 'notNeeded' | null
    /**
     * @deprecated
     * @description Медицинская специализация (можно указать несколько значений через запятую)
     *     <br>
     *     см. названия специализаций в
     *     [ справочнике ](https://www.avito.st/s/openapi/catalog-medical-spec.xml)
     * @example [
     *       "Вирусолок",
     *       "Терапевт"
     *     ]
     */
    MedicalSpecialization: string[] | null
    /**
     * @description Медицинская специализация (можно указать несколько значений)
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `medical_specialization` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     * @example [
     *       3265936,
     *       3265937
     *     ]
     */
    MedicalSpecializationIds: number[] | null
    NotFoundError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?: 'employee_not_found'
      }
    }
    /**
     * Свой транспорт
     * @enum {string}
     */
    OwnTransport: 'no' | 'car' | 'cargo-car' | 'bike' | 'scooter'
    /**
     * @description За какой период указана зарплата. <br>
     *     Возможные значения:
     *       - "month" - За месяц;
     *       - "week" - За неделю;
     *       - "shift" - За смену;
     *       - "hour" - За час;
     *       - "piecework" - Сдельная оплата.
     *
     *     Для schedule равным flyInFlyOut или shift доступны для выбора только month, shift.<br>
     *     Для employment равны full и schedule равным fixed доступен для выбора только month.
     * @example [
     *       "month"
     *     ]
     * @enum {string|null}
     */
    PaidPeriod: 'month' | 'week' | 'shift' | 'hour' | 'piecework' | null
    PaymentError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?:
          | 'not_enough_purchased_services'
          | 'employee_does_not_have_enough_purchased_services'
          | 'employee_can_publish_only_from_billing_type_package'
      }
    }
    /** @description Контактный телефон, если не передать - подставляется номер из профиля который используется по умолчанию. Если передать номер телефона которого нет в профиле, то он будет добавлен в профиль, но по нему необходимо будет пройти верификацию. Если номер телефона принадлежит другому пользователю, то вакансия не будет опубликована. Если вакансия публикуется от имени сотрудника и номер телефона ему не принадлежит - объявление так же не будет опубликовано. */
    Phone: {
      /** @description Код города (строка, соответствующая шаблону "^\\d{0,6}$") */
      city: string
      /** @description Код страны (строка, соответствующая шаблону "^\\+?\\d{0,5}$") */
      country: string
      /** @description Телефон (строка, соответствующая шаблону "^[\\d -]{4,32}$") */
      number: string
    }
    /** Изображение */
    Photo: {
      /** URL Изображения */
      readonly url?: string
    }
    /**
     * @description Ответ на вопрос превалидации. Содержит лейбл, название и значение переменной.
     * @example {
     *       "label": "ФИО",
     *       "value": "Иванов Иван Иванович",
     *       "variable": "job_fio"
     *     }
     */
    PrevalidationAnswer: {
      /** @description Название переменной */
      label?: string
      /** @description Значение переменной */
      value?: string
      /** @description Идентификатор переменной. Распространенные значения:<br/> `job_fio` - ФИО<br/> `job_phone` - телефон<br/> `job_birthdate` - дата рождения<br/> `job_city` - город<br/> `job_gender` - пол<br/> `job_citizenship` - гражданство<br/> `job_schedule` - желаемый режим работы<br/> `job_educational_level` - образование<br/> `job_district` - желаемый район работы<br/> `job_experience` - есть ли подходящий опыт<br/> `job_work_duration` - стаж работы на аналогичной должности<br/> `job_last_employment` - последнее место работы<br/> `job_last_position` - должность на последнем месте работы<br/> `job_salary_expectations` - желаемая зарплата<br/> `job_responsibility` - образование, специальность<br/> `job_current_education` - учится ли сейчас<br/> `job_current_employment` - работает ли сейчас<br/> `docs_available` - наличие СНИЛС, ИНН, паспорта или временного удостоверения<br/> `job_military_docs` - наличие документов воинского учета<br/> `is_drivers_licence` - наличие водительских прав<br/> `job_drivers_licence` - категория водительских прав<br/> `drivers_licence_country` - страна выдачи водительских прав<br/> `is_individual_entrepreneur` - оформлен ли как ИП<br/> `job_employment_records` - наличие трудовой книжки<br/> `is_medical_record` - наличие медицинской книжки<br/> `job_covid19` - сертификат о вакцинации<br/> `job_official_employment` - готовность работать по трудовому договору<br/> `job_tha` - РВП<br/> `job_work_permit` - разрешение на работу<br/> `job_tractor_driver_license` - наличие прав для управления спецтехникой<br/> `way_to_travel` - способ перемещения по городу<br/> `job_hostel` - нужно ли проживание<br/> `job_fly_in_basis_readiness` - готовность к вахте по графику из вакансии<br/> `job_spent_time_road` - желаемое время на дорогу<br/> `job_call_time` - время для звонка<br/> `job_driving_experience` - стаж вождения<br/> `job_phone_android` - наличие телефона на Android<br/> `job_use_own_car` - наличие авто<br/> `job_for_me` - ищет ли работу для себя<br/> `job_email` - электронная почта<br/> `job_preferred_address` - желаемый адрес работы<br/> `is_self_employed` - статус самозанятого<br/> `job_training_ready` - готовность пройти обучение<br/> `has_pc_and_workplace` - наличие рабочего места и компьютера */
      variable?: string
    } | null
    /** @description Название профессии <br> Получить актуальный список доступных значений можно из справочника `profession` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> Статичный [справочник](https://www.avito.st/s/openapi/catalog-profession.xml?v=5) объявлен устаревшим и более не будет использоваться. <br> */
    Profession: number | null
    /**
     * @description Способ оформления (можно указать несколько значений через запятую)
     *     <br>
     *     Возможные значения:
     *     - contract - Трудовой договор
     *     - gph_ip - ГПХ с ИП
     *     - gph_self_employed - ГПХ с самозанятым
     *     - gph_individual - ГПХ с физическим лицом
     * @example [
     *       "contract",
     *       "gph_individual"
     *     ]
     */
    RegistrationMethod: ('contract' | 'gph_ip' | 'gph_self_employed' | 'gph_individual')[] | null
    /** Информация о резюме v2 */
    'Resume2.0': {
      address_details?: components['schemas']['AddressDetails']
      /**
       * @description Описание резюме
       * @example Повар- универсал с 15 летним опытом работы:
       *     повар - пекарь, шеф-поваром на судах;
       *     повар -универсал в экспедициях и на приисках;
       *     повар горячего и холодного цехов в ресторанах и кафе Москвы;
       *     щеф-повар в ресторанах и ночных клубах Одессы.
       *     Знание русской, поморской, украинской, кавказской, итальянской кухонь. Технология, администрирование.
       *     управление персоналом.
       */
      description?: string
      /**
       * Format: int64
       * @description Идентификатор резюме
       * @example 2143065041
       */
      id?: number
      /**
       * @description Активность резюме
       * @example true
       */
      is_active?: boolean
      /**
       * @description Контакты резюме куплены
       * @example true
       */
      is_purchased?: boolean
      /** @description Блок с параметрами резюме. Все поля опциональны и выводятся при наличии */
      params?: {
        /**
         * @description Готовность к командировкам
         * @enum {string|null}
         */
        ability_to_business_trip?: 'Не готов' | 'Готов' | 'Иногда' | null
        /**
         * @description Место, рядом с которым вы хотите работать
         * @example Москва, Лесная улица 7
         */
        address?: string | null
        /**
         * Format: int32
         * @description Возраст соискателя
         * @example 32
         */
        age?: number | null
        /**
         * @description Сфера деятельности
         * @enum {string|null}
         */
        business_area?:
          | 'IT, интернет, телеком'
          | 'Автомобильный бизнес'
          | 'Административная работа'
          | 'Банки, инвестиции'
          | 'Без опыта, студенты'
          | 'Бухгалтерия, финансы'
          | 'Высший менеджмент'
          | 'Госслужба, НКО'
          | 'Домашний персонал'
          | 'ЖКХ, эксплуатация'
          | 'Искусство, развлечения'
          | 'Консультирование'
          | 'Курьерская доставка'
          | 'Маркетинг, реклама, PR'
          | 'Медицина, фармацевтика'
          | 'Образование, наука'
          | 'Охрана, безопасность'
          | 'Продажи'
          | 'Производство, сырьё, с/х'
          | 'Страхование'
          | 'Строительство'
          | 'Такси'
          | 'Транспорт, логистика'
          | 'Туризм, рестораны'
          | 'Управление персоналом'
          | 'Фитнес, салоны красоты'
          | 'Юриспруденция'
          | null
        /**
         * @description Водительское удостоверение
         * @enum {string|null}
         */
        driver_licence?: 'Есть' | 'Нет' | null
        /** @description Категория водительских прав */
        driver_licence_category?: ('A' | 'B' | 'BE' | 'C' | 'CE' | 'D' | 'DE' | 'M' | 'Tm' | 'Tb')[] | null
        /**
         * @description Образование соискателя
         * @enum {string|null}
         */
        education?: 'Высшее' | 'Незаконченное высшее' | 'Среднее' | 'Среднее специальное' | null
        education_list?:
          | {
              /**
               * @description Дата окончания учебного заведения
               * @example 1995
               */
              education_stop?: string | null
              /**
               * @description Наименование учебного заведения
               * @example МГИМО МИД РФ
               */
              institution?: string | null
              /**
               * @description Специальность
               * @example Финансы и кредит, экономист-международник
               */
              specialty?: string | null
            }[]
          | null
        /** @description Опыт работы в годах */
        experience?: number | null
        experience_list?:
          | {
              /**
               * @description Наименование организации
               * @example МТС
               */
              company?: string | null
              /**
               * @description Занимаемая должность
               * @example Эксперт клиентского сервиса
               */
              position?: string | null
              /**
               * @description Должностные обязанности
               * @example Принятие входящих обращений от клиентов; помощь в решении возникающих вопросов; консультирование по продуктам компании; продажи
               */
              responsibilities?: string | null
              /**
               * Format: date
               * @description Дата увольнения (при отсутствии считать, что работает по настоящее время)
               * @example 2018-09-01
               */
              work_finish?: string | null
              /**
               * Format: date
               * @description Дата приема на работу
               * @example 2015-07-01
               */
              work_start?: string | null
            }[]
          | null
        language_list?:
          | {
              /**
               * @description Язык
               * @example Коми
               */
              language?: string | null
              /**
               * @description Уровень владения языком
               * @enum {string|null}
               */
              language_level?: 'Начальный' | 'Средний' | 'Выше среднего' | 'Свободное владение' | null
            }[]
          | null
        /**
         * @description Возможность переезда
         * @enum {string|null}
         */
        moving?: 'Невозможен' | 'Возможен' | null
        /**
         * @description Гражданство соискателя
         * @example Филиппины
         */
        nationality?: string | null
        /**
         * @description Пол соискателя
         * @enum {string|null}
         */
        pol?: 'Мужской' | 'Женский' | null
        /**
         * @description Наличие разрешения на работу в России
         * @enum {string|null}
         */
        razreshenie_na_rabotu_v_rossii?: 'Да' | 'Нет' | null
        /**
         * @description Режим работы
         *     Возможные значения:
         *       - Вахтовый метод
         *       - Неполный день
         *       - Полный день
         *       - Свободный график
         *       - Сменный график
         *       - Удалённая работа
         * @enum {string|null}
         */
        schedule?:
          | 'Вахтовый метод'
          | 'Неполный день'
          | 'Полный день'
          | 'Свободный график'
          | 'Сменный график'
          | 'Удалённая работа'
          | null
      }
      /**
       * Изображения
       * @description Присутствует в ответе только если в запросе есть флаг photos=true
       */
      photos?: components['schemas']['Photo'][] | null
      /**
       * Format: int32
       * @description Зарплата. Поле может отсутствовать в ответе (выводится при наличии зарплаты)
       * @example 60000
       */
      salary?: number | null
      /**
       * Format: date-time (RFC3339)
       * @description Дата публикации резюме
       * @example 2020-08-21T08:44:12Z
       */
      start_time?: string
      /**
       * @description Наименование резюме
       * @example Повар-универсал
       */
      title?: string
      /**
       * Format: date-time (RFC3339)
       * @description Дата последнего обновления резюме
       * @example 2020-08-21T09:53:06Z
       */
      update_time?: string
      /**
       * @description URL резюме на сайте
       * @example /moskva/rezume/povar-universal_358696_2143065041
       */
      url?: string
    }
    /** Контакт */
    ResumeContact: {
      /**
       * Тип контакта
       * @enum {string}
       */
      readonly type?: 'e-mail' | 'phone' | 'chat_id'
      /** Контактные данные */
      readonly value?: string
    }
    /** Контакты резюме */
    ResumeContacts: {
      /**
       * Контакт уже приобретен
       * @example false
       */
      readonly already_bought?: boolean
      /**
       * Контакты
       * @example [
       *       {
       *         "type": "e-mail",
       *         "value": "candidate@example.com"
       *       },
       *       {
       *         "type": "phone",
       *         "value": 79211234455
       *       },
       *       {
       *         "type": "chat_id",
       *         "value": "u2i-voDBaJ_nyscu9ztBC3TTaW"
       *       }
       *     ]
       */
      readonly contacts?: components['schemas']['ResumeContact'][]
      /** @description Детали ФИО */
      full_name?: {
        /**
         * @description Имя
         * @example Иван
         */
        first_name?: string
        /**
         * @description Фамилия
         * @example Иванов
         */
        last_name?: string
        /**
         * @description Отчество, если указано
         * @example Иванович
         */
        patronymic?: string | null
      } | null
      /**
       * Имя
       * @example Иванов Иван
       */
      readonly name?: string
    }
    /** Мета-информация ответа */
    ResumeSearchMeta: {
      /**
       * Курсор поиска
       * Format: int32
       * @example 1538480436
       */
      readonly cursor?: number
      /**
       * Номер страницы
       * Format: int32
       * @example 1
       */
      readonly page?: number
      /**
       * Количество страниц
       * Format: int32
       * @example 6
       */
      readonly pages?: number
      /**
       * Количество записей на странице
       * Format: int32
       * @example 25
       */
      readonly per_page?: number
    }
    /**
     * @description С каким оборудованием или ПО предстоит работать кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "cashRegisterAndPosTerminals" - Касса и POS-терминалы;
     *       - "accountingSoftware" - Программы учёта товаров.
     * @example [
     *       "cashRegisterAndPosTerminals"
     *     ]
     */
    RetailEquipmentType: ('cashRegisterAndPosTerminals' | 'accountingSoftware')[] | null
    /**
     * @description Что продает магазин в котором предстоит работать кандидату
     *     <br>
     *     Возможные значения элементов массива:
     *       - "hypermarketOrSupermarket" - Гипермаркет или супермаркет;
     *       - "grocery" - Продуктовый;
     *       - "electronicsAndHouseholdAppliances" - Электроника и бытовая техника;
     *       - "clothesAndShoes" - Одежда и обувь;
     *       - "perfumesAndCosmetics" - Парфюмерия и косметика;
     *       - "constructionAndHouseholdGoods" - Строительство и хозтовары;
     *       - "childrenGoods" - Детские товары;
     *       - "sportingGoods" - Спортивные товары;
     *       - "petShop" - Зоомагазин;
     *       - "pharmacy" - Аптека;
     *       - "autoParts" - Автозапчасти;
     *       - "booksAndStationery" - Книги и канцелярия;
     *       - "furniture" - Мебель;
     *       - "optics" - Оптика;
     *       - "flowersAndPlants" - Цветы и растения;
     *       - "jewelry" - Ювелирные изделия;
     *       - "other" - Другое.
     * @example [
     *       "hypermarketOrSupermarket"
     *     ]
     */
    RetailShopType:
      | (
          | 'hypermarketOrSupermarket'
          | 'grocery'
          | 'electronicsAndHouseholdAppliances'
          | 'clothesAndShoes'
          | 'perfumesAndCosmetics'
          | 'constructionAndHouseholdGoods'
          | 'childrenGoods'
          | 'sportingGoods'
          | 'petShop'
          | 'pharmacy'
          | 'autoParts'
          | 'booksAndStationery'
          | 'furniture'
          | 'optics'
          | 'flowersAndPlants'
          | 'jewelry'
          | 'other'
        )[]
      | null
    /**
     * @description Премия. Не более 70 символов.
     * @example 5% от продаж в месяц
     */
    SalaryBaseBonus: string
    /** @description Размер оклада. Оклад не может превышать заработную плату. */
    SalaryBaseRange: {
      /**
       * @description Нижняя граница оклада, рублей за paid_period
       * @example 30000
       */
      from?: number | null
      /**
       * @description Верхняя граница оклада, рублей за paid_period
       * @example 60000
       */
      to?: number | null
    }
    /** @description Подробная информация по заработной плате */
    SalaryDetail: {
      /** @description Оклад */
      base?: {
        bonus?: components['schemas']['SalaryBaseBonus']
        range?: components['schemas']['SalaryBaseRange']
      } | null
      paid_period?: components['schemas']['PaidPeriod']
      taxes?: components['schemas']['Taxes']
    } | null
    SetApplicationsIsViewedResult: {
      /** @description Список идентификаторов откликов и статусов их просмотренности после обновления */
      applies?: {
        /**
         * @description Идентификатор отклика
         * @example 11102026de0ad1be10e2236f
         */
        id: string
        /** @example true */
        is_viewed: boolean
      }[]
    }
    /**
     * @description Смены
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `shifts` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     *     <br>
     *     Доступен только для следующих режимов работы (schedule): "Сменный (shift)",  "Фиксированный (fixed)"
     *     <br>
     *     Для режима работы (schedule) "Фиксированный (fixed)" доступны только значения показывающие отношение количества рабочих дней к выходным, например "5/2"
     */
    Shifts: number[] | null
    /** Общая информация резюме */
    SimplifiedResume: {
      address_details?: components['schemas']['AddressDetails']
      /**
       * Возраст
       * Format: int64
       * @example 19
       */
      readonly age?: number
      /** Дата публикации */
      readonly created_at?: string
      driver_licence?: components['schemas']['DriverLicence']
      driver_licence_category?: components['schemas']['DriverLicenceCategory']
      driving_experience?: components['schemas']['DrivingExperience']
      education_level?: components['schemas']['EducationLevel']
      gender?: components['schemas']['Gender']
      /**
       * Идентификатор резюме
       * Format: int64
       * @example 2385934235
       */
      readonly id?: number
      /**
       * Контакты резюме куплены
       * @example false
       */
      readonly is_purchased?: boolean
      location?: components['schemas']['Location']
      medical_book?: components['schemas']['MedicalBook']
      nationality?: components['schemas']['Citizenship']
      own_transport?: components['schemas']['OwnTransport']
      /**
       * Желаемый уровень заработной платы
       * Format: int64
       * @example 20000
       */
      readonly salary?: number
      specialization?: components['schemas']['Specialization']
      /**
       * Желаемая должность
       * @example Оператор Call-центра
       */
      readonly title?: string
      /**
       * Стаж работы
       * Format: int64
       * @example 0
       */
      readonly total_experience?: number
      /** Дата последнего обновления */
      readonly updated_at?: string
    }
    SimplifiedVacancy: {
      addressDetails?: {
        address?: string
        city?: string
      }
      businessArea?: string
      companyName?: string
      /** @description Хеш продавца */
      employerId?: string
      link?: string
      profession?: string
      title?: string
    }
    /** Сфера деятельности */
    Specialization: {
      /**
       * Идентификатор категории
       * Format: int64
       * @example 10186
       */
      readonly id?: number
      /**
       * Имя категории
       * @example Консультирование
       */
      readonly title?: string
    }
    StoppingForbiddenError: {
      error?: {
        /**
         * @description Тип ошибки
         * @enum {string}
         */
        type?: 'vacancies'
        /**
         * @description Значение ошибки
         * @enum {string}
         */
        value?:
          | 'chosen_vacancy_belongs_to_another_user'
          | 'unavailable_for_blocked'
          | 'unavailable_for_removed'
          | 'unavailable_for_rejected'
          | 'unavailable_to_stop'
          | 'vacancy_does_not_belong_to_employee'
          | 'employee_is_not_active'
      }
    }
    /**
     * @description Зарплата указана. <br>
     *     Возможные значения:
     *       - "gross" - До вычета налогов;
     *       - "net" - На руки;
     * @example [
     *       "gross"
     *     ]
     * @enum {string|null}
     */
    Taxes: 'gross' | 'net' | null
    /**
     * @description Требуется ли кандидату собственные инструменты для работы
     *     <br>
     *     Возможные значения:
     *       - "needYourOwn" - Нужны свои;
     *       - "willBeProvided" - Предоставляет работодатель.
     * @example [
     *       "needYourOwn"
     *     ]
     * @enum {string|null}
     */
    ToolsAvailability: 'needYourOwn' | 'willBeProvided' | null
    'Vacancies2.0': components['schemas']['Vacancy2.0'][]
    VacanciesGetByIdsBody: {
      /** @description Поля для основного тела ответа */
      fields?: ('title' | 'description' | 'url' | 'salary' | 'start_time' | 'update_time' | 'is_active')[]
      /** @description Идентификаторы вакансий на сайте */
      ids: number[]
      /**
       * @description Дополнительные поля, которые входят в params (можно указать несколько
       *     значений через запятую). Если значение не задано - возвращаются все поля.
       *
       *     Устаревшие значения:
       *     * change (используйте shifts)
       *     * is_remote (используйте work_format)
       *
       *     Удалённые значения (более недоступны):
       *     * manufacturing_type
       *     * industry_type
       *     * piecework_flag
       *     * programs
       *     * warehouse_functionality
       *     * where_to_work
       */
      params?: (
        | 'address'
        | 'administrator_organization_type'
        | 'age_preferences'
        | 'applies_filter'
        | 'bonuses'
        | 'business_area'
        | 'change'
        | 'citizenship'
        | 'construction_work_type'
        | 'coordinates'
        | 'cuisine'
        | 'delivery_method'
        | 'driving_experience'
        | 'driving_license_category'
        | 'eatery_type'
        | 'education_level'
        | 'employment'
        | 'experience'
        | 'facility_type'
        | 'food_production_shop_type'
        | 'grade'
        | 'industry_type'
        | 'is_company_car'
        | 'is_remote'
        | 'is_side_job'
        | 'job_responsibilities'
        | 'jobs_number'
        | 'manufacturing_type'
        | 'medical_book'
        | 'medical_specialization'
        | 'paid_period'
        | 'payout_frequency'
        | 'piecework_flag'
        | 'profession'
        | 'programs'
        | 'registration_method'
        | 'retail_equipment_type'
        | 'retail_shop_type'
        | 'salary'
        | 'salary_base_bonus'
        | 'salary_base_range'
        | 'schedule'
        | 'shifts'
        | 'taxes'
        | 'tools_availability'
        | 'vacancy_code'
        | 'vehicle_type'
        | 'warehouse_functionality'
        | 'where_to_work'
        | 'work_days_per_week'
        | 'work_format'
        | 'work_hours_per_day'
        | 'worker_class'
      )[]
    }
    /** Информация о вакансии v2 */
    'Vacancy2.0': {
      /** @description Детали адреса вакансии */
      addressDetails?: {
        /**
         * @description Полный адрес
         * @example Санкт-Петербург, Пушкин, Малая улица, 12
         */
        address?: string
        /** @description Район */
        area?: string | null
        /**
         * @description Город
         * @example Пушкин
         */
        city?: string
        /** @description Координаты */
        coordinates?: {
          /**
           * Format: double
           * @description Широта
           * @example 55.778644
           */
          latitude?: number
          /**
           * Format: double
           * @description Долгота
           * @example 37.587901
           */
          longitude?: number
        }
        /**
         * @description Область, например "Новосибирская область" или "Санкт-Петербург" для больших городов
         * @example Новосибирская область
         */
        province?: string
      } | null
      /**
       * @description Вакансия на автопродлении
       * @example true
       */
      auto_renewal?: boolean | null
      /** @description Информация о контактах в вакансии */
      contacts?: {
        /** @description Возможность позвонить по номеру из вакансии */
        allow_calls?: boolean
        /** @description Возможность откликнуться на вакансию через сайт */
        allow_messages?: boolean
        /**
         * @description Email контактного лица в вакансии
         * @example ivalerevich@company.ru
         */
        email?: string | null
        /**
         * @description Имя контактного лица в вакансии
         * @example Игорь Валерьевич
         */
        name?: string | null
      } | null
      /**
       * @description Описание вакансии
       * @example Удобное расположение в разных районах Санкт-Петербурга.
       *     Опыт не обязателен.Обучение.
       *     График:2/2 5/2 3/3 (День,ночь)
       */
      description?: string
      /** @description Информация об иерархии аккаунтов */
      hierarchy?: {
        /**
         * @description Идентификатор сотрудника назначенного на Вакансию
         * @example 45523233
         */
        employee_id?: number | null
      } | null
      /**
       * Format: int64
       * @description Идентификатор вакансии на сайте
       * @example 2142059193
       */
      id?: number
      /**
       * @description Активность вакансии
       * @example true
       */
      is_active?: boolean
      /** @description Блок с параметрами вакансии. Все поля опциональны и выводятся при наличии */
      params?: {
        /**
         * @description Место работы
         * @example Санкт-Петербург, Пушкин, Малая улица, 12
         */
        address?: string | null
        /**
         * @description Тип организации в которой предстоит работать кандидату. Используется для профессии Администратор
         *     <br>
         *     Получить актуальный список доступных значений можно из справочника `administrator_organization_type` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
         *     <br>
         */
        administrator_organization_type?: string | null
        /** @description Подходит кандидатам */
        age_preferences?:
          | (
              | 'от 14 лет'
              | 'от 16 лет'
              | 'старше 45 лет'
              | 'для студентов'
              | 'для пенсионеров'
              | 'с нарушениями здоровья'
            )[]
          | null
        /**
         * @description Фильтр откликов на вакансию
         * @enum {string|null}
         */
        applies_filter?: 'Любые' | 'Только с резюме' | null
        /** @description Бонусы, которые компания предоставляет кандидатам */
        bonuses?:
          | (
              | 'Униформа'
              | 'Проживание'
              | 'Медицинская страховка'
              | 'Питание'
              | 'Оплата бензина'
              | 'Парковка'
              | 'Зоны отдыха'
              | 'Транспорт до работы'
              | 'Скидки в компании'
              | 'Подарки детям на праздники'
              | 'Оплата мобильной связи'
              | 'Обучение'
              | 'Компенсация проезда с работы'
              | 'КАСКО'
              | 'Смартфон'
              | 'Услуги шиномонтажа'
            )[]
          | null
        /**
         * @description Сфера деятельности компании.
         *     <br>
         *     Получить актуальный список доступных значений можно из справочника `business_area` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
         *     <br>
         *     Статичный [справочник](https://www.avito.st/s/openapi/catalog-business-area.xml) объявлен устаревшим и более не будет использоваться.
         *     <br>
         */
        business_area?: string | null
        /**
         * @deprecated
         * @description Смены. Устарело, используйте поле shifts.
         */
        change?:
          | (
              | '1 / 2'
              | '1 / 3'
              | '2 / 1'
              | '2 / 2'
              | '3 / 3'
              | '3 / 2'
              | '4 / 3'
              | '5 / 2'
              | '4 / 2'
              | '6 / 1'
              | 'Без выходных'
              | 'Утренние'
              | 'Дневные'
              | 'Вечерние'
              | 'Ночные'
              | 'Плавающие выходные'
              | 'Работа по выходным'
            )[]
          | null
        /** @description Гражданство кандидата. */
        citizenship?: string[] | null
        /** @description С какими видами строительных или ремонтных работ предстоит столкнуться кандидату */
        construction_work_type?:
          | (
              | 'Малярные работы'
              | 'Облицовка стен'
              | 'Работы с плиткой'
              | 'Монтаж и установка'
              | 'Отделочные работы'
              | 'Кровельные работы'
              | 'Монтаж и настройка оборудования'
              | 'Сварочные работы'
              | 'Строительство фасадов'
              | 'Формовка материалов'
              | 'Бетонные и каменные работы'
              | 'Ремонтные работы'
              | 'Другие'
            )[]
          | null
        /** @description Координаты адреса вакансии */
        coordinates?: {
          /**
           * @description Широта
           * @example 55.778644
           */
          latitude?: number
          /**
           * @description Долгота
           * @example 37.587901
           */
          longitude?: number
        } | null
        /** @description Блюда какой кухни предстоит готовить кандидату */
        cuisine?:
          ('Русская' | 'Европейская' | 'Кавказская' | 'Итальянская' | 'Японская' | 'Турецкая' | 'Другая')[] | null
        /** @description Способ доставки */
        delivery_method?: ('На автомобиле' | 'На велосипеде' | 'На самокате' | 'Пешком')[] | null
        /**
         * @description Стаж вождения
         * @enum {string|null}
         */
        driving_experience?: 'Нет опыта' | 'Меньше года' | '1-2 года' | '3-5 лет' | '6-10 лет' | 'Больше 10 лет' | null
        driving_license_category?: components['schemas']['DrivingLicenseCategory']
        /** @description Формат заведения общепита в котором предстоит работать кандидату */
        eatery_type?: ('Кафе' | 'Бар' | 'Фастфуд' | 'Ресторан' | 'Столовая' | 'Пекарня' | 'Другой')[] | null
        /**
         * @description Предпочтительный уровень образования кандидата
         * @enum {string|null}
         */
        education_level?: 'Не имеет значения' | 'Среднее профессиональное' | 'Высшее' | null
        /** @description Занятость */
        employment?: string | null
        /**
         * @description Требуемый опыт работы
         * @enum {string|null}
         */
        experience?: 'Без опыта' | 'Более 1 года' | 'Более 3 лет' | 'Более 5 лет' | 'Более 10 лет' | null
        /** @description Тип склада или производственной линии на которой предстоит работать кандидату */
        facility_type?: ('Производство' | 'Логистический центр' | 'Склад' | 'Другое')[] | null
        /** @description В каком цеху по приготовлению пищи предстоит работать кандидату */
        food_production_shop_type?: ('Холодный' | 'Горячий' | 'Кондитерский' | 'Заготовочный' | 'Другой')[] | null
        /** @description Предпочтительный грейд кандидата */
        grade?: string | null
        /**
         * @description Предоставляет ли компания машину
         * @enum {string|null}
         */
        is_company_car?: 'Да' | 'Нет' | null
        /**
         * @deprecated
         * @description Удалённая работа. Устарело. Используйте work_format.
         * @enum {string|null}
         */
        is_remote?: 'Да' | 'Нет' | null
        /**
         * @description Подработка
         * @enum {string|null}
         */
        is_side_job?: 'Да' | 'Нет' | null
        /** @description Должностные обязанности сотрудника */
        job_responsibilities?: string | null
        /** @description Количество рабочих мест по вакансии */
        jobs_number?: number | null
        /**
         * @description Требуется ли медкнижка и кем она оформляется при приеме на работу
         * @enum {string|null}
         */
        medical_book?: 'Должен оформить кандидат' | 'Поможем оформить' | 'Не нужна' | null
        /** @description Медицинская специализация <br> Получить актуальный список доступных значений можно из справочника `medical_specialization` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        medical_specialization?: string[] | null
        /**
         * @description Оплачиваемый период
         * @enum {string|null}
         */
        paid_period?: 'в месяц' | 'в неделю' | 'за смену' | 'за час' | 'сдельная оплата' | null
        /**
         * @description Частота выплат
         * @enum {string|null}
         */
        payout_frequency?:
          | 'Почасовая оплата'
          | 'Каждый день'
          | 'Дважды в месяц'
          | 'Раз в неделю'
          | 'Три раза в месяц'
          | 'Раз в месяц'
          | null
        /** @description Название профессии <br> Получить актуальный список доступных значений можно из справочника `profession` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> Статичный [справочник](https://www.avito.st/s/openapi/catalog-profession.xml?v=5) объявлен устаревшим и более не будет использоваться. <br> */
        profession?: string | null
        /** @description Способ оформления */
        registration_method?:
          ('Трудовой договор' | 'ГПХ с ИП' | 'ГПХ с самозанятым' | 'ГПХ с физическим лицом')[] | null
        /** @description С каким оборудованием или ПО предстоит работать кандидату */
        retail_equipment_type?: ('Касса и POS-терминалы' | 'Программы учёта товаров')[] | null
        /** @description Что продает магазин в котором предстоит работать кандидату */
        retail_shop_type?:
          | (
              | 'Гипермаркет или супермаркет'
              | 'Продуктовый'
              | 'Электроника и бытовая техника'
              | 'Одежда и обувь'
              | 'Парфюмерия и косметика'
              | 'Строительство и хозтовары'
              | 'Детские товары'
              | 'Спортивные товары'
              | 'Зоомагазин'
              | 'Аптека'
              | 'Другое'
            )[]
          | null
        /** @description Блок с вилкой зарплаты. Все поля опциональны и выводятся при наличии */
        salary?: {
          /**
           * Format: int32
           * @description Нижняя граница зарплаты. Выводится при наличии
           * @example 30000
           */
          from?: number | null
          /**
           * Format: int32
           * @description Верхняя граница зарплаты. Выводится при наличии
           * @example 60000
           */
          to?: number | null
        } | null
        /**
         * @description Премия
         * @example 5% от продаж в месяц
         */
        salary_base_bonus?: string | null
        /** @description Блок с размером оклада. Все поля опциональны и выводятся при наличии */
        salary_base_range?: {
          /**
           * Format: int32
           * @description Нижняя граница оклада. Выводится при наличии
           * @example 30000
           */
          from?: number | null
          /**
           * Format: int32
           * @description Верхняя граница оклада. Выводится при наличии
           * @example 60000
           */
          to?: number | null
        } | null
        /**
         * @description График работы
         * @enum {string|null}
         */
        schedule?:
          | '5/2'
          | '6/1'
          | 'Вахта'
          | 'Гибкий'
          | 'Сменный'
          | 'Полный день'
          | 'Неполный день'
          | 'Фиксированный'
          | 'Удалённая работа'
          | null
        /** @description Смены. <br> Получить актуальный список доступных значений можно из справочника `shifts` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        shifts?: string[] | null
        /**
         * @description Зарплата указана
         * @enum {string|null}
         */
        taxes?: 'До вычета налогов' | 'На руки' | null
        /**
         * @description Требуется ли кандидату собственные инструменты для работы
         * @enum {string|null}
         */
        tools_availability?: 'Нужны свои' | 'Предоставляет работодатель' | null
        /** @description Внутренний идентификатор вакансии или номер заявки на подбор */
        vacancy_code?: string | null
        /**
         * @description На какой технике предстоит работать кандитату.
         *     <br>
         *     Получить актуальный список доступных значений можно из справочника `vehicle_type` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
         *     <br>
         */
        vehicle_type?: string | null
        /** @description Количество рабочих дней в неделю <br> Получить актуальный список доступных значений можно из справочника `work_days_per_week` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        work_days_per_week?: string[] | null
        /** @description Формат работы <br> Получить актуальный список доступных значений можно из справочника `work_format` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        work_format?: string[] | null
        /** @description Количество рабочих часов в день <br> Получить актуальный список доступных значений можно из справочника `work_hours_per_day` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        work_hours_per_day?: string[] | null
        /** @description Предпочтительный разряд кандидата */
        worker_class?: ('1' | '2' | '3' | '4' | '5 и выше' | 'Не требуется')[] | null
      }
      /**
       * Format: int32
       * @deprecated
       * @description Зарплата (устарело). Используйте поле `salary` с диапазоном из блока `params`
       * @example 30000
       */
      salary?: number | null
      /**
       * Format: date-time (RFC3339)
       * @description Дата публикации вакансии
       * @example 2020-08-21T08:37:36Z
       */
      start_time?: string
      /**
       * @description Наименование вакансии
       * @example Фасовщики, Упаковщики, Комплектовщики
       */
      title?: string
      /**
       * Format: date-time (RFC3339)
       * @description Дата последнего обновления вакансии
       * @example 2020-08-21T09:39:25Z
       */
      update_time?: string
      /**
       * @description URL вакансии на сайте
       * @example /moskva/vakansii/fasovschiki_upakovschiki_komplektovschiki_469099_2142059193
       */
      url?: string
      /**
       * @description Идентификатор вакансии
       * @example b6f76fd2-bb67-11ef-9558-87673267655c
       */
      uuid?: string | null
    }
    VacancyArchive: {
      /**
       * @description employee_id - Идентификатор сотрудника на Авито.
       *     Сотрудник может останавливать только закрепленные за ним вакансии в Avito Pro.
       *     Сотрудник должен быть в активен.
       */
      employee_id?: number
    }
    VacancyAutoRenewal: {
      auto_renewal?: boolean
    }
    VacancyCreate: {
      /** @description Полный адрес объекта (строка длиной от 1 до 256 символов). Обязательное, если не указаны координаты. */
      address?: string
      administrator_organization_type?: components['schemas']['AdministratorOrganizationType']
      age?: components['schemas']['AgeCriteria']
      /**
       * @description Блок "в том числе для кандидатов" (массив строк)
       *
       *     Возможные значения элементов массива:
       *       - "olderThan45" - старше 45 лет;
       *       - "olderThan14" - от 14 лет;
       *       - "olderThan16" - от 16 лет;
       *       - "withHealthProblems" - с нарушениями здоровья;
       *       - "students" - для студентов;
       *       - "pensioners" - для пенсионеров.
       */
      age_preferences?: (
        'olderThan45' | 'olderThan14' | 'olderThan16' | 'withHealthProblems' | 'students' | 'pensioners'
      )[]
      allow_calls?: components['schemas']['AllowCalls']
      /** @description Возможность откликнуться на вакансию через сайт. Если передается apply_processing, то значение allow_messages будет игнорироваться и равно true. */
      allow_messages?: boolean
      apply_processing?: components['schemas']['ApplyProcessing']
      /**
       * @description Вариант платного размещения
       *
       *     Возможные значения:
       *     - "package" - размещение объявления осуществляется только при наличии подходящего пакета размещения,
       *     при плате только за отклики пакет неограничен.
       * @enum {string}
       */
      billing_type: 'package'
      bonuses?: components['schemas']['Bonuses']
      business_area: components['schemas']['BusinessArea']
      citizenship?: components['schemas']['CitizenshipCriteria']
      construction_work_type?: components['schemas']['ConstructionWorkType']
      contacts?: components['schemas']['Contacts']
      coordinates?: components['schemas']['Coordinates']
      cuisine?: components['schemas']['Cuisine']
      /** @description Название компании (строка длиной до 60 символов) */
      custom_employer_name?: string
      /** @description Способ доставки */
      delivery_method?: ('car' | 'bike' | 'scooter' | 'foot')[] | null
      /** @description Описание вакансии (строка длиной от 1 до 5000 символов) Поддерживает html-тэги `p`, `ul`, `ol`, `li`, `br`, `strong`, `em` */
      description: string
      /** @description Стаж вождения */
      driving_experience?: {
        /** @enum {string} */
        id: 'noExperience' | 'lessThan1' | '1-2' | '3-5' | '6-10' | 'moreThan10'
      } | null
      driving_license_category?: components['schemas']['DrivingLicenseCategory']
      eatery_type?: components['schemas']['EateryType']
      education_level?: components['schemas']['VacancyEducationLevel']
      /**
       * @description employee_id - Идентификатор сотрудника на Авито. Если этот параметр указан, то вакансия будет закреплена за сотрудником и с его баланса в Avito Pro будет списано размещение.
       *     Сотрудник должен быть активен.
       */
      employee_id?: number
      /**
       * @description Занятость <br>
       *     Возможные значения:
       *       - temporary - Временная
       *       - full - Полная
       *       - partial - Частичная
       *
       *     Если ничего не выбрать то будет автоматически проставляться в зависимости от режима работы:
       *     При flexible и partTime, тип занятости - partial.
       *     Для всех остальных full.
       *
       *     deprecated значение internship будет заменено на temporary
       */
      employment: string
      /** @description Опыт работы */
      experience: {
        /** @enum {string} */
        id: 'noMatter' | 'lessThan1' | 'moreThan1' | 'moreThan3' | 'moreThan5' | 'moreThan10'
      }
      facility_type?: components['schemas']['FacilityType']
      food_production_shop_type?: components['schemas']['FoodProductionShopType']
      grade?: components['schemas']['Grade']
      html_tags?: components['schemas']['HtmlTags']
      /** @description URL-адрес логотипа вакансии. Ссылка на файл должна быть прямой | (при переходе не открываются элементы другого сайта (логотипы, кнопки или другие детали интерфейса) и не запрашивается логин и пароль) и доступной для IP 185.89.12.0/22, 146.158.48.0/21, 185.79.237.224/28 и 87.245.204.32/28; */
      image_url?: string
      /** @description Предоставляет ли компания автомобиль */
      is_company_car?: boolean | null
      /**
       * @deprecated
       * @description Удалённая работа. Устарело. Используйте work_format.
       */
      is_remote?: boolean | null
      /** @description Подработка */
      is_side_job?: boolean
      /** @description Должностные обязанности сотрудника. Это нужно для портала «Работа России». (строка длиной от 1 до 3970 символов) */
      job_responsibilities?: string | null
      /** @description Количество рабочих мест по вакансии. Это нужно для портала «Работа России» */
      jobs_number?: number | null
      medical_book?: components['schemas']['MedicalBookVacancy']
      medical_specialization?: components['schemas']['MedicalSpecialization']
      medical_specialization_ids?: components['schemas']['MedicalSpecializationIds']
      /** @description Название вакансии (строка длиной от 1 до 50 символов) */
      name: string
      /**
       * @description Частота выплат<br>
       *     Возможные значения:
       *       - "dailyPay" - Каждый день;
       *       - "biweeklyPay" - Дважды в месяц;
       *       - "weeklyPay" - Раз в неделю;
       *       - "thriceMonthlyPay" - три раза в месяц;
       *       - "monthlyPay" - Раз в месяц.
       *
       *     Для paid_period равным month и week недоступно для выбора dailyPay.
       *
       *     deprecated значение hourlyPay будет заменено на dailyPay
       */
      payout_frequency?: {
        /** @enum {string} */
        id: 'dailyPay' | 'weeklyPay' | 'biweeklyPay' | 'thriceMonthlyPay' | 'monthlyPay'
      }
      profession?: components['schemas']['Profession']
      registration_method?: components['schemas']['RegistrationMethod']
      retail_equipment_type?: components['schemas']['RetailEquipmentType']
      retail_shop_type?: components['schemas']['RetailShopType']
      /**
       * @deprecated
       * @description Зарплата, рублей в месяц, если заполнено вместе с salary_range, то приоритет у salary_range
       */
      salary?: number
      salary_detail?: components['schemas']['SalaryDetail']
      /** @description Блок с вилкой зарплаты, если одновременно с salary, имеет приоритет */
      salary_range?: {
        /**
         * @description Нижняя граница зарплаты, рублей в месяц
         * @example 30000
         */
        from?: number
        /**
         * @description Верхняя граница зарплаты, рублей в месяц
         * @example 60000
         */
        to?: number
      }
      /**
       * @description Режим работы <br>
       *     Возможные значения:
       *       - flyInFlyOut - Вахта
       *       - fixed - Фиксированный
       *       - flexible - Гибкий
       *       - shift - Сменный
       *
       *     deprecated значения fiveDay, sixDay, partTime, fullDay и remote будут заменены на fixed
       *     flyInFlyOut - Вахта, при выборе данного режима работы, адрес вакансии может быть только "Город", если адрес передается полноценный, то улица будет отрезана и адрес будет до "Города".
       */
      schedule: {
        /** @enum {string} */
        id: 'flyInFlyOut' | 'fixed' | 'flexible' | 'shift'
      }
      shifts?: components['schemas']['Shifts']
      tools_availability?: components['schemas']['ToolsAvailability']
      /** @description Внутренний идентификатор вакансии или номер заявки на подбор, максимум 150 символов */
      vacancy_code?: string | null
      vehicle_type?: components['schemas']['VehicleType']
      work_days_per_week?: components['schemas']['WorkDaysPerWeek']
      /**
       * @description Блок "Формат работы" (массив строк)
       *
       *     Возможные значения элементов массива:
       *       - "office" - В офисе или на объекте;
       *       - "remote" - Удалённо;
       *       - "gibrid" - Гибрид;
       *       - "razezdnoi" - Разъездной.
       */
      work_format?: ('office' | 'remote' | 'gibrid' | 'razezdnoi')[]
      work_hours_per_day?: components['schemas']['WorkHoursPerDay']
      worker_class?: components['schemas']['WorkerClass']
    }
    VacancyCreateResult: {
      /** @description Идентификатор добавленной вакансии на сайте. */
      id?: string
      /** @description URL добавленной вакансии. */
      url?: string
      /** @description Идентификатор добавленной вакансии. */
      uuid?: string | null
    }
    /**
     * @description Предпочтительный уровень образования кандидата
     * @example [
     *       "higher"
     *     ]
     * @enum {string|null}
     */
    VacancyEducationLevel: 'notMatter' | 'secondary' | 'higher' | null
    VacancyProlongate: {
      /**
       * @description Вариант платного размещения
       *
       *     Возможные значения:
       *       - "package" - размещение объявления осуществляется только при наличии подходящего пакета размещения,
       *     при плате только за отклики пакет неограничен.
       * @enum {string}
       */
      billing_type: 'package'
      /**
       * @description employee_id - Идентификатор сотрудника на Авито. Если этот параметр указан, то с баланса сотрудника в Avito Pro будет списано размещение.
       *     Сотрудник должен быть в активен.
       */
      employee_id?: number
    }
    /** Мета-информация ответа */
    VacancySearchMeta: {
      /**
       * Номер страницы
       * Format: int32
       * @example 1
       */
      readonly page?: number
      /**
       * Количество страниц
       * Format: int32
       * @example 6
       */
      readonly pages?: number
      /**
       * Количество записей на странице
       * Format: int32
       * @example 25
       */
      readonly per_page?: number
    }
    VacancyStatusesBody: {
      ids: string[]
    }
    VacancyStatusesResult: {
      /** @description Идентификатор публикации вакансии в формате UUID */
      id?: string
      last_action?: {
        /** @description Время события */
        datetime?: string
        /** @description Ошибка в процессе публикации вакансии */
        error?: {
          code?: number
          message?: string
        }
        /** @description Статус процесса публикации вакансии */
        status?: string
      }
      vacancy?: {
        /** @description Идентификатор опубликованной вакансии на Авито */
        id?: number
        /**
         * @description Статус модерации вакансии на Авито. Может отсутствовать, если процесс модерации вакансии еще не начался
         *     <br>
         *     Возможные значения:
         *       - in_progress - вакансия в процессе модерации
         *       - allowed - вакансия разрешена на модерации
         *       - blocked - вакансия заблокирована на модерации
         *       - rejected - вакансия отклонена на модерации
         * @example allowed
         * @enum {string|null}
         */
        moderation_status?: 'in_progress' | 'allowed' | 'blocked' | 'rejected' | null
        /** @description Расширенное описание статуса */
        reasons?: string[] | null
        /**
         * @description Статус вакансии на Авито
         * @enum {string}
         */
        status?: 'created' | 'activated' | 'archived' | 'blocked' | 'closed' | 'expired' | 'rejected' | 'unblocked'
        /** @description URL вакансии */
        url?: string
      }
    }[]
    VacancyUpdate: {
      /** @description Полный адрес объекта (строка длиной от 0 до 256 символов) */
      address?: string
      administrator_organization_type?: components['schemas']['AdministratorOrganizationType']
      age?: components['schemas']['AgeCriteria']
      age_preferences?:
        ('olderThan45' | 'olderThan14' | 'olderThan16' | 'withHealthProblems' | 'students' | 'pensioners')[] | null
      allow_calls?: components['schemas']['AllowCalls']
      /** @description Возможность откликнуться на вакансию через сайт. Если передается apply_processing, то значение allow_messages будет игнорироваться и равно true. */
      allow_messages?: boolean
      apply_processing?: components['schemas']['ApplyProcessing']
      /**
       * @description Вариант платного размещения
       *
       *     Возможные значения:
       *       - "package" - размещение объявления осуществляется только при наличии подходящего пакета размещения,
       *     при плате только за отклики пакет неограничен.
       * @enum {string}
       */
      billing_type: 'package'
      bonuses?: components['schemas']['Bonuses']
      citizenship?: components['schemas']['CitizenshipCriteria']
      construction_work_type?: components['schemas']['ConstructionWorkType']
      contacts?: components['schemas']['Contacts']
      coordinates?: components['schemas']['Coordinates']
      cuisine?: components['schemas']['Cuisine']
      /** @description Название компании (строка длиной до 60 символов) */
      custom_employer_name?: string
      /** @description Способ доставки */
      delivery_method?: ('car' | 'bike' | 'scooter' | 'foot')[] | null
      /** @description Описание вакансии (строка длиной от 1 до 5000 символов) Поддерживает html-тэги `p`, `ul`, `ol`, `li`, `br`, `strong`, `em` */
      description?: string
      /** @description Стаж вождения */
      driving_experience?: {
        /** @enum {string} */
        id: 'noExperience' | 'lessThan1' | '1-2' | '3-5' | '6-10' | 'moreThan10'
      } | null
      driving_license_category?: components['schemas']['DrivingLicenseCategory']
      eatery_type?: components['schemas']['EateryType']
      education_level?: components['schemas']['VacancyEducationLevel']
      /**
       * @description employee_id - Идентификатор сотрудника на Авито.
       *     Сотрудник может редактировать только закрепленные за ним вакансии в Avito Pro.
       *     Сотрудник должен быть в активен.
       */
      employee_id?: number
      /** @description Опыт работы */
      experience?: {
        /** @enum {string} */
        id: 'noMatter' | 'lessThan1' | 'moreThan1' | 'moreThan3' | 'moreThan5' | 'moreThan10'
      }
      facility_type?: components['schemas']['FacilityType']
      food_production_shop_type?: components['schemas']['FoodProductionShopType']
      grade?: components['schemas']['Grade']
      html_tags?: components['schemas']['HtmlTags']
      /** @description URL-адрес логотипа вакансии. Ссылка на файл должна быть прямой | (при переходе не открываются элементы другого сайта (логотипы, кнопки или другие детали интерфейса) и не запрашивается логин и пароль) и доступной для IP 185.89.12.0/22, 146.158.48.0/21, 185.79.237.224/28 и 87.245.204.32/28; */
      image_url?: string
      /** @description Предоставляет ли компания автомобиль */
      is_company_car?: boolean | null
      /**
       * @deprecated
       * @description Удалённая работа. Устарело. Используйте work_format.
       */
      is_remote?: boolean | null
      /** @description Подработка */
      is_side_job?: boolean | null
      /** @description Должностные обязанности сотрудника. Это нужно для портала «Работа России». (строка длиной от 1 до 3970 символов) */
      job_responsibilities?: string | null
      /** @description Количество рабочих мест по вакансии. Это нужно для портала «Работа России» */
      jobs_number?: number | null
      medical_book?: components['schemas']['MedicalBookVacancy']
      medical_specialization?: components['schemas']['MedicalSpecialization']
      medical_specialization_ids?: components['schemas']['MedicalSpecializationIds']
      /** @description Название вакансии (строка длиной от 0 до 50 символов) */
      name?: string
      /**
       * @description Частота выплат
       *     Возможные значения:
       *       - "dailyPay" - Каждый день;
       *       - "biweeklyPay" - Дважды в месяц;
       *       - "weeklyPay" - Раз в неделю;
       *       - "thriceMonthlyPay" - три раза в месяц
       *       - "monthlyPay" - Раз в месяц.
       *
       *     deprecated значение hourlyPay будет заменено на dailyPay
       */
      payout_frequency?: {
        /** @enum {string} */
        id: 'dailyPay' | 'weeklyPay' | 'biweeklyPay' | 'thriceMonthlyPay' | 'monthlyPay'
      } | null
      profession?: components['schemas']['Profession']
      registration_method?: components['schemas']['RegistrationMethod']
      retail_equipment_type?: components['schemas']['RetailEquipmentType']
      retail_shop_type?: components['schemas']['RetailShopType']
      /**
       * @deprecated
       * @description Зарплата, рублей в месяц, если заполнено вместе с salary_range, то приоритет у salary_range
       */
      salary?: number
      salary_detail?: components['schemas']['SalaryDetail']
      /** @description Блок с вилкой зарплаты, если заполнен одновременно с salary, то имеет приоритет */
      salary_range?: {
        /**
         * @description Нижняя граница зарплаты, рублей в месяц
         * @example 30000
         */
        from?: number
        /**
         * @description Верхняя граница зарплаты, рублей в месяц
         * @example 60000
         */
        to?: number
      }
      shifts?: components['schemas']['Shifts']
      tools_availability?: components['schemas']['ToolsAvailability']
      /** @description Внутренний идентификатор вакансии или номер заявки на подбор, максимум 150 символов */
      vacancy_code?: string | null
      vehicle_type?: components['schemas']['VehicleType']
      work_days_per_week?: components['schemas']['WorkDaysPerWeek']
      /**
       * @description Блок "Формат работы" (массив строк)
       *
       *     Возможные значения элементов массива:
       *       - "office" - В офисе или на объекте;
       *       - "remote" - Удалённо;
       *       - "gibrid" - Гибрид;
       *       - "razezdnoi" - Разъездной.
       */
      work_format?: ('office' | 'remote' | 'gibrid' | 'razezdnoi')[]
      work_hours_per_day?: components['schemas']['WorkHoursPerDay']
      worker_class?: components['schemas']['WorkerClass']
    }
    VacancyV2Create: {
      administrator_organization_type?: components['schemas']['AdministratorOrganizationType']
      age?: components['schemas']['AgeCriteria']
      /**
       * @description Блок "в том числе для кандидатов" (массив строк)
       *
       *     Возможные значения элементов массива:
       *       - "olderThan45" - старше 45 лет;
       *       - "olderThan14" - от 14 лет;
       *       - "olderThan16" - от 16 лет;
       *       - "withHealthProblems" - с нарушениями здоровья;
       *       - "students" - для студентов;
       *       - "pensioners" - для пенсионеров.
       */
      age_preferences?: (
        'olderThan45' | 'olderThan14' | 'olderThan16' | 'withHealthProblems' | 'students' | 'pensioners'
      )[]
      apply_processing?: components['schemas']['ApplyProcessing']
      /**
       * @description Вариант платного размещения
       *
       *     Возможные значения:
       *       - "package" - размещение объявления осуществляется только при наличии подходящего пакета размещения,
       *     при плате только за отклики пакет неограничен.
       * @enum {string}
       */
      billing_type: 'package'
      bonuses?: components['schemas']['Bonuses']
      /**
       * @description Идентификатор сферы деятельности
       *     <br>
       *     Получить актуальный список доступных значений можно из справочника `business_area` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
       *     <br>
       */
      business_area?: number | null
      citizenship?: components['schemas']['CitizenshipCriteria']
      construction_work_type?: components['schemas']['ConstructionWorkType']
      /** @description Контактная информация */
      contacts?: {
        allow_calls?: components['schemas']['AllowCalls']
        /** @description Возможность откликнуться на вакансию через сайт. Если передается apply_processing, то значение allow_messages будет игнорироваться и равно true */
        allow_messages?: boolean
        /**
         * @description Email контактного лица по данному объявлению.
         *     Учитывается только при публикации вакансии от имени Сотрудника.
         *     Если не заполнено то при публикации от Сотрудника будет использована почта из Профиля Сотрудника.
         *
         *     При публикации от Компании или Пользователя будет использоваться почта из Профиля, переданное значение будет проигнорировано.
         */
        email?: string | null
        /**
         * @description Имя менеджера, контактного лица по данному объявлению.
         *     Учитывается только при публикации вакансии от имени Сотрудника.
         *     Если не заполнено то при публикации от Сотрудника будет использовано "Имя сотрудника, которое видят пользователи при просмотре объявления".
         *
         *     При публикации от Компании или Пользователя не заполняется, переданное значение будет проигнорировано.
         */
        name?: string | null
        /** @description Контактный телефон, если не передать - подставляется номер из профиля который используется по умолчанию. Если передать номер телефона которого нет в профиле, то он будет добавлен в профиль, но по нему необходимо будет пройти верификацию. Если номер телефона принадлежит другому пользователю, то вакансия не будет опубликована. Если вакансия публикуется от имени сотрудника и номер телефона ему не принадлежит - объявление так же не будет опубликовано. */
        phone?: string
      }
      cuisine?: components['schemas']['Cuisine']
      /** @description Способ доставки */
      delivery_method?: ('car' | 'bike' | 'scooter' | 'foot')[] | null
      /**
       * @description Описание вакансии (строка длиной от 1 до 5000 символов)
       *
       *     Можно использовать HTML-теги в тексте.
       *
       *     Поддерживаемые тэги - `p`, `ul`, `ol`, `li`, `br`, `strong`, `em`
       */
      description?: string | null
      /**
       * @description Стаж вождения
       * @enum {string|null}
       */
      driving_experience?: 'noExperience' | 'lessThan1' | '1-2' | '3-5' | '6-10' | 'moreThan10' | null
      driving_license_category?: components['schemas']['DrivingLicenseCategory']
      eatery_type?: components['schemas']['EateryType']
      education_level?: components['schemas']['VacancyEducationLevel']
      /**
       * @description Занятость <br>
       *     Возможные значения:
       *       - temporary - Временная
       *       - full - Полная
       *       - partial - Частичная
       *
       *     Если ничего не выбрать то будет автоматически проставляться в зависимости от графика работы:
       *     При flexible и partTime, тип занятости - partial.
       *     ßДля всех остальных full.
       *
       *     deprecated значение internship будет заменено на temporary
       */
      employment?: string | null
      /**
       * @description Опыт работы
       * @enum {string|null}
       */
      experience?: 'noMatter' | 'lessThan1' | 'moreThan1' | 'moreThan3' | 'moreThan5' | 'moreThan10' | null
      facility_type?: components['schemas']['FacilityType']
      food_production_shop_type?: components['schemas']['FoodProductionShopType']
      grade?: components['schemas']['Grade']
      /**
       * @description employee_id - Идентификатор сотрудника на Авито. Если этот параметр указан, то с баланса сотрудника в Avito Pro будет списано размещение.
       *     Сотрудник должен быть в активен.
       */
      hierarchy?: {
        /** @description Идентификатор сотрудника на Авито */
        employee_id?: number
      }
      /** @description URL-адрес логотипа вакансии. Ссылка на файл должна быть прямой | (при переходе не открываются элементы другого сайта (логотипы, кнопки или другие детали интерфейса) и не запрашивается логин и пароль) и доступной для IP 185.89.12.0/22, 146.158.48.0/21, 185.79.237.224/28 и 87.245.204.32/28; */
      image_url?: string
      /** @description Предоставляет ли компания автомобиль */
      is_company_car?: boolean | null
      /**
       * @deprecated
       * @description Удалённая работа. Устарело. Используйте work_format.
       */
      is_remote?: boolean | null
      /** @description Подработка */
      is_side_job?: boolean
      /** @description Должностные обязанности сотрудника. Это нужно для портала «Работа России». (строка длиной от 1 до 3970 символов) */
      job_responsibilities?: string | null
      /** @description Количество рабочих мест по вакансии. Это нужно для портала «Работа России» */
      jobs_number?: number | null
      /** @description Геолокация вакансии (как минимум одно из значений) */
      location?: {
        address?: components['schemas']['LocationAddress']
        coordinates?: components['schemas']['Coordinates']
      } | null
      medical_book?: components['schemas']['MedicalBookVacancy']
      medical_specialization?: components['schemas']['MedicalSpecialization']
      medical_specialization_ids?: components['schemas']['MedicalSpecializationIds']
      /**
       * @description Частота выплат <br>
       *     Возможные значения:
       *       - "dailyPay" - Каждый день;
       *       - "biweeklyPay" - Дважды в месяц;
       *       - "weeklyPay" - Раз в неделю;
       *       - "thriceMonthlyPay" - три раза в месяц;
       *       - "monthlyPay" - Раз в месяц.
       *
       *     Для paid_period равным month и week недоступно для выбора dailyPay.
       *
       *     deprecated значение hourlyPay будет заменено на dailyPay
       * @enum {string}
       */
      payout_frequency?: 'dailyPay' | 'weeklyPay' | 'biweeklyPay' | 'thriceMonthlyPay' | 'monthlyPay'
      profession?: components['schemas']['Profession']
      /**
       * @deprecated
       * @description Блок участие вакансии в программах (массив строк)
       *
       *     Если у компании от лица которой создается вакансия нет всех необходимых разрешений на участие,
       *     программа у вакансии не будет включена.
       *
       *     Возможные значения элементов массива:
       *       - "chastyeVyplaty" - Частые выплаты.
       */
      programs?: 'chastyeVyplaty'[]
      registration_method?: components['schemas']['RegistrationMethod']
      retail_equipment_type?: components['schemas']['RetailEquipmentType']
      retail_shop_type?: components['schemas']['RetailShopType']
      /** @description Блок с вилкой зарплаты */
      salary?: {
        /**
         * @description Нижняя граница зарплаты, рублей в месяц
         * @example 30000
         */
        from?: number
        /**
         * @description Верхняя граница зарплаты, рублей в месяц
         * @example 60000
         */
        to?: number
      }
      salary_detail?: components['schemas']['SalaryDetail']
      /**
       * @description Режим работы <br>
       *     Возможные значения:
       *       - flyInFlyOut - Вахта
       *       - fixed - Фиксированный
       *       - flexible - Гибкий
       *       - shift - Сменный
       *
       *     flyInFlyOut - Вахта, при выборе данного режима работы, адрес вакансии может быть только "Город", если адрес передается полноценный, то улица будет отрезана и адрес будет до "Города".
       *
       *     deprecated значения fiveDay, sixDay, partTime, fullDay и remote будут заменены на fixed
       * @enum {string|null}
       */
      schedule?: 'flyInFlyOut' | 'fixed' | 'flexible' | 'shift' | null
      shifts?: components['schemas']['Shifts']
      /** @description Название вакансии (строка длиной от 1 до 50 символов) */
      title?: string | null
      tools_availability?: components['schemas']['ToolsAvailability']
      /** @description Внутренний идентификатор вакансии или номер заявки на подбор, максимум 150 символов */
      vacancy_code?: string | null
      vehicle_type?: components['schemas']['VehicleType']
      work_days_per_week?: components['schemas']['WorkDaysPerWeek']
      /**
       * @description Блок "Формат работы" (массив строк)
       *
       *     Возможные значения элементов массива:
       *       - "office" - В офисе или на объекте;
       *       - "remote" - Удалённо;
       *       - "gibrid" - Гибрид;
       *       - "razezdnoi" - Разъездной.
       */
      work_format?: ('office' | 'remote' | 'gibrid' | 'razezdnoi')[]
      work_hours_per_day?: components['schemas']['WorkHoursPerDay']
      worker_class?: components['schemas']['WorkerClass']
    }
    VacancyV2CreateResult: {
      /**
       * @description Идентификатор добавленной вакансии в формате UUID (в случае дубликата UUID не меняется).
       *     Используется для запросов в ручки:
       *     - [Получение статуса публикации вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyGetStatuses)
       *     - [Редактирование вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyUpdateV2)
       */
      id?: string
    }
    /**
     * @description На какой технике предстоит работать кандитату, от выбора техники зависит какие категории прав можно будет указать в вакансии
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `vehicle_type` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     *     <br>
     *     Статичный [справочник](https://www.avito.st/s/openapi/catalog-vehicle-type.xml) объявлен устаревшим и более не будет использоваться.
     *     <br>
     *     Используется только для профессий
     *      - Водитель пассажирского транспорта
     *      - Водитель грузового транспорта
     *      - Водитель спецтехники
     *      - Машинист спецтехники
     *     <br>
     */
    VehicleType: number | null
    WebhookSubscribeRequestBody: {
      /**
       * @description секретный ключ
       * @example cb1e150b-c5bf-4c3e-acd1-20ec88bdb3a1
       */
      secret: string
      /**
       * Format: uri
       * @description URL на который будут отправляться уведомления
       * @example https://mysite.webhook/
       */
      url: string
    }
    WebhooksSubscriptionResultList: {
      /** @description список вебхуков */
      webhooks: components['schemas']['WebhookSubscribeRequestBody'][]
    }
    /**
     * @description Количество рабочих дней в неделю
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `work_days_per_week` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     *     <br>
     *     Доступен только для режима работы (schedule) равным "Гибкий (flexible)"
     */
    WorkDaysPerWeek: number[] | null
    /**
     * @description Количество рабочих часов в день
     *     <br>
     *     Получить актуальный список доступных значений можно из справочника `work_hours_per_day` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID).
     *     <br>
     *     Для режима работы (schedule) равным "Вахта (flyInFlyOut)" недоступны значения "13–15 часов", "Больше 15 часов"
     *     <br>
     *     Для типа занятости (employment) равным "Полная (full)" недоступны значения "До 4 часов", "4–5 часов"
     *     <br>
     *     Для типов занятости (employment) равным "Временная (temporary)", "Частичная (partial)" недоступно значение "Больше 15 часов"
     */
    WorkHoursPerDay: number[] | null
    /**
     * @description Предпочтительный разряд кандидата
     *     <br>
     *     Возможные значения элементов массива:
     *       - "1" - Первый;
     *       - "2" - Второй;
     *       - "3" - Третий;
     *       - "4" - Четвертый;
     *       - "5andHigher" - Пятый и выше;
     *       - "notNeeded" - Не требуется.
     * @example [
     *       "1"
     *     ]
     */
    WorkerClass: ('1' | '2' | '3' | '4' | '5andHigher' | 'notNeeded')[] | null
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
    badRequestError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 400
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Bad Request
         */
        message: string
      }
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
    purchasingError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 402
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Payment required
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
    serviceUnavailableError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 503
         */
        code: number
        /**
         * @description Описание ошибки
         * @example Service temporarily unavailable. Please, contact support
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
        /** @description Информация об ошибке валидации параметров в формате ключ-значение */
        fields?: Record<string, never> | null
        /**
         * @description Сообщение об ошибке
         * @example Validation error
         */
        message: string
      }
    }
    verificationNeededError: {
      error?: {
        /**
         * Format: int32
         * @description Код ошибки
         * @example 403
         */
        code: number
        /**
         * @description Сообщение об ошибке
         * @example Verification required
         */
        message: string
      }
    }
  }
  responses: never
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
    /** @description Идентификатор словаря */
    pathDictionaryId: string
    /** @description Идентификатор вакансии на сайте */
    pathVacancyId: number
    /**
     * @description UUID Идентификатор вакансии для V2 ручек
     *     (возвращается ручкой [Публикация вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyCreateV2) )
     */
    pathVacancyUUID: string
    /** @description URL, на который отправляются уведомления */
    webhookUrl: string
  }
  requestBodies: never
  headers: {
    /** @description Установленное ограничение на число запросов в минуту */
    'X-RateLimit-Limit': number
    /** @description Доступно оставшиеся количество запросов в текущем временном окне */
    'X-RateLimit-Remaining': number
  }
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  applicationsApplyActions: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник может менять статусы откликов для вакансий которые он разместил в рамках компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник может менять статусы откликов для вакансий которые он разместил в рамках компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ApplicationsApplyActionsRequestBody']
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
        content?: never
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
    }
  }
  applicationsGetByIds: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник может получить информацию по откликам для вакансий которые он разместил в рамках компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник может получить информацию по откликам для вакансий которые он разместил в рамках компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "ids": [
         *         "6a59fc8d59237327aa2dcfd8"
         *       ]
         *     }
         */
        'application/json': {
          ids: string[]
        }
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "applies": [
           *         {
           *           "applicant": {
           *             "data": {
           *               "birthday": "1982-06-07",
           *               "citizenship": "Россия",
           *               "full_name": {
           *                 "first_name": "Иван",
           *                 "last_name": "Иванов",
           *                 "patronymic": "Иванович"
           *               },
           *               "gender": "Мужской",
           *               "name": "Иванов Иван Иванович"
           *             },
           *             "id": "710723689",
           *             "resume_id": "52282551484"
           *           },
           *           "contacts": {
           *             "chat": {
           *               "value": "u2i-0mSKNtVvcEaAPctc5Jp8nw"
           *             },
           *             "phones": [
           *               {
           *                 "status": null,
           *                 "value": "72004629161"
           *               }
           *             ]
           *           },
           *           "created_at": "2026-07-17T12:57:12.38374+03:00",
           *           "employee_id": 710706272,
           *           "enriched_properties": {
           *             "age": {
           *               "matching_status": "matched",
           *               "value": 44
           *             },
           *             "citizenship": {
           *               "matching_status": "matched",
           *               "value": "rus"
           *             },
           *             "experience": {
           *               "matching_status": "matched",
           *               "value": "has_experience"
           *             },
           *             "full_name": {
           *               "matching_status": "no_criteria",
           *               "value": "Иванов Иван Иванович"
           *             },
           *             "phone": {
           *               "matching_status": "no_criteria",
           *               "value": "+72004629161"
           *             },
           *             "status": "completed_matched"
           *           },
           *           "id": "6a59fc8d59237327aa2dcfd8",
           *           "is_viewed": true,
           *           "negotiation_id": 366626710,
           *           "price": {
           *             "bonus": 0,
           *             "real": 7300,
           *             "total": 7300
           *           },
           *           "state": "interview",
           *           "type": "by_chat",
           *           "updated_at": "2026-07-17T10:31:10Z",
           *           "vacancy_id": 52282438230
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['GetApplicationsByIdsResult']
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
    }
  }
  applicationsGetIds: {
    parameters: {
      query?: {
        /** @description Фильтр по дате обновления (от). Обязателен, если не указан updatedAtFrom. Формат YYYY-MM-DD. */
        updatedAtFrom?: string
        /** @description Фильтр по дате создания (от). Обязателен, если не указан createdAtFrom. Формат YYYY-MM-DD. */
        createdAtFrom?: string
        /**
         * @description <p>Идентификатор последнего отклика из предыдущего запроса</p>
         *
         *     <p>Пример использования параметра:</p>
         *
         *     <p>Получение первой страницы откликов, с датой обновления от 12 июня 2022 года:</p>
         *
         *     <p><code>GET /job/v1/applications/get_ids?updatedAtFrom=2022-06-12</code></p>
         *
         *     <p><code>[<br>
         *       &nbsp{"id": "62e3e7e542c3d9af3d85205e",<...>},<br>
         *       &nbsp<...>,<br>
         *       &nbsp{"id": "<strong>623850d1d3819d935dd02702</strong>",<...>}<br>
         *     ]</code></p>
         *
         *     <p>Получение следующей страницы откликов:</p>
         *
         *     <p><code>GET /job/v1/applications/get_ids?updatedAtFrom=2022-06-12&cursor=<strong>623850d1d3819d935dd02702</strong></code></p>
         */
        cursor?: string
        /** @description Идентификаторы вакансий. Опциональный фильтр (можно указать одно или несколько значений через запятую) */
        vacancyIds?: string
        /** @description Отклик просмотрен */
        is_viewed?: boolean
        /** @description Статус отклика. Опциональный фильтр по текущему статусу отклика */
        state?: string
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник может получить список его откликов для вакансий которые он разместил в рамках компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник может получить список его откликов для вакансий которые он разместил в рамках компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetApplicationsIdsResult']
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
    }
  }
  applicationsGetStates: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Получение списка возможных статусов откликов.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Получение списка возможных статусов откликов. */
        'X-Employee-Of'?: number | null
      }
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
           *       "states": [
           *         {
           *           "description": "Новый кандидат",
           *           "slug": "new"
           *         },
           *         {
           *           "description": "Может подойти",
           *           "slug": "inprocess"
           *         },
           *         {
           *           "description": "Собеседование",
           *           "slug": "interview"
           *         },
           *         {
           *           "description": "Приглашение на работу",
           *           "slug": "selected"
           *         },
           *         {
           *           "description": "Отказ",
           *           "slug": "rejected"
           *         },
           *         {
           *           "description": "Архив",
           *           "slug": "archive"
           *         }
           *       ]
           *     }
           */
          'application/json': components['schemas']['ApplicationsGetStatesResult']
        }
      }
      /** @description Ошибка в теле запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequest']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Ошибка оплаты */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaymentError']
        }
      }
      /** @description Получение данных по откликам недоступно */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Данные по откликам не найдены */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['NotFoundError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  applicationsSetIsViewed: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Предоставляет возможность менять статус отклика от имени сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Предоставляет возможность менять статус отклика от имени сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Список откликов */
          applies?: {
            /**
             * @description Идентификатор отклика
             * @example 11102026de0ad1be10e2236f
             */
            id: string
            /** @description Фильтр откликов по статусу просмотренности */
            is_viewed: boolean
          }[]
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
          'application/json': components['schemas']['SetApplicationsIsViewedResult']
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
    }
  }
  applicationsWebhookGet: {
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
          'application/json': components['schemas']['WebhookSubscribeRequestBody']
        }
      }
    }
  }
  applicationsWebhookPut: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['WebhookSubscribeRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['WebhookSubscribeRequestBody']
        }
      }
    }
  }
  applicationsWebhookDelete: {
    parameters: {
      query?: {
        /** @description URL, на который отправляются уведомления */
        url?: components['parameters']['webhookUrl']
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
          'application/json': {
            /** @example true */
            ok?: boolean
          }
        }
      }
    }
  }
  applicationsWebhooksGet: {
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
          'application/json': components['schemas']['WebhooksSubscriptionResultList']
        }
      }
    }
  }
  resumesGet: {
    parameters: {
      query?: {
        /** @description Количество записей на странице (положительное число от 1 до 100) */
        per_page?: number
        /** @description Номер страницы (положительное число больше 0, произведение page на per_page не должно превышать 5000) */
        page?: number
        /** @description Курсор поиска (если не указан, будет начат новый поиск и его курсор будет возвращен в ответе) */
        cursor?: number
        /** @description Поля ответа (можно указать несколько значений через запятую) */
        fields?:
          | 'title'
          | 'location'
          | 'specialization'
          | 'education_level'
          | 'total_experience'
          | 'gender'
          | 'age'
          | 'salary'
          | 'address_details'
          | 'is_purchased'
          | 'created_at'
          | 'updated_at'
          | 'nationality'
          | 'driver_licence'
          | 'driver_licence_category'
          | 'driving_experience'
          | 'own_transport'
          | 'medical_book'
        /** @description Поисковая фраза */
        query?: string
        /**
         * @description Идентификатор региона поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущностей Region и City из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        location?: number
        /**
         * @description Идентификатор метро поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущности Subway из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        metro?: number
        /**
         * @description Идентификатор района поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущности District из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        district?: number
        /** @description Радиус поиска */
        radius?: {
          /**
           * Format: int32
           * @description Максимальное расстояние от центра в метрах, значение от 0 до 100_000
           */
          maxDistance: number
          /**
           * Format: int32
           * @description Минимальное расстояние от центра в метрах, значение от 0 до 10_000
           */
          minDistance: number
          /** @description Географические координаты (для указания точки на карте), в градусах — десятичные дроби */
          point: {
            /**
             * Format: float
             * @description Широта, значение от -90.0 до 90.0
             * @example 55.822883
             */
            lat: number
            /**
             * Format: float
             * @description Долгота, значение от -180.0 до 180.0
             * @example 37.606281
             */
            lon: number
          }
        }
        /**
         * @description Идентификатор сферы деятельности (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - 10166 - IT, интернет, телеком
         *     - 10167 - Медицина, фармацевтика
         *     - 10168 - Продажи
         *     - 10169 - Страхование
         *     - 10170 - Транспорт, логистика
         *     - 10171 - Образование, наука
         *     - 10172 - Строительство
         *     - 10173 - Туризм, рестораны
         *     - 10174 - Фитнес, салоны красоты
         *     - 10175 - Без опыта, студенты
         *     - 10180 - Автомобильный бизнес
         *     - 10181 - Бухгалтерия, финансы
         *     - 10182 - Высший менеджмент
         *     - 10183 - Госслужба, НКО
         *     - 10184 - ЖКХ, эксплуатация
         *     - 10185 - Искусство, развлечения
         *     - 10186 - Консультирование
         *     - 10187 - Маркетинг, реклама, PR
         *     - 10188 - Охрана, безопасность
         *     - 10189 - Управление персоналом
         *     - 10190 - Юриспруденция
         *     - 10191 - Административная работа
         *     - 10192 - Банки, инвестиции
         *     - 10193 - Производство, сырьё, с/х
         *     - 16844 - Домашний персонал
         *     - 2804251 - Курьерская доставка
         *     - 2804250 - Такси
         */
        specialization?: number
        /**
         * @description График работы (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - partial-day - Неполный рабочий день
         *     - full-day - Полный рабочий день
         *     - fly-in-fly-out - Вахтовый метод
         *     - flexible - Гибкий график
         *     - shift - Сменный график
         *     - remote - Удаленная работа
         */
        schedule?: 'partial-day' | 'full-day' | 'fly-in-fly-out' | 'flexible' | 'shift' | 'remote'
        /**
         * @description Готовность к командировкам (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - ready - Готов
         *     - never - Не готов
         *     - sometimes - Иногда
         */
        business_trip_readiness?: 'ready' | 'never' | 'sometimes'
        /**
         * @description Готовность к переезду (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - possible - Возможен
         *     - never - Невозможен
         */
        relocation_readiness?: 'possible' | 'never'
        /**
         * @description Пол (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - female - Женщина
         *     - male - Мужчина
         */
        gender?: 'female' | 'male'
        /** @description Минимальный возраст (включительно, положительное число от 14 до 99) */
        age_min?: number
        /** @description Максимальный возраст (включительно, положительное число от 18 до 99) */
        age_max?: number
        /**
         * @description Уровень образования (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *     - higher - Высшее
         *     - unfinished-higher - Неоконченное высшее
         *     - secondary - Среднее
         *     - special-secondary - Среднее специальное
         */
        education_level?: 'higher' | 'unfinished-higher' | 'secondary' | 'special-secondary'
        /** @description Минимальный стаж работы (включительно, положительное число от 0 до 50) */
        experience_min?: number
        /** @description Максимальный стаж работы (включительно, положительное число от 0 до 50) */
        experience_max?: number
        /** @description Минимальный размер заработной платы (включительно, положительное число) */
        salary_min?: number
        /** @description Максимальный размер заработной платы (включительно, положительное число) */
        salary_max?: number
        /** @description Дата последнего обновления (от updated_at до текущей даты) */
        updated_at?: string
        /** @description Дата последнего обновления (от updated_at) */
        updated_from?: string
        /** @description Дата последнего обновления (до updated_at) */
        updated_to?: string
        /**
         * @description Идентификатор гражданства(можно указать несколько значений через запятую)</br>
         *     см. идентификаторы гражданства в [справочнике](https://www.avito.st/s/openapi/catalog_nationality.xml)</br>
         *     Распространенные значения:
         *     - 15973 - Россия
         *     - 15974 - Украина
         *     - 15975 - Белоруссия
         *     - 15979 - Азербайджан
         *     - 15985 - Армения
         *     - 16020 - Грузия
         *     - 15976 - Казахстан
         *     - 16046 - Киргизия
         *     - 16082 - Молдавия
         *     - 16129 - Таджикистан
         *     - 16140 - Узбекистан
         */
        nationality?: number
        /**
         * @description Водительское удостоверение
         *     <br>
         *     Возможные значения:
         *     - yes - Удостоверение есть
         *     - no - Удостоверения нет
         */
        driver_licence?: 'yes' | 'no'
        /**
         * @description Категория водительского удостоверения (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *       - a
         *       - b
         *       - be
         *       - c
         *       - ce
         *       - d
         *       - de
         *       - m
         *       - tm
         *       - tb
         */
        driver_licence_category?: 'a' | 'b' | 'be' | 'c' | 'ce' | 'd' | 'de' | 'm' | 'tm' | 'tb'
        /**
         * @description Стаж вождения (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *       - less-than-three-years - Стаж вождения меньше трех лет
         *       - more-than-three-years - Стаж вождения больше трех лет
         */
        driving_experience?: 'less-than-three-years' | 'more-than-three-years'
        /**
         * @description Свой транспорт (можно указать несколько значений через запятую)
         *     <br>
         *     Возможные значения:
         *       - no - Нет
         *       - car - Легковое авто
         *       - cargo-car - Грузовое авто
         *       - bike - Мотоцикл
         *       - scooter - Мопед
         */
        own_transport?: 'no' | 'car' | 'cargo-car' | 'bike' | 'scooter'
        /**
         * @description Медкнижка
         *     <br>
         *     Возможные значения:
         *       - yes - Медкнижка есть
         *       - no - Медкнижки нет
         */
        medical_book?: 'yes' | 'no'
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника. */
        'X-Employee-Of'?: number | null
      }
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
           *       "meta": {
           *         "cursor": 1538480436,
           *         "page": 1,
           *         "pages": 6,
           *         "per_page": 25
           *       },
           *       "resumes": [
           *         {
           *           "address_details": {
           *             "address": "пос. Подольской машинно-испытательной станции, 17",
           *             "coordinates": {
           *               "latitude": 55.34384,
           *               "longitude": 37.557215
           *             },
           *             "district": "",
           *             "location": "Подольск",
           *             "metro": ""
           *           },
           *           "age": 24,
           *           "created_at": "2026-04-20T16:23:46",
           *           "education_level": "secondary",
           *           "gender": "female",
           *           "id": 8095642848,
           *           "is_purchased": false,
           *           "location": {
           *             "id": 639180,
           *             "title": "пос. Подольской машинно-испытательной станции, 17"
           *           },
           *           "medical_book": "yes",
           *           "nationality": {
           *             "id": 15973,
           *             "title": "Россия"
           *           },
           *           "specialization": {
           *             "id": 10174,
           *             "title": "Фитнес, салоны красоты"
           *           },
           *           "title": "Массажистка",
           *           "total_experience": 0,
           *           "updated_at": "2026-04-20T16:23:46"
           *         }
           *       ]
           *     }
           */
          'application/json': {
            meta?: components['schemas']['ResumeSearchMeta']
            /** Список резюме */
            resumes?: components['schemas']['SimplifiedResume'][]
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  resumeGetContacts: {
    parameters: {
      query?: {
        /** @description Идентификатор сотрудника компании в рамках иерархии аккаунтов. Используется для возможности списать контакт с лимита на покупку резюме для указанного сотрудника. */
        employee_id?: number | null
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может получить информацию о резюме приобретенных компанией.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может получить информацию о резюме приобретенных компанией. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор резюме */
        resume_id: number
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
          /**
           * @example {
           *       "already_bought": true,
           *       "contacts": [
           *         {
           *           "type": "phone",
           *           "value": "8 958 461-80-39"
           *         },
           *         {
           *           "type": "e-mail",
           *           "value": "ivanov@email.ru"
           *         },
           *         {
           *           "type": "chat_id",
           *           "value": "u2i-ugpbZyw~GsG0i6y2J6XyVg"
           *         }
           *       ],
           *       "name": "Иванов Иван Иванович"
           *     }
           */
          'application/json': components['schemas']['ResumeContacts']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Требуется пополнение пакета просмотров резюме */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['purchasingError']
        }
      }
      /** @description Требуется верификация работодателя */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['purchasingError']
        }
      }
      /** @description Резюме не найдено */
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyCreate: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Вакансия будет публиковаться от имени сотрудника компании, к которой он привязан.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Вакансия будет публиковаться от имени сотрудника компании, к которой он привязан. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "address": "Москва, Лесная улица, 7",
         *       "administrator_organization_type": 10116,
         *       "age": {
         *         "from": 18,
         *         "to": 65
         *       },
         *       "age_preferences": [
         *         "olderThan45"
         *       ],
         *       "allow_calls": true,
         *       "allow_messages": true,
         *       "apply_processing": {
         *         "additional_questions": [
         *           "experience"
         *         ],
         *         "apply_type": "only_with_resume"
         *       },
         *       "billing_type": "package",
         *       "bonuses": [
         *         "pitanie",
         *         "prozivanie"
         *       ],
         *       "business_area": 7,
         *       "citizenship": [
         *         "rus"
         *       ],
         *       "construction_work_type": [
         *         "paintingWorks"
         *       ],
         *       "contacts": {
         *         "email": "ivalerevich@company.ru",
         *         "name": "Игорь Валерьевич",
         *         "phone": {
         *           "city": "800",
         *           "country": "8",
         *           "number": "1001159"
         *         }
         *       },
         *       "coordinates": {
         *         "latitude": 55.755814,
         *         "longitude": 37.617635
         *       },
         *       "cuisine": [
         *         "russian"
         *       ],
         *       "custom_employer_name": "ООО Ромашка",
         *       "delivery_method": [
         *         "car"
         *       ],
         *       "description": "Доставка заказов по району, свободный график",
         *       "driving_experience": {
         *         "id": "noExperience"
         *       },
         *       "driving_license_category": [
         *         "A"
         *       ],
         *       "eatery_type": [
         *         "cafe"
         *       ],
         *       "education_level": "higher",
         *       "employment": "temporary",
         *       "experience": {
         *         "id": "noMatter"
         *       },
         *       "facility_type": [
         *         "production"
         *       ],
         *       "food_production_shop_type": [
         *         "cold"
         *       ],
         *       "grade": "lead",
         *       "html_tags": true,
         *       "image_url": "https://example.com/vacancy/courier.jpg",
         *       "is_company_car": true,
         *       "is_side_job": true,
         *       "job_responsibilities": "Доставлять заказы клиентам и передавать отчетность в приложении",
         *       "jobs_number": 3,
         *       "medical_book": "registerByCandidate",
         *       "medical_specialization_ids": [
         *         3265936
         *       ],
         *       "name": "Курьер на личном автомобиле",
         *       "payout_frequency": {
         *         "id": "monthlyPay"
         *       },
         *       "profession": 3201667,
         *       "registration_method": [
         *         "contract"
         *       ],
         *       "retail_equipment_type": [
         *         "cashRegisterAndPosTerminals"
         *       ],
         *       "retail_shop_type": [
         *         "hypermarketOrSupermarket"
         *       ],
         *       "salary_detail": {
         *         "base": {
         *           "bonus": "5% от продаж в месяц",
         *           "range": {
         *             "from": 30000,
         *             "to": 60000
         *           }
         *         },
         *         "paid_period": "month",
         *         "taxes": "gross"
         *       },
         *       "salary_range": {
         *         "from": 30000,
         *         "to": 60000
         *       },
         *       "schedule": {
         *         "id": "flexible"
         *       },
         *       "tools_availability": "needYourOwn",
         *       "vacancy_code": "COURIER-2026-01",
         *       "vehicle_type": 3286367,
         *       "work_days_per_week": [
         *         5
         *       ],
         *       "work_format": [
         *         "office"
         *       ],
         *       "work_hours_per_day": [
         *         8
         *       ],
         *       "worker_class": [
         *         "1"
         *       ]
         *     }
         */
        'application/json': components['schemas']['VacancyCreate']
      }
    }
    responses: {
      /** @description Успешный ответ */
      201: {
        headers: {
          /** @description Заголовок будет содержать ссылку на добавленную вакансию. */
          Location?: string
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "id": "52282511259",
           *       "url": "/52282511259",
           *       "uuid": "09d4823a-8c0b-41dc-b2c3-2752a6b8f1b6"
           *     }
           */
          'application/json': components['schemas']['VacancyCreateResult']
        }
      }
      /** @description Ошибка в поле вакансии */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequest']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Ошибка оплаты */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaymentError']
        }
      }
      /** @description Создание вакансий недоступно */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreationForbiddenError']
        }
      }
      /** @description Ресурс не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['NotFoundError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyArchive: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может остановить публикацию только для своих вакансий.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может остановить публикацию только для своих вакансий. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии на сайте */
        vacancy_id: components['parameters']['pathVacancyId']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        /**
         * @example {
         *       "employee_id": 12342348
         *     }
         */
        'application/json': components['schemas']['VacancyArchive']
      }
    }
    responses: {
      /** @description Успешный ответ */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка в поле запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequest']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Ошибка оплаты */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaymentError']
        }
      }
      /** @description Остановка публикации вакансий недоступно */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StoppingForbiddenError']
        }
      }
      /** @description Вакансия не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ItemNotFoundError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyUpdate: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может редактировать только свои вакансии.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может редактировать только свои вакансии. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии на сайте */
        vacancy_id: components['parameters']['pathVacancyId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "address": "Москва, Лесная улица, 7",
         *       "administrator_organization_type": 10116,
         *       "age": {
         *         "from": 18,
         *         "to": 65
         *       },
         *       "age_preferences": [
         *         "olderThan45"
         *       ],
         *       "allow_calls": true,
         *       "allow_messages": true,
         *       "apply_processing": {
         *         "additional_questions": [
         *           "experience"
         *         ],
         *         "apply_type": "only_with_resume"
         *       },
         *       "billing_type": "package",
         *       "bonuses": [
         *         "pitanie",
         *         "prozivanie"
         *       ],
         *       "citizenship": [
         *         "rus"
         *       ],
         *       "construction_work_type": [
         *         "paintingWorks"
         *       ],
         *       "contacts": {
         *         "email": "ivalerevich@company.ru",
         *         "name": "Игорь Валерьевич",
         *         "phone": {
         *           "city": "800",
         *           "country": "8",
         *           "number": "1001159"
         *         }
         *       },
         *       "coordinates": {
         *         "latitude": 55.755814,
         *         "longitude": 37.617635
         *       },
         *       "cuisine": [
         *         "russian"
         *       ],
         *       "custom_employer_name": "ООО Ромашка",
         *       "delivery_method": [
         *         "car"
         *       ],
         *       "description": "Доставка заказов по району, свободный график",
         *       "driving_experience": {
         *         "id": "noExperience"
         *       },
         *       "driving_license_category": [
         *         "A"
         *       ],
         *       "eatery_type": [
         *         "cafe"
         *       ],
         *       "education_level": "higher",
         *       "experience": {
         *         "id": "noMatter"
         *       },
         *       "facility_type": [
         *         "production"
         *       ],
         *       "food_production_shop_type": [
         *         "cold"
         *       ],
         *       "grade": "lead",
         *       "html_tags": true,
         *       "image_url": "https://example.com/vacancy/courier.jpg",
         *       "is_company_car": true,
         *       "is_side_job": true,
         *       "job_responsibilities": "Доставлять заказы клиентам и передавать отчетность в приложении",
         *       "jobs_number": 3,
         *       "medical_book": "registerByCandidate",
         *       "medical_specialization_ids": [
         *         3265936
         *       ],
         *       "name": "Курьер на личном автомобиле",
         *       "payout_frequency": {
         *         "id": "monthlyPay"
         *       },
         *       "profession": 3201667,
         *       "registration_method": [
         *         "contract"
         *       ],
         *       "retail_equipment_type": [
         *         "cashRegisterAndPosTerminals"
         *       ],
         *       "retail_shop_type": [
         *         "hypermarketOrSupermarket"
         *       ],
         *       "salary_detail": {
         *         "base": {
         *           "bonus": "5% от продаж в месяц",
         *           "range": {
         *             "from": 30000,
         *             "to": 60000
         *           }
         *         },
         *         "paid_period": "month",
         *         "taxes": "gross"
         *       },
         *       "salary_range": {
         *         "from": 30000,
         *         "to": 60000
         *       },
         *       "tools_availability": "needYourOwn",
         *       "vacancy_code": "COURIER-2026-01",
         *       "vehicle_type": 3286367,
         *       "work_days_per_week": [
         *         5
         *       ],
         *       "work_format": [
         *         "office"
         *       ],
         *       "work_hours_per_day": [
         *         8
         *       ],
         *       "worker_class": [
         *         "1"
         *       ]
         *     }
         */
        'application/json': components['schemas']['VacancyUpdate']
      }
    }
    responses: {
      /** @description Успешный ответ */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка в поле вакансии */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequest']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Ошибка оплаты */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaymentError']
        }
      }
      /** @description Редактирование вакансий недоступно */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EditingForbiddenError']
        }
      }
      /** @description Редактируемая вакансия не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ItemNotFoundError']
        }
      }
      /** @description Конфликт при редактировании вакансии */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ConflictError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyProlongate: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может реактивировать только свою вакансию.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может реактивировать только свою вакансию. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии на сайте */
        vacancy_id: components['parameters']['pathVacancyId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "billing_type": "package",
         *       "employee_id": 12342348
         *     }
         */
        'application/json': components['schemas']['VacancyProlongate']
      }
    }
    responses: {
      /** @description Успешный ответ */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка в поле вакансии */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequestShort']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Ошибка оплаты */
      402: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaymentError']
        }
      }
      /** @description Активация вакансий недоступна */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ActivationForbiddenError']
        }
      }
      /** @description Вакансия не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ItemNotFoundError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  resumeGetItem: {
    parameters: {
      query?: {
        /** @description Поля основного тела ответа (можно указать несколько значений через запятую). По умолчанию отображаются все поля. */
        fields?:
          | 'address_details'
          | 'description'
          | 'is_active'
          | 'is_purchased'
          | 'salary'
          | 'start_time'
          | 'title'
          | 'update_time'
          | 'url'
        /** @description Дополнительные поля, которые входят в params (можно указать несколько значений через запятую). По умолчанию отображаются все поля. */
        params?:
          | 'ability_to_business_trip'
          | 'address'
          | 'age'
          | 'business_area'
          | 'driver_licence'
          | 'driver_licence_category'
          | 'education'
          | 'education_list'
          | 'experience'
          | 'experience_list'
          | 'language_list'
          | 'moving'
          | 'nationality'
          | 'pol'
          | 'razreshenie_na_rabotu_v_rossii'
          | 'schedule'
        /** @description Признак того, нужно ли отдавать картинки, по умолчанию false */
        photos?: boolean
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника, получает доступ к резюме от имени компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника, получает доступ к резюме от имени компании. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор резюме */
        resume_id: number
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
          /**
           * @example {
           *       "address_details": {
           *         "address": "Воронеж",
           *         "coordinates": {
           *           "latitude": 51.660781,
           *           "longitude": 39.200296
           *         },
           *         "district": "Ленинский",
           *         "location": "Воронеж",
           *         "metro": ""
           *       },
           *       "description": "информация о себе",
           *       "id": 52282551484,
           *       "is_active": true,
           *       "is_purchased": true,
           *       "params": {
           *         "ability_to_business_trip": "Готов",
           *         "address": "Воронеж",
           *         "age": 44,
           *         "business_area": "Строительство",
           *         "driver_licence": "Есть",
           *         "driver_licence_category": [
           *           "B",
           *           "C"
           *         ],
           *         "education": "Высшее",
           *         "education_list": [
           *           {
           *             "education_stop": "2018",
           *             "institution": "Воронежский государственный университет",
           *             "specialty": "архитектор"
           *           }
           *         ],
           *         "experience": 5,
           *         "experience_list": [
           *           {
           *             "company": "Авито",
           *             "position": "QA инженер",
           *             "responsibilities": "обязанности на работе",
           *             "work_finish": "2019-11-01",
           *             "work_start": "2014-06-01"
           *           }
           *         ],
           *         "moving": "Возможен",
           *         "nationality": "Россия",
           *         "pol": "Мужской",
           *         "schedule": "Полный день"
           *       },
           *       "salary": 40000,
           *       "start_time": "2026-07-17T09:57:03Z",
           *       "title": "Строитель",
           *       "update_time": "2026-07-17T10:16:02Z",
           *       "url": "/voronezh/rezume/stroitel_52282551484"
           *     }
           */
          'application/json': components['schemas']['Resume2.0']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['badRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Резюме не найдено */
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  searchVacancy: {
    parameters: {
      query?: {
        /** @description Количество записей на странице (положительное число от 10 до 100) */
        per_page?: number
        /** @description Номер страницы (положительное число больше 0, произведение page на per_page не должно превышать 5000) */
        page?: number
        /**
         * @description Идентификатор региона поиска (можно указать несколько значений через запятую)
         *     <br>
         *     Метод принимает идентификаторы сущностей Region и City из [справочника](https://autoload.avito.ru/format/Locations.xml).
         */
        location?: number
        /** @description Идентификатор сферы деятельности  <br> Получить актуальный список доступных значений можно из справочника `business_area` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> Статичный [справочник](https://www.avito.st/s/openapi/catalog-business-area.xml) объявлен устаревшим и более не будет использоваться.  <br> */
        business_area?: number
        /** @description Формат работы (можно указать несколько значений через запятую) <br> Получить актуальный список доступных значений можно из справочника `work_format` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        work_format?: string
        /** @description Режим работы (можно указать несколько значений через запятую) <br> Получить актуальный список доступных значений можно из справочника `schedules` через метод [getDictByID](/api-catalog/job/documentation#operation/getDictByID). <br> */
        schedule?: string
        /** @description Хеш работодателя (можно указать несколько значений через запятую, но не более 100) <br> Хеш работодателя возвращается в поле `employer_id` вакансий в ответе этого метода. <br> */
        employer_ids?: string
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
           *       "meta": {
           *         "page": 1,
           *         "pages": 100,
           *         "per_page": 25
           *       },
           *       "vacancies": [
           *         {
           *           "addressDetails": {
           *             "address": "Москва, улица Свободы, 16, подъезд 1",
           *             "city": "Москва"
           *           },
           *           "businessArea": "Архитектура и дизайн",
           *           "companyName": "Работодатель",
           *           "link": "https://avito.ru/moskva/vakansii/fasovschiki_upakovschiki_komplektovschiki_139490_5228279016",
           *           "profession": "Официант",
           *           "seller_id": "21f16e21a2ecc2f3ec7f8b76d8022f3b",
           *           "title": "Название вакансии"
           *         }
           *       ]
           *     }
           */
          'application/json': {
            meta?: components['schemas']['VacancySearchMeta']
            /** Список вакансий */
            vacancies?: components['schemas']['SimplifiedVacancy'][]
          }
        }
      }
      /** @description Отсутствуют данные по запросу */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            error?: {
              /**
               * Format: int32
               * @description Код ошибки
               * @example 403
               */
              code?: number
              /**
               * @description Текст ошибки
               * @example Forbidden
               */
              message?: string
            }
          }
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyCreateV2: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Вакансия будет публиковаться от имени сотрудника компании, к которой он привязан.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Вакансия будет публиковаться от имени сотрудника компании, к которой он привязан. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "administrator_organization_type": 10116,
         *       "age": {
         *         "from": 18,
         *         "to": 65
         *       },
         *       "age_preferences": [
         *         "olderThan45"
         *       ],
         *       "apply_processing": {
         *         "additional_questions": [
         *           "experience"
         *         ],
         *         "apply_type": "only_with_resume"
         *       },
         *       "billing_type": "package",
         *       "bonuses": [
         *         "pitanie",
         *         "prozivanie"
         *       ],
         *       "business_area": 7,
         *       "citizenship": [
         *         "rus"
         *       ],
         *       "construction_work_type": [
         *         "paintingWorks"
         *       ],
         *       "contacts": {
         *         "allow_calls": true,
         *         "allow_messages": true,
         *         "email": "ivalerevich@company.ru",
         *         "name": "Игорь Валерьевич",
         *         "phone": "88001001159"
         *       },
         *       "cuisine": [
         *         "russian"
         *       ],
         *       "delivery_method": [
         *         "car"
         *       ],
         *       "description": "Доставка заказов по району, свободный график",
         *       "driving_experience": "6-10",
         *       "driving_license_category": [
         *         "A"
         *       ],
         *       "eatery_type": [
         *         "cafe"
         *       ],
         *       "education_level": "higher",
         *       "employment": "temporary",
         *       "experience": "moreThan3",
         *       "facility_type": [
         *         "production"
         *       ],
         *       "food_production_shop_type": [
         *         "cold"
         *       ],
         *       "grade": "lead",
         *       "hierarchy": {
         *         "employee_id": 12342348
         *       },
         *       "image_url": "https://example.com/vacancy/courier.jpg",
         *       "is_company_car": true,
         *       "is_side_job": true,
         *       "job_responsibilities": "Доставлять заказы клиентам и передавать отчетность в приложении",
         *       "jobs_number": 3,
         *       "location": {
         *         "address": {
         *           "house": "7",
         *           "locality": "Москва",
         *           "street": "Лесная улица"
         *         },
         *         "coordinates": {
         *           "latitude": 55.755814,
         *           "longitude": 37.617635
         *         }
         *       },
         *       "medical_book": "registerByCandidate",
         *       "medical_specialization_ids": [
         *         3265936
         *       ],
         *       "payout_frequency": "thriceMonthlyPay",
         *       "profession": 3201667,
         *       "registration_method": [
         *         "contract"
         *       ],
         *       "retail_equipment_type": [
         *         "cashRegisterAndPosTerminals"
         *       ],
         *       "retail_shop_type": [
         *         "hypermarketOrSupermarket"
         *       ],
         *       "salary": {
         *         "from": 30000,
         *         "to": 60000
         *       },
         *       "salary_detail": {
         *         "base": {
         *           "bonus": "5% от продаж в месяц",
         *           "range": {
         *             "from": 30000,
         *             "to": 60000
         *           }
         *         },
         *         "paid_period": "month",
         *         "taxes": "gross"
         *       },
         *       "schedule": "flexible",
         *       "title": "Курьер на личном автомобиле",
         *       "tools_availability": "needYourOwn",
         *       "vacancy_code": "COURIER-2026-01",
         *       "vehicle_type": 3286367,
         *       "work_days_per_week": [
         *         5
         *       ],
         *       "work_format": [
         *         "office"
         *       ],
         *       "work_hours_per_day": [
         *         8
         *       ],
         *       "worker_class": [
         *         "1"
         *       ]
         *     }
         */
        'application/json': components['schemas']['VacancyV2Create']
      }
    }
    responses: {
      /** @description Успешный ответ */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VacancyV2CreateResult']
        }
      }
      /** @description Ошибка в поле вакансии */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequestOnVacancy']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Создание вакансий недоступно */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreationForbiddenError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacanciesGetByIds: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании получает информацию по вакансиям, которую он опубликовал для компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании получает информацию по вакансиям, которую он опубликовал для компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "fields": [
         *         "title",
         *         "description",
         *         "url",
         *         "salary",
         *         "start_time",
         *         "update_time",
         *         "is_active"
         *       ],
         *       "ids": [
         *         52283165832
         *       ],
         *       "params": [
         *         "address",
         *         "age_preferences",
         *         "applies_filter",
         *         "bonuses",
         *         "business_area",
         *         "citizenship",
         *         "coordinates",
         *         "delivery_method",
         *         "driving_experience",
         *         "driving_license_category",
         *         "education_level",
         *         "employment",
         *         "experience",
         *         "is_side_job",
         *         "job_responsibilities",
         *         "jobs_number",
         *         "paid_period",
         *         "payout_frequency",
         *         "profession",
         *         "registration_method",
         *         "salary",
         *         "salary_base_bonus",
         *         "salary_base_range",
         *         "schedule",
         *         "taxes",
         *         "vacancy_code"
         *       ]
         *     }
         */
        'application/json': components['schemas']['VacanciesGetByIdsBody']
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
          /**
           * @example [
           *       {
           *         "addressDetails": {
           *           "address": "Москва, проезд Воскресенские Ворота",
           *           "city": "Москва",
           *           "coordinates": {
           *             "latitude": 55.755814,
           *             "longitude": 37.617635
           *           },
           *           "province": "Центральный федеральный округ, Москва"
           *         },
           *         "contacts": {
           *           "allow_calls": true,
           *           "allow_messages": true,
           *           "email": "ivalerevich@company.ru",
           *           "name": "Игорь Валерьевич"
           *         },
           *         "description": "Доставка заказов по району, свободный график",
           *         "id": 52283165832,
           *         "is_active": true,
           *         "params": {
           *           "address": "Москва, проезд Воскресенские Ворота",
           *           "age_preferences": [
           *             "старше 45 лет"
           *           ],
           *           "applies_filter": "Только с резюме",
           *           "bonuses": [
           *             "Проживание",
           *             "Питание"
           *           ],
           *           "business_area": "Продажа и обслуживание автомобилей",
           *           "citizenship": [
           *             "Россия"
           *           ],
           *           "coordinates": {
           *             "latitude": 55.755814,
           *             "longitude": 37.617635
           *           },
           *           "delivery_method": [
           *             "На автомобиле"
           *           ],
           *           "driving_experience": "Нет опыта",
           *           "driving_license_category": [
           *             "A"
           *           ],
           *           "education_level": "Высшее",
           *           "employment": "Разовая или временная",
           *           "experience": "Без опыта",
           *           "is_side_job": "Да",
           *           "job_responsibilities": "Доставлять заказы клиентам и передавать отчетность в приложении",
           *           "jobs_number": 3,
           *           "paid_period": "в месяц",
           *           "payout_frequency": "Раз в месяц",
           *           "profession": "Авитолог",
           *           "registration_method": [
           *             "Трудовой договор"
           *           ],
           *           "salary": {
           *             "from": 30000,
           *             "to": 60000
           *           },
           *           "salary_base_bonus": "5% от продаж в месяц",
           *           "salary_base_range": {
           *             "from": 30000,
           *             "to": 60000
           *           },
           *           "schedule": "Вахта",
           *           "taxes": "До вычета налогов",
           *           "vacancy_code": "COURIER-2026-01"
           *         },
           *         "salary": 45000,
           *         "start_time": "2026-07-10T09:04:00Z",
           *         "title": "Курьер на личном автомобиле",
           *         "update_time": "2026-07-10T10:11:04Z",
           *         "url": "/moskva/vakansii/kurer_na_lichnom_avtomobile_52283165832",
           *         "uuid": "d423917c-79d4-477d-aa0d-b02414611176"
           *       }
           *     ]
           */
          'application/json': components['schemas']['Vacancies2.0']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['badRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Пользователь не владелец объявления */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Вакансия не найдена */
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyGetStatuses: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании получает информацию о статусе публикации вакансии, которую он опубликовал для компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании получает информацию о статусе публикации вакансии, которую он опубликовал для компании. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "ids": [
         *         "8a904f34-f235-4e89-9251-9110c767ccd5"
         *       ]
         *     }
         */
        'application/json': components['schemas']['VacancyStatusesBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example [
           *       {
           *         "id": "8a904f34-f235-4e89-9251-9110c767ccd5",
           *         "last_action": {
           *           "datetime": "2026-07-10T16:30:00+03:00",
           *           "error": {
           *             "code": 200
           *           },
           *           "status": "success"
           *         },
           *         "vacancy": {
           *           "id": 52287485844,
           *           "moderation_status": "in_progress",
           *           "reasons": null,
           *           "status": "activated",
           *           "url": "https://avito.ru/52287485844"
           *         }
           *       }
           *     ]
           */
          'application/json': components['schemas']['VacancyStatusesResult']
        }
      }
      /** @description Ошибка в формате запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequest']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Пользователь не авторизован для этой операции */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyUpdateV2: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании может редактировать только свои вакансии.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании может редактировать только свои вакансии. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /**
         * @description UUID Идентификатор вакансии для V2 ручек
         *     (возвращается ручкой [Публикация вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyCreateV2) )
         */
        vacancy_uuid: components['parameters']['pathVacancyUUID']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "administrator_organization_type": 10116,
         *       "age": {
         *         "from": 18,
         *         "to": 65
         *       },
         *       "age_preferences": [
         *         "olderThan45"
         *       ],
         *       "apply_processing": {
         *         "additional_questions": [
         *           "experience"
         *         ],
         *         "apply_type": "only_with_resume"
         *       },
         *       "billing_type": "package",
         *       "bonuses": [
         *         "pitanie",
         *         "prozivanie"
         *       ],
         *       "business_area": 7,
         *       "citizenship": [
         *         "rus"
         *       ],
         *       "construction_work_type": [
         *         "paintingWorks"
         *       ],
         *       "contacts": {
         *         "allow_calls": true,
         *         "allow_messages": true,
         *         "email": "ivalerevich@company.ru",
         *         "name": "Игорь Валерьевич",
         *         "phone": "88001001159"
         *       },
         *       "cuisine": [
         *         "russian"
         *       ],
         *       "delivery_method": [
         *         "car"
         *       ],
         *       "description": "Доставка заказов по району, свободный график",
         *       "driving_experience": "6-10",
         *       "driving_license_category": [
         *         "A"
         *       ],
         *       "eatery_type": [
         *         "cafe"
         *       ],
         *       "education_level": "higher",
         *       "employment": "temporary",
         *       "experience": "moreThan3",
         *       "facility_type": [
         *         "production"
         *       ],
         *       "food_production_shop_type": [
         *         "cold"
         *       ],
         *       "grade": "lead",
         *       "hierarchy": {
         *         "employee_id": 12342348
         *       },
         *       "image_url": "https://example.com/vacancy/courier.jpg",
         *       "is_company_car": true,
         *       "is_side_job": true,
         *       "job_responsibilities": "Доставлять заказы клиентам и передавать отчетность в приложении",
         *       "jobs_number": 3,
         *       "location": {
         *         "address": {
         *           "house": "7",
         *           "locality": "Москва",
         *           "street": "Лесная улица"
         *         },
         *         "coordinates": {
         *           "latitude": 55.755814,
         *           "longitude": 37.617635
         *         }
         *       },
         *       "medical_book": "registerByCandidate",
         *       "medical_specialization_ids": [
         *         3265936
         *       ],
         *       "payout_frequency": "thriceMonthlyPay",
         *       "profession": 3201667,
         *       "registration_method": [
         *         "contract"
         *       ],
         *       "retail_equipment_type": [
         *         "cashRegisterAndPosTerminals"
         *       ],
         *       "retail_shop_type": [
         *         "hypermarketOrSupermarket"
         *       ],
         *       "salary": {
         *         "from": 30000,
         *         "to": 60000
         *       },
         *       "salary_detail": {
         *         "base": {
         *           "bonus": "5% от продаж в месяц",
         *           "range": {
         *             "from": 30000,
         *             "to": 60000
         *           }
         *         },
         *         "paid_period": "month",
         *         "taxes": "gross"
         *       },
         *       "schedule": "flexible",
         *       "title": "Курьер на личном автомобиле",
         *       "tools_availability": "needYourOwn",
         *       "vacancy_code": "COURIER-2026-01",
         *       "vehicle_type": 3286367,
         *       "work_days_per_week": [
         *         5
         *       ],
         *       "work_format": [
         *         "office"
         *       ],
         *       "work_hours_per_day": [
         *         8
         *       ],
         *       "worker_class": [
         *         "1"
         *       ]
         *     }
         */
        'application/json': components['schemas']['VacancyV2Create']
      }
    }
    responses: {
      /** @description Успешный ответ */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "id": "c958ec2b-ecd7-494a-818d-5bb5f2c361eb"
           *     }
           */
          'application/json': components['schemas']['VacancyV2CreateResult']
        }
      }
      /** @description Ошибка в поле вакансии */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BadRequestOnVacancy']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Создание вакансий недоступно */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CreationForbiddenError']
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyGetItem: {
    parameters: {
      query?: {
        /** @description Поля основного тела ответа (можно указать несколько значений через запятую). По умолчанию отображаются все поля. */
        fields?: 'description' | 'is_active' | 'salary' | 'start_time' | 'title' | 'update_time' | 'url'
        /**
         * @description Дополнительные поля, которые входят в params (можно указать несколько
         *     значений через запятую). Если значение не задано - возвращаются все поля.
         *
         *     Устаревшие значения:
         *     * change (используйте shifts)
         *     * is_remote (используйте work_format)
         *
         *     Удалённые значения (более недоступны):
         *     * manufacturing_type
         *     * industry_type
         *     * piecework_flag
         *     * programs
         *     * warehouse_functionality
         *     * where_to_work
         */
        params?:
          | 'address'
          | 'administrator_organization_type'
          | 'age_preferences'
          | 'applies_filter'
          | 'bonuses'
          | 'business_area'
          | 'change'
          | 'citizenship'
          | 'construction_work_type'
          | 'coordinates'
          | 'cuisine'
          | 'delivery_method'
          | 'driving_experience'
          | 'driving_license_category'
          | 'eatery_type'
          | 'education_level'
          | 'employment'
          | 'experience'
          | 'facility_type'
          | 'food_production_shop_type'
          | 'grade'
          | 'industry_type'
          | 'is_company_car'
          | 'is_remote'
          | 'is_side_job'
          | 'job_responsibilities'
          | 'jobs_number'
          | 'manufacturing_type'
          | 'medical_book'
          | 'medical_specialization'
          | 'paid_period'
          | 'payout_frequency'
          | 'piecework_flag'
          | 'profession'
          | 'programs'
          | 'registration_method'
          | 'retail_equipment_type'
          | 'retail_shop_type'
          | 'salary'
          | 'salary_base_bonus'
          | 'salary_base_range'
          | 'schedule'
          | 'shifts'
          | 'taxes'
          | 'tools_availability'
          | 'vacancy_code'
          | 'vehicle_type'
          | 'warehouse_functionality'
          | 'where_to_work'
          | 'work_days_per_week'
          | 'work_format'
          | 'work_hours_per_day'
          | 'worker_class'
      }
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Сотрудник компании получает информацию по вакансии, которую он опубликовал для компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Сотрудник компании получает информацию по вакансии, которую он опубликовал для компании. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор вакансии */
        vacancy_id: number
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
          /**
           * @example {
           *       "addressDetails": {
           *         "address": "Москва, проезд Воскресенские Ворота",
           *         "city": "Москва",
           *         "coordinates": {
           *           "latitude": 55.755814,
           *           "longitude": 37.617635
           *         },
           *         "province": "Центральный федеральный округ, Москва"
           *       },
           *       "contacts": {
           *         "allow_calls": true,
           *         "allow_messages": true,
           *         "email": "ivalerevich@company.ru",
           *         "name": "Игорь Валерьевич"
           *       },
           *       "description": "Доставка заказов по району, свободный график",
           *       "id": 52283165832,
           *       "is_active": true,
           *       "params": {
           *         "address": "Москва, проезд Воскресенские Ворота",
           *         "age_preferences": [
           *           "старше 45 лет"
           *         ],
           *         "applies_filter": "Только с резюме",
           *         "bonuses": [
           *           "Проживание",
           *           "Питание"
           *         ],
           *         "business_area": "Продажа и обслуживание автомобилей",
           *         "citizenship": [
           *           "Россия"
           *         ],
           *         "coordinates": {
           *           "latitude": 55.755814,
           *           "longitude": 37.617635
           *         },
           *         "delivery_method": [
           *           "На автомобиле"
           *         ],
           *         "driving_experience": "Нет опыта",
           *         "driving_license_category": [
           *           "A"
           *         ],
           *         "education_level": "Высшее",
           *         "employment": "Разовая или временная",
           *         "experience": "Без опыта",
           *         "is_side_job": "Да",
           *         "job_responsibilities": "Доставлять заказы клиентам и передавать отчетность в приложении",
           *         "jobs_number": 3,
           *         "paid_period": "в месяц",
           *         "payout_frequency": "Раз в месяц",
           *         "profession": "Авитолог",
           *         "registration_method": [
           *           "Трудовой договор"
           *         ],
           *         "salary": {
           *           "from": 30000,
           *           "to": 60000
           *         },
           *         "salary_base_bonus": "5% от продаж в месяц",
           *         "salary_base_range": {
           *           "from": 30000,
           *           "to": 60000
           *         },
           *         "schedule": "Вахта",
           *         "taxes": "До вычета налогов",
           *         "vacancy_code": "COURIER-2026-01"
           *       },
           *       "salary": 45000,
           *       "start_time": "2026-07-10T09:04:00Z",
           *       "title": "Курьер на личном автомобиле",
           *       "update_time": "2026-07-10T10:11:04Z",
           *       "url": "/moskva/vakansii/kurer_na_lichnom_avtomobile_52283165832",
           *       "uuid": "d423917c-79d4-477d-aa0d-b02414611176"
           *     }
           */
          'application/json': components['schemas']['Vacancy2.0']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['badRequestError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description Пользователь не владелец объявления */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['forbiddenError']
        }
      }
      /** @description Вакансия не найдена */
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
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  vacancyAutoRenewal: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника, позволяет включать автопродление вакансий принадлежащих сотруднику опубликованных от имени компании.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника, позволяет включать автопродление вакансий принадлежащих сотруднику опубликованных от имени компании. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /**
         * @description UUID Идентификатор вакансии для V2 ручек
         *     (возвращается ручкой [Публикация вакансии V2](https://developers.avito.ru/api-catalog/job/documentation#operation/vacancyCreateV2) )
         */
        vacancy_uuid: components['parameters']['pathVacancyUUID']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "auto_renewal": true
         *     }
         */
        'application/json': components['schemas']['VacancyAutoRenewal']
      }
    }
    responses: {
      /** @description Успешный ответ */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['authError']
        }
      }
      /** @description вакансия не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceUnavailableError']
        }
      }
    }
  }
  getDicts: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешный ответ с массивом категорий */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example [
           *       {
           *         "description": "Профессия",
           *         "id": "profession"
           *       },
           *       {
           *         "description": "Техника",
           *         "id": "vehicle_type"
           *       }
           *     ]
           */
          'application/json': {
            /** @description Описание категории */
            description?: string
            /**
             * @description Уникальный идентификатор категории
             * @example profession
             */
            id?: string
          }[]
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
    }
  }
  getDictByID: {
    parameters: {
      query?: never
      header?: {
        /**
         * @deprecated
         * @description Устаревший заголовок, используйте X-Employee-Of. Включает привилегии компании для сотрудника.
         */
        'X-Is-Employee'?: boolean | null
        /** @description Идентификатор компании, от имени которой работает сотрудник. Включает привилегии компании для сотрудника. */
        'X-Employee-Of'?: number | null
      }
      path: {
        /** @description Идентификатор словаря */
        dictionary_id: components['parameters']['pathDictionaryId']
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
          /**
           * @example [
           *       {
           *         "deprecated": true,
           *         "id": 10106,
           *         "name": "IT, интернет, телеком"
           *       },
           *       {
           *         "deprecated": false,
           *         "id": 3278315,
           *         "name": "Архитектура и дизайн"
           *       }
           *     ]
           */
          'application/json': {
            /** @description Указывает, является ли значение устаревшим. Устаревшие значения могут использоваться только при чтении ранее созданных вакансий */
            deprecated?: boolean
            /** @description Уникальный идентификатор */
            id?: number
            /** @description Название */
            name?: string
          }[]
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['serviceError']
        }
      }
    }
  }
}
