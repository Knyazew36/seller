import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';

import { PaginationQueryDto } from '@/common/type';
import {
  Marketplace,
  MarketplaceAccountStatus,
} from '@/generated/prisma/client';

export class MarketplaceAccountQueryDto extends PaginationQueryDto {
  @ApiProperty({ description: 'ID организации', example: 1 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  organizationId: number;

  @ApiPropertyOptional({
    enum: Marketplace,
    description: 'Только эта площадка',
  })
  @IsOptional()
  @IsEnum(Marketplace)
  filter_marketplace?: Marketplace;

  @ApiPropertyOptional({
    enum: MarketplaceAccountStatus,
    description:
      'Только кабинеты в этом состоянии (ERROR — ключ надо обновить)',
  })
  @IsOptional()
  @IsEnum(MarketplaceAccountStatus)
  filter_status?: MarketplaceAccountStatus;
}
