import { NestFactory } from '@nestjs/core';
import Airtable from 'airtable';
import { AppModule } from 'apps/airtable/src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

  await app.listen(8080);
}
bootstrap();
