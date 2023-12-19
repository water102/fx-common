import { isAsyncFunction } from './is-async-function';

describe('isAsync function', () => {
  test('should return true for an asynchronous function', () => {
    const asyncFunction = async () => {
      // Some asynchronous logic
    };

    const result = isAsyncFunction(asyncFunction);
    expect(result).toBe(true);
  });

  test('should return false for a synchronous function', () => {
    const syncFunction = () => {
      // Some synchronous logic
    };

    const result = isAsyncFunction(syncFunction);
    expect(result).toBe(false);
  });

  test('should return false for a regular object', () => {
    const regularObject = { prop: 'value' };

    const result = isAsyncFunction(regularObject as any);
    expect(result).toBe(false);
  });

  test('should return false for an arrow function', () => {
    const arrowFunction = () => {
      // Some logic
    };

    const result = isAsyncFunction(arrowFunction);
    expect(result).toBe(false);
  });

  test('should return false for a regular function', () => {
    function regularFunction() {
      // Some logic
    }

    const result = isAsyncFunction(regularFunction);
    expect(result).toBe(false);
  });
});
