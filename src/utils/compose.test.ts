import { compose } from './compose';

describe('compose', () => {
  test('Composes functions from right to left', () => {
    const add1 = (x: number) => x + 1;
    const multiply2 = (x: number) => x * 2;
    const composed = compose(multiply2, add1);
    
    expect(composed(5)).toBe(12); // (5 + 1) * 2 = 12
  });

  test('Works with multiple functions', () => {
    const add1 = (x: number) => x + 1;
    const multiply2 = (x: number) => x * 2;
    const subtract3 = (x: number) => x - 3;
    const composed = compose(subtract3, multiply2, add1);
    
    expect(composed(5)).toBe(9); // ((5 + 1) * 2) - 3 = 9
  });

  test('Works with string transformations', () => {
    const toUpper = (s: string) => s.toUpperCase();
    const addExclamation = (s: string) => s + '!';
    const composed = compose(addExclamation, toUpper);
    
    expect(composed('hello')).toBe('HELLO!');
  });

  test('Works with single function', () => {
    const double = (x: number) => x * 2;
    const composed = compose(double);
    
    expect(composed(5)).toBe(10);
  });

  test('Works with identity when no functions provided', () => {
    const composed = compose();
    
    expect(composed(5)).toBe(5);
  });
});

