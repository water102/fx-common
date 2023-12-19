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
    .replace(/"/g, encodedCharacters['"'])
    .replace(/'/g, encodedCharacters['\''])
    .replace(/\//g, encodedCharacters['/']);
};
// sanitizeHTML("<h1>Hello, World!</h1>");
