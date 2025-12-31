import { pascalToKebab } from './pascal-to-kebab';

describe('pascalToKebab', () => {
  test('Converts PascalCase to kebab-case', () => {
    expect(pascalToKebab('HelloWorld')).toBe('hello-world');
  });

  test('Handles single word', () => {
    expect(pascalToKebab('Hello')).toBe('hello');
  });

  test('Handles multiple words', () => {
    expect(pascalToKebab('HelloWorldTest')).toBe('hello-world-test');
  });

  test('Handles empty string', () => {
    expect(pascalToKebab('')).toBe('');
  });

  test('Handles already lowercase', () => {
    expect(pascalToKebab('hello')).toBe('hello');
  });
});

