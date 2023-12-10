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
        'F2F2F2': '#F2F2F2',
      },
      boxShadow: {
        dropdown: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const newComponents = {
        '.body' : {
          fontFamily: 'Inter',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '120%',
          opacity : 0.7
        },
        '.heading-3' : {
          fontSize: '2.4375rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '120%' /* 46.8px */
        },
        '.heading-4': {
          fontSize: '1.9375rem',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '120%',
        },
        '.heading-5' : {
          fontFamily: 'Inter',
          fontSize: '1.5625rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '120%'
        },
        '.caption' : {
          fontFamily: 'Inter',
          fontSize: '0.8125rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '120%'
        },
        '.button-label' : {
          textAlign: 'center',
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '120%',
        },
      };
      addComponents(newComponents);
    },
  ],
}