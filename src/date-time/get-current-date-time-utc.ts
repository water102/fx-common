export const getCurrentDateTimeUtc = () => {
  const now = new Date();
  const nowUtc = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
  return nowUtc;
};
