/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pcview/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/edgeview/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
