module.exports = {
  darkMode:'class',
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('/src/assets/contact.jpg')",
        'contactdark': "url('/src/assets/contactdark.png')",
      }
    },
    plugins: [],
  }
}

