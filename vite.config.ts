import react from '@vitejs/plugin-react';
import { PluginOption, defineConfig } from 'vite';
import * as fs from 'fs/promises';
import * as path from 'path';

async function TPGamesManifestPlugin(): Promise<PluginOption[]> {
  return [
    {
      name: 'transform-file',
      apply: 'build',

      async buildStart() {
        const builtCode = await fs.readFile(
          path.resolve(__dirname, 'editor-dist', 'lib.js'),
          'utf-8',
        );

        this.emitFile({
          type: 'asset',
          fileName: 'lib.js',
          source: builtCode,
        });

        const libDeclaration = await fs.readFile(
          path.resolve(__dirname, 'editor-dist', 'lib.d.ts'),
          'utf-8',
        );

        this.emitFile({
          type: 'asset',
          fileName: 'lib.d.ts',
          source: libDeclaration,
        });

        const initialCode = await fs.readFile(
          path.resolve(__dirname, 'src', 'editor', 'initialCode.ts'),
          'utf-8',
        );

        this.emitFile({
          type: 'asset',
          fileName: 'initialCode.ts',
          source: initialCode,
        });
      },
    },
    {
      name: 'custom-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method === 'GET' && req.url === '/lib.js') {
            const builtCode = await fs.readFile(
              path.resolve(__dirname, 'editor-dist', 'lib.js'),
              'utf-8',
            );

            res.setHeader('Content-Type', 'application/json');
            // allow cors for all sites
            res.setHeader('Access-Control-Allow-Origin', '*');

            res.end(builtCode);

            return;
          }

          if (req.method === 'GET' && req.url === '/lib.d.ts') {
            const libDeclaration = await fs.readFile(
              path.resolve(__dirname, 'editor-dist', 'lib.d.ts'),
              'utf-8',
            );

            res.setHeader('Content-Type', 'application/json');
            // allow cors for all sites
            res.setHeader('Access-Control-Allow-Origin', '*');

            res.end(libDeclaration);

            return;
          }

          if (req.method === 'GET' && req.url === '/initialCode.ts') {
            const initialCode = await fs.readFile(
              path.resolve(__dirname, 'src', 'editor', 'initialCode.ts'),
              'utf-8',
            );

            res.setHeader('Content-Type', 'application/json');
            // allow cors for all sites
            res.setHeader('Access-Control-Allow-Origin', '*');

            res.end(initialCode);

            return;
          }

          next();
        });
      },
    },
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    sourcemap: true,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    TPGamesManifestPlugin(),
  ],
});
