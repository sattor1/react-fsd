import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        expandProps: 'end',
        dimensions: false,
        exportType: 'named',
        typescript: false,
        prettier: true,
        titleProp: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false // Сохранить viewBox для гибкости масштабирования
            }
          ]
        }
      },
      include: '**/*.svg',
      exclude: 'node_modules/**'
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve('/'),
      '~app': path.resolve('src/app'),
      '~pages': path.resolve('src/pages'),
      '~shared': path.resolve('src/shared'),
      '~widgets': path.resolve('src/widgets'),
      '~svg': path.resolve('assets/svg')
    }
  }
});
