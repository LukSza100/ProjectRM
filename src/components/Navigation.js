import React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import naviButtons from "../data/naviButtons";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

const Navigation = () => {
  const useStyles = makeStyles({
    navLink: {
      textDecoration: "none",
    },
    active: {
      backgroundColor: "#daebe8",
    },
  });

  const classes = useStyles();

  const buttons = naviButtons.map((button) => (
    <NavLink className={classes.navLink} key={button.name} to={button.path}>
      <Button variant="contained" endIcon={button.icon}>
        {button.name}
      </Button>
    </NavLink>
  ));

  return (
    <NavBar>
      <Link exact to="/">
        <Logo />
      </Link>
      <NaviButtons>{buttons}</NaviButtons>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-left: 5%;
  width: 95%;
  justify-content: space-between;
  border: 1px solid #b2b2b2;
`;

const NaviButtons = styled.div``;

export default Navigation;
