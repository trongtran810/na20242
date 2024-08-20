import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { BaseModule } from './base';
import { CommonModule } from './common';
import { AppController } from './app.controller';
import { configuration } from './config';
import { AppService } from './app.service';
import { UserModule } from './db-admin/user';
import { NativeQueryModule } from './db-admin/native-query';
import { ProductModule } from './db-product/product';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get<TypeOrmModuleOptions>('db'),
      }),
      inject: [ConfigService],
    }),
    CommonModule, // Global
    BaseModule,

    NativeQueryModule,
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
