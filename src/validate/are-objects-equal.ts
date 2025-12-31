import { isFunction } from '../type-guards/is-function';

/**
 * Deep compares two objects to check if they are equal.
 * @param obj1 - First object to compare
 * @param obj2 - Second object to compare
 * @returns True if objects are deeply equal, false otherwise
 * @example
 * areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
 * areObjectsEqual({ a: 1 }, { a: 2 }); // false
 */
export function areObjectsEqual<T = unknown>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (isFunction(obj1) && isFunction(obj2)) {
    return obj1.toString() == obj2.toString();
  }

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1 as Record<string, unknown>);
  const keys2 = Object.keys(obj2 as Record<string, unknown>);

  if (keys1.length !== keys2.length) {
    return false;
  }

  const obj1Record = obj1 as Record<string, unknown>;
  const obj2Record = obj2 as Record<string, unknown>;
  
  for (const key of keys1) {
    if (!keys2.includes(key) || !areObjectsEqual(obj1Record[key], obj2Record[key])) {
      return false;
    }
  }

  return true;
}
