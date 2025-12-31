import { throttle } from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Schedules function execution on first call', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);

    throttled('arg1');
    expect(fn).not.toHaveBeenCalled(); // Not called yet, scheduled

    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('arg1');
  });

  test('Ignores calls during cooldown period', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);

    throttled('first');
    throttled('second');
    throttled('third');
    expect(fn).not.toHaveBeenCalled(); // Not called yet

    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('third'); // Uses latest args
  });

  test('Executes with latest arguments after cooldown', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);

    throttled('first');
    throttled('second');
    throttled('third');

    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('third');
  });

  test('Allows execution after cooldown expires', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);

    throttled('first');
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);

    throttled('second');
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(2, 'second');
  });
});

