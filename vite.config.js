import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ändra till bara '/' för lokal utveckling
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        kids: './kids.html',
        about: './about.html',
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
