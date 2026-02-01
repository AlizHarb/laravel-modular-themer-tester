import {
    defineConfig
} from 'vite';
import { themerLoader } from './vite.themer.js';
import { modularLoader } from './vite.modular.js';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                
                'resources/css/app.css', 'resources/js/app.js',
                ...modularLoader.inputs()
            ,
                ...themerLoader.inputs()
            ],
            refresh: [
                ...themerLoader.refreshPaths(),
                ...modularLoader.refreshPaths(),
                'resources/views/**',
                'routes/**',
            ],
        }),
        tailwindcss(),
    ],
    server: {
        cors: true,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
