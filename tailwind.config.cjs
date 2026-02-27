/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#050505",
            },
            borderRadius: {
                '5xl': '3rem',
                '6xl': '4rem',
            }
        },
    },
    plugins: [],
}
