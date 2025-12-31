import { reverseString } from './reverse-string';

describe('reverseString', () => {
  test('Reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('Handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('Handles single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('Handles palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
});

