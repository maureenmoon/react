import React from "react";
import BasicMenu from "./BasicMenu";

function MainLayout({ children }) {
  return (
    <>
      <div className="bg-success">
        <BasicMenu />
      </div>
      {/* <div className="text-txl">main-page</div> */}
      {/* slide section */}
      <div className="h-[300px] bg-gray-100">swiper</div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}

export default MainLayout;
