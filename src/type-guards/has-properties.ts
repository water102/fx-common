import { isObject } from './is-object';

export const hasProperties = <T extends string>(
  obj: unknown,
  props: T[]
): obj is Record<T, unknown> => {
  if (!isObject(obj)) return false;
  return props.every(prop => prop in obj);
};

