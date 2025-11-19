/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // pega o index da raiz
    "./pages/**/*.html",          // pega TODOS os HTML dentro de /pages
    "./src/**/*.{html,js,jsx,ts,tsx}", // pega js e componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
