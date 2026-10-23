/** Мессенджер (MessengerChannelKey сервера) */
export type MessengerChannel = 'TELEGRAM' | 'MAX' | 'VK'

/** GET /messengers/list: подключённый в этом окружении мессенджер */
export interface MessengerConfig {
  channel: MessengerChannel
  /** Ссылка на чат с ботом */
  chatUrl: string
}

/** POST /user/me/link-*\/start: ссылка на бота, где привязка подтверждается кнопкой */
export interface MessengerLink {
  url: string
  /** unix ms — после этого ссылка не работает */
  expiresAt: number
}

/** POST /auth/*-login/start: то же + токен, по которому браузер ждёт подтверждения */
export interface MessengerLoginLink extends MessengerLink {
  token: string
}

/** GET /auth/*-login/status */
export interface MessengerLoginStatus {
  /** pending — ждём кнопку в чате; confirmed — токен выдан (один раз); rejected — «Отклонить»; expired — ссылка протухла */
  status: 'pending' | 'confirmed' | 'rejected' | 'expired'
  accessToken?: string
  isNewUser?: boolean
}
