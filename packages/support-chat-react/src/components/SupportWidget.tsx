import type { SupportVisitorClient } from '@app/support-chat-client'

import { useEffect, useMemo, useState } from 'react'

import { ChatIcon, CloseIcon, HeadsetIcon, StarIcon } from '../icons'
import { mergeLocale, type SupportLocaleOverride } from '../locale'
import { useStoreState } from '../use-store'

import { Avatar } from './Avatar'
import { Composer } from './Composer'
import { MessageList } from './MessageList'

export interface SupportWidgetProps {
  client: SupportVisitorClient
  /** База для путей файлов от сервера (адрес API). */
  assetBaseUrl?: string
  locale?: SupportLocaleOverride
  /** Подключиться сразу (для счётчика непрочитанного), а не при первом открытии. По умолчанию true. */
  startOnMount?: boolean
  /** Отступ кнопки от края, если внизу страницы своя панель (мобильное меню). */
  offsetBottom?: number
  className?: string
}

/** Плавающая кнопка и окно чата посетителя. */
export const SupportWidget = ({
  client,
  assetBaseUrl,
  locale: localeOverride,
  startOnMount = true,
  offsetBottom,
  className,
}: SupportWidgetProps) => {
  const locale = useMemo(() => mergeLocale(localeOverride), [localeOverride])
  const state = useStoreState(client.store)
  const timeline = useStoreState(client.timeline.store)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (startOnMount) void client.start()
  }, [client, startOnMount])

  useEffect(() => {
    if (open) void client.start()
  }, [client, open])

  // Окно открыто и вкладка видна — всё в ленте прочитано
  useEffect(() => {
    if (!open || state.unread === 0 || document.visibilityState === 'hidden') return
    void client.markRead()
  }, [client, open, state.unread, timeline.messages])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const conversation = state.conversation
  const askRating = conversation && (conversation.status === 'RESOLVED' || conversation.status === 'CLOSED')

  const subtitle =
    state.status === 'ready' && !state.connected
      ? locale.connecting
      : state.operatorsOnline > 0
        ? locale.operatorsOnline
        : locale.operatorsOffline

  return (
    <div
      className={`scw-root scw-widget${className ? ` ${className}` : ''}`}
      style={offsetBottom ? { ['--scw-offset-bottom' as string]: `${offsetBottom}px` } : undefined}
    >
      {open && (
        <section
          className='scw-panel'
          role='dialog'
          aria-label={locale.title}
        >
          <header className='scw-panel__header'>
            <Avatar
              name={locale.title}
              icon={<HeadsetIcon />}
              className='scw-panel__avatar'
            />
            <div className='scw-panel__heading'>
              <span className='scw-panel__title'>{locale.title}</span>
              <span className='scw-panel__subtitle'>
                <span className={`scw-dot${state.operatorsOnline > 0 && state.connected ? 'scw-dot--online' : ''}`} />
                {subtitle}
              </span>
            </div>
            <button
              type='button'
              className='scw-icon-button scw-icon-button--inverse'
              aria-label={locale.closeLabel}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </header>

          {state.status === 'error' ? (
            <div className='scw-state'>
              <div className='scw-state__title'>{locale.errorTitle}</div>
              <div className='scw-state__text'>{state.error}</div>
              <button
                type='button'
                className='scw-button'
                onClick={() => void client.restart()}
              >
                {locale.errorRetry}
              </button>
            </div>
          ) : (
            <MessageList
              messages={timeline.messages}
              ownAuthor='CONTACT'
              otherReadSeq={conversation?.operatorReadSeq ?? 0}
              hasMoreBefore={timeline.hasMoreBefore}
              loadingOlder={timeline.loadingOlder}
              onLoadOlder={() => void client.loadOlder()}
              onRetry={key => client.retry(key)}
              onDiscard={key => client.discard(key)}
              assetBaseUrl={assetBaseUrl}
              locale={locale}
              showAuthorNames
              empty={
                !timeline.loading && (
                  <div className='scw-state'>
                    <ChatIcon
                      width={32}
                      height={32}
                      className='scw-state__icon'
                    />
                    <div className='scw-state__title'>{locale.emptyTitle}</div>
                    <div className='scw-state__text'>{locale.emptyText}</div>
                  </div>
                )
              }
              footer={
                <>
                  {askRating && (
                    <Rating
                      value={conversation.rating}
                      title={conversation.rating ? locale.rateThanks : locale.rateTitle}
                      onRate={rating => void client.rate(rating)}
                    />
                  )}
                  {state.operatorTyping !== null && (
                    <div className='scw-typing'>
                      {state.operatorTyping ? `${state.operatorTyping} ${locale.typing}` : locale.operatorTyping}
                    </div>
                  )}
                </>
              }
            />
          )}

          <Composer
            locale={locale}
            disabled={state.status === 'error'}
            autoFocus
            onSend={(text, files) => client.send(text, files)}
            onTyping={() => client.notifyTyping()}
          />
        </section>
      )}

      <button
        type='button'
        className='scw-launcher'
        aria-label={open ? locale.closeLabel : locale.launcherLabel}
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && state.unread > 0 && <span className='scw-badge'>{state.unread > 99 ? '99+' : state.unread}</span>}
      </button>
    </div>
  )
}

const Rating = ({
  value,
  title,
  onRate,
}: {
  value: number | null
  title: string
  onRate: (rating: number) => void
}) => (
  <div className='scw-rating'>
    <span>{title}</span>
    <div className='scw-rating__stars'>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type='button'
          aria-label={`${star}`}
          className={value !== null && star <= value ? 'scw-rating__star--on' : undefined}
          onClick={() => onRate(star)}
        >
          <StarIcon />
        </button>
      ))}
    </div>
  </div>
)
