import "./App.css";
import ThemeComponent from "./Theme/ui_component";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function App() {
  const handleDelete = () => {};

  return (
    <ThemeComponent>
      <div className="container">
        <div className="title main">Material UI - Theme override</div>
        <div className="title">Typography</div>
        <div className="sub-container typography">
          <Typography variant="h1">h1: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
          <Typography variant="h2">h2: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
          <Typography variant="h3">h3: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
          <Typography variant="h4">h4: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
          <Typography variant="h5">h5: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
          <Typography variant="body1">body1: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
          <Typography variant="body2">body2: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
        </div>
        <div className="title">Button variants</div>
        <div className="sub-container">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className="title">Chips</div>
        <div className="sub-container">
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
          <Chip label="primary" color="primary" variant="outlined" />
          <Chip label="success" color="success" variant="outlined" />
          <Chip label="Clickable Deletable" onDelete={handleDelete} />
          <Chip label="Clickable Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        </div>
        <div className="title">Card</div>
        <div className="sub-container">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="title">Inputs</div>
        <div className="sub-container">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField error id="standard-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." variant="standard" />
        </div>
        <div className="title">Switch</div>
        <div className="sub-container">
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <FormControlLabel required control={<Switch />} label="Required" />
          <FormControlLabel required control={<Switch size="small" />} label="Small" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </div>
      </div>
    </ThemeComponent>
  );
}

export default App;
