import { ThemeProvider, createTheme } from "@mui/material/styles";
import Palette from "./palette";
import Overrides from "./overrides";
import Typography from "./typography";

const ThemeComponent = (props) => {
  const { children } = props;
  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme({
    palette: Palette(),
  });
  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    mixins: {},
    components: { ...Overrides(theme) },
    typography: { ...Typography(theme) },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeComponent;
