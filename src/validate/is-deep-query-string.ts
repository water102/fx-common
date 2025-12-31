function isDeepQueryString(str: string) {
  // Check if the string contains keys with dot notation or square brackets
  return /(\[.*?]|(\w+\.))+(\[.*?]|(\w+\.))+/.test(str);
}
