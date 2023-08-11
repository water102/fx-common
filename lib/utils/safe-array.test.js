import { safeArray } from "./safe-array";
describe('safeArray', () => {
    test('Returns an empty array when the input value is null or undefined', () => {
        expect(safeArray(null)).toEqual([]);
        expect(safeArray(undefined)).toEqual([]);
    });
    test('Returns the original array when the input is an array', () => {
        const array = [1, 2, 3];
        expect(safeArray(array)).toBe(array);
    });
    test('Converts the input value into an array if it is not an array', () => {
        const value = 'hello';
        expect(safeArray(value)).toEqual([value]);
    });
    test('Converts an integer into an array containing that number', () => {
        const number = 42;
        expect(safeArray(number)).toEqual([number]);
    });
    test('Converts an object into an array containing that object', () => {
        const obj = { key: 'value' };
        expect(safeArray(obj)).toEqual([obj]);
    });
});
