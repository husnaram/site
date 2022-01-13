const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{njk,md,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.emerald.400'),
              '&:hover': {
                color: theme('colors.emerald.500')
              },
              code: { color: theme('colors.emerald.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
