module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
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