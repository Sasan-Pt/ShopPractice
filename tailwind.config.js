/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        aphase: "650px",
        tphase: {"max":"674px"},
        headerPhase:"650",
        'firstPhase': {'max': '844px'},
        "secondPhase":{'max':"650px"},
        "thirdPhase":{"max":"403px"},
        "fourthPhase":{"max":"530px"}
      },
      colors: {
        firstColor: "#B7C4CF",
        secondColor: "#ACC8E0",
        thirdColor: "#83A0B8",
        buttons_Color: "#9CADBC",
        startButtonColor: "#5B8326",
        endButtonColor: "#73B11F",
        secondaryButtonColor: "#407000",
        footerColor: "#383C46",
        mainBgColor: "#F1F1F1",
        mainFooterLink: "#CDDBFE",
        mouseoverToolBar: "#c6d0d9",
        bgRecipColor: "#f9f9f9",
        searchIconColor:"#B7C1CF",
        searchBarColor:"#B3B5C0"
      },
      gridTemplateColumns: {
        footer: "5fr 5fr",
        games: "1fr 30fr 1fr",
        checkOutFirst: "1fr",
        testgrid: "1fr 1fr 1fr 1fr",
      },
      gridTemplateRows: {
        nowork: "1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        ".clip": {
          "clip-path":
            "polygon(0% 0%, 16% 14%, 21% 35%, 20% 66%, 12% 84%, 0 100%, 100% 100%, 100% 0)",
        },
        ".test": {
          transform: "translate(600%)",
        },
        ".test2": {
          transform: "translate(1200%)",
        },
      });
    }),
  ],
};
