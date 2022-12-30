import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import baseConfig from './vite.base.config'

import { join } from 'path'

export default defineConfig({
  ...baseConfig,
  publicDir: false,
  build: {
    cssCodeSplit: false,
    lib: {
      entry: join(__dirname, './packages/index.ts'),
      name: 'LakeView',
      // the proper extensions will be added
      fileName: (format) => `lake-view.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'lodash-es'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'lodash-es': '_',
        },
      },
    },
  },
  plugins: [vue(), DefineOptions()],
})
