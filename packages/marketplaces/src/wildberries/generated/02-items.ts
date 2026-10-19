// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/content/v2/object/parent/all': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Родительские категории товаров
     * @description Метод возвращает названия и ID всех родительских категорий для [создания карточек товаров](/openapi/item-management#tag/listingItems): например, `Электроника`, `Бытовая химия`, `Рукоделие`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2ObjectParentAll']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/object/all': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список предметов
     * @description Метод возвращает список названий [родительских категорий предметов](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectParentAll) и их предметов с ID. Например, у категории `Игрушки` будут предметы `Калейдоскопы`, `Куклы`, `Мячики`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2ObjectAll']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/object/charcs/{subjectId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Характеристики предмета
     * @description Метод возвращает параметры характеристик предмета: названия, типы данных, единицы измерения и так далее. В запросе необходимо указать ID [предмета](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectAll).
     *
     *     <div class="description_important">
     *       Для получения значений характеристик <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2DirectoryColors">Цвет</a>, <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2DirectoryKinds">Пол</a>, <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2DirectoryCountries">Страна производства</a>, <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2DirectorySeasons">Сезон</a>, <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2DirectoryVat">Ставка НДС</a> и <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2DirectoryTnved">ТНВЭД-код</a> используйте отдельные методы
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2ObjectCharcsSubjectId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/directory/colors': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Цвет
     * @description Метод возвращает возможные значения [характеристики](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId) предмета `Цвет`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>Характеристик</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *
     *     </div>
     */
    get: operations['getV2DirectoryColors']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/directory/kinds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Пол
     * @description Метод возвращает возможные значения [характеристики](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId) предмета `Пол`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>Характеристик</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *
     *     </div>
     */
    get: operations['getV2DirectoryKinds']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/directory/countries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Страна производства
     * @description Метод возвращает возможные значения [характеристики](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId) предмета `Страна производства`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2DirectoryCountries']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/directory/seasons': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Сезон
     * @description Метод возвращает возможные значения [характеристики](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId) предмета `Сезон`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>Характеристик</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *
     *     </div>
     */
    get: operations['getV2DirectorySeasons']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/directory/vat': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Ставка НДС
     * @description Метод возвращает возможные значения [характеристики](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId) предмета `Ставка НДС`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов <strong>Характеристик</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *
     *     </div>
     */
    get: operations['getV2DirectoryVat']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/directory/tnved': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Код ТН ВЭД предмета
     * @description Метод возвращает список кодов ТН ВЭД по ID [предмета](/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectAll) и фрагменту кода ТН ВЭД.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2DirectoryTnved']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/content/v2/directory/tnved/all': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список кодов ТН ВЭД
     * @description Метод возвращает справочный список всех кодов ТН ВЭД. Чтобы найти код по его фрагменту, укажите первые цифры кода в параметре `search`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2DirectoryTnvedAll']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/content/v2/directory/okpd': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Код ОКПД2 предмета
     * @description Метод возвращает список кодов ОКПД2 по ID [предмета](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get) и фрагменту кода ОКПД2.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     </div>
     */
    get: operations['getV2DirectoryOkpd']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/content/v2/directory/okpd/all': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список кодов ОКПД2
     * @description Метод возвращает справочный список всех кодов ОКПД2. Чтобы найти код по его фрагменту, укажите первые цифры кода через точку в параметре `search`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     </div>
     */
    get: operations['getV2DirectoryOkpdAll']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/content/v1/brands': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Бренды
     * @description Метод возвращает список брендов по ID предмета.
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
    get: operations['getV1Brands']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/tags': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список ярлыков
     * @description Метод возвращает список и характеристики всех ярлыков продавца для группировки и фильтрации товаров.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Ярлыков</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2Tags']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/tag': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание ярлыка
     * @description Метод добавляет один ярлык продавца. Можно создать максимум 15 ярлыков для одного продавца. Максимальная длина ярлыка — 15 символов.
     *     <br>Созданный ярлык можно получить в общем [списке](/openapi/item-management#tag/labels/operation/getV2Tags).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Ярлыков</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2Tag']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/tag/{id}': {
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
     * Удаление ярлыка
     * @description Метод удаляет ярлык из [списка ярлыков](/openapi/item-management#tag/labels/operation/getV2Tags) продавца.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Ярлыков</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    delete: operations['deleteV2TagId']
    options?: never
    head?: never
    /**
     * Изменение ярлыка
     * @description Метод заменяет данные ярлыка: имя и цвет.
     *     <br>Новые данные можно получить в общем [списке](/openapi/item-management#tag/labels/operation/getV2Tags).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Ярлыков</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    patch: operations['patchV2TagId']
    trace?: never
  }
  '/content/v2/tag/nomenclature/link': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Управление ярлыками в карточке товара
     * @description Метод добавляет или снимает ярлык с карточки товара. К карточке можно добавить максимум 15 ярлыков.<br>
     *     При удалении ярлыка из карточки товара он не удаляется из [списка ярлыков](/openapi/item-management#tag/labels/operation/getV2Tags) продавца.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Ярлыков</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2TagNomenclatureLink']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/get/cards/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список карточек товаров
     * @description Метод возвращает список созданных карточек товаров.
     *
     *     <div class="description_important">
     *       В ответе метода не будет карточек, находящихся в корзине. Получить такие карточки можно через <a href="/openapi/item-management#tag/listings/operation/postV2GetCardsTrash">отдельный метод</a>
     *     </div>
     *
     *     Чтобы получить **больше 100** карточек товаров, используйте пагинацию:
     *       1. Сделайте первый запрос: <br>
     *           <pre style="background-color: rgb(38 50 56 / 5%); color: #e53935">
     *             {
     *               "settings": {
     *                 "sort": {
     *                   "ascending": true
     *                 },
     *                 "cursor": {
     *                   "limit": 100
     *                 },
     *                 "filter": {
     *                   "withPhoto": -1
     *                 }
     *               }
     *             }</pre>
     *          Чтобы после выгрузки получать только новые или обновлённые карточки товаров, используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
     *       2. Скопируйте `"updatedAt":"***","nmID":"***"` из `cursor` ответа и вставьте в `cursor` запроса.
     *       3. Повторите запрос.
     *       4. Повторяйте пункты 2 и 3, пока значение `total` в ответе не станет меньше, чем значение `limit` в запросе. Это будет означать, что вы получили все карточки.
     *
     *     Чтобы получать только карточки товаров, которые были созданы или обновлены после предыдущей выгрузки данных:
     *       1. Сохраните поля `"cursor":{"updatedAt":"***","nmID":"***"}` из последнего ответа предыдущей выгрузки. При выгрузке используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
     *       2. Укажите в первом запросе сохранённые поля `"cursor":{"updatedAt":"***","nmID":"***"}`. Продолжайте использовать сортировку по возрастанию.
     *       3. Сохраните поля `"cursor":{"updatedAt":"***","nmID":"***"}` из последнего ответа текущей выгрузки.
     *
     *     <br><br>
     *     В объекте `documents` метод возвращает:
     *       - информацию о переданных документах — массив `items`
     *       - результаты проверки по каждому документу — объект `verdict` в `items`. Если `verdict` не возвращается в ответе — проверка документа ещё не завершена
     *       - результат проверки всей карточки — объект `overallVerdict`. Проверка всей карточки включает проверку не только документов, но и других данных. Например, наличия обязательной маркировки и сведений из внешних реестров. Если `overallVerdict` не возвращается в ответе — проверка карточки ещё не завершена
     *
     *     Проверки документов и карточки выполняются асинхронно и могут занимать до 3 дней.
     *     Каждое изменение результата проверки обновляет дату и время изменения карточки в поле ответа `updatedAt`. <br>
     *     Чтобы получить новые результаты проверки, используйте выгрузку с пагинацией с сортировкой по возрастанию.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     </div>
     */
    post: operations['postV2GetCardsList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/error/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список несозданных карточек товаров с ошибками
     * @description Метод возвращает список карточек товаров ([черновиков](https://seller.wildberries.ru/new-goods/error-cards)), при создании или редактировании которых произошли ошибки, с описанием этих ошибок.
     *     <br><br>
     *     Данные в ответе возвращаются пакетами `batch`. Один пакет содержит:
     *       - все ошибки по одному массиву `variants` одного запроса при [создании](/openapi/item-management#tag/listingItems/operation/postV2CardsUpload) карточек товаров
     *       - все ошибки одного запроса при [создании с присоединением](/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd) или [редактировании](/openapi/item-management#tag/listings/operation/postV2CardsUpdate) карточек товаров
     *     <br><br>
     *     Чтобы получить более 100 пакетов, используйте пагинацию:
     *       1. Сделайте первый запрос: <br>
     *           <pre style="background-color: rgb(38 50 56 / 5%); color: #e53935">
     *             {
     *               "cursor": {
     *                 "limit": 100
     *               },
     *               "order": {
     *                 "ascending": true
     *               }
     *             }</pre>
     *       2. Скопируйте `"updatedAt":"***","batchUUID":"***" `из `cursor` ответа и вставьте в `cursor` запроса.
     *       3. Повторите запрос.
     *       4. Повторяйте пункты 2 и 3, пока не получите в ответе `"next":false`. Это будет означать, что вы получили все пакеты.
     *
     *     <div class="description_important">
     *       Чтобы удалить карточку товара из списка, сделайте ещё один запрос на создание, создание с присоединением или редактирование карточки товара с исправленными ошибками
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/getV2CardsLimits">получения лимитов карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsErrorList">получения несозданных карточек товаров с ошибками</a></li>
     *     </ul>
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 10 запросов | 6 сек | 5 запросов |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2CardsErrorList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/update': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Редактирование карточек товаров
     * @description Метод обновляет данные карточек товаров. Также используйте его, чтобы добавлять новые размеры и документы.
     *
     *     <div class="description_important">
     *       Карточка товара перезаписывается при обновлении. Поэтому в запросе нужно передать в том числе те параметры карточки, которые вы не собираетесь обновлять. Их значения можно получить в <a href="/openapi/item-management#tag/listings/operation/postV2GetCardsList">списке карточек товаров</a> и <a href="/openapi/item-management#tag/listings/operation/postV2GetCardsTrash">списке карточек товаров в корзине</a>.<br><br>
     *       <br>
     *       При обновлении карточки объект <strong>documents</strong> также полностью перезаписывается. Передавайте в запросе данные всех документов, которые должны остаться в карточке, включая документы без изменений.
     *     </div>
     *
     *     С помощью этого метода нельзя обновлять или удалять:
     *       - баркоды размеров товара. Можно только добавить дополнительные баркоды
     *       - параметры `photos`, `video` и `tags`
     *       - цены товаров. Цену можно задать, только если вы добавляете новые размеры
     *
     *     При добавлении нового размера укажите его цену через параметр `price`. Если в запросе не указан `price`, цена размера будет `0` — в этом случае изменить её можно будет с помощью методов:
     *       - [Установить цены и скидки](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTask), если у [товара](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter) `"editablePriceSize":false`
     *       - [Установить цены для размеров](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskSize), если у [товара](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter) `"editablePriceSize":true`
     *
     *     Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
     *     <br><br>
     *     Одним запросом можно отредактировать максимум 3000 карточек товаров (`nmID`). Максимальный размер запроса 10 Мб.<br>
     *     Если ответ `Успешно` (`200`), но какие-то карточки не обновились, проверьте [список несозданных карточек товаров](/openapi/item-management#tag/listings/operation/postV2CardsErrorList).<br>
     *     Синхронизация данных с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены. <br><br>
     *
     *     Чтобы прикрепить документы к карточке товара, передайте данные документов в объекте запроса `documents`. <br>
     *     Чтобы внести изменения в прикрепленный к карточке документ, передайте `id` документа и его данные в объекте запроса `documents`. Получить `id` документа вы можете в [списке карточек товара](/item-management#tag/listings/operation/postV2GetCardsList).
     *     После изменения документа или добавления нового документа карточка повторно отправляется на проверку.<br><br>
     *     Проверка документов выполняется асинхронно и может занимать до 3 дней. <br>
     *     Вы можете изменить карточку снова до завершения текущей проверки. При этом проверка запустится повторно, а карточка сохранит текущий статус до завершения новой проверки.<br>
     *     Если карточка была доступна для продажи до обновления документа, она будет доступна и до получения нового результата проверки. Если карточка уже была заблокирована, то после обновления данных она останется заблокированной до получения положительного результата повторной проверки.
     *     <br><br>
     *     Результаты проверки отображаются в [списке карточек товаров](/openapi/item-management#tag/listings/operation/postV2GetCardsList), объект `documents`:
     *       - результат по каждому документу в полях `verdict` объекта `items`. Если `verdict` не возвращается в ответе — проверка документа ещё не завершена
     *       - итоговый общий результат по карточке в поле `overallVerdict`. При общей проверке карточки учитываются не только результаты проверки документов, но и другие данные. Например, наличие обязательной маркировки и сведения из внешних реестров. Если `overallVerdict` не возвращается в ответе — проверка карточки ещё не завершена
     *
     *     <div class="description_important">
     *       Типы документов, которые вы можете добавить для товара, указаны в <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId">характеристиках предмета</a>.
     *       <br>
     *       При этом не все документы, которые вы можете добавить, обязательны и проходят проверку — вы самостоятельно определяете, какие разрешительные документы требуются для товара в соответствии с законодательством.
     *     </div>
     *
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 10 запросов | 6 сек | 5 запросов |
     *     </div>
     */
    post: operations['postV2CardsUpdate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/moveNm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Объединение и разъединение карточек товаров
     * @description Метод [объединяет и разъединяет](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров. Карточки товаров являются объединёнными, если у них одинаковый `imtID`.
     *     <br><br>
     *     Для объединения карточек товаров сделайте запрос **с указанием** `imtID`. Можно объединять не более 30 карточек товаров.<br>
     *     Для разъединения карточек товаров сделайте запрос **без указания** `imtID`. Для разъединенных карточек будут сгенерированы новые `imtID`.
     *     <br><br>
     *     Если вы разъедините одновременно несколько карточек товаров, эти карточки объединятся в одну и получат новый `imtID`.<br>
     *     Чтобы присвоить каждой карточке товара уникальный `imtID`, необходимо передавать по одной карточке товара за запрос.<br>
     *     <br>
     *     Максимальный размер запроса 10 Мб.
     *
     *     <div class="description_important">
     *       Объединить можно карточки товаров только в рамках одного предмета
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2CardsMoveNm']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/delete/trash': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Перенос карточек товаров в корзину
     * @description Метод переносит [карточки товаров в корзину](/openapi/item-management#tag/listings/operation/postV2GetCardsTrash). При этом карточки товаров не удаляются, их можно [восстановить](/openapi/item-management#tag/listings/operation/postV2CardsRecover).
     *
     *     <div class="description_important">
     *       После переноса в корзину карточке товара присваивается новый <code>imtID</code> — ID для <a href="/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov">объединённых</a> карточек товаров
     *     </div>
     *
     *     Карточки товаров удаляются автоматически, если лежат в корзине больше 30 дней, и на них нет остатков. Очистка корзины происходит каждую ночь по московскому времени.<br>
     *     Карточки товаров можно удалить в любое время в [личном кабинете](https://seller.wildberries.ru/new-goods/basket-cards).
     *     <br><br>
     *     Карточка будет продаваться, пока по ней есть остатки на складе, даже если её переместили в корзину. Чтобы полностью снять карточку с продажи, обнулите остатки.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2CardsDeleteTrash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/recover': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Восстановление карточек товаров из корзины
     * @description Метод восстанавливает [карточки товаров из корзины](/openapi/item-management#tag/listings/operation/postV2GetCardsTrash).
     *
     *     <div class="description_important">
     *       Карточка товара сохраняет тот же <code>imtID</code> — ID для <a href="/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov">объединённых</a> карточек товаров — что был присвоен ей при <a href="/openapi/item-management#tag/listings/operation/postV2CardsDeleteTrash">перемещении в корзину</a>
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 3 запроса | 20 сек | 5 запросов |
     *     | Сервисный | 1 мин | 3 запроса | 20 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV2CardsRecover']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/get/cards/trash': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список карточек товаров в корзине
     * @description Метод возвращает список карточек товаров в корзине.<br><br>
     *
     *     Чтобы получить **больше 100** карточек товаров, используйте пагинацию.
     *       1. Сделайте первый запрос: <br>
     *           <pre style="background-color: rgb(38 50 56 / 5%); color: #e53935">
     *             {
     *               "settings": {
     *                 "sort": {
     *                   "ascending": true
     *                 },
     *                 "cursor": {
     *                   "limit": 100
     *                 }
     *               }
     *             }</pre>
     *          Чтобы получать только карточки товаров, которые были перенесены в корзину после выгрузки, используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
     *       2. Скопируйте `"trashedAt":"***","nmID":***` из `cursor` ответа и вставьте в `cursor` запроса.
     *       3. Повторите запрос.
     *       4. Повторяйте пункты 2 и 3, пока значение `total` в ответе не станет меньше, чем значение `limit` в запросе. Это будет означать, что вы получили все карточки.
     *
     *     Чтобы получать только карточки товаров, которые были перенесены в корзину после предыдущей выгрузки данных:
     *       1. Сохраните поля `"cursor":{"trashedAt":"***","nmID":***}` из последнего ответа предыдущей выгрузки. При выгрузке используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
     *       2. Укажите в первом запросе сохранённые поля `"cursor":{"trashedAt":"***","nmID":"***"}`. Продолжайте использовать сортировку по возрастанию.
     *       3. Сохраните поля `"cursor":{"trashedAt":"***","nmID":***}` из последнего ответа текущей выгрузки.
     *
     *       <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2GetCardsTrash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/limits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Лимиты карточек товаров
     * @description Возвращает бесплатные и платные лимиты продавца на [создание карточек товаров](/openapi/item-management#tag/listingItems/operation/postV2CardsUpload).<br><br>
     *
     *     Формула для получения количества карточек, которые можно создать:
     *
     *     > (`freeLimits` + `paidLimits`) - количество созданных карточек
     *
     *     Созданными считаются карточки, которые можно получить через методы [список карточек товаров](/openapi/item-management#tag/listings/operation/postV2GetCardsList) и [список карточек товаров в корзине](/openapi/item-management#tag/listings/operation/postV2GetCardsTrash).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для методов:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/getV2CardsLimits">получения лимитов карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsErrorList">получения несозданных карточек товаров с ошибками</a></li>
     *     </ul>
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2CardsLimits']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/barcodes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Генерация баркодов
     * @description Метод генерирует массив уникальных баркодов для создания размера в [карточке товара](/openapi/item-management#tag/listingItems/operation/postV2CardsUpload). Можно использовать, если у вас нет собственных баркодов.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Контент</strong>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *
     *     Исключение — методы:
     *
     *     <ul>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUpload">создания карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listingItems/operation/postV2CardsUploadAdd">создания карточек товаров с присоединением</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsUpdate">редактирования карточек товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/listings/operation/postV2CardsRecover">восстановления карточек товаров из корзины</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsList">получения списка рекомендаций в карточках товаров</a></li>
     *         <li><a href="/openapi/item-management#tag/recommendations/operation/postV1RecommendationsSet">установки рекомендаций для товаров</a></li>
     *     </ul>
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2Barcodes']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/upload': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание карточек товаров
     * @description Метод создаёт карточки товаров c указанием описаний и характеристик товаров.<br>
     *
     *     <div class="description_important">
     *       Есть две формы запроса: для создания отдельных и объединённых карточек товаров
     *     </div>
     *
     *     Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
     *     <br><br>
     *     Создание карточки товара происходит асинхронно. Синхронизация новой карточки с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены. <br> В песочнице карточка товара создаётся сразу, без ожидания.<br><br>
     *     Одним запросом можно создать максимум 100 отдельных карточек товаров или 100 групп [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров по 30 карточек в каждой. Максимальный размер запроса 10 Мб.<br>
     *     Если ответ `Успешно` (`200`), но какие-то карточки не создались, проверьте [список несозданных карточек товаров](/openapi/item-management#tag/listings/operation/postV2CardsErrorList).<br><br>
     *
     *     Чтобы прикрепить документы к карточке товара, передайте данные документов в объекте запроса `documents`.<br>
     *     Чтобы подтвердить, что для товара не требуются документы, передайте `true` в параметре `excludeDocuments`.<br><br>
     *     Проверка документов выполняется асинхронно и может занимать до 3 дней. При изменении карточки или документа проверка запускается повторно.<br>
     *     Результаты проверки отображаются в [списке карточек товаров](/openapi/item-management#tag/listings/operation/postV2GetCardsList), объект `documents`:
     *       - результат по каждому документу в полях `verdict` объекта `items`. Если `verdict` не возвращается в ответе — проверка документа ещё не завершена
     *       - итоговый общий результат по карточке в поле `overallVerdict`. При общей проверке карточки учитываются не только результаты проверки документов, но и другие данные. Например, наличие обязательной маркировки и сведения из внешних реестров. Если `overallVerdict` не возвращается в ответе — проверка карточки ещё не завершена
     *
     *     <div class="description_important">
     *       Типы документов, которые вы можете добавить для товара, указаны в <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId">характеристиках предмета</a>.
     *       <br>
     *       При этом не все документы, которые вы можете добавить, обязательны и проходят проверку — вы самостоятельно определяете, какие разрешительные документы требуются для товара в соответствии с законодательством.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 10 запросов | 6 сек | 5 запросов |
     *     </div>
     */
    post: operations['postV2CardsUpload']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v2/cards/upload/add': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Создание карточек товаров с присоединением
     * @description Метод создаёт карточки товаров, присоединяя их к существующим отдельным карточкам и группам [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек. В одной группе объединённых карточек товаров может быть не более 30 карточек, соответственно, создать с присоединением можно не более 29 карточек товаров за один запрос.
     *
     *     Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
     *     <br><br>
     *     Если ответ `Успешно` (`200`), но какие-то карточки не создались, проверьте [список несозданных карточек товаров](/openapi/item-management#tag/listings/operation/postV2CardsErrorList).<br>
     *     Создание карточки товара происходит асинхронно. Синхронизация новой карточки с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены.<br>
     *     В песочнице карточка товара создаётся сразу, без ожидания.<br><br>
     *
     *     Чтобы прикрепить документы к карточке товара, передайте данные документов в объекте запроса `documents`.<br>
     *     Чтобы подтвердить, что для товара не требуются документы, передайте `true` в параметре `excludeDocuments`.<br>
     *     Проверка документов выполняется асинхронно и может занимать до 3 дней. При изменении карточки или документа проверка запускается повторно.<br>
     *     Результаты проверки отображаются в [списке карточек товаров](/openapi/item-management#tag/listings/operation/postV2GetCardsList), объект `documents`:
     *       - результат по каждому документу в полях `verdict` объекта `items`. Если `verdict` не возвращается в ответе — проверка документа ещё не завершена
     *       - итоговый общий результат по карточке в поле `overallVerdict`. При общей проверке карточки учитываются не только результаты проверки документов, но и другие данные. Например, наличие обязательной маркировки и сведения из внешних реестров. Если `overallVerdict` не возвращается в ответе — проверка карточки ещё не завершена
     *
     *     <div class="description_important">
     *       Типы документов, которые вы можете добавить для товара, указаны в <a href="/openapi/item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId">характеристиках предмета</a>.
     *       <br>
     *       При этом не все документы, которые вы можете добавить, обязательны и проходят проверку — вы самостоятельно определяете, какие разрешительные документы требуются для товара в соответствии с законодательством.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 10 запросов | 6 сек | 5 запросов |
     *     | Сервисный | 1 мин | 10 запросов | 6 сек | 5 запросов |
     *     | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 5 запросов |
     *     | Базовый | 2 ч | 1 запрос | 2 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV2CardsUploadAdd']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v3/media/file': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузить медиафайл
     * @description Метод загружает и добавляет один медиафайл к карточке товара.
     *
     *     Требования к изображениям:
     *       * максимум изображений для одной карточки товара — 30
     *       * минимальное разрешение — 700x900 px
     *       * максимальный размер — 32 Мб
     *       * минимальное качество — 65%
     *       * форматы — JPG, PNG, BMP, GIF (статичные), WebP
     *
     *     Требования к видео:
     *       * максимум одно видео для одной карточки товара
     *       * максимальный размер — 50 Мб
     *       * форматы — MOV, MP4
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Медиафайлов</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV3MediaFile']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/content/v3/media/save': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузить медиафайлы по ссылкам
     * @description Метод загружает набор медиафайлов в карточку товара через указание ссылок в запросе.
     *
     *     <div class="description_important">
     *       Новые медиафайлы полностью заменяют старые. Чтобы добавить новые медиафайлы, укажите в запросе ссылки одновременно на новые и старые медиафайлы.
     *     </div>
     *
     *     Требования к ссылкам:
     *       * для доступа к файлу по ссылке не нужна авторизация
     *       * ссылка ведёт прямо на файл. Убедитесь, что ссылка не ведёт на страницу предпросмотра или авторизации. Ссылка должна заканчиваться на имя файла с расширением — например, `/file_name.jpg`. Если по ссылке открывается текстовая страница TXT или HTML, ссылка считается некорректной. <br>
     *       Помните, что некоторые хранилища не формируют прямые ссылки и поэтому не подходят для использования. К таким хранилищам относится, например, **Google Drive**, который формирует ссылки только на предпросмотр файла либо на служебные страницы.
     *
     *     Требования к изображениям:
     *       * максимум изображений для одной карточки товара — 30
     *       * минимальное разрешение — 700×900 px
     *       * максимальный размер — 32 Мб
     *       * минимальное качество — 65%
     *       * форматы — JPG, PNG, BMP, GIF (статичные), WebP
     *
     *     Требования к видео:
     *       * максимум одно видео для одной карточки товара
     *       * максимальный размер — 50 Мб
     *       * форматы — MOV, MP4
     *
     *     Если видео или хотя бы одно изображение в запросе не соответствует требованиям, то даже при успешном ответе (`200`) ни одно изображение/видео не загрузится.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>Медиафайлов</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV3MediaSave']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/content/v1/recommendations/list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Список рекомендаций в карточках товаров
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод возвращает список [рекомендаций](https://seller.wildberries.ru/recommendations-v3) в карточках товаров.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     </div>
     */
    post: operations['postV1RecommendationsList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/content/v1/recommendations/set': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить рекомендации для товаров
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод обновляет, добавляет или удаляет [рекомендации](https://seller.wildberries.ru/recommendations-v3) для товаров.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 100 запросов | 600 мс | 5 запросов |
     *     </div>
     */
    post: operations['postV1RecommendationsSet']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/upload/task': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить цены и скидки
     * @description Метод устанавливает цены и скидки для товаров.
     *     <br><br>
     *     Чтобы установить цены для размеров товара, используйте [отдельный метод](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskSize).
     *
     *     <div class="description_important">
     *       Получить информацию о процессе установки цен и скидок можно с помощью методов <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryTasks">состояния</a> и <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask">детализации</a> обработанной загрузки.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2UploadTask']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/upload/task/size': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить цены для размеров
     * @description Метод устанавливает цены отдельно для размеров товаров.
     *
     *     Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для [таких товаров](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsSizeNm) `"editableSizePrice":true`.
     *
     *     Чтобы установить цены и скидки для самих товаров, используйте [отдельный метод](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTask).
     *
     *     <div class="description_important">
     *       Получить информацию о процессе установки цен и скидок можно с помощью методов <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryTasks">состояния</a> и <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask">детализации</a> обработанной загрузки.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2UploadTaskSize']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/upload/task/club-discount': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить скидки WB Клуба
     * @description Устанавливает скидки для товаров в рамках подписки [WB Клуб](https://seller.wildberries.ru/help-center/article/A-337).
     *
     *     <div class="description_important">
     *       Получить информацию о процессе установки цен и скидок можно с помощью методов <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryTasks">состояния</a> и <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask">детализации</a> обработанной загрузки.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2UploadTaskClubDiscount']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/discounts-prices/v1/upload/task/b2b/wholesale': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Установить оптовые скидки для B2B-продаж
     * @description <div class="description_token">
     *         Метод <a href="/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API">доступен</a> по
     *             <strong>Персональному</strong> токену,
     *             <strong>Сервисному</strong> токену
     *     </div>
     *
     *     Метод устанавливает [оптовые скидки для бизнеса](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-enable-wholesale-discounts-for-business)
     *
     *     <div class="description_important">
     *       Получить информацию о процессе установки цен и скидок можно с помощью методов <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryTasks">состояния</a> и <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask">детализации</a> обработанной загрузки.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *
     *     </div>
     */
    post: operations['postV1UploadTaskB2bWholesale']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/history/tasks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Состояние обработанной загрузки
     * @description Метод возвращает информацию об обработанной загрузке цен и скидок.
     *
     *     <div class="description_important">
     *       Обработанная загрузка — это загрузка цен и скидок для <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTask">товаров</a>, цен для <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskSize">размеров товаров</a>, <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskClubDiscount">скидок WB Клуба</a> и <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV1UploadTaskB2bWholesale">оптовых скидок для B2B-продаж</a>.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2HistoryTasks']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/history/goods/task': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Детализация обработанной загрузки
     * @description Метод возвращает информацию о товарах и об ошибках в товарах в обработанной загрузке.
     *
     *     <div class="description_important">
     *       Обработанная загрузка — это загрузка цен и скидок для <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTask">товаров</a>, цен для <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskSize">размеров товаров</a> <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskClubDiscount">скидок WB Клуба</a> и <a href="/openapi/item-management#tag/pricesAndDiscounts/operation/postV1UploadTaskB2bWholesale">оптовых скидок для B2B-продаж</a>.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2HistoryGoodsTask']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/buffer/tasks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Состояние необработанной загрузки
     * @description Метод возвращает информацию про загрузку скидок в обработке.
     *
     *     <div class="description_important">
     *       Необработанная загрузка — это загрузка скидок в <a href="/openapi/promotion#tag/promoCalendar">календаре акций</a>. Такие скидки применятся к товарам только в момент старта акции.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2BufferTasks']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/buffer/goods/task': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Детализация необработанной загрузки
     * @description Метод возвращает информацию о товарах и ошибках в товарах из загрузки в обработке.
     *
     *     <div class="description_important">
     *       Необработанная загрузка — это загрузка скидок в <a href="/openapi/promotion#tag/promoCalendar">календаре акций</a>. Такие скидки применятся к товарам только в момент старта акции.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2BufferGoodsTask']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/list/goods/filter': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить товары с ценами
     * @description Метод возвращает информацию о товарах: цены, валюту, общие скидки, [скидки WB Клуба](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskClubDiscount) и [оптовые скидки для B2B-продаж](/openapi/item-management#tag/pricesAndDiscounts/operation/postV1UploadTaskB2bWholesale).
     *     <br><br>
     *     В одном запросе можно указать только один артикул.
     *     <br><br>
     *     Чтобы получить информацию обо всех товарах продавца, не указывая артикулы, установите `limit=1000`, в параметре `offset` установите смещение по количеству записей. Количество нужно рассчитать по формуле: `offset` плюс `limit` из предыдущего запроса. Повторяйте запрос, пока вы не получите ответ с пустым массивом.<br><br>
     *     Используйте отдельные методы, чтобы получить информацию:
     *       - о [нескольких товарах по артикулам](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2ListGoodsFilter)
     *       - о [размерах товара](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsSizeNm)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2ListGoodsFilter']
    put?: never
    /**
     * Получить товары с ценами по артикулам
     * @description Метод возвращает информацию о товарах по их артикулам: цены, валюту, общие скидки, [скидки WB Клуба](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskClubDiscount) и [оптовые скидки для B2B-продаж](/openapi/item-management#tag/pricesAndDiscounts/operation/postV1UploadTaskB2bWholesale).
     *     <br><br>
     *     В одном запросе можно указать более одного артикула.
     *     <br><br>
     *     Используйте отдельные методы, чтобы получить информацию:
     *       - обо [всех товарах продавца, не указывая артикулы](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter)
     *       - о [размерах товара](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsSizeNm)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    post: operations['postV2ListGoodsFilter']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/list/goods/size/nm': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить размеры товара с ценами
     * @description Метод возвращает информацию обо всех размерах одного товара: цены, валюту, общие скидки и скидки для [WB Клуба](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskClubDiscount).
     *     <br><br>
     *     Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для таких товаров `"editableSizePrice":true`.
     *     <br><br>
     *     Чтобы получить информацию о самом товаре, используйте [отдельный метод](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2ListGoodsSizeNm']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v2/quarantine/goods': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить товары в карантине
     * @description Метод возвращает информацию о товарах в карантине.
     *     <br><br>
     *     Если новая цена товара со скидкой будет меньше [порогового значения](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine#2ef3641a-5165-41db-9ac7-e4374c9fc3f1), товар попадёт в [карантин](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine) и будет продаваться по старой цене. Ошибка об этом будет в [детализации загрузки](/openapi/item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask).
     *     <br><br>
     *     Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина в [личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine).
     *     <br><br>
     *     Для товаров с [поразмерной установкой цен](/openapi/item-management#tag/pricesAndDiscounts/operation/postV2UploadTaskSize) карантин не применяется.
     *     <br><br>
     *     В [песочнице](/sandbox) товары автоматически удаляются из карантина через 3 дня.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Цены и скидки</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
     *     | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
     *
     *     <hr>
     *
     *     В песочнице — максимум 1 запрос в секунду суммарно для всех методов <strong>Контента</strong>.
     *
     *     </div>
     */
    get: operations['getV2QuarantineGoods']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/stocks/{warehouseId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Обновить остатки товаров
     * @description Метод обновляет количество остатков товаров продавца [в списке](/openapi/item-management#tag/sellerWarehousesInventory/operation/postV3StocksWarehouseId).
     *
     *     <div class="description_important">
     *       Названия параметров запроса не валидируются. При отправке некорректных названий вы получите успешный ответ (<code>204</code>), но остатки не обновятся.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>остатков на складах продавца</strong> кроме метода <a href="/openapi/item-management#tag/sellerWarehousesInventory/operation/deleteV3StocksWarehouseId">удаления остатков</a>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    put: operations['putV3StocksWarehouseId']
    /**
     * Получить остатки товаров
     * @description Метод возвращает данные об остатках товаров на [складах продавца](/openapi/item-management#tag/sellerWarehouses).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>остатков на складах продавца</strong> кроме метода <a href="/openapi/item-management#tag/sellerWarehousesInventory/operation/deleteV3StocksWarehouseId">удаления остатков</a>:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 300 запросов | 200 мс | 20 запросов |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    post: operations['postV3StocksWarehouseId']
    /**
     * Удалить остатки товаров
     * @description Метод удаляет запись об остатках товаров продавца из [списка остатков](/openapi/item-management#tag/sellerWarehousesInventory/operation/postV3StocksWarehouseId).
     *
     *     <div class="description_important">
     *       <strong>Действие необратимо</strong>. Удаленный остаток будет необходимо загрузить повторно для возобновления продаж.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *     | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- |
     *     | 1 мин | 10 запросов | 6 сек | 2 запроса |
     *
     *     Один запрос с кодами ответов <code>4XX</code> учитывается как 10 запросов.
     *
     *     <hr>
     *
     *     В <a href='/sandbox'>песочнице</a> — максимум 1 запрос в секунду суммарно для всех методов <strong>Маркетплейса</strong>.
     *
     *     </div>
     */
    delete: operations['deleteV3StocksWarehouseId']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/offices': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список складов WB
     * @description Метод возвращает список складов WB для привязки к складу продавца при его [создании](/openapi/item-management#tag/sellerWarehouses/operation/postV3Warehouses) или [редактировании](/openapi/item-management#tag/sellerWarehouses/operation/putV3WarehousesWarehouseId).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>складов продавца</strong>:
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
    get: operations['getV3Offices']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/warehouses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить список складов продавца
     * @description Метод возвращает список всех складов продавца. Может использоваться для работы с [остатками товаров](/openapi/item-management#tag/sellerWarehousesInventory).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>складов продавца</strong>:
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
    get: operations['getV3Warehouses']
    put?: never
    /**
     * Создать склад продавца
     * @description Метод создаёт склад продавца для работы с [остатками товаров](/openapi/item-management#tag/sellerWarehousesInventory), кроме сверхгабаритных (СГТ), по модели [FBS](/openapi/orders-fbs) (Fulfillment by Seller).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>складов продавца</strong>:
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
    post: operations['postV3Warehouses']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/warehouses/{warehouseId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Обновить склад продавца
     * @description Метод обновляет данные [склада продавца](/openapi/item-management#tag/sellerWarehouses/operation/getV3Warehouses), кроме складов для сверхгабаритных товаров (СГТ, `"cargoType":2`).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>складов продавца</strong>:
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
    put: operations['putV3WarehousesWarehouseId']
    post?: never
    /**
     * Удалить склад продавца
     * @description Метод удаляет [склад продавца](/openapi/item-management#tag/sellerWarehouses/operation/getV3Warehouses).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов <strong>складов продавца</strong>:
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
    delete: operations['deleteV3WarehousesWarehouseId']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v3/dbw/warehouses/{warehouseId}/contacts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список контактов
     * @description Метод возвращает список контактов, привязанных к [складу продавца](/openapi/item-management#tag/sellerWarehouses/operation/getV3Warehouses).
     *     <br>
     *     Только для складов с типом доставки `3` — Деливери WB ([DBW](/openapi/orders-dbw)).
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
    get: operations['getV3DbwWarehousesWarehouseIdContacts']
    /**
     * Обновить список контактов
     * @description Метод обновляет список контактов [склада продавца](/openapi/item-management#tag/sellerWarehouses/operation/getV3Warehouses).
     *
     *     <div class="description_important">
     *       Список контактов перезаписывается при обновлении. Поэтому в запросе нужно передать <strong>все</strong> параметры списка контактов, в том числе те, которые вы не собираетесь обновлять.
     *     </div>
     *
     *     Только для складов с типом доставки `3` — Деливери WB (DBW).
     *     <br><br>
     *     К складу можно добавить максимум 5 контактов. Чтобы удалить контакты, отправьте пустой массив `contacts`.
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
    put: operations['putV3DbwWarehousesWarehouseIdContacts']
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
    BrandsResponse: {
      brands: {
        /**
         * @description ID бренда
         * @example 9007199254
         */
        id: number
        /** @description URL логотипа бренда */
        logoUrl: string
        /**
         * @description Название бренда
         * @example Brand
         */
        name: string
      }[]
      /**
       * @description Параметр пагинации. Укажите это значение в запросе, чтобы получить следующий пакет данных. Если поле отсутствует, вы получили все данные
       * @example 1212
       */
      next?: number
      /**
       * @description Общее количество брендов предмета
       * @example 344534
       */
      total: number
    }
    BrandsResponseError: {
      /** @description Заголовок ошибки */
      title: string
      /** @description Детали ошибки */
      detail: string
      /** @description ID внутреннего сервиса WB */
      origin: string
      /** @description Уникальный ID запроса */
      requestId: string
      errors?: {
        /** @description Текст ошибки */
        message?: string
        /** @description Параметр, где произошла ошибка */
        location?: string
        /** @description Значение параметра, где произошла ошибка */
        value?: unknown
      }[]
    }
    /** @description Контакты склада продавца */
    StoreContactRequestBody: {
      contacts?: {
        /**
         * @description Комментарий
         * @example Иванов Иван Иванович. Звонить с 10 до 21 часа.
         */
        comment?: string
        /**
         * @description Номер телефона.<br>Поддерживаются коды стран:
         *       - `+7` — Россия, Казахстан
         *       - `+374` — Армения
         *       - `+375` — Беларусь
         *       - `+996` — Кыргызстан
         * @example +79998887766
         */
        phone?: string
      }[]
    }
    responseItemList: {
      /**
       * @description Данные ответа
       * @example null
       */
      data?: Record<string, never> | null
      /** @description Флаг ошибки */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
      /** @description Дополнительные ошибки */
      additionalErrors?:
        | {
            string?: string | null
          }
        | (string | null)
        | {
            error: string
          }
    }
    requestMoveNmsImtConn: {
      /**
       * @description Существующий `imtID`, под которым необходимо [объединить](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров
       * @example 123
       */
      targetIMT: number
      /**
       * @description `nmID`, которые необходимо объединить
       * @example [
       *       837459235,
       *       828572090
       *     ]
       */
      nmIDs: number[]
    }
    requestMoveNmsImtDisconn: {
      /**
       * @description `nmID`, которые необходимо разъединить
       * @example [
       *       837459235,
       *       828572090
       *     ]
       */
      nmIDs: number[]
    }
    responseIncorrectDate: {
      error: string
    }
    responseBodyContentError400: {
      /**
       * @description Данные ошибки
       * @example {}
       */
      data?: Record<string, never> | null
      /**
       * @description Флаг ошибки
       * @example true
       */
      error?: boolean
      /**
       * @description Описание ошибки
       * @example Bad request
       */
      errorText?: string
      /**
       * @description Дополнительные ошибки
       * @example {}
       */
      additionalErrors?: Record<string, never> | null
    }
    /**
     * @example {
     *       "data": null,
     *       "error": true,
     *       "errorText": "Access denied",
     *       "additionalErrors": "Access denied"
     *     }
     */
    responseBodyContentError403: {
      /** @description Данные ошибки */
      data?: Record<string, never> | null
      /** @description Флаг ошибки */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
      /** @description Дополнительные ошибки */
      additionalErrors?: string | null
    }
    /**
     * @example {
     *       "data": null,
     *       "error": false,
     *       "errorText": "",
     *       "additionalErrors": null
     *     }
     */
    responseContentError: {
      /** @description Данные ошибки */
      data?: Record<string, never> | null
      /** @description Флаг ошибки */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
      /** @description Дополнительные ошибки */
      additionalErrors?: string | null
    }
    /**
     * @example {
     *       "additionalErrors": null,
     *       "data": null,
     *       "error": true,
     *       "errorText": "Failed to deserialize the JSON body into the target type"
     *     }
     */
    mediaErrors: {
      /** @description Дополнительные ошибки */
      additionalErrors?: Record<string, never> | null
      /** @description Данные ошибки */
      data?: Record<string, never> | null
      /** @description Флаг ошибки */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
    }
    ResponseError: {
      /** @description Данные ошибки */
      data?: Record<string, never> | null
      /** @description Флаг ошибки */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
    }
    ResponseErrorV3: {
      /**
       * @description HTTP статус-код
       * @example 400
       */
      status: number
      /**
       * @description Заголовок ошибки
       * @example Bad Request
       */
      title: string
      /**
       * @description Детали ошибки
       * @example Invalid data format
       */
      detail: string
      /**
       * @description ID запроса
       * @example 4b387d2e-13b0-4be7-a34c-be01fb35fd2d
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example discounts-prices
       */
      origin: string
    }
    RequestAlreadyExistsError: {
      /** @description Данные ответа */
      data?: {
        /** @description ID загрузки */
        id?: number
        /** @description Флаг дублирования загрузки: `true` — такая загрузка уже есть */
        alreadyExists?: boolean
      }
      /** @description Флаг ошибки */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
    }
    UpdateBlocked: {
      /** @description Код ошибки */
      code: string
      /** @description Детали ошибки */
      message: string
    }
    StocksWarehouseError: {
      /** @description Дополнительная информация об ошибке */
      data?: {
        /** @description Не используется */
        sku: string
        /**
         * Format: uint64
         * @description ID размера
         */
        chrtId: number
        /** @description Остаток */
        amount: number
      }[]
      /** @description Код ошибки */
      code: string
      /** @description Детали ошибки */
      message: string
    }[]
    TaskCreated: {
      /** @description Данные ответа */
      data?: {
        /** @description ID загрузки */
        id?: number
        /**
         * @description Флаг дублирования загрузки: `true` — такая загрузка уже есть
         * @example false
         */
        alreadyExists?: boolean
      }
      /**
       * @description Флаг ошибки
       * @example false
       */
      error?: boolean
      /**
       * @description Описание ошибки
       * @example
       */
      errorText?: string
    }
    /**
     * @description Товары, цены и скидки для них. Максимум 1 000 товаров. Цена и скидка не могут быть пустыми одновременно.
     *     <br><br>
     *     Если новая цена товара со скидкой будет меньше [порогового значения](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine#2ef3641a-5165-41db-9ac7-e4374c9fc3f1), товар попадёт в [карантин](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine) и будет продаваться по старой цене. Ошибка об этом будет в [детализации загрузки](./item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask).
     *     <br><br>
     *     Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина в [личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine)
     */
    Items: components['schemas']['Item'][]
    Item: {
      /**
       * @description Артикул WB
       * @example 123
       */
      nmID: number
      /**
       * @description Цена. Валюту можно получить с помощью методов [Получить товары с ценами](./item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter) и [Получить товары с ценами по артикулам](./item-management#tag/pricesAndDiscounts/operation/postV2ListGoodsFilter), поле `currencyIsoCode4217`
       * @example 999
       */
      price?: number | null
      /**
       * @description Скидка, %
       * @example 30
       */
      discount?: number | null
    }
    /**
     * @description Размеры и цены для них. Максимум 1 000 размеров.
     *     <br><br>
     *     Для товаров с поразмерной установкой цен [карантин](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine) не применяется
     */
    SizeItemsBody: components['schemas']['SizeGoodReq'][]
    SizeGoodReq: {
      /**
       * @description Артикул WB
       * @example 123
       */
      nmID: number
      /**
       * @description ID размера. Можно получить с помощью методов [Получить товары с ценами](./item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter) и [Получить товары с ценами по артикулам](./item-management#tag/pricesAndDiscounts/operation/postV2ListGoodsFilter), поле `sizeID`. В методах Контента это поле `chrtID`
       * @example 98989887
       */
      sizeID: number
      /**
       * @description Цена. Валюту можно получить с помощью методов [Получить товары с ценами](./item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter) и [Получить товары с ценами по артикулам](./item-management#tag/pricesAndDiscounts/operation/postV2ListGoodsFilter), поле `currencyIsoCode4217`
       * @example 999
       */
      price: number
    }
    /** @description Товары и скидки WB Клуба для них. Максимум 1 000 товаров. */
    ClubDisc: components['schemas']['ClubDiscReq'][]
    ClubDiscReq: {
      /**
       * @description Артикул WB
       * @example 123
       */
      nmID: number
      /**
       * @description Скидка WB Клуба, %
       * @example 5
       */
      clubDiscount: number
    }
    /** @description Товары и оптовые скидки для B2B */
    B2BWholesale: {
      /**
       * @description Артикул WB
       * @example 694707813
       */
      nmId: number
      /** @description Оптовые скидки разных уровней для B2B */
      wholesaleDiscountThreshold: components['schemas']['WholesaleDiscountThresholdReq'][]
    }[]
    WholesaleDiscountThresholdReq: {
      /**
       * @description Минимальное количество единиц товара для скидки
       * @example 10
       */
      minQuantity: number
      /**
       * @description Скидка, %.<br>Чтобы удалить скидку, укажите `0`. Такой запрос одновременно удалит скидки на этом уровне и на всех более высоких уровнях `level` — вне зависимости от указания их в запросе
       * @example 10
       */
      wholesaleDiscount: number
      /**
       * @description Уровень скидки
       * @example 1
       */
      level: number
    }
    WholesaleDiscountThresholdRes: {
      /**
       * @description Минимальное количество единиц товара для скидки
       * @example 10
       */
      minQuantity: number
      /**
       * @description Скидка, %
       * @example 10
       */
      wholesaleDiscount: number
      /**
       * @description Уровень скидки
       * @example 1
       */
      level: number
    }
    /** @description Размеры товара */
    ItemsList: {
      /**
       * @description Артикул WB
       * @example 98486
       */
      nmID?: number
      /**
       * @description Артикул продавца
       * @example 07326060
       */
      vendorCode?: string
      /** @description Размер */
      sizes?: {
        /**
         * Format: int64
         * @description ID размера. В методах Контента это поле `chrtID`
         * @example 3123515574
         */
        sizeID: number
        /**
         * @description Цена
         * @example 500
         */
        price: number
        /**
         * @description Цена со скидкой
         * @example 350
         */
        discountedPrice: number
        /**
         * @description Цена со скидкой, включая скидку WB Клуба
         * @example 332.5
         */
        clubDiscountedPrice: number
        /**
         * @description Размер товара
         * @example 42
         */
        techSizeName: string
      }[]
      /**
       * @description Валюта, по стандарту ISO 4217
       * @example RUB
       */
      currencyIsoCode4217?: string
      /**
       * @description Скидка, %
       * @example 30
       */
      discount?: number
      /**
       * @description Скидка WB Клуба, %
       * @example 5
       */
      clubDiscount?: number
      /**
       * @description Можно ли устанавливать цены отдельно для разных размеров (зависит от категории товара):
       *       - `true` — можно
       *       - `false` — нельзя
       * @example true
       */
      editableSizePrice?: boolean
      /** @description Оптовые скидки разных уровней для B2B */
      wholesaleDiscountThreshold?: components['schemas']['WholesaleDiscountThresholdRes'][]
    }
    /** @description Информация о размере */
    SizeGood: {
      /**
       * @description Артикул WB
       * @example 123
       */
      nmID?: number
      /**
       * @description ID размера. Можно получить с помощью метода [Получение списка товаров по артикулам](./item-management#tag/pricesAndDiscounts/operation/getV2ListGoodsFilter), поле `sizeID`. В методах Контента это поле `chrtID`
       * @example 98989887
       */
      sizeID?: number
      /**
       * @description Артикул продавца
       * @example 34552332
       */
      vendorCode?: string
      /**
       * @description Цена
       * @example 1000
       */
      price?: number
      /**
       * @description Валюта, по стандарту ISO 4217
       * @example RUB
       */
      currencyIsoCode4217?: string
      /**
       * @description Цена со скидкой
       * @example 700
       */
      discountedPrice?: number
      /**
       * @description Цена со скидкой, включая скидку WB Клуба
       * @example 665
       */
      clubDiscountedPrice?: number
      /**
       * @description Скидка, %
       * @example 30
       */
      discount?: number
      /**
       * @description Скидка WB Клуба, %
       * @example 5
       */
      clubDiscount?: number
      /**
       * @description Размер товара
       * @example 42
       */
      techSizeName?: string
      /**
       * @description Можно ли устанавливать цены отдельно для разных размеров (зависит от категории товара):
       *       - `true` — можно
       *       - `false` — нельзя
       * @example true
       */
      editableSizePrice?: boolean
    }
    GoodBufferHistory: {
      /**
       * @description Артикул WB
       * @example 544833232
       */
      nmID?: number
      /**
       * @description Артикул продавца
       * @example 34552332
       */
      vendorCode?: string
      /**
       * @description ID размера. В методах Контента это поле `chrtID`
       * @example 54483342
       */
      sizeID?: number
      /**
       * @description Размер
       * @example XXL
       */
      techSizeName?: string
      /**
       * @description Цена
       * @example 1500
       */
      price?: number
      /**
       * @description Валюта, по стандарту ISO 4217
       * @example RUB
       */
      currencyIsoCode4217?: string
      /**
       * @description Скидка, %
       * @example 25
       */
      discount?: number
      /**
       * @description Скидка WB Клуба, %
       * @example 5
       */
      clubDiscount?: number
      status?: components['schemas']['ItemStatusBuffer']
      /**
       * @description Описание ошибки
       * @example null
       */
      errorText?: string | null
    }
    GoodHistory: {
      /**
       * @description Артикул WB
       * @example 544833232
       */
      nmID?: number
      /**
       * @description Артикул продавца
       * @example 34552332
       */
      vendorCode?: string
      /**
       * @description ID размера. В методах Контента это поле `chrtID`
       * @example 54483342
       */
      sizeID?: number | null
      /**
       * @description Размер
       * @example 42
       */
      techSizeName?: string
      /**
       * @description Цена
       * @example 1500
       */
      price?: number | null
      /**
       * @description Валюта, по стандарту ISO 4217
       * @example RUB
       */
      currencyIsoCode4217?: string
      /**
       * @description Скидка, %
       * @example 25
       */
      discount?: number
      /**
       * @description Скидка WB Клуба, %
       * @example 5
       */
      clubDiscount?: number | null
      status?: components['schemas']['ItemStatus']
      /**
       * @description Описание ошибки. Например:
       *       - `New price is several times lower than the current price. Item has been moved to Price Quarantine` — ошибка возникает, если новая цена со скидкой меньше [порогового значения](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine#2ef3641a-5165-41db-9ac7-e4374c9fc3f1). Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина в [личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine).
       * @example New price is several times lower than the current price. Item has been moved to Price Quarantine
       */
      errorText?: string | null
    }
    /** @description Данные ответа */
    SellerTaskMetadata: {
      /**
       * @description ID загрузки
       * @example 395643565
       */
      uploadID?: number
      status?: components['schemas']['TaskStatus']
      uploadDate?: components['schemas']['Date']
      activationDate?: components['schemas']['Date1']
      /** @description Всего товаров */
      overAllGoodsNumber?: number
      /** @description Товаров без ошибок */
      successGoodsNumber?: number
    } | null
    /** @description Данные ответа */
    SellerTaskMetadataBuffer: {
      /**
       * @description ID загрузки
       * @example 395643565
       */
      uploadID?: number
      status?: components['schemas']['TaskStatusBuffer']
      uploadDate?: components['schemas']['Date']
      activationDate?: components['schemas']['Date1']
      /**
       * @description Всего товаров
       * @example 100
       */
      overAllGoodsNumber?: number
      /**
       * @description Товаров без ошибок (0, потому что загрузка в обработке)
       * @example 0
       */
      successGoodsNumber?: number
    } | null
    /**
     * Format: date-time
     * @description Дата и время, когда загрузка создана
     * @example 2022-08-21T22:00:13+02:00
     */
    Date: string
    /**
     * Format: date-time
     * @description Дата и время, когда загрузка отправляется в обработку
     * @example 2022-08-21T22:00:13+02:00
     */
    Date1: string
    /**
     * @description Статус загрузки:
     *       * `3` — обработана, в товарах нет ошибок, цены и скидки обновились
     *       * `4` — отменена
     *       * `5` — обработана, но в товарах есть ошибки. Для товаров без ошибок цены и скидки обновились, а ошибки в остальных товарах можно получить с помощью метода [Детализация обработанной загрузки](./item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask)
     *       * `6` — обработана, но во всех товарах есть ошибки. Их тоже можно получить с помощью метода [Детализация обработанной загрузки](./item-management#tag/pricesAndDiscounts/operation/getV2HistoryGoodsTask)
     * @example 3
     */
    TaskStatus: number
    /**
     * @description Статус загрузки: `1` — в обработке
     * @example 1
     */
    TaskStatusBuffer: number
    /**
     * @description Статус товара:
     *       * `2` — товар без ошибок, цена и/или скидка обновилась
     *       * `3` — есть ошибки, данные не обновились
     * @example 1
     */
    ItemStatus: number
    /**
     * @description Статус товара: `1` — в обработке
     * @example 1
     */
    ItemStatusBuffer: number
    Error: {
      /** @description Код ошибки */
      code: string
      /** @description Детали ошибки */
      message: string
    }
    QuarantineItems: {
      /**
       * @description Артикул WB
       * @example 206025152
       */
      nmID?: number
      /**
       * @description Не используется
       * @example null
       */
      sizeID?: number | null
      /**
       * @description Не используется
       * @example
       */
      techSizeName?: string
      /**
       * @description Валюта по стандарту ISO 4217
       * @example RUB
       */
      currencyIsoCode4217?: string
      /**
       * Format: float
       * @description Новая цена продавца до скидки
       * @example 134
       */
      newPrice?: number | null
      /**
       * Format: float
       * @description Текущая цена продавца до скидки
       * @example 4000
       */
      oldPrice?: number
      /**
       * @description Новая скидка продавца, %
       * @example 25
       */
      newDiscount?: number | null
      /**
       * @description Текущая скидка продавца, %
       * @example 25
       */
      oldDiscount?: number
      /**
       * Format: float
       * @description Разница: `newPrice` * (1 - `newDiscount` / 100) - `oldPrice` * (1 - `oldDiscount` / 100)
       * @example -2899.5
       */
      priceDiff?: number
    }
    /** @description Данные о складе WB */
    Office: {
      /**
       * @description Адрес
       * @example ул. Троицкая, Подольск, Московская обл.
       */
      address?: string
      /**
       * @description Название
       * @example Коледино
       */
      name?: string
      /**
       * @description Город
       * @example Москва
       */
      city?: string
      /**
       * Format: int64
       * @description ID
       * @example 15
       */
      id?: number
      /**
       * Format: float64
       * @description Долгота
       * @example 55.386871
       */
      longitude?: number
      /**
       * Format: float64
       * @description Широта
       * @example 37.588898
       */
      latitude?: number
      /**
       * @description Тип товара, который принимает склад:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @example 1
       * @enum {integer}
       */
      cargoType?: 1 | 3
      /**
       * @description Тип доставки, который принимает склад:
       *       - `1` — доставка на склад WB (FBS)
       *       - `2` — доставка силами продавца (DBS)
       *       - `3` — Деливери WB (DBW)
       *       - `5` — самовывоз (C&C)
       *       - `6` — экспресс-доставка силами продавца (ЕDBS)
       * @example 1
       * @enum {integer}
       */
      deliveryType?: 1 | 2 | 3 | 5 | 6
      /**
       * @description Федеральный округ склада WB. Если `null`, склад находится за пределами РФ или федеральный округ не указан
       * @example Центральный
       */
      federalDistrict?: string | null
      /** @description Признак того, что склад уже выбран продавцом */
      selected?: boolean
    }
    /** @description Данные о складе продавца */
    Warehouse: {
      /**
       * @description Название склада продавца
       * @example ул. Троицкая, Подольск, Московская обл.
       */
      name?: string
      /**
       * Format: int64
       * @description ID склада WB
       * @example 15
       */
      officeId?: number
      /**
       * Format: int64
       * @description ID склада продавца
       * @example 1
       */
      id?: number
      /**
       * @description Тип товара:
       *       - `1` — малогабаритный товар (МГТ)
       *       - `2` — сверхгабаритный товар (СГТ)
       *       - `3` — крупногабаритный товар (КГТ+)
       * @example 1
       * @enum {integer}
       */
      cargoType?: 1 | 2 | 3
      /**
       * @description Тип доставки, который принимает склад:
       *       - `1` — доставка на склад WB (FBS)
       *       - `2` — доставка силами продавца (DBS)
       *       - `3` — Деливери WB (DBW)
       *       - `5` — самовывоз (C&C)
       *       - `6` — экспресс-доставка силами продавца (ЕDBS)
       * @example 1
       * @enum {integer}
       */
      deliveryType?: 1 | 2 | 3 | 5 | 6
      /**
       * @description Склад удаляется:
       *       - `false` — нет
       *       - `true` — да
       *
       *     После удаления склад пропадёт из списка
       * @example false
       */
      isDeleting?: boolean
      /**
       * @description Данные склада обновляются:
       *       - `false` — нет
       *       - `true` — да, обновление и удаление остатков недоступно
       *
       *     Обновление данных может занимать несколько минут
       * @example true
       */
      isProcessing?: boolean
    }
    responsePublicViewerPublicErrorsTableListV2: {
      data: components['schemas']['models.ErrorTableListPublicRespV2']
      /** @description Флаг ошибки */
      error: boolean
      /** @description Описание ошибки */
      errorText: string
      /** @description Дополнительные ошибки */
      additionalErrors: Record<string, never> | null
    }
    /** @description Данные ответа */
    'models.ErrorTableListPublicRespV2': {
      /** @description Пакеты данных */
      items: components['schemas']['models.ErrorTableListPublicRespV2Item'][]
      cursor: components['schemas']['viewer_contract.PublicErrorsCursorOutput']
    }
    'models.ErrorTableListPublicRespV2Item': {
      /**
       * Format: UUID
       * @description ID пакета
       */
      batchUUID: string
      /** @description Предметы. Разбивка по `vendorCodes` */
      subjects: {
        [key: string]: components['schemas']['models.ErrorSubcategory']
      }
      /** @description Бренды. Разбивка по `vendorCodes` */
      brands: {
        [key: string]: components['schemas']['models.ErrorBrand']
      }
      /** @description Артикулы продавца */
      vendorCodes: string[]
      /** @description Ошибки. Разбивка по `vendorCodes` */
      errors: {
        [key: string]: string[]
      }
      /**
       * Format: date-time
       * @description Дата и время создания или редактирования пакета
       */
      updatedAt: string
    }
    /** @description Пагинатор */
    'viewer_contract.PublicErrorsCursorOutput': {
      /**
       * @description Есть ли ещё черновики:
       *       - `false` — нет
       *       - `true` — да
       */
      next: boolean
      /**
       * Format: date-time
       * @description Дата и время формирования последнего пакета в ответе
       */
      updatedAt: string
      /**
       * Format: UUID
       * @description ID последнего пакета в ответе
       */
      batchUUID: string
    }
    'models.ErrorSubcategory': {
      /**
       * Format: uint64
       * @description ID предмета
       */
      id: number
      /** @description Название предмета */
      name: string
    }
    'models.ErrorBrand': {
      /**
       * Format: uint64
       * @description ID бренда
       */
      id?: number
      /** @description Бренд */
      name?: string
    }
    requestPublicViewerPublicErrorsTableListV2: {
      cursor?: components['schemas']['swagger.PublicErrorsCursorInput']
      order?: components['schemas']['swagger.PublicErrorsOrderV2']
    }
    /** @description Пагинатор */
    'swagger.PublicErrorsCursorInput': {
      /**
       * Format: int
       * @description Количество пакетов в ответе
       * @default 100
       */
      limit: number
      /**
       * Format: date-time
       * @description Дата и время формирования последнего пакета в ответе на предыдущий запрос
       */
      updatedAt?: string
      /**
       * Format: UUID
       * @description ID последнего пакета в ответе на предыдущий запрос
       */
      batchUUID?: string
    }
    /** @description Порядок выдачи пакетов */
    'swagger.PublicErrorsOrderV2': {
      /**
       * @description - `false` — сортировка по убыванию
       *     - `true` — сортировка по возрастанию
       * @default true
       */
      ascending: boolean
    }
    /** @description Запрос для получения рекомендаций */
    GetRecomReq: {
      /**
       * @description Бренды
       * @example [
       *       "Comma"
       *     ]
       */
      brandNames?: string[]
      /**
       * @description Количество товаров в ответе
       * @default 20
       */
      limit: number
      /**
       * @description Курсор. Последний `nmId` в ответе
       * @default 0
       * @example 123
       */
      next: number
      /**
       * @description Поиск:
       *       - по артикулу WB `nmId` — полное совпадение
       *       - по артикулу продавца `vendorCode` — частичное совпадение
       * @example 410
       */
      search?: string
      /**
       * @description ID предметов
       * @example [
       *       123,
       *       5231
       *     ]
       */
      subjectIds?: number[]
    }
    /** @description Товары с рекомендациями */
    GetRecomRes: {
      /** @description Данные о товарах и их рекомендациях */
      data: {
        /**
         * @description Артикул WB
         * @example 5870243
         */
        nmId: number
        /**
         * Format: int64
         * @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
         * @example 619043112
         */
        imtId: number
        /**
         * @description Артикул продавца
         * @example 41058/transparent
         */
        vendorCode: string
        /**
         * @description Бренд
         * @example Comma
         */
        brandName: string
        /**
         * Format: date-time
         * @description Дата и время последнего обновления рекомендаций
         * @example 2025-11-13T12:56:15.778591Z
         */
        updatedAt?: string | null
        /**
         * @description Количество изображений в карточке товара
         * @example 4
         */
        picsCount: number
        /**
         * @description Название товара
         * @example Transparent phone case
         */
        title: string
        /**
         * @description Предмет
         * @example Phone cases
         */
        subjectName: string
        /**
         * @description URL основного изображения в карточке товара
         * @example https://basket-01.wbbasket.ru/vol58/part5870/5870243/images/c516x688/1.webp
         */
        pic: string
        /**
         * @description Количество рекомендуемых товаров
         * @example 2
         */
        recomCount: number
        /**
         * @description Список URL основных изображений рекомендуемых товаров
         * @example [
         *       "https://basket-02.wbbasket.ru/vol174/part17405/17405826/images/tm/1.webp",
         *       "https://basket-02.wbbasket.ru/vol174/part17420/17420062/images/tm/1.webp"
         *     ]
         */
        recomPics: string[]
        /**
         * @description Список `nmId` рекомендуемых товаров
         * @example [
         *       17405826,
         *       17420062
         *     ]
         */
        recomNms: number[]
      }[]
      /**
       * @description Курсор. Последний `nmId` в ответе
       * @example 143
       */
      next: number
    }
    response400GetRecom: {
      /**
       * @description ID запроса
       * @example a03341a9-7b2c-41fd-9902-12a2705f0d24
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example recoms
       */
      origin: string
      /**
       * @description Заголовок ошибки
       * @example Bad Request
       */
      title: string
      /**
       * @description Детали ошибки
       * @example Search string length limit exceeded, maximum 72 required
       */
      detail: string
    }
    /** @description Запрос на добавление или замену рекомендаций */
    SetRecomReq: {
      /** @description Список рекомендаций для товаров */
      recList: {
        /**
         * @description Артикул WB
         * @default 0
         * @example 5870243
         */
        nmId: number
        /**
         * @description Рекомендуемые товары.
         *     <br>
         *     Укажите `recomNm` товаров, чтобы добавить их в рекомендации к указанному `nmId`.
         *     <br>
         *     При отправке пустого массива `[]` все текущие рекомендации для указанного `nmId` будут удалены.
         */
        recommendations?: {
          /**
           * @description Артикул WB рекомендуемого товара
           * @default 0
           * @example 5870244
           */
          recomNm: number
          /**
           * @description Позиция товара в списке рекомендаций.
           *
           *      Допустимые значения:
           *      - `1`–`20` — фиксированная позиция:
           *        - при создании или замене (`replace: true`) задаёт порядок отображения
           *        - при добавлении (`replace: false`) вставляет товар на указанную позицию, существующие сдвигаются
           *      - `0` — автоматическая сортировка товаров:
           *        - при создании или замене (`replace: true`) — в порядке расположения товаров в массиве `recommendations`
           *        - при добавлении (`replace: false`) — в конец списка существующих рекомендаций, сохраняя порядок из массива `recommendations`
           * @default 20
           * @example 1
           */
          sort: number
        }[]
      }[]
      /**
       * @description Действие в запросе:
       *       - `false` — добавить новые рекомендации к существующим
       *       - `true` — заменить существующие рекомендации новыми
       * @default false
       * @example true
       */
      replace: boolean
    }
    SetRecomRes: {
      /**
       * @description Есть ли ошибки:
       *       - `false` — ошибок нет. Запрос полностью успешен
       *       - `true` — ошибки есть
       * @example true
       */
      isError: boolean
      /** @description Ошибки. При `"isError":true` */
      errors?: {
        /**
         * @description Значение параметра `nmId`
         * @example 5870243
         */
        mainNm: string
        /**
         * @description Значение параметра `recomNm`
         * @example 5870244
         */
        recomNm: string
        /**
         * @description Сообщение об ошибке
         * @example The item has no photo
         */
        message: string
      }[]
    }
    response208SetRecom: {
      /**
       * @description ID запроса
       * @example a03341a9-7b2c-41fd-9902-12a2705f0d24
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example recoms
       */
      origin: string
      /**
       * @description Заголовок ответа
       * @example Already Reported
       */
      title: string
      /**
       * @description Детали ответа
       * @example Recommendations already set
       */
      detail: string
    }
    response400SetRecom: {
      /**
       * @description ID запроса
       * @example a03341a9-7b2c-41fd-9902-12a2705f0d24
       */
      requestId: string
      /**
       * @description ID внутреннего сервиса WB
       * @example recoms
       */
      origin: string
      /**
       * @description Заголовок ошибки
       * @example Bad Request
       */
      title: string
      /**
       * @description Детали ошибки
       * @example incorrect request body format
       */
      detail: string
    }
    documentsRequest: {
      /**
       * @description Тип документа. <br>
       *     Типы документов, которые вы можете добавить для товара, указаны в [характеристиках предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId) — поле `charcID`. <br>
       *     Возможные типы документов:
       *       - `1` — Сертификат соответствия. Можно указать для `charcID`: 15001136, 15001137, 15001138
       *       - `2` — Декларация о соответствии. Можно указать для `charcID`: 15001135, 15001137, 15001138
       *       - `3` — Свидетельство о государственной регистрации (СГР). Можно указать для `charcID`: 62945173, 15000785, 15004302
       *       - `4` — Регистрационное удостоверение (РУ) на медицинские изделия. Можно указать для `charcID`: 15001574, 15002355, 15002356, 15002357
       *       - `5` — Регистрационное удостоверение Республики Беларусь. Можно указать для `charcID`: 15003071, 15003939
       *       - `7` — Данные о регистрации пестицида. Можно указать для `charcID`: 15003924, 15003925
       *       - `8` — Данные о регистрации агрохимиката. Можно указать для `charcID`: 15003920, 15003921
       *       - `9` — Регистрационное удостоверение (РУ) на лекарственные препараты. Можно указать для `charcID`: 1897013, 15004284
       */
      type?: number
      /** @description Номер документа */
      number?: string
      /** @description Дополнительный номер документа */
      productNumber?: string
      /** @description Торговое наименование */
      tradeName?: string
      /** @description Представитель изготовителя медицинского изделия */
      applicant?: string
      /**
       * Format: date-time
       * @description Дата и время начала срока действия документа
       */
      startDate?: string
      /**
       * Format: date-time
       * @description Дата и время окончания срока действия документа
       */
      endDate?: string
      /**
       * @description Бессрочный ли документ:
       *       - `true` — да, документ бессрочный
       *       - `false` — нет, у документа есть срок действия
       */
      isEndless?: boolean
    }
    /**
     * @description Ошибка при проверке, возвращается для `status: 2`. <br>
     *     Возможные значения:
     *       - `document_missing` — Документ не загружен
     *       - `document_not_found` — Документ не найден в реестре
     *       - `document_inactive` — У документа нет юридической силы
     *       - `document_expired` — Истёк срок действия документа
     *       - `applicant_mismatch` — Данные заявителя в документе и карточке различаются
     *       - `trade_name_mismatch` — Торговое наименование в карточке отличается от документа
     *       - `unknown` — Проверка не пройдена
     *       - `document_type_mismatch` — Номер документа не соответствует указанному типу документа
     *       - `document_dates_mismatch` — Неверная дата регистрации или окончания действия документа
     */
    reasonDocument: string | null
    /**
     * @description Ошибка при проверке, возвращается для `status: 2`. <br>
     *     Указывается только 1 причина. Если карточка не прошла проверку по нескольким причинам, то после исправления первой причины, вернётся следующая.<br>
     *     Возможные значения:
     *       - `tnved_missing` — Не указан код ТН ВЭД
     *       - `supplier_inn_missing` — Не указан ИНН
     *       - `supplier_not_registered` — Поставщик не найден в реестре
     *       - `supplier_inactive` — Ошибка в статусе поставщика, проверьте его в реестре
     *       - `product_group_not_registered` — Добавлена неверная товарная группа в системе маркировки
     *       - `kiz_required` — Этот товар нельзя продавать в России без кода маркировки Честного Знака
     *       - `kiz_certificate_missing` — Нет подтверждения, что на товар нанесена необходимая маркировка
     */
    reasonListing: string | null
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
    /** @description Не найдено */
    NotFound: {
      headers: {
        [name: string]: unknown
      }
      content: {
        /**
         * @example {
         *       "code": "NotFound",
         *       "message": "Not found"
         *     }
         */
        'application/json': components['schemas']['Error']
      }
    }
    /** @description Успешно */
    ResponseItemsLists: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data: {
            /** @description Информация о товарах */
            listGoods: components['schemas']['ItemsList'][]
          }
          /**
           * @description Флаг ошибки
           * @example false
           */
          error: boolean
          /**
           * @description Описание ошибки
           * @example
           */
          errorText: string
        }
      }
    }
    /** @description Успешно */
    ResponseGoodHistories: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /**
             * @description ID загрузки
             * @example 3235236546
             */
            uploadID?: number | null
            /** @description Информация о товарах в загрузке */
            historyGoods?: components['schemas']['GoodHistory'][] | null
          }
        }
      }
    }
    /** @description Успешно */
    ResponseGoodBufferHistories: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /**
             * @description ID загрузки
             * @example 3235236546
             */
            uploadID?: number | null
            /** @description Информация о товарах в загрузке */
            bufferGoods?: components['schemas']['GoodBufferHistory'][] | null
          }
          /**
           * @description Флаг ошибки
           * @example false
           */
          error?: boolean
          /**
           * @description Описание ошибки
           * @example
           */
          errorText?: string
        }
      }
    }
    /** @description Успешно */
    ResponseTaskHistory: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          data?: components['schemas']['SellerTaskMetadata']
          /**
           * @description Флаг ошибки
           * @example false
           */
          error?: boolean
          /**
           * @description Описание ошибки
           * @example
           */
          errorText?: string
        }
      }
    }
    /** @description Успешно */
    ResponseTaskBuffer: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          data?: components['schemas']['SellerTaskMetadataBuffer']
          /**
           * @description Флаг ошибки
           * @example false
           */
          error?: boolean
          /**
           * @description Описание ошибки
           * @example
           */
          errorText?: string
        }
      }
    }
    /** @description Успешно */
    ResponseSizeLists: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /** @description Размеры товара */
            listGoods?: components['schemas']['SizeGood'][] | null
          }
          /**
           * @description Флаг ошибки
           * @example false
           */
          error?: boolean
          /** @description Описание ошибки */
          errorText?: string
        }
      }
    }
    /** @description Успешно */
    SuccessTaskResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['TaskCreated']
      }
    }
    /** @description Успешно */
    SuccessTaskResponseV3: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description ID загрузки */
          id: number
          /**
           * @description Дублирование загрузки: `true` — такая загрузка уже есть
           * @example false
           */
          alreadyExists: boolean
          /** @description Результаты обработки запроса */
          results: {
            /**
             * @description Артикул WB
             * @example 1
             */
            nmId: number
            /**
             * @description Успешна ли установка скидки на товар:
             *       - `false` — неуспешна
             *       - `true` — успешна
             * @example false
             */
            success: boolean
            /** @description Ошибка. При `"success":false` */
            error?: {
              /**
               * @description HTTP статус-код
               * @example 400
               */
              status: number
              /**
               * @description Заголовок ошибки
               * @example Bad Request
               */
              title: string
              /**
               * @description Детали ошибки
               * @example Number of items must increase with each level
               */
              detail: string
            }
          }[]
        }
      }
    }
    /** @description Успешно */
    ResponseQuarantineItems: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Данные ответа */
          data?: {
            /** @description Информация о товарах в карантине */
            quarantineGoods?: components['schemas']['QuarantineItems'][]
          } | null
          /**
           * @description Флаг ошибки
           * @example false
           */
          error?: boolean
          /**
           * @description Описание ошибки
           * @example
           */
          errorText?: string
        }
      }
    }
    /** @description Такая загрузка уже есть */
    Response208: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['RequestAlreadyExistsError']
      }
    }
    /** @description Такая загрузка уже есть */
    Response208V3: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /**
           * @description HTTP статус-код
           * @example 208
           */
          status: number
          /**
           * @description Заголовок ответа
           * @example Already Reported
           */
          title: string
          /**
           * @description Детали ответа
           * @example This task already exists
           */
          detail: string
          /**
           * @description ID запроса
           * @example 4b387d2e-13b0-4be7-a34c-be01fb35fd2d
           */
          requestId: string
          /**
           * @description ID внутреннего сервиса WB
           * @example discounts-prices
           */
          origin: string
        }
      }
    }
  }
  parameters: {
    /** @description ID склада продавца */
    Warehouse: number
    /** @description ID загрузки */
    uploadID: number
    /** @description Сколько элементов вывести на одной странице (пагинация) */
    limit: number
    /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
    offset: number
    /** @description Артикул WB */
    nmID: number
    /**
     * @description Артикул WB для поиска товара
     * @example 44589768676
     */
    filterNmID: number
  }
  requestBodies: {
    SellerTaskRequest: {
      content: {
        'application/json': {
          data: components['schemas']['Items']
        }
      }
    }
    SellerTaskRequestSize: {
      content: {
        'application/json': {
          data: components['schemas']['SizeItemsBody']
        }
      }
    }
    SellerTaskRequestClubDisc: {
      content: {
        'application/json': {
          data: components['schemas']['ClubDisc']
        }
      }
    }
    /** @description Установка оптовых скидок для B2B */
    B2BWholesaleTaskRequest: {
      content: {
        /**
         * @example {
         *       "data": [
         *         {
         *           "nmId": 1,
         *           "wholesaleDiscountThreshold": [
         *             {
         *               "minQuantity": 10,
         *               "wholesaleDiscount": 10,
         *               "level": 1
         *             }
         *           ]
         *         },
         *         {
         *           "nmId": 694707813,
         *           "wholesaleDiscountThreshold": [
         *             {
         *               "minQuantity": 11,
         *               "wholesaleDiscount": 14,
         *               "level": 1
         *             },
         *             {
         *               "minQuantity": 18,
         *               "wholesaleDiscount": 19,
         *               "level": 3
         *             }
         *           ]
         *         }
         *       ]
         *     }
         */
        'application/json': {
          data: components['schemas']['B2BWholesale']
        }
      }
    }
    FilterPost: {
      content: {
        /**
         * @example {
         *       "nmList": [
         *         26613989,
         *         1348041
         *       ]
         *     }
         */
        'application/json': {
          /** @description Артикулы WB для поиска товара */
          nmList: number[]
        }
      }
    }
  }
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV2ObjectParentAll: {
    parameters: {
      query?: {
        /**
         * @description Язык поля ответа `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
            data?: unknown
            /**
             * @description Флаг наличия ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2ObjectAll: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
        /** @description Поиск по названию предмета (Носки), поиск работает по подстроке, искать можно на любом из поддерживаемых языков */
        name?: string
        /** @description Количество предметов, максимум 1000 */
        limit?: number
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
        offset?: number
        /** @description ID родительской категории предмета */
        parentID?: number
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
           *           "subjectID": 2560,
           *           "parentID": 479,
           *           "subjectName": "3D очки",
           *           "parentName": "Электроника"
           *         },
           *         {
           *           "subjectID": 1152,
           *           "parentID": 858,
           *           "subjectName": "3D-принтеры",
           *           "parentName": "Оргтехника"
           *         }
           *       ],
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            /** @description Предметы */
            data?: {
              /** @description ID предмета */
              subjectID?: number
              /** @description ID родительской категории */
              parentID?: number
              /** @description Название предмета */
              subjectName?: string
              /** @description Название родительской категории */
              parentName?: string
            }[]
            /** @description Флаг наличия ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string | null
          }
        }
      }
      401: components['responses']['401']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV2ObjectCharcsSubjectId: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
      }
      header?: never
      path: {
        /** @description ID предмета */
        subjectId: number
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
            /** @description Данные */
            data?: {
              /** @description ID характеристики */
              charcID?: number
              /** @description Название предмета */
              subjectName?: string
              /** @description ID предмета */
              subjectID?: number
              /** @description Название характеристики */
              name?: string
              /**
               * @description - `true` — характеристику необходимо обязательно указать в карточке товара
               *     - `false` — характеристику необязательно указывать
               */
              required?: boolean
              /** @description Единица измерения */
              unitName?: string
              /**
               * @description Максимальное количество значений, которое можно присвоить характеристике при [создании](./item-management#tag/listingItems) или [редактировании](./item-management#tag/listings/operation/postV2CardsUpdate) карточек товаров.
               *     <br>
               *     Используется только для характеристик с `"charcType":1` — массив строк.
               *     <br>
               *     Характеристикам с `"charcType":4` — число, можно присвоить только одно значение.
               *     <br><br>
               *     Если `"maxCount":0`, количество значений не ограничено
               */
              maxCount?: number
              /** @description Характеристика популярна у пользователей (true - да, false - нет) */
              popular?: boolean
              /**
               * @description Тип данных характеристики, который необходимо использовать при [создании](./item-management#tag/listingItems) или [редактировании](./item-management#tag/listings/operation/postV2CardsUpdate) карточек товаров:
               *       -  `1` — массив строк
               *       -  `4` — число (целое либо с десятичной дробью)
               *       -  `0` — характеристика не используется
               */
              charcType?: number
              /**
               * @description Ключевая характеристика. Является ли характеристика значимой для покупателей:
               *       - `true` — да
               *       - `false` — нет
               */
              hasFilter?: boolean
              /**
               * @description Признак [меняющейся характеристики](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov). Значение размечает характеристики, по которым варианты отличаются друг от друга:
               *       -  `true` — варианты товара отличаются по этой характеристике
               *       -  `false` — варианты товара не отличаются по этой характеристике
               */
              isVariable?: boolean
              /**
               * @description Как передать характеристику в запросах на [cоздание](./item-management#tag/listingItems/operation/postV2CardsUpload), [создание с присоединением](./item-management#tag/listingItems/operation/postV2CardsUploadAdd) и [редактирование](./item-management#tag/listings/operation/postV2CardsUpdate) карточек товара:
               *       -  `true` — в соответствующем параметре запроса
               *       -  `false` — внутри массива `characteristics`
               */
              existNamedField?: boolean
            }[]
            /** @description Флаг наличия ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryColors: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
            data?: unknown
            /**
             * @description Флаг ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryKinds: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
            /** @description Массив значений для хар-ки Пол */
            data?: string[]
            /**
             * @description Флаг ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryCountries: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
            data?: unknown
            /**
             * @description Флаг ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectorySeasons: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
            /** @description Массив значений для хар-ки Сезон */
            data?: string[]
            /**
             * @description Флаг ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryVat: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `subjectName` и `name`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
           *         "0",
           *         "10",
           *         "20",
           *         "Без НДС",
           *         "13"
           *       ],
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: string[]
            /** @description Флаг наличия ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryTnved: {
    parameters: {
      query: {
        /** @description ID предмета */
        subjectID: number
        /** @description Поиск по коду ТН ВЭД. Работает только в паре с `subjectID` */
        search?: number
        /**
         * @description Язык полей ответа:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
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
           *           "tnved": "6106903000",
           *           "isKiz": true
           *         }
           *       ],
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            /** @description Данные */
            data?: {
              /** @description Код ТН ВЭД */
              tnved?: string
              /**
               * @description - `true` — код маркировки [Честного знака](https://честныйзнак.рф/) требуется
               *     - `false` — код маркировки [Честного знака](https://честныйзнак.рф/) не требуется
               */
              isKiz?: boolean
            }[]
            /**
             * @description Флаг наличия ошибки
             * @example false
             */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryTnvedAll: {
    parameters: {
      query?: {
        /** @description Поиск по первым цифрам кода ТН ВЭД. Укажите не более 10 символов */
        search?: number
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
          'application/json': {
            /** @description Данные */
            data: {
              /**
               * @description Код ТН ВЭД
               * @example 6106903001
               */
              tnved: string
              /**
               * @description Текстовое описание товаров, которые входят в группу
               * @example Бумага для офисной техники прочая
               */
              description: string
            }[]
            /**
             * @description Флаг наличия ошибки
             * @example false
             */
            error: boolean
            /**
             * @description Текст ошибки
             * @example
             */
            errorText: string
            /**
             * @description Дополнительные ошибки
             * @example null
             */
            additionalErrors: string | null
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
           *       "data": null,
           *       "error": true,
           *       "errorText": "Bad request",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryOkpd: {
    parameters: {
      query: {
        /** @description ID предмета */
        subjectId: number
        /** @description Поиск по фрагменту кода ОКПД2. Работает только в паре с `subjectId`. Укажите первые цифры кода через точку, чтобы найти код по этому фрагменту */
        search?: string
        /**
         * @description Язык полей ответа:
         *       - `ru` — русский
         */
        locale?: 'ru'
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
            /** @description Данные */
            data: {
              /**
               * @description Код ОКПД2
               * @example 61.06.90.300
               */
              okpd2: string
              /**
               * @description Текстовое описание товаров, которые входят в группу
               * @example Бумага для офисной техники прочая
               */
              description: string
            }[]
            /**
             * @description Флаг наличия ошибки
             * @example false
             */
            error: boolean
            /**
             * @description Текст ошибки
             * @example
             */
            errorText: string
            /**
             * @description Дополнительные ошибки
             * @example null
             */
            additionalErrors: string | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2DirectoryOkpdAll: {
    parameters: {
      query?: {
        /** @description Поиск по фрагменту кода ОКПД2. Укажите первые цифры кода через точку, чтобы найти код по этому фрагменту */
        search?: number
        /**
         * @description Язык полей ответа:
         *       - `ru` — русский
         */
        locale?: 'ru'
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
            /** @description Данные */
            data: {
              /**
               * @description Код ОКПД2
               * @example 61.06.90.300
               */
              okpd2: string
              /**
               * @description Текстовое описание товаров, которые входят в группу
               * @example Бумага для офисной техники прочая
               */
              description: string
            }[]
            /**
             * @description Флаг наличия ошибки
             * @example false
             */
            error: boolean
            /**
             * @description Текст ошибки
             * @example
             */
            errorText: string
            /**
             * @description Дополнительные ошибки
             * @example null
             */
            additionalErrors: string | null
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
           *       "data": null,
           *       "error": true,
           *       "errorText": "Bad request",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Brands: {
    parameters: {
      query: {
        /** @description ID предмета */
        subjectId: number
        /** @description Параметр пагинации. Используйте значение `next` из ответа, чтобы получить следующий пакет данных */
        next?: number
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
          'application/json': components['schemas']['BrandsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': components['schemas']['BrandsResponseError']
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
          'application/problem+json': components['schemas']['BrandsResponseError']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2Tags: {
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
           *       "data": [
           *         {
           *           "id": 1,
           *           "color": "D1CFD7",
           *           "name": "Sale"
           *         }
           *       ],
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": ""
           *     }
           */
          'application/json': {
            data?: {
              /** @description Числовой ID ярлыка */
              id?: number
              /** @description Цвет ярлыка */
              color?: string
              /** @description Имя ярлыка */
              name?: string
            }
            /**
             * @description Флаг ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2Tag: {
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
           * @description Цвет ярлыка.
           *
           *     Доступные цвета:
           *       - `D1CFD7` — серый
           *       - `FEE0E0` — красный
           *       - `ECDAFF` — фиолетовый
           *       - `E4EAFF` — синий
           *       - `DEF1DD` — зеленый
           *       - `FFECC7` — желтый
           * @example D1CFD7
           */
          color?: string
          /**
           * @description Имя ярлыка
           * @example Sale
           */
          name?: string
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
          'application/json': components['schemas']['responseContentError']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  deleteV2TagId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Числовой ID ярлыка */
        id: number
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
          'application/json': components['schemas']['responseContentError']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  patchV2TagId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Числовой ID ярлыка */
        id: number
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Цвет ярлыка
           * @example D1CFD7
           */
          color?: string
          /**
           * @description Имя ярлыка
           * @example Sale
           */
          name?: string
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
          'application/json': components['schemas']['responseContentError']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2TagNomenclatureLink: {
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
         *       "nmID": 179891389,
         *       "tagsIDs": [
         *         123456
         *       ]
         *     }
         */
        'application/json': {
          /** @description Артикул WB */
          nmID?: number
          /**
           * @description Массив числовых ID ярлыков.<br>
           *     Что бы снять ярлыки с карточки товара, необходимо передать пустой массив.<br>
           *     Чтобы добавить ярлыки к уже имеющимся в карточке товара, необходимо в запросе передать новые ярлыки и ярлыки, которые уже есть в карточке товара.
           */
          tagsIDs?: number[]
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
          'application/json': components['schemas']['responseContentError']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseContentError']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2GetCardsList: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `name`, `value` и `object`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "settings": {
         *         "sort": {
         *           "ascending": false
         *         },
         *         "filter": {
         *           "textSearch": "4603743187500888",
         *           "allowedCategoriesOnly": true,
         *           "tagIDs": [
         *             345,
         *             415
         *           ],
         *           "objectIDs": [
         *             235,
         *             67
         *           ],
         *           "brands": [
         *             "уллу",
         *             "EkkE"
         *           ],
         *           "imtID": 328632,
         *           "withPhoto": 0
         *         },
         *         "cursor": {
         *           "updatedAt": "2023-12-06T11:17:00.96577Z",
         *           "nmID": 370870300,
         *           "limit": 11
         *         }
         *       }
         *     }
         */
        'application/json': {
          /** @description Настройки */
          settings?: {
            /** @description Параметр сортировки */
            sort?: {
              /**
               * @description Сортировать по полю `updatedAt`:
               *       - `false` — по убыванию
               *       -  `true` — по возрастанию
               * @default false
               */
              ascending?: boolean
            }
            /** @description Параметры фильтрации */
            filter?: {
              /**
               * @description Фильтр по фото:
               *       * `-1` — любые карточки товаров
               *       * `0` — только карточки без фото. С [16 июня](/release-notes?id=531) — любые карточки товаров
               *       * `1` — только карточки с фото
               *       * `2` — только карточки без фото. С [16 июня](/release-notes?id=531)
               * @default 0
               * @enum {integer}
               */
              withPhoto?: -1 | 0 | 1 | 2
              /** @description Поиск по артикулу продавца, артикулу WB, баркоду */
              textSearch?: string
              /** @description Поиск по ID ярлыков */
              tagIDs?: number[]
              /**
               * @description Фильтр по категории:
               *       - `true` — только разрешённые
               *       - `false` — все
               *
               *       Не используется в песочнице
               */
              allowedCategoriesOnly?: boolean
              /** @description Поиск по ID предметов */
              objectIDs?: number[]
              /** @description Поиск по брендам */
              brands?: string[]
              /**
               * Format: int64
               * @description Поиск по [ID для объединённых карточек товаров](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov)
               */
              imtID?: number
            }
            /** @description Курсор */
            cursor?: {
              /**
               * @description Сколько карточек товаров выдать в ответе
               * @default 10
               */
              limit?: number
              /** @description Дата и время изменения */
              updatedAt?: string | null
              /** @description Артикул WB, с которого надо запрашивать следующий список карточек товаров */
              nmID?: number
            }
          }
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
           *       "cards": [
           *         {
           *           "nmID": 12345678,
           *           "imtID": 123654789,
           *           "nmUUID": "01bda0b1-5c0b-736c-b2be-d0a6543e9be",
           *           "subjectID": 7771,
           *           "subjectName": "AKF системы",
           *           "vendorCode": "wb7f6mumjr1",
           *           "kizMarked": true,
           *           "brand": "Тест",
           *           "title": "Тест-система",
           *           "gtin": "04607009520001",
           *           "description": "Тестовое описание",
           *           "needKiz": false,
           *           "photos": [
           *             {
           *               "big": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/big/1.webp",
           *               "c246x328": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/c246x328/1.webp",
           *               "c516x688": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/c516x688/1.webp",
           *               "square": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/square/1.webp",
           *               "tm": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/tm/1.webp"
           *             }
           *           ],
           *           "video": "https://videonme-basket-12.wbbasket.ru/vol137/part22557/225577433/hls/1440p/index.m3u8",
           *           "wholesale": {
           *             "enabled": true,
           *             "quantum": 112
           *           },
           *           "dimensions": {
           *             "length": 55,
           *             "width": 40,
           *             "height": 15,
           *             "weightBrutto": 6.24,
           *             "isValid": false
           *           },
           *           "documents": {
           *             "items": [
           *               {
           *                 "id": "019f3c09-8c1f-7063-aee4-c45969fb2dc5",
           *                 "type": 1,
           *                 "number": "123456",
           *                 "productNumber": "123456",
           *                 "tradeName": "Trade Name",
           *                 "applicant": "Applicant Name",
           *                 "startDate": "2023-01-15T03:00:00+03:00",
           *                 "endDate": "2026-01-14T03:00:00+03:00",
           *                 "verdict": {
           *                   "verified": true,
           *                   "status": 1,
           *                   "reason": null,
           *                   "additionalData": null,
           *                   "createdAt": "2026-05-28T18:10:43.375306+03:00"
           *                 },
           *                 "createdAt": "2026-05-28T18:09:25.394692+03:00"
           *               }
           *             ],
           *             "overallVerdict": {
           *               "isFullyChecked": true,
           *               "status": 1,
           *               "reason": null,
           *               "createdAt": "2026-05-28T18:19:19.99444+03:00"
           *             },
           *             "excludeDocuments": false
           *           },
           *           "characteristics": [
           *             {
           *               "id": 14177449,
           *               "name": "Цвет",
           *               "value": [
           *                 "красно-сиреневый"
           *               ]
           *             }
           *           ],
           *           "sizes": [
           *             {
           *               "chrtID": 316399238,
           *               "techSize": "0",
           *               "skus": [
           *                 "987456321654"
           *               ]
           *             }
           *           ],
           *           "tags": [
           *             {
           *               "id": 592569,
           *               "name": "Популярный",
           *               "color": "D1CFD7"
           *             }
           *           ],
           *           "createdAt": "2023-12-06T11:17:00.96577Z",
           *           "updatedAt": "2023-12-06T11:17:00.96577Z"
           *         }
           *       ],
           *       "cursor": {
           *         "updatedAt": "2023-12-06T11:17:00.96577Z",
           *         "nmID": 123654123,
           *         "total": 1
           *       }
           *     }
           */
          'application/json': {
            /** @description Список карточек товаров */
            cards?: {
              /** @description Артикул WB */
              nmID?: number
              /**
               * Format: int64
               * @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров.<br>Един для всех артикулов WB группы объединённых карточек.<br>У каждой карточки товара есть `imtID`, даже если она не объединена с другими карточками<br>
               */
              imtID?: number
              /**
               * Format: UUID
               * @description Внутренний технический ID карточки товара
               */
              nmUUID?: string
              /** @description ID предмета */
              subjectID?: number
              /** @description Название предмета */
              subjectName?: string
              /** @description Артикул продавца */
              vendorCode?: string
              /** @description Бренд */
              brand?: string
              /** @description Наименование товара */
              title?: string
              /** @description Дополнительный GTIN. Поле вернётся только при заполненном дополнительном GTIN. <br><br> Только для продавцов из РФ */
              gtin?: string
              /** @description Описание товара */
              description?: string
              /**
               * @description Требуется ли код маркировки [Честного знака](https://честныйзнак.рф/) для этого товара:
               *       - `false` — не требуется
               *       - `true` — требуется
               */
              needKiz?: boolean
              /**
               * @description Есть ли подтверждение от продавца, что обязательный код маркировки [Честного знака](https://честныйзнак.рф/) нанесён на товар:
               *       - `true` — да
               *       - `false` — нет
               *
               *     Является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, указано в поле `needKiz`
               * @default false
               */
              kizMarked: boolean
              /** @description Массив фото */
              photos?: {
                /** @description URL фото `900x1200` */
                big?: string
                /** @description URL фото `248x328` */
                c246x328?: string
                /** @description URL фото `516x688` */
                c516x688?: string
                /** @description URL фото `600x600` */
                square?: string
                /** @description URL фото `75x100` */
                tm?: string
              }[]
              /** @description URL видео */
              video?: string
              /** @description B2B-продажа */
              wholesale?: {
                /**
                 * @description Предназначен ли товар для продажи только B2B-покупателям:
                 *       - `true` — товар предназначен для продажи только B2B-покупателям
                 *       - `false` — товар предназначен для продажи B2B и B2C-покупателям
                 */
                enabled?: boolean
                /**
                 * Format: uint64
                 * @description Минимальное количество единиц товара в одной корзине B2B-покупателя. Только при `"enable":true`
                 */
                quantum?: number
              }
              /** @description Габариты и вес товара c упаковкой, см и кг */
              dimensions?: {
                /** @description Длина, см */
                length?: number
                /** @description Ширина, см */
                width?: number
                /** @description Высота, см */
                height?: number
                /** @description Вес, кг<br>Количество знаков после запятой <=3 */
                weightBrutto?: number
                /**
                 * @description Потенциальная некорректность габаритов товара:
                 *
                 *     - `true` — не выявлена. `"isValid":true` не гарантирует, что размеры указаны корректно. В отдельных случаях (например, при создании новой категории товаров) `"isValid":true` будет возвращаться при любых значениях, кроме нулевых.
                 *
                 *     - `false` — указанные габариты значительно отличаются от средних по категории (предмету). Рекомендуется перепроверить, правильно ли указаны размеры товара в упаковке в `сантиметрах`. Функциональность карточки товара, в том числе начисление логистики и хранения, при этом ограничена не будет. Логистика и хранение продолжают начисляться — по текущим габаритам. Также `"isValid":false` возвращается при отсутствии значений или нулевом значении любой стороны.
                 */
                isValid?: boolean
              }
              /**
               * @description Документы, прикреплённые к карточке товара.<br>
               *     Результаты проверки каждого документа указаны в `items`. <br>
               *     Результат проверки всей карточки товара указан в `overallVerdict`
               */
              documents?: {
                /** @description Список документов и результаты проверки каждого документа */
                items?: {
                  /** @description ID документа */
                  id?: string
                  /**
                   * @description Тип документа:
                   *       - `1` — Сертификат соответствия
                   *       - `2` — Декларация о соответствии
                   *       - `3` — Свидетельство о государственной регистрации (СГР)
                   *       - `4` — Регистрационное удостоверение (РУ) на медицинские изделия
                   *       - `5` — Регистрационное удостоверение Республики Беларусь
                   *       - `7` — Данные о регистрации пестицида
                   *       - `8` — Данные о регистрации агрохимиката
                   *       - `9` — Регистрационное удостоверение (РУ) на лекарственные препараты
                   */
                  type?: number
                  /** @description Номер документа */
                  number?: string
                  /** @description Дополнительный номер документа */
                  productNumber?: string
                  /** @description Торговое наименование */
                  tradeName?: string
                  /** @description Представитель изготовителя медицинского изделия */
                  applicant?: string
                  /**
                   * Format: date-time
                   * @description Дата и время начала срока действия документа
                   */
                  startDate?: string
                  /**
                   * Format: date-time
                   * @description Дата и время окончания срока действия документа
                   */
                  endDate?: string
                  /**
                   * @description Бессрочный ли документ:
                   *       - `true` — да, документ бессрочный
                   *       - `false` — нет, у документа есть срок действия
                   */
                  isEndless?: boolean
                  /** @description Результат проверки документа. Возвращается, когда проверка документа завершена */
                  verdict?: {
                    /**
                     * @description - `true` — документ проверен
                     *     - `false` — документ не проверен
                     */
                    verified?: boolean
                    /**
                     * @description Результат проверки документа:
                     *       - `1` — проверка пройдена
                     *       - `2` — проверка не пройдена
                     */
                    status?: number
                    reason?: components['schemas']['reasonDocument']
                    /** @description Дополнительная информация */
                    additionalData?: Record<string, never> | null
                    /**
                     * Format: date-time
                     * @description Дата проверки документа
                     */
                    createdAt?: string
                  }
                  /**
                   * Format: date-time
                   * @description Дата добавления документа
                   */
                  createdAt?: string
                }[]
                /**
                 * @description Общий результат проверки всей карточки товара. Возвращается, когда проверка завершена. <br>
                 *     Результаты проверок отдельных документов и общий результат карточки могут различаться. Например, карточка может пройти проверку, если обязательный документ прошёл проверку, а дополнительный документ не прошёл
                 */
                overallVerdict?: {
                  /**
                   * @description - `true` — карточка товара проверена
                   *     - `false` — карточка товара не проверена
                   */
                  isFullyChecked?: boolean
                  /**
                   * @description Результат проверки карточки товара:
                   *       - `1` — проверка пройдена
                   *       - `2` — проверка не пройдена
                   */
                  status?: number
                  reason?: components['schemas']['reasonListing']
                  /**
                   * Format: date-time
                   * @description Дата и время проверки карточки товара
                   */
                  createdAt?: string
                }
                /**
                 * @description Подтверждение продавца, что для товара не требуются разрешительные документы:
                 *       - `true` —  продавец подтверждает, что документы не требуются. Все значения, переданные в `documents`, будут заменены на пустые значения
                 *       - `false` —  продавец не подтверждает, что документы не требуются
                 *
                 *     Обязательность документов проверяется при создании и изменении карточки товара. Если для товара требуются документы и указано значение `true`, карточка не пройдёт проверку
                 */
                excludeDocuments?: boolean
              }
              /** @description Характеристики */
              characteristics?: {
                /** @description ID характеристики */
                id?: number
                /** @description Название характеристики */
                name?: string
                /** @description Значение характеристики. Тип значения зависит от типа характеристики */
                value?: unknown
              }[]
              /** @description Размеры товара */
              sizes?: {
                /**
                 * Format: uint64
                 * @description Числовой ID размера для данного артикула WB
                 */
                chrtID?: number
                /** @description Размер товара (А, XXL, 57 и др.) */
                techSize?: string
                /** @description Российский размер товара */
                wbSize?: string
                /** @description Баркод товара */
                skus?: string[]
              }[]
              /** @description Ярлыки */
              tags?: {
                /** @description ID ярлыка */
                id?: number
                /** @description Название ярлыка */
                name?: string
                /**
                 * @description Цвет ярлыка. <br>
                 *     Доступные цвета:
                 *     - `D1CFD7` — серый
                 *     - `FEE0E0` — красный
                 *     - `ECDAFF` — фиолетовый
                 *     - `E4EAFF` — синий
                 *     - `DEF1DD` — зеленый
                 *     - `FFECC7` — желтый
                 */
                color?: string
              }[]
              /** @description Дата и время создания */
              createdAt?: string
              /** @description Дата и время изменения */
              updatedAt?: string
            }[]
            /** @description Пагинатор */
            cursor?: {
              /** @description Дата и время, с которых надо запрашивать следующий список карточек товаров */
              updatedAt?: string
              /** @description Артикул WB, с которого надо запрашивать следующий список карточек товаров */
              nmID?: number
              /** @description Количество возвращённых карточек товаров */
              total?: number
            }
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
          /** @example Request body can not be decoded */
          'plain/text': unknown
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsErrorList: {
    parameters: {
      query?: {
        /**
         * @description Язык названий предметов:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице
         */
        locale?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "cursor": {
         *         "limit": 31,
         *         "updatedAt": "2025-08-05T17:54:40+08:00",
         *         "batchUUID": "bca3744c-1c8b-4588-b345-62af3b2899ae"
         *       },
         *       "order": {
         *         "ascending": true
         *       }
         *     }
         */
        'application/json': components['schemas']['requestPublicViewerPublicErrorsTableListV2']
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
           *       "data": {
           *         "items": [
           *           {
           *             "batchUUID": "b15fecaf-57fd-4b63-ab6f-18d630b8793e",
           *             "subjects": {
           *               "wb15j2kjk9": {
           *                 "id": 8827,
           *                 "name": "Автомобили с пробегом"
           *               },
           *               "wb3g6advyh": {
           *                 "id": 8827,
           *                 "name": "Автомобили с пробегом"
           *               },
           *               "wb3g7xx8g9": {
           *                 "id": 8827,
           *                 "name": "Автомобили с пробегом"
           *               },
           *               "wb4uphjn61": {
           *                 "id": 8827,
           *                 "name": "Автомобили с пробегом"
           *               },
           *               "wb64nayozt": {
           *                 "id": 8827,
           *                 "name": "Автомобили с пробегом"
           *               }
           *             },
           *             "brands": {},
           *             "vendorCodes": [
           *               "wb64nayozt",
           *               "wb15j2kjk9",
           *               "wb3g7xx8g9",
           *               "wb3g6advyh",
           *               "wb4uphjn61"
           *             ],
           *             "errors": {
           *               "wb15j2kjk9": [
           *                 "Поле Наименование не должно содержать запрещенные символы: 😈 😊 🤨"
           *               ],
           *               "wb3g6advyh": [
           *                 "Поле Наименование не должно содержать запрещенные символы: 😊 🤨 😈"
           *               ],
           *               "wb3g7xx8g9": [
           *                 "Поле Наименование не должно содержать запрещенные символы: 🤯"
           *               ],
           *               "wb4uphjn61": [
           *                 "Поле Наименование не должно содержать запрещенные символы: 😊 🤨 😈"
           *               ],
           *               "wb64nayozt": [
           *                 "Поле Наименование не должно содержать запрещенные символы: 😈 😊 🤨"
           *               ]
           *             },
           *             "updatedAt": "2025-12-19T23:59:59Z"
           *           },
           *           {
           *             "batchUUID": "30aa42ec-fb49-45ec-86d5-ddf9911e7e3f",
           *             "subjects": {
           *               "test_pasha1": {
           *                 "id": 184,
           *                 "name": "Рубашки"
           *               }
           *             },
           *             "brands": {},
           *             "vendorCodes": [
           *               "test_pasha1"
           *             ],
           *             "errors": {
           *               "test_pasha1": [
           *                 "Запрещено использовать E-Mail в поле Наименование",
           *                 "Запрещено использовать E-Mail в поле Описание"
           *               ]
           *             },
           *             "updatedAt": "2025-12-20T23:59:59Z"
           *           }
           *         ],
           *         "cursor": {
           *           "next": true,
           *           "updatedAt": "2025-12-20T23:59:59Z",
           *           "batchUUID": "1cd79751-de1f-46c8-a444-a941d35dde56"
           *         }
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': components['schemas']['responsePublicViewerPublicErrorsTableListV2']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsUpdate: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Артикул WB */
          nmID: number
          /** @description Артикул продавца */
          vendorCode: string
          /**
           * @description Подтверждение, что на товар нанесён обязательный код маркировки [Честного знака](https://честныйзнак.рф/):
           *       - `true` — продавец подтверждает, что на товар нанесён обязательный код маркировки.
           *       - `false` — продавец не подтверждает, что на товар нанесён обязательный код маркировки. Передайте в запросе `true`, чтобы подтвердить наличие на товаре обязательного кода маркировки. Карточка товара не пройдёт проверку, если нет подтверждения продавца о том, что обязательный код маркировки нанесён на товар.
           *
           *     Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./item-management#tag/listings/operation/postV2GetCardsList), поле ответа `needKiz`
           * @default false
           */
          kizMarked?: boolean
          /** @description Бренд */
          brand?: string
          /** @description Наименование товара */
          title?: string
          /** @description Дополнительный GTIN. Укажите этот параметр, если тот же GTIN вы ранее указывали в одной из карточек товара в параметре `skus`. Нельзя указывать один и тот же GTIN в `skus` для разных карточек или размеров товаров. <br><br> Только для продавцов из РФ */
          gtin?: string
          /**
           * @description Описание товара.<br>
           *     Максимальное количество символов зависит от категории товара<br>
           *     Стандарт — 2000, минимум — 1000, максимум — 5000<br>
           *     Подробно о **правилах заполнения карточки товара** в [Справочном центре](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-create-card) на портале продавцов
           */
          description?: string
          /**
           * @description Габариты и вес товара **c упаковкой**.<br>
           *     Укажите в `сантиметрах` и `килограммах` для любого товара.<br>
           *     Синхронизация новых данных с сервисом может занимать до 30 минут
           */
          dimensions?: {
            /** @description Длина, см */
            length?: number
            /** @description Ширина, см */
            width?: number
            /** @description Высота, см */
            height?: number
            /** @description Вес, кг<br>Количество знаков после запятой <=3 */
            weightBrutto?: number
          }
          /** @description Разрешительные документы карточки товара */
          documents?: {
            /** @description Список разрешительных документов и их данные */
            items?: ({
              /**
               * @description ID документа, прикреплённого к карточке. <br>
               *     Укажите `id`, чтобы внести изменения в прикреплённый ранее документ. ID документа указан в [списке карточек товаров](/item-management#tag/listings/operation/postV2GetCardsList). <br>
               *     Чтобы добавить новый документ, указывать `id` не нужно.
               */
              id?: string
            } & components['schemas']['documentsRequest'])[]
            /**
             * @description Подтверждение продавца, что для товара не требуются разрешительные документы:
             *       - `true` —  продавец подтверждает, что документы не требуются. Все значения, переданные в `documents`, будут заменены на пустые значения
             *       - `false` —  продавец не подтверждает, что документы не требуются
             *
             *     Обязательность документов проверяется при создании и изменении карточки товара. Если для товара требуются документы и указано значение `true`, карточка не пройдёт проверку
             * @default false
             */
            excludeDocuments?: boolean
          }
          /**
           * @description Характеристики товара.
           *     <br>
           *     Можно получить методом [Характеристики предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId)
           */
          characteristics?: {
            /** @description ID характеристики */
            id: number
            /**
             * @description Значения характеристики.
             *     <br>
             *     Тип данных — массив строк или число — зависит от типа характеристики, см. описание поля `charcType` в методе [Характеристики предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId).
             *     <br>
             *     Допустимое количество значений отображено в поле `maxCount` того же метода
             */
            value: unknown
          }[]
          /**
           * @description Массив размеров<br>
           *     Для безразмерного товара всё равно нужно передавать данный массив без параметров (wbSize и techSize), но с баркодом
           */
          sizes: {
            /**
             * Format: uint64
             * @description ID размера для данного артикула WB<br>
             *     Обязателен к заполнению для существующих размеров<br>
             *     Для добавляемых размеров не указывается
             */
            chrtID?: number
            /** @description Размер товара (например, XL, S, 45) */
            techSize?: string
            /** @description Российский размер товара */
            wbSize?: string
            /**
             * @description Цена товара, ₽<br>
             *     Указывается при добавлении размера
             */
            price?: number
            /** @description Баркоды */
            skus?: string[]
          }[]
        }[]
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
           *       "data": null,
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': components['schemas']['responseItemList']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Превышен лимит объёма данных в запросе */
      413: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "title": "request body too long",
           *       "detail": "https://openapi.wildberries.ru/content/api/ru/",
           *       "code": "71d3de1b-001e-488f-bbf5-55c31254fbeb",
           *       "requestId": "MN8usr6RfrzWHZfucSvNgb",
           *       "origin": "ag-content",
           *       "status": 413,
           *       "statusText": "Request Entity Too Large"
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
          }
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsMoveNm: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json':
          components['schemas']['requestMoveNmsImtConn'] | components['schemas']['requestMoveNmsImtDisconn']
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
           *       "data": null,
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': components['schemas']['responseItemList']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseItemList'] | components['schemas']['responseIncorrectDate']
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
          'application/json': components['schemas']['responseItemList']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Превышен лимит объёма данных в запросе */
      413: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': string
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsDeleteTrash: {
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
         *       "nmIDs": [
         *         123456789,
         *         987654321
         *       ]
         *     }
         */
        'application/json': {
          /** @description Артикулы WB */
          nmIDs?: number[]
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
           *       "data": null,
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': {
            data?: Record<string, never> | null
            /** @description Флаг ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: Record<string, never> | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsRecover: {
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
         *       "nmIDs": [
         *         123456789,
         *         987654321
         *       ]
         *     }
         */
        'application/json': {
          /** @description Артикулы WB */
          nmIDs?: number[]
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
           *       "data": null,
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': {
            data?: Record<string, never> | null
            /** @description Флаг ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: Record<string, never> | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2GetCardsTrash: {
    parameters: {
      query?: {
        /**
         * @description Язык полей ответа `name`, `value` и `object`:
         *       - `ru` — русский
         *       - `en` — английский
         *       - `zh` — китайский
         *
         *     Не используется в песочнице. Данные песочницы возвращаются только на русском языке
         */
        locale?: 'ru' | 'en' | 'zh'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        /**
         * @example {
         *       "settings": {
         *         "sort": {
         *           "ascending": false
         *         },
         *         "filter": {
         *           "textSearch": "4603743187500888"
         *         },
         *         "cursor": {
         *           "trashedAt": "2023-12-06T11:17:00.96577Z",
         *           "nmID": 370870300,
         *           "limit": 11
         *         }
         *       }
         *     }
         */
        'application/json': {
          /** @description Настройки */
          settings?: {
            /** @description Параметр сортировки */
            sort?: {
              /**
               * @description Сортировать по `trashedAt`:
               *       - `false` — по убыванию
               *       - `true` — по возрастанию
               * @default false
               */
              ascending?: boolean
            }
            /** @description Пагинатор */
            cursor?: {
              /**
               * @description Сколько карточек товаров выдать в ответе
               * @default 10
               */
              limit?: number
              /** @description Дата и время помещения в корзину */
              trashedAt?: string
              /** @description Артикул WB, с которого надо запрашивать следующий список карточек товаров */
              nmID?: number
            }
            /** @description Параметры фильтрации */
            filter?: {
              /** @description Поиск по артикулу продавца, артикулу WB, баркоду */
              textSearch?: string
            }
          }
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
           *       "cards": [
           *         {
           *           "nmID": 1234567,
           *           "vendorCode": "wb5xsy5ftj",
           *           "kizMarked": true,
           *           "subjectID": 1436,
           *           "subjectName": "Ведра хозяйственные",
           *           "photos": [
           *             {
           *               "big": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/big/1.webp",
           *               "c246x328": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/c246x328/1.webp",
           *               "c516x688": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/c516x688/1.webp",
           *               "square": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/square/1.webp",
           *               "tm": "https://basket-10.wbbasket.ru/vol1592/part159206/159206280/images/tm/1.webp"
           *             }
           *           ],
           *           "video": "https://videonme-basket-12.wbbasket.ru/vol137/part22557/225577433/hls/1440p/index.m3u8",
           *           "wholesale": {
           *             "enabled": true,
           *             "quantum": 114
           *           },
           *           "sizes": [
           *             {
           *               "chrtID": 111111111,
           *               "techSize": "0",
           *               "skus": [
           *                 "xxxxxxxxxxxx"
           *               ]
           *             }
           *           ],
           *           "dimensions": {
           *             "length": 35,
           *             "width": 40,
           *             "height": 15,
           *             "weightBrutto": 2.9,
           *             "isValid": false
           *           },
           *           "createdAt": "2023-12-05T14:55:09.323462Z",
           *           "trashedAt": "2023-12-06T10:57:42.193028Z"
           *         }
           *       ],
           *       "cursor": {
           *         "trashedAt": "2023-12-06T10:57:42.193028Z",
           *         "nmID": 194128521,
           *         "total": 1
           *       }
           *     }
           */
          'application/json': {
            /** @description Массив карточек товаров */
            cards?: {
              /** @description Артикул WB */
              nmID?: number
              /** @description Артикул продавца */
              vendorCode?: string
              /**
               * @description Подтверждение, что на товар нанесён обязательный код маркировки [Честного знака](https://честныйзнак.рф/):
               *       - `true` — продавец подтверждает, что на товар нанесён обязательный код маркировки.
               *       - `false` — продавец не подтверждает, что на товар нанесён обязательный код маркировки. Передайте в запросе `true`, чтобы подтвердить наличие обязательного кода маркировки на товаре. Карточка товара не пройдёт проверку, если от продавца нет подтверждения о том, что на товар нанесён обязательный код маркировки.
               *
               *     Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./item-management#tag/listings/operation/postV2GetCardsList), поле ответа `needKiz`
               * @default false
               */
              kizMarked: boolean
              /** @description ID предмета */
              subjectID?: number
              /** @description Название предмета */
              subjectName?: string
              /** @description Массив фото */
              photos?: {
                /** @description URL фото `900x1200` */
                big?: string
                /** @description URL фото `248x328` */
                c246x328?: string
                /** @description URL фото `516x688` */
                c516x688?: string
                /** @description URL фото `600x600` */
                square?: string
                /** @description URL фото `75x100` */
                tm?: string
              }[]
              /** @description URL видео */
              video?: string
              /** @description B2B-продажа */
              wholesale?: {
                /**
                 * @description Предназначен ли товар для продажи только B2B-покупателям:
                 *       - `true` — товар предназначен для продажи только B2B-покупателям
                 *       - `false` — товар предназначен для продажи B2B и B2C-покупателям
                 */
                enabled?: boolean
                /**
                 * Format: uint64
                 * @description Минимальное количество единиц товара в одной корзине B2B-покупателя. Только при `"enable":true`
                 */
                quantum?: number
              }
              /** @description Массив размеров */
              sizes?: {
                /**
                 * Format: uint64
                 * @description ID размера
                 */
                chrtID?: number
                /** @description Размер товара */
                techSize?: string
                /** @description Российский размер товара */
                wbSize?: string
                /** @description Массив баркодов */
                skus?: string[]
              }[]
              /** @description Габариты и вес товара c упаковкой, см и кг */
              dimensions?: {
                /** @description Длина, см */
                length?: number
                /** @description Ширина, см */
                width?: number
                /** @description Высота, см */
                height?: number
                /** @description Вес, кг<br>Количество знаков после запятой <=3 */
                weightBrutto?: number
                /**
                 * @description Потенциальная некорректность габаритов товара:
                 *
                 *     - `true` — не выявлена. `"isValid":true` не гарантирует, что размеры указаны корректно. В отдельных случаях (например, при создании новой категории товаров) `"isValid":true` будет возвращаться при любых значениях, кроме нулевых.
                 *
                 *     - `false` — указанные габариты значительно отличаются от средних по категории (предмету). Рекомендуется перепроверить, правильно ли указаны размеры товара в упаковке в `сантиметрах`. Функциональность карточки товара, в том числе начисление логистики и хранения, при этом ограничена не будет. Логистика и хранение продолжают начисляться — по текущим габаритам. Также `"isValid":false` возвращается при отсутствии значений или нулевом значении любой стороны.
                 */
                isValid?: boolean
              }
              /** @description Характеристики */
              characteristics?:
                | {
                    /** @description ID характеристики */
                    id?: number
                    /** @description Название характеристики */
                    name?: string
                    /** @description Значение характеристики. Тип значения зависит от типа характеристики */
                    value?: unknown
                  }[]
                | null
              /** @description Date and time the item was listed */
              createdAt?: string
              /** @description Дата и время помещения в корзину */
              trashedAt?: string
            }[]
            /** @description Пагинатор */
            cursor?: {
              /** @description Дата и время, с которых надо запрашивать следующий список карточек товаров */
              trashedAt?: string
              /** @description Артикул WB, с которого надо запрашивать следующий список карточек товаров */
              nmID?: number
              /** @description Количество возвращённых карточек товаров */
              total?: number
            }
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
          /** @example Request body can not be decoded */
          'plain/text': unknown
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2CardsLimits: {
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
           *       "data": {
           *         "freeLimits": 1500,
           *         "paidLimits": 10
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: {
              /** @description Количество бесплатных лимитов */
              freeLimits?: number
              /** @description Количество оплаченных лимитов */
              paidLimits?: number
            }
            /** @description Флаг ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string | null
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2Barcodes: {
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
           * @description Кол-во баркодов которые надо сгенерировать, максимальное доступное количество баркодов для генерации - `5 000`
           * @example 100
           */
          count?: number
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
            /** @description Массив сгенерированных баркодов */
            data?: string[]
            /**
             * @description Флаг ошибки
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /**
             * @description Дополнительные ошибки
             * @example
             */
            additionalErrors?: string | null
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
          'application/json': components['schemas']['responseBodyContentError403']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsUpload: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description ID предмета */
          subjectID: number
          /** @description [Объединённые](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров.<br>Чтобы создать отдельную карточку, передайте только один объект */
          variants: {
            /** @description Бренд */
            brand?: string
            /** @description Наименование товара */
            title?: string
            /** @description Дополнительный GTIN. Укажите этот параметр, если тот же GTIN вы ранее указывали в одной из карточек товара в параметре `skus`. Нельзя указывать один и тот же GTIN в `skus` для разных карточек или размеров товаров. <br><br> Только для продавцов из РФ */
            gtin?: string
            /**
             * @description Описание товара.<br>
             *     Максимальное количество символов зависит от категории товара<br>
             *     Стандарт — 2000, минимум — 1000, максимум — 5000<br>
             *     Подробно о **правилах заполнения карточки товара** в [Справочном центре](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-create-card) на портале продавцов
             */
            description?: string
            /** @description Артикул продавца */
            vendorCode: string
            /**
             * @description Подтверждение, что на товар нанесён обязательный код маркировки [Честного знака](https://честныйзнак.рф/):
             *       - `true` — продавец подтверждает, что на товар нанесён обязательный код маркировки
             *       - `false` — продавец не подтверждает, что на товар нанесён обязательный код маркировки. Передайте в запросе `true`, чтобы подтвердить наличие на товаре обязательного кода маркировки. Карточка товара не пройдёт проверку, если нет подтверждения продавца о том, что обязательный код маркировки нанесён на товар
             *
             *     Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./item-management#tag/listings/operation/postV2GetCardsList), поле ответа `needKiz`
             * @default false
             */
            kizMarked?: boolean
            /** @description B2B-продажа */
            wholesale?: {
              /**
               * @description Предназначен ли товар для продажи только B2B-покупателям:
               *       - `true` — товар предназначен для продажи только B2B-покупателям
               *       - `false` — товар предназначен для продажи B2B и B2C-покупателям
               * @default false
               */
              enabled?: boolean
              /**
               * Format: uint64
               * @description Минимальное количество единиц товара в одной корзине B2B-покупателя. Только при `"enable":true`
               */
              quantum?: number
            }
            /**
             * @description Габариты и вес товара **c упаковкой**.<br>
             *     Укажите в `сантиметрах` и `килограммах` для любого товара.<br>
             *     Если данные не указаны, автоматически сгенерируются нулевые значения длины, ширины, высоты и веса.<br>
             *     Синхронизация данных новой карточки с сервисом может занимать до 30 минут
             */
            dimensions?: {
              /** @description Длина, см */
              length?: number
              /** @description Ширина, см */
              width?: number
              /** @description Высота, см */
              height?: number
              /** @description Вес, кг<br>Количество знаков после запятой <=3 */
              weightBrutto?: number
            }
            /**
             * @description Массив размеров.<br>
             *     Если не указать для размерного товара (обувь, одежда и др.), сгенерируется автоматически с `techSize` = "A", `wbSize` = "1" и баркодом
             */
            sizes?: {
              /** @description Размер товара (например, XL, 45) */
              techSize?: string
              /** @description Российский размер товара */
              wbSize?: string
              /** @description Цена товара */
              price?: number
              /**
               * @description Массив баркодов для размера. <br>
               *     Если не указать, сгенерируется автоматически. <br>
               *     Позволяет связать несколько баркодов с одним размером, например, для разных партий товара
               */
              skus?: string[]
            }[]
            /**
             * @description Характеристики товара.
             *     <br>
             *     Можно получить методом [Характеристики предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId)
             */
            characteristics?: {
              /** @description ID характеристики */
              id: number
              /**
               * @description Значения характеристики.
               *     <br>
               *     Тип данных — массив строк или число — зависит от типа характеристики, см. описание поля `charcType` в методе [Характеристики предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId).
               *     <br>
               *     Допустимое количество значений отображено в поле `maxCount` того же метода
               */
              value: unknown
            }[]
            /** @description Разрешительные документы карточки товара */
            documents?: {
              /** @description Список разрешительных документов и их данные. Тип документа `type` обязателен для каждого документа */
              items?: components['schemas']['documentsRequest'][]
              /**
               * @description Подтверждение продавца, что для товара не требуются разрешительные документы:
               *       - `true` —  продавец подтверждает, что документы не требуются. Все значения, переданные в `documents`, будут заменены на пустые значения
               *       - `false` —  продавец не подтверждает, что документы не требуются
               *
               *     Обязательность документов проверяется при создании и изменении карточки товара. Если для товара требуются документы и указано значение `true`, карточка не пройдёт проверку
               * @default false
               */
              excludeDocuments?: boolean
            }
          }[]
        }[]
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
           *       "data": null,
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': components['schemas']['responseItemList']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      /** @description Превышен лимит объёма данных в запросе */
      413: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "title": "request body too long",
           *       "detail": "https://openapi.wildberries.ru/content/api/ru/",
           *       "code": "71d3de1b-001e-488f-bbf5-55c31254fbeb",
           *       "requestId": "MN8usr6RfrzWHZfucSvNgb",
           *       "origin": "ag-content",
           *       "status": 413,
           *       "statusText": "Request Entity Too Large"
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
          }
        }
      }
      429: components['responses']['429']
    }
  }
  postV2CardsUploadAdd: {
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
         *       "imtID": 987654321,
         *       "cardsToAdd": [
         *         {
         *           "vendorCode": "myVariant1",
         *           "kizMarked": true,
         *           "wholesale": {
         *             "enabled": true,
         *             "quantum": 243
         *           },
         *           "title": "Наименование товара",
         *           "gtin": "04607009520001",
         *           "description": "Описание товара",
         *           "brand": "Бренд",
         *           "dimensions": {
         *             "length": 9,
         *             "width": 6,
         *             "height": 3,
         *             "weightBrutto": 0.893
         *           },
         *           "characteristics": [
         *             {
         *               "id": 12,
         *               "value": [
         *                 "Russian flag"
         *               ]
         *             },
         *             {
         *               "id": 25471,
         *               "value": 1300
         *             },
         *             {
         *               "id": 14177449,
         *               "value": [
         *                 "blue"
         *               ]
         *             }
         *           ],
         *           "sizes": [
         *             {
         *               "skus": [
         *                 "12345678"
         *               ]
         *             }
         *           ],
         *           "documents": {
         *             "items": [
         *               {
         *                 "type": 1,
         *                 "number": "РОСС RU.АЯ46.В12346",
         *                 "productNumber": "УД-2024-001235",
         *                 "tradeName": "Тест Продукт2",
         *                 "applicant": "ООО Ромашка",
         *                 "startDate": "2023-01-15T03:00:00+03:00",
         *                 "endDate": "2026-01-14T03:00:00+03:00",
         *                 "isEndless": false
         *               }
         *             ],
         *             "excludeDocuments": false
         *           }
         *         },
         *         {
         *           "vendorCode": "myVariant2",
         *           "title": "Наименование товара",
         *           "description": "Описание товаров",
         *           "brand": "Бренд",
         *           "dimensions": {
         *             "length": 8,
         *             "width": 8,
         *             "height": 8,
         *             "weightBrutto": 1.04
         *           },
         *           "characteristics": [
         *             {
         *               "id": 12,
         *               "value": [
         *                 "Russian flag"
         *               ]
         *             },
         *             {
         *               "id": 25471,
         *               "value": 1300
         *             },
         *             {
         *               "id": 14177449,
         *               "value": [
         *                 "blue"
         *               ]
         *             }
         *           ],
         *           "sizes": [
         *             {
         *               "skus": [
         *                 "222222222222"
         *               ]
         *             }
         *           ],
         *           "documents": {
         *             "items": [
         *               {
         *                 "type": 1,
         *                 "number": "РОСС RU.АЯ46.В12345",
         *                 "productNumber": "УД-2024-001234",
         *                 "tradeName": "Тест Продукт",
         *                 "applicant": "ООО Ромашка",
         *                 "startDate": "2023-01-15T03:00:00+03:00",
         *                 "endDate": "2026-01-14T03:00:00+03:00",
         *                 "isEndless": false
         *               }
         *             ],
         *             "excludeDocuments": false
         *           }
         *         }
         *       ]
         *     }
         */
        'application/json': {
          /**
           * Format: int64
           * @description `imtID` отдельной карточки товара или группы [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров, к которой присоединяются создаваемые карточки
           */
          imtID?: number
          /** @description Добавляемые карточки товаров */
          cardsToAdd?: {
            /** @description Бренд */
            brand?: string
            /** @description Артикул продавца */
            vendorCode: string
            /**
             * @description Подтверждение, что на товар нанесён обязательный код маркировки [Честного знака](https://честныйзнак.рф/):
             *       - `true` — продавец подтверждает, что на товар нанесён обязательный код маркировки
             *       - `false` — продавец не подтверждает, что на товар нанесён обязательный код маркировки. Передайте в запросе `true`, чтобы подтвердить наличие на товаре обязательного кода маркировки. Карточка товара не пройдёт проверку, если нет подтверждения продавца о том, что обязательный код маркировки нанесён на товар
             *
             *     Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./item-management#tag/listings/operation/postV2GetCardsList), поле ответа `needKiz`
             * @default false
             */
            kizMarked?: boolean
            /** @description B2B-продажа */
            wholesale?: {
              /**
               * @description Предназначен ли товар для продажи только B2B-покупателям:
               *       - `true` — товар предназначен для продажи только B2B-покупателям
               *       - `false` — товар предназначен для продажи B2B и B2C-покупателям
               * @default false
               */
              enabled?: boolean
              /**
               * Format: uint64
               * @description Минимальное количество единиц товара в одной корзине B2B-покупателя. Только при `"enable":true`
               */
              quantum?: number
            }
            /** @description Наименование товара */
            title?: string
            /** @description Дополнительный GTIN. Укажите этот параметр, если тот же GTIN вы ранее указывали в одной из карточек товара в параметре `skus`. Нельзя указывать один и тот же GTIN в `skus` для разных карточек или размеров товаров. <br><br> Только для продавцов из РФ */
            gtin?: string
            /**
             * @description Описание товара.<br>
             *     Максимальное количество символов зависит от категории товара<br>
             *     Стандарт — 2000, минимум — 1000, максимум — 5000<br>
             *     Подробно о **правилах заполнения карточки товара** в [Справочном центре](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-create-card) на портале продавцов
             */
            description?: string
            /**
             * @description Габариты и вес товара **c упаковкой**.<br>
             *     Укажите в `сантиметрах` и `килограммах` для любого товара. <br>
             *     Если данные не указаны, автоматически сгенерируются нулевые значения длины, ширины, высоты и веса. <br>
             *     Синхронизация данных с сервисом может занимать до 30 минут
             */
            dimensions?: {
              /** @description Длина, см */
              length?: number
              /** @description Ширина, см */
              width?: number
              /** @description Высота, см */
              height?: number
              /** @description Вес, кг<br>Количество знаков после запятой <=3 */
              weightBrutto?: number
            }
            /**
             * @description Массив размеров.<br>
             *     Если не указать для размерного товара (обувь, одежда и др.), сгенерируется автоматически с `techSize` = "A", `wbSize` = "1" и баркодом
             */
            sizes?: {
              /** @description Размер товара (например, XL, 45) */
              techSize?: string
              /** @description Российский размер товара */
              wbSize?: string
              /** @description Цена товара */
              price?: number
              /** @description Баркод. Если не указать, сгенерируется автоматически */
              skus?: string[]
            }[]
            /**
             * @description Характеристики товара.
             *     <br>
             *     Можно получить методом [Характеристики предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId)
             */
            characteristics?: {
              /** @description ID характеристики */
              id: number
              /**
               * @description Значения характеристики.
               *     <br>
               *     Тип данных — массив строк или число — зависит от типа характеристики, см. описание поля `charcType` в методе [Характеристики предмета](./item-management#tag/categoriesSubcategoriesAndCharacteristics/operation/getV2ObjectCharcsSubjectId).
               *     <br>
               *     Допустимое количество значений отображено в поле `maxCount` того же метода
               */
              value: unknown
            }[]
            /** @description Документы */
            documents?: {
              /** @description Список разрешительных документов и их данные. Тип документа `type` обязателен для каждого документа */
              items?: components['schemas']['documentsRequest'][]
              /**
               * @description Подтверждение продавца, что для товара не требуются разрешительные документы:
               *       - `true` —  продавец подтверждает, что документы не требуются. Все значения, переданные в `documents`, будут заменены на пустые значения
               *       - `false` —  продавец не подтверждает, что документы не требуются
               *
               *     Обязательность документов проверяется при создании и изменении карточки товара. Если для товара требуются документы и указано значение `true`, карточка не пройдёт проверку
               * @default false
               */
              excludeDocuments?: boolean
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
           *       "data": null,
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": {}
           *     }
           */
          'application/json': components['schemas']['responseItemList']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseBodyContentError400']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      /** @description Превышен лимит объёма данных в запросе */
      413: {
        headers: {
          [name: string]: unknown
        }
        content: {
          /**
           * @example {
           *       "title": "request body too long",
           *       "detail": "https://openapi.wildberries.ru/content/api/ru/",
           *       "code": "71d3de1b-001e-488f-bbf5-55c31254fbeb",
           *       "requestId": "MN8usr6RfrzWHZfucSvNgb",
           *       "origin": "ag-content",
           *       "status": 413,
           *       "statusText": "Request Entity Too Large"
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
          }
        }
      }
      429: components['responses']['429']
    }
  }
  postV3MediaFile: {
    parameters: {
      query?: never
      header: {
        /** @description Артикул WB */
        'X-Nm-Id': string
        /**
         * @description Номер медиафайла на загрузку, начинается с `1`. При загрузке видео всегда указывайте `1`.
         *
         *     Чтобы добавить изображение к уже загруженным, номер медиафайла должен быть больше количества уже загруженных медиафайлов.
         */
        'X-Photo-Number': number
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** Format: binary */
          uploadfile?: string
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
           *       "data": {},
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: Record<string, never>
            /** @description Флаг ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: Record<string, never> | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['mediaErrors']
          /** @example Invalid 'boundary' for 'multipart/form-data' request */
          'plain/text': unknown
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
          'application/json': components['schemas']['mediaErrors']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3MediaSave: {
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
         *       "nmId": 213864079,
         *       "data": [
         *         "https://basket-stage-02.dasec.ru/vol669/part66964/66964260/images/big/2.jpg",
         *         "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_mb.mp4"
         *       ]
         *     }
         */
        'application/json': {
          /** @description Артикул WB */
          nmId?: number
          /** @description Ссылки на изображения в том порядке, в котором они будут в карточке товара, и на видео, на любой позиции массива */
          data?: string[]
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
           *       "data": {},
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: Record<string, never>
            /** @description Флаг ошибки */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: Record<string, never> | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['mediaErrors']
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
          'application/json': components['schemas']['mediaErrors']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка сохранения части ссылок */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['mediaErrors']
        }
      }
      /** @description Отсутствует параметр nmId */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['mediaErrors']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1RecommendationsList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetRecomReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['GetRecomRes']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['response400GetRecom']
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
  postV1RecommendationsSet: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['SetRecomReq']
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SetRecomRes']
        }
      }
      /** @description Уже отправлено */
      208: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['response208SetRecom']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['response400SetRecom']
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
  postV2UploadTask: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['SellerTaskRequest']
    responses: {
      200: components['responses']['SuccessTaskResponse']
      208: components['responses']['Response208']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка при конвертации валюты */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      /** @description Неожидаемый результат */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2UploadTaskSize: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['SellerTaskRequestSize']
    responses: {
      200: components['responses']['SuccessTaskResponse']
      208: components['responses']['Response208']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка при конвертации валюты */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      /** @description Неожидаемый результат */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2UploadTaskClubDiscount: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['SellerTaskRequestClubDisc']
    responses: {
      200: components['responses']['SuccessTaskResponse']
      208: components['responses']['Response208']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка при конвертации валюты */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      /** @description Неожидаемый результат */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1UploadTaskB2bWholesale: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['B2BWholesaleTaskRequest']
    responses: {
      200: components['responses']['SuccessTaskResponseV3']
      208: components['responses']['Response208V3']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseErrorV3']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseErrorV3']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2HistoryTasks: {
    parameters: {
      query: {
        /** @description ID загрузки */
        uploadID: components['parameters']['uploadID']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseTaskHistory']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2HistoryGoodsTask: {
    parameters: {
      query: {
        /** @description Сколько элементов вывести на одной странице (пагинация) */
        limit: components['parameters']['limit']
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
        offset?: components['parameters']['offset']
        /** @description ID загрузки */
        uploadID: components['parameters']['uploadID']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseGoodHistories']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2BufferTasks: {
    parameters: {
      query: {
        /** @description ID загрузки */
        uploadID: components['parameters']['uploadID']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseTaskBuffer']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2BufferGoodsTask: {
    parameters: {
      query: {
        /** @description Сколько элементов вывести на одной странице (пагинация) */
        limit: components['parameters']['limit']
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
        offset?: components['parameters']['offset']
        /** @description ID загрузки */
        uploadID: components['parameters']['uploadID']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseGoodBufferHistories']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      401: components['responses']['401']
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2ListGoodsFilter: {
    parameters: {
      query: {
        /** @description Сколько элементов вывести на одной странице (пагинация) */
        limit: components['parameters']['limit']
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
        offset?: components['parameters']['offset']
        /**
         * @description Артикул WB для поиска товара
         * @example 44589768676
         */
        filterNmID?: components['parameters']['filterNmID']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseItemsLists']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV2ListGoodsFilter: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['FilterPost']
    responses: {
      200: components['responses']['ResponseItemsLists']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2ListGoodsSizeNm: {
    parameters: {
      query: {
        /** @description Сколько элементов вывести на одной странице (пагинация) */
        limit: components['parameters']['limit']
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
        offset?: components['parameters']['offset']
        /** @description Артикул WB */
        nmID: components['parameters']['nmID']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseSizeLists']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV2QuarantineGoods: {
    parameters: {
      query: {
        /** @description Сколько элементов вывести на одной странице (пагинация) */
        limit: components['parameters']['limit']
        /** @description Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента */
        offset?: components['parameters']['offset']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ResponseQuarantineItems']
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
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
          'application/json': components['schemas']['ResponseError']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Неожидаемый результат */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ResponseError']
        }
      }
      429: components['responses']['429']
    }
  }
  putV3StocksWarehouseId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Массив ID размеров товаров и их остатков */
          stocks: {
            /**
             * Format: uint64
             * @description ID размера товара
             * @example 12345678
             */
            chrtId: number
            /**
             * @description Остаток
             * @example 11
             */
            amount: number
          }[]
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
      /** @description Не применимо */
      406: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UpdateBlocked']
        }
      }
      /** @description Конфликт */
      409: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['StocksWarehouseError']
        }
      }
      429: components['responses']['429']
    }
  }
  postV3StocksWarehouseId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Массив ID размеров товаров */
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
            stocks?: {
              /**
               * Format: uint64
               * @description ID размера товара
               * @example 12345678
               */
              chrtId?: number
              /**
               * @description Остаток
               * @example 11
               */
              amount?: number
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
      404: components['responses']['NotFound']
      429: components['responses']['429']
    }
  }
  deleteV3StocksWarehouseId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Массив ID размеров товаров */
          chrtIds: number[]
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
  getV3Offices: {
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
          'application/json': components['schemas']['Office'][]
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
      429: components['responses']['429']
    }
  }
  getV3Warehouses: {
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
          'application/json': components['schemas']['Warehouse'][]
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
      429: components['responses']['429']
    }
  }
  postV3Warehouses: {
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
           * @description Имя склада продавца
           * @example Склад Коледино
           */
          name: string
          /**
           * @description ID [склада WB](./item-management#tag/sellerWarehouses/operation/getV3Offices).<br>Нельзя привязывать склад WB, который уже используется
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
             * @description ID склада продавца
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
      /** @description Ошибка создания нового склада */
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
  putV3WarehousesWarehouseId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Имя склада продавца
           * @example Склад Коледино
           */
          name: string
          /**
           * @description ID [склада WB](./item-management#tag/sellerWarehouses/operation/getV3Offices).<br>Нельзя привязывать склад WB, который уже используется.<br>Можно менять не чаще одного раза в сутки
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
      /** @description Ошибка обновления склада */
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
  deleteV3WarehousesWarehouseId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
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
  getV3DbwWarehousesWarehouseIdContacts: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
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
            contacts?: {
              /**
               * @description Комментарий
               * @example Иванов Иван Иванович. Звонить с 10 до 21 часа.
               */
              comment?: string
              /**
               * @description Номер телефона
               * @example +79998887766
               */
              phone?: string
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
  putV3DbwWarehousesWarehouseIdContacts: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID склада продавца */
        warehouseId: components['parameters']['Warehouse']
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['StoreContactRequestBody']
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
      429: components['responses']['429']
    }
  }
}
