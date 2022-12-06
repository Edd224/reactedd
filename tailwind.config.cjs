/** @type {import('tailwindcss').Config} */
module.exports = {

  // tailwind.config.js

  plugins: [require('tailwindcss-neumorphism')],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Spartan: 'League+Spartan',
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
      Handle: "La Belle Aurore"
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#610202",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #f73636 0.48%, #D5E3F1 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
      
    },
  },
  plugins: [],
  
};


