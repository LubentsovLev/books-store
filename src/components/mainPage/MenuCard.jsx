import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
    height: 430,
    margin: 10,
    backgroundColor: "#000",
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
  title: {
    color: "#ffff64",
  },
  card: {},
});

export default function MainCard({ inst }, props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={inst.url}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={inst.song_art_image_url}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="h2">
          </Typography> */}
        <Typography gutterBottom variant="h6" component="h4">
          <a className={classes.title} href={inst.primary_artist.url}>
            {" "}
            {inst.primary_artist.name}
          </a>
        </Typography>
        <Typography
          className={classes.text}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {inst.full_title}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Button size="small" color="primary">
          <a href={inst.url}>To the lyrics</a>
        </Button> */}
      </CardActions>
    </Card>
  );
}
