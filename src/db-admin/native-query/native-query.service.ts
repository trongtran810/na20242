// example.service.ts
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class NativeQueryService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async executeNativeQuery(dbName: string, query: string): Promise<any> {
    try {
      await this.connection.query(`USE ${dbName};`);
      const result = await this.connection.query(query); // Example with parameters
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  isReadOnlyQuery(query: string): boolean {
    const trimmedQuery = query.trim().toUpperCase();
    return trimmedQuery.startsWith('SELECT');
  }

  async executeReadOnlyNativeQuery(dbName: string, query: string): Promise<any> {
    // Validate if the query is read-only
    if (!this.isReadOnlyQuery(query)) {
      return { success: false, error: 'Only read-only query is allowed' };
    }
    try {
      await this.connection.query(`USE ${dbName};`);
      const result = await this.connection.query(query);
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
