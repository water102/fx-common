import { isNonEmptyArray } from './is-non-empty-array';

describe('isNonEmptyArray', () => {
  test('Returns true for non-empty arrays', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    expect(isNonEmptyArray(['a'])).toBe(true);
    expect(isNonEmptyArray([null])).toBe(true);
  });

  test('Returns false for empty arrays', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  test('Returns false for non-array values', () => {
    expect(isNonEmptyArray('string')).toBe(false);
    expect(isNonEmptyArray(123)).toBe(false);
    expect(isNonEmptyArray(null)).toBe(false);
    expect(isNonEmptyArray(undefined)).toBe(false);
    expect(isNonEmptyArray({})).toBe(false);
  });
});

