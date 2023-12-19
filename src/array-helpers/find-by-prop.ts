import { curryN, find, propEq } from 'ramda';

export const findByProp = curryN(
  3,
  <V>(value: V, propName: string, arr: any[]) =>
    find(propEq(value, propName))(arr)
);
