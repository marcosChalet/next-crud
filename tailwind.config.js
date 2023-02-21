/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      {
        pattern: /(bg|to|from)-(vonCount|blade|dracula)-(400|700|800|900)/,
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwind-dracula')()],
};
