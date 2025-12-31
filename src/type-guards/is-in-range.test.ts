import { isInRange } from './is-in-range';

describe('isInRange', () => {
  test('Returns true for numbers within range', () => {
    expect(isInRange(5, 0, 10)).toBe(true);
    expect(isInRange(0, 0, 10)).toBe(true); // inclusive min
    expect(isInRange(10, 0, 10)).toBe(true); // inclusive max
    expect(isInRange(5.5, 0, 10)).toBe(true);
  });

  test('Returns false for numbers outside range', () => {
    expect(isInRange(-1, 0, 10)).toBe(false);
    expect(isInRange(11, 0, 10)).toBe(false);
    expect(isInRange(100, 0, 10)).toBe(false);
  });

  test('Returns false for non-number values', () => {
    expect(isInRange('5', 0, 10)).toBe(false);
    expect(isInRange(null, 0, 10)).toBe(false);
    expect(isInRange(undefined, 0, 10)).toBe(false);
    expect(isInRange([], 0, 10)).toBe(false);
    expect(isInRange({}, 0, 10)).toBe(false);
  });
});

