import { Module } from '@nestjs/common';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';

@Module({
  controllers: [MessagingController],
  providers: [
    {
      provide: 'MESSAGING_SERVICE',
      useClass: MessagingService,
    },
  ],
})
export class MessagingModule {}
