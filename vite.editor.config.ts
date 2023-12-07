import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/editor/library.ts'),
      name: 'lib',
      // the proper extensions will be added
      fileName: 'lib',
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
