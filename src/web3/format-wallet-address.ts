export const formatWalletAddress = (addr: string, length = 5): string => {
  addr = addr ?? '';
  return addr.substring(0, length) + "..." + addr.substring(addr.length - length, addr.length);
}
