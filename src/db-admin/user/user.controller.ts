import { Body, Controller, Get, Post, UseGuards, Req, Put, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dtos/user/user.dto';
import { CreateUserDto } from 'src/common/dtos/user/create-user.dto';
import { UserLoginDto } from 'src/common/dtos/user/user-login.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UserChangePasswordDto } from 'src/common/dtos/user/user-change-password.dto';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Handle GET /user request
  @Get()
  @ApiResponse({ description: 'Admin get all user', type: [UserDto] })
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  @Post('register')
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
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @ApiOperation({ summary: 'Change current user password' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Put('change-password')
  async changePassword(@Body() changePasswordDto: UserChangePasswordDto, @Req() req: any) {
    const userId = req.user.sub; // Assuming you have the user ID in the JWT payload
    const { oldPassword, newPassword } = changePasswordDto;

    const result = await this.userService.changePassword(userId, oldPassword, newPassword);

    if (!result) {
      throw new HttpException('Invalid old password', HttpStatus.BAD_REQUEST);
    }

    return { message: 'Password changed successfully' };
  }
}
