export type RequiredLatestEvent<T> = {
  key: string;
  payload: T;
  run: (payload: T) => Promise<void> | void;
  delayMs?: number;
};

type PendingRequiredLatestEvent = {
  payload: unknown;
  run: (payload: unknown) => Promise<void> | void;
};

const pendingEvents = new Map<string, PendingRequiredLatestEvent>();
const runningKeys = new Set<string>();
const drainTimers = new Map<string, ReturnType<typeof setTimeout>>();

const drainRequiredLatestEvent = async (key: string): Promise<void> => {
  if (runningKeys.has(key)) {
    return;
  }

  runningKeys.add(key);
  try {
    while (pendingEvents.has(key)) {
      const event = pendingEvents.get(key);
      if (!event) {
        break;
      }
      pendingEvents.delete(key);
      await event.run(event.payload);
    }
  } finally {
    runningKeys.delete(key);
  }
};

/** Coalesce events by key — only the latest payload runs after optional delay. */
export const enqueueRequiredLatestEvent = <T>(
  event: RequiredLatestEvent<T>,
): void => {
  pendingEvents.set(event.key, {
    payload: event.payload,
    run: event.run as (payload: unknown) => Promise<void> | void,
  });

  const oldTimer = drainTimers.get(event.key);
  if (oldTimer != null) {
    clearTimeout(oldTimer);
    drainTimers.delete(event.key);
  }

  const delayMs = Math.max(0, event.delayMs ?? 0);
  if (delayMs > 0) {
    drainTimers.set(
      event.key,
      setTimeout(() => {
        drainTimers.delete(event.key);
        void drainRequiredLatestEvent(event.key);
      }, delayMs),
    );
    return;
  }

  queueMicrotask(() => {
    void drainRequiredLatestEvent(event.key);
  });
};

export const clearRequiredLatestEvent = (key: string): void => {
  pendingEvents.delete(key);
  const timer = drainTimers.get(key);
  if (timer != null) {
    clearTimeout(timer);
    drainTimers.delete(key);
  }
};
