// Сгенерировано scripts/generate.mjs из specs/. Не править руками.
/* eslint-disable */
export interface paths {
  '/autoload/v1/profile': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение профиля пользователя автозагрузки (deprecated)
     * @deprecated
     * @description Возвращает настройки профиля пользователя автозагрузки.
     *     С 23.12.2024 вместо поля upload_url используйте поле feeds_data. В нём содержится название файла и ссылка на него. [Новая версия](https://developers.avito.ru/api-catalog/autoload/documentation#operation/getProfileV2)
     */
    get: operations['getProfile']
    put?: never
    /**
     * Создание/редактирование настроек профиля пользователя автозагрузки (deprecated)
     * @deprecated
     * @description Предназначен для создания и управления профилем автозагрузки. Если профиля еще не существует - через этот метод можно его создать.
     *
     *     С 23.12.2024 вместо поля upload_url используйте поле feeds_data. В нём содержится название файла и ссылка на него. [Новая версия](https://developers.avito.ru/api-catalog/autoload/documentation#operation/createOrUpdateProfileV2)
     */
    post: operations['createOrUpdateProfile']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v1/upload': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Загрузка файла по ссылке
     * @description Метод запускает процесс выгрузки объявлений из файла по ссылке, которая указана
     *     [в настройках автозагрузки](https://www.avito.ru/autoload/settings) в профиле Авито.
     *     В течение часа таким способом можно запустить только одну выгрузку.
     *
     *     **Важно**: на загрузки с помощью этого метода не распространяются лимиты на количество публикаций, которые указаны в настройках автозагрузки в профиле Авито.
     *     Все объявления из файла, которые могут быть опубликованы или активированы, будут опубликованы или активированы.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     */
    post: operations['upload']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v1/user-docs/node/{node_slug}/fields': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Дата и время последней полученной версии в формате RFC1123 в UTC
         * @example Mon, 01 Jan 0001 00:00:00 UTC
         */
        'If-Modified-Since'?: components['parameters']['IfModifiedSinceHeader']
      }
      path: {
        /**
         * @description slug узла дерева категории
         * @example remont
         */
        node_slug: components['parameters']['NodeSlug']
      }
      cookie?: never
    }
    /**
     * Получения полей категории
     * @description Метод позволяет получить поля конкретной категории и их параметры, зависимости полей, возможные значения и их типы, предупреждения (например, когда поле станет обязательным) и ссылки на каталоги значений.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link), если в методе вам не хватает каких-либо данных.
     */
    get: operations['userDocsNodeFields']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v1/user-docs/tree': {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Дата и время последней полученной версии в формате RFC1123 в UTC
         * @example Mon, 01 Jan 0001 00:00:00 UTC
         */
        'If-Modified-Since'?: components['parameters']['IfModifiedSinceHeader']
      }
      path?: never
      cookie?: never
    }
    /**
     * Получение дерева категорий
     * @description Метод позволяет получить дерево категорий Авито в виде массива.
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link), если в методе вам не хватает каких-либо данных.
     */
    get: operations['userDocsTree']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/items/ad_ids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * ID объявлений из файла
     * @description Метод позволяет получить идентификаторы (ID) объявлений из файла автозагрузки по ID объявлений на Авито.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     */
    get: operations['getAdIdsByAvitoIds']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/items/avito_ids': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * ID объявлений на Авито
     * @description Метод позволяет получить идентификаторы (ID) объявлений на Авито по идентификаторам объявлений из файла автозагрузки.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     */
    get: operations['getAvitoIdsByAdIds']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/profile': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Получение профиля пользователя автозагрузки
     * @description Возвращает настройки профиля пользователя автозагрузки. С 23.12.2024 вместо поля upload_url используйте поле feeds_data. В нём содержится название файла и ссылка на него.
     */
    get: operations['getProfileV2']
    put?: never
    /**
     * Создание/редактирование настроек профиля пользователя автозагрузки
     * @description Предназначен для создания и управления профилем автозагрузки. Если профиля еще не существует - через этот метод можно его создать. С 23.12.2024 вместо поля feed_url используйте поле feeds_data. В нём содержится название файла и ссылка на него.
     */
    post: operations['createOrUpdateProfileV2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/reports': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Список отчётов автозагрузки (deprecated)
     * @deprecated
     * @description По запросу вы получите список отчётов автозагрузки.
     *     Они будут отсортированы в порядке убывания: самый свежий отчёт — в начале списка.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getReportsV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/reports/items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Объявления по ID в автозагрузке (deprecated)
     * @deprecated
     * @description По запросу API отдаст данные по конкретным объявлениям.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getAutoloadItemsInfoV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/reports/last_completed_report': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по последней выгрузке (deprecated)
     * @deprecated
     * @description Метод возвращает сводную статистику с результатами последней завершённой выгрузки.
     *     Например, сколько объявлений было в файле и сколько из них было опубликовано с ошибками или без.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     С 23.12.2024 вместо поля feed_url используйте поле feeds_urls. В нём содержится название файла и ссылка на него.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getLastCompletedReport']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/reports/{report_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по конкретной выгрузке (deprecated)
     * @deprecated
     * @description Метод возвращает сводную статистику с результатами конкретной выгрузки — по ID отчёта.
     *     Например, сколько объявлений было в файле и сколько из них было опубликовано с ошибками или без.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     С 23.12.2024 вместо поля feed_url используйте поле feeds_urls. В нём содержится название файла и ссылка на него.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getReportByIdV2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/reports/{report_id}/items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Все объявления из конкретной выгрузки (deprecated)
     * @deprecated
     * @description С помощью этого метода можно получить результаты обработки каждого объявления в конкретной выгрузке.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     С 23.12.2024 добавляется поле feed_name. В нём содержится название файла.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getReportItemsById']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v2/reports/{report_id}/items/fees': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Списания за объявления в конкретной выгрузке (deprecated)
     * @deprecated
     * @description С помощью этого метода можно получить информацию о списаниях за размещение каждого объявления в конкретной выгрузке.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getReportItemsFeesById']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v3/reports/last_completed_report': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по последней выгрузке (deprecated)
     * @deprecated
     * @description Метод возвращает сводную статистику с результатами последней завершённой выгрузки.
     *     Например, сколько объявлений было в файле и сколько из них было опубликовано с ошибками или без.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     С 23.12.2024 вместо поля feed_url используйте поле feeds_urls. В нём содержится название файла и ссылка на него.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getLastCompletedReportV3']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v3/reports/{report_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Статистика по конкретной выгрузке (deprecated)
     * @deprecated
     * @description Метод возвращает сводную статистику с результатами конкретной выгрузки — по ID отчёта.
     *     Например, сколько объявлений было в файле и сколько из них было опубликовано с ошибками или без.
     *
     *     📝 [Напишите нам](https://docs.google.com/forms/d/e/1FAIpQLSdfTHlP6PKtOb08fxD7BaJ0VjtkaLXoRAswhF9gnKvrEyY16g/viewform?usp=sf_link),
     *     если в методе вам не хватает каких-либо данных.
     *
     *     С 23.12.2024 вместо поля feed_url используйте поле feeds_urls. В нём содержится название файла и ссылка на него.
     *
     *     Метод будет отключен 08.03.2027. С 08.09.2026 метод начнёт возвращать меньше данных. Подробнее читайте в [плане миграции](https://developers.avito.ru/api-catalog/autoload/documentation#migration-v4).
     */
    get: operations['getReportByIdV3']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v4/uploads': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * История загрузок
     * @description Возвращает список загрузок. Самая свежая загрузка — в начале списка.
     */
    get: operations['getUploads']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v4/uploads/current': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Текущая загрузка
     * @description Возвращает текущую загрузку пользователя, т.е. последнюю загрузку, которая обработала хотя бы одно объявление фида. Подходит, когда нужны самые актуальные данные. Но эти данные могут меняться в процессе загрузки - для получения стабильных данных лучше использовать метод [последней завершённой загрузки](#operation/getLastSuccessfulUpload).
     *     Если подходящей загрузки нет — возвращается ответ `404`.
     */
    get: operations['getCurrentUpload']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v4/uploads/current/items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Объявления текущей загрузки
     * @description Возвращает объявления [текущей загрузки](#operation/getCurrentUpload).
     *
     *     Если подходящей загрузки нет — возвращается ответ `404`.
     */
    get: operations['getCurrentUploadItems']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v4/uploads/last_successful': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Последняя успешно завершённая загрузка
     * @description Возвращает последнюю успешно завершённую загрузку, т.е. загрузку, которая обработала все объявления фида. Для самой последней загрузки возможны задержки при определении того, что загрузка завершена — в таком случае смотрите актуальные данные в методе [текущей загрузки](#operation/getCurrentUpload).
     *
     *     Если подходящей загрузки нет — возвращается ответ `404`.
     */
    get: operations['getLastSuccessfulUpload']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoload/v4/uploads/last_successful/items': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Объявления последней успешно завершённой загрузки
     * @description Возвращает объявления [последней успешно завершённой загрузки](#operation/getLastSuccessfulUpload).
     *
     *     Если подходящей загрузки нет — возвращается ответ `404`.
     */
    get: operations['getLastSuccessfulUploadItems']
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
    /** @description Предупреждение для запрошенной категории */
    APFieldsNodeAlert: {
      /**
       * @description Описание предупреждения
       * @example Категория будет разбита на подкатегории
       */
      description?: string
      /**
       * @description Заголовок предупреждения
       * @example Изменения в категории
       */
      title?: string
      /**
       * @description Тип предупреждения
       * @example warning
       * @enum {string}
       */
      type?: 'error' | 'warning' | 'info'
    } | null
    APICategoryNode: {
      /** @description Название категории */
      name: string
      /** @description Дочерние категории */
      nested?: {
        [key: string]: unknown
      }[]
      /** @description Slug категории для получения полей */
      slug?: string
    }
    APICategoryTreeOut: {
      categories: components['schemas']['APICategoryNode'][]
    }
    APIDependency: {
      /**
       * @description Что нужно сделать с полем после применения правил.
       *     - visible означает, что поле становится доступным для заполнения.
       *     - required означает, что поле становится обязательным. Поле до применения этого правила считается доступным для заполнения, меняется только обязательность.
       *     - hidden означает, что поле становится недоступным для заполнения.
       * @enum {string}
       */
      action?: 'visible' | 'required' | 'hidden'
      /**
       * @description Логический оператор для определения применимости — нужно применить все правила или только одно из них.
       * @enum {string}
       */
      clause?: 'or' | 'and'
      /** @description Список правил */
      pairs?: components['schemas']['APIDependencyPair'][]
    }
    APIDependencyPair: {
      /** @enum {string} */
      clause?: 'value' | 'filled' | 'empty'
      source_field_tag?: string
      values?: string[]
    }
    /** @description Поля для категории, включая поля вложенных подкатегорий. */
    APIField: {
      children?: components['schemas']['ChildAPIField'][]
      /**
       * @description Набор правил для заполнения тега. У одного тега может быть набор правил с разными условиями их применения. Одновременно они не применяются — все, кроме одного, должны быть исключены по правилам, описанным в атрибуте dependencies.
       *
       *     Иногда ни один из элементов не применяется. Так бывает, если текущее поле зависит от значения другого поля — пока не будет удовлетворено условие заполнения другого поля, текущее поле будет недоступно.
       *
       *     Если у поля нет аттрибута dependencies, поле считается доступным для заполнения.
       */
      content?: components['schemas']['APIFieldContent'][]
      /**
       * @description Описание тега
       * @example Категория объявления
       */
      descriptions?: string
      /**
       * @example {
       *       "xml": null
       *     }
       */
      feed_format?: ('xml' | 'excel')[]
      /**
       * @description Label (на русском) для указания в файле загрузки
       * @example Категория
       */
      label?: string
      /**
       * @description Тег для указания в файле загрузки
       * @example Category
       */
      tag?: string
    }
    APIFieldContent: {
      /**
       * @description Тип данных в поле.
       * @example string
       * @enum {string}
       */
      data_type: 'string' | 'integer' | 'float'
      default?: components['schemas']['FieldValue']
      /** @description Список зависимостей одного поля от других. Информация в этих объектах нужна для определения, какое именно правило заполнения поля применить. */
      dependencies?: components['schemas']['APIDependency'][]
      /** @description Текстовое представление описания зависимостей поля. */
      dependencies_text?: string[]
      /**
       * @description Тип поля.
       *     - input означает, что поле может быть заполнено произвольным значением.
       *     - select означает, что поле может принимать одно из заданных значений.   Заданные значения указаны в поле values или доступны по ссылке.
       *     - checkbox означает, что поле может принимать одно или несколько заданных значений. Заданные значения указаны в поле values или доступны по ссылке.
       * @example select
       * @enum {string}
       */
      field_type: 'input' | 'select' | 'checkbox'
      /**
       * @description Являются ли значения поля каталожными.
       * @example true
       */
      is_catalog?: boolean
      /**
       * @description Название поля в каталоге.
       * @example vendor
       */
      name_in_catalog?: string | null
      /**
       * @description Признак обязательности поля
       * @example true
       */
      required: boolean
      /**
       * @description Признак того, что поле может быть обязательным в зависимости от значения другого поля. Чтобы понять, есть ли зависимость, надо смотреть содержание атрибута dependencies.
       * @example true
       */
      required_by_dependency: boolean
      /** @description Список возможных значений для поля. */
      values?: components['schemas']['FieldValue'][]
      /**
       * @description Ссылка для получения списка полей в формате json. Структура значений по этой ссылке строго определена. Иногда бывает так, что ссылки нет.
       * @example https://api.avito.ru/autoload/v1/user-docs/node/zapchasti_i_aksessuary/field/115633/values-json
       */
      values_link_json?: string | null
      /**
       * @description Ссылка для получения списка полей в формате xml. Нет строгого формата значений по этой ссылке. Иногда бывает так, что ссылки нет, — вместо неё отображается атрибут values.
       * @example https://api.avito.ru/autoload/v1/user-docs/node/zapchasti_i_aksessuary/field/115633/values-xml
       */
      values_link_xml?: string | null
      values_range?: components['schemas']['FieldValueRange']
      values_range_v2?: components['schemas']['FieldValueRangeV2']
      warnings?: components['schemas']['FieldWarning'][] | null
    }
    /** @description Данные запрашиваемой категории */
    APIFieldsNode: {
      /**
       * @description Название категории
       * @example Ремонт
       */
      name: string
      /**
       * @description Уникальный идентификатор категории (slug)
       * @example remont
       */
      slug: string
    }
    APIFieldsOut: {
      alert?: components['schemas']['APFieldsNodeAlert']
      /** @description Массив полей категории */
      fields: components['schemas']['APIField'][]
      node: components['schemas']['APIFieldsNode']
    }
    /**
     * @example {
     *       "id": 1,
     *       "name": "Животные",
     *       "nested": [
     *         {
     *           "id": 2,
     *           "name": "Кошки",
     *           "show_fields": true
     *         },
     *         {
     *           "id": 3,
     *           "name": "Собаки",
     *           "nested": [
     *             {
     *               "id": 4,
     *               "name": "Злые",
     *               "show_fields": true
     *             },
     *             {
     *               "id": 5,
     *               "name": "Добрые",
     *               "show_fields": true
     *             }
     *           ],
     *           "show_fields": true
     *         }
     *       ]
     *     }
     */
    CategoryNode: {
      /** @description Id категории */
      id: number
      /** @description Поддерживается ли русские значения тегов */
      is_support_rus_label: boolean
      /** @description Название категории */
      name: string
      /** @description вложенный обьект ноды */
      nested?: components['schemas']['CategoryNode'][]
      /** @description Можно ли показывать поля для этого узла. */
      show_fields?: boolean
    }
    CategoryTreeOut: {
      categories: components['schemas']['CategoryNode'][]
    }
    /** @description Поля для категории, включая поля вложенных подкатегорий. */
    ChildAPIField: {
      /**
       * @description Набор правил для заполнения тега. У одного тега может быть набор правил с разными условиями их применения. Одновременно они не применяются — все, кроме одного, должны быть исключены по правилам, описанным в атрибуте dependencies.
       *
       *     Иногда ни один из элементов не применяется. Так бывает, если текущее поле зависит от значения другого поля — пока не будет удовлетворено условие заполнения другого поля, текущее поле будет недоступно.
       *
       *     Если у поля нет аттрибута dependencies, поле считается доступным для заполнения.
       */
      content?: components['schemas']['APIFieldContent'][]
      /**
       * @description Описание тега
       * @example Категория объявления
       */
      descriptions?: string
      /**
       * @example {
       *       "xml": null
       *     }
       */
      feed_format?: ('xml' | 'excel')[]
      /**
       * @description Label (на русском) для указания в файле загрузки
       * @example Категория
       */
      label?: string
      /**
       * @description Тег для указания в файле загрузки
       * @example Category
       */
      tag?: string
    }
    ErrorAutoload: {
      error?: {
        /**
         * @description Код ошибки
         * @enum {string}
         */
        code: 'fail' | 'success'
        /** @description Поля в которых возникла ошибка */
        fields?: {
          [key: string]: components['schemas']['FieldError']
        }
        /** @description Описание ошибки */
        message: string
      }
    }
    /**
     * @description Расписание регулярных выгрузок. Содержит в себе периоды и сколько объявлений загружать за каждый период.
     *     Каждый период означает часовой промежуток, в течение которого будет запущена выгрузка.
     *     Время указывается по Москве.
     */
    ExportSchedule: {
      /** @description Количество объявлений за период */
      rate: number
      /**
       * @description Период, в который будет запущена выгрузка.
       *     Допустимые значения: целые числа от 0 до 23, где 0 - это промежуток времени 00:00-01:00, а 23 - промежуток 23:00-24:00
       */
      time_slots: number[]
      /**
       * @description День недели периода.
       *     Допустимые значения: целые числа от 0 до 6, где 0 - понедельник, 6 - воскресенье.
       */
      weekdays: number[]
    }[]
    FeedsData:
      | {
          /** @description Название фида. Будет отображаться в отчете, показывает откуда взято объявление */
          feed_name: string
          /** @description URL-адрес фида, для которого настроены регулярные выгрузки. Должен начинаться с http или https. */
          feed_url: string
        }[]
      | null
    FieldError: {
      /** @description Код ошибки */
      code: string
      /** @description Описание ошибки */
      message: string
    }
    FieldErrorV2: {
      error?: {
        /** @description Код ошибки */
        code: number
        /** @description Описание ошибки */
        message: string
      }
    }
    FieldValue: {
      /** @description Опциональное описание значения */
      description?: string
      /**
       * @description Текстовое значение
       * @example Предложение услуг
       */
      value?: string
    } | null
    /** @description Промежуток допустимых значений. Применимо для типов данных int и float. Для типа данных string является ограничением длины строки. */
    FieldValueRange: {
      /** @example 42 */
      max?: number | null
      /** @example 0 */
      min?: number | null
    } | null
    /** @description Промежуток допустимых значений с дробными границами. Применимо для типов данных int и float. Для типа данных string является ограничением длины строки. */
    FieldValueRangeV2: {
      /** @example 1000 */
      max?: number | null
      /** @example 0.1 */
      min?: number | null
    } | null
    FieldWarning: {
      /**
       * @description Содержание предупреждения
       * @example Поле станет обязательным после 12.12.2022
       */
      content: string
      /**
       * @description Заголовок предупреждения
       * @example Изменяется обязательность
       */
      title: string
    }
    ItemFeesInfoReportAutoloadV2: {
      /** @description Идентификатор объявления из файла ([параметр Id](https://autoload.avito.ru/format/realty/#Id)) */
      ad_id: string
      /** @description Идентификатор объявления на Авито */
      avito_id: number
      /** @description Сумма средств, списанных из кошелька, при разовой оплате либо количество размещений, списанных из пакета */
      fees_amount: number
      /** @description ID пакета размещений */
      fees_package_id?: number | null
      /**
       * @description Тип списания (разовая оплата или из пакета размещений)
       * @enum {string}
       */
      fees_type: 'single' | 'package'
    }
    ItemInfoAutoload: {
      /** @description Ошибки, при которых публикация/обновление происходит, но при этом с объявлением есть проблема, которая требует вмешательства пользователя; публикация изменений, по-возможности, происходит */
      alarm?: components['schemas']['ItemInfoErrorAutoload'][]
      /**
       * @description Список примененных при выгрузке дополнительных услуг
       *     - `premium` — [премиум-объявление](https://support.avito.ru/articles/200026868)
       *     - `vip` — [VIP-объявление](https://support.avito.ru/articles/200026848)
       *     - `pushup` — [поднятие объявления в поиске](https://support.avito.ru/articles/200026828)
       *     - `highlight` — [выделение объявления](https://support.avito.ru/articles/200026858)
       *     - `turbo_sale` - применение пакета [Турбо-продажа](https://support.avito.ru/articles/200026838)
       *     - `quick_sale` - применение пакета [Быстрая продажа](https://support.avito.ru/articles/200026838)
       */
      applied_vas?: ('vip' | 'highlight' | 'pushup' | 'premium' | 'turbo_sale' | 'quick_sale')[]
      /**
       * Format: int32
       * @description Идентификатор объявления на сайте
       */
      avito_id?: number | null
      /** @description Ошибки, при возникновении которых публикация новых не происходит, уже опубликованные — остаются без изменений, VAS-услуги не применяются, завершенные — не реактивируются */
      errors?: components['schemas']['ItemInfoErrorAutoload'][]
      /**
       * Format: date-time
       * @description Дата последнего изменения состояния (статуса) выгрузки объявления
       */
      event_time?: string
      /** @description Информация о платном размещении */
      fee_info?: {
        /**
         * Format: float
         * @description Сумма списания за размещение (отсутствует при размещении из пакета)
         */
        amount?: number
        /**
         * Format: int32
         * @description Идентификатор пакета размещения (отсутствует при разовом размещении)
         */
        package_id?: number
        /**
         * @description Тип платного размещения
         * @enum {string}
         */
        type?: 'single' | 'package'
      } | null
      /**
       * Format: date-time
       * @description Дата последнего цикла обработки
       */
      processing_time?: string
      /**
       * @description Статус выгрузки объявления:<br />
       *     `success` - Успешно опубликовано<br />
       *     `problem` - Опубликовано с проблемами<br />
       *     `error` - Не удалось опубликовать<br />
       *     `not_publish` - Не нужно публиковать<br />
       *     `will_publish_later` - Будут опубликованы позднее<br />
       *     `duplicate` - Дубликат объявления<br />
       *     `without_id` - Объявление без идентификатора<br />
       *     `deleted` - Удалено из файла<br />
       *     `unknown` - Возникли проблемы при определении статуса
       * @enum {string}
       */
      status?:
        | 'success'
        | 'problem'
        | 'error'
        | 'not_publish'
        | 'will_publish_later'
        | 'duplicate'
        | 'without_id'
        | 'deleted'
        | 'unknown'
      /**
       * @description Подробный статус выгрузки объявления:
       *     <br />`success_added` - Объявление добавленно на сайт в последний цикл автозагрузки
       *     <br />`success_activated` - Объявление активировано из ранее снятых с публикации или завершенных
       *     <br />`success_activated_updated` - Объявление активировано из ранее снятых с публикации или завершенных и изменено
       *     <br />`success_updated` - Объявление было изменено
       *     <br />`success_skipped` - Объявление в данный цикл автозагрузки без изменений оставлено активным на сайте
       *     <br />`problem_obsolete` - Объявление в XML имеет устаревший формат. [Документация по формату](http://autoload.avito.ru/format/)
       *     <br />`problem_params_critical` - При обработке объявления возникли ошибки, связанные с описанием или значениями параметров. Если ошибки не исправить, то через какое-то время объявление исчезнет с сайта
       *     <br />`problem_params` - При обработке объявления возникли ошибки, связанные с описанием или значениями параметров
       *     <br />`problem_phone` - Проблемы с телефонным номером в контактной информации
       *     <br />`problem_images` - При обработке возникли ошибки размещения фотографий
       *     <br />`problem_vas` - При обработке возникли ошибки активации дополнительных услуг
       *     <br />`problem_other` - Возникли ошибки, отличные от перечисленных
       *     <br />`problem_several` - Возникло несколько разных ошибок, перечисленных выше
       *     <br />`error_fee` - Объявление не опубликовано на сайте из-за проблем с оплатой размещения
       *     <br />`error_params` - Не удалось опубликовать на сайте из-за ошибок, связанных с описанием или значениями параметров
       *     <br />`error_phone` - Не удалось опубликовать из-за проблем с телефонным номером в контактной информации
       *     <br />`error_rejected` - Объявление было отклонено модерацией из-за нарушений правил сайта
       *     <br />`error_blocked` - Объявление было заблокировано модерацией из-за нарушений правил сайта
       *     <br />`error_deleted` - Объявление невозможно обработать из-за того, что ранее объявления с таким ID (в XML-файле) было удалено с сайта
       *     <br />`error_other` - Возникли ошибки, отличные от перечисленных
       *     <br />`error_several` - Возникло несколько разных ошибок, перечисленных выше
       *     <br />`stopped_end_date_complete` - Не опубликовано или снято с публикации по причине истечения срока экспозиции, указанного в XML-файле
       *     <br />`stopped_end_date_error` - При попытке снятия с публикации возникли ошибки
       *     <br />`date_in_future` - Не опубликовано или снято с публикации по причине, что дата начала экспозиции, указанная в XML-файле, еще не наступила
       *     <br />`publish_later` - Не добавлено на сайт из-за ограничения на количество публикуемых за один цикл объявлений. Если вы хотите изменить режим автозагрузки ваших объявлений, обратитесь в Службу поддержки
       *     <br />`linker` - Объявления, похожие на размещенные ранее через Личный кабинет, по которым требуется принять решение: объединить с существующим или опубликовать как новое объявление
       *     <br />`removed_complete` - Объявление снято с публикации (завершенные), т.к. они были удалены из XML-файла
       *     <br />`removed_error` - Ошибки при попытке снятия с публикации
       *     <br />`need_sync` - Объявление ожидает синхронизации с сайтом
       *     <br />`duplicate` - Объявления имеют одинаковое описание
       *     <br />`without_id` - Объявление без идентификатора
       * @enum {string}
       */
      status_detail?:
        | 'success_added'
        | 'success_activated'
        | 'success_activated_updated'
        | 'success_updated'
        | 'success_skipped'
        | 'problem_obsolete'
        | 'problem_params_critical'
        | 'problem_params'
        | 'problem_phone'
        | 'problem_images'
        | 'problem_vas'
        | 'problem_other'
        | 'problem_several'
        | 'error_fee'
        | 'error_params'
        | 'error_phone'
        | 'error_rejected'
        | 'error_blocked'
        | 'error_deleted'
        | 'error_other'
        | 'error_several'
        | 'stopped_end_date_complete'
        | 'stopped_end_date_error'
        | 'date_in_future'
        | 'publish_later'
        | 'linker'
        | 'removed_complete'
        | 'removed_error'
        | 'need_sync'
        | 'duplicate'
        | 'without_id'
      /** @description URL объявления на сайте */
      url?: string | null
      /** @description Ошибки, которые, в подавляющем большинстве случаев, информируют, но не требуют вмешательства (никак не влияют на статус обработки) */
      warnings?: components['schemas']['ItemInfoErrorAutoload'][]
    }
    ItemInfoAutoloadV2: {
      /** @description Идентификатор объявления из файла ([параметр Id](https://autoload.avito.ru/format/realty/#Id)) */
      ad_id: string
      /**
       * Format: date-time
       * @description Дата окончания оплаченного периода размещения объявления
       */
      avito_date_end: string | null
      /** @description Идентификатор объявления на Авито */
      avito_id: number | null
      /**
       * @description Статус объявления на Авито
       *       - active – Объявление активно
       *       - old – Срок размещения объявления истёек
       *       - blocked – Объявление заблокировано
       *       - rejected – Объявление отклонено для исправления нарушений
       *       - archived – Объявление находится в Архиве
       *       - removed – Объявление удалено навсегда
       * @enum {string|null}
       */
      avito_status: 'active' | 'old' | 'blocked' | 'rejected' | 'archived' | 'removed' | null
      /** @description Информация о списании за размещение объявления */
      fee_info: {
        /** @description Сумма средств, списанных из кошелька за это объявление (передаётся, если type = single) */
        amount?: number | null
        /** @description ID пакета размещений, из которого было списание за это объявление (передаётся, если type = package) */
        package_id?: number | null
        /**
         * @description Способ оплаты
         *       - single – Оплата из кошелька
         *       - package – Оплата из пакета размещений
         * @enum {string}
         */
        type?: 'single' | 'package'
      } | null
      /** @description Ошибки или предупреждения по объявлению */
      messages: components['schemas']['ItemInfoError'][]
      /**
       * Format: date-time
       * @description Дата и время последней обработки объявления
       */
      processing_time: string | null
      /** @description Раздел отчёта, в котором находится объявление — то есть результат обработки объявления в последней выгрузке */
      section?: {
        /** @description ID раздела */
        slug: string
        /** @description Название раздела */
        title: string
      }
      /** @description Ссылка на объявление на Авито */
      url: string | null
    }
    ItemInfoError: {
      /** @description Код ошибки или предупреждения */
      code: number
      /** @description Описание ошибки или предупреждения */
      description: string
      /** @description Название ошибки или предупреждения */
      title: string
      /**
       * @description Тип ошибки или предупреждения
       *       - error – Критическая ошибка, которая влияет на выгрузку: объявление не редактируется или не публикуется
       *       - warning – Некритическая ошибка, которая в будущем может повлиять на выгрузку или влияет сейчас на необязательный параметр
       *       - alarm – Предупреждение, которое не влияет на выгрузку
       *       - info – Информационное сообщение
       * @enum {string}
       */
      type: 'error' | 'warning' | 'info' | 'alarm'
      /**
       * Format: date-time
       * @description Дата актуальности ошибки или предупреждения
       */
      updated_at: string
    }
    ItemInfoErrorAutoload: {
      /**
       * Format: int32
       * @description Идентификатор события
       */
      code?: number
      /** @description Описание */
      description?: string
      /** @description Ссылка на документацию */
      manual?: string | null
      /** @description Заголовок */
      title?: string
    }
    ItemInfoReportAutoloadV2: {
      /** @description Идентификатор объявления из файла ([параметр Id](https://autoload.avito.ru/format/realty/#Id)) */
      ad_id: string
      /** @description Список примененных в конкретной выгрузке [услуг продвижения](https://support.avito.ru/partitions/131) */
      applied_vas?: components['schemas']['ItemInfoVas'][]
      /**
       * Format: ISO 8601
       * @description Дата окончания оплаченного периода размещения объявления
       */
      avito_date_end: string | null
      /** @description Идентификатор объявления на Авито */
      avito_id: number | null
      /**
       * @description Статус объявления на Авито
       *       - active – Объявление активно
       *       - old – Срок размещения объявления истёк
       *       - blocked – Объявление заблокировано
       *       - rejected – Объявление отклонено для исправления нарушений
       *       - archived – Объявление находится в архиве
       *       - removed – Объявление удалено навсегда
       * @enum {string|null}
       */
      avito_status: 'active' | 'old' | 'blocked' | 'rejected' | 'archived' | 'removed' | null
      /** @description Название фида из которого был взято объявление */
      feed_name?: string | null
      /** @description Ошибки или предупреждения по объявлению */
      messages: components['schemas']['ItemInfoError'][]
      /** @description Раздел отчёта, в котором находится объявление — то есть результат обработки объявления в конкретной выгрузке */
      section: {
        /** @description ID раздела */
        slug: string
        /** @description Название раздела */
        title: string
      }
      /** @description Ссылка на объявление на Авито */
      url: string | null
    }
    ItemInfoVas: {
      /** @description Сумма средств, списанных из кошелька за эту услугу */
      price: number
      /**
       * @description ID услуги
       *     - highlight – «Выделение цветом» (действует 7 дней)
       *     - xl – «XL-объявление» (действует 7 дней)
       *     - x2_1 – «До 2 раз больше просмотров на 1 день»
       *     - x2_7 – «До 2 раз больше просмотров на 7 дней»
       *     - x5_1 – «До 5 раз больше просмотров на 1 день»
       *     - x5_7 – «До 5 раз больше просмотров на 7 дней»
       *     - x10_1 – «До 10 раз больше просмотров на 1 день»
       *     - x10_7 – «До 10 раз больше просмотров на 7 дней»
       *     - x15_1 – «До 15 раз больше просмотров на 1 день»
       *     - x15_7 – «До 15 раз больше просмотров на 7 дней»
       *     - x20_1 – «До 20 раз больше просмотров на 1 день»
       *     - x20_7 – «До 20 раз больше просмотров на 7 дней»
       * @enum {string}
       */
      slug:
        | 'xl'
        | 'highlight'
        | 'x2_1'
        | 'x2_7'
        | 'x5_1'
        | 'x5_7'
        | 'x10_1'
        | 'x10_7'
        | 'x15_1'
        | 'x15_7'
        | 'x20_1'
        | 'x20_7'
      /** @description Название услуги */
      title: string
    }
    /** @description Сообщение по объявлению (ошибка, предупреждение, информационное сообщение) */
    ItemMessageV4: {
      /** @description Код сообщения */
      code: number
      /** @description Описание сообщения */
      description: string
      /** @description Название сообщения */
      title: string
      /**
       * @description Тип сообщения
       *     - `error` — критическая ошибка, объявление не редактируется/не публикуется
       *     - `warning` — некритическая ошибка
       *     - `alarm` — предупреждение, не влияющее на загрузку
       *     - `info` — информационное сообщение
       * @enum {string}
       */
      type: 'error' | 'warning' | 'alarm' | 'info'
      /**
       * Format: date-time
       * @description Дата актуальности сообщения
       */
      updated_at: string
    }
    /** @description Раздел отчёта, в котором находится объявление */
    ItemSectionV4: {
      /** @description ID раздела */
      slug: string
      /** @description Название раздела */
      title: string
    }
    MetaAutoload: {
      /**
       * Format: int32
       * @description Количество ресурсов на страницу
       */
      page?: number
      /**
       * Format: int32
       * @description Количество страниц
       */
      pages?: number
      /**
       * Format: int32
       * @description Количество ресурсов на страницу
       */
      per_page?: number
    }
    /** @description Данные пагинации */
    MetaReportItemsAutoloadV2: {
      /** @description Номер страницы */
      page?: number
      /** @description Общее количество страниц */
      pages?: number
      /** @description Количество объявлений на странице */
      per_page?: number
      /** @description Общее количество объявлений в отчёте */
      total?: number
    }
    /** @description Данные пагинации */
    MetaReportsAutoloadV2: {
      /** @description Номер страницы */
      page?: number
      /** @description Общее количество страниц */
      pages?: number
      /** @description Количество отчётов на странице */
      per_page?: number
      /** @description Общее количество отчётов */
      total?: number
    }
    /** @description Данные пагинации */
    PaginationMetaV4: {
      /** @description Номер страницы */
      page: number
      /** @description Общее количество страниц */
      pages: number
      /** @description Количество ресурсов на странице */
      perPage: number
      /** @description Общее количество ресурсов */
      total: number
    }
    ReportAutoload: {
      /** @description Список объявлений */
      ads: {
        /** @description ID объявления в исходном XML-файле клиента */
        ad_id?: string
        /**
         * Format: date-time
         * @description Дата окончания публикации объявления
         */
        avito_date_end?: string
        /** @description ID опубликованного объявления в Авито */
        avito_id?: string
        /** @description Сообщения о событиях возникших в процессе работы с объявлением */
        messages?: {
          /**
           * Format: int32
           * @description Условный код сообщения об ошибке для однозначной идентификации сообщения
           */
          code?: number
          /** @description Текстовое описание проблемы и возможных способов решения */
          description?: string | null
          /** @description Название элемента в XML по которому выводится сообшение */
          element_name?: string | null
          /** @description URL-адрес документации по данному элементу */
          help_url?: string
          /** @description Тип собщения: warning, alarm, error */
          type?: string
        }
        /** @description Статусы обработки объявления */
        statuses?: {
          /** @description Статус размещения на сайте */
          avito?: {
            help?: string
            value?: string
          }
          /** @description Общий статус обработки объявления */
          general?: {
            help?: string
            value?: string
          }
          /** @description Статус предварительной обработки */
          processing?: {
            help?: string
            value?: string
          }
        }
        /** @description URL-адрес объявления на сайте Авито */
        url?: string
      }[]
      /** @description Название организации */
      customer_name: string
      /**
       * Format: date-time
       * @description Время окончания выгрузки объявлений на сайт
       */
      finished_at: string
      /**
       * Format: date-time
       * @description Время генерации данного отчета
       */
      generated_at: string
      /** @description Использованные при публикации пакеты размещения */
      listing_fee?: {
        /** @description Сумма списания за размещение из кошелька */
        amount?: number
        /** @description Описание пакета/разового размещения (при оплате из кошелька) */
        description: string
        /**
         * Format: date-time
         * @description Время окончания пакета
         */
        finish_time?: string
        /** @description Cколько размещений в пакете осталось */
        listing_left?: number
        /** @description Cколько размещений из пакета использовано */
        listing_used?: number
        /** @description id пакета */
        package_id?: number
        /** @description Cколько размещений в пакете предоплачено */
        package_size?: number
        /** @description Тип размещения */
        type?: string
      }[]
      /**
       * Format: date-time
       * @description Время создания отчета
       */
      started_at: string
      /** @description Общий статус выгрузки */
      status: string
      /** @description Какие были применены услуги при данной выгрузке */
      vas?: {
        /** @description В процессе применения */
        activated?: number
        /** @description Активна на текущий момент */
        active?: number
        /** @description Ошибка применения */
        error?: number
        /** @description Название услуги */
        name?: string
        /**
         * @description Тип услуги:<br />
         *     `service` - Одна услуга<br />
         *     `package` - Пакет услуг<br />
         * @enum {string}
         */
        type?: 'service' | 'package'
      }[]
      /** @description Версия формата отчета */
      version: string
    }
    ReportAutoloadV2: {
      /** @description Ошибки и предупреждения, которые относятся ко всей выгрузке */
      events: {
        /** @description Код события */
        code: number
        /** @description Описание события */
        description: string
        /** @description Тип события */
        type: string
      }[]
      /** @description Ссылка на копию файла с объявлениями в момент начала загрузки */
      feed_url: string
      /**
       * Format: date-time
       * @description Дата и время закрытия отчёта (окончания выгрузки)
       */
      finished_at: string
      /** @description Статистика по списаниям за размещения объявлений, которые произошли в результате выгрузки */
      listing_fees?: {
        /** @description Статистика по списаниям из пакетов размещений */
        packages: {
          /** @description Количество объявлений, размещения которых были оплачены из этого пакета */
          count?: number
          /** @description ID пакета размещений */
          package_id?: number
        }[]
        /** @description Статистика по списаниям из кошелька */
        single: {
          /** @description Количество объявлений, размещения которых были оплачены из кошелька */
          count?: number
          /** @description Общая сумма средств, списанных из кошелька */
          total_amount?: number
        }
      }
      /** @description Идентификатор отчёта (ID) */
      report_id: number
      /** @description Разделы отчёта с количеством объявлений в каждом */
      section_stats: {
        /** @description Количество объявлений в разделе */
        count: number
        /** @description Разделы второго уровня с количеством объявлений в каждом */
        sections?: {
          /** @description Количество объявлений в разделе второго уровня */
          count: number
          /** @description Разделы третьего уровня с количеством объявлений в каждом */
          sections?: {
            /** @description Количество объявлений в разделе третьего уровня */
            count: number
            /** @description ID раздела третьего уровня */
            slug: string
            /** @description Название раздела третьего уровня */
            title: string
          }[]
          /** @description ID раздела второго уровня */
          slug: string
          /** @description Название раздела второго уровня */
          title: string
        }[]
        /** @description ID раздела */
        slug: string
        /** @description Название раздела */
        title: string
      }
      /**
       * @description Источник загрузки
       *      - email – Загрузка файла по почте
       *      - url – Загрузка файла по ссылке
       *      - web – Загрузка файла вручную в профиле Авито
       *      - openapi – Загрузка по API с помощью метода Загрузка файла по ссылке
       * @enum {string}
       */
      source: 'email' | 'url' | 'web' | 'openapi'
      /**
       * Format: date-time
       * @description Дата и время создания отчёта (начала выгрузки)
       */
      started_at: string
      /**
       * @description Статус отчёта
       *     - processing – Отчёт в процессе, загрузка ещё не завершена
       *     - success – Загрузка прошла без ошибок
       *     - success_warning – В части объявлений есть ошибки
       *     - error – Загрузка не удалась
       * @enum {string}
       */
      status: 'processing' | 'success' | 'success_warning' | 'error'
    }
    ReportAutoloadV3: {
      /** @description Ошибки и предупреждения, которые относятся ко всей выгрузке */
      events: {
        /** @description Код события */
        code: number
        /** @description Описание события */
        description: string
        /** @description Тип события */
        type: string
      }[]
      feeds_urls?: {
        /** @description Название фида */
        name?: string
        /** @description Ссылка на копию файла с объявлениями в момент начала загрузки */
        url?: string
      }[]
      /**
       * Format: date-time
       * @description Дата и время закрытия отчёта (окончания выгрузки)
       */
      finished_at: string
      /** @description Статистика по списаниям за размещения объявлений, которые произошли в результате выгрузки */
      listing_fees?: {
        /** @description Статистика по списаниям из пакетов размещений */
        packages: {
          /** @description Количество объявлений, размещения которых были оплачены из этого пакета */
          count?: number
          /** @description ID пакета размещений */
          package_id?: number
        }[]
        /** @description Статистика по списаниям из кошелька */
        single: {
          /** @description Количество объявлений, размещения которых были оплачены из кошелька */
          count?: number
          /** @description Общая сумма средств, списанных из кошелька */
          total_amount?: number
        }
      }
      /** @description Идентификатор отчёта (ID) */
      report_id: number
      /** @description Разделы отчёта с количеством объявлений в каждом */
      section_stats: {
        /** @description Количество объявлений в разделе */
        count: number
        /** @description Разделы второго уровня с количеством объявлений в каждом */
        sections?: {
          /** @description Количество объявлений в разделе второго уровня */
          count: number
          /** @description Разделы третьего уровня с количеством объявлений в каждом */
          sections?: {
            /** @description Количество объявлений в разделе третьего уровня */
            count: number
            /** @description ID раздела третьего уровня */
            slug: string
            /** @description Название раздела третьего уровня */
            title: string
          }[]
          /** @description ID раздела второго уровня */
          slug: string
          /** @description Название раздела второго уровня */
          title: string
        }[]
        /** @description ID раздела */
        slug: string
        /** @description Название раздела */
        title: string
      }
      /**
       * @description Источник загрузки
       *      - email – Загрузка файла по почте
       *      - url – Загрузка файла по ссылке
       *      - web – Загрузка файла вручную в профиле Авито
       *      - openapi – Загрузка по API с помощью метода Загрузка файла по ссылке
       * @enum {string}
       */
      source: 'email' | 'url' | 'web' | 'openapi'
      /**
       * Format: date-time
       * @description Дата и время создания отчёта (начала выгрузки)
       */
      started_at: string
      /**
       * @description Статус отчёта
       *     - processing – Отчёт в процессе, загрузка ещё не завершена
       *     - success – Загрузка прошла без ошибок
       *     - success_warning – В части объявлений есть ошибки
       *     - error – Загрузка не удалась
       * @enum {string}
       */
      status: 'processing' | 'success' | 'success_warning' | 'error'
    }
    /** @description Список отчетов */
    ReportCollectionAutoload: {
      /** @description Успешно ли прошла выгрузка объявления на сайте */
      export_success?: boolean
      /**
       * Format: date-time
       * @description Время окончания выгрузки объявлений на сайт
       */
      finished_at: string
      /** @description ID отчета */
      id: number
      /** @description Успешно ли прошел импорт файла */
      import_success?: boolean
      /** @description Сокращенный статус обработки отчета */
      report_status?: string
      /**
       * Format: date-time
       * @description Время создания отчета
       */
      started_at: string
      /** @description Суммарная статистика по объявлению в данном отчете */
      stat?: {
        /** @description Сколько с одинаковым описанием */
        duplicate?: number
        /** @description Сколько не опубликовано из-за ошибок */
        error?: number
        /** @description Сколько не опубликовано из-за отсуствия средств */
        error_fee?: number
        /** @description Сколько платных */
        fees?: number
        /** @description Сколько с незначительными проблемами */
        problem?: number
        /** @description Сколько в устаревшем формате или с устаревшими элементами */
        problem_obsolete?: number
        /** @description Сколько будут опубликованы позже */
        publish_later?: number
        /** @description Сколько опубликовано на сайте */
        published?: number
        /** @description Сколько остановлено */
        stopped?: number
        /** @description Сколько успешно опубликовано на сайте */
        success?: number
        /** @description Всего объявлений в пакете */
        total?: number
        /** @description Неизвестный статус обработки */
        unknown?: number
        /** @description К скольким объявлениям применены VAS-услуги */
        vas?: number
      }
      /** @description Статус обработки отчета на русском языке */
      status: string
    }[]
    /** @description Список отчетов (новый) */
    ReportShortAutoloadV2: {
      /**
       * Format: date-time
       * @description Дата и время закрытия отчёта (окончания выгрузки)
       */
      finished_at: string
      /** @description Идентификатор отчёта (ID) */
      id: number
      /**
       * Format: date-time
       * @description Дата и время создания отчёта (начала выгрузки)
       */
      started_at: string
      /**
       * @description Статус отчёта
       *     - processing – Отчёт в процессе, загрузка ещё не завершена
       *     - success – Загрузка прошла без ошибок
       *     - success_warning – В части объявлений есть ошибки
       *     - error – Загрузка не удалась
       * @enum {string}
       */
      status: 'processing' | 'success' | 'success_warning' | 'error'
    }[]
    /**
     * @description Дерево разделов загрузки с количеством объявлений в каждом разделе.
     *     Структура трёхуровневая: корень (общий итог) → разделы → подразделы.
     *
     *     У корня значения `title="Обработано объявлений"`, `slug="sections_stats"`.
     *     Сами разделы и их `count` зависят от содержимого загрузки.
     *
     *     Для раздела `successful` подкатегории не возвращаются — поле `sections`
     *     всегда содержит пустой массив. Для остальных разделов (например, `error`)
     *     подкатегории возвращаются.
     */
    SectionStatsV4: {
      /** @description Общее количество объявлений */
      count: number
      /** @description Разделы второго уровня */
      sections: {
        /** @description Количество объявлений в разделе */
        count: number
        /** @description Подразделы (третий уровень) */
        sections: {
          /** @description Количество объявлений в подразделе */
          count: number
          /** @description ID подраздела */
          slug: string
          /** @description Название подраздела */
          title: string
        }[]
        /** @description ID раздела */
        slug: string
        /** @description Название раздела */
        title: string
      }[]
      /** @description ID корневого узла */
      slug: string
      /** @description Название корневого узла */
      title: string
    }
    UploadAutoloadV4: {
      /** @description События, относящиеся ко всей загрузке */
      events: components['schemas']['UploadEventV4'][]
      /** @description Список файлов, которые входили в загрузку */
      feed_urls: {
        /** @description Название файла */
        name: string
        /** @description Ссылка на копию файла на момент начала загрузки */
        url: string
      }[]
      /**
       * @description Источник загрузки.
       *     - `Email` — загрузка файла по почте
       *     - `Url` — загрузка файла по ссылке
       *     - `Web` — загрузка файла вручную в профиле Авито
       *     - `OpenAPI` — загрузка по API через [метод `upload`](#operation/upload)
       */
      source?: string | null
      /**
       * Format: date-time
       * @description Время загрузки
       */
      started_at?: string | null
      stats: components['schemas']['SectionStatsV4']
      /**
       * @description Статус загрузки.
       *     - `processing` — загрузка в процессе
       *     - `success` — загрузка завершилась без ошибок
       *     - `success_warning` — загрузка завершилась, в части объявлений есть ошибки
       *     - `error` — загрузка завершилась с ошибкой
       */
      status?: string | null
      /** @description Идентификатор загрузки */
      upload_id: number
    }
    /** @description Событие загрузки (ошибка или предупреждение, относящееся ко всей загрузке) */
    UploadEventV4: {
      /** @description Код события */
      code: number
      /** @description Описание события */
      description: string
      /** @description Тип события */
      type: string
    }
    UploadItemAutoloadV4: {
      /** @description Идентификатор объявления из файла ([параметр Id](https://www.avito.ru/autoload/documentation/templates/66940?fileFormat=xml#field-Id)) */
      ad_id: string
      /**
       * Format: date-time
       * @description Дата окончания оплаченного периода размещения
       */
      avito_date_end?: string | null
      /** @description Идентификатор объявления на Авито */
      avito_id?: number | null
      /**
       * @description Статус объявления на Авито
       *     - `active` — объявление активно
       *     - `old` — срок размещения объявления истёк
       *     - `blocked` — объявление заблокировано
       *     - `rejected` — объявление отклонено для исправления нарушений
       *     - `archived` — объявление находится в архиве
       *     - `removed` — объявление удалено навсегда
       * @enum {string|null}
       */
      avito_status?: 'active' | 'old' | 'blocked' | 'rejected' | 'archived' | 'removed' | null
      /** @description Название файла, из которого было взято объявление */
      feed_name?: string | null
      /** @description Сообщения по объявлению (ошибки, предупреждения) */
      messages: components['schemas']['ItemMessageV4'][]
      section: components['schemas']['ItemSectionV4']
      /** @description Ссылка на объявление на Авито */
      url?: string | null
    }
    UpsertProfileIn: {
      /**
       * @description Согласие с [правилами](https://support.avito.ru/articles/203867776) использования Авито Автозагрузки.
       *
       *     Обязательно, если профиль еще не существует.
       */
      agreement?: boolean | null
      /** @description Статус автозагрузки (вкл/выкл) */
      autoload_enabled: boolean
      /** @description Почта, на которую будут приходить отчеты о выгрузках */
      report_email: string
      schedule: components['schemas']['ExportSchedule']
      /** @description URL-адрес фида, для которого настроены регулярные выгрузки. Должен начинаться с http или https. */
      upload_url: string
    }
    UpsertProfileInV2: {
      /**
       * @description Согласие с [правилами](https://support.avito.ru/articles/203867776) использования Авито Автозагрузки.
       *
       *     Обязательно, если профиль еще не существует.
       */
      agreement?: boolean | null
      /** @description Статус автозагрузки (вкл/выкл) */
      autoload_enabled: boolean
      feeds_data: components['schemas']['FeedsData']
      /** @description Почта, на которую будут приходить отчеты о выгрузках */
      report_email: string
      schedule: components['schemas']['ExportSchedule']
    }
  }
  responses: never
  parameters: {
    /**
     * @description Дата и время последней полученной версии в формате RFC1123 в UTC
     * @example Mon, 01 Jan 0001 00:00:00 UTC
     */
    IfModifiedSinceHeader: string | null
    /**
     * @description slug узла дерева категории
     * @example remont
     */
    NodeSlug: string
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
    /**
     * @description Дата и время последней полученной версии в формате RFC1123 в UTC
     * @example Mon, 01 Jan 0001 00:00:00 UTC
     */
    LastModifiedSinceHeader: string
    /** @description Заголовок говорит нужно ли кэшировать ответ на стороне фронта */
    StoreFrontCacheHeader: string
    /** @description Количество запросов в минуту */
    'X-RateLimit-Limit': number
    /** @description Доступное количество запросов в текущем временном окне */
    'X-RateLimit-Remaining': number
  }
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getProfile: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешное получение данных пользователя */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Статус автозагрузки (вкл/выкл) */
            autoload_enabled: boolean
            /** @description Почта, на которую будут приходить отчеты о выгрузках */
            report_email: string | null
            schedule: components['schemas']['ExportSchedule']
            /** @description URL-адрес фида, для которого настроены регулярные выгрузки. Должен начинаться с http или https. */
            upload_url: string | null
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Профиль не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  createOrUpdateProfile: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['UpsertProfileIn']
      }
    }
    responses: {
      /** @description Успешное обновление настроек профиля */
      200: {
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
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  upload: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Выгрузка файла по ссылке запущена успешно */
      200: {
        headers: {
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
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  userDocsNodeFields: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Дата и время последней полученной версии в формате RFC1123 в UTC
         * @example Mon, 01 Jan 0001 00:00:00 UTC
         */
        'If-Modified-Since'?: components['parameters']['IfModifiedSinceHeader']
      }
      path: {
        /**
         * @description slug узла дерева категории
         * @example remont
         */
        node_slug: components['parameters']['NodeSlug']
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешное получение полей для переданной категории */
      200: {
        headers: {
          'Last-Modified': components['headers']['LastModifiedSinceHeader']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['APIFieldsOut']
        }
      }
      /** @description Вернётся пустой ответ, если дата в заголовке If-Modified-Since раньше даты последней сборки документации. */
      304: {
        headers: {
          'Last-Modified': components['headers']['LastModifiedSinceHeader']
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
          'application/json': {
            /** @description Код ошибки */
            code: number
            /** @description Текст ошибки */
            message: string
          }
        }
      }
      /** @description Ошибка авторизации пользователя */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Код ошибки */
            code: number
            /** @description Текст ошибки */
            message: string
          }
        }
      }
      /** @description Запрашиваемый ресурс не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Код ошибки */
            code: number
            /** @description Текст ошибки */
            message: string
          }
        }
      }
    }
  }
  userDocsTree: {
    parameters: {
      query?: never
      header?: {
        /**
         * @description Дата и время последней полученной версии в формате RFC1123 в UTC
         * @example Mon, 01 Jan 0001 00:00:00 UTC
         */
        'If-Modified-Since'?: components['parameters']['IfModifiedSinceHeader']
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешное получение дерева категорий */
      200: {
        headers: {
          'Last-Modified': components['headers']['LastModifiedSinceHeader']
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['APICategoryTreeOut']
        }
      }
      /** @description Вернётся пустой ответ, если дата в заголовке If-Modified-Since раньше даты последней сборки документации. */
      304: {
        headers: {
          'Last-Modified': components['headers']['LastModifiedSinceHeader']
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Ошибка авторизации пользователя */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Код ошибки */
            code: number
            /** @description Текст ошибки */
            message: string
          }
        }
      }
    }
  }
  getAdIdsByAvitoIds: {
    parameters: {
      query: {
        /**
         * @description Список ID объявлений.
         *     Формат значения: строка с идентификаторами объявлений на Авито, перечисленными через «,» или «|».
         */
        query: string
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
            /** @description Список связанных идентификаторов (ID) объявлений из файла с идентификаторами (ID) на Авито */
            items: {
              /** @description Идентификатор объявления из файла */
              ad_id?: string | null
              /** @description Идентификатор объявления на Авито */
              avito_id: number
            }[]
          }
        }
      }
      /** @description Все ошибки */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getAvitoIdsByAdIds: {
    parameters: {
      query: {
        /**
         * @description Список ID объявлений.
         *     Формат значения: строка с [идентификаторами объявлений из файла](https://autoload.avito.ru/format/realty/#Id),
         *     перечисленными через «,» или «|»
         */
        query: string
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
            /** @description Список связанных идентификаторов (ID) объявлений из файла с идентификаторами (ID) на Авито */
            items: {
              /** @description Идентификатор объявления из файла */
              ad_id: string
              /** @description Идентификатор объявления на Авито */
              avito_id?: number | null
            }[]
          }
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getProfileV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Успешное получение данных пользователя */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Статус автозагрузки (вкл/выкл) */
            autoload_enabled: boolean
            feeds_data: components['schemas']['FeedsData']
            /** @description Почта, на которую будут приходить отчеты о выгрузках */
            report_email: string | null
            schedule: components['schemas']['ExportSchedule']
          }
        }
      }
      /** @description Неверный запрос */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Профиль не найден */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  createOrUpdateProfileV2: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['UpsertProfileInV2']
      }
    }
    responses: {
      /** @description Успешное обновление настроек профиля */
      200: {
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
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getReportsV2: {
    parameters: {
      query?: {
        /** @description Количество отчётов на странице: целое число больше 0 и меньше или равно 200. */
        per_page?: number
        /** @description Номер страницы: целое число больше или равно 0. */
        page?: number
        /**
         * @description Фильтр по дате создания отчёта «от» (от такой-то даты).
         *     Формат значения: RFC3339
         * @example 2022-05-27T14:48:50.52Z
         */
        date_from?: string
        /**
         * @description Фильтр по дате создания отчёта «до» (до такой-то даты).
         *     Формат значения: RFC3339
         * @example 2022-05-27T14:48:50.52Z
         */
        date_to?: string
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
            meta?: components['schemas']['MetaReportsAutoloadV2']
            reports?: components['schemas']['ReportShortAutoloadV2']
          }
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getAutoloadItemsInfoV2: {
    parameters: {
      query: {
        /**
         * @description Идентификаторы объявлений из файла ([параметр Id](https://autoload.avito.ru/format/realty/#Id)).
         *     Формат значения: строка, содержащая от 1 до 100 идентификаторов, перечисленных через «,» или «|».
         */
        query: string
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
            /** @description Список объявлений */
            items: components['schemas']['ItemInfoAutoloadV2'][]
          }
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getLastCompletedReport: {
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
          'application/json': components['schemas']['ReportAutoloadV2']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getReportByIdV2: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор отчёта (ID) */
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
          'application/json': components['schemas']['ReportAutoloadV2']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getReportItemsById: {
    parameters: {
      query?: {
        /** @description Количество объявлений на странице: целое число больше 0 и меньше или равно 200 */
        per_page?: number
        /** @description Номер страницы: целое число больше или равно 0 */
        page?: number
        /**
         * @description Фильтр по ID объявления.
         *     Формат значения: строка с [идентификаторами объявлений из файла](https://autoload.avito.ru/format/realty/#Id)
         *     или идентификаторами объявлений на Авито, перечисленными через «,» или «|».
         */
        query?: string
        /**
         * @description Фильтр объявлений по разделам. Формат значения: строка с идентификаторами разделов, перечисленными через «,» или «|».
         *     Получить список разделов для конкретного отчёта можно с помощью метода
         *     [Статистика по конкретной выгрузке](https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportByIdV3).
         */
        sections?: string
      }
      header?: never
      path: {
        /** @description Идентификатор отчёта (ID) */
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
          'application/json': {
            /** @description Список объявлений */
            items: components['schemas']['ItemInfoReportAutoloadV2'][]
            meta: components['schemas']['MetaReportItemsAutoloadV2']
            /** @description Идентификатор отчёта (ID) */
            report_id: number
          }
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getReportItemsFeesById: {
    parameters: {
      query?: {
        /** @description Количество объявлений на странице: целое число больше 0 и меньше или равно 200 */
        per_page?: number
        /** @description Номер страницы: целое число больше или равно 0 */
        page?: number
        /**
         * @description Фильтр по ID объявления.
         *     Формат значения: строка с [идентификаторами объявлений из файла](https://autoload.avito.ru/format/realty/#Id),
         *     перечисленными через «,» или «|».
         */
        ad_ids?: string
        /**
         * @description Фильтр по AvitoID объявления.
         *     Формат значения: строка с идентификаторами объявлений на Авито, перечисленными через «,» или «|».
         */
        avito_ids?: string
      }
      header?: never
      path: {
        /** @description Идентификатор отчёта (ID) */
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
          'application/json': {
            /** @description Список списаний за размещение объявлений */
            fees?: components['schemas']['ItemFeesInfoReportAutoloadV2'][]
            /** @description Данные пагинации */
            meta: {
              /** @description Номер страницы */
              page?: number
              /** @description Общее количество страниц */
              pages?: number
              /** @description Количество списаний на странице */
              per_page?: number
              /** @description Общее количество списаний в отчёте */
              total?: number
            }
            /** @description Идентификатор отчёта (ID) */
            report_id: number
          }
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getLastCompletedReportV3: {
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
          'application/json': components['schemas']['ReportAutoloadV3']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getReportByIdV3: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Идентификатор отчёта (ID) */
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
          'application/json': components['schemas']['ReportAutoloadV3']
        }
      }
      /** @description Информация об ошибке */
      default: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getUploads: {
    parameters: {
      query?: {
        /** @description Количество загрузок на странице */
        perPage?: number
        /** @description Номер страницы */
        page?: number
        /**
         * @description Фильтр по дате загрузки «от» (от такой-то даты).
         *     Формат значения: RFC3339
         * @example 2026-05-20T10:00:00Z
         */
        dateFrom?: string
        /**
         * @description Фильтр по дате загрузки «до» (до такой-то даты).
         *     Формат значения: RFC3339
         * @example 2026-05-27T10:00:00Z
         */
        dateTo?: string
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
           *         "pages": 5,
           *         "perPage": 10,
           *         "total": 47
           *       },
           *       "uploads": [
           *         {
           *           "events": [],
           *           "feed_urls": [
           *             {
           *               "name": "файл 1",
           *               "url": "https://www.avito.ru/"
           *             }
           *           ],
           *           "source": "OpenAPI",
           *           "started_at": "2026-05-27T08:42:00+03:00",
           *           "stats": {
           *             "count": 0,
           *             "sections": [],
           *             "slug": "sections_stats",
           *             "title": "Обработано объявлений"
           *           },
           *           "status": "processing",
           *           "upload_id": 1234567890
           *         },
           *         {
           *           "events": [
           *             {
           *               "code": 600,
           *               "description": "В ваших файлах суммарно слишком много объявлений — автозагрузка обработает только 100000 из них.",
           *               "type": "warning"
           *             }
           *           ],
           *           "feed_urls": [
           *             {
           *               "name": "файл 1",
           *               "url": "https://www.avito.ru/"
           *             }
           *           ],
           *           "source": "OpenAPI",
           *           "started_at": "2026-05-20T10:15:30+03:00",
           *           "stats": {
           *             "count": 3,
           *             "sections": [
           *               {
           *                 "count": 1,
           *                 "sections": [
           *                   {
           *                     "count": 1,
           *                     "slug": "error_params",
           *                     "title": "Ошибки описания"
           *                   }
           *                 ],
           *                 "slug": "error",
           *                 "title": "Не удалось опубликовать"
           *               },
           *               {
           *                 "count": 2,
           *                 "sections": [],
           *                 "slug": "successful",
           *                 "title": "Успешно опубликовано"
           *               }
           *             ],
           *             "slug": "sections_stats",
           *             "title": "Обработано объявлений"
           *           },
           *           "status": "success_warning",
           *           "upload_id": 1234567889
           *         }
           *       ]
           *     }
           */
          'application/json': {
            meta: components['schemas']['PaginationMetaV4']
            /** @description Список загрузок */
            uploads: components['schemas']['UploadAutoloadV4'][]
          }
        }
      }
      /** @description Невалидные параметры запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Загрузка не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Превышен лимит запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getCurrentUpload: {
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
          /**
           * @example {
           *       "events": [
           *         {
           *           "code": 600,
           *           "description": "В ваших файлах суммарно слишком много объявлений — автозагрузка обработает только 100000 из них.",
           *           "type": "warning"
           *         }
           *       ],
           *       "feed_urls": [
           *         {
           *           "name": "файл 1",
           *           "url": "https://www.avito.ru/"
           *         }
           *       ],
           *       "source": "OpenAPI",
           *       "started_at": "2026-05-20T10:15:30+03:00",
           *       "stats": {
           *         "count": 3,
           *         "sections": [
           *           {
           *             "count": 1,
           *             "sections": [
           *               {
           *                 "count": 1,
           *                 "slug": "error_params",
           *                 "title": "Ошибки описания"
           *               }
           *             ],
           *             "slug": "error",
           *             "title": "Не удалось опубликовать"
           *           },
           *           {
           *             "count": 2,
           *             "sections": [],
           *             "slug": "successful",
           *             "title": "Успешно опубликовано"
           *           }
           *         ],
           *         "slug": "sections_stats",
           *         "title": "Обработано объявлений"
           *       },
           *       "status": "success_warning",
           *       "upload_id": 1234567890
           *     }
           */
          'application/json': components['schemas']['UploadAutoloadV4']
        }
      }
      /** @description Невалидные параметры запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Загрузка не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Превышен лимит запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getCurrentUploadItems: {
    parameters: {
      query?: {
        /**
         * @description Поиск по одному или нескольким [идентификаторам объявлений из файла](https://www.avito.ru/autoload/documentation/templates/66940?fileFormat=xml#field-Id),
         *     перечисленным через «,» или «|».
         *     Без параметра — возвращаются все объявления с пагинацией.
         */
        query?: string
        /**
         * @description Фильтр по разделам отчёта. Формат значения: строка со slug разделов,
         *     перечисленными через запятую.
         */
        sections?: string
        /** @description Количество объявлений на странице */
        perPage?: number
        /** @description Номер страницы */
        page?: number
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
           *       "items": [
           *         {
           *           "ad_id": "ad1",
           *           "avito_date_end": "2026-12-31T23:59:59+03:00",
           *           "avito_id": 777,
           *           "avito_status": "active",
           *           "feed_name": "файл 1",
           *           "messages": [],
           *           "section": {
           *             "slug": "success_activated",
           *             "title": "Активировано"
           *           },
           *           "url": "https://www.avito.ru/"
           *         },
           *         {
           *           "ad_id": "ad2",
           *           "avito_date_end": null,
           *           "avito_id": null,
           *           "avito_status": null,
           *           "feed_name": "файл 1",
           *           "messages": [
           *             {
           *               "code": 4012,
           *               "description": "Для объявлений категории «Недвижимость» поле price обязательно.",
           *               "title": "Не указана цена",
           *               "type": "error",
           *               "updated_at": "2026-05-20T10:15:25+03:00"
           *             }
           *           ],
           *           "section": {
           *             "slug": "error_params",
           *             "title": "Ошибки описания"
           *           },
           *           "url": null
           *         }
           *       ],
           *       "meta": {
           *         "page": 1,
           *         "pages": 73,
           *         "perPage": 20,
           *         "total": 1450
           *       }
           *     }
           */
          'application/json': {
            /** @description Список объявлений */
            items: components['schemas']['UploadItemAutoloadV4'][]
            meta: components['schemas']['PaginationMetaV4']
          }
        }
      }
      /** @description Невалидные параметры запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Загрузка не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Превышен лимит запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getLastSuccessfulUpload: {
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
          /**
           * @example {
           *       "events": [
           *         {
           *           "code": 600,
           *           "description": "В ваших файлах суммарно слишком много объявлений — автозагрузка обработает только 100000 из них.",
           *           "type": "warning"
           *         }
           *       ],
           *       "feed_urls": [
           *         {
           *           "name": "файл 1",
           *           "url": "https://www.avito.ru/"
           *         }
           *       ],
           *       "source": "OpenAPI",
           *       "started_at": "2026-05-20T10:15:30+03:00",
           *       "stats": {
           *         "count": 3,
           *         "sections": [
           *           {
           *             "count": 1,
           *             "sections": [
           *               {
           *                 "count": 1,
           *                 "slug": "error_params",
           *                 "title": "Ошибки описания"
           *               }
           *             ],
           *             "slug": "error",
           *             "title": "Не удалось опубликовать"
           *           },
           *           {
           *             "count": 2,
           *             "sections": [],
           *             "slug": "successful",
           *             "title": "Успешно опубликовано"
           *           }
           *         ],
           *         "slug": "sections_stats",
           *         "title": "Обработано объявлений"
           *       },
           *       "status": "success_warning",
           *       "upload_id": 1234567890
           *     }
           */
          'application/json': components['schemas']['UploadAutoloadV4']
        }
      }
      /** @description Невалидные параметры запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Загрузка не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Превышен лимит запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
  getLastSuccessfulUploadItems: {
    parameters: {
      query?: {
        /**
         * @description Поиск по одному или нескольким [идентификаторам объявлений из файла](https://www.avito.ru/autoload/documentation/templates/66940?fileFormat=xml#field-Id),
         *     перечисленным через «,» или «|».
         *     Без параметра — возвращаются все объявления с пагинацией.
         */
        query?: string
        /**
         * @description Фильтр по разделам отчёта. Формат значения: строка со slug разделов,
         *     перечисленными через запятую.
         */
        sections?: string
        /** @description Количество объявлений на странице */
        perPage?: number
        /** @description Номер страницы */
        page?: number
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
           *       "items": [
           *         {
           *           "ad_id": "ad1",
           *           "avito_date_end": "2026-12-31T23:59:59+03:00",
           *           "avito_id": 777,
           *           "avito_status": "active",
           *           "feed_name": "файл 1",
           *           "messages": [],
           *           "section": {
           *             "slug": "success_activated",
           *             "title": "Активировано"
           *           },
           *           "url": "https://www.avito.ru/"
           *         },
           *         {
           *           "ad_id": "ad2",
           *           "avito_date_end": null,
           *           "avito_id": null,
           *           "avito_status": null,
           *           "feed_name": "файл 1",
           *           "messages": [
           *             {
           *               "code": 4012,
           *               "description": "Для объявлений категории «Недвижимость» поле price обязательно.",
           *               "title": "Не указана цена",
           *               "type": "error",
           *               "updated_at": "2026-05-20T10:15:25+03:00"
           *             }
           *           ],
           *           "section": {
           *             "slug": "error_params",
           *             "title": "Ошибки описания"
           *           },
           *           "url": null
           *         }
           *       ],
           *       "meta": {
           *         "page": 1,
           *         "pages": 73,
           *         "perPage": 20,
           *         "total": 1450
           *       }
           *     }
           */
          'application/json': {
            /** @description Список объявлений */
            items: components['schemas']['UploadItemAutoloadV4'][]
            meta: components['schemas']['PaginationMetaV4']
          }
        }
      }
      /** @description Невалидные параметры запроса */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Доступ запрещён */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Загрузка не найдена */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Превышен лимит запросов */
      429: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Внутренняя ошибка метода API */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
      /** @description Метод API временно недоступен */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldErrorV2']
        }
      }
    }
  }
}
