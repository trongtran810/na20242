// example.service.ts
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class NativeQueryService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async executeNativeQuery(query: string): Promise<any> {
    // const query = `
    //   SELECT * FROM users;
    // `;
    const result = await this.connection.query(query); // Example with parameters
    return result;
  }
}
