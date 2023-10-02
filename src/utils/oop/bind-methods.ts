import { getMethod } from "./get-method";

export function bindMethods(target: any, methodNames: string[] = []): void {
  for (const methodName of methodNames) {
    target[methodName] = getMethod(target, methodName).bind(target)
  }
}
