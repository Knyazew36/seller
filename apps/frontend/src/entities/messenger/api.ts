import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { type Me, sessionKeys, useMe } from '@/entities/session'
import { http } from '@/shared/api'

import { MESSENGERS } from './model/channels'
import type {
  MessengerChannel,
  MessengerConfig,
  MessengerLink,
  MessengerLoginLink,
  MessengerLoginStatus,
} from './types'

export const messengerKeys = {
  list: ['messengers'] as const,
  loginStatus: (channel: MessengerChannel, token: string) => ['messengers', 'login-status', channel, token] as const,
}

/** Пока ждём подтверждения в чате, статус входа и профиль опрашиваем с этим шагом */
const POLL_MS = 2000

// ── Подключённые мессенджеры ────────────────────────────────────────────────

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

// ── Вход через мессенджер ───────────────────────────────────────────────────

/** Ссылка на чат с ботом, где пользователь подтвердит вход кнопкой */
export const useStartMessengerLogin = (channel: MessengerChannel) =>
  useMutation({
    mutationFn: () => http.post<MessengerLoginLink>(`/auth/${MESSENGERS[channel].segment}-login/start`),
  })

/** Опрос статуса, пока пользователь подтверждает вход в чате. Останавливается на финальном статусе */
export const useMessengerLoginStatus = (channel: MessengerChannel, token: string | null) =>
  useQuery({
    queryKey: messengerKeys.loginStatus(channel, token ?? ''),
    queryFn: () => http.get<MessengerLoginStatus>(`/auth/${MESSENGERS[channel].segment}-login/status`, { token }),
    enabled: Boolean(token),
    refetchInterval: query => (query.state.data && query.state.data.status !== 'pending' ? false : POLL_MS),
    staleTime: 0,
  })

// ── Привязка и отвязка ──────────────────────────────────────────────────────

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
