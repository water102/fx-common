# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.7] - 2024-XX-XX

### Fixed
- Fixed duplicate export of `time-duration-helper` in `date-time/index.ts`
- Removed unused `fetch-helpers` folder (duplicate of `utils/fetch-helper`)
- Fixed type signatures for `compose` and `pipe` functions
- Fixed off-by-one error in `isJSON` function's `countCharacter` helper
- Improved error handling in `cloneDataObject` with better error messages for circular references

### Changed
- Replaced `console.log` with `logger` in `isJSON` function
- Updated `logError` to use `logger` instead of `console.error`
- Added JSDoc comments to `compose`, `pipe`, `isJSON`, `cloneDataObject`, and `logError`
- Improved type safety in `cloneDataObject` (removed default `any` type)

### Added
- Added comprehensive README.md with API documentation
- Added CHANGELOG.md for version tracking

## [4.0.6] - Previous version

Initial release with utility functions for:
- Array manipulation
- Date/time operations
- String formatting
- Type guards
- Validation
- Random generation
- Crypto utilities
- Web3 helpers
- And more...

