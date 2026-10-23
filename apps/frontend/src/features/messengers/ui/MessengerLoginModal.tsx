import { useEffect } from 'react'

import {
  type MessengerChannel,
  MESSENGERS,
  useMessengerLoginStatus,
  useStartMessengerLogin,
} from '@/entities/messenger'
import { setAccessToken } from '@/shared/api'
import { notifyError, notifySuccess } from '@/shared/lib/notify'
import { DeeplinkQr } from '@/shared/ui/kit/DeeplinkQr'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/shadcn/dialog'

import { LinkStatus } from './LinkStatus'

type MessengerLoginModalProps = {
  channel: MessengerChannel
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Вход через мессенджер: QR → чат с ботом → «Подтвердить вход» → модалка получает токен.
// Без нажатия в чате вход не произойдёт — защита от присланных чужих ссылок входа
export const MessengerLoginModal = ({ channel, open, onOpenChange }: MessengerLoginModalProps) => {
  const { title } = MESSENGERS[channel]

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Войти через {title}</DialogTitle>
          <DialogDescription>
            Отсканируйте QR-код камерой телефона или откройте ссылку. Бот попросит подтвердить вход — нажмите
            «Подтвердить вход», и вы войдёте здесь автоматически.
          </DialogDescription>
        </DialogHeader>
        {/* Содержимое монтируется при открытии: каждое открытие — новая ссылка, без хвостов прошлой */}
        {open && (
          <LoginFlow
            channel={channel}
            onDone={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

const LoginFlow = ({ channel, onDone }: { channel: MessengerChannel; onDone: () => void }) => {
  const { title } = MESSENGERS[channel]
  const start = useStartMessengerLogin(channel)
  const { data: status } = useMessengerLoginStatus(channel, start.data?.token ?? null)
  const { mutate } = start

  useEffect(() => {
    mutate(undefined, { onError: notifyError })
  }, [mutate])

  useEffect(() => {
    if (status?.status !== 'confirmed' || !status.accessToken) return
    // GuestRoute увидит токен и уведёт туда, откуда пришли
    setAccessToken(status.accessToken)
    notifySuccess(status.isNewUser ? `Аккаунт создан через ${title}` : `Вы вошли через ${title}`)()
    onDone()
  }, [status, title, onDone])

  const stale =
    status?.status === 'rejected'
      ? 'Вход отклонён в чате с ботом'
      : status?.status === 'expired'
        ? 'Ссылка устарела'
        : start.isError
          ? 'Не удалось создать ссылку'
          : null

  return (
    <LinkStatus
      pending={start.isPending || !start.data}
      stale={stale}
      onRetry={() => start.mutate(undefined, { onError: notifyError })}
    >
      {start.data && (
        <>
          <DeeplinkQr
            url={start.data.url}
            openLabel={`Открыть в ${title}`}
          />
          <p className='text-caption text-slate'>Ждём подтверждения в чате с ботом…</p>
        </>
      )}
    </LinkStatus>
  )
}
