export default function isPromise<T>(value: any): value is Promise<T> {
  return (
    !!value &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof value.then === 'function'
  );
}
