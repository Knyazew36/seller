import { Injectable } from '@nestjs/common';
import type { Context } from 'telegraf';

import { MessengerUser } from '@/messengers';
import {
  TelegramAppAdapter,
  TelegramLinkButton,
  TelegramUserInfo,
  TelegramWebSession,
} from '@/messengers/telegram';

import { AppMessengerAccountsService } from './app-messenger-accounts.service';
import { welcomeLinks, welcomeText } from './app-messenger-texts';
import { TelegramGroupRouter } from './telegram-group-router';

/**
 * Связка модуля Telegram (src/messengers/telegram) с этим проектом: как здесь выдаются сессии,
 * сливаются аккаунты и как выглядит приветствие. Зеркало AppMaxAdapter / AppVkAdapter.
 *
 * Свои кнопки и команды бота проект добавляет здесь, переопределяя welcomeCallbacks / onCallback /
 * onMessage базового класса (по умолчанию они ничего не делают).
 */
@Injectable()
export class AppTelegramAdapter extends TelegramAppAdapter {
  constructor(
    private readonly accounts: AppMessengerAccountsService,
    private readonly groups: TelegramGroupRouter,
  ) {
    super();
  }

  // ── Сессии и аккаунты ───────────────────────────────────────────────────

  public async issueWebSession(
    user: MessengerUser,
  ): Promise<TelegramWebSession> {
    return this.accounts.issueWebSession(user);
  }

  public linkAccount(params: {
    targetUserId: number;
    telegramUser: TelegramUserInfo;
    existingUser: MessengerUser | null;
  }): Promise<MessengerUser> {
    return this.accounts.linkAccount({
      channel: 'TELEGRAM',
      targetUserId: params.targetUserId,
      externalId: String(params.telegramUser.id),
      profile: params.telegramUser,
      existingUser: params.existingUser,
    });
  }

  public describeAccount(userId: number): Promise<string | null> {
    return this.accounts.describeAccount(userId);
  }

  // ── Приветствие ─────────────────────────────────────────────────────────

  public welcomeText(): string {
    return welcomeText('TELEGRAM');
  }

  public welcomeLinks(): TelegramLinkButton[] {
    return welcomeLinks();
  }

  // ── Группы ──────────────────────────────────────────────────────────────

  public onGroupMessage(ctx: Context): Promise<void> {
    return this.groups.message(ctx);
  }

  public onGroupCallback(ctx: Context): Promise<boolean> {
    return this.groups.callback(ctx);
  }
}
