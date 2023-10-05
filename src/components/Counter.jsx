import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "../Redux/Actions/Actions";

export const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(Increment());
  };

  const onDecrement = () => {
    dispatch(Decrement());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      {"  "}
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
};
