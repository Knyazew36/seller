import type { SupportTimelineMessage, SupportVisitorClient } from '@app/support-chat-client'

import { useEffect, useMemo, useState } from 'react'

import { cx } from '../cx'
import { ChatIcon, CloseIcon, HeadsetIcon } from '../icons'
import { mergeLocale, type SupportLocaleOverride } from '../locale'
import { badge, button, dot, iconButtonInverse, state as stateUi, typing } from '../ui'
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
  const [replyTo, setReplyTo] = useState<SupportTimelineMessage | null>(null)

  // Новый диалог (прошлый закрыли) — цитата из старого уже ни к чему
  useEffect(() => setReplyTo(null), [timeline.conversationId])

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
  // Клиенту не важно, кто именно из операторов ответил: везде просто «Оператор»
  const messages = useMemo(() => timeline.messages.map(withoutOperatorName), [timeline.messages])

  // «Подключение…» клиенту не показываем: сообщения и так ждут в очереди и уйдут, когда связь вернётся
  const subtitle = state.operatorsOnline > 0 ? locale.operatorsOnline : locale.operatorsOffline

  return (
    <div
      className={cx(
        'scw-root scw-widget scw:fixed scw:right-(--scw-offset-side) scw:bottom-(--scw-offset-bottom) scw:z-60 scw:flex scw:flex-col scw:items-end scw:gap-3 scw:max-[480px]:right-4',
        className,
      )}
      style={offsetBottom ? { ['--scw-offset-bottom' as string]: `${offsetBottom}px` } : undefined}
    >
      {open && (
        <section
          className={cx(
            'scw:flex scw:h-[min(600px,calc(100dvh_-_120px))] scw:w-95 scw:animate-pop scw:flex-col scw:overflow-hidden scw:rounded-3xl scw:border scw:border-border scw:bg-bg scw:shadow-panel',
            // На телефоне окно на весь экран
            'scw:max-[480px]:fixed scw:max-[480px]:inset-0 scw:max-[480px]:h-dvh scw:max-[480px]:w-auto scw:max-[480px]:rounded-none scw:max-[480px]:border-0',
          )}
          role='dialog'
          aria-label={locale.title}
        >
          <header className='scw:flex scw:flex-none scw:items-center scw:gap-3 scw:bg-own-bubble scw:py-3.5 scw:pr-3 scw:pl-4.5 scw:text-own-text'>
            <Avatar
              name={locale.title}
              icon={<HeadsetIcon />}
            />
            <div className='scw:flex scw:min-w-0 scw:flex-1 scw:flex-col'>
              <span className='scw:text-lg scw:font-bold'>{locale.title}</span>
              <span className='scw:inline-flex scw:items-center scw:gap-1.5 scw:text-xs scw:opacity-75'>
                <span className={dot(state.operatorsOnline > 0 && state.connected)} />
                {subtitle}
              </span>
            </div>
            <button
              type='button'
              className={iconButtonInverse}
              aria-label={locale.closeLabel}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </header>

          {state.status === 'error' ? (
            <div className={stateUi.root}>
              <div className={stateUi.title}>{locale.errorTitle}</div>
              <div className={stateUi.text}>{state.error}</div>
              <button
                type='button'
                className={cx(button, 'scw:mt-2')}
                onClick={() => void client.restart()}
              >
                {locale.errorRetry}
              </button>
            </div>
          ) : (
            <MessageList
              messages={messages}
              ownAuthor='CONTACT'
              otherReadSeq={conversation?.operatorReadSeq ?? 0}
              loading={timeline.loading}
              hasMoreBefore={timeline.hasMoreBefore}
              loadingOlder={timeline.loadingOlder}
              onLoadOlder={() => void client.loadOlder()}
              onRetry={key => client.retry(key)}
              onDiscard={key => client.discard(key)}
              onReply={setReplyTo}
              onRevealSeq={seq => client.timeline.loadUntil(seq)}
              assetBaseUrl={assetBaseUrl}
              locale={locale}
              showAuthorNames
              empty={
                !timeline.loading && (
                  <div className={stateUi.root}>
                    <ChatIcon
                      width={32}
                      height={32}
                      className={stateUi.icon}
                    />
                    <div className={stateUi.title}>{locale.emptyTitle}</div>
                    <div className={stateUi.text}>{locale.emptyText}</div>
                  </div>
                )
              }
              footer={
                state.operatorTyping !== null && (
                  <div className={typing}>
                    {locale.operatorTyping}
                  </div>
                )
              }
            />
          )}

          <Composer
            locale={locale}
            disabled={state.status === 'error'}
            autoFocus
            replyTo={replyTo}
            onCancelReply={() => setReplyTo(null)}
            ownAuthor='CONTACT'
            onSend={(text, files) => {
              client.send(text, files, { replyTo })
              setReplyTo(null)
            }}
            onTyping={() => client.notifyTyping()}
          />
        </section>
      )}

      <button
        type='button'
        className={cx(
          'scw:relative scw:inline-flex scw:size-14 scw:items-center scw:justify-center scw:rounded-full scw:bg-accent scw:text-accent-text scw:shadow-panel scw:transition-transform scw:hover:scale-105',
          // Окно на телефоне во весь экран, у него свой крестик
          open && 'scw:max-[480px]:hidden',
        )}
        aria-label={open ? locale.closeLabel : locale.launcherLabel}
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        {/* Окно закрыто, а оператор ответил — волны от кнопки, пока не откроют */}
        {!open && state.unread > 0 && (
          <>
            <span className={ring} />
            <span className={cx(ring, 'scw:[animation-delay:0.9s]')} />
          </>
        )}
        {open ? (
          <CloseIcon
            width={26}
            height={26}
          />
        ) : (
          <ChatIcon
            width={26}
            height={26}
          />
        )}
        {!open && state.unread > 0 && (
          <span className={cx(badge, 'scw:absolute scw:-top-0.5 scw:-right-0.5 scw:border-2 scw:border-bg')}>{state.unread > 99 ? '99+' : state.unread}</span>
        )}
      </button>
    </div>
  )
}

const withoutOperatorName = (message: SupportTimelineMessage): SupportTimelineMessage => ({
  ...message,
  authorName: message.author === 'OPERATOR' ? null : message.authorName,
  replyTo:
    message.replyTo?.author === 'OPERATOR' ? { ...message.replyTo, authorName: null } : message.replyTo,
})

// -z-10 — под кнопкой: волна выходит из-за её края и не перекрывает иконку
const ring =
  'scw:pointer-events-none scw:absolute scw:inset-0 scw:-z-10 scw:animate-ring scw:rounded-full scw:bg-accent scw:motion-reduce:hidden'
