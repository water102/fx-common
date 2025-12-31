import { snakeToPascal } from './snake-to-pascal';

describe('snakeToPascal', () => {
  test('Converts snake_case to camelCase', () => {
    expect(snakeToPascal('hello_world')).toBe('helloWorld');
  });

  test('Handles single word', () => {
    expect(snakeToPascal('hello')).toBe('hello');
  });

  test('Handles multiple words', () => {
    expect(snakeToPascal('hello_world_test')).toBe('helloWorldTest');
  });

  test('Handles empty string', () => {
    expect(snakeToPascal('')).toBe('');
  });

  test('Handles already camelCase', () => {
    expect(snakeToPascal('hello')).toBe('hello');
  });
});

