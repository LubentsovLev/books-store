import React from "react";
import { useEffect } from "react";
import Books from "./Books";
import s from "./books.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addBooks,
  Pushkin,
  Shakespeare,
  GameOfThrones,
  Sherlock,
  Search,
} from "../../redux/books_reducer";
import Loader from "../common/loader";
const BooksContainer = React.memo((props) => {
  let dispatch = useDispatch();
  const HarryPotter = useSelector((state) => state.books.books);
  const isFetching = useSelector((state) => state.books.isFetching);
  const menuType = useSelector((state) => state.books.menuType);
  const search = useSelector((state) => state.books.search);
  const [on1, setOn1] = React.useState(false);
  const [on2, setOn2] = React.useState(false);

  // const [Mtype, setMtype] = React.useState();
  // let thAll = [addBooks, Pushkin, Shakespeare, GameOfThrones, Sherlock];
  // let checkMenuType = (menuType) => {
  //   for (let i = 0; i < thAll.length; i++) {
  //     if (menuType === thAll[i]) {
  //       setMtype(thAll[i]);
  //     }
  //   }
  // };
  let chMenu = (Order, Number, Count) => {
    switch (props.loc) {
      case "HarryPotter": {
        return dispatch(addBooks(Order, Number, Count));
      }
      case "": {
        return dispatch(addBooks(Order, Number, Count));
      }
      case "Pushkin": {
        return dispatch(Pushkin(Order, Number, Count));
      }
      case "Shakespeare": {
        return dispatch(Shakespeare(Order, Number, Count));
      }
      case "GameOfThrones": {
        return dispatch(GameOfThrones(Order, Number, Count));
      }
      case "Sherlock": {
        return dispatch(Sherlock(Order, Number, Count));
      }
      case "Search": {
        return dispatch(Search(search, Order, Number, Count));
      }
      default:
      // debugger;
      // return dispatch(addBooks(Order, Number, Count));
    }
  };
  useEffect(() => {
    chMenu();
    // dispatch(addBooks());
  }, [props.loc]);
  useEffect(() => {
  }, [HarryPotter, isFetching, menuType, search]);
  return (
    <div className="">
      {isFetching ? (
        <Loader></Loader>
      ) : (
        <Books addBooks={chMenu} HarryPotter={HarryPotter}></Books>
      )}
    </div>
  );
});
export default BooksContainer;
// export default compose(connect(mapStateToProps, { addBooks }))(Books);
