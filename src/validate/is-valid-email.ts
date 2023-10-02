export function isValidEmail(email: string): boolean {
  const emailRegex = new RegExp(
    /^(?!\.)[\w\-_.]*[^.]@[\w]+(?:\.[\w]+)*(?:\.[\w][^.\W])$/i
  );
  return emailRegex.test(email);
}
