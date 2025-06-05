import React from "react";
import { Link } from "react-router-dom";

function BasicMenu() {
  return (
    <nav className="flex justify-between container mx-auto p-4">
      <h1>
        <Link to="/">Triplog</Link>
      </h1>
      <ul className="flex gap-3">
        <li>
          <Link to={"/"}>Search</Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={`
                ${
                  location.pathname.startsWith("/about") ? "text-blue-700" : ""
                }`}
          >
            About
          </Link>
        </li>
        <li className="relative group">
          <Link
            to={"/course"}
            className={`
                ${
                  location.pathname.startsWith("/course") ? "text-blue-700" : ""
                }`}
          >
            MyCourse
          </Link>
        </li>
        <div className="absolute hidden group-hover:block bg-blue-300 p-2 rounded w-[100px]">
          <span className="flex gap-3">
            <Link to={"/course/list"}>리스트</Link>
            <Link to={"/course/view"}>뷰</Link>
          </span>
        </div>
      </ul>
    </nav>
  );
}

export default BasicMenu;
