import { Controller, Get, Inject } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { Message } from './types';

@Controller()
export class MessagingController {
  constructor(
    @Inject('MESSAGING_SERVICE')
    private messagingService: MessagingService,
  ) {}

  @Get('getAllMessages')
  async findAll(): Promise<Message[]> {
    return this.messagingService.messages;
  }
}
