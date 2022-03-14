import { Module } from '@nestjs/common';
import { MessagingServiceCustom } from './messaging.service';

@Module({
  providers: [MessagingServiceCustom],
})
export class MessagingModule {}
