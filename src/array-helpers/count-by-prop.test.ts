import { countByProp } from './count-by-prop';

describe('countByProp', () => {
  const users = [
    { id: 1, name: 'John', age: 30, active: true },
    { id: 2, name: 'Jane', age: 25, active: false },
    { id: 3, name: 'Bob', age: 35, active: true },
    { id: 4, name: 'Alice', age: 30, active: true },
  ];

  test('Counts objects with matching property value', () => {
    const result = countByProp(true, 'active', users);
    expect(result).toBe(3);
  });

  test('Returns 0 when no matches found', () => {
    const result = countByProp('NonExistent', 'name', users);
    expect(result).toBe(0);
  });

  test('Works with number properties', () => {
    const result = countByProp(30, 'age', users);
    expect(result).toBe(2);
  });

  test('Works with curried function', () => {
    const countActive = countByProp(true, 'active');
    const result = countActive(users);
    expect(result).toBe(3);
  });

  test('Returns 0 for empty array', () => {
    const result = countByProp('John', 'name', []);
    expect(result).toBe(0);
  });
});

