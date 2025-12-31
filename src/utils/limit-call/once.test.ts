import { once } from './once';

describe('once', () => {
  test('Executes function only once', () => {
    const fn = jest.fn(() => 'result');
    const onced = once(fn);

    expect(onced()).toBe('result');
    expect(onced()).toBe('result');
    expect(onced()).toBe('result');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Returns same result on subsequent calls', () => {
    let callCount = 0;
    const fn = jest.fn(() => {
      callCount++;
      return callCount;
    });
    const onced = once(fn);

    expect(onced()).toBe(1);
    expect(onced()).toBe(1); // Same result, not 2
    expect(onced()).toBe(1); // Same result, not 3
  });

  test('Passes arguments on first call', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const onced = once(fn);

    expect(onced(1, 2)).toBe(3);
    expect(onced(3, 4)).toBe(3); // Still returns first result

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  test('Works with different return types', () => {
    const fn1 = jest.fn(() => ({ key: 'value' }));
    const fn2 = jest.fn(() => [1, 2, 3]);
    
    const onced1 = once(fn1);
    const onced2 = once(fn2);

    expect(onced1()).toEqual({ key: 'value' });
    expect(onced1()).toEqual({ key: 'value' });
    
    expect(onced2()).toEqual([1, 2, 3]);
    expect(onced2()).toEqual([1, 2, 3]);
  });
});

