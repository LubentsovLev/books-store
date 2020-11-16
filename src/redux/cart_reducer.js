// import { commentsAPI, usersAPI } from "../api/api";

import { HarryPotter } from "../api/api";

const SET_CART_BOOKS = "CART/SET_CART_BOOKS";
const REMOVE_CART_BOOKS = "CART/REMOVE_CART_BOOKS";
const DELETE_CART_BOOKS = "CART/DELETE_CART_BOOKS";
const IS_FETCHING = "CART/IS_FETCHING";

let initialState = {
  cartBooks: [],
  isFetching: false,
};

const cartReducer = (state = initialState, action) => {
  let CHFirst = false;
  let addToCart = () => {
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
        CHFirst = true;
      }
    }
  };
  let removeFromCart = () => {
    for (let i = 0; i < state.cartBooks.length; i++) {
      let d = state.cartBooks[i].i.id;
      if (state.cartBooks[i].i.id === action.books.i.id) {
        const newObj = Object.assign(
          { count: state.cartBooks[i].count - 1 },
          state.cartBooks[i]
        );

        state.cartBooks[i] = newObj;
        state.cartBooks[i].count =
          state.cartBooks[i].count <= 0 ? 0 : state.cartBooks[i].count - 1;
      }
    }
  };
  let deleteFromCart = () => {
    for (let i = 0; state.cartBooks.length; i++) {
      if (state.cartBooks[i].i.id === action.books.i.id) {
        state.cartBooks.splice(i, 1);
        break;
      }
    }
  };
  if (state.cartBooks.length > 0 && action["type"] === "CART/SET_CART_BOOKS") {
    addToCart();
  }
  if (action["type"] === "CART/REMOVE_CART_BOOKS") {
    removeFromCart();
  }
  if (action["type"] === "CART/DELETE_CART_BOOKS") {
    deleteFromCart();
  }
  switch (action.type) {
    case SET_CART_BOOKS: {
      // return { ...state, cartBooks: action.books };
      if (CHFirst === true) {
        return state;
      } else {
        return { ...state, cartBooks: [...state.cartBooks, action.books] };
      }
    }
    case REMOVE_CART_BOOKS: {
      return { ...state, cartBooks: [...state.cartBooks] };
    }
    case DELETE_CART_BOOKS: {
      return { ...state, cartBooks: [...state.cartBooks] };
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
export const removeCartBooks = (books) => {
  return {
    type: REMOVE_CART_BOOKS,
    books,
  };
};
export const deleteCartBooks = (books) => {
  return {
    type: DELETE_CART_BOOKS,
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
export const removeCart = (books) => async (dispath) => {
  dispath(setCartIsFetching(true));
  dispath(removeCartBooks(books));
  dispath(setCartIsFetching(false));
};
export const deleteCart = (books) => async (dispath) => {
  dispath(setCartIsFetching(true));
  dispath(deleteCartBooks(books));
  dispath(setCartIsFetching(false));
};
export default cartReducer;
