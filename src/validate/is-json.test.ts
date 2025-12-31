import { isJSON } from './is-json';

describe('isJSON', () => {
  test('Returns true for valid JSON strings', () => {
    expect(isJSON('{"key": "value"}')).toBe(true);
    expect(isJSON('[1, 2, 3]')).toBe(true);
    expect(isJSON('123')).toBe(true);
    expect(isJSON('"string"')).toBe(true);
  });

  test('Returns false for invalid JSON strings', () => {
    expect(isJSON('not json')).toBe(false);
    expect(isJSON('{key: value}')).toBe(false);
    expect(isJSON('{')).toBe(false);
  });

  test('Returns false for non-string values', () => {
    expect(isJSON(123)).toBe(false);
    expect(isJSON(null)).toBe(false);
    expect(isJSON(undefined)).toBe(false);
    expect(isJSON({})).toBe(false);
  });
});

