import { curryN, propOr } from 'ramda';

export const sumByProp = curryN(2, (propName: string, arr: any[]) =>
  arr.reduce((total, item) => total + propOr(0, propName, item), 0)
);
