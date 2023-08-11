export function roundDecimalPlaces(val, decimalPlaces = 2) {
    const factor = 10 ** decimalPlaces;
    return Math.round(val * factor) / factor;
}
