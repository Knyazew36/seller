import { Module } from '@nestjs/common';

import { AppMessengersSupportModule } from '@/messengers/adapters/app-messengers-support.module';
import { UploadModule } from '@/upload/upload.module';

import { SupportTelegramBridge } from './support-telegram.bridge';

/**
 * Операторы поддержки в Telegram-супергруппе с темами. Подключается всегда, но работает, только если
 * подключён Telegram-бот и задан SUPPORT_TG_CHAT_ID (иначе пишет в лог, почему выключен).
 */
@Module({
  imports: [AppMessengersSupportModule, UploadModule],
  providers: [SupportTelegramBridge],
})
export class SupportTelegramModule {}
