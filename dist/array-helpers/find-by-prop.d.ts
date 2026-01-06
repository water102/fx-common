/**
 * Finds an object in an array by a specific property name and value.
 * @param value - The property value to search for
 * @param propName - The property name to search by
 * @param arr - The array to search in
 * @returns The found object or undefined
 * @example
 * const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
 * const user = findByProp('John', 'name', users); // { name: 'John', age: 30 }
 */
export declare const findByProp: import("ts-toolbelt/out/Function/Curry").Curry<(a_0: unknown, a_1: string, a_2: any[]) => Record<string, unknown> | undefined>;
