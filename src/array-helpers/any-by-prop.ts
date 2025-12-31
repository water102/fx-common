import { curryN, any, propEq } from 'ramda';

export const anyByProp = curryN(
  3,
  <V>(value: V, propName: string, arr: any[]) =>
    any(propEq(value, propName))(arr)
);
