import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Вторая линия защиты поверх глобального omit в PrismaService: рекурсивно вырезает passwordHash
// из любых объектов ответа — хэш не должен покидать API, даже если его где-то включили через omit: false
function stripPasswordHash(value: any): any {
  if (Array.isArray(value)) {
    value.forEach(stripPasswordHash);
  } else if (value && typeof value === 'object') {
    if ('passwordHash' in value) {
      delete value.passwordHash;
    }
    Object.values(value).forEach(stripPasswordHash);
  }
  return value;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Конверт только для HTTP. Обработчики бота (nestjs-telegraf) и сокета проходят через те же
    // глобальные интерсепторы: обёрнутый undefined бот отправил бы в чат как «[object Object]»
    if (context.getType<string>() !== 'http') {
      return next.handle();
    }

    return next.handle().pipe(
      map((data) => {
        const response: any = {
          status: 'success',
          data: stripPasswordHash(data),
          timestamp: new Date().toISOString(),
        };
        return response;
      }),
    );
  }
}
