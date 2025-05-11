const Button = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Lato Regular', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          borderRadius: 4,
          lineHeight: 1.375,
          letterSpacing: "0.3px",
        },
        startIcon: {
          marginRight: "4px",
        },
        text: {},
        textPrimary: {
          "&:hover": {
            backgroundColor: theme.palette.primary[50],
          },
          "&:focus": {
            backgroundColor: theme.palette.primary[100],
          },
          "&:visited": {
            backgroundColor: theme.palette.primary[100],
          },
          "&.Mui-disabled": {
            color: theme.palette.grey[300],
          },
        },
        contained: {},
        containedPrimary: {
          "&:hover": {
            backgroundColor: theme.palette.primary[700],
          },
          "&:focus": {
            backgroundColor: theme.palette.primary[800],
          },
          "&:visited": {
            backgroundColor: theme.palette.primary[800],
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.grey[200],
            color: theme.palette.grey[500],
          },
        },
        outlined: {},
        outlinedPrimary: {
          borderColor: theme.palette.primary[500],
          "&.Mui-disabled": {
            borderColor: theme.palette.grey[300],
            color: theme.palette.grey[300],
          },
          "&:hover": {
            backgroundColor: theme.palette.primary[50],
          },
          "&:focus": {
            backgroundColor: theme.palette.primary[100],
          },
        },
        sizeMedium: {
          // color: mode === "dark" ? "#FFF" : theme.palette.grey[50], // Setting the text color for sizeSmall buttons based on the dark or light mode
          height: 40,
          "&.MuiButton-contained": {
            padding: `${theme.spacing("8px", "24px")}`,
          },
          "&.MuiButton-outlined": {
            padding: `${theme.spacing("8px", "24px")}`,
          },
          "&.MuiButton-text": {
            padding: `${theme.spacing("10px", "10px")}`,
          },
        },
      },
    },
  };
};

export default Button;
