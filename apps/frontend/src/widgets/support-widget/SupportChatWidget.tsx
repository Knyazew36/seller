import { SupportWidget } from '@app/support-chat-react'

import { useEffect } from 'react'

import { getSupportVisitorClient, SUPPORT_ASSET_BASE_URL } from '@/entities/support'
import '@/entities/support/support-theme.css'
import { subscribeSession } from '@/shared/auth/session-events'

// Плавающий чат поддержки в кабинете. Клиент один на вкладку: при смене пользователя
// он заново входит в чат, иначе новый пользователь увидел бы переписку прошлого
export const SupportChatWidget = () => {
  const client = getSupportVisitorClient()

  useEffect(() => {
    const unsubscribe = subscribeSession(() => void client.restart())
    return () => {
      unsubscribe()
      // Вне кабинета (выход, выбор организации) сокет не нужен; виджет подключится снова при возврате
      client.stop()
    }
  }, [client])

  return (
    <SupportWidget
      client={client}
      assetBaseUrl={SUPPORT_ASSET_BASE_URL}
    />
  )
}
