/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        bounceShort: 'bounce 5s infinite',
        pulseShort: 'pulse 1s infinite',
        'ping-fast': 'ping 1s linear infinite',
      },
      boxShadow: {
        custom: "0px 0px 70px 1px rgba(178, 174, 174, 1)",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        'custom-dark': '#1a192c',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playwrite: ['"Playwrite DE Grund"', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
