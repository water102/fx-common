export const formatWalletAddress = (addr, length = 5) => {
    addr = addr ?? '';
    return addr.substring(0, length) + "..." + addr.substring(addr.length - length, addr.length);
};
