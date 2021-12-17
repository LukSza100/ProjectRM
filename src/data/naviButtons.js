import React from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TimerIcon from "@mui/icons-material/Timer";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PersonIcon from "@mui/icons-material/Person";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";

const naviButtons = [
  { name: "O mnie", path: "/aboutme", icon: <EmojiPeopleIcon /> },
  { name: "Stoper", path: "/stopwatch", icon: <TimerIcon /> },
  { name: "Licznik", path: "/counter", icon: <AvTimerIcon /> },
  { name: "Lista postaci", path: "/characters", icon: <PersonIcon /> },
  { name: "Rejestracja", path: "/registration", icon: <QueuePlayNextIcon /> },
  { name: "Logowanie", path: "/login", icon: <FollowTheSignsIcon /> },
];

export default naviButtons;
