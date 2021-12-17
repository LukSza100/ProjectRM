import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ThemePhoto from "../images/R&M2start.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegistrationPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/users', form)
   .then((response) => console.log(response))
   .catch(error=> console.log(error))
    }


  return (
    <RegistrationPageContain>
      <Title>
        <Typography variant="h4" color="#bd5734">
          Rejestracja
        </Typography>
      </Title>
      <form onSubmit={handleSubmit}>
        <InputsBox>
          <TextField
            type="text"
            name="name"
            placeholder="Imię"
            onChange={inputValue}
          />
        </InputsBox>
        <InputsBox>
          <TextField
            type="text"
            name="lastName"
            placeholder="Nazwisko"
            onChange={inputValue}
          />
        </InputsBox>
        <InputsBox>
          <TextField
            type="email"
            name="email"
            placeholder="email"
            onChange={inputValue}
          />
        </InputsBox>
        <InputsBox>
          <TextField
            type="password"
            name="password"
            placeholder="Hasło"
            onChange={inputValue}
          />
        </InputsBox>
      </form>
      <ButtonBox>
        <Button onClick={handleSubmit} variant="contained" size="small">
          Zarejestruj
        </Button>
      </ButtonBox>
    </RegistrationPageContain>
  );
};

export default RegistrationPage;

const RegistrationPageContain = styled.div`
  background-image: url(${ThemePhoto});
  background-position: center;
  background-size: cover;
  width: 100%;
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
  margin-left: 55%;
  margin-top: 30px;
`;
