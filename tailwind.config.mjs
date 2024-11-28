import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serifFancy: [
                    'Rothenburg Decorative',
                    ...defaultTheme.fontFamily.serif,
                ],
                serif: ['Olde English', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
}
