import { curryN, filter, propEq } from 'ramda';

export const filterByProp = curryN(
  3,
  <V>(value: V, propName: string, arr: any[]) =>
    filter(propEq(value, propName))(arr)
);
