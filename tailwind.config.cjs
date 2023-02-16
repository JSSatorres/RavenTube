/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jt',
  theme: {
    extend: {
      colors: {
        // azul oscuro
        primary: '#170B33',
        // azul oscuro
        secondary: '#170B33',
        // ravenloop blue
        rblue: '#00A1E0',
        // blanco texto
        darkcontrast: '#0C37ED',
        greencontrast: '#0CEDB2',
        contrast1: '#FFFFFF',
        // negro texto
        contrast2: '#000000',
        // amarillo texto hover
        hovertext: '#ECCD6A',
        // amarillo texto seleccionado
        activetext: '#E5BE01',
        // azul fondo menu movil
        'deep-blue': '#000026',
        // bg grey
        softGrey: '#1E1E1E',

      },
      fontSize: {
        base: '16px',
      },
      lineHeight: {
        tight: 1.25,
      },
      fontWeight: {
        bold: 700,
      },
      backgroundImage: () => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
