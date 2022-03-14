import { NestFactory } from '@nestjs/core';
import { BaseModule } from 'base/base';

async function bootstrap() {
  const app = await NestFactory.create(BaseModule.forRoot());
  await app.listen(3000);
}
bootstrap();
