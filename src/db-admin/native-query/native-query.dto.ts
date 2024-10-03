import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class NativeQueryDto {
  @ApiProperty({ type: String, default: 'select * from user;' })
  @IsString()
  readonly queryStr!: string;

  @ApiProperty({ type: String, default: '' })
  @IsString()
  readonly dbName!: string;
}
