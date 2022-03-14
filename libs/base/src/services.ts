import { MessagingService } from './messaging/messaging.service';

export const services = {
  messagingService: {
    service: MessagingService,
    provide: 'MESSAGING_SERVICE',
  },
};

export type Services = Record<keyof typeof services, any>;
