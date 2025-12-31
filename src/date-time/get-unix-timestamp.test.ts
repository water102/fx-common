import { getUnixTimestamp } from './get-unix-timestamp';

describe('getUnixTimestamp', () => {
  test('Returns Unix timestamp in seconds', () => {
    const date = new Date('2023-08-07T12:00:00Z');
    const result = getUnixTimestamp(date);
    const expected = Math.floor(date.getTime() / 1000);

    expect(result).toBe(expected);
  });

  test('Returns integer value', () => {
    const date = new Date();
    const result = getUnixTimestamp(date);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('Returns timestamp in seconds (not milliseconds)', () => {
    const date = new Date('2023-08-07T12:00:00Z');
    const result = getUnixTimestamp(date);
    const milliseconds = date.getTime();
    const seconds = Math.floor(milliseconds / 1000);

    expect(result).toBe(seconds);
    expect(result).toBeLessThan(milliseconds);
  });

  test('Handles different dates correctly', () => {
    const date1 = new Date('2023-01-01T00:00:00Z');
    const date2 = new Date('2023-12-31T23:59:59Z');

    const result1 = getUnixTimestamp(date1);
    const result2 = getUnixTimestamp(date2);

    expect(result2).toBeGreaterThan(result1);
  });
});

