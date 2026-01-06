/**
 * Deep compares two objects to check if they are equal.
 * @param obj1 - First object to compare
 * @param obj2 - Second object to compare
 * @returns True if objects are deeply equal, false otherwise
 * @example
 * areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
 * areObjectsEqual({ a: 1 }, { a: 2 }); // false
 */
export declare function areObjectsEqual<T = unknown>(obj1: T, obj2: T): boolean;
