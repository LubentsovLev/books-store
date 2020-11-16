import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
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
const theme = unstable_createMuiStrictModeTheme();
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <header className="app__header">
          <Header></Header>
        </header>
        {/* <Loader></Loader> */}
        <div className="app__main">
          <Switch>
            {/* <Route
            exact
            path="/"
            render={() => <Redirect to={"/BooksContainer"} />}
          /> */}
            <Route path="/HarryPotter" render={() => <BooksContainer />} />
            <Route path="/Cart" render={() => <CartContainer />} />
          </Switch>
        </div>
        <footer>
          <StickyFooter></StickyFooter>
        </footer>
      </ThemeProvider>
    </div>
  );
}

const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
