import { Module } from '@nestjs/common';

import { CredentialsCipherService } from './credentials-cipher.service';
import { MarketplaceAccountController } from './marketplace-account.controller';
import { MarketplaceAccountService } from './marketplace-account.service';
import { MarketplaceCredentialsVerifier } from './marketplace-credentials.verifier';

// Фабрики клиентов площадок (WbClientFactory и др.) — глобальные, из WildberriesModule/OzonModule/AvitoModule
@Module({
  controllers: [MarketplaceAccountController],
  providers: [
    MarketplaceAccountService,
    CredentialsCipherService,
    MarketplaceCredentialsVerifier,
  ],
  exports: [MarketplaceAccountService],
})
export class MarketplaceAccountModule {}
