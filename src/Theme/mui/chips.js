const ChipButton = (theme) => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          height: "28px",
          fontSize: "12px",
          padding: "4px 8px",
          borderRadius: "4px",
          border: "1px solid",
          fontFamily: "'Lato Regular', sans-serif",
        },
        icon: {
          fontSize: "18px",
        },
        deleteIcon: {
          fontSize: "18px",
          fontWeight: "bold",
        },
        //code for filled chip button
        //label, icon and delete color should be the same
        filledPrimary: {
          backgroundColor: theme.palette.primary[100],
          borderColor: theme.palette.primary[100],
          color: theme.palette.primary[500],
          "&:hover": {
            backgroundColor: theme.palette.primary[100],
          },
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.primary[500],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.primary[500],
            },
          },
        },
        //color code is not correctly mentioned for this button, once added in figma I will replace it
        filledSuccess: {
          backgroundColor: theme.palette.success[100],
          borderColor: theme.palette.success[100],
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.grey[800],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.grey[800],
            },
          },
        },
        filledInfo: {
          backgroundColor: theme.palette.warning[100],
          borderColor: theme.palette.warning[100],
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: "#354D6F",
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
        },
        //color code is not correctly mentioned for this button, once added in figma I will replace it
        filledWarning: {
          backgroundColor: theme.palette.warning[100],
          borderColor: theme.palette.warning[100],
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.grey[800],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.grey[800],
            },
          },
        },
        filledError: {
          backgroundColor: theme.palette.grey[100],
          // borderColor: theme.palette.grey[500],
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.grey[800],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.grey[800],
            },
          },
        },
        //code for filled chip button
        //label, icon and delete color should be the same
        outlinedPrimary: {
          borderColor: theme.palette.primary[300],
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.primary[500],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.primary[500],
            },
          },
        },
        //color code is not correctly mentioned for this button, once added in figma I will replace it
        outlinedSuccess: {
          borderColor: theme.palette.customColors.accentGreen,
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.grey[800],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.grey[800],
            },
          },
        },
        //color code is not correctly mentioned for this button, once added in figma I will replace it
        outlinedWarning: {
          borderColor: theme.palette.customColors.accentBlue,
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.grey[800],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.grey[800],
            },
          },
        },
        outlinedError: {
          borderColor: theme.palette.grey[500],
          "& .MuiChip-deleteIcon, .MuiChip-icon, .MuiChip-label": {
            color: theme.palette.grey[800],
          },
          "& .percentageRange": {
            fontWeight: "bold",
          },
          "& .MuiChip-deleteIcon": {
            "&:hover": {
              color: theme.palette.grey[800],
            },
          },
        },
      },
    },
  };
};

export default ChipButton;
