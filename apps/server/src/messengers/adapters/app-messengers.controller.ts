import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Swagger } from '@/common/decorators/swagger/swagger.decorator';
import { MessengerChannelKey, MessengerRegistry } from '@/messengers';

import { MessengerConfigDto } from './dto/messenger-config.dto';

/** Ссылка на чат с ботом по env мессенджера; null — переменных нет. */
const CHAT_URL: Record<MessengerChannelKey, () => string | null> = {
  TELEGRAM: () =>
    process.env.TG_BOT_NAME ? `https://t.me/${process.env.TG_BOT_NAME}` : null,
  MAX: () =>
    process.env.MAX_BOT_NAME
      ? `https://max.ru/${process.env.MAX_BOT_NAME}`
      : null,
  VK: () =>
    process.env.VK_GROUP_ID
      ? `https://vk.me/club${process.env.VK_GROUP_ID}`
      : null,
};

/**
 * Какие мессенджеры подключены в этом окружении — фронт показывает вход/привязку только для них
 * и не держит имена ботов в своём env. Публичный: нужен ещё на странице входа.
 */
@ApiTags('messengers')
@Controller('messengers')
export class AppMessengersController {
  constructor(private readonly registry: MessengerRegistry) {}

  @Get('list')
  @Swagger({
    title: 'Подключённые мессенджеры и ссылки на чаты с ботами',
    response: MessengerConfigDto,
    plainArray: true,
  })
  public list(): MessengerConfigDto[] {
    return this.registry.list().flatMap((channel) => {
      const chatUrl = CHAT_URL[channel.channel]();
      return chatUrl ? [{ channel: channel.channel, chatUrl }] : [];
    });
  }
}
