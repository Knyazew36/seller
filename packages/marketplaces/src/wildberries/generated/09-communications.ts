// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/api/v1/new-feedbacks-questions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Непросмотренные отзывы и вопросы
     * @description Метод проверяет наличие непросмотренных [вопросов](/openapi/customer-communication#tag/questions/operation/getV1Questions) и [отзывов](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks) от покупателей. Если у продавца есть непросмотренные вопросы или отзывы, возвращает `true`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1NewFeedbacksQuestions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/questions/count-unanswered': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Неотвеченные вопросы
     * @description Метод возвращает общее количество неотвеченных [вопросов](/openapi/customer-communication#tag/questions/operation/getV1Questions) и количество неотвеченных вопросов за сегодня.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1QuestionsCountUnanswered']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/questions/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Количество вопросов
     * @description Метод возвращает количество отвеченных или неотвеченных [вопросов](/openapi/customer-communication#tag/questions/operation/getV1Questions) за заданный период.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1QuestionsCount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/questions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список вопросов
     * @description Метод возвращает список вопросов по заданным фильтрам. Вы можете:
     *       - получить данные отвеченных и неотвеченных вопросов
     *       - сортировать вопросы по дате
     *       - настроить пагинацию и количество вопросов в ответе
     *
     *     <div class="description_important">
     *       Можно получить максимум 10 000 вопросов в одном ответе
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Questions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /**
     * Работа с вопросами
     * @description В зависимости от тела запроса, метод позволяет:
     *       - отметить [вопрос](/openapi/customer-communication#tag/questions/operation/getV1Questions) как просмотренный
     *       - отклонить вопрос
     *       - ответить на вопрос или отредактировать ответ
     *
     *     <div class="description_important">
     *     Все ответы продавцов проходят предварительную модерацию перед публикацией
     *     </div>
     *
     *     <div class="description_important">
     *       Отредактировать ответ на вопрос можно 1 раз в течение 60 дней после отправки ответа
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    patch: operations['patchV1Questions']
    trace?: never
  }
  '/api/v1/question': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить вопрос по ID
     * @description Метод возвращает данные [вопроса](/openapi/customer-communication#tag/questions/operation/getV1Questions) по его ID. Далее вы можете [работать с этим вопросом](/openapi/customer-communication#tag/questions/operation/patchV1Questions).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Question']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/feedbacks/count-unanswered': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Необработанные отзывы
     * @description Метод возвращает:
     *       - количество необработанных [отзывов](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks) за сегодня и за всё время
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1FeedbacksCountUnanswered']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/feedbacks/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Количество отзывов
     * @description Метод возвращает количество обработанных или необработанных [отзывов](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks) за заданный период.
     *     Отзыв считается обработанным, если выполняется одно из условий:
     *       - на отзыв получен ответ
     *       - отзыв содержит только оценку (без текста и фото)
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1FeedbacksCount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/feedbacks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список отзывов
     * @description Метод возвращает список отзывов по заданным фильтрам. Вы можете:
     *       - получить данные обработанных и необработанных отзывов.
     *         Отзыв считается обработанным, если выполняется одно из условий:
     *           - на отзыв получен ответ
     *           - отзыв содержит только оценку (без текста и фото)
     *       - сортировать отзывы по дате
     *       - настроить пагинацию и количество отзывов в ответе
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Feedbacks']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/feedbacks/answer': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Ответить на отзыв
     * @description Метод позволяет ответить на [отзыв](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks) покупателя.
     *
     *     <div class="description_important">
     *       ID отзыва не валидируется. Если в запросе вы передали некорректный ID, вы не получите ошибку.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1FeedbacksAnswer']
    delete?: never
    options?: never
    head?: never
    /**
     * Отредактировать ответ на отзыв
     * @description Метод позволяет отредактировать уже отправленный [ответ на отзыв](/openapi/customer-communication#tag/feedbacks/operation/postV1FeedbacksAnswer) покупателя.
     *     <br><br>
     *     Отредактировать ответ можно только один раз в течение 60 дней c момента отправки.
     *
     *     <div class="description_important">
     *       ID отзыва не валидируется. Если в запросе вы передали некорректный ID, вы не получите ошибку.
     *     </div>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    patch: operations['patchV1FeedbacksAnswer']
    trace?: never
  }
  '/api/v1/feedbacks/order/return': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Возврат товара по ID отзыва
     * @description Метод запрашивает возврат товара, по которому оставлен [отзыв](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks).
     *     <br><br>
     *     Возврат доступен для отзывов с полем `"isAbleReturnProductOrders": true`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1FeedbacksOrderReturn']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/feedback': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить отзыв по ID
     * @description Метод возвращает данные [отзыва](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks) по его ID.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Feedback']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/feedbacks/archive': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список архивных отзывов
     * @description Метод возвращает список архивных [отзывов](/openapi/customer-communication#tag/feedbacks/operation/getV1Feedbacks).
     *     <br><br>
     *     Отзыв становится архивным, если:
     *       - на отзыв получен ответ
     *       - на отзыв не получен ответ в течение 30 дней
     *       - в отзыве нет текста и фото
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1FeedbacksArchive']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/feedbacks/v1/pins': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список закреплённых и откреплённых отзывов
     * @description Метод предоставляет список закреплённых и откреплённых отзывов.
     *     <br>
     *     Откреплёнными считаются только отзывы, которые были откреплены автоматически по причинам, указанным в ответе в поле `unpinnedCause`.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1Pins']
    put?: never
    /**
     * Закрепить отзывы
     * @description Метод позволяет закрепить отзывы в карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек. <br>
     *     Чтобы получить ID отзывов, используйте метод [Список закреплённых и откреплённых отзывов](/openapi/customer-communication#tag/pinnedFeedbacks/operation/getV1Pins).<br>
     *     <br>
     *     Метод доступен по [подписке Джем](https://seller.wildberries.ru/monetization/jam) или c [тарифной опцией](https://seller.wildberries.ru/tariff-constructor) **Закрепление отзыва**.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    post: operations['postV1Pins']
    /**
     * Открепить отзывы
     * @description Метод позволяет открепить отзывы в карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек.<br>
     *     Чтобы получить `pinId` — ID операций закрепления, используйте метод [Список закреплённых и откреплённых отзывов](/openapi/customer-communication#tag/pinnedFeedbacks/operation/getV1Pins).<br>
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    delete: operations['deleteV1Pins']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/feedbacks/v1/pins/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Количество закреплённых и откреплённых отзывов
     * @description Метод возвращает количество закреплённых и откреплённых отзывов за заданный период.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1PinsCount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/feedbacks/v1/pins/limits': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Лимиты закреплённых отзывов
     * @description Метод возвращает лимиты закреплённых отзывов по тарифу и подписке.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца для всех методов категории <strong>Вопросы и отзывы</strong>:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
     *     | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1PinsLimits']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/seller/chats': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список чатов
     * @description Метод возвращает список всех чатов продавца. По этим данным можно получить [события чатов](/openapi/customer-communication#tag/buyersChat/operation/getV1SellerEvents) или [отправить сообщение покупателю](/openapi/customer-communication#tag/buyersChat/operation/postV1SellerMessage).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1SellerChats']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/seller/events': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * События чатов
     * @description Метод возвращает список событий всех [чатов с покупателями](/openapi/customer-communication#tag/buyersChat/operation/getV1SellerChats).
     *
     *     Чтобы получить все события:
     *       1. Сделайте первый запрос без параметра `next`.
     *       2. Повторяйте запрос со значением параметра `next` из ответа на предыдущий запрос, пока `totalEvents` не станет равным `0`. Это будет означать, что вы получили все события.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1SellerEvents']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/seller/message': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправить сообщение
     * @description Метод отправляет сообщения в [чат с покупателем](/openapi/customer-communication#tag/buyersChat/operation/getV1SellerChats).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    post: operations['postV1SellerMessage']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/seller/download/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получить файл из сообщения
     * @description Метод возвращает файл или изображение из сообщения по его ID.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
     *     | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
     *     </div>
     */
    get: operations['getV1SellerDownloadId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/claims': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Заявки покупателей на возврат
     * @description Метод возвращает заявки покупателей на возврат товаров за последние 14 дней. Вы можете [отвечать на эти заявки](/openapi/customer-communication#tag/buyersReturns/operation/patchV1Claim).
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 20 запросов | 3 сек | 10 запросов |
     *     | Сервисный | 1 мин | 20 запросов | 3 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    get: operations['getV1Claims']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/v1/claim': {
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
     * Ответ на заявку покупателя
     * @description Метод отправляет ответ на [заявку](/openapi/customer-communication#tag/buyersReturns/operation/getV1Claims) покупателя на возврат товаров.
     *
     *     <div class="description_limit">
     *     <a href="/openapi/api-information#tag/introduction/Limity-zaprosov">Лимит запросов</a> на один профиль продавца:
     *
     *
     *     | Тип | Период | Лимит | Интервал | Всплеск |
     *     | --- | --- | --- | --- | --- |
     *     | Персональный | 1 мин | 20 запросов | 3 сек | 10 запросов |
     *     | Сервисный | 1 мин | 20 запросов | 3 сек | 10 запросов |
     *     | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 10 запросов |
     *     | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
     *     </div>
     */
    patch: operations['patchV1Claim']
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    standardizedFQError: {
      /** @description Заголовок ошибки */
      title?: string
      /** @description Уникальный ID запроса */
      requestId?: string
      /** @description ID внутреннего сервиса WB */
      origin?: string
      /** @description Детали ошибки */
      detail?: string
    }
    responseFeedbackQuestionErr: {
      data?: Record<string, never> | null
      /** @description Есть ли ошибка */
      error?: boolean
      /** @description Описание ошибки */
      errorText?: string
      /** @description Дополнительные ошибки */
      additionalErrors?: string[] | null
      requestId?: string
    }
    /** @description Массив отзывов */
    responseFeedback: {
      /** @description ID отзыва */
      id?: string
      /** @description Текст отзыва */
      text?: string
      /** @description Достоинства товара */
      pros?: string
      /** @description Недостатки товара */
      cons?: string
      /** @description Оценка товара */
      productValuation?: number
      /**
       * Format: date-time
       * @description Дата и время создания отзыва
       */
      createdDate?: string
      /** @description Структура ответа */
      answer?: {
        /** @description Текст ответа */
        text?: string
        /**
         * @description Статус:
         *       - `none` — новый
         *       - `wbRu` — отображается на сайте
         *       - `reviewRequired` — ответ проходит проверку
         *       - `rejected` — ответ отклонён
         */
        state?: string
        /**
         * @description Можно ли отредактировать ответ:
         *       - `false` — нет
         *       - `true` — да
         */
        editable?: boolean
      } | null
      /**
       * @description Статус отзыва:
       *       - `none` - не обработан (новый)
       *       - `wbRu` - обработан
       */
      state?: string
      /** @description Информация о товаре */
      productDetails?: {
        /** @description Артикул WB */
        nmId?: number
        /** @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров */
        imtId?: number
        /** @description Название товара */
        productName?: string
        /** @description Артикул продавца */
        supplierArticle?: string | null
        /** @description Имя продавца */
        supplierName?: string | null
        /** @description Бренд товара */
        brandName?: string | null
        /** @description Размер товара (`techSize` в КТ) */
        size?: string
      }
      /** @description Массив структур фотографий */
      photoLinks?:
        | {
            /** @description Адрес фотографии полного размера */
            fullSize?: string
            /** @description Адрес фотографии маленького размера */
            miniSize?: string
          }[]
        | null
      /** @description Структура видео */
      video?: {
        /** @description Ссылка на обложку видео */
        previewImage?: string
        /** @description Ссылка на файл плейлиста видео (доступно по протоколу HLS) */
        link?: string
        /** @description Общая продолжительность видео */
        durationSec?: number
      } | null
      /** @description Просмотрен ли отзыв */
      wasViewed?: boolean
      /** @description Имя автора отзыва */
      userName?: string
      /**
       * @description Статус заказа.
       *     <br>Возможные значения:
       *     - `buyout` — выкуплен
       *     - `rejected` — отказались
       *     - `returned` — возврат
       *     - `notSpecified` — статус не присвоен
       */
      orderStatus?: string
      /**
       * @description Соответствие заявленного размера реальному.
       *     <br>Возможные значения:
       *     - ` ` — для безразмерных товаров
       *     - `ок` — соответствует размеру
       *     - `smaller` — маломерит
       *     - `bigger` — большемерит
       */
      matchingSize?: string
      /** @description Доступна ли продавцу возможность оставить жалобу на отзыв (`true` — доступна, `false` — не доступна) */
      isAbleSupplierFeedbackValuation?: boolean
      /** @description Ключ причины жалобы на отзыв */
      supplierFeedbackValuation?: number
      /**
       * @description Доступна ли продавцу возможность сообщить о проблеме с товаром:
       *       - `true` — да
       *       - `false` — нет
       */
      isAbleSupplierProductValuation?: boolean
      /** @description Ключ проблемы с товаром */
      supplierProductValuation?: number
      /**
       * @description Опция возврата товара:
       *      - `true` — доступна
       *      - `false` — недоступна
       */
      isAbleReturnProductOrders?: boolean
      /** @description Дата и время, когда на запрос возврата был получен ответ со статус-кодом 200. */
      returnProductOrdersDate?: string | null
      /** @description Список тегов покупателя */
      bables?: string[] | null
      /** @description Штрихкод единицы товара */
      lastOrderShkId?: number
      /** @description Дата покупки */
      lastOrderCreatedAt?: string
      /** @description Цвет товара */
      color?: string
      /** @description ID предмета */
      subjectId?: number
      /** @description Название предмета */
      subjectName?: string
      /** @description ID начального отзыва (`null`, если этот отзыв начальный) */
      parentFeedbackId?: string | null
      /** @description ID дополненного отзыва (`null`, если этот отзыв дополненный) */
      childFeedbackId?: string | null
    }[]
    Chat: {
      /**
       * @description ID чата
       * @example 1:4019cd7d-cca8-4e90-8b11-f78afbea42e3
       */
      chatID?: string
      /**
       * @description Подпись чата. Требуется при [отправке сообщения](./customer-communication#tag/buyersChat/operation/postV1SellerMessage)
       * @example 1:4019cd7d-cca8-4e90-8b11-f78afbea42e3:54828159:bc3a4c04079f5956cff170b25e73523aa1208b5c0bd7aea1e520a64ae3e212b1ebae6712661f3afd27520fa785fa3042254e8a3100ce00644322054ae7cfcd0e
       */
      replySign?: string
      /**
       * @description Имя покупателя
       * @example Иван
       */
      clientName?: string
      goodCard?: components['schemas']['Listing']
      /** @description Последнее сообщение в чате */
      lastMessage?: components['schemas']['LastMessage']
    }
    ChatsResponse: {
      result?: components['schemas']['Chat'][]
      /**
       * @description Ошибки, если есть
       * @example null
       */
      errors?: string[] | null
    }
    Event: {
      /** @description ID чата */
      chatID?: string
      /** @description ID события */
      eventID?: string
      eventType?: components['schemas']['EventType']
      /**
       * @description Признак нового чата:
       *     - `false` — чат не новый
       *     - `true` — чат новый
       */
      isNewChat?: boolean
      /** @description Данные сообщения */
      message?: {
        attachments?: components['schemas']['EventAttachments']
        /** @description Текст сообщения */
        text?: string
      }
      /**
       * @description Источник отправки сообщения:
       *     - `seller-portal` — портал продавцов
       *     - `seller-public-api` — API Чата с покупателями
       *     - `rusite` — портал покупателей
       *     - `global` — портал `global.wildberries.ru`
       *     - `ios` —  мобильная операционная система от **Apple**
       *     - `android` — операционная система **Android** от **Google**
       */
      source?: string
      /** @description Время появления события на сервере. Формат Unix timestamp */
      addTimestamp?: number
      /** @description Время появления события на сервере в UTC */
      addTime?: string
      /** @description Подпись чата. Доступна только при `"isNewChat": true`. Требуется при [отправке сообщения](./customer-communication#tag/buyersChat/operation/postV1SellerMessage) */
      replySign?: string
      sender?: components['schemas']['Sender']
      /** @description Имя покупателя */
      clientName?: string
    }
    /** @description Вложения */
    EventAttachments: {
      goodCard?: components['schemas']['Listing']
      /** @description Файлы */
      files?: components['schemas']['File'][]
      /** @description Изображения */
      images?: components['schemas']['Image'][]
    }
    /**
     * @description Тип события:
     *     - `message` — сообщение
     * @enum {string}
     */
    EventType: 'message'
    File: {
      /** @description Тип файла */
      contentType?: string
      /** @description Дата загрузки файла */
      date?: string
      /** @description ID файла. [Получить файл](./customer-communication#tag/buyersChat/operation/getV1SellerDownloadId) */
      downloadID?: string
      /** @description Название файла */
      name?: string
      /** @description URL для получения файла */
      url?: string
      /** @description Размер файла в байтах */
      size?: number
    }
    /** @description Информация о заказе */
    Listing: {
      /** @description Артикул WB */
      nmID?: number
      /** @description Фактическая цена с учетом всех скидок. Взимается с покупателя */
      price?: number
      /** @description Валюта */
      priceCurrency?: string
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
       */
      rid?: string
      /** @description Размер товара, соответствует `wbSize` в [карточке товара](./item-management#tag/listings/operation/postV2GetCardsList) */
      size?: string
    }
    /**
     * @example {
     *       "text": "Можно заказать 100 штук?",
     *       "addTimestamp": 1766138234889
     *     }
     */
    LastMessage: {
      /** @description Текст сообщения */
      text?: string
      /** @description Время сообщения */
      addTimestamp?: number
    }
    /** @description Изображение */
    Image: {
      /** @description Дата загрузки изображения */
      date?: string
      /** @description ID файла. [Получить файл](./customer-communication#tag/buyersChat/operation/getV1SellerDownloadId) */
      downloadID?: string
      /** @description URL для получения изображения */
      url?: string
    }
    MessageResponse: {
      /** @description Ошибки загрузки файлов, если есть */
      errors?: string[]
      result?: {
        /**
         * Format: Unix Timestamp в миллисекундах
         * @description Дата и время создания чата
         */
        addTime?: number
        /** @description ID чата */
        chatID?: string
        /** @description Подпись чата */
        sign?: string
      }
    }
    /**
     * @description Отправитель:
     *     - `client` — покупатель
     *     - `seller` — продавец
     *     - `wb` — Wildberries
     * @enum {string}
     */
    Sender: 'client' | 'seller' | 'wb'
    EventsResponse: {
      result?: components['schemas']['EventsResult']
      /** @description Ошибки, если есть */
      errors?: string[] | null
    }
    EventsResult: {
      /**
       * Format: Unix timestamp
       * @description Пагинатор. Значение поля необходимо указать в запросе для получения следующего пакета данных
       */
      next?: number
      /**
       * Format: date-time
       * @description Время новейшего события в ответе
       */
      newestEventTime?: string
      /**
       * Format: date-time
       * @description Время старейшего события в ответе
       */
      oldestEventTime?: string
      /** @description Количество событий */
      totalEvents?: number
      events?: components['schemas']['Event'][]
    }
    /** @enum {string} */
    'domain.ReviewPinMethod': 'subscription' | 'tariff'
    /** @enum {string} */
    'domain.ReviewPinOn': 'imt' | 'nm'
    /** @enum {string} */
    'domain.ReviewState': 'pinned' | 'unpinned'
    'openapi.PinReviewItem': {
      /**
       * @description Метод закрепления:
       *       - `subscription` — подписка Джем
       *       - `tariff` — тарифная опция
       * @example subscription
       * @enum {string}
       */
      pinMethod: 'tariff' | 'subscription'
      /**
       * @description Место закрепления отзыва:
       *       - `nm` — карточка товара
       *       - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
       * @example imt
       * @enum {string}
       */
      pinOn: 'nm' | 'imt'
      /**
       * @description ID отзыва
       * @example DibuRAImknLyiqgzvGcU
       */
      feedbackId: string
    }
    /**
     * @example {
     *       "data": [
     *         {
     *           "feedbackId": "VlbkVVl7mtw37wуWkJZz",
     *           "pinId": 18577062,
     *           "pinMethod": "subscription",
     *           "pinOn": "imt",
     *           "isErrors": false
     *         },
     *         {
     *           "feedbackId": "DibuRAImknLyiqgzvGcU",
     *           "pinMethod": "tariff",
     *           "pinOn": "imt",
     *           "isErrors": true,
     *           "errors": [
     *             {
     *               "status": "itemNotFound",
     *               "title": "item not found",
     *               "detail": "item not found or does not belong to seller",
     *               "requestId": "0414dc48df701618e0a3bfc414fe3136",
     *               "origin": "pin-open-api"
     *             }
     *           ]
     *         }
     *       ]
     *     }
     */
    'openapi.PinReviewItemResult': {
      data?: {
        /** @description ID отзыва */
        feedbackId: string
        /** @description ID операции закрепления. Если поле отсутствует — закрепить отзыв не удалось */
        pinId?: number
        /**
         * @description Метод закрепления:
         *       - `subscription` — подписка Джем
         *       - `tariff` — тарифная опция
         * @enum {string}
         */
        pinMethod: 'tariff' | 'subscription'
        /**
         * @description Место закрепления отзыва:
         *       - `nm` — карточка товара
         *       - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
         * @enum {string}
         */
        pinOn: 'nm' | 'imt'
        /** @description Есть ли ошибки */
        isErrors: boolean
        /**
         * @description Детали ошибок
         * @example [
         *       {
         *         "status": "itemNotFound",
         *         "title": "item not found",
         *         "detail": "item not found or does not belong to seller",
         *         "requestId": "0414dс48df701618e0а3bfc414fe3136",
         *         "origin": "pin-open-api"
         *       }
         *     ]
         */
        errors?: components['schemas']['openapi.ResultErr'][]
      }[]
    }
    'openapi.PinnedReviewItemResult': {
      /**
       * Format: date-time
       * @description Дата и время закрепления или открепления
       * @example 2020-01-01T15:04:05Z
       */
      changeStateAt: string
      /**
       * @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
       * @example 256971531
       */
      imtId: number
      /**
       * @description Артикул WB
       * @example 177974151
       */
      nmId: number
      /**
       * @description ID операции закрепления отзыва
       * @example 1857762
       */
      pinId: number
      /**
       * @description Метод закрепления:
       *       - `subscription` — подписка Джем
       *       - `tariff` — тарифная опция
       * @example subscription
       */
      pinMethod: string & components['schemas']['domain.ReviewPinMethod']
      /**
       * @description Место закрепления отзыва:
       *       - `nm` — карточка товара
       *       - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
       * @example imt
       */
      pinOn: string & components['schemas']['domain.ReviewPinOn']
      /**
       * @description ID отзыва
       * @example DibuRAImknLyiqgzvGcU
       */
      feedbackId: string
      /**
       * @description Закреплён ли отзыв:
       *       - `pinned` — да
       *       - `unpinned` — нет
       * @example unpinned
       */
      state: string & components['schemas']['domain.ReviewState']
      /**
       * @description Причина открепления отзыва:
       *       - `sysTariffUnpinned` — закончилась подписка или тарифная опция
       *       - `sysLimitReached` — закончился общий лимит по подписке
       *       - `sysNoratingUnpinned` — отзыв исключён из рейтинга. Например, удалён или забанен
       *       - `sysAdditionalSlot` — к карточке или к группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек прикреплено максимальное количество отзывов
       * @example sysTariffUnpinned
       * @enum {string}
       */
      unpinnedCause?: 'sysTariffUnpinned' | 'sysLimitReached' | 'sysNoratingUnpinned' | 'sysAdditionalSlot'
    }
    'openapi.ResultErr': {
      /** @description ID внутреннего сервиса WB */
      origin: string
      /** @description Детали ошибки */
      detail?: string
      /**
       * @description ID запроса
       * @example req-12345
       */
      requestId: string
      /**
       * @description Статус
       * @example feedbackNotFound
       * @enum {string}
       */
      status:
        | 'feedbackNotFound'
        | 'itemNotFound'
        | 'feedbackMismatch'
        | 'itemNoImages'
        | 'feedbackExcluded'
        | 'imtNotDisplayed'
        | 'globalLimitReached'
        | 'unitLimitReached'
        | 'tariffRestriction'
        | 'subscriptionRestriction'
        | 'alreadyPinned'
        | 'bodyNotValid'
      /**
       * @description Заголовок ошибки
       * @example feedbackNotFound
       */
      title: string
    }
    'openapi.SellerLimit': {
      /**
       * @description Максимальное количество закреплённых отзывов в одной карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек
       * @example 2
       */
      perUnitLimit: number
      /**
       * @description Сколько ещё отзывов можно закрепить
       * @example 5
       */
      remaining: number
      /**
       * @description Общий лимит закреплений
       * @example 15
       */
      totalLimit: number
      /**
       * @description Количество закреплённых отзывов не ограничено:
       *       - `true` — да
       *       - `false` — нет
       * @example false
       */
      unlimited: boolean
      /**
       * @description Текущее количество закреплённых отзывов
       * @example 10
       */
      used: number
    }
    'openapi.SellerLimitsResponse': {
      data?: {
        subscription?: (components['schemas']['openapi.SellerLimit'] & unknown) | null
        tariff?: (components['schemas']['openapi.SellerLimit'] & unknown) | null
      }
    }
    'respond.ResultErr': {
      /** @description Детали ошибки */
      detail?: string
      /** @description ID внутреннего сервиса WB */
      origin: string
      /** @description ID запроса */
      requestId: string
      /** @description HTTP статус-код */
      status: number
      /** @description Заголовок ошибки */
      title: string
    }
    'respond.SuccessResponse': {
      data: Record<string, never>
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
    /** @description Успешно */
    GetClaimsSuccessResponse: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /** @description Заявки */
          claims?: {
            /**
             * Format: UUID
             * @description ID заявки
             */
            id?: string
            /**
             * @description Источник заявки:
             *       * `1` — портал покупателей
             *       * `3` — чат
             */
            claim_type?: number
            /**
             * @description Решение по возврату покупателю:
             *       * `0` — на рассмотрении
             *       * `1` — отказ
             *       * `2` — одобрено
             */
            status?: number
            /**
             * @description Статус товара:
             *       * `0` — заявка на рассмотрении
             *       * `1` — товар остается у покупателя (Заявка отклонена)
             *       * `2` — покупатель сдает товар на WB, товар отправляется в утиль
             *       * `5` — товар остается у покупателя (Заявка одобрена)
             *       * `8` — товар будет возвращён в реализацию после проверки WB
             *       * `10` — товар возвращается продавцу
             */
            status_ex?: number
            /** @description Артикул WB */
            nm_id?: number
            /** @description Комментарий покупателя */
            user_comment?: string
            /** @description Ответ покупателю */
            wb_comment?: string | null
            /** @description Дата и время оформления заявки покупателем. UTC+3 */
            dt?: string
            /** @description Название товара */
            imt_name?: string | null
            /** @description Дата и время заказа */
            order_dt?: string
            /** @description Дата и время рассмотрения заявки. Для нерассмотренной заявки — дата и время оформления. UTC+3 */
            dt_update?: string
            /** @description Фотографии из заявки покупателя */
            photos?: string[]
            /** @description Видео из заявки покупателя */
            video_paths?: string[]
            /**
             * @description Варианты [ответа продавца на заявку](./customer-communication#tag/buyersReturns/operation/patchV1Claim).<br>Отклонённые заявки можно пересмотреть. Если массив пуст, с заявкой работать нельзя.
             *       * `approve1` — одобрить с проверкой брака.<br>Деньги вернутся покупателю после возврата товара. Товар будет проверен на складе. При подтверждении брака/ошибки вложения товар будет отправлен продавцу. Если брак/ошибка вложения не подтвердятся, товар будет возвращён в продажу.<br>Неприменимо при модели <strong>[Самовывоз](./in-store-pickup)</strong>.
             *       * `approve2` — одобрить и забрать товар.<br> Деньги вернутся покупателю после возврата товара. Товар будет отправлен продавцу.<br>Неприменимо при модели <strong>[Самовывоз](./in-store-pickup)</strong>.
             *       * `autorefund1` — одобрить без возврата товара.<br> Товар останется у покупателя. Деньги за него будут возвращены покупателю без возврата товара.
             *       * `reject1` — отклонить с шаблоном ответа: <details><summary><strong>Брак не обнаружен</strong></summary>Пришлось отклонить заявку — подтвердить производственный брак не получилось. Можете отнести товар на независимую экспертизу или в сервисный центр. Если брак подтвердится, создайте новую заявку с такой же причиной, ещё раз опишите проблему и добавьте фото заключения. А если остались вопросы, задайте их в чате: нажмите кнопку «Написать продавцу».</details>
             *       * `reject2` — отклонить с шаблоном ответа: <details><summary><strong>Добавить фото/видео</strong></summary>Пришлось отклонить заявку — нужно чуть больше информации. Создайте новую заявку с такой же причиной возврата, подробно опишите проблему и добавьте фото, на которых хорошо видно: сам товар целиком, брак, бирку или этикетку, упаковку со штрихкодом Wildberries, если она осталась. Желательно добавить видео — это поможет разобраться.</details>
             *       * `reject3` — отклонить с шаблоном ответа: <details><summary><strong>Направить в сервисный центр</strong></summary>Пришлось отклонить заявку — подтвердить производственный брак не получилось. Вы можете отнести товар в сервисный центр: адрес есть на сайте производителя или в гарантийном талоне. Там всё проверят и выдадут заключение. Если производственный брак подтвердится, создайте новую заявку с такой же причиной, ещё раз опишите проблему и добавьте фото заключения.</details>
             *       * `rejectcustom` — отклонить с комментарием.<br>Комментарий передаётся в параметре `comment`.
             *       * `approvecc1` — одобрить заявку с возвратом товара в магазин продавца.<br>Можно передать комментарий (например, телефон для связи или время работы своего отдела возвратов) в параметре `comment`. По итогу возврата необходимо ответить на заявку с `"action":"confirmreturngoodcc1"` или `"action":"rejectcustom"`.<br>Применимо только при модели <strong>[Самовывоз](./in-store-pickup)</strong>.
             *       * `confirmreturngoodcc1` — подтвердить приёмку товара от покупателя.<br>Применимо только при модели <strong>[Самовывоз](./in-store-pickup)</strong>.
             */
            actions?: string[]
            /** @description Фактическая цена с учетом всех скидок. Взимается с покупателя */
            price?: number
            /** @description Код валюты цены */
            currency_code?: string
            /** @description Уникальный ID заказа, по товару которого создана заявка */
            srid?: string
            /** @description Результат сверки [IMEI](https://seller.wildberries.ru/instructions/ru/ru/material/items-labeling-in-fbs#imei) для возврата через ПВЗ Wildberries.<br>Значение показывает, совпадает ли IMEI, который был указан продавцом или отсканирован при приёмке на складе Wildberries, с IMEI из заявки покупателя, что позволяет эффективнее [обрабатывать заявки](./customer-communication#tag/buyersReturns/operation/patchV1Claim).<br>Применимо только для товаров **Apple** предмета `Смартфоны` (`"subjectId":515`) с ценой от 40000 рублей, учитывая скидку продавца ([только](./item-management#tag/pricesAndDiscounts/operation/postV2UploadTask) параметры и поля `price` и `discount`) */
            origin_id_info?: string | null
            /** @description Дата и время получения заказа покупателем */
            delivery_dt?: string
          }[]
          /** @description Количество заявок, соответствующих параметрам запроса. Без учёта `limit` и `offset` */
          total?: number
        }
      }
    }
    /** @description Неправильный запрос */
    Error400GetClaims: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/problem+json': {
          /**
           * @description ID ошибки
           * @example Invalid query params
           */
          title?: string
          /**
           * @description Описание ошибки
           * @example Failed to deserialize query string: missing field `is_archive`
           */
          detail?: string
          /**
           * @description ID запроса
           * @example e0aedc10-9789-49c1-9a83-d8422b4703dc
           */
          requestId?: string
        }
      }
    }
    /** @description Неправильный запрос */
    Error400PatchClaim: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json; charset=utf-8': {
          /**
           * @description ID ошибки
           * @example Validation error
           */
          title?: string
          /**
           * @description Описание ошибки
           * @example Input model is not valid; Details: The Action field is required.
           */
          detail?: string
          /**
           * @description ID запроса
           * @example 0HN3PI6JUGFSL:00000004
           */
          requestId?: string
        }
      }
    }
  }
  parameters: {
    /** @description Количество заявок в ответе */
    limit: number
    /** @description После какого элемента выдавать данные */
    offset: number
    /**
     * @description Состояние заявки:
     *       * `false` — на рассмотрении
     *       * `true` — в архиве
     */
    is_archive: boolean
    /** @description ID заявки */
    id: string
    /** @description Артикул WB */
    nm_id: number
  }
  requestBodies: {
    /** @description Ответ на заявку */
    PatchClaimReq: {
      content: {
        'application/json': {
          /**
           * Format: UUID
           * @description ID заявки
           * @example fe3e9337-e9f9-423c-8930-946a8ebef80
           */
          id: string
          /**
           * @description Действие с заявкой.<br>Используйте одно из значений массива `actions` — ответа [метода получения заявок](./customer-communication#tag/buyersReturns/operation/getV1Claims)
           * @example rejectcustom
           */
          action: string
          /**
           * @description Комментарий.<br>Применимо только при `"action":"rejectcustom"` или `"action":"approvecc1"`. При `"action":"rejectcustom"` параметр обязателен
           * @example Фото не имеет отношения к товару в заявке
           */
          comment?: string
        }
      }
    }
  }
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getV1NewFeedbacksQuestions: {
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
            data?: {
              /**
               * @description Есть ли непросмотренные вопросы:
               *        - `true` — да
               *        - `false` — нет
               * @example true
               */
              hasNewQuestions?: boolean
              /**
               * @description Есть ли непросмотренные отзывы:
               *      - `true` — да
               *      - `false` — нет
               * @example false
               */
              hasNewFeedbacks?: boolean
            }
            /**
             * @description Есть ли ошибка
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
             * @example null
             */
            additionalErrors?: string[] | null
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1QuestionsCountUnanswered: {
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
            data?: {
              /**
               * @description Количество неотвеченных вопросов
               * @example 24
               */
              countUnanswered?: number
              /**
               * @description Количество неотвеченных вопросов за сегодня
               * @example 0
               */
              countUnansweredToday?: number
            }
            /**
             * @description Есть ли ошибка
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
             * @example null
             */
            additionalErrors?: string[] | null
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1QuestionsCount: {
    parameters: {
      query?: {
        /** @description Дата начала периода в формате Unix timestamp */
        dateFrom?: number
        /** @description Дата конца периода в формате Unix timestamp */
        dateTo?: number
        /**
         * @description Есть ли ответ на вопрос:
         *       - `true` — да
         *       - `false` — нет
         */
        isAnswered?: boolean
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
             * @description Количество вопросов
             * @example 77
             */
            data?: number
            /**
             * @description Есть ли ошибка
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
             * @example null
             */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Questions: {
    parameters: {
      query: {
        /**
         * @description Есть ли ответ на вопрос:
         *       - `true` — да
         *       - `false` — нет
         */
        isAnswered: boolean
        /** @description Артикул WB */
        nmId?: number
        /**
         * @description Количество запрашиваемых вопросов (максимально допустимое значение для параметра - 10 000,
         *     при этом сумма значений параметров `take` и `skip` не должна превышать 10 000)
         */
        take: number
        /**
         * @description Количество вопросов для пропуска (максимально допустимое значение для параметра - 10 000,
         *     при этом сумма значений параметров `take` и `skip` не должна превышать 10 000)
         */
        skip: number
        /** @description Сортировка вопросов по дате (`dateAsc`/`dateDesc`) */
        order?: string
        /** @description Дата начала периода в формате Unix timestamp */
        dateFrom?: number
        /** @description Дата конца периода в формате Unix timestamp */
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
          /**
           * @example {
           *       "data": {
           *         "countUnanswered": 24,
           *         "countArchive": 508,
           *         "questions": [
           *           {
           *             "id": "2ncBtX4B9I0UHoornoqG",
           *             "text": "Question text",
           *             "createdDate": "2022-02-01T11:18:08.769513469Z",
           *             "state": "suppliersPortalSynch",
           *             "answer": null,
           *             "productDetails": {
           *               "imtId": 11157265,
           *               "nmId": 14917842,
           *               "productName": "Coffee",
           *               "supplierArticle": "123401",
           *               "supplierName": " ГП Реклама и услуги",
           *               "brandName": "Nescafe"
           *             },
           *             "wasViewed": false,
           *             "isWarned": false
           *           }
           *         ]
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: {
              /** @description Количество неотвеченных вопросов */
              countUnanswered?: number
              /** @description Количество отвеченных вопросов */
              countArchive?: number
              /** @description Вопросы */
              questions?: {
                /** @description id вопроса */
                id?: string
                /** @description Текст вопроса */
                text?: string
                /**
                 * Format: date-time
                 * @description Дата и время создания вопроса
                 */
                createdDate?: string
                /**
                 * @description Статус вопроса:
                 *       - `none` — вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
                 *       - `wbRu` — ответ предоставлен, вопрос отображается на сайте покупателей
                 *       - `suppliersPortalSynch` - новый вопрос
                 */
                state?: string
                /** @description Структура ответа */
                answer?: {
                  /** @description Текст ответа */
                  text?: string
                  /** @description Можно ли отредактировать ответ (`false` - нельзя, `true` - можно) */
                  editable?: boolean
                  /**
                   * Format: date-time
                   * @description Дата и время создания ответа
                   */
                  createDate?: string
                } | null
                /** @description Информация о товаре */
                productDetails?: {
                  /** @description Артикул WB */
                  nmId?: number
                  /** @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров */
                  imtId?: number
                  /** @description Название товара */
                  productName?: string
                  /** @description Артикул продавца */
                  supplierArticle?: string
                  /** @description Имя продавца */
                  supplierName?: string
                  /** @description Название бренда */
                  brandName?: string
                }
                /** @description Просмотрен ли вопрос */
                wasViewed?: boolean
                /**
                 * @description Признак подозрительного вопроса.<br>
                 *     Если `true`, то вопрос опубликован, но на портале продавцов вы увидите баннер **Сообщение подозрительное**
                 */
                isWarned?: boolean
              }[]
            }
            /**
             * @description Есть ли ошибка
             * @example false
             */
            error?: boolean
            /**
             * @description Описание ошибки
             * @example
             */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  patchV1Questions: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json':
          | {
              /**
               * @description Id вопроса
               * @example n5um6IUBQOOSTxXoo0gV
               */
              id: string
              /**
               * @description Просмотрен ли вопрос
               * @example true
               */
              wasViewed: boolean
            }
          | {
              /**
               * @description Id вопроса
               * @example n5um6IUBQOOSTxXoo0gV
               */
              id: string
              answer: {
                /**
                 * @description Текст ответа
                 * @example текст ответа
                 */
                text: string
              }
              /**
               * @description Статус вопроса:
               *       - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
               *       - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей.
               */
              state: string
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
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: Record<string, never> | null
            /** @description Есть ли ошибка */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Не найдено */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      /** @description Ошибка обработки параметров запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Question: {
    parameters: {
      query: {
        /** @description ID вопроса */
        id: string
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
           *       "data": {
           *         "id": "TfWOp5QBfEYrrd0AMJau",
           *         "text": "Хороший карандаш? Когда еще поставите?",
           *         "createdDate": "2025-01-27T11:38:21.202143857Z",
           *         "state": "wbRu",
           *         "answer": {
           *           "text": "На следующей неделе",
           *           "editable": true,
           *           "createDate": "2025-07-28T08:24:37.187113704Z"
           *         },
           *         "productDetails": {
           *           "imtId": 202306781,
           *           "nmId": 224747484,
           *           "productName": "Карандаш с ластиком",
           *           "supplierArticle": "12113156uw",
           *           "supplierName": "",
           *           "brandName": "Brand"
           *         },
           *         "wasViewed": true,
           *         "isWarned": false
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: {
              /** @description ID вопроса */
              id?: string
              /** @description Текст вопроса */
              text?: string
              /**
               * Format: date-time
               * @description Дата и время создания вопроса
               */
              createdDate?: string
              /**
               * @description Статус вопроса:
               *       - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
               *       - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей
               *       - `suppliersPortalSynch` - новый вопрос
               */
              state?: string
              /** @description Ответ */
              answer?: {
                /** @description Текст ответа */
                text?: string
                /** @description Можно ли отредактировать ответ (`false` - нельзя, `true` - можно) */
                editable?: boolean
                /**
                 * Format: date-time
                 * @description Дата и время создания ответа
                 */
                createDate?: string
              } | null
              /** @description Item information */
              productDetails?: {
                /** @description Артикул WB */
                nmId?: number
                /** @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров */
                imtId?: number
                /** @description Название товара */
                productName?: string
                /** @description Артикул продавца */
                supplierArticle?: string
                /** @description Имя продавца */
                supplierName?: string
                /** @description Название бренда */
                brandName?: string
              }
              /** @description Просмотрен ли вопрос */
              wasViewed?: boolean
              /**
               * @description Признак подозрительного вопроса.<br>
               *     Если `true`, то вопрос опубликован, но на портале продавцов вы увидите баннер **Сообщение подозрительное**
               */
              isWarned?: boolean
            }
            /**
             * @description Есть ли ошибка
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
             * @example null
             */
            additionalErrors?: string[] | null
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка обработки параметров запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1FeedbacksCountUnanswered: {
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
            data?: {
              /**
               * @description Количество необработанных отзывов
               * @example 1
               */
              countUnanswered?: number
              /**
               * @description Количество необработанных отзывов за сегодня
               * @example 0
               */
              countUnansweredToday?: number
            }
            /**
             * @description Есть ли ошибка
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
             * @example null
             */
            additionalErrors?: string[] | null
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1FeedbacksCount: {
    parameters: {
      query: {
        /** @description Дата начала периода в формате Unix timestamp */
        dateFrom?: number
        /** @description Дата конца периода в формате Unix timestamp */
        dateTo?: number
        /**
         * @description Вернуть только обработанные отзывы:
         *       - `true` — да
         *       - `false` — нет
         */
        isAnswered: boolean
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
             * @description Количество отзывов
             * @example 724583
             */
            data?: number
            /**
             * @description Есть ли ошибка
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
             * @example null
             */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Feedbacks: {
    parameters: {
      query: {
        /**
         * @description Вернуть только обработанные отзывы:
         *       - `true` — да
         *       - `false` — нет
         */
        isAnswered: boolean
        /** @description Артикул WB */
        nmId?: number
        /** @description Количество отзывов (max. 5 000) */
        take: number
        /** @description Количество отзывов для пропуска (max. 199990) */
        skip: number
        /** @description Сортировка отзывов по дате (dateAsc/dateDesc) */
        order?: 'dateAsc' | 'dateDesc'
        /** @description Дата начала периода в формате Unix timestamp */
        dateFrom?: number
        /** @description Дата конца периода в формате Unix timestamp */
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
          /**
           * @example {
           *       "data": {
           *         "countUnanswered": 52,
           *         "countArchive": 1000,
           *         "feedbacks": [
           *           {
           *             "id": "YX52RZEBhH9mrcYdEJuD",
           *             "text": "Спасибо, всё подошло",
           *             "pros": "Удобный",
           *             "cons": "Нет",
           *             "productValuation": 5,
           *             "createdDate": "2024-09-26T10:20:48+03:00",
           *             "answer": {
           *               "text": "Пожалуйста. Ждём вас снова!",
           *               "state": "wbRu",
           *               "editable": false
           *             },
           *             "state": "wbRu",
           *             "productDetails": {
           *               "imtId": 123456789,
           *               "nmId": 987654321,
           *               "productName": "ВАЗ",
           *               "supplierArticle": "DP02/черный",
           *               "supplierName": "ГП Реклама и услуги",
           *               "brandName": "Бест Трикотаж",
           *               "size": "0"
           *             },
           *             "video": {
           *               "previewImage": "https://videofeedback01.wbbasket.ru/8defc853-7f62-4d6d-b236-8a16cfb63128/preview.webp",
           *               "link": "https://videofeedback01.wbbasket.ru/8defc853-7f62-4d6d-b236-8a16cfb63128/index.m3u8",
           *               "durationSec": 10
           *             },
           *             "wasViewed": true,
           *             "photoLinks": [
           *               {
           *                 "fullSize": "https://feedback04.wbbasket.ru/vol1333/part133337/123456789/photos/fs.webp",
           *                 "miniSize": "https://feedback04.wbbasket.ru/vol1333/part133337/123456789/photos/ms.webp"
           *               },
           *               {
           *                 "fullSize": "https://feedback04.wbbasket.ru/vol1508/part150887/123456789/photos/fs.webp",
           *                 "miniSize": "https://feedback04.wbbasket.ru/vol1508/part150887/123456789/photos/ms.webp"
           *               },
           *               {
           *                 "fullSize": "https://feedback04.wbbasket.ru/vol1486/part148682/123456789/photos/fs.webp",
           *                 "miniSize": "https://feedback04.wbbasket.ru/vol1486/part148682/123456789/photos/ms.webp"
           *               }
           *             ],
           *             "userName": "Николай",
           *             "orderStatus": "buyout",
           *             "matchingSize": "ok",
           *             "isAbleSupplierFeedbackValuation": false,
           *             "supplierFeedbackValuation": 1,
           *             "isAbleSupplierProductValuation": false,
           *             "supplierProductValuation": 2,
           *             "isAbleReturnProductOrders": false,
           *             "returnProductOrdersDate": "2024-08-20T16:39:49Z",
           *             "bables": [
           *               "цена"
           *             ],
           *             "lastOrderShkId": 123456789,
           *             "lastOrderCreatedAt": "2024-08-12T10:20:48+03:00",
           *             "color": "colorless",
           *             "subjectId": 219,
           *             "subjectName": "Футболки-поло",
           *             "parentFeedbackId": null,
           *             "childFeedbackId": "bIjTCZDvJni7NGnLbUlf"
           *           }
           *         ]
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: {
              /** @description Количество необработанных отзывов */
              countUnanswered?: number
              /** @description Количество обработанных отзывов */
              countArchive?: number
              feedbacks?: components['schemas']['responseFeedback']
            }
            /** @description Есть ли ошибка */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  postV1FeedbacksAnswer: {
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
           * @description ID отзыва
           * @example J2FMRjUj6hwvwCElqssz
           */
          id: string
          /**
           * @description Текст ответа
           * @example Спасибо за Ваш отзыв!
           */
          text: string
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
          'application/json': components['schemas']['standardizedFQError']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  patchV1FeedbacksAnswer: {
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
           * @description ID отзыва
           * @example J2FMRjUj6hwvwCElqssz
           */
          id: string
          /**
           * @description Текст ответа
           * @example Спасибо за Ваш отзыв, он очень важен для нас!
           */
          text: string
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
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1FeedbacksOrderReturn: {
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
         *       "feedbackId": "absdfgerrrfff1234"
         *     }
         */
        'application/json': {
          /** @description ID отзыва */
          feedbackId?: string
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
            data?: Record<string, never> | null
            /** @description Есть ли ошибка */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      /** @description Ошибка обработки параметров запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Feedback: {
    parameters: {
      query: {
        /** @description ID отзыва */
        id: string
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
           *       "data": {
           *         "id": "YX52RZEBhH9mrcYdEJuD",
           *         "text": "Спасибо, всё подошло",
           *         "pros": "Удобный",
           *         "cons": "Нет",
           *         "productValuation": 5,
           *         "createdDate": "2024-09-26T10:20:48+03:00",
           *         "answer": {
           *           "text": "Пожалуйста. Ждём вас снова!",
           *           "state": "wbRu",
           *           "editable": false
           *         },
           *         "state": "wbRu",
           *         "productDetails": {
           *           "imtId": 123456789,
           *           "nmId": 987654321,
           *           "productName": "ВАЗ",
           *           "supplierArticle": "DP02/черный",
           *           "supplierName": "ГП Реклама и услуги",
           *           "brandName": "Бест Трикотаж",
           *           "size": "0"
           *         },
           *         "video": {
           *           "previewImage": "https://videofeedback01.wbbasket.ru/8defc853-7f62-4d6d-b236-8a16cfb63128/preview.webp",
           *           "link": "https://videofeedback01.wbbasket.ru/8defc853-7f62-4d6d-b236-8a16cfb63128/index.m3u8",
           *           "durationSec": 10
           *         },
           *         "wasViewed": true,
           *         "photoLinks": [
           *           {
           *             "fullSize": "https://feedback04.wbbasket.ru/vol1333/part133337/123456789/photos/fs.webp",
           *             "miniSize": "https://feedback04.wbbasket.ru/vol1333/part133337/123456789/photos/ms.webp"
           *           },
           *           {
           *             "fullSize": "https://feedback04.wbbasket.ru/vol1508/part150887/123456789/photos/fs.webp",
           *             "miniSize": "https://feedback04.wbbasket.ru/vol1508/part150887/123456789/photos/ms.webp"
           *           },
           *           {
           *             "fullSize": "https://feedback04.wbbasket.ru/vol1486/part148682/123456789/photos/fs.webp",
           *             "miniSize": "https://feedback04.wbbasket.ru/vol1486/part148682/123456789/photos/ms.webp"
           *           }
           *         ],
           *         "userName": "Николай",
           *         "orderStatus": "returned",
           *         "matchingSize": "ok",
           *         "isAbleSupplierFeedbackValuation": false,
           *         "supplierFeedbackValuation": 1,
           *         "isAbleSupplierProductValuation": false,
           *         "supplierProductValuation": 2,
           *         "isAbleReturnProductOrders": false,
           *         "returnProductOrdersDate": "2024-08-20T16:39:49Z",
           *         "bables": [
           *           "цена"
           *         ],
           *         "lastOrderShkId": 123456789,
           *         "lastOrderCreatedAt": "2024-08-12T10:20:48+03:00",
           *         "color": "colorless",
           *         "subjectId": 219,
           *         "subjectName": "Футболки-поло",
           *         "parentFeedbackId": null,
           *         "childFeedbackId": "bIjTCZDvJni7NGnLbUlf"
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: {
              /** @description ID отзыва */
              id?: string
              /** @description Текст отзыва */
              text?: string
              /** @description Достоинства товара */
              pros?: string
              /** @description Недостатки товара */
              cons?: string
              /**
               * @description Соответствие заявленного размера реальному.
               *     <br>Возможные значения:
               *     - ` ` - для безразмерных товаров
               *     - `ок` - соответствует размеру
               *     - `smaller` - маломерит
               *     - `bigger` - большемерит
               */
              matchingSize?: string
              /** @description Оценка товара */
              productValuation?: number
              /**
               * Format: date-time
               * @description Дата и время создания отзыва
               */
              createdDate?: string
              /** @description Структура ответа */
              answer?: {
                /** @description Текст ответа */
                text?: string
                /**
                 * @description Статус:
                 *       - `none` — новый
                 *       - `wbRu`— отображается на сайте
                 *       - `reviewRequired` — ответ проходит проверку
                 *       - `rejected` — ответ отклонён
                 */
                state?: string
                /**
                 * @description Можно ли отредактировать ответ:
                 *       - `false` — нет
                 *       - `true` — да
                 */
                editable?: boolean
              } | null
              /**
               * @description Статус отзыва:
               *       - `none` - не обработан (новый)
               *       - `wbRu` - обработан
               */
              state?: string
              /** @description Item information */
              productDetails?: {
                /** @description Артикул WB */
                nmId?: number
                /** @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров */
                imtId?: number
                /** @description Название товара */
                productName?: string
                /** @description Артикул продавца */
                supplierArticle?: string | null
                /** @description Имя продавца */
                supplierName?: string | null
                /** @description Бренд товара */
                brandName?: string | null
                /** @description Размер товара (`techSize` в КТ) */
                size?: string
              }
              /** @description Массив структур фотографий */
              photoLinks?:
                | {
                    /** @description Адрес фотографии полного размера */
                    fullSize?: string
                    /** @description Адрес фотографии маленького размера */
                    miniSize?: string
                  }[]
                | null
              /** @description Имя автора отзыва */
              userName?: string
              /**
               * @description Статус заказа.
               *     <br>Возможные значения:
               *     - `buyout` — выкуплен
               *     - `rejected` — отказались
               *     - `returned` — возврат
               *     - `notSpecified` — статус не присвоен
               */
              orderStatus?: string
              /** @description Структура видео */
              video?: {
                /** @description Ссылка на обложку видео */
                previewImage?: string
                /** @description Ссылка на файл плейлиста видео (доступно по протоколу hls) */
                link?: string
                /** @description Общая продолжительность видео */
                durationSec?: number
              } | null
              /** @description Просмотрен ли отзыв */
              wasViewed?: boolean
              /**
               * @description Доступна ли продавцу возможность оставить жалобу на отзыв:
               *       - `true`— да
               *       - `false` — нет
               */
              isAbleSupplierFeedbackValuation?: boolean
              /** @description Ключ причины жалобы на отзыв */
              supplierFeedbackValuation?: number
              /** @description Доступна ли продавцу возможность сообщить о проблеме с товаром  (`true` - доступна, `false` - не доступна) */
              isAbleSupplierProductValuation?: boolean
              /** @description Ключ проблемы с товаром */
              supplierProductValuation?: number
              /**
               * @description Опция возврата товара:
               *       - `true` — доступна
               *       - `false` — недоступна
               */
              isAbleReturnProductOrders?: boolean
              /** @description Дата и время, когда на запрос возврата был получен ответ со статус-кодом 200. */
              returnProductOrdersDate?: string | null
              /** @description Список тегов покупателя */
              bables?: string[] | null
              /** @description Штрихкод единицы товара */
              lastOrderShkId?: number
              /** @description Дата покупки */
              lastOrderCreatedAt?: string
              /** @description Цвет товара */
              color?: string
              /** @description ID предмета */
              subjectId?: number
              /** @description Название предмета */
              subjectName?: string
              /** @description ID начального отзыва (`null`, если этот отзыв начальный) */
              parentFeedbackId?: string | null
              /** @description ID дополненного отзыва (`null`, если этот отзыв дополненный) */
              childFeedbackId?: string | null
            }
            /** @description Есть ли ошибка */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string[] | null
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      /** @description Ошибка обработки параметров запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1FeedbacksArchive: {
    parameters: {
      query: {
        /** @description Артикул WB */
        nmId?: number
        /** @description Количество отзывов (max. 5 000) */
        take: number
        /** @description Количество отзывов для пропуска */
        skip: number
        /** @description Сортировка отзывов по дате (dateAsc/dateDesc) */
        order?: 'dateAsc' | 'dateDesc'
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
           *       "data": {
           *         "feedbacks": [
           *           {
           *             "id": "YX52RZEBhH9mrcYdEJuD",
           *             "text": "Спасибо, всё подошло",
           *             "pros": "Удобный",
           *             "cons": "Нет",
           *             "productValuation": 5,
           *             "createdDate": "2024-09-26T10:20:48+03:00",
           *             "answer": {
           *               "text": "Пожалуйста. Ждём вас снова!",
           *               "state": "wbRu",
           *               "editable": false
           *             },
           *             "state": "wbRu",
           *             "productDetails": {
           *               "imtId": 123456789,
           *               "nmId": 987654321,
           *               "productName": "ВАЗ",
           *               "supplierArticle": "DP02/черный",
           *               "supplierName": "ГП Реклама и услуги",
           *               "brandName": "Бест Трикотаж",
           *               "size": "0"
           *             },
           *             "video": {
           *               "previewImage": "https://videofeedback01.wbbasket.ru/8defc853-7f62-4d6d-b236-8a16cfb63128/preview.webp",
           *               "link": "https://videofeedback01.wbbasket.ru/8defc853-7f62-4d6d-b236-8a16cfb63128/index.m3u8",
           *               "durationSec": 10
           *             },
           *             "wasViewed": true,
           *             "photoLinks": [
           *               {
           *                 "fullSize": "https://feedback04.wbbasket.ru/vol1333/part133337/123456789/photos/fs.webp",
           *                 "miniSize": "https://feedback04.wbbasket.ru/vol1333/part133337/123456789/photos/ms.webp"
           *               },
           *               {
           *                 "fullSize": "https://feedback04.wbbasket.ru/vol1508/part150887/123456789/photos/fs.webp",
           *                 "miniSize": "https://feedback04.wbbasket.ru/vol1508/part150887/123456789/photos/ms.webp"
           *               },
           *               {
           *                 "fullSize": "https://feedback04.wbbasket.ru/vol1486/part148682/123456789/photos/fs.webp",
           *                 "miniSize": "https://feedback04.wbbasket.ru/vol1486/part148682/123456789/photos/ms.webp"
           *               }
           *             ],
           *             "userName": "Николай",
           *             "orderStatus": "returned",
           *             "matchingSize": "ok",
           *             "isAbleSupplierFeedbackValuation": false,
           *             "supplierFeedbackValuation": 1,
           *             "isAbleSupplierProductValuation": false,
           *             "supplierProductValuation": 2,
           *             "isAbleReturnProductOrders": false,
           *             "returnProductOrdersDate": "2024-08-20T16:39:49Z",
           *             "bables": [
           *               "цена"
           *             ],
           *             "lastOrderShkId": 123456789,
           *             "lastOrderCreatedAt": "2024-08-12T10:20:48+03:00",
           *             "color": "colorless",
           *             "subjectId": 219,
           *             "subjectName": "Футболки-поло",
           *             "parentFeedbackId": null,
           *             "childFeedbackId": "bIjTCZDvJni7NGnLbUlf"
           *           }
           *         ]
           *       },
           *       "error": false,
           *       "errorText": "",
           *       "additionalErrors": null
           *     }
           */
          'application/json': {
            data?: {
              feedbacks?: components['schemas']['responseFeedback']
            }
            /** @description Есть ли ошибка */
            error?: boolean
            /** @description Описание ошибки */
            errorText?: string
            /** @description Дополнительные ошибки */
            additionalErrors?: string[] | null
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
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
          'application/json': components['schemas']['responseFeedbackQuestionErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      /** @description Ошибка обработки параметров запроса */
      422: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['responseFeedbackQuestionErr']
        }
      }
      429: components['responses']['429']
    }
  }
  getV1Pins: {
    parameters: {
      query?: {
        /**
         * @description Закреплён ли отзыв:
         *       - `pinned` — да
         *       - `unpinned` — нет
         */
        state?: 'pinned' | 'unpinned'
        /**
         * @description Место закрепления отзыва:
         *       - `nm` — карточка товара
         *       - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
         */
        pinOn?: 'nm' | 'imt'
        /** @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров.<br>Един для всех артикулов WB группы объединённых карточек.<br>У каждой карточки товара есть `imtId`, даже если она не объединена с другими карточками<br> */
        imtId?: number
        /** @description Артикул WB */
        nmId?: number
        /** @description ID отзыва */
        feedbackId?: number
        /** @description Дата закрепления первого отзыва в списке */
        dateFrom?: string
        /** @description Дата закрепления последнего отзыва в списке */
        dateTo?: string
        /** @description ID последней операции закрепления (пагинатор) */
        next?: number
        /** @description Количество отзывов на одной странице (пагинация) */
        limit?: number
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
          'application/json': components['schemas']['respond.SuccessResponse'] & {
            data?: components['schemas']['openapi.PinnedReviewItemResult'][]
            /**
             * @description Параметр пагинации. Укажите это значение в запросе, чтобы получить следующий пакет данных. Если поле отсутствует, вы получили все данные
             * @example 200
             */
            next?: number
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
           *       "status": 400,
           *       "title": "Bad Request",
           *       "detail": "state must be one of the values 'pinned', 'unpinned'",
           *       "requestId": "7b64у8ffc3523450d613723fwу61873e",
           *       "origin": "pin-open-api"
           *     }
           */
          'application/json': components['schemas']['respond.ResultErr']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1Pins: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['openapi.PinReviewItem'][]
      }
    }
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['respond.SuccessResponse'] &
            components['schemas']['openapi.PinReviewItemResult']
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
           *       "detail": "invalid request body",
           *       "origin": "pin-open-api",
           *       "requestId": "7b64у8ffc3523450d613723fwу61873e",
           *       "status": 400,
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['respond.ResultErr']
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
           *       "origin": "pin-open-api",
           *       "requestId": "7b64у8ffc3523450d613723fwу61873e",
           *       "status": 403,
           *       "title": "no active subscription or tariff",
           *       "detail": "this feature requires active subscription or active tariff"
           *     }
           */
          'application/json': components['schemas']['respond.ResultErr']
          'application/problem+json': components['schemas']['Response4XX']
        }
      }
      429: components['responses']['429']
    }
  }
  deleteV1Pins: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Список `pinId` — ID операций закрепления отзывов */
    requestBody: {
      content: {
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
          'application/json': components['schemas']['respond.SuccessResponse'] & {
            /**
             * @description Список `pinId` — ID операций закрепления отзывов, которые были успешно откреплены
             * @example [
             *       123456,
             *       234567,
             *       345678
             *     ]
             */
            data?: number[]
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
           *       "detail": "invalid request body",
           *       "origin": "pin-open-api",
           *       "requestId": "7b64у8ffc3523450d613723fwу61873e",
           *       "status": 400,
           *       "title": "Bad Request"
           *     }
           */
          'application/json': components['schemas']['respond.ResultErr']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1PinsCount: {
    parameters: {
      query?: {
        /**
         * @description Закреплён ли отзыв:
         *       - `pinned` — да
         *       - `unpinned` — нет
         */
        state?: 'pinned' | 'unpinned'
        /**
         * @description Место закрепления отзыва:
         *       - `nm` — карточка товара
         *       - `imt` — группа [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
         */
        pinOn?: 'nm' | 'imt'
        /** @description ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров.<br>Един для всех артикулов WB группы объединённых карточек.<br>У каждой карточки товара есть `imtId`, даже если она не объединена с другими карточками<br> */
        imtId?: number
        /** @description Артикул WB */
        nmId?: number
        /** @description ID отзыва */
        feedbackId?: number
        /** @description Дата закрепления первого отзыва в списке */
        dateFrom?: string
        /** @description Дата закрепления последнего отзыва в списке */
        dateTo?: string
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
          'application/json': components['schemas']['respond.SuccessResponse'] & {
            /** @description Количество отзывов */
            data?: number
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
           *       "status": 400,
           *       "title": "Bad Request",
           *       "detail": "state must be one of the values 'pinned', 'unpinned'",
           *       "requestId": "7b64у8ffc3523450d613723fwу61873e",
           *       "origin": "pin-open-api"
           *     }
           */
          'application/json': components['schemas']['respond.ResultErr']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1PinsLimits: {
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
          'application/json': components['schemas']['respond.SuccessResponse'] &
            components['schemas']['openapi.SellerLimitsResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SellerChats: {
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
          'application/json': components['schemas']['ChatsResponse']
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SellerEvents: {
    parameters: {
      query?: {
        /** @description Пагинатор. С какого момента получить следующий пакет данных.<br>Формат Unix timestamp **с миллисекундами** */
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
          /**
           * @example {
           *       "result": {
           *         "next": 1698045576000,
           *         "newestEventTime": "2023-10-23T07:19:36Z",
           *         "oldestEventTime": "2023-10-23T05:02:20Z",
           *         "totalEvents": 4,
           *         "events": [
           *           {
           *             "chatID": "1:1e265a58-a120-b178-008c-60af2460207c",
           *             "eventID": "55adee45-11f0-33b6-a847-6ccc7c78b2ec",
           *             "eventType": "message",
           *             "isNewChat": true,
           *             "message": {
           *               "attachments": {
           *                 "goodCard": {
           *                   "nmID": 12345678,
           *                   "price": 500,
           *                   "priceCurrency": "RUB",
           *                   "rid": "2fb52cd9e25e52538a5f05994e688ae5",
           *                   "size": "0"
           *                 },
           *                 "files": [
           *                   {
           *                     "contentType": "application/pdf",
           *                     "date": "2023-10-23T08:02:19.594Z",
           *                     "downloadID": "ecaeb056-a4ee-45b4-ae45-666811755d38",
           *                     "name": "Чек.pdf",
           *                     "url": "https://chat-basket-01.wbbasket.ru/vol0/part3265/fb25c9e9-cae8-52db-b68e-736c1896a3f5/pdf/0380e781-281e-41b5-8ae1-ce281f15a4a7.pdf",
           *                     "size": 1046143
           *                   }
           *                 ],
           *                 "images": [
           *                   {
           *                     "date": "2023-10-23T08:02:20.717Z",
           *                     "downloadID": "fd6be4e3-5447-41d7-a1e6-b2d3e06c3b05",
           *                     "url": "https://chat-basket-01.wbbasket.ru/vol0/part2345/fb89c9e9-cae8-52db-b68e-736c1466a3f5/jpg/0823ff24-821e-40e9-8cdf-0a2b5fd86a32.jpg"
           *                   }
           *                 ]
           *               },
           *               "text": "Здравствуйте! У меня вопрос по товару \"Альбом, бренд Эконом, артикул 13480414, товар получен 18.10.2023\""
           *             },
           *             "source": "rusite",
           *             "addTimestamp": 1698037340000,
           *             "addTime": "2023-10-23T05:02:20Z",
           *             "replySign": "1:1e265a58-a120-b178-008c-60af2460207c:66f136e919a8207e136757754f253189bfb9ae1ad9da9170c9d5c478626663908888c370216525bef51c0ca8d77952e05c9c17f9b63ab00374c5555b42efc07d",
           *             "sender": "client",
           *             "clientName": "Алёна"
           *           },
           *           {
           *             "chatID": "1:1e265a58-a120-b178-008c-60af2460207c",
           *             "eventID": "cef95d3c-0345-4dc9-b6df-4c8c57a176a9",
           *             "eventType": "message",
           *             "message": {
           *               "text": "Здравствуйте! Пришёл не тот цвет. Можно вернуть и заказать другой товар?"
           *             },
           *             "source": "rusite",
           *             "addTimestamp": 1698037387000,
           *             "addTime": "2023-10-23T05:03:07Z",
           *             "sender": "client",
           *             "clientName": "Алёна"
           *           },
           *           {
           *             "chatID": "1:1e265a58-a120-b178-008c-60af2460207c",
           *             "eventID": "fd22e5bf-64fd-43f7-b3a0-ad29uu027f97",
           *             "eventType": "message",
           *             "message": {
           *               "text": "Здравствуйте. Да, сейчас оформим возврат."
           *             },
           *             "source": "seller-public-api",
           *             "addTimestamp": 1698038124000,
           *             "addTime": "2023-10-23T05:15:24Z",
           *             "sender": "seller"
           *           },
           *           {
           *             "chatID": "1:1e265a58-a120-b178-008c-60af2460207c",
           *             "eventID": "cef95d3c-0345-4dc9-b6df-4c8c75a176a7",
           *             "eventType": "message",
           *             "addTimestamp": 1698045576000,
           *             "addTime": "2023-10-23T07:19:36Z",
           *             "sender": "seller"
           *           }
           *         ]
           *       },
           *       "errors": null
           *     }
           */
          'application/json': components['schemas']['EventsResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description HTTP статус-код */
            status?: number
            /** @description Заголовок ошибки */
            title?: string
            /** @description ID внутреннего сервиса WB */
            origin?: string
            /** @description Детали ошибки */
            detail?: string
            /** @description Уникальный ID запроса */
            requestId?: string
            /** @description Текст ошибки */
            error?: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  postV1SellerMessage: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** @description Подпись чата. Можно получить из [информации по чату](./customer-communication#tag/buyersChat/operation/getV1SellerChats) или [данных события](./customer-communication#tag/buyersChat/operation/getV1SellerEvents), если в событии есть поле `"isNewChat": true`. */
          replySign: string
          /** @description Текст сообщения. Максимум 1000 символов. */
          message?: string
          /** @description Файлы, формат JPEG, PDF или PNG, максимальный размер — 5 Мб каждый. Максимальный суммарный размер файлов — 30 Мб. */
          file?: string[]
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
           *       "result": {
           *         "addTime": 1712848270018,
           *         "chatID": "1:641b623c-5c0e-295b-db03-3d5b4d484c32"
           *       },
           *       "errors": []
           *     }
           */
          'application/json': components['schemas']['MessageResponse']
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': {
            /** @description HTTP статус-код */
            status?: number
            /** @description Заголовок ошибки */
            title?: string
            /** @description ID внутреннего сервиса WB */
            origin?: string
            /** @description Детали ошибки */
            detail?: string
            /** @description Уникальный ID запроса */
            requestId?: string
            /** @description Текст ошибки */
            error?: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  getV1SellerDownloadId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description ID файла, см. значение поля `downloadID` в методе [События чатов](./customer-communication#tag/buyersChat/operation/getV1SellerEvents) */
        id: string
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
          'application/pdf': string
          'image/jpeg': string
          'image/png': string
        }
      }
      /** @description Файл на модерации */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * @description Статус модерации
             * @example pending
             */
            moderationState: string
            /**
             * @description Секунд до следующей попытки запроса файла
             * @example 30
             */
            retrySeconds: number
          }
        }
      }
      /** @description Неправильный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description HTTP статус-код */
            status?: number
            /** @description Заголовок ошибки */
            title?: string
            /** @description ID внутреннего сервиса WB */
            origin?: string
            /** @description Детали ошибки */
            detail?: string
            /** @description Уникальный ID запроса */
            requestId?: string
            /** @description Текст ошибки */
            error?: string
          }
        }
      }
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
      /** @description Файл не прошёл модерацию */
      451: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/problem+json': {
            /**
             * @description HTTP статус-код
             * @example 451
             */
            status?: number
            /**
             * @description Заголовок ошибки
             * @example Unavailable for Legal Reasons
             */
            title?: string
            /**
             * @description ID внутреннего сервиса WB
             * @example proxy-chats
             */
            origin?: string
            /**
             * @description Детали ошибки
             * @example moderation error
             */
            detail?: string
            /**
             * @description ID запроса
             * @example 62f59a4ce21064f20b1bbc28c85f38d8
             */
            requestId?: string
          }
        }
      }
    }
  }
  getV1Claims: {
    parameters: {
      query: {
        /**
         * @description Состояние заявки:
         *       * `false` — на рассмотрении
         *       * `true` — в архиве
         */
        is_archive: components['parameters']['is_archive']
        /** @description ID заявки */
        id?: components['parameters']['id']
        /** @description Количество заявок в ответе */
        limit?: components['parameters']['limit']
        /** @description После какого элемента выдавать данные */
        offset?: components['parameters']['offset']
        /** @description Артикул WB */
        nm_id?: components['parameters']['nm_id']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['GetClaimsSuccessResponse']
      400: components['responses']['Error400GetClaims']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
  patchV1Claim: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: components['requestBodies']['PatchClaimReq']
    responses: {
      /** @description Успешно */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['Error400PatchClaim']
      401: components['responses']['401']
      402: components['responses']['402']
      403: components['responses']['403']
      429: components['responses']['429']
    }
  }
}
