import React from "react";
import { Link } from "react-router-dom";

function BasicMenu() {
  return (
    <nav className="flex justify-between container mx-auto p-4">
      <h1>
        <Link to="/">Comp</Link>
      </h1>
      <ul className="flex gap-3">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={`${
              location.pathname.startsWith("/about") ? "text-blue-700" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className="relative group">
          <Link
            to={"/tour"}
            className={`${
              location.pathname.startsWith("/tour") ? "text-blue-700" : ""
            }`}
          >
            Tour
          </Link>
          <div className="absolute hidden group-hover:block bg-blue-300 p-2 rounded w-[100px] left-[-60px]">
            <span className="flex gap-3">
              <Link to="/tour/list">리스트</Link>
              <Link to="/tour/view">뷰우</Link>
            </span>
          </div>
        </li>
        <li className="relative group">
          <Link
            to={"/test"}
            className={`${
              location.pathname.startsWith("/test") ? "text-blue-700" : ""
            }`}
          >
            Test
          </Link>
          <div className="absolute hidden group-hover:block bg-blue-300 p-2 rounded w-[100px] left-[-60px]">
            <span className="flex gap-3">
              <Link to="/test/list">리스트</Link>
              <Link to="/test/write">작성</Link>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default BasicMenu;
