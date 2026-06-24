# fx-common – Upgrade Suggestions

Suggestions to improve and extend the `@water102/fx-common` library, based on current structure and usage.

**Monorepo integration:** see [docs/architecture/fx-packages-integration.md](../../docs/architecture/fx-packages-integration.md) for tsh5-wide adoption matrix, proposed API additions (`isEnvTruthy`, `asFiniteInt`, `pascalToKebab` fix), and phased rollout.

---

## 1. Package exports & tree-shaking

`package.json` does not define `exports`, so bundlers cannot optimize and consumers cannot import by subpath. Recommended:

- **Subpath exports** so consumers can do `@water102/fx-common/date-time`, `@water102/fx-common/validate`, etc., and only bundle what they use.
- **Conditional exports** (`import` / `require` / `types`) for correct ESM/CJS and TypeScript resolution.

Example structure:

```json
"exports": {
  ".": {
    "import": "./dist/index.mjs",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"
  },
  "./date-time": { "import": "./dist/date-time.mjs", "require": "./dist/date-time.js", "types": "./dist/date-time.d.ts" },
  "./validate": { ... }
}
```

This requires Rollup to have multiple entry points (main index + each subpath) and matching outputs. Can be done in phases: first add `exports` for the main entry only, then add subpath builds.

---

## 2. Missing export in `validate`

The file `is-deep-query-string.ts` exists in `src/validate` but is not re-exported from `validate/index.ts`. Either:

- Export it from `validate/index.ts` if the API is part of the public surface, or
- Remove or deprecate it if it is unused.

---

## 3. Node engine

`"node": ">=23.3"` is very strict and may block adoption in LTS environments. Consider relaxing to `">=18"` or `">=20"` (depending on which Node APIs you use) for broader compatibility.

---

## 4. New utility functions (functional style)

- **Date:** `startOfWeek` / `endOfWeek`, `diffDays`, `isSameDay`, `formatRelative` (using dayjs).
- **Number:** `clamp(min, max, value)`, `formatCompact` (1.2K, 1.5M).
- **String:** `truncate(str, maxLen, suffix)`, `maskSensitive` (e.g. mask part of email/phone).
- **Object:** `deepMerge`, type-safe `pick` / `omit` (or thin wrappers over Ramda if you already use it).
- **Array/collection:** `groupBy`, `keyBy`, `uniqBy` (if not overlapping with Ramda).
- **Async:** `retry(fn, options)`, `pLimit(tasks, concurrency)`, `raceWithTimeout(promise, ms)`.
- **Validation:** `isPhone`, `isCreditCard` (optional), or a small rule-builder for custom validators.

Prioritize based on real usage in your apps (e.g. more date work → date helpers; more forms → validation).

---

## 5. Promise & async

You already have cancelable promise and `allNamedPromise`. Possible additions:

- **Retry with backoff** (exponential/linear).
- **Concurrency limit** (e.g. `pLimit`-style) to reuse alongside existing helpers.
- **Timeout** for a single promise (`raceWithTimeout`).

---

## 6. Testing & quality

- Add **coverage thresholds** in `jest.config.js` (e.g. lines/functions/branches ≥ 80%) so coverage does not drop silently.
- Add tests for modules that currently have none (e.g. `is-not-nil-and-empty`, `is-deep-query-string` if kept).
- Add a **lint** script (ESLint) and run it in CI if you have it.

---

## 7. Documentation & DX

- Use **TypeDoc** (or similar) to generate API docs from JSDoc/TypeScript.
- In README, add one or two **quick-start** examples (e.g. pipe/compose + a few helpers).
- Document **peer dependencies** (dayjs, ramda, nanoid, uuid): why they are peer and how to install them.

---

## 8. Build & types

- Ensure the build outputs `.d.ts` for every public entry (when you add subpath exports, each subpath needs its own declaration).
- Consider **dual package** setup: `"type": "module"` with CJS fallback if you want ESM-first; test with CJS consumers.

---

## 9. Security & hardening

- **Crypto:** You already have AES-256-GCM; consider a **hash** helper (e.g. SHA-256) for non-secret use (checksums, ids).
- **Sanitize:** `sanitizeHtml` exists; if used for rich text or user content, document or add an allowlist and consider recommending a dedicated lib (e.g. DOMPurify) for production.

---

## 10. Versioning & changelog

- Keep **CHANGELOG.md** in Keep a Changelog format (as now).
- Fill in real dates for each version entry (e.g. `[4.0.7] - 2024-XX-XX`).

---

## Suggested order of work

1. Fix missing export (`validate/index.ts` for `is-deep-query-string`).
2. Add `exports` in `package.json` (at least for the main entry, then subpaths).
3. Relax Node engine if you want LTS compatibility.
4. Add a few high-value helpers (date, number, string, async) based on actual needs.
5. Set coverage thresholds and add tests for currently untested helpers.
6. Add TypeDoc and improve README/peer dependency docs for better DX.
