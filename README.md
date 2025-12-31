# @water102/fx-common

A comprehensive TypeScript utility library providing common functions for array manipulation, date/time operations, formatting, validation, and more.

## Features

- ✅ **Well-tested**: 76+ test files with 310+ test cases covering all major functions
- ✅ **Type-safe**: Full TypeScript support with proper generics and type guards
- ✅ **Well-documented**: Comprehensive JSDoc comments and API documentation
- ✅ **Production-ready**: Used in multiple projects with high code quality standards

## Installation

```bash
npm install @water102/fx-common
# or
pnpm install @water102/fx-common
# or
yarn add @water102/fx-common
```

## Usage

```typescript
import { 
  findById, 
  slugify, 
  addDaysToDate, 
  isValidEmail,
  logger 
} from '@water102/fx-common';
```

## API Documentation

### Array Helpers

Utilities for working with arrays and collections.

#### `findById(value, arr)`
Finds an object in an array by its `id` property.

```typescript
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
const user = findById(1, users); // { id: 1, name: 'John' }
```

#### `findByProp(value, propName, arr)`
Finds an object in an array by a specific property name and value.

```typescript
const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
const user = findByProp('John', 'name', users); // { name: 'John', age: 30 }
```

#### `anyById(value, arr)`
Checks if any object in an array has the specified `id`.

#### `anyByProp(value, propName, arr)`
Checks if any object in an array has the specified property value.

#### `filterByProp(value, propName, arr)`
Filters an array to include only objects matching the property value.

#### `rejectById(value, arr)`
Removes objects from an array that have the specified `id`.

#### `rejectByProp(value, propName, arr)`
Removes objects from an array that match the property value.

#### `countByProp(value, propName, arr)`
Counts how many objects in an array have the specified property value.

#### `sumByProp(propName, arr)`
Sums numeric values from a specific property across all objects in an array.

#### `shuffleArray(arr)`
Randomly shuffles the elements of an array.

---

### Date & Time

Utilities for date and time manipulation.

#### `addDaysToDate(date, days)`
Adds a specified number of days to a date.

```typescript
const tomorrow = addDaysToDate(new Date(), 1);
```

#### `addHours(date, hours)`
Adds a specified number of hours to a date.

#### `addMinutes(date, minutes)`
Adds a specified number of minutes to a date.

#### `getCurrentDateUtc()`
Returns the current date in UTC format.

#### `getCurrentDateTimeUtc()`
Returns the current date and time in UTC format.

#### `getCurrentTimestamp()`
Returns the current timestamp.

#### `getTimestamp(date)`
Converts a date to a timestamp.

#### `getUnixTimestamp(date)`
Converts a date to a Unix timestamp.

#### `getDateFromTimestamp(timestamp)`
Converts a timestamp to a Date object.

#### `getFirstDayOfMonth(date)`
Returns the first day of the month for a given date.

#### `getLastDayOfMonth(date)`
Returns the last day of the month for a given date.

#### `toUtc(date)`
Converts a date to UTC.

#### `timeDurationHelper`
Helper functions for working with time durations.

---

### Formatting

Utilities for formatting strings, numbers, and other data types.

#### `slugify(text)`
Converts a string to a URL-friendly slug. Handles Vietnamese characters and special characters.

```typescript
const slug = slugify('Hello World!'); // 'hello-world'
const vietnamese = slugify('Xin chào'); // 'xin-chao'
```

#### `capitalizeFirstLetter(str)`
Capitalizes the first letter of a string.

#### `numberFormat(value, lengthOfDecimal, lengthOfWholePart, sectionsDelimiter, decimalDelimiter)`
Formats a number with customizable decimal places, thousand separators, and delimiters.

```typescript
const formatted = numberFormat(1234567.89, 2, 3, ',', '.'); // '1,234,567.89'
```

#### `clearNumberFormat(str)`
Removes formatting from a number string.

#### `cutDecimalPlaces(value, places)`
Cuts decimal places from a number without rounding.

#### `roundDecimalPlaces(value, places)`
Rounds a number to a specified number of decimal places.

#### `formatTwoDigits(value)`
Formats a number to always have two digits (e.g., '01', '09', '10').

#### `formatHtmlYoutubeEmbed(url)`
Converts a YouTube URL to an embeddable format.

#### `kebabToPascal(str)`
Converts kebab-case to PascalCase.

```typescript
kebabToPascal('hello-world'); // 'HelloWorld'
```

#### `pascalToKebab(str)`
Converts PascalCase to kebab-case.

```typescript
pascalToKebab('HelloWorld'); // 'hello-world'
```

#### `pascalToSnake(str)`
Converts PascalCase to snake_case.

#### `snakeToPascal(str)`
Converts snake_case to PascalCase.

#### `toBoolean(value)`
Converts a value to a boolean.

#### `toHexString(value)`
Converts a value to a hexadecimal string.

---

### String Utilities

String manipulation functions.

#### `reverseString(str)`
Reverses a string.

```typescript
reverseString('hello'); // 'olleh'
```

#### `sanitizeHtml(html)`
Sanitizes HTML content by removing potentially dangerous tags and attributes.

#### `toLowerCase(str)`
Converts a string to lowercase.

#### `trim(str)`
Trims whitespace from both ends of a string.

---

### Type Guards

Runtime type checking utilities.

#### `isString(value)`
Checks if a value is a string.

#### `isNumber(value)`
Checks if a value is a number.

#### `isArray(value)`
Checks if a value is an array.

#### `isObject(value)`
Checks if a value is an object (and not null or array).

#### `isBoolean(value)`
Checks if a value is a boolean.

#### `isDate(value)`
Checks if a value is a Date object.

#### `isFunction(value)`
Checks if a value is a function.

#### `isAsyncFunction(value)`
Checks if a value is an async function.

#### `isDefined(value)`
Checks if a value is not undefined.

#### `isError(value)`
Checks if a value is an Error object.

#### `isPromise(value)`
Checks if a value is a Promise.

#### `isUrl(str)`
Checks if a string is a valid URL.

#### `isValidEmail(email)`
Validates if a string is a valid email address.

```typescript
isValidEmail('user@example.com'); // true
isValidEmail('invalid-email'); // false
```

#### `isNonEmptyString(str)`
Checks if a value is a non-empty string.

#### `isNonEmptyArray(arr)`
Checks if a value is a non-empty array.

#### `isPositiveNumber(value)`
Checks if a value is a positive number.

#### `isNonNegativeNumber(value)`
Checks if a value is a non-negative number.

#### `isInteger(value)`
Checks if a value is an integer.

#### `isInRange(value, min, max)`
Checks if a number is within a specified range.

#### `isStringOrStringArray(value)`
Checks if a value is either a string or an array of strings.

#### `hasProperty(obj, prop)`
Checks if an object has a specific property.

#### `hasProperties(obj, props)`
Checks if an object has all specified properties.

#### `safeCast<T>(value)`
Safely casts a value to a type (returns the value as-is).

#### UUID Validation

- `isUuid(value)`: Checks if a value is a valid UUID.
- `isUuidV4(value)`: Checks if a value is a valid UUID v4.

---

### Validation

Data validation utilities.

#### `areObjectsEqual(obj1, obj2)`
Deep comparison of two objects to check if they are equal.

#### `isExternalLink(url)`
Checks if a URL is an external link.

#### `isJson(str)`
Checks if a string is valid JSON.

#### `isNilOrEmpty(value)`
Checks if a value is null, undefined, or empty.

#### `isNotEmpty(value)`
Checks if a value is not empty.

#### `isNotNilAndEmpty(value)`
Checks if a value is not null/undefined but is empty.

---

### Random

Random value generation utilities.

#### `randomElement(array)`
Returns a random element from an array.

```typescript
const colors = ['red', 'green', 'blue'];
const random = randomElement(colors); // 'red' or 'green' or 'blue'
```

#### `randomIntBetween(min, max)`
Generates a random integer between min and max (inclusive).

```typescript
const num = randomIntBetween(1, 10); // Random number between 1 and 10
```

#### `randomString(length, chars)`
Generates a random string of specified length using optional character set.

```typescript
const str = randomString(10); // Random 10-character string
const custom = randomString(8, '0123456789'); // Random 8-digit string
```

---

### Utilities

General utility functions.

#### `compose(...functions)`
Composes multiple functions from right to left (functional composition).

```typescript
const add1 = (x) => x + 1;
const multiply2 = (x) => x * 2;
const composed = compose(multiply2, add1);
composed(5); // (5 + 1) * 2 = 12
```

#### `pipe(...functions)`
Pipes a value through multiple functions from left to right.

```typescript
const add1 = (x) => x + 1;
const multiply2 = (x) => x * 2;
const piped = pipe(add1, multiply2);
piped(5); // (5 + 1) * 2 = 12
```

#### `getNanoId()`
Generates a nanoid (unique ID generator).

#### `times(count, fn)`
Executes a function a specified number of times.

#### `waitForTime(ms)`
Returns a Promise that resolves after a specified number of milliseconds.

```typescript
await waitForTime(1000); // Waits 1 second
```

#### `waitUntil(condition, timeout, interval)`
Waits until a condition is met, with optional timeout and interval.

#### `safeArray(value)`
Returns an array, converting non-array values to arrays.

#### `clearNilProperties(obj)`
Removes null/undefined properties from an object.

#### Limit Call Functions

- `debounce(fn, delay)`: Creates a debounced function that delays execution until after a specified delay.
- `throttle(fn, coolDown)`: Creates a throttled function that limits execution frequency.
- `once(fn)`: Creates a function that can only be called once.

```typescript
const debounced = debounce(() => console.log('Hello'), 300);
const throttled = throttle(() => console.log('Hello'), 300);
const onced = once(() => console.log('Hello'));
```

#### Console Utilities

- `tracingTime(label)`: Measures and logs execution time for code blocks.

#### Fetch Helpers

- `toJson(response)`: Converts a fetch response to JSON.
- `toText(response)`: Converts a fetch response to text.

---

### Logger

Logging utility with configurable log levels.

#### `logger`
A logger instance with methods: `error()`, `warn()`, `info()`, `debug()`, `trace()`.

```typescript
import { logger, LogLevel } from '@water102/fx-common';

logger.info('Information message');
logger.error('Error message');
logger.logLevel = LogLevel.debug; // Set log level
```

#### `LogLevel` Enum
- `none`: No logging
- `error`: Error level only
- `warn`: Warning and above
- `info`: Info and above (default)
- `debug`: Debug and above
- `trace`: All logs

---

### Crypto

Cryptographic utilities.

#### `encrypt(text, secret)`
Encrypts text using AES-256-GCM encryption.

```typescript
const encrypted = await encrypt('sensitive data', 'my-secret-key');
```

#### `decrypt(base64, secret)`
Decrypts AES-256-GCM encrypted text.

```typescript
const decrypted = await decrypt(encrypted, 'my-secret-key');
```

---

### Web3

Web3 and blockchain utilities.

#### `formatWalletAddress(addr, head, tail)`
Formats a wallet address by showing only the first and last few characters.

```typescript
formatWalletAddress('0x1234567890abcdef1234567890abcdef12345678', 6, 4);
// '0x1234...5678'
```

#### `isValidAddress(val)`
Validates if a string is a valid Ethereum address (0x followed by 40 hex characters).

#### `isValidTransID(val)`
Validates if a string is a valid transaction ID (0x followed by 64 hex characters).

---

### Promise Utilities

Promise-related utilities.

#### `allNamedPromise(promises)`
Executes multiple promises and returns results as a named object.

#### Cancelable Promise

- `makeCancelablePromise(promise)`: Creates a cancelable promise.
- `cancelableFetch(url, options)`: Creates a cancelable fetch request.

---

### Other Utilities

#### `getGreeting()`
Returns a greeting based on the current time of day (morning, afternoon, evening).

```typescript
const greeting = getGreeting(); // 'Good morning!' or 'Good afternoon!' or 'Good evening!'
```

#### `logError(error, context?)`
Logs an error with optional context.

#### `tapError(fn)`
Wraps a function to catch and log errors without throwing.

#### `tapErrorAsync(fn)`
Async version of `tapError`.

#### `tapLog(value)`
Logs a value and returns it (useful for debugging in function chains).

#### `pushToEventQueue(event, data)`
Pushes an event to an event queue.

#### `cloneDataObject(obj)`
Deep clones a data object.

---

### Object Helpers

#### `cleanNilProps(obj)`
Removes null/undefined properties from an object.

---

### CRUD Helpers

Utilities for CRUD operations with filtering and sorting.

#### Enums

- `FilterComparator`: Enum for filter comparison operators.
- `SortBy`: Enum for sort directions.

---

### Decorator Helpers

Utilities for working with TypeScript decorators.

- `applyClassDecorators(...decorators)`
- `applyMethodDecorators(...decorators)`
- `applyPropertyDecorators(...decorators)`

---

### Data Types

#### `acceptTypes`
Type definitions for accepted data types.

---

### Swagger

#### `bindService`
Utilities for binding services with Swagger documentation.

---

## Development

### Build

```bash
npm run build
```

### Test

Run all tests:
```bash
npm test
```

Run tests for a specific module:
```bash
npm test -- array-helpers
```

**Test Coverage**: The library includes comprehensive test coverage with 76+ test files covering all major functions and edge cases.

### Format

```bash
npm run prettier-format
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes and version history.

## License

See LICENSE file for details.
