import { getTimestamp } from './get-timestamp';

describe('getTimestamp', () => {
  test('Returns timestamp in milliseconds for given date', () => {
    const date = new Date('2023-08-07T12:00:00Z');
    const result = getTimestamp(date);
    const expected = date.getTime();

    expect(result).toBe(expected);
  });

  test('Returns correct timestamp for different dates', () => {
    const date1 = new Date('2023-01-01T00:00:00Z');
    const date2 = new Date('2023-12-31T23:59:59Z');

    const result1 = getTimestamp(date1);
    const result2 = getTimestamp(date2);

    expect(result1).toBe(date1.getTime());
    expect(result2).toBe(date2.getTime());
    expect(result2).toBeGreaterThan(result1);
  });

  test('Returns number type', () => {
    const date = new Date();
    const result = getTimestamp(date);
    expect(typeof result).toBe('number');
  });
});

