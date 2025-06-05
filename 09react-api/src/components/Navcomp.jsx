import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navcomp() {
  return (
    <div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/list">LIST</NavLink>
      <Link to="/view/1">View</Link>
      <Link to="/view/1/comment">View</Link>
    </div>
  );
}

export default Navcomp;
