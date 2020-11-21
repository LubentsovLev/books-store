import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import BrushIcon from "@material-ui/icons/Brush";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {
  addBooks,
  Pushkin,
  Shakespeare,
  GameOfThrones,
  Sherlock,
  setMenuType,
} from "../../redux/books_reducer";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ln: {
    color: "#3f51b5",
    textDecoration: "none",
  },
  menuMain: {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
    flexDirection: "column",
  },
  gen : {
    width : 25
  }
});

export default function Panel(props) {
  const menuType = useSelector((state) => state.books.menuType);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        <ListItem button key="Starred">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
      </List>
      <Divider /> */}
      <div className={classes.menuMain}>
        <div className={classes.items}>
          <List>
            {/* <NavLink
              className={classes.ln}
              to="/HarryPotter"
              activeClassName={"ln_active"}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <FlashOnIcon color="primary"></FlashOnIcon>
                </ListItemIcon>
                <ListItemText primary="Harry Potter" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              className={classes.ln}
              to="/New"
              activeClassName={"ln_active"}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <NewReleasesIcon color="primary"></NewReleasesIcon>
                </ListItemIcon>
                <ListItemText primary=" Новинки" />
              </ListItem>
            </NavLink>
            <Divider /> */}
            {/* <NavLink
              className={classes.ln}
              to="/Top"
              activeClassName={"ln_active"}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <FavoriteIcon color="secondary"></FavoriteIcon>
                </ListItemIcon>
                <ListItemText color="secondary" primary="Топ книг" />
              </ListItem>
            </NavLink> 
                        <Divider />
            */}
            <NavLink
              className={classes.ln}
              to="/Main"
              activeClassName={"ln_active"}
              // onClick={() => {
              //   dispatch(addBooks());
              // }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  {/* <HomeIcon color="primary">
                    
                  </HomeIcon> */}
                  <img
                    className={classes.gen}
                    src="https://savemusic.me/uploads/cover/artist/ffd9392b39d6af001961cb83ba4a2fd5.jpg"
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText primary="Check for some lyrics" />
              </ListItem>
            </NavLink>
            <NavLink
              className={classes.ln}
              to="/HarryPotter"
              activeClassName={"ln_active"}
              onClick={() => {
                dispatch(addBooks());
                // dispatch(setMenuType(props.loc));
              }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <FlashOnIcon color="primary"></FlashOnIcon>
                </ListItemIcon>
                <ListItemText primary="Harry Potter" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              className={classes.ln}
              to="/Pushkin"
              activeClassName={"ln_active"}
              onClick={() => {
                dispatch(Pushkin());
              }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <BrushIcon color="primary"></BrushIcon>
                </ListItemIcon>
                <ListItemText primary="Pushkin" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              className={classes.ln}
              to="/Shakespeare"
              activeClassName={"ln_active"}
              onClick={() => {
                dispatch(Shakespeare());
              }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <FavoriteIcon color="secondary"></FavoriteIcon>
                </ListItemIcon>
                <ListItemText primary="Shakespeare" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              className={classes.ln}
              to="/GameOfThrones"
              activeClassName={"ln_active"}
              onClick={() => {
                dispatch(GameOfThrones());
              }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <WhatshotIcon color="secondary"></WhatshotIcon>
                </ListItemIcon>
                <ListItemText primary="Game of thrones" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink
              className={classes.ln}
              to="/Sherlock"
              activeClassName={"ln_active"}
              onClick={() => {
                dispatch(Sherlock());
              }}
            >
              <ListItem button key="Starred">
                <ListItemIcon>
                  <SearchIcon></SearchIcon>
                </ListItemIcon>
                <ListItemText primary="Sherlock" />
              </ListItem>
            </NavLink>
            <Divider />
          </List>
        </div>
        <div className={classes.cart}>
          <Divider />
          <NavLink
            className={classes.ln}
            to="/Cart"
            activeClassName={"ln_active"}
          >
            <ListItem button key="Starred">
              <ListItemIcon>
                <ShoppingCartIcon color="primary"></ShoppingCartIcon>
              </ListItemIcon>
              <ListItemText primary="Go to cart" />
            </ListItem>
          </NavLink>
          <Divider />
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.menu}>
      <MenuIcon onClick={toggleDrawer("left", true)} />
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
