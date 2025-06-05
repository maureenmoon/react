import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import PostListComp from "./components/PostListComp";
import ViewComp from "./components/ViewComp";
import CommentComp from "./components/CommentComp";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/list" element={<PostListComp />} />
      <Route path="/view/:id" element={<ViewComp />} />
      {/* <Route path="/comment/:id" element={<CommentComp />} /> */}
      <Route path="/view/:id/comment" element={<CommentComp />} />
    </Routes>
  );
}

export default App;
