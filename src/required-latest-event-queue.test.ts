import {
  clearRequiredLatestEvent,
  enqueueRequiredLatestEvent,
} from './required-latest-event-queue';

const flushMicrotasks = async (): Promise<void> => {
  await Promise.resolve();
  await Promise.resolve();
};

describe('required latest event queue', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('coalesces delayed events and runs the latest payload', async () => {
    const key = 'test:delayed-latest';
    const run = jest.fn();

    try {
      enqueueRequiredLatestEvent({
        key,
        payload: 1,
        delayMs: 50,
        run,
      });
      enqueueRequiredLatestEvent({
        key,
        payload: 2,
        delayMs: 50,
        run,
      });

      jest.advanceTimersByTime(49);
      expect(run).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1);
      await flushMicrotasks();

      expect(run).toHaveBeenCalledTimes(1);
      expect(run).toHaveBeenCalledWith(2);
    } finally {
      clearRequiredLatestEvent(key);
    }
  });

  test('runs a new latest event after the current one finishes', async () => {
    const key = 'test:running-latest';
    let releaseFirstRun: (() => void) | undefined;
    const seen: number[] = [];

    try {
      enqueueRequiredLatestEvent({
        key,
        payload: 1,
        run: async (payload) => {
          seen.push(payload);
          await new Promise<void>((resolve) => {
            releaseFirstRun = () => resolve();
          });
        },
      });

      await flushMicrotasks();
      expect(seen).toEqual([1]);

      enqueueRequiredLatestEvent({
        key,
        payload: 2,
        run: (payload) => {
          seen.push(payload);
        },
      });
      enqueueRequiredLatestEvent({
        key,
        payload: 3,
        run: (payload) => {
          seen.push(payload);
        },
      });

      releaseFirstRun?.();
      await flushMicrotasks();

      expect(seen).toEqual([1, 3]);
    } finally {
      clearRequiredLatestEvent(key);
    }
  });
});
