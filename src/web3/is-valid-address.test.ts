import { isValidAddress, isValidTransID } from './index';

describe('isValidAddress', () => {
  test('Returns true for valid Ethereum address', () => {
    expect(isValidAddress('0x1234567890123456789012345678901234567890')).toBe(true);
  });

  test('Returns false for invalid address', () => {
    expect(isValidAddress('0x123')).toBe(false);
    expect(isValidAddress('invalid')).toBe(false);
    expect(isValidAddress('')).toBe(false);
  });
});

describe('isValidTransID', () => {
  test('Returns true for valid transaction ID', () => {
    expect(isValidTransID('0x1234567890123456789012345678901234567890123456789012345678901234')).toBe(true);
  });

  test('Returns false for invalid transaction ID', () => {
    expect(isValidTransID('0x123')).toBe(false);
    expect(isValidTransID('invalid')).toBe(false);
  });
});

