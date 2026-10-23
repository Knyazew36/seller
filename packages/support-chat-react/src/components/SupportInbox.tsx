import type {
  SupportConversation,
  SupportConversationStatus,
  SupportInboxFilters,
  SupportOperatorClient,
  SupportOperatorConversation,
} from '@app/support-chat-client'

import { useEffect, useMemo, useState } from 'react'

import { formatListTime } from '../format'
import { ArrowLeftIcon } from '../icons'
import { mergeLocale, type SupportLocale, type SupportLocaleOverride } from '../locale'
import { useStoreState } from '../use-store'

import { Avatar } from './Avatar'
import { Composer } from './Composer'
import { MessageList } from './MessageList'

export interface SupportInboxProps {
  client: SupportOperatorClient
  /** id текущего оператора — чтобы не показывать «Взять себе» на его же диалогах. */
  operatorId?: number
  /** Открытый диалог: управляемо снаружи (например, из адреса страницы). */
  selectedId: number | null
  onSelect: (id: number | null) => void
  /** Ошибка действия (взять, закрыть, …) — проект покажет своим тостом. */
  onError?: (error: unknown) => void
  assetBaseUrl?: string
  locale?: SupportLocaleOverride
  className?: string
}

const STATUS_TABS = (locale: SupportLocale): Array<{ label: string; status: SupportConversationStatus[] }> => [
  { label: locale.statusActive, status: ['OPEN', 'PENDING'] },
  { label: locale.statusOpen, status: ['OPEN'] },
  { label: locale.statusPending, status: ['PENDING'] },
  { label: locale.statusResolved, status: ['RESOLVED'] },
  { label: locale.statusClosed, status: ['CLOSED'] },
  { label: locale.statusAll, status: [] },
]

const SEARCH_DEBOUNCE_MS = 300

/** Инбокс оператора: список обращений с фильтрами и открытый диалог. */
export const SupportInbox = (props: SupportInboxProps) => {
  const { client, selectedId, onSelect } = props
  const locale = useMemo(() => mergeLocale(props.locale), [props.locale])

  useEffect(() => {
    client.connect()
    return () => client.disconnect()
  }, [client])

  return (
    <div
      className={`scw-root scw-inbox${selectedId ? 'scw-inbox--selected' : ''}${props.className ? ` ${props.className}` : ''}`}
    >
      <InboxList
        client={client}
        selectedId={selectedId}
        onSelect={onSelect}
        locale={locale}
      />
      {selectedId ? (
        <ConversationPane
          key={selectedId}
          client={client}
          id={selectedId}
          operatorId={props.operatorId}
          onBack={() => onSelect(null)}
          onError={props.onError}
          assetBaseUrl={props.assetBaseUrl}
          locale={locale}
        />
      ) : (
        <div className='scw-inbox__placeholder'>{locale.inboxPick}</div>
      )}
    </div>
  )
}

// ── Список ───────────────────────────────────────────────────────────────────

const InboxList = ({
  client,
  selectedId,
  onSelect,
  locale,
}: {
  client: SupportOperatorClient
  selectedId: number | null
  onSelect: (id: number) => void
  locale: SupportLocale
}) => {
  const { inbox, filters, typing, connected } = useStoreState(client.store)
  const [search, setSearch] = useState(filters.search)
  const tabs = STATUS_TABS(locale)

  useEffect(() => {
    if (search === filters.search) return
    const timer = setTimeout(() => client.setFilters({ search }), SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [client, search, filters.search])

  const activeTab = tabs.find(tab => tab.status.join() === filters.status.join())

  return (
    <aside className='scw-inbox__list'>
      <div className='scw-inbox__filters'>
        <input
          className='scw-input'
          type='search'
          value={search}
          placeholder={locale.inboxSearch}
          onChange={event => setSearch(event.target.value)}
        />
        <div
          className='scw-tabs'
          role='tablist'
        >
          {tabs.map(tab => (
            <button
              key={tab.label}
              type='button'
              role='tab'
              aria-selected={tab === activeTab}
              className={tab === activeTab ? 'scw-tab scw-tab--active' : 'scw-tab'}
              onClick={() => client.setFilters({ status: tab.status })}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='scw-segmented'>
          {(
            [
              ['all', locale.assigneeAll],
              ['me', locale.assigneeMe],
              ['none', locale.assigneeNone],
            ] as Array<[SupportInboxFilters['assignee'], string]>
          ).map(([value, label]) => (
            <button
              key={value}
              type='button'
              aria-pressed={filters.assignee === value}
              className={
                filters.assignee === value ? 'scw-segmented__item scw-segmented__item--active' : 'scw-segmented__item'
              }
              onClick={() => client.setFilters({ assignee: value })}
            >
              {label}
            </button>
          ))}
          <span
            className={`scw-dot${connected ? 'scw-dot--online' : ''}`}
            title={connected ? undefined : locale.connecting}
          />
        </div>
      </div>

      <div className='scw-inbox__items'>
        {inbox.error && <div className='scw-inbox__error'>{inbox.error}</div>}
        {!inbox.loading && !inbox.error && inbox.items.length === 0 && (
          <div className='scw-inbox__empty'>{locale.inboxEmpty}</div>
        )}
        {inbox.items.map(conversation => (
          <InboxItem
            key={conversation.id}
            conversation={conversation}
            selected={conversation.id === selectedId}
            typing={conversation.id in typing}
            onSelect={onSelect}
            locale={locale}
          />
        ))}
      </div>

      {inbox.totalPages > 1 && (
        <div className='scw-inbox__pager'>
          <button
            type='button'
            className='scw-button scw-button--ghost'
            disabled={filters.page <= 1}
            onClick={() => client.setPage(filters.page - 1)}
          >
            {locale.prevPage}
          </button>
          <span>
            {filters.page} / {inbox.totalPages}
          </span>
          <button
            type='button'
            className='scw-button scw-button--ghost'
            disabled={filters.page >= inbox.totalPages}
            onClick={() => client.setPage(filters.page + 1)}
          >
            {locale.nextPage}
          </button>
        </div>
      )}
    </aside>
  )
}

const contactName = (conversation: SupportConversation, locale: SupportLocale) =>
  conversation.contact?.name ||
  conversation.contact?.email ||
  conversation.contact?.phone ||
  `${locale.visitor} #${conversation.contactId}`

const InboxItem = ({
  conversation,
  selected,
  typing,
  onSelect,
  locale,
}: {
  conversation: SupportConversation
  selected: boolean
  typing: boolean
  onSelect: (id: number) => void
  locale: SupportLocale
}) => {
  const name = contactName(conversation, locale)
  const last = conversation.lastMessage
  const preview = typing
    ? locale.typing
    : last
      ? `${last.author === 'OPERATOR' ? `${locale.you}: ` : ''}${last.deletedAt ? locale.deleted : last.text || '📎'}`
      : ''

  return (
    <button
      type='button'
      className={`scw-item${selected ? 'scw-item--selected' : ''}${conversation.unreadForOperator ? 'scw-item--unread' : ''}`}
      onClick={() => onSelect(conversation.id)}
    >
      <Avatar name={name} />
      <span className='scw-item__body'>
        <span className='scw-item__top'>
          <span className='scw-item__name'>{name}</span>
          <span className='scw-item__time'>{formatListTime(conversation.lastMessageAt)}</span>
        </span>
        <span className='scw-item__bottom'>
          <span className={`scw-item__preview${typing ? 'scw-item__preview--typing' : ''}`}>{preview}</span>
          {conversation.unreadForOperator > 0 && (
            <span className='scw-badge scw-badge--inline'>{conversation.unreadForOperator}</span>
          )}
        </span>
        <span className='scw-item__tags'>
          <span className={`scw-status-tag scw-status-tag--${conversation.status.toLowerCase()}`}>
            {locale.status[conversation.status]}
          </span>
          <span>{locale.channel[conversation.sourceChannel]}</span>
          <span>
            {conversation.assigneeName ?? (conversation.assigneeId ? `#${conversation.assigneeId}` : locale.unassigned)}
          </span>
        </span>
      </span>
    </button>
  )
}

// ── Диалог ───────────────────────────────────────────────────────────────────

interface ConversationPaneProps {
  client: SupportOperatorClient
  id: number
  operatorId?: number
  onBack: () => void
  onError?: (error: unknown) => void
  assetBaseUrl?: string
  locale: SupportLocale
}

// Диалог открывается в эффекте, а не в useMemo: StrictMode вызывает эффекты дважды,
// и закрытая в первой очистке сессия иначе осталась бы в работе
const ConversationPane = (props: ConversationPaneProps) => {
  const { client, id } = props
  const [session, setSession] = useState<SupportOperatorConversation | null>(null)

  useEffect(() => {
    const opened = client.openConversation(id)
    setSession(opened)
    return () => opened.dispose()
  }, [client, id])

  return session ? (
    <ConversationView
      {...props}
      session={session}
    />
  ) : (
    <section className='scw-pane' />
  )
}

const ConversationView = ({
  client,
  id,
  operatorId,
  onBack,
  onError,
  assetBaseUrl,
  locale,
  session,
}: ConversationPaneProps & { session: SupportOperatorConversation }) => {
  const { conversation, error, deleted } = useStoreState(session.store)
  const timeline = useStoreState(session.timeline.store)
  const { typing } = useStoreState(client.store)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (document.visibilityState !== 'hidden') void session.markRead()
  }, [session, timeline.messages])

  const run = (action: () => Promise<void>) => {
    setBusy(true)
    action()
      .catch((reason: unknown) => onError?.(reason))
      .finally(() => setBusy(false))
  }

  if (deleted || error) {
    return (
      <section className='scw-pane'>
        <PaneBack
          onBack={onBack}
          locale={locale}
        />
        <div className='scw-state'>
          <div className='scw-state__title'>{deleted ? locale.conversationDeleted : error}</div>
        </div>
      </section>
    )
  }

  const contact = conversation?.contact
  const name = conversation ? contactName(conversation, locale) : ''
  const details = [contact?.email, contact?.phone, conversation && locale.channel[conversation.sourceChannel]].filter(
    Boolean,
  )
  const status = conversation?.status
  const contactTyping = id in typing

  return (
    <section className='scw-pane'>
      <header className='scw-pane__header'>
        <PaneBack
          onBack={onBack}
          locale={locale}
        />
        <Avatar name={name} />
        <div className='scw-pane__who'>
          <span className='scw-pane__name'>{name}</span>
          <span className='scw-pane__details'>{details.join(' · ')}</span>
        </div>
        {conversation && (
          <div className='scw-pane__actions'>
            {status && (
              <span className={`scw-status-tag scw-status-tag--${status.toLowerCase()}`}>{locale.status[status]}</span>
            )}
            {conversation.assigneeId !== operatorId && status !== 'CLOSED' && (
              <button
                type='button'
                className='scw-button scw-button--ghost'
                disabled={busy}
                onClick={() => run(() => session.assignToMe())}
              >
                {locale.assignToMe}
              </button>
            )}
            {(status === 'OPEN' || status === 'PENDING') && (
              <button
                type='button'
                className='scw-button scw-button--ghost'
                disabled={busy}
                onClick={() => run(() => session.update({ status: 'RESOLVED' }))}
              >
                {locale.resolve}
              </button>
            )}
            {status === 'CLOSED' || status === 'RESOLVED' ? (
              <button
                type='button'
                className='scw-button'
                disabled={busy}
                onClick={() => run(() => session.reopen())}
              >
                {locale.reopen}
              </button>
            ) : (
              <button
                type='button'
                className='scw-button'
                disabled={busy}
                onClick={() => run(() => session.close())}
              >
                {locale.close}
              </button>
            )}
          </div>
        )}
      </header>

      <MessageList
        messages={timeline.messages}
        ownAuthor='OPERATOR'
        otherReadSeq={conversation?.contactReadSeq ?? 0}
        hasMoreBefore={timeline.hasMoreBefore}
        loadingOlder={timeline.loadingOlder}
        onLoadOlder={() => void session.timeline.loadOlder()}
        onRetry={key => session.timeline.retry(key)}
        onDiscard={key => session.timeline.discard(key)}
        assetBaseUrl={assetBaseUrl}
        locale={locale}
        showAuthorNames
        contactName={name}
        footer={contactTyping && <div className='scw-typing'>{`${name} ${locale.typing}`}</div>}
      />

      <Composer
        locale={locale}
        allowNote
        onSend={(text, files, options) => session.send(text, files, options)}
        onTyping={options => session.notifyTyping(options)}
      />
    </section>
  )
}

const PaneBack = ({ onBack, locale }: { onBack: () => void; locale: SupportLocale }) => (
  <button
    type='button'
    className='scw-icon-button scw-pane__back'
    aria-label={locale.back}
    onClick={onBack}
  >
    <ArrowLeftIcon />
  </button>
)
