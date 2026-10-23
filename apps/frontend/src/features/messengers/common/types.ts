/** Мессенджер (MessengerChannelKey сервера) */
export type MessengerChannel = 'TELEGRAM' | 'MAX' | 'VK'

/** GET /messengers/list: подключённый в этом окружении мессенджер */
export interface MessengerConfig {
  channel: MessengerChannel
  /** Ссылка на чат с ботом */
  chatUrl: string
}

/** Ссылка на бота, где действие (вход, привязка) подтверждается кнопкой */
export interface MessengerLink {
  url: string
  /** unix ms — после этого ссылка не работает */
  expiresAt: number
}
