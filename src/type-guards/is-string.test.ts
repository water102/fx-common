import { isString } from './is-string';

describe('isString', () => {
  test('Returns true for string values', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString('123')).toBe(true);
  });

  test('Returns false for non-string values', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
  });
});

