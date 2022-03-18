import { Module } from '@nestjs/common';
import { MessagingModule } from 'base/base/messaging/messaging.module';
import { MessagingControllerCustom } from './messaging.controller';
import { MessagingServiceCustom } from './messaging.service';

@Module({
  controllers: [MessagingControllerCustom],
  providers: [
    {
      provide: 'MESSAGING_SERVICE',
      useClass: MessagingServiceCustom,
    },
  ],
})
export class MessagingModuleCustom extends MessagingModule {}
