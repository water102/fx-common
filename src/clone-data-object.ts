/**
 * Deep clones a data object using JSON serialization.
 * Note: This method cannot handle circular references, functions, or special objects like Date, RegExp, etc.
 * For complex objects with circular references, consider using a library like lodash.cloneDeep.
 * @param data - The object to clone
 * @returns A deep clone of the input object
 * @throws Error if the object contains circular references or cannot be serialized
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = cloneDataObject(original);
 * cloned.b.c = 3;
 * console.log(original.b.c); // 2 (unchanged)
 */
export const cloneDataObject = <T>(data: T): T => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    if (error instanceof Error && error.message.includes('circular')) {
      throw new Error('Cannot clone object with circular references. Use a library like lodash.cloneDeep instead.');
    }
    throw error;
  }
};