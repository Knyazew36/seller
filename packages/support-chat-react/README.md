# @app/support-chat-react

Виджет посетителя и инбокс оператора поверх `@app/support-chat-client`. Свой CSS на переменных `--scw-*`,
UI-кит приложения и Tailwind у проекта не нужны.

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

Тёмная тема — класс `.dark` выше по дереву или `data-theme='dark'`. Тексты — проп `locale` (по умолчанию русский).

## Тема

Под дизайн приложения — переопределить переменные у `.scw-root`, удобнее всего сославшись на токены своей темы:

```css
@import '@app/support-chat-react/styles.css';

.scw-root {
  --scw-font: var(--font-sans);
  --scw-bg: var(--background);
  --scw-text: var(--foreground);
  --scw-accent: var(--primary);
}

/* Кнопка чата не должна перекрывать нижнее меню на мобильном */
@media (max-width: 767px) {
  .scw-widget {
    --scw-offset-bottom: 96px;
  }
}
```

| Переменные | Что |
| --- | --- |
| `--scw-font`, `--scw-radius`, `--scw-radius-bubble`, `--scw-shadow` | шрифт, скругления, тень |
| `--scw-bg`, `--scw-surface`, `--scw-border`, `--scw-text`, `--scw-muted` | фон, подложки, границы, текст |
| `--scw-accent`, `--scw-accent-text` | плавающая кнопка чата, фокус, «прочитано», «печатает…» |
| `--scw-action`, `--scw-action-text` | кнопка отправки, активная вкладка |
| `--scw-own-bubble`, `--scw-own-text`, `--scw-other-bubble`, `--scw-other-text` | свои и чужие сообщения |
| `--scw-note-bubble`, `--scw-note-text` | внутренние заметки операторов |
| `--scw-danger`, `--scw-success` | ошибки, успех |
| `--scw-offset-bottom`, `--scw-offset-side` | отступ плавающей кнопки от края экрана |

## Разработка стилей

Разметка — на Tailwind v4 с префиксом `scw:` (`scw:flex`, `scw:hover:bg-surface`), точка входа — `src/styles.css`.
`yarn build` собирает из неё `dist/styles.css` (`yarn dev` — то же в watch), проект подключает только готовый файл.

- Префикс и утилиты без `@layer` — чтобы классы и стили чужого сайта не задевали чат, и наоборот.
- Цвета в разметке — только токены темы (`scw:bg-surface`, `scw:text-muted`), они смотрят на `--scw-*`. Хексы — лишь
  там, где цвет не должен зависеть от темы проекта.
- Размеры в px (`--spacing: 4px`), не rem: у чужого сайта может быть любой размер шрифта у `html`.
- Две утилиты одного свойства на одном элементе (`scw:bg-action` и `scw:bg-transparent`) не смешиваем — победит не
  последняя в `className`, а последняя в CSS. Варианты кнопок — целиком, см. `src/ui.ts`.

