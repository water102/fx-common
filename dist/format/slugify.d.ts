/**
 * Converts a string to a URL-friendly slug.
 * Handles Vietnamese characters and special characters.
 * @param text - The text to convert to slug
 * @returns A URL-friendly slug string
 * @example
 * slugify('Hello World!'); // 'hello-world'
 * slugify('Xin chào'); // 'xin-chao'
 */
export declare const slugify: (text: string) => string;
