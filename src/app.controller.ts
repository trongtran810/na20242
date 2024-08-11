import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiHeader, ApiSecurity } from '@nestjs/swagger';
import { NativeQueryService } from './native-query.service';
import { NativeQueryDto } from './common/dtos/native-query/native-query.dto';
import { ApiKeyGuard } from './auth/guards/api.guard';

@Controller('native-query')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private nativeQuery: NativeQueryService,
  ) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  @ApiSecurity('api-key')
  async queryData(@Body() nativeQuery: NativeQueryDto): Promise<any> {
    return await this.nativeQuery.executeNativeQuery(nativeQuery.query);
  }
}
