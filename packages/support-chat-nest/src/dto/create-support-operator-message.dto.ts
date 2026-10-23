import { SUPPORT_LIMITS } from '@app/support-chat-core'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Transform, Type } from 'class-transformer'
import { IsBoolean, IsInt, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator'

import { toBoolean, trimText } from './transforms'

export class CreateSupportOperatorMessageDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  public conversationId: number

  @ApiPropertyOptional({ maxLength: SUPPORT_LIMITS.textMaxLength, description: 'Пусто можно только с вложениями' })
  @Transform(trimText)
  @IsOptional()
  @IsString()
  @MaxLength(SUPPORT_LIMITS.textMaxLength)
  public text?: string

  @ApiPropertyOptional({ description: 'Ключ идемпотентности: один на сообщение, не меняется при повторах' })
  @IsOptional()
  @IsUUID()
  public clientMessageId?: string

  @ApiPropertyOptional({ description: 'id сообщения этого диалога, на которое отвечаем' })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  public replyToId?: number

  @ApiPropertyOptional({ default: false, description: 'Заметка для операторов, клиент её не увидит' })
  @Transform(toBoolean)
  @IsOptional()
  @IsBoolean()
  public isInternalNote?: boolean
}
