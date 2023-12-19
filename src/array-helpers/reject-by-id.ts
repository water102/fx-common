import { curryN } from 'ramda';
import { rejectByProp } from './reject-by-prop';

export const rejectById = curryN(2, <V>(value: V, arr: any[]) =>
  rejectByProp(value, 'id', arr)
);
