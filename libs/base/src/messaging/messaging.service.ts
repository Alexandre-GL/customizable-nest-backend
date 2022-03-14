import { Injectable } from '@nestjs/common';
import { Message } from './types';

interface IMessageService {
  get messages(): Message[];
}

@Injectable()
export class MessagingService implements IMessageService {
  get messages(): Message[] {
    return [{ msg: 'Standard message' }];
  }
}
