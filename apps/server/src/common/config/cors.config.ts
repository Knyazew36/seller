import type { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';

import { isDev } from '../utils/is-dev';

export function isOriginAllowed(
  origin: string,
  allowedOrigins: string[],
): boolean {
  if (allowedOrigins.includes(origin)) return true;

  try {
    const { hostname } = new URL(origin);
    for (const pattern of allowedOrigins) {
      if (pattern.startsWith('.')) {
        const suffix = pattern.slice(1);
        if (hostname === suffix || hostname.endsWith('.' + suffix)) return true;
      }
    }
  } catch {
    return false;
  }
  return false;
}

const LOCALHOST_ORIGINS = [
  'https://localhost:5272',
  'http://localhost:5272',
  'http://localhost:3000',
  'http://localhost:5173',
  'https://localhost:5173',
  'http://localhost:5183',
  'https://localhost:5183',
  'https://localhost:5172',
  'http://localhost:5172',
  'https://localhost:10004',
];

/** Разрешённые origin'ы: HTTP_CORS через запятую ('.example.com' — домен с поддоменами), в разработке ещё localhost. */
export function getAllowedOrigins(configService: ConfigService): string[] {
  const allowedOriginsRaw = configService.get<string>('HTTP_CORS') ?? '';
  const envOrigins = allowedOriginsRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  // localhost — только в разработке: в проде страница с чужой машины не должна ходить в API с куками
  return isDev(configService)
    ? [...LOCALHOST_ORIGINS, ...envOrigins]
    : envOrigins;
}

export function getCorsConfig(configService: ConfigService): CorsOptions {
  const allowedOrigins = getAllowedOrigins(configService);

  return {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (isOriginAllowed(origin, allowedOrigins)) return callback(null, true);

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    // Мутации в API — только POST
    methods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'recaptcha',
      // Организация запроса — фронт шлёт фоном, читает OrgScopeGuard
      'x-organization-id',
      // Токен визита чата поддержки (@app/support-chat-nest)
      'x-support-visit',
    ],
    exposedHeaders: ['Set-Cookie', 'Content-Disposition'],
  };
}
