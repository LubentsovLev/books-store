// import { commentsAPI, usersAPI } from "../api/api";

import { AllBooksMenu, HarryPotter } from "../api/api";

const SET_BOOKS = "BOOKS/SET_BOOKS";
const IS_FETCHING = "BOOKS/IS_FETCHING";
const SET_MENU_TYPE = "BOOKS/SET_MENU_TYPE";
const SET_SEARCH = "BOOKS/SET_SEARCH";

let initialState = {
  books: [],
  isFetching: false,
  menuType: "",
  search: "",
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      return { ...state, books: action.books };
    }
    case SET_MENU_TYPE: {
      return { ...state, menuType: action.menuType };
    }
    case SET_SEARCH: {
      return { ...state, search: action.search };
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
export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    search,
  };
};
export const setMenuType = (menuType) => {
  return {
    type: SET_MENU_TYPE,
    menuType,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching,
  };
};
export const addBooks = (order, page, maxResults) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await HarryPotter.getHarryPotter(order, page, maxResults);
  dispath(setBooks(response.data.items));
  dispath(setIsFetching(false));
  dispath(setMenuType("HarryPotter"));
};
export const Pushkin = (order, page, maxResults) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await AllBooksMenu.Pushkin(order, page, maxResults);
  dispath(setBooks(response.data.items));
  dispath(setIsFetching(false));
  dispath(setMenuType("Pushkin"));
};
export const Shakespeare = (order, page, maxResults) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await AllBooksMenu.Shakespeare(order, page, maxResults);
  dispath(setBooks(response.data.items));
  dispath(setIsFetching(false));
  dispath(setMenuType("Shakespeare"));
};
export const GameOfThrones = (order, page, maxResults) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await AllBooksMenu.GameOfThrones(order, page, maxResults);
  dispath(setBooks(response.data.items));
  dispath(setIsFetching(false));
  dispath(setMenuType("GameOfThrones"));
};
export const Sherlock = (order, page, maxResults) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await AllBooksMenu.Sherlock(order, page, maxResults);
  dispath(setBooks(response.data.items));
  dispath(setIsFetching(false));
  dispath(setMenuType("Sherlock"));
};
export const Search = (arr, order, page, maxResults) => async (dispath) => {
  if (!arr === "") {
    dispath(setSearch(arr));
  }
  dispath(setIsFetching(true));
  let response = await AllBooksMenu.Search(arr, order, page, maxResults);
  dispath(setBooks(response.data.items));
  dispath(setIsFetching(false));
  dispath(setMenuType("Search"));
  dispath(setSearch(arr));
};

export default booksReducer;
