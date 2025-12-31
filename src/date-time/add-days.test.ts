import { addDaysToDate } from './add-days';

describe('addDaysToDate', () => {
  test('Adds positive number of days', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = addDaysToDate(date, 5);
    const expected = new Date('2023-08-12T12:00:00');
    expect(result).toEqual(expected);
  });

  test('Adds negative number of days (subtracts)', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = addDaysToDate(date, -3);
    const expected = new Date('2023-08-04T12:00:00');
    expect(result).toEqual(expected);
  });

  test('Handles month boundaries', () => {
    const date = new Date('2023-08-30T12:00:00');
    const result = addDaysToDate(date, 5);
    const expected = new Date('2023-09-04T12:00:00');
    expect(result).toEqual(expected);
  });

  test('Handles year boundaries', () => {
    const date = new Date('2023-12-30T12:00:00');
    const result = addDaysToDate(date, 5);
    const expected = new Date('2024-01-04T12:00:00');
    expect(result).toEqual(expected);
  });

  test('Adds zero days returns same date', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = addDaysToDate(date, 0);
    expect(result).toEqual(date);
  });
});

