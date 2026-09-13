import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at https://katwingki.github.io/portfolio/ - base must match the repo path.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
