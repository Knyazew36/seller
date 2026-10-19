import { Marketplace } from '@/generated/prisma/client';

/** Учётные данные кабинета в расшифрованном виде — то, что лежит в MarketplaceAccount.credentials */
export type WildberriesCredentials = { token: string };
export type OzonCredentials = { clientId: string; apiKey: string };
export type AvitoCredentials = { clientId: string; clientSecret: string };

export type MarketplaceCredentials =
  | {
      marketplace: typeof Marketplace.WILDBERRIES;
      credentials: WildberriesCredentials;
    }
  | { marketplace: typeof Marketplace.OZON; credentials: OzonCredentials }
  | { marketplace: typeof Marketplace.AVITO; credentials: AvitoCredentials };

/** Результат проверки ключа на площадке */
export interface VerifiedCredentials {
  externalId: string;
  keyExpiresAt: Date | null;
  /** Без секретов: категории, роли, тип токена */
  keyInfo: Record<string, unknown>;
}

export const MARKETPLACE_TITLES: Record<Marketplace, string> = {
  WILDBERRIES: 'Wildberries',
  OZON: 'Ozon',
  AVITO: 'Avito',
};
