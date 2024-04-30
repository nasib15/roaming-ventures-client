/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      {
        synthwave: {
          ...require("daisyui/src/theming/themes")["synthwave"],
          "#faq": {
            color: "white",
          },
          ".footer-text": {
            color: "white",
          },
          ".footer-contact": {
            color: "white",
            opacity: 0.6,
          },
          ".footer-contact:hover": {
            color: "#e55039",
          },
          ".pricing-heading": {
            color: "black",
          },
          "#card-section": {
            backgroundColor: "#1A103D",
            border: "1px solid white",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          ".country-pic-header": {
            color: "white",
          },
          ".country-pic-description": {
            color: "white",
            opacity: 0.8,
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
});
