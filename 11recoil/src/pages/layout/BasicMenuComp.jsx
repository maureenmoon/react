import React from "react";
import { Link } from "react-router-dom";

function BasicMenuComp() {
  return (
    <div className="flex justify-between p-4">
      <h1> logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/post">POST</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BasicMenuComp;
