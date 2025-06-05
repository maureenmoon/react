import { Navigate } from "react-router-dom";
import ListPageComp from "../pages/tour/ListPageComp";
import ViewPageComp from "../pages/tour/ViewPageComp";

const tourRouter = () => {
  return [
    {
      path: "list",
      element: <ListPageComp />,
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "view",
      element: <ViewPageComp />,
    },
  ];
};

export default tourRouter;
