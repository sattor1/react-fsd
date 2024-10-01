import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '~app': path.resolve('src/app'),
      '~pages': path.resolve('src/pages'),
      '~shared': path.resolve('src/shared'),
      '~svg': path.resolve('assets/svg')
    }
  }
});
