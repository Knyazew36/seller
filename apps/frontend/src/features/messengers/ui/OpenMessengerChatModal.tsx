import { useEffect } from 'react'

import { type MessengerChannel, MESSENGERS, useMessengers, useMessengerStatus } from '@/entities/messenger'
import { useMe } from '@/entities/session'
import { notifySuccess } from '@/shared/lib/notify'
import { DeeplinkQr } from '@/shared/ui/kit/DeeplinkQr'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/shadcn/dialog'

type OpenMessengerChatModalProps = {
  channel: MessengerChannel
  open: boolean
  onOpenChange: (open: boolean) => void
}

const POLL_MS = 3000

// Мессенджер привязан, но чат с ботом не открыт (или бот заблокирован) — уведомления не доходят:
// мессенджер не даёт боту написать первым. Окно закрывается само, как только сервер отметит чат открытым
export const OpenMessengerChatModal = ({ channel, open, onOpenChange }: OpenMessengerChatModalProps) => {
  const { title, openChatHint } = MESSENGERS[channel]

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Подключить уведомления {title}</DialogTitle>
          <DialogDescription>
            {openChatHint} — без этого бот не сможет написать вам первым. Окно закроется само, как только это
            произойдёт.
          </DialogDescription>
        </DialogHeader>
        {open && (
          <ChatFlow
            channel={channel}
            onDone={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

const ChatFlow = ({ channel, onDone }: { channel: MessengerChannel; onDone: () => void }) => {
  const { title } = MESSENGERS[channel]
  const { data: messengers } = useMessengers()
  const { dialogStarted } = useMessengerStatus(channel)
  const chatUrl = messengers?.find(item => item.channel === channel)?.chatUrl
  useMe(POLL_MS)

  useEffect(() => {
    if (!dialogStarted) return
    notifySuccess(`Уведомления ${title} подключены`)()
    onDone()
  }, [dialogStarted, title, onDone])

  return (
    <div className='flex flex-col items-center'>
      {chatUrl ? (
        <DeeplinkQr
          url={chatUrl}
          openLabel='Открыть чат с ботом'
        />
      ) : (
        <p className='text-body-sm text-slate'>Бот {title} не подключён на сервере</p>
      )}
    </div>
  )
}
