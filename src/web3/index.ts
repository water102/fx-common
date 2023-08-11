export const isValidAddress = (val: string) => {
  return /^0x[0-9a-fA-F]{40}$/.test(val);
};

export const isValidTransID = (val: string) => {
  return /^0x[0-9a-fA-F]{64}$/.test(val);
};