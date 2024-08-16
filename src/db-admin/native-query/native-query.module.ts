import { Module } from '@nestjs/common';

import * as providers from './native-query.service';
import * as controllers from './native-query.controller';

@Module({
  imports: [],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class NativeQueryModule {}
