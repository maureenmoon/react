import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import companyRoutes from "./companyRoutes";
import memberRoutes from "./memberRoutes";
// import About from "../pages/company/About";
// import History from "../pages/company/History";

const root = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 공통 comp 붙일때. pages에 있는 구성요소: 네비게이션메뉴(Menu), home(Outlet)
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path:'/about',
  //   element:<About /> //pages/About에 대해 여기에 작성
  // },
  // {
  // path: "/about",
  // element: <About />,
  // children: [
  // {
  //   path: "about",
  //   elelment: <About />, //공통이 아닌, 독특한 구조 쓸 경우, children으로 작성. CRUD별 작성
  // },
  // {
  //   path: "history",
  //   elelment: <History />,
  // },
  // ],
  // }
  {
    path: "/company",
    element: <RootLayout />, //layout 작성
    children: companyRoutes,
  },
  {
    path: "/member",
    element: <RootLayout />,
    children: memberRoutes,
  },
]);

export default root;
