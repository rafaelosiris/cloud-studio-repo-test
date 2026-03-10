/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#5c80d4ff',
        // Standard colors expected by Stitch design system
        background: {
          DEFAULT: '#0F172A',
          light: '#F8FAFC',
          dark: '#020617',
        },
        surface: {
          DEFAULT: '#1E293B',
          light: '#FFFFFF',
          dark: '#d0daf2ff',
        },
        brand: {
          primary: '#4F46E5',
          secondary: '#f0f2f8ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
