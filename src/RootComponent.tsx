import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F86164"
    },
    secondary: {
      main: "#2E9B5D"
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: "Barlow",
    h4: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "17px"
    },
    h3: {
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "24px"
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "30px",
      lineHeight: "36px"
    },
    h1: {
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "40px",
      lineHeight: "48px"
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "left"
    },
    subtitle1: {
      fontStyle: "medium",
      fontWeight: "bold",
      fontSize: "12px",
      lineHeight: "12px",
      textAlign: "left"
    },
    subtitle2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "12px",
      textAlign: "left"
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
      variant: "contained",
      color: "primary"
    },
    MuiLinearProgress: {
      color: "secondary"
    }
  },
  shape: {
    borderRadius: 0
  }
});

export default function RootComponent(props: { children?: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
