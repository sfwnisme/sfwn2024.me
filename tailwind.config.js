/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          none: '100%',
          sm: '640px',
          // md: '768px',
          // lg: '992px',
          // lg: '1024px',
          // xl: '1280px',
          // '2xl': '1536px'
        },
      },
      gridTemplateColumns: {
        '12fr': '1fr 3fr'
      }
    },
  },
  plugins: [],
}

// None	width: 100%;
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// 2xl (1536px)	max-width: 1536px;

// .container {
//   width: 100%;
// }
// @media (min-width: 640px) {
//   .container {
//     max-width: 640px;
//   }
// }
// @media (min-width: 768px) {
//   .container {
//     max-width: 768px;
//   }
// }
// @media (min-width: 1024px) {
//   .container {
//     max-width: 1024px;
//   }
// }
// @media (min-width: 1280px) {
//   .container {
//     max-width: 1280px;
//   }
// }
// @media (min-width: 1536px) {
//   .container {
//     max-width: 1536px;
//   }
// }