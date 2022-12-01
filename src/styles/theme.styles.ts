export const colors = {
  sGreen: "#36B37E",
  sRed: "#F25252",
  sLightGrey: "#EDEEF9",
  fullWhite: "#ffff",
  black: "#000000",
  blueLight: "#f6f7fe",
  bronzeLight: "#8c7a61",
  silverLight: "#f1f0ee",
  goldLight: "#e2d88c",
  platinumLight: "#fbf9ec",
  blueDark: "#ebedfb",
  bronzeDark: "#b0956e",
  silverDark: "#b9b9bb",
  goldDark: "#c8c081",
  platinumDark: "#c0c0b9",
};

export const lightTheme = {
  ...colors,
  theme: "Light",
  background: colors.fullWhite,
  inputText: colors.black,
};

export type ThemeProps = typeof lightTheme;
