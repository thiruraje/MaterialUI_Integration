const Card = (theme) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[100],
          padding: 16,
          boxShadow: theme.shadows[2],
          "& .card-more-options": {
            marginTop: theme.spacing(-1),
            marginRight: theme.spacing(-3),
          },
        },
      },
    },
    //... we can customize the component styles
  };
};

export default Card;
