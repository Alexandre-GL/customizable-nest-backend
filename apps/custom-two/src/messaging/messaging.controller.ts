import { Controller, Get, Inject } from '@nestjs/common';
import { MessagingController } from 'base/base/messaging/messaging.controller';
import { MessagingServiceCustom } from './messaging.service';

@Controller()
export class MessagingControllerCustom extends MessagingController {
  constructor(
    @Inject('MESSAGING_SERVICE')
    messagingService: MessagingServiceCustom,
  ) {
    super(messagingService);
  }

  @Get('hello')
  async hello(): Promise<string> {
    return 'Hello!';
  }
}
