import { AnyFunction } from '../type/any-function';
/**
 * Executes a function a specified number of times.
 * @param func - The function to execute
 * @param n - Number of times to execute the function
 * @example
 * let count = 0;
 * times(() => count++, 5);
 * // count is now 5
 */
export declare const times: (func: AnyFunction, n: number) => void;
