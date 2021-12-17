import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const CharacterCard = ({ id, name, status, species, image }) => {
  const classes = useStyles();
  return (
    <Container>
      <Link className={classes.link} to={`/character/${name}/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: "#92a8d1" }}>{name[0]}</Avatar>}
            />
            <CardMedia
              component="img"
              height="160"
              image={image}
              alt={name}
            ></CardMedia>
            <CardContent>
              <Typography variant="h6" color="#bc5a45">
                {name.toUpperCase()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {species}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Container>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    minWidth: 250,
    maxeHight: 370,
    minHeight: 370,
    margin: 20,
    border: "3px solid #87bdd8",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  typography: {
    height: 40,
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
`;

export default CharacterCard;
