import React from "react";
import BasicMenuComp from "./BasicMenuComp";

function MainLayoutComp({ children }) {
  return (
    <>
      <div className="container m-auto bg-gray-200">
        <BasicMenuComp />
      </div>
      <div className="container m-auto">{children}</div>
      <div className="container m-auto">footer</div>
    </>
  );
}

export default MainLayoutComp;
