// vite.config.ts
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), UnoCSS()],
    server: {
        port: 3000
    }
});
