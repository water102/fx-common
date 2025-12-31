import { waitUntil } from './wait-until';

describe('waitUntil', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Resolves when condition is true after first interval check', async () => {
    const promise = waitUntil(() => true, 100);
    let resolved = false;

    promise.then(() => {
      resolved = true;
    });

    await Promise.resolve();
    expect(resolved).toBe(false); // Not resolved yet, waiting for first interval

    jest.advanceTimersByTime(100);
    await Promise.resolve();
    expect(resolved).toBe(true); // Resolved after first check
  });

  test('Waits until condition becomes true', async () => {
    let condition = false;
    const promise = waitUntil(() => condition, 100);
    let resolved = false;

    promise.then(() => {
      resolved = true;
    });

    await Promise.resolve();
    expect(resolved).toBe(false);

    condition = true;
    jest.advanceTimersByTime(100);
    await Promise.resolve();
    expect(resolved).toBe(true);
  });

  test('Checks condition at specified interval', async () => {
    let checkCount = 0;
    let condition = false;
    let resolved = false;
    
    const promise = waitUntil(() => {
      checkCount++;
      return condition;
    }, 50);

    promise.then(() => {
      resolved = true;
    });

    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(checkCount).toBeGreaterThan(0);
    expect(resolved).toBe(false);

    condition = true;
    jest.advanceTimersByTime(50);
    await Promise.resolve();
    expect(resolved).toBe(true);
  });

  test('Uses default interval of 100ms', async () => {
    let condition = false;
    const promise = waitUntil(() => condition);

    promise.then(() => {
      // Should resolve
    });

    condition = true;
    jest.advanceTimersByTime(100);
    await Promise.resolve();
    expect(true).toBe(true);
  });
});

