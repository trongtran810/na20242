import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { NativeQueryService } from './native-query.service';
import { NativeQueryDto } from './native-query.dto';
import { ApiKeyGuard } from '../../auth/guards/api.guard';

import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/common/constants/user-role.enum';
// import { AuthGuard } from 'src/auth/guards/auth.guard';
// import { RolesGuard } from 'src/auth/guards/role.guard';
// import { Roles } from 'src/common/decorators/roles.decorator';
// import { UserRole } from 'src/common/constants/user-role.enum';

@ApiTags('Hot dev')
@Controller('native-query')
export class NativeQueryController {
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

  @Post('/role-guard')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.Admin) // Only users with the Admin role can access this route
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get the corresponding response beyond a native SQL query.',
  })
  async query(@Body() nativeQuery: NativeQueryDto): Promise<any> {
    return await this.nativeQuery.executeNativeQuery(nativeQuery.queryStr);
  }
}
