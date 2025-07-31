import { Navigate } from "react-router-dom";
import About from "../pages/company/About";
import History from "../pages/company/History";

const companyRoutes = [
  {
    index: true,
    // elelment: <Navigate to="about" replace />,
    // elelment: <Navigate to="history" replace />,
    elelment: <About />,
  },
  {
    path: "about",
    elelment: <About />, //공통이 아닌, 독특한 구조 쓸 경우, children으로 작성. CRUD별 작성
  },
  {
    path: "history",
    elelment: <History />,
  },
];

export default companyRoutes;
