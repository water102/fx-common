import { randomElement } from "./random-element";
const sampleArray = [1, 'two', { key: 'value' }, [4, 5, 6]];
describe('randomElement', () => {
    test('Returns an element that exists in the array', () => {
        const result = randomElement(sampleArray);
        expect(sampleArray).toContain(result);
    });
    test('Returns null or undefined when the array is empty', () => {
        const result = randomElement([]);
        expect(result).toBeUndefined();
    });
    test('Returns the only element when the array contains only one element', () => {
        const singleElementArray = [42];
        const result = randomElement(singleElementArray);
        expect(result).toBe(singleElementArray[0]);
    });
});
