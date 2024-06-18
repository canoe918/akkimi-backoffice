import { NestFactory } from '@nestjs/core';
import { ApiBffModule } from './api-bff.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiBffModule);
  await app.listen(3000);
}
bootstrap();
