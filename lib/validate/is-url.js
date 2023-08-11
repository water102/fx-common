export const isUrl = (url) => {
    try {
        new URL(url);
    }
    catch (error) {
        return false;
    }
    return true;
};
