import path from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/extractColors.node.ts'),
      name: 'ExtractColors',
      fileName: (format) => `extract-colors.node.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: './lib'
      },
    },
  },
});