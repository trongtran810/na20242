import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getHello(): string {
    // return 'Hello World!';
    return this.config.get<string>('ApiKey') || '';
  }
}
