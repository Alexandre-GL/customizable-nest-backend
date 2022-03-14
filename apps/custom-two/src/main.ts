import { NestFactory } from '@nestjs/core';
import { BaseModule } from 'base/base';
import { MessagingServiceCustom } from './messaging/messaging.service';

async function bootstrap() {
  const app = await NestFactory.create(
    BaseModule.forRoot({
      messagingService: MessagingServiceCustom,
    }),
  );
  await app.listen(3000);
}
bootstrap();
