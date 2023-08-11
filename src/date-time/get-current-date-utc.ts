export function getCurrentDateUtc() {
  const now = new Date();
  const nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return nowUtc;
}