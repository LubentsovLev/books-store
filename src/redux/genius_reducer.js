import { Genius, sendMail } from "../api/api";
import { removeAllBooks } from "./cart_reducer";

const SET_LYRICS = "GENIUS/SET_LYRICS";
const IS_FETCHING = "GENIUS/IS_FETCHING";
const QUERY = "GENIUS/QUERY";
const CHECKOUT = "GENIUS/CHECKOUT";

let initialState = {
  lyrics: [],
  isFetching: false,
  query: "",
  checkout: false,
};

const geniusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LYRICS: {
      return { ...state, lyrics: action.lyrics };
    }
    case CHECKOUT: {
      return { ...state, checkout: action.checkout };
    }
    case QUERY: {
      return { ...state, query: action.query };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setLyrics = (lyrics) => {
  return {
    type: SET_LYRICS,
    lyrics,
  };
};
export const setCheckout = (checkout) => {
  return {
    type: CHECKOUT,
    checkout,
  };
};
export const setQuery = (query) => {
  return {
    type: QUERY,
    query,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching,
  };
};
export const addLyrics = (text) => async (dispath) => {
  dispath(setIsFetching(true));
  dispath(setQuery(text));
  let response = await Genius.getGenius(text);
  dispath(setLyrics(response.response));
  dispath(setCheckout(text));
  dispath(setIsFetching(false));
};
export const addCheckout = (City, Name, Postal_code, Email) => async (
  dispath
) => {
  dispath(setIsFetching(true));
  await sendMail
    .sendMail(City, Name, Postal_code, Email)
    .then(dispath(setCheckout({ City, Name, Postal_code, Email })))
    .then(dispath(setIsFetching(false)));
};
export const ClearCart = () => async (dispath) => {
  dispath(removeAllBooks([]));
  dispath(setCheckout(false));
};

export default geniusReducer;
