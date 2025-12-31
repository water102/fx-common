import { sumByProp } from './sum-by-prop';

describe('sumByProp', () => {
  const items = [
    { id: 1, price: 10, quantity: 2 },
    { id: 2, price: 20, quantity: 3 },
    { id: 3, price: 15, quantity: 1 },
  ];

  test('Sums numeric values from property', () => {
    const result = sumByProp('price', items);
    expect(result).toBe(45); // 10 + 20 + 15
  });

  test('Sums another property', () => {
    const result = sumByProp('quantity', items);
    expect(result).toBe(6); // 2 + 3 + 1
  });

  test('Returns 0 for empty array', () => {
    const result = sumByProp('price', []);
    expect(result).toBe(0);
  });

  test('Handles missing properties by using 0', () => {
    const itemsWithMissing = [
      { id: 1, price: 10 },
      { id: 2 }, // missing price
      { id: 3, price: 15 },
    ];
    const result = sumByProp('price', itemsWithMissing);
    expect(result).toBe(25); // 10 + 0 + 15
  });

  test('Works with curried function', () => {
    const sumPrice = sumByProp('price');
    const result = sumPrice(items);
    expect(result).toBe(45);
  });

  test('Handles non-numeric values - concatenates strings', () => {
    const itemsWithStrings = [
      { id: 1, value: 10 },
      { id: 2, value: 'not a number' },
      { id: 3, value: 20 },
    ];
    const result = sumByProp('value', itemsWithStrings);
    // When mixing numbers and strings, JavaScript concatenates them
    // Result will be "10not a number20" (string concatenation)
    expect(typeof result).toBe('string');
    expect(result).toBe('10not a number20');
  });
});

