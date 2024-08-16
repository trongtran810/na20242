import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from 'src/common/constants/user-role.enum';

export class UserAdminEdit {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userName!: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  newPassword?: string;

  @ApiProperty({ enum: UserRole })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
