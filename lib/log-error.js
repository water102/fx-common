export const logError = (message = 'error') => (error) => {
    console.error(message, error);
    throw error;
};
