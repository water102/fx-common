import { isString } from './is-string';

export const isNonEmptyString = (value: unknown): value is string => {
  if (!isString(value)) return false;
  return value.trim().length > 0;
};

