import { randomElement } from "./random-element";

// Define an array of elements for testing
const sampleArray = [1, 'two', { key: 'value' }, [4, 5, 6]];

describe('randomElement', () => {
  // Test the case when the array is not empty
  test('Returns an element that exists in the array', () => {
    const result = randomElement(sampleArray);
    expect(sampleArray).toContain(result);
  });

  // Test the case when the array is empty, the function should return null or undefined
  test('Returns null or undefined when the array is empty', () => {
    const result = randomElement([]);
    expect(result).toBeUndefined();
  });

  // Test the case when the array contains only one element, the function should return that element
  test('Returns the only element when the array contains only one element', () => {
    const singleElementArray = [42];
    const result = randomElement(singleElementArray);
    expect(result).toBe(singleElementArray[0]);
  });
});