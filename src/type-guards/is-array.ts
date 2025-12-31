export function isArray<T = unknown>(input: unknown): input is T[] {
  return (
    input instanceof Array ||
    Object.prototype.toString.call(input) === '[object Array]'
  );
}
