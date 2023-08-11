export function isNumber(input: unknown) {
  return (
    typeof input === 'number' ||
    Object.prototype.toString.call(input) === '[object Number]'
  );
}