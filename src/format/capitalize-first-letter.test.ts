import { capitalizeFirstLetter } from './capitalize-first-letter';

describe('capitalizeFirstLetter', () => {
  test('Capitalizes first letter of string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  test('Handles already capitalized string', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
  });

  test('Handles single character', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  test('Handles empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('Handles string with numbers', () => {
    expect(capitalizeFirstLetter('123abc')).toBe('123abc');
  });

  test('Handles string with special characters', () => {
    expect(capitalizeFirstLetter('!hello')).toBe('!hello');
  });
});

