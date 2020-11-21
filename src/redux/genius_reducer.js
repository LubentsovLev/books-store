import { Genius } from "../api/api";

const SET_LYRICS = "GENIUS/SET_LYRICS";
const IS_FETCHING = "GENIUS/IS_FETCHING";
const QUERY = "GENIUS/QUERY";

let initialState = {
  lyrics: [],
  isFetching: false,
  query: "",
};

const geniusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LYRICS: {
      return { ...state, lyrics: action.lyrics };
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
  dispath(setIsFetching(false));
};

export default geniusReducer;
