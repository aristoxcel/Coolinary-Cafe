/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        'ubuntu': ["Ubuntu Sans", 'sans-serif'],
        'pacific': ["Pacifico", 'cursive'],
        'poet': ["Poetsen One", 'system-ui'],
        'body': ["Ubuntu Sans", 'sans-serif'],
      },
    extend: {},
  },
  plugins: [require("daisyui")],
}

