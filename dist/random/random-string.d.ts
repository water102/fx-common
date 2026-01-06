/**
 * Generates a random string of specified length using optional character set.
 * @param length - Length of the random string (default: 8)
 * @param chars - Character set to use (default: alphanumeric)
 * @returns A random string
 * @example
 * randomString(10); // Random 10-character string
 * randomString(8, '0123456789'); // Random 8-digit string
 */
export declare function randomString(length?: number, chars?: string): string;
