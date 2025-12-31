import { pascalToSnake } from './pascal-to-snake';

describe('pascalToSnake', () => {
  test('Converts PascalCase to snake_case', () => {
    expect(pascalToSnake('HelloWorld')).toBe('hello_world');
  });

  test('Handles single word', () => {
    expect(pascalToSnake('Hello')).toBe('hello');
  });

  test('Handles multiple words', () => {
    expect(pascalToSnake('HelloWorldTest')).toBe('hello_world_test');
  });

  test('Handles empty string', () => {
    expect(pascalToSnake('')).toBe('');
  });

  test('Handles already lowercase', () => {
    expect(pascalToSnake('hello')).toBe('hello');
  });
});

