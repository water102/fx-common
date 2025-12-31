import { getDateFromTimestamp } from './get-date-from-timestamp';

describe('getDateFromTimestamp', () => {
  test('Converts Unix timestamp to Date object', () => {
    const unixTimestamp = 1691414400; // 2023-08-07T12:00:00Z
    const result = getDateFromTimestamp(unixTimestamp);
    const expected = new Date(unixTimestamp * 1000);

    expect(result).toEqual(expected);
  });

  test('Handles different timestamps correctly', () => {
    const timestamp1 = 1672531200; // 2023-01-01T00:00:00Z
    const timestamp2 = 1704067199; // 2023-12-31T23:59:59Z

    const result1 = getDateFromTimestamp(timestamp1);
    const result2 = getDateFromTimestamp(timestamp2);

    expect(result1.getTime()).toBe(timestamp1 * 1000);
    expect(result2.getTime()).toBe(timestamp2 * 1000);
    expect(result2.getTime()).toBeGreaterThan(result1.getTime());
  });

  test('Returns Date object', () => {
    const timestamp = 1691414400;
    const result = getDateFromTimestamp(timestamp);

    expect(result).toBeInstanceOf(Date);
  });

  test('Handles zero timestamp', () => {
    const result = getDateFromTimestamp(0);
    expect(result).toEqual(new Date(0));
  });
});

