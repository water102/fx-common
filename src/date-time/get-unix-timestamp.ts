import { getTimestamp } from './get-timestamp';

export function getUnixTimestamp(date: Date) {
  return (getTimestamp(date) / 1000) | 0;
}
