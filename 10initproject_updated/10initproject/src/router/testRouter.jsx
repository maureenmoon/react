import React from "react";
import TestListComp from "../pages/test/TestListComp";
import TestWriteComp from "../pages/test/TestWriteComp";
import { Navigate } from "react-router-dom";
import TestViewComp from "../pages/test/TestViewComp";
import TestModiComp from "../pages/test/TestModiComp";

function testRouter() {
  return [
    {
      path: "list",
      element: <TestListComp />,
    },
    // "/test/list" tour누르면 바로 listcomp보이게
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "write",
      element: <TestWriteComp />,
    },
    {
      // path: "view/:testid/comment/:commentid", //link에도 반영해야함
      path: "view/:testid", //link에도 반영해야함
      element: <TestViewComp />,
    },
    {
      path: "modi/:testid",
      element: <TestModiComp />,
    },
  ];
}

export default testRouter;
