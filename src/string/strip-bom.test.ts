import { stripBom } from './strip-bom';

describe('stripBom', () => {
  test('removes leading BOM', () => {
    expect(stripBom('\uFEFFhello')).toBe('hello');
  });

  test('leaves text without BOM unchanged', () => {
    expect(stripBom('hello')).toBe('hello');
  });

  test('handles empty string', () => {
    expect(stripBom('')).toBe('');
  });
});
