/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040404',
          900: '#070707',
          800: '#0D0D0D',
          700: '#141414',
          600: '#1C1C1C',
        },
        gold: {
          light: '#FCF6BA',
          DEFAULT: '#D4AF37',
          deep: '#B38728',
          metallic: '#AA771C',
          muted: '#8A6D3B',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
        serif: ['"Playfair Display"', 'Amiri', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.18)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.28)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.38)',
      },
    },
  },
  plugins: [],
}
