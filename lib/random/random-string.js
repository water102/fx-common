import { randomElement } from "./random-element";
export function randomString(length = 8, chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
    let result = '';
    for (let i = length; i > 0; --i)
        result += randomElement(chars);
    return result;
}
