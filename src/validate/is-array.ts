export function isArray(input: unknown) {
  return (
    input instanceof Array ||
    Object.prototype.toString.call(input) === '[object Array]'
  );
}
