const Switch = (theme) => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 32,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            height: "100%",
            color: theme.palette.grey[500],
            "&:hover": {
              color: theme.palette.grey[800],
            },
            "&.Mui-checked": {
              padding: 4,
              margin: 0,
              transform: "translateX(20px)",
              color: theme.palette.common.white,
              "&:hover": {
                color: theme.palette.primary[100],
              },
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.primary[500],
                border: "none",
              },
              "& .MuiSwitch-thumb": {
                width: 24,
                height: 24,
              },
              "&.Mui-disabled": {
                "& + .MuiSwitch-track": {
                  backgroundColor: "#E7E8EB",
                  border: "none",
                },
              },
            },
            "&.Mui-disabled": {
              color: theme.palette.grey[500],
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.grey[200],
                borderColor: theme.palette.grey[800],
              },
            },
          },
          "& .MuiSwitch-thumb": {
            width: 16,
            height: 16,
          },
          "& .MuiSwitch-track": {
            border: "2px solid",
            borderColor: theme.palette.grey[500],
            borderRadius: 32 / 2,
            backgroundColor: theme.palette.grey[200],
            height: "auto",
          },
        },
        sizeSmall: {
          width: 39,
          height: 24,
          "& .MuiSwitch-switchBase": {
            margin: 0,
            "&.Mui-checked": {
              padding: 3,
              transform: "translateX(15px)",
              "& .MuiSwitch-thumb": {
                width: 18,
                height: 18,
              },
            },
          },
          "& .MuiSwitch-track": {
            borderRadius: 24 / 2,
          },
        },
      },
    },
  };
};

export default Switch;
