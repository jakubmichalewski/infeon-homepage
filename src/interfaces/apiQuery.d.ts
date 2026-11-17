export type ApiQuery<T extends unknown, R extends unknown = void> = (
  args: T
) => Promise<R>;
