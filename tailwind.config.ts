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
          DEFAULT: '#164B52',
          md: '#1E5A61',
          light: '#2A6A70',
        },
        gold: {
          DEFAULT: '#B6533D',
          light: '#C96852',
          dark: '#8F3F30',
        },
        sage: '#2B6A5B',
        mineral: '#557582',
        ink: '#182126',
        mid: '#4C5A5C',
        mist: '#71807E',
        surface: '#F4F1EA',
        light: '#DCE7E1',
        white: '#FBFAF7',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(42px, 5.8vw, 76px)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
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
