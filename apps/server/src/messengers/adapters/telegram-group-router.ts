import { Injectable } from '@nestjs/common';
import type { Context } from 'telegraf';

/** Кто обрабатывает апдейты групп (например, мост чата поддержки в группу операторов). */
export interface TelegramGroupHandler {
  onMessage(ctx: Context): Promise<void>;
  /** true — кнопка своя и обработана. */
  onCallback(ctx: Context): Promise<boolean>;
}

/**
 * Развязка AppTelegramAdapter и фич, которым нужны группы: адаптер живёт в модуле Telegram и не может
 * инжектить сервисы фич (циклические импорты), поэтому фичи сами регистрируются здесь при старте.
 */
@Injectable()
export class TelegramGroupRouter {
  private readonly handlers: TelegramGroupHandler[] = [];

  public register(handler: TelegramGroupHandler): void {
    this.handlers.push(handler);
  }

  public async message(ctx: Context): Promise<void> {
    for (const handler of this.handlers) await handler.onMessage(ctx);
  }

  public async callback(ctx: Context): Promise<boolean> {
    for (const handler of this.handlers) {
      if (await handler.onCallback(ctx)) return true;
    }
    return false;
  }
}
