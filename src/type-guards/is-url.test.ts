import { isUrl } from './is-url';

describe('isUrl', () => {
  test('Returns true for valid URLs', () => {
    expect(isUrl('https://example.com')).toBe(true);
    expect(isUrl('http://example.com')).toBe(true);
    expect(isUrl('https://example.com/path')).toBe(true);
    expect(isUrl('https://example.com:8080/path?query=value')).toBe(true);
  });

  test('Returns false for invalid URLs', () => {
    expect(isUrl('not-a-url')).toBe(false);
    expect(isUrl('example.com')).toBe(false);
    expect(isUrl('')).toBe(false);
    expect(isUrl('ftp://')).toBe(false);
  });
});

