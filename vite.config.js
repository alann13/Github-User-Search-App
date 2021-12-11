import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve('./src', 'assets'),
      '@components': path.resolve('./src', 'components'),
      '@store': path.resolve('./src', 'store'),
      '@utils': path.resolve('./src', 'utils'),
    },
  },
  plugins: [vue()],
})
