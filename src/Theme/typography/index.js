const Typography = (theme) => {
  return {
    h1: {
      fontSize: 30,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "42px",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: 24,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "33.6px",
      letterSpacing: "0px !important",
    },
    h3: {
      fontSize: 20,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "28px",
    },
    h4: {
      fontSize: 16,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "24px",
    },
    h5: {
      fontSize: 16,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "24px",
      letterSpacing: "0.18px",
    },
    body1: {
      fontSize: 14,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "22px",
      wordBreak: "break-word",
    },
    body2: {
      fontSize: 12,
      fontFamily: "Lato Regular, sans-serif",
      lineHeight: "20px",
    },
    button: {
      fontSize: 14,
      fontWeight: "medium",
      textTransform: "none",
      lineHeight: "22px",
      letterSpacing: "0.5px",
      fontFamily: "Lato Regular, sans-serif",
    },
  };
};

export default Typography;
