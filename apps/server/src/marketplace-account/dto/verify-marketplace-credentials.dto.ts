import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

import { MarketplaceCredentialsDto } from './marketplace-credentials.dto';

/** Проверка ключа до подключения: модалка показывает ошибку сразу после вставки */
export class VerifyMarketplaceCredentialsDto extends MarketplaceCredentialsDto {
  @ApiProperty({ description: 'ID организации', example: 1 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  organizationId: number;
}
