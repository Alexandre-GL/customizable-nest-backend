import { DynamicModule, Global, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BaseService } from './base.service';
import { MessagingModule } from './messaging/messaging.module';
import { services, Services } from './services';

@Global()
@Module({
  providers: [BaseService],
  exports: [BaseService],
  controllers: [],
  imports: [
    MessagingModule,
    RouterModule.register([
      {
        path: 'messaging',
        module: MessagingModule,
      },
    ]),
  ],
})
export class BaseModule {
  static forRoot(config?: Partial<Services>): DynamicModule {
    const providers = (
      Object.keys(services) as Array<keyof typeof services>
    ).map((key) => {
      return {
        provide: services[key].provide,
        useClass: (config && config[key]) || services[key].service,
      };
    });

    return {
      module: BaseModule,
      providers: providers,
      exports: providers,
      imports: [
        MessagingModule,
        RouterModule.register([
          {
            path: 'messaging',
            module: MessagingModule,
          },
        ]),
      ],
    };
  }
}
