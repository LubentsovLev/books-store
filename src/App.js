import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import store from "./redux/redux_store";
import Header from "./components/header/Header";
import FadeMenu from "./components/menu/Menu";
import Loader from "./components/common/loader";
import BooksContainer from "./components/books/BooksContainer";
import Cart from "./components/cart/Cart.jsx";
import CartContainer from "./components/cart/CartContainer.jsx";
import StickyFooter from "./components/common/material_tp/M_footer.jsx";
import { Theaters } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
import { Main } from "./components/mainPage/main";
import { useEffect } from "react";
import { setMenuType } from "./redux/books_reducer";
const theme = unstable_createMuiStrictModeTheme();
function App(props) {
  // debugger;
  let dispath = useDispatch();
  const menuType = useSelector((state) => state.books.menuType);
  let loc = props.location.pathname.slice(1, props.location.pathname.length);
  useEffect(() => {
    console.log("renderApp", loc);
    if (loc === "") {
      dispath(setMenuType("HarryPotter"));
    } else {
      dispath(setMenuType(loc));
    }
    // dispath(setMenuType(loc));
  }, [props.location.pathname]);
  useEffect(() => {}, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <header className="app__header">
          <Header loc={loc}></Header>
        </header>
        {/* <Loader></Loader> */}
        <div className="app__main">
          <Switch>
            {/* <Route
            exact
            path="/"
            render={() => <Redirect to={"/BooksContainer"} />}
          /> */}
            <Route exact path="/" render={() => <BooksContainer loc={loc} />} />
            <Route path="/Main" render={() => <Main />} />
            <Route path="/HarryPotter" render={() => <BooksContainer loc={loc} />} />
            <Route path="/Pushkin" render={() => <BooksContainer loc={loc} />} />
            <Route path="/Shakespeare" render={() => <BooksContainer loc={loc} />} />
            <Route path="/GameOfThrones" render={() => <BooksContainer loc={loc} />} />
            <Route path="/Sherlock" render={() => <BooksContainer  loc={loc}/>} />
            <Route path="/Search" render={() => <BooksContainer loc={loc} />} />
            <Route path="/Cart" render={() => <CartContainer />} />
            <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
        <footer>
          <StickyFooter></StickyFooter>
        </footer>
      </ThemeProvider>
    </div>
  );
}


let WrappedApp = withRouter(App);
const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
