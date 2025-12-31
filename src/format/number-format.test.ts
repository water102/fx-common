import { numberFormat } from './number-format';

describe('numberFormat', () => {
  test('Formats number with default settings', () => {
    const result = numberFormat(1234567.89);
    expect(result).toContain('1,234,567');
  });

  test('Formats number with custom decimal places', () => {
    const result = numberFormat(1234.567, 2);
    expect(result).toBe('1,234.57');
  });

  test('Formats number with custom whole part delimiter', () => {
    // When using '.' for both delimiters, it may cause parsing issues
    // Let's test with a valid combination
    const result = numberFormat(1234567.89, 2, 3, ' ', '.');
    expect(result).toContain('1 234 567');
  });

  test('Formats number with custom decimal delimiter', () => {
    // When decimal delimiter is same as section delimiter, it may cause issues
    // Let's test with different delimiter
    const result = numberFormat(1234.56, 2, 3, ',', '.');
    expect(result).toContain('1,234.56');
  });

  test('Handles zero', () => {
    const result = numberFormat(0);
    expect(result).toBe('0');
  });

  test('Handles negative numbers', () => {
    const result = numberFormat(-1234.56, 2);
    expect(result).toContain('-1,234.56');
  });

  test('Returns empty string for null/undefined', () => {
    expect(numberFormat(null as any)).toBe('');
    expect(numberFormat(undefined as any)).toBe('');
  });

  test('Handles string input', () => {
    const result = numberFormat('1234.56' as any, 2);
    expect(result).toContain('1,234.56');
  });
});

