import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { User } from '#entity/db-admin/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'), // Correctly typed JWT_SECRET
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRE_IN') },
      }),
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
