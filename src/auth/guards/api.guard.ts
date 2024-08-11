import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import type { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const key = req.headers['api_key'] ?? req.query.api_key; // checks the header, moves to query if null
    return key == this.config.get('ApiKey');
    // return this.apiKeyService.isKeyValid(key);
  }
}
