import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const HomeCard = ({ title, path, details, icon }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link className={classes.link} to={path}>
        <CardActionArea>
          <CardMedia className={classes.cardMedia}>{icon}</CardMedia>
          <CardContent>
            <Typography
              sx={{ fontSize: 30 }}
              className={classes.typography}
              variant="body2"
            >
              {title}
            </Typography>
            <Typography
              className={classes.typography}
              variant="body2"
              color="text.secondary"
            >
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "black",
  },
  card: {
    maxWidth: 220,
    minWidth: 220,
    marginBottom: 20,
    margin: "auto",
    textAlign: "center",
    heigh: "auto",
  },
  cardMedia: {
    height: 50,
  },
  typography: {
    height: 40,
  },
});

export default HomeCard;
