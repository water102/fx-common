import { isNil } from 'ramda';

export const isObject = (value: unknown): value is Record<string, unknown> =>
  !isNil(value) && typeof value === 'object' && !Array.isArray(value);
