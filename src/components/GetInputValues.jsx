import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetValue } from "../Redux/Actions/Actions";

export const GetInputValues = () => {
  const inputValue = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const change = (e) => {
    dispatch(GetValue(e.target.value));
  };
  return (
    <div>
      <input type="text" onChange={change} />
      <h1>{inputValue}</h1>
    </div>
  );
};
