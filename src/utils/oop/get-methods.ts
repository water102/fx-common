import { getMethodNames } from './get-method-names';

export function getMethods(obj: any): string[] {
  return getMethodNames(obj).map((key) => obj[key]);
}
