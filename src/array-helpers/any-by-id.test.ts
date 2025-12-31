import { anyById } from './any-by-id';

describe('anyById', () => {
  const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  test('Returns true when id exists in array', () => {
    const result = anyById(1, users);
    expect(result).toBe(true);
  });

  test('Returns false when id does not exist', () => {
    const result = anyById(999, users);
    expect(result).toBe(false);
  });

  test('Works with curried function', () => {
    const hasUserId = anyById(2);
    const result = hasUserId(users);
    expect(result).toBe(true);
  });

  test('Returns false for empty array', () => {
    const result = anyById(1, []);
    expect(result).toBe(false);
  });

  test('Works with different id types', () => {
    const items = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
    ];
    const result = anyById('a', items);
    expect(result).toBe(true);
  });
});

