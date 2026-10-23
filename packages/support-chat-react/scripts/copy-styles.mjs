// tsc не копирует CSS — кладём стили рядом со сборкой (экспорт @app/support-chat-react/styles.css)
import { copyFileSync } from 'node:fs'

copyFileSync(new URL('../src/styles.css', import.meta.url), new URL('../dist/styles.css', import.meta.url))
