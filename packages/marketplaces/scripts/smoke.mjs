// Смоук-проверка пакета. Без ключей: поднимает Nest-модули и делает запросы с фиктивными ключами — ждём 401/403.
// С ключами из env (WB_TOKEN, OZON_CLIENT_ID + OZON_API_KEY, AVITO_CLIENT_ID + AVITO_CLIENT_SECRET) — реальные чтения.
// Запуск из корня репозитория: node packages/marketplaces/scripts/smoke.mjs
import 'reflect-metadata'

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { Logger, Module } = require('@nestjs/common')
const { NestFactory } = require('@nestjs/core')
const { AvitoModule, OzonModule, WildberriesModule } = require('../dist/nest')
const { WbClientFactory, decodeWbToken } = require('../dist/wildberries')
const { OzonClientFactory } = require('../dist/ozon')
const { AvitoClientFactory } = require('../dist/avito')
const { MarketplaceApiError, unwrap } = require('../dist/shared')

class SmokeModule {}
Module({ imports: [WildberriesModule.forRoot(), OzonModule.forRoot(), AvitoModule.forRoot()] })(SmokeModule)

const app = await NestFactory.createApplicationContext(SmokeModule, { logger: ['error', 'warn', 'log', 'debug'] })
const log = new Logger('🧪 Smoke')
const wbFactory = app.get(WbClientFactory)
const ozonFactory = app.get(OzonClientFactory)
const avitoFactory = app.get(AvitoClientFactory)
log.log('Nest-модули поднялись, фабрики получены')

const results = []
async function check(name, fn) {
  const startedAt = Date.now()
  try {
    const value = await fn()
    results.push({ name, result: 'ok', detail: String(value).slice(0, 80), ms: Date.now() - startedAt })
  } catch (error) {
    const detail = error instanceof MarketplaceApiError ? `${error.isAuthError ? 'auth ' : ''}${error.message}` : error.message
    results.push({ name, result: 'error', detail: detail.slice(0, 120), ms: Date.now() - startedAt })
  }
}

// Фиктивный JWT в формате WB: категории «Статистика» и «Тарифы» не важны — WB должен ответить 401
const fakeWbToken = ['e30', Buffer.from(JSON.stringify({ s: 2 ** 5 + 2 ** 30, acc: 1, exp: 4102444800 })).toString('base64url'), 'x'].join('.')
log.log(`Разбор фиктивного токена WB: ${JSON.stringify(decodeWbToken(fakeWbToken))}`)

const wb = wbFactory.create({ token: process.env.WB_TOKEN ?? fakeWbToken })
await check('WB general GET /ping', async () => JSON.stringify(unwrap(await wb.general.GET('/ping'))))
await check('WB tariffs GET /api/v1/tariffs/commission', async () =>
  Object.keys(unwrap(await wb.tariffs.GET('/api/v1/tariffs/commission', { params: { query: { locale: 'ru' } } }))).join(','),
)

const ozonCreds = { clientId: process.env.OZON_CLIENT_ID ?? '1', apiKey: process.env.OZON_API_KEY ?? 'fake' }
await check('Ozon seller POST /v1/roles', async () => JSON.stringify(await ozonFactory.checkSellerKey(ozonCreds)))

const avitoCreds = { clientId: process.env.AVITO_CLIENT_ID ?? 'fake', clientSecret: process.env.AVITO_CLIENT_SECRET ?? 'fake' }
await check('Avito POST /token', async () => (await avitoFactory.issueToken(avitoCreds)).slice(0, 6) + '…')

console.table(results)
await app.close()
