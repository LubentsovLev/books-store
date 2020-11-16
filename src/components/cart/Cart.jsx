import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../../redux/cart_reducer";
import { ButtonPlus } from "../common/ButtonPlus";
import "./cart.css";
import CartCard from "./CartCard";
const Cart = (props) => {
  let inst = props.CartBooks;
  let dispatch = useDispatch();
  return (
    <div className="">
      {props.CartBooks.length > 0 ? (
        <div className="flexCenter">
          <CartCard i={inst}></CartCard>
        </div>
      ) : (
        <div className="shopping__cart flexCenter ">
          <div id="app">
            <div class="grid flexCenter">
              <div class="col-dx">
                <div class="cart">
                  <div class="empty-contents">
                    <div class="draw">
                      <div class="cactus">
                        <div class="arm"></div> <div class="arm"></div>
                      </div>
                      <div class="cactus">
                        <div class="arm"></div> <div class="arm"></div>
                      </div>
                      <div class="cactus">
                        <div class="arm"></div> <div class="arm"></div>
                      </div>
                      <div class="sky">
                        <div class="montain"></div>{" "}
                        <div class="montain two"></div>
                        <div class="sun"></div>
                      </div>
                    </div>
                    <p class="no-items-text">Your cart is actually empty</p>
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
  );
};
export default Cart;
