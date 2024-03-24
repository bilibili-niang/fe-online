import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve("src"),
        },
    },
    css: {
        // 预处理器配置项
        preprocessorOptions: {
            less: {
                math: "always",
                additionalData: "@import '@/assets/variables.less';@import '@/assets/common.less';"
            },
        }
    },
    server: {
        host: '0.0.0.0',
        port: 5001,
        open: true,
        https: false,
        /*proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }*/
    }
})
