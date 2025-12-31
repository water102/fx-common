import { anyByProp } from './any-by-prop';

describe('anyByProp', () => {
  const users = [
    { id: 1, name: 'John', age: 30, active: true },
    { id: 2, name: 'Jane', age: 25, active: false },
    { id: 3, name: 'Bob', age: 35, active: true },
  ];

  test('Returns true when property value exists', () => {
    const result = anyByProp('John', 'name', users);
    expect(result).toBe(true);
  });

  test('Returns false when property value does not exist', () => {
    const result = anyByProp('Alice', 'name', users);
    expect(result).toBe(false);
  });

  test('Works with boolean properties', () => {
    const result = anyByProp(true, 'active', users);
    expect(result).toBe(true);
  });

  test('Works with number properties', () => {
    const result = anyByProp(25, 'age', users);
    expect(result).toBe(true);
  });

  test('Works with curried function', () => {
    const hasName = anyByProp('Bob', 'name');
    const result = hasName(users);
    expect(result).toBe(true);
  });

  test('Returns false for empty array', () => {
    const result = anyByProp('John', 'name', []);
    expect(result).toBe(false);
  });
});

