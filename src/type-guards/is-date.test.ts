import { isDate } from './is-date';

describe('isDate', () => {
  test('Returns true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2023-08-07'))).toBe(true);
  });

  test('Returns false for non-Date values', () => {
    expect(isDate('2023-08-07')).toBe(false);
    expect(isDate(1234567890)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate({})).toBe(false);
  });
});

