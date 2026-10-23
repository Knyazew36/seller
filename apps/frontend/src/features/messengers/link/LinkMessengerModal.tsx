import { useEffect, useState } from 'react'

import { useMe } from '@/entities/session'
import { notifyError, notifySuccess } from '@/shared/lib/notify'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/shadcn/dialog'

import { useMessengerStatus } from '../common/api'
import { MESSENGERS } from '../common/channels'
import { DeeplinkQr } from '../common/DeeplinkQr'
import { LinkStatus } from '../common/LinkStatus'
import type { MessengerChannel } from '../common/types'

import { useStartMessengerLink } from './api'

type LinkMessengerModalProps = {
  channel: MessengerChannel
  open: boolean
  onOpenChange: (open: boolean) => void
}

/** Профиль опрашиваем, пока ждём «Привязать» в чате */
const POLL_MS = 3000

// Привязка мессенджера к текущему аккаунту: QR → бот показывает, к какому аккаунту привязка, и ждёт
// «Привязать». Заодно открывается чат — уведомления начинают доходить сразу
export const LinkMessengerModal = ({ channel, open, onOpenChange }: LinkMessengerModalProps) => (
  <Dialog
    open={open}
    onOpenChange={onOpenChange}
  >
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Привязать {MESSENGERS[channel].title}</DialogTitle>
        <DialogDescription>
          Отсканируйте QR-код камерой телефона или откройте ссылку. Бот покажет ваш аккаунт и попросит подтвердить —
          нажмите «Привязать». Уведомления подключатся сами.
        </DialogDescription>
      </DialogHeader>
      {/* Содержимое монтируется при открытии: каждое открытие — новая ссылка */}
      {open && (
        <LinkFlow
          channel={channel}
          onDone={() => onOpenChange(false)}
        />
      )}
    </DialogContent>
  </Dialog>
)

const LinkFlow = ({ channel, onDone }: { channel: MessengerChannel; onDone: () => void }) => {
  const { title } = MESSENGERS[channel]
  const start = useStartMessengerLink(channel)
  const { linked } = useMessengerStatus(channel)
  const [expired, setExpired] = useState(false)
  const { mutate } = start
  useMe(POLL_MS)

  const request = () => {
    setExpired(false)
    mutate(undefined, { onError: notifyError })
  }

  useEffect(() => {
    mutate(undefined, { onError: notifyError })
  }, [mutate])

  // Ссылка живёт недолго — по истечении предлагаем новую
  useEffect(() => {
    if (!start.data) return
    const timer = setTimeout(() => setExpired(true), Math.max(0, start.data.expiresAt - Date.now()))
    return () => clearTimeout(timer)
  }, [start.data])

  useEffect(() => {
    if (!linked) return
    notifySuccess(`${title} привязан, уведомления подключены`)()
    onDone()
  }, [linked, title, onDone])

  return (
    <LinkStatus
      pending={start.isPending || !start.data}
      stale={expired ? 'Ссылка устарела' : start.isError ? 'Не удалось создать ссылку' : null}
      onRetry={request}
    >
      {start.data && (
        <DeeplinkQr
          url={start.data.url}
          openLabel={`Открыть в ${title}`}
        />
      )}
    </LinkStatus>
  )
}
