import { isEmpty } from 'ramda';
import { randomIntBetween } from './random-int-between';

export const randomElement = (items: any[] | string): any => {
  if (isEmpty(items)) return;
  const index = randomIntBetween(0, items.length - 1);
  return items[index];
};
