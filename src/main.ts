import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function setupSwagger(app) {
  const config = new DocumentBuilder()
    .addSecurity('apiKey', { type: 'apiKey' })
    // .addApiKey({ type: 'apiKey', name: 'Authorisation', in: 'header' })
    .setTitle('Nam An API list')
    .setDescription('Describe APIs detail')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
