export function isValidEmail(email) {
    const emailRegex = new RegExp(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
    return emailRegex.test(email);
}
