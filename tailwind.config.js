/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      "white": "#ffffff",
      "blue": "#3a7bfd",
      "vd-blue": "#161722",
      "vdd-blue": "#25273c",
      "dark-lg-blue": "#cacde8",
      "dark-lg-blue-hover": "#e4e5f1",
      "dg-blue": "#777a92",
      "vdg-blue": "#393a4c",
      "vl-gray": "#fafafa",
      "vlg-blue": "#e4e5f1",
      "lg-blue": "#d2d3db",
      "light-dg-blue": "#9394a5",
      "light-vdg-blue": "#484b6a",
      "lavender-purple": "#c058f3",
      "sky-blue": "#57ddff",
    },
    extend: {},
  },
  plugins: [],
};

