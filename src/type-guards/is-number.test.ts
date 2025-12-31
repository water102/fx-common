import { isNumber } from './is-number';

describe('isNumber', () => {
  test('Returns true for number values', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-123)).toBe(true);
    expect(isNumber(12.34)).toBe(true);
    expect(isNumber(Number('123'))).toBe(true);
  });

  test('Returns false for non-number values', () => {
    expect(isNumber('123')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(NaN)).toBe(true); // NaN is technically a number
  });
});

