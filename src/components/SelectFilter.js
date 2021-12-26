import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import selectItem from "../data/selectItem";

const SelectFilter = ({ handleSelectStatus, selectStatusFilter }) => {
  const item = selectItem.map((item) => (
    <MenuItem key={item.id} value={item.value}>
      {item.description}
    </MenuItem>
  ));
  return (
    <>
      <Box sx={{ minWidth: 100, minHeight: 30 }}>
        <FormControl fullWidth>
          <InputLabel id="status-character">STATUS</InputLabel>
          <Select
            labelId="status-character"
            id="status-character"
            color="warning"
            value={selectStatusFilter}
            label="Status"
            onChange={(e) => handleSelectStatus(e.target.value)}
          >
            {item}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectFilter;
