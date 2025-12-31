import { AnyFunction } from "../..";

export function once(func: AnyFunction) {
  let ran = false;
  let result: any;
  return function (...args: any[]) {
    if (ran) return result;
    result = func(...args);
    ran = true;
    return result;
  };
}