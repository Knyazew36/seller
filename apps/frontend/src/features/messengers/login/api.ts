import { useMutation, useQuery } from '@tanstack/react-query'

import { http } from '@/shared/api'

import { MESSENGERS } from '../common/channels'
import type { MessengerChannel, MessengerLink } from '../common/types'

/** POST /auth/*-login/start: ссылка на бота + токен, по которому браузер ждёт подтверждения */
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

const loginKeys = {
  status: (channel: MessengerChannel, token: string) => ['messengers', 'login-status', channel, token] as const,
}

/** Пока ждём подтверждения в чате, статус входа опрашиваем с этим шагом */
const POLL_MS = 2000

/** Ссылка на чат с ботом, где пользователь подтвердит вход кнопкой */
export const useStartMessengerLogin = (channel: MessengerChannel) =>
  useMutation({
    mutationFn: () => http.post<MessengerLoginLink>(`/auth/${MESSENGERS[channel].segment}-login/start`),
  })

/** Опрос статуса, пока пользователь подтверждает вход в чате. Останавливается на финальном статусе */
export const useMessengerLoginStatus = (channel: MessengerChannel, token: string | null) =>
  useQuery({
    queryKey: loginKeys.status(channel, token ?? ''),
    queryFn: () => http.get<MessengerLoginStatus>(`/auth/${MESSENGERS[channel].segment}-login/status`, { token }),
    enabled: Boolean(token),
    refetchInterval: query => (query.state.data && query.state.data.status !== 'pending' ? false : POLL_MS),
    staleTime: 0,
  })
