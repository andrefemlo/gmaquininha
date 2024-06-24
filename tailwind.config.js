/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{php,html,js}"],
  theme: {
    extend: {
      fontSize: {
        '6xl': ['56px', '64px'],
      },
      borderRadius: {
        '4xl' : '32px'
      },
      colors: {
        'white'      : '#FFFFFF',
        'gray'       : '#DDDDDD',
        'orange'     : '#E48E24',
        'yellow'     : '#FFD600',
        'black'      : '#303030',
      },
      spacing: {
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      animation: {
        'float': 'float 5s linear infinite',
        'floating': 'floating 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floating: {
          '0%, 100%': { 
            transform: 'translate(0px)',
            // transform: 'translateX(0px)'
          },
          '25%': { 
            transform: 'translateY(-48px)', 
            // transform: 'translateX(-48px)'
          },
          '50%': { 
            transform: 'translateY(-16px)', 
            // transform: 'translateX(-64px)'
          },
          '75%': { 
            transform: 'translateY(32px)', 
            // transform: 'translateX(16px)'
          },
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1280px',
        }
      }
    }
  }
}

