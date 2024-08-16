import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../constants/user-role.enum';
export class UserDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  userName!: string;

  @ApiProperty()
  role!: UserRole;

  @ApiProperty()
  created_at!: Date;

  @ApiProperty()
  updated_at!: Date;
}
