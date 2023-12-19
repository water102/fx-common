import { curryN } from 'ramda';

export const tapErrorAsync = curryN(
  3,
  async <T = any>(
    executeFunction: (value: Promise<T>) => Promise<T>,
    tapFunction: (value: Promise<T>, error: unknown) => T,
    value: Promise<T>
  ) => {
    try {
      const result = await executeFunction(value);
      return result;
    } catch (error) {
      tapFunction(value, error);
    }
  }
);
