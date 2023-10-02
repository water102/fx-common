export function isUuId(s: string): boolean {
  const uuidRegex = new RegExp(
    '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
  );
  return uuidRegex.test(s);
}
