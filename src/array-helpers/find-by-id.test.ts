import { findById } from './find-by-id';

describe('findById', () => {
  const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  test('Finds an object by id when it exists', () => {
    const result = findById(1, users);
    expect(result).toEqual({ id: 1, name: 'John', age: 30 });
  });

  test('Returns undefined when id does not exist', () => {
    const result = findById(999, users);
    expect(result).toBeUndefined();
  });

  test('Works with curried function', () => {
    const findUserById = findById(2);
    const result = findUserById(users);
    expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
  });

  test('Returns undefined for empty array', () => {
    const result = findById(1, []);
    expect(result).toBeUndefined();
  });

  test('Works with different id types', () => {
    const items = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
    ];
    const result = findById('a', items);
    expect(result).toEqual({ id: 'a', value: 1 });
  });
});

