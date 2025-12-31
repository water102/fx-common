import { rejectByProp } from './reject-by-prop';

describe('rejectByProp', () => {
  const users = [
    { id: 1, name: 'John', age: 30, active: true },
    { id: 2, name: 'Jane', age: 25, active: false },
    { id: 3, name: 'Bob', age: 35, active: true },
  ];

  test('Removes objects matching property value', () => {
    const result = rejectByProp(false, 'active', users);
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { id: 1, name: 'John', age: 30, active: true },
      { id: 3, name: 'Bob', age: 35, active: true },
    ]);
  });

  test('Returns original array when no matches found', () => {
    const result = rejectByProp('NonExistent', 'name', users);
    expect(result).toHaveLength(3);
    expect(result).toEqual(users);
  });

  test('Works with number properties', () => {
    const result = rejectByProp(25, 'age', users);
    expect(result).toHaveLength(2);
    expect(result.every(user => user.age !== 25)).toBe(true);
  });

  test('Works with curried function', () => {
    const rejectInactive = rejectByProp(false, 'active');
    const result = rejectInactive(users);
    expect(result).toHaveLength(2);
  });

  test('Returns empty array for empty input', () => {
    const result = rejectByProp('John', 'name', []);
    expect(result).toEqual([]);
  });
});

