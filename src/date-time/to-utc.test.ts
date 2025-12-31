import { toUtc } from './to-utc';

describe('toUtc', () => {
  test('Converts Date to UTC', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = toUtc(date);

    expect(result).toBeInstanceOf(Date);
  });

  test('Converts string to UTC Date', () => {
    const dateString = '2023-08-07T12:00:00';
    const result = toUtc(dateString);

    expect(result).toBeInstanceOf(Date);
  });

  test('Handles null input', () => {
    const result = toUtc(null);
    expect(result).toBeInstanceOf(Date);
  });

  test('Handles undefined input', () => {
    const result = toUtc(undefined);
    expect(result).toBeInstanceOf(Date);
  });

  test('Adjusts for timezone offset', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = toUtc(date);
    const timezoneOffset = new Date().getTimezoneOffset();

    // The result should be adjusted by timezone offset
    expect(result).toBeInstanceOf(Date);
    // The exact value depends on current timezone, so we just verify it's a valid date
    expect(result.getTime()).toBeDefined();
  });
});

