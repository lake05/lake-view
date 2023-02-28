import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import baseConfig from './vite.base.config'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  plugins: [vue(), vueJsx(), DefineOptions()],
})
