const Input = (theme) => {
  return {
    //for variant standard
    MuiInput: {
      styleOverrides: {
        root: {
          height: 44,
          backgroundColor: theme.palette.common.white,
          padding: "0px 10px",
          borderRadius: "4px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary[50],
        },
      },
    },
    //for varient filled
    MuiFilledInput: {
      styleOverrides: {
        root: {
          height: 56,
          "&.Mui-error": {
            "& .MuiInputAdornment-positionEnd": {
              color: theme.palette.error.main,
            },
          },
        },

        colorPrimary: {
          "& .MuiInputAdornment-positionEnd .MuiIconButton-root": {
            color: theme.palette.primary[500],
          },
          "& .MuiInputAdornment-positionStart .MuiIconButton-root": {
            color: theme.palette.primary[500],
          },
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.primary[50],
          },
          "&:focus": {
            backgroundColor: theme.palette.primary[50],
          },
          "&:visited": {
            backgroundColor: theme.palette.primary[100],
          },

          "&.Mui-focused": {
            backgroundColor: theme.palette.primary[50],
          },

          "&.Mui-disabled": {
            color: theme.palette.grey[300],
            backgroundColor: theme.palette.grey[200],
            "& .MuiInputAdornment-positionEnd .MuiIconButton-root": {
              color: theme.palette.grey[300],
            },
            "& .MuiInputAdornment-positionStart .MuiIconButton-root": {
              color: theme.palette.grey[300],
            },
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "5px",
          "&.MuiFormLabel-colorPrimary": {
            color: theme.palette.grey[800],
          },
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
          "&.Mui-disabled": {
            color: theme.palette.grey[300],
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "&.completed, &.complété": {
            backgroundColor: theme.palette.customColors.status.completed,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.customColors.accentGreen,
            },
          },
          "&.readyforreview, &.prêtpourlexamen": {
            backgroundColor: theme.palette.customColors.status.readyForReview,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.customColors.accentBlue,
            },
          },
          "&.new, &.nouveau": {
            backgroundColor: theme.palette.customColors.status.new,
            "&.MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          "&.followup, &.suivi": {
            backgroundColor: theme.palette.customColors.status.followUp,
            "&.MuiOutlinedInput-notchedOutline": {
              borderColor: "#FCA24E",
            },
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
      },
    },
  };
};

export default Input;
