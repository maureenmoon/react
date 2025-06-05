import { Navigate } from "react-router-dom";
import CourseList from "../pages/course/CourseList";
import CourseView from "../pages/course/CourseView";
import CourseWrite from "../pages/course/CourseWrite";
import CourseModi from "../pages/course/CourseModi";

const courseRouter = () => {
  return [
    {
      path: "list",
      element: <CourseList />,
    },
    {
      // "/course/list" course누르면 바로 list보이게
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      // path: "view/:testid/comment/:commentid", //link에도 반영해야함
      path: "view/:courseId",
      element: <CourseView />,
    },
    {
      path: "write",
      element: <CourseWrite />,
    },
    {
      path: "modi/:courseId",
      element: <CourseModi />,
    },
  ];
};

export default courseRouter;
