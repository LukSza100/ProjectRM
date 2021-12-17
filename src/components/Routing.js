import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../page/Home";
import AboutMe from "../page/AboutMe";
import Stopwatch from "../page/Stopwatch";
import Counter from "../page/Counter";
import Characters from "./Characters";
import RegistrationPage from "../page/RegistrationPage";
import LoginPage from "../page/LoginPage";
import infoAboutMe from "../data/infoAboutMe";
import CharacterDetails from "../page/CharacterDetails";

const Routing = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/aboutme">
      <AboutMe infoAboutMe={infoAboutMe} />
    </Route>
    <Route path="/stopwatch">
      <Stopwatch />
    </Route>
    <Route path="/counter">
      <Counter />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/character/:name/:id" component={CharacterDetails} />
    <Route path="/registration">
      <RegistrationPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
  </Switch>
);

export default Routing;
