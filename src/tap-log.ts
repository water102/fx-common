import { logger } from './logger';

export const tapLog = <T = any>(message: string, trace?: (val: T) => T) => (val: T) => {
  logger.debug(message, val);
  trace?.(val);
  return val;
};
