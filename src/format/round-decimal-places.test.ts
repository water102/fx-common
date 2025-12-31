import { roundDecimalPlaces } from './round-decimal-places';

describe('roundDecimalPlaces', () => {
  test('Rounds to specified decimal places', () => {
    const result = roundDecimalPlaces(12.789, 2);
    expect(result).toBe(12.79);
  });

  test('Uses default 2 decimal places', () => {
    const result = roundDecimalPlaces(12.789);
    expect(result).toBe(12.79);
  });

  test('Handles zero decimal places', () => {
    const result = roundDecimalPlaces(12.789, 0);
    expect(result).toBe(13);
  });

  test('Handles rounding up', () => {
    const result = roundDecimalPlaces(12.995, 2);
    expect(result).toBe(13);
  });

  test('Handles rounding down', () => {
    const result = roundDecimalPlaces(12.123, 2);
    expect(result).toBe(12.12);
  });

  test('Handles negative numbers', () => {
    const result = roundDecimalPlaces(-12.789, 2);
    expect(result).toBe(-12.79);
  });
});

