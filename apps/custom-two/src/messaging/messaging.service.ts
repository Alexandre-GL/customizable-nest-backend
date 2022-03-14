import { Injectable } from '@nestjs/common';
import { MessagingService } from 'base/base';
import { Message } from 'base/base/messaging/types';

@Injectable()
export class MessagingServiceCustom extends MessagingService {
  get messages(): Message[] {
    return [
      {
        author: 'With an author',
        msg: 'Custom message',
      },
    ];
  }
}
