import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class UserChangePasswordDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  oldPassword!: string;

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
  newPassword!: string;
}
