export const waitForTime = (ms) => {
    return new Promise(r => setTimeout(r, ms));
};
