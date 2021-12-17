import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ThemePhoto from "../images/cosmosR&M.jpg";
import CharacterCard from "./CharacetrCard";

const CharactersList = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((result) => {
      console.log(result.data);
      setCharacters(result.data.results);
    });
  }, []);

  if (!characters) {
    return "Brak danych";
  }

  return (
    <Container>
      {characters.map(({ id, name, status, species, image }) => (
        <CharacterCard
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          image={image}
        />
      ))}
    </Container>
  );
};

export default CharactersList;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${ThemePhoto});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
  padding-top: 100px;
`;
