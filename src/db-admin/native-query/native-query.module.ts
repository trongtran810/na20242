import { Module } from '@nestjs/common';

import * as providers from './native-query.service';
import * as controllers from './native-query.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'), // Correctly typed JWT_SECRET
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRE_IN') },
      }),
    }),
  ],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class NativeQueryModule {}
