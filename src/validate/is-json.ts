import { logger } from '../logger';

/**
 * Checks if a string is valid JSON.
 * @param json - The string to validate
 * @param traceError - Whether to log error details (default: true)
 * @returns True if the string is valid JSON, false otherwise
 * @example
 * isJSON('{"key": "value"}'); // true
 * isJSON('invalid json'); // false
 */
export const isJSON = function (json: unknown, traceError = true): boolean {
  if (typeof json !== 'string') {
    return false;
  }

  let is_json = true;
  // Try-catch and JSON.parse function is used here.
  try {
    JSON.parse(json);
  } catch (error) {
    is_json = false;
    if (traceError) {
      logger.debug('Might be a problem in key or value data type');
    }
  }

  if (traceError && !is_json) {
    const countCharacter = (str: string, character: string): number => {
      let count = 0;
      for (let i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) === character) {
          // counting : or ,
          count++;
        }
      }
      return count;
    };

    const trimmedJson = json.trim(); // remove whitespace, start and end spaces

    if (trimmedJson.charAt(0) === '{' && trimmedJson.charAt(trimmedJson.length - 1) !== '}') {
      logger.debug('Brackets {} are not balanced');
    } else if (trimmedJson.charAt(0) === '[' && trimmedJson.charAt(trimmedJson.length - 1) !== ']') {
      logger.debug('Brackets [] are not balanced');
    } else if (!(countCharacter(trimmedJson, ':') - 1 === countCharacter(trimmedJson, ','))) {
      logger.debug('Comma or colon are not balanced');
    } else {
      const innerJson = trimmedJson.substring(1, trimmedJson.length - 1); // remove first and last brackets
      const pairs = innerJson.split(',');
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        if (pair.indexOf(':') === -1) {
          // if colon not exist in b/w
          logger.debug('No colon b/w key and value');
        }
      }
    }
  }
  return is_json;
};
