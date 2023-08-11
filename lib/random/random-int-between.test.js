import { randomIntBetween } from "./random-int-between";
describe('randomIntBetween', () => {
    test('min and max > 0', () => {
        const min = 1;
        const max = 10;
        const result = randomIntBetween(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
    });
    test('min and max < 0', () => {
        const min = -10;
        const max = -1;
        const result = randomIntBetween(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
    });
    test('min and max are float number', () => {
        const min = 1.5;
        const max = 9.8;
        const result = randomIntBetween(min, max);
        expect(result).toBeGreaterThanOrEqual(Math.ceil(min));
        expect(result).toBeLessThanOrEqual(Math.floor(max));
        expect(Number.isInteger(result)).toBe(true);
    });
    test('min < 0 and max > 0', () => {
        const min = -5;
        const max = 5;
        const result = randomIntBetween(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
    });
    test('min == max', () => {
        const min = 10;
        const max = 10;
        const result = randomIntBetween(min, max);
        expect(result).toBe(min);
    });
});
