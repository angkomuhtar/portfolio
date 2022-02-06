module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      redhat: ["Red Hat Display", "sans-serif"],
      Redrose: ["Red Rose"],
      Asap: ["Asap Condensed"],
      Fira: ["Fira Code"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        main: {
          50: "#e6f1ff",
          100: "#64ffda",
          200: "#ccd6f6",
          300: "#a8b2d1",
          400: "#8892b0",
          500: "#233554",
          600: "#112240",
          700: "#0a192f",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
