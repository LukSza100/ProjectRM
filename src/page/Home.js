import React from "react";
import HomeCards from "../components/HomeCards";
import styled from "styled-components";
import imgStart from "../images/R&M2start.png";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Description>"Morty, I'm a drunk, not a hack..."</Description>
        <Box
          className={classes.search}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Wpisz"
            color="primary"
            focused
            placeholder="Czego szukasz ..."
          />
        </Box>
        <Stack className={classes.btn} spacing={2} direction="column ">
          <Button variant="contained">Szukaj</Button>
        </Stack>
        <CardContainer>
          <HomeCards />
        </CardContainer>
      </Container>
    </>
  );
};

const useStyles = makeStyles({
  search: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${imgStart});
  background-position: center;
  background-size: cover;
  width: auto;
  height: 110vh;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10%;
  max-height: 20%;
  padding-top: 7%;
  width: 100%;
  font-size: 34px;
  font-weight: 700;
  color: #daa520;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 50px 0px;
  max-height: 30%;
`;

export default Home;
