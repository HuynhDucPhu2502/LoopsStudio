/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./html/**/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/imgs/desktop/image-hero.jpg')",
      }),
    },
  },
  plugins: [],
};
