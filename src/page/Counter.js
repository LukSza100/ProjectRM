import React, { useState } from "react";
import styled from "styled-components";
import imgRM from "../images/R&M1.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = ({ defaultValue = 0 }) => {
  const [count, setCount] = useState(defaultValue);

  const add = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(defaultValue);
  };

  const substract = () => {
    setCount(count - 1);
  };

  const result =
    count % 5 === 0 && count !== 0 ? (
      <ResultModulo>{count}</ResultModulo>
    ) : (
      <Result>{count}</Result>
    );

  return (
    <Box>
      <CounterContain>
        <CounterField>{result}</CounterField>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<AddIcon />}
            onClick={add}
          >
            Dodaj
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<RemoveIcon />}
            onClick={substract}
          >
            Odejmij
          </Button>
          <Button variant="contained" size="small" onClick={reset}>
            Resetuj
          </Button>
        </Stack>
      </CounterContain>
    </Box>
  );
};

export default Counter;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${imgRM});
  background-position: center;
  background-size: cover;
`;

const CounterContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 150px;
  position: relative;
  margin-top: 200px;
  margin-left: 20%;
`;

const CounterField = styled.div`
  width: 200px;
  height: 30px;
  font-size: 25px;
  border: 3px solid #66ccff;
  border-radius: 5%;
`;

const Result = styled.div`
  color: white;
`;

const ResultModulo = styled.div`
  color: green;
`;
