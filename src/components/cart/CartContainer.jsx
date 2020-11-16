import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import "./cart.css";

const CartContainer = () => {
  let dispatch = useDispatch();
  const CartBooks = useSelector((state) => state.cart.cartBooks);
  const isFetching = useSelector((state) => state.cart.isFetching);
  useEffect(() => {
  }, [CartBooks, isFetching]);
  return (
    <div>
      <Cart CartBooks={CartBooks} />
    </div>
  );
};
export default CartContainer;
