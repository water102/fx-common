import { waitForTime } from '../utils/wait-for-time';

export type RetryBackoff = 'none' | 'linear' | 'exponential';

export type RetryOptions = {
  /** Delay before the first retry (default 1_000 ms). */
  intervalMs?: number;
  /** Total attempts including the first call. Omit for unlimited retries. */
  maxAttempts?: number;
  backoff?: RetryBackoff;
  /** Multiplier for linear / exponential backoff (default 2). */
  backoffFactor?: number;
  /** Upper bound on delay between attempts. */
  maxIntervalMs?: number;
  /** Return false to stop retrying and rethrow. */
  shouldRetry?: (error: unknown, attempt: number) => boolean;
  onRetry?: (error: unknown, attempt: number, delayMs: number) => void;
};

const computeDelayMs = (
  intervalMs: number,
  attempt: number,
  backoff: RetryBackoff,
  backoffFactor: number,
  maxIntervalMs: number,
): number => {
  let delay = intervalMs;
  if (backoff === 'linear') {
    delay = intervalMs * attempt;
  } else if (backoff === 'exponential') {
    delay = intervalMs * backoffFactor ** (attempt - 1);
  }
  return Math.min(delay, maxIntervalMs);
};

/** Run `fn` until it resolves or retries are exhausted. */
export const retry = async <T>(
  fn: (attempt: number) => Promise<T>,
  options: RetryOptions = {},
): Promise<T> => {
  const {
    intervalMs = 1_000,
    maxAttempts,
    backoff = 'none',
    backoffFactor = 2,
    maxIntervalMs = Number.MAX_SAFE_INTEGER,
    shouldRetry = () => true,
    onRetry,
  } = options;

  let attempt = 0;
  while (true) {
    attempt += 1;
    try {
      return await fn(attempt);
    } catch (error) {
      if (!shouldRetry(error, attempt)) {
        throw error;
      }
      if (maxAttempts !== undefined && attempt >= maxAttempts) {
        throw error;
      }
      const delayMs = computeDelayMs(intervalMs, attempt, backoff, backoffFactor, maxIntervalMs);
      onRetry?.(error, attempt, delayMs);
      await waitForTime(delayMs);
    }
  }
};
