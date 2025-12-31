import { isPositiveNumber } from './is-positive-number';

describe('isPositiveNumber', () => {
  test('Returns true for positive numbers', () => {
    expect(isPositiveNumber(1)).toBe(true);
    expect(isPositiveNumber(100)).toBe(true);
    expect(isPositiveNumber(0.1)).toBe(true);
  });

  test('Returns false for zero', () => {
    expect(isPositiveNumber(0)).toBe(false);
  });

  test('Returns false for negative numbers', () => {
    expect(isPositiveNumber(-1)).toBe(false);
    expect(isPositiveNumber(-100)).toBe(false);
  });

  test('Returns false for non-number values', () => {
    expect(isPositiveNumber('123')).toBe(false);
    expect(isPositiveNumber(null)).toBe(false);
    expect(isPositiveNumber(undefined)).toBe(false);
    expect(isPositiveNumber([])).toBe(false);
    expect(isPositiveNumber({})).toBe(false);
  });
});

