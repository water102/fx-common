import { isObject, isRecord } from './is-object';

describe('isObject', () => {
  test('Returns true for object values', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
    expect(isObject({ a: 1, b: 2 })).toBe(true);
  });

  test('Returns false for non-object values', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
  });

  test('isRecord is an alias for isObject', () => {
    expect(isRecord).toBe(isObject);
    expect(isRecord({ ok: true })).toBe(true);
    expect(isRecord([])).toBe(false);
  });
});

