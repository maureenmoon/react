import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterComp() {
  const { value, title } = useSelector((state) => ({
    // return
    value: state.value,
    title: state.title,
  }));

  const dispatch = useDispatch();

  function addHandler() {
    dispatch({ type: "add", payload: 1 });
  }
  function deductHandler() {
    dispatch({ type: "deduct", payload: 1 });
  }

  return (
    <div style={{ border: "1px solid #f00", padding: "10px" }}>
      카운더입니다
      <div>
        count : {value}/ title : {title}
      </div>
      <button onClick={addHandler}>증가</button>
      <button onClick={deductHandler}>감소</button>
    </div>
  );
}

export default CounterComp;
