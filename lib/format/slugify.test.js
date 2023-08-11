import { slugify } from "./slugify";
describe('slugify', () => {
    test('Trả về slug phù hợp khi chuỗi chỉ chứa các ký tự Latin không dấu và khoảng trắng', () => {
        const text = 'This is a sample text';
        const expectedSlug = 'this-is-a-sample-text';
        expect(slugify(text)).toBe(expectedSlug);
    });
    test('Loại bỏ các dấu tiếng Việt và chuyển đổi thành slug', () => {
        const text = 'Đây là một ví dụ về tiếng Việt';
        const expectedSlug = 'day-la-mot-vi-du-ve-tieng-viet';
        expect(slugify(text)).toBe(expectedSlug);
    });
    test('Loại bỏ các ký tự đặc biệt và chuyển đổi thành slug', () => {
        const text = 'Special @!#$ Characters';
        const expectedSlug = 'special-characters';
        expect(slugify(text)).toBe(expectedSlug);
    });
    test('Trả về chuỗi rỗng khi đầu vào là chuỗi trống', () => {
        const text = '';
        expect(slugify(text)).toBe('');
    });
    test('Trả về slug rỗng khi chuỗi chỉ chứa khoảng trắng', () => {
        const text = '      ';
        expect(slugify(text)).toBe('');
    });
});
