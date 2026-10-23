# @app/support-chat-core

Общий контракт чата поддержки для сервера и браузера: типы (`SupportMessage`, `SupportConversation`, …),
события socket.io (`SupportServerToClientEvents`, `SupportClientToServerEvents`), лимиты (`SUPPORT_LIMITS`).
Без зависимостей. Сборка двойная: CJS для Node (`require`), ESM для бандлеров (`import`).

Описание всего комплекта — в README пакета `@app/support-chat-nest`.
