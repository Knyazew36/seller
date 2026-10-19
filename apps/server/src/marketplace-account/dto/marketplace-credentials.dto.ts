import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';

import { Marketplace } from '@/generated/prisma/client';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

/**
 * Учётные данные кабинета. Какие поля нужны, зависит от площадки:
 * WB — token; Ozon — clientId + apiKey; Avito — clientId + clientSecret.
 */
export class MarketplaceCredentialsDto {
  @ApiProperty({ enum: Marketplace, description: 'Площадка' })
  @IsEnum(Marketplace)
  marketplace: Marketplace;

  @ApiPropertyOptional({
    description: 'WB: токен из «Настройки» → «Доступ к API» (только на чтение)',
  })
  @ValidateIf(
    (o: MarketplaceCredentialsDto) => o.marketplace === Marketplace.WILDBERRIES,
  )
  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Вставьте токен WB' })
  @MaxLength(4000)
  token?: string;

  @ApiPropertyOptional({
    description: 'Ozon: Client ID; Avito: client_id',
    example: '123456',
  })
  @ValidateIf(
    (o: MarketplaceCredentialsDto) => o.marketplace !== Marketplace.WILDBERRIES,
  )
  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Вставьте Client ID' })
  @MaxLength(200)
  clientId?: string;

  @ApiPropertyOptional({
    description: 'Ozon: API-ключ с типом «Admin read only»',
  })
  @ValidateIf(
    (o: MarketplaceCredentialsDto) => o.marketplace === Marketplace.OZON,
  )
  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Вставьте API-ключ Ozon' })
  @MaxLength(500)
  apiKey?: string;

  @ApiPropertyOptional({ description: 'Avito: client_secret' })
  @ValidateIf(
    (o: MarketplaceCredentialsDto) => o.marketplace === Marketplace.AVITO,
  )
  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Вставьте client_secret Avito' })
  @MaxLength(500)
  clientSecret?: string;
}
