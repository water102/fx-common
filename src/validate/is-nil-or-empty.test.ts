import { isNilOrEmpty } from './is-nil-or-empty';

describe('isNilOrEmpty', () => {
  test('Returns true for null/undefined', () => {
    expect(isNilOrEmpty(null)).toBe(true);
    expect(isNilOrEmpty(undefined)).toBe(true);
  });

  test('Returns true for empty strings', () => {
    expect(isNilOrEmpty('')).toBe(true);
    // Note: ramda's isEmpty considers whitespace-only strings as non-empty
    expect(isNilOrEmpty('   ')).toBe(false);
  });

  test('Returns true for empty arrays', () => {
    expect(isNilOrEmpty([])).toBe(true);
  });

  test('Returns false for non-empty values', () => {
    expect(isNilOrEmpty('hello')).toBe(false);
    expect(isNilOrEmpty([1, 2])).toBe(false);
    expect(isNilOrEmpty(123)).toBe(false);
    // Note: ramda's isEmpty considers empty objects {} as empty
    expect(isNilOrEmpty({})).toBe(true);
  });
});

