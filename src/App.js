import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter } from "react-router-dom";
import store from "./redux/redux_store";
import Header from "./components/header/Header";
import FadeMenu from "./components/menu/Menu";

function App() {
  return (
    <div>
      <Header></Header>
      <FadeMenu></FadeMenu>
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
