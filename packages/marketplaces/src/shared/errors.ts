/** Ошибка ответа площадки. Текст — для логов и разработчика, `body` — сырой ответ площадки. */
export class MarketplaceApiError extends Error {
  public readonly name = 'MarketplaceApiError'
  /** Что сказала площадка своими словами (поле message/error_description ответа) — можно показать пользователю */
  public readonly reason?: string

  constructor(
    public readonly marketplace: string,
    public readonly section: string,
    public readonly method: string,
    public readonly path: string,
    public readonly status: number,
    public readonly body: unknown,
    public readonly retryAfterMs?: number,
  ) {
    const reason = bodyReason(body)
    super(`${marketplace}/${section}: ${method} ${path} → ${status}${describe(status)}${reason ? `: ${reason}` : ''}`)
    this.reason = reason
  }

  /** Токен не подходит: истёк, отозван или у него нет нужной категории/роли */
  public get isAuthError(): boolean {
    if (this.status === 401 || this.status === 403) return true
    // Ozon на неверный ключ отвечает 400 «Invalid Api-Key» / «Invalid Client-Id»
    return this.status === 400 && /invalid (api-key|client-id)/i.test(this.reason ?? '')
  }

  public get isRateLimited(): boolean {
    return this.status === 429
  }
}

function describe(status: number): string {
  if (status === 401) return ' (неверный или истёкший токен)'
  if (status === 403) return ' (у токена нет доступа к методу)'
  if (status === 429) return ' (превышен лимит запросов)'
  if (status >= 500) return ' (ошибка на стороне площадки)'
  return ''
}

function bodyReason(body: unknown): string | undefined {
  if (typeof body === 'string') return body ? body.slice(0, 300) : undefined
  if (!body || typeof body !== 'object') return undefined
  const b = body as Record<string, unknown>
  const text =
    b.message ??
    b.error_description ??
    b.detail ??
    b.title ??
    b.errorText ??
    (b.error as Record<string, unknown> | undefined)?.message ??
    b.error
  return typeof text === 'string' && text ? text : undefined
}
