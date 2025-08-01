import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import SearchPage from "../pages/search/SearchPage";
import CourseIndex from "../pages/course/CourseIndex";
import Login from "../pages/login/Login";
import courseRouter from "./courseRouter";
import loginRouter from "./loginrouter";
import ContentDetail from "../components/ContentDetail";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/course",
    element: <CourseIndex />,
    children: courseRouter(),
  },
  {
    path: "/login",
    element: <Login />,
    children: loginRouter(),
  },
  {
    // path: "/content/:contentid",
    path: "/content/:contentId",
    element: <ContentDetail />,
  },
]);

export default root;
