import React from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isValue, setIsValue] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setIsValue(event.target.value);
  };

  const onMbPlan = () => {
    navigate("/e-sales/mobileplan")
  }

  const onIntPlan = () => {
    navigate("/e-sales/internetplan")
  }

  return (
    <div className="dashboardcontainer">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" className="dashboardtext">DashBoard</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={isValue}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10} onClick={() => onMbPlan()}>Mobile Plans</MenuItem>
          <MenuItem value={20} onClick={() => onIntPlan()}>Internet Plans</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Navbar;
