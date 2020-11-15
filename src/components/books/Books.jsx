import React from "react";
import Book from "./Book";
import s from "./books.module.css";
import { useEffect } from "react";
import { ButtonPlus } from "../common/ButtonPlus";
const Books = React.memo((props) => {
  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  useEffect(() => {}, []);
  return (
    <div>
      <div className={s.container}>
        {props.HarryPotter.map((i) => {
          return <Book key={i.id} i={i} price={Math.ceil(random(5, 100))} />;
        })}
      </div>
    </div>
  );
});
const mapStateToProps = (state) => {
  return {};
};
export default Books;
