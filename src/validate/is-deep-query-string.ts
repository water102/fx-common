/** True when the string looks like a nested query key path (dot or bracket notation). */
export function isDeepQueryString(str: string): boolean {
  return /(\[.*?]|(\w+\.))+(\[.*?]|(\w+\.))+/.test(str);
}
