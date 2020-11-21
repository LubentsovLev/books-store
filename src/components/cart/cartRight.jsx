import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./cartRight.scss";
import { Field, reduxForm } from "redux-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
  },
}));

export default function CartRight(props) {
  const classes = useStyles();
  const CartAdressFormSub = (values) => {
    console.log(values);
  };
  const [ChCode, setChCode] = React.useState("");
  const CartCodeFormSub = (values) => {
    if (values.Code !== "TheBest20") {
      setChCode("Not");
    } else {
      setChCode("yes");
    }
    console.log(values);
  };
  return (
    <div className="mainCartR">
      <div className="top sec">
        <p>Have got promo?</p>
        <CodeReduxForm ChCode={ChCode} onSubmit={CartCodeFormSub} />
      </div>
      {/* <Button variant="outlined">apply promo code</Button> */}
      <div className="prices sec">
        <p>
          <b>Order cost :</b> <span>{props.AllthePr}$</span>
        </p>
        <p>
          <b> Delivery :</b> <span>{"50"}$</span>
        </p>
      </div>
      <hr />
      <div className="total">
        <p>
          <strong>Total price :</strong> <span>{props.AllthePr + 50}$ </span>
        </p>
      </div>
      <CartReduxForm onSubmit={CartAdressFormSub} />
      <div className="pay sec">
        <strong>ways of payment : </strong>
        <p>Cash payment</p>
        <p>Card payment</p>
      </div>
      <div className="footer sec">
        <p>30-day return period, return and refund fees for unshipped items</p>
      </div>
    </div>
  );
}
let cartFrom = (props) => {
  return (
    <form className="address" onSubmit={props.handleSubmit}>
      {/* <TextField id="filled-basic" label="Country"  />
            <TextField id="filled-basic" label="City"  />
            <TextField id="filled-basic" label="Postal code" /> */}
      <Field
        className=""
        name="fullName"
        placeholder="Country"
        component="input"
        required
      ></Field>
      <Field
        className=""
        name="City"
        placeholder="City"
        component="input"
        required
      ></Field>
      <Field
        className=""
        name="Postal_code"
        placeholder="Postal code"
        component="input"
        required
      ></Field>
      <button variant="outlined">Checkout</button>
    </form>
  );
};
const CartReduxForm = reduxForm({
  form: "cartAdressFrom",
})(cartFrom);
let CodeForm = (props) => {
  return (
    <form className="address" onSubmit={props.handleSubmit}>
      {/* <TextField id="standard-basic" error={false} label="enter code" /> */}
      {props.ChCode === "Not" ? (
        <p className="errorP">It's not that code (sorry)</p>
      ) : props.ChCode === "yes" ? (
        <p className="winP">It's that code u've got 20% discount congrats )</p>
      ) : null}
      {props.ChCode === "yes" ? null : (
        <>
          <Field
            className={
              props.ChCode === "Not"
                ? "errorCode"
                : props.ChCode === "yes"
                ? "winCode"
                : ""
            }
            name="Code"
            placeholder={
              props.ChCode === "Not" ? "enter working code" : "enter code"
            }
            component="input"
            required
          ></Field>
          <button variant="outlined">apply promo code</button>
        </>
      )}
    </form>
  );
};
const CodeReduxForm = reduxForm({
  form: "cartCodeFrom",
})(CodeForm);
