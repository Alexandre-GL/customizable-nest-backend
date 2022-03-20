import { DynamicModule, Global, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { Modules, modules } from './modules';

@Global()
@Module({})
export class BaseModule {
  static forRoot(config?: Partial<{ modules: Modules }>): DynamicModule {
    const mergedModules = (
      Object.keys(modules) as Array<keyof typeof modules>
    ).map((key) => {
      return (config?.modules && config?.modules[key]) || modules[key];
    });

    return {
      module: BaseModule,
      imports: [
        ...mergedModules.map((v) => v.module),
        RouterModule.register(mergedModules),
      ],
    };
  }
}
