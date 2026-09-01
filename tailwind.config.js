/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uis: {
          bg: '#f4f3ee',          // grayer off-white document canvas
          paper: '#f9f8f5',       // subtle paper surface
          card: '#ffffff',        // clean surface
          dark: '#181816',        // restrained dark neutral text
          muted: '#5c5b56',       // secondary technical text
          border: '#cfcdc4',      // archival hairline borders
          borderDark: '#7f7d75',  // darker border lines
          orange: '#d95a2b',      // iconic accent orange
          olive: '#596944',       // taxonomic accent green/olive
          grid: '#e2e0d7',        // subtle reticle blueprint grid
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Arial Black"', 'Impact', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Newsreader"', '"Georgia"', 'serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
