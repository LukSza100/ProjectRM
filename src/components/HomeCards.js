import React from "react";
import HomeCard from "./HomeCard";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TimerIcon from "@mui/icons-material/Timer";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PersonIcon from "@mui/icons-material/Person";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import Grid from "@mui/material/Grid";

const HomeCards = () => {
  const cardsDetails = [
    {
      id: 1,
      title: "O mnie",
      path: "/aboutme",
      details: "Poznaj mnie troszkę bliżej",
      icon: <EmojiPeopleIcon color="warning" sx={{ fontSize: 60 }} />,
    },
    {
      id: 2,
      title: "Stoper",
      path: "/stopwatch",
      details: "Czaaaas... START !!!",
      icon: <TimerIcon color="warning" sx={{ fontSize: 60 }} />,
    },
    {
      id: 3,
      title: "Licznik",
      path: "/counter",
      details: "Dodaj lub odejmij",
      icon: <AvTimerIcon color="warning" sx={{ fontSize: 60 }} />,
    },
    {
      id: 4,
      title: "Lista postaci",
      path: "/characters",
      details: "z kreskówki Rick and Morty",
      icon: <PersonIcon color="warning" sx={{ fontSize: 60 }} />,
    },
    {
      id: 5,
      title: "Rejestracja",
      path: "/registration",
      details: "Zarejestruj się po więcej",
      icon: <QueuePlayNextIcon color="warning" sx={{ fontSize: 60 }} />,
    },
    {
      id: 6,
      title: "Logowanie",
      path: "/loginpage",
      details: "Przejdź do strony logowania",
      icon: <FollowTheSignsIcon color="warning" sx={{ fontSize: 60 }} />,
    },
  ];

  const allCards = cardsDetails.map(({ id, title, path, details, icon }) => (
    <HomeCard
      key={id}
      title={title}
      path={path}
      details={details}
      icon={icon}
    />
  ));

  return (
    <Grid container spacing={0}>
      {allCards}
    </Grid>
  );
};

export default HomeCards;
