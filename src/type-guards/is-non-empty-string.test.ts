import { isNonEmptyString } from './is-non-empty-string';

describe('isNonEmptyString', () => {
  test('Returns true for non-empty strings', () => {
    expect(isNonEmptyString('hello')).toBe(true);
    expect(isNonEmptyString('123')).toBe(true);
    expect(isNonEmptyString('  hello  ')).toBe(true); // trimmed is non-empty
  });

  test('Returns false for empty strings', () => {
    expect(isNonEmptyString('')).toBe(false);
    expect(isNonEmptyString('   ')).toBe(false); // whitespace only
    expect(isNonEmptyString('\t\n')).toBe(false);
  });

  test('Returns false for non-string values', () => {
    expect(isNonEmptyString(123)).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
    expect(isNonEmptyString(undefined)).toBe(false);
    expect(isNonEmptyString([])).toBe(false);
    expect(isNonEmptyString({})).toBe(false);
  });
});

