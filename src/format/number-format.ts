import { isNilOrEmpty } from "../validate";

export function numberFormat(
  value: number,
  lengthOfDecimal = 3,
  lengthOfWholePart = 3,
  sectionsDelimiter = ',',
  decimalDelimiter = '.'
) {
  if (isNilOrEmpty(value)) return '';
  if (typeof value == 'string') {
    value = Number(value);
  }
  const num = value.toFixed(Math.max(0, ~~lengthOfDecimal));
  const re =
    '\\d(?=(\\d{' +
    (lengthOfWholePart || 3) +
    '})+' +
    (lengthOfDecimal > 0 ? '\\D' : '$') +
    ')';
  let result = (decimalDelimiter
    ? num.replace('.', decimalDelimiter)
    : num
  ).replace(new RegExp(re, 'g'), '$&' + sectionsDelimiter);
  const results = result.split(decimalDelimiter);
  if (results.length > 1) {
    const {
      [0]: valBeforeDecimalDelimiter,
      [1]: valAfterDecimalDelimiter
    } = results;
    result = `${valBeforeDecimalDelimiter}${decimalDelimiter}${valAfterDecimalDelimiter.replace(
      /0+$/,
      ''
    )}`;
    const regex = new RegExp('\\' + decimalDelimiter + '$', 'i');
    result = result.replace(regex, '');
  }
  return result;
}
