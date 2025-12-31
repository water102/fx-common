/**
 * Sanitizes HTML by escaping special characters to prevent XSS attacks.
 * @param input - The HTML string to sanitize
 * @returns Sanitized string with HTML entities escaped
 * @example
 * sanitizeHTML('<script>alert("xss")</script>'); // '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
 */
export const sanitizeHTML = (input: string) => {
  const encodedCharacters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '/': '&#x2F;'
  };

  return input
    .replace(/&/g, encodedCharacters['&'])
    .replace(/</g, encodedCharacters['<'])
    .replace(/>/g, encodedCharacters['>'])
    .replace(/"/g, encodedCharacters['"'])
    .replace(/'/g, encodedCharacters['\''])
    .replace(/\//g, encodedCharacters['/']);
};
// sanitizeHTML("<h1>Hello, World!</h1>");
