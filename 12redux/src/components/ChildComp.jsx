import React from "react";
import { useSelector } from "react-redux";

function ChildComp() {
  const value = useSelector((state) => ({
    value: state.value,
    title: state.title,
  }));
  return;
  <div style={{ border: "1px solid #f00", padding: "10px" }}>
    ChildComp
    <div>{value}</div>
  </div>;
}

export default ChildComp;
