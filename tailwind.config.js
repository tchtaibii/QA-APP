/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {},
    container: {
      display : 'flex',
      flexDirection : 'column',
      width : '100vw',
      marginInline : 'auto',
      minHeight : '100vh',
    },
  },
  plugins: [],
}

