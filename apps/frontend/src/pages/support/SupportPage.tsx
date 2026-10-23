import { SupportInbox } from '@app/support-chat-react'
import { ArrowLeftIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

import { useState } from 'react'

import { useMe } from '@/entities/session'
import { createSupportOperatorClient, SUPPORT_ASSET_BASE_URL } from '@/entities/support'
import '@/entities/support/support-theme.css'
import { ROUTES } from '@/shared/config/paths'
import { notifyError } from '@/shared/lib/notify'
import { PageLoader } from '@/shared/ui/kit/PageLoader'
import { StateView } from '@/shared/ui/kit/StateView'

const CONVERSATION_PARAM = 'conversation'

// Инбокс операторов поддержки — платформенных админов. Открытый диалог — в адресе (?conversation=),
// туда же ведёт кнопка из оповещения в мессенджере
const SupportPage = () => {
  const { data: me, isPending } = useMe()
  const [searchParams, setSearchParams] = useSearchParams()
  const [client] = useState(createSupportOperatorClient)

  const selectedId = Number(searchParams.get(CONVERSATION_PARAM)) || null

  if (isPending) return <PageLoader />

  if (!me?.capabilities.isPlatformAdmin) {
    return (
      <main className='mx-auto flex min-h-svh max-w-3xl items-center p-4'>
        <StateView
          state='error'
          className='w-full'
          error={{ title: 'Нет доступа', description: 'Чат поддержки доступен только операторам платформы.' }}
        />
      </main>
    )
  }

  return (
    <main className='flex h-svh flex-col gap-4 p-4 md:p-6'>
      <header className='flex items-center gap-3'>
        <Link
          to={ROUTES.HOME}
          className='hover:bg-mist text-smoke flex size-9 items-center justify-center rounded-full transition-colors'
          aria-label='В кабинет'
        >
          <ArrowLeftIcon className='size-5' />
        </Link>
        <h1 className='section-heading text-heading-sm'>Поддержка</h1>
      </header>
      <SupportInbox
        client={client}
        operatorId={me.id}
        selectedId={selectedId}
        onSelect={id =>
          setSearchParams(params => {
            if (id) params.set(CONVERSATION_PARAM, String(id))
            else params.delete(CONVERSATION_PARAM)
            return params
          })
        }
        onError={notifyError}
        assetBaseUrl={SUPPORT_ASSET_BASE_URL}
        className='min-h-0 flex-1'
      />
    </main>
  )
}

export default SupportPage
