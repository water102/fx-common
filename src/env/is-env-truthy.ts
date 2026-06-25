/** `"1" | "true" | "yes" | "on"` (case-insensitive); empty/null → false */
export function isEnvTruthy(value: unknown): boolean {
  if (value == null) {
    return false;
  }
  const trimmed = String(value).trim();
  if (trimmed.length === 0) {
    return false;
  }
  const normalized = trimmed.toLowerCase();
  return (
    normalized === '1' ||
    normalized === 'true' ||
    normalized === 'yes' ||
    normalized === 'on'
  );
}
