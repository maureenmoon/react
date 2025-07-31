import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

function App() {
  return <RouterProvider router={router} />; //depth여러개 일 경우, children사용
}

export default App;
