module.exports = {
  darkMode:'class',
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#e8bd0d',
        sec: '#3944F7',
        dark: '#0D0D0D',
        third:'#5A20CB'
      },
      backgroundImage: {
        'contact': "url('/src/assets/contact.jpg')",
        'contactdark': "url('/src/assets/contactdark.png')",
      }
    },
    plugins: [],
  }
}

