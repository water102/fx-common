import { AnyFunction } from '../../type/any-function';

export function getMethod<T = AnyFunction>(obj: any, methodName: string): T {
  return obj[methodName] as T;
}
