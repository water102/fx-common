import { curryN } from 'ramda';

export const logError = curryN(2, (message = 'error', error: unknown) => {
  console.error(message, error);
});
