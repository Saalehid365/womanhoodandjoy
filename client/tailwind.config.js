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
    fontFamily: {
      display: ["Satisfy", "cursive"],
    },
  },
  plugins: [],
};
