import { isNilOrEmpty } from '../validate';

export function clearNilProperties(obj: any) {
  for (const i in obj) {
    if (isNilOrEmpty(obj[i])) {
      delete obj[i];
    }
  }
  return obj;
}
