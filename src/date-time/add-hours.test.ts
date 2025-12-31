import { addHours } from './add-hours';

describe('addHours', () => {
  test('Adds positive number of hours', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = addHours(date, 5);
    const expected = new Date('2023-08-07T17:00:00');
    expect(result).toEqual(expected);
  });

  test('Adds negative number of hours (subtracts)', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = addHours(date, -3);
    const expected = new Date('2023-08-07T09:00:00');
    expect(result).toEqual(expected);
  });

  test('Handles day boundaries', () => {
    const date = new Date('2023-08-07T22:00:00');
    const result = addHours(date, 5);
    const expected = new Date('2023-08-08T03:00:00');
    expect(result).toEqual(expected);
  });

  test('Adds zero hours returns same date', () => {
    const date = new Date('2023-08-07T12:00:00');
    const result = addHours(date, 0);
    expect(result).toEqual(date);
  });
});

