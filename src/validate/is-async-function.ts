import { isFunction } from './is-function';

export const isAsyncFunction = (func: unknown) =>
  isFunction(func) && func?.constructor?.name === 'AsyncFunction';
