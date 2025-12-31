import { rejectById } from './reject-by-id';

describe('rejectById', () => {
  const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  test('Removes object with matching id', () => {
    const result = rejectById(2, users);
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { id: 1, name: 'John', age: 30 },
      { id: 3, name: 'Bob', age: 35 },
    ]);
  });

  test('Returns original array when id does not exist', () => {
    const result = rejectById(999, users);
    expect(result).toHaveLength(3);
    expect(result).toEqual(users);
  });

  test('Works with curried function', () => {
    const rejectUserById = rejectById(1);
    const result = rejectUserById(users);
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe(2);
  });

  test('Returns empty array when rejecting from single element array', () => {
    const singleItem = [{ id: 1, name: 'John' }];
    const result = rejectById(1, singleItem);
    expect(result).toEqual([]);
  });

  test('Returns empty array for empty input', () => {
    const result = rejectById(1, []);
    expect(result).toEqual([]);
  });
});

