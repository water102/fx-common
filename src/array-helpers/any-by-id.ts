import { curryN } from 'ramda';
import { anyByProp } from './any-by-prop';

export const anyById = curryN(2, <V>(value: V, arr: any[]) =>
  anyByProp(value, 'id', arr)
);
