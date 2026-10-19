import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

/**
 * Переименование и замена ключа (старый истёк или отозван). Площадку сменить нельзя.
 * Новый ключ должен быть от того же кабинета — иначе это другой кабинет, его подключают отдельно.
 */
export class UpdateMarketplaceAccountDto {
  @ApiPropertyOptional({ description: 'Название кабинета' })
  @IsOptional()
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name?: string;

  @ApiPropertyOptional({ description: 'WB: новый токен' })
  @IsOptional()
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  token?: string;

  @ApiPropertyOptional({ description: 'Ozon / Avito: Client ID' })
  @IsOptional()
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  clientId?: string;

  @ApiPropertyOptional({ description: 'Ozon: новый API-ключ' })
  @IsOptional()
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  apiKey?: string;

  @ApiPropertyOptional({ description: 'Avito: новый client_secret' })
  @IsOptional()
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  clientSecret?: string;
}
