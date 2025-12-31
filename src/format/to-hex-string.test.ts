import { toHexString } from './to-hex-string';

describe('toHexString', () => {
  test('Converts number to hex string with 0x prefix', () => {
    expect(toHexString(255)).toBe('0xff');
  });

  test('Handles zero', () => {
    expect(toHexString(0)).toBe('0x0');
  });

  test('Handles large numbers', () => {
    expect(toHexString(4095)).toBe('0xfff');
  });

  test('Handles negative numbers', () => {
    const result = toHexString(-255);
    expect(result).toContain('0x');
    expect(result.length).toBeGreaterThan(2);
  });

  test('Returns string type', () => {
    const result = toHexString(100);
    expect(typeof result).toBe('string');
    expect(result.startsWith('0x')).toBe(true);
  });
});

