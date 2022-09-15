import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { decrement, increment } from "./reducer";

export default function Counter() {
  const value = useSelector<RootState>((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{value}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
