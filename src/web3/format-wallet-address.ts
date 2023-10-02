export const formatWalletAddress = (
  addr: string,
  head = 6,
  tail = 4
): string => {
  addr = addr ?? '';
  return addr.slice(0, head) + '...' + addr.slice(addr.length - tail);
};
