import { ApiProperty } from '@nestjs/swagger';

import {
  Marketplace,
  MarketplaceAccountStatus,
} from '@/generated/prisma/client';

/** Кабинет площадки. Учётные данные не отдаются никогда — ни целиком, ни частично. */
export class MarketplaceAccountResponseDto {
  @ApiProperty({ description: 'ID кабинета' })
  id: number;

  @ApiProperty({ description: 'ID организации' })
  organizationId: number;

  @ApiProperty({ enum: Marketplace, description: 'Площадка' })
  marketplace: Marketplace;

  @ApiProperty({ description: 'Название кабинета' })
  name: string;

  @ApiProperty({
    description:
      'ID кабинета на площадке: WB — ID продавца, Ozon — Client ID, Avito — client_id',
  })
  externalId: string;

  @ApiProperty({
    enum: MarketplaceAccountStatus,
    description: 'Состояние по последней проверке ключа',
  })
  status: MarketplaceAccountStatus;

  @ApiProperty({
    type: String,
    nullable: true,
    description: 'Почему ключ не работает — текст для продавца',
  })
  statusMessage: string | null;

  @ApiProperty({
    type: Date,
    nullable: true,
    description: 'Последняя проверка ключа',
  })
  checkedAt: Date | null;

  @ApiProperty({
    type: Date,
    nullable: true,
    description: 'Когда истекает ключ (если площадка сообщает)',
  })
  keyExpiresAt: Date | null;

  @ApiProperty({
    type: Object,
    nullable: true,
    description:
      'Что вернула проверка ключа: категории токена WB, роли ключа Ozon',
  })
  keyInfo: unknown;

  @ApiProperty({ type: Number, nullable: true, description: 'Кто подключил' })
  createdByUserId: number | null;

  @ApiProperty({ description: 'Дата подключения' })
  createdAt: Date;

  @ApiProperty({ description: 'Дата изменения' })
  updatedAt: Date;
}
