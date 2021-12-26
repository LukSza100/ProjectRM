import React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

const SwitchFilter = ({ handleSwitchStatus, switchStatusFilter }) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          labelPlacement="end"
          control={
            <Switch
              color="primary"
              checked={switchStatusFilter}
              onChange={handleSwitchStatus}
            />
          }
          label="A - Z"
        />
      </FormGroup>
    </>
  );
};

export default SwitchFilter;
