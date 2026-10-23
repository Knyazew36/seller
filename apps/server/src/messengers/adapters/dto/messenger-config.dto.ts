import { ApiProperty } from '@nestjs/swagger';

export const MESSENGER_CHANNEL_KEYS = ['TELEGRAM', 'MAX', 'VK'] as const;

export class MessengerConfigDto {
  @ApiProperty({ enum: MESSENGER_CHANNEL_KEYS })
  channel: (typeof MESSENGER_CHANNEL_KEYS)[number];

  @ApiProperty({
    description:
      'Ссылка на чат с ботом: открыть чат — значит разрешить боту писать (уведомления)',
    example: 'https://t.me/my_bot',
  })
  chatUrl: string;
}
