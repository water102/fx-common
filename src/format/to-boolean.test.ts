import { toBoolean } from './to-boolean';

describe('toBoolean', () => {
  test('Returns boolean as-is', () => {
    expect(toBoolean(true)).toBe(true);
    expect(toBoolean(false)).toBe(false);
  });

  test('Converts string "true" to true', () => {
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('TRUE')).toBe(true);
    expect(toBoolean('True')).toBe(true);
  });

  test('Converts string "false" to false', () => {
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('FALSE')).toBe(false);
  });

  test('Converts non-zero number to true', () => {
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean(-1)).toBe(true);
    expect(toBoolean(100)).toBe(true);
  });

  test('Converts zero to false', () => {
    expect(toBoolean(0)).toBe(false);
  });

  test('Converts truthy values to true', () => {
    expect(toBoolean({})).toBe(true);
    expect(toBoolean([])).toBe(true);
    // String 'non-empty' is not 'true', so it returns false
    expect(toBoolean('non-empty')).toBe(false);
  });

  test('Converts falsy values to false', () => {
    expect(toBoolean(null)).toBe(false);
    expect(toBoolean(undefined)).toBe(false);
    expect(toBoolean('')).toBe(false);
  });
});

