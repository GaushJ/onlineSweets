module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      extend: {
        backgroundImage: {
          'signup-image': "url('/src/Components/Images/signin.jpg')",
          
         },
        colors:{
         
            orange:{
                400:'#ffa500',
                800:'#ff8c00',
            },
        },
      },
      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }