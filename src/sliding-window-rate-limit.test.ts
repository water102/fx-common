import { createSlidingWindowRateLimiter } from './sliding-window-rate-limit';

describe('createSlidingWindowRateLimiter', () => {
  test('allows up to maxEvents then blocks until window slides', () => {
    let t = 0;
    const lim = createSlidingWindowRateLimiter(
      { windowMs: 1000, maxEvents: 2 },
      { now: () => t },
    );
    expect(lim.tryAllow()).toBe(true);
    expect(lim.tryAllow()).toBe(true);
    expect(lim.tryAllow()).toBe(false);
    t = 1500;
    expect(lim.tryAllow()).toBe(true);
  });

  test('is a no-op when maxEvents is 0', () => {
    const lim = createSlidingWindowRateLimiter({ windowMs: 1000, maxEvents: 0 });
    for (let i = 0; i < 5; i++) {
      expect(lim.tryAllow()).toBe(true);
    }
  });
});
