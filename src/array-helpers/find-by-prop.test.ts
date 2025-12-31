import { findByProp } from './find-by-prop';

describe('findByProp', () => {
  const users = [
    { id: 1, name: 'John', age: 30, active: true },
    { id: 2, name: 'Jane', age: 25, active: false },
    { id: 3, name: 'Bob', age: 35, active: true },
  ];

  test('Finds an object by property name and value when it exists', () => {
    const result = findByProp('John', 'name', users);
    expect(result).toEqual({ id: 1, name: 'John', age: 30, active: true });
  });

  test('Returns undefined when property value does not exist', () => {
    const result = findByProp('Alice', 'name', users);
    expect(result).toBeUndefined();
  });

  test('Works with boolean properties', () => {
    const result = findByProp(true, 'active', users);
    expect(result).toEqual({ id: 1, name: 'John', age: 30, active: true });
  });

  test('Works with number properties', () => {
    const result = findByProp(25, 'age', users);
    expect(result).toEqual({ id: 2, name: 'Jane', age: 25, active: false });
  });

  test('Works with curried function', () => {
    const findByName = findByProp('Bob', 'name');
    const result = findByName(users);
    expect(result).toEqual({ id: 3, name: 'Bob', age: 35, active: true });
  });

  test('Returns undefined for empty array', () => {
    const result = findByProp('John', 'name', []);
    expect(result).toBeUndefined();
  });
});

