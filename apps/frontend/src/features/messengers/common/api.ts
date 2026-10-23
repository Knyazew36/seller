import { useQuery } from '@tanstack/react-query'

import { useMe } from '@/entities/session'
import { http } from '@/shared/api'

import { MESSENGERS } from './channels'
import type { MessengerChannel, MessengerConfig } from './types'

export const messengerKeys = {
  list: ['messengers'] as const,
}

/** Какие мессенджеры подключены на сервере — остальные кнопки не показываем */
export const useMessengers = () =>
  useQuery({
    queryKey: messengerKeys.list,
    queryFn: () => http.get<MessengerConfig[]>('/messengers/list'),
    // Набор мессенджеров меняется только с перезапуском сервера
    staleTime: Infinity,
  })

/**
 * Привязан ли мессенджер и открыт ли чат с ботом — разные вещи: без открытого чата мессенджер
 * не даёт боту написать первым, и уведомления не доходят.
 */
export const useMessengerStatus = (channel: MessengerChannel) => {
  const { data: me } = useMe()
  const meta = MESSENGERS[channel]
  return {
    linked: Boolean(me?.[meta.idField]),
    dialogStarted: Boolean(me?.messengerDialogs[meta.dialogKey]),
  }
}
