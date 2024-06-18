import { NestFactory } from '@nestjs/core';
import * as Airtable from 'airtable';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

  await app.listen(8080);
}
bootstrap();
