import { MessagingModule } from './messaging/messaging.module';

export const modules = {
  messaging: {
    module: MessagingModule,
    path: 'messaging',
  },
};

export type Modules = typeof modules;
