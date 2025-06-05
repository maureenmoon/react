import React from "react";
import NavComp from "./NavComp";
import SlideComp from "./SlideComp";
import FooterComp from "./FooterComp";

function HomeComp() {
  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <SlideComp />
      </div>
      <div>
        <FooterComp />
      </div>
    </>
  );
}

export default HomeComp;
