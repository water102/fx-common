import { trim } from './trim';

describe('trim', () => {
  test('Trims whitespace from both ends', () => {
    expect(trim('  hello  ')).toBe('hello');
  });

  test('Handles string without whitespace', () => {
    expect(trim('hello')).toBe('hello');
  });

  test('Handles empty string', () => {
    expect(trim('')).toBe('');
  });

  test('Handles only whitespace', () => {
    expect(trim('   ')).toBe('');
  });
});

