import { isNotEmpty } from './is-not-empty';

describe('isNotEmpty', () => {
  test('Returns true for non-empty values', () => {
    expect(isNotEmpty('hello')).toBe(true);
    expect(isNotEmpty([1, 2])).toBe(true);
    expect(isNotEmpty(123)).toBe(true);
    // Note: ramda's isEmpty considers empty objects {} as empty
    expect(isNotEmpty({})).toBe(false);
  });

  test('Returns false for empty values', () => {
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty([])).toBe(false);
    // Note: ramda's isEmpty only checks for empty collections/strings, not null/undefined
    expect(isNotEmpty(null)).toBe(true);
    expect(isNotEmpty(undefined)).toBe(true);
  });
});

