# @app/support-chat-react

Виджет посетителя и инбокс оператора поверх `@app/support-chat-client`. Свой CSS на переменных `--scw-*`,
UI-кит проекта не нужен.

```tsx
import { SupportInbox, SupportWidget } from '@app/support-chat-react'
import '@app/support-chat-react/styles.css'

<SupportWidget client={visitorClient} assetBaseUrl={apiUrl} />

<SupportInbox
  client={operatorClient}
  operatorId={me.id}
  selectedId={id}
  onSelect={setId}
  onError={showToast}
  assetBaseUrl={apiUrl}
/>
```

Под дизайн проекта — переопределить переменные у `.scw-root` (пример — `apps/frontend/src/entities/support/support-theme.css`).
Тёмная тема — класс `.dark` выше по дереву или `data-theme='dark'`. Тексты — проп `locale` (по умолчанию русский).
