import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional, Matches } from 'class-validator';
import { UserRole } from 'src/common/constants/user-role.enum';

export class UserAdminEdit {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userName!: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&^#()\-_=+{}[\]:;"'<>,.?/~`|\\])[A-Za-z\d@$!%*?&^#()\-_=+{}[\]:;"'<>,.?/~`|\\]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character from [@$!%*?&^#()-_=+{}[]:;"\'<>,.?/~`|\\].',
    },
  )
  newPassword?: string;

  @ApiProperty({ enum: UserRole })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
