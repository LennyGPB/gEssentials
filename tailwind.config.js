/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                'card': '40rem',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                navbar: "#2C2C2C",
                blackgradient: 'rgba(255, 255, 255, 0.16)',
                blackgradient2: 'rgba(255, 255, 255, 0)',
            },
        },
    },
    plugins: [],
};
