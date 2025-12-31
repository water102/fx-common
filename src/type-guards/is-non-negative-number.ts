import { isNumber } from './is-number';

export const isNonNegativeNumber = (value: unknown): value is number => {
  if (!isNumber(value)) return false;
  return value >= 0;
};

