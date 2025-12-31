import { pipe } from './pipe';

describe('pipe', () => {
  test('Pipes functions from left to right', () => {
    const add1 = (x: number) => x + 1;
    const multiply2 = (x: number) => x * 2;
    const piped = pipe(add1, multiply2);
    
    expect(piped(5)).toBe(12); // (5 + 1) * 2 = 12
  });

  test('Works with multiple functions', () => {
    const add1 = (x: number) => x + 1;
    const multiply2 = (x: number) => x * 2;
    const subtract3 = (x: number) => x - 3;
    const piped = pipe(add1, multiply2, subtract3);
    
    expect(piped(5)).toBe(9); // ((5 + 1) * 2) - 3 = 9
  });

  test('Works with string transformations', () => {
    const toUpper = (s: string) => s.toUpperCase();
    const addExclamation = (s: string) => s + '!';
    const piped = pipe(toUpper, addExclamation);
    
    expect(piped('hello')).toBe('HELLO!');
  });

  test('Works with single function', () => {
    const double = (x: number) => x * 2;
    const piped = pipe(double);
    
    expect(piped(5)).toBe(10);
  });

  test('Works with identity when no functions provided', () => {
    const piped = pipe();
    
    expect(piped(5)).toBe(5);
  });
});

