import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    devtools(),
    solid(),
    mdx({
      jsxImportSource: 'solid-js/h',
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    // allow importing .mdx files without specifying extension
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.mdx'],
  },
});
