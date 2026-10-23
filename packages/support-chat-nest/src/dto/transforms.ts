// Нормализация на границе (class-transformer): сервисы получают уже чистые значения.

export const trimText = ({ value }: { value: unknown }) => (typeof value === 'string' ? value.trim() : value)

export const trimToUndefined = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() || undefined : value

// multipart и query присылают строки
export const toBoolean = ({ value }: { value: unknown }) => value === true || value === 'true'
