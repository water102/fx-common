import { isExternalLink } from './is-external-link';

describe('isExternalLink', () => {
  test('Returns true for external URLs', () => {
    expect(isExternalLink('https://example.com')).toBe(true);
    expect(isExternalLink('http://external.com')).toBe(true);
  });

  test('Returns false for relative paths', () => {
    expect(isExternalLink('/path')).toBe(false);
    expect(isExternalLink('./relative')).toBe(false);
    expect(isExternalLink('../parent')).toBe(false);
  });

  test('Returns false for empty string', () => {
    expect(isExternalLink('')).toBe(false);
  });
});

