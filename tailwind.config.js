/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark background color
        secondary: '#374151', // Sidebar color
        accent: '#10B981', // Green accent color
        light: '#F3F4F6', // Light grey color
      },
    },
  },
  plugins: [],
};
