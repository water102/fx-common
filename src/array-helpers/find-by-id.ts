import { curryN } from 'ramda';
import { findByProp } from './find-by-prop';

export const findById = curryN(2, <V>(value: V, arr: any[]) =>
  findByProp(value, 'id', arr)
);
