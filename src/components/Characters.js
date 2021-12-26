import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacetrCard";
import FilterNavBarCharacters from "./FilterNavBarCharacters";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [selectStatusFilter, setSelectStatusFilter] = useState("");
  const [switchStatusFilter, setSwitchStatusFilter] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&status=${selectStatusFilter}`
      )
      .then((results) => {
        setCharacters(results.data.results);
        setPageData(results.data.info);
      });
  }, [page, selectStatusFilter]);
  if (!characters) {
    return "Brak danych";
  }

  const handleChangePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleChangeNextPage = () => {
    if (pageData.next !== null) {
      setPage(page + 1);
    } else if (pageData.next === null) {
      setPage(pageData.pages.toString());
    }
  };

  const handleSelectStatus = (statusFilter) => {
    setPage(1);
    setSelectStatusFilter(statusFilter);
    setSwitchStatusFilter(false);
  };

  const handleSwitchStatus = () => {
    setSwitchStatusFilter((sort) => !sort);
    if (switchStatusFilter) {
      characters.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      characters.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
  };

  return (
    <>
      <Container>
        <FilterNavBarCharacters
          pageData={pageData}
          page={page}
          nextPage={handleChangeNextPage}
          prevPage={handleChangePrevPage}
          handleSelectStatus={handleSelectStatus}
          selectStatusFilter={selectStatusFilter}
          handleSwitchStatus={handleSwitchStatus}
          switchStatusFilter={switchStatusFilter}
        ></FilterNavBarCharacters>
        {characters.map(
          ({ id, name, status, species, image, result, page }) => (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              image={image}
              result={result}
              page={page}
            />
          )
        )}
      </Container>
    </>
  );
};

export default CharactersList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #454140;
  background-position: center;
  background-size: 100%;
  width: 100%;
  min-height: 100vh;
  padding-top: 45px;
`;
