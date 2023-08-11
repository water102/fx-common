export function cutDecimalPlaces(val, decimalPlaces = 2) {
    const factor = 10 ** decimalPlaces;
    return parseInt((val * factor).toString()) / factor;
}
