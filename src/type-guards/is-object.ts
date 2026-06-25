import { isNil } from 'ramda';

export const isObject = (value: unknown): value is Record<string, unknown> =>
  !isNil(value) && typeof value === 'object' && !Array.isArray(value);

/** Alias for {@link isObject} — matches tsh5 `isRecord` naming. */
export const isRecord = isObject;
