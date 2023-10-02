export function getMethod<T = Function>(obj: any, methodName: string): T {
  return obj[methodName] as T
}
