import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../../redux/cart_reducer";
import { ClearCart } from "../../redux/genius_reducer";
import { ButtonPlus } from "../common/ButtonPlus";
import Loader from "../common/loader";
import "./cart.css";
import CartCard from "./CartCard";
import FavoriteIcon from "@material-ui/icons/Favorite";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const Cart = (props) => {
  let inst = props.CartBooks;
  let dispatch = useDispatch();
  debugger;
  const checkout = useSelector((state) => state.genius.checkout);
  const isFetching = useSelector((state) => state.genius.isFetching);

  React.useEffect(() => {}, [checkout]);
  return (
    <div className="">
      {isFetching ? (
        <Loader></Loader>
      ) : (
        <div className="">
          {props.CartBooks.length > 0 ? (
            <div className="flexCenter">
              {checkout === false ? (
                <CartCard
                  AllthePr={props.AllthePr}
                  allThePrice={props.allThePrice}
                  i={inst}
                ></CartCard>
              ) : (
                <div className="flexCenterC">
                  <div className="">
                    <FavoriteIcon></FavoriteIcon>
                  </div>
                  <h3> Thank You for Order</h3>
                  <NavLink
                    to="/GameOfThrones"
                    activeClassName={"ln_active"}
                    onClick={() => {
                      dispatch(ClearCart());
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<KeyboardBackspaceIcon />}
                    >
                      Go back to check some
                    </Button>
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <div className="shopping__cart flexCenter ">
              <div id="app">
                <div className="grid flexCenter">
                  <div className="col-dx">
                    <div className="cart">
                      <div className="empty-contents">
                        <div className="draw">
                          <div className="cactus">
                            <div className="arm"></div>{" "}
                            <div className="arm"></div>
                          </div>
                          <div className="cactus">
                            <div className="arm"></div>{" "}
                            <div className="arm"></div>
                          </div>
                          <div className="cactus">
                            <div className="arm"></div>{" "}
                            <div className="arm"></div>
                          </div>
                          <div className="sky">
                            <div className="montain"></div>{" "}
                            <div className="montain two"></div>
                            <div className="sun"></div>
                          </div>
                        </div>
                        <p className="no-items-text">
                          Your cart is actually empty
                        </p>
                        <div className="flexCenter">
                          <NavLink
                            className="btn"
                            to="/HarryPotter"
                            activeClassName={"ln_active"}
                          >
                            <Button variant="contained">
                              Go and check some good stuff
                            </Button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Cart;
