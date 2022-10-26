// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy'
// import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    // }),
    // babel({
    //   babelHelpers: 'runtime',
    //   // babelHelpers: 'external',
    //   extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', 'ts'],
    // })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './u/index.js'),
      name: 'u',
      // the proper extensions will be added
      fileName: 'u'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    }
  }
})
