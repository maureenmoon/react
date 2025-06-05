import React from "react";
import "./assets/style.scss";

function App() {
  return (
    <>
      <div className="container hd">
        <h1>
          <a href="#" className="nav-link">
            logo
          </a>
        </h1>
        <ul className="menu">
          <li>
            <a href="#" className="nav-link on">
              menu1
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              menu2
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              menu3
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              menu4
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              menu5
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
