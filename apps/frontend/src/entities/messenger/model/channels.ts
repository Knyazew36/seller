import type { Me } from '@/entities/session'

import type { MessengerChannel } from '../types'

type MessengerMeta = {
  title: string
  /** Сегмент путей сервера: auth/<segment>-login/*, user/me/link-<segment>/start, user/me/<segment>/unlink */
  segment: 'telegram' | 'max' | 'vk'
  /** Поле Me с id аккаунта в мессенджере */
  idField: 'telegramId' | 'maxId' | 'vkId'
  /** Ключ Me.messengerDialogs */
  dialogKey: keyof Me['messengerDialogs']
  /** Что сделать, чтобы бот мог писать: у VK это разрешение сообщений сообщества */
  openChatHint: string
}

// Порядок — порядок кнопок на экранах входа и в профиле
export const MESSENGERS: Record<MessengerChannel, MessengerMeta> = {
  TELEGRAM: {
    title: 'Telegram',
    segment: 'telegram',
    idField: 'telegramId',
    dialogKey: 'telegram',
    openChatHint: 'Откройте чат с ботом и нажмите «Start» (или разблокируйте бота)',
  },
  MAX: {
    title: 'MAX',
    segment: 'max',
    idField: 'maxId',
    dialogKey: 'max',
    openChatHint: 'Откройте чат с ботом и нажмите «Начать»',
  },
  VK: {
    title: 'VK',
    segment: 'vk',
    idField: 'vkId',
    dialogKey: 'vk',
    openChatHint: 'Откройте сообщество и разрешите ему присылать сообщения',
  },
}
