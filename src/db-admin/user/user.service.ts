import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { User } from '#entity/db-admin/user.entity';
import { UserDto } from '../../common/dtos/user/user.dto';
import { CreateUserDto } from '../../common/dtos/user/create-user.dto';
import { UserLoginDto } from '../../common/dtos/user/user-login.dto';
@Injectable()
export class UserService {
  private readonly saltRounds = 10;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  // Method to fetch all users
  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return plainToInstance(UserDto, users);
  }

  async register(createUserDto: CreateUserDto): Promise<UserDto> {
    const { name, userName, password, role } = createUserDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);

    // Create a new user instance
    const user = this.userRepository.create({
      name,
      userName,
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    const userSaved = this.userRepository.save(user);
    return plainToInstance(UserDto, userSaved);
  }

  async login(loginDto: UserLoginDto): Promise<string> {
    const user = await this.validateUser(loginDto.userName, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.userName, id: user.id, role: user.role };
    return this.jwtService.sign(payload);
  }

  async validateUser(userName: string, password: string): Promise<User | null> {
    const user = await this.findByUserName(userName);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async findByUserName(userName: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { userName } });
  }

  async changePassword(userId: number, oldPassword: string, newPassword: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      return false;
    }
    // Check if the old password matches
    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      return false;
    }
    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, this.saltRounds);
    user.password = hashedNewPassword;

    // Save the new password to the database
    await this.userRepository.save(user);
    return true;
  }
}
