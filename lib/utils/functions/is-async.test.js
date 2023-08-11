import { isAsync } from "./is-async";
describe('isAsync function', () => {
    test('should return true for an asynchronous function', () => {
        const asyncFunction = async () => {
        };
        const result = isAsync(asyncFunction);
        expect(result).toBe(true);
    });
    test('should return false for a synchronous function', () => {
        const syncFunction = () => {
        };
        const result = isAsync(syncFunction);
        expect(result).toBe(false);
    });
    test('should return false for a regular object', () => {
        const regularObject = { prop: 'value' };
        const result = isAsync(regularObject);
        expect(result).toBe(false);
    });
    test('should return false for an arrow function', () => {
        const arrowFunction = () => {
        };
        const result = isAsync(arrowFunction);
        expect(result).toBe(false);
    });
    test('should return false for a regular function', () => {
        function regularFunction() {
        }
        const result = isAsync(regularFunction);
        expect(result).toBe(false);
    });
});
