import { CheckCircle2Icon, TriangleAlertIcon } from 'lucide-react'

import { useState } from 'react'

import { notifyError, notifySuccess } from '@/shared/lib/notify'
import { ConfirmAction } from '@/shared/ui/kit/ConfirmAction'
import { Button } from '@/shared/ui/shadcn/animate-ui/components/buttons/button'

import { OpenMessengerChatModal } from '../chat/OpenMessengerChatModal'
import { useMessengers, useMessengerStatus } from '../common/api'
import { MESSENGERS } from '../common/channels'
import { MessengerIcon } from '../common/MessengerIcon'
import type { MessengerChannel } from '../common/types'
import { useUnlinkMessenger } from '../link/api'
import { LinkMessengerModal } from '../link/LinkMessengerModal'

// Привязанные мессенджеры: вход без пароля, уведомления и ответы клиентам из группы поддержки.
// Показываем только мессенджеры, подключённые на сервере
export const MessengerAccounts = () => {
  const { data: messengers = [], isPending } = useMessengers()

  if (isPending) return null
  if (messengers.length === 0) {
    return <p className='text-body-sm text-slate'>Мессенджеры на сервере не подключены</p>
  }

  return (
    <div className='flex max-w-xl flex-col gap-4'>
      <p className='text-body-sm text-slate'>
        Привяжите мессенджер, чтобы входить без пароля, получать уведомления и отвечать клиентам из группы поддержки.
      </p>
      <ul className='divide-ash flex flex-col divide-y'>
        {messengers.map(({ channel }) => (
          <MessengerRow
            key={channel}
            channel={channel}
          />
        ))}
      </ul>
    </div>
  )
}

const MessengerRow = ({ channel }: { channel: MessengerChannel }) => {
  const { title } = MESSENGERS[channel]
  const { linked, dialogStarted } = useMessengerStatus(channel)
  const unlink = useUnlinkMessenger(channel)
  const [linkOpen, setLinkOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <li className='flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <MessengerIcon
          channel={channel}
          className='mt-0.5 size-5 shrink-0'
        />
        <div className='flex flex-col gap-1'>
          <span className='text-body-sm font-medium'>{title}</span>
          {!linked ? (
            <span className='text-caption text-slate'>Не привязан</span>
          ) : dialogStarted ? (
            <span className='text-caption text-slate flex items-center gap-1'>
              <CheckCircle2Icon className='text-teal size-3.5' /> Привязан, уведомления приходят
            </span>
          ) : (
            // Привязка открывает чат сам, но пользователь мог закрыть его или заблокировать бота
            <span className='text-caption text-destructive flex items-center gap-1'>
              <TriangleAlertIcon className='size-3.5' /> Чат с ботом не открыт — уведомления не приходят
            </span>
          )}
        </div>
      </div>

      <div className='flex gap-2'>
        {!linked && <Button onClick={() => setLinkOpen(true)}>Привязать</Button>}
        {linked && !dialogStarted && (
          <Button
            variant='secondary'
            onClick={() => setChatOpen(true)}
          >
            Открыть чат
          </Button>
        )}
        {linked && (
          <ConfirmAction
            trigger={<Button variant='ghost' />}
            title={`Отвязать ${title}?`}
            description={`Вход через ${title} и уведомления в нём перестанут работать. Привязать снова можно в любой момент.`}
            confirmLabel='Отвязать'
            onConfirm={() =>
              unlink.mutateAsync(undefined, { onSuccess: notifySuccess(`${title} отвязан`), onError: notifyError })
            }
          >
            Отвязать
          </ConfirmAction>
        )}
      </div>

      <LinkMessengerModal
        channel={channel}
        open={linkOpen}
        onOpenChange={setLinkOpen}
      />
      <OpenMessengerChatModal
        channel={channel}
        open={chatOpen}
        onOpenChange={setChatOpen}
      />
    </li>
  )
}
