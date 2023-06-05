module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#FF0707",
        accent: "#d30000",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
