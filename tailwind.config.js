module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('/src/assets/contact.jpg')",
      }
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
  }
}

