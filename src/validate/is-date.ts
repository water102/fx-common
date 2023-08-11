
export function isDate(input: unknown) {
  return (
    input instanceof Date ||
    Object.prototype.toString.call(input) === '[object Date]'
  );
}