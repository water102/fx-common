import { curryN } from 'ramda';
import { findByProp } from './find-by-prop';

/**
 * Finds an object in an array by its id property.
 * @param value - The id value to search for
 * @param arr - The array to search in
 * @returns The found object or undefined
 * @example
 * const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const user = findById(1, users); // { id: 1, name: 'John' }
 */
export const findById = curryN(2, <V>(value: V, arr: any[]) =>
  findByProp(value, 'id', arr)
);
