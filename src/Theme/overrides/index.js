import MuiCard from "../mui/card";
import MuiButton from "../mui/button";
import MuiSwitch from "../mui/switch";
import MuiChip from "../mui/chips";
import MuiInput from "../mui/input";

const Overrides = (theme) => {
  const muiCard = MuiCard(theme);
  const muiButton = MuiButton(theme);
  const muiSwitch = MuiSwitch(theme);
  const muiChipButton = MuiChip(theme);
  const muiInput = MuiInput(theme);

  return Object.assign(muiCard, muiChipButton, muiButton, muiSwitch, muiInput);
};

export default Overrides;
