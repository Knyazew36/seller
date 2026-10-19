import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { paginatePrisma } from '@/common/prisma/prisma-paginate';
import { ENTITY_EMOJI } from '@/common/utils';
import {
  Marketplace,
  MarketplaceAccountStatus,
  Prisma,
} from '@/generated/prisma/client';
import { PrismaService } from 'prisma/prisma.service';

import { CredentialsCipherService } from './credentials-cipher.service';
import { CreateMarketplaceAccountDto } from './dto/create-marketplace-account.dto';
import { MarketplaceAccountQueryDto } from './dto/marketplace-account-query.dto';
import { MarketplaceAccountResponseDto } from './dto/marketplace-account.response.dto';
import { MarketplaceCredentialsDto } from './dto/marketplace-credentials.dto';
import { UpdateMarketplaceAccountDto } from './dto/update-marketplace-account.dto';
import { VerifyMarketplaceCredentialsResponseDto } from './dto/verify-marketplace-credentials.response.dto';
import { MarketplaceCredentialsVerifier } from './marketplace-credentials.verifier';
import { MarketplaceCredentials } from './model/marketplace-credentials';

/** Всё, кроме зашифрованных учётных данных и их отпечатка */
const ACCOUNT_SELECT = {
  id: true,
  organizationId: true,
  marketplace: true,
  name: true,
  externalId: true,
  status: true,
  statusMessage: true,
  checkedAt: true,
  keyExpiresAt: true,
  keyInfo: true,
  createdByUserId: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.MarketplaceAccountSelect;

const SORTABLE = ['id', 'createdAt', 'name', 'marketplace', 'status'];

@Injectable()
export class MarketplaceAccountService {
  private readonly logger = new Logger(
    `${ENTITY_EMOJI.marketplaceAccount} ${MarketplaceAccountService.name}`,
  );

  constructor(
    private readonly prisma: PrismaService,
    private readonly cipher: CredentialsCipherService,
    private readonly verifier: MarketplaceCredentialsVerifier,
  ) {}

  // ── CRUD ────────────────────────────────────────────────────────────────

  /** Кабинеты организации. organizationId проверил OrgScopeGuard. */
  public async list(organizationId: number, query: MarketplaceAccountQueryDto) {
    const where: Prisma.MarketplaceAccountWhereInput = {
      organizationId,
      ...(query.filter_marketplace
        ? { marketplace: query.filter_marketplace }
        : {}),
      ...(query.filter_status ? { status: query.filter_status } : {}),
      ...(query.search
        ? { name: { contains: query.search, mode: 'insensitive' as const } }
        : {}),
    };
    const result = await paginatePrisma(this.prisma.marketplaceAccount, {
      ...query,
      where,
      select: ACCOUNT_SELECT,
      sortable: SORTABLE,
    });
    this.logger.log(`list org=${organizationId}: ${result.meta.total}`);
    return result;
  }

  /** Один кабинет. Доступ проверил ResourceScopeGuard. */
  public async findById(id: number): Promise<MarketplaceAccountResponseDto> {
    const account = await this.prisma.marketplaceAccount.findUnique({
      where: { id },
      select: ACCOUNT_SELECT,
    });
    if (!account) throw new NotFoundException('Кабинет площадки не найден');
    return account;
  }

  /** Подключение: ключ проверяется на площадке и только после этого сохраняется зашифрованным */
  public async create(
    userId: number,
    organizationId: number,
    dto: CreateMarketplaceAccountDto,
  ): Promise<MarketplaceAccountResponseDto> {
    const input = this.credentialsFromDto(dto);
    const verified = await this.verifier.verify(input);

    try {
      const account = await this.prisma.marketplaceAccount.create({
        data: {
          organizationId,
          marketplace: dto.marketplace,
          name: dto.name,
          externalId: verified.externalId,
          credentials: this.cipher.encrypt(input.credentials),
          credentialsFingerprint: this.cipher.fingerprint(input.credentials),
          status: MarketplaceAccountStatus.ACTIVE,
          checkedAt: new Date(),
          keyExpiresAt: verified.keyExpiresAt,
          keyInfo: verified.keyInfo as Prisma.InputJsonValue,
          createdByUserId: userId,
        },
        select: ACCOUNT_SELECT,
      });
      this.logger.log(
        `Подключён кабинет id=${account.id} org=${organizationId} ${dto.marketplace} externalId=${verified.externalId} userId=${userId}`,
      );
      return account;
    } catch (error) {
      if (isPrismaError(error, 'P2002')) {
        throw new ConflictException('Этот кабинет уже подключён к организации');
      }
      throw error;
    }
  }

  /**
   * Переименование и/или замена ключа. Новый ключ проверяется и должен принадлежать тому же кабинету:
   * иначе данные одного кабинета смешались бы с другим.
   */
  public async update(
    id: number,
    dto: UpdateMarketplaceAccountDto,
  ): Promise<MarketplaceAccountResponseDto> {
    const data: Prisma.MarketplaceAccountUpdateInput = {
      ...(dto.name !== undefined ? { name: dto.name } : {}),
    };

    if (dto.token || dto.clientId || dto.apiKey || dto.clientSecret) {
      // Площадку и ID кабинета знает только запись — без неё не понять, какие поля ключа нужны
      const current = await this.prisma.marketplaceAccount.findUnique({
        where: { id },
        select: { marketplace: true, externalId: true },
      });
      if (!current) throw new NotFoundException('Кабинет площадки не найден');

      const input = this.credentialsFromDto({
        ...dto,
        marketplace: current.marketplace,
      });
      const verified = await this.verifier.verify(input);
      if (verified.externalId !== current.externalId) {
        throw new BadRequestException(
          'Ключ от другого кабинета. Чтобы подключить другой кабинет, добавьте его отдельно',
        );
      }
      Object.assign(data, {
        credentials: this.cipher.encrypt(input.credentials),
        credentialsFingerprint: this.cipher.fingerprint(input.credentials),
        status: MarketplaceAccountStatus.ACTIVE,
        statusMessage: null,
        checkedAt: new Date(),
        keyExpiresAt: verified.keyExpiresAt,
        keyInfo: verified.keyInfo as Prisma.InputJsonValue,
      });
    }

    try {
      const account = await this.prisma.marketplaceAccount.update({
        where: { id },
        data,
        select: ACCOUNT_SELECT,
      });
      this.logger.log(
        `Обновлён кабинет id=${id}${data.credentials ? ': новый ключ' : ''}`,
      );
      return account;
    } catch (error) {
      if (isPrismaError(error, 'P2025')) {
        throw new NotFoundException('Кабинет площадки не найден');
      }
      throw error;
    }
  }

  public async delete(id: number): Promise<{ id: number }> {
    try {
      const account = await this.prisma.marketplaceAccount.delete({
        where: { id },
        select: { id: true, organizationId: true, marketplace: true },
      });
      this.logger.log(
        `Отключён кабинет id=${account.id} org=${account.organizationId} ${account.marketplace}`,
      );
      return { id: account.id };
    } catch (error) {
      if (isPrismaError(error, 'P2025')) {
        throw new NotFoundException('Кабинет площадки не найден');
      }
      throw error;
    }
  }

  // ── Проверка ключа ──────────────────────────────────────────────────────

  /** Проверка ключа до подключения — модалка показывает ошибку сразу после вставки */
  public async verify(
    dto: MarketplaceCredentialsDto,
  ): Promise<VerifyMarketplaceCredentialsResponseDto> {
    const verified = await this.verifier.verify(this.credentialsFromDto(dto));
    return { marketplace: dto.marketplace, ...verified };
  }

  /**
   * Перепроверка сохранённого ключа («здоровье подключения»). Отклонённый ключ не ошибка запроса:
   * кабинет переходит в ERROR с причиной, и её видно в списке.
   */
  public async check(id: number): Promise<MarketplaceAccountResponseDto> {
    const input = await this.getCredentials(id);
    try {
      const verified = await this.verifier.verify(input);
      const account = await this.prisma.marketplaceAccount.update({
        where: { id },
        data: {
          status: MarketplaceAccountStatus.ACTIVE,
          statusMessage: null,
          checkedAt: new Date(),
          keyExpiresAt: verified.keyExpiresAt,
          keyInfo: verified.keyInfo as Prisma.InputJsonValue,
        },
        select: ACCOUNT_SELECT,
      });
      this.logger.log(`Проверка кабинета id=${id}: ключ работает`);
      return account;
    } catch (error) {
      // 503 и прочее — площадка недоступна, про сам ключ это ничего не говорит: статус не трогаем
      if (!(error instanceof BadRequestException)) throw error;
      const message = errorMessage(error);
      const account = await this.prisma.marketplaceAccount.update({
        where: { id },
        data: {
          status: MarketplaceAccountStatus.ERROR,
          statusMessage: message,
          checkedAt: new Date(),
        },
        select: ACCOUNT_SELECT,
      });
      this.logger.warn(
        `Проверка кабинета id=${id}: ключ не работает — ${message}`,
      );
      return account;
    }
  }

  // ── Для других модулей ──────────────────────────────────────────────────

  /** Расшифрованные учётные данные кабинета — для синка. Наружу через API не отдаются. */
  public async getCredentials(id: number): Promise<MarketplaceCredentials> {
    const account = await this.prisma.marketplaceAccount.findUnique({
      where: { id },
      select: { marketplace: true, credentials: true },
    });
    if (!account) throw new NotFoundException('Кабинет площадки не найден');
    return {
      marketplace: account.marketplace,
      credentials: this.cipher.decrypt(account.credentials),
    } as MarketplaceCredentials;
  }

  // ── Внутреннее ──────────────────────────────────────────────────────────

  /** Поля DTO → учётные данные площадки. Только нужные поля: лишнее в шифротекст не попадает. */
  private credentialsFromDto(
    dto: Pick<
      MarketplaceCredentialsDto,
      'marketplace' | 'token' | 'clientId' | 'apiKey' | 'clientSecret'
    >,
  ): MarketplaceCredentials {
    switch (dto.marketplace) {
      case Marketplace.WILDBERRIES:
        if (!dto.token) throw new BadRequestException('Вставьте токен WB');
        return {
          marketplace: dto.marketplace,
          credentials: { token: dto.token },
        };
      case Marketplace.OZON:
        if (!dto.clientId || !dto.apiKey) {
          throw new BadRequestException('Для Ozon нужны Client ID и API-ключ');
        }
        return {
          marketplace: dto.marketplace,
          credentials: { clientId: dto.clientId, apiKey: dto.apiKey },
        };
      case Marketplace.AVITO:
        if (!dto.clientId || !dto.clientSecret) {
          throw new BadRequestException(
            'Для Avito нужны client_id и client_secret',
          );
        }
        return {
          marketplace: dto.marketplace,
          credentials: {
            clientId: dto.clientId,
            clientSecret: dto.clientSecret,
          },
        };
    }
  }
}

function isPrismaError(error: unknown, code: string): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError && error.code === code
  );
}

function errorMessage(error: HttpException): string {
  const response = error.getResponse();
  if (typeof response === 'string') return response;
  const message = (response as { message?: unknown }).message;
  if (Array.isArray(message)) return message.join('; ');
  return typeof message === 'string' ? message : error.message;
}
