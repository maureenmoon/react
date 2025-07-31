import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Signup = lazy(() => import("../pages/Signup"));
// Placeholder lazy imports for other pages
const Login = lazy(() => import("../pages/Login"));
const Mypage = lazy(() => import("../pages/Mypage"));
const Community = lazy(() => import("../pages/Community"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const FindNickname = lazy(() => import("../pages/FindNickname"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/find-nickname" element={<FindNickname />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
