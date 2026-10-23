import { SUPPORT_LIMITS } from '@app/support-chat-client'

import { type ClipboardEvent, type KeyboardEvent, useEffect, useRef, useState } from 'react'

import { CloseIcon, PaperclipIcon, SendIcon } from '../icons'
import type { SupportLocale } from '../locale'

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
}

/**
 * Поле ввода: Enter — отправить, Shift+Enter — новая строка, картинки — скрепкой или вставкой из буфера.
 * Одно поле без валидации кроме длины — поэтому обычное состояние, а не библиотека форм.
 */
export const Composer = ({ onSend, onTyping, disabled, locale, allowNote, autoFocus }: ComposerProps) => {
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
    <div className={`scw-composer${note ? 'scw-composer--note' : ''}`}>
      {files.length > 0 && (
        <div className='scw-composer__files'>
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className='scw-composer__file'
            >
              {previews[index] && (
                <img
                  src={previews[index]}
                  alt={file.name}
                />
              )}
              <button
                type='button'
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
      <div className='scw-composer__row'>
        <button
          type='button'
          className='scw-icon-button'
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
          className='scw-composer__input'
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
          className='scw-send'
          aria-label={locale.send}
          title={locale.send}
          disabled={!canSend}
          onClick={submit}
        >
          <SendIcon />
        </button>
      </div>
      {allowNote && (
        <label className='scw-composer__note'>
          <input
            type='checkbox'
            checked={note}
            onChange={event => setNote(event.target.checked)}
          />
          {locale.note}
        </label>
      )}
    </div>
  )
}
