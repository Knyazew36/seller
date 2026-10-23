import {
  SupportNotifier,
  type SupportConversationRecord,
  type SupportMessageRecord,
} from '@app/support-chat-nest';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';

import { ENTITY_EMOJI } from '@/common/utils';
import { User } from '@/generated/prisma/client';
import { type MessengerButton, MessengerRegistry } from '@/messengers';

const PREVIEW_LENGTH = 300;

/**
 * Оповещения чата через мессенджеры проекта: операторам (платформенным админам) — о новом обращении,
 * клиенту — об ответе, если его аккаунт привязан к мессенджеру. Анонимам вне чата написать некуда.
 */
@Injectable()
export class AppSupportNotifier extends SupportNotifier {
  private readonly logger = new Logger(
    `${ENTITY_EMOJI.support} ${AppSupportNotifier.name}`,
  );

  constructor(
    private readonly prisma: PrismaService,
    private readonly messengers: MessengerRegistry,
    private readonly config: ConfigService,
  ) {
    super();
  }

  // ── Оповещения ─────────────────────────────────────────────────────────────

  public async notifyOperators(
    conversation: SupportConversationRecord,
    message: SupportMessageRecord,
  ): Promise<void> {
    const [admins, contact] = await Promise.all([
      this.prisma.user.findMany({ where: { isPlatformAdmin: true } }),
      this.prisma.supportContact.findUnique({
        where: { id: conversation.contactId },
      }),
    ]);
    const who =
      [contact?.name, contact?.email, contact?.phone]
        .filter(Boolean)
        .join(', ') || 'Посетитель сайта';
    const text = [
      `🎧 Новое сообщение в поддержку «${this.config.get<string>('APP_NAME')}»`,
      who,
      this.preview(message),
    ].join('\n');

    const inboxUrl = this.frontendUrl(
      `/support?conversation=${conversation.id}`,
    );
    const buttons: MessengerButton[][] | undefined = inboxUrl
      ? [[{ kind: 'link', text: 'Открыть диалог', url: inboxUrl }]]
      : undefined;

    // Есть группа операторов в Telegram — обращение и так приходит туда темой, в личку не дублируем
    const skip = this.config.get<string>('SUPPORT_TG_CHAT_ID')
      ? (['TELEGRAM'] as const)
      : [];
    const sent = await this.sendToUsers(admins, text, buttons, skip);
    this.logger.log(
      `Операторам о conversationId=${conversation.id}: отправлено ${sent}`,
    );
  }

  public async notifyContact(
    conversation: SupportConversationRecord,
    message: SupportMessageRecord,
  ): Promise<void> {
    const contact = await this.prisma.supportContact.findUnique({
      where: { id: conversation.contactId },
    });
    const userId = Number(contact?.externalUserId);
    if (!Number.isInteger(userId) || userId <= 0) {
      this.logger.debug(
        `Клиент contactId=${conversation.contactId} не привязан к пользователю — оповестить вне чата нельзя`,
      );
      return;
    }

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) return;

    const text = [
      `💬 Поддержка ответила${message.authorName ? ` (${message.authorName})` : ''}:`,
      this.preview(message),
    ].join('\n');
    const sent = await this.sendToUsers([user], text, [
      [{ kind: 'open_app', text: 'Открыть чат' }],
    ]);
    this.logger.log(
      `Клиенту userId=${userId} об ответе в conversationId=${conversation.id}: отправлено ${sent}`,
    );
  }

  // ── Внутреннее ─────────────────────────────────────────────────────────────

  /** Во все мессенджеры, где бот может писать пользователю. Возвращает число отправленных. */
  private async sendToUsers(
    users: User[],
    text: string,
    buttons?: MessengerButton[][],
    skipChannels: readonly string[] = [],
  ): Promise<number> {
    const channels = this.messengers
      .list()
      .filter((channel) => !skipChannels.includes(channel.channel));
    const targets = users.flatMap((user) =>
      channels
        .filter((channel) => channel.canDeliver(user))
        .map((channel) => ({ user, channel })),
    );

    const results = await Promise.all(
      targets.map(({ user, channel }) =>
        channel
          .send(user, { text, buttons })
          .then(() => true)
          .catch((error) => {
            this.logger.error(
              `Не удалось отправить канал=${channel.channel} userId=${user.id}`,
              error instanceof Error ? error.stack : error,
            );
            return false;
          }),
      ),
    );
    return results.filter(Boolean).length;
  }

  private preview(message: SupportMessageRecord): string {
    const files = message.attachments.length
      ? `📎 Вложений: ${message.attachments.length}`
      : '';
    const text =
      message.text.length > PREVIEW_LENGTH
        ? `${message.text.slice(0, PREVIEW_LENGTH)}…`
        : message.text;
    return [text, files].filter(Boolean).join('\n');
  }

  private frontendUrl(pathname: string): string | null {
    const base = this.config.get<string>('FRONTEND_URL')?.replace(/\/+$/, '');
    return base ? `${base}${pathname}` : null;
  }
}
