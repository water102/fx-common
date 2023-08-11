export const isValidAddress = (val) => {
    return /^0x[0-9a-fA-F]{40}$/.test(val);
};
export const isValidTransID = (val) => {
    return /^0x[0-9a-fA-F]{64}$/.test(val);
};
