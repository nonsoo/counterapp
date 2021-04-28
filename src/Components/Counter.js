import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/ducks/counter";

const Counter = () => {
  //useSelector allows us to access variable that are in our redux store
  //first need to access the reducer that the varible is inside of therefore
  //state.counter
  //then access the actual variable therefore state.counter.count
  const count = useSelector((state) => state.counter.count);

  //The dispatch is goign to async send an action to the redux store which is
  //going to dispatch an action that the reducer has
  const dispatch = useDispatch();

  const doIncrement = () => {
    dispatch(increment());
  };

  const doDecrement = () => {
    dispatch(decrement());
  };
  const doResetCount = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p className="Counter">The count is: {count}</p>
      <div className="BtnContainer">
        <button className="btnStyle" onClick={doIncrement}>
          Increment
        </button>
        <button className="btnStyle" onClick={doDecrement}>
          Decrement
        </button>
        <button className="btnStyle" onClick={doResetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
