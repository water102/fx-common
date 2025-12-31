import { AnyFunction } from "../type";

/**
 * Composes multiple functions from right to left (functional composition).
 * @param functions - Functions to compose
 * @returns A function that takes an initial value and composes all functions
 * @example
 * const add1 = (x: number) => x + 1;
 * const multiply2 = (x: number) => x * 2;
 * const composed = compose(multiply2, add1);
 * composed(5); // (5 + 1) * 2 = 12
 */
export const compose = <T>(...functions: AnyFunction[]): ((value: T) => T) => {
  return (value: T): T => {
    return functions.reduceRight((arg, fn) => fn(arg), value as any) as T;
  };
};