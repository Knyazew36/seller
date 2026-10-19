import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

import { MarketplaceCredentialsDto } from './marketplace-credentials.dto';

export class CreateMarketplaceAccountDto extends MarketplaceCredentialsDto {
  @ApiProperty({ description: 'ID организации', example: 1 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  organizationId: number;

  @ApiProperty({ description: 'Название кабинета', example: 'ООО «Ромашка»' })
  @Transform(({ value }: { value: unknown }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @IsNotEmpty({ message: 'Укажите название кабинета' })
  @MaxLength(120)
  name: string;
}
