import { IsString } from 'class-validator';

export class NativeQueryDto {
  @IsString()
  public queryStr!: string;
}
