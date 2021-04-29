module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryDarktxt: "#02007a",
        primaryDark: "#4240FF",
        primaryLightxt: "#0B69B6",
        primaryLight: "#0087FF",
        primary: "#00CBFF",
        primaryAux: "#86F9FF",
        primaryAuxed: "#eefeff",
        secondary: "#ffa11d",
        secondaryDark: "#e08300",
        secondaryDarktxt: "#6e4000",
        tertiary: {
          25: "#f3f3f3",
          50: "#949494",
          100: "#656566",
          200: "#333333",
        },
      },
      fontFamily: {
        body: ["Exo"],
      },
      ringOffsetColor: ["hover", "active"],
      transform: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
