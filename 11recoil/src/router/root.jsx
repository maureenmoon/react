import { createBrowserRouter } from "react-router-dom";
import MainPageComp from "../pages/MainPageComp";
import PostIndexPageComp from "../pages/post/PostIndexPageComp";
import postRouter from "./postRouter";

const root = createBrowserRouter([
  {
    path: "/",
    element: <MainPageComp />,
  },
  {
    path: "/post",
    element: <PostIndexPageComp />,
    children: postRouter(),
  },
]);

export default root;
