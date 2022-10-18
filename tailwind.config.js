
module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contact: "url('/src/assets/contact.jpg')",
        contactdark: "url('/src/assets/contactdark.png')",
        react:
          "url('https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      },
    },
    plugins: [],
  },
};
