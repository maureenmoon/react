import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavComp() {
  return (
    <div className="container m-auto bg-blue-300 flex justify-between p-4">
      <Link to="/">logo</Link>

      <div className="flex gap-3 navTop">
        {/* <Link to="/">Home</Link>
        <Link to="/list">LIST</Link>
        <Link to="/view/1">VIEW</Link>
        <Link to="/view/1/comment">댓글보기</Link> */}
        {/* NavLink 적용 */}
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/list">LIST</NavLink>
        {/* <NavLink to="/view/1">VIEW</NavLink> */}
        {/* <NavLink to="/view/1/comment">댓글보기</NavLink> */}
      </div>
    </div>
  );
}

export default NavComp;
