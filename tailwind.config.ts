import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#161710', cream: '#f5f0e4', leaf: '#49623d', gold: '#c68a37' }, fontFamily: { sans: ['var(--font-outfit)', 'sans-serif'] } } },
  plugins: [],
};
export default config;
