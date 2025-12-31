import { randomString } from './random-string';

describe('randomString', () => {
  test('Generates string of default length', () => {
    const result = randomString();
    expect(result).toHaveLength(8);
  });

  test('Generates string of specified length', () => {
    const result = randomString(10);
    expect(result).toHaveLength(10);
  });

  test('Uses custom character set', () => {
    const result = randomString(5, 'abc');
    expect(result).toHaveLength(5);
    expect(result.split('').every(char => 'abc'.includes(char))).toBe(true);
  });

  test('Returns string type', () => {
    const result = randomString();
    expect(typeof result).toBe('string');
  });
});

