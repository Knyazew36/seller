import { SUPPORT_LIMITS, type SupportTimelineMessage, toSupportReply } from '@app/support-chat-client'

import { type ClipboardEvent, type KeyboardEvent, useEffect, useRef, useState } from 'react'

import { cx } from '../cx'
import { CloseIcon, PaperclipIcon, SendIcon } from '../icons'
import type { SupportLocale } from '../locale'
import { iconButton } from '../ui'

import { ReplyQuote } from './ReplyQuote'

const ACCEPT = 'image/jpeg,image/png,image/webp'
const MAX_HEIGHT_PX = 160

export interface ComposerProps {
  onSend: (text: string, files: File[], options: { internal: boolean }) => void
  /** internal — сейчас пишется заметка (у оператора). */
  onTyping?: (options: { internal: boolean }) => void
  disabled?: boolean
  locale: SupportLocale
  /** Оператору: переключатель «заметка для коллег». */
  allowNote?: boolean
  autoFocus?: boolean
  /** На что отвечаем — плашка над полем; крестик или Escape отменяют. */
  replyTo?: SupportTimelineMessage | null
  onCancelReply?: () => void
  /** Чьи сообщения «свои» — для подписи «Вы» в цитате. */
  ownAuthor?: SupportTimelineMessage['author']
}

/**
 * Поле ввода: Enter — отправить, Shift+Enter — новая строка, картинки — скрепкой или вставкой из буфера.
 * Одно поле без валидации кроме длины — поэтому обычное состояние, а не библиотека форм.
 */
export const Composer = ({
  onSend,
  onTyping,
  disabled,
  locale,
  allowNote,
  autoFocus,
  replyTo,
  onCancelReply,
  ownAuthor = 'CONTACT',
}: ComposerProps) => {
  const [text, setText] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [note, setNote] = useState(false)
  const [previews, setPreviews] = useState<string[]>([])
  const textRef = useRef<HTMLTextAreaElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const urls = files.map(file => URL.createObjectURL(file))
    setPreviews(urls)
    return () => urls.forEach(url => URL.revokeObjectURL(url))
  }, [files])

  // Высота поля под текст, но не выше MAX_HEIGHT_PX — дальше прокрутка внутри
  useEffect(() => {
    const element = textRef.current
    if (!element) return
    element.style.height = 'auto'
    element.style.height = `${Math.min(element.scrollHeight, MAX_HEIGHT_PX)}px`
  }, [text])

  // Ответ на заметку — тоже заметка: иначе клиент увидел бы её текст в цитате
  const noteLocked = !!replyTo?.isInternalNote

  useEffect(() => {
    if (!replyTo) return
    if (replyTo.isInternalNote) setNote(true)
    textRef.current?.focus()
  }, [replyTo])

  const canSend = !disabled && (text.trim().length > 0 || files.length > 0)

  const submit = () => {
    if (!canSend) return
    onSend(text.trim(), files, { internal: note })
    setText('')
    setFiles([])
    // Заметка — исключение: после отправки снова обычный ответ, чтобы следующее не ушло не туда
    setNote(false)
    textRef.current?.focus()
  }

  const addFiles = (incoming: File[]) => {
    const images = incoming.filter(file => ACCEPT.split(',').includes(file.type))
    if (images.length) setFiles(current => [...current, ...images].slice(0, SUPPORT_LIMITS.attachmentsMax))
  }

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    // Escape сначала отменяет ответ, а не закрывает окно чата
    if (event.key === 'Escape' && replyTo && onCancelReply) {
      event.stopPropagation()
      onCancelReply()
      return
    }
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      submit()
    }
  }

  const onPaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
    const pasted = [...event.clipboardData.files]
    if (pasted.length) {
      event.preventDefault()
      addFiles(pasted)
    }
  }

  return (
    <div
      className={cx(
        'scw:flex-none scw:border-t scw:p-3 scw:transition-colors',
        note ? 'scw:border-note-text/15 scw:bg-note-bubble' : 'scw:border-border/70 scw:bg-bg',
      )}
    >
      {replyTo && (
        <div className='scw:flex scw:items-center scw:gap-1 scw:px-1 scw:pb-2'>
          <ReplyQuote
            reply={toSupportReply(replyTo)}
            ownAuthor={ownAuthor}
            locale={locale}
            className='scw:flex-1 scw:bg-surface'
          />
          <button
            type='button'
            className={iconButton}
            aria-label={locale.cancelReply}
            title={locale.cancelReply}
            onClick={onCancelReply}
          >
            <CloseIcon
              width={16}
              height={16}
            />
          </button>
        </div>
      )}
      {files.length > 0 && (
        <div className='scw:flex scw:flex-wrap scw:gap-1.5 scw:px-1 scw:pt-1 scw:pb-2'>
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className='scw:relative scw:size-14 scw:overflow-hidden scw:rounded-lg scw:bg-surface'
            >
              {previews[index] && (
                <img
                  className='scw:size-full scw:object-cover'
                  src={previews[index]}
                  alt={file.name}
                />
              )}
              <button
                type='button'
                className='scw:absolute scw:top-0.5 scw:right-0.5 scw:inline-flex scw:rounded-full scw:bg-[rgba(22,25,28,0.7)] scw:p-[3px] scw:text-white'
                aria-label={locale.removeFile}
                onClick={() => setFiles(current => current.filter((_, i) => i !== index))}
              >
                <CloseIcon
                  width={12}
                  height={12}
                />
              </button>
            </div>
          ))}
        </div>
      )}
      <div
        className={cx(
          'scw:flex scw:items-end scw:gap-0.5 scw:rounded-[22px] scw:p-1 scw:transition-[background-color,box-shadow] scw:duration-150',
          // В фокусе поле «поднимается»: светлеет и получает тонкий контур
          note
            ? 'scw:bg-white/55'
            : 'scw:bg-surface scw:focus-within:bg-bg scw:focus-within:shadow-[0_0_0_1px_var(--scw-border),0_1px_3px_rgb(16_18_20/0.06)]',
        )}
      >
        <button
          type='button'
          className={iconButton}
          aria-label={locale.attach}
          title={locale.attach}
          disabled={disabled || files.length >= SUPPORT_LIMITS.attachmentsMax}
          onClick={() => fileRef.current?.click()}
        >
          <PaperclipIcon />
        </button>
        <input
          ref={fileRef}
          type='file'
          accept={ACCEPT}
          multiple
          hidden
          onChange={event => {
            addFiles([...(event.target.files ?? [])])
            event.target.value = ''
          }}
        />
        <textarea
          ref={textRef}
          className='scw:max-h-40 scw:min-h-9 scw:flex-1 scw:resize-none scw:border-0 scw:bg-transparent scw:px-1 scw:py-2 scw:leading-5 scw:text-text scw:outline-none scw:placeholder:text-muted'
          rows={1}
          value={text}
          maxLength={SUPPORT_LIMITS.textMaxLength}
          placeholder={note ? locale.notePlaceholder : locale.placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          onChange={event => {
            setText(event.target.value)
            onTyping?.({ internal: note })
          }}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
        />
        <button
          type='button'
          className={cx(
            'scw:inline-flex scw:size-9 scw:flex-none scw:items-center scw:justify-center scw:rounded-full scw:transition-[background-color,color,transform] scw:duration-150',
            // Заливка — только когда есть что отправить: пустое поле не зовёт нажать
            canSend ? 'scw:bg-accent scw:text-accent-text scw:active:scale-94' : 'scw:bg-transparent scw:text-muted',
          )}
          aria-label={locale.send}
          title={locale.send}
          disabled={!canSend}
          onClick={submit}
        >
          <SendIcon
            width={18}
            height={18}
            strokeWidth={2.4}
          />
        </button>
      </div>
      {allowNote && (
        <label
          className='scw:mx-1 scw:mt-1 scw:inline-flex scw:cursor-pointer scw:select-none scw:items-center scw:gap-1.5 scw:text-xs scw:text-muted'
          title={noteLocked ? locale.replyNoteOnly : undefined}
        >
          <input
            type='checkbox'
            checked={note}
            disabled={noteLocked}
            onChange={event => setNote(event.target.checked)}
          />
          {locale.note}
        </label>
      )}
    </div>
  )
}
