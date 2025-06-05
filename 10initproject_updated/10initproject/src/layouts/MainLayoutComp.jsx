import React from "react";
import BasicMenu from "./BasicMenu";

function MainLayoutComp({ children }) {
  return (
    <>
      <div className="bg-success">
        <BasicMenu />
      </div>
      <div className="h-[300px] bg-gray-300">swiper</div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}

export default MainLayoutComp;
