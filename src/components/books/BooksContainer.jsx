import React from "react";
import { useEffect } from "react";
import Books from "./Books";
import s from "./books.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { addBooks, setBooks } from "../../redux/books_reducer";
import Loader from "../common/loader";
const BooksContainer = React.memo((props) => {
  let dispatch = useDispatch();
  const HarryPotter = useSelector((state) => state.books.books);
  const isFetching = useSelector((state) => state.books.isFetching);
  useEffect(() => {
    dispatch(addBooks());
  }, []);
  useEffect(() => {}, [HarryPotter, isFetching]);
  return (
    <div className="">
      {isFetching ? (
        <Loader></Loader>
      ) : (
        <Books addBooks={addBooks} HarryPotter={HarryPotter}></Books>
      )}
    </div>
  );
});
export default BooksContainer;
// export default compose(connect(mapStateToProps, { addBooks }))(Books);
