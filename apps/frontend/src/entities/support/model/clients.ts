import { SupportOperatorClient, SupportVisitorClient } from '@app/support-chat-client'

import { apiDomain, getAccessToken } from '@/shared/api'
import { getMiniappAuthorization } from '@/shared/miniapp'

// Тот же заголовок, что ставит $api: Bearer после входа или подписанные данные мини-приложения
const getAuthorization = (): string | null => {
  const token = getAccessToken()
  return token ? `Bearer ${token}` : getMiniappAuthorization()
}

let visitor: SupportVisitorClient | null = null

/** Чат поддержки со стороны пользователя — один на вкладку: виджет живёт во всём кабинете. */
export const getSupportVisitorClient = (): SupportVisitorClient => {
  visitor ??= new SupportVisitorClient({ baseUrl: apiDomain, getAuthorization })
  return visitor
}

/** Инбокс операторов — создаётся страницей поддержки и закрывается вместе с ней. */
export const createSupportOperatorClient = (): SupportOperatorClient =>
  new SupportOperatorClient({ baseUrl: apiDomain, getAuthorization })

/** База для путей файлов от сервера (/uploads/...) — тот же адрес API. */
export const SUPPORT_ASSET_BASE_URL = apiDomain
