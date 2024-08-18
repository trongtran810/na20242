import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, Matches } from 'class-validator';

import { UserRole } from '../../constants/user-role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9_]{3,20}$/, {
    message: 'Username must be between 3 and 20 characters long and can only contain letters, numbers, and underscores.',
  })
  userName!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&^#()\-_=+{}[\]:;"'<>,.?/~`|\\])[A-Za-z\d@$!%*?&^#()\-_=+{}[\]:;"'<>,.?/~`|\\]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character from [@$!%*?&^#()-_=+{}[]:;"\'<>,.?/~`|\\].',
    },
  )
  password!: string;

  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  role!: UserRole;
}
