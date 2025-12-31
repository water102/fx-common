import { shuffleArray } from './shuffle-array';

describe('shuffleArray', () => {
  test('Shuffles array in place', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalLength = arr.length;
    const originalValues = [...arr];
    
    shuffleArray(arr);
    
    expect(arr).toHaveLength(originalLength);
    expect(arr.sort()).toEqual(originalValues.sort());
  });

  test('Shuffles array with different values', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const originalValues = [...arr];
    
    shuffleArray(arr);
    
    // After multiple shuffles, at least one should be different (probabilistic)
    // We'll check that all original values are still present
    expect(arr.sort()).toEqual(originalValues.sort());
  });

  test('Handles empty array', () => {
    const arr: number[] = [];
    shuffleArray(arr);
    expect(arr).toEqual([]);
  });

  test('Handles single element array', () => {
    const arr = [42];
    shuffleArray(arr);
    expect(arr).toEqual([42]);
  });

  test('Shuffles array of objects', () => {
    const arr = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
    ];
    const originalValues = [...arr];
    
    shuffleArray(arr);
    
    expect(arr).toHaveLength(3);
    // Check that all objects are still present (by id)
    const ids = arr.map(item => item.id).sort();
    expect(ids).toEqual([1, 2, 3]);
  });
});

