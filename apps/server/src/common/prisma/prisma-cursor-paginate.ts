type CursorDelegate<TArgs, TResult> = {
  findMany: (args?: TArgs) => Promise<TResult[]>;
};

type CursorPaginateOptions<TArgs> = {
  /** Числовое монотонное поле курсора (seq, id). */
  cursorField: string;
  /** Записи с курсором меньше — листание назад (вверх по ленте). */
  before?: number;
  /** Записи с курсором больше — добор новых. Взаимоисключающе с before. */
  after?: number;
  limit: number;
  where?: TArgs extends { where?: infer W } ? W : never;
  include?: TArgs extends { include?: infer I } ? I : never;
  select?: TArgs extends { select?: infer S } ? S : never;
};

/**
 * Курсорная пагинация для лент, где страницы «плывут» от новых записей (история чата):
 * page/limit из paginatePrisma здесь дал бы дубли и пропуски. Ответ всегда по возрастанию курсора.
 * Без before/after — последние limit записей.
 */
export async function paginateCursor<TArgs, TResult>(
  model: CursorDelegate<TArgs, TResult>,
  options: CursorPaginateOptions<TArgs>,
): Promise<{ items: TResult[]; meta: { hasMore: boolean } }> {
  const { cursorField, before, after, limit } = options;
  const forward = after !== undefined;
  const cursorFilter = forward
    ? { [cursorField]: { gt: after } }
    : before !== undefined
      ? { [cursorField]: { lt: before } }
      : {};

  // Берём на одну запись больше — так узнаём hasMore без отдельного count
  const rows = await model.findMany({
    where: { AND: [options.where ?? {}, cursorFilter] },
    orderBy: { [cursorField]: forward ? 'asc' : 'desc' },
    include: options.include,
    select: options.select,
    take: limit + 1,
  } as TArgs);

  const hasMore = rows.length > limit;
  const page = rows.slice(0, limit);
  return { items: forward ? page : page.reverse(), meta: { hasMore } };
}
