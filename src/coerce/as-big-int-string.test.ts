import { asBigIntString } from './as-big-int-string';

describe('asBigIntString', () => {
  test('accepts integer strings', () => {
    expect(asBigIntString('  9007199254740991  ')).toBe('9007199254740991');
    expect(asBigIntString('-42')).toBe('-42');
  });

  test('converts finite numbers', () => {
    expect(asBigIntString(100)).toBe('100');
    expect(asBigIntString(12.9)).toBe('12');
  });

  test('rejects non-integers', () => {
    expect(asBigIntString('12.3')).toBeUndefined();
    expect(asBigIntString('abc')).toBeUndefined();
    expect(asBigIntString(Number.NaN)).toBeUndefined();
  });
});
