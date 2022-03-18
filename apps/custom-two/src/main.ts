import { NestFactory } from '@nestjs/core';
import { BaseModule } from 'base/base';
import { MessagingModuleCustom } from './messaging/messaging.module';

async function bootstrap() {
  const app = await NestFactory.create(
    BaseModule.forRoot({
      modules: {
        messaging: {
          module: MessagingModuleCustom,
          path: 'messaging',
        },
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
