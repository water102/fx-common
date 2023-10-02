import { isNotNilAndEmpty } from './is-not-nil-and-empty';

export function isExternalLink(url: string) {
  return isNotNilAndEmpty(url) && /^https?:\/\//.test(url);
}
