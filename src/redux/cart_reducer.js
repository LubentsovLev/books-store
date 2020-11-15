// import { commentsAPI, usersAPI } from "../api/api";

import { HarryPotter } from "../api/api";

const SET_CART_BOOKS = "CART/SET_CART_BOOKS";
const IS_FETCHING = "CART/IS_FETCHING";

let initialState = {
  cartBooks: [],
  isFetching: false,
};

const cartReducer = (state = initialState, action) => {
  let g = false;
  if (state.cartBooks.length > 0 && action["type"] === "CART/SET_CART_BOOKS") {
    for (let i = 0; i < state.cartBooks.length; i++) {
      let d = state.cartBooks[i].i.id;
      if (state.cartBooks[i].i.id === action.books.i.id) {
        const newObj = Object.assign(
          { count: state.cartBooks[i].count + 1 },
          state.cartBooks[i]
        );

        state.cartBooks[i] = newObj;
        state.cartBooks[i].count = isNaN(state.cartBooks[i].count)
          ? 2
          : state.cartBooks[i].count + 1;
        g = true;
      }
    }
  }
  switch (action.type) {
    case SET_CART_BOOKS: {
      // return { ...state, cartBooks: action.books };
      if (g === true) {
        return state;
      } else {
        return { ...state, cartBooks: [...state.cartBooks, action.books] };
      }
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setCartBooks = (books) => {
  return {
    type: SET_CART_BOOKS,
    books,
  };
};
export const setCartIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching,
  };
};
export const addCart = (books) => async (dispath) => {
  dispath(setCartIsFetching(true));
  dispath(setCartBooks(books));
  dispath(setCartIsFetching(false));
};

export default cartReducer;
