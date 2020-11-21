import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLyrics } from "../../redux/genius_reducer";
import MainCard from "./MenuCard";
import s from "./main.module.scss";
import { Field, reduxForm } from "redux-form";
import Loader from "../common/loader";

export let Main = (props) => {
  let dispath = useDispatch();
  const CartBooks = useSelector((state) => state.genius.lyrics);
  const isFetching = useSelector((state) => state.genius.isFetching);
  const query = useSelector((state) => state.genius.query);
  React.useEffect(() => {}, [CartBooks, isFetching, query]);
  React.useEffect(() => {
    dispath(addLyrics("Monster"));
  }, []);
  const GenOnSub = (values) => {
    console.log(values);
    dispath(addLyrics(values.Genius));
  };
  return (
    <div className={s.main}>
      <div className="flexCenter">
        <GeniusReduxForm onSubmit={GenOnSub} />
      </div>
      <div className="flexCenter">
        <b className={s.wh}> searching for </b><span className={s.title}>{query}</span>
      </div>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="flexCenter">
          {CartBooks.hits
            ? CartBooks.hits.map((i) => {
                let inst = i.result;
                return (
                  <div className="">
                    <MainCard inst={inst} />
                  </div>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};
let GeniusForm = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <Field
        className={s.input}
        name="Genius"
        placeholder="song or artist"
        component="input"
        required
      ></Field>
      <button className={s.btn}>Search for the song</button>
    </form>
  );
};
const GeniusReduxForm = reduxForm({
  form: "GeniusFrom",
})(GeniusForm);
