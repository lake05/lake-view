import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
import baseConfig from './vite.base.config'

import { join } from 'path'

export default defineConfig({
  ...baseConfig,
  publicDir: false,
  build: {
    lib: {
      entry: join(__dirname, './packages/index.ts'),
      formats: ['es', 'umd'],
      name: 'LakeView',
      // the proper extensions will be added
      fileName: (format) => `lake-view.${format}.js`,
    },
    minify: 'esbuild', // 混淆器
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
  css: {
    modules: {
      generateScopedName: 'lv-[local]',
    },
    preprocessorOptions: {
      sass: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      copyDtsFiles: false,
      include: 'packages',
      outputDir: 'dist/types',
      skipDiagnostics: true,
    }),
  ],
})
