export function asBigIntString(value: unknown): string | undefined {
  if (typeof value === 'string' && /^-?\d+$/.test(value.trim())) {
    return value.trim();
  }
  if (typeof value === 'number' && Number.isFinite(value)) {
    return String(Math.trunc(value));
  }
  return undefined;
}
