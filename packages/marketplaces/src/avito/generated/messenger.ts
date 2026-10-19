// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/messenger/v1/accounts/{user_id}/chats/{chat_id}/messages': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправка сообщения
     * @description На данный момент можно отправить только текстовое сообщение
     */
    post: operations['postSendMessage']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/accounts/{user_id}/chats/{chat_id}/messages/image': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отправка сообщения с изображением
     * @description Метод используется для отправки сообщения с изображением.
     *
     *     Для отправки сообщения с изображением необходимо передать в запросе id изображения, полученного после загрузки.
     */
    post: operations['postSendImageMessage']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/accounts/{user_id}/chats/{chat_id}/messages/{message_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
        /** @description Идентификатор сообщения */
        message_id: components['parameters']['messageId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Удаление сообщения
     * @description Сообщение не пропадает из истории, а меняет свой тип на deleted.
     *     Удалять сообщения можно не позднее часа с момента их отправки.
     */
    post: operations['deleteMessage']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/accounts/{user_id}/chats/{chat_id}/read': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Прочитать чат
     * @description После успешного получения списка сообщений необходимо вызвать этот метод для того, чтобы чат стал прочитанным.
     */
    post: operations['chatRead']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/accounts/{user_id}/getVoiceFiles': {
    parameters: {
      query: {
        /** @description Получение файлов голосовых сообщений с указанными voice_id */
        voice_ids: components['parameters']['voiceIds']
      }
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    /**
     * Получение голосовых сообщений
     * @description Метод используется для получения ссылки на файл с голосовым сообщением по идентификатору voice_id, получаемому из тела сообщения с типом voice.
     *
     *     Особенности работы с голосовыми сообщениями:
     *     - Голосовые сообщения Авито используют кодек **[opus](https://ru.wikipedia.org/wiki/Opus_(%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA))** внутри **.mp4** контейнера;
     *     - Ссылка на голосовое сообщение доступна в течение **одного часа** с момента запроса. Попытка получить файл по ссылке спустя это время приведёт к ошибке. Для восстановления доступа необходимо получить новую ссылку на файл;
     *     - Как и с обычными сообщениями, получение ссылки на файл доступно только для пользователей, находящихся в беседе, где голосовое сообщение было отправлено;
     */
    get: operations['getVoiceFiles']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/accounts/{user_id}/uploadImages': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузка изображений
     * @description Метод используется для загрузки изображений в формате JPEG, HEIC, GIF, BMP или PNG.
     *
     *     Особенности работы с загрузкой изображений:
     *     - Метод поддерживает только одиночные изображения; для загрузки нескольких картинок необходимо сделать несколько запросов;
     *     - Максимальный размер файла — 24 МБ;
     *     - Максимальное разрешение — 75 мегапиксилей;
     */
    post: operations['uploadImages']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/subscriptions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Получение подписок (webhooks)
     * @description Получение списка подписок
     */
    post: operations['getSubscriptions']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v1/webhook/unsubscribe': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Отключение уведомлений (webhooks)
     * @description Отключение уведомлений
     */
    post: operations['postWebhookUnsubscribe']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v2/accounts/{user_id}/blacklist': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Добавление пользователя в blacklist
     * @description Добавление пользователя в blacklist
     */
    post: operations['postBlacklistV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v2/accounts/{user_id}/chats': {
    parameters: {
      query?: {
        /** @description Получение чатов только по объявлениям с указанными item_id */
        item_ids?: components['parameters']['itemIds']
        /** @description При значении true метод возвращает только непрочитанные чаты */
        unread_only?: components['parameters']['unreadOnly']
        /**
         * @description Фильтрация возвращаемых чатов.
         *     * u2i — чаты по объявлениям;
         *     * u2u — чаты между пользователями;
         *     * a2u — чаты между пользователями и Авито;
         */
        chat_types?: components['parameters']['chatTypes']
        /** @description Количество сообщений / чатов для запроса */
        limit?: components['parameters']['limit']
        /** @description Сдвиг сообщений / чатов для запроса */
        offset?: components['parameters']['offset']
      }
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    /**
     * Получение информации по чатам
     * @description Возвращает список чатов
     */
    get: operations['getChatsV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v2/accounts/{user_id}/chats/{chat_id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    /**
     * Получение информации по чату
     * @description Возвращает данные чата и последнее сообщение в нем
     */
    get: operations['getChatByIdV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v3/accounts/{user_id}/chats/{chat_id}/messages/': {
    parameters: {
      query?: {
        /** @description Количество сообщений / чатов для запроса */
        limit?: components['parameters']['limit']
        /** @description Сдвиг сообщений / чатов для запроса */
        offset?: components['parameters']['offset']
      }
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    /**
     * Получение списка сообщений V3
     * @description Получение списка сообщений.  **Не помечает чат прочитанным.**
     *     После успешного получения списка сообщений необходимо вызвать [метод](https://api.avito.ru/docs/api.html#operation/chatRead), который сделает сообщения прочитанными.
     *     Для получения новых сообщений в реальном времени используйте [webhooks](https://api.avito.ru/docs/api.html#operation/postWebhookV3)
     */
    get: operations['getMessagesV3']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/messenger/v3/webhook': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Включение уведомлений V3 (webhooks)
     * @description Включение webhook-уведомлений.
     *
     *     Схему JSON приходящего в webhook сообщения можно увидеть в примерах ответов.
     *
     *     После регистрации url'а для получения веб-хуков, убедитесь, что он доступен, работает и возвращает статус 200 ОК соблюдая timeout 2s,
     *     например, выполнив запрос:
     *
     *     curl --connect-timeout 2 <url-вашего-вебхука> -i -d '{}'
     */
    post: operations['postWebhookV3']
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
    Chat: {
      /** @description Сопутствующая к чату информация, несвязанная с мессенджером напрямую */
      context?: {
        /**
         * @description Тип контекста, определяет значение и смысл других полей в объекте контекста
         * @example item
         */
        type?: string
        value?: {
          /**
           * Format: int32
           * @description ID объявления
           * @example 1768287444
           */
          id?: number
          /** @description Изображения с карточки объявления */
          images?: {
            /**
             * Format: int32
             * @description Число изображений
             * @example 4
             */
            count?: number
            main?: {
              /**
               * @description Изображение в формате 140х105
               * @example https://01-img-staging-proxy.k.avito.ru/140x105/5815183159.jpg
               */
              '140x105'?: string
            }
          }
          /**
           * @description Цена в объявлении, с указанием валюты
           * @example 300 000 ₽
           */
          price_string?: string
          /**
           * Format: int32
           * @description Статус объявления, например 20 — объявление удалено
           * @example 10
           */
          status_id?: number
          /** @example Mazda 3 2008 */
          title?: string
          /**
           * @description Ссылка на объявление
           * @example https://avito.ru/moskva/avtomobili/mazda_3_2008_1768287444
           */
          url?: string
          /**
           * Format: int32
           * @description ID автора объявления
           * @example 141906442
           */
          user_id?: number
        }
      }
      /**
       * Format: int32
       * @description Unix-timestamp времени создания чата
       * @example 1571412836
       */
      created?: number
      /** @description Уникальный идентификтор чата */
      id?: string
      last_message?: {
        /**
         * Format: int32
         * @description Ссылка на профиль пользователя в Авито
         * @example 94235311
         */
        author_id?: number
        content?: components['schemas']['MessageContent']
        /**
         * Format: int32
         * @description Unix-timestamp времени отправки сообщения
         * @example 1571654040
         */
        created?: number
        /**
         * @description "in" для входящих сообщений, "out" для исходящих
         * @example out
         */
        direction?: string
        /** @description Уникальный идентификатор сообщения */
        id?: string
        /**
         * @description Тип контента в сообщений
         * @example link
         */
        type?: string
      }
      /**
       * Format: int32
       * @description Unix-timestamp времени последнего обновления чата
       * @example 1571654040
       */
      updated?: number
      users?: {
        /**
         * Format: int32
         * @description Уникальный ID пользователя. Обратите внимание на хэширование
         * @example 94235311
         */
        id?: number
        /**
         * @description Имя пользователя
         * @example Guldan
         */
        name?: string
        public_user_profile?: {
          /** @description Фотография пользователя (аватар) */
          avatar?: {
            /** @example https://www.avito.st/stub_avatars/_/14_256x256.png */
            default?: string
            images?: {
              /**
               * @description Аватар в формате 128х128
               * @example https://www.avito.st/stub_avatars/_/14_128x128.png
               */
              '128x128'?: string
              /**
               * @description Аватар в формате 192х192
               * @example https://www.avito.st/stub_avatars/_/14_192x192.png
               */
              '192x192'?: string
              /**
               * @description Аватар в формате 24х24
               * @example https://www.avito.st/stub_avatars/_/14_24x24.png
               */
              '24x24'?: string
              /**
               * @description Аватар в формате 256х256
               * @example https://www.avito.st/stub_avatars/_/14_256x256.png
               */
              '256x256'?: string
              /**
               * @description Аватар в формате 36х36
               * @example https://www.avito.st/stub_avatars/_/14_36x36.png
               */
              '36x36'?: string
              /**
               * @description Аватар в формате 48х48
               * @example https://www.avito.st/stub_avatars/_/14_48x48.png
               */
              '48x48'?: string
              /**
               * @description Аватар в формате 64х64
               * @example https://www.avito.st/stub_avatars/_/14_64x64.png
               */
              '64x64'?: string
              /**
               * @description Аватар в формате 72х72
               * @example https://www.avito.st/stub_avatars/_/14_72x72.png
               */
              '72x72'?: string
              /**
               * @description Аватар в формате 96х96
               * @example https://www.avito.st/stub_avatars/_/14_96x96.png
               */
              '96x96'?: string
            }
          }
          /**
           * Format: int32
           * @description ID объявления, выложенного пользователем
           * @example 1768287444
           */
          item_id?: number
          /**
           * @description Ссылка на профиль пользователя в Авито
           * @example https://avito.ru/user/db65c00c946dc404e11f14755465453b/profile
           */
          url?: string
          /**
           * Format: int32
           * @description Уникальный ID пользователя. Обратите внимание на хэширование
           * @example 94235311
           */
          user_id?: number
        }
      }[]
    }
    Chats: {
      /** @description Список чатов */
      chats?: components['schemas']['Chat'][]
    }
    /** @description Для сообщений типов "appCall" "file" "video" возвращается empty object (данные типы не поддерживаются) */
    MessageContent: {
      /** @description Объект, описывающий звонок, для сообщения типа call */
      call?: {
        /** @enum {string} */
        status?: 'missed'
        /**
         * Format: int64
         * @example 94235311
         */
        target_user_id?: number
      } | null
      /**
       * @description Идентификатор чат-бота, отправившего сообщение, для сообщений типа system
       * @example seller_audience_discount
       */
      flow_id?: string | null
      /** @description Объект, описывающий изображение, для сообщения типа image */
      image?: {
        /**
         * @description объект ключ-значение, где ключи - строки в формате "ШxВ" (ширина, высота), а значения - ссылки на изображения
         * @example {
         *       "1280x960": "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
         *       "140x105": "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
         *       "32x32": "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
         *       "640x480": "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
         *     }
         */
        sizes?: Record<string, never>
      } | null
      /** @description Объект, описывающий объявление, для сообщения типа item */
      item?: {
        /** @example https://avito.ru/image_url.webp */
        image_url?: string
        /** @example https://avito.ru/item_url */
        item_url?: string
        /** @example 1 232 323 ₽ */
        price_string?: string | null
        /** @example Объявление */
        title?: string
      } | null
      /** @description Объект, описывающий ссылку, для сообщения типа link */
      link?: {
        preview?: {
          /** @example Лучшие публикации за последние 24 часа */
          description?: string
          /** @example habr.com */
          domain?: string
          /**
           * @description объект ключ-значение, где ключи - строки в формате "ШxВ" (ширина, высота), а значения - ссылки на изображения
           * @example {
           *       "1280x960": "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
           *       "140x105": "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
           *       "32x32": "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
           *       "640x480": "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
           *     }
           */
          images?: Record<string, never> | null
          /** @example Лучшие публикации за сутки / Хабр */
          title?: string
          /** @example https://habr.com/ru/ */
          url?: string
        } | null
        /** @example habr.com */
        text?: string
        /** @example habr.com */
        url?: string
      } | null
      /** @description Объект, описывающий геометку, для сообщения типа location */
      location?: {
        /**
         * @example street
         * @enum {string}
         */
        kind?: 'house' | 'street' | 'area' | '...'
        /**
         * Format: float
         * @example 55.599799
         */
        lat?: number
        /**
         * Format: float
         * @example 37.603954
         */
        lon?: number
        /** @example Москва, Варшавское шоссе */
        text?: string
        /** @example Москва, Варшавское шоссе */
        title?: string
      } | null
      /**
       * @description Текст сообщения, для сообщения типа text
       * @example привет!
       */
      text?: string | null
      /** @description Объект, описывающий голосовое сообщение, для сообщения типа voice */
      voice?: {
        voice_id?: string
      } | null
    }
    /** @description цитируемое сообщение */
    MessageQuote: {
      /**
       * Format: int64
       * @example 94235311
       */
      author_id?: number
      content?: components['schemas']['MessageContent']
      /**
       * Format: int64
       * @example 1571654040
       */
      created?: number
      id?: string
      /** @enum {string} */
      type?: 'text' | 'image' | 'link' | 'item' | 'location' | 'call' | 'deleted' | 'voice' | 'system'
    }
    Messages: {
      /**
       * Format: int64
       * @example 94235311
       */
      author_id?: number
      content?: components['schemas']['MessageContent']
      /**
       * Format: int64
       * @example 1571654040
       */
      created?: number
      /**
       * @example out
       * @enum {string}
       */
      direction?: 'in' | 'out'
      id?: string
      /**
       * @description True, если сообщение уже было прочитано запрашиваемым пользователем. Иначе false
       * @example true
       */
      is_read?: boolean
      quote?: components['schemas']['MessageQuote']
      /**
       * @description Unix-timestamp времени, когда сообщение было прочитано собеседником
       * @example 123
       */
      read?: number | null
      /** @enum {string} */
      type?: 'text' | 'image' | 'link' | 'item' | 'location' | 'call' | 'deleted' | 'voice' | 'system'
    }[]
    PayloadStruct: {
      /**
       * @description Тип сообщения
       * @example message
       */
      type?: string
      value?: components['schemas']['WebhookMessage']
    }
    VoiceFiles: {
      voices_urls?: {
        [key: string]: string
      }
    }
    WebhookMessage: {
      /**
       * @description ID пользователя, отправившего сообщение
       * @example 123
       */
      author_id?: number
      /**
       * @description Уникальный идентификатор чата, куда отправлено сообщение
       * @example abc
       */
      chat_id?: string
      /**
       * @description Тип чата (u2i - чат по объявлению, u2u - чат по профилю пользователя, a2u - чат по профилю пользователя c Авито)
       * @example u2i
       * @enum {string}
       */
      chat_type?: 'u2i' | 'u2u' | 'a2u'
      content?: components['schemas']['MessageContent']
      /**
       * @description Unix-timestamp времени создания сообщения
       * @example 123
       */
      created?: number
      /**
       * @description Уникальный идентификатор сообщения
       * @example abc
       */
      id?: string
      /**
       * @description ID объявления, актуально только для чатов с типом u2i
       * @example 123
       */
      item_id?: number | null
      /**
       * @description Время публикации сообщения в формате RFC3339 в UTC
       * @example 1973-03-04T13:33:09Z
       */
      published_at?: string
      /**
       * @description Unix-timestamp времени прочтения, если сообщение уже прочитано
       * @example 123
       */
      read?: number | null
      /**
       * @description Тип сообщения
       * @example text
       * @enum {string}
       */
      type?:
        | 'text'
        | 'image'
        | 'system'
        | 'item'
        | 'call'
        | 'link'
        | 'location'
        | 'deleted'
        | 'appCall'
        | 'file'
        | 'video'
        | 'voice'
      /**
       * @description ID пользователя, получившего сообщение. Это всегда аккаунт, на который зарегистрирован вебхук
       * @example 123
       */
      user_id?: number
    }
    addBlacklistRequestBody: {
      users?: {
        context?: {
          /** Format: int64 */
          item_id?: number
          /**
           * @description причина, по которой блокируем пользователя, 1 - спам, 2 - мошенничество, 3 - оскорбления и хамство, 4 - другая причина
           * @enum {integer}
           */
          reason_id?: 1 | 2 | 3 | 4
        }
        /**
         * Format: int64
         * @description id пользователя которого хотим заблокировать
         * @example 94235311
         */
        user_id?: number
      }[]
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
    sendImageMessageRequestBody: {
      /** @description Идентификатор загруженного изображения */
      image_id: string
    }
    sendMessageRequestBody: {
      message?: {
        /** @description Текст сообщения (максимум 1000 символов) */
        text?: string
      }
      /**
       * @description Тип сообщения
       * @enum {string}
       */
      type?: 'text'
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
    webhookSubscribeRequestBody: {
      /** @description Url на который будут отправляться нотификации */
      url: string
    }
  }
  responses: never
  parameters: {
    /** @description Токен для авторизации */
    authHeader: string
    /** @description Идентификатор чата (клиента) */
    chatId: string
    /**
     * @description Фильтрация возвращаемых чатов.
     *     * u2i — чаты по объявлениям;
     *     * u2u — чаты между пользователями;
     *     * a2u — чаты между пользователями и Авито;
     */
    chatTypes: ('u2i' | 'u2u' | 'a2u')[]
    /** @description Идентификатор загруженного изображения */
    imageId: string
    /** @description Получение чатов только по объявлениям с указанными item_id */
    itemIds: number[]
    /** @description Количество сообщений / чатов для запроса */
    limit: number
    /** @description Идентификатор сообщения */
    messageId: string
    /** @description Сдвиг сообщений / чатов для запроса */
    offset: number
    /** @description При значении true метод возвращает только непрочитанные чаты */
    unreadOnly: boolean
    /** @description Идентификатор пользователя (клиента) */
    userId: number
    /** @description Получение файлов голосовых сообщений с указанными voice_id */
    voiceIds: string[]
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
  postSendMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    /** @description Отправление сообщения */
    requestBody?: {
      content: {
        'application/json': components['schemas']['sendMessageRequestBody']
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
            content?: {
              /** @example привет */
              text?: string
            }
            /** @example 1563202313 */
            created?: number
            /** @example out */
            direction?: string
            /** @example bdcc5bac2d00345f1cc66fa657813958 */
            id?: string
            /** @example text */
            type?: string
          }
        }
      }
    }
  }
  postSendImageMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
      }
      cookie?: never
    }
    /** @description Вложение с изображением */
    requestBody?: {
      content: {
        'application/json': components['schemas']['sendImageMessageRequestBody']
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
            /** @example 9623532 */
            author_id?: number
            content?: {
              image?: {
                /**
                 * @example {
                 *       "1280x960": "https://example.hosts.ru/image_1280_960.png",
                 *       "140x105": "https://example.hosts.ru/image_140_105.png",
                 *       "32x32": "https://example.hosts.ru/image_32_32.png"
                 *     }
                 */
                sizes?: {
                  [key: string]: string
                }
              }
            }
            /** @example 1563202313 */
            created?: number
            /** @example out */
            direction?: string
            /** @example bdcc5bac2d00345f1cc66fa657813958 */
            id?: string
            /** @example image */
            type?: string
          }
        }
      }
    }
  }
  deleteMessage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
        /** @description Идентификатор сообщения */
        message_id: components['parameters']['messageId']
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
          'application/json': Record<string, never>
        }
      }
    }
  }
  chatRead: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
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
          'application/json': {
            /** @example true */
            ok?: boolean
          }
        }
      }
    }
  }
  getVoiceFiles: {
    parameters: {
      query: {
        /** @description Получение файлов голосовых сообщений с указанными voice_id */
        voice_ids: components['parameters']['voiceIds']
      }
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
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
          'application/json': components['schemas']['VoiceFiles']
        }
      }
    }
  }
  uploadImages: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'multipart/form-data': {
          /** Format: binary */
          'uploadfile[]': string
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
            [key: string]: {
              [key: string]: string
            }
          }
        }
      }
    }
  }
  getSubscriptions: {
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
          'application/json': {
            subscriptions: {
              /** @example http://abc */
              url: string
              /**
               * @description Версия метода, через который вебхук добавлен. Влияет на формат получаемых данных
               * @example 3
               */
              version: string
            }[]
          }
        }
      }
    }
  }
  postWebhookUnsubscribe: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Url, на который необходимо перестать слать уведомления */
    requestBody?: {
      content: {
        'application/json': components['schemas']['webhookSubscribeRequestBody']
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
            /** @example true */
            ok?: boolean
          }
        }
      }
    }
  }
  postBlacklistV2: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
      }
      cookie?: never
    }
    /** @description Добавление пользователя в blacklist */
    requestBody?: {
      content: {
        'application/json': components['schemas']['addBlacklistRequestBody']
      }
    }
    responses: {
      /** @description Успешный ответ */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getChatsV2: {
    parameters: {
      query?: {
        /** @description Получение чатов только по объявлениям с указанными item_id */
        item_ids?: components['parameters']['itemIds']
        /** @description При значении true метод возвращает только непрочитанные чаты */
        unread_only?: components['parameters']['unreadOnly']
        /**
         * @description Фильтрация возвращаемых чатов.
         *     * u2i — чаты по объявлениям;
         *     * u2u — чаты между пользователями;
         *     * a2u — чаты между пользователями и Авито;
         */
        chat_types?: components['parameters']['chatTypes']
        /** @description Количество сообщений / чатов для запроса */
        limit?: components['parameters']['limit']
        /** @description Сдвиг сообщений / чатов для запроса */
        offset?: components['parameters']['offset']
      }
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
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
          'application/json': components['schemas']['Chats']
        }
      }
    }
  }
  getChatByIdV2: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
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
          'application/json': components['schemas']['Chat']
        }
      }
    }
  }
  getMessagesV3: {
    parameters: {
      query?: {
        /** @description Количество сообщений / чатов для запроса */
        limit?: components['parameters']['limit']
        /** @description Сдвиг сообщений / чатов для запроса */
        offset?: components['parameters']['offset']
      }
      header?: never
      path: {
        /** @description Идентификатор пользователя (клиента) */
        user_id: components['parameters']['userId']
        /** @description Идентификатор чата (клиента) */
        chat_id: components['parameters']['chatId']
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
          'application/json': components['schemas']['Messages']
        }
      }
    }
  }
  postWebhookV3: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Url на который будут отправляться уведомления */
    requestBody?: {
      content: {
        'application/json': components['schemas']['webhookSubscribeRequestBody']
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
            /** @example true */
            ok?: boolean
          }
        }
      }
      /** @description JSON сообщения, который будет приходить в webhook */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /**
             * @description Уникальный идентификатор сообщения webhooks
             * @example abc
             */
            id?: string
            payload?: components['schemas']['PayloadStruct']
            /**
             * @description Unix-timestamp времени отправки сообщения webhooks
             * @example 123
             */
            timestamp?: number
            /**
             * @description Версия webhooks
             * @example v1.1
             */
            version?: string
          }
        }
      }
    }
  }
}
