import { getFirstDayOfMonth } from './get-first-day-of-month';

describe('getFirstDayOfMonth', () => {
  test('Returns first day of the month', () => {
    const date = new Date('2023-08-15T12:00:00');
    const result = getFirstDayOfMonth(date);
    const expected = new Date('2023-08-01T00:00:00');

    expect(result.getFullYear()).toBe(expected.getFullYear());
    expect(result.getMonth()).toBe(expected.getMonth());
    expect(result.getDate()).toBe(1);
  });

  test('Handles first day of month correctly', () => {
    const date = new Date('2023-08-01T12:00:00');
    const result = getFirstDayOfMonth(date);

    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(7); // August is month 7 (0-indexed)
  });

  test('Handles last day of month correctly', () => {
    const date = new Date('2023-08-31T12:00:00');
    const result = getFirstDayOfMonth(date);

    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(7);
  });

  test('Handles year boundaries', () => {
    const date = new Date('2023-12-15T12:00:00');
    const result = getFirstDayOfMonth(date);

    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(11); // December is month 11
    expect(result.getDate()).toBe(1);
  });

  test('Preserves time components are set to 00:00:00', () => {
    const date = new Date('2023-08-15T12:30:45');
    const result = getFirstDayOfMonth(date);

    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
  });
});

