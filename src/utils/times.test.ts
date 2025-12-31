import { times } from './times';

describe('times', () => {
  test('Executes function specified number of times', () => {
    let count = 0;
    times(() => {
      count++;
    }, 5);

    expect(count).toBe(5);
  });

  test('Executes function zero times when n is 0', () => {
    let count = 0;
    times(() => {
      count++;
    }, 0);

    expect(count).toBe(0);
  });

  test('Executes function once when n is 1', () => {
    let count = 0;
    times(() => {
      count++;
    }, 1);

    expect(count).toBe(1);
  });

  test('Handles function with side effects', () => {
    const results: number[] = [];
    times(() => {
      results.push(Math.random());
    }, 3);

    expect(results).toHaveLength(3);
  });
});

