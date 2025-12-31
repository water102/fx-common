import { AnyFunction } from "../type";

/**
 * Pipes a value through multiple functions from left to right.
 * @param functions - Functions to pipe through
 * @returns A function that takes an initial value and pipes it through all functions
 * @example
 * const add1 = (x: number) => x + 1;
 * const multiply2 = (x: number) => x * 2;
 * const piped = pipe(add1, multiply2);
 * piped(5); // (5 + 1) * 2 = 12
 */
export const pipe = <T>(...functions: AnyFunction[]): ((value: T) => T) => {
  return (value: T): T => {
    return functions.reduce((arg, fn) => fn(arg), value as any) as T;
  };
};