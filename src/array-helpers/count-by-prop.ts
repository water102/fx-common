import { curryN } from 'ramda';
import { filterByProp } from './filter-by-prop';

export const countByProp = curryN(
  3,
  <V>(value: V, propName: string, arr: any[]) =>
    filterByProp(value, propName, arr).length
);
