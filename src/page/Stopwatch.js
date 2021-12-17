import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imgRM from "../images/R&M1.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StartIcon from "@mui/icons-material/PlayCircleFilled";
import StopIcon from "@mui/icons-material/Stop";

const Stopwatch = ({ defaultValue = 0 }) => {
  const [time, setTime] = useState(defaultValue);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevValue) => prevValue + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  const startTime = () => {
    setStart(true);
  };

  const stopTime = () => {
    setStart(false);
  };

  const reset = () => {
    setTime(defaultValue);
    setStart(false);
  };

  const milliseconds = ("0" + ((time / 10) % 1000)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor((time / 36000000) % 60)).slice(-2);

  return (
    <Box>
      <StopwatchContain>
        <BoxField>
          <StopwatchField>{hours}</StopwatchField>
          <StopwatchField>{minutes}</StopwatchField>
          <StopwatchField>{seconds}</StopwatchField>
          <StopwatchField>{milliseconds}</StopwatchField>
        </BoxField>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            size="small"
            color="success"
            startIcon={<StartIcon />}
            onClick={startTime}
          >
            Start
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            startIcon={<StopIcon />}
            onClick={stopTime}
          >
            Stop
          </Button>
          <Button variant="contained" size="small" onClick={reset}>
            Resetuj
          </Button>
        </Stack>
      </StopwatchContain>
    </Box>
  );
};

export default Stopwatch;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${imgRM});
  background-position: center;
  background-size: cover;
`;

const StopwatchContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 150px;
  position: relative;
  margin-top: 200px;
  margin-left: 20%;
`;

const BoxField = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  height: 50px;
  color: white;
`;

const StopwatchField = styled.div`
  width: 50px;
  height: 40px;
  font-size: 35px;
  border: 3px solid #66ccff;
  border-radius: 5%;
`;
