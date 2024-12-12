import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                serif: ['Ghostech-Regular', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                ...defaultTheme.colors,
                paper: '#f1e8d8',
                'paper-border': '#ebdec7',
            },
        },
    },
    plugins: [],
}
