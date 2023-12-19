import { curryN, reject, propEq } from 'ramda';

export const rejectByProp = curryN(
  3,
  <V>(value: V, propName: string, arr: any[]) =>
    reject(propEq(value, propName))(arr)
);
