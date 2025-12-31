import { isInteger } from './is-integer';

describe('isInteger', () => {
  test('Returns true for integer numbers', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(123)).toBe(true);
    expect(isInteger(-123)).toBe(true);
  });

  test('Returns false for decimal numbers', () => {
    expect(isInteger(12.34)).toBe(false);
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(-12.34)).toBe(false);
  });

  test('Returns false for non-number values', () => {
    expect(isInteger('123')).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
  });
});

