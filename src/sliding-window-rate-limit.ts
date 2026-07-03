export type SlidingWindowRateLimitOpts = {
  windowMs: number;
  maxEvents: number;
};

export type SlidingWindowRateLimiter = {
  /** Returns true when the event is allowed and recorded; false when over the cap. */
  tryAllow(): boolean;
};

type Clock = { now: () => number };

/**
 * Sliding window cap: at most `maxEvents` calls to `tryAllow` within `windowMs`.
 * When `maxEvents` is 0, every call returns true (limiter disabled).
 */
export const createSlidingWindowRateLimiter = (
  opts: SlidingWindowRateLimitOpts,
  clock: Clock = { now: Date.now },
): SlidingWindowRateLimiter => {
  if (opts.maxEvents <= 0 || opts.windowMs <= 0) {
    return { tryAllow: () => true };
  }
  const events: number[] = [];
  const { windowMs, maxEvents } = opts;

  return {
    tryAllow(): boolean {
      const now = clock.now();
      let write = 0;
      for (let read = 0; read < events.length; read++) {
        if (now - events[read]! < windowMs) {
          events[write++] = events[read]!;
        }
      }
      events.length = write;
      if (write >= maxEvents) {
        return false;
      }
      events.push(now);
      return true;
    },
  };
};
