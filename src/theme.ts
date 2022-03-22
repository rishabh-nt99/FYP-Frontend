import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    // @ts-ignore
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: "#F3F3F3",
      paper: "#F3F3F3",
    },
    primary: {
      main: "#181717",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#AE7C14",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#4D4D4D",
      secondary: "#888888",
    },
  },
  shape: {
    borderRadius: 1,
  },
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
    h1: {
      fontFamily: "DM Sans",
      fontSize: 60,
      fontWeight: 200,
      color: "#181717",
    },
    h2: {
      fontFamily: "DM Sans",
      fontSize: 45,
      fontWeight: 200,
      color: "#181717",
    },
    h3: {
      fontFamily: "DM Sans",
      fontSize: 32,
      fontWeight: 200,
      color: "#181717",
    },
    h4: {
      fontFamily: "DM Sans",
      fontSize: 20,
      fontWeight: 200,
      color: "#181717",
    },
    h5: {
      fontFamily: "Inter",
      fontWeight: 500,
      color: "#181717",
      fontSize: "27px",
    },
    h6: {
      fontFamily: "DM Sans",
      fontWeight: 600,
      color: "#181717",
      fontSize: "28px",
    },
    subtitle1: {
      fontFamily: "Inter",
      fontSize: 18,
      color: "#181717",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "DM Sans",
      fontSize: 16,
      fontWeight: 600,
      color: "#181717",
    },
    subtitle2: {
      fontFamily: "Inter",
      fontSize: 18,
      color: "#181717",
      fontWeight: 500,
      textDecorationLine: "underline",
    },
    body2: {
      fontFamily: "Inter",
      fontSize: 18,
      color: "#181717",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Inter",
      fontSize: 13,
      fontWeight: 600,
      textTransform: "none",
      color: "#181717",
    },
    caption: {
      fontFamily: "DM Sans",
      fontSize: 16,
      fontWeight: 500,
      color: "#181717",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#F3F3F3",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 160,
          borderRadius: 4,
        },
        contained: {
          boxShadow: "0",
        },
        outlined: {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 38,
          fontSize: 16,
        },
        multiline: {
          height: "auto",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: "#181717",
          fontSize: 15,
        },
        formControl: {
          top: -10,
          left: -14,
        },
      },
    },
    // @ts-ignore CHECK THIS LATER
    // MuiRating: {
    //   root: {
    //     color: '#000000',
    //     '&.Mui-disabled': {
    //       opacity: 1,
    //     },
    //   },
    // },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 64,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #ECECEC",
          "&$expanded": {
            margin: 0,
          },
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
          minHeight: 0,
          "&$expanded": {
            minHeight: 0,
          },
        },
        content: {
          margin: "24px 0",
          "&$expanded": {
            margin: "24px 0 8px 0",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 0 24px 0",
        },
      },
    },
  },
  zIndex: {
    appBar: 1400,
    drawer: 1200,
    modal: 1600,
  },
});
