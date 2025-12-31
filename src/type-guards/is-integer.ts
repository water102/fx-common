import { isNumber } from './is-number';

export const isInteger = (value: unknown): value is number => {
  if (!isNumber(value)) return false;
  return Number.isInteger(value);
};

