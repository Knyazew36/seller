# @app/marketplaces — клиенты API продавца Wildberries, Ozon, Avito

Переиспользуемое ядро интеграций с площадками. Покрывает **весь** API продавца из официальных OpenAPI-спек (чтение и запись), а не только то, что нужно текущему проекту.

| Площадка             | Разделы  | Операций | Спека                                                        |
| -------------------- | -------- | -------- | ------------------------------------------------------------ |
| Wildberries          | 13       | 308      | `specs/wildberries/*.yaml` — dev.wildberries.ru              |
| Ozon Seller API      | 56 тегов | 483      | `specs/ozon/seller.json` — docs.ozon.ru/api/seller           |
| Ozon Performance API | 7 тегов  | 48       | `specs/ozon/performance.json` — docs.ozon.ru/api/performance |
| Avito                | 27       | 262      | `specs/avito/*.json` — avito.ru/developers/api-catalog       |

Даты, URL и sha256 каждой спеки — в `specs/*/sources.json`.

## Граница «ядро / проект»

Как `apps/server/src/messengers`: пакет не импортирует ничего из приложения (Prisma, `@/common`, сервисы). Хранение и шифрование ключей, привязка к организации, синк в БД — забота проекта. Ключи кабинета передаются при создании клиента, env пакету не нужен.

В отличие от messengers, **общего контракта нет**: у площадок почти нет общего функционала, поэтому у каждой свой клиент в форме её API. Общее — только транспорт в `shared/`: лимиты, ретраи, ошибки, OAuth.

## Входы

| Импорт                          | Что                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| `@app/marketplaces/wildberries` | `WbClientFactory`, разбор токена (`decodeWbToken`, `wbTokenAllows`), типы разделов   |
| `@app/marketplaces/ozon`        | `OzonClientFactory` (Seller + Performance), `checkSellerKey`                         |
| `@app/marketplaces/avito`       | `AvitoClientFactory` (client_credentials, готовый токен или свой `getAccessToken`)   |
| `@app/marketplaces/shared`      | `unwrap`, `MarketplaceApiError`, `RateLimiter`, `MarketplaceLogger`                  |
| `@app/marketplaces/nest`        | `WildberriesModule`, `OzonModule`, `AvitoModule` — фабрики как глобальные провайдеры |

Ядро от Nest не зависит; `@nestjs/common` нужен только для входа `/nest`.

## Использование

```ts
// app.module.ts
imports: [WildberriesModule.forRoot(), OzonModule.forRoot(), AvitoModule.forRoot()]

// сервис
constructor(private readonly wbFactory: WbClientFactory) {}

const wb = this.wbFactory.create({ token })
const sales = unwrap(await wb.reports.GET('/api/v1/supplier/sales', { params: { query: { dateFrom } } }))

const ozon = this.ozonFactory.createSeller({ clientId, apiKey })
const { data, error } = await ozon.POST('/v3/product/list', { body: { filter: {}, limit: 100 } })

const avito = this.avitoFactory.create({ clientId, clientSecret })
const items = unwrap(await avito.item.GET('/core/v1/items'))
```

Пути, параметры, тела и ответы типизированы по спеке: неверный путь или поле — ошибка компиляции.
Без `unwrap` клиент возвращает `{ data, error, response }` (контракт openapi-fetch); `unwrap` бросает `MarketplaceApiError` (`status`, `body`, `isAuthError`, `isRateLimited`).

## Что делает транспорт

- **Хосты.** У WB одна спека описывает несколько хостов: хост берётся из спеки по каждому методу. Тестовый токен WB (поле `t`) сам переключает клиента в песочницу.
- **Лимиты.** Token bucket на ключ «учётка + категория»: интервал и всплеск, как их пишут площадки. WB — из таблицы лимита в описании каждого метода (`generated/operations.ts`). Ozon и Avito общих лимитов в спеках не публикуют: значения по умолчанию в `*.constants.ts`, меняются опциями фабрики.
- **429.** Ждём столько, сколько сказала площадка (`X-Ratelimit-Retry` у WB, `Retry-After`), и повторяем. Лимитер общий на фабрику, поэтому пауза касается всех запросов этой учётки.
- **5xx и сеть.** Повторяем только безопасные методы: WB — `GET` и `x-readonly-method`; Ozon (почти всё POST) — по последнему сегменту пути (`list`, `info`, `get` …), правило меняется опцией `isIdempotent`; Avito — `GET`/`PUT`/`DELETE`.
- **OAuth.** Ozon Performance и Avito: токен client_credentials кэшируется до истечения, при 401 выпускается заново и запрос повторяется один раз.
- **Логи** — через переданный логгер (в Nest-модулях — `Logger` с контекстом `🟣 Wildberries`, `🔵 Ozon`, `🟢 Avito`): `debug` — успешный запрос со временем, `warn` — 4xx, 429 и повторы, `error` — 5xx и сетевые сбои. Ключи, токены и тела запросов в лог не пишутся.

Ограничение: лимитер живёт в памяти процесса. Если API одного кабинета дёргают несколько процессов (pm2 cluster), лимиты надо делить между ними отдельно.

## Обновление спек

```bash
yarn workspace @app/marketplaces specs:fetch:wb   # WB: YAML скачиваются напрямую
yarn workspace @app/marketplaces generate         # типы + operations.ts + отчёт о покрытии
yarn workspace @app/marketplaces build
```

Ozon и Avito закрыты антиботом — спеки качаются из браузера на странице документации:

- Ozon: `fetch('/api/seller/swagger.json?' + Date.now())` и `/api/performance/swagger.json` на docs.ozon.ru → `specs/ozon/seller.json`, `performance.json`;
- Avito: `fetch('/web/1/openapi/list')`, затем `/web/1/openapi/info/<slug>` (поле `swagger`) на avito.ru/developers → `specs/avito/<slug>.json`.

После обновления — обновить `sources.json` (дата, sha256) и пересобрать. Файлы в `src/*/generated` руками не правим.

Генератор исправляет дефекты спек в памяти, файлы спек не трогает: повторяющиеся `operationId` (у Avito `cpa`) и заголовки авторизации (`Client-Id`, `Api-Key`, `Authorization`), которые в спеках объявлены параметрами каждого метода, а на деле их ставит клиент.

## Проверка

```bash
node packages/marketplaces/scripts/smoke.mjs
```

Без ключей поднимает Nest-модули и шлёт запросы с фиктивными ключами — каждая площадка должна ответить ошибкой авторизации. С ключами в env (`WB_TOKEN`, `OZON_CLIENT_ID` + `OZON_API_KEY`, `AVITO_CLIENT_ID` + `AVITO_CLIENT_SECRET`) делает настоящие чтения.
