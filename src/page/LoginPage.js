import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ThemePhoto from "../images/R&M2start.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {

  const [dataUser, setDataUser] = useState([]);
    const [form, setForm] = useState({
      name: "",
      lastName: "",
      email: "",
      password: "",
    });

    const inputValue = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const checkUser = () => {
      axios
        .get("http://localhost:3000/users")
        .then((results) => setDataUser(results.data))
      console.log(dataUser)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser();
  };

  return (
    <Container>
      <Title>
        <Typography variant="h4" color="#bd5734">
          Logowanie
        </Typography>
      </Title>
      <form onSubmit={handleSubmit}>
        <InputsBox>
          <TextField
            type="email"
            name="email"
            label="email"
            placeholder="email"
            onChange={inputValue}
          />
        </InputsBox>
        <InputsBox>
          <TextField
            type="password"
            name="password"
            label="Hasło"
            placeholder="Hasło"
            onChange={inputValue}
          />
        </InputsBox>
      </form>
      <ButtonBox>
        <Button onClick={handleSubmit} variant="contained" size="small">
          Zaloguj
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  background-image: url(${ThemePhoto});
  background-position: center;
  background-size: cover;
  width: auto;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 20%;
  padding-bottom: 2%;
`;

const InputsBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
  width: 100%;
  height: 10%;
`;

const ButtonBox = styled.div`
  width: 10%;
  height: 25%;
  position: relative;
  margin-left: 51%;
  margin-top: 30px;
`;
