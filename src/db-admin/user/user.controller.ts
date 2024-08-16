import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '#entity/db-admin/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Handle GET /user request
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
