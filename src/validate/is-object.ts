import { isNil } from 'ramda';

export const isObject = (value: unknown) =>
  !isNil(value) && typeof value === 'object';
