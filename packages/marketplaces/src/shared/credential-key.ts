import { createHash } from 'node:crypto'

/** Короткий отпечаток секрета — для ключей лимитов и кэшей. Сам секрет в ключах и логах не держим. */
export function credentialKey(secret: string): string {
  return createHash('sha256').update(secret).digest('hex').slice(0, 16)
}
