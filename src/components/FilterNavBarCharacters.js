import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import SelectFilter from "./SelectFilter";
import SwitchFilter from "./SwitchFilter";

const FilterNavBarCharacters = ({
  pageData,
  page,
  prevPage,
  nextPage,
  handleSelectStatus,
  selectStatusFilter,
  handleSwitchStatus,
  switchStatusFilter,
}) => {
  return (
    <FilterNavBar>
      <Typography variant="h6" color="#f0f0f0">
        Strona: {page} z {pageData.pages}.
      </Typography>
      <Typography variant="h6" color="#f0f0f0">
        Dostępne postaci: {pageData.count}.
      </Typography>
      <ButtonPrev onClick={prevPage}>Prev</ButtonPrev>
      <ButtonNext onClick={nextPage}>Next</ButtonNext>
      <SelectFilterBox>
        <SelectFilter
          handleSelectStatus={handleSelectStatus}
          selectStatusFilter={selectStatusFilter}
        />
      </SelectFilterBox>
      <SwitchFilterBox>
          <SwitchFilter
            handleSwitchStatus={handleSwitchStatus}
            switchStatusFilter={switchStatusFilter}
          />
      </SwitchFilterBox>
    </FilterNavBar>
  );
};

export default FilterNavBarCharacters;

const FilterNavBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-color: #686256;
  background-position: center;
  background-size: cover;
  width: 98%;
  height: 10%;
  padding-left: 1%;
  border: 2px solid #c1502e;
`;

const ButtonNext = styled.button`
  position: absolute;
  left: 52%;
  width: 80px;
  height: 35px;
  font-size: 17px;
  background-color: #f2e394;
  color: #454140;
  border: 2px solid #454140;
  border-radius: 20%;
`;

const ButtonPrev = styled.button`
  position: absolute;
  left: 44%;
  width: 80px;
  height: 35px;
  font-size: 17px;
  background-color: #f2e394;
  color: #454140;
  border: 2px solid #454140;
  border-radius: 20%;
`;

const SelectFilterBox = styled.div`
  position: absolute;
  left: 80%;
`;

const SwitchFilterBox = styled.div`
  position: absolute;
  left: 90%;
`;
