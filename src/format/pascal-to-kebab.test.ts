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

  test('Handles acronyms and digits (tsh5 component naming)', () => {
    expect(pascalToKebab('FormBackground')).toBe('form-background');
    expect(pascalToKebab('NPCDialog')).toBe('npc-dialog');
    expect(pascalToKebab('BankItem2')).toBe('bank-item2');
    expect(pascalToKebab('HTTPServer')).toBe('http-server');
  });
});

