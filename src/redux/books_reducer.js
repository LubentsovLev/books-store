// import { commentsAPI, usersAPI } from "../api/api";

const SET_BOOKS = "BOOKS/SET_BOOKS";
const IS_FETCHING = "BOOKS/IS_FETCHING";

let initialState = {
  books: [],
  isFetching: false,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      return { ...state, books: action.books };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching,
  };
};
export const sendComments = (books) => async (dispath) => {
  dispath(setIsFetching(true));
  dispath(setBooks([1]));
  dispath(setIsFetching(false));
};

export default booksReducer;
