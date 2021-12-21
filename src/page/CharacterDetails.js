import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Avatar from "@mui/material/Avatar";

const CharacterDetails = () => {
  const classes = useStyles();
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((result) => {
        setCharacter(result.data);
        console.log(result.data);
      });
  }, []);

  return (
    <>
      <ButtonBox>
        <Link className={classes.link} to={"/characters"}>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            startIcon={<KeyboardBackspaceIcon />}
          >
            Wróć
          </Button>
        </Link>
      </ButtonBox>
      <Box>
        <Character>
          <Typography variant="h2" color="#bd5734">
            {character.name}
          </Typography>
        </Character>
        <Avatar
          className={classes.avatar}
          alt={character.name}
          src={character.image}
          sx={{
            width: 400,
            height: 400,
            marginBottom: "40px",
          }}
        />
        <CharacterInfo>
          <Typography variant="h4" color="#fbefcc">
            STATUS: {character.status},
          </Typography>
          <Typography variant="h4" color="#fbefcc">
            SPECIES: {character.species},
          </Typography>
          <Typography variant="h4" color="#fbefcc">
            GENDER: {character.gender}.
          </Typography>
        </CharacterInfo>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  button: {
    positon: "fixed",
  },
});

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  height: 20vh;
  margin-left: 20px;
  background-color: #454140;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
  background-color: #454140;
`;

const Character = styled.div`
  z-index: 1;
`;

const CharacterInfo = styled.div`
  z-index: 1;
`;

export default CharacterDetails;
