module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './styles/globals.css'
    ],

    plugins: [require('daisyui')],
    daisyui: {
        // Light & dark themes are added by default (it switches automatically based on OS settings)
        // You can add another theme among the list of 30+
        // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
        // https://daisyui.com/
        themes: ['light', 'dark']
    }
};
