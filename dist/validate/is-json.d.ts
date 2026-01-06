/**
 * Checks if a string is valid JSON.
 * @param json - The string to validate
 * @param traceError - Whether to log error details (default: true)
 * @returns True if the string is valid JSON, false otherwise
 * @example
 * isJSON('{"key": "value"}'); // true
 * isJSON('invalid json'); // false
 */
export declare const isJSON: (json: unknown, traceError?: boolean) => boolean;
