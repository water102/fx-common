import { cutDecimalPlaces } from './cut-decimal-places';

describe('cutDecimalPlaces', () => {
  test('Cuts decimal places without rounding', () => {
    const result = cutDecimalPlaces(12.789, 2);
    expect(result).toBe(12.78);
  });

  test('Uses default 2 decimal places', () => {
    const result = cutDecimalPlaces(12.789);
    expect(result).toBe(12.78);
  });

  test('Handles zero decimal places', () => {
    const result = cutDecimalPlaces(12.789, 0);
    expect(result).toBe(12);
  });

  test('Handles more decimal places than available', () => {
    const result = cutDecimalPlaces(12.5, 5);
    expect(result).toBe(12.5);
  });

  test('Handles negative numbers', () => {
    const result = cutDecimalPlaces(-12.789, 2);
    expect(result).toBe(-12.78);
  });

  test('Does not round up', () => {
    const result = cutDecimalPlaces(12.999, 2);
    expect(result).toBe(12.99); // Not 13.00
  });
});

