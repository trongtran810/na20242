// example.service.ts
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class NativeQueryService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async executeNativeQuery(query: string): Promise<any> {
    const result = await this.connection.query(query); // Example with parameters
    return result;
  }
}
