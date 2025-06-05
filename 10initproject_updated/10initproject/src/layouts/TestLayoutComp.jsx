import React from "react";
import BasicMenu from "./BasicMenu";

function TestLayoutComp({ children }) {
  return (
    <>
      <div className="bg-success">
        <BasicMenu />
      </div>
      <div className="h-[200px] bg-gray-300 flex justify-center items-center">
        test board 첫화면입니다
      </div>
      <div className="container mx-auto px-4 md:px-0">{children}</div>
    </>
  );
}

export default TestLayoutComp;
