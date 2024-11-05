import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class CreateNoteDto {
  @ApiProperty({ description: 'The title for note', example: 'New title' })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({
    description: 'The content for note',
    example: 'The content for note ',
  })
  @IsString()
  content: string
}
