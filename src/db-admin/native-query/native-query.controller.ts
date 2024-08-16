import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiOperation } from '@nestjs/swagger';

import { NativeQueryService } from './native-query.service';
import { NativeQueryDto } from './native-query.dto';
import { ApiKeyGuard } from '../../auth/guards/api.guard';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hot dev')
@Controller('native-query')
export class AppController {
  constructor(private nativeQuery: NativeQueryService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  @ApiSecurity('api-key')
  @ApiOperation({
    summary: 'Get the corresponding response beyond a native SQL query.',
  })
  async queryData(@Body() nativeQuery: NativeQueryDto): Promise<any> {
    return await this.nativeQuery.executeNativeQuery(nativeQuery.queryStr);
  }
}
