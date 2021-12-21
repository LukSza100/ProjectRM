import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectFilter = ({ handleSelectStatus, selectStatusFilter }) => {
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
            <MenuItem value={``}>All</MenuItem>
            <MenuItem value={`alive`}>Alive</MenuItem>
            <MenuItem value={`dead`}>Dead</MenuItem>
            <MenuItem value={`unknown`}>Unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectFilter;
