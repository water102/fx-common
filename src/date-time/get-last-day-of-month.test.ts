import { getLastDayOfMonth } from './get-last-day-of-month';

describe('getLastDayOfMonth', () => {
  test('Returns last day of the month', () => {
    const date = new Date('2023-08-15T12:00:00');
    const result = getLastDayOfMonth(date);
    const expected = new Date('2023-08-31T00:00:00');

    expect(result.getFullYear()).toBe(expected.getFullYear());
    expect(result.getMonth()).toBe(expected.getMonth());
    expect(result.getDate()).toBe(31);
  });

  test('Handles February correctly (non-leap year)', () => {
    const date = new Date('2023-02-15T12:00:00');
    const result = getLastDayOfMonth(date);

    expect(result.getDate()).toBe(28);
    expect(result.getMonth()).toBe(1); // February is month 1
  });

  test('Handles February correctly (leap year)', () => {
    const date = new Date('2024-02-15T12:00:00');
    const result = getLastDayOfMonth(date);

    expect(result.getDate()).toBe(29);
    expect(result.getMonth()).toBe(1);
  });

  test('Handles months with 30 days', () => {
    const date = new Date('2023-04-15T12:00:00');
    const result = getLastDayOfMonth(date);

    expect(result.getDate()).toBe(30);
    expect(result.getMonth()).toBe(3); // April is month 3
  });

  test('Handles year boundaries', () => {
    const date = new Date('2023-12-15T12:00:00');
    const result = getLastDayOfMonth(date);

    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(11); // December is month 11
    expect(result.getDate()).toBe(31);
  });

  test('Preserves time components are set to 00:00:00', () => {
    const date = new Date('2023-08-15T12:30:45');
    const result = getLastDayOfMonth(date);

    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
  });
});

