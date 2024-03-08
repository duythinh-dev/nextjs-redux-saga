"use client";

import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../../../lib/action";

export default function CountNumbers() {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: { PostReducer: { count: number } }) => state.PostReducer
  );
  const handlePlus = () => dispatch(plus());
  const handleMinus = () => dispatch(minus());
  console.log("productList :", productList);

  return (
    <div>
      <h1>Number: {productList.count}</h1>
      <button onClick={() => handlePlus()}>Cộng</button> {"  "}
      <button onClick={() => handleMinus()}>Trừ</button>
    </div>
  );
}
