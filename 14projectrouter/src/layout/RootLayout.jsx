import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";

function RootLayout() {
  const locaiton = useLocation();
  const hideMenu =
    location.pathname === "/member/login" ||
    location.pathname === "/member/signup";

  return (
    <div className="container mx-auto">
      {!hideMenu && <Menu />}
      {/* login에서는 탑메뉴 빼자*/}
      <div className="border-1">
        <Outlet /> {/* children 레이아웃 만들기? */}
      </div>
    </div>
  );
}

export default RootLayout;
