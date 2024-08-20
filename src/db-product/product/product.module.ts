import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '#entity/db-product/product.entity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'), // Correctly typed JWT_SECRET
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRE_IN') },
      }),
    }),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
