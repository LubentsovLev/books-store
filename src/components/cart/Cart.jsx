import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../../redux/cart_reducer";
import { ButtonPlus } from "../common/ButtonPlus";
import "./cart.css";
const Cart = (props) => {
  let inst = props.CartBooks;
  let dispatch = useDispatch();
  return (
    <div className="shopping__cart">
      <div id="app">
        <div class="grid">
          {props.CartBooks.length > 0 ? (
            <div class="col-sx">
              <div class="products">
                <h2>Products</h2>
                <ul class="products-list">
                  {inst.map((i) => {
                    return (
                      <li class="product">
                        <div class="box">
                          <div class="image">
                            <img
                              src={i.i.volumeInfo.imageLinks.thumbnail}
                              alt=""
                            />
                          </div>
                          <h3 class="title">{i.i.volumeInfo.title}</h3>
                          <p class="price">${i.price}</p>
                          <p class="price">{i.count}</p>
                          <button
                            onClick={() => {
                              // dispatch(addCart(i.i));
                            }}
                          >
                            Add to cart
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
