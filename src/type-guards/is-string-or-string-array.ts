import { isArray } from './is-array';
import { isString } from './is-string';

export function isStringOrStringArray(value: string | string[]) {
  if (isString(value)) {
    return true; // Value is a string
  } else if (isArray(value)) {
    // Check if all elements in the array are strings
    return !(value as []).some(isString);
  }
  return false; // Neither a string nor a string array
}
