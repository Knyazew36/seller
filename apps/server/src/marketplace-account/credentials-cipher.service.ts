import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from 'node:crypto';

import {
  Injectable,
  InternalServerErrorException,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ENTITY_EMOJI } from '@/common/utils';

const VERSION = 'v1';
const ALGORITHM = 'aes-256-gcm';
const IV_BYTES = 12;

/**
 * Шифрование учётных данных площадок в БД: AES-256-GCM, ключ из MARKETPLACE_CREDENTIALS_KEY.
 * Формат строки: v1:<iv>:<tag>:<шифротекст> (base64). Версия — чтобы позже сменить ключ без потери старых записей.
 */
@Injectable()
export class CredentialsCipherService implements OnModuleInit {
  private readonly logger = new Logger(
    `${ENTITY_EMOJI.marketplaceAccount} ${CredentialsCipherService.name}`,
  );
  private readonly key?: Buffer;

  constructor(config: ConfigService) {
    const raw = config.get<string>('MARKETPLACE_CREDENTIALS_KEY');
    this.key = raw ? Buffer.from(raw, 'base64') : undefined;
  }

  public onModuleInit(): void {
    if (!this.key) {
      this.logger.warn(
        'MARKETPLACE_CREDENTIALS_KEY не задан — подключить кабинет площадки нельзя',
      );
    }
  }

  // ── Шифрование ──────────────────────────────────────────────────────────

  public encrypt(payload: object): string {
    const key = this.requireKey();
    const iv = randomBytes(IV_BYTES);
    const cipher = createCipheriv(ALGORITHM, key, iv);
    const data = Buffer.concat([
      cipher.update(JSON.stringify(payload), 'utf8'),
      cipher.final(),
    ]);
    const tag = cipher.getAuthTag();
    return [VERSION, iv, tag, data].map(toBase64).join(':');
  }

  public decrypt<T>(value: string): T {
    const key = this.requireKey();
    const [version, iv, tag, data] = value.split(':');
    if (version !== VERSION || !iv || !tag || !data) {
      throw new InternalServerErrorException(
        'Учётные данные кабинета повреждены',
      );
    }
    try {
      const decipher = createDecipheriv(
        ALGORITHM,
        key,
        Buffer.from(iv, 'base64'),
      );
      decipher.setAuthTag(Buffer.from(tag, 'base64'));
      const text = Buffer.concat([
        decipher.update(Buffer.from(data, 'base64')),
        decipher.final(),
      ]).toString('utf8');
      return JSON.parse(text) as T;
    } catch (error) {
      // Чаще всего — сменили MARKETPLACE_CREDENTIALS_KEY: старые записи этим ключом не открыть
      this.logger.error(
        'Не удалось расшифровать учётные данные кабинета',
        (error as Error).stack,
      );
      throw new InternalServerErrorException(
        'Не удалось прочитать ключ кабинета — подключите кабинет заново',
      );
    }
  }

  /** Отпечаток учётных данных: сравнить «тот же ключ или новый», не расшифровывая */
  public fingerprint(payload: object): string {
    return createHash('sha256').update(JSON.stringify(payload)).digest('hex');
  }

  // ── Внутреннее ──────────────────────────────────────────────────────────

  private requireKey(): Buffer {
    if (!this.key) {
      throw new InternalServerErrorException(
        'На сервере не настроено хранение ключей площадок (MARKETPLACE_CREDENTIALS_KEY)',
      );
    }
    return this.key;
  }
}

function toBase64(value: string | Buffer): string {
  return typeof value === 'string' ? value : value.toString('base64');
}
