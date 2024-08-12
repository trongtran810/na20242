import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class NativeQueryDto {
  @ApiProperty({ type: String, default: 'select * from users;' })
  @IsString()
  readonly queryStr!: string;
}
