import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/library.ts'),
      name: 'christmas-tree',

      // the proper extensions will be added
      fileName: 'lib',
      formats: ['umd', 'cjs'],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
