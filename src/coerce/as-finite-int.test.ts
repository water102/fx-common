import { asFiniteInt } from './as-finite-int';

describe('asFiniteInt', () => {
  test('truncates finite numbers', () => {
    expect(asFiniteInt(12.9)).toBe(12);
    expect(asFiniteInt(-3.2)).toBe(-3);
  });

  test('parses numeric strings', () => {
    expect(asFiniteInt('  7  ')).toBe(7);
    expect(asFiniteInt('12.4')).toBe(12);
  });

  test('returns undefined for invalid input', () => {
    expect(asFiniteInt(undefined)).toBeUndefined();
    expect(asFiniteInt('')).toBeUndefined();
    expect(asFiniteInt('   ')).toBeUndefined();
    expect(asFiniteInt('nope')).toBeUndefined();
    expect(asFiniteInt(Number.NaN)).toBeUndefined();
  });
});
