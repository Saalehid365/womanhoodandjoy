/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        seaweed: "url(/src/pages/home/assets/seaweed.jpg)",
        salt: "url(/src/pages/home/assets/salt.jpg)",
        beach: "url(/src/pages/home/assets/lotion.jpg)",
        sun: "url(/src/pages/home/assets/beach.jpg)",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      display: ["Satisfy", "cursive"],
    },
  },
  plugins: [],
};
