import fs from 'node:fs/promises';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { SUBPATH_ENTRIES } from './subpath-entries.mjs';

const rawPackageJSON = await fs.readFile('./package.json', { encoding: 'utf8' });

/** @type {import('./package.json')} */
const pkg = JSON.parse(rawPackageJSON);

const isProduction = process.env.NODE_ENV === 'production';

console.log('isProduction', isProduction);

/** @type {Record<string, string>} */
const input = {
  index: 'src/index.ts',
  ...Object.fromEntries(
    SUBPATH_ENTRIES.map((name) => [name, `src/${name}/index.ts`]),
  ),
};

export default {
  input,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: (chunkInfo) =>
        chunkInfo.name === 'index' ? '[name].js' : `entries/${chunkInfo.name}.js`,
      chunkFileNames: 'chunks/[name]-[hash].js',
      sourcemap: !isProduction,
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: (chunkInfo) =>
        chunkInfo.name === 'index' ? 'index.mjs' : `entries/${chunkInfo.name}.mjs`,
      chunkFileNames: 'chunks/[name]-[hash].mjs',
      minifyInternalExports: true,
      sourcemap: !isProduction,
    },
  ],
  plugins: [
    image(),
    json(),
    replace({
      exclude: 'node_modules/**',
      preventAssignment: true,
      values: {
        _ENV_: JSON.stringify(process.env.NODE_ENV || 'development'),
        __buildDate__: () => JSON.stringify(new Date()),
        __buildVersion__: () => JSON.stringify(pkg.version),
        __packageName__: () => JSON.stringify(pkg.name),
      }
    }),
    nodeResolve({
      // Rollup runs on Node; without this, uuid resolves to dist-node (node:crypto).
      // Browser consumers need uuid's dist/ build (Web Crypto), same as our AES helpers.
      exportConditions: ['import', 'module', 'browser', 'default'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    isProduction && terser({
      mangle: {
        toplevel: true,
      }
    }),
  ],
};
