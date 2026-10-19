import { MarketplaceApiError, unwrap } from '@app/marketplaces/shared';
import { AvitoClientFactory } from '@app/marketplaces/avito';
import { OzonClientFactory } from '@app/marketplaces/ozon';
import {
  decodeWbToken,
  missingWbCategories,
  WB_TOKEN_CATEGORY_TITLES,
  WbClientFactory,
  type WbTokenCategory,
  type WbTokenInfo,
} from '@app/marketplaces/wildberries';
import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';

import { ENTITY_EMOJI } from '@/common/utils';
import { Marketplace } from '@/generated/prisma/client';

import {
  type AvitoCredentials,
  MARKETPLACE_TITLES,
  type MarketplaceCredentials,
  type OzonCredentials,
  type VerifiedCredentials,
  type WildberriesCredentials,
} from './model/marketplace-credentials';

/**
 * Категории токена WB, без которых сервис не посчитает прибыль и не найдёт удержания
 * (бизнес-ТЗ, раздел 4) [решение по умолчанию: точный список — в техническом ТЗ].
 * Тарифы и «Общее» доступны токену любой категории.
 */
const WB_REQUIRED_CATEGORIES: WbTokenCategory[] = [
  'content',
  'contentanalytics',
  'discountsandprices',
  'marketplace',
  'statistics',
  'advert',
  'questionsandfeedback',
  'supplies',
  'finance',
];

/** Проверяет ключ у площадки и достаёт ID кабинета. Ничего не сохраняет. */
@Injectable()
export class MarketplaceCredentialsVerifier {
  private readonly logger = new Logger(
    `${ENTITY_EMOJI.marketplaceAccount} ${MarketplaceCredentialsVerifier.name}`,
  );

  constructor(
    private readonly wbFactory: WbClientFactory,
    private readonly ozonFactory: OzonClientFactory,
    private readonly avitoFactory: AvitoClientFactory,
  ) {}

  /** Ключ не подходит → BadRequestException с причиной для продавца; площадка недоступна → 503 */
  public async verify(
    input: MarketplaceCredentials,
  ): Promise<VerifiedCredentials> {
    try {
      switch (input.marketplace) {
        case Marketplace.WILDBERRIES:
          return await this.verifyWildberries(input.credentials);
        case Marketplace.OZON:
          return await this.verifyOzon(input.credentials);
        case Marketplace.AVITO:
          return await this.verifyAvito(input.credentials);
      }
    } catch (error) {
      throw this.toHttpError(input.marketplace, error);
    }
  }

  // ── Площадки ────────────────────────────────────────────────────────────

  private async verifyWildberries(
    credentials: WildberriesCredentials,
  ): Promise<VerifiedCredentials> {
    let info: WbTokenInfo;
    try {
      info = decodeWbToken(credentials.token);
    } catch {
      throw new BadRequestException(
        'Это не токен WB: скопируйте его целиком из «Настройки» → «Доступ к API»',
      );
    }
    if (info.expired) {
      throw new BadRequestException(
        'Срок действия токена WB истёк — создайте новый',
      );
    }
    if (info.sandbox) {
      throw new BadRequestException(
        'Это тестовый токен WB — для подключения кабинета нужен боевой',
      );
    }
    // Сервис только читает данные: токен с правом записи не принимаем, чтобы продавцу не было страшно его отдавать
    if (!info.readOnly) {
      throw new BadRequestException(
        'Создайте токен с отметкой «Только на чтение» — менять данные в кабинете сервису не нужно',
      );
    }
    const missing = missingWbCategories(info, WB_REQUIRED_CATEGORIES);
    if (missing.length) {
      const titles = missing.map((c) => WB_TOKEN_CATEGORY_TITLES[c]).join(', ');
      throw new BadRequestException(
        `Токену не хватает категорий: ${titles}. Создайте токен заново и отметьте их`,
      );
    }

    // Разбор токена ничего не говорит о том, не отозван ли он — спрашиваем саму WB
    const wb = this.wbFactory.create({ token: credentials.token });
    unwrap(await wb.general.GET('/ping'));

    const externalId = info.sellerId ?? info.id;
    if (!externalId) {
      throw new BadRequestException(
        'В токене WB нет ID продавца — создайте токен заново',
      );
    }
    this.logger.log(
      `WB: токен принят, продавец ${externalId}, тип ${info.type}`,
    );
    return {
      externalId,
      keyExpiresAt: info.expiresAt ?? null,
      keyInfo: {
        type: info.type,
        readOnly: info.readOnly,
        categories: info.categories,
      },
    };
  }

  private async verifyOzon(
    credentials: OzonCredentials,
  ): Promise<VerifiedCredentials> {
    const key = await this.ozonFactory.checkSellerKey(credentials);
    this.logger.log(
      `Ozon: ключ принят, Client-Id ${credentials.clientId}, ролей ${key.roles.length}`,
    );
    return {
      externalId: credentials.clientId,
      keyExpiresAt: key.expiresAt ?? null,
      keyInfo: { roles: key.roles.map((r) => r.name) },
    };
  }

  private async verifyAvito(
    credentials: AvitoCredentials,
  ): Promise<VerifiedCredentials> {
    await this.avitoFactory.issueToken(credentials);
    this.logger.log(`Avito: ключи приняты, client_id ${credentials.clientId}`);
    return {
      externalId: credentials.clientId,
      keyExpiresAt: null,
      keyInfo: {},
    };
  }

  // ── Ошибки ──────────────────────────────────────────────────────────────

  private toHttpError(marketplace: Marketplace, error: unknown): Error {
    if (!(error instanceof MarketplaceApiError)) {
      if (error instanceof BadRequestException) return error;
      this.logger.error(
        `${marketplace}: проверка ключа упала`,
        (error as Error).stack,
      );
      return new ServiceUnavailableException(
        `${MARKETPLACE_TITLES[marketplace]} не ответил — попробуйте через пару минут`,
      );
    }
    if (error.isAuthError) {
      this.logger.warn(`${marketplace}: ключ отклонён, ${error.status}`);
      const reason = error.reason ? ` Ответ площадки: «${error.reason}»` : '';
      return new BadRequestException(
        `${MARKETPLACE_TITLES[marketplace]} не принял ключ — проверьте, что он скопирован целиком и не отозван.${reason}`,
      );
    }
    // Прочие 4xx — площадка отвергла сами данные (например, Client ID не числом): это ошибка ввода, а не сбой
    if (error.status >= 400 && error.status < 500 && !error.isRateLimited) {
      this.logger.warn(`${marketplace}: проверка ключа, ответ ${error.status}`);
      return new BadRequestException(
        `${MARKETPLACE_TITLES[marketplace]} отклонил данные${error.reason ? `: «${error.reason}»` : ''}`,
      );
    }
    this.logger.error(`${marketplace}: проверка ключа, ответ ${error.status}`);
    return new ServiceUnavailableException(
      `${MARKETPLACE_TITLES[marketplace]} не ответил — попробуйте через пару минут`,
    );
  }
}
