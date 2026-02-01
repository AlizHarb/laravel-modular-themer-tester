import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../../public/build/themes/default',
        lib: {
            entry: 'resources/assets/js/app.js',
            name: 'default',
            formats: ['es'],
            fileName: (format) => `app.js`
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'app.css';
                    return assetInfo.name;
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/assets/js'),
        },
    },
});
