import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Panel from "../panel/Panel";
import { NavLink, Redirect } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Input } from "@material-ui/core";
import { AllBooksMenu } from "../../api/api";
import { Search } from "../../redux/books_reducer";
import s from "./header.module.css";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const Header = (props) => {
  const useStyles = makeStyles((theme) => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      zIndex: 1000,
      // pointerEvents: "none",
      cursor: "pointer",
      paddingRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      // color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    root: {
      //   flexGrow: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      maxWidth: "300px",
      fontSize: "14px",
      minWidth: "80px",
    },
    hI: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cart: {
      color: "#fff",
    },
    searchInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
    },
    mainHeader: {
      backgroundColor: "#4a6498",
    },
  }));
  const classes = useStyles();
  const CartBooks = useSelector((state) => state.cart.cartBooks);
  let dispatch = useDispatch();
  const [touched, settouched] = React.useState(true);
  const [Inblur, setInblur] = React.useState(false);
  const [red, setred] = React.useState(false);
  const SearchInput = React.useRef(null);
  React.useEffect(() => {
    const onKeypress = (e) => {
      if (e.key === "Enter" && Inblur) {
        handleSearch();
      }
    };
    document.addEventListener("keypress", onKeypress);
  }, [Inblur]);
  const handleSearch = (event) => {
    if (SearchInput.current.firstChild.value) {
      // SearchInput.current.firstChild.autofocus
      SearchInput.current.firstChild.value =
        SearchInput.current.firstChild.value.length > 20
          ? SearchInput.current.firstChild.value.slice(0, 20)
          : SearchInput.current.firstChild.value;
      dispatch(Search(SearchInput.current.firstChild.value));
      SearchInput.current.firstChild.value = "";
      setred(true);
    } else {
      settouched(false);
    }
    // dispatch(Search(SearchInput.current.firstChild.value));
  };
  let CHTouched = (event) => {
    if (event.target.dataset.value === "") {
      settouched(false);
    } else {
      settouched(true);
    }
  };
  return (
    <div className={classes.root}>
      {red ? <Redirect from="/Cart" to="/Search" /> : null}
      <HideOnScroll {...props}>
        <AppBar className={classes.mainHeader}>
          <Toolbar className={classes.root}>
            <div className={classes.hI}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <Panel loc={props.loc}></Panel>
              </IconButton>
              <Typography variant="h6">
                <span className={s.title}>Books shop</span>
              </Typography>
            </div>
            <div className={classes.hI}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <NavLink
                    className={classes.searchInner}
                    to="/Search"
                    activeClassName={"ln_active"}
                  >
                    <SearchIcon
                      onClick={() => {
                        handleSearch();
                      }}
                    />
                  </NavLink>
                </div>
                <Input
                  placeholder="Search…"
                  ref={SearchInput}
                  onClick={() => {
                    setInblur(true);
                  }}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={CHTouched}
                  // color={touched ? "secondary" : "primary"}
                  error={!touched}
                ></Input>
                {/* <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={CHTouched}
                  color={touched ? 'secondary' : 'primary'}
                  error={true}
                  inputProps={{ "aria-label": "search" }}
                /> */}
              </div>
              <NavLink
                className={classes.ln}
                to="/Cart"
                activeClassName={"ln_active"}
              >
                <Button className={classes.cart} color="default">
                  <Badge badgeContent={CartBooks.length} color="secondary">
                    <ShoppingCartIcon></ShoppingCartIcon>
                  </Badge>
                </Button>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
export default Header;
