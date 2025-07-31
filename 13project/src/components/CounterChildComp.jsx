import React from "react";
import { useSelector } from "react-redux";

function CounterChildComp() {
  const email = useSelector((state) => state.email);
  const num = useSelector((state) => state.value);
  return (
    <div className="border-1 p-3">
      counterChildComp
      <p>/{num}</p>
    </div>
  );
}

export default CounterChildComp;
