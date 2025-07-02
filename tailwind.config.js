/** @type {import('tailwindcss').Config} */

export const darkMode = 'class';
export const content = ['./src/**/*.{js,ts,jsx,tsx,html}', './index.html'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Onest', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
};

export const plugins = [];
