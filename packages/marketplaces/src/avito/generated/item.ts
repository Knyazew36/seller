// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/core/v1/accounts/{userId}/vas/prices': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение информации о стоимости услуг продвижения и доступных значках
     * @description Возвращает в ответ список объектов со следующей структурой:
     *     - `itemId` – идентификатор объявления
     *     - `vas` – список объектов, которые содержат информацию о стоимости дополнительных услуг и пакетов дополнительных услуг для каждого объявления. Структура объекта:
     *       - `slug` – идентификатор услуги или пакета услуг:
     *         - `highlight` — [услуга продвижения "Выделить"](https://support.avito.ru/articles/200026858)
     *         - `xl` – [услуга продвижения "XL-объявление"](https://support.avito.ru/articles/685)
     *         - `stickerpack_x1` – [1 значок на XL-объявлении](https://support.avito.ru/articles/2450)
     *         - `stickerpack_x2` – [2 значка на XL-объявлении](https://support.avito.ru/articles/2450)
     *         - `stickerpack_x3` – [3 значка на XL-объявлении](https://support.avito.ru/articles/2450)
     *
     *         - `x2_1` – [пакет "до 2 раз больше просмотров на 1 день"](https://support.avito.ru/articles/1398)
     *         - `x2_7` – [пакет "до 2 раз больше просмотров на 7 дней"](https://support.avito.ru/articles/1398)
     *         - `x5_1` – [пакет "до 5 раз больше просмотров на 1 день"](https://support.avito.ru/articles/1398)
     *         - `x5_7` – [пакет "до 5 раз больше просмотров на 7 дней"](https://support.avito.ru/articles/1398)
     *         - `x10_1` – [пакет "до 10 раз больше просмотров на 1 день"](https://support.avito.ru/articles/1398)
     *         - `x10_7` – [пакет "до 10 раз больше просмотров на 7 дней"](https://support.avito.ru/articles/1398)
     *         - `x15_1` – [пакет "до 15 раз больше просмотров на 1 день"](https://support.avito.ru/articles/1398)
     *         - `x15_7` – [пакет "до 15 раз больше просмотров на 7 дней"](https://support.avito.ru/articles/1398)
     *         - `x20_1` – [пакет "до 20 раз больше просмотров на 1 день"](https://support.avito.ru/articles/1398)
     *         - `x20_7` – [пакет "до 20 раз больше просмотров на 7 дней"](https://support.avito.ru/articles/1398)
     *
     *       - `price` – цена в рублях с учетом скидки
     *
     *       - `priceOld` – цена в рублях до применения скидки
     *
     *     - `stickers` – список объектов которые содержат доступные для объявления  [значки](https://support.avito.ru/articles/2450)
     *       - `id` – идентификатор значка
     *       - `title` – название значка
     *       - `description` – описание значка
     */
    post: operations['vasPrices']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/accounts/{user_id}/calls/stats/': {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение статистики по звонкам
     * @description Получение агрегированной статистики звонков, полученных пользователем
     */
    post: operations['postCallsStats']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/accounts/{user_id}/items/{item_id}/': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    /**
     * Получение информации по объявлению
     * @description Возвращает данные об объявлении - его статус, список примененных услуг Максимальное количество запросов в минуту - 500
     *     **Внимание:** для получения статистики объявления должен использоваться метод:
     *     [получение статистики по списку объявлений](#operation/itemStatsShallow)
     */
    get: operations['getItemInfo']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/accounts/{user_id}/items/{item_id}/vas': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    /**
     * Применение дополнительных услуг
     * @description **Внимание:** метод объявлен устаревшим и больше не поддерживается. Вместо него используйте метод `/core/v2/items/{itemId}/vas/`
     *
     *     Применение дополнительной услуги к объявлению, в ответе возвращает данные о примененной услуге и сумму списания.
     *     [Более подробная информация по дополнительным услугам](https://support.avito.ru/sections/200009758)
     *
     *     **Внимание:** получение ошибки при выполнении этой операции не означает, что услуга точно не была куплена.
     *     В этом случае рекомендуется подождать несколько минут и проверить, что услуга отсутствует в списке применённых, а только затем повторить попытку.
     */
    put: operations['putItemVas']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/items': {
    parameters: {
      query?: {
        /** @description Количество записей на странице (целое число больше 0 и меньше 100) */
        per_page?: number
        /** @description Номер страницы (целое число больше 0) */
        page?: number
        /** @description Статус объявления на сайте (можно указать несколько значений через запятую) */
        status?: 'active' | 'removed' | 'old' | 'blocked' | 'rejected'
        /** @description Фильтр больше либо равно по дате обновления/редактирования объявления в формате YYYY-MM-DD */
        updatedAtFrom?: string
        /** @description Идентификатор категории объявления</br> см. возможные варианты категорий в [ справочнике ](https://www.avito.st/s/openapi/catalog-categories.xml) */
        category?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение информации по объявлениям
     * @description Возвращает список объявлений авторизованного пользователя - статус, категорию и ссылку на сайте.
     *     **Внимание! В настоящий момент этот метод не работает с объявлениями [сотрудников](https://pro.avito.ru/employees).** Он позволяет получить объявления только для пользователя, который указан владельцем этого объявления. В случае сотрудника это будет главный аккаунт компании, для авторизованного сотрудника вернётся пустой список объявлений.
     *     Максимальное количество запросов в минуту - 25.
     */
    get: operations['getItemsInfo']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v1/items/{item_id}/update_price': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Обновление цены объявления
     * @description Обновляет цену товара по id.
     *     Максимальное количество запросов в минуту - 150.
     *     **Внимание! Доступно для категорий Товары, Запчасти, Авто, Недвижимость (кроме краткосрочной)**
     */
    post: operations['updatePrice']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v2/accounts/{user_id}/items/{item_id}/vas_packages': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    /**
     * Применение пакета дополнительных услуг
     * @description **Внимание:** метод объявлен устаревшим и больше не поддерживается. Вместо него используйте метод `/core/v2/items/{itemId}/vas/`
     *
     *     Применение пакета дополнительных услуг к объявлению, в ответе возвращает сумму списания.
     *
     *     **Внимание:** получение ошибки при выполнении этой операции не означает, что пакет точно не была куплен.
     *     В этом случае рекомендуется подождать несколько минут и проверить, что пакет отсутствует в списке применённых, а только затем повторить попытку.
     */
    put: operations['putItemVasPackageV2']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/v2/items/{itemId}/vas/': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    get?: never
    /**
     * Применение услуг продвижения
     * @description С помощью этого метода вы можете применить к опубликованному объявлению одну или несколько услуг продвижения (например, «XL-объявление», «Выделение цветом» и «До 10 раз больше просмотров на 7 дней»). В рамках одного запроса услуга может быть применена только один раз.
     *
     *     Если для вашего объявления доступны значки (такие как «Без ДТП», «Срочно», «1 владелец»), при подключении услуги «XL-объявление» вы можете передать их список (не более трёх значков). В этом случае добавьте соответствующую услугу на 1, 2 или 3 значка.
     *
     *     [Подробнее об услугах продвижения](https://support.avito.ru/partitions/131)
     *
     *     Чтобы получить список доступных услуг и значков,  используйте метод `/core/v1/accounts/{userId}/vas/prices`.
     *
     *     Если заказ сформирован успешно, в ответ вы получите уникальные идентификаторы операций покупки для каждой из применяемых услуг. Позже эти идентификаторы можно будет использовать, чтобы узнать статус выполнения заказа.
     *
     *     В случае некорректного запроса метод вернет код ответа 400 и структуру, содержащую поле `code`. Возможные коды ошибок:
     *       - **1001** – один или несколько заголовков неправильно передаются;
     *       - **1002** – ошибка в URL;
     *       - **1003** – неверный идентификатор объявления из запроса;
     *       - **1004** – JSON из тела запроса не соответствует схеме или список идентификаторов услуг пустой;
     *       - **1005** – объявление, к которому вы хотите применить услуги, неактивно;
     *       - **1006** – неправильное количество выбранных значков для объявления.
     *     Убедитесь, что в списке идентификаторов услуг есть услуга для покупки значков и она совпадает с количеством выбранных значков.
     *           - stickerpack_x1 – 1 значок
     *           - stickerpack_x2 – 2 значка
     *           - stickerpack_x3 – 3 значка
     *       - **1007** – некоторые из выбранных услуг не могут быть применены;
     *       - **1008** – в объявлении появились обязательные поля, которые нужно заполнить.
     *     Отредактируйте объявление и попробуйте применить услугу снова.
     *       - **1009** – в кошельке не хватает средств для покупки услуг;
     *       - **1010** – вы пытались купить больше одной услуги увеличения просмотров;
     *       - **1011** – вы пытались купить значки, недоступные для выбранного объявления.
     *
     *     В случае внутренней ошибки на стороне Авито вернётся код ответа 500 и структура, содержащая поле `code`. Возможные коды ошибок:
     *       - **1000** – ошибка на стороне Авито, попробуйте позже или [напишите в поддержку](https://support.avito.ru/request/659?eventData[contextId]=117);
     *
     *     **Важно:** если ответ пришёл без кода ошибки или его значения нет в списке выше — возможно, услуга всё-таки была куплена. Подождите несколько минут: услуга продвижения появится в списке применённых, а если нет — попробуйте оформить её снова.
     */
    put: operations['applyVas']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/stats/v1/accounts/{user_id}/items': {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение статистики по списку объявлений
     * @description Получение счетчиков по переданному списку объявлений пользователя.
     *
     *     **Внимание:** в запросе может быть передано не более 200 идентификаторов объявлений.
     *
     *     **Внимание:** глубина такого запроса ограничена 270 днями.
     *
     *     ### Счетчики
     *     * ~~views - общее число просмотров объявления;~~ __DEPRECATED (будет удалено в апреле 2021 г.).__ Используйте поле uniqViews.
     *     * uniqViews - число уникальных пользователей, просмотревших объявление;
     *     * ~~contacts - число контактов [1];~~ __DEPRECATED (будет удалено в апреле 2021 г.).__ Используйте поле uniqContacts.
     *     * uniqContacts - число уникальных пользователей, совершивших контакты [1];
     *     * ~~favorites - число добавлений объявления в "избранное";~~ __DEPRECATED (будет удалено в апреле 2021 г.).__ Используйте поле uniqFavorites.
     *     * uniqFavorites - число уникальных пользователей, добавивших объявление в "избранное".
     *
     *     ### Группировка счетчиков
     *     Счетчики могут быть сгруппированы [2] по:
     *     * дням;
     *     * неделям - в поле `date` соответствующей структуры будет первый день недели;
     *     * месяцам - в поле `date` соответствующей структуры будет первый день месяца.
     *
     *     #### Период группировки
     *     Период группировки передается в теле запроса в поле `periodGrouping`. Доступные значения этого поля:
     *     * "day" (по умолчанию) - без группировки;
     *     * "week" - суммирование счетчиков за неделю;
     *     * "month" - суммирование счетчиков за месяц.
     *
     *     ### Примечания
     *     * [1]: Под контактом понимаются: запросы телефона продавца, начатый чат с продавцом по конкретному объявлению, отклик на резюме и пр.
     *     * [2]: Группировка уникальных пользователей происходит только в рамках одного дня.
     */
    post: operations['itemStatsShallow']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/stats/v2/accounts/{user_id}/items': {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение статистических показателей по профилю
     * @description Получение статистических показателей по профилю.
     *     ### Группировки показателей
     *     Используйте группировки, чтобы получать конкретную статистику.  Например, можете запросить только общие значения показателей, а если нужны подробности, — значения показателей по каждому объявлению или за определённый период. Доступные группировки:
     *
     *       - **totals** — по общему значению показателя за определённый период, без детализации;
     *       - **item** — по объявлениям;
     *       - **day** — по дням;
     *       - **week** — по неделям;
     *       - **month** — по месяцам.
     *
     *
     *     ### Доступные показатели по объявлениям
     *     #### Основные
     *
     *       - **views** - Просмотры. Сколько раз объявление показывалось в результатах поиска и рекомендациях. Несколько показов за сутки одному пользователю считаются как один.
     *       - **contacts** - Контакты. Количество пользователей, которые посмотрели ваш номер, написали в чат или откликнулись на скидку после рассылки. Несколько контактов за сутки от одного пользователя считаются как один.
     *         - **contactsShowPhone** - Посмотрели телефон. Количество пользователей, которые посмотрели ваш телефон или нажали «Позвонить». Несколько таких действий за сутки от одного пользователя считаются как один.
     *         - **contactsMessenger** - Написали в чат. Количество пользователей, которые написали вам. Несколько чатов за сутки от одного пользователя считаются как один.
     *         - **contactsShowPhoneAndMessenger** - Посмотрели телефон и написали в чат. Количество пользователей, которые и посмотрели ваш телефон, и написали в чат. Несколько таких действий за сутки от одного пользователя считаются как один.
     *         - **contactsSbcDiscount** - Откликнулись на скидку в чате. Количество пользователей, которые приняли ваше спецпредложение после рассылки.
     *       - **viewsToContactsConversion** - Конверсия из просмотров в контакты. Процент пользователей, которые после перехода в объявление посмотрели ваш телефон или написали в чат.
     *       - **favorites** - Добавили в избранное. Сколько раз объявление добавили в избранное.
     *       - **averageViewCost** - Средняя цена просмотра. Расходы на размещение и продвижение объявлений делятся на число просмотров.
     *       - **averageContactCost** - Средняя цена контакта. Расходы на размещение и продвижение объявлений делятся на число контактов.
     *       - **impressions** - Показы. Сколько раз объявление показывалось в результатах поиска и рекомендациях. Несколько показов за сутки одному пользователю считаются как один.
     *       - **impressionsToViewsConversion** - Конверсия из показов в просмотры. Процент пользователей, которые перешли в объявление после того, как оно показалось в результатах поиска и рекомендациях.
     *
     *
     *     #### Целевые действия
     *
     *       - **clickPackages**	- Целевые просмотры. Просмотры, которые оплачены из тарифа и считаются целевыми [по правилам Авито](https://www.avito.ru/legal/rules/paid_services/cost-per-action/#clicks).
     *       - **jobContacts** - Отклики на вакансии. Отклики, которые оплачены из тарифа и считаются целевыми [по правилам Авито](https://www.avito.ru/legal/rules/paid_services/cost-per-action/#clicks).
     *
     *
     *     #### Заказы с Авито Доставкой
     *
     *       - **viewsToOrderedItemsConversion** - Конверсия из просмотров в заказанные товары. Процент пользователей, которые после перехода в объявление заказали товар.
     *       - **orderedItems** - Заказано товаров. Количество товаров, которые заказали с Авито Доставкой.
     *       - **orderedItemsPrice** - Стоимость заказанных товаров в копейках. Общая стоимость заказов. Это сумма, которую вы получите на руки, если клиенты примут заказы.
     *       - **deliveredItems** - Доставлено товаров. Количество товаров, которые заказали с Авито Доставкой и уже приняли.
     *       - **deliveredItemsPrice** - Стоимость доставленных товаров в копейках. Общая стоимость заказов, которые покупатели приняли. Это сумма, которую вы получаете на руки.
     *
     *
     *     #### Посуточная аренда
     *
     *       - **bookingPlacedCount** - Получено заявок. Общее количество заявок на бронирование
     *       - **bookingPlacedPrice** - Стоимость полученных заявок в копейках. Общая стоимость бронирований. Это сумма, которую вы получите на руки, если гости заселятся.
     *       - **bookingApprovedCount** - Подтверждено заявок. Количество заявок на бронирование, которые вы подтвердили.
     *       - **bookingApprovedPrice** - Стоимость подтвержденных заявок в копейках. Общая стоимость бронирований, которые вы подтвердили. Это сумма, которую вы получите на руки, если гости заселятся.
     *       - **bookingAcceptedCount** - Заявки с заселением. Количество бронирований, по которым заселились гости. Заселение засчитывается в 15:00 по Москве на следующий день после заезда.
     *       - **bookingAcceptedPrice** - Стоимость заявок с заселением в копейках. Общая стоимость бронирований, по которым заселились гости. Это сумма, которую вы получаете на руки.
     *
     *
     *     #### Расходы
     *
     *       - **allSpending** - Все расходы в копейках. Сколько всего денег и бонусов вы потратили на объявления.
     *         - **spending** - Расходы на объявления в копейках. Сколько денег вы потратили на размещение, продвижение, целевые действия и комиссию.
     *           - **presenceSpending** - Расходы на размещение и целевые действия в копейках. Сколько денег вы потратили на размещения и целевые действия — просмотры, чаты, звонки и отклики.
     *           - **promoSpending** - Расходы на продвижение в копейках. Сколько денег вы потратили на продвижение и на услуги, которые влияют на внешний вид объявления.
     *           - **restSpending** - Остальные расходы в копейках. Сколько денег вы потратили на чат-ботов и услуги, которые система не смогла распознать.
     *           - **commission** - Комиссия в копейках. Какую комиссию вы заплатили за заказы с Авито Доставкой, которые приняли покупатели, а также за бронирования жилья.
     *         - **spendingBonus** - Списано бонусов на объявления. Сколько бонусов вы потратили на размещение, продвижение, целевые действия и комиссию.
     *
     *
     *     #### Количество объявлений за период
     *
     *       - **activeItems** - Активные объявления. Объявления, которые прошли проверку и появились в поиске.
     *         - **newActiveItems** - Новые и опубликованные заново объявления. Сколько объявлений опубликовано впервые или повторно.
     *         - **oldActiveItems** - Активны с прошлого периода. Сколько объявлений остаются опубликованными с предыдущего периода.
     *
     *
     *     ### Примечания
     *
     *       * Из ручки возвращается не более чем по 1000 сущностей. Вы можете использовать поля запроса limit и offset для регулировки выбранного диапазона.
     *       * Глубина данных статистики такого запроса ограничена 270 днями.
     *       * В случае недоступности метрики для пользователя она не приходит в ответе.
     *       * Система позволяет делать не более одного запроса в минуту на данный метод.
     */
    post: operations['itemAnalytics']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/stats/v2/accounts/{user_id}/spendings': {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение статистики расходов профиля
     * @description Получение статистики расходов профиля.
     *
     *     **Внимание:** Глубина данных статистики такого запроса ограничена 270 днями.
     *
     *     **Внимание:** Система позволяет делать не более одного запроса в минуту на данный метод.
     *
     *     ### Группировки расходов
     *     Используйте группировки, чтобы получать конкретную статистику. Доступные группировки:
     *
     *       - **day** — по дням;
     *       - **week** — по неделям;
     *       - **month** — по месяцам.
     *
     *
     *     ### Доступные типы расходов
     *
     *       - **all** - Все расходы в копейках. Сколько всего денег вы потратили на объявления и прочие услуги.
     *         - **promotion** - Расходы на продвижение в копейках. Сколько денег вы потратили на продвижение объявлений и услуги, которые влияют на внешний вид объявления.
     *         - **presence** - Расходы на размещение и целевые действия в копейках. Сколько денег вы потратили на размещение объявлений и целевые действия с ними — просмотры, чаты, звонки и отклики.
     *         - **commission** - Комиссия в копейках. Какую комиссию вы заплатили за заказы с Авито Доставкой, которые приняли покупатели, а также за бронирование жилья.
     *         - **rest** - Остальные расходы в копейках. Сколько денег вы потратили на чат-ботов и услуги, которые система не смогла распознать.
     */
    post: operations['accountSpendings']
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
    AnalyticsRequest: {
      /**
       * Format: date
       * @description Дата (в формате YYYY-MM-DD), с которой (включительно) надо получить статистику
       * @example 2020-09-01
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата (в формате YYYY-MM-DD), по которую (включительно) надо получить статистику
       * @example 2021-10-15
       */
      dateTo: string
      /** @description Набор ограничений, по которым нужно отфильтровать данные */
      filter?: {
        /**
         * @description Идентификаторы категорий</br> [ Справочник идентификаторов категорий ](https://www.avito.st/s/openapi/catalog-categories.xml)
         * @example [
         *       11,
         *       12
         *     ]
         */
        categoryIDs?: number[] | null
        /**
         * @description Идентификаторы сотрудников</br> [ Метод получения идентификаторов сотрудников ](https://developers.avito.ru/api-catalog/accounts-hierarchy/documentation#operation/getEmployeesV1)
         * @example [
         *       41042142,
         *       41042143
         *     ]
         */
        employeeIDs?: number[] | null
      } | null
      grouping: components['schemas']['Groupings']
      /**
       * @description Инструмент пагинации для ограничения количества сущностей в response;
       * @example 1000
       */
      limit: number | null
      /**
       * @description Набор доступных показателей, которые должны присутствовать в ответе
       * @example [
       *       "views",
       *       "contacts",
       *       "presenceSpending"
       *     ]
       */
      metrics: string[]
      /**
       * @description инструмент пагинации или смещение, с которого начинается выборка данных;
       * @example 0
       */
      offset: number | null
      /** @description Сортировка по заданному показателю */
      sort?: {
        /** @description Показатель статистики, по которому нужно отсортировать; */
        key: string
        /**
         * @description Порядок сортировки (asc, desc);
         * @enum {string}
         */
        order: 'asc' | 'desc'
      } | null
    }
    AnalyticsResponse: {
      result?: {
        /** @example 1 */
        dataTotalCount?: number
        /**
         * @example [
         *       {
         *         "id": 1742860800,
         *         "metrics": [
         *           {
         *             "slug": "views",
         *             "value": 100
         *           },
         *           {
         *             "slug": "contacts",
         *             "value": 100
         *           },
         *           {
         *             "slug": "presenceSpending",
         *             "value": 1000
         *           }
         *         ],
         *         "type": "dates"
         *       }
         *     ]
         */
        groupings?: {
          id?: number
          metrics?: {
            /** @example views */
            slug: string
            /** Format: float */
            value: number
          }[]
          type?: components['schemas']['Groupings']
        }[]
        /** @example 2021-11-25 15:19:21 */
        timestamp?: string
      }
    }
    ApplyVasResp: {
      /** Уникальный идентификатор операции покупки */
      operationId: number
    }
    CallsStatsDay: {
      /** @description Отвеченные звонки */
      answered?: number
      /** @description Звонки всего */
      calls?: number
      /** @description Дата (YYYY-MM-DD) */
      date?: string
      /** @description Новые звонки */
      new?: number
      /** @description Новые и одновременно отвеченные звонки */
      newAnswered?: number
    }
    CallsStatsItem: {
      /** @description Массив статистики звонков объявления в разрезе дней */
      days?: components['schemas']['CallsStatsDay'][]
      /** @description Идентификатор сотрудника в сервисе иерархии аккаунтов (0 означает, что звонок не аттрибуцирован до сотрудника) */
      employeeId: number
      /** @description Идентификатор объявления (0 означает, что звонок не аттрибуцирован до объявления) */
      itemId: number
    }
    CallsStatsRequest: {
      /** @description Начальная дата периода (YYYY-MM-DD) */
      dateFrom: string
      /** @description Конечная дата периода (YYYY-MM-DD) */
      dateTo: string
      /** @description Идентификаторы объявлений */
      itemIds?: number[]
    }
    CallsStatsResponse: {
      result?: {
        /** @description Массив статистики по объявлениям */
        items: components['schemas']['CallsStatsItem'][]
      }
    }
    /** @description Список идентификаторов, которые не удалось обработать по разным причинам (например, они не принадлежат текущему пользователю) */
    ErrorItemsVas: number[]
    ErrorResponse: {
      error?: {
        /**
         * Format: int32
         * @example 123
         */
        code: number
        /** @example message about error occurred */
        message: string
      }
    }
    FieldError: {
      /** @description Код ошибки */
      code: string
      /** @description Описание ошибки */
      message: string
    }
    /** @enum {string} */
    Groupings: 'day' | 'week' | 'month' | 'item' | 'totals'
    InfoVas: {
      /**
       * Format: date-time
       * @description Дата завершения услуги
       */
      finish_time?: string | null
      /** @description Информация о следующих применениях услуги */
      schedule?: string[] | null
      /**
       * @description Идентификатор услуги
       * @enum {string}
       */
      vas_id?: 'vip' | 'highlight' | 'pushup' | 'premium' | 'xl'
    }
    ItemInfoAvito: {
      /** @description [Идентификатор объявления](https://autoload.avito.ru/format/realty/#Id) из файла автозагрузки */
      autoload_item_id?: string | null
      /**
       * Format: date-time
       * @description Дата завершения объявления
       */
      finish_time?: string | null
      /**
       * Format: date-time
       * @description Дата создания объявления
       */
      start_time?: string | null
      /**
       * @description Статус объявления на сайте
       * @enum {string}
       */
      status?: 'active' | 'removed' | 'old' | 'blocked' | 'rejected' | 'not_found' | 'another_user'
      /** @description URL-адрес объявления */
      url?: string | null
      /** @description Список примененных платных услуг */
      vas?: components['schemas']['InfoVas'][] | null
    }
    ItemVasPricesResp: {
      /** @description Идентификатор объявления на сайте */
      itemId?: number
      stickers?: components['schemas']['StickerResp'][]
      vas: components['schemas']['VasResp'][]
    }
    ItemsInfoWithCategoryAvito: {
      meta?: {
        /**
         * @description Номер страницы
         * @example 1
         */
        page?: number
        /**
         * @description Количество записей на странице
         * @example 25
         */
        per_page?: number
      }
      resources?: {
        /**
         * @description Адрес объявления
         * @example Москва, Лесная улица 7
         */
        address?: string
        category?: {
          /**
           * Format: int32
           * @description Идентификатор категории
           * @example 111
           */
          id?: number
          /**
           * @description Наименование категории
           * @example Вакансии
           */
          name?: string
        }
        /**
         * Format: int32
         * @description Идентификатор объявления
         * @example 24122231
         */
        id?: number
        /**
         * @description Цена объявления (null значение означает, что цена не указана)
         * @example 35000
         */
        price?: number | null
        /**
         * @description Статус объявления на сайте
         * @enum {string}
         */
        status?: 'active' | 'removed' | 'old' | 'blocked' | 'rejected'
        /**
         * @description Наименование объявления
         * @example Продавец-кассир
         */
        title?: string
        /**
         * @description URL-адрес объявления
         * @example https://www.avito.ru/rostov-na-donu/vakansii/prodavets_magazina_2142
         */
        url?: string | null
      }[]
    }
    /**
     * @description Группировка статистики расходов (по дням, неделям, месяцам)
     * @enum {string}
     */
    SpendingsGroupings: 'day' | 'week' | 'month'
    SpendingsRequest: {
      /**
       * Format: date
       * @description Дата начала периода статистики расходов в формате YYYY-MM-DD
       * @example 2020-09-01
       */
      dateFrom: string
      /**
       * Format: date
       * @description Дата конца периода статистики расходов в формате YYYY-MM-DD
       * @example 2021-10-15
       */
      dateTo: string
      /** @description Набор ограничений, по которым необходимо отфильтровать расходы */
      filter?: {
        /**
         * @description Идентификаторы категорий</br> [ Справочник идентификаторов категорий ](https://www.avito.st/s/openapi/catalog-categories.xml)
         * @example [
         *       11,
         *       12
         *     ]
         */
        categoryIDs?: number[] | null
        /**
         * @description Идентификаторы объявлений
         * @example [
         *       534353,
         *       534354
         *     ]
         */
        itemIDs?: number[] | null
        /**
         * @description Идентификаторы населенных пунктов
         * @example [
         *       554353,
         *       554353
         *     ]
         */
        locationIDs?: number[] | null
      } | null
      grouping: components['schemas']['SpendingsGroupings']
      /**
       * @description Набор необходимых типов расходов
       * @example [
       *       "promotion",
       *       "presence"
       *     ]
       */
      spendingTypes: string[]
    }
    SpendingsResponse: {
      result: {
        /** @description Группировки расходов */
        groupings: {
          /**
           * @description Дата группировки в формате YYYY-MM-DD
           * @example 2025-05-02
           */
          date: string
          /** @description Расходы */
          spendings: {
            /** @description Детализация по услугам */
            services?: {
              /**
               * @description Слаг услуги
               * @example vas_highlight
               */
              slug: string
              /**
               * Format: float
               * @description Сумма расходов в рублях
               * @example 123.95
               */
              value: number
            }[]
            /**
             * @description Слаг типа расходов (promotion, presence, commission, rest)
             * @example presence
             */
            slug: string
            /**
             * Format: float
             * @description Сумма расходов в рублях
             * @example 123.95
             */
            value: number
          }[]
          type: components['schemas']['SpendingsGroupings']
        }[]
        /**
         * @description Временная метка ответа (UTC)
         * @example 1746133200
         */
        timestamp: number
      }
    }
    StatisticsCounters: {
      /**
       * Format: int64
       * @description Идентификатор объявления
       */
      itemId?: number
      stats?: {
        /**
         * @deprecated
         * @description __DEPRECATED (будет удалено в апреле 2021 г.).__
         *     __Используйте поле uniqContacts.__
         *     Запросы контактов объявления.
         */
        contacts?: number
        /**
         * Format: date
         * @description Дата (в формате YYYY-MM-DD), за которую посчитаны статистические счетчики. Для группировок по периодам - дата начала периода.
         */
        date: string
        /**
         * @deprecated
         * @description __DEPRECATED (будет удалено в апреле 2021 г.).__ __Используйте поле uniqFavorites.__ Добавления объявления в избранное
         */
        favorites?: number
        /** @description Уникальные пользователи, запрашивавшие контакты объявления */
        uniqContacts?: number
        /** @description Уникальные пользователи, добавившие объявление в избранное */
        uniqFavorites?: number
        /** @description Уникальные пользователи, просматривавшие объявления */
        uniqViews?: number
        /**
         * @deprecated
         * @description __DEPRECATED (будет удалено в апреле 2021 г.).__
         *     __Используйте поле uniqViews.__
         *     Просмотры объявления.
         */
        views?: number
      }[]
    }[]
    /**
     * @description Дата (в формате YYYY-MM-DD), с которой (включительно) надо получить статистику
     * @example 2020-01-01
     */
    StatisticsDateFrom: string
    /**
     * @description Дата (в формате YYYY-MM-DD), по которую (включительно) надо получить статистику
     * @example 2020-01-01
     */
    StatisticsDateTo: string
    /** @description Набор счетчиков, которые должны присутствовать в ответе */
    StatisticsFields: ('views' | 'uniqViews' | 'contacts' | 'uniqContacts' | 'favorites' | 'uniqFavorites')[]
    /**
     * @description Набор идентификаторов объявлений на сайте
     * @example [
     *       123456789,
     *       987654321
     *     ]
     */
    StatisticsItemIDs: number[]
    /**
     * @description Период группировки
     * @enum {string}
     */
    StatisticsPeriodGrouping: 'day' | 'week' | 'month'
    StatisticsResponse: {
      errors?: Record<string, never>
      /** @description Статистические счетчики объявления */
      result?: {
        items?: components['schemas']['StatisticsCounters']
      }
    }
    StatisticsShallowRequestBody: {
      dateFrom: components['schemas']['StatisticsDateFrom']
      dateTo: components['schemas']['StatisticsDateTo']
      fields?: components['schemas']['StatisticsFields']
      itemIds: components['schemas']['StatisticsItemIDs']
      periodGrouping?: components['schemas']['StatisticsPeriodGrouping']
    }
    /** @description Информация о значках для переданного списка объявлений */
    StickerResp: {
      /** @description Описание значка */
      description: string
      /** @description Идентификатор значка */
      id: number
      /** @description Название значка */
      title: string
    }
    UpdatePriceRequest: {
      /**
       * @description Цена
       * @example 100
       */
      price: number
    }
    UpdatePriceResponse: {
      result: {
        success?: boolean
      }
    }
    VasAmountAvito: {
      /**
       * Format: float
       * @description Сумма списания за применение услуги или пакета
       */
      amount?: number
    }
    VasApplyAvito: {
      /**
       * Format: float
       * @description Сумма списания за применение услуги
       */
      amount?: number
      vas?: components['schemas']['InfoVas']
    }
    VasPricesResp: components['schemas']['ItemVasPricesResp'][]
    /** @description Информация об услугах и пакетах дополнительных услуг для переданного списка объявлений */
    VasResp: {
      /**
       * @description Цена со скидкой
       * @example 200
       */
      price: number
      /**
       * @description Цена до применения скидки
       * @example 300
       */
      priceOld: number
      /**
       * @description Идентификатор услуги или пакета услуг
       * @example x2_1
       */
      slug: string
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
    itemIdsRequestBody: {
      /** @description Набор идентификаторов объявлений на сайте */
      item_ids: number[]
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
    packageIdRequestBodyV2: {
      /**
       * @description Идентификатор пакета услуг, возможные варианты значения:
       *     - `x2_1` - применение пакета До 2 раз больше просмотров на 1 день
       *     - `x2_7` - применение пакета До 2 раз больше просмотров на 7 дней
       *     - `x5_1` - применение пакета До 5 раз больше просмотров на 1 день
       *     - `x5_7` - применение пакета До 5 раз больше просмотров на 7 дней
       *     - `x10_1` - применение пакета До 10 раз больше просмотров на 1 день
       *     - `x10_7` - применение пакета До 10 раз больше просмотров на 7 дней
       *
       *     В некоторых регионах и категориях также доступны дополнительные варианты:
       *     - `x15_1` - применение пакета До 15 раз больше просмотров на 1 день
       *     - `x15_7` - применение пакета До 15 раз больше просмотров на 7 дней
       *     - `x20_1` - применение пакета До 20 раз больше просмотров на 1 день
       *     - `x20_7` - применение пакета До 20 раз больше просмотров на 7 дней
       *
       *     Если попытаться применить эти пакеты в недоступных для них регионе и категории, оплата не пройдёт.
       * @enum {string}
       */
      package_id: 'x2_1' | 'x2_7' | 'x5_1' | 'x5_7' | 'x10_1' | 'x10_7' | 'x15_1' | 'x15_7' | 'x20_1' | 'x20_7'
    }
    pricesItemIdsRequestBody: {
      /** @description Набор идентификаторов объявлений на сайте */
      itemIds: number[]
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
    tooManyRequests: Record<string, never>
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
    vasIdRequestBody: {
      /**
       * @description Идентификатор услуги, возможные его варианты значения:
       *     - `highlight` — [выделение объявления](https://support.avito.ru/articles/200026858)
       *     - `xl` – [XL-объявление](https://support.avito.ru/articles/685)
       * @enum {string}
       */
      vas_id: 'highlight' | 'xl'
    }
  }
  responses: never
  parameters: {
    /**
     * @description Тип данных запроса
     * @example application/json
     */
    applicationJsonHeader: 'application/json'
    /** @description Токен для авторизации */
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
    page: number
    /** @description Идентификатор объявления на сайте */
    pathItemId: number
    /** @description Номер пользователя в Личном кабинете Авито */
    pathUserId: number
    /** @description Идентификатор вакансии на сайте */
    pathVacancyId: number
    /** @description Количество ресурсов на страницу */
    perPage: number
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
  vasPrices: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
      }
      cookie?: never
    }
    /** @description Набор идентификаторов объявлений на сайте */
    requestBody?: {
      content: {
        /**
         * @example {
         *       "itemIds": [
         *         1234567,
         *         7654321
         *       ]
         *     }
         */
        'application/json': components['schemas']['pricesItemIdsRequestBody']
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
           *         "itemId": 1234567,
           *         "stickers": [
           *           {
           *             "description": "Description 1",
           *             "id": 1,
           *             "title": "Sticker 1"
           *           },
           *           {
           *             "description": "Description 2",
           *             "id": 2,
           *             "title": "Sticker 2"
           *           }
           *         ],
           *         "vas": [
           *           {
           *             "price": 200,
           *             "priceOld": 300,
           *             "slug": "x2_7"
           *           },
           *           {
           *             "price": 100,
           *             "priceOld": 150,
           *             "slug": "xl"
           *           },
           *           {
           *             "price": 50,
           *             "priceOld": 70,
           *             "slug": "stickerpack_x1"
           *           }
           *         ]
           *       },
           *       {
           *         "itemId": 7654321,
           *         "vas": []
           *       }
           *     ]
           */
          'application/json':
            | components['schemas']['VasPricesResp']
            | components['schemas']['badRequestError']
            | components['schemas']['authError']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
    }
  }
  postCallsStats: {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "dateFrom": "2020-04-01",
         *       "dateTo": "2020-04-08",
         *       "itemIds": [
         *         1853257996
         *       ]
         *     }
         */
        'application/json': components['schemas']['CallsStatsRequest']
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
           *       "result": {
           *         "items": [
           *           {
           *             "days": [
           *               {
           *                 "answered": 0,
           *                 "calls": 0,
           *                 "date": "2020-04-01",
           *                 "new": 0,
           *                 "newAnswered": 0
           *               }
           *             ],
           *             "employeeId": 0,
           *             "itemId": 1853257996
           *           }
           *         ]
           *       }
           *     }
           */
          'application/json': components['schemas']['CallsStatsResponse']
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
      /** @description Неверный user_id в запросе */
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
  getItemInfo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
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
          'application/json': components['schemas']['ItemInfoAvito']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequests']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldError']
        }
      }
    }
  }
  putItemVas: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        /**
         * @example {
         *       "vas_id": "highlight"
         *     }
         */
        'application/json': components['schemas']['vasIdRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VasApplyAvito']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
    }
  }
  getItemsInfo: {
    parameters: {
      query?: {
        /** @description Количество записей на странице (целое число больше 0 и меньше 100) */
        per_page?: number
        /** @description Номер страницы (целое число больше 0) */
        page?: number
        /** @description Статус объявления на сайте (можно указать несколько значений через запятую) */
        status?: 'active' | 'removed' | 'old' | 'blocked' | 'rejected'
        /** @description Фильтр больше либо равно по дате обновления/редактирования объявления в формате YYYY-MM-DD */
        updatedAtFrom?: string
        /** @description Идентификатор категории объявления</br> см. возможные варианты категорий в [ справочнике ](https://www.avito.st/s/openapi/catalog-categories.xml) */
        category?: number
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
          'application/json': components['schemas']['ItemsInfoWithCategoryAvito']
        }
      }
      /** @description Превышено допустимое количество запросов */
      429: {
        headers: {
          'X-RateLimit-Limit': components['headers']['X-RateLimit-Limit']
          'X-RateLimit-Remaining': components['headers']['X-RateLimit-Remaining']
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldError']
        }
      }
    }
  }
  updatePrice: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['UpdatePriceRequest']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UpdatePriceResponse']
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
      /** @description Неверный user_id в запросе */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['notFoundError']
        }
      }
      /** @description Превышено количество запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['tooManyRequests']
        }
      }
    }
  }
  putItemVasPackageV2: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Номер пользователя в Личном кабинете Авито */
        user_id: components['parameters']['pathUserId']
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        /**
         * @example {
         *       "package_id": "x10_7"
         *     }
         */
        'application/json': components['schemas']['packageIdRequestBodyV2']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VasAmountAvito']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['validatingError']
        }
      }
    }
  }
  applyVas: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор объявления на сайте */
        item_id: components['parameters']['pathItemId']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /**
           * @description Список идентификаторов услуг
           * @example [
           *       "x10_1",
           *       "xl",
           *       "stickerpack_x2"
           *     ]
           */
          slugs: string[]
          /**
           * @description Список значков
           * @example [
           *       1,
           *       2
           *     ]
           */
          stickers?: number[]
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
          'application/json': {
            [key: string]: components['schemas']['ApplyVasResp']
          }
        }
      }
      /** @description Ответ с ошибкой */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @enum {integer} */
            code: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008 | 1009 | 1010 | 1011
          }
        }
      }
    }
  }
  itemStatsShallow: {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    /** @description Набор параметров в теле запроса. */
    requestBody?: {
      content: {
        'application/json': components['schemas']['StatisticsShallowRequestBody']
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
           *       "result": {
           *         "items": [
           *           {
           *             "itemId": "<item_id_1>",
           *             "stats": [
           *               {
           *                 "date": "2020-06-11",
           *                 "uniqContacts": 1,
           *                 "uniqFavorites": 0,
           *                 "uniqViews": 10
           *               },
           *               {
           *                 "date": "2020-06-12",
           *                 "uniqContacts": 0,
           *                 "uniqFavorites": 2,
           *                 "uniqViews": 7
           *               }
           *             ]
           *           },
           *           {
           *             "itemId": "<item_id_2>",
           *             "stats": [
           *               {
           *                 "date": "2020-06-11",
           *                 "uniqContacts": 4,
           *                 "uniqFavorites": 3,
           *                 "uniqViews": 21
           *               },
           *               {
           *                 "date": "2020-06-12",
           *                 "uniqContacts": 1,
           *                 "uniqFavorites": 1,
           *                 "uniqViews": 18
           *               }
           *             ]
           *           }
           *         ]
           *       }
           *     }
           */
          'application/json': components['schemas']['StatisticsResponse']
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
      /** @description Неверный user_id в запросе */
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
  itemAnalytics: {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['AnalyticsRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AnalyticsResponse']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Error response */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  accountSpendings: {
    parameters: {
      query?: never
      header: {
        /**
         * @description Тип данных запроса
         * @example application/json
         */
        'Content-Type': components['parameters']['applicationJsonHeader']
      }
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SpendingsRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SpendingsResponse']
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Требуется аутентификация */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Доступ запрещен */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Слишком много запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Error response */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
}
