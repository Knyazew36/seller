import {
  SupportIdentity,
  type SupportOperator,
  type SupportRequestLike,
  type SupportUserIdentity,
} from '@app/support-chat-nest';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { AuthStrategyRegistry } from '@/common/auth-strategy.registry';
import { RequestWithOrganization } from '@/common/types/request-with-organization';
import { ENTITY_EMOJI } from '@/common/utils';
import { User } from '@/generated/prisma/client';

/**
 * Кто есть кто в чате поддержки seller-app: посетитель — любой пользователь проекта (или аноним),
 * оператор — платформенный админ. Авторизация — те же стратегии, что у MultiAuthGuard
 * (Bearer JWT, tma/max/vk мини-приложений).
 */
@Injectable()
export class AppSupportIdentity extends SupportIdentity {
  private readonly logger = new Logger(
    `${ENTITY_EMOJI.support} ${AppSupportIdentity.name}`,
  );

  constructor(
    private readonly registry: AuthStrategyRegistry,
    private readonly prisma: PrismaService,
  ) {
    super();
  }

  // ── Идентификация ──────────────────────────────────────────────────────────

  public async resolveUser(
    request: SupportRequestLike,
  ): Promise<SupportUserIdentity | null> {
    const user = await this.authenticate(request);
    return user
      ? {
          externalUserId: String(user.id),
          name: this.displayName(user),
          email: user.email,
          phone: user.phone,
        }
      : null;
  }

  public async resolveOperator(
    request: SupportRequestLike,
  ): Promise<SupportOperator | null> {
    // В HTTP пользователя уже положил MultiAuthGuard, в сокете — проверяем заголовки сами
    const user =
      (request.user as User | undefined) ?? (await this.authenticate(request));
    return user?.isPlatformAdmin ? this.toOperator(user) : null;
  }

  public async findOperator(id: number): Promise<SupportOperator | null> {
    const user = await this.prisma.user.findFirst({
      where: { id, isPlatformAdmin: true },
    });
    return user ? this.toOperator(user) : null;
  }

  // ── Внутреннее ─────────────────────────────────────────────────────────────

  /** Необязательная авторизация: нет заголовка или он невалиден — null, без исключения. */
  private async authenticate(
    request: SupportRequestLike,
  ): Promise<User | null> {
    const req = this.asExpressLike(request);
    const strategy = this.registry.list().find((item) => item.supports(req));
    if (!strategy) return null;
    try {
      return await strategy.authenticate(req);
    } catch (error) {
      this.logger.debug(
        `Авторизация ${strategy.provider} не прошла: ${error instanceof Error ? error.message : error}`,
      );
      return null;
    }
  }

  /** Стратегии читают req.header() — у handshake сокета его нет, собираем из заголовков. */
  private asExpressLike(request: SupportRequestLike): RequestWithOrganization {
    if (typeof (request as RequestWithOrganization).header === 'function') {
      return request as RequestWithOrganization;
    }
    const header = (name: string) => request.headers[name.toLowerCase()];
    return {
      headers: request.headers,
      header,
      query: {},
    } as unknown as RequestWithOrganization;
  }

  private toOperator(user: User): SupportOperator {
    return { id: user.id, name: this.displayName(user) };
  }

  private displayName(user: User): string | null {
    return [user.name, user.lastName].filter(Boolean).join(' ') || null;
  }
}
