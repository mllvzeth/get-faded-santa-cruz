import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        configPath: './wrangler.jsonc',
        compatibilityDate: '2026-03-17',
        compatibilityFlags: ['nodejs_compat_v2'],
        imageService: 'compile',
    }),
    vite: {
        optimizeDeps: {
            exclude: ['@keystatic/astro/api', '@keystatic/astro/ui', '@keystatic/astro/internal/keystatic-api.js'],
        },
    },
    integrations: [react(), markdoc(), keystatic()],
});
