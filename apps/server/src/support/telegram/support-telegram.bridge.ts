import {
  type SupportConversationRecord,
  type SupportEvent,
  SupportEvents,
  type SupportMessageRecord,
  type SupportMessageReplyRecord,
  type SupportOperator,
  SupportOperatorService,
  SupportStore,
} from '@app/support-chat-nest';
import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
  Optional,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from 'prisma/prisma.service';
import type { Subscription } from 'rxjs';
import type { Context } from 'telegraf';
import type { InlineKeyboardButton, Message } from 'telegraf/types';

import { ENTITY_EMOJI } from '@/common/utils';
import { SupportTelegramTopic } from '@/generated/prisma/client';
import {
  TelegramGroupHandler,
  TelegramGroupRouter,
} from '@/messengers/adapters/telegram-group-router';
import { TelegramBotService } from '@/messengers/telegram';
import { stagedUploadPath } from '@/upload/upload.utils';
import { UploadService } from '@/upload/upload.service';

import { SUPPORT_WORKSPACE_KEY } from '../app-support';

/** Префикс callback-кнопок под шапкой темы: sup:<действие>:<id диалога>. */
const CALLBACK_PREFIX = 'sup:';
const ACTIONS = ['assign', 'resolve', 'close', 'reopen'] as const;
type TopicAction = (typeof ACTIONS)[number];

/** Сообщение в теме, начатое так, — заметка для коллег, клиенту не уходит. */
const NOTE_PREFIX = '//';
const TOPIC_TITLE_MAX = 128;
/** Сколько текста оригинала показать, если ответить в Telegram нативно не на что. */
const QUOTE_MAX = 80;
const IMAGE_MIMES = ['image/jpeg', 'image/png', 'image/webp'];

/**
 * Мост чата поддержки в служебную Telegram-супергруппу с темами: одна тема на обращение.
 * В тему зеркалится переписка (клиент, ответы из веб-панели, заметки, служебные строки);
 * всё, что оператор пишет в теме, уходит клиенту ответом (с `//` в начале — заметкой).
 *
 * Отвечать из Telegram может только платформенный админ, привязавший Telegram к аккаунту:
 * в группе могут оказаться посторонние, их сообщения клиенту не уходят.
 * Боту в группе нужны права администратора с «Управлением темами» — иначе он не видит сообщения
 * (режим приватности) и не может создавать темы.
 */
@Injectable()
export class SupportTelegramBridge
  implements TelegramGroupHandler, OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(
    `${ENTITY_EMOJI.support} ${SupportTelegramBridge.name}`,
  );
  private readonly chatId: string | null;
  /** Подпись проекта в названии темы: в одну группу могут писать несколько проектов. */
  private readonly project: string;
  private subscription?: Subscription;
  /** Создание темы на диалог: параллельные сообщения ждут одну и ту же тему, а не плодят свои. */
  private readonly creating = new Map<number, Promise<SupportTelegramTopic>>();
  /** Зеркалирование по одному на диалог — иначе порядок сообщений в теме перемешается. */
  private readonly queues = new Map<number, Promise<void>>();

  constructor(
    config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly router: TelegramGroupRouter,
    private readonly events: SupportEvents,
    private readonly operators: SupportOperatorService,
    private readonly store: SupportStore,
    private readonly uploads: UploadService,
    @Optional() private readonly bot?: TelegramBotService,
  ) {
    this.chatId = config.get<string>('SUPPORT_TG_CHAT_ID')?.trim() || null;
    this.project =
      config.get<string>('SUPPORT_TG_PROJECT')?.trim() ||
      config.get<string>('APP_NAME') ||
      'App';
  }

  // ── Жизненный цикл ─────────────────────────────────────────────────────────

  public onModuleInit(): void {
    if (!this.bot || !this.chatId) {
      this.logger.warn(
        `Мост в Telegram выключен: ${this.bot ? 'не задан SUPPORT_TG_CHAT_ID' : 'Telegram-бот не подключён'}`,
      );
      return;
    }
    // Темы есть только у супергрупп (-100…). У обычной группы id короче — частая ошибка при настройке
    if (!/^-100\d+$/.test(this.chatId)) {
      this.logger.warn(
        `Мост в Telegram выключен: SUPPORT_TG_CHAT_ID=${this.chatId} — не супергруппа. Включите в группе «Темы» (она станет супергруппой с новым id вида -100…) и укажите новый id`,
      );
      return;
    }
    this.router.register(this);
    this.subscription = this.events.stream.subscribe((event) =>
      this.enqueue(event),
    );
    this.logger.log(`Мост в Telegram включён, группа ${this.chatId}`);
  }

  public onModuleDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // ── Telegram → чат ─────────────────────────────────────────────────────────

  public async onMessage(ctx: Context): Promise<void> {
    const message = ctx.message;
    if (
      !message ||
      String(ctx.chat?.id) !== this.chatId ||
      !ctx.from ||
      ctx.from.is_bot ||
      !('is_topic_message' in message) ||
      !message.is_topic_message ||
      !message.message_thread_id
    ) {
      return;
    }

    const topic = await this.prisma.supportTelegramTopic.findUnique({
      where: {
        chatId_threadId: {
          chatId: this.chatId,
          threadId: message.message_thread_id,
        },
      },
    });
    if (!topic) return;

    const operator = await this.resolveOperator(ctx.from.id);
    if (!operator) {
      this.logger.warn(
        `Сообщение в теме conversationId=${topic.conversationId} от непривязанного telegramId=${ctx.from.id}`,
      );
      await this.reply(
        ctx,
        message,
        '⚠️ Сообщение не отправлено клиенту: ваш Telegram не привязан к аккаунту оператора. Привяжите его в профиле веб-версии.',
      );
      return;
    }

    const raw =
      ('text' in message && message.text) ||
      ('caption' in message && message.caption) ||
      '';
    const isInternalNote = raw.trimStart().startsWith(NOTE_PREFIX);
    const text = (
      isInternalNote ? raw.trimStart().slice(NOTE_PREFIX.length) : raw
    ).trim();

    const files: Express.Multer.File[] = [];
    try {
      const file = await this.downloadImage(message);
      if (file) files.push(file);
      if (!text && files.length === 0) return;

      const replyToId = await this.replyTarget(message);
      const created = await this.operators.createMessage(
        operator,
        {
          conversationId: topic.conversationId,
          text,
          isInternalNote,
          replyToId: replyToId ?? undefined,
        },
        files,
        'TELEGRAM',
      );
      await this.link(message.message_id, created.id);
      this.logger.log(
        `Ответ из Telegram conversationId=${topic.conversationId} operatorId=${operator.id}${isInternalNote ? ' заметка' : ''}${replyToId ? ` replyToId=${replyToId}` : ''}`,
      );
    } catch (error) {
      this.logger.error(
        `Не удалось передать сообщение из темы conversationId=${topic.conversationId}`,
        error instanceof Error ? error.stack : error,
      );
      await this.reply(
        ctx,
        message,
        `⚠️ Не отправлено: ${error instanceof Error ? error.message : 'ошибка'}`,
      );
    } finally {
      // Подтверждённые файлы уже перенесены из временной папки — удалится только то, что не дошло
      files.forEach((file) => fs.rmSync(file.path, { force: true }));
    }
  }

  public async onCallback(ctx: Context): Promise<boolean> {
    const query = ctx.callbackQuery;
    const data = query && 'data' in query ? query.data : '';
    if (!data.startsWith(CALLBACK_PREFIX)) return false;

    const [, action, rawId] = data.split(':');
    const conversationId = Number(rawId);
    if (
      !ACTIONS.includes(action as TopicAction) ||
      !Number.isInteger(conversationId)
    ) {
      await ctx.answerCbQuery('Кнопка устарела');
      return true;
    }

    const operator = ctx.from ? await this.resolveOperator(ctx.from.id) : null;
    if (!operator) {
      await ctx.answerCbQuery(
        'Привяжите Telegram к аккаунту оператора в профиле веб-версии',
        { show_alert: true },
      );
      return true;
    }

    try {
      await this.runAction(action as TopicAction, operator, conversationId);
      this.logger.log(
        `Кнопка ${action} conversationId=${conversationId} operatorId=${operator.id}`,
      );
      await ctx.answerCbQuery('Готово');
    } catch (error) {
      await ctx.answerCbQuery(
        error instanceof Error ? error.message : 'Не получилось',
      );
    }
    return true;
  }

  // ── Чат → Telegram ─────────────────────────────────────────────────────────

  private enqueue(event: SupportEvent): void {
    const conversationId =
      'conversation' in event
        ? event.conversation.id
        : event.message.conversationId;
    const previous = this.queues.get(conversationId) ?? Promise.resolve();
    const next = previous
      .then(() => this.handle(event))
      .catch((error) =>
        this.logger.error(
          `Не удалось отразить ${event.type} в Telegram conversationId=${conversationId}`,
          error instanceof Error ? error.stack : error,
        ),
      )
      .finally(() => {
        if (this.queues.get(conversationId) === next) {
          this.queues.delete(conversationId);
        }
      });
    this.queues.set(conversationId, next);
  }

  private async handle(event: SupportEvent): Promise<void> {
    switch (event.type) {
      case 'message.created': {
        // Написанное в самой теме обратно не дублируем
        if (event.message.channel === 'TELEGRAM') return;
        const topic = await this.ensureTopic(event.conversation);
        await this.post(topic, event.message);
        return;
      }
      case 'message.updated':
      case 'message.deleted': {
        if (event.message.channel === 'TELEGRAM') return;
        const topic = await this.findTopic(event.message.conversationId);
        if (!topic) return;
        const who = this.authorLabel(event.message);
        await this.send(
          topic,
          event.type === 'message.updated'
            ? `✏️ ${who} изменил(а) сообщение:\n${event.message.text}`
            : `🗑 ${who} удалил(а) сообщение`,
        );
        return;
      }
      case 'conversation.updated': {
        await this.syncTopicState(event.conversation);
        return;
      }
      case 'conversation.deleted': {
        const topic = await this.findTopic(event.conversation.id);
        if (!topic) return;
        await this.bot!.api.deleteForumTopic(topic.chatId, topic.threadId);
        await this.prisma.supportTelegramTopic.delete({
          where: { conversationId: topic.conversationId },
        });
        this.logger.log(
          `Тема удалена вместе с диалогом conversationId=${topic.conversationId}`,
        );
        return;
      }
      case 'conversation.read':
        return;
    }
  }

  /** Тема обращения: есть — берём, нет — создаём с шапкой и кнопками. */
  private async ensureTopic(
    conversation: SupportConversationRecord,
  ): Promise<SupportTelegramTopic> {
    const existing = await this.findTopic(conversation.id);
    if (existing) return existing;

    let pending = this.creating.get(conversation.id);
    if (!pending) {
      pending = this.createTopic(conversation).finally(() =>
        this.creating.delete(conversation.id),
      );
      this.creating.set(conversation.id, pending);
    }
    return pending;
  }

  private async createTopic(
    conversation: SupportConversationRecord,
  ): Promise<SupportTelegramTopic> {
    const full = await this.store.findConversation(
      conversation.id,
      { workspaceKey: SUPPORT_WORKSPACE_KEY },
      { withContact: true },
    );
    const contact = full?.contact;
    const name =
      contact?.name ||
      contact?.email ||
      contact?.phone ||
      `Посетитель #${conversation.contactId}`;

    const forum = await this.bot!.api.createForumTopic(
      this.chatId!,
      `${this.project} · #${conversation.id} · ${name}`.slice(
        0,
        TOPIC_TITLE_MAX,
      ),
    );
    const topic = await this.prisma.supportTelegramTopic.create({
      data: {
        conversationId: conversation.id,
        chatId: this.chatId!,
        threadId: forum.message_thread_id,
      },
    });
    this.logger.log(
      `Создана тема threadId=${topic.threadId} для conversationId=${conversation.id}`,
    );

    const details = [
      contact?.email && `Email: ${contact.email}`,
      contact?.phone && `Телефон: ${contact.phone}`,
      contact?.externalUserId
        ? `Пользователь #${contact.externalUserId}`
        : 'Аноним с сайта',
    ].filter(Boolean);
    await this.send(
      topic,
      [
        `🆕 Обращение #${conversation.id} — ${name}`,
        `Проект: ${this.project}`,
        ...details,
        '',
        'Пишите прямо в эту тему — ответ уйдёт клиенту.',
        `${NOTE_PREFIX} в начале сообщения — заметка для коллег, клиент её не увидит.`,
      ].join('\n'),
      this.headerButtons(conversation.id),
    );
    return topic;
  }

  private async post(
    topic: SupportTelegramTopic,
    message: SupportMessageRecord,
  ): Promise<void> {
    // Ответ — нативным reply на копию оригинала в теме; копии нет (старое сообщение) — цитатой в тексте
    const replyTo = message.replyTo
      ? await this.linkedTgMessageId(message.replyTo.id)
      : null;
    const quote =
      message.replyTo && !replyTo ? this.quoteLine(message.replyTo) : null;
    const text = [quote, this.formatMessage(message)]
      .filter(Boolean)
      .join('\n');
    const replyParameters = replyTo
      ? {
          reply_parameters: {
            message_id: replyTo,
            allow_sending_without_reply: true,
          },
        }
      : {};

    const [first, ...rest] = message.attachments;
    if (!first) {
      if (!message.text) return;
      const sent = await this.bot!.api.sendMessage(topic.chatId, text, {
        message_thread_id: topic.threadId,
        ...replyParameters,
      });
      await this.link(sent.message_id, message.id);
      return;
    }

    const source = (attachmentPath: string) => ({
      source: path.join(this.uploads.uploadRoot, attachmentPath),
    });
    if (!rest.length) {
      const sent = await this.bot!.api.sendPhoto(
        topic.chatId,
        source(first.path),
        { message_thread_id: topic.threadId, caption: text, ...replyParameters },
      );
      await this.link(sent.message_id, message.id);
      return;
    }

    // Несколько картинок — одним альбомом, как их отправили; подпись у альбома — на первой
    const sent = await this.bot!.api.sendMediaGroup(
      topic.chatId,
      [first, ...rest].map((attachment, index) => ({
        type: 'photo' as const,
        media: source(attachment.path),
        ...(index === 0 ? { caption: text } : {}),
      })),
      { message_thread_id: topic.threadId, ...replyParameters },
    );
    for (const item of sent) await this.link(item.message_id, message.id);
  }

  /** Закрытый диалог — закрытая тема; переоткрыли — тема снова открыта. */
  private async syncTopicState(
    conversation: SupportConversationRecord,
  ): Promise<void> {
    const topic = await this.findTopic(conversation.id);
    if (!topic) return;
    const shouldBeClosed = conversation.status === 'CLOSED';
    if (shouldBeClosed === topic.closed) return;

    if (shouldBeClosed) {
      await this.bot!.api.closeForumTopic(topic.chatId, topic.threadId);
    } else {
      await this.bot!.api.reopenForumTopic(topic.chatId, topic.threadId);
    }
    await this.prisma.supportTelegramTopic.update({
      where: { conversationId: topic.conversationId },
      data: { closed: shouldBeClosed },
    });
    this.logger.log(
      `Тема conversationId=${conversation.id} ${shouldBeClosed ? 'закрыта' : 'открыта снова'}`,
    );
  }

  // ── Внутреннее ─────────────────────────────────────────────────────────────

  private runAction(
    action: TopicAction,
    operator: SupportOperator,
    conversationId: number,
  ) {
    switch (action) {
      case 'assign':
        return this.operators.assign(operator, conversationId);
      case 'resolve':
        return this.operators.updateConversation(operator, conversationId, {
          status: 'RESOLVED',
        });
      case 'close':
        return this.operators.close(operator, conversationId);
      case 'reopen':
        return this.operators.reopen(operator, conversationId);
    }
  }

  private headerButtons(conversationId: number): InlineKeyboardButton[][] {
    const button = (text: string, action: TopicAction) => ({
      text,
      callback_data: `${CALLBACK_PREFIX}${action}:${conversationId}`,
    });
    const rows: InlineKeyboardButton[][] = [
      [button('🙋 Взять себе', 'assign'), button('✅ Решено', 'resolve')],
      [button('🔒 Закрыть', 'close'), button('🔓 Открыть снова', 'reopen')],
    ];
    // Telegram принимает в кнопках только публичные https-ссылки
    const inbox = this.inboxUrl(conversationId);
    if (inbox) rows.push([{ text: '🌐 Открыть в панели', url: inbox }]);
    return rows;
  }

  private formatMessage(message: SupportMessageRecord): string {
    if (message.author === 'SYSTEM') return `ℹ️ ${message.text}`;
    if (message.author === 'CONTACT') return `💬 ${message.text}`;
    const prefix = message.isInternalNote ? '📝 Заметка' : '↩️ Ответ';
    return `${prefix} · ${this.authorLabel(message)} (из панели):\n${message.text}`;
  }

  private quoteLine(reply: SupportMessageReplyRecord): string {
    const source = reply.deletedAt
      ? 'сообщение удалено'
      : reply.text || (reply.attachmentsCount ? 'фото' : '');
    const short =
      source.length > QUOTE_MAX ? `${source.slice(0, QUOTE_MAX)}…` : source;
    return `↩️ В ответ на «${short}»`;
  }

  /**
   * На какое сообщение ленты ответили в теме. Telegram помечает каждое сообщение темы ответом
   * на её заголовок — это не настоящий ответ, такие отбрасываем.
   */
  private async replyTarget(message: Message): Promise<number | null> {
    const replied =
      'reply_to_message' in message ? message.reply_to_message : undefined;
    if (
      !replied ||
      ('message_thread_id' in message &&
        replied.message_id === message.message_thread_id)
    ) {
      return null;
    }
    const row = await this.prisma.supportTelegramMessage.findUnique({
      where: {
        chatId_tgMessageId: {
          chatId: this.chatId!,
          tgMessageId: replied.message_id,
        },
      },
      select: { messageId: true },
    });
    if (!row) {
      this.logger.debug(
        `Ответ в теме на сообщение без копии в ленте tgMessageId=${replied.message_id}`,
      );
    }
    return row?.messageId ?? null;
  }

  private async linkedTgMessageId(messageId: number): Promise<number | null> {
    const row = await this.prisma.supportTelegramMessage.findFirst({
      where: { chatId: this.chatId!, messageId },
      orderBy: { tgMessageId: 'asc' },
      select: { tgMessageId: true },
    });
    return row?.tgMessageId ?? null;
  }

  /** Связь не критична: без неё ответ просто уйдёт без нативного reply. */
  private async link(tgMessageId: number, messageId: number): Promise<void> {
    try {
      await this.prisma.supportTelegramMessage.create({
        data: { chatId: this.chatId!, tgMessageId, messageId },
      });
    } catch (error) {
      this.logger.warn(
        `Не удалось связать tgMessageId=${tgMessageId} с messageId=${messageId}: ${error instanceof Error ? error.message : error}`,
      );
    }
  }

  private authorLabel(message: SupportMessageRecord): string {
    if (message.author === 'CONTACT') return 'Клиент';
    return message.authorName ?? 'Оператор';
  }

  private send(
    topic: SupportTelegramTopic,
    text: string,
    buttons?: InlineKeyboardButton[][],
  ) {
    return this.bot!.api.sendMessage(topic.chatId, text, {
      message_thread_id: topic.threadId,
      ...(buttons ? { reply_markup: { inline_keyboard: buttons } } : {}),
    });
  }

  private reply(ctx: Context, message: Message, text: string) {
    return ctx
      .reply(text, { reply_parameters: { message_id: message.message_id } })
      .catch(() => undefined);
  }

  private findTopic(conversationId: number) {
    return this.prisma.supportTelegramTopic.findUnique({
      where: { conversationId },
    });
  }

  private async resolveOperator(
    telegramId: number,
  ): Promise<SupportOperator | null> {
    const user = await this.prisma.user.findFirst({
      where: { telegramId: String(telegramId), isPlatformAdmin: true },
    });
    if (!user) return null;
    return {
      id: user.id,
      name: [user.name, user.lastName].filter(Boolean).join(' ') || null,
    };
  }

  /** Фото или картинка-документ из сообщения → файл во временной папке, как после multer. */
  private async downloadImage(
    message: Message,
  ): Promise<Express.Multer.File | null> {
    let fileId: string | undefined;
    let mime = 'image/jpeg';
    if ('photo' in message && message.photo.length) {
      fileId = message.photo[message.photo.length - 1]!.file_id;
    } else if (
      'document' in message &&
      message.document.mime_type &&
      IMAGE_MIMES.includes(message.document.mime_type)
    ) {
      fileId = message.document.file_id;
      mime = message.document.mime_type;
    }
    if (!fileId) return null;

    const link = await this.bot!.api.getFileLink(fileId);
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(
        `не удалось скачать файл из Telegram (${response.status})`,
      );
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    const filePath = stagedUploadPath(mime);
    fs.writeFileSync(filePath, buffer);
    return {
      path: filePath,
      originalname: path.basename(filePath),
      mimetype: mime,
      size: buffer.length,
    } as Express.Multer.File;
  }

  private inboxUrl(conversationId: number): string | null {
    const base = process.env.FRONTEND_URL?.trim().replace(/\/+$/, '');
    return base?.startsWith('https://')
      ? `${base}/support?conversation=${conversationId}`
      : null;
  }
}
