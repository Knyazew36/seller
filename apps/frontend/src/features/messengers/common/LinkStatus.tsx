import { Button } from '@/shared/ui/shadcn/animate-ui/components/buttons/button'
import { Spinner } from '@/shared/ui/shadcn/spinner'

type LinkStatusProps = {
  /** Ссылку ещё создаём */
  pending: boolean
  /** Ссылка протухла или вход отклонён — показываем причину и «Получить новую» */
  stale: string | null
  onRetry: () => void
  children: React.ReactNode
}

// Общее для модалок с QR: «создаём ссылку…», сама ссылка, «устарела — получить новую»
export const LinkStatus = ({ pending, stale, onRetry, children }: LinkStatusProps) => (
  <div className='flex min-h-[288px] flex-col items-center justify-center gap-4'>
    {stale ? (
      <>
        <p className='text-body-sm text-slate'>{stale}</p>
        <Button onClick={onRetry}>Получить новую ссылку</Button>
      </>
    ) : pending ? (
      <p className='text-body-sm text-slate flex items-center gap-2'>
        <Spinner /> Создаём ссылку…
      </p>
    ) : (
      children
    )}
  </div>
)
