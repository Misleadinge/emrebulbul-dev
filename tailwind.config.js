/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'card-bg': 'var(--card-bg)',
                'secondary-bg': 'var(--secondary-bg)',
                'accent-dark': 'var(--accent-dark)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                'text-muted': 'var(--text-muted)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(233, 69, 96, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(233, 69, 96, 0.5)' },
                },
            },
        },
    },
    plugins: [],
}
