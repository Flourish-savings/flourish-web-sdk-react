import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import typescriptEngine from 'typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({
        preferBuiltins: true,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
        typescript: typescriptEngine,
        sourceMap: false,
      }),
    ],
    onwarn(warning, rollupWarn) {
      if (warning.code === 'UNRESOLVED_IMPORT' && warning.source.includes('node_modules')) {
        return;
      }
      rollupWarn(warning);
    },
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
