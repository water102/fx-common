import { kebabToPascal } from './kebab-to-pascal';

describe('kebabToPascal', () => {
  test('Converts kebab-case to PascalCase', () => {
    expect(kebabToPascal('hello-world')).toBe('HelloWorld');
  });

  test('Handles single word', () => {
    expect(kebabToPascal('hello')).toBe('Hello');
  });

  test('Handles multiple words', () => {
    expect(kebabToPascal('hello-world-test')).toBe('HelloWorldTest');
  });

  test('Handles empty string', () => {
    expect(kebabToPascal('')).toBe('');
  });

  test('Handles already PascalCase (with hyphens)', () => {
    expect(kebabToPascal('Hello-World')).toBe('HelloWorld');
  });
});

