# @app/support-chat-client

Headless SDK чата поддержки для браузера — без фреймворка, UI подписывается на `store`. Сервер — `@app/support-chat-nest`.

```ts
const visitor = new SupportVisitorClient({
  baseUrl: 'https://api.example.com/api',
  getAuthorization: () => (token ? `Bearer ${token}` : null), // залогиненный пользователь попадёт в чат под своим аккаунтом
})
await visitor.start()
visitor.store.subscribe(() => render(visitor.store.getState(), visitor.timeline.store.getState()))
visitor.send('Здравствуйте', files)

const operator = new SupportOperatorClient({ baseUrl, getAuthorization })
operator.connect()
const conversation = operator.openConversation(42) // своя лента и действия; закрыть — conversation.dispose()
```

Надёжность:

- **очередь отправки**: сообщение сразу в ленте (`localStatus: 'sending'`), уходит по одному, при сбое сети повторяется
  с тем же `clientMessageId` — сервер не создаст дубль; на 4xx — `failed` с кнопками «повторить/удалить».
  Текстовые сообщения очереди переживают перезагрузку страницы (localStorage), файлы — только в памяти;
- **синхронизация по `seq`**: после переподключения и при пропуске в `seq` лента добирает `afterSeq`;
- **переподключение** с нарастающей задержкой и разбросом; при возврате на вкладку и появлении сети — сразу.
