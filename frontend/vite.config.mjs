import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  optimizeDeps: {
    include: [
      '@nimbus-ds/patterns',
      '@nimbus-ds/components',
      '@nimbus-ds/styles',
    ],
  },
  plugins: [
    svgr(),
    react(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(currentDirectory, 'src'),
    },
  },
});
