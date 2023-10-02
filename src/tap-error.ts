export const tapError =
  (message = 'error') =>
    (error: unknown) => {
      console.error(message, error);
      throw error;
    };
