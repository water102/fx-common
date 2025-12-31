import { areObjectsEqual } from './are-objects-equal';

describe('areObjectsEqual', () => {
  test('Returns true for identical objects', () => {
    const obj = { a: 1, b: 2 };
    expect(areObjectsEqual(obj, obj)).toBe(true);
  });

  test('Returns true for objects with same properties and values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(areObjectsEqual(obj1, obj2)).toBe(true);
  });

  test('Returns false for objects with different values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(areObjectsEqual(obj1, obj2)).toBe(false);
  });

  test('Returns false for objects with different properties', () => {
    const obj1: Record<string, number> = { a: 1, b: 2 };
    const obj2: Record<string, number> = { a: 1, c: 2 };
    expect(areObjectsEqual(obj1, obj2)).toBe(false);
  });

  test('Handles nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(areObjectsEqual(obj1, obj2)).toBe(true);
  });

  test('Handles arrays in objects', () => {
    const obj1 = { a: [1, 2, 3] };
    const obj2 = { a: [1, 2, 3] };
    expect(areObjectsEqual(obj1, obj2)).toBe(true);
  });

  test('Returns true for same primitive values (uses === check)', () => {
    // Function checks obj1 === obj2 first, so same primitives return true
    expect(areObjectsEqual('string', 'string')).toBe(true);
    expect(areObjectsEqual(123, 123)).toBe(true);
    expect(areObjectsEqual(null, null)).toBe(true);
  });

  test('Returns false for different primitive values', () => {
    expect(areObjectsEqual('string1', 'string2')).toBe(false);
    expect(areObjectsEqual(123, 456)).toBe(false);
  });
});

