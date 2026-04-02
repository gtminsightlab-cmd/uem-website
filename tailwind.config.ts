import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2040',
          md: '#1A3255',
          light: '#243B5C',
        },
        gold: {
          DEFAULT: '#B8952A',
          light: '#D4AA3A',
          dark: '#8A6E1E',
        },
        sage: '#2D6A4F',
        ink: '#1C1C1C',
        mid: '#555E6B',
        mist: '#8B95A1',
        surface: '#F7F8FA',
        light: '#F0F2F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(42px, 6vw, 78px)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'h2': ['clamp(28px, 3.5vw, 48px)', { lineHeight: '1.12' }],
        'h3': ['clamp(20px, 2vw, 28px)', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '720px',
        'wide': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
