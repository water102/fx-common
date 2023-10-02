export const logError =
  (message = 'error') =>
    (error: unknown) => {
      console.error(message, error);
    };
