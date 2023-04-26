import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  pink: {
    100: "#f8cede",
    200: "#f19dbd",
    300: "#e96c9d",
    400: "#e23b7c",
    500: "#db0a5b",
    600: "#af0849",
    700: "#830637",
    800: "#580424",
    900: "#2c0212",
  },
  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
  secondary: {
    100: "#f9ccd2",
    200: "#f299a4",
    300: "#ec6677",
    400: "#e53349",
    500: "#df001c",
    600: "#b20016",
    700: "#860011",
    800: "#59000b",
    900: "#2d0006",
  },
};

export const theme = createTheme({
  pallete: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans serif"].join(","),
    fontSize: 11,

    h1: {
      fontFamily: ["cinzel", "sans serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["cinzel", "sans serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["cinzel", "sans serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["cinzel", "sans serif"].join(","),
      fontSize: 14,
    },
  },
});
