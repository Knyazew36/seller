# @app/support-chat-nest

Чат поддержки для NestJS: REST посетителя и операторов, socket.io-неймспейс `/support`, сервисы.
Всё проектное — хранилище, авторизация, файлы, оповещения — приходит через порты. Пакеты комплекта:

| Пакет | Где | Что |
| --- | --- | --- |
| `@app/support-chat-core` | сервер + браузер | типы, события сокета, лимиты |
| `@app/support-chat-nest` | сервер | этот модуль |
| `@app/support-chat-client` | браузер | headless SDK: REST, сокет, лента с очередью отправки |
| `@app/support-chat-react` | браузер | виджет посетителя и инбокс оператора |

## Подключение

1. Схема БД — скопировать `prisma/support.prisma` в схему проекта, сделать миграцию.
2. Реализовать порты (пример — `apps/server/src/support/adapters` в seller-app):

| Порт | Что делает |
| --- | --- |
| `SupportStore` | хранение; «не найдено» — `null`, `appendMessage` выдаёт `seq` под блокировкой строки диалога и не создаёт дубль по `clientMessageId` |
| `SupportIdentity` | кто посетитель (необязательная авторизация проекта), кто оператор, оператор по id |
| `SupportFileStorage` | настройки multer, проверка файла, перенос из временной папки, публичный URL |
| `SupportNotifier` | необязательный: оповещения вне чата (мессенджеры, почта) |

3. Подключить в `AppModule`:

```ts
SupportChatModule.forRoot({
  workspaceKey: 'my-app',
  secret: process.env.SUPPORT_CHAT_SECRET!, // ≥ 32 символов — подпись токенов визита
  identitySecret: process.env.SUPPORT_IDENTITY_SECRET, // вход с подписью пользователя на чужом сайте
  allowedOrigins: origin => allowed.includes(origin), // проверка origin сокета
  store: PrismaSupportStore,
  identity: AppSupportIdentity,
  files: AppSupportFileStorage,
  notifier: AppSupportNotifier,
  authGuard: MultiAuthGuard, // guard проекта, кладущий пользователя в req.user
  imports: [UploadModule],
})
```

4. CORS проекта: разрешить заголовок `x-support-visit`. nginx: для `/socket.io/` нужны `Upgrade`/`Connection`.

Ответы описаны в Swagger с конвертом `{ status, data, timestamp }` (`SupportApi`); если в проекте конверта нет — поправить декоратор.

## Транспорт

Мутации — REST `POST`, события — socket.io (только `websocket`, без sticky-сессий). Сокет — подсказка
«что-то изменилось»; пропущенное при обрыве клиент добирает `GET message/list?afterSeq=`.

| Посетитель (`x-support-visit`) | |
| --- | --- |
| `POST support/session` | вход: аноним по `anonymousKey`, пользователь проекта по его авторизации или `userId` + `userHash` |
| `GET support/conversation/current` | текущий незакрытый диалог |
| `GET support/message/list` | история: `beforeSeq` — вверх, `afterSeq` — добор |
| `POST support/message/create` | multipart: `text`, `clientMessageId`, `files[]` |
| `POST support/message/update/:id`, `delete/:id` | свои, 15 минут |
| `POST support/conversation/read`, `rate` | прочтение до `seq`, оценка 1–5 |

| Оператор (`authGuard` + `SupportIdentity.resolveOperator`) | |
| --- | --- |
| `support/operator/conversation/*` | `create`, `list` (`filter_status`, `filter_assignee`, `filter_channel`, `search`, `add_contact`, `add_last_message`), `:id`, `update/:id`, `delete/:id`, `assign/:id`, `close/:id`, `reopen/:id`, `read` |
| `support/operator/message/*` | `create` (+ `isInternalNote`), `list`, `:id`, `update/:id`, `delete/:id` |

Сокет: `handshake.auth.visitToken` (посетитель) или `handshake.auth.authorization` — заголовок Authorization проекта целиком (оператор).
События — `SupportServerToClientEvents` в `@app/support-chat-core`. Заметки операторов посетителю не уходят.

Доменные события (`SupportEvents.stream`) экспортируются — на них подписываются мосты в мессенджеры.
