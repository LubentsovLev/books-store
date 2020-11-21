import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import "./cart.css";

const CartContainer = () => {
  let dispatch = useDispatch();
  const CartBooks = useSelector((state) => state.cart.cartBooks);
  const [AllthePr, setAllthePr] = React.useState(true);
  let g = 0;
  let allThePrice = () => {
    for (let i = 0; i < CartBooks.length; i++) {
      let inst = CartBooks[i];
      let count;
      if (inst.count === undefined || inst.count === 0) {
        count = 1;
      } else {
        count = inst.count + 1;
      }
      g = g + inst.price * count;
      setAllthePr(g);
    }
    g = 0;
  };
  useEffect(() => {
    allThePrice();
  }, [CartBooks]);
  // setAllthePr(g);

  const isFetching = useSelector((state) => state.cart.isFetching);
  useEffect(() => {}, [CartBooks, isFetching]);
  console.log(AllthePr);
  return (
    <div>
      <Cart allThePrice={allThePrice} AllthePr={AllthePr} CartBooks={CartBooks} />
    </div>
  );
};
export default CartContainer;
