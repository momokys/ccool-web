import { searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
import { SvgBuilder, FormGenerator } from './src/plugins'
import type { UserConfig, ConfigEnv } from 'vite'

export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    base: '/ccool/',
    root: process.cwd(),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
        // vue: 'vue/dist/vue.esm-bundler.js'
      }
    },
    server: {
      open: true,
      fs: {
        allow: [
          // 搜索工作区的根目录
          searchForWorkspaceRoot(process.cwd())
        ]
      },
      proxy: {
        '^/api': {
          target: 'http://localhost:8080/ccool',
          rewrite: path => path.replace(/^\/api/, ''),
          changeOrigin: true
        }
      }
    },
    build: {
      minify: 'terser',
      brotliSize: false,
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              return id.toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          ElementPlusResolver()
        ]
      }),
      WindiCSS(),
      viteMockServe({
        localEnabled: mode === 'mock'
      }),
      SvgBuilder('./src/assets/icons/'),
      FormGenerator()
    ],
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    },
    optimizeDeps: {
      entries: ['./src/main.ts']
    }
  }
}
