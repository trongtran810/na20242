import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { BaseModule } from './base';
import { CommonModule } from './common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config';
import { NativeQueryService } from './native-query.service';

@Module({
  imports: [
    // LoggerModule.forRoot(loggerOptions),
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
  ],
  controllers: [AppController],
  providers: [AppService, NativeQueryService],
})
export class AppModule {}
