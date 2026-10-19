import { ApiProperty } from '@nestjs/swagger';

import { Marketplace } from '@/generated/prisma/client';

/** Ключ принят площадкой. Если не принят — эндпоинт отвечает 400 с причиной. */
export class VerifyMarketplaceCredentialsResponseDto {
  @ApiProperty({ enum: Marketplace, description: 'Площадка' })
  marketplace: Marketplace;

  @ApiProperty({ description: 'ID кабинета на площадке' })
  externalId: string;

  @ApiProperty({
    type: Date,
    nullable: true,
    description: 'Когда истекает ключ (если площадка сообщает)',
  })
  keyExpiresAt: Date | null;

  @ApiProperty({
    type: Object,
    description: 'Категории токена WB / роли ключа Ozon',
  })
  keyInfo: unknown;
}
