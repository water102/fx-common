export function isDate(input: unknown): input is Date {
  return (
    input instanceof Date ||
    Object.prototype.toString.call(input) === '[object Date]'
  );
}
