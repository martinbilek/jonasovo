const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/**/*.html',
    './src/**/**/**/*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
