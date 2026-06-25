import { bytesToHex } from './bytes-to-hex';

describe('bytesToHex', () => {
  test('encodes bytes as lowercase hex', () => {
    expect(bytesToHex(new Uint8Array([0, 1, 15, 255]))).toBe('00010fff');
  });

  test('handles empty input', () => {
    expect(bytesToHex(new Uint8Array())).toBe('');
  });
});
