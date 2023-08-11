import { isEmpty } from "ramda";
export const slugify = (text) => {
    if (isEmpty(text))
        return '';
    text = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\p{L}\p{N}-]/gu, '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
    const from = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;";
    const to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------";
    for (let i = 0, l = from.length; i < l; i++) {
        text = text.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    return text;
};
