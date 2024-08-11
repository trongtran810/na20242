import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest<Request>();
    const apiKey = req.headers['x-api-key'] as string; // Ensure the key is in lowercase and cast to string

    // Check if the API key exists in the headers
    if (!apiKey) {
      return false;
    }

    // Compare the API key with the one stored in the config service
    return apiKey === this.configService.get<string>('API_KEY');
  }
}
