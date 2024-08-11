/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#2476FF',
        'darkest-primary': '#03396C',
        'dark-primary':'#025B95',
        'light-primary':'#88B1FF',
        'lightest-primary':'#D3E2FF',
        'info':'#00B4FF',
        'darkest-info':'#0086C9',
        'dark-gray':'#858686',
      },
      boxShadow: {
        'custom': '0px 4px 10px 0px rgba(175, 200, 246, 0.2)',
      },
    },
  },
  plugins: [],

}