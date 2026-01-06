/**
 * Converts a value to an array. Returns empty array for null/undefined,
 * returns the value as-is if already an array, otherwise wraps in array.
 * @param values - Value to convert to array
 * @returns Array representation of the value
 * @example
 * safeArray(null); // []
 * safeArray([1, 2]); // [1, 2]
 * safeArray('hello'); // ['hello']
 */
export declare const safeArray: <T>(values: T | T[] | null | undefined) => T[];
