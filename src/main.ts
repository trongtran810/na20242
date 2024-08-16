import { Logger as NestLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { middleware } from './app.middleware';
import { AppModule } from './app.module';

async function setupSwagger(app: NestExpressApplication) {
  const config = new DocumentBuilder()
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-API-KEY',
        in: 'header',
      },
      'api-key', // This name is important as it will be used to reference this security schema in the endpoints
    )
    .setTitle('Nam An API list')
    .setDescription('Describe APIs detail of Nam An 2024 project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  if (isProduction) {
    app.enable('trust proxy');
  }

  // Express Middleware
  middleware(app);

  setupSwagger(app);

  await app.listen(process.env.PORT || 3000);

  process.env.SERVER_URL = await app.getUrl();
  return process.env.SERVER_URL;
}

void (async (): Promise<void> => {
  try {
    const url = await bootstrap();
    NestLogger.log(url, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();
