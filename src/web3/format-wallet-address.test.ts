import { formatWalletAddress } from './format-wallet-address';

describe('formatWalletAddress', () => {
  test('Formats wallet address with default settings', () => {
    const addr = '0x1234567890abcdef1234567890abcdef12345678';
    const result = formatWalletAddress(addr);
    expect(result).toBe('0x1234...5678');
  });

  test('Formats with custom head and tail', () => {
    const addr = '0x1234567890abcdef1234567890abcdef12345678';
    const result = formatWalletAddress(addr, 4, 4);
    expect(result).toBe('0x12...5678');
  });

  test('Handles null/undefined', () => {
    expect(formatWalletAddress(null as any)).toBe('...');
    expect(formatWalletAddress(undefined as any)).toBe('...');
  });
});

