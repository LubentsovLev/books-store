import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { Badge } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCart, removeCart, deleteCart } from "../../redux/cart_reducer";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: " 0 auto",
    // minWidth: "320px",
    backgroundColor: "#d3d9ff",
    margin: "7px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: 400,
  },
  media: {
    height: 200,
    backgroundSize: "120px",
  },
  bottmomButs: {
    justifyContent: "space-between",
  },
  PM: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 100,
  },
  bucks: {
    fontSize: 25,
    fontWeight: 700,
  },
  Pls: {
    cursor: "pointer",
  },
  min: {
    textAlign: "center",
    maxWidth: 40,
    minWidth: "auto",
    paddingLeft: "20px",
  },
});

export default function CartCard(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  let inst = props.i;
  useEffect(() => {}, [props.i]);
  return (
    <div className="flexCenter">
      {inst.map((i) => {
        return (
          <Card className={classes.root}>
            <CardActionArea href={i.i.volumeInfo.infoLink}>
              <CardMedia
                className={classes.media}
                image={
                  i.i.volumeInfo.imageLinks
                    ? i.i.volumeInfo.imageLinks.thumbnail
                    : null
                }
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {i.i.volumeInfo.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.bucks}
                >
                  ${i.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottmomButs}>
              {/* <Button variant="contained" size="small" color="primary">
                Add one
              </Button> */}
              <div className={classes.PM}>
                <Badge
                  badgeContent={i.count === undefined ? 1 : i.count + 1}
                  color="secondary"
                  className={classes.Pls}
                >
                  <AddIcon
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                      dispatch(addCart(i));
                    }}
                  ></AddIcon>
                </Badge>
                {/* <RemoveIcon
                  variant="contained"
                  size="small"
                  color="secondary"
                  className={classes.Pls}
                  disabled={i.count}
                  onClick={() => {
                    dispatch(removeCart(i));
                  }}
                ></RemoveIcon> */}
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.min}
                  startIcon={<RemoveIcon />}
                  disabled={!i.count}
                  onClick={() => {
                    dispatch(removeCart(i));
                  }}
                ></Button>
              </div>
              {/* <Button variant="contained" size="small" color="primary">
                Delete one
              </Button> */}
              <Button
                onClick={() => {
                  dispatch(deleteCart(i));
                }}
                variant="contained"
                size="small"
                color="secondary"
              >
                <DeleteIcon></DeleteIcon> Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
