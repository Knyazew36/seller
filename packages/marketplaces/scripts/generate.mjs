// Генерирует типы и метаданные операций из спек в specs/ → src/<площадка>/generated.
// Сгенерированные файлы руками не правим: обновили спеку — перезапустили `yarn generate`.
import { readdir, readFile, rm, mkdir, writeFile } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import openapiTS, { astToString } from 'openapi-typescript'
import { parse as parseYaml } from 'yaml'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SPECS = join(root, 'specs')
const SRC = join(root, 'src')
const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete']

const HEADER = '// Сгенерировано scripts/generate.mjs из specs/. Не править руками.\n/* eslint-disable */\n'

// ── Общее ──────────────────────────────────────────────────────────────────

async function loadSpec(file) {
  const text = await readFile(file, 'utf8')
  return file.endsWith('.json') ? JSON.parse(text) : parseYaml(text)
}

function operations(spec) {
  const ops = []
  for (const [path, item] of Object.entries(spec.paths ?? {})) {
    for (const method of HTTP_METHODS) {
      if (item[method]) ops.push({ path, method, op: item[method], item })
    }
  }
  return ops
}

/** Имя раздела в коде: "03-orders-fbs" → "ordersFbs", "order-management" → "orderManagement" */
function camel(name) {
  return name
    .replace(/^\d+-/, '')
    .replace(/[-_]+(\w)/g, (_, c) => c.toUpperCase())
}

/** В спеках площадок встречаются повторяющиеся operationId — генератор их не принимает, дописываем метод и путь */
function dedupeOperationIds(spec) {
  const seen = new Set()
  for (const { path, method, op } of operations(spec)) {
    if (!op.operationId) continue
    if (seen.has(op.operationId)) {
      const suffix = `${method}_${path}`.replace(/[^a-zA-Z0-9]+/g, '_')
      console.warn(`⚠️ повтор operationId «${op.operationId}» → ${method.toUpperCase()} ${path}`)
      op.operationId = `${op.operationId}_${suffix}`
    }
    seen.add(op.operationId)
  }
  return spec
}

// Заголовки авторизации ставит клиент — в типах вызова им не место, иначе их пришлось бы передавать в каждом вызове
const AUTH_HEADERS = new Set(['client-id', 'api-key', 'authorization'])

function stripAuthHeaders(spec) {
  const resolve = (p) => (p?.$ref ? spec.components?.parameters?.[p.$ref.split('/').pop()] : p)
  const keep = (p) => {
    const param = resolve(p)
    return !(param?.in === 'header' && AUTH_HEADERS.has(String(param.name).toLowerCase()))
  }
  for (const item of Object.values(spec.paths ?? {})) {
    if (Array.isArray(item.parameters)) item.parameters = item.parameters.filter(keep)
    for (const method of HTTP_METHODS) {
      if (Array.isArray(item[method]?.parameters)) item[method].parameters = item[method].parameters.filter(keep)
    }
  }
}

async function writeTypes(spec, outFile) {
  dedupeOperationIds(spec)
  stripAuthHeaders(spec)
  const ast = await openapiTS(spec, { alphabetize: false })
  await writeFile(outFile, HEADER + astToString(ast))
}

async function resetDir(dir) {
  await rm(dir, { recursive: true, force: true })
  await mkdir(dir, { recursive: true })
}

const report = []

// ── Wildberries ────────────────────────────────────────────────────────────

const UNIT_MS = { мс: 1, сек: 1000, с: 1000, мин: 60_000, ч: 3_600_000, час: 3_600_000 }

/** "600 мс" / "1 мин" / "20 сек" → миллисекунды */
function toMs(value) {
  const m = String(value).trim().match(/^([\d.,]+)\s*([а-яё]+)/i)
  if (!m) return undefined
  const unit = Object.keys(UNIT_MS).find((u) => m[2].toLowerCase().startsWith(u))
  return unit ? Math.round(parseFloat(m[1].replace(',', '.')) * UNIT_MS[unit]) : undefined
}

/**
 * Лимит из таблицы в описании метода WB: берём первую строку данных.
 * Колонки: [Тип] | Период | Лимит | Интервал | Всплеск. Интервал — пауза между запросами, всплеск — запас подряд.
 */
function parseWbLimit(description = '') {
  const lines = description.split('\n').map((l) => l.trim())
  const headerIdx = lines.findIndex((l) => /^\|.*Период.*\|.*Интервал.*\|.*Всплеск/.test(l))
  if (headerIdx < 0) return undefined
  const header = lines[headerIdx].split('|').map((c) => c.trim()).filter(Boolean)
  const row = lines.slice(headerIdx + 1).find((l) => l.startsWith('|') && !/^\|\s*-/.test(l))
  if (!row) return undefined
  const cells = row.split('|').map((c) => c.trim()).filter(Boolean)
  const intervalMs = toMs(cells[header.indexOf('Интервал')])
  const burst = parseInt(cells[header.indexOf('Всплеск')], 10)
  if (!intervalMs || !burst) return undefined
  return { intervalMs, burst }
}

async function generateWildberries() {
  const outDir = join(SRC, 'wildberries', 'generated')
  await resetDir(outDir)
  const files = (await readdir(join(SPECS, 'wildberries'))).filter((f) => f.endsWith('.yaml')).sort()
  const sections = []

  for (const file of files) {
    const spec = await loadSpec(join(SPECS, 'wildberries', file))
    const name = basename(file, '.yaml')
    const section = camel(name)
    await writeTypes(spec, join(outDir, `${name}.ts`))

    const meta = {}
    let withoutHost = 0
    let withoutLimit = 0
    for (const { path, method, op, item } of operations(spec)) {
      const servers = op.servers ?? item.servers ?? spec.servers ?? []
      const prod = servers.find((s) => !/sandbox/i.test(s.url))?.url
      const sandbox = servers.find((s) => /sandbox/i.test(s.url))?.url
      if (!prod) withoutHost++
      const limit = parseWbLimit(op.description)
      if (!limit) withoutLimit++
      meta[`${method.toUpperCase()} ${path}`] = {
        host: prod,
        ...(sandbox ? { sandboxHost: sandbox } : {}),
        category: op['x-category'],
        readonly: op['x-readonly-method'] === true,
        ...(limit ? { limit } : {}),
      }
    }
    sections.push({ name, section, meta, title: spec.info?.title })
    report.push({ mp: 'wildberries', name, ops: Object.keys(meta).length, withoutHost, withoutLimit })
  }

  // Карта операций: хост, категория токена, признак «только чтение» и лимит — для middleware клиента
  const opsFile =
    HEADER +
    `import type { WbOperationMeta } from '../wb.types'\n\n` +
    sections
      .map(
        (s) =>
          `/** ${s.title} */\nexport const ${s.section}Operations: Record<string, WbOperationMeta> = ${JSON.stringify(s.meta, null, 2)}\n`,
      )
      .join('\n')
  await writeFile(join(outDir, 'operations.ts'), opsFile)

  const index =
    HEADER +
    sections.map((s) => `export type { paths as ${s.section}Paths, components as ${s.section}Components } from './${s.name}'`).join('\n') +
    `\nexport * from './operations'\n\n` +
    `/** Разделы API WB: ключ клиента → файл спеки */\nexport const WB_SECTIONS = ${JSON.stringify(Object.fromEntries(sections.map((s) => [s.section, s.title])), null, 2)} as const\n`
  await writeFile(join(outDir, 'index.ts'), index)
}

// ── Ozon ───────────────────────────────────────────────────────────────────

async function generateOzon() {
  const outDir = join(SRC, 'ozon', 'generated')
  await resetDir(outDir)
  const lines = []
  for (const name of ['seller', 'performance']) {
    const spec = await loadSpec(join(SPECS, 'ozon', `${name}.json`))
    await writeTypes(spec, join(outDir, `${name}.ts`))
    lines.push(`export type { paths as ${name}Paths, components as ${name}Components } from './${name}'`)
    const tags = new Set(operations(spec).flatMap((o) => o.op.tags ?? []))
    report.push({ mp: 'ozon', name, ops: operations(spec).length, sections: tags.size })
  }
  await writeFile(join(outDir, 'index.ts'), HEADER + lines.join('\n') + '\n')
}

// ── Avito ──────────────────────────────────────────────────────────────────

async function generateAvito() {
  const outDir = join(SRC, 'avito', 'generated')
  await resetDir(outDir)
  const files = (await readdir(join(SPECS, 'avito'))).filter((f) => f.endsWith('.json') && f !== 'sources.json').sort()
  const sections = []
  for (const file of files) {
    const spec = await loadSpec(join(SPECS, 'avito', file))
    const name = basename(file, '.json')
    const section = camel(name)
    await writeTypes(spec, join(outDir, `${name}.ts`))
    const host = (spec.servers?.[0]?.url ?? 'https://api.avito.ru/').replace(/\/+$/, '')
    const schemes = Object.keys(spec.components?.securitySchemes ?? {})
    sections.push({ name, section, host, title: spec.info?.title, schemes })
    report.push({ mp: 'avito', name, ops: operations(spec).length, host })
  }
  const index =
    HEADER +
    sections.map((s) => `export type { paths as ${s.section}Paths, components as ${s.section}Components } from './${s.name}'`).join('\n') +
    `\n\n/** Разделы API Avito: хост и схемы авторизации из спеки */\nexport const AVITO_SECTIONS = ${JSON.stringify(
      Object.fromEntries(sections.map((s) => [s.section, { title: s.title, host: s.host, securitySchemes: s.schemes }])),
      null,
      2,
    )} as const\n`
  await writeFile(join(outDir, 'index.ts'), index)
}

// ── Запуск ─────────────────────────────────────────────────────────────────

await generateWildberries()
await generateOzon()
await generateAvito()

console.table(report)
const total = report.reduce((n, r) => n + r.ops, 0)
console.log(`Всего операций: ${total}`)
const broken = report.filter((r) => r.withoutHost)
if (broken.length) {
  console.error('❌ У операций WB нет хоста:', broken)
  process.exit(1)
}
