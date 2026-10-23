import { useState } from 'react'

import { type MessengerChannel, MESSENGERS, useMessengers } from '@/entities/messenger'
import { Button } from '@/shared/ui/shadcn/animate-ui/components/buttons/button'

import { MessengerIcon } from './MessengerIcon'
import { MessengerLoginModal } from './MessengerLoginModal'

// Кнопки «Войти через …» на странице входа — только для мессенджеров, подключённых на сервере
export const MessengerLoginButtons = () => {
  const { data: messengers = [] } = useMessengers()
  const [active, setActive] = useState<MessengerChannel | null>(null)

  if (messengers.length === 0) return null

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-caption text-smoke flex items-center gap-3'>
        <span className='bg-ash h-px flex-1' />
        или
        <span className='bg-ash h-px flex-1' />
      </div>
      <div className='flex flex-col gap-2'>
        {messengers.map(({ channel }) => (
          <Button
            key={channel}
            variant='outline'
            onClick={() => setActive(channel)}
          >
            <MessengerIcon channel={channel} />
            Войти через {MESSENGERS[channel].title}
          </Button>
        ))}
      </div>
      {active && (
        <MessengerLoginModal
          channel={active}
          open
          onOpenChange={open => !open && setActive(null)}
        />
      )}
    </div>
  )
}
