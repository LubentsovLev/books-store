import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FadeMenu from "../menu/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cart_reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    minWidth: 320,
    minHeight: "670px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: "84.25%",
    minHeight: "100px",
    backgroundSize: "160px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  auth: {
    marginRight: "10px",
  },
  desc: {
    fontSize: "12px",
  },
}));

export default function Book(props) {
  let dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let inst = props.i.volumeInfo;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
            <FadeMenu></FadeMenu>
          </IconButton>
        }
        title={inst.title}
        subheader={inst.subtitle}
      />
      <CardMedia
        className={classes.media}
        image={inst.imageLinks.thumbnail}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>
            <b> {inst.authors.length > 1 ? "authors" : "author"} :</b>
            {inst.authors.map((i) => {
              return <span className={classes.auth + ";"}>{i}</span>;
            })}
          </p>
          <p>
            <b>Count of pages :</b> {inst.pageCount}
          </p>
          <p>
            <b>Language :</b> {inst.language}
          </p>
          <p>
            <b>Published Date :</b> {inst.publishedDate}
          </p>

          <p>
            <Link color="secondary" href={inst.infoLink}>
              see more info about
            </Link>
          </p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
          <ShoppingCartIcon
            onClick={() => {
              dispatch(addCart(props));
            }}
          />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {inst.description ? <ExpandMoreIcon /> : null}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <b>About the book</b>
          </Typography>
          <Typography className={classes.desc} paragraph>
            {inst.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
