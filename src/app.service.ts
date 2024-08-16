// example.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async getAppUrl(): Promise<string> {
    return process.env.SERVER_URL;
  }
}
