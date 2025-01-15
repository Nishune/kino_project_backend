import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './main.js', // Ingångspunkten
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
  publicDir: 'public', // Kopierar innehåll till dist
});
