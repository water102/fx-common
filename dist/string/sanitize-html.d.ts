/**
 * Sanitizes HTML by escaping special characters to prevent XSS attacks.
 * @param input - The HTML string to sanitize
 * @returns Sanitized string with HTML entities escaped
 * @example
 * sanitizeHTML('<script>alert("xss")</script>'); // '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
 */
export declare const sanitizeHTML: (input: string) => string;
