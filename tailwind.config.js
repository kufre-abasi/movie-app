module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi400: ["Satoshi-Regular"],
        Satoshi500: ["Satoshi-Medium"],
        Satoshi700: ["Satoshi-Bold"],
        Satoshi900: ["Satoshi-Black"],
      },
      colors: {
        primary: {
          light: "#00AFEF",
          text: "#333333",
          pink: "#DD4A6B",
        },
        brand: "#2C2B6C",
        secondary: {
          main: "#00AFEF8A",
        },
      },
      utilities: {
        ".tick": {
          display: "inline-block",
          width: "1.55rem",
          height: "0.5rem",
          border: "2px solid currentColor",
          borderTop: "none",
          borderRight: "none",
          transform: "rotate(-45deg)",
          marginRight: "0.25rem",
        },
      },
    },
  },
  plugins: [],
};