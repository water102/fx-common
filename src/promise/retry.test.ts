import { retry } from './retry';

describe('retry', () => {
  test('returns on first success', async () => {
    const fn = jest.fn().mockResolvedValue('ok');
    await expect(retry(fn)).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('retries until success', async () => {
    const fn = jest
      .fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValue('ok');
    await expect(retry(fn, { intervalMs: 1 })).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('stops at maxAttempts', async () => {
    const err = new Error('fail');
    const fn = jest.fn().mockRejectedValue(err);
    await expect(retry(fn, { intervalMs: 1, maxAttempts: 2 })).rejects.toBe(err);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('shouldRetry can stop early', async () => {
    const err = new Error('fatal');
    const fn = jest.fn().mockRejectedValue(err);
    await expect(
      retry(fn, { intervalMs: 1, maxAttempts: 5, shouldRetry: () => false }),
    ).rejects.toBe(err);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
