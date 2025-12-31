import { isNumber } from './is-number';

export const isInRange = (value: unknown, min: number, max: number): value is number => {
  if (!isNumber(value)) return false;
  return value >= min && value <= max;
};

