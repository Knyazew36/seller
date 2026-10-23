import { useMutation, useQueryClient } from '@tanstack/react-query'

import { type Me, sessionKeys } from '@/entities/session'
import { http } from '@/shared/api'

import { MESSENGERS } from '../common/channels'
import type { MessengerChannel, MessengerLink } from '../common/types'

/** Ссылка на чат с ботом, где пользователь подтвердит привязку к текущему аккаунту */
export const useStartMessengerLink = (channel: MessengerChannel) =>
  useMutation({
    mutationFn: () => http.post<MessengerLink>(`/user/me/link-${MESSENGERS[channel].segment}/start`),
  })

export const useUnlinkMessenger = (channel: MessengerChannel) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => http.post<Me>(`/user/me/${MESSENGERS[channel].segment}/unlink`),
    onSuccess: me => queryClient.setQueryData(sessionKeys.me, me),
  })
}
