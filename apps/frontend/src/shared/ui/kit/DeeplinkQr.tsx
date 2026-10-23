import { CheckIcon, CopyIcon, ExternalLinkIcon } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

import { useState } from 'react'

import { notifySuccess } from '@/shared/lib/notify'
import { Button, buttonVariants } from '@/shared/ui/shadcn/animate-ui/components/buttons/button'

type DeeplinkQrProps = {
  /** Диплинк на чат с ботом: https://t.me/<bot>?start=…, https://max.ru/<bot>?start=… */
  url: string
  /** Текст главной кнопки, например «Открыть в Telegram» */
  openLabel: string
}

const COPIED_RESET_MS = 2000

// QR + «Открыть» + «Скопировать» для ссылок на ботов: на компьютере QR сканируют телефоном,
// на телефоне ссылку открывают кнопкой. Общий блок модалок входа, привязки и открытия чата
export const DeeplinkQr = ({ url, openLabel }: DeeplinkQrProps) => {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    void navigator.clipboard.writeText(url).then(() => {
      notifySuccess('Ссылка скопирована')()
      setCopied(true)
      setTimeout(() => setCopied(false), COPIED_RESET_MS)
    })
  }

  return (
    <div className='flex w-full flex-col items-center gap-4'>
      {/* Белая подложка в обеих темах: на тёмном фоне QR хуже сканируется */}
      <div className='rounded-xl bg-white p-3'>
        <QRCodeSVG
          value={url}
          size={192}
        />
      </div>
      <div className='flex w-full flex-col gap-2 sm:flex-row'>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className={buttonVariants({ variant: 'accent', className: 'flex-1' })}
        >
          <ExternalLinkIcon /> {openLabel}
        </a>
        <Button
          className='flex-1'
          variant='secondary'
          onClick={copy}
          disabled={copied}
        >
          {copied ? <CheckIcon /> : <CopyIcon />} {copied ? 'Скопировано' : 'Скопировать'}
        </Button>
      </div>
    </div>
  )
}
