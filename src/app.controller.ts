import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiHeader, ApiSecurity } from '@nestjs/swagger';
import { NativeQueryService } from './native-query.service';
import { NativeQueryDto } from './common/dtos/native-query/native-query.dto';

@Controller('native-query')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private nativeQuery: NativeQueryService,
  ) {}

  @Post()
  @ApiSecurity('apiKey')
  // @ApiHeader({
  //   name: 'apiKey',
  //   description: 'Custom header',
  // })
  async queryData(@Body() nativeQuery: NativeQueryDto): Promise<any> {
    // return this.appService.getHello();
    return await this.nativeQuery.executeNativeQuery(nativeQuery.query);
  }
}
