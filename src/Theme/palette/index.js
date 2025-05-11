import "../../styles/_colors.css";

const DefaultPalette = () => {
  return {
    customColors: {
      accentGreenDefault: `var(--accentGreenDefault)`,
      accentGreen: `var(--accentGreen)`,
      accentLightGreen: `var(--accentLightGreen)`,
      accentDarkGreen: `var(--accentDarkGreen)`,
      accentBlue: `var(--accentBlue)`,
      error: `var(--error)`,
      status: {
        completed: `var(--status-completed)`,
        readyForReview: `var(--status-readyForReview)`,
        new: `var(--status-new)`,
        followUp: `var(--status-followUp)`,
      },

      role: {
        preparer: `var(--yellow)`,
        reviewer: `var(--purple)`,
        manager: `var(--blue)`,
        partner: `var(--lightBlue)`,
        default: `var(--darkBlue)`,
      },
    },
    primary: {
      50: `var(--primary-50)`,
      150: `var(--primary-150)`,
      100: `var(--primary-100)`,
      200: `var(--primary-200)`,
      300: `var(--primary-300)`,
      400: `var(--primary-400)`,
      500: "#263F7B",
      700: `var(--primary-700)`,
      800: `var(--primary-800)`,
    },
    success: {
      main: "#36B23B",
      100: `var(--accentGreenLight)`,
    },
    error: {
      main: "#B3261E",
    },
    warning: {
      main: "#F4972B",
      100: `var(--accentBlueLight)`,
    },
    grey: {
      100: `var(--grey-100)`,
      200: `var(--grey-200)`,
      300: "#C3C6CC",
      500: `var(--grey-500)`,
      600: `var(--grey-600)`,
      800: `var(--grey-800)`,
    },
    common: {
      black: `var(--common-black)`,
      white: `var(--common-white)`,
    },
  };
};

export default DefaultPalette;
