import { isFunction } from '../../validate/is-function';

export function getMethodNames(obj: any, stopClassName?: string): string[] {
  if (!obj) return []; // recursive approach
  if (Object.getPrototypeOf(obj)?.constructor?.name === stopClassName)
    return [];

  return [
    ...new Set(
      [
        ...Object.getOwnPropertyNames(obj),
        ...getMethodNames(Object.getPrototypeOf(obj), stopClassName)
      ].filter((key) => key !== 'constructor' && isFunction(obj[key]))
    )
  ];
}
