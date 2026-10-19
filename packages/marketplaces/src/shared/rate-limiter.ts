import type { RateLimit } from './types'

interface Bucket {
  tokens: number
  updatedAt: number
  /** Площадка ответила 429 и сказала ждать до этого момента */
  blockedUntil: number
  /** Очередь, чтобы запросы одного ключа выходили по одному и не обгоняли паузы друг друга */
  queue: Promise<void>
}

const IDLE_TTL_MS = 30 * 60_000

/**
 * Token bucket на ключ (учётка + категория лимита). Ёмкость = всплеск, один токен восстанавливается за интервал —
 * ровно так площадки описывают свои лимиты, поэтому 429 почти не ловим.
 */
export class RateLimiter {
  private readonly buckets = new Map<string, Bucket>()
  private lastCleanup = Date.now()

  public async acquire(key: string, limit: RateLimit): Promise<void> {
    const bucket = this.bucket(key, limit)
    const turn = bucket.queue.then(() => this.take(bucket, limit))
    // Ошибка одного ожидания не должна ломать очередь остальных
    bucket.queue = turn.catch(() => {})
    return turn
  }

  /** Площадка вернула 429 с указанием, сколько ждать — следующий запрос по ключу пойдёт не раньше */
  public block(key: string, limit: RateLimit, ms: number): void {
    const bucket = this.bucket(key, limit)
    bucket.blockedUntil = Math.max(bucket.blockedUntil, Date.now() + ms)
    // Площадка сама сказала, когда можно повторить: к этому моменту ровно один запрос разрешён
    bucket.tokens = 0
    bucket.updatedAt = bucket.blockedUntil - limit.intervalMs
  }

  private bucket(key: string, limit: RateLimit): Bucket {
    this.cleanup()
    let bucket = this.buckets.get(key)
    if (!bucket) {
      bucket = { tokens: limit.burst, updatedAt: Date.now(), blockedUntil: 0, queue: Promise.resolve() }
      this.buckets.set(key, bucket)
    }
    return bucket
  }

  private async take(bucket: Bucket, limit: RateLimit): Promise<void> {
    for (;;) {
      const now = Date.now()
      if (bucket.blockedUntil > now) {
        await sleep(bucket.blockedUntil - now)
        continue
      }
      const restored = Math.floor((now - bucket.updatedAt) / limit.intervalMs)
      if (restored > 0) {
        bucket.tokens = Math.min(limit.burst, bucket.tokens + restored)
        bucket.updatedAt += restored * limit.intervalMs
      }
      if (bucket.tokens >= limit.burst) bucket.updatedAt = now
      if (bucket.tokens > 0) {
        bucket.tokens--
        return
      }
      await sleep(bucket.updatedAt + limit.intervalMs - now)
    }
  }

  private cleanup(): void {
    const now = Date.now()
    if (now - this.lastCleanup < IDLE_TTL_MS) return
    this.lastCleanup = now
    for (const [key, bucket] of this.buckets) {
      if (now - bucket.updatedAt > IDLE_TTL_MS && bucket.blockedUntil < now) this.buckets.delete(key)
    }
  }
}

export const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, Math.max(0, ms)))
