module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        textColor: {
            primary: '#222222',
            secondary: '#535353',
            like: '#e84646',
        },

        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
