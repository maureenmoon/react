import React from "react";
import BasicMenu from "./BasicMenu";

function SubLayout({ children }) {
  return (
    <>
      <div className="bg-success">
        <BasicMenu />
      </div>
      <div className="h-[200px] bg-gray-300 flex justify-center items-cente">
        image
      </div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}

export default SubLayout;
