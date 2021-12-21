import React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const SwitchFilter = () => {
  return (
    <>
      <Switch {...label} />
    </>
  );
};

export default SwitchFilter;
