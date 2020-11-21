import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import booksReducer from "./books_reducer";
import cartReducer from "./cart_reducer";
import geniusReducer from "./genius_reducer";
let reducers = combineReducers({
  form: formReducer,
  books: booksReducer,
  cart: cartReducer,
  genius: geniusReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
