import { curryN } from 'ramda';
import { logger } from './logger';

/**
 * Logs an error with an optional message.
 * @param message - Error message (default: 'error')
 * @param error - The error to log
 * @example
 * logError('Failed to fetch data', new Error('Network error'));
 */
export const logError = curryN(2, (message = 'error', error: unknown) => {
  logger.error(message, error);
});
