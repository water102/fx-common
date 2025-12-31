import { sanitizeHTML } from './sanitize-html';

describe('sanitizeHTML', () => {
  test('Escapes HTML special characters', () => {
    expect(sanitizeHTML('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
  });

  test('Escapes ampersand', () => {
    expect(sanitizeHTML('A & B')).toBe('A &amp; B');
  });

  test('Escapes less than and greater than', () => {
    expect(sanitizeHTML('<div>')).toBe('&lt;div&gt;');
  });

  test('Escapes quotes', () => {
    expect(sanitizeHTML('"hello"')).toBe('&quot;hello&quot;');
    expect(sanitizeHTML("'hello'")).toBe('&#x27;hello&#x27;');
  });

  test('Escapes forward slash', () => {
    expect(sanitizeHTML('</div>')).toBe('&lt;&#x2F;div&gt;');
  });

  test('Handles empty string', () => {
    expect(sanitizeHTML('')).toBe('');
  });

  test('Handles string without special characters', () => {
    expect(sanitizeHTML('Hello World')).toBe('Hello World');
  });
});

