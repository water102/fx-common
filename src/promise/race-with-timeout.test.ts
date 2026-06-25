import { raceWithTimeout, TimeoutError } from './race-with-timeout';

describe('raceWithTimeout', () => {
  test('resolves when promise finishes first', async () => {
    await expect(raceWithTimeout(Promise.resolve('ok'), 50)).resolves.toBe('ok');
  });

  test('rejects with TimeoutError when slow', async () => {
    const slow = new Promise<string>((resolve) => {
      setTimeout(() => resolve('late'), 100);
    });
    await expect(raceWithTimeout(slow, 10)).rejects.toBeInstanceOf(TimeoutError);
  });

  test('passes through promise rejection', async () => {
    const err = new Error('boom');
    await expect(raceWithTimeout(Promise.reject(err), 50)).rejects.toBe(err);
  });
});
