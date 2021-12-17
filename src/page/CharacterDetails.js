import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import imgTheme from "../../src/images/cosmosR&M.jpg";

const CharacterDetails = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((result) => {
        setCharacter(result.data.results);
        console.log(result.data.results);
      });
  }, []);

  if (!character) {
    return "Brak danych";
  }

  return (
    <Box>
      <Character>
        <Typography variant="h4" color="lightGray">
          {/* {name} */}
        </Typography>
      </Character>
      <Image> dfdf </Image>
      <CharacterInfo>
        <Typography variant="h4" color="lightGray">
          Spieces: ,mam lat.
        </Typography>
      </CharacterInfo>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

const Character = styled.div`
  position: relative;
  margin-left: 60%;
  padding-top: 65px;
  width: 32%;
  height: 20vh;
`;

const Image = styled.div`
  width: 35%;
  height: 100%;
  z-index: 1;
  margin-left: 5%;
  background-image: url(${imgTheme});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
`;

const CharacterInfo = styled.div`
  width: 50%;
  height: 20vh;
  margin-left: 50%;
`;

export default CharacterDetails;
