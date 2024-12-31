import React, { useState } from "react";
import {
  Typography,
  Button,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  Checkbox,
  MenuItem,
  Select,
  FormGroup,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div style={{ marginTop: "50px" }}>
      <Typography
        variant="h4"
        component={"h1"}
        sx={{ color: "skyblue", marginLeft: "60px" }}
      >
        Input Form
      </Typography>
      <TextField
        name="name"
        type="text"
        variant="filled"
        label="Your Name"
        sx={{ margin: "10px" }}
      />
      <TextField
        name="email"
        type="email"
        variant="filled"
        label="Your Email"
        sx={{ margin: "10px" }}
      />
      <br />

      <FormControl
        sx={{ m: 1, width: "25ch", margin: "10px" }}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        name="phone"
        type="number"
        variant="filled"
        label="Your Phone"
        sx={{ margin: "10px" }}
      />
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id="menu">Courses</InputLabel>
        <Select labelId="menu" id="menu-list" label="Courses">
          <MenuItem value={"React"}>React</MenuItem>
          <MenuItem value={"Node JS"}>Node JS</MenuItem>
          <MenuItem value={"Express"}>Express</MenuItem>
          <MenuItem value={"Mongodb"}>Mongodb</MenuItem>
        </Select>
      </FormControl>
      <br />
      <div>
        <Checkbox {...label} />{" "}
        <Typography sx={{ display: "inline" }}>
          I agree with the terms and condition
        </Typography>
        <FormGroup>
          <FormControlLabel
            label="checkbox"
            control={<Checkbox  />}
            // control={<Checkbox onChange={() =>setInputs(prevState => ({...prevState, terms:!inputs.terms}))} />}
            sx={{ margin: "5px" }}
          />
        </FormGroup>
        <FormControl sx={{ margin: "15px" }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup>
                <FormControlLabel
                value={"male"}
                label="Male"
                control={<Radio/>}
                />
                <FormControlLabel
                value={"female"}
                label="Female"
                control={<Radio/>}
                />
            </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        sx={{ margin: "10px", color: "cyan" }}
      >
        Send
      </Button>
    </div>
  );
};

export default Form;
