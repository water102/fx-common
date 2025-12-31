import { toLowerCase } from './to-lower-case';

describe('toLowerCase', () => {
  test('Converts string to lowercase', () => {
    expect(toLowerCase('HELLO')).toBe('hello');
    expect(toLowerCase('Hello World')).toBe('hello world');
  });

  test('Handles already lowercase string', () => {
    expect(toLowerCase('hello')).toBe('hello');
  });

  test('Handles empty string', () => {
    expect(toLowerCase('')).toBe('');
  });
});

