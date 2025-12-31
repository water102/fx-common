import { isDefined } from './is-defined';
import { isObject } from './is-object';
import { isFunction } from './is-function';

export const isPromise = <T = unknown>(value: unknown): value is Promise<T> => {
  return (
    isDefined(value) &&
    isObject(value) &&
    isFunction((value as any).then) &&
    isFunction((value as any).catch)
  );
};

