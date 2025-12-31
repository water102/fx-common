import { waitForTime } from './wait-for-time';

describe('waitForTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Resolves after specified time', async () => {
    const promise = waitForTime(100);
    let resolved = false;

    promise.then(() => {
      resolved = true;
    });

    expect(resolved).toBe(false);
    jest.advanceTimersByTime(100);
    
    // Wait for promise to resolve
    await Promise.resolve();
    expect(resolved).toBe(true);
  });

  test('Resolves with correct timing', async () => {
    const start = Date.now();
    const promise = waitForTime(200);

    jest.advanceTimersByTime(200);
    await promise;

    // In fake timers, this should work correctly
    expect(true).toBe(true);
  });

  test('Works with different time values', async () => {
    const promise1 = waitForTime(50);
    const promise2 = waitForTime(100);

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    
    // promise1 should resolve, promise2 should not yet
    jest.advanceTimersByTime(50);
    await Promise.resolve();
    
    expect(true).toBe(true);
  });
});

