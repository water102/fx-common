import { filterByProp } from './filter-by-prop';

describe('filterByProp', () => {
  const users = [
    { id: 1, name: 'John', age: 30, active: true },
    { id: 2, name: 'Jane', age: 25, active: false },
    { id: 3, name: 'Bob', age: 35, active: true },
    { id: 4, name: 'Alice', age: 30, active: true },
  ];

  test('Filters array by property name and value', () => {
    const result = filterByProp(true, 'active', users);
    expect(result).toHaveLength(3);
    expect(result).toEqual([
      { id: 1, name: 'John', age: 30, active: true },
      { id: 3, name: 'Bob', age: 35, active: true },
      { id: 4, name: 'Alice', age: 30, active: true },
    ]);
  });

  test('Returns empty array when no matches found', () => {
    const result = filterByProp('NonExistent', 'name', users);
    expect(result).toEqual([]);
  });

  test('Works with number properties', () => {
    const result = filterByProp(30, 'age', users);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('John');
    expect(result[1].name).toBe('Alice');
  });

  test('Works with curried function', () => {
    const filterActive = filterByProp(true, 'active');
    const result = filterActive(users);
    expect(result).toHaveLength(3);
  });

  test('Returns empty array for empty input', () => {
    const result = filterByProp('John', 'name', []);
    expect(result).toEqual([]);
  });
});

