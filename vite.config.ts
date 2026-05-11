import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import mdx from "@mdx-js/rollup";
import githubFlavoredMarkdown from 'remark-gfm';

export default defineConfig({
  plugins: [
    devtools(),
    solid(),
    mdx({
      jsxImportSource: 'solid-js/h',
      remarkPlugins: [githubFlavoredMarkdown],
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
