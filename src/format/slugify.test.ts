import { slugify } from './slugify';

describe('slugify', () => {
  // Test when the string only contains unaccented Latin letters and spaces; the function should return the expected slug
  test('Returns the expected slug when the string only has unaccented Latin letters and spaces', () => {
    const text = 'This is a sample text';
    const expectedSlug = 'this-is-a-sample-text';
    expect(slugify(text)).toBe(expectedSlug);
  });

  // Test when the string contains Vietnamese diacritics; the function should strip them before generating the slug
  test('Strips Vietnamese diacritics and converts the text into a slug', () => {
    const text = 'Đây là một ví dụ về tiếng Việt';
    const expectedSlug = 'day-la-mot-vi-du-ve-tieng-viet';
    expect(slugify(text)).toBe(expectedSlug);
  });

  // Test when the string contains special characters; the function should remove them before building the slug
  test('Removes special characters and converts the result into a slug', () => {
    const text = 'Special @!#$ Characters';
    const expectedSlug = 'special-characters';
    expect(slugify(text)).toBe(expectedSlug);
  });

  // Test when the input is empty; the function should return an empty slug
  test('Returns an empty string when the input is empty', () => {
    const text = '';
    expect(slugify(text)).toBe('');
  });

  // Test when the string only contains whitespace; the function should return an empty slug
  test('Returns an empty slug when the string only contains whitespace', () => {
    const text = '      ';
    expect(slugify(text)).toBe('');
  });
});
