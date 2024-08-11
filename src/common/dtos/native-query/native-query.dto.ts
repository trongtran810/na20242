import { IsString } from 'class-validator';

export class NativeQueryDto {
  @IsString()
  readonly query: string;
}
