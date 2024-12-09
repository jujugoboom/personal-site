// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

import playformInline from '@playform/inline'

// https://astro.build/config
export default defineConfig({
    site: 'https://justincovell.com',
    integrations: [tailwind(), sitemap(), playformInline({})],
    output: 'static',
    markdown: {
        shikiConfig: {
            theme: 'tokyo-night',
        },
    },
})
