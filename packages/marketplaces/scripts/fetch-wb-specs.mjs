// Скачивает официальные OpenAPI-спеки Wildberries (русская версия) в specs/wildberries.
// Документация WB за антиботом, но сами YAML отдаются напрямую.
import { createHash } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE = 'https://dev.wildberries.ru/api/swagger/yaml/ru'
export const WB_SPECS = [
  '01-general',
  '02-items',
  '03-orders-fbs',
  '04-orders-dbw',
  '05-dbs',
  '06-in-store-pickup',
  '07-orders-fbw',
  '08-promotion',
  '09-communications',
  '10-rates',
  '11-analytics',
  '12-reports',
  '13-finances',
]

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'specs', 'wildberries')
await mkdir(outDir, { recursive: true })

const date = new Date().toISOString().slice(0, 10)
const rows = []
for (const name of WB_SPECS) {
  const url = `${BASE}/${name}.yaml`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  const text = await res.text()
  await writeFile(join(outDir, `${name}.yaml`), text)
  const sha = createHash('sha256').update(text).digest('hex')
  rows.push({ file: `wildberries/${name}.yaml`, url, date, sha256: sha, bytes: text.length })
  console.log(`✅ ${name}.yaml ${text.length} байт`)
}
await writeFile(join(outDir, 'sources.json'), JSON.stringify(rows, null, 2) + '\n')
