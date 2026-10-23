import { createPortal } from 'react-dom'

import { type TouchEvent, useEffect, useRef } from 'react'

import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExternalLinkIcon } from '../icons'
import type { SupportLocale } from '../locale'

export interface LightboxItem {
  key: string
  url: string
  name: string
}

export interface LightboxProps {
  items: LightboxItem[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
  locale: SupportLocale
}

/** Свайп короче — это не листание, а случайное движение пальца. */
const SWIPE_MIN_PX = 50

/**
 * Просмотр картинок диалога на весь экран: листание стрелками, клавишами ←/→ и свайпом,
 * закрытие — Esc, крестиком или кликом по фону. Через портал в body: окно чата обрезает
 * содержимое (overflow), а просмотрщик должен перекрыть всю страницу.
 */
export const Lightbox = ({ items, index, onIndexChange, onClose, locale }: LightboxProps) => {
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)
  const item = items[index]
  const hasPrev = index > 0
  const hasNext = index < items.length - 1

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowLeft' && hasPrev) onIndexChange(index - 1)
      else if (event.key === 'ArrowRight' && hasNext) onIndexChange(index + 1)
      else return
      // Esc не должен заодно закрыть окно чата под просмотрщиком
      event.stopPropagation()
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [index, hasPrev, hasNext, onClose, onIndexChange])

  // Пока открыт просмотрщик, страница под ним не прокручивается
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  // Соседние картинки грузим заранее — листание без пустого экрана
  useEffect(() => {
    for (const neighbour of [items[index - 1], items[index + 1]]) {
      if (neighbour) new Image().src = neighbour.url
    }
  }, [items, index])

  if (!item) return null

  const onTouchEnd = (event: TouchEvent) => {
    const start = touchX.current
    touchX.current = null
    if (start === null) return
    const delta = event.changedTouches[0]!.clientX - start
    if (delta > SWIPE_MIN_PX && hasPrev) onIndexChange(index - 1)
    if (delta < -SWIPE_MIN_PX && hasNext) onIndexChange(index + 1)
  }

  return createPortal(
    <div
      className='scw-root scw-lightbox'
      role='dialog'
      aria-modal
      aria-label={item.name}
      onClick={event => event.target === event.currentTarget && onClose()}
      onTouchStart={event => (touchX.current = event.touches[0]!.clientX)}
      onTouchEnd={onTouchEnd}
    >
      <div className='scw-lightbox__bar'>
        <span className='scw-lightbox__counter'>
          {items.length > 1 && `${index + 1} ${locale.galleryOf} ${items.length}`}
        </span>
        <a
          className='scw-lightbox__button'
          href={item.url}
          target='_blank'
          rel='noreferrer'
          aria-label={locale.galleryOpen}
          title={locale.galleryOpen}
        >
          <ExternalLinkIcon />
        </a>
        <button
          ref={closeRef}
          type='button'
          className='scw-lightbox__button'
          aria-label={locale.galleryClose}
          title={locale.galleryClose}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>

      {hasPrev && (
        <button
          type='button'
          className='scw-lightbox__nav scw-lightbox__nav--prev'
          aria-label={locale.galleryPrev}
          onClick={() => onIndexChange(index - 1)}
        >
          <ChevronLeftIcon />
        </button>
      )}
      <img
        key={item.key}
        className='scw-lightbox__image'
        src={item.url}
        alt={item.name}
        onClick={event => event.stopPropagation()}
      />
      {hasNext && (
        <button
          type='button'
          className='scw-lightbox__nav scw-lightbox__nav--next'
          aria-label={locale.galleryNext}
          onClick={() => onIndexChange(index + 1)}
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>,
    document.body,
  )
}
