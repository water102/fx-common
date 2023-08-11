import { isAsync } from "./is-async";

describe('isAsync function', () => {
  test('should return true for an asynchronous function', () => {
    const asyncFunction = async () => {
      // Some asynchronous logic
    };

    const result = isAsync(asyncFunction);
    expect(result).toBe(true);
  });

  test('should return false for a synchronous function', () => {
    const syncFunction = () => {
      // Some synchronous logic
    };

    const result = isAsync(syncFunction);
    expect(result).toBe(false);
  });

  test('should return false for a regular object', () => {
    const regularObject = { prop: 'value' };

    const result = isAsync(regularObject as any);
    expect(result).toBe(false);
  });

  test('should return false for an arrow function', () => {
    const arrowFunction = () => {
      // Some logic
    };

    const result = isAsync(arrowFunction);
    expect(result).toBe(false);
  });

  test('should return false for a regular function', () => {
    function regularFunction() {
      // Some logic
    }

    const result = isAsync(regularFunction);
    expect(result).toBe(false);
  });
});