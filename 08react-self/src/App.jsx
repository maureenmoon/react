import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ListComp from "../../09react-image/src/components/ListComp";
import WriterComp from "../../09react-image/src/components/WriterComp";

function App() {
  return (
    <>
      <div className="container mx-auto flex justify-between py-4">
        <h1>
          <Link to="/">로고</Link>
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/write">글작성</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container ms-auto"></div>

      <Routes>
        <Route path="/" element={<ListComp />} />
        <Route path="/write" element={<WriterComp />} />
      </Routes>
    </>
  );
}

export default App;
