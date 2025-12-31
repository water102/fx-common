import { isArray } from './is-array';

export const isNonEmptyArray = <T>(value: unknown): value is T[] => {
  if (!isArray(value)) return false;
  return value.length > 0;
};

