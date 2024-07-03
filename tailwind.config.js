// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'cinzel': ['Cinzel', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
