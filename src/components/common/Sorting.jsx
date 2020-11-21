import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    maxWidth: 130,
  },
  select: {
    minWidth: 130,
  },
}));

export default function SortingHarry(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [Order, setOrder] = React.useState("");
  const [Number, setNumber] = React.useState("");
  const [Count, setCount] = React.useState("");
  const [touched, settouched] = React.useState(false);
  const handleOrder = (event) => {
    setOrder(event.target.dataset.value);
    settouched(true);
  };
  const handleNumber = (event) => {
    event.target.value = +event.target.value < 0 ? 1 : +event.target.value;
    event.target.value = +event.target.value === 0 ? 1 : +event.target.value;
    event.target.value = +event.target.value > 160 ? 160 : +event.target.value;
    let val = event.target.value;
    setNumber(val);
    settouched(true);
  };
  const handleCount = (event) => {
    event.target.value = +event.target.value < 0 ? 1 : +event.target.value;
    event.target.value = +event.target.value === 0 ? 1 : +event.target.value;
    event.target.value = +event.target.value > 40 ? 40 : +event.target.value;
    let val = event.target.value;
    setCount(val);
    settouched(true);
  };
  return (
    <div className="flexCenter">
      <div className="flexCenter">
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-textbox">
            Number of book
          </InputLabel>
          <BootstrapInput
            className={classes.input}
            onChange={handleNumber}
            type="number"
            max="5000"
            min="0"
            id="demo-customized-textbox"
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel id="demo-customized-select-label">Order by</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem onClick={handleOrder} value={"newest"}>
              newest
            </MenuItem>
            <MenuItem onClick={handleOrder} value={"relevance"}>
              relevance
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-textbox">
            Count of books
          </InputLabel>
          <BootstrapInput
            className={classes.input}
            onChange={handleCount}
            type="number"
            min="0"
            max="40"
            id="demo-customized-textbox"
          />
        </FormControl>
      </div>
      <div className="btn_sort_hp">
        <Button
          onClick={() => {
            props.addBooks(Order, Number, Count);
          }}
          variant="outlined"
          color="primary"
        >
          {touched ? <div>Set filters</div> : <div>Set default filters </div>}
        </Button>
      </div>
    </div>
  );
}
