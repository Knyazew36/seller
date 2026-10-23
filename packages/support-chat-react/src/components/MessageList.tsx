import type { SupportTimelineMessage } from '@app/support-chat-client'

import { Fragment, type ReactNode, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { dayKey, formatDay, formatTime, resolveUrl } from '../format'
import { AlertIcon, BotIcon, CheckCheckIcon, CheckIcon, ClockIcon, HeadsetIcon } from '../icons'
import type { SupportLocale } from '../locale'

import { Avatar } from './Avatar'
import { Lightbox, type LightboxItem } from './Lightbox'

export interface MessageListProps {
  messages: SupportTimelineMessage[]
  /** Чьи сообщения — «свои» (справа): посетителю — CONTACT, оператору — OPERATOR. */
  ownAuthor: 'CONTACT' | 'OPERATOR'
  /** До какого seq прочитала другая сторона — для двойной галочки. */
  otherReadSeq: number
  hasMoreBefore: boolean
  loadingOlder: boolean
  onLoadOlder: () => void
  onRetry: (key: string) => void
  onDiscard: (key: string) => void
  assetBaseUrl?: string
  locale: SupportLocale
  /** Строка под лентой: «печатает…». */
  footer?: ReactNode
  /** Показывать подпись автора у чужих сообщений (оператору — кто из коллег ответил). */
  showAuthorNames?: boolean
  /** Аватарки у чужих сообщений. По умолчанию — да. */
  showAvatars?: boolean
  /** Имя клиента для его аватарки (в инбоксе оператора). */
  contactName?: string
  empty?: ReactNode
}

/** Насколько близко к низу считаем «пользователь читает последнее» — тогда докручиваем к новым. */
const STICK_TO_BOTTOM_PX = 120
const LOAD_OLDER_AT_PX = 80

const groupKey = (message: SupportTimelineMessage) => `${message.author}:${message.authorId ?? ''}`
const fileKey = (message: SupportTimelineMessage, fileId: number) => `${message.key}:${fileId}`

export const MessageList = (props: MessageListProps) => {
  const { messages, locale, showAvatars = true } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const anchor = useRef({ firstKey: '', lastKey: '', scrollHeight: 0, nearBottom: true })
  const [viewing, setViewing] = useState<number | null>(null)

  // Все картинки диалога по порядку — галерея листает их подряд, а не только внутри одного сообщения
  const gallery = useMemo<LightboxItem[]>(
    () =>
      messages.flatMap(message =>
        message.deletedAt
          ? []
          : message.attachments
              .filter(file => file.mime.startsWith('image/'))
              .map(file => ({
                key: fileKey(message, file.id),
                url: resolveUrl(file.url, props.assetBaseUrl),
                name: file.name,
              })),
      ),
    [messages, props.assetBaseUrl],
  )

  // Догрузили историю сверху — сохраняем позицию; пришло новое снизу — докручиваем, если читали низ
  useLayoutEffect(() => {
    const element = scrollRef.current
    if (!element) return
    const previous = anchor.current
    const firstKey = messages[0]?.key ?? ''
    const last = messages[messages.length - 1]

    if (previous.firstKey && firstKey !== previous.firstKey && last?.key === previous.lastKey) {
      element.scrollTop += element.scrollHeight - previous.scrollHeight
    } else if (last && last.key !== previous.lastKey && (previous.nearBottom || last.author === props.ownAuthor)) {
      element.scrollTop = element.scrollHeight
    }
    anchor.current = { ...anchor.current, firstKey, lastKey: last?.key ?? '', scrollHeight: element.scrollHeight }
  }, [messages, props.ownAuthor])

  const onScroll = () => {
    const element = scrollRef.current
    if (!element) return
    anchor.current.nearBottom = element.scrollHeight - element.scrollTop - element.clientHeight < STICK_TO_BOTTOM_PX
    anchor.current.scrollHeight = element.scrollHeight
    if (element.scrollTop < LOAD_OLDER_AT_PX && props.hasMoreBefore && !props.loadingOlder) props.onLoadOlder()
  }

  const openImage = (key: string) => {
    const index = gallery.findIndex(item => item.key === key)
    if (index >= 0) setViewing(index)
  }

  const avatarOf = (message: SupportTimelineMessage) => {
    if (message.author === 'BOT') {
      return (
        <Avatar
          name={locale.support}
          icon={
            <BotIcon
              width={16}
              height={16}
            />
          }
          size='sm'
        />
      )
    }
    if (message.author === 'CONTACT') {
      return (
        <Avatar
          name={props.contactName ?? locale.visitor}
          size='sm'
        />
      )
    }
    return message.authorName ? (
      <Avatar
        name={message.authorName}
        size='sm'
      />
    ) : (
      <Avatar
        name={locale.support}
        icon={
          <HeadsetIcon
            width={16}
            height={16}
          />
        }
        size='sm'
      />
    )
  }

  return (
    <div
      ref={scrollRef}
      className='scw-messages'
      onScroll={onScroll}
      role='log'
      aria-live='polite'
    >
      {props.loadingOlder && <div className='scw-messages__older'>{locale.loadOlder}</div>}
      {messages.length === 0 && props.empty}
      {messages.map((message, index) => {
        const previous = messages[index - 1]
        const next = messages[index + 1]
        const newDay = !previous || dayKey(previous.createdAt) !== dayKey(message.createdAt)
        const own = message.author === props.ownAuthor
        const firstInGroup = newDay || !previous || groupKey(previous) !== groupKey(message)
        // Аватарка — у последнего сообщения серии, как в мессенджерах
        const lastInGroup =
          !next || groupKey(next) !== groupKey(message) || dayKey(next.createdAt) !== dayKey(message.createdAt)

        return (
          <Fragment key={message.key}>
            {newDay && <div className='scw-day'>{formatDay(message.createdAt, locale)}</div>}
            {message.author === 'SYSTEM' ? (
              <div className='scw-system'>{message.text}</div>
            ) : (
              <div className={`scw-row${own ? 'scw-row--own' : ''}${lastInGroup ? 'scw-row--last' : ''}`}>
                {!own && showAvatars && <div className='scw-row__avatar'>{lastInGroup && avatarOf(message)}</div>}
                <MessageBubble
                  message={message}
                  own={own}
                  showAuthor={!!props.showAuthorNames && !own && firstInGroup}
                  read={message.localStatus === 'sent' && message.seq <= props.otherReadSeq}
                  onRetry={props.onRetry}
                  onDiscard={props.onDiscard}
                  onOpenImage={openImage}
                  assetBaseUrl={props.assetBaseUrl}
                  locale={locale}
                />
              </div>
            )}
          </Fragment>
        )
      })}
      {props.footer}
      {viewing !== null && gallery[viewing] && (
        <Lightbox
          items={gallery}
          index={viewing}
          onIndexChange={setViewing}
          onClose={() => setViewing(null)}
          locale={locale}
        />
      )}
    </div>
  )
}

interface MessageBubbleProps {
  message: SupportTimelineMessage
  own: boolean
  showAuthor: boolean
  read: boolean
  onRetry: (key: string) => void
  onDiscard: (key: string) => void
  onOpenImage: (key: string) => void
  assetBaseUrl?: string
  locale: SupportLocale
}

const MessageBubble = ({
  message,
  own,
  showAuthor,
  read,
  onRetry,
  onDiscard,
  onOpenImage,
  assetBaseUrl,
  locale,
}: MessageBubbleProps) => {
  const deleted = message.deletedAt !== null
  const className = [
    'scw-message',
    own ? 'scw-message--own' : 'scw-message--other',
    message.isInternalNote && 'scw-message--note',
    message.localStatus === 'failed' && 'scw-message--failed',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      {showAuthor && (
        <div className='scw-message__author'>
          {message.authorName ?? (message.author === 'CONTACT' ? locale.visitor : locale.support)}
        </div>
      )}
      <div className='scw-message__bubble'>
        {message.isInternalNote && <div className='scw-message__note'>{locale.noteBadge}</div>}
        {deleted ? (
          <div className='scw-message__deleted'>{locale.deleted}</div>
        ) : (
          <>
            {message.attachments.length > 0 && (
              <div
                className={`scw-message__files${message.attachments.length === 1 ? 'scw-message__files--single' : ''}`}
              >
                {message.attachments.map(file => (
                  <button
                    key={file.id}
                    type='button'
                    className='scw-message__file'
                    aria-label={`${locale.galleryOpenImage}: ${file.name}`}
                    onClick={() => onOpenImage(fileKey(message, file.id))}
                  >
                    <img
                      src={resolveUrl(file.url, assetBaseUrl)}
                      alt={file.name}
                      loading='lazy'
                    />
                  </button>
                ))}
              </div>
            )}
            {message.text && <div className='scw-message__text'>{message.text}</div>}
          </>
        )}
        <div className='scw-message__meta'>
          {message.editedAt && !deleted && <span>{locale.edited}</span>}
          <span>{formatTime(message.createdAt)}</span>
          {own && (
            <MessageStatus
              message={message}
              read={read}
              locale={locale}
            />
          )}
        </div>
      </div>
      {message.localStatus === 'failed' && (
        <div className='scw-message__error'>
          <span>{message.error}</span>
          <button
            type='button'
            onClick={() => onRetry(message.key)}
          >
            {locale.retry}
          </button>
          <button
            type='button'
            onClick={() => onDiscard(message.key)}
          >
            {locale.discard}
          </button>
        </div>
      )}
    </div>
  )
}

const MessageStatus = ({
  message,
  read,
  locale,
}: {
  message: SupportTimelineMessage
  read: boolean
  locale: SupportLocale
}) => {
  if (message.localStatus === 'sending')
    return (
      <ClockIcon
        className='scw-status'
        aria-label={locale.sending}
      />
    )
  if (message.localStatus === 'failed') return <AlertIcon className='scw-status scw-status--failed' />
  return read ? (
    <CheckCheckIcon
      className='scw-status scw-status--read'
      aria-label={locale.read}
    />
  ) : (
    <CheckIcon
      className='scw-status'
      aria-label={locale.sent}
    />
  )
}
