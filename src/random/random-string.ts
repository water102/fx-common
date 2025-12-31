import { randomElement } from './random-element';

/**
 * Generates a random string of specified length using optional character set.
 * @param length - Length of the random string (default: 8)
 * @param chars - Character set to use (default: alphanumeric)
 * @returns A random string
 * @example
 * randomString(10); // Random 10-character string
 * randomString(8, '0123456789'); // Random 8-digit string
 */
export function randomString(
  length = 8,
  chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) {
  let result = '';
  for (let i = length; i > 0; --i) result += randomElement(chars);
  return result;
}
