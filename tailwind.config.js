/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    colors: {
      "primary": "#0055a6",
      "secondary": "#ffe600"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}