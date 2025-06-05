import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/list" element={<PostListComp />} />
      <Route path="/view/:id" element={<Comp />} />
      <Route path="/view/:id/comment" element={<Comp />} />
    </Routes>
  );
}

export default App;
