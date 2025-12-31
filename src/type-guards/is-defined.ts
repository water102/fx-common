import { isNil } from 'ramda';

export const isDefined = <T>(value: T | null | undefined): value is T => {
  return !isNil(value);
};

