export const colors = {
  sGreen: "#36B37E",
  sRed: "#F25252",
  sLightGrey: "#EDEEF9",
  fullWhite: "#ffff",
  black: "#000000",
};

export const lightTheme = {
  ...colors,
  theme: "Light",
  background: colors.fullWhite,
  inputText: colors.black,
};

export type ThemeProps = typeof lightTheme;
