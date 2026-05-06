import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Disengaja untuk membuat bundle JavaScript React jadi jauh lebih besar
  }
});
