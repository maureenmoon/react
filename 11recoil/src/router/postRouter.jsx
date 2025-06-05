import { Navigate } from "react-router-dom";
import PostListPageComp from "../pages/post/PostListPageComp";

function postRouter() {
  return [
    {
      path: "list",
      element: <PostListPageComp />,
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
  ];
}

export default postRouter;
