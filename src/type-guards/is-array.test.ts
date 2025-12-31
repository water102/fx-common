import { isArray } from './is-array';

describe('isArray', () => {
  test('Returns true for array values', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(['a', 'b'])).toBe(true);
  });

  test('Returns false for non-array values', () => {
    expect(isArray('string')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});

