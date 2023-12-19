import { curryN } from 'ramda';

export const tapError = curryN(
  3,
  <T = any>(
    executeFunction: (value: T) => T,
    tapFunction: (value: T, error: unknown) => T,
    value: T
  ) => {
    try {
      return executeFunction(value);
    } catch (error) {
      tapFunction(value, error);
    }
  }
);
