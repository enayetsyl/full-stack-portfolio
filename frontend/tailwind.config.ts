import type { Config } from "tailwindcss";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#23AD96',
      },
      fontFamily: {
        primary: ['Nunito'],
        secondary: ['Cormorant Upright'],
      },
    },
  },
  plugins: [],
} satisfies Config;
