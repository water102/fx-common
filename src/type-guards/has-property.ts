import { isObject } from './is-object';

export const hasProperty = <T extends string>(
  obj: unknown,
  prop: T
): obj is Record<T, unknown> => {
  if (!isObject(obj)) return false;
  return prop in obj;
};

