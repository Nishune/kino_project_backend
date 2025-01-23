import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './main.js',
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  publicDir: 'public',
  server: {
    proxy: {
      '/movies': 'http://localhost:5080',
      '/movie': 'http://localhost:5080',
    },
  },
});
