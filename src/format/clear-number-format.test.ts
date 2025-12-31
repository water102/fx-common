import { clearNumberFormat } from './clear-number-format';

describe('clearNumberFormat', () => {
  test('Removes formatting from formatted number string', () => {
    const result = clearNumberFormat('1,234.56');
    expect(result).toBe(1234.56);
  });

  test('Handles custom section delimiter', () => {
    const result = clearNumberFormat('1.234,56', '.', ',');
    expect(result).toBe(1234.56);
  });

  test('Handles number input', () => {
    const result = clearNumberFormat(1234.56 as any);
    expect(result).toBe(1234.56);
  });

  test('Handles string without formatting', () => {
    const result = clearNumberFormat('1234.56');
    expect(result).toBe(1234.56);
  });

  test('Handles negative numbers', () => {
    const result = clearNumberFormat('-1,234.56');
    expect(result).toBe(-1234.56);
  });

  test('Handles multiple section delimiters', () => {
    const result = clearNumberFormat('1,234,567.89');
    expect(result).toBe(1234567.89);
  });
});

