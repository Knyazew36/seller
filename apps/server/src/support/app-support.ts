import { SupportChatModule } from '@app/support-chat-nest';
import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';

import {
  getAllowedOrigins,
  isOriginAllowed,
} from '@/common/config/cors.config';
import { MultiAuthGuard } from '@/common/guards/multi-auth.guard';
import { UploadModule } from '@/upload/upload.module';

import { AppSupportFileStorage } from './adapters/app-support-file-storage';
import { AppSupportIdentity } from './adapters/app-support-identity';
import { AppSupportNotifier } from './adapters/app-support-notifier';
import { PrismaSupportStore } from './adapters/prisma-support.store';

/** В seller-app один чат поддержки — на всю платформу. */
export const SUPPORT_WORKSPACE_KEY = 'seller-app';

/**
 * Чат поддержки (packages/support-chat-nest) с адаптерами проекта: хранилище на Prisma, операторы —
 * платформенные админы, вложения — через UploadService, оповещения — через мессенджеры.
 *
 * Вызывать в imports AppModule ПОСЛЕ ConfigModule.forRoot: он синхронно загружает .env в process.env.
 */
export function supportChatModule(): DynamicModule {
  // Отдельный секрет не обязателен: выводим из JWT_SECRET, чтобы токен визита не совпадал с JWT
  const secret =
    process.env.SUPPORT_CHAT_SECRET?.trim() ||
    createHmac('sha256', process.env.JWT_SECRET ?? '')
      .update('support-chat')
      .digest('hex');

  // Сокет проверяет origin так же, как HTTP CORS (HTTP_CORS, в разработке ещё localhost)
  const allowedOrigins = getAllowedOrigins(
    new ConfigService({
      NODE_ENV: process.env.NODE_ENV ?? 'production',
      HTTP_CORS: process.env.HTTP_CORS,
    }),
  );

  return SupportChatModule.forRoot({
    workspaceKey: SUPPORT_WORKSPACE_KEY,
    secret,
    identitySecret: process.env.SUPPORT_IDENTITY_SECRET?.trim() || undefined,
    allowedOrigins: (origin) => isOriginAllowed(origin, allowedOrigins),
    store: PrismaSupportStore,
    identity: AppSupportIdentity,
    files: AppSupportFileStorage,
    notifier: AppSupportNotifier,
    authGuard: MultiAuthGuard,
    imports: [UploadModule],
  });
}
