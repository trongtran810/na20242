import { Body, Controller, Get, Post, UseGuards, Req, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dtos/db-admin/user/user.dto';
import { CreateUserDto } from 'src/common/dtos/db-admin/user/user-create';
import { UserLoginDto } from 'src/common/dtos/db-admin/user/user-login.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UserChangePasswordDto } from 'src/common/dtos/db-admin/user/user-change-password.dto';
import { UserAdminEdit } from 'src/common/dtos/db-admin/user/user-admin-edit.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/common/constants/user-role.enum';
import { RolesGuard } from 'src/auth/guards/role.guard';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Handle GET /user request
  @Get()
  @ApiResponse({ type: [UserDto] })
  @ApiOperation({ summary: 'List all user' })
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  @Post('register')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: '[Admin role required]  Add new user' })
  async register(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: UserLoginDto): Promise<string> {
    return this.userService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Current user get their info' })
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @Patch('change-password')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Change current user password' })
  async changePassword(@Body() changePasswordDto: UserChangePasswordDto, @Req() req: any) {
    const userId = req.user.sub; // Assuming you have the user ID in the JWT payload
    const { oldPassword, newPassword } = changePasswordDto;

    const result = await this.userService.changePassword(userId, oldPassword, newPassword);

    if (!result) {
      throw new HttpException('Invalid old password', HttpStatus.BAD_REQUEST);
    }

    return { message: 'Password changed successfully' };
  }

  @Patch(':userId')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiBearerAuth()
  @ApiOperation({ summary: '[Admin role required]  Update user information by admin' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.', type: UserDto })
  async updateUser(@Param('userId') userId: number, @Body() userAdminEdit: UserAdminEdit): Promise<UserDto> {
    return this.userService.adminUpdateUser(userId, userAdminEdit);
  }
}
