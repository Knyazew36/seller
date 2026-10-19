// Обёртки для Nest: регистрируют фабрики клиентов как глобальные провайдеры.
// Ядро (wildberries/, ozon/, avito/) от Nest не зависит и работает в любом Node-проекте.
import { type DynamicModule, Logger, Module } from '@nestjs/common'

import { AVITO_LOG_CONTEXT, AvitoClientFactory, type AvitoClientFactoryOptions } from '../avito'
import { OZON_LOG_CONTEXT, OzonClientFactory, type OzonClientFactoryOptions } from '../ozon'
import { WB_LOG_CONTEXT, WbClientFactory, type WbClientFactoryOptions } from '../wildberries'

@Module({})
export class WildberriesModule {
  /** Даёт WbClientFactory во всём приложении. Без env: токены кабинетов передаются в create(). */
  public static forRoot(options: WbClientFactoryOptions = {}): DynamicModule {
    return {
      module: WildberriesModule,
      global: true,
      providers: [
        {
          provide: WbClientFactory,
          useFactory: () => new WbClientFactory({ logger: new Logger(WB_LOG_CONTEXT), ...options }),
        },
      ],
      exports: [WbClientFactory],
    }
  }
}

@Module({})
export class OzonModule {
  /** Даёт OzonClientFactory во всём приложении. Ключи кабинетов передаются в createSeller/createPerformance. */
  public static forRoot(options: OzonClientFactoryOptions = {}): DynamicModule {
    return {
      module: OzonModule,
      global: true,
      providers: [
        {
          provide: OzonClientFactory,
          useFactory: () => new OzonClientFactory({ logger: new Logger(OZON_LOG_CONTEXT), ...options }),
        },
      ],
      exports: [OzonClientFactory],
    }
  }
}

@Module({})
export class AvitoModule {
  /** Даёт AvitoClientFactory во всём приложении. Ключи или токены аккаунтов передаются в create(). */
  public static forRoot(options: AvitoClientFactoryOptions = {}): DynamicModule {
    return {
      module: AvitoModule,
      global: true,
      providers: [
        {
          provide: AvitoClientFactory,
          useFactory: () => new AvitoClientFactory({ logger: new Logger(AVITO_LOG_CONTEXT), ...options }),
        },
      ],
      exports: [AvitoClientFactory],
    }
  }
}
